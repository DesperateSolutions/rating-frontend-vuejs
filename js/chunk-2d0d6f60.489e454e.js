(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6f60"],{"757c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-app",{attrs:{id:"inspire"}},[a("v-card",[a("v-data-table",{staticClass:"elevation-24",attrs:{headers:e.headers,items:e.players,"hide-default-footer":"","sort-by":e.sortBy,"sort-desc":e.descending,"items-per-page":e.rowsPerPage}})],1)],1)],1)},n=[],s=(a("7db0"),a("b0c0"),a("96cf"),a("1da1")),i=a("2f62"),c=a("5600"),o={name:"Ranking",data:function(){return{sortBy:"rating",descending:!0,rowsPerPage:-1,headers:[{text:"Player",align:"left",sortable:!1,value:"name"},{text:"# of Games",sortable:!1,value:"games.length"},{text:"Rating",value:"rating"}]}},computed:Object(i["d"])(["players"]),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(c["b"])(e.$store.state.selectedLeague)){t.next=5;break}return t.next=3,e.$store.dispatch("GET_ALL_LEAGUES").then((function(){var t=e.$store.state.leagues.find((function(t){return t.name===e.$route.params.name}));e.$store.dispatch("GET_ALL_PLAYERS",{league:t.id}),e.$store.dispatch("SELECT_LEAGUE",{selectedLeague:t})}));case 3:t.next=6;break;case 5:e.$store.dispatch("GET_ALL_PLAYERS",{league:e.$store.state.selectedLeague.id});case 6:case"end":return t.stop()}}),t)})))()}},d=o,u=a("2877"),l=a("6544"),p=a.n(l),f=a("7496"),g=a("b0af"),b=a("a523"),h=a("8fea"),m=Object(u["a"])(d,r,n,!1,null,"36b0734d",null);t["default"]=m.exports;p()(m,{VApp:f["a"],VCard:g["a"],VContainer:b["a"],VDataTable:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0d6f60.489e454e.js.map