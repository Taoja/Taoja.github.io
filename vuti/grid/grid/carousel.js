!function(s){var t={};function a(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return s[r].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=s,a.c=t,a.d=function(s,t,r){a.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:r})},a.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},a.t=function(s,t){if(1&t&&(s=a(s)),8&t)return s;if(4&t&&"object"==typeof s&&s&&s.__esModule)return s;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var e in s)a.d(r,e,function(t){return s[t]}.bind(null,e));return r},a.n=function(s){var t=s&&s.__esModule?function(){return s.default}:function(){return s};return a.d(t,"a",t),t},a.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},a.p="",a(a.s=56)}({0:function(s,t,a){"use strict";function r(s,t,a,r,e,n,l,p){var _,v="function"==typeof s?s.options:s;if(t&&(v.render=t,v.staticRenderFns=a,v._compiled=!0),r&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),l?(_=function(s){(s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(s=__VUE_SSR_CONTEXT__),e&&e.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(l)},v._ssrRegister=_):e&&(_=p?function(){e.call(this,this.$root.$options.shadowRoot)}:e),_)if(v.functional){v._injectStyles=_;var c=v.render;v.render=function(s,t){return _.call(t),c(s,t)}}else{var o=v.beforeCreate;v.beforeCreate=o?[].concat(o,_):[_]}return{exports:s,options:v}}a.d(t,"a",function(){return r})},10:function(s,t,a){s.exports=a.p+"static/assets/4-33c0954596ef72cb81736245fcc60124.jpg"},11:function(s,t,a){s.exports=a.p+"static/assets/5-ca0d0f3a4859f343cd98a3ee241c2282.jpg"},113:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("carousel轮播图组件")]),s._v(" "),a("p",[s._v("轮播图组件作用于后端配置的页面。通过接口返回字段的变化渲染不同轮播图")]),s._v(" "),a("h2",[s._v("使用方式")]),s._v(" "),s._m(0),s._v(" "),a("carousel-demo-1",{ref:"carousel-demo-1"}),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("scale模式")]),s._v(" "),s._m(2),s._v(" "),a("carousel-demo-2",{ref:"carousel-demo-2"}),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("分页与自动播放")]),s._v(" "),s._m(4),s._v(" "),a("carousel-demo-3",{ref:"carousel-demo-3"}),s._v(" "),s._m(5),s._v(" "),a("h2",[s._v("参数")]),s._v(" "),s._m(6),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(7)],1)};r._withStripped=!0;var e=a(7),n=a.n(e),l=a(8),p=a.n(l),_=a(9),v=a.n(_),c=a(10),o=a.n(c),h=a(11),i=a.n(h),j={components:{"carousel-demo-1":{template:'\n<example>\n  <t-carousel :data="data" @click="click"></t-carousel>\n</example>\n',data:function(){return{data:[{src:n.a,text:1},{src:p.a,text:2},{src:v.a,text:3},{src:o.a,text:4},{src:i.a,text:4}]}},methods:{click:function(s){this.$dialog({title:"点击了",text:s.text})}}},"carousel-demo-2":{template:'\n<example>\n  <t-carousel \n    :data="data" \n    :options="{\n      type: \'scale\'  \n    }" \n    @click="click"\n  ></t-carousel>\n</example>\n',data:function(){return{data:[{src:n.a,text:1},{src:p.a,text:2},{src:v.a,text:3},{src:o.a,text:4},{src:i.a,text:4}]}},methods:{click:function(s){this.$dialog({title:"点击了",text:s.text})}}},"carousel-demo-3":{template:'\n<example>\n  <t-carousel \n    :data="data" \n    :options="{\n      pagination: false,\n      autoplay: false  \n    }" \n    @click="click"\n  ></t-carousel>\n</example>\n',data:function(){return{data:[{src:n.a,text:1},{src:p.a,text:2},{src:v.a,text:3},{src:o.a,text:4},{src:i.a,text:4}]}},methods:{click:function(s){this.$dialog({title:"点击了",text:s.text})}}}}},u=a(0),d=Object(u.a)(j,r,[function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("传入data数据，即可展示data数组中src图片及轮播效果")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" src1 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@a/carousel/1.jpg'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" src2 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@a/carousel/2.jpg'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" src3 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@a/carousel/3.jpg'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" src4 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@a/carousel/4.jpg'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" src5 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@a/carousel/5.jpg'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src1,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src2,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src3,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src4,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src5,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'点击了'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": e.text\n        })\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-demo-1.vue --\x3e")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("options属性中type控制是否使用缩放模式")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"{\n      type: 'scale'  \n    }\"")]),s._v(" \n    @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src1,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src2,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src3,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src4,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src5,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'点击了'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": e.text\n        })\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-demo-2.vue --\x3e")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("options属性中pagination控制是否显示分页图标")]),this._v(" "),t("li",[this._v("options属性中autoplay控制是否自动播放")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"data"')]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{\n      pagination: false,\n      autoplay: false  \n    }"')]),s._v(" \n    @"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"click"')]),s._v("\n  >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("t-carousel")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("example")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src1,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src2,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src3,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src4,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v(": src5,\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n          },\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      click(e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$dialog({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'点击了'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": e.text\n        })\n      }\n    }\n  } \n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- carousel-demo-3.vue --\x3e")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("枚举值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("需要展示数据列表")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("{src}")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("options")]),s._v(" "),a("td",[s._v("需要控制组件变化参数列表")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[this._v("参数")]),this._v(" "),t("th",[this._v("说明")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[this._v("click")]),this._v(" "),t("td",[this._v("返回被点击对象")])])])])}],!1,null,null,null);d.options.__file="src/modules/grid/grid/carousel/index.md";t.default=d.exports},56:function(s,t,a){var r=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(s[r]=a[r])}return s},e=a(113);window.__pages=r({},window.__pages,{"grid/grid/carousel":e})},7:function(s,t,a){s.exports=a.p+"static/assets/1-9b6a1d0611c3ae59d45983327e8e3ca8.jpg"},8:function(s,t,a){s.exports=a.p+"static/assets/2-a920661e2ae7081f56704a88b8584aae.jpg"},9:function(s,t,a){s.exports=a.p+"static/assets/3-e8d1eb5159fc764b25567df2269aee31.jpg"}});