(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fff64d0"],{"0fd9":function(t,e,i){"use strict";i("4b85");var a=i("a026"),n=i("d9f7"),r=i("80d2");const s=["sm","md","lg","xl"],l=["start","end","center"];function o(t,e){return s.reduce((i,a)=>{return i[t+Object(r["z"])(a)]=e(),i},{})}const c=t=>[...l,"baseline","stretch"].includes(t),u=o("align",()=>({type:String,default:null,validator:c})),d=t=>[...l,"space-between","space-around"].includes(t),h=o("justify",()=>({type:String,default:null,validator:d})),p=t=>[...l,"space-between","space-around","stretch"].includes(t),f=o("alignContent",()=>({type:String,default:null,validator:p})),g={align:Object.keys(u),justify:Object.keys(h),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,i){let a=v[t];if(null!=i){if(e){const i=e.replace(t,"");a+=`-${i}`}return a+=`-${i}`,a.toLowerCase()}}const b=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...h,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:i,children:a}){let r="";for(const n in e)r+=String(e[n]);let s=b.get(r);if(!s){let t;for(t in s=[],g)g[t].forEach(i=>{const a=e[i],n=m(t,i,a);n&&s.push(n)});s.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,s)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:s}),a)}})},"4bd4":function(t,e,i){"use strict";var a=i("58df"),n=i("7e2b"),r=i("3206");e["a"]=Object(a["a"])(n["a"],Object(r["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var a=i("1d80"),n=i("5899"),r="["+n+"]",s=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),o=function(t){return function(e){var i=String(a(e));return 1&t&&(i=i.replace(s,"")),2&t&&(i=i.replace(l,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},"62ad":function(t,e,i){"use strict";i("4b85");var a=i("a026"),n=i("d9f7"),r=i("80d2");const s=["sm","md","lg","xl"],l=(()=>{return s.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),o=(()=>{return s.reduce((t,e)=>{return t["offset"+Object(r["z"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return s.reduce((t,e)=>{return t["order"+Object(r["z"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(c)};function d(t,e,i){let a=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");a+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(a+=`-${i}`,a.toLowerCase()):a.toLowerCase()}}const h=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:a,parent:r}){let s="";for(const n in e)s+=String(e[n]);let l=h.get(s);if(!l){let t;for(t in l=[],u)u[t].forEach(i=>{const a=e[i],n=d(t,i,a);n&&l.push(n)});const i=l.some(t=>t.startsWith("col-"));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),h.set(s,l)}return t(e.tag,Object(n["a"])(i,{class:l}),a)}})},"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("a026"),n=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["h"]}}})},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l})),i.d(e,"d",(function(){return o}));var a=i("b0af"),n=i("80d2");const r=Object(n["g"])("v-card__actions"),s=Object(n["g"])("v-card__subtitle"),l=Object(n["g"])("v-card__text"),o=Object(n["g"])("v-card__title");a["a"]},ac7c:function(t,e,i){"use strict";i("6ca7"),i("ec29");var a=i("9d26"),n=i("c37a"),r=i("5607"),s=i("a026"),l=s["a"].extend({name:"rippleable",directives:{ripple:r["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),o=i("8547"),c=i("58df"),u=Object(c["a"])(n["a"],l,o["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}});e["a"]=u.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},b602:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-form",{ref:"addLeague"},[i("v-row",[i("v-col",{attrs:{lg:"6",md:"6",sm:"12","offset-lg":"3","offset-md":"3"}},[i("v-card",{staticClass:"elevation-24"},[i("v-card-title",[i("h3",{staticClass:"headline mb-12"},[t._v(" Opprett liga ")])]),i("v-card-text",{staticClass:"text-center"},[i("v-text-field",{attrs:{label:"Name:"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-row",[i("v-col",{attrs:{lg:"6",md:"6"}},[i("v-card-text",{staticClass:"text-center"},[i("v-checkbox",{attrs:{label:"Draw allowed"},model:{value:t.checkDraw,callback:function(e){t.checkDraw=e},expression:"checkDraw"}})],1)],1),i("v-col",{attrs:{lg:"6",md:"6"}},[i("v-card-text",{staticClass:"text-center"},[i("v-checkbox",{attrs:{label:"Scored results"},model:{value:t.checkScored,callback:function(e){t.checkScored=e},expression:"checkScored"}})],1)],1)],1),i("v-card-text",{staticClass:"text-center"},[i("v-text-field",{attrs:{label:"Period length:",mask:t.periodMask},model:{value:t.periodLength,callback:function(e){t.periodLength=e},expression:"periodLength"}})],1),i("v-card-actions",[i("v-btn",{attrs:{block:""},on:{click:t.addLeague}},[t._v(" Add League ")])],1)],1)],1)],1)],1)],1)},n=[],r=(i("b0c0"),i("e25e"),{name:"AddLeague",data:function(){return{periodMask:"#",checkDraw:!1,checkScored:!0,periodLength:0,name:""}},methods:{addLeague:function(){this.$store.dispatch("ADD_A_LEAGUE",{name:this.name,settings:{drawAllowed:this.checkDraw,periodLength:parseInt(this.periodLength,10),scoredResults:this.checkScored}})}}}),s=r,l=i("2877"),o=i("6544"),c=i.n(o),u=i("8336"),d=i("b0af"),h=i("99d9"),p=i("ac7c"),f=i("62ad"),g=i("a523"),v=i("4bd4"),m=i("0fd9"),b=i("8654"),y=Object(l["a"])(s,a,n,!1,null,"c172db70",null);e["default"]=y.exports;c()(y,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCheckbox:p["a"],VCol:f["a"],VContainer:g["a"],VForm:v["a"],VRow:m["a"],VTextField:b["a"]})},e25e:function(t,e,i){var a=i("23e7"),n=i("e583");a({global:!0,forced:parseInt!=n},{parseInt:n})},e583:function(t,e,i){var a=i("da84"),n=i("58a8").trim,r=i("5899"),s=a.parseInt,l=/^[+-]?0[Xx]/,o=8!==s(r+"08")||22!==s(r+"0x16");t.exports=o?function(t,e){var i=n(String(t));return s(i,e>>>0||(l.test(i)?16:10))}:s},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2fff64d0.f30b796b.js.map