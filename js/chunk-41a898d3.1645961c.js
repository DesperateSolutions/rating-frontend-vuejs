(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a898d3"],{"0fd9":function(t,e,r){"use strict";r("4b85");var n=r("2b0e"),a=r("d9f7"),i=r("80d2");const o=["sm","md","lg","xl"],s=["start","end","center"];function l(t,e){return o.reduce((r,n)=>{return r[t+Object(i["B"])(n)]=e(),r},{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...s,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:d})),h=t=>[...s,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:h})),v={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,r){let n=g[t];if(null!=r){if(e){const r=e.replace(t,"");n+=`-${r}`}return n+=`-${r}`,n.toLowerCase()}}const y=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:h},...p},render(t,{props:e,data:r,children:n}){let i="";for(const a in e)i+=String(e[a]);let o=y.get(i);if(!o){let t;for(t in o=[],v)v[t].forEach(r=>{const n=e[r],a=b(t,r,n);a&&o.push(a)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(i,o)}return t(e.tag,Object(a["a"])(r,{staticClass:"row",class:o}),n)}})},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"4bd4":function(t,e,r){"use strict";var n=r("58df"),a=r("7e2b"),i=r("3206");e["a"]=Object(n["a"])(a["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},r={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",n=>{n&&(this.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))}):r.valid=e(t),r},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const r=this.watchers.find(t=>t._uid===e._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),s=r("a691"),l=r("1d80"),c=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r){return[function(r,n){var a=l(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,i){var l=r(e,t,this,i);if(l.done)return l.value;var h=a(t),p=String(this),v="function"===typeof i;v||(i=String(i));var b=h.global;if(b){var y=h.unicode;h.lastIndex=0}var m=[];while(1){var x=u(h,p);if(null===x)break;if(m.push(x),!b)break;var w=String(x[0]);""===w&&(h.lastIndex=c(p,o(h.lastIndex),y))}for(var j="",S=0,$=0;$<m.length;$++){x=m[$];for(var _=String(x[0]),O=d(f(s(x.index),p.length),0),C=[],k=1;k<x.length;k++)C.push(g(x[k]));var B=x.groups;if(v){var E=[_].concat(C,O,p);void 0!==B&&E.push(B);var V=String(i.apply(void 0,E))}else V=n(_,p,O,C,B,i);O>=S&&(j+=p.slice(S,O)+V,S=O+_.length)}return j+p.slice(S)}];function n(t,r,n,a,o,s){var l=n+t.length,c=a.length,u=v;return void 0!==o&&(o=i(o),u=p),e.call(s,u,(function(e,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(l);case"<":s=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>c){var d=h(u/10);return 0===d?e:d<=c?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}s=a[u-1]}return void 0===s?"":s}))}}))},"62ad":function(t,e,r){"use strict";r("4b85");var n=r("2b0e"),a=r("d9f7"),i=r("80d2");const o=["sm","md","lg","xl"],s=(()=>{return o.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return o.reduce((t,e)=>{return t["offset"+Object(i["B"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return o.reduce((t,e)=>{return t["order"+Object(i["B"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,r){let n=t;if(null!=r&&!1!==r){if(e){const r=e.replace(t,"");n+=`-${r}`}return"col"!==t||""!==r&&!0!==r?(n+=`-${r}`,n.toLowerCase()):n.toLowerCase()}}const f=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:r,children:n,parent:i}){let o="";for(const a in e)o+=String(e[a]);let s=f.get(o);if(!s){let t;for(t in s=[],u)u[t].forEach(r=>{const n=e[r],a=d(t,r,n);a&&s.push(a)});const r=s.some(t=>t.startsWith("col-"));s.push({col:!r||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),f.set(o,s)}return t(e.tag,Object(a["a"])(r,{class:s}),n)}})},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,o,s=String(a(e)),l=n(r),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l),i<55296||i>56319||l+1===c||(o=s.charCodeAt(l+1))<56320||o>57343?t?s.charAt(l):i:t?s.slice(l,l+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=void 0!==/()??/.exec("")[1],c=s||l;c&&(o=function(t){var e,r,o,c,u=this;return l&&(r=new RegExp("^"+u.source+"$(?!\\s)",n.call(u))),s&&(e=u.lastIndex),o=a.call(u,t),s&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),l&&o&&o.length>1&&i.call(o[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o}),t.exports=o},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return l}));var n=r("b0af"),a=r("80d2");const i=Object(a["h"])("v-card__actions"),o=Object(a["h"])("v-card__subtitle"),s=Object(a["h"])("v-card__text"),l=Object(a["h"])("v-card__title");n["a"]},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-form",{ref:"addGame"},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6","offset-sm":"3"}},[r("v-card",[r("v-card-title",[r("div",[r("h3",{staticClass:"headline mb-0"},[t._v(" Log inn ")])])]),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-card-text",[r("v-text-field",{attrs:{label:"Username:"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-card-text",[r("v-text-field",{attrs:{label:"Password:","append-icon":t.show?"visibility_off":"visibility",type:t.show?"text":"password"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{block:""},on:{click:t.clickLogin}},[t._v(" Log inn ")])],1)],1)],1)],1)],1)],1)},a=[],i=(r("ac1f"),r("5319"),r("9870")),o={name:"Login",data:function(){return{context:"login context",username:"",password:"",error:null,show:!1}},methods:{clickLogin:function(){var t=this;Object(i["g"])(this.username,this.password).then((function(){return t.$router.replace(t.$route.query.redirect)}))}}},s=o,l=r("2877"),c=r("6544"),u=r.n(c),d=r("8336"),f=r("b0af"),h=r("99d9"),p=r("62ad"),v=r("a523"),g=r("4bd4"),b=r("0fd9"),y=r("8654"),m=Object(l["a"])(s,n,a,!1,null,"49db429e",null);e["default"]=m.exports;u()(m,{VBtn:d["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:p["a"],VContainer:v["a"],VForm:g["a"],VRow:b["a"],VTextField:y["a"]})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";var n=r("9112"),a=r("6eeb"),i=r("d039"),o=r("b622"),s=r("9263"),l=o("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var f=o(t),h=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=h&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!h||!p||"replace"===t&&!c||"split"===t&&!u){var v=/./[f],g=r(f,""[t],(function(t,e,r,n,a){return e.exec===s?h&&!a?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}})),b=g[0],y=g[1];a(String.prototype,t,b),a(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)}),d&&n(RegExp.prototype[f],"sham",!0)}}}}]);
//# sourceMappingURL=chunk-41a898d3.1645961c.js.map