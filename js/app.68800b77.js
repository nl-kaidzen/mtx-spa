(function(e){function t(t){for(var n,a,l=t[0],i=t[1],u=t[2],c=0,v=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(v.length)v.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ab4699a2"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"eccd40e9"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var u=s[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===o))return t()}var v=document.getElementsByTagName("style");for(l=0;l<v.length;l++){u=v[l],c=u.getAttribute("data-href");if(c===n||c===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],h.parentNode.removeChild(h),r(s)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=l(e);var v=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(h);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",v.name="ChunkLoadError",v.type=n,v.request=a,r[1](v)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/mtx-spa/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var v=0;v<u.length;v++)t(u[v]);var h=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0ab9":function(e,t,r){"use strict";var n=r("e075"),a=r.n(n);a.a},"1b65":function(e,t,r){},"21bb":function(e,t,r){"use strict";var n=r("2dad"),a=r.n(n);a.a},"2dad":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("button",{staticClass:"burger-btn",on:{click:e.closeBurgerMenu}},[e._v("☰")]),r("NavItem")],1),r("div",{staticClass:"router-container"},[r("router-view")],1)])},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"nav-list",on:{click:e.closeBurgerMenu}},[r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/user"}},[e._v("User Form")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/charts"}},[e._v("Charts")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{attrs:{to:"/table"}},[e._v("Table")])],1)])},l=[],i={name:"NavItem",data:function(){return{isOpen:!1}},methods:{closeBurgerMenu:function(){var e=document.querySelector(".nav-list");e.classList.toggle("open")}}},u=i,c=(r("0ab9"),r("2877")),v=Object(c["a"])(u,s,l,!1,null,null,null),h=v.exports,p={name:"app",components:{NavItem:h},data:function(){return{isBurgerButtonVisible:"false",isShow:!1}},methods:{closeBurgerMenu:function(){var e=document.querySelector(".nav-list");e.classList.toggle("open")}}},f=p,m=(r("5c0b"),Object(c["a"])(f,a,o,!1,null,null,null)),d=m.exports,b=(r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{staticClass:"home__logo",attrs:{alt:"Vue logo",src:"https://www.montronix.com//images/Inhalt/MTX_Logo.svg",width:"500",height:"150"}}),r("HelloWorld",{attrs:{msg:"Welcome to test SPA for MTX"}})],1)},_=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),e._m(1),e._m(2),r("h3",[e._v("Installed CLI Plugins")]),e._m(3),r("h3",[e._v("Essential Links")]),e._m(4),r("h3",[e._v("Ecosystem")]),e._m(5)])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-big"},[e._v(" This is a test application to show my ability to work with JavaScript and the Vue.js framework. Source code is lacated at "),r("a",{attrs:{href:"https://github.com/nl-kaidzen/mtx-spa",target:"_blank",rel:"noopener"}},[e._v("my Github repository")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-big"},[e._v(" On the "),r("b",[e._v("User Form")]),e._v(" tab, I placed a simple data entry form that processes all fields in real time and creates JSON when clicking Save. This JSON is output to the console. I advise you to look there. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-big"},[e._v(" On the "),r("b",[e._v("Charts")]),e._v(" tab is a chart. When you click on the button, data will be generated and displayed on the graph. The delay is approximately 30ms, which will correspond to ~ 30 frames per second. Data will be generated within 15 seconds. I limited the size of the graph to 200 points along the X axis, but this can be customized. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],w={name:"HelloWorld",props:{msg:String}},j=w,C=(r("a127"),Object(c["a"])(j,y,k,!1,null,"78ffb17c",null)),x=C.exports,E={name:"home",components:{HelloWorld:x}},O=E,S=(r("21bb"),Object(c["a"])(O,g,_,!1,null,null,null)),T=S.exports;n["a"].use(b["a"]);var P=[{path:"/",name:"home",component:T},{path:"/user",name:"user",component:function(){return r.e("about").then(r.bind(null,"1511"))}},{path:"/charts",name:"charts",component:function(){return r.e("about").then(r.bind(null,"6923"))}},{path:"/table",name:"table",component:function(){return r.e("about").then(r.bind(null,"3f0e"))}}],N=new b["a"]({routes:P}),$=N,I=r("2f62");n["a"].use(I["a"]);var L=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:$,store:L,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"9c0c":function(e,t,r){},a127:function(e,t,r){"use strict";var n=r("1b65"),a=r.n(n);a.a},e075:function(e,t,r){}});
//# sourceMappingURL=app.68800b77.js.map