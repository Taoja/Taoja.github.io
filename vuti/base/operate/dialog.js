!function(t){var s={};function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,s,e){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)a.d(e,r,function(s){return t[s]}.bind(null,r));return e},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="",a(a.s=43)}({0:function(t,s,a){"use strict";function e(t,s,a,e,r,n,l,v){var p,_="function"==typeof t?t.options:t;if(s&&(_.render=s,_.staticRenderFns=a,_._compiled=!0),e&&(_.functional=!0),n&&(_._scopeId="data-v-"+n),l?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},_._ssrRegister=p):r&&(p=v?function(){r.call(this,this.$root.$options.shadowRoot)}:r),p)if(_.functional){_._injectStyles=p;var c=_.render;_.render=function(t,s){return p.call(s),c(t,s)}}else{var o=_.beforeCreate;_.beforeCreate=o?[].concat(o,p):[p]}return{exports:t,options:_}}a.d(s,"a",function(){return e})},1:function(t,s){t.exports=function(t){var s=[];return s.toString=function(){return this.map(function(s){var a=function(t,s){var a=t[1]||"",e=t[3];if(!e)return a;if(s&&"function"==typeof btoa){var r=(l=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),n=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[a].concat(n).concat([r]).join("\n")}var l;return[a].join("\n")}(s,t);return s[2]?"@media "+s[2]+"{"+a+"}":a}).join("")},s.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(e[n]=!0)}for(r=0;r<t.length;r++){var l=t[r];"number"==typeof l[0]&&e[l[0]]||(a&&!l[2]?l[2]=a:a&&(l[2]="("+l[2]+") and ("+a+")"),s.push(l))}},s}},10:function(t,s){t.exports=function(t){var s="undefined"!=typeof window&&window.location;if(!s)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var a=s.protocol+"//"+s.host,e=a+s.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,s){var r,n=s.trim().replace(/^"(.*)"$/,function(t,s){return s}).replace(/^'(.*)'$/,function(t,s){return s});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(n)?t:(r=0===n.indexOf("//")?n:0===n.indexOf("/")?a+n:e+n.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},157:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("dialog对话框组件")]),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),a("dialog-demo-1",{ref:"dialog-demo-1"}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("按钮")]),t._v(" "),t._m(2),t._v(" "),a("dialog-demo-2",{ref:"dialog-demo-2"}),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("其他功能")]),t._v(" "),t._m(4),t._v(" "),a("dialog-demo-3",{ref:"dialog-demo-3"}),t._v(" "),t._m(5),t._v(" "),a("h2",[t._v("plugin用法")]),t._v(" "),t._m(6),t._v(" "),a("dialog-demo-4",{ref:"dialog-demo-4"}),t._v(" "),t._m(7),t._v(" "),a("h2",[t._v("参数")]),t._v(" "),t._m(8),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(9),t._v(" "),a("h2",[t._v("插槽")]),t._v(" "),t._m(10)],1)};e._withStripped=!0;var r=a(4),n=a.n(r),l={components:{"dialog-demo-1":{template:'\n<example>\n  <t-dialog v-model="open" title="基础用法" text="基础文案基础文案基础文案" :src="src"></t-dialog>\n  <p></p>\n  <t-button @click="open = true">打开dialog</t-button>\n</example>\n',data:function(){return{open:!1,src:n.a}}},"dialog-demo-2":{template:'\n<example>\n  <t-dialog v-model="open1" @click="click" :buttons="buttons" title="普通按钮" text="基础文案基础文案基础文案"></t-dialog>\n  <t-dialog v-model="open2" @click="click" :buttons="buttons" :ext-buttons="extButtons" title="扩展按钮" text="基础文案基础文案基础文案"></t-dialog>\n  <t-button @click="open1 = true">打开dialog（普通按钮）</t-button>\n  <p></p>\n  <t-button @click="open2 = true">打开dialog（扩展按钮）</t-button>\n</example>\n',data:function(){return{open1:!1,open2:!1,buttons:[{text:"取消"},{text:"确认",scheme:"primary"}],extButtons:[{text:"清除位置信息",scheme:"red",close:!1}]}},methods:{click:function(t){this.$dialog({title:"点击了：",text:t.text})}}},"dialog-demo-3":{template:'\n<example>\n  <t-dialog v-model="open" tap-hide :mask="false" title="点击背景隐藏" text="不显示背景遮罩！不显示背景遮罩！"></t-dialog>\n  <p></p>\n  <t-button @click="open = true">打开dialog</t-button>\n</example>\n',data:function(){return{open:!1}}},"dialog-demo-4":{template:'\n<example>\n  <t-button @click="click">打开dialog</t-button>\n</example>\n',methods:{click:function(){this.$dialog({title:"plugin用法",text:"promise返回的值为点击事件返回的按钮对象",buttons:[{text:"取消"},{text:"确认",scheme:"primary"}]}).then(function(t){console.log("点击了"+t.text)})}}}}},v=(a(44),a(0)),p=Object(v.a)(l,e,[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("dialog组件显示隐藏通过v-model绑定")]),this._v(" "),s("li",[this._v("title属性为标题文案")]),this._v(" "),s("li",[this._v("text属性为内容文案")]),this._v(" "),s("li",[this._v("src属性为图片url地址（webpack工程请先require）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基础用法"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基础文案基础文案基础文案"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":src")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"src"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开dialog"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" src "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@a/turbo.png'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": src\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- dialog-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("普通按钮为按钮区域第一排横向排列")]),t._v(" "),a("li",[t._v("扩展按钮为从第二排开始叠加显示")]),t._v(" "),a("li",[t._v("按钮参数：\n"),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("按钮文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("scheme")]),t._v(" "),a("td",[t._v("按钮文字皮肤")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("是否点击关闭")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("true")])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open1"')]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":buttons")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"buttons"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"普通按钮"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基础文案基础文案基础文案"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open2"')]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":buttons")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"buttons"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":ext-buttons")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"extButtons"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"扩展按钮"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"基础文案基础文案基础文案"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open1 = true"')]),t._v(">")]),t._v("打开dialog（普通按钮）"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open2 = true"')]),t._v(">")]),t._v("打开dialog（扩展按钮）"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open2")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("buttons")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'取消'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'确认'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'primary'")]),t._v("\n          }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("extButtons")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'清除位置信息'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'red'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("close")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'点击了：'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": e.text\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[t._v(".vuti-dialog-button")]),a("span",{pre:!0,attrs:{class:"hljs-selector-attr"}},[t._v("[scheme=red]")]),t._v("{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[t._v("color")]),t._v(": red;\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("style")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- dialog-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("tap-hide属性为true时可以点击背景隐藏对话框")]),this._v(" "),s("li",[this._v("mask属性为true时可以显示背景遮罩，默认为true")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("tap-hide")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mask")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"点击背景隐藏"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"不显示背景遮罩！不显示背景遮罩！"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-dialog")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"open = true"')]),t._v(">")]),t._v("打开dialog"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("open")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- dialog-demo-3.vue --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("可以直接使用this.$dialog方法调用dialog组件")]),this._v(" "),s("li",[this._v("该方法返回一个promise回调，成功传参为click返回值")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"click"')]),t._v(">")]),t._v("打开dialog"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-button")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      click() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'plugin用法'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'promise返回的值为点击事件返回的按钮对象'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("buttons")]),t._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'取消'")]),t._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'确认'")]),t._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scheme")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'primary'")]),t._v("\n            }\n          ]\n        }).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("e")]),t._v(") =>")]),t._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`点击了"),a("span",{pre:!0,attrs:{class:"hljs-subst"}},[t._v("${e.text}")]),t._v("`")]),t._v(")\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- dialog-demo-4.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("v-model开关")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("组件标题")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("组件正文")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("src")]),t._v(" "),a("td",[t._v("组件图片路径")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("mask")]),t._v(" "),a("td",[t._v("是否隐藏背景遮罩")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("tap-hide")]),t._v(" "),a("td",[t._v("点击背景是否关闭")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("buttons")]),t._v(" "),a("td",[t._v("组件按钮配置")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("ext-buttons")]),t._v(" "),a("td",[t._v("组件扩展按钮配置")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("返回被点击按钮对象")])]),t._v(" "),a("tr",[a("td",[t._v("afterHide")]),t._v(" "),a("td",[t._v("组件隐藏动画完成后触发")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("插槽名")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("default")]),this._v(" "),s("td",[this._v("自定义内容区域（图片、标题、正文）")])])])])}],!1,null,null,null);p.options.__file="src/modules/base/operate/dialog/index.md";s.default=p.exports},16:function(t,s,a){var e=a(45);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(2)(e,r);e.locals&&(t.exports=e.locals)},2:function(t,s,a){var e,r,n={},l=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=e.apply(this,arguments)),r}),v=function(t){var s={};return function(t){if("function"==typeof t)return t();if(void 0===s[t]){var a=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}s[t]=a}return s[t]}}(),p=null,_=0,c=[],o=a(10);function i(t,s){for(var a=0;a<t.length;a++){var e=t[a],r=n[e.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](e.parts[l]);for(;l<e.parts.length;l++)r.parts.push(m(e.parts[l],s))}else{var v=[];for(l=0;l<e.parts.length;l++)v.push(m(e.parts[l],s));n[e.id]={id:e.id,refs:1,parts:v}}}}function h(t,s){for(var a=[],e={},r=0;r<t.length;r++){var n=t[r],l=s.base?n[0]+s.base:n[0],v={css:n[1],media:n[2],sourceMap:n[3]};e[l]?e[l].parts.push(v):a.push(e[l]={id:l,parts:[v]})}return a}function d(t,s){var a=v(t.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=c[c.length-1];if("top"===t.insertAt)e?e.nextSibling?a.insertBefore(s,e.nextSibling):a.appendChild(s):a.insertBefore(s,a.firstChild),c.push(s);else if("bottom"===t.insertAt)a.appendChild(s);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=v(t.insertInto+" "+t.insertAt.before);a.insertBefore(s,r)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var s=c.indexOf(t);s>=0&&c.splice(s,1)}function j(t){var s=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),f(s,t.attrs),d(t,s),s}function f(t,s){Object.keys(s).forEach(function(a){t.setAttribute(a,s[a])})}function m(t,s){var a,e,r,n;if(s.transform&&t.css){if(!(n=s.transform(t.css)))return function(){};t.css=n}if(s.singleton){var l=_++;a=p||(p=j(s)),e=x.bind(null,a,l,!1),r=x.bind(null,a,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=function(t){var s=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(s,t.attrs),d(t,s),s}(s),e=function(t,s,a){var e=a.css,r=a.sourceMap,n=void 0===s.convertToAbsoluteUrls&&r;(s.convertToAbsoluteUrls||n)&&(e=o(e));r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var l=new Blob([e],{type:"text/css"}),v=t.href;t.href=URL.createObjectURL(l),v&&URL.revokeObjectURL(v)}.bind(null,a,s),r=function(){u(a),a.href&&URL.revokeObjectURL(a.href)}):(a=j(s),e=function(t,s){var a=s.css,e=s.media;e&&t.setAttribute("media",e);if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,a),r=function(){u(a)});return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else r()}}t.exports=function(t,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(s=s||{}).attrs="object"==typeof s.attrs?s.attrs:{},s.singleton||"boolean"==typeof s.singleton||(s.singleton=l()),s.insertInto||(s.insertInto="head"),s.insertAt||(s.insertAt="bottom");var a=h(t,s);return i(a,s),function(t){for(var e=[],r=0;r<a.length;r++){var l=a[r];(v=n[l.id]).refs--,e.push(v)}t&&i(h(t,s),s);for(r=0;r<e.length;r++){var v;if(0===(v=e[r]).refs){for(var p=0;p<v.parts.length;p++)v.parts[p]();delete n[v.id]}}}};var g,b=(g=[],function(t,s){return g[t]=s,g.filter(Boolean).join("\n")});function x(t,s,a,e){var r=a?"":e.css;if(t.styleSheet)t.styleSheet.cssText=b(s,r);else{var n=document.createTextNode(r),l=t.childNodes;l[s]&&t.removeChild(l[s]),l.length?t.insertBefore(n,l[s]):t.appendChild(n)}}},4:function(t,s,a){t.exports=a.p+"static/assets/turbo-8c16ba3561d3d12504358734ee29c7c2.png"},43:function(t,s,a){var e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e])}return t},r=a(157);window.__pages=e({},window.__pages,{"base/operate/dialog":r})},44:function(t,s,a){"use strict";var e=a(16);a.n(e).a},45:function(t,s,a){(t.exports=a(1)(!1)).push([t.i,"\n.vuti-dialog-button[scheme=red]{\n  color: red;\n}\n",""])}});