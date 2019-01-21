!function(s){var t={};function a(e){if(t[e])return t[e].exports;var l=t[e]={i:e,l:!1,exports:{}};return s[e].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=s,a.c=t,a.d=function(s,t,e){a.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:e})},a.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,t){if(1&t&&(s=a(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var l in s)a.d(e,l,function(t){return s[t]}.bind(null,l));return e},a.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(t,"a",t),t},a.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},a.p="",a(a.s=72)}({0:function(s,t,a){"use strict";function e(s,t,a,e,l,r,n,v){var _,p="function"==typeof s?s.options:s;if(t&&(p.render=t,p.staticRenderFns=a,p._compiled=!0),e&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),n?(_=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),l&&l.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(n)},p._ssrRegister=_):l&&(_=v?function(){l.call(this,this.$root.$options.shadowRoot)}:l),_)if(p.functional){p._injectStyles=_;var c=p.render;p.render=function(s,t){return _.call(t),c(s,t)}}else{var i=p.beforeCreate;p.beforeCreate=i?[].concat(i,_):[_]}return{exports:s,options:p}}a.d(t,"a",function(){return e})},102:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("cell表单块组件")]),s._v(" "),a("h2",[s._v("使用方式")]),s._v(" "),s._m(0),s._v(" "),a("cell-demo-1",{ref:"cell-demo-1"}),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("标题扩展")]),s._v(" "),s._m(2),s._v(" "),a("cell-demo-2",{ref:"cell-demo-2"}),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("插槽使用")]),s._v(" "),s._m(4),s._v(" "),a("cell-demo-3",{ref:"cell-demo-3"}),s._v(" "),s._m(5),s._v(" "),a("h2",[s._v("参数")]),s._v(" "),s._m(6),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),a("h2",[s._v("插槽")]),s._v(" "),s._m(8)],1)};e._withStripped=!0;var l={components:{"cell-demo-1":{template:'<example>\n  <t-cell title="表单块">这里是value</t-cell>\n  <t-cell title="可以点击" is-link></t-cell>\n</example>\n\x3c!-- cell-demo-1.vue --\x3e'},"cell-demo-2":{template:'<example>\n  <t-cell :icon="{name: \'icon-QRcode\',color: \'red\'}" title="扫码点餐" is-link></t-cell>\n  <t-cell tips="点击二维码图标展开二维码" title="扫码点餐"><div class="icon-QRcode"></div></t-cell>\n</example>\n\x3c!-- cell-demo-2.vue --\x3e'},"cell-demo-3":{template:'\n<example>\n  <t-cell title="开启指纹支付">\n    <t-switch v-model="open"></t-switch>\n  </t-cell>\n  <t-cell title="姓名">\n    taoja\n    <div class="icon-QRcode" slot="right" style="color: var(--color-error);margin-left: var(--size-margin-t3);"></div>\n  </t-cell>\n  <t-cell>\n    <t-switch slot="left" v-model="open"></t-switch>\n    是否使用vuti\n  </t-cell>\n</example>\n',data:function(){return{open:!1}}}}},r=a(0),n=Object(r.a)(l,e,[function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("title属性用于显示表单组件标题")]),this._v(" "),t("li",[this._v("slot中为对应表单值")]),this._v(" "),t("li",[this._v("isLink可以使表单块组件可点击")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"表单块"')]),s._v(">")]),s._v("这里是value"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"可以点击"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("is-link")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- cell-demo-1.vue --\x3e")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("icon属性可以设置标题栏图标，值为iconfont对应class名")]),this._v(" "),t("li",[this._v("tips可以设置第二行文案")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":icon")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{name: 'icon-QRcode',color: 'red'}\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"扫码点餐"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("is-link")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tips")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"点击二维码图标展开二维码"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"扫码点餐"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"icon-QRcode"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- cell-demo-2.vue --\x3e")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("default为cell右侧内容区域")]),this._v(" "),t("li",[this._v("right为右侧图标区域")]),this._v(" "),t("li",[this._v("left为title区域")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"开启指纹支付"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-switch")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"姓名"')]),s._v(">")]),s._v("\n    taoja\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"icon-QRcode"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"color: var(--color-error);margin-left: var(--size-margin-t3);"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"open"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-switch")]),s._v(">")]),s._v("\n    是否使用vuti\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-cell")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("open")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- cell-demo-3.vue --\x3e")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("枚举值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("标题")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("tips")]),s._v(" "),a("td",[s._v("提示信息")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("图标")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("{name, color}")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("is-link")]),s._v(" "),a("td",[s._v("是否可点击")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[this._v("参数")]),this._v(" "),t("th",[this._v("说明")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[this._v("click")]),this._v(" "),t("td",[this._v("点击回调")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("插槽名")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("default")]),s._v(" "),a("td",[s._v("右侧内容区域插槽")])]),s._v(" "),a("tr",[a("td",[s._v("left")]),s._v(" "),a("td",[s._v("左侧标题区域插槽")])]),s._v(" "),a("tr",[a("td",[s._v("right")]),s._v(" "),a("td",[s._v("右侧图标区域插槽")])])])])}],!1,null,null,null);n.options.__file="src/modules/view/view/cell/index.md";t.default=n.exports},72:function(s,t,a){var e=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(s[e]=a[e])}return s},l=a(102);window.__pages=e({},window.__pages,{"view/view/cell":l})}});