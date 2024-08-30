import{c as Z,a as v,h as T,d as xe,i as ke,e as $,r as Q,w,o as qe,f as ut,g as Be,l as Ve,j as nt,k as st,m as ct,n as J,p as dt,q as ft,s as re,t as he,v as Te,x as me,y as Ce,z as pe,A as vt,B as ht,C as mt,E as pt,F as yt,G as gt,H as bt,I as wt,J as _t,K as Qe,L as W,M as Pe,O as Ct,_ as xt,P as kt,Q as q,R as z,S as n,T as u,U as ye,V as Ae,W as H,X as I,Y as X,Z as Me,$ as ge,a0 as M,a1 as N,a2 as qt,a3 as Y,a4 as $e}from"./index.f80365d6.js";import{Q as Bt}from"./QBadge.a78f6d95.js";import{c as Vt,Q as Ee,a as R,b as S,d as P,e as oe}from"./QChip.08550cf1.js";import{Q as be}from"./QList.4d135fc3.js";import{Q as We,a as Fe,b as Dt}from"./QPageContainer.fa2c3a82.js";import{Q as St}from"./QImg.7c2b19fb.js";import{b as le}from"./format.2cae61da.js";var Ot=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:r}){const c=v(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>T("div",{class:c.value},xe(r.default))}}),Lt=Z({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:r}){const c=v(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:c.value,role:"toolbar"},xe(r.default))}}),He=Z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:r,emit:c}){const{proxy:{$q:_}}=Be(),e=ke(Ve,$);if(e===$)return console.error("QHeader needs to be child of QLayout"),$;const a=Q(parseInt(t.heightHint,10)),s=Q(!0),i=v(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||_.platform.is.ios&&e.isContainer.value===!0),p=v(()=>{if(t.modelValue!==!0)return 0;if(i.value===!0)return s.value===!0?a.value:0;const f=a.value-e.scroll.value.position;return f>0?f:0}),d=v(()=>t.modelValue!==!0||i.value===!0&&s.value!==!0),l=v(()=>t.modelValue===!0&&d.value===!0&&t.reveal===!0),V=v(()=>"q-header q-layout__section--marginal "+(i.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),k=v(()=>{const f=e.rows.value.top,O={};return f[0]==="l"&&e.left.space===!0&&(O[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),f[2]==="r"&&e.right.space===!0&&(O[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),O});function g(f,O){e.update("header",f,O)}function y(f,O){f.value!==O&&(f.value=O)}function x({height:f}){y(a,f),g("size",f)}function C(f){l.value===!0&&y(s,!0),c("focusin",f)}w(()=>t.modelValue,f=>{g("space",f),y(s,!0),e.animate()}),w(p,f=>{g("offset",f)}),w(()=>t.reveal,f=>{f===!1&&y(s,t.modelValue)}),w(s,f=>{e.animate(),c("reveal",f)}),w(e.scroll,f=>{t.reveal===!0&&y(s,f.direction==="up"||f.position<=t.revealOffset||f.position-f.inflectionPoint<100)});const b={};return e.instances.header=b,t.modelValue===!0&&g("size",a.value),g("space",t.modelValue),g("offset",p.value),qe(()=>{e.instances.header===b&&(e.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const f=ut(r.default,[]);return t.elevated===!0&&f.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(T(We,{debounce:0,onResize:x})),T("header",{class:V.value,style:k.value,onFocusin:C},f)}}}),zt=Z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:r,emit:c}){const{proxy:{$q:_}}=Be(),e=ke(Ve,$);if(e===$)return console.error("QFooter needs to be child of QLayout"),$;const a=Q(parseInt(t.heightHint,10)),s=Q(!0),i=Q(nt.value===!0||e.isContainer.value===!0?0:window.innerHeight),p=v(()=>t.reveal===!0||e.view.value.indexOf("F")!==-1||_.platform.is.ios&&e.isContainer.value===!0),d=v(()=>e.isContainer.value===!0?e.containerHeight.value:i.value),l=v(()=>{if(t.modelValue!==!0)return 0;if(p.value===!0)return s.value===!0?a.value:0;const h=e.scroll.value.position+d.value+a.value-e.height.value;return h>0?h:0}),V=v(()=>t.modelValue!==!0||p.value===!0&&s.value!==!0),k=v(()=>t.modelValue===!0&&V.value===!0&&t.reveal===!0),g=v(()=>"q-footer q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(V.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(p.value!==!0?" hidden":""):"")),y=v(()=>{const h=e.rows.value.bottom,B={};return h[0]==="l"&&e.left.space===!0&&(B[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),h[2]==="r"&&e.right.space===!0&&(B[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),B});function x(h,B){e.update("footer",h,B)}function C(h,B){h.value!==B&&(h.value=B)}function b({height:h}){C(a,h),x("size",h)}function f(){if(t.reveal!==!0)return;const{direction:h,position:B,inflectionPoint:ie}=e.scroll.value;C(s,h==="up"||B-ie<100||e.height.value-d.value-B-a.value<300)}function O(h){k.value===!0&&C(s,!0),c("focusin",h)}w(()=>t.modelValue,h=>{x("space",h),C(s,!0),e.animate()}),w(l,h=>{x("offset",h)}),w(()=>t.reveal,h=>{h===!1&&C(s,t.modelValue)}),w(s,h=>{e.animate(),c("reveal",h)}),w([a,e.scroll,e.height],f),w(()=>_.screen.height,h=>{e.isContainer.value!==!0&&C(i,h)});const K={};return e.instances.footer=K,t.modelValue===!0&&x("size",a.value),x("space",t.modelValue),x("offset",l.value),qe(()=>{e.instances.footer===K&&(e.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const h=st(r.default,[T(We,{debounce:0,onResize:b})]);return t.elevated===!0&&h.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:g.value,style:y.value,onFocusin:O},h)}}});const De={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tt=Object.keys(De);De.all=!0;function Ie(t){const r={};for(const c of Tt)t[c]===!0&&(r[c]=!0);return Object.keys(r).length===0?De:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}const Qt=["INPUT","TEXTAREA"];function Ne(t,r){return r.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof r.handler=="function"&&Qt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(r.uid)===-1)}function we(t,r,c){const _=Ce(t);let e,a=_.left-r.event.x,s=_.top-r.event.y,i=Math.abs(a),p=Math.abs(s);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?e=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=s<0?"up":"down":d.up===!0&&s<0?(e="up",i>p&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.down===!0&&s>0?(e="down",i>p&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.left===!0&&a<0?(e="left",i<p&&(d.up===!0&&s<0?e="up":d.down===!0&&s>0&&(e="down"))):d.right===!0&&a>0&&(e="right",i<p&&(d.up===!0&&s<0?e="up":d.down===!0&&s>0&&(e="down")));let l=!1;if(e===void 0&&c===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,l=!0,e==="left"||e==="right"?(_.left-=a,i=0,a=0):(_.top-=s,p=0,s=0)}return{synthetic:l,payload:{evt:t,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:_,direction:e,isFirst:r.event.isFirst,isFinal:c===!0,duration:Date.now()-r.event.time,distance:{x:i,y:p},offset:{x:a,y:s},delta:{x:_.left-r.event.lastX,y:_.top-r.event.lastY}}}}let Pt=0;var _e=ct({name:"touch-pan",beforeMount(t,{value:r,modifiers:c}){if(c.mouse!==!0&&J.has.touch!==!0)return;function _(a,s){c.mouse===!0&&s===!0?vt(a):(c.stop===!0&&me(a),c.prevent===!0&&Te(a))}const e={uid:"qvtp_"+Pt++,handler:r,modifiers:c,direction:Ie(c),noop:dt,mouseStart(a){Ne(a,e)&&ft(a)&&(re(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Ne(a,e)){const s=a.target;re(e,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,s){if(J.is.firefox===!0&&he(t,!0),e.lastEvt=a,s===!0||c.stop===!0){if(e.direction.all!==!0&&(s!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Te(d),a.cancelBubble===!0&&me(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:d}}me(a)}const{left:i,top:p}=Ce(a);e.event={x:i,y:p,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:i,lastY:p}},move(a){if(e.event===void 0)return;const s=Ce(a),i=s.left-e.event.x,p=s.top-e.event.y;if(i===0&&p===0)return;e.lastEvt=a;const d=e.event.mouse===!0,l=()=>{_(a,d);let g;c.preserveCursor!==!0&&c.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),e.styleCleanup=y=>{if(e.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),d===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};y!==void 0?setTimeout(()=>{x(),y()},50):x()}else y!==void 0&&y()}};if(e.event.detected===!0){e.event.isFirst!==!0&&_(a,e.event.mouse);const{payload:g,synthetic:y}=we(a,e,!1);g!==void 0&&(e.handler(g)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&l(),e.event.lastX=g.position.left,e.event.lastY=g.position.top,e.event.lastDir=y===!0?void 0:g.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){l(),e.event.detected=!0,e.move(a);return}const V=Math.abs(i),k=Math.abs(p);V!==k&&(e.direction.horizontal===!0&&V>k||e.direction.vertical===!0&&V<k||e.direction.up===!0&&V<k&&p<0||e.direction.down===!0&&V<k&&p>0||e.direction.left===!0&&V>k&&i<0||e.direction.right===!0&&V>k&&i>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,s){if(e.event!==void 0){if(pe(e,"temp"),J.is.firefox===!0&&he(t,!1),s===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(we(a===void 0?e.lastEvt:a,e).payload);const{payload:i}=we(a===void 0?e.lastEvt:a,e,!0),p=()=>{e.handler(i)};e.styleCleanup!==void 0?e.styleCleanup(p):p()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,c.mouse===!0){const a=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";re(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}J.has.touch===!0&&re(e,"main",[[t,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,r){const c=t.__qtouchpan;c!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&c.end(),c.handler=r.value),c.direction=Ie(r.modifiers))},beforeUnmount(t){const r=t.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),pe(r,"main"),pe(r,"temp"),J.is.firefox===!0&&he(t,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete t.__qtouchpan)}});const Re=150;var At=Z({name:"QDrawer",inheritAttrs:!1,props:{...ht,...mt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...pt,"onLayout","miniState"],setup(t,{slots:r,emit:c,attrs:_}){const e=Be(),{proxy:{$q:a}}=e,s=yt(t,a),{preventBodyScroll:i}=Ct(),{registerTimeout:p,removeTimeout:d}=gt(),l=ke(Ve,$);if(l===$)return console.error("QDrawer needs to be child of QLayout"),$;let V,k=null,g;const y=Q(t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint),x=v(()=>t.mini===!0&&y.value!==!0),C=v(()=>x.value===!0?t.miniWidth:t.width),b=Q(t.showIfAbove===!0&&y.value===!1?!0:t.modelValue===!0),f=v(()=>t.persistent!==!0&&(y.value===!0||Ue.value===!0));function O(o,m){if(ie(),o!==!1&&l.animate(),L(0),y.value===!0){const D=l.instances[te.value];D!==void 0&&D.belowBreakpoint===!0&&D.hide(!1),E(1),l.isContainer.value!==!0&&i(!0)}else E(0),o!==!1&&de(!1);p(()=>{o!==!1&&de(!0),m!==!0&&c("show",o)},Re)}function K(o,m){je(),o!==!1&&l.animate(),E(0),L(j.value*C.value),fe(),m!==!0?p(()=>{c("hide",o)},Re):d()}const{show:h,hide:B}=bt({showing:b,hideOnRouteChange:f,handleShow:O,handleHide:K}),{addToHistory:ie,removeFromHistory:je}=wt(b,B,f),ee={belowBreakpoint:y,hide:B},A=v(()=>t.side==="right"),j=v(()=>(a.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),Se=Q(0),U=Q(!1),ue=Q(!1),Oe=Q(C.value*j.value),te=v(()=>A.value===!0?"left":"right"),ne=v(()=>b.value===!0&&y.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),se=v(()=>t.overlay===!0||t.miniToOverlay===!0||l.view.value.indexOf(A.value?"R":"L")!==-1||a.platform.is.ios===!0&&l.isContainer.value===!0),G=v(()=>t.overlay===!1&&b.value===!0&&y.value===!1),Ue=v(()=>t.overlay===!0&&b.value===!0&&y.value===!1),Xe=v(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&U.value===!1?" hidden":"")),Ye=v(()=>({backgroundColor:`rgba(0,0,0,${Se.value*.4})`})),Le=v(()=>A.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Ke=v(()=>A.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ge=v(()=>{const o={};return l.header.space===!0&&Le.value===!1&&(se.value===!0?o.top=`${l.header.offset}px`:l.header.space===!0&&(o.top=`${l.header.size}px`)),l.footer.space===!0&&Ke.value===!1&&(se.value===!0?o.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(o.bottom=`${l.footer.size}px`)),o}),Je=v(()=>{const o={width:`${C.value}px`,transform:`translateX(${Oe.value}px)`};return y.value===!0?o:Object.assign(o,Ge.value)}),Ze=v(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),et=v(()=>`q-drawer q-drawer--${t.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(y.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(se.value===!0||G.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Le.value===!0?" q-drawer--top-padding":""))),tt=v(()=>{const o=a.lang.rtl===!0?t.side:te.value;return[[_e,lt,void 0,{[o]:!0,mouse:!0}]]}),at=v(()=>{const o=a.lang.rtl===!0?te.value:t.side;return[[_e,ze,void 0,{[o]:!0,mouse:!0}]]}),rt=v(()=>{const o=a.lang.rtl===!0?te.value:t.side;return[[_e,ze,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){it(y,t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint)}w(y,o=>{o===!0?(V=b.value,b.value===!0&&B(!1)):t.overlay===!1&&t.behavior!=="mobile"&&V!==!1&&(b.value===!0?(L(0),E(0),fe()):h(!1))}),w(()=>t.side,(o,m)=>{l.instances[m]===ee&&(l.instances[m]=void 0,l[m].space=!1,l[m].offset=0),l.instances[o]=ee,l[o].size=C.value,l[o].space=G.value,l[o].offset=ne.value}),w(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),w(()=>t.behavior+t.breakpoint,ce),w(l.isContainer,o=>{b.value===!0&&i(o!==!0),o===!0&&ce()}),w(l.scrollbarWidth,()=>{L(b.value===!0?0:void 0)}),w(ne,o=>{F("offset",o)}),w(G,o=>{c("onLayout",o),F("space",o)}),w(A,()=>{L()}),w(C,o=>{L(),ve(t.miniToOverlay,o)}),w(()=>t.miniToOverlay,o=>{ve(o,C.value)}),w(()=>a.lang.rtl,()=>{L()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(ot(),l.animate())}),w(x,o=>{c("miniState",o)});function L(o){o===void 0?Qe(()=>{o=b.value===!0?0:C.value,L(j.value*o)}):(l.isContainer.value===!0&&A.value===!0&&(y.value===!0||Math.abs(o)===C.value)&&(o+=j.value*l.scrollbarWidth.value),Oe.value=o)}function E(o){Se.value=o}function de(o){const m=o===!0?"remove":l.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function ot(){k!==null&&clearTimeout(k),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,k=setTimeout(()=>{k=null,ue.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function lt(o){if(b.value!==!1)return;const m=C.value,D=le(o.distance.x,0,m);if(o.isFinal===!0){D>=Math.min(75,m)===!0?h():(l.animate(),E(0),L(j.value*m)),U.value=!1;return}L((a.lang.rtl===!0?A.value!==!0:A.value)?Math.max(m-D,0):Math.min(0,D-m)),E(le(D/m,0,1)),o.isFirst===!0&&(U.value=!0)}function ze(o){if(b.value!==!0)return;const m=C.value,D=o.direction===t.side,ae=(a.lang.rtl===!0?D!==!0:D)?le(o.distance.x,0,m):0;if(o.isFinal===!0){Math.abs(ae)<Math.min(75,m)===!0?(l.animate(),E(1),L(0)):B(),U.value=!1;return}L(j.value*ae),E(le(1-ae/m,0,1)),o.isFirst===!0&&(U.value=!0)}function fe(){i(!1),de(!0)}function F(o,m){l.update(t.side,o,m)}function it(o,m){o.value!==m&&(o.value=m)}function ve(o,m){F("size",o===!0?t.miniWidth:m)}return l.instances[t.side]=ee,ve(t.miniToOverlay,C.value),F("space",G.value),F("offset",ne.value),t.showIfAbove===!0&&t.modelValue!==!0&&b.value===!0&&t["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),_t(()=>{c("onLayout",G.value),c("miniState",x.value),V=t.showIfAbove===!0;const o=()=>{(b.value===!0?O:K)(!1,!0)};if(l.totalWidth.value!==0){Qe(o);return}g=w(l.totalWidth,()=>{g(),g=void 0,b.value===!1&&t.showIfAbove===!0&&y.value===!1?h(!1):o()})}),qe(()=>{g!==void 0&&g(),k!==null&&(clearTimeout(k),k=null),b.value===!0&&fe(),l.instances[t.side]===ee&&(l.instances[t.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const o=[];y.value===!0&&(t.noSwipeOpen===!1&&o.push(W(T("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),tt.value)),o.push(Pe("div",{ref:"backdrop",class:Xe.value,style:Ye.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",t.noSwipeBackdrop!==!0&&b.value===!0,()=>rt.value)));const m=x.value===!0&&r.mini!==void 0,D=[T("div",{..._,key:""+m,class:[Ze.value,_.class]},m===!0?r.mini():xe(r.default))];return t.elevated===!0&&b.value===!0&&D.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Pe("aside",{ref:"content",class:et.value,style:Je.value},D,"contentclose",t.noSwipeClose!==!0&&y.value===!0,()=>at.value)),T("div",{class:"q-drawer-container"},o)}}});const Mt={data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Inicio",icon:"home",to:"/",can:"ver inicio"},{title:"Usuarios",icon:"people",to:"/users",can:"ver usuarios"},{title:"Empresas",icon:"business",to:"/companies",can:"ver empresas"},{title:"Botes",icon:"directions_boat",to:"/boats",can:"ver botes"},{title:"Tripulantes",icon:"group",to:"/crews",can:"ver tripulantes"},{title:"Clientes",icon:"person",to:"/clients",can:"ver clientes"},{title:"Productos",icon:"shopping_cart",to:"/products",can:"ver productos"},{title:"Gastos",icon:"point_of_sale",to:"/gastos",can:"ver ventas"},{title:"Viajes Historico",icon:"flight_takeoff",to:"/viajes",can:"ver viajes"},{title:"Viajes Activos",icon:"sailing",to:"/viajesActivos",can:"ver ventas"},{title:"Venta",icon:"shopping_cart",to:"/sales",can:"ver ventas"},{title:"Deudores",icon:"credit_score",to:"/debtors",can:"ver deudores"}],permisos:JSON.parse(localStorage.getItem("permisos")),botesPorVencer:[]}},mounted(){this.getBotesPorVencer()},methods:{diffDays(t){if(!t)return"";const r=new Date(t)-new Date;return Math.ceil(r/(1e3*60*60*24))},getBotesPorVencer(){this.$axios.get("/botesPorVencer").then(t=>{t.data.forEach(r=>{r.dif_fecha&&(r.dif=this.diffDays(r.dif_fecha)),r.autoridad_fecha&&(r.autoridad=this.diffDays(r.autoridad_fecha)),r.licencia_fecha&&(r.licencia=this.diffDays(r.licencia_fecha))}),this.botesPorVencer=t.data})},textCapitalize(t){if(!t)return"";const r=t.toLowerCase();return t.charAt(0).toUpperCase()+r.slice(1)},toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){this.$alert.dialog("\xBFEst\xE1 seguro que desea cerrar sesi\xF3n?").onOk(()=>{this.$axios.post("/logout").then(()=>{this.$store.isLogeed=!1,this.$store.user={},localStorage.removeItem("tokenPrestamos"),this.$router.push("/login")})})}},computed:{rutaActual(){return this.$route.path},title(){const t=this.$route.path;return t==="/"?"Inicio":t==="/users"?"Usuarios":t==="/clients"?"Clientes":t==="/companies"?"Empresas":t==="/boats"?"Botes":t==="/crews"?"Tripulantes":t==="/products"?"Productos":t==="/viajes"?"Viajes":"Inicio"}}},$t={class:"text-primary text-bold"},Et={key:0,class:"text-bold"},Ft={key:1,class:"text-bold"},Ht={key:2,class:"text-bold"};function It(t,r,c,_,e,a){const s=kt("router-view");return q(),z(Fe,{view:"lHh Lpr lFf"},{default:n(()=>[u(He,{class:"bg-white text-black",bordered:""},{default:n(()=>[u(Lt,null,{default:n(()=>[u(ye,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),u(Ot,null,{default:n(()=>[Ae("div",$t,H(a.title),1)]),_:1}),Ae("div",null,[e.botesPorVencer.length>0?(q(),z(ye,{key:0,flat:"",dense:"",icon:"o_notifications","aria-label":"Notificaciones"},{default:n(()=>[u(Bt,{color:"primary","text-color":"white",floating:""},{default:n(()=>[I(H(e.botesPorVencer.length),1)]),_:1}),u(Ee,null,{default:n(()=>[u(be,null,{default:n(()=>[(q(!0),X(ge,null,Me(e.botesPorVencer,i=>W((q(),z(R,{clickable:"",key:i.id,to:"/boats/"+i.id},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{icon:"directions_boat"})]),_:1}),u(S,null,{default:n(()=>[u(P,null,{default:n(()=>[I(H(i.name),1)]),_:2},1024),u(P,{caption:""},{default:n(()=>[i.dif?(q(),X("div",Et,"Dif: "+H(i.dif),1)):M("",!0),i.autoridad?(q(),X("div",Ft,"Autoridad: "+H(i.autoridad),1)):M("",!0),i.licencia?(q(),X("div",Ht,"Licencia: "+H(i.licencia),1)):M("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[Y]])),128))]),_:1})]),_:1})]),_:1})):M("",!0),u(ye,{flat:"",dense:"",icon:"o_account_circle","aria-label":"Menu",label:a.textCapitalize(t.$store.user.name),"no-caps":"","icon-right":"arrow_drop_down"},{default:n(()=>[u(Ee,null,{default:n(()=>[u(be,null,{default:n(()=>[W((q(),z(R,{clickable:""},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{icon:"account_circle"})]),_:1}),u(S,null,{default:n(()=>[u(P,null,{default:n(()=>[I("Perfil")]),_:1})]),_:1})]),_:1})),[[Y]]),W((q(),z(R,{clickable:""},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{icon:"settings"})]),_:1}),u(S,null,{default:n(()=>[u(P,null,{default:n(()=>[I("Configuraci\xF3n")]),_:1})]),_:1})]),_:1})),[[Y]]),W((q(),z(R,{clickable:"",onClick:a.logout},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{icon:"logout"})]),_:1}),u(S,null,{default:n(()=>[u(P,null,{default:n(()=>[I("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Y]])]),_:1})]),_:1})]),_:1},8,["label"])])]),_:1})]),_:1}),u(At,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=i=>e.leftDrawerOpen=i),"show-if-above":"",width:220,class:"bg-primary text-white"},{default:n(()=>[u(Fe,null,{default:n(()=>[u(He,null,{default:n(()=>[u(be,null,{default:n(()=>[u(P,{class:"q-pa-xs"},{default:n(()=>[u(R,{dense:""},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{class:"bg-white","text-color":"primary",size:"45px"},{default:n(()=>[u(St,{src:"/logo.png"})]),_:1})]),_:1}),u(S,null,{default:n(()=>[u(P,{class:"text-white text-bold"},{default:n(()=>{var i,p,d,l;return[((i=t.$store.user)==null?void 0:i.role)==="VENDEDOR"?(q(),z(oe,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):M("",!0),((p=t.$store.user)==null?void 0:p.role)==="ADMIN"?(q(),z(oe,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):M("",!0),((d=t.$store.user)==null?void 0:d.role)==="SUPERADMIN"?(q(),z(oe,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):M("",!0),((l=t.$store.user)==null?void 0:l.role)==="PATRON"?(q(),z(oe,{key:3,dense:"",label:"patron",color:"green","text-color":"white",icon:"account_circle"})):M("",!0)]}),_:1}),u(P,{caption:"",class:"text-white"},{default:n(()=>[I(H(t.$store.user.name),1)]),_:1})]),_:1})]),_:1})]),_:1}),u(qt,{dark:""}),(q(!0),X(ge,null,Me(e.essentialLinks,i=>(q(),X(ge,{key:i.title},[!i.can||e.permisos.includes(i.can)?W((q(),z(R,{key:0,clickable:"",dense:"",to:i.to,exact:"",class:$e(`text-white ${a.rutaActual==i.to?"bg-secondary":""}`)},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{"text-color":"white",icon:`${a.rutaActual==i.to?i.icon:"o_"+i.icon}`,size:`${a.rutaActual==i.to?"45px":"38px"}`},null,8,["icon","size"])]),_:2},1024),u(S,null,{default:n(()=>[u(P,{class:$e(`text-white ${a.rutaActual==i.to?"text-bold":""}`)},{default:n(()=>[I(H(i.title),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to","class"])),[[Y]]):M("",!0)],64))),128))]),_:1})]),_:1}),u(zt,null,{default:n(()=>[W((q(),z(R,{clickable:"",dense:"",onClick:a.logout},{default:n(()=>[u(S,{avatar:""},{default:n(()=>[u(N,{"text-color":"red",icon:"logout",size:"38px"})]),_:1}),u(S,null,{default:n(()=>[u(P,{class:"text-red text-bold"},{default:n(()=>[I("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),u(Dt,null,{default:n(()=>[u(s)]),_:1})]),_:1})}var Gt=xt(Mt,[["render",It]]);export{Gt as default};
