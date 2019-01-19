!function(t){var s={};function e(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return t[a].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=t,e.c=s,e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var l in t)e.d(a,l,function(s){return t[s]}.bind(null,l));return a},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=75)}({0:function(t,s,e){"use strict";function a(t,s,e,a,l,r,n,_){var v,p="function"==typeof t?t.options:t;if(s&&(p.render=s,p.staticRenderFns=e,p._compiled=!0),a&&(p.functional=!0),r&&(p._scopeId="data-v-"+r),n?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),l&&l.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},p._ssrRegister=v):l&&(v=_?function(){l.call(this,this.$root.$options.shadowRoot)}:l),v)if(p.functional){p._injectStyles=v;var c=p.render;p.render=function(t,s){return v.call(s),c(t,s)}}else{var i=p.beforeCreate;p.beforeCreate=i?[].concat(i,v):[v]}return{exports:t,options:p}}e.d(s,"a",function(){return a})},179:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("cellInput表单输入框组件")]),t._v(" "),e("p",[t._v("基于cell封装的input组件，cell组件部分属性适用于此组件")]),t._v(" "),e("h2",[t._v("使用方式")]),t._v(" "),t._m(0),t._v(" "),e("cell-input-demo-1",{ref:"cell-input-demo-1"}),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("标题扩展")]),t._v(" "),t._m(2),t._v(" "),e("cell-input-demo-2",{ref:"cell-input-demo-2"}),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("插槽")]),t._v(" "),t._m(4),t._v(" "),e("cell-input-demo-3",{ref:"cell-input-demo-3"}),t._v(" "),t._m(5),t._v(" "),e("h2",[t._v("参数")]),t._v(" "),t._m(6),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(7),t._v(" "),e("h2",[t._v("插槽")]),t._v(" "),t._m(8)],1)};a._withStripped=!0;var l={components:{"cell-input-demo-1":{template:'<example>\n  <t-cell-input title="表单输入框" placeholder="请输入您的姓名"></t-cell-input>\n  <t-cell-input title="数字输入框" type="number"></t-cell-input>\n  <t-cell-input title="密码输入框" type="password" placeholder="请输入您的密码"></t-cell-input>\n  <t-cell-input title="请输入验证码" type="number" maxlength="6" placeholder="请输入您的验证码"></t-cell-input>\n  <t-cell-input title="readonly" readonly :value="123"></t-cell-input>\n</example>\n\x3c!-- cell-input-demo-1.vue --\x3e'},"cell-input-demo-2":{template:'<example>\n  <t-cell-input :icon="{name: \'icon-QRcode\',color: \'red\'}" title="扫码点餐"></t-cell-input>\n  <t-cell-input tips="请输入您的订单号" title="扫码点餐"></t-cell-input>\n</example>\n\x3c!-- cell-input-demo-2.vue --\x3e'},"cell-input-demo-3":{template:'<example>\n  <t-cell-input placeholder="请输入需要提交的信息"><t-button slot="left" size="small">提交</t-button></t-cell-input>\n  <t-cell-input title="请输入验证码">\n    <div slot="right" style="cursor:pointer;font-size: var(--size-font-t3); color: var(--color-t1);">\n      点击获取验证码\n    </div>\n  </t-cell-input>\n</example>\n\x3c!-- cell-input-demo-3.vue --\x3e'}}},r=e(0),n=Object(r.a)(l,a,[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("title属性用于显示表单组件标题")]),t._v(" "),e("li",[t._v("placeholder属性用于显示输入框提示语")]),t._v(" "),e("li",[t._v("type属性与input标签一致")]),t._v(" "),e("li",[t._v("maxlength属性与input标签一致")]),t._v(" "),e("li",[t._v("readonly属性与input标签一致")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"表单输入框"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入您的姓名"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"数字输入框"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"number"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"密码输入框"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"password"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入您的密码"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入验证码"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"number"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("maxlength")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"6"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入您的验证码"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readonly"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"123"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- cell-input-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("icon属性可以设置标题栏图标，值为iconfont对应class名")]),this._v(" "),s("li",[this._v("tips可以设置第二行文案")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":icon")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{name: 'icon-QRcode',color: 'red'}\"")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"扫码点餐"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tips")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入您的订单号"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"扫码点餐"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- cell-input-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("right为右侧图标区域")]),this._v(" "),s("li",[this._v("left为title区域")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入需要提交的信息"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"left"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(">")]),t._v("提交"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"请输入验证码"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("slot")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"right"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("style")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"cursor:pointer;font-size: var(--size-font-t3); color: var(--color-t1);"')]),t._v(">")]),t._v("\n      点击获取验证码\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-cell-input")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- cell-input-demo-3.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("枚举值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("title")]),t._v(" "),e("td",[t._v("标题")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("tips")]),t._v(" "),e("td",[t._v("提示信息")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("icon")]),t._v(" "),e("td",[t._v("图标")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("{name, color}")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("readonly")]),t._v(" "),e("td",[t._v("禁用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("placeholder")]),t._v(" "),e("td",[t._v("提示语")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("maxlength")]),t._v(" "),e("td",[t._v("长度")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("string")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("click")]),t._v(" "),e("td",[t._v("点击输入框回调")])]),t._v(" "),e("tr",[e("td",[t._v("blur")]),t._v(" "),e("td",[t._v("失去焦点回调")])]),t._v(" "),e("tr",[e("td",[t._v("focus")]),t._v(" "),e("td",[t._v("获取焦点")])]),t._v(" "),e("tr",[e("td",[t._v("keyup")]),t._v(" "),e("td",[t._v("键盘按下回调")])]),t._v(" "),e("tr",[e("td",[t._v("keydown")]),t._v(" "),e("td",[t._v("键盘弹起回调")])]),t._v(" "),e("tr",[e("td",[t._v("change")]),t._v(" "),e("td",[t._v("值改变时回调")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("插槽名")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("left")]),t._v(" "),e("td",[t._v("左侧标题区域插槽")])]),t._v(" "),e("tr",[e("td",[t._v("right")]),t._v(" "),e("td",[t._v("右侧图标区域插槽")])])])])}],!1,null,null,null);n.options.__file="src/modules/view/view/cellInput/index.md";s.default=n.exports},75:function(t,s,e){var a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},l=e(179);window.__pages=a({},window.__pages,{"view/view/cellInput":l})}});