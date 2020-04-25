(function(e){function t(t){for(var a,o,c=t[0],i=t[1],s=t[2],f=0,h=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(h.length)h.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/imfundfirus-frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"2ae1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{backgroundImage:"url('"+e.todaysChallenge.icon_url+"')"},attrs:{id:"todaysChallengeContainer"}},[n("div",{staticClass:"box"},[n("h1",{staticClass:"text",attrs:{id:"todaysChallengeText"}},[e._v("Dein heutiges Abenteuer: "+e._s(e.todaysChallenge.titel))])]),n("button",{staticClass:"box text",attrs:{id:"clickHereButton"},on:{click:e.startChallenge}},[e._v("Hier klicken")])])},o=[],c=(n("d3b7"),n("25f0"),n("4de4"),n("caad"),n("2532"),n("d4ec")),i=n("bee2"),s=n("ade3"),u=n("bc3a"),f=n.n(u),h=void 0,d=function(){function e(){Object(c["a"])(this,e),Object(s["a"])(this,"baseUrl","https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges")}return Object(i["a"])(e,[{key:"getById",value:function(e){return this.all.then((function(t){return t.filter((function(t){return t.id===e}))[0]}))}},{key:"completeChallenge",value:function(e){var t=JSON.parse(window.localStorage.getItem("completedChallenges")||"[]");t.push(e),window.localStorage.setItem("completedChallenges",JSON.stringify(t))}},{key:"all",get:function(){return f.a.get("https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges").then((function(e){return e.data})).then((function(e){return e}))}},{key:"incomplete",get:function(){var e=JSON.parse(window.localStorage.getItem("completedChallenges"))||[];return this.all.then((function(t){return t.filter((function(t){return!e.includes(t.id)}))}))}},{key:"next",get:function(){return this.incomplete.then((function(e){return e.sort((function(e,t){return e.order>t.order}))[0]}))}}],[{key:"instance",get:function(){return void 0==h&&(h=new e),h}}]),e}(),g=d,p={name:"TodaysChallengeView",data:function(){return{todaysChallenge:null}},created:function(){this.fetchChallenge()},methods:{fetchChallenge:function(){var e=this;g.instance.next.then((function(t){e.todaysChallenge=t}))},startChallenge:function(){g.instance.completeChallenge(this.todaysChallenge.id),P.push("/challenges/"+this.todaysChallenge.id.toString())}}},v=p,b=(n("8fb4"),n("2877")),m=Object(b["a"])(v,l,o,!1,null,null,null),_=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Deine Challenge!")]),n("p",[e._v(e._s(e.challenge.titel))])])},C=[],w={name:"ChallengeView",props:["challengeId"],data:function(){return{challenge:void 0}},created:function(){var e=this;g.instance.getById(this.challengeId).then((function(t){e.challenge=t}))}},x=w,O=Object(b["a"])(x,y,C,!1,null,null,null),j=O.exports,k=[{path:"/challenges/:challengeId",component:j,props:!0},{path:"/today",component:_}],S=k,I=new r["a"]({mode:"history",base:"/imfundfirus-frontend/",routes:S}),P=I,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{language:"Deutsch",language_short:"DE"}}),n("router-view")],1)},$=[],H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("a",{staticClass:"header_right header_contact",attrs:{href:"/contact"}},[e._v(" Contact ")]),n("a",{staticClass:"header_right header_aboutus",attrs:{href:"/about"}},[e._v(" About Us ")]),n("a",{staticClass:"header_right header_language",attrs:{href:"?lang=de"}},[e._v(" ◍ "+e._s(e.language)+" ("+e._s(e.language_short)+") ")])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"header_home",attrs:{href:"/"}},[a("img",{staticClass:"header_logo",attrs:{src:n("cf05")}}),e._v(" Imf & Firus ")])}],T={name:"Header",props:{language:String,language_short:String}},z=T,D=(n("ff2b"),Object(b["a"])(z,H,J,!1,null,"7a67032c",null)),M=D.exports,A={name:"App",components:{Header:M}},B=A,N=(n("034f"),Object(b["a"])(B,E,$,!1,null,null,null)),U=N.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({render:function(e){return e(U)},router:P}).$mount("#app")},"690f":function(e,t,n){},"85ec":function(e,t,n){},"8fb4":function(e,t,n){"use strict";var a=n("690f"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.c7de406e.png"},ff2b:function(e,t,n){"use strict";var a=n("2ae1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7a9f1e34.js.map