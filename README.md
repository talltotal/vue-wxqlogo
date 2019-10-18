# vue-wxqlogo

微信头像“暂时无法查看”异常处理。
[demo](https://talltotal.github.io/vue-wxqlogo/)

## Installation

```bash
$ npm install vue-wxqlogo
```

OR

```bash
$ yarn add vue-wxqlogo
```


## Usage

main.js:
```js
import Vue from 'Vue'
import VueWxQlogo from 'vue-wxqlogo'
import VueLazyload from 'vue-lazyload'

/**
 * options:
 * 1. loadingImg | <string>
 * 2. defaultImg | <string|(key: any)=>string>
 */
Vue.use(VueWxQlogo, {
  loadingImg: require('@/assets/imgs/loading'),
  defaultImg (key) {
    return [
      require('@/assets/imgs/logo/1.png'),
      require('@/assets/imgs/logo/2.png'),
      require('@/assets/imgs/logo/3.png'),
    ][Number(key) % 3]
  }
})
/**
 * wxqlogo in VueLazyload
 */
Vue.use(VueLazyload, {
  ...lazyOptions,
  adapter: {
    loaded ({ el, src }) {
      /**
       * Vue.prototype.$loadWxqlogo
       * 1. src | <string>
       * 2. key | <any>
       * 3. handler | <(result: string)=>void>
       */
      Vue.prototype.$loadWxqlogo(src, key, (result) => {
        el.setAttribute('src', result)
      })
    }
  }
})
```

template:
```html
<div>
  <!-- string -->
  <img v-wxqlogo="img.src" >
  <!-- { src: string, key: any } -->
  <img v-wxqlogo="{
      src: img.src,
      key: userId
    }" >
  <img v-lazy="img.src" >
</div>
```



