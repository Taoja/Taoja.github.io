!function(t){var s={};function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="",r(r.s=52)}({0:function(t,s,r){"use strict";function a(t,s,r,a,e,n,l,_){var v,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=r,p._compiled=!0),a&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),l?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},p._ssrRegister=v):e&&(v=_?function(){e.call(this,this.$root.$options.shadowRoot)}:e),v)if(p.functional){p._injectStyles=v;var c=p.render;p.render=function(t,s){return v.call(s),c(t,s)}}else{var i=p.beforeCreate;p.beforeCreate=i?[].concat(i,v):[v]}return{exports:t,options:p}}r.d(s,"a",function(){return a})},151:function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("section",[r("h1",[t._v("grid宫格组件")]),t._v(" "),r("p",[t._v("宫格组件作用于后端配置的页面。通过接口返回字段的变化渲染不同页面")]),t._v(" "),r("h2",[t._v("使用方式")]),t._v(" "),r("grid-demo-1",{ref:"grid-demo-1"}),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("参数")]),t._v(" "),t._m(1),t._v(" "),r("h2",[t._v("事件")]),t._v(" "),t._m(2)],1)};a._withStripped=!0;var e=r(4),n=r.n(e),l={components:{"grid-demo-1":{template:'\n<example>\n  <t-grid :data="data" @click="click"></t-grid>\n  <t-grid :data="data" @click="click"></t-grid>\n</example>\n',data:function(){return{data:[{src:n.a,text:1},{src:n.a,text:2},{src:n.a,text:3},{src:n.a,text:4}]}},methods:{click:function(t){this.$dialog({title:"点击了",text:t.text})}}}}},_=r(0),v=Object(_.a)(l,a,[function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-grid")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"data"')]),t._v(" @"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-grid")]),t._v(">")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-grid")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"data"')]),t._v(" @"),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(">")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-grid")]),t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" src2 "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@a/turbo.png'")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src2,\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v("\n          },\n          {\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src2,\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2")]),t._v("\n          },\n          {\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src2,\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("3")]),t._v("\n          },\n          {\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src2,\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v("\n          },\n        ]\n      }\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      click(e) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'点击了'")]),t._v(",\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": e.text\n        })\n      }\n    }\n  } \n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- grid-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("可选值")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("data")]),t._v(" "),r("td",[t._v("需要展示数据列表")]),t._v(" "),r("td",[t._v("Array")]),t._v(" "),r("td",[t._v("{src}")]),t._v(" "),r("td",[t._v("-")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("参数")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("click")]),this._v(" "),s("td",[this._v("返回被点击对象")])])])])}],!1,null,null,null);v.options.__file="src/modules/grid/grid/grid/index.md";s.default=v.exports},4:function(t,s,r){t.exports=r.p+"static/assets/turbo-8c16ba3561d3d12504358734ee29c7c2.png"},52:function(t,s,r){var a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},e=r(151);window.__pages=a({},window.__pages,{"grid/grid/grid":e})}});