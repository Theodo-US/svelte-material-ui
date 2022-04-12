var zt=Object.defineProperty;var rt=Object.getOwnPropertySymbols;var vt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable;var lt=(s,t,e)=>t in s?zt(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,U=(s,t)=>{for(var e in t||(t={}))vt.call(t,e)&&lt(s,e,t[e]);if(rt)for(var e of rt(t))jt.call(t,e)&&lt(s,e,t[e]);return s};import{S as X,i as G,s as Z,P as q,C as T,e as _t,c as gt,a as St,d as R,Z as N,g as W,I as Y,_ as k,Q,R as J,T as K,z as x,$ as At,q as M,o as H,a0 as Tt,a1 as I,a2 as $,v as wt,a3 as tt,L as Ft,M as et,r as it,w as ct,l as pt,x as Nt,y as ut,A as kt,n as Vt,B as ft,p as Ut,a4 as Yt,E as Xt}from"./index-30f0de65.js";import{r as Gt}from"./index-c646bcc2.js";import{_ as V,a as dt,M as Zt,c as D,u as bt,f as st,d as qt}from"./useActions-23126cd3.js";import{c as Ct,D as Wt,d as Qt,M as Jt}from"./Ripple-5fd6e49b.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},F={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Kt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at=function(s){V(t,s);function t(e){return s.call(this,dt(dt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Kt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return F},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var w=0,yt=function(s){V(t,s);function t(e){var a=s.call(this,e)||this;return a.wasDocked=!0,a.isDockedShowing=!0,a.currentAppBarOffsetTop=0,a.isCurrentlyBeingResized=!1,a.resizeThrottleId=w,a.resizeDebounceId=w,a.lastScrollPosition=a.adapter.getViewportScrollY(),a.topAppBarHeight=a.adapter.getTopAppBarHeight(),a}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),a=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=a,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=w,e.throttledResizeHandler()},F.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=w},F.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,a=this.currentAppBarOffsetTop<0,r=this.currentAppBarOffsetTop>e,p=a&&r;if(p)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==r)return this.isDockedShowing=r,!0}else return this.wasDocked=!0,!0;return p},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-F.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(at);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt=function(s){V(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(yt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $t=function(s){V(t,s);function t(e){var a=s.call(this,e)||this;return a.collapsed=!1,a.isAlwaysCollapsed=!1,a}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(E.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(E.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(at);const{window:ht}=Ft;function te(s){let t,e,a,r,p,g,l;const i=s[22].default,u=q(i,s,s[21],null);let _=[{class:e=D(U({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7]},s[11]))},{style:a=Object.entries(s[12]).map(mt).concat([s[3]]).join(" ")},s[15]],c={};for(let o=0;o<_.length;o+=1)c=T(c,_[o]);return{c(){t=_t("header"),u&&u.c(),this.h()},l(o){t=gt(o,"HEADER",{class:!0,style:!0});var f=St(t);u&&u.l(f),f.forEach(R),this.h()},h(){N(t,c)},m(o,f){W(o,t,f),u&&u.m(t,null),s[25](t),p=!0,g||(l=[Y(ht,"resize",s[23]),Y(ht,"scroll",s[24]),k(r=bt.call(null,t,s[1])),k(s[13].call(null,t)),Y(t,"SMUITopAppBarIconButton:nav",s[26])],g=!0)},p(o,f){u&&u.p&&(!p||f[0]&2097152)&&Q(u,i,o,o[21],p?K(i,o[21],f,null):J(o[21]),null),N(t,c=x(_,[(!p||f[0]&2293&&e!==(e=D(U({[o[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":o[4]==="short","mdc-top-app-bar--short-collapsed":o[0],"mdc-top-app-bar--fixed":o[4]==="fixed","smui-top-app-bar--static":o[4]==="static","smui-top-app-bar--color-secondary":o[5]==="secondary","mdc-top-app-bar--prominent":o[6],"mdc-top-app-bar--dense":o[7]},o[11]))))&&{class:e},(!p||f[0]&4104&&a!==(a=Object.entries(o[12]).map(mt).concat([o[3]]).join(" ")))&&{style:a},f[0]&32768&&o[15]])),r&&At(r.update)&&f[0]&2&&r.update.call(null,o[1])},i(o){p||(M(u,o),p=!0)},o(o){H(u,o),p=!1},d(o){o&&R(t),u&&u.d(o),s[25](null),g=!1,Tt(l)}}}const mt=([s,t])=>`${s}: ${t};`;function ee(s,t,e){const a=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let r=I(t,a),{$$slots:p={},$$scope:g}=t;const l=st($());let i=()=>{};function u(n){return n===i}let{use:_=[]}=t,{class:c=""}=t,{style:o=""}=t,{variant:f="standard"}=t,{color:b="primary"}=t,{collapsed:d=i}=t;const B=!u(d)&&!!d;u(d)&&(d=!1);let{prominent:C=!1}=t,{dense:O=!1}=t,{scrollTarget:S=void 0}=t,h,m,A={},y={},P,Et=Gt({variant:f,prominent:C,dense:O},n=>{e(18,P=n)}),L,z=f;wt(()=>(e(9,m=ot()),m.init(),()=>{m.destroy()}));function ot(){const n={static:at,short:$t,fixed:xt}[f]||yt;return new n({hasClass:Bt,addClass:Ot,removeClass:It,setStyle:Dt,getTopAppBarHeight:()=>h.clientHeight,notifyNavigationIconClicked:()=>qt(h,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>h.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Bt(n){return n in A?A[n]:nt().classList.contains(n)}function Ot(n){A[n]||e(11,A[n]=!0,A)}function It(n){(!(n in A)||A[n])&&e(11,A[n]=!1,A)}function Dt(n,j){y[n]!=j&&(j===""||j==null?(delete y[n],e(12,y),e(20,z),e(4,f),e(9,m)):e(12,y[n]=j,y))}function v(){m&&(m.handleTargetScroll(),f==="short"&&e(0,d="isCollapsed"in m&&m.isCollapsed))}function Lt(){return Et}function nt(){return h}const Rt=()=>f!=="short"&&f!=="fixed"&&m&&m.handleWindowResize(),Mt=()=>S==null&&v();function Ht(n){et[n?"unshift":"push"](()=>{h=n,e(10,h)})}const Pt=()=>m&&m.handleNavigationClick();return s.$$set=n=>{t=T(T({},t),tt(n)),e(15,r=I(t,a)),"use"in n&&e(1,_=n.use),"class"in n&&e(2,c=n.class),"style"in n&&e(3,o=n.style),"variant"in n&&e(4,f=n.variant),"color"in n&&e(5,b=n.color),"collapsed"in n&&e(0,d=n.collapsed),"prominent"in n&&e(6,C=n.prominent),"dense"in n&&e(7,O=n.dense),"scrollTarget"in n&&e(8,S=n.scrollTarget),"$$scope"in n&&e(21,g=n.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&P&&P({variant:f,prominent:C,dense:O}),s.$$.dirty[0]&1049104&&z!==f&&m&&(e(20,z=f),m.destroy(),e(11,A={}),e(12,y={}),e(9,m=ot()),m.init()),s.$$.dirty[0]&528&&m&&f==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(B),s.$$.dirty[0]&524544&&L!==S&&(L&&L.removeEventListener("scroll",v),S&&S.addEventListener("scroll",v),e(19,L=S))},[d,_,c,o,f,b,C,O,S,m,h,A,y,l,v,r,Lt,nt,P,L,z,g,p,Rt,Mt,Ht,Pt]}class he extends X{constructor(t){super(),G(this,t,ee,te,Z,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}var me=Ct({class:"mdc-top-app-bar__row",component:Wt});function se(s){let t,e,a,r,p,g;const l=s[9].default,i=q(l,s,s[8],null);let u=[{class:e=D({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],_={};for(let c=0;c<u.length;c+=1)_=T(_,u[c]);return{c(){t=_t("section"),i&&i.c(),this.h()},l(c){t=gt(c,"SECTION",{class:!0});var o=St(t);i&&i.l(o),o.forEach(R),this.h()},h(){N(t,_)},m(c,o){W(c,t,o),i&&i.m(t,null),s[10](t),r=!0,p||(g=[k(a=bt.call(null,t,s[0])),k(s[5].call(null,t))],p=!0)},p(c,[o]){i&&i.p&&(!r||o&256)&&Q(i,l,c,c[8],r?K(l,c[8],o,null):J(c[8]),null),N(t,_=x(u,[(!r||o&6&&e!==(e=D({[c[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":c[2]==="start","mdc-top-app-bar__section--align-end":c[2]==="end"})))&&{class:e},o&8&&(c[3]?{role:"toolbar"}:{}),o&64&&c[6]])),a&&At(a.update)&&o&1&&a.update.call(null,c[0])},i(c){r||(M(i,c),r=!0)},o(c){H(i,c),r=!1},d(c){c&&R(t),i&&i.d(c),s[10](null),p=!1,Tt(g)}}}function ae(s,t,e){const a=["use","class","align","toolbar","getElement"];let r=I(t,a),{$$slots:p={},$$scope:g}=t;const l=st($());let{use:i=[]}=t,{class:u=""}=t,{align:_="start"}=t,{toolbar:c=!1}=t,o;it("SMUI:icon-button:context",c?"top-app-bar:action":"top-app-bar:navigation"),it("SMUI:button:context",c?"top-app-bar:action":"top-app-bar:navigation");function f(){return o}function b(d){et[d?"unshift":"push"](()=>{o=d,e(4,o)})}return s.$$set=d=>{t=T(T({},t),tt(d)),e(6,r=I(t,a)),"use"in d&&e(0,i=d.use),"class"in d&&e(1,u=d.class),"align"in d&&e(2,_=d.align),"toolbar"in d&&e(3,c=d.toolbar),"$$scope"in d&&e(8,g=d.$$scope)},[i,u,_,c,o,l,r,f,g,p,b]}class oe extends X{constructor(t){super(),G(this,t,ae,se,Z,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}var _e=Ct({class:"mdc-top-app-bar__title",component:Qt});function ne(s){let t;const e=s[11].default,a=q(e,s,s[13],null);return{c(){a&&a.c()},l(r){a&&a.l(r)},m(r,p){a&&a.m(r,p),t=!0},p(r,p){a&&a.p&&(!t||p&8192)&&Q(a,e,r,r[13],t?K(e,r[13],p,null):J(r[13]),null)},i(r){t||(M(a,r),t=!0)},o(r){H(a,r),t=!1},d(r){a&&a.d(r)}}}function re(s){let t,e,a;const r=[{use:[s[6],...s[0]]},{class:D({[s[1]]:!0,[s[5]]:!0})},s[7]];var p=s[2];function g(l){let i={$$slots:{default:[ne]},$$scope:{ctx:l}};for(let u=0;u<r.length;u+=1)i=T(i,r[u]);return{props:i}}return p&&(t=new p(g(s)),s[12](t)),{c(){t&&ct(t.$$.fragment),e=pt()},l(l){t&&Nt(t.$$.fragment,l),e=pt()},m(l,i){t&&ut(t,l,i),W(l,e,i),a=!0},p(l,[i]){const u=i&227?x(r,[i&65&&{use:[l[6],...l[0]]},i&34&&{class:D({[l[1]]:!0,[l[5]]:!0})},i&128&&kt(l[7])]):{};if(i&8192&&(u.$$scope={dirty:i,ctx:l}),p!==(p=l[2])){if(t){Vt();const _=t;H(_.$$.fragment,1,0,()=>{ft(_,1)}),Ut()}p?(t=new p(g(l)),l[12](t),ct(t.$$.fragment),M(t.$$.fragment,1),ut(t,e.parentNode,e)):t=null}else p&&t.$set(u)},i(l){a||(t&&M(t.$$.fragment,l),a=!0)},o(l){t&&H(t.$$.fragment,l),a=!1},d(l){s[12](null),l&&R(e),t&&ft(t,l)}}}function le(s,t,e){let a,r;const p=["use","class","topAppBar","component","getElement"];let g=I(t,p),l,i=Xt,u=()=>(i(),i=Yt(a,h=>e(10,l=h)),a);s.$$.on_destroy.push(()=>i());let{$$slots:_={},$$scope:c}=t;const o=st($());let{use:f=[]}=t,{class:b=""}=t,{topAppBar:d}=t,B,{component:C=Jt}=t;function O(){return B.getElement()}function S(h){et[h?"unshift":"push"](()=>{B=h,e(4,B)})}return s.$$set=h=>{t=T(T({},t),tt(h)),e(7,g=I(t,p)),"use"in h&&e(0,f=h.use),"class"in h&&e(1,b=h.class),"topAppBar"in h&&e(8,d=h.topAppBar),"component"in h&&e(2,C=h.component),"$$scope"in h&&e(13,c=h.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&u(e(3,a=d&&d.getPropStore())),s.$$.dirty&1032&&e(5,r=(()=>!a||l.variant==="static"?"":l.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":l.prominent&&l.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":l.prominent?"mdc-top-app-bar--prominent-fixed-adjust":l.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[f,b,C,a,B,r,o,g,d,O,l,_,S,c]}class ie extends X{constructor(t){super(),G(this,t,le,re,Z,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const ge=oe,Se=ie;export{Se as A,me as R,ge as S,he as T,_e as a};
