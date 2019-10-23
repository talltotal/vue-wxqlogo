function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function valueFormatter (value) {
  let src = value
  let key
  if (isObject(value)) {
    src = value.src
    key = value.key
  }

  return {
    src,
    key
  }
}

// fix: 重复请求
const store = {}
function loadImg (imagePath, successFn = () => {}, errorFn = () => {}) {
  return new Promise((resolve, reject) => {
    const success = (...args) => {
      successFn(...args)
      resolve(...args)
    }
    const error = () => {
      errorFn()
      /* eslint-disable-next-line prefer-promise-reject-errors */
      reject()
    }

    const s = store[imagePath]
    if (s) {
      s === -1 ? error() : success(s)
      return
    }

    var xhr = new window.XMLHttpRequest()
    xhr.open('GET', imagePath.replace(/https?:\/\//, `${window.location.protocol}//`), true)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      var desc = this.getResponseHeader('last-modified')
      // fix: 个别头像返回空数据
      var len = xhr.response.size
      if (desc !== 'Mon, 01 Jan 1990 00:00:00 GMT' && len) {
        // fix: 微信接口前后两次得到的结果可能不同，取此次的
        const result = window.URL.createObjectURL(xhr.response)
        success(result)
        store[imagePath] = result
      } else {
        error()
        store[imagePath] = -1
      }
    }
    xhr.send()
  })
}

module.exports = {
  install (Vue, { loadingImg, defaultImg } = {}) {
    const defaultImgFn = typeof defaultImg === 'function' ? defaultImg : () => defaultImg
    const loadWxqlogo = (src, key, callback = () => {}) => {
      const errorImg = defaultImgFn(key) || loadingImg

      if (src && src.match(/https?:\/\/(third)?wx\.qlogo\.cn/)) {
        callback(loadingImg, 'loading')

        return loadImg(src).then(srcData => {
          callback(srcData || src)
          return Promise.resolve(srcData || src)
        }).catch(() => {
          callback(errorImg, 'error')
          return Promise.resolve(errorImg)
        })
      } else {
        callback(src || errorImg, !src && 'error')
        return src || errorImg
      }
    }
    const bind = (el, binding) => {
      const { src, key } = valueFormatter(binding.value)
      const elKey = `${src}~${key}`
      if (el.__wxqlogo_key === elKey) return
      el.__wxqlogo_key = elKey

      loadWxqlogo(src, key, (result, status) => {
        if (status) {
          el.setAttribute('wxqlogo', status)
        } else {
          el.removeAttribute('wxqlogo')
        }

        // fix: update 时的 loading 样式闪烁
        const preSrc = el.getAttribute('src')
        if (preSrc && status === 'loading') {
          return
        }
        el.setAttribute('src', result)
      })
    }

    Vue.prototype.$loadWxqlogo = loadWxqlogo

    Vue.directive('wxqlogo', {
      bind: bind,
      update: bind
    })
  }
}
