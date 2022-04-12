import{S as Y,i as w,s as x,P as S,C as F,e as A,k as $,c as H,a as L,m as ee,d as R,Z as M,g as te,H as O,_ as k,I as U,Q as P,R as W,T as y,z as D,$ as G,q as j,o as q,a0 as ne,a1 as B,a2 as le,r as ae,v as ie,a3 as se,M as T}from"./index-30f0de65.js";import{_ as re,a as z,M as ue,c as N,u as Q,f as oe}from"./useActions-23126cd3.js";import{p as V,e as Z}from"./prefixFilter-0866cfc5.js";/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var fe={ROOT:"mdc-form-field"},ce={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var de=function(n){re(t,n);function t(a){var s=n.call(this,z(z({},t.defaultAdapter),a))||this;return s.click=function(){s.handleClick()},s}return Object.defineProperty(t,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var a=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){a.adapter.deactivateInputRipple()})},t}(ue);const _e=n=>({}),J=n=>({});function me(n){let t,a,s,m,b,p,o,h,v;const I=n[13].default,r=S(I,n,n[12],null),g=n[13].label,u=S(g,n,n[12],J);let d=[{for:n[4]},V(n[10],"label$")],_={};for(let e=0;e<d.length;e+=1)_=F(_,d[e]);let c=[{class:b=N({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},Z(n[10],["label$"])],f={};for(let e=0;e<c.length;e+=1)f=F(f,c[e]);return{c(){t=A("div"),r&&r.c(),a=$(),s=A("label"),u&&u.c(),this.h()},l(e){t=H(e,"DIV",{class:!0});var i=L(t);r&&r.l(i),a=ee(i),s=H(i,"LABEL",{for:!0});var E=L(s);u&&u.l(E),E.forEach(R),i.forEach(R),this.h()},h(){M(s,_),M(t,f)},m(e,i){te(e,t,i),r&&r.m(t,null),O(t,a),O(t,s),u&&u.m(s,null),n[14](s),n[15](t),o=!0,h||(v=[k(m=Q.call(null,s,n[5])),k(p=Q.call(null,t,n[0])),k(n[9].call(null,t)),U(t,"SMUIGenericInput:mount",n[16]),U(t,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[i]){r&&r.p&&(!o||i&4096)&&P(r,I,e,e[12],o?y(I,e[12],i,null):W(e[12]),null),u&&u.p&&(!o||i&4096)&&P(u,g,e,e[12],o?y(g,e[12],i,_e):W(e[12]),J),M(s,_=D(d,[(!o||i&16)&&{for:e[4]},i&1024&&V(e[10],"label$")])),m&&G(m.update)&&i&32&&m.update.call(null,e[5]),M(t,f=D(c,[(!o||i&14&&b!==(b=N({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:b},i&1024&&Z(e[10],["label$"])])),p&&G(p.update)&&i&1&&p.update.call(null,e[0])},i(e){o||(j(r,e),j(u,e),o=!0)},o(e){q(r,e),q(u,e),o=!1},d(e){e&&R(t),r&&r.d(e),u&&u.d(e),n[14](null),n[15](null),h=!1,ne(v)}}}let pe=0;function ge(n,t,a){const s=["use","class","align","noWrap","inputId","label$use","getElement"];let m=B(t,s),{$$slots:b={},$$scope:p}=t;const o=oe(le());let{use:h=[]}=t,{class:v=""}=t,{align:I="start"}=t,{noWrap:r=!1}=t,{inputId:g="SMUI-form-field-"+pe++}=t,{label$use:u=[]}=t,d,_,c,f;ae("SMUI:generic:input:props",{id:g}),ie(()=>(_=new de({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(l,C)=>{c.removeEventListener(l,C)},registerInteractionHandler:(l,C)=>{c.addEventListener(l,C)}}),_.init(),()=>{_.destroy()}));function e(){return d}function i(l){T[l?"unshift":"push"](()=>{c=l,a(7,c)})}function E(l){T[l?"unshift":"push"](()=>{d=l,a(6,d)})}const K=l=>a(8,f=l.detail),X=()=>a(8,f=void 0);return n.$$set=l=>{t=F(F({},t),se(l)),a(10,m=B(t,s)),"use"in l&&a(0,h=l.use),"class"in l&&a(1,v=l.class),"align"in l&&a(2,I=l.align),"noWrap"in l&&a(3,r=l.noWrap),"inputId"in l&&a(4,g=l.inputId),"label$use"in l&&a(5,u=l.label$use),"$$scope"in l&&a(12,p=l.$$scope)},[h,v,I,r,g,u,d,c,f,o,m,e,p,b,i,E,K,X]}class ve extends Y{constructor(t){super(),w(this,t,ge,me,x,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:11})}get getElement(){return this.$$.ctx[11]}}export{ve as F};
