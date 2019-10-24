import Vue from 'vue'
import VueWxQlogo from '../index.js'
import VueLazyload from 'vue-lazyload'
import App from './app.vue'

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

Vue.use(VueWxQlogo, {
  loadingImg: require('./imgs/loading.svg'),
  defaultImg (key) {
    return [
      require('./imgs/1.svg'),
      require('./imgs/2.svg'),
      require('./imgs/3.svg'),
      require('./imgs/4.svg'),
      require('./imgs/5.svg'),
      require('./imgs/6.svg')
    ][key ? Number(key) % 6 : getRandomInt(0, 5)]
  }
})
/**
   * wxqlogo in VueLazyload
   */
Vue.use(VueLazyload, {
  loading: require('./imgs/loading.svg'),
  adapter: {
    async loaded ({ el, src }) {
      /**
         * Vue.prototype.$loadWxqlogo
         * 1. src | <string>
         * 2. key | <any>
         * 3. handler | <(result: string)=>void>
         */
      // Vue.prototype.$loadWxqlogo(src, undefined, (result) => {
      //   el.setAttribute('src', result)
      // })
      const result = await Vue.prototype.$loadWxqlogo(src, undefined)
      el.setAttribute('src', result)
    }
  }
})

/* eslint-disable-next-line no-new */
export default new Vue({
  el: '#app',
  render: h => h(App)
})
