(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1060bc"],{"0789":function(t,e,s){"use strict";var i=s("80d2"),n=function(t="",e=!1){const s=e?"width":"height",n=`offset${Object(i["B"])(s)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow,[s]:t.style[s]}},enter(e){const i=e._initialStyle,r=`${e[n]}px`;e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[s]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame(()=>{e.style[s]=r})},afterEnter:a,enterCancelled:a,leave(t){t._initialStyle={transition:"",visibility:"",overflow:t.style.overflow,[s]:t.style[s]},t.style.overflow="hidden",t.style[s]=`${t[n]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[s]="0")},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){const e=t._initialStyle[s];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[s]=e),delete t._initialStyle}};s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return a})),s.d(e,"e",(function(){return o})),s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return h}));Object(i["i"])("carousel-transition"),Object(i["i"])("carousel-reverse-transition"),Object(i["i"])("tab-transition"),Object(i["i"])("tab-reverse-transition"),Object(i["i"])("menu-transition"),Object(i["i"])("fab-transition","center center","out-in"),Object(i["i"])("dialog-transition"),Object(i["i"])("dialog-bottom-transition");const r=Object(i["i"])("fade-transition"),a=(Object(i["i"])("scale-transition"),Object(i["i"])("scroll-x-transition"),Object(i["i"])("scroll-x-reverse-transition"),Object(i["i"])("scroll-y-transition"),Object(i["i"])("scroll-y-reverse-transition"),Object(i["i"])("slide-x-transition")),o=(Object(i["i"])("slide-x-reverse-transition"),Object(i["i"])("slide-y-transition")),l=(Object(i["i"])("slide-y-reverse-transition"),Object(i["f"])("expand-transition",n())),h=Object(i["f"])("expand-x-transition",n("",!0))},"132d":function(t,e,s){"use strict";s("4804");var i,n=s("7e2b"),r=s("a9ad"),a=s("af2b"),o=s("7560"),l=s("80d2"),h=s("a026"),c=s("58df");function d(t){return["fas","far","fal","fab"].some(e=>t.includes(e))}function u(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const f=Object(c["a"])(n["a"],r["a"],a["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["w"])(t).find(e=>t[e]);return e&&i[e]||Object(l["e"])(this.size)},getDefaultData(){const t=Boolean(this.listeners$.click||this.listeners$["!click"]),e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":t,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!t,role:t?"button":null,...this.attrs$},on:this.listeners$};return e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],i=this.getDefaultData();let n="material-icons";const r=t.indexOf("-"),a=r<=-1;a?s.push(t):(n=t.slice(0,r),d(n)&&(n="")),i.class[n]=!0,i.class[t]=!a;const o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.tag,i,s)},renderSvgIcon(t,e){const s=this.getDefaultData();s.class["v-icon--svg"]=!0,s.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.attrs$["aria-label"],"aria-label":this.attrs$["aria-label"]};const i=this.getSize();return i&&(s.style={fontSize:i,height:i,width:i},s.attrs.height=i,s.attrs.width=i),this.applyColors(s),e("svg",s,[e("path",{attrs:{d:t}})])},renderSvgIconComponent(t,e){const s=this.getDefaultData();s.class["v-icon--is-component"]=!0;const i=this.getSize();i&&(s.style={fontSize:i,height:i}),this.applyColors(s);const n=t.component;return s.props=t.props,s.nativeOn=s.on,e(n,s)}},render(t){const e=this.getIcon();return"string"===typeof e?u(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=h["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(t,{data:e,children:s}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(f,e,i?[i]:s)}})},"13b3":function(t,e,s){},"166a":function(t,e,s){},"1bfb":function(t,e,s){},4804:function(t,e,s){},"4b85":function(t,e,s){},"604c":function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));s("166a");var i=s("a452"),n=s("7560"),r=s("58df"),a=s("d9bd");const o=Object(r["a"])(i["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>{return this.toggleMethod(this.getValue(t,e))})},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue(){this.$nextTick(this.updateItemsState)}},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(a["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return null==t.value||""===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),s=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(s);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(s);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==s):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const s=this.getValue(t,e);t.isActive=this.toggleMethod(s)},updateItemsState(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const s=e.find(t=>!t.disabled);if(!s)return;const i=this.items.indexOf(s);this.updateInternalValue(this.getValue(s,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],s=e.slice(),i=s.findIndex(e=>e===t);this.mandatory&&i>-1&&s.length-1<1||null!=this.max&&i<0&&s.length+1>this.max||(i>-1?s.splice(i,1):s.push(t),this.internalValue=s)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t("div",this.genData(),this.$slots.default)}});o.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"608c":function(t,e,s){},"9d26":function(t,e,s){"use strict";var i=s("132d");e["a"]=i["a"]},a452:function(t,e,s){"use strict";var i=s("a026");function n(t="value",e="change"){return i["a"].extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=n();e["a"]=r},a523:function(t,e,s){"use strict";s("20f6"),s("4b85");var i=s("a026");function n(t){return i["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:n}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var r=s("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let n;const{attrs:a}=s;return a&&(s.attrs={},n=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(r["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]},c3f0:function(t,e,s){"use strict";var i=s("80d2");const n=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t,r=.5,a=16;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&s<e-a&&t.left(t),t.right&&s>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<i-a&&t.up(t),t.down&&n>i+a&&t.down(t))};function r(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function o(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>a(t,e),touchmove:t=>o(t,e)}}function h(t,e,s){const n=e.value,r=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!r)return;const o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[s.context._uid]=o,Object(i["w"])(o).forEach(t=>{r.addEventListener(t,o[t],a)})}function c(t,e,s){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[s.context._uid];Object(i["w"])(r).forEach(t=>{n.removeEventListener(t,r[t])}),delete n._touchHandlers[s.context._uid]}const d={inserted:h,unbind:c};e["a"]=d},dc22:function(t,e,s){"use strict";function i(t,e){const s=e.value,i=e.options||{passive:!0};window.addEventListener("resize",s,i),t._onResize={callback:s,options:i},e.modifiers&&e.modifiers.quiet||s()}function n(t){if(!t._onResize)return;const{callback:e,options:s}=t._onResize;window.removeEventListener("resize",e,s),delete t._onResize}const r={inserted:i,unbind:n};e["a"]=r},e6de:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-tabs",{staticClass:"elevation-24",attrs:{grow:"","show-arrows":""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[s("v-tab",{key:"1",attrs:{to:{path:t.switchTab("addGame")},ripple:""}},[t._v(" Add Game ")]),s("v-tab",{key:"2",attrs:{to:{path:t.switchTab("games")},ripple:""}},[t._v(" Games ")]),s("v-tab",{key:"3",attrs:{to:{path:t.switchTab("addPlayer")},ripple:""}},[t._v(" Add Player ")]),s("v-tab",{key:"4",attrs:{to:{path:t.switchTab("ranking")},ripple:""}},[t._v(" Ranking ")]),s("v-tab",{key:"5",attrs:{to:{path:t.switchTab("statistics")},ripple:""}},[t._v(" Statistics ")])],1),s("v-slide-y-transition",{attrs:{mode:"out-in"}},[s("router-view")],1)],1)},n=[],r=(s("99af"),s("7db0"),s("b0c0"),s("d3b7"),s("96cf"),{name:"League",props:{name:{type:String,required:!0}},data:function(){return{active:null}},created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$store.dispatch("GET_ALL_LEAGUES").then((function(){var e=t.$store.state.leagues.find((function(e){return e.name===t.$route.params.name}));t.$store.dispatch("SELECT_LEAGUE",{selectedLeague:e})})));case 2:case"end":return e.stop()}}),null,this)},methods:{switchTab:function(t){return"/league/".concat(this.name,"/").concat(t)}}}),a=r,o=s("2877"),l=s("6544"),h=s.n(l),c=s("a523"),d=s("0789"),u=s("4e82"),f=s("1c87"),p=s("7560"),v=s("80d2"),m=s("58df");const g=Object(m["a"])(f["a"],Object(u["a"])("tabsBar"),p["a"]);var b=g.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...f["a"].options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted(){this.onRouteChange()},methods:{click(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:0},s.on={...s.on,keydown:t=>{t.keyCode===v["v"].enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),w=(s("1bfb"),s("608c"),s("9d26")),y=s("604c"),x=s("dc22"),$=s("c3f0");const O=Object(m["a"])(y["a"]).extend({name:"base-slide-group",directives:{Resize:x["a"],Touch:$["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:t=>!isNaN(parseInt(t))},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...y["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset},isMobile(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){if(!this.hasAffixes)return null;const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(w["a"],{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(d["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd(){const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s)},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,s,i){const n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const a=e.wrapper+i,o=n+r,l=.4*n;return r<i?i=Math.max(r-l,0):a<o&&(i=Math.min(i-(a-o-l),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});O.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var S=s("d10f"),C=Object(m["a"])(O,S["a"],p["a"]).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...O.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=O.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let r=!1,a=!1;for(const o of s)if(o.to===i?r=!0:o.to===n&&(a=!0),r&&a)break;!r&&a&&(this.internalValue=void 0)}},render(t){const e=O.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),I=(s("13b3"),s("afdd")),_=y["a"].extend({name:"v-window",provide(){return{windowGroup:this}},directives:{Touch:$["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...y["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?"-reverse":"";return`v-window-${t}${e}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>{return this.internalValue===this.getValue(t,e)})},internalReverse(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genContainer(){const t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){return this.$createElement("div",{staticClass:`v-window__${t}`},[this.$createElement(I["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},on:{click:()=>{this.changedByDelimiters=!0,s()}}},[this.$createElement(w["a"],{props:{large:!0}},e)])])},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(this.isReverse=this.$vuetify.rtl,!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(this.isReverse=!this.$vuetify.rtl,!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),k=_.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{..._.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||y["a"].options.methods.getValue.call(this,t,e)}}}),V=s("a9ad"),A=Object(m["a"])(V["a"]).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),B=s("a452");const j=Object(m["a"])(V["a"],B["a"],p["a"]);var T=j.extend().extend({name:"v-tabs",directives:{Resize:x["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:Object(v["e"])(this.slider.height),left:this.isReversed?void 0:Object(v["e"])(this.slider.left),right:this.isReversed?Object(v["e"])(this.slider.right):void 0,top:this.vertical?Object(v["e"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object(v["e"])(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){this.$nextTick(()=>{window.setTimeout(this.callSlider,30)})},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick(()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}}),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:Object(v["e"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(C,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(k,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(A,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],r=n.length;for(let a=0;a<r;a++){const r=n[a];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":s.push(r);break;default:i.push(r)}else i.push(r)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),z=Object(o["a"])(a,i,n,!1,null,"f1d0921a",null);e["default"]=z.exports;h()(z,{VContainer:c["a"],VSlideYTransition:d["e"],VTab:b,VTabs:T})}}]);
//# sourceMappingURL=chunk-3b1060bc.0d0f9a80.js.map