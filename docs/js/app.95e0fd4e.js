(function(e){function t(t){for(var s,o,l=t[0],i=t[1],c=t[2],d=0,m=[];d<l.length;d++)o=l[d],n[o]&&m.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},r=[];function o(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"96f7c475"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,s){a=n[e]=[t,s]});t.push(a[2]=s);var r,i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(e),r=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+s+": "+r+")");o.type=s,o.request=r,a[1](o)}n[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,i.appendChild(c)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07bd":function(e,t,a){"use strict";var s=a("df6d"),n=a.n(s);n.a},"15cf":function(e,t,a){"use strict";var s=a("8447"),n=a.n(s);n.a},"2c16":function(e,t,a){"use strict";var s=a("5193"),n=a.n(s);n.a},"2ddd":function(e,t,a){"use strict";var s=a("6832"),n=a.n(s);n.a},3637:function(e,t,a){},"426a":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"4a8d":function(e,t,a){"use strict";var s=a("bfaf"),n=a.n(s);n.a},5193:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e792");var s=a("2b0e"),n=a("ce5b"),r=a.n(n);a("bf40");s["default"].use(r.a,{});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Snackbar"),a("v-toolbar",{attrs:{app:"","clipped-left":!0}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.changeRoute("leagues")}}},[e._v("Leagues")])],1)],1),a("v-content",[a("router-view")],1),a("v-navigation-drawer",{attrs:{clipped:!0,"disable-resize-watcher":"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),a("v-list-tile",{attrs:{to:{path:"/leagues"}}},[a("v-list-tile-action",[a("v-icon",[e._v(e._s(e.menuItems[0].icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(e.menuItems[0].title))])],1)],1)],1)],1),a("v-footer",{attrs:{fixed:e.fixed,app:""}},[a("span",[e._v("© 2018 Desperate Solutions")])])],1)},l=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-snackbar",{attrs:{value:e.snack.visible,color:e.snack.color,timeout:e.snack.timeout,"multi-line":!0},on:{input:e.CLOSE_SNACKBAR}},[e._v("\n  "+e._s(e.snack.message)+e._s(e.snack.info)+"\n  "),a("v-btn",{attrs:{flat:""},on:{click:e.CLOSE_SNACKBAR}},[e._v("Close")])],1)},c=[],d=a("2f62"),u={name:"Snackbar",computed:Object(d["c"])(["snack","snack.visible"]),methods:Object(d["b"])(["CLOSE_SNACKBAR"])},m=u,f=(a("6a54"),a("2877")),p=a("6544"),h=a.n(p),v=a("8336"),b=a("2db4"),g=Object(f["a"])(m,i,c,!1,null,"d327c66c",null);g.options.__file="Snackbar.vue";var k=g.exports;h()(g,{VBtn:v["a"],VSnackbar:b["a"]});var j={name:"App",components:{Snackbar:k},data(){return{drawer:!1,fixed:!0,menuItems:[{title:"Leagues",icon:"dashboard"}],title:"Squash Rating"}},methods:{changeRoute(e){this.$router.push({name:e})}}},_=j,y=a("7496"),x=a("549c"),S=a("ce7e"),w=a("553a"),L=a("132d"),A=a("8860"),V=a("ba95"),E=a("40fe"),C=a("5d23"),T=a("f774"),$=a("9910"),P=a("71d9"),O=a("2a7f"),G=a("706c"),D=Object(f["a"])(_,o,l,!1,null,null,null);D.options.__file="App.vue";var R=D.exports;h()(D,{VApp:y["a"],VBtn:v["a"],VContent:x["a"],VDivider:S["a"],VFooter:w["a"],VIcon:L["a"],VList:A["a"],VListTile:V["a"],VListTileAction:E["a"],VListTileContent:C["a"],VListTileTitle:C["b"],VNavigationDrawer:T["a"],VSpacer:$["a"],VToolbar:P["a"],VToolbarItems:O["a"],VToolbarSideIcon:G["a"],VToolbarTitle:O["b"]});var I=a("8c4f"),F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-form",{ref:"addGame"},[a("v-card",[a("v-container",[a("v-card-title",[a("h3",{staticClass:"headline mb-0"},[e._v("Legg til spill")])]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:""}},[a("select-player",{attrs:{items:e.players,label:"Player One"},model:{value:e.playerone,callback:function(t){e.playerone=t},expression:"playerone"}})],1),a("v-flex",{attrs:{lg6:"",md6:""}},[a("select-player",{attrs:{items:e.players,label:"Player Two"},model:{value:e.playertwo,callback:function(t){e.playertwo=t},expression:"playertwo"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-text-field",{attrs:{label:"Player 1 score:",mask:e.whiteMask},model:{value:e.whiteValue,callback:function(t){e.whiteValue=t},expression:"whiteValue"}})],1),a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-text-field",{attrs:{label:"Player 2 score:",mask:e.blackMask},model:{value:e.blackValue,callback:function(t){e.blackValue=t},expression:"blackValue"}})],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-checkbox",{attrs:{label:"Spesifiser dato og tidspunkt"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1)],1),e.checkbox?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-menu",{attrs:{"close-on-content-click":!0,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:e.datemenu,callback:function(t){e.datemenu=t},expression:"datemenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Velg dato","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),a("v-date-picker",{on:{input:function(t){e.datemenu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t}},model:{value:e.timemenu,callback:function(t){e.timemenu=t},expression:"timemenu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Velg tidspunkt","prepend-icon":"access_time",readonly:""},slot:"activator",model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),e.timemenu?a("v-time-picker",{attrs:{"full-width":"",format:"24hr"},on:{change:function(t){e.$refs.menu.save(e.time)}},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}):e._e()],1)],1)],1):e._e(),a("v-card-actions",[a("v-btn",{on:{click:e.submit}},[e._v("\n            Legg til spill\n          ")]),a("v-spacer"),a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator"},on:{click:e.clear},slot:"activator"},[e._v("\n              Reset\n            ")]),a("span",[e._v("Resetter ikke dropdown-menyen ordentlig, velg spillere på nytt")])],1)],1)],1)],1)],1)],1)},z=[],B=a("c1df"),N=a.n(B),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-select",{attrs:{items:e.items,label:e.label,"item-value":"id","item-text":"name"},on:{change:e.selectPlayer},model:{value:e.pl,callback:function(t){e.pl=t},expression:"pl"}})},U=[],K={data(){return{pl:""}},props:["items","label"],watch:{selected(e){this.pl=e}},methods:{selectPlayer(e){this.$emit("input",e)}}},W=K,H=(a("2c16"),a("b56d")),Y=Object(f["a"])(W,M,U,!1,null,"b51f163c",null);Y.options.__file="SelectPlayer.vue";var q=Y.exports;h()(Y,{VSelect:H["a"]}),N.a.locale("nb");var J={name:"add-game",data:()=>({whiteMask:"##",blackMask:"##",whiteValue:"",blackValue:"",playerone:"",playertwo:"",date:(new Date).toISOString().substr(0,10),datemenu:!1,time:N()().format("LT"),timemenu:!1,checkbox:!1}),computed:Object(d["c"])(["players","selectedLeague"]),created(){this.$store.dispatch("GET_ALL_PLAYERS",{league:this.$store.state.selectedLeague.id})},components:{"select-player":q},methods:{submit(){this.$store.dispatch("ADD_A_GAME",{league:this.$store.state.selectedLeague.id,whiteId:this.playerone,blackId:this.playertwo,result:`${this.whiteValue}-${this.blackValue}`,date:N()(new Date(`${this.date} ${this.time}`)).format()})},clear(){this.whiteValue="",this.blackValue="",this.playerone="",this.playertwo=""}}},Q=J,X=(a("fb0d"),a("b0af")),Z=a("99d9"),ee=a("12b2"),te=a("ac7c"),ae=a("a523"),se=a("2e4b"),ne=a("0e8f"),re=a("4bd4"),oe=a("a722"),le=a("e449"),ie=a("2677"),ce=a("c964"),de=a("3a2f"),ue=Object(f["a"])(Q,F,z,!1,null,"a40adfa0",null);ue.options.__file="AddGame.vue";var me=ue.exports;h()(ue,{VBtn:v["a"],VCard:X["a"],VCardActions:Z["a"],VCardTitle:ee["a"],VCheckbox:te["a"],VContainer:ae["a"],VDatePicker:se["a"],VFlex:ne["a"],VForm:re["a"],VLayout:oe["a"],VMenu:le["a"],VSpacer:$["a"],VTextField:ie["a"],VTimePicker:ce["a"],VTooltip:de["a"]});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.leagues,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs-left",on:{click:function(a){e.chooseLeague(t.item.name,t.item)}}},[e._v(e._s(t.item.name))])]}}])}),a("v-layout",{staticClass:"fab-container"},[a("v-btn",{attrs:{fab:""},on:{click:e.addLeague}},[a("v-icon",[e._v("add")])],1)],1)],1)},pe=[],he={name:"leagues",computed:Object(d["c"])(["leagues"]),data(){return{headers:[{text:"League",align:"left",sortable:!1,value:"name"}]}},methods:{chooseLeague(e,t){this.$store.dispatch("SELECT_LEAGUE",{selectedLeague:t}),this.$router.push({path:`league/${e}/addGame`})},addLeague(){this.$router.push({name:"newLeague"})}},created(){this.$store.dispatch("GET_ALL_LEAGUES"),this.name=""}},ve=he,be=(a("8c33"),a("8fea")),ge=Object(f["a"])(ve,fe,pe,!1,null,"235da4ce",null);ge.options.__file="Leagues.vue";var ke=ge.exports;h()(ge,{VBtn:v["a"],VContainer:ae["a"],VDataTable:be["a"],VIcon:L["a"],VLayout:oe["a"]});var je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-tabs",{attrs:{dark:"",grow:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("v-tab",{key:"1",attrs:{to:{path:e.getAddGameLink()},ripple:""}},[e._v("\n      Add Game\n    ")]),a("v-tab",{key:"2",attrs:{to:{path:e.getGamesLink()},ripple:""}},[e._v("\n      Games\n    ")]),a("v-tab",{key:"3",attrs:{to:{path:e.getAddPlayerLink()},ripple:""}},[e._v("\n      Add Player\n    ")]),a("v-tab",{key:"4",attrs:{to:{path:e.getRankingLink()},ripple:""}},[e._v("\n      Ranking\n    ")])],1),a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("router-view")],1)],1)],1)},_e=[];const ye=(e,t)=>e.find(e=>e.id===t).name,xe=e=>0===Object.keys(e).length;var Se={name:"league",props:["name"],methods:{getAddGameLink(){return`/league/${this.name}/addGame`},getGamesLink(){return`/league/${this.name}/games`},getAddPlayerLink(){return`/league/${this.name}/addPlayer`},getRankingLink(){return`/league/${this.name}/ranking`}},data(){return{active:null}},created(){xe(this.$store.state.selectedLeague)&&this.$router.push({path:"/leagues"})}},we=Se,Le=(a("2ddd"),a("0789")),Ae=a("71a3"),Ve=a("fe57"),Ee=Object(f["a"])(we,je,_e,!1,null,"5d58c199",null);Ee.options.__file="SpecificLeague.vue";var Ce=Ee.exports;h()(Ee,{VContainer:ae["a"],VLayout:oe["a"],VSlideYTransition:Le["d"],VTab:Ae["a"],VTabs:Ve["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.games,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.whiteId))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.blackId))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.result))])]}}])})],1),a("v-app")],1)},$e=[],Pe={name:"games",computed:Object(d["c"])(["games","players"]),data(){return{headers:[{text:"Player One",align:"left",sortable:!1,value:"white"},{text:"Player Two",align:"left",sortable:!1,value:"black"},{text:"Result",value:"result"}]}},created(){xe(this.$store.state.selectedLeague)&&this.$router.push({path:"/leagues"}),this.$store.dispatch("GET_ALL_GAMES",{league:this.$store.state.selectedLeague.id})}},Oe=Pe,Ge=(a("f9fb"),Object(f["a"])(Oe,Te,$e,!1,null,"63605982",null));Ge.options.__file="Games.vue";var De=Ge.exports;h()(Ge,{VApp:y["a"],VContainer:ae["a"],VDataTable:be["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.players,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.name))]),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.rating))])]}}])})],1)],1)},Ie=[],Fe={name:"ranking",computed:Object(d["c"])(["players"]),data(){return{headers:[{text:"Player",align:"left",sortable:!1,value:"name"},{text:"Rating",value:"rating",sortable:!0}]}},created(){xe(this.$store.state.selectedLeague)&&this.$router.push({path:"/leagues"}),this.$store.dispatch("GET_ALL_PLAYERS",{league:this.$store.state.selectedLeague.id})}},ze=Fe,Be=(a("15cf"),Object(f["a"])(ze,Re,Ie,!1,null,"6bd7e4e4",null));Be.options.__file="Ranking.vue";var Ne=Be.exports;h()(Be,{VApp:y["a"],VContainer:ae["a"],VDataTable:be["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-form",{ref:"addPlayer"},[a("v-card",[a("v-card-title",[a("h3",{staticClass:"headline mb-12"},[e._v("Legg til ny spiller")])]),a("v-card-text",{staticClass:"text-xs-center",staticStyle:{height:"100px"}},[a("v-text-field",{attrs:{label:"Name:"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-card-actions",[a("v-btn",{attrs:{block:""},on:{click:e.addPlayer}},[e._v("\n          Add player\n        ")])],1)],1)],1)],1)},Ue=[],Ke={name:"addPlayer",data(){return{name:"",error:null}},methods:{addPlayer(){this.$store.dispatch("ADD_PLAYER",{league:this.$store.state.selectedLeague.id,name:this.name}),this.name=""}},created(){xe(this.$store.state.selectedLeague)&&this.$router.push({path:"/leagues"})}},We=Ke,He=(a("07bd"),Object(f["a"])(We,Me,Ue,!1,null,"1de0e6ca",null));He.options.__file="AddPlayer.vue";var Ye=He.exports;h()(He,{VBtn:v["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:ee["a"],VContainer:ae["a"],VForm:re["a"],VTextField:ie["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-form",{ref:"addGame"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",[a("div",[a("h3",{staticClass:"headline mb-0"},[e._v("Log inn")])])]),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-card-text",[a("v-text-field",{attrs:{label:"Username:"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-card-text",[a("v-text-field",{attrs:{label:"Password:","append-icon":e.show?"visibility_off":"visibility",type:e.show?"text":"password"},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{block:""},on:{click:e.login}},[e._v("\n              Log inn\n            ")])],1)],1)],1)],1)],1)],1)},Je=[],Qe=a("bc3a"),Xe=a.n(Qe);const Ze="https://glickorater.desperate.solutions/",et=e=>{const t=`${Ze}${e}/game`;return Xe.a.get(t).then(e=>e.data)},tt=e=>{const t=`${Ze}${e}/player`;return Xe.a.get(t).then(e=>e.data).catch(e=>{return gt.push({path:"/leagues"}),Promise.reject(e.response)})},at=(e,t)=>{const a=`${Ze}${e}/player`;return Xe()({method:"post",url:a,data:{name:t},config:{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`}}}).then(e=>e).catch(e=>Promise.reject(e.response))},st=(e,t,a,s,n)=>{const r=`${Ze}${e}/game`;return Xe()({method:"post",url:r,data:{whiteId:t,blackId:a,result:s,timestamp:n},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`}}).then(e=>e).catch(e=>Promise.reject(e.response))},nt=(e,t)=>{const a=`${Ze}league`;return Xe()({method:"post",url:a,data:{name:e,settings:t},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${localStorage.token}`}}).then(e=>e).catch(e=>Promise.reject(e.response))},rt=()=>{const e=`${Ze}league`;return Xe()({method:"GET",url:e}).then(e=>e.data).catch(e=>Promise.reject(e.response))},ot=(e,t)=>{const a=`${Ze}token`;return Xe()({method:"post",url:a,data:`grant_type=password&username=${e}&password=${t}`,headers:{"Content-Type":"application/x-www-form-urlencoded","Cache-Control":"no-cache"}}).then(e=>{const t=e.data;t.access_token&&localStorage.setItem("token",t.access_token),Promise.resolve()}).catch(e=>Promise.reject(e.response))};var lt={name:"Login",data(){return{context:"login context",username:"",password:"",error:null,show:!1}},methods:{login(){ot(this.username,this.password).then(()=>this.$router.replace(this.$route.query.redirect))}}},it=lt,ct=(a("d5af"),Object(f["a"])(it,qe,Je,!1,null,"18e4eb20",null));ct.options.__file="Login.vue";var dt=ct.exports;h()(ct,{VBtn:v["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:ee["a"],VContainer:ae["a"],VFlex:ne["a"],VForm:re["a"],VLayout:oe["a"],VTextField:ie["a"]});var ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-md":""}},[a("v-form",{ref:"addLeague"},[a("v-layout",[a("v-flex",{attrs:{lg6:"",md6:"",sm12:"","offset-lg3":"","offset-md3":""}},[a("v-card",[a("v-card-title",[a("h3",{staticClass:"headline mb-12"},[e._v("Opprett liga")])]),a("v-card-text",{staticClass:"text-xs-center"},[a("v-text-field",{attrs:{label:"Name:"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-checkbox",{attrs:{label:"Draw allowed"},model:{value:e.checkDraw,callback:function(t){e.checkDraw=t},expression:"checkDraw"}})],1)],1),a("v-flex",{attrs:{lg6:"",md6:""}},[a("v-card-text",{staticClass:"text-xs-center"},[a("v-checkbox",{attrs:{label:"Scored results"},model:{value:e.checkScored,callback:function(t){e.checkScored=t},expression:"checkScored"}})],1)],1)],1),a("v-card-text",{staticClass:"text-xs-center"},[a("v-text-field",{attrs:{label:"Period length:",mask:e.periodMask},model:{value:e.periodLength,callback:function(t){e.periodLength=t},expression:"periodLength"}})],1),a("v-card-actions",[a("v-btn",{attrs:{block:""},on:{click:e.addLeague}},[e._v("\n              Add League\n            ")])],1)],1)],1)],1)],1)],1)},mt=[],ft={name:"AddLeague",data:()=>({periodMask:"#",checkDraw:!1,checkScored:!0,periodLength:0,name:""}),methods:{addLeague(){this.$store.dispatch("ADD_A_LEAGUE",{name:this.name,settings:{drawAllowed:this.checkDraw,periodLength:parseInt(this.periodLength,10),scoredResults:this.checkScored}})}}},pt=ft,ht=(a("4a8d"),Object(f["a"])(pt,ut,mt,!1,null,"1b94b484",null));ht.options.__file="AddLeague.vue";var vt=ht.exports;h()(ht,{VBtn:v["a"],VCard:X["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:ee["a"],VCheckbox:te["a"],VContainer:ae["a"],VFlex:ne["a"],VForm:re["a"],VLayout:oe["a"],VTextField:ie["a"]}),s["default"].use(I["a"]);const bt=new I["a"]({base:"/",routes:[{path:"/",name:"root",component:ke},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"/leagues",name:"leagues",component:ke},{path:"/league/:name",name:"specificleague",component:Ce,props:!0,children:[{path:"addGame",name:"addgame",component:me},{path:"ranking",name:"ranking",component:Ne},{path:"games",name:"games",component:De},{path:"addPlayer",name:"addplayer",component:Ye}]},{path:"/login",name:"login",component:dt},{path:"/addLeague",name:"newLeague",component:vt}]});bt.beforeEach((e,t,a)=>{const s=["/login","/leagues","/"],n=!s.includes(e.path),r=localStorage.getItem("token");if(n&&!r){const e=window.location.pathname;return a({name:"login",query:{redirect:e}})}return a()});var gt=bt;s["default"].use(d["a"]);const kt=!1,jt={GET_ALL_GAMES({commit:e},{league:t}){et(t).then(t=>{e("SET_GAMES",{games:t})}).catch(t=>{e("GET_FAILED",{error:t}),e("SHOW_SNACKBAR",{error:t,message:"Failed to retrieve games",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},GET_ALL_PLAYERS({commit:e},{league:t}){tt(t).then(t=>{e("SET_PLAYERS",{players:t})}).catch(t=>{e("GET_FAILED",{error:t}),e("SHOW_SNACKBAR",{error:t,message:"Failed to retrieve all players",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},ADD_A_GAME({commit:e},{league:t,whiteId:a,blackId:s,result:n,date:r}){st(t,a,s,n,r).then(t=>{e("POST_SUCCESS",{response:t}),e("SHOW_SNACKBAR",{message:"Successfully added a game",info:"",color:"success"})}).catch(t=>{e("POST_FAILED",{error:t}),e("SHOW_SNACKBAR",{error:t,message:"Failed to add game",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},ADD_A_LEAGUE({commit:e},{name:t,settings:a}){nt(t,a).then(t=>{e("POST_SUCCESS",{response:t}),e("SHOW_SNACKBAR",{message:"Successfully added a league",info:"",color:"success"})}).catch(t=>{e("POST_FAILED",{error:t}),e("SHOW_SNACKBAR",{error:t,message:"Failed to add new league",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},ADD_PLAYER({commit:e},{league:t,name:a}){at(t,a).then(t=>{e("POST_SUCCESS",{response:t}),e("SHOW_SNACKBAR",{message:"Successfully added a new player",info:"",color:"success"})}).catch(t=>{e("POST_FAILED",{error:t}),e("SHOW_SNACKBAR",{message:"Failed to add a new player",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},GET_ALL_LEAGUES({commit:e}){rt().then(t=>{e("SET_LEAGUES",{leagues:t})}).catch(t=>{e("GET_FAILED",{error:t}),e("SHOW_SNACKBAR",{error:t,message:"Failed to retrieve leagues",info:` -- ${t.status} - ${t.statusText}`,color:"red"})})},SELECT_LEAGUE({commit:e},{selectedLeague:t}){e("SELECT_LEAGUE",{selectedLeague:t})}},_t={SET_GAMES:(e,{games:t})=>{const a=e;a.games=t.map(t=>({blackId:ye(e.players,t.blackId),whiteId:ye(e.players,t.blackId),result:t.result,id:t.id}))},SET_PLAYERS:(e,{players:t})=>{const a=e;a.players=t},SET_LEAGUES:(e,{leagues:t})=>{const a=e;a.leagues=t},GET_FAILED:(e,{error:t})=>{const a=e;a.error=t},POST_FAILED:(e,{error:t})=>{const a=e;a.error=t},POST_SUCCESS:(e,{response:t})=>{const a=e;a.successInfo=t},SELECT_LEAGUE:(e,{selectedLeague:t})=>{const a=e;a.selectedLeague=t},SHOW_SNACKBAR:(e,t)=>{const a=e;a.snack={...e.snack,...t,visible:!0}},CLOSE_SNACKBAR:e=>{const t=e;t.snack.visible=!1,t.snack.multiline=!1,t.snack.timeout=6e3,t.snack.message=null,t.snack.info=null,t.snack.color=void 0}},yt={visible:e=>e.snack.visible},xt={successInfo:{},loading:!1,error:!1,selectedWhitePlayer:{name:"Player One"},selectedBlackPlayer:{name:"Player Two"},games:[],leagues:[],players:[],selectedLeague:{},snack:{visible:!1,message:null,info:null,timeout:6e3,multiline:!1,color:void 0}};var St=new d["a"].Store({state:xt,debug:kt,actions:jt,mutations:_t,getters:yt,strict:!0}),wt=a("9483");Object(wt["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var Lt=a("a7fe"),At=a.n(Lt);s["default"].use(At.a,Xe.a);var Vt=a("2ead"),Et=a.n(Vt);s["default"].use(Et.a),s["default"].config.productionTip=!1,s["default"].axios.defaults.baseURL="https://glickorater.desperate.solutions/",new s["default"]({router:gt,store:St,render:e=>e(R)}).$mount("#app")},6832:function(e,t,a){},"6a54":function(e,t,a){"use strict";var s=a("c279"),n=a.n(s);n.a},8447:function(e,t,a){},"8c33":function(e,t,a){"use strict";var s=a("fbdb"),n=a.n(s);n.a},bfaf:function(e,t,a){},c279:function(e,t,a){},d5af:function(e,t,a){"use strict";var s=a("e96f"),n=a.n(s);n.a},df6d:function(e,t,a){},e96f:function(e,t,a){},f9fb:function(e,t,a){"use strict";var s=a("3637"),n=a.n(s);n.a},fb0d:function(e,t,a){"use strict";var s=a("426a"),n=a.n(s);n.a},fbdb:function(e,t,a){}});
//# sourceMappingURL=app.95e0fd4e.js.map