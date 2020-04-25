(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],d=0,g=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&g.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/imfundfirus-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0707":function(e,t,n){},"0a34":function(e,t,n){},"0be0":function(e,t,n){},"0d31":function(e,t,n){"use strict";var a=n("0707"),r=n.n(a);r.a},"2ccf":function(e,t,n){},"44a7":function(e,t,n){"use strict";var a=n("0a34"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",style:{backgroundImage:"url('"+e.todaysChallenge.icon_url+"')"},attrs:{id:"todaysChallengeContainer"}},[n("div",{staticClass:"box"},[n("h1",{staticClass:"text",attrs:{id:"todaysChallengeText"}},[e._v("Dein heutiges Abenteuer: "+e._s(e.todaysChallenge.titel))])]),n("button",{staticClass:"box text",attrs:{id:"clickHereButton"},on:{click:e.startChallenge}},[e._v("Hier klicken")])])},i=[],o=(n("d3b7"),n("25f0"),n("4de4"),n("caad"),n("2532"),n("d4ec")),l=n("bee2"),c=n("ade3"),u=n("bc3a"),d=n.n(u),g=void 0,m=function(){function e(){Object(o["a"])(this,e),Object(c["a"])(this,"baseUrl","https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges")}return Object(l["a"])(e,[{key:"getById",value:function(e){return this.all.then((function(t){return t.filter((function(t){return t.id===e}))[0]}))}},{key:"completeChallenge",value:function(e){var t=JSON.parse(window.localStorage.getItem("completedChallenges")||"[]");t.push(e),window.localStorage.setItem("completedChallenges",JSON.stringify(t))}},{key:"all",get:function(){return d.a.get("https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges").then((function(e){return e.data})).then((function(e){return e}))}},{key:"incomplete",get:function(){var e=JSON.parse(window.localStorage.getItem("completedChallenges"))||[];return this.all.then((function(t){return t.filter((function(t){return!e.includes(t.id)}))}))}},{key:"next",get:function(){return this.incomplete.then((function(e){return e.sort((function(e,t){return e.order>t.order}))[0]}))}}],[{key:"instance",get:function(){return void 0==g&&(g=new e),g}}]),e}(),h=m,p={name:"TodaysChallengeView",data:function(){return{todaysChallenge:null}},created:function(){this.fetchChallenge()},methods:{fetchChallenge:function(){var e=this;h.instance.next.then((function(t){e.todaysChallenge=t}))},startChallenge:function(){X.push("/challenges/"+this.todaysChallenge.id.toString())}}},f=p,_=(n("8fb4"),n("2877")),v=Object(_["a"])(f,s,i,!1,null,null,null),b=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v(e._s(e.challenge.titel))]),n("p",[e._v(e._s(e.challenge.story_before))]),n("h2",[e._v("Das brauchst du")]),n("ul",{staticClass:"list",attrs:{id:"material"}},e._l(e.challenge.material,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0),n("h2",[e._v("Anleitung")]),n("ul",{staticClass:"list",attrs:{id:"anleitung"}},e._l(e.challenge.anleitung,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0),e._l(e.challenge.attachments,(function(e){return n("div",{key:e},[n("img",{attrs:{src:e}})])})),n("button",{on:{click:e.completeChallenge}},[e._v("Fertig!")])],2)},C=[],x={name:"ChallengeView",props:["challengeId"],data:function(){return{challenge:void 0}},created:function(){var e=this;h.instance.getById(this.challengeId).then((function(t){e.challenge=t}))},methods:{completeChallenge:function(){h.instance.completeChallenge(this.challenge.id)}}},k=x,j=Object(_["a"])(k,y,C,!1,null,null,null),w=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"LandingPage"},[n("landing-page-banner",{attrs:{img_banner:"https://cdn.discordapp.com/attachments/690951465443000360/697084567311351838/Wald_SM_Header.png"}}),n("LandingPageText",{attrs:{img_left:"https://media.discordapp.net/attachments/690951465443000360/697084572218949702/Wald.png?width=506&height=899",header:"Imf & Firus",header_sub:"Eine App für jeden!",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}),n("div",{staticClass:"spacer"}),n("LandingPageText",{attrs:{img_right:"https://cdn.discordapp.com/attachments/690951465443000360/697084541294084137/Schlossinnen_Imf_Hamster_iPhoneX.png",header:"Imf & Firus",header_sub:"Eine App für jeden!",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}),n("div",{staticClass:"spacer"})],1)},O=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lp_textfield"},[e.img_left?n("img",{staticClass:"image image_left",attrs:{src:e.img_left}}):e._e(),n("div",{staticClass:"text_space"},[n("div",{staticClass:"header_cont"},[n("h1",[e._v(" "+e._s(e.header)+" ")]),n("h5",[e._v(" "+e._s(e.header_sub)+" ")])]),n("div",{staticClass:"text_cont"},[e._v(" "+e._s(e.text)+" ")])]),e.img_right?n("img",{staticClass:"image image_right",attrs:{src:e.img_right}}):e._e()])},P=[],I={name:"LandingPageText",props:{img_left:String,img_right:String,header:String,header_sub:String,text:String}},E=I,A=(n("44a7"),Object(_["a"])(E,L,P,!1,null,"1008eefd",null)),T=A.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lp_banner"},[e.img_banner?n("img",{staticClass:"image image_banner",attrs:{src:e.img_banner}}):e._e()])},H=[],B={name:"LandingPageBanner",props:{img_banner:String}},J=B,M=(n("7335"),Object(_["a"])(J,$,H,!1,null,"105b6a39",null)),q=M.exports,z={name:"LandingPage",components:{LandingPageText:T,LandingPageBanner:q},props:{}},D=z,F=(n("0d31"),Object(_["a"])(D,S,O,!1,null,"7d555981",null)),N=F.exports,U=[{path:"/challenges/:challengeId",component:w,props:!0},{path:"/today",component:b},{path:"/",component:N}],V=U,W=new r["a"]({mode:"history",base:"/imfundfirus-frontend/",routes:V}),X=W,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{language:"Deutsch",language_short:"DE"}}),n("router-view")],1)},K=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._m(0),n("a",{staticClass:"header_right header_contact",attrs:{href:"/contact"}},[e._v(" Contact ")]),n("a",{staticClass:"header_right header_aboutus",attrs:{href:"/about"}},[e._v(" About Us ")]),n("a",{staticClass:"header_right header_language",attrs:{href:"?lang=de"}},[e._v(" ◍ "+e._s(e.language)+" ("+e._s(e.language_short)+") ")])])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"header_home",attrs:{href:"/"}},[a("img",{staticClass:"header_logo",attrs:{src:n("cf05")}}),e._v(" Imf & Firus ")])}],Y={name:"Header",props:{language:String,language_short:String}},Z=Y,ee=(n("787a"),Object(_["a"])(Z,Q,R,!1,null,"82a43b16",null)),te=ee.exports,ne={name:"App",components:{Header:te}},ae=ne,re=(n("034f"),Object(_["a"])(ae,G,K,!1,null,null,null)),se=re.exports;a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({render:function(e){return e(se)},router:X}).$mount("#app")},"690f":function(e,t,n){},7335:function(e,t,n){"use strict";var a=n("0be0"),r=n.n(a);r.a},"787a":function(e,t,n){"use strict";var a=n("2ccf"),r=n.n(a);r.a},"85ec":function(e,t,n){},"8fb4":function(e,t,n){"use strict";var a=n("690f"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.c7de406e.png"}});
//# sourceMappingURL=app.e339ed45.js.map