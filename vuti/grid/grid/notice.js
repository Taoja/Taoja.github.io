!function(t){var s={};function a(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,s,r){a.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,s){if(1&s&&(t=a(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)a.d(r,n,function(s){return t[s]}.bind(null,n));return r},a.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(s,"a",s),s},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.p="",a(a.s=60)}({0:function(t,s,a){"use strict";function r(t,s,a,r,n,e,l,p){var _,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=a,c._compiled=!0),r&&(c.functional=!0),e&&(c._scopeId="data-v-"+e),l?(_=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=_):n&&(_=p?function(){n.call(this,this.$root.$options.shadowRoot)}:n),_)if(c.functional){c._injectStyles=_;var v=c.render;c.render=function(t,s){return _.call(s),v(t,s)}}else{var i=c.beforeCreate;c.beforeCreate=i?[].concat(i,_):[_]}return{exports:t,options:c}}a.d(s,"a",function(){return r})},183:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("notice公告组件")]),t._v(" "),a("h2",[t._v("使用方式")]),t._v(" "),a("notice-demo-1",{ref:"notice-demo-1"}),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("文字+图片+图标使用方法")]),t._v(" "),a("notice-demo-2",{ref:"notice-demo-2"}),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("参数")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(3)],1)};r._withStripped=!0;a(4);var n={components:{"notice-demo-1":{template:"\n<example>\n  <t-notice \n  :data=\"data\"\n  :options=\"{\n    title: [\n      {\n        text: '播报',\n        color: '#cc162c'\n      }\n    ]\n  }\"\n  ></t-notice>\n</example>\n",data:function(){return{data:[{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"},{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:1,link:"demo_flex"},{text:"这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"},{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"}]}},methods:{click:function(t){this.$dialog({title:"点击了",text:t.link})}}},"notice-demo-2":{template:'\n<example>\n  <t-notice \n  :data="data"\n  :options="options"\n  ></t-notice>\n</example>\n',data:function(){return{data:[{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"},{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:1,link:"demo_flex"},{text:"这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"},{text:"这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏",linkType:0,link:"http://www.baidu.com"}],options:{title:[{src:a(4),width:"20px"},{text:"小发播报",color:"#cc162c"},{icon:"icon-QRcode",color:"#cc162c"}]}}},methods:{click:function(t){this.$dialog({title:"点击了",text:t.link})}}}}},e=a(0),l=Object(e.a)(n,r,[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-notice")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"data"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":options")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"{\n    title: [\n      {\n        text: '播报',\n        color: '#cc162c'\n      }\n    ]\n  }\"")]),t._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-notice")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'demo_flex'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'点击了'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": e.link\n        })\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- notice-demo-1.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-notice")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"data"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":options")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"options"')]),t._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("t-notice")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("example")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" turbo "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@a/turbo.png'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'demo_flex'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏'")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("linkType")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("link")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'http://www.baidu.com'")]),t._v("\n          }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": [\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("src")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("require")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@a/turbo.png'")]),t._v("),\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("width")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'20px'")]),t._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'小发播报'")]),t._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#cc162c'")]),t._v("\n            },\n            {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'icon-QRcode'")]),t._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'#cc162c'")]),t._v("\n            }\n          ]\n        }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'点击了'")]),t._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": e.link\n        })\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("\x3c!-- notice-demo-2.vue --\x3e")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("枚举值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("需要展示数据列表")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("{text}")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("设置头部参数")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("{title}")]),t._v(" "),a("td",[t._v("-")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("参数")]),this._v(" "),s("th",[this._v("说明")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[this._v("click")]),this._v(" "),s("td",[this._v("返回被点击对象")])])])])}],!1,null,null,null);l.options.__file="src/modules/grid/grid/notice/index.md";s.default=l.exports},4:function(t,s,a){t.exports=a.p+"static/assets/turbo-8c16ba3561d3d12504358734ee29c7c2.png"},60:function(t,s,a){var r=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},n=a(183);window.__pages=r({},window.__pages,{"grid/grid/notice":n})}});