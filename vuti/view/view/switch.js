!function(t){var s={};function e(a){if(s[a])return s[a].exports;var r=s[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=s,e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)e.d(a,r,function(s){return t[s]}.bind(null,r));return a},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=115)}({0:function(t,s,e){"use strict";function a(t,s,e,a,r,n,l,_){var v,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=e,p._compiled=!0),a&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),l?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},p._ssrRegister=v):r&&(v=_?function(){r.call(this,this.$root.$options.shadowRoot)}:r),v)if(p.functional){p._injectStyles=v;var c=p.render;p.render=function(t,s){return v.call(s),c(t,s)}}else{var i=p.beforeCreate;p.beforeCreate=i?[].concat(i,v):[v]}return{exports:t,options:p}}e.d(s,"a",function(){return a})},115:function(t,s,e){var a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},r=e(127);window.__pages=a({},window.__pages,{"view/view/switch":r})},127:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("switch开关组件")]),t._v(" "),e("p",[t._v("集成3中开关样式")]),t._v(" "),e("h2",[t._v("使用方式")]),t._v(" "),t._m(0),t._v(" "),e("switch-demo-1",{ref:"switch-demo-1"}),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("参数")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(3)],1)};a._withStripped=!0;var r={components:{"switch-demo-1":{template:'\n<example>\n  <t-cell title="默认开关">\n    <t-switch v-model="open"></t-switch>\n  </t-cell>\n  <t-cell title="radio开关">\n    <t-switch v-model="open" type="radio"></t-switch>\n  </t-cell>\n  <t-cell title="checkbox开关">\n    <t-switch v-model="open" type="checkbox"></t-switch>\n  </t-cell>\n</example>\n',data:function(){return{open:!1}}}}},n=e(0),l=Object(n.a)(r,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("v-model绑定开关状态")]),this._v(" "),s("li",[this._v("type属性决定开关类型")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"默认开关"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"radio开关"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"radio"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"checkbox开关"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"checkbox"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-switch")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    }\n  } \n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- switch-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("v-model")]),t._v(" "),e("td",[t._v("绑定开关")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("[normal, radio, checkbox]")]),t._v(" "),e("td",[t._v("normal")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("参数")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("click")]),this._v(" "),s("td",[this._v("开关被点击")])])])])}],!1,null,null,null);l.options.__file="src/modules/view/view/switch/index.md";s.default=l.exports}});