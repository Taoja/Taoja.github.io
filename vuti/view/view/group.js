!function(t){var s={};function e(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=s,e.d=function(t,s,r){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(r,n,function(s){return t[s]}.bind(null,n));return r},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=80)}({0:function(t,s,e){"use strict";function r(t,s,e,r,n,a,l,p){var _,v="function"==typeof t?t.options:t;if(s&&(v.render=s,v.staticRenderFns=e,v._compiled=!0),r&&(v.functional=!0),a&&(v._scopeId="data-v-"+a),l?(_=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},v._ssrRegister=_):n&&(_=p?function(){n.call(this,this.$root.$options.shadowRoot)}:n),_)if(v.functional){v._injectStyles=_;var c=v.render;v.render=function(t,s){return _.call(s),c(t,s)}}else{var o=v.beforeCreate;v.beforeCreate=o?[].concat(o,_):[_]}return{exports:t,options:v}}e.d(s,"a",function(){return r})},188:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("group表单组组件")]),t._v(" "),e("p",[t._v("用于分隔不同cell表单组")]),t._v(" "),e("h2",[t._v("使用方式")]),t._v(" "),e("group-demo-1",{ref:"group-demo-1"}),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("参数")]),t._v(" "),t._m(1)],1)};r._withStripped=!0;var n={components:{"group-demo-1":{template:'<example>\n  <t-group title="基础信息">\n    <t-cell-input title="姓名"></t-cell-input>\n    <t-cell-input title="身份证"></t-cell-input>\n  </t-group>\n  <t-group title="其他信息">\n    <t-cell-input title="住址"></t-cell-input>\n    <t-cell-input title="性别"></t-cell-input>\n  </t-group>\n</example>\n\x3c!-- group-demo-1.vue --\x3e'}}},a=e(0),l=Object(a.a)(n,r,[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-group")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基础信息"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"姓名"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"身份证"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-group")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-group")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"其他信息"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"住址"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"性别"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-group")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- group-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("枚举值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])])])])}],!1,null,null,null);l.options.__file="src/modules/view/view/group/index.md";s.default=l.exports},80:function(t,s,e){var r=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n=e(188);window.__pages=r({},window.__pages,{"view/view/group":n})}});