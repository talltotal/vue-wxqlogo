(function(e){function t(t){for(var n,c,a=t[0],l=t[1],s=t[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={index:0},i=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-wxqlogo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("c512")},"265d":function(e,t,o){e.exports=o.p+"img/1.a95bccf0.svg"},"3f17":function(e,t,o){e.exports=o.p+"img/6.6fdba5f8.svg"},"42a7":function(e,t,o){e.exports=o.p+"img/5.30955e63.svg"},"438f":function(e,t,o){e.exports=o.p+"img/3.027f766d.svg"},"48be":function(e,t,o){e.exports=o.p+"img/2.aae7979f.svg"},7937:function(e,t,o){},8776:function(e,t,o){e.exports=o.p+"img/4.8b9c55ec.svg"},b635:function(e,t){function o(e){return null!==e&&"object"===typeof e}function n(e){let t,n=e;return o(e)&&(n=e.src,t=e.key),{src:n,key:t}}const r={};function i(e,t=(()=>{}),o=(()=>{})){return new Promise((n,i)=>{const c=(...e)=>{t(...e),n(...e)},a=()=>{o(),i()},l=r[e];if(l)-1===l?a():c(l);else{var s=new window.XMLHttpRequest;s.open("GET",e.replace(/https?:\/\//,`${window.location.protocol}//`),!0),s.responseType="blob",s.onload=function(){var t=this.getResponseHeader("last-modified"),o=s.response.size;if("Mon, 01 Jan 1990 00:00:00 GMT"!==t&&o){const t=window.URL.createObjectURL(s.response);c(t),r[e]=t}else a(),r[e]=-1},s.send()}})}e.exports={install(e,{loadingImg:t,defaultImg:o}={}){const r="function"===typeof o?o:()=>o,c=(e,o,n=(()=>{}))=>{const c=r(o)||t;return e&&e.match(/https?:\/\/(third)?wx\.qlogo\.cn/)?(n(t,"loading"),i(e).then(t=>{return n(t||e),Promise.resolve(t||e)}).catch(()=>{return n(c,"error"),Promise.resolve(c)})):(n(e||c,!e&&"error"),e||c)},a=(e,t)=>{const{src:o,key:r}=n(t.value),i=`${o}~${r}`;e.__wxqlogo_key!==i&&(e.__wxqlogo_key=i,c(o,r,(t,o)=>{o?e.setAttribute("wxqlogo",o):e.removeAttribute("wxqlogo");const n=e.getAttribute("src");n&&"loading"===o||e.setAttribute("src",t)}))};e.prototype.$loadWxqlogo=c,e.directive("wxqlogo",{bind:a,update:a})}}},c4de:function(e,t,o){e.exports=o.p+"img/loading.0505251f.svg"},c512:function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),r=o("b635"),i=o.n(r),c=o("caf9"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("h4",[e._v("UPDATE")]),o("img",{directives:[{name:"wxqlogo",rawName:"v-wxqlogo",value:e.logo,expression:"logo"}]}),o("h4",[e._v("LAZYLOAD")]),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0",expression:"'http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0'"}]}),e._l(20,(function(e){return[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132",expression:"'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132'"}],key:e})]})),o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0",expression:"'http://wx.qlogo.cn/mmopen/28c9BREWQGib9AFTicicERnYkfOicL5VCjKFTRwRdehoeTSAXBOcHoibY0xlJzkGSru8ichGe3JSnhILWBbCVC2Pf5ZNiaib9319m7Oa/0'"}]})],2)},l=[];const s=["http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJGuGn0prXGbibFeCicxsg53sjYiaHbC2o1KWjaC7ET9DFd4OiawDP19moMmNtOwkWn3JHdTHsAMVTPFQ/132","http://wx.qlogo.cn/mmopen/vi_32/xHJicibcyGQ7ABUuGxcbl5dh3OKImxkHQTmx7wvlHGRoxw2SDvsp03kwibATma8dhd0AdPREnfGIEGKYKPH5j16vg/132"];var u={name:"App",data(){return{logo:s[0]}},created(){let e=0;this.i=setInterval(()=>{this.logo=s[++e%2],e>=20&&(e=0)},1e3)},beforeDestroy(){clearInterval(this.i)}},p=u,f=(o("e5b8"),o("2877")),d=Object(f["a"])(p,a,l,!1,null,null,null),b=d.exports;function g(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}n["a"].use(i.a,{loadingImg:o("c4de"),defaultImg(e){return[o("265d"),o("48be"),o("438f"),o("8776"),o("42a7"),o("3f17")][e?Number(e)%6:g(0,5)]}}),n["a"].use(c["a"],{loading:o("c4de"),adapter:{async loaded({el:e,src:t}){const o=await n["a"].prototype.$loadWxqlogo(t,void 0);e.setAttribute("src",o)}}});t["default"]=new n["a"]({el:"#app",render:e=>e(b)})},e5b8:function(e,t,o){"use strict";var n=o("7937"),r=o.n(n);r.a}});
//# sourceMappingURL=index.c9af8b21.js.map