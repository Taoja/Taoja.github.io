!function(t){var s={};function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)a.d(e,r,function(s){return t[s]}.bind(null,r));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="",a(a.s=90)}({0:function(t,s,a){"use strict";function e(t,s,a,e,r,p,n,_){var l,v="function"==typeof t?t.options:t;if(s&&(v.render=s,v.staticRenderFns=a,v._compiled=!0),e&&(v.functional=!0),p&&(v._scopeId="data-v-"+p),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},v._ssrRegister=l):r&&(l=_?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(v.functional){v._injectStyles=l;var o=v.render;v.render=function(t,s){return l.call(s),o(t,s)}}else{var c=v.beforeCreate;v.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:v}}a.d(s,"a",function(){return e})},146:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("popup底部弹窗组件")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),a("popup-demo-1",{ref:"popup-demo-1"}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("其他属性")]),t._v(" "),t._m(2),t._v(" "),a("popup-demo-2",{ref:"popup-demo-2"}),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("参数")]),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(5),t._v(" "),a("h2",[t._v("插槽")]),t._v(" "),t._m(6)],1)};e._withStripped=!0;var r={components:{"popup-demo-1":{template:'\n<example>\n  <t-popup :visibility="open">\n    <p></p>\n    <t-button @click="open = false">关闭popup</t-button>\n  </t-popup>\n  <p></p>\n  <t-button @click="open = true">打开popup</t-button>\n</example>\n',data:function(){return{open:!1}}},"popup-demo-2":{template:'\n<example>\n  <t-popup :mask="false" :visibility="open" auto-height>\n    <p></p>\n    <t-button @click="open = false">关闭popup</t-button>\n    <p></p>\n  </t-popup>\n  <t-button @click="open = true">打开popup(自适应内容高度)</t-button>\n</example>\n',data:function(){return{open:!1}}}}},p=a(0),n=Object(p.a)(r,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("popup组件通过visibility属性控制开启关闭")]),this._v(" "),s("li",[this._v("popup为fixed定位组件，适用于手机端使用，z-index层级为101")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-popup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":visibility")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = false"')]),t._v(">")]),t._v("关闭popup"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-popup")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开popup"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- popup-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("添加auto-height属性，当值为true时自适应内容高度")]),this._v(" "),s("li",[this._v("mask属性控制是否显示背景遮罩，默认显示")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-popup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mask")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":visibility")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("auto-height")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = false"')]),t._v(">")]),t._v("关闭popup"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-popup")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开popup(自适应内容高度)"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- popup-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("visibility")]),t._v(" "),a("td",[t._v("开关")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("auto-height")]),t._v(" "),a("td",[t._v("是否自适应高度")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("visibility值为true时触发")])]),t._v(" "),a("tr",[a("td",[t._v("afterShow")]),t._v(" "),a("td",[t._v("popup组件显示动画完成后触发")])]),t._v(" "),a("tr",[a("td",[t._v("maskClick")]),t._v(" "),a("td",[t._v("背景被点击时触发")])]),t._v(" "),a("tr",[a("td",[t._v("hide")]),t._v(" "),a("td",[t._v("visibility值为false时触发")])]),t._v(" "),a("tr",[a("td",[t._v("afterHide")]),t._v(" "),a("td",[t._v("popup组件隐藏动画完成后触发")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("插槽名")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("default")]),this._v(" "),s("td",[this._v("popup弹窗内容插槽")])])])])}],!1,null,null,null);n.options.__file="src/modules/base/operate/popup/index.md";s.default=n.exports},90:function(t,s,a){var e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},r=a(146);window.__pages=e({},window.__pages,{"base/operate/popup":r})}});