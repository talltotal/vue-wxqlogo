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

function loadImg (imagePath, success, error) {
  var xhr = new window.XMLHttpRequest()
  xhr.open('GET', imagePath.replace(/https?:\/\//, `${window.location.protocol}//`), true)

  xhr.onload = function () {
    var desc = this.getResponseHeader('last-modified')
    if (desc !== 'Mon, 01 Jan 1990 00:00:00 GMT') {
      success && success()
    } else {
      error && error()
    }
  }
  xhr.send()
}

module.exports = {
  install (Vue, { loadingImg, defaultImg } = {}) {
    const defaultImgFn = typeof defaultImg === 'function' ? defaultImg : () => defaultImg
    const loadWxqlogo = (src, key, callback) => {
      const errorImg = defaultImgFn(key) || loadingImg

      if (src && src.match(/https?:\/\/thirdwx\.qlogo\.cn/)) {
        callback(loadingImg, 'loading')

        loadImg(src, () => {
          callback(src)
        }, () => {
          callback(errorImg, 'error')
        })
      } else {
        callback(src || errorImg, !src && 'error')
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
