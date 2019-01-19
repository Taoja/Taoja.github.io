!function(t){var s={};function e(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=s,e.d=function(t,s,r){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(r,n,function(s){return t[s]}.bind(null,n));return r},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=35)}({0:function(t,s,e){"use strict";function r(t,s,e,r,n,a,o,i){var v,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=e,p._compiled=!0),r&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),o?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},p._ssrRegister=v):n&&(v=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),v)if(p.functional){p._injectStyles=v;var l=p.render;p.render=function(t,s){return v.call(s),l(t,s)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,v):[v]}return{exports:t,options:p}}e.d(s,"a",function(){return r})},162:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)},n=[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("section",[r("p",{attrs:{align:"center"}},[r("img",{attrs:{width:"200",src:e(36)}})]),t._v(" "),r("p",{attrs:{align:"center"}},[r("a",{attrs:{href:"https://npmcharts.com/compare/vuti?minimal=true"}},[r("img",{attrs:{src:"https://img.shields.io/npm/dm/vuti.svg",alt:"Downloads"}})]),t._v(" "),r("a",{attrs:{href:"https://www.npmjs.com/package/vuti"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/vuti.svg",alt:"Version"}})]),t._v(" "),r("a",{attrs:{href:"https://www.npmjs.com/package/vuti"}},[r("img",{attrs:{src:"https://img.shields.io/npm/l/vuti.svg",alt:"License"}})])]),t._v("\nvuti是一套基于vmin、var、calc等css3新特性的UI框架。通过变量复用、计算属性实现组件变量化。\n"),r("h2",[t._v("特点")]),t._v(" "),r("ul",[r("li",[t._v("高扩展性：通过修改css3全局变量，组件局部变量来达到变更主题风格。")]),t._v(" "),r("li",[t._v("轻量：摒弃通过css扩展语言，组件主体使用标准js写法，减少代码编译成本。")]),t._v(" "),r("li",[t._v("插件化：组件事件、参数上升，注册时可自定义组件事件与参数。")]),t._v(" "),r("li",[t._v("风格统一：组件通过一套规范化、变量化属性组成。")])]),t._v(" "),r("h2",[t._v("安装")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm run install vuti --save\n")])]),t._v(" "),r("h2",[t._v("使用")]),t._v(" "),r("p",[t._v("在工程入口引入vuti")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" vuti "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vuti'")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { plugins } "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vuti'")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/** \n * 可使用插件模式调用组件\n */")]),t._v("\nVue.use(plugins)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("/** \n * vuti.set设置全局变量\n */")]),t._v("\nvuti.set({\n  "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'--color-t1'")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v(",\n  ...\n})\n")])]),t._v(" "),r("p",[t._v("在页面引入vuti")]),t._v(" "),r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { tCell, vPopup "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("as")]),t._v(" tPopup } "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vuti'")]),t._v("\n\n...,\n  "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": {\n    tCell,\n    vPopup\n  },\n...\n")])]),t._v(" "),r("h2",[t._v("文档与demo")]),t._v(" "),r("p",[t._v("使用文档请"),r("a",{attrs:{href:"https://taoja.github.io/vuti"}},[t._v("访问")]),t._v(", demo请"),r("a",{attrs:{href:"https://taoja.github.io/vuti"}},[t._v("访问")])]),t._v(" "),r("h2",[t._v("Github")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Taoja/vuti"}},[t._v("源码")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Taoja/vuti/issures"}},[t._v("issures")])])]),t._v(" "),r("h2",[t._v(".babelrc")]),t._v(" "),r("p",[t._v("babel配置文件，更多配置信息"),r("a",{attrs:{href:"https://github.com/babel/babel"}},[t._v("babel.js")])])])}];r._withStripped=!0;var a={components:{}},o=e(0),i=Object(o.a)(a,r,n,!1,null,null,null);i.options.__file="README.md";s.default=i.exports},35:function(t,s,e){var r=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n=e(162);window.__pages=r({},window.__pages,{"base/base/action":n})},36:function(t,s,e){t.exports=e.p+"static/assets/logo-5751d065e3c2f79e3e56983f9549ada1.png"}});