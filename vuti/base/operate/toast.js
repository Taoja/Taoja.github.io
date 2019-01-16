!function(t){var s={};function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)a.d(e,r,function(s){return t[s]}.bind(null,r));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="",a(a.s=94)}({0:function(t,s,a){"use strict";function e(t,s,a,e,r,n,_,v){var l,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=a,p._compiled=!0),e&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),_?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(_)},p._ssrRegister=l):r&&(l=v?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(p.functional){p._injectStyles=l;var c=p.render;p.render=function(t,s){return l.call(s),c(t,s)}}else{var o=p.beforeCreate;p.beforeCreate=o?[].concat(o,l):[l]}return{exports:t,options:p}}a.d(s,"a",function(){return e})},13:function(t,s,a){t.exports=a.p+"static/assets/fire-d9df0c453bbf34dd2835af0405bdb11e.svg"},143:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("toast提示框组件")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),a("toast-demo-1",{ref:"toast-demo-1"}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("展示图片/图标")]),t._v(" "),t._m(2),t._v(" "),a("toast-demo-2",{ref:"toast-demo-2"}),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("其他用法")]),t._v(" "),t._m(4),t._v(" "),a("toast-demo-3",{ref:"toast-demo-3"}),t._v(" "),t._m(5),t._v(" "),a("h2",[t._v("参数")]),t._v(" "),t._m(6),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(7),t._v(" "),a("h2",[t._v("插槽")]),t._v(" "),t._m(8)],1)};e._withStripped=!0;var r=a(3),n=a.n(r),_=a(13),v=a.n(_),l={components:{"toast-demo-1":{template:'\n<example>\n  <t-toast v-model="open" text="这是一个轻提示"></t-toast>\n  <t-button @click="open = true">打开toast</t-button>\n</example>\n',data:function(){return{open:!1}}},"toast-demo-2":{template:'\n<example>\n  <t-toast v-model="open1" :src="src" text="展示一个图片"></t-toast>\n  <t-toast v-model="open2" icon="icon-QRcode" text="展示一个图标"></t-toast>\n  <t-button @click="open1 = true">打开toast(展示图片)</t-button>\n  <p></p>\n  <t-button @click="open2 = true">打开toast(展示图标)</t-button>\n</example>\n',data:function(){return{open1:!1,open2:!1,src:n.a}}},"toast-demo-3":{template:'\n<example>\n  <t-toast v-model="open" :src="src" :duration="false" mask tap-hide></t-toast>\n  <t-button @click="open = true">不自动关闭、有背景遮罩、点击关闭</t-button>\n</example>\n',data:function(){return{open:!1,src:v.a}}}}},p=a(0),c=Object(p.a)(l,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("toast组件通过v-model绑定开关")]),this._v(" "),s("li",[this._v("text属性可以设置toast组件中文本信息")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"这是一个轻提示"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开toast"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- toast-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("src属性可配置toast组件中图片路径")]),this._v(" "),s("li",[this._v("icon属性可配置toast组件中iconfont图标class名")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"src"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"展示一个图片"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"icon-QRcode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"展示一个图标"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open1 = true"')]),t._v(">")]),t._v("打开toast(展示图片)"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open2 = true"')]),t._v(">")]),t._v("打开toast(展示图标)"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" src2 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@a/turbo.png'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src2\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- toast-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("duration属性可以设置组件留存时间，设置为false时组件不会自动关闭")]),this._v(" "),s("li",[this._v("mask属性可以配置是否展示背景遮罩")]),this._v(" "),s("li",[this._v("tap-hide属性可配置是否点击背景关闭组件")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"src"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":duration")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("mask")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tap-hide")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-toast")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("不自动关闭、有背景遮罩、点击关闭"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" src "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'../../../../../node_modules/vuti/common/svg/fire.svg'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- toast-demo-3.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("v-model开关")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("组件正文文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("src")]),t._v(" "),a("td",[t._v("组件图片链接")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("组件图标class名")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("duration")]),t._v(" "),a("td",[t._v("组件持续时间(毫秒)")]),t._v(" "),a("td",[t._v("Number/False")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("2000")])]),t._v(" "),a("tr",[a("td",[t._v("mask")]),t._v(" "),a("td",[t._v("是否显示背景遮罩")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("tap-hide")]),t._v(" "),a("td",[t._v("是否点击隐藏")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("afterShow")]),t._v(" "),a("td",[t._v("组件显示动画完成后触发")])]),t._v(" "),a("tr",[a("td",[t._v("afterHide")]),t._v(" "),a("td",[t._v("组件隐藏动画完成后触发")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("插槽名")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("default")]),this._v(" "),s("td",[this._v("整个组件内容")])])])])}],!1,null,null,null);c.options.__file="src/modules/base/operate/toast/index.md";s.default=c.exports},3:function(t,s,a){t.exports=a.p+"static/assets/turbo-8c16ba3561d3d12504358734ee29c7c2.png"},94:function(t,s,a){var e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},r=a(143);window.__pages=e({},window.__pages,{"base/operate/toast":r})}});