import{c as K,a as v,h as L,d as we,i as _e,e as M,r as T,w,o as Ce,f as lt,g as xe,l as qe,j as ut,k as it,m as nt,n as X,p as st,q as ct,s as ee,t as de,v as ze,x as fe,y as ge,z as ve,A as dt,B as ft,C as vt,E as mt,F as ht,G as pt,H as bt,I as yt,J as gt,K as Le,L as W,M as Qe,O as wt,_ as _t,P as Ct,Q,R as $,S as c,T as i,U as me,V as Te,W as he,X as F,Y as N,Z as te,$ as xt,a0 as De,a1 as qt,a2 as $e,a3 as Y,a4 as Me}from"./index.019f517a.js";import{Q as kt}from"./QBadge.3c1772dd.js";import{c as Bt,Q as St,a as j,b as z,d as P,e as pe}from"./QChip.c1672a5a.js";import{Q as Ae}from"./QList.01f897bd.js";import{Q as Ne,a as Ee,b as Ot}from"./QPageContainer.a1b3f0ad.js";import{Q as Vt}from"./QImg.d8ceffb8.js";import{b as ae}from"./format.2cae61da.js";var zt=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:o}){const s=v(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>L("div",{class:s.value},we(o.default))}}),Lt=K({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:o}){const s=v(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:s.value,role:"toolbar"},we(o.default))}}),Pe=K({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:o,emit:s}){const{proxy:{$q:_}}=xe(),e=_e(qe,M);if(e===M)return console.error("QHeader needs to be child of QLayout"),M;const a=T(parseInt(t.heightHint,10)),u=T(!0),n=v(()=>t.reveal===!0||e.view.value.indexOf("H")!==-1||_.platform.is.ios&&e.isContainer.value===!0),p=v(()=>{if(t.modelValue!==!0)return 0;if(n.value===!0)return u.value===!0?a.value:0;const f=a.value-e.scroll.value.position;return f>0?f:0}),d=v(()=>t.modelValue!==!0||n.value===!0&&u.value!==!0),l=v(()=>t.modelValue===!0&&d.value===!0&&t.reveal===!0),B=v(()=>"q-header q-layout__section--marginal "+(n.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const f=e.rows.value.top,O={};return f[0]==="l"&&e.left.space===!0&&(O[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),f[2]==="r"&&e.right.space===!0&&(O[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),O});function y(f,O){e.update("header",f,O)}function b(f,O){f.value!==O&&(f.value=O)}function x({height:f}){b(a,f),y("size",f)}function C(f){l.value===!0&&b(u,!0),s("focusin",f)}w(()=>t.modelValue,f=>{y("space",f),b(u,!0),e.animate()}),w(p,f=>{y("offset",f)}),w(()=>t.reveal,f=>{f===!1&&b(u,t.modelValue)}),w(u,f=>{e.animate(),s("reveal",f)}),w(e.scroll,f=>{t.reveal===!0&&b(u,f.direction==="up"||f.position<=t.revealOffset||f.position-f.inflectionPoint<100)});const g={};return e.instances.header=g,t.modelValue===!0&&y("size",a.value),y("space",t.modelValue),y("offset",p.value),Ce(()=>{e.instances.header===g&&(e.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const f=lt(o.default,[]);return t.elevated===!0&&f.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(L(Ne,{debounce:0,onResize:x})),L("header",{class:B.value,style:q.value,onFocusin:C},f)}}}),Qt=K({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:o,emit:s}){const{proxy:{$q:_}}=xe(),e=_e(qe,M);if(e===M)return console.error("QFooter needs to be child of QLayout"),M;const a=T(parseInt(t.heightHint,10)),u=T(!0),n=T(ut.value===!0||e.isContainer.value===!0?0:window.innerHeight),p=v(()=>t.reveal===!0||e.view.value.indexOf("F")!==-1||_.platform.is.ios&&e.isContainer.value===!0),d=v(()=>e.isContainer.value===!0?e.containerHeight.value:n.value),l=v(()=>{if(t.modelValue!==!0)return 0;if(p.value===!0)return u.value===!0?a.value:0;const m=e.scroll.value.position+d.value+a.value-e.height.value;return m>0?m:0}),B=v(()=>t.modelValue!==!0||p.value===!0&&u.value!==!0),q=v(()=>t.modelValue===!0&&B.value===!0&&t.reveal===!0),y=v(()=>"q-footer q-layout__section--marginal "+(p.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(B.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(p.value!==!0?" hidden":""):"")),b=v(()=>{const m=e.rows.value.bottom,k={};return m[0]==="l"&&e.left.space===!0&&(k[_.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),m[2]==="r"&&e.right.space===!0&&(k[_.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),k});function x(m,k){e.update("footer",m,k)}function C(m,k){m.value!==k&&(m.value=k)}function g({height:m}){C(a,m),x("size",m)}function f(){if(t.reveal!==!0)return;const{direction:m,position:k,inflectionPoint:re}=e.scroll.value;C(u,m==="up"||k-re<100||e.height.value-d.value-k-a.value<300)}function O(m){q.value===!0&&C(u,!0),s("focusin",m)}w(()=>t.modelValue,m=>{x("space",m),C(u,!0),e.animate()}),w(l,m=>{x("offset",m)}),w(()=>t.reveal,m=>{m===!1&&C(u,t.modelValue)}),w(u,m=>{e.animate(),s("reveal",m)}),w([a,e.scroll,e.height],f),w(()=>_.screen.height,m=>{e.isContainer.value!==!0&&C(n,m)});const R={};return e.instances.footer=R,t.modelValue===!0&&x("size",a.value),x("space",t.modelValue),x("offset",l.value),Ce(()=>{e.instances.footer===R&&(e.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const m=it(o.default,[L(Ne,{debounce:0,onResize:g})]);return t.elevated===!0&&m.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),L("footer",{class:y.value,style:b.value,onFocusin:O},m)}}});const ke={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Tt=Object.keys(ke);ke.all=!0;function Fe(t){const o={};for(const s of Tt)t[s]===!0&&(o[s]=!0);return Object.keys(o).length===0?ke:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}const Dt=["INPUT","TEXTAREA"];function Ie(t,o){return o.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof o.handler=="function"&&Dt.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(o.uid)===-1)}function be(t,o,s){const _=ge(t);let e,a=_.left-o.event.x,u=_.top-o.event.y,n=Math.abs(a),p=Math.abs(u);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?e=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=u<0?"up":"down":d.up===!0&&u<0?(e="up",n>p&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.down===!0&&u>0?(e="down",n>p&&(d.left===!0&&a<0?e="left":d.right===!0&&a>0&&(e="right"))):d.left===!0&&a<0?(e="left",n<p&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down"))):d.right===!0&&a>0&&(e="right",n<p&&(d.up===!0&&u<0?e="up":d.down===!0&&u>0&&(e="down")));let l=!1;if(e===void 0&&s===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};e=o.event.lastDir,l=!0,e==="left"||e==="right"?(_.left-=a,n=0,a=0):(_.top-=u,p=0,u=0)}return{synthetic:l,payload:{evt:t,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:_,direction:e,isFirst:o.event.isFirst,isFinal:s===!0,duration:Date.now()-o.event.time,distance:{x:n,y:p},offset:{x:a,y:u},delta:{x:_.left-o.event.lastX,y:_.top-o.event.lastY}}}}let $t=0;var ye=nt({name:"touch-pan",beforeMount(t,{value:o,modifiers:s}){if(s.mouse!==!0&&X.has.touch!==!0)return;function _(a,u){s.mouse===!0&&u===!0?dt(a):(s.stop===!0&&fe(a),s.prevent===!0&&ze(a))}const e={uid:"qvtp_"+$t++,handler:o,modifiers:s,direction:Fe(s),noop:st,mouseStart(a){Ie(a,e)&&ct(a)&&(ee(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Ie(a,e)){const u=a.target;ee(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,u){if(X.is.firefox===!0&&de(t,!0),e.lastEvt=a,u===!0||s.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&ze(d),a.cancelBubble===!0&&fe(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:d}}fe(a)}const{left:n,top:p}=ge(a);e.event={x:n,y:p,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:n,lastY:p}},move(a){if(e.event===void 0)return;const u=ge(a),n=u.left-e.event.x,p=u.top-e.event.y;if(n===0&&p===0)return;e.lastEvt=a;const d=e.event.mouse===!0,l=()=>{_(a,d);let y;s.preserveCursor!==!0&&s.preservecursor!==!0&&(y=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Bt(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,y!==void 0&&(document.documentElement.style.cursor=y),document.body.classList.remove("non-selectable"),d===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{x(),b()},50):x()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&_(a,e.event.mouse);const{payload:y,synthetic:b}=be(a,e,!1);y!==void 0&&(e.handler(y)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&l(),e.event.lastX=y.position.left,e.event.lastY=y.position.top,e.event.lastDir=b===!0?void 0:y.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){l(),e.event.detected=!0,e.move(a);return}const B=Math.abs(n),q=Math.abs(p);B!==q&&(e.direction.horizontal===!0&&B>q||e.direction.vertical===!0&&B<q||e.direction.up===!0&&B<q&&p<0||e.direction.down===!0&&B<q&&p>0||e.direction.left===!0&&B>q&&n<0||e.direction.right===!0&&B>q&&n>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,u){if(e.event!==void 0){if(ve(e,"temp"),X.is.firefox===!0&&de(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(be(a===void 0?e.lastEvt:a,e).payload);const{payload:n}=be(a===void 0?e.lastEvt:a,e,!0),p=()=>{e.handler(n)};e.styleCleanup!==void 0?e.styleCleanup(p):p()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,s.mouse===!0){const a=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";ee(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}X.has.touch===!0&&ee(e,"main",[[t,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const s=t.__qtouchpan;s!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&s.end(),s.handler=o.value),s.direction=Fe(o.modifiers))},beforeUnmount(t){const o=t.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ve(o,"main"),ve(o,"temp"),X.is.firefox===!0&&de(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchpan)}});const He=150;var Mt=K({name:"QDrawer",inheritAttrs:!1,props:{...ft,...vt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...mt,"onLayout","miniState"],setup(t,{slots:o,emit:s,attrs:_}){const e=xe(),{proxy:{$q:a}}=e,u=ht(t,a),{preventBodyScroll:n}=wt(),{registerTimeout:p,removeTimeout:d}=pt(),l=_e(qe,M);if(l===M)return console.error("QDrawer needs to be child of QLayout"),M;let B,q=null,y;const b=T(t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint),x=v(()=>t.mini===!0&&b.value!==!0),C=v(()=>x.value===!0?t.miniWidth:t.width),g=T(t.showIfAbove===!0&&b.value===!1?!0:t.modelValue===!0),f=v(()=>t.persistent!==!0&&(b.value===!0||We.value===!0));function O(r,h){if(re(),r!==!1&&l.animate(),V(0),b.value===!0){const S=l.instances[J.value];S!==void 0&&S.belowBreakpoint===!0&&S.hide(!1),A(1),l.isContainer.value!==!0&&n(!0)}else A(0),r!==!1&&ne(!1);p(()=>{r!==!1&&ne(!0),h!==!0&&s("show",r)},He)}function R(r,h){je(),r!==!1&&l.animate(),A(0),V(I.value*C.value),se(),h!==!0?p(()=>{s("hide",r)},He):d()}const{show:m,hide:k}=bt({showing:g,hideOnRouteChange:f,handleShow:O,handleHide:R}),{addToHistory:re,removeFromHistory:je}=yt(g,k,f),G={belowBreakpoint:b,hide:k},D=v(()=>t.side==="right"),I=v(()=>(a.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),Be=T(0),H=T(!1),oe=T(!1),Se=T(C.value*I.value),J=v(()=>D.value===!0?"left":"right"),le=v(()=>g.value===!0&&b.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:C.value:0),ue=v(()=>t.overlay===!0||t.miniToOverlay===!0||l.view.value.indexOf(D.value?"R":"L")!==-1||a.platform.is.ios===!0&&l.isContainer.value===!0),U=v(()=>t.overlay===!1&&g.value===!0&&b.value===!1),We=v(()=>t.overlay===!0&&g.value===!0&&b.value===!1),Re=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&H.value===!1?" hidden":"")),Ue=v(()=>({backgroundColor:`rgba(0,0,0,${Be.value*.4})`})),Oe=v(()=>D.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Xe=v(()=>D.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),Ye=v(()=>{const r={};return l.header.space===!0&&Oe.value===!1&&(ue.value===!0?r.top=`${l.header.offset}px`:l.header.space===!0&&(r.top=`${l.header.size}px`)),l.footer.space===!0&&Xe.value===!1&&(ue.value===!0?r.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(r.bottom=`${l.footer.size}px`)),r}),Ke=v(()=>{const r={width:`${C.value}px`,transform:`translateX(${Se.value}px)`};return b.value===!0?r:Object.assign(r,Ye.value)}),Ge=v(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Je=v(()=>`q-drawer q-drawer--${t.side}`+(oe.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(H.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(ue.value===!0||U.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),Ze=v(()=>{const r=a.lang.rtl===!0?t.side:J.value;return[[ye,rt,void 0,{[r]:!0,mouse:!0}]]}),et=v(()=>{const r=a.lang.rtl===!0?J.value:t.side;return[[ye,Ve,void 0,{[r]:!0,mouse:!0}]]}),tt=v(()=>{const r=a.lang.rtl===!0?J.value:t.side;return[[ye,Ve,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){ot(b,t.behavior==="mobile"||t.behavior!=="desktop"&&l.totalWidth.value<=t.breakpoint)}w(b,r=>{r===!0?(B=g.value,g.value===!0&&k(!1)):t.overlay===!1&&t.behavior!=="mobile"&&B!==!1&&(g.value===!0?(V(0),A(0),se()):m(!1))}),w(()=>t.side,(r,h)=>{l.instances[h]===G&&(l.instances[h]=void 0,l[h].space=!1,l[h].offset=0),l.instances[r]=G,l[r].size=C.value,l[r].space=U.value,l[r].offset=le.value}),w(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),w(()=>t.behavior+t.breakpoint,ie),w(l.isContainer,r=>{g.value===!0&&n(r!==!0),r===!0&&ie()}),w(l.scrollbarWidth,()=>{V(g.value===!0?0:void 0)}),w(le,r=>{E("offset",r)}),w(U,r=>{s("onLayout",r),E("space",r)}),w(D,()=>{V()}),w(C,r=>{V(),ce(t.miniToOverlay,r)}),w(()=>t.miniToOverlay,r=>{ce(r,C.value)}),w(()=>a.lang.rtl,()=>{V()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(at(),l.animate())}),w(x,r=>{s("miniState",r)});function V(r){r===void 0?Le(()=>{r=g.value===!0?0:C.value,V(I.value*r)}):(l.isContainer.value===!0&&D.value===!0&&(b.value===!0||Math.abs(r)===C.value)&&(r+=I.value*l.scrollbarWidth.value),Se.value=r)}function A(r){Be.value=r}function ne(r){const h=r===!0?"remove":l.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function at(){q!==null&&clearTimeout(q),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),oe.value=!0,q=setTimeout(()=>{q=null,oe.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function rt(r){if(g.value!==!1)return;const h=C.value,S=ae(r.distance.x,0,h);if(r.isFinal===!0){S>=Math.min(75,h)===!0?m():(l.animate(),A(0),V(I.value*h)),H.value=!1;return}V((a.lang.rtl===!0?D.value!==!0:D.value)?Math.max(h-S,0):Math.min(0,S-h)),A(ae(S/h,0,1)),r.isFirst===!0&&(H.value=!0)}function Ve(r){if(g.value!==!0)return;const h=C.value,S=r.direction===t.side,Z=(a.lang.rtl===!0?S!==!0:S)?ae(r.distance.x,0,h):0;if(r.isFinal===!0){Math.abs(Z)<Math.min(75,h)===!0?(l.animate(),A(1),V(0)):k(),H.value=!1;return}V(I.value*Z),A(ae(1-Z/h,0,1)),r.isFirst===!0&&(H.value=!0)}function se(){n(!1),ne(!0)}function E(r,h){l.update(t.side,r,h)}function ot(r,h){r.value!==h&&(r.value=h)}function ce(r,h){E("size",r===!0?t.miniWidth:h)}return l.instances[t.side]=G,ce(t.miniToOverlay,C.value),E("space",U.value),E("offset",le.value),t.showIfAbove===!0&&t.modelValue!==!0&&g.value===!0&&t["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),gt(()=>{s("onLayout",U.value),s("miniState",x.value),B=t.showIfAbove===!0;const r=()=>{(g.value===!0?O:R)(!1,!0)};if(l.totalWidth.value!==0){Le(r);return}y=w(l.totalWidth,()=>{y(),y=void 0,g.value===!1&&t.showIfAbove===!0&&b.value===!1?m(!1):r()})}),Ce(()=>{y!==void 0&&y(),q!==null&&(clearTimeout(q),q=null),g.value===!0&&se(),l.instances[t.side]===G&&(l.instances[t.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const r=[];b.value===!0&&(t.noSwipeOpen===!1&&r.push(W(L("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ze.value)),r.push(Qe("div",{ref:"backdrop",class:Re.value,style:Ue.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",t.noSwipeBackdrop!==!0&&g.value===!0,()=>tt.value)));const h=x.value===!0&&o.mini!==void 0,S=[L("div",{..._,key:""+h,class:[Ge.value,_.class]},h===!0?o.mini():we(o.default))];return t.elevated===!0&&g.value===!0&&S.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Qe("aside",{ref:"content",class:Je.value,style:Ke.value},S,"contentclose",t.noSwipeClose!==!0&&b.value===!0,()=>et.value)),L("div",{class:"q-drawer-container"},r)}}});const At={data(){return{leftDrawerOpen:!1,essentialLinks:[{title:"Inicio",icon:"home",to:"/",can:"ver inicio"},{title:"Usuarios",icon:"people",to:"/users",can:"ver usuarios"},{title:"Empresas",icon:"business",to:"/companies",can:"ver empresas"},{title:"Botes",icon:"directions_boat",to:"/boats",can:"ver botes"},{title:"Tripulantes",icon:"group",to:"/crews",can:"ver tripulantes"},{title:"Clientes",icon:"person",to:"/clients",can:"ver clientes"},{title:"Productos",icon:"shopping_cart",to:"/products",can:"ver productos"},{title:"Gastos",icon:"point_of_sale",to:"/gastos",can:"ver viajes"},{title:"Viajes",icon:"flight_takeoff",to:"/viajes",can:"ver viajes"},{title:"Viajes Activos",icon:"sailing",to:"/viajesActivos",can:"ver viajes"},{title:"Venta",icon:"shopping_cart",to:"/sales",can:"ver ventas"},{title:"Deudores",icon:"credit_score",to:"/debtors",can:"ver deudores"}],permisos:JSON.parse(localStorage.getItem("permisos"))}},methods:{textCapitalize(t){if(!t)return"";const o=t.toLowerCase();return t.charAt(0).toUpperCase()+o.slice(1)},toggleLeftDrawer(){this.leftDrawerOpen=!this.leftDrawerOpen},logout(){this.$alert.dialog("\xBFEst\xE1 seguro que desea cerrar sesi\xF3n?").onOk(()=>{this.$axios.post("/logout").then(()=>{this.$store.isLogeed=!1,this.$store.user={},localStorage.removeItem("tokenPrestamos"),this.$router.push("/login")})})}},computed:{rutaActual(){return this.$route.path},title(){const t=this.$route.path;return t==="/"?"Inicio":t==="/users"?"Usuarios":t==="/clients"?"Clientes":t==="/companies"?"Empresas":t==="/boats"?"Botes":t==="/crews"?"Tripulantes":t==="/products"?"Productos":t==="/viajes"?"Viajes":"Inicio"}}},Et={class:"text-primary text-bold"};function Pt(t,o,s,_,e,a){const u=Ct("router-view");return Q(),$(Ee,{view:"lHh Lpr lFf"},{default:c(()=>[i(Pe,{class:"bg-white text-black",bordered:""},{default:c(()=>[i(Lt,null,{default:c(()=>[i(me,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"]),i(zt,null,{default:c(()=>[Te("div",Et,he(a.title),1)]),_:1}),Te("div",null,[i(me,{flat:"",dense:"",icon:"o_notifications","aria-label":"Notificaciones"},{default:c(()=>[i(kt,{color:"primary","text-color":"white",floating:""},{default:c(()=>[F("3")]),_:1})]),_:1}),i(me,{flat:"",dense:"",icon:"o_account_circle","aria-label":"Menu",label:a.textCapitalize(t.$store.user.name),"no-caps":"","icon-right":"arrow_drop_down"},{default:c(()=>[i(St,null,{default:c(()=>[i(Ae,null,{default:c(()=>[W((Q(),$(j,{clickable:""},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{icon:"account_circle"})]),_:1}),i(z,null,{default:c(()=>[i(P,null,{default:c(()=>[F("Perfil")]),_:1})]),_:1})]),_:1})),[[Y]]),W((Q(),$(j,{clickable:""},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{icon:"settings"})]),_:1}),i(z,null,{default:c(()=>[i(P,null,{default:c(()=>[F("Configuraci\xF3n")]),_:1})]),_:1})]),_:1})),[[Y]]),W((Q(),$(j,{clickable:"",onClick:a.logout},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{icon:"logout"})]),_:1}),i(z,null,{default:c(()=>[i(P,null,{default:c(()=>[F("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Y]])]),_:1})]),_:1})]),_:1},8,["label"])])]),_:1})]),_:1}),i(Mt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=n=>e.leftDrawerOpen=n),"show-if-above":"",width:220,class:"bg-primary text-white"},{default:c(()=>[i(Ee,null,{default:c(()=>[i(Pe,null,{default:c(()=>[i(Ae,null,{default:c(()=>[i(P,{class:"q-pa-xs"},{default:c(()=>[i(j,{dense:""},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{class:"bg-white","text-color":"primary",size:"45px"},{default:c(()=>[i(Vt,{src:"/logo.png"})]),_:1})]),_:1}),i(z,null,{default:c(()=>[i(P,{class:"text-white text-bold"},{default:c(()=>{var n,p,d;return[((n=t.$store.user)==null?void 0:n.role)==="VENDEDOR"?(Q(),$(pe,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):te("",!0),((p=t.$store.user)==null?void 0:p.role)==="ADMIN"?(Q(),$(pe,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):te("",!0),((d=t.$store.user)==null?void 0:d.role)==="SUPERADMIN"?(Q(),$(pe,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):te("",!0)]}),_:1}),i(P,{caption:"",class:"text-white"},{default:c(()=>[F(he(t.$store.user.name),1)]),_:1})]),_:1})]),_:1})]),_:1}),i(xt,{dark:""}),(Q(!0),De($e,null,qt(e.essentialLinks,n=>(Q(),De($e,{key:n.title},[!n.can||e.permisos.includes(n.can)?W((Q(),$(j,{key:0,clickable:"",dense:"",to:n.to,exact:"",class:Me(`text-white ${a.rutaActual==n.to?"bg-secondary":""}`)},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{"text-color":"white",icon:`${a.rutaActual==n.to?n.icon:"o_"+n.icon}`,size:`${a.rutaActual==n.to?"45px":"38px"}`},null,8,["icon","size"])]),_:2},1024),i(z,null,{default:c(()=>[i(P,{class:Me(`text-white ${a.rutaActual==n.to?"text-bold":""}`)},{default:c(()=>[F(he(n.title),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1032,["to","class"])),[[Y]]):te("",!0)],64))),128))]),_:1})]),_:1}),i(Qt,null,{default:c(()=>[W((Q(),$(j,{clickable:"",dense:"",onClick:a.logout},{default:c(()=>[i(z,{avatar:""},{default:c(()=>[i(N,{"text-color":"red",icon:"logout",size:"38px"})]),_:1}),i(z,null,{default:c(()=>[i(P,{class:"text-red text-bold"},{default:c(()=>[F("Cerrar Sesi\xF3n")]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Y]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),i(Ot,null,{default:c(()=>[i(u)]),_:1})]),_:1})}var Xt=_t(At,[["render",Pt]]);export{Xt as default};