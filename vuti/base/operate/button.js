!function(t){var s={};function e(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=s,e.d=function(t,s,a){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(a,n,function(s){return t[s]}.bind(null,n));return a},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=87)}({0:function(t,s,e){"use strict";function a(t,s,e,a,n,r,l,p){var v,o="function"==typeof t?t.options:t;if(s&&(o.render=s,o.staticRenderFns=e,o._compiled=!0),a&&(o.functional=!0),r&&(o._scopeId="data-v-"+r),l?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},o._ssrRegister=v):n&&(v=p?function(){n.call(this,this.$root.$options.shadowRoot)}:n),v)if(o.functional){o._injectStyles=v;var _=o.render;o.render=function(t,s){return v.call(s),_(t,s)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,v):[v]}return{exports:t,options:o}}e.d(s,"a",function(){return a})},1:function(t,s){t.exports=function(t){var s=[];return s.toString=function(){return this.map(function(s){var e=function(t,s){var e=t[1]||"",a=t[3];if(!a)return e;if(s&&"function"==typeof btoa){var n=(l=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[e].concat(r).concat([n]).join("\n")}var l;return[e].join("\n")}(s,t);return s[2]?"@media "+s[2]+"{"+e+"}":e}).join("")},s.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(a[r]=!0)}for(n=0;n<t.length;n++){var l=t[n];"number"==typeof l[0]&&a[l[0]]||(e&&!l[2]?l[2]=e:e&&(l[2]="("+l[2]+") and ("+e+")"),s.push(l))}},s}},11:function(t,s){t.exports=function(t){var s="undefined"!=typeof window&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=s.protocol+"//"+s.host,a=e+s.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,s){var n,r=s.trim().replace(/^"(.*)"$/,function(t,s){return s}).replace(/^'(.*)'$/,function(t,s){return s});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},146:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("button按钮组件")]),t._v(" "),e("h2",[t._v("基础用法")]),t._v(" "),e("p",[t._v("按钮样式分为大中小三种，默认尺寸为中型按钮")]),t._v(" "),t._m(0),t._v(" "),e("button-demo-1",{ref:"button-demo-1"}),t._v(" "),t._m(1),t._v(" "),e("h3",[t._v("禁用按钮")]),t._v(" "),e("p",[t._v("给按钮添加disabled属性即可实现按钮禁用效果")]),t._v(" "),e("p",[t._v("按钮禁用后无法传递点击事件")]),t._v(" "),e("button-demo-2",{ref:"button-demo-2"}),t._v(" "),t._m(2),t._v(" "),e("h3",[t._v("自定义皮肤")]),t._v(" "),e("p",[t._v("可以通过设置css样式实现按钮组件皮肤化")]),t._v(" "),e("button-demo-3",{ref:"button-demo-3"}),t._v(" "),t._m(3),t._v(" "),e("h3",[t._v("反按钮")]),t._v(" "),e("p",[t._v("可以通过设置plain属性来实现反色按钮")]),t._v(" "),e("button-demo-4",{ref:"button-demo-4"}),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("参数")]),t._v(" "),t._m(5),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(6)],1)};a._withStripped=!0;var n={components:{"button-demo-1":{template:'<example>\n  <t-button size="big">大按钮</t-button>\n  <p></p>\n  <t-button>中按钮</t-button>\n  <p></p>\n  <t-button size="small">小按钮</t-button>\n</example>\n\x3c!-- button-demo-1.vue --\x3e'},"button-demo-2":{template:'<example>\n  <t-button size="big" disabled>大按钮</t-button>\n  <p></p>\n  <t-button disabled>中按钮</t-button>\n  <p></p>\n  <t-button size="small" disabled>小按钮</t-button>\n</example>\n\x3c!-- button-demo-2.vue --\x3e'},"button-demo-3":{template:'<example>\n  <t-button size="big" scheme="red">大按钮</t-button>\n  <p></p>\n  <t-button scheme="red">中按钮</t-button>\n  <p></p>\n  <t-button size="small" scheme="red">小按钮</t-button>\n</example>\n<style>\n  .vuti-button[scheme=red]{\n    --main-color: red;\n    --main-color-anti: white;\n  }\n</style>\n\x3c!-- button-demo-3.vue --\x3e'},"button-demo-4":{template:'<example>\n  <t-button size="big" plain>大按钮</t-button>\n  <p></p>\n  <t-button plain>中按钮</t-button>\n  <p></p>\n  <t-button size="small" plain>小按钮</t-button>\n  <t-button size="small" scheme="red" plain>小按钮</t-button>\n</example>\n\x3c!-- button-demo-4.vue --\x3e'}}},r=(e(88),e(0)),l=Object(r.a)(n,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("大按钮宽度为100%")]),this._v(" "),s("li",[this._v("中按钮离左右边距为 30px/750")]),this._v(" "),s("li",[this._v("小按钮为以内容为准自适应大小")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"big"')]),t._v(">")]),t._v("大按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("中按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(">")]),t._v("小按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- button-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"big"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("大按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("中按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),t._v("小按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- button-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"big"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"red"')]),t._v(">")]),t._v("大按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"red"')]),t._v(">")]),t._v("中按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"red"')]),t._v(">")]),t._v("小按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"css"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".vuti-button")]),e("span",{pre:!0,attrs:{class:"hljs-selector-attr"}},[t._v("[scheme=red]")]),t._v("{\n    "),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("--main-color")]),t._v(": red;\n    "),e("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("--main-color-anti")]),t._v(": white;\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- button-demo-3.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"big"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plain")]),t._v(">")]),t._v("大按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plain")]),t._v(">")]),t._v("中按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plain")]),t._v(">")]),t._v("小按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"red"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("plain")]),t._v(">")]),t._v("小按钮"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- button-demo-4.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("small / normal / big")]),t._v(" "),e("td",[t._v("normal")])]),t._v(" "),e("tr",[e("td",[t._v("disabled")]),t._v(" "),e("td",[t._v("禁用状态")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("plain")]),t._v(" "),e("td",[t._v("反色")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("scheme")]),t._v(" "),e("td",[t._v("自定义皮肤")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("—")]),t._v(" "),e("td",[t._v("—")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("submit")]),t._v(" "),e("td",[t._v("点击确认按钮回调")])]),t._v(" "),e("tr",[e("td",[t._v("hide")]),t._v(" "),e("td",[t._v("组件关闭回调")])])])])}],!1,null,null,null);l.options.__file="src/modules/base/operate/button/index.md";s.default=l.exports},17:function(t,s,e){var a=e(89);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(2)(a,n);a.locals&&(t.exports=a.locals)},2:function(t,s,e){var a,n,r={},l=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=a.apply(this,arguments)),n}),p=function(t){var s={};return function(t){if("function"==typeof t)return t();if(void 0===s[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}s[t]=e}return s[t]}}(),v=null,o=0,_=[],c=e(11);function i(t,s){for(var e=0;e<t.length;e++){var a=t[e],n=r[a.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](a.parts[l]);for(;l<a.parts.length;l++)n.parts.push(j(a.parts[l],s))}else{var p=[];for(l=0;l<a.parts.length;l++)p.push(j(a.parts[l],s));r[a.id]={id:a.id,refs:1,parts:p}}}}function u(t,s){for(var e=[],a={},n=0;n<t.length;n++){var r=t[n],l=s.base?r[0]+s.base:r[0],p={css:r[1],media:r[2],sourceMap:r[3]};a[l]?a[l].parts.push(p):e.push(a[l]={id:l,parts:[p]})}return e}function h(t,s){var e=p(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=_[_.length-1];if("top"===t.insertAt)a?a.nextSibling?e.insertBefore(s,a.nextSibling):e.appendChild(s):e.insertBefore(s,e.firstChild),_.push(s);else if("bottom"===t.insertAt)e.appendChild(s);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=p(t.insertInto+" "+t.insertAt.before);e.insertBefore(s,n)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var s=_.indexOf(t);s>=0&&_.splice(s,1)}function m(t){var s=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),f(s,t.attrs),h(t,s),s}function f(t,s){Object.keys(s).forEach(function(e){t.setAttribute(e,s[e])})}function j(t,s){var e,a,n,r;if(s.transform&&t.css){if(!(r=s.transform(t.css)))return function(){};t.css=r}if(s.singleton){var l=o++;e=v||(v=m(s)),a=y.bind(null,e,l,!1),n=y.bind(null,e,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var s=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(s,t.attrs),h(t,s),s}(s),a=function(t,s,e){var a=e.css,n=e.sourceMap,r=void 0===s.convertToAbsoluteUrls&&n;(s.convertToAbsoluteUrls||r)&&(a=c(a));n&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([a],{type:"text/css"}),p=t.href;t.href=URL.createObjectURL(l),p&&URL.revokeObjectURL(p)}.bind(null,e,s),n=function(){d(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(s),a=function(t,s){var e=s.css,a=s.media;a&&t.setAttribute("media",a);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),n=function(){d(e)});return a(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;a(t=s)}else n()}}t.exports=function(t,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=l()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var e=u(t,s);return i(e,s),function(t){for(var a=[],n=0;n<e.length;n++){var l=e[n];(p=r[l.id]).refs--,a.push(p)}t&&i(u(t,s),s);for(n=0;n<a.length;n++){var p;if(0===(p=a[n]).refs){for(var v=0;v<p.parts.length;v++)p.parts[v]();delete r[p.id]}}}};var b,g=(b=[],function(t,s){return b[t]=s,b.filter(Boolean).join("\n")});function y(t,s,e,a){var n=e?"":a.css;if(t.styleSheet)t.styleSheet.cssText=g(s,n);else{var r=document.createTextNode(n),l=t.childNodes;l[s]&&t.removeChild(l[s]),l.length?t.insertBefore(r,l[s]):t.appendChild(r)}}},87:function(t,s,e){var a=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},n=e(146);window.__pages=a({},window.__pages,{"base/operate/button":n})},88:function(t,s,e){"use strict";var a=e(17);e.n(a).a},89:function(t,s,e){(t.exports=e(1)(!1)).push([t.i,"\n.vuti-button[scheme=red]{\n  --main-color: red;\n  --main-color-anti: white;\n}\n",""])}});