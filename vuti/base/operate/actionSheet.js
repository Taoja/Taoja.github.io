!function(t){var s={};function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)a.d(e,n,function(s){return t[s]}.bind(null,n));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="",a(a.s=52)}({0:function(t,s,a){"use strict";function e(t,s,a,e,n,r,_,l){var v,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=a,p._compiled=!0),e&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),_?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(_)},p._ssrRegister=v):n&&(v=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),v)if(p.functional){p._injectStyles=v;var c=p.render;p.render=function(t,s){return v.call(s),c(t,s)}}else{var o=p.beforeCreate;p.beforeCreate=o?[].concat(o,v):[v]}return{exports:t,options:p}}a.d(s,"a",function(){return e})},180:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("actionSheet动作面板组件")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),a("actionSheet-demo-1",{ref:"actionSheet-demo-1"}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("其他用法")]),t._v(" "),t._m(2),t._v(" "),a("actionSheet-demo-2",{ref:"actionSheet-demo-2"}),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("参数")]),t._v(" "),t._m(4),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(5)],1)};e._withStripped=!0;var n={components:{"actionSheet-demo-1":{template:'\n<example>\n  <t-actionsheet\n    v-model="open"\n    :buttons="buttons"\n  ></t-actionsheet>\n  <t-button @click="open = true">打开actionSheet</t-button>\n</example>\n',data:function(){return{open:!1,buttons:[{text:"确认"},{text:"取消"},{text:"清除位置信息",color:"red"}]}}},"actionSheet-demo-2":{template:'\n<example>\n  <t-actionsheet\n    title="vuti-actionsheet"\n    v-model="open"\n    :mask="false"\n    :tap-hide="false"\n    :buttons="buttons"\n  ></t-actionsheet>\n  <t-button @click="open = true">打开actionSheet</t-button>\n</example>\n',data:function(){return{open:!1,buttons:[{text:"确认"},{text:"取消"},{text:"清除位置信息",color:"red"}]}}}}},r=a(0),_=Object(r.a)(n,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("buttons属性传递按钮列表")]),this._v(" "),s("li",[this._v("v-model属性开关组件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-actionsheet")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":buttons")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"buttons"')]),t._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-actionsheet")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开actionSheet"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("buttons")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'确认'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'取消'")]),t._v(",\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'清除位置信息'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v("\n          }\n        ]\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"undefined"}},[t._v("\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- actionSheet-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("设置title属性为标题文案")]),this._v(" "),s("li",[this._v("mask属性控制是否显示背景遮罩，默认显示")]),this._v(" "),s("li",[this._v("tap-hide属性控制是否点击背景关闭组件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-actionsheet")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"vuti-actionsheet"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mask")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":tap-hide")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":buttons")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"buttons"')]),t._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-actionsheet")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开actionSheet"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("buttons")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'确认'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'取消'")]),t._v(",\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'清除位置信息'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v("\n          }\n        ]\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"undefined"}},[t._v("\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- actionSheet-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("枚举值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("标题文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("buttons")]),t._v(" "),a("td",[t._v("按钮数组")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("{text}")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("v-model")]),t._v(" "),a("td",[t._v("组件开关")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("mask")]),t._v(" "),a("td",[t._v("背景遮罩")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("true")])]),t._v(" "),a("tr",[a("td",[t._v("tap-hide")]),t._v(" "),a("td",[t._v("点击背景关闭")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("true")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("参数")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("click")]),this._v(" "),s("td",[this._v("点击按钮回调")])])])])}],!1,null,null,null);_.options.__file="src/modules/base/operate/actionSheet/index.md";s.default=_.exports},52:function(t,s,a){var e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},n=a(180);window.__pages=e({},window.__pages,{"base/operate/actionSheet":n})}});