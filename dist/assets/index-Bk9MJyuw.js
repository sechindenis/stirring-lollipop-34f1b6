(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sg={exports:{}},wl={},Ag={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),CE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),xE=Symbol.for("react.strict_mode"),DE=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),ME=Symbol.for("react.suspense"),bE=Symbol.for("react.memo"),FE=Symbol.for("react.lazy"),rp=Symbol.iterator;function UE(t){return t===null||typeof t!="object"?null:(t=rp&&t[rp]||t["@@iterator"],typeof t=="function"?t:null)}var Rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pg=Object.assign,kg={};function Vi(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Rg}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cg(){}Cg.prototype=Vi.prototype;function yh(t,e,n){this.props=t,this.context=e,this.refs=kg,this.updater=n||Rg}var _h=yh.prototype=new Cg;_h.constructor=yh;Pg(_h,Vi.prototype);_h.isPureReactComponent=!0;var ip=Array.isArray,Ng=Object.prototype.hasOwnProperty,vh={current:null},xg={key:!0,ref:!0,__self:!0,__source:!0};function Dg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ng.call(e,r)&&!xg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:t,key:s,ref:o,props:i,_owner:vh.current}}function jE(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function zE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sp=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zE(""+t.key):e.toString(36)}function fa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lo:case CE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eu(o,0):r,ip(i)?(n="",t!=null&&(n=t.replace(sp,"$&/")+"/"),fa(i,e,n,"",function(h){return h})):i!=null&&(Eh(i)&&(i=jE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ip(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Eu(s,l);o+=fa(s,e,n,u,i)}else if(u=UE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Eu(s,l++),o+=fa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(t,e,n){if(t==null)return t;var r=[],i=0;return fa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},pa={transition:null},$E={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:pa,ReactCurrentOwner:vh};function Vg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ho,forEach:function(t,e,n){Ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ho(t,function(){e++}),e},toArray:function(t){return Ho(t,function(e){return e})||[]},only:function(t){if(!Eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Vi;J.Fragment=NE;J.Profiler=DE;J.PureComponent=yh;J.StrictMode=xE;J.Suspense=ME;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;J.act=Vg;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ng.call(e,u)&&!xg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:lo,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:OE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VE,_context:t},t.Consumer=t};J.createElement=Dg;J.createFactory=function(t){var e=Dg.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:LE,render:t}};J.isValidElement=Eh;J.lazy=function(t){return{$$typeof:FE,_payload:{_status:-1,_result:t},_init:BE}};J.memo=function(t,e){return{$$typeof:bE,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=pa.transition;pa.transition={};try{t()}finally{pa.transition=e}};J.unstable_act=Vg;J.useCallback=function(t,e){return it.current.useCallback(t,e)};J.useContext=function(t){return it.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return it.current.useDeferredValue(t)};J.useEffect=function(t,e){return it.current.useEffect(t,e)};J.useId=function(){return it.current.useId()};J.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return it.current.useMemo(t,e)};J.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};J.useRef=function(t){return it.current.useRef(t)};J.useState=function(t){return it.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return it.current.useTransition()};J.version="18.3.1";Ag.exports=J;var se=Ag.exports;const wh=kE(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=se,HE=Symbol.for("react.element"),qE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,GE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QE={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KE.call(e,r)&&!QE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HE,type:t,key:s,ref:o,props:i,_owner:GE.current}}wl.Fragment=qE;wl.jsx=Og;wl.jsxs=Og;Sg.exports=wl;var D=Sg.exports,Lg={exports:{}},yt={},Mg={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var X=z.length;z.push(K);e:for(;0<X;){var me=X-1>>>1,le=z[me];if(0<i(le,K))z[me]=K,z[X]=le,X=me;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],X=z.pop();if(X!==K){z[0]=X;e:for(var me=0,le=z.length,Ie=le>>>1;me<Ie;){var Jt=2*(me+1)-1,Zt=z[Jt],en=Jt+1,tn=z[en];if(0>i(Zt,X))en<le&&0>i(tn,Zt)?(z[me]=tn,z[en]=X,me=en):(z[me]=Zt,z[Jt]=X,me=Jt);else if(en<le&&0>i(tn,X))z[me]=tn,z[en]=X,me=en;else break e}}return K}function i(z,K){var X=z.sortIndex-K.sortIndex;return X!==0?X:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,S=!1,C=!1,x=!1,L=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=z)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function V(z){if(x=!1,A(z),!C)if(n(u)!==null)C=!0,Bi(j);else{var K=n(h);K!==null&&Xt(V,K.startTime-z)}}function j(z,K){C=!1,x&&(x=!1,I(g),g=-1),S=!0;var X=y;try{for(A(K),m=n(u);m!==null&&(!(m.expirationTime>K)||z&&!R());){var me=m.callback;if(typeof me=="function"){m.callback=null,y=m.priorityLevel;var le=me(m.expirationTime<=K);K=t.unstable_now(),typeof le=="function"?m.callback=le:m===n(u)&&r(u),A(K)}else r(u);m=n(u)}if(m!==null)var Ie=!0;else{var Jt=n(h);Jt!==null&&Xt(V,Jt.startTime-K),Ie=!1}return Ie}finally{m=null,y=X,S=!1}}var U=!1,v=null,g=-1,_=5,w=-1;function R(){return!(t.unstable_now()-w<_)}function k(){if(v!==null){var z=t.unstable_now();w=z;var K=!0;try{K=v(!0,z)}finally{K?T():(U=!1,v=null)}}else U=!1}var T;if(typeof E=="function")T=function(){E(k)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,cr=vt.port2;vt.port1.onmessage=k,T=function(){cr.postMessage(null)}}else T=function(){L(k,0)};function Bi(z){v=z,U||(U=!0,T())}function Xt(z,K){g=L(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Bi(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var X=y;y=K;try{return z()}finally{y=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=y;y=z;try{return K()}finally{y=X}},t.unstable_scheduleCallback=function(z,K,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=X+le,z={id:f++,callback:K,priorityLevel:z,startTime:X,expirationTime:le,sortIndex:-1},X>me?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(x?(I(g),g=-1):x=!0,Xt(V,X-me))):(z.sortIndex=le,e(u,z),C||S||(C=!0,Bi(j))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var K=y;return function(){var X=y;y=K;try{return z.apply(this,arguments)}finally{y=X}}}})(bg);Mg.exports=bg;var YE=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=se,mt=YE;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg=new Set,Os={};function br(t,e){_i(t,e),_i(t+"Capture",e)}function _i(t,e){for(Os[t]=e,t=0;t<e.length;t++)Fg.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=Object.prototype.hasOwnProperty,JE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,op={},ap={};function ZE(t){return rc.call(ap,t)?!0:rc.call(op,t)?!1:JE.test(t)?ap[t]=!0:(op[t]=!0,!1)}function ew(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tw(t,e,n,r){if(e===null||typeof e>"u"||ew(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Th=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Th,Ih);ze[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Th,Ih);ze[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Th,Ih);ze[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tw(e,n,i,r)&&(n=null),r||i===null?ZE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sn=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),sc=Symbol.for("react.suspense"),oc=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),lp=Symbol.iterator;function ns(t){return t===null||typeof t!="object"?null:(t=lp&&t[lp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,wu;function hs(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Tu=!1;function Iu(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hs(t):""}function nw(t){switch(t.tag){case 5:return hs(t.type);case 16:return hs("Lazy");case 13:return hs("Suspense");case 19:return hs("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Yr:return"Portal";case ic:return"Profiler";case Ah:return"StrictMode";case sc:return"Suspense";case oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Ug:return(t._context.displayName||"Context")+".Provider";case Rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ph:return e=t.displayName||null,e!==null?e:ac(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return ac(t(e))}catch{}}return null}function rw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iw(t){var e=Bg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){t._valueTracker||(t._valueTracker=iw(t))}function $g(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function up(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wg(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function uc(t,e){Wg(t,e);var n=nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&cc(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ds=Array.isArray;function li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ds(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Hg(t,e){var n=nr(e.value),r=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,Kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sw=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(t){sw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Es[e]=Es[t]})});function Gg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Es.hasOwnProperty(t)&&Es[t]?(""+e).trim():e+"px"}function Qg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ow=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(ow[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=null;function kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gc=null,ui=null,ci=null;function fp(t){if(t=ho(t)){if(typeof gc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Rl(e),gc(t.stateNode,t.type,e))}}function Yg(t){ui?ci?ci.push(t):ci=[t]:ui=t}function Xg(){if(ui){var t=ui,e=ci;if(ci=ui=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function Jg(t,e){return t(e)}function Zg(){}var Su=!1;function ey(t,e,n){if(Su)return t(e,n);Su=!0;try{return Jg(t,e,n)}finally{Su=!1,(ui!==null||ci!==null)&&(Zg(),Xg())}}function Ms(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var yc=!1;if(gn)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){yc=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{yc=!1}function aw(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var ws=!1,Oa=null,La=!1,_c=null,lw={onError:function(t){ws=!0,Oa=t}};function uw(t,e,n,r,i,s,o,l,u){ws=!1,Oa=null,aw.apply(lw,arguments)}function cw(t,e,n,r,i,s,o,l,u){if(uw.apply(this,arguments),ws){if(ws){var h=Oa;ws=!1,Oa=null}else throw Error(b(198));La||(La=!0,_c=h)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ty(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pp(t){if(Fr(t)!==t)throw Error(b(188))}function hw(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pp(i),t;if(s===r)return pp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function ny(t){return t=hw(t),t!==null?ry(t):null}function ry(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ry(t);if(e!==null)return e;t=t.sibling}return null}var iy=mt.unstable_scheduleCallback,mp=mt.unstable_cancelCallback,dw=mt.unstable_shouldYield,fw=mt.unstable_requestPaint,Ae=mt.unstable_now,pw=mt.unstable_getCurrentPriorityLevel,Ch=mt.unstable_ImmediatePriority,sy=mt.unstable_UserBlockingPriority,Ma=mt.unstable_NormalPriority,mw=mt.unstable_LowPriority,oy=mt.unstable_IdlePriority,Tl=null,Wt=null;function gw(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:vw,yw=Math.log,_w=Math.LN2;function vw(t){return t>>>=0,t===0?32:31-(yw(t)/_w|0)|0}var Qo=64,Yo=4194304;function fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=fs(l):(s&=o,s!==0&&(r=fs(s)))}else o=n&~i,o!==0?r=fs(o):s!==0&&(r=fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ew(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ww(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=Ew(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ay(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function Tw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function ly(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var uy,xh,cy,hy,dy,Ec=!1,Xo=[],Wn=null,Hn=null,qn=null,bs=new Map,Fs=new Map,Mn=[],Iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gp(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":bs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(e.pointerId)}}function is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&xh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Sw(t,e,n,r,i){switch(e){case"focusin":return Wn=is(Wn,t,e,n,r,i),!0;case"dragenter":return Hn=is(Hn,t,e,n,r,i),!0;case"mouseover":return qn=is(qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bs.set(s,is(bs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fs.set(s,is(Fs.get(s)||null,t,e,n,r,i)),!0}return!1}function fy(t){var e=_r(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=ty(n),e!==null){t.blockedOn=e,dy(t.priority,function(){cy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mc=r,n.target.dispatchEvent(r),mc=null}else return e=ho(n),e!==null&&xh(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){ma(t)&&n.delete(e)}function Aw(){Ec=!1,Wn!==null&&ma(Wn)&&(Wn=null),Hn!==null&&ma(Hn)&&(Hn=null),qn!==null&&ma(qn)&&(qn=null),bs.forEach(yp),Fs.forEach(yp)}function ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Ec||(Ec=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Aw)))}function Us(t){function e(i){return ss(i,t)}if(0<Xo.length){ss(Xo[0],t);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&ss(Wn,t),Hn!==null&&ss(Hn,t),qn!==null&&ss(qn,t),bs.forEach(e),Fs.forEach(e),n=0;n<Mn.length;n++)r=Mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mn.length&&(n=Mn[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&Mn.shift()}var hi=Sn.ReactCurrentBatchConfig,Fa=!0;function Rw(t,e,n,r){var i=oe,s=hi.transition;hi.transition=null;try{oe=1,Dh(t,e,n,r)}finally{oe=i,hi.transition=s}}function Pw(t,e,n,r){var i=oe,s=hi.transition;hi.transition=null;try{oe=4,Dh(t,e,n,r)}finally{oe=i,hi.transition=s}}function Dh(t,e,n,r){if(Fa){var i=wc(t,e,n,r);if(i===null)Lu(t,e,r,Ua,n),gp(t,r);else if(Sw(i,t,e,n,r))r.stopPropagation();else if(gp(t,r),e&4&&-1<Iw.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&uy(s),s=wc(t,e,n,r),s===null&&Lu(t,e,r,Ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lu(t,e,r,null,n)}}var Ua=null;function wc(t,e,n,r){if(Ua=null,t=kh(r),t=_r(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ty(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pw()){case Ch:return 1;case sy:return 4;case Ma:case mw:return 16;case oy:return 536870912;default:return 16}default:return 16}}var zn=null,Vh=null,ga=null;function my(){if(ga)return ga;var t,e=Vh,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ga=i.slice(t,1<r?1-r:void 0)}function ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Jo(){return!0}function _p(){return!1}function _t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jo:_p,this.isPropagationStopped=_p,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=_t(Oi),co=_e({},Oi,{view:0,detail:0}),kw=_t(co),Ru,Pu,os,Il=_e({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(Ru=t.screenX-os.screenX,Pu=t.screenY-os.screenY):Pu=Ru=0,os=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),vp=_t(Il),Cw=_e({},Il,{dataTransfer:0}),Nw=_t(Cw),xw=_e({},co,{relatedTarget:0}),ku=_t(xw),Dw=_e({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Vw=_t(Dw),Ow=_e({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lw=_t(Ow),Mw=_e({},Oi,{data:0}),Ep=_t(Mw),bw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uw[t])?!!e[t]:!1}function Lh(){return jw}var zw=_e({},co,{key:function(t){if(t.key){var e=bw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lh,charCode:function(t){return t.type==="keypress"?ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bw=_t(zw),$w=_e({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=_t($w),Ww=_e({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lh}),Hw=_t(Ww),qw=_e({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kw=_t(qw),Gw=_e({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=_t(Gw),Yw=[9,13,27,32],Mh=gn&&"CompositionEvent"in window,Ts=null;gn&&"documentMode"in document&&(Ts=document.documentMode);var Xw=gn&&"TextEvent"in window&&!Ts,gy=gn&&(!Mh||Ts&&8<Ts&&11>=Ts),Tp=" ",Ip=!1;function yy(t,e){switch(t){case"keyup":return Yw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function Jw(t,e){switch(t){case"compositionend":return _y(e);case"keypress":return e.which!==32?null:(Ip=!0,Tp);case"textInput":return t=e.data,t===Tp&&Ip?null:t;default:return null}}function Zw(t,e){if(Jr)return t==="compositionend"||!Mh&&yy(t,e)?(t=my(),ga=Vh=zn=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gy&&e.locale!=="ko"?null:e.data;default:return null}}var eT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eT[t.type]:e==="textarea"}function vy(t,e,n,r){Yg(r),e=ja(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Is=null,js=null;function tT(t){Ny(t,0)}function Sl(t){var e=ti(t);if($g(e))return t}function nT(t,e){if(t==="change")return e}var Ey=!1;if(gn){var Cu;if(gn){var Nu="oninput"in document;if(!Nu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Nu=typeof Ap.oninput=="function"}Cu=Nu}else Cu=!1;Ey=Cu&&(!document.documentMode||9<document.documentMode)}function Rp(){Is&&(Is.detachEvent("onpropertychange",wy),js=Is=null)}function wy(t){if(t.propertyName==="value"&&Sl(js)){var e=[];vy(e,js,t,kh(t)),ey(tT,e)}}function rT(t,e,n){t==="focusin"?(Rp(),Is=e,js=n,Is.attachEvent("onpropertychange",wy)):t==="focusout"&&Rp()}function iT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(js)}function sT(t,e){if(t==="click")return Sl(e)}function oT(t,e){if(t==="input"||t==="change")return Sl(e)}function aT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:aT;function zs(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rc.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,e){var n=Pp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function Ty(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ty(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lT(t){var e=Iy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ty(n.ownerDocument.documentElement,n)){if(r!==null&&bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kp(n,s);var o=kp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uT=gn&&"documentMode"in document&&11>=document.documentMode,Zr=null,Tc=null,Ss=null,Ic=!1;function Cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||Zr==null||Zr!==Va(r)||(r=Zr,"selectionStart"in r&&bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ss&&zs(Ss,r)||(Ss=r,r=ja(Tc,"onSelect"),0<r.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ei={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},xu={},Sy={};gn&&(Sy=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function Al(t){if(xu[t])return xu[t];if(!ei[t])return t;var e=ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sy)return xu[t]=e[n];return t}var Ay=Al("animationend"),Ry=Al("animationiteration"),Py=Al("animationstart"),ky=Al("transitionend"),Cy=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Cy.set(t,e),br(e,[t])}for(var Du=0;Du<Np.length;Du++){var Vu=Np[Du],cT=Vu.toLowerCase(),hT=Vu[0].toUpperCase()+Vu.slice(1);ar(cT,"on"+hT)}ar(Ay,"onAnimationEnd");ar(Ry,"onAnimationIteration");ar(Py,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(ky,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));function xp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cw(r,e,void 0,t),t.currentTarget=null}function Ny(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;xp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;xp(i,l,h),s=u}}}if(La)throw t=_c,La=!1,_c=null,t}function de(t,e){var n=e[kc];n===void 0&&(n=e[kc]=new Set);var r=t+"__bubble";n.has(r)||(xy(e,t,2,!1),n.add(r))}function Ou(t,e,n){var r=0;e&&(r|=4),xy(n,t,r,e)}var ea="_reactListening"+Math.random().toString(36).slice(2);function Bs(t){if(!t[ea]){t[ea]=!0,Fg.forEach(function(n){n!=="selectionchange"&&(dT.has(n)||Ou(n,!1,t),Ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ea]||(e[ea]=!0,Ou("selectionchange",!1,e))}}function xy(t,e,n,r){switch(py(e)){case 1:var i=Rw;break;case 4:i=Pw;break;default:i=Dh}n=i.bind(null,e,n,t),i=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=_r(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ey(function(){var h=s,f=kh(n),m=[];e:{var y=Cy.get(t);if(y!==void 0){var S=Oh,C=t;switch(t){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":S=Bw;break;case"focusin":C="focus",S=ku;break;case"focusout":C="blur",S=ku;break;case"beforeblur":case"afterblur":S=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Hw;break;case Ay:case Ry:case Py:S=Vw;break;case ky:S=Kw;break;case"scroll":S=kw;break;case"wheel":S=Qw;break;case"copy":case"cut":case"paste":S=Lw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=wp}var x=(e&4)!==0,L=!x&&t==="scroll",I=x?y!==null?y+"Capture":null:y;x=[];for(var E=h,A;E!==null;){A=E;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,I!==null&&(V=Ms(E,I),V!=null&&x.push($s(E,V,A)))),L)break;E=E.return}0<x.length&&(y=new S(y,C,null,n,f),m.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&n!==mc&&(C=n.relatedTarget||n.fromElement)&&(_r(C)||C[yn]))break e;if((S||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?_r(C):null,C!==null&&(L=Fr(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(x=vp,V="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(x=wp,V="onPointerLeave",I="onPointerEnter",E="pointer"),L=S==null?y:ti(S),A=C==null?y:ti(C),y=new x(V,E+"leave",S,n,f),y.target=L,y.relatedTarget=A,V=null,_r(f)===h&&(x=new x(I,E+"enter",C,n,f),x.target=A,x.relatedTarget=L,V=x),L=V,S&&C)t:{for(x=S,I=C,E=0,A=x;A;A=Hr(A))E++;for(A=0,V=I;V;V=Hr(V))A++;for(;0<E-A;)x=Hr(x),E--;for(;0<A-E;)I=Hr(I),A--;for(;E--;){if(x===I||I!==null&&x===I.alternate)break t;x=Hr(x),I=Hr(I)}x=null}else x=null;S!==null&&Dp(m,y,S,x,!1),C!==null&&L!==null&&Dp(m,L,C,x,!0)}}e:{if(y=h?ti(h):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var j=nT;else if(Sp(y))if(Ey)j=oT;else{j=iT;var U=rT}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=sT);if(j&&(j=j(t,h))){vy(m,j,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&cc(y,"number",y.value)}switch(U=h?ti(h):window,t){case"focusin":(Sp(U)||U.contentEditable==="true")&&(Zr=U,Tc=h,Ss=null);break;case"focusout":Ss=Tc=Zr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Cp(m,n,f);break;case"selectionchange":if(uT)break;case"keydown":case"keyup":Cp(m,n,f)}var v;if(Mh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Jr?yy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(gy&&n.locale!=="ko"&&(Jr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Jr&&(v=my()):(zn=f,Vh="value"in zn?zn.value:zn.textContent,Jr=!0)),U=ja(h,g),0<U.length&&(g=new Ep(g,t,null,n,f),m.push({event:g,listeners:U}),v?g.data=v:(v=_y(n),v!==null&&(g.data=v)))),(v=Xw?Jw(t,n):Zw(t,n))&&(h=ja(h,"onBeforeInput"),0<h.length&&(f=new Ep("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}Ny(m,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ms(t,n),s!=null&&r.unshift($s(t,s,i)),s=Ms(t,e),s!=null&&r.push($s(t,s,i))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Ms(n,s),u!=null&&o.unshift($s(n,u,l))):i||(u=Ms(n,s),u!=null&&o.push($s(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(fT,`
`).replace(pT,"")}function ta(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(b(425))}function za(){}var Sc=null,Ac=null;function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,gT=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(yT)}:Pc;function yT(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Us(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Li=Math.random().toString(36).slice(2),$t="__reactFiber$"+Li,Ws="__reactProps$"+Li,yn="__reactContainer$"+Li,kc="__reactEvents$"+Li,_T="__reactListeners$"+Li,vT="__reactHandles$"+Li;function _r(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Lp(t);t!==null;){if(n=t[$t])return n;t=Lp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[$t]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Rl(t){return t[Ws]||null}var Cc=[],ni=-1;function lr(t){return{current:t}}function fe(t){0>ni||(t.current=Cc[ni],Cc[ni]=null,ni--)}function ce(t,e){ni++,Cc[ni]=t.current,t.current=e}var rr={},Je=lr(rr),lt=lr(!1),Rr=rr;function vi(t,e){var n=t.type.contextTypes;if(!n)return rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function Ba(){fe(lt),fe(Je)}function Mp(t,e,n){if(Je.current!==rr)throw Error(b(168));ce(Je,e),ce(lt,n)}function Dy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,rw(t)||"Unknown",i));return _e({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Rr=Je.current,ce(Je,t),ce(lt,lt.current),!0}function bp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Dy(t,e,Rr),r.__reactInternalMemoizedMergedChildContext=t,fe(lt),fe(Je),ce(Je,t)):fe(lt),ce(lt,n)}var on=null,Pl=!1,bu=!1;function Vy(t){on===null?on=[t]:on.push(t)}function ET(t){Pl=!0,Vy(t)}function ur(){if(!bu&&on!==null){bu=!0;var t=0,e=oe;try{var n=on;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}on=null,Pl=!1}catch(i){throw on!==null&&(on=on.slice(t+1)),iy(Ch,ur),i}finally{oe=e,bu=!1}}return null}var ri=[],ii=0,Wa=null,Ha=0,Et=[],wt=0,Pr=null,ln=1,un="";function mr(t,e){ri[ii++]=Ha,ri[ii++]=Wa,Wa=t,Ha=e}function Oy(t,e,n){Et[wt++]=ln,Et[wt++]=un,Et[wt++]=Pr,Pr=t;var r=ln;t=un;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ln=1<<32-bt(e)+i|n<<i|r,un=s+t}else ln=1<<s|n<<i|r,un=t}function Fh(t){t.return!==null&&(mr(t,1),Oy(t,1,0))}function Uh(t){for(;t===Wa;)Wa=ri[--ii],ri[ii]=null,Ha=ri[--ii],ri[ii]=null;for(;t===Pr;)Pr=Et[--wt],Et[wt]=null,un=Et[--wt],Et[wt]=null,ln=Et[--wt],Et[wt]=null}var pt=null,ft=null,pe=!1,Ot=null;function Ly(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,ft=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:ln,overflow:un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,ft=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(pe){var e=ft;if(e){var n=e;if(!Fp(t,e)){if(Nc(t))throw Error(b(418));e=Kn(n.nextSibling);var r=pt;e&&Fp(t,e)?Ly(r,n):(t.flags=t.flags&-4097|2,pe=!1,pt=t)}}else{if(Nc(t))throw Error(b(418));t.flags=t.flags&-4097|2,pe=!1,pt=t}}}function Up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function na(t){if(t!==pt)return!1;if(!pe)return Up(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rc(t.type,t.memoizedProps)),e&&(e=ft)){if(Nc(t))throw My(),Error(b(418));for(;e;)Ly(t,e),e=Kn(e.nextSibling)}if(Up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ft=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ft=null}}else ft=pt?Kn(t.stateNode.nextSibling):null;return!0}function My(){for(var t=ft;t;)t=Kn(t.nextSibling)}function Ei(){ft=pt=null,pe=!1}function jh(t){Ot===null?Ot=[t]:Ot.push(t)}var wT=Sn.ReactCurrentBatchConfig;function as(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ra(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jp(t){var e=t._init;return e(t._payload)}function by(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function i(I,E){return I=Xn(I,E),I.index=0,I.sibling=null,I}function s(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=2,E):A):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,E,A,V){return E===null||E.tag!==6?(E=Wu(A,I.mode,V),E.return=I,E):(E=i(E,A),E.return=I,E)}function u(I,E,A,V){var j=A.type;return j===Xr?f(I,E,A.props.children,V,A.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&jp(j)===E.type)?(V=i(E,A.props),V.ref=as(I,E,A),V.return=I,V):(V=Sa(A.type,A.key,A.props,null,I.mode,V),V.ref=as(I,E,A),V.return=I,V)}function h(I,E,A,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Hu(A,I.mode,V),E.return=I,E):(E=i(E,A.children||[]),E.return=I,E)}function f(I,E,A,V,j){return E===null||E.tag!==7?(E=Sr(A,I.mode,V,j),E.return=I,E):(E=i(E,A),E.return=I,E)}function m(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Wu(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case qo:return A=Sa(E.type,E.key,E.props,null,I.mode,A),A.ref=as(I,null,E),A.return=I,A;case Yr:return E=Hu(E,I.mode,A),E.return=I,E;case On:var V=E._init;return m(I,V(E._payload),A)}if(ds(E)||ns(E))return E=Sr(E,I.mode,A,null),E.return=I,E;ra(I,E)}return null}function y(I,E,A,V){var j=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(I,E,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case qo:return A.key===j?u(I,E,A,V):null;case Yr:return A.key===j?h(I,E,A,V):null;case On:return j=A._init,y(I,E,j(A._payload),V)}if(ds(A)||ns(A))return j!==null?null:f(I,E,A,V,null);ra(I,A)}return null}function S(I,E,A,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(A)||null,l(E,I,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case qo:return I=I.get(V.key===null?A:V.key)||null,u(E,I,V,j);case Yr:return I=I.get(V.key===null?A:V.key)||null,h(E,I,V,j);case On:var U=V._init;return S(I,E,A,U(V._payload),j)}if(ds(V)||ns(V))return I=I.get(A)||null,f(E,I,V,j,null);ra(E,V)}return null}function C(I,E,A,V){for(var j=null,U=null,v=E,g=E=0,_=null;v!==null&&g<A.length;g++){v.index>g?(_=v,v=null):_=v.sibling;var w=y(I,v,A[g],V);if(w===null){v===null&&(v=_);break}t&&v&&w.alternate===null&&e(I,v),E=s(w,E,g),U===null?j=w:U.sibling=w,U=w,v=_}if(g===A.length)return n(I,v),pe&&mr(I,g),j;if(v===null){for(;g<A.length;g++)v=m(I,A[g],V),v!==null&&(E=s(v,E,g),U===null?j=v:U.sibling=v,U=v);return pe&&mr(I,g),j}for(v=r(I,v);g<A.length;g++)_=S(v,I,g,A[g],V),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?g:_.key),E=s(_,E,g),U===null?j=_:U.sibling=_,U=_);return t&&v.forEach(function(R){return e(I,R)}),pe&&mr(I,g),j}function x(I,E,A,V){var j=ns(A);if(typeof j!="function")throw Error(b(150));if(A=j.call(A),A==null)throw Error(b(151));for(var U=j=null,v=E,g=E=0,_=null,w=A.next();v!==null&&!w.done;g++,w=A.next()){v.index>g?(_=v,v=null):_=v.sibling;var R=y(I,v,w.value,V);if(R===null){v===null&&(v=_);break}t&&v&&R.alternate===null&&e(I,v),E=s(R,E,g),U===null?j=R:U.sibling=R,U=R,v=_}if(w.done)return n(I,v),pe&&mr(I,g),j;if(v===null){for(;!w.done;g++,w=A.next())w=m(I,w.value,V),w!==null&&(E=s(w,E,g),U===null?j=w:U.sibling=w,U=w);return pe&&mr(I,g),j}for(v=r(I,v);!w.done;g++,w=A.next())w=S(v,I,g,w.value,V),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),E=s(w,E,g),U===null?j=w:U.sibling=w,U=w);return t&&v.forEach(function(k){return e(I,k)}),pe&&mr(I,g),j}function L(I,E,A,V){if(typeof A=="object"&&A!==null&&A.type===Xr&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case qo:e:{for(var j=A.key,U=E;U!==null;){if(U.key===j){if(j=A.type,j===Xr){if(U.tag===7){n(I,U.sibling),E=i(U,A.props.children),E.return=I,I=E;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===On&&jp(j)===U.type){n(I,U.sibling),E=i(U,A.props),E.ref=as(I,U,A),E.return=I,I=E;break e}n(I,U);break}else e(I,U);U=U.sibling}A.type===Xr?(E=Sr(A.props.children,I.mode,V,A.key),E.return=I,I=E):(V=Sa(A.type,A.key,A.props,null,I.mode,V),V.ref=as(I,E,A),V.return=I,I=V)}return o(I);case Yr:e:{for(U=A.key;E!==null;){if(E.key===U)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),E=i(E,A.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Hu(A,I.mode,V),E.return=I,I=E}return o(I);case On:return U=A._init,L(I,E,U(A._payload),V)}if(ds(A))return C(I,E,A,V);if(ns(A))return x(I,E,A,V);ra(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),E=i(E,A),E.return=I,I=E):(n(I,E),E=Wu(A,I.mode,V),E.return=I,I=E),o(I)):n(I,E)}return L}var wi=by(!0),Fy=by(!1),qa=lr(null),Ka=null,si=null,zh=null;function Bh(){zh=si=Ka=null}function $h(t){var e=qa.current;fe(qa),t._currentValue=e}function Dc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function di(t,e){Ka=t,zh=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function Rt(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(Ka===null)throw Error(b(308));si=t,Ka.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var vr=null;function Wh(t){vr===null?vr=[t]:vr.push(t)}function Uy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wh(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function Hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,Wh(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function _a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nh(t,n)}}function zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,S=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,x=l;switch(y=e,S=n,x.tag){case 1:if(C=x.payload,typeof C=="function"){m=C.call(S,m,y);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=x.payload,y=typeof C=="function"?C.call(S,m,y):C,y==null)break e;m=_e({},m,y);break e;case 2:Ln=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else S={eventTime:S,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=m):f=f.next=S,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=m}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var fo={},Ht=lr(fo),Hs=lr(fo),qs=lr(fo);function Er(t){if(t===fo)throw Error(b(174));return t}function qh(t,e){switch(ce(qs,e),ce(Hs,t),ce(Ht,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dc(e,t)}fe(Ht),ce(Ht,e)}function Ti(){fe(Ht),fe(Hs),fe(qs)}function zy(t){Er(qs.current);var e=Er(Ht.current),n=dc(e,t.type);e!==n&&(ce(Hs,t),ce(Ht,n))}function Kh(t){Hs.current===t&&(fe(Ht),fe(Hs))}var ge=lr(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function Gh(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var va=Sn.ReactCurrentDispatcher,Uu=Sn.ReactCurrentBatchConfig,kr=0,ye=null,ke=null,Ve=null,Ya=!1,As=!1,Ks=0,TT=0;function qe(){throw Error(b(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function Yh(t,e,n,r,i,s){if(kr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=t===null||t.memoizedState===null?RT:PT,t=n(r,i),As){s=0;do{if(As=!1,Ks=0,25<=s)throw Error(b(301));s+=1,Ve=ke=null,e.updateQueue=null,va.current=kT,t=n(r,i)}while(As)}if(va.current=Xa,e=ke!==null&&ke.next!==null,kr=0,Ve=ke=ye=null,Ya=!1,e)throw Error(b(300));return t}function Xh(){var t=Ks!==0;return Ks=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Pt(){if(ke===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Ve===null?ye.memoizedState:Ve.next;if(e!==null)Ve=e,ke=t;else{if(t===null)throw Error(b(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ve===null?ye.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Gs(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Pt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((kr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ye.lanes|=f,Cr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,jt(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Cr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function By(){}function $y(t,e){var n=ye,r=Pt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Jh(qy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Qs(9,Hy.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(b(349));kr&30||Wy(n,e,i)}return i}function Wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hy(t,e,n,r){e.value=n,e.getSnapshot=r,Ky(e)&&Gy(t)}function qy(t,e,n){return n(function(){Ky(e)&&Gy(t)})}function Ky(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function Gy(t){var e=_n(t,1);e!==null&&Ft(e,t,1,-1)}function $p(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:t},e.queue=t,t=t.dispatch=AT.bind(null,ye,t),[e.memoizedState,t]}function Qs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qy(){return Pt().memoizedState}function Ea(t,e,n,r){var i=Bt();ye.flags|=t,i.memoizedState=Qs(1|e,n,void 0,r===void 0?null:r)}function kl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Qh(r,o.deps)){i.memoizedState=Qs(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Qs(1|e,n,s,r)}function Wp(t,e){return Ea(8390656,8,t,e)}function Jh(t,e){return kl(2048,8,t,e)}function Yy(t,e){return kl(4,2,t,e)}function Xy(t,e){return kl(4,4,t,e)}function Jy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zy(t,e,n){return n=n!=null?n.concat([t]):null,kl(4,4,Jy.bind(null,e,t),n)}function Zh(){}function e_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n_(t,e,n){return kr&21?(jt(n,e)||(n=ay(),ye.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function IT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Uu.transition;Uu.transition={};try{t(!1),e()}finally{oe=n,Uu.transition=r}}function r_(){return Pt().memoizedState}function ST(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))s_(e,n);else if(n=Uy(t,e,n,r),n!==null){var i=rt();Ft(n,t,r,i),o_(n,e,r)}}function AT(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))s_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var u=e.interleaved;u===null?(i.next=i,Wh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Uy(t,e,i,r),n!==null&&(i=rt(),Ft(n,t,r,i),o_(n,e,r))}}function i_(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function s_(t,e){As=Ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nh(t,n)}}var Xa={readContext:Rt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},RT={readContext:Rt,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Rt,useEffect:Wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ea(4194308,4,Jy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ea(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ST.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:$p,useDebugValue:Zh,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=$p(!1),e=t[0];return t=IT.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Bt();if(pe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Oe===null)throw Error(b(349));kr&30||Wy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wp(qy.bind(null,r,s,t),[t]),r.flags|=2048,Qs(9,Hy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Oe.identifierPrefix;if(pe){var n=un,r=ln;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PT={readContext:Rt,useCallback:e_,useContext:Rt,useEffect:Jh,useImperativeHandle:Zy,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:t_,useReducer:ju,useRef:Qy,useState:function(){return ju(Gs)},useDebugValue:Zh,useDeferredValue:function(t){var e=Pt();return n_(e,ke.memoizedState,t)},useTransition:function(){var t=ju(Gs)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:$y,useId:r_,unstable_isNewReconciler:!1},kT={readContext:Rt,useCallback:e_,useContext:Rt,useEffect:Jh,useImperativeHandle:Zy,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:t_,useReducer:zu,useRef:Qy,useState:function(){return zu(Gs)},useDebugValue:Zh,useDeferredValue:function(t){var e=Pt();return ke===null?e.memoizedState=t:n_(e,ke.memoizedState,t)},useTransition:function(){var t=zu(Gs)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:By,useSyncExternalStore:$y,useId:r_,unstable_isNewReconciler:!1};function Dt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Yn(t),s=fn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(Ft(e,t,i,r),_a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Yn(t),s=fn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&(Ft(e,t,i,r),_a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Yn(t),i=fn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gn(t,i,r),e!==null&&(Ft(e,t,r,n),_a(e,t,r))}};function Hp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zs(n,r)||!zs(i,s):!0}function a_(t,e,n){var r=!1,i=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Rt(s):(i=ut(e)?Rr:Je.current,r=e.contextTypes,s=(r=r!=null)?vi(t,i):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Oc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Hh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rt(s):(s=ut(e)?Rr:Je.current,i.context=vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Cl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ii(t,e){try{var n="",r=e;do n+=nw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var CT=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Za||(Za=!0,Hc=r),Lc(t,e)},n}function u_(t,e,n){n=fn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lc(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new CT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$T.bind(null,t,e,n),e.then(t,t))}function Gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fn(-1,1),e.tag=2,Gn(n,e,1))),n.lanes|=1),t)}var NT=Sn.ReactCurrentOwner,at=!1;function nt(t,e,n,r){e.child=t===null?Fy(e,null,n,r):wi(e,t.child,n,r)}function Yp(t,e,n,r,i){n=n.render;var s=e.ref;return di(e,i),r=Yh(t,e,n,r,s,i),n=Xh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(pe&&n&&Fh(e),e.flags|=1,nt(t,e,r,i),e.child)}function Xp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ad(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,r,i)):(t=Sa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zs,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zs(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,vn(t,e,i)}return Mc(t,e,n,r,i)}function h_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ai,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ai,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ai,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ai,dt),dt|=r;return nt(t,e,i,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mc(t,e,n,r,i){var s=ut(n)?Rr:Je.current;return s=vi(e,s),di(e,i),n=Yh(t,e,n,r,s,i),r=Xh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(pe&&r&&Fh(e),e.flags|=1,nt(t,e,n,i),e.child)}function Jp(t,e,n,r,i){if(ut(n)){var s=!0;$a(e)}else s=!1;if(di(e,i),e.stateNode===null)wa(t,e),a_(e,n,r),Oc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Rt(h):(h=ut(n)?Rr:Je.current,h=vi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&qp(e,o,r,h),Ln=!1;var y=e.memoizedState;o.state=y,Ga(e,r,o,i),u=e.memoizedState,l!==r||y!==u||lt.current||Ln?(typeof f=="function"&&(Vc(e,n,f,r),u=e.memoizedState),(l=Ln||Hp(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Dt(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ut(n)?Rr:Je.current,u=vi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&qp(e,o,r,u),Ln=!1,y=e.memoizedState,o.state=y,Ga(e,r,o,i);var C=e.memoizedState;l!==m||y!==C||lt.current||Ln?(typeof S=="function"&&(Vc(e,n,S,r),C=e.memoizedState),(h=Ln||Hp(e,n,h,r,y,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return bc(t,e,n,r,s,i)}function bc(t,e,n,r,i,s){d_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bp(e,n,!1),vn(t,e,s);r=e.stateNode,NT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wi(e,t.child,null,s),e.child=wi(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&bp(e,n,!0),e.child}function f_(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),qh(t,e.containerInfo)}function Zp(t,e,n,r,i){return Ei(),jh(i),e.flags|=256,nt(t,e,n,r),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ge,i&1),t===null)return xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,r,0,null),t=Sr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uc(n),e.memoizedState=Fc,t):ed(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Xn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Xn(l,s):(s=Sr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fc,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ed(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ia(t,e,n,r){return r!==null&&jh(r),wi(e,t.child,null,n),t=ed(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bu(Error(b(422))),ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dl({mode:"visible",children:r.children},i,0,null),s=Sr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&wi(e,t.child,null,o),e.child.memoizedState=Uc(o),e.memoizedState=Fc,s);if(!(e.mode&1))return ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Bu(s,r,void 0),ia(t,e,o,r)}if(l=(o&t.childLanes)!==0,at||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),Ft(r,t,i,-1))}return od(),r=Bu(Error(b(421))),ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ft=Kn(i.nextSibling),pt=e,pe=!0,Ot=null,t!==null&&(Et[wt++]=ln,Et[wt++]=un,Et[wt++]=Pr,ln=t.id,un=t.overflow,Pr=e),e=ed(e,r.children),e.flags|=4096,e)}function em(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dc(t.return,e,n)}function $u(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function m_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&em(t,n,e);else if(t.tag===19)em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$u(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$u(e,!0,n,null,s);break;case"together":$u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DT(t,e,n){switch(e.tag){case 3:f_(e),Ei();break;case 5:zy(e);break;case 1:ut(e.type)&&$a(e);break;case 4:qh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):(ce(ge,ge.current&1),t=vn(t,e,n),t!==null?t.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return m_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,h_(t,e,n)}return vn(t,e,n)}var g_,jc,y_,__;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};y_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Er(Ht.current);var s=null;switch(n){case"input":i=lc(t,i),r=lc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=hc(t,i),r=hc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=za)}fc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Os.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Os.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};__=function(t,e,n,r){n!==r&&(e.flags|=4)};function ls(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VT(t,e,n){var r=e.pendingProps;switch(Uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ut(e.type)&&Ba(),Ke(e),null;case 3:return r=e.stateNode,Ti(),fe(lt),fe(Je),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ot!==null&&(Gc(Ot),Ot=null))),jc(t,e),Ke(e),null;case 5:Kh(e);var i=Er(qs.current);if(n=e.type,t!==null&&e.stateNode!=null)y_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ke(e),null}if(t=Er(Ht.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$t]=e,r[Ws]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ps.length;i++)de(ps[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":up(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":hp(r,s),de("invalid",r)}fc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ta(r.textContent,l,t),i=["children",""+l]):Os.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ko(r),cp(r,s,!0);break;case"textarea":Ko(r),dp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$t]=e,t[Ws]=r,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=pc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<ps.length;i++)de(ps[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":up(t,r),i=lc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),de("invalid",t);break;case"textarea":hp(t,r),i=hc(t,r),de("invalid",t);break;default:i=r}fc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Qg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Kg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ls(t,u):typeof u=="number"&&Ls(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Os.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&Sh(t,s,u,o))}switch(n){case"input":Ko(t),cp(t,r,!1);break;case"textarea":Ko(t),dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?li(t,!!r.multiple,s,!1):r.defaultValue!=null&&li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Er(qs.current),Er(Ht.current),na(e)){if(r=e.stateNode,n=e.memoizedProps,r[$t]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:ta(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ta(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=e,e.stateNode=r}return Ke(e),null;case 13:if(fe(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&ft!==null&&e.mode&1&&!(e.flags&128))My(),Ei(),e.flags|=98560,s=!1;else if(s=na(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[$t]=e}else Ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Ot!==null&&(Gc(Ot),Ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Ne===0&&(Ne=3):od())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Ti(),jc(t,e),t===null&&Bs(e.stateNode.containerInfo),Ke(e),null;case 10:return $h(e.type._context),Ke(e),null;case 17:return ut(e.type)&&Ba(),Ke(e),null;case 19:if(fe(ge),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ls(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Si&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Ke(e),null}else 2*Ae()-s.renderingStartTime>Si&&n!==1073741824&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return sd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function OT(t,e){switch(Uh(e),e.tag){case 1:return ut(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ti(),fe(lt),fe(Je),Gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kh(e),null;case 13:if(fe(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ge),null;case 4:return Ti(),null;case 10:return $h(e.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var sa=!1,Ye=!1,LT=typeof WeakSet=="function"?WeakSet:Set,B=null;function oi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function zc(t,e,n){try{n()}catch(r){we(t,e,r)}}var tm=!1;function MT(t,e){if(Sc=Fa,t=Iy(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(S=m.firstChild)!==null;)y=m,m=S;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(S=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ac={focusedElem:t,selectionRange:n},Fa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var x=C.memoizedProps,L=C.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Dt(e.type,x),L);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){we(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return C=tm,tm=!1,C}function Rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zc(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v_(t){var e=t.alternate;e!==null&&(t.alternate=null,v_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$t],delete e[Ws],delete e[kc],delete e[_T],delete e[vT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function E_(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||E_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $c(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(r!==4&&(t=t.child,t!==null))for($c(t,e,n),t=t.sibling;t!==null;)$c(t,e,n),t=t.sibling}function Wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}var Me=null,Vt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)w_(t,e,n),n=n.sibling}function w_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:Ye||oi(n,e);case 6:var r=Me,i=Vt;Me=null,Dn(t,e,n),Me=r,Vt=i,Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),Us(t)):Mu(Me,n.stateNode));break;case 4:r=Me,i=Vt,Me=n.stateNode.containerInfo,Vt=!0,Dn(t,e,n),Me=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zc(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!Ye&&(oi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,Dn(t,e,n),Ye=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(r){var i=HT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Vt=!1;break e;case 3:Me=l.stateNode.containerInfo,Vt=!0;break e;case 4:Me=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Me===null)throw Error(b(160));w_(s,o,i),Me=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T_(e,t),e=e.sibling}function T_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),zt(t),r&4){try{Rs(3,t,t.return),Nl(3,t)}catch(x){we(t,t.return,x)}try{Rs(5,t,t.return)}catch(x){we(t,t.return,x)}}break;case 1:xt(e,t),zt(t),r&512&&n!==null&&oi(n,n.return);break;case 5:if(xt(e,t),zt(t),r&512&&n!==null&&oi(n,n.return),t.flags&32){var i=t.stateNode;try{Ls(i,"")}catch(x){we(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wg(i,s),pc(l,o);var h=pc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Qg(i,m):f==="dangerouslySetInnerHTML"?Kg(i,m):f==="children"?Ls(i,m):Sh(i,f,m,h)}switch(l){case"input":uc(i,s);break;case"textarea":Hg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?li(i,!!s.multiple,S,!1):y!==!!s.multiple&&(s.defaultValue!=null?li(i,!!s.multiple,s.defaultValue,!0):li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ws]=s}catch(x){we(t,t.return,x)}}break;case 6:if(xt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){we(t,t.return,x)}}break;case 3:if(xt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Us(e.containerInfo)}catch(x){we(t,t.return,x)}break;case 4:xt(e,t),zt(t);break;case 13:xt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rd=Ae())),r&4&&rm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(h=Ye)||f,xt(e,t),Ye=h):xt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(y=B,S=y.child,y.tag){case 0:case 11:case 14:case 15:Rs(4,y,y.return);break;case 1:oi(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(x){we(r,n,x)}}break;case 5:oi(y,y.return);break;case 22:if(y.memoizedState!==null){sm(m);continue}}S!==null?(S.return=y,B=S):sm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Gg("display",o))}catch(x){we(t,t.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(x){we(t,t.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(e,t),zt(t),r&4&&rm(t);break;case 21:break;default:xt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(E_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ls(i,""),r.flags&=-33);var s=nm(t);Wc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nm(t);$c(t,l,o);break;default:throw Error(b(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bT(t,e,n){B=t,I_(t)}function I_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ye;l=sa;var h=Ye;if(sa=o,(Ye=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?om(i):u!==null?(u.return=o,B=u):om(i);for(;s!==null;)B=s,I_(s),s=s.sibling;B=i,sa=l,Ye=h}im(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):im(t)}}function im(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Us(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ye||e.flags&512&&Bc(e)}catch(y){we(e,e.return,y)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function sm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function om(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{Bc(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{Bc(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var FT=Math.ceil,Ja=Sn.ReactCurrentDispatcher,td=Sn.ReactCurrentOwner,St=Sn.ReactCurrentBatchConfig,ne=0,Oe=null,Pe=null,Ue=0,dt=0,ai=lr(0),Ne=0,Ys=null,Cr=0,xl=0,nd=0,Ps=null,ot=null,rd=0,Si=1/0,sn=null,Za=!1,Hc=null,Qn=null,oa=!1,Bn=null,el=0,ks=0,qc=null,Ta=-1,Ia=0;function rt(){return ne&6?Ae():Ta!==-1?Ta:Ta=Ae()}function Yn(t){return t.mode&1?ne&2&&Ue!==0?Ue&-Ue:wT.transition!==null?(Ia===0&&(Ia=ay()),Ia):(t=oe,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t):1}function Ft(t,e,n,r){if(50<ks)throw ks=0,qc=null,Error(b(185));uo(t,n,r),(!(ne&2)||t!==Oe)&&(t===Oe&&(!(ne&2)&&(xl|=n),Ne===4&&bn(t,Ue)),ct(t,r),n===1&&ne===0&&!(e.mode&1)&&(Si=Ae()+500,Pl&&ur()))}function ct(t,e){var n=t.callbackNode;ww(t,e);var r=ba(t,t===Oe?Ue:0);if(r===0)n!==null&&mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mp(n),e===1)t.tag===0?ET(am.bind(null,t)):Vy(am.bind(null,t)),gT(function(){!(ne&6)&&ur()}),n=null;else{switch(ly(r)){case 1:n=Ch;break;case 4:n=sy;break;case 16:n=Ma;break;case 536870912:n=oy;break;default:n=Ma}n=x_(n,S_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S_(t,e){if(Ta=-1,Ia=0,ne&6)throw Error(b(327));var n=t.callbackNode;if(fi()&&t.callbackNode!==n)return null;var r=ba(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tl(t,r);else{e=r;var i=ne;ne|=2;var s=R_();(Oe!==t||Ue!==e)&&(sn=null,Si=Ae()+500,Ir(t,e));do try{zT();break}catch(l){A_(t,l)}while(!0);Bh(),Ja.current=s,ne=i,Pe!==null?e=0:(Oe=null,Ue=0,e=Ne)}if(e!==0){if(e===2&&(i=vc(t),i!==0&&(r=i,e=Kc(t,i))),e===1)throw n=Ys,Ir(t,0),bn(t,r),ct(t,Ae()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!UT(i)&&(e=tl(t,r),e===2&&(s=vc(t),s!==0&&(r=s,e=Kc(t,s))),e===1))throw n=Ys,Ir(t,0),bn(t,r),ct(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:gr(t,ot,sn);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=rd+500-Ae(),10<e)){if(ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pc(gr.bind(null,t,ot,sn),e);break}gr(t,ot,sn);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FT(r/1960))-r,10<r){t.timeoutHandle=Pc(gr.bind(null,t,ot,sn),r);break}gr(t,ot,sn);break;case 5:gr(t,ot,sn);break;default:throw Error(b(329))}}}return ct(t,Ae()),t.callbackNode===n?S_.bind(null,t):null}function Kc(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=tl(t,e),t!==2&&(e=ot,ot=n,e!==null&&Gc(e)),t}function Gc(t){ot===null?ot=t:ot.push.apply(ot,t)}function UT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~nd,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function am(t){if(ne&6)throw Error(b(327));fi();var e=ba(t,0);if(!(e&1))return ct(t,Ae()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var r=vc(t);r!==0&&(e=r,n=Kc(t,r))}if(n===1)throw n=Ys,Ir(t,0),bn(t,e),ct(t,Ae()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,ot,sn),ct(t,Ae()),null}function id(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Si=Ae()+500,Pl&&ur())}}function Nr(t){Bn!==null&&Bn.tag===0&&!(ne&6)&&fi();var e=ne;ne|=1;var n=St.transition,r=oe;try{if(St.transition=null,oe=1,t)return t()}finally{oe=r,St.transition=n,ne=e,!(ne&6)&&ur()}}function sd(){dt=ai.current,fe(ai)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mT(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:Ti(),fe(lt),fe(Je),Gh();break;case 5:Kh(r);break;case 4:Ti();break;case 13:fe(ge);break;case 19:fe(ge);break;case 10:$h(r.type._context);break;case 22:case 23:sd()}n=n.return}if(Oe=t,Pe=t=Xn(t.current,null),Ue=dt=e,Ne=0,Ys=null,nd=xl=Cr=0,ot=Ps=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}vr=null}return t}function A_(t,e){do{var n=Pe;try{if(Bh(),va.current=Xa,Ya){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(kr=0,Ve=ke=ye=null,As=!1,Ks=0,td.current=null,n===null||n.return===null){Ne=1,Ys=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Gp(o);if(S!==null){S.flags&=-257,Qp(S,o,l,s,e),S.mode&1&&Kp(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var x=new Set;x.add(u),e.updateQueue=x}else C.add(u);break e}else{if(!(e&1)){Kp(s,h,e),od();break e}u=Error(b(426))}}else if(pe&&l.mode&1){var L=Gp(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Qp(L,o,l,s,e),jh(Ii(u,l));break e}}s=u=Ii(u,l),Ne!==4&&(Ne=2),Ps===null?Ps=[s]:Ps.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=l_(s,u,e);zp(s,I);break e;case 1:l=u;var E=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Qn===null||!Qn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=u_(s,l,e);zp(s,V);break e}}s=s.return}while(s!==null)}k_(n)}catch(j){e=j,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function R_(){var t=Ja.current;return Ja.current=Xa,t===null?Xa:t}function od(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Oe===null||!(Cr&268435455)&&!(xl&268435455)||bn(Oe,Ue)}function tl(t,e){var n=ne;ne|=2;var r=R_();(Oe!==t||Ue!==e)&&(sn=null,Ir(t,e));do try{jT();break}catch(i){A_(t,i)}while(!0);if(Bh(),ne=n,Ja.current=r,Pe!==null)throw Error(b(261));return Oe=null,Ue=0,Ne}function jT(){for(;Pe!==null;)P_(Pe)}function zT(){for(;Pe!==null&&!dw();)P_(Pe)}function P_(t){var e=N_(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?k_(t):Pe=e,td.current=null}function k_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OT(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Pe=null;return}}else if(n=VT(n,e,dt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);Ne===0&&(Ne=5)}function gr(t,e,n){var r=oe,i=St.transition;try{St.transition=null,oe=1,BT(t,e,n,r)}finally{St.transition=i,oe=r}return null}function BT(t,e,n,r){do fi();while(Bn!==null);if(ne&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tw(t,s),t===Oe&&(Pe=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oa||(oa=!0,x_(Ma,function(){return fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=oe;oe=1;var l=ne;ne|=4,td.current=null,MT(t,n),T_(n,t),lT(Ac),Fa=!!Sc,Ac=Sc=null,t.current=n,bT(n),fw(),ne=l,oe=o,St.transition=s}else t.current=n;if(oa&&(oa=!1,Bn=t,el=i),s=t.pendingLanes,s===0&&(Qn=null),gw(n.stateNode),ct(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,t=Hc,Hc=null,t;return el&1&&t.tag!==0&&fi(),s=t.pendingLanes,s&1?t===qc?ks++:(ks=0,qc=t):ks=0,ur(),null}function fi(){if(Bn!==null){var t=ly(el),e=St.transition,n=oe;try{if(St.transition=null,oe=16>t?16:t,Bn===null)var r=!1;else{if(t=Bn,Bn=null,el=0,ne&6)throw Error(b(331));var i=ne;for(ne|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Rs(8,f,s)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var y=f.sibling,S=f.return;if(v_(f),f===h){B=null;break}if(y!==null){y.return=S,B=y;break}B=S}}}var C=s.alternate;if(C!==null){var x=C.child;if(x!==null){C.child=null;do{var L=x.sibling;x.sibling=null,x=L}while(x!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var E=t.current;for(B=E;B!==null;){o=B;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,B=A;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(j){we(l,l.return,j)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(ne=i,ur(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Tl,t)}catch{}r=!0}return r}finally{oe=n,St.transition=e}}return!1}function lm(t,e,n){e=Ii(n,e),e=l_(t,e,1),t=Gn(t,e,1),e=rt(),t!==null&&(uo(t,1,e),ct(t,e))}function we(t,e,n){if(t.tag===3)lm(t,t,n);else for(;e!==null;){if(e.tag===3){lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Ii(n,t),t=u_(e,t,1),e=Gn(e,t,1),t=rt(),e!==null&&(uo(e,1,t),ct(e,t));break}}e=e.return}}function $T(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(Ne===4||Ne===3&&(Ue&130023424)===Ue&&500>Ae()-rd?Ir(t,0):nd|=n),ct(t,e)}function C_(t,e){e===0&&(t.mode&1?(e=Yo,Yo<<=1,!(Yo&130023424)&&(Yo=4194304)):e=1);var n=rt();t=_n(t,e),t!==null&&(uo(t,e,n),ct(t,n))}function WT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C_(t,n)}function HT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),C_(t,n)}var N_;N_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,DT(t,e,n);at=!!(t.flags&131072)}else at=!1,pe&&e.flags&1048576&&Oy(e,Ha,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wa(t,e),t=e.pendingProps;var i=vi(e,Je.current);di(e,n),i=Yh(null,e,r,t,i,n);var s=Xh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hh(e),i.updater=Cl,e.stateNode=i,i._reactInternals=e,Oc(e,r,t,n),e=bc(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Fh(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(wa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=KT(r),t=Dt(r,t),i){case 0:e=Mc(null,e,r,t,n);break e;case 1:e=Jp(null,e,r,t,n);break e;case 11:e=Yp(null,e,r,t,n);break e;case 14:e=Xp(null,e,r,Dt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Mc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Jp(t,e,r,i,n);case 3:e:{if(f_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jy(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ii(Error(b(423)),e),e=Zp(t,e,r,n,i);break e}else if(r!==i){i=Ii(Error(b(424)),e),e=Zp(t,e,r,n,i);break e}else for(ft=Kn(e.stateNode.containerInfo.firstChild),pt=e,pe=!0,Ot=null,n=Fy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ei(),r===i){e=vn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return zy(e),t===null&&xc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rc(r,i)?o=null:s!==null&&Rc(r,s)&&(e.flags|=32),d_(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&xc(e),null;case 13:return p_(t,e,n);case 4:return qh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Yp(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(qa,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!lt.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=fn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Dc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Dc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,di(e,n),i=Rt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),Xp(t,e,r,i,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),wa(t,e),e.tag=1,ut(r)?(t=!0,$a(e)):t=!1,di(e,n),a_(e,r,i),Oc(e,r,i,n),bc(null,e,r,!0,t,n);case 19:return m_(t,e,n);case 22:return h_(t,e,n)}throw Error(b(156,e.tag))};function x_(t,e){return iy(t,e)}function qT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new qT(t,e,n,r)}function ad(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KT(t){if(typeof t=="function")return ad(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rh)return 11;if(t===Ph)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ad(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return Sr(n.children,i,s,e);case Ah:o=8,i|=8;break;case ic:return t=It(12,n,e,i|2),t.elementType=ic,t.lanes=s,t;case sc:return t=It(13,n,e,i),t.elementType=sc,t.lanes=s,t;case oc:return t=It(19,n,e,i),t.elementType=oc,t.lanes=s,t;case zg:return Dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ug:o=10;break e;case jg:o=9;break e;case Rh:o=11;break e;case Ph:o=14;break e;case On:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=It(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Sr(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=It(22,t,r,e),t.elementType=zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wu(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Au(0),this.expirationTimes=Au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ld(t,e,n,r,i,s,o,l,u){return t=new GT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hh(s),t}function QT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return rr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ut(n))return Dy(t,n,e)}return e}function V_(t,e,n,r,i,s,o,l,u){return t=ld(n,r,!0,t,i,s,o,l,u),t.context=D_(null),n=t.current,r=rt(),i=Yn(n),s=fn(r,i),s.callback=e??null,Gn(n,s,i),t.current.lanes=i,uo(t,i,r),ct(t,r),t}function Vl(t,e,n,r){var i=e.current,s=rt(),o=Yn(i);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=fn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gn(i,e,o),t!==null&&(Ft(t,i,o,s),_a(t,i,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ud(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function YT(){return null}var O_=typeof reportError=="function"?reportError:function(t){console.error(t)};function cd(t){this._internalRoot=t}Ol.prototype.render=cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Vl(t,e,null,null)};Ol.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Vl(null,t,null,null)}),e[yn]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=hy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mn.length&&e!==0&&e<Mn[n].priority;n++);Mn.splice(n,0,t),n===0&&fy(t)}};function hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function XT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=nl(o);s.call(h)}}var o=V_(e,r,t,0,null,!1,!1,"",cm);return t._reactRootContainer=o,t[yn]=o.current,Bs(t.nodeType===8?t.parentNode:t),Nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=nl(u);l.call(h)}}var u=ld(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=u,t[yn]=u.current,Bs(t.nodeType===8?t.parentNode:t),Nr(function(){Vl(e,u,n,r)}),u}function Ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nl(o);l.call(u)}}Vl(e,o,t,i)}else o=XT(n,e,t,i,r);return nl(o)}uy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fs(e.pendingLanes);n!==0&&(Nh(e,n|1),ct(e,Ae()),!(ne&6)&&(Si=Ae()+500,ur()))}break;case 13:Nr(function(){var r=_n(t,1);if(r!==null){var i=rt();Ft(r,t,1,i)}}),ud(t,1)}};xh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=rt();Ft(e,t,134217728,n)}ud(t,134217728)}};cy=function(t){if(t.tag===13){var e=Yn(t),n=_n(t,e);if(n!==null){var r=rt();Ft(n,t,e,r)}ud(t,e)}};hy=function(){return oe};dy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};gc=function(t,e,n){switch(e){case"input":if(uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rl(r);if(!i)throw Error(b(90));$g(r),uc(r,i)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&li(t,!!n.multiple,e,!1)}};Jg=id;Zg=Nr;var JT={usingClientEntryPoint:!1,Events:[ho,ti,Rl,Yg,Xg,id]},us={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZT={bundleType:us.bundleType,version:us.version,rendererPackageName:us.rendererPackageName,rendererConfig:us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ny(t),t===null?null:t.stateNode},findFiberByHostInstance:us.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var aa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!aa.isDisabled&&aa.supportsFiber)try{Tl=aa.inject(ZT),Wt=aa}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(e))throw Error(b(200));return QT(t,e,null,n)};yt.createRoot=function(t,e){if(!hd(t))throw Error(b(299));var n=!1,r="",i=O_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ld(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,Bs(t.nodeType===8?t.parentNode:t),new cd(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=ny(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Nr(t)};yt.hydrate=function(t,e,n){if(!Ll(e))throw Error(b(200));return Ml(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!hd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V_(e,null,t,1,n??null,i,!1,s,o),t[yn]=e.current,Bs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};yt.render=function(t,e,n){if(!Ll(e))throw Error(b(200));return Ml(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!Ll(t))throw Error(b(40));return t._reactRootContainer?(Nr(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};yt.unstable_batchedUpdates=id;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ll(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ml(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function L_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L_)}catch(t){console.error(t)}}L_(),Lg.exports=yt;var eI=Lg.exports,M_,hm=eI;M_=hm.createRoot,hm.hydrateRoot;var dm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(y=64)),r.push(n[f],n[m],n[y],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new nI;const y=s<<2|l>>4;if(r.push(y),h!==64){const S=l<<4&240|h>>2;if(r.push(S),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rI=function(t){const e=b_(t);return F_.encodeByteArray(e,!0)},rl=function(t){return rI(t).replace(/\./g,"")},U_=function(t){try{return F_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=()=>iI().__FIREBASE_DEFAULTS__,oI=()=>{if(typeof process>"u"||typeof dm>"u")return;const t=dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U_(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return sI()||oI()||aI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},j_=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lI=t=>{const e=j_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z_=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config},B_=t=>{var e;return(e=bl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function dI(){var t;const e=(t=bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gI(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yI(){return!dI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function vI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EI,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function wI(t,e){return t.replace(TI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fm(s)&&fm(o)){if(!il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SI(t,e){const n=new AI(t,e);return n.subscribe.bind(n)}class AI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qu),i.error===void 0&&(i.error=qu),i.complete===void 0&&(i.complete=qu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CI(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kI(t){return t===yr?void 0:t}function CI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const xI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},DI=ee.INFO,VI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},OI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=DI,this._logHandler=OI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let pm,mm;function MI(){return pm||(pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bI(){return mm||(mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $_=new WeakMap,Qc=new WeakMap,W_=new WeakMap,Ku=new WeakMap,fd=new WeakMap;function FI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$_.set(n,t)}).catch(()=>{}),fd.set(e,t),e}function UI(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||W_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jI(t){Yc=t(Yc)}function zI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gu(this),e,...n);return W_.set(r,e.sort?e.sort():[e]),Jn(r)}:bI().includes(t)?function(...e){return t.apply(Gu(this),e),Jn($_.get(this))}:function(...e){return Jn(t.apply(Gu(this),e))}}function BI(t){return typeof t=="function"?zI(t):(t instanceof IDBTransaction&&UI(t),LI(t,MI())?new Proxy(t,Yc):t)}function Jn(t){if(t instanceof IDBRequest)return FI(t);if(Ku.has(t))return Ku.get(t);const e=BI(t);return e!==t&&(Ku.set(t,e),fd.set(e,t)),e}const Gu=t=>fd.get(t);function $I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Jn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jn(o.result),u.oldVersion,u.newVersion,Jn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const WI=["get","getKey","getAll","getAllKeys","count"],HI=["put","add","delete","clear"],Qu=new Map;function gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qu.get(e))return Qu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Qu.set(e,s),s}jI(t=>({...t,get:(e,n,r)=>gm(e,n)||t.get(e,n,r),has:(e,n)=>!!gm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",ym="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new dd("@firebase/app"),GI="@firebase/app-compat",QI="@firebase/analytics-compat",YI="@firebase/analytics",XI="@firebase/app-check-compat",JI="@firebase/app-check",ZI="@firebase/auth",e1="@firebase/auth-compat",t1="@firebase/database",n1="@firebase/data-connect",r1="@firebase/database-compat",i1="@firebase/functions",s1="@firebase/functions-compat",o1="@firebase/installations",a1="@firebase/installations-compat",l1="@firebase/messaging",u1="@firebase/messaging-compat",c1="@firebase/performance",h1="@firebase/performance-compat",d1="@firebase/remote-config",f1="@firebase/remote-config-compat",p1="@firebase/storage",m1="@firebase/storage-compat",g1="@firebase/firestore",y1="@firebase/vertexai-preview",_1="@firebase/firestore-compat",v1="firebase",E1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",w1={[Xc]:"fire-core",[GI]:"fire-core-compat",[YI]:"fire-analytics",[QI]:"fire-analytics-compat",[JI]:"fire-app-check",[XI]:"fire-app-check-compat",[ZI]:"fire-auth",[e1]:"fire-auth-compat",[t1]:"fire-rtdb",[n1]:"fire-data-connect",[r1]:"fire-rtdb-compat",[i1]:"fire-fn",[s1]:"fire-fn-compat",[o1]:"fire-iid",[a1]:"fire-iid-compat",[l1]:"fire-fcm",[u1]:"fire-fcm-compat",[c1]:"fire-perf",[h1]:"fire-perf-compat",[d1]:"fire-rc",[f1]:"fire-rc-compat",[p1]:"fire-gcs",[m1]:"fire-gcs-compat",[g1]:"fire-fst",[_1]:"fire-fst-compat",[y1]:"fire-vertex","fire-js":"fire-js",[v1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,T1=new Map,Zc=new Map;function _m(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(Zc.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of sl.values())_m(n,t);for(const n of T1.values())_m(n,t);return!0}function pd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new po("app","Firebase",I1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=E1;function H_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Zn.create("bad-app-name",{appName:String(i)});if(n||(n=z_()),!n)throw Zn.create("no-options");const s=sl.get(i);if(s){if(il(n,s.options)&&il(r,s.config))return s;throw Zn.create("duplicate-app",{appName:i})}const o=new NI(i);for(const u of Zc.values())o.addComponent(u);const l=new S1(n,r,o);return sl.set(i,l),l}function q_(t=Jc){const e=sl.get(t);if(!e&&t===Jc&&z_())return H_();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let i=(r=w1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Ai(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="firebase-heartbeat-database",R1=1,Xs="firebase-heartbeat-store";let Yu=null;function K_(){return Yu||(Yu=$I(A1,R1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),Yu}async function P1(t){try{const n=(await K_()).transaction(Xs),r=await n.objectStore(Xs).get(G_(t));return await n.done,r}catch(e){if(e instanceof An)En.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function vm(t,e){try{const r=(await K_()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,G_(t)),await r.done}catch(n){if(n instanceof An)En.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function G_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=1024,C1=30*24*60*60*1e3;class N1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=C1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Em(),{heartbeatsToSend:r,unsentEntries:i}=x1(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function Em(){return new Date().toISOString().substring(0,10)}function x1(t,e=k1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class D1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?vI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await P1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){Ai(new xr("platform-logger",e=>new qI(e),"PRIVATE")),Ai(new xr("heartbeat",e=>new N1(e),"PRIVATE")),er(Xc,ym,t),er(Xc,ym,"esm2017"),er("fire-js","")}V1("");function md(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O1=Q_,Y_=new po("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new dd("@firebase/auth");function L1(t,...e){ol.logLevel<=ee.WARN&&ol.warn(`Auth (${Mi}): ${t}`,...e)}function Aa(t,...e){ol.logLevel<=ee.ERROR&&ol.error(`Auth (${Mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw yd(t,...e)}function Ut(t,...e){return yd(t,...e)}function gd(t,e,n){const r=Object.assign(Object.assign({},O1()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function pn(t){return gd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function M1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),gd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Y_.create(t,...e)}function q(t,e,...n){if(!t)throw yd(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Aa(e),new Error(e)}function wn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b1(){return Tm()==="http:"||Tm()==="https:"}function Tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b1()||pI()||"connection"in navigator)?navigator.onLine:!0}function U1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=hI()||mI()}get(){return F1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=new go(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pn(t,e,n,r,i={}){return J_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return fI()||(h.referrerPolicy="no-referrer"),X_.fetch()(Z_(t,t.config.apiHost,n,l),h)})}async function J_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},j1),e);try{const i=new $1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw la(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw gd(t,f,h);kt(t,f)}}catch(i){if(i instanceof An)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function yo(t,e,n,r,i={}){const s=await Pn(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Z_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?_d(t.config,i):`${t.config.apiScheme}://${i}`}function B1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),z1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}function Im(t){return t!==void 0&&t.enterprise!==void 0}class W1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return B1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function H1(t,e){return Pn(t,"GET","/v2/recaptchaConfig",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function ev(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=vd(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Cs(Xu(i.auth_time)),issuedAtTime:Cs(Xu(i.iat)),expirationTime:Cs(Xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=U_(n);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sm(t){const e=vd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&G1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cs(this.lastLoginAt),this.creationTime=Cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Js(t,ev(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tv(s.providerUserInfo):[],l=X1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new th(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Y1(t){const e=gt(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tv(t){return t.map(e=>{var{providerId:n}=e,r=md(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){const n=await J_(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Z_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",X_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z1(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await J1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pi;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new th(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K1(this,e)}reload(){return Y1(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(pn(this.auth));const e=await this.getIdToken();return await Js(this,q1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:j,providerData:U,stsTokenManager:v}=n;q(A&&v,e,"internal-error");const g=pi.fromJSON(this.name,v);q(typeof A=="string",e,"internal-error"),Vn(m,e.name),Vn(y,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof j=="boolean",e,"internal-error"),Vn(S,e.name),Vn(C,e.name),Vn(x,e.name),Vn(L,e.name),Vn(I,e.name),Vn(E,e.name);const _=new hn({uid:A,auth:e,email:y,emailVerified:V,displayName:m,isAnonymous:j,photoURL:C,phoneNumber:S,tenantId:x,stsTokenManager:g,createdAt:I,lastLoginAt:E});return U&&Array.isArray(U)&&(_.providerData=U.map(w=>Object.assign({},w))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new pi;i.updateFromServerResponse(n);const s=new hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new pi;l.updateFromIdToken(r);const u=new hn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new th(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Map;function dn(t){wn(t instanceof Function,"Expected a class definition");let e=Am.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Am.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nv.type="NONE";const Rm=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mi(dn(Rm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dn(Rm);const o=Ra(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const m=hn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new mi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ov(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lv(e))return"Blackberry";if(uv(e))return"Webos";if(iv(e))return"Safari";if((e.includes("chrome/")||sv(e))&&!e.includes("edge/"))return"Chrome";if(av(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rv(t=Ze()){return/firefox\//i.test(t)}function iv(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sv(t=Ze()){return/crios\//i.test(t)}function ov(t=Ze()){return/iemobile/i.test(t)}function av(t=Ze()){return/android/i.test(t)}function lv(t=Ze()){return/blackberry/i.test(t)}function uv(t=Ze()){return/webos/i.test(t)}function Ed(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eS(t=Ze()){var e;return Ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return gI()&&document.documentMode===10}function cv(t=Ze()){return Ed(t)||av(t)||uv(t)||lv(t)||/windows phone/i.test(t)||ov(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e=[]){let n;switch(t){case"Browser":n=Pm(Ze());break;case"Worker":n=`${Pm(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",Rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class sS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new km(this),this.idTokenSubscription=new km(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ev(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(pn(this));const n=e?gt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),n=new sS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&L1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kn(t){return gt(t)}class km{constructor(e){this.auth=e,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aS(t){Fl=t}function dv(t){return Fl.loadJS(t)}function lS(){return Fl.recaptchaEnterpriseScript}function uS(){return Fl.gapiScript}function cS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hS="recaptcha-enterprise",dS="NO_RECAPTCHA";class fS{constructor(e){this.type=hS,this.auth=kn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{H1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new W1(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Im(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(dS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Im(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=lS();u.length!==0&&(u+=l),dv(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Cm(t,e,n,r=!1){const i=new fS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ll(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Cm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t,e){const n=pd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(il(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function mS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gS(t,e,n){const r=kn(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=fv(e),{host:o,port:l}=yS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_S()}function fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yS(t){const e=fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Nm(o)}}}function Nm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _S(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function vS(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e){return yo(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}async function wS(t,e){return Pn(t,"POST","/v1/accounts:sendOobCode",Rn(t,e))}async function TS(t,e){return wS(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function SS(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends wd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,n,"signInWithPassword",ES);case"emailLink":return IS(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,r,"signUpPassword",vS);case"emailLink":return SS(e,{idToken:n,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e){return yo(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="http://localhost";class Dr extends wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=md(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:AS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PS(t){const e=ms(gs(t)).link,n=e?ms(gs(e)).deep_link_id:null,r=ms(gs(t)).deep_link_id;return(r?ms(gs(r)).link:null)||r||n||e||t}class Td{constructor(e){var n,r,i,s,o,l;const u=ms(gs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=RS((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=PS(e);try{return new Td(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Td.parseLink(n);return q(r,"argument-error"),Zs._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Id{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends _o{constructor(){super("facebook.com")}static credential(e){return Dr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends _o{constructor(){super("github.com")}static credential(e){return Dr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends _o{constructor(){super("twitter.com")}static credential(e,n){return Dr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e){return yo(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hn._fromIdTokenResponse(e,r,i),o=xm(r);return new Vr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xm(r);return new Vr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ul.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ul(e,n,r,i)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ul._fromErrorAndOperation(t,s,e,r):s})}async function CS(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(pn(r));const i="reauthenticate";try{const s=await Js(t,pv(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=vd(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Vr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(Lt(t.app))return Promise.reject(pn(t));const r="signIn",i=await pv(t,r,e),s=await Vr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xS(t,e){return mv(kn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t){const e=kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DS(t,e,n){const r=kn(t);await ll(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TS)}async function VS(t,e,n){if(Lt(t.app))return Promise.reject(pn(t));const r=kn(t),o=await ll(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kS).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gv(t),u}),l=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OS(t,e,n){return Lt(t.app)?Promise.reject(pn(t)):xS(gt(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gv(t),r})}function LS(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function MS(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function bS(t,e,n,r){return gt(t).onAuthStateChanged(e,n,r)}function FS(t){return gt(t).signOut()}const cl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cl,"1"),this.storage.removeItem(cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=1e3,jS=10;class _v extends yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const zS=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv extends yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vv.type="SESSION";const Ev=vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await BS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Sd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function WS(t){qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function HS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KS(){return wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="firebaseLocalStorageDb",GS=1,hl="firebaseLocalStorage",Iv="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function QS(){const t=indexedDB.deleteDatabase(Tv);return new vo(t).toPromise()}function nh(){const t=indexedDB.open(Tv,GS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:Iv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await QS(),e(await nh()))})})}async function Dm(t,e,n){const r=jl(t,!0).put({[Iv]:e,value:n});return new vo(r).toPromise()}async function YS(t,e){const n=jl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function Vm(t,e){const n=jl(t,!0).delete(e);return new vo(n).toPromise()}const XS=800,JS=3;class Sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(KS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HS(),!this.activeServiceWorker)return;this.sender=new $S(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nh();return await Dm(e,cl,"1"),await Vm(e,cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jl(i,!1).getAll();return new vo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sv.type="LOCAL";const ZS=Sv;new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){return e?dn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eA(t){return mv(t.auth,new Ad(t),t.bypassAuthState)}function tA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),NS(n,new Ad(t),t.bypassAuthState)}async function nA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),CS(n,new Ad(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eA;case"linkViaPopup":case"linkViaRedirect":return nA;case"reauthViaPopup":case"reauthViaRedirect":return tA;default:kt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new go(2e3,1e4);async function iA(t,e,n){if(Lt(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=kn(t);M1(t,e,Id);const i=Av(r,n);return new wr(r,"signInViaPopup",e,i).executeNotNull()}class wr extends Rv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rA.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="pendingRedirect",Pa=new Map;class oA extends Rv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const r=await aA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aA(t,e){const n=cA(e),r=uA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lA(t,e){Pa.set(t._key(),e)}function uA(t){return dn(t._redirectPersistence)}function cA(t){return Ra(sA,t.config.apiKey,t.name)}async function hA(t,e,n=!1){if(Lt(t.app))return Promise.reject(pn(t));const r=kn(t),i=Av(r,e),o=await new oA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Om(e))}saveEventToCache(e){this.cachedEventUids.add(Om(e)),this.lastProcessedEventTime=Date.now()}}function Om(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mA(t);for(const n of e)try{if(vA(n))return}catch{}kt(t,"unauthorized-domain")}function vA(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yA.test(n))return!1;if(gA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=new go(3e4,6e4);function Lm(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wA(t){return new Promise((e,n)=>{var r,i,s;function o(){Lm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lm(),n(Ut(t,"network-request-failed"))},timeout:EA.get()})}if(!((i=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qt().gapi)===null||s===void 0)&&s.load)o();else{const l=cS("iframefcb");return qt()[l]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},dv(`${uS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ka=null,e})}let ka=null;function TA(t){return ka=ka||wA(t),ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new go(5e3,15e3),SA="__/auth/iframe",AA="emulator/auth/iframe",RA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_d(e,AA):`https://${t.config.authDomain}/${SA}`,r={apiKey:e.apiKey,appName:t.name,v:Mi},i=PA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mo(r).slice(1)}`}async function CA(t){const e=await TA(t),n=qt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:kA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),l=qt().setTimeout(()=>{s(o)},IA.get());function u(){qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xA=500,DA=600,VA="_blank",OA="http://localhost";class Mm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LA(t,e,n,r=xA,i=DA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},NA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ze().toLowerCase();n&&(l=sv(h)?VA:n),rv(h)&&(e=e||OA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[S,C])=>`${y}${S}=${C},`,"");if(eS(h)&&l!=="_self")return MA(e||"",l),new Mm(null);const m=window.open(e||"",l,f);q(m,t,"popup-blocked");try{m.focus()}catch{}return new Mm(m)}function MA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA="__/auth/handler",FA="emulator/auth/handler",UA=encodeURIComponent("fac");async function bm(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Mi,eventId:i};if(e instanceof Id){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof _o){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${UA}=${encodeURIComponent(u)}`:"";return`${jA(t)}?${mo(l).slice(1)}${h}`}function jA({config:t}){return t.emulator?_d(t,FA):`https://${t.authDomain}/${bA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="webStorageSupport";class zA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=hA,this._overrideRedirectResult=lA}async _openPopup(e,n,r,i){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bm(e,n,r,eh(),i);return LA(e,o,Sd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bm(e,n,r,eh(),i);return WS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CA(e),r=new fA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ju,{type:Ju},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ju];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cv()||iv()||Ed()}}const BA=zA;var Fm="@firebase/auth",Um="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HA(t){Ai(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hv(t)},h=new oS(r,i,s,u);return mS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ai(new xr("auth-internal",e=>{const n=kn(e.getProvider("auth").getImmediate());return(r=>new $A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(Fm,Um,WA(t)),er(Fm,Um,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=5*60,KA=B_("authIdTokenMaxAge")||qA;let jm=null;const GA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KA)return;const i=n==null?void 0:n.token;jm!==i&&(jm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QA(t=q_()){const e=pd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pS(t,{popupRedirectResolver:BA,persistence:[ZS,zS,Ev]}),r=B_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GA(s.toString());MS(n,o,()=>o(n.currentUser)),LS(n,l=>o(l))}}const i=j_("auth");return i&&gS(n,`http://${i}`),n}function YA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HA("Browser");var XA="firebase",JA="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */er(XA,JA,"app");var zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,kv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.D=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(w,R,k){for(var T=Array(arguments.length-2),vt=2;vt<arguments.length;vt++)T[vt-2]=arguments[vt];return g.prototype[R].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var R=0;16>R;++R)w[R]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(R=0;16>R;++R)w[R]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],R=v.g[2];var k=v.g[3],T=g+(k^_&(R^k))+w[0]+3614090360&4294967295;g=_+(T<<7&4294967295|T>>>25),T=k+(R^g&(_^R))+w[1]+3905402710&4294967295,k=g+(T<<12&4294967295|T>>>20),T=R+(_^k&(g^_))+w[2]+606105819&4294967295,R=k+(T<<17&4294967295|T>>>15),T=_+(g^R&(k^g))+w[3]+3250441966&4294967295,_=R+(T<<22&4294967295|T>>>10),T=g+(k^_&(R^k))+w[4]+4118548399&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(R^g&(_^R))+w[5]+1200080426&4294967295,k=g+(T<<12&4294967295|T>>>20),T=R+(_^k&(g^_))+w[6]+2821735955&4294967295,R=k+(T<<17&4294967295|T>>>15),T=_+(g^R&(k^g))+w[7]+4249261313&4294967295,_=R+(T<<22&4294967295|T>>>10),T=g+(k^_&(R^k))+w[8]+1770035416&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(R^g&(_^R))+w[9]+2336552879&4294967295,k=g+(T<<12&4294967295|T>>>20),T=R+(_^k&(g^_))+w[10]+4294925233&4294967295,R=k+(T<<17&4294967295|T>>>15),T=_+(g^R&(k^g))+w[11]+2304563134&4294967295,_=R+(T<<22&4294967295|T>>>10),T=g+(k^_&(R^k))+w[12]+1804603682&4294967295,g=_+(T<<7&4294967295|T>>>25),T=k+(R^g&(_^R))+w[13]+4254626195&4294967295,k=g+(T<<12&4294967295|T>>>20),T=R+(_^k&(g^_))+w[14]+2792965006&4294967295,R=k+(T<<17&4294967295|T>>>15),T=_+(g^R&(k^g))+w[15]+1236535329&4294967295,_=R+(T<<22&4294967295|T>>>10),T=g+(R^k&(_^R))+w[1]+4129170786&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^R&(g^_))+w[6]+3225465664&4294967295,k=g+(T<<9&4294967295|T>>>23),T=R+(g^_&(k^g))+w[11]+643717713&4294967295,R=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(R^k))+w[0]+3921069994&4294967295,_=R+(T<<20&4294967295|T>>>12),T=g+(R^k&(_^R))+w[5]+3593408605&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^R&(g^_))+w[10]+38016083&4294967295,k=g+(T<<9&4294967295|T>>>23),T=R+(g^_&(k^g))+w[15]+3634488961&4294967295,R=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(R^k))+w[4]+3889429448&4294967295,_=R+(T<<20&4294967295|T>>>12),T=g+(R^k&(_^R))+w[9]+568446438&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^R&(g^_))+w[14]+3275163606&4294967295,k=g+(T<<9&4294967295|T>>>23),T=R+(g^_&(k^g))+w[3]+4107603335&4294967295,R=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(R^k))+w[8]+1163531501&4294967295,_=R+(T<<20&4294967295|T>>>12),T=g+(R^k&(_^R))+w[13]+2850285829&4294967295,g=_+(T<<5&4294967295|T>>>27),T=k+(_^R&(g^_))+w[2]+4243563512&4294967295,k=g+(T<<9&4294967295|T>>>23),T=R+(g^_&(k^g))+w[7]+1735328473&4294967295,R=k+(T<<14&4294967295|T>>>18),T=_+(k^g&(R^k))+w[12]+2368359562&4294967295,_=R+(T<<20&4294967295|T>>>12),T=g+(_^R^k)+w[5]+4294588738&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^R)+w[8]+2272392833&4294967295,k=g+(T<<11&4294967295|T>>>21),T=R+(k^g^_)+w[11]+1839030562&4294967295,R=k+(T<<16&4294967295|T>>>16),T=_+(R^k^g)+w[14]+4259657740&4294967295,_=R+(T<<23&4294967295|T>>>9),T=g+(_^R^k)+w[1]+2763975236&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^R)+w[4]+1272893353&4294967295,k=g+(T<<11&4294967295|T>>>21),T=R+(k^g^_)+w[7]+4139469664&4294967295,R=k+(T<<16&4294967295|T>>>16),T=_+(R^k^g)+w[10]+3200236656&4294967295,_=R+(T<<23&4294967295|T>>>9),T=g+(_^R^k)+w[13]+681279174&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^R)+w[0]+3936430074&4294967295,k=g+(T<<11&4294967295|T>>>21),T=R+(k^g^_)+w[3]+3572445317&4294967295,R=k+(T<<16&4294967295|T>>>16),T=_+(R^k^g)+w[6]+76029189&4294967295,_=R+(T<<23&4294967295|T>>>9),T=g+(_^R^k)+w[9]+3654602809&4294967295,g=_+(T<<4&4294967295|T>>>28),T=k+(g^_^R)+w[12]+3873151461&4294967295,k=g+(T<<11&4294967295|T>>>21),T=R+(k^g^_)+w[15]+530742520&4294967295,R=k+(T<<16&4294967295|T>>>16),T=_+(R^k^g)+w[2]+3299628645&4294967295,_=R+(T<<23&4294967295|T>>>9),T=g+(R^(_|~k))+w[0]+4096336452&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~R))+w[7]+1126891415&4294967295,k=g+(T<<10&4294967295|T>>>22),T=R+(g^(k|~_))+w[14]+2878612391&4294967295,R=k+(T<<15&4294967295|T>>>17),T=_+(k^(R|~g))+w[5]+4237533241&4294967295,_=R+(T<<21&4294967295|T>>>11),T=g+(R^(_|~k))+w[12]+1700485571&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~R))+w[3]+2399980690&4294967295,k=g+(T<<10&4294967295|T>>>22),T=R+(g^(k|~_))+w[10]+4293915773&4294967295,R=k+(T<<15&4294967295|T>>>17),T=_+(k^(R|~g))+w[1]+2240044497&4294967295,_=R+(T<<21&4294967295|T>>>11),T=g+(R^(_|~k))+w[8]+1873313359&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~R))+w[15]+4264355552&4294967295,k=g+(T<<10&4294967295|T>>>22),T=R+(g^(k|~_))+w[6]+2734768916&4294967295,R=k+(T<<15&4294967295|T>>>17),T=_+(k^(R|~g))+w[13]+1309151649&4294967295,_=R+(T<<21&4294967295|T>>>11),T=g+(R^(_|~k))+w[4]+4149444226&4294967295,g=_+(T<<6&4294967295|T>>>26),T=k+(_^(g|~R))+w[11]+3174756917&4294967295,k=g+(T<<10&4294967295|T>>>22),T=R+(g^(k|~_))+w[2]+718787259&4294967295,R=k+(T<<15&4294967295|T>>>17),T=_+(k^(R|~g))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var _=g-this.blockSize,w=this.B,R=this.h,k=0;k<g;){if(R==0)for(;k<=_;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<g;)if(w[R++]=v.charCodeAt(k++),R==this.blockSize){i(this,w),R=0;break}}else for(;k<g;)if(w[R++]=v[k++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var _=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=_&255,_/=256;for(this.u(v),v=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)v[_++]=this.g[g]>>>w&255;return v};function s(v,g){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function o(v,g){this.h=g;for(var _=[],w=!0,R=v.length-1;0<=R;R--){var k=v[R]|0;w&&k==g||(_[R]=k,w=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(g){return new o([g|0],0>g?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return L(h(-v));for(var g=[],_=1,w=0;v>=_;w++)g[w]=v/_|0,_*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return L(f(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),w=m,R=0;R<v.length;R+=8){var k=Math.min(8,v.length-R),T=parseInt(v.substring(R,R+k),g);8>k?(k=h(Math.pow(g,k)),w=w.j(k).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var m=u(0),y=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-L(this).m();for(var v=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);v+=(0<=w?w:4294967296+w)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(x(this))return"-"+L(this).toString(v);for(var g=h(Math.pow(v,6)),_=this,w="";;){var R=V(_,g).g;_=I(_,R.j(g));var k=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=R,C(_))return k+w;for(;6>k.length;)k="0"+k;w=k+w}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function x(v){return v.h==-1}t.l=function(v){return v=I(this,v),x(v)?-1:C(v)?0:1};function L(v){for(var g=v.g.length,_=[],w=0;w<g;w++)_[w]=~v.g[w];return new o(_,~v.h).add(y)}t.abs=function(){return x(this)?L(this):this},t.add=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0,R=0;R<=g;R++){var k=w+(this.i(R)&65535)+(v.i(R)&65535),T=(k>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);w=T>>>16,k&=65535,T&=65535,_[R]=T<<16|k}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,g){return v.add(L(g))}t.j=function(v){if(C(this)||C(v))return m;if(x(this))return x(v)?L(this).j(L(v)):L(L(this).j(v));if(x(v))return L(this.j(L(v)));if(0>this.l(S)&&0>v.l(S))return h(this.m()*v.m());for(var g=this.g.length+v.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<v.g.length;R++){var k=this.i(w)>>>16,T=this.i(w)&65535,vt=v.i(R)>>>16,cr=v.i(R)&65535;_[2*w+2*R]+=T*cr,E(_,2*w+2*R),_[2*w+2*R+1]+=k*cr,E(_,2*w+2*R+1),_[2*w+2*R+1]+=T*vt,E(_,2*w+2*R+1),_[2*w+2*R+2]+=k*vt,E(_,2*w+2*R+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new o(_,0)};function E(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function A(v,g){this.g=v,this.h=g}function V(v,g){if(C(g))throw Error("division by zero");if(C(v))return new A(m,m);if(x(v))return g=V(L(v),g),new A(L(g.g),L(g.h));if(x(g))return g=V(v,L(g)),new A(L(g.g),g.h);if(30<v.g.length){if(x(v)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=g;0>=w.l(v);)_=j(_),w=j(w);var R=U(_,1),k=U(w,1);for(w=U(w,2),_=U(_,2);!C(w);){var T=k.add(w);0>=T.l(v)&&(R=R.add(_),k=T),w=U(w,1),_=U(_,1)}return g=I(v,R.j(g)),new A(R,g)}for(R=m;0<=v.l(g);){for(_=Math.max(1,Math.floor(v.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),k=h(_),T=k.j(g);x(T)||0<T.l(v);)_-=w,k=h(_),T=k.j(g);C(k)&&(k=y),R=R.add(k),v=I(v,T)}return new A(R,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&v.i(w);return new o(_,this.h&v.h)},t.or=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|v.i(w);return new o(_,this.h|v.h)},t.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^v.i(w);return new o(_,this.h^v.h)};function j(v){for(var g=v.g.length+1,_=[],w=0;w<g;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new o(_,v.h)}function U(v,g){var _=g>>5;g%=32;for(var w=v.g.length-_,R=[],k=0;k<w;k++)R[k]=0<g?v.i(k+_)>>>g|v.i(k+_+1)<<32-g:v.i(k+_);return new o(R,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ar=o}).apply(typeof zm<"u"?zm:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cv,ys,Nv,Ca,rh,xv,Dv,Vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function S(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,N){for(var F=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)F[ue-2]=arguments[ue];return c.prototype[P].apply(p,F)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,N=p.length||0;a.length=P+N;for(let F=0;F<N;F++)a[P+F]=p[F]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function g(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function R(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class vt{constructor(){this.h=this.g=null}add(c,d){const p=cr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var cr=new I(()=>new Bi,a=>a.reset());class Bi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,z=!1,K=new vt,X=()=>{const a=l.Promise.resolve(void 0);Xt=()=>{a.then(me)}};var me=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var c=cr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Jt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Zt(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{V(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:en[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}C(Zt,Ie);var en={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),X0=0;function J0(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++X0,this.da=this.fa=!1}function Po(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ko(a){this.src=a,this.g={},this.h=0}ko.prototype.add=function(a,c,d,p,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var F=Jl(a,c,p,P);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new J0(c,this.src,N,!!p,P),c.fa=d,a.push(c)),c};function Xl(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(p,P,1),N&&(Po(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Jl(a,c,d,p){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return P}return-1}var Zl="closure_lm_"+(1e6*Math.random()|0),eu={};function rf(a,c,d,p,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)rf(a,c[N],d,p,P);return null}return d=af(d),a&&a[tn]?a.K(c,d,h(p)?!!p.capture:!!p,P):Z0(a,c,d,!1,p,P)}function Z0(a,c,d,p,P,N){if(!c)throw Error("Invalid event type");var F=h(P)?!!P.capture:!!P,ue=nu(a);if(ue||(a[Zl]=ue=new ko(a)),d=ue.add(c,d,p,F,N),d.proxy)return d;if(p=eE(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Jt||(P=F),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(of(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function eE(){function a(d){return c.call(a.src,a.listener,d)}const c=tE;return a}function sf(a,c,d,p,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)sf(a,c[N],d,p,P);else p=h(p)?!!p.capture:!!p,d=af(d),a&&a[tn]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=Jl(N,d,p,P),-1<d&&(Po(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=nu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Jl(c,d,p,P)),(d=-1<a?c[a]:null)&&tu(d))}function tu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[tn])Xl(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(of(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=nu(c))?(Xl(d,a),d.h==0&&(d.src=null,c[Zl]=null)):Po(a)}}}function of(a){return a in eu?eu[a]:eu[a]="on"+a}function tE(a,c){if(a.da)a=!0;else{c=new Zt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&tu(a),a=d.call(p,c)}return a}function nu(a){return a=a[Zl],a instanceof ko?a:null}var ru="__closure_events_fn_"+(1e9*Math.random()>>>0);function af(a){return typeof a=="function"?a:(a[ru]||(a[ru]=function(c){return a.handleEvent(c)}),a[ru])}function $e(){le.call(this),this.i=new ko(this),this.M=this,this.F=null}C($e,le),$e.prototype[tn]=!0,$e.prototype.removeEventListener=function(a,c,d,p){sf(this,a,c,d,p)};function et(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(p,a),w(c,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var F=c.g=d[N];P=Co(F,p,!0,c)&&P}if(F=c.g=a,P=Co(F,p,!0,c)&&P,P=Co(F,p,!1,c)&&P,d)for(N=0;N<d.length;N++)F=c.g=d[N],P=Co(F,p,!1,c)&&P}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Po(d[p]);delete a.g[c],a.h--}}this.F=null},$e.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},$e.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Co(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var F=c[N];if(F&&!F.da&&F.capture==d){var ue=F.listener,Le=F.ha||F.src;F.fa&&Xl(a.i,F),P=ue.call(Le,p)!==!1&&P}}return P&&!p.defaultPrevented}function lf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function uf(a){a.g=lf(()=>{a.g=null,a.i&&(a.i=!1,uf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nE extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:uf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(a){le.call(this),this.h=a,this.g={}}C($i,le);var cf=[];function hf(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&tu(c)},a),a.g={}}$i.prototype.N=function(){$i.aa.N.call(this),hf(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var iu=l.JSON.stringify,rE=l.JSON.parse,iE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function su(){}su.prototype.h=null;function df(a){return a.h||(a.h=a.i())}function ff(){}var Wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ou(){Ie.call(this,"d")}C(ou,Ie);function au(){Ie.call(this,"c")}C(au,Ie);var hr={},pf=null;function No(){return pf=pf||new $e}hr.La="serverreachability";function mf(a){Ie.call(this,hr.La,a)}C(mf,Ie);function Hi(a){const c=No();et(c,new mf(c))}hr.STAT_EVENT="statevent";function gf(a,c){Ie.call(this,hr.STAT_EVENT,a),this.stat=c}C(gf,Ie);function tt(a){const c=No();et(c,new gf(c,a))}hr.Ma="timingevent";function yf(a,c){Ie.call(this,hr.Ma,a),this.size=c}C(yf,Ie);function qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ki(){this.g=!0}Ki.prototype.xa=function(){this.g=!1};function sE(a,c,d,p,P,N){a.info(function(){if(a.g)if(N)for(var F="",ue=N.split("&"),Le=0;Le<ue.length;Le++){var re=ue[Le].split("=");if(1<re.length){var We=re[0];re=re[1];var He=We.split("_");F=2<=He.length&&He[1]=="type"?F+(We+"="+re+"&"):F+(We+"=redacted&")}}else F=null;else F=N;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+F})}function oE(a,c,d,p,P,N,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+F})}function zr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+lE(a,d)+(p?" "+p:"")})}function aE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ki.prototype.info=function(){};function lE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var F=1;F<P.length;F++)P[F]=""}}}}return iu(d)}catch{return c}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_f={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lu;function Do(){}C(Do,su),Do.prototype.g=function(){return new XMLHttpRequest},Do.prototype.i=function(){return{}},lu=new Do;function Cn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vf}function vf(){this.i=null,this.g="",this.h=!1}var Ef={},uu={};function cu(a,c,d){a.L=1,a.v=Mo(nn(c)),a.m=d,a.P=!0,wf(a,null)}function wf(a,c){a.F=Date.now(),Vo(a),a.A=nn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Lf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new vf,a.g=Zf(a.j,d?c:null,!a.m),0<a.O&&(a.M=new nE(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(cf[0]=P.toString()),P=cf);for(var N=0;N<P.length;N++){var F=rf(d,P[N],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Hi(),sE(a.i,a.u,a.A,a.l,a.R,a.m)}Cn.prototype.ca=function(a){a=a.target;const c=this.M;c&&rn(a)==3?c.j():this.Y(a)},Cn.prototype.Y=function(a){try{if(a==this.g)e:{const He=rn(this.g);var c=this.g.Ba();const Wr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||Bf(this.g)))){this.J||He!=4||c==7||(c==8||0>=Wr?Hi(3):Hi(2)),hu(this);var d=this.g.Z();this.X=d;t:if(Tf(this)){var p=Bf(this.g);a="";var P=p.length,N=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Gi(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,oE(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Le=this.g;if((ue=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ue)){var re=ue;break t}}re=null}if(d=re)zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,du(this,d);else{this.o=!1,this.s=3,tt(12),dr(this),Gi(this);break e}}if(this.P){d=!0;let Nt;for(;!this.J&&this.C<F.length;)if(Nt=uE(this,F),Nt==uu){He==4&&(this.s=4,tt(14),d=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Nt==Ef){this.s=4,tt(15),zr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else zr(this.i,this.l,Nt,null),du(this,Nt);if(Tf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||F.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)zr(this.i,this.l,F,"[Invalid Chunked Response]"),dr(this),Gi(this);else if(0<F.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),_u(We),We.M=!0,tt(11))}}else zr(this.i,this.l,F,null),du(this,F);He==4&&dr(this),this.o&&!this.J&&(He==4?Qf(this.j,this):(this.o=!1,Vo(this)))}else RE(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),dr(this),Gi(this)}}}catch{}finally{}};function Tf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uE(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?uu:(d=Number(c.substring(d,p)),isNaN(d)?Ef:(p+=1,p+d>c.length?uu:(c=c.slice(p,p+d),a.C=p+d,c)))}Cn.prototype.cancel=function(){this.J=!0,dr(this)};function Vo(a){a.S=Date.now()+a.I,If(a,a.I)}function If(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qi(y(a.ba,a),c)}function hu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aE(this.i,this.A),this.L!=2&&(Hi(),tt(17)),dr(this),this.s=2,Gi(this)):If(this,this.S-a)};function Gi(a){a.j.G==0||a.J||Qf(a.j,a)}function dr(a){hu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,hf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function du(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||fu(d.h,a))){if(!a.K&&fu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Bo(d),jo(d);else break e;yu(d),tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=qi(y(d.Za,d),6e3));if(1>=Rf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((a.K||d.g==a)&&Bo(d),!E(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let re=P[c];if(d.T=re[0],re=re[1],d.G==2)if(re[0]=="c"){d.K=re[1],d.ia=re[2];const We=re[3];We!=null&&(d.la=We,d.j.info("VER="+d.la));const He=re[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Wr=re[5];Wr!=null&&typeof Wr=="number"&&0<Wr&&(p=1.5*Wr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Nt=a.g;if(Nt){const Wo=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wo){var N=p.h;N.g||Wo.indexOf("spdy")==-1&&Wo.indexOf("quic")==-1&&Wo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(pu(N,N.h),N.h=null))}if(p.D){const vu=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;vu&&(p.ya=vu,he(p.I,p.D,vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=Jf(p,p.J?p.ia:null,p.W),F.K){Pf(p.h,F);var ue=F,Le=p.L;Le&&(ue.I=Le),ue.B&&(hu(ue),Vo(ue)),p.g=F}else Kf(p);0<d.i.length&&zo(d)}else re[0]!="stop"&&re[0]!="close"||pr(d,7);else d.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?pr(d,7):gu(d):re[0]!="noop"&&d.l&&d.l.ta(re),d.v=0)}}Hi(4)}catch{}}var cE=class{constructor(a,c){this.g=a,this.map=c}};function Sf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Af(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rf(a){return a.h?1:a.g?a.g.size:0}function fu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function pu(a,c){a.g?a.g.add(c):a.h=c}function Pf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Sf.prototype.cancel=function(){if(this.i=kf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function kf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function hE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function dE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Cf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=dE(a),p=hE(a),P=p.length,N=0;N<P;N++)c.call(void 0,p[N],d&&d[N],a)}var Nf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fE(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var N=a[d].substring(0,p);P=a[d].substring(p+1)}else N=a[d];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,Oo(this,a.j),this.o=a.o,this.g=a.g,Lo(this,a.s),this.l=a.l;var c=a.i,d=new Xi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),xf(this,d),this.m=a.m}else a&&(c=String(a).match(Nf))?(this.h=!1,Oo(this,c[1]||"",!0),this.o=Qi(c[2]||""),this.g=Qi(c[3]||"",!0),Lo(this,c[4]),this.l=Qi(c[5]||"",!0),xf(this,c[6]||"",!0),this.m=Qi(c[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}fr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Yi(c,Df,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Yi(c,Df,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Yi(d,d.charAt(0)=="/"?gE:mE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Yi(d,_E)),a.join("")};function nn(a){return new fr(a)}function Oo(a,c,d){a.j=d?Qi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Lo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function xf(a,c,d){c instanceof Xi?(a.i=c,vE(a.i,a.h)):(d||(c=Yi(c,yE)),a.i=new Xi(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Mo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,pE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Df=/[#\/\?@]/g,mE=/[#\?:]/g,gE=/[#\?]/g,yE=/[#\?@]/g,_E=/#/g;function Xi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Nn(a){a.g||(a.g=new Map,a.h=0,a.i&&fE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Xi.prototype,t.add=function(a,c){Nn(this),this.i=null,a=Br(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Vf(a,c){Nn(a),c=Br(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Of(a,c){return Nn(a),c=Br(a,c),a.g.has(c)}t.forEach=function(a,c){Nn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Nn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let N=0;N<P.length;N++)d.push(c[p])}return d},t.V=function(a){Nn(this);let c=[];if(typeof a=="string")Of(this,a)&&(c=c.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Nn(this),this.i=null,a=Br(this,a),Of(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Lf(a,c,d){Vf(a,c),0<d.length&&(a.i=null,a.g.set(Br(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var P=N;F[p]!==""&&(P+="="+encodeURIComponent(String(F[p]))),a.push(P)}}return this.i=a.join("&")};function Br(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function vE(a,c){c&&!a.j&&(Nn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Vf(this,p),Lf(this,P,d))},a)),a.j=c}function EE(a,c){const d=new Ki;if(l.Image){const p=new Image;p.onload=S(xn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=S(xn,d,"TestLoadImage: error",!1,c,p),p.onabort=S(xn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(xn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function wE(a,c){const d=new Ki,p=new AbortController,P=setTimeout(()=>{p.abort(),xn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(P),N.ok?xn(d,"TestPingServer: ok",!0,c):xn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),xn(d,"TestPingServer: error",!1,c)})}function xn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function TE(){this.g=new iE}function IE(a,c,d){const p=d||"";try{Cf(a,function(P,N){let F=P;h(P)&&(F=iu(P)),c.push(p+N+"="+encodeURIComponent(F))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function bo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(bo,su),bo.prototype.g=function(){return new Fo(this.l,this.j)},bo.prototype.i=function(a){return function(){return a}}({});function Fo(a,c){$e.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Fo,$e),t=Fo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Zi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ji(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ji(this):Zi(this),this.readyState==3&&Mf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ji(this))},t.Qa=function(a){this.g&&(this.response=a,Ji(this))},t.ga=function(){this.g&&Ji(this)};function Ji(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bf(a){let c="";return U(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function mu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=bf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Ee(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ee,$e);var SE=/^https?$/i,AE=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lu.g(),this.v=this.o?df(this.o):df(lu),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Ff(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AE,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of d)this.g.setRequestHeader(N,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Ff(this,N)}};function Ff(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Uf(a),Uo(a)}function Uf(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,et(this,"complete"),et(this,"abort"),Uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uo(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jf(this):this.bb())},t.bb=function(){jf(this)};function jf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||rn(a)!=4||a.Z()!=2)){if(a.u&&rn(a)==4)lf(a.Ea,0,a);else if(et(a,"readystatechange"),rn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var P=String(a.D).match(Nf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!SE.test(P?P.toLowerCase():"")}d=p}if(d)et(a,"complete"),et(a,"success");else{a.m=6;try{var N=2<rn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Uf(a)}}finally{Uo(a)}}}}function Uo(a,c){if(a.g){zf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||et(a,"ready");try{d.onreadystatechange=p}catch{}}}function zf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rE(c)}};function Bf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RE(a){const c={};a=(a.g&&2<=rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=R(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function $f(a){this.Aa=0,this.i=[],this.j=new Ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,a),this.cb=es("retryDelaySeedMs",1e4,a),this.Wa=es("forwardChannelMaxRetries",2,a),this.wa=es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Sf(a&&a.concurrentRequestLimit),this.Da=new TE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$f.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){tt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Jf(this,null,this.W),zo(this)};function gu(a){if(Wf(a),a.G==3){var c=a.U++,d=nn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),ts(a,d),c=new Cn(a,a.j,c),c.L=2,c.v=Mo(nn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Zf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vo(c)}Xf(a)}function jo(a){a.g&&(_u(a),a.g.cancel(),a.g=null)}function Wf(a){jo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function zo(a){if(!Af(a.h)&&!a.s){a.s=!0;var c=a.Ga;Xt||X(),z||(Xt(),z=!0),K.add(c,a),a.B=0}}function PE(a,c){return Rf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qi(y(a.Ga,a,c),Yf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Cn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=qf(this,P,c),d=nn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ts(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(bf(N)))+"&"+c:this.m&&mu(d,this.m,N)),pu(this.h,P),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),P.T=!0,cu(P,d,null)):cu(P,d,c),this.G=2}}else this.G==3&&(a?Hf(this,a):this.i.length==0||Af(this.h)||Hf(this))};function Hf(a,c){var d;c?d=c.l:d=a.U++;const p=nn(a.I);he(p,"SID",a.K),he(p,"RID",d),he(p,"AID",a.T),ts(a,p),a.m&&a.o&&mu(p,a.m,a.o),d=new Cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=qf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pu(a.h,d),cu(d,p,c)}function ts(a,c){a.H&&U(a.H,function(d,p){he(c,p,d)}),a.l&&Cf({},function(d,p){he(c,p,d)})}function qf(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const F=["count="+d];N==-1?0<d?(N=P[0].g,F.push("ofs="+N)):N=0:F.push("ofs="+N);let ue=!0;for(let Le=0;Le<d;Le++){let re=P[Le].g;const We=P[Le].map;if(re-=N,0>re)N=Math.max(0,P[Le].g-100),ue=!1;else try{IE(We,F,"req"+re+"_")}catch{p&&p(We)}}if(ue){p=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Kf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Xt||X(),z||(Xt(),z=!0),K.add(c,a),a.v=0}}function yu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qi(y(a.Fa,a),Yf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),jo(this),Gf(this))};function _u(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Gf(a){a.g=new Cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=nn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),ts(a,c),a.m&&a.o&&mu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Mo(nn(c)),d.m=null,d.P=!0,wf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),yu(this),tt(19))};function Bo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qf(a,c){var d=null;if(a.g==c){Bo(a),_u(a),a.g=null;var p=2}else if(fu(a.h,c))d=c.D,Pf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=No(),et(p,new yf(p,d)),zo(a)}else Kf(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&PE(a,c)||p==2&&yu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:pr(a,5);break;case 4:pr(a,10);break;case 3:pr(a,6);break;default:pr(a,2)}}}function Yf(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function pr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const P=!p;p=new fr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oo(p,"https"),Mo(p),P?EE(p.toString(),d):wE(p.toString(),d)}else tt(2);a.G=0,a.l&&a.l.sa(c),Xf(a),Wf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Xf(a){if(a.G=0,a.ka=[],a.l){const c=kf(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Jf(a,c,d){var p=d instanceof fr?nn(d):new fr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Lo(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new fr(null);p&&Oo(N,p),c&&(N.g=c),P&&Lo(N,P),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&he(p,d,c),he(p,"VER",a.la),ts(a,p),p}function Zf(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new bo({eb:d})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ep(){}t=ep.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(a,c){return new ht(a,c)};function ht(a,c){$e.call(this),this.g=new $f(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $r(this)}C(ht,$e),ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ht.prototype.close=function(){gu(this.g)},ht.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=iu(a),a=d);c.i.push(new cE(c.Ya++,a)),c.G==3&&zo(c)},ht.prototype.N=function(){this.g.l=null,delete this.j,gu(this.g),delete this.g,ht.aa.N.call(this)};function tp(a){ou.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}C(tp,ou);function np(){au.call(this),this.status=1}C(np,au);function $r(a){this.g=a}C($r,ep),$r.prototype.ua=function(){et(this.g,"a")},$r.prototype.ta=function(a){et(this.g,new tp(a))},$r.prototype.sa=function(a){et(this.g,new np)},$r.prototype.ra=function(){et(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,ht.prototype.send=ht.prototype.o,ht.prototype.open=ht.prototype.m,ht.prototype.close=ht.prototype.close,Vv=function(){return new $o},Dv=function(){return No()},xv=hr,rh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,Ca=xo,_f.COMPLETE="complete",Nv=_f,ff.EventType=Wi,Wi.OPEN="a",Wi.CLOSE="b",Wi.ERROR="c",Wi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,ys=ff,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,Cv=Ee}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Bm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new dd("@firebase/firestore");function cs(){return Or.logLevel}function $(t,...e){if(Or.logLevel<=ee.DEBUG){const n=e.map(Rd);Or.debug(`Firestore (${Fi}): ${t}`,...n)}}function Tn(t,...e){if(Or.logLevel<=ee.ERROR){const n=e.map(Rd);Or.error(`Firestore (${Fi}): ${t}`,...n)}}function Ri(t,...e){if(Or.logLevel<=ee.WARN){const n=e.map(Rd);Or.warn(`Firestore (${Fi}): ${t}`,...n)}}function Rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function ae(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class eR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tR{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new Ov(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Qe(e)}}class nR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new iR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new xe(0,0))}static max(){return new Q(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends eo{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const aR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends eo{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return aR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Te.fromString(e))}static fromName(e){return new H(Te.fromString(e).popFirst(5))}static empty(){return new H(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Te(e.slice()))}}function lR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new ir(i,H.empty(),e)}function uR(t){return new ir(t.readTime,t.key,-1)}class ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ir(Q.min(),H.empty(),-1)}static max(){return new ir(Q.max(),H.empty(),-1)}}function cR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==hR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function fR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pd.oe=-1;function zl(t){return t==null}function dl(t){return t===0&&1/t==-1/0}function pR(t){return typeof t=="number"&&Number.isInteger(t)&&!dl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ca(this.root,e,this.comparator,!0)}}class ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wm(this.data.getIterator())}getIteratorFrom(e){return new Wm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new je(this.comparator);return n.data=e,n}}class Wm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bv("Invalid base64 string: "+s):s}}(e);return new Be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const mR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(ae(!!t),typeof t=="string"){let e=0;const n=mR.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cd(t){const e=t.mapValue.fields.__previous_value__;return kd(e)?Cd(e):e}function to(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class no{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new no("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kd(t)?4:_R(t)?9007199254740991:yR(t)?10:11:G()}function Qt(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),l=sr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?dl(o)===dl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if($m(o)!==$m(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Qt(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function ro(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Hm(t.timestampValue,e.timestampValue);case 4:return Hm(to(t),to(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Lr(s),u=Lr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(Se(s.latitude),Se(o.latitude));return l!==0?l:ie(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const m=s.fields||{},y=o.fields||{},S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,C=(u=y.value)===null||u===void 0?void 0:u.arrayValue,x=ie(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:qm(S,C)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ha.mapValue&&o===ha.mapValue)return 0;if(s===ha.mapValue)return 1;if(o===ha.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=ie(u[m],f[m]);if(y!==0)return y;const S=ki(l[u[m]],h[f[m]]);if(S!==0)return S}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=sr(t),r=sr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function qm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ki(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Ci(t){return ih(t)}function ih(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ih(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ih(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function sh(t){return!!t&&"integerValue"in t}function Nd(t){return!!t&&"arrayValue"in t}function Km(t){return!!t&&"nullValue"in t}function Gm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function yR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ns(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ns(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ns(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _R(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ns(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Ns(this.value))}}function Fv(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Fe([n]);if(Na(r)){const s=Fv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,Q.min(),Q.min(),Q.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,Q.min(),Q.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Q.min(),Q.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n){this.position=e,this.inclusive=n}}function Qm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ym(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function vR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{}class Ce extends Uv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wR(e,n,r):n==="array-contains"?new SR(e,r):n==="in"?new AR(e,r):n==="not-in"?new RR(e,r):n==="array-contains-any"?new PR(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TR(e,r):new IR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Uv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Yt(e,n)}matches(e){return jv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function jv(t){return t.op==="and"}function zv(t){return ER(t)&&jv(t)}function ER(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function oh(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+Ci(t.value);if(zv(t))return t.filters.map(e=>oh(e)).join(",");{const e=t.filters.map(n=>oh(n)).join(",");return`${t.op}(${e})`}}function Bv(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&Qt(r.value,i.value)}(t,e):t instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Bv(o,i.filters[l]),!0):!1}(t,e):void G()}function $v(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${Ci(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map($v).join(" ,")+"}"}(t):"Filter"}class wR extends Ce{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class TR extends Ce{constructor(e,n){super(e,"in",n),this.keys=Wv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IR extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=Wv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Wv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class SR extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nd(n)&&ro(n.arrayValue,this.value)}}class AR extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class RR extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class PR extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Xm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kR(t,e,n,r,i,s,o)}function xd(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ci(r)).join(",")),e.ue=n}return e.ue}function Dd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ym(t.startAt,e.startAt)&&Ym(t.endAt,e.endAt)}function ah(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function CR(t,e,n,r,i,s,o,l){return new Bl(t,e,n,r,i,s,o,l)}function Vd(t){return new Bl(t)}function Jm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NR(t){return t.collectionGroup!==null}function xs(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new je(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new pl(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new pl(Fe.keyField(),r))}return e.ce}function Kt(t){const e=Y(t);return e.le||(e.le=xR(e,xs(t))),e.le}function xR(t,e){if(t.limitType==="F")return Xm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pl(i.field,s)});const n=t.endAt?new fl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fl(t.startAt.position,t.startAt.inclusive):null;return Xm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lh(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Dd(Kt(t),Kt(e))&&t.limitType===e.limitType}function Hv(t){return`${xd(Kt(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$v(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ci(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ci(i)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function Wl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Qm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,xs(r),i)||r.endAt&&!function(o,l,u){const h=Qm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,xs(r),i))}(t,e)}function DR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qv(t){return(e,n)=>{let r=!1;for(const i of xs(t)){const s=VR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?ki(u,h):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Mv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new ve(H.comparator);function In(){return OR}const Kv=new ve(H.comparator);function _s(...t){let e=Kv;for(const n of t)e=e.insert(n.key,n);return e}function Gv(t){let e=Kv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return Ds()}function Qv(){return Ds()}function Ds(){return new ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const LR=new ve(H.comparator),MR=new je(H.comparator);function Z(...t){let e=MR;for(const n of t)e=e.add(n);return e}const bR=new je(ie);function FR(){return bR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dl(e)?"-0":e}}function Yv(t){return{integerValue:""+t}}function UR(t,e){return pR(e)?Yv(e):Od(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this._=void 0}}function jR(t,e,n){return t instanceof ml?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&kd(s)&&(s=Cd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof io?Jv(t,e):t instanceof so?Zv(t,e):function(i,s){const o=Xv(i,s),l=Zm(o)+Zm(i.Pe);return sh(o)&&sh(i.Pe)?Yv(l):Od(i.serializer,l)}(t,e)}function zR(t,e,n){return t instanceof io?Jv(t,e):t instanceof so?Zv(t,e):n}function Xv(t,e){return t instanceof gl?function(r){return sh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ml extends Hl{}class io extends Hl{constructor(e){super(),this.elements=e}}function Jv(t,e){const n=e0(e);for(const r of t.elements)n.some(i=>Qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class so extends Hl{constructor(e){super(),this.elements=e}}function Zv(t,e){let n=e0(e);for(const r of t.elements)n=n.filter(i=>!Qt(i,r));return{arrayValue:{values:n}}}class gl extends Hl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Zm(t){return Se(t.integerValue||t.doubleValue)}function e0(t){return Nd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof io&&i instanceof io||r instanceof so&&i instanceof so?Pi(r.elements,i.elements,Qt):r instanceof gl&&i instanceof gl?Qt(r.Pe,i.Pe):r instanceof ml&&i instanceof ml}(t.transform,e.transform)}class $R{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function t0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new r0(t.key,mn.none()):new To(t.key,t.data,mn.none());{const n=t.data,r=Tt.empty();let i=new je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ur(t.key,r,new Mt(i.toArray()),mn.none())}}function WR(t,e,n){t instanceof To?function(i,s,o){const l=i.value.clone(),u=tg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ur?function(i,s,o){if(!xa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=tg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(n0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof To?function(s,o,l,u){if(!xa(s.precondition,o))return l;const h=s.value.clone(),f=ng(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ur?function(s,o,l,u){if(!xa(s.precondition,o))return l;const h=ng(s.fieldTransforms,u,o),f=o.data;return f.setAll(n0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return xa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Xv(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function eg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pi(r,i,(s,o)=>BR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends ql{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ur extends ql{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function n0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function tg(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,zR(o,l,n[i]))}return r}function ng(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jR(s,o,e))}return r}class r0 extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qR extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=t0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,r)=>eg(n,r))&&Pi(this.baseMutations,e.baseMutations,(n,r)=>eg(n,r))}}class Ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return LR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ld(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,te;function YR(t){switch(t){default:return G();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function i0(t){if(t===void 0)return Tn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Re.OK:return M.OK;case Re.CANCELLED:return M.CANCELLED;case Re.UNKNOWN:return M.UNKNOWN;case Re.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Re.INTERNAL:return M.INTERNAL;case Re.UNAVAILABLE:return M.UNAVAILABLE;case Re.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Re.NOT_FOUND:return M.NOT_FOUND;case Re.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Re.ABORTED:return M.ABORTED;case Re.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Re.DATA_LOSS:return M.DATA_LOSS;default:return G()}}(te=Re||(Re={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Ar([4294967295,4294967295],0);function rg(t){const e=XR().encode(t),n=new kv;return n.update(e),new Uint8Array(n.digest())}function ig(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([i,s],0)]}class Md{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vs(`Invalid padding: ${n}`);if(r<0)throw new vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ar.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ar.fromNumber(r)));return i.compare(JR)===1&&(i=new Ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=rg(e),[r,i]=ig(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Md(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=rg(e),[r,i]=ig(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(Q.min(),i,new ve(ie),In(),Z())}}class Io{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class s0{constructor(e,n){this.targetId=e,this.me=n}}class o0{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class sg{constructor(){this.fe=0,this.ge=ag(),this.pe=Be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),n=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Io(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ag()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ZR{constructor(e){this.Le=e,this.Be=new Map,this.ke=In(),this.qe=og(),this.Qe=new ve(ie)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(ah(s))if(r===0){const o=new H(s.path);this.Ue(n,o,Xe.newNoDocument(o,Q.min()))}else ae(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Lr(r).toUint8Array()}catch(u){if(u instanceof bv)return Ri("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Md(o,i,s)}catch(u){return Ri(u instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&ah(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Xe.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Z();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,n,this.Qe,this.ke,r);return this.ke=In(),this.qe=og(),this.Qe=new ve(ie),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new sg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new je(ie),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function og(){return new ve(H.comparator)}function ag(){return new ve(H.comparator)}const eP={asc:"ASCENDING",desc:"DESCENDING"},tP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nP={and:"AND",or:"OR"};class rP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uh(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return yl(t,e.toTimestamp())}function Gt(t){return ae(!!t),Q.fromTimestamp(function(n){const r=sr(n);return new xe(r.seconds,r.nanos)}(t))}function bd(t,e){return ch(t,e).canonicalString()}function ch(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function l0(t){const e=Te.fromString(t);return ae(f0(e)),e}function hh(t,e){return bd(t.databaseId,e.path)}function Zu(t,e){const n=l0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(c0(n))}function u0(t,e){return bd(t.databaseId,e)}function sP(t){const e=l0(t);return e.length===4?Te.emptyPath():c0(e)}function dh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function c0(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lg(t,e,n){return{name:hh(t,e),fields:n.value.mapValue.fields}}function oP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ae(f===void 0||typeof f=="string"),Be.fromBase64String(f||"")):(ae(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Be.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:i0(h.code);return new W(f,h.message||"")}(o);n=new o0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Zu(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):Q.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=Xe.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Da(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Zu(t,r.document),s=r.readTime?Gt(r.readTime):Q.min(),o=Xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Da([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Zu(t,r.document),s=r.removedTargetIds||[];n=new Da([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QR(i,s),l=r.targetId;n=new s0(l,o)}}return n}function aP(t,e){let n;if(e instanceof To)n={update:lg(t,e.key,e.value)};else if(e instanceof r0)n={delete:hh(t,e.key)};else if(e instanceof Ur)n={update:lg(t,e.key,e.data),updateMask:gP(e.fieldMask)};else{if(!(e instanceof qR))return G();n={verify:hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof gl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function lP(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual(Q.min())&&(o=Gt(s)),new $R(o,i.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[u0(t,e.path)]}}function cP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=u0(t,i);const s=function(h){if(h.length!==0)return d0(Yt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Gr(y.field),direction:fP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=uh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function hP(t){let e=sP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=h0(m);return y instanceof Yt&&zv(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(C){return new pl(Qr(C.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,zl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,S=m.values||[];return new fl(S,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,S=m.values||[];return new fl(S,y)}(n.endAt)),CR(e,i,o,s,l,"F",u,h)}function dP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qr(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(Qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>h0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function fP(t){return eP[t]}function pP(t){return tP[t]}function mP(t){return nP[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return Fe.fromServerFormat(t.fieldPath)}function d0(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Gm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(Km(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(Km(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:pP(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(i=>d0(i));return r.length===1?r[0]:{compositeFilter:{op:mP(n.op),filters:r}}}(t):G()}function gP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function f0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=Be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.ct=e}}function _P(t){const e=hP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.un=new EP}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(ir.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class EP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new je(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new je(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ni(0)}static kn(){return new Ni(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(){this.changes=new ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vs(r.mutation,i,Mt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Tr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_s();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=In();const o=Ds(),l=function(){return Ds()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Ur)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Vs(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new TP(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ds();let i=new ve((o,l)=>o-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Mt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=Qv();f.forEach(y=>{if(!s.has(y)){const S=t0(n.get(y),r.get(y));S!==null&&m.set(y,S),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Tr());let l=-1,u=s;return o.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Z())).next(f=>({batchId:l,changes:Gv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=_s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(m,y){return new Bl(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Xe.newInvalidDocument(f)))});let l=_s();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Vs(f.mutation,h,Mt.empty(),xe.now()),Wl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_P(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this.overlays=new ve(H.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Tr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Tr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Tr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GR(n,r));let s=this.Ir.get(n);s===void 0&&(s=Z(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.Tr=new je(De.Er),this.dr=new je(De.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new De(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new De(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new H(new Te([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new H(new Te([])),r=new De(n,e),i=new De(n,e+1);let s=Z();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return H.comparator(e.key,n.key)||ie(e.wr,n.wr)}static Ar(e,n){return ie(e.wr,n.wr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new je(De.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new De(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new je(ie);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new De(new H(s),0);let l=new je(ie);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new De(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.Mr=e,this.docs=function(){return new ve(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=In();const o=n.path,l=new H(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||cR(uR(f),r)<=0||(i.has(f.key)||Wl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CP(this)}getSize(e){return O.resolve(this.size)}}class CP extends wP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.persistence=e,this.Nr=new ji(n=>xd(n),Dd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fd,this.targetCount=0,this.kr=Ni.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ni(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Pd(0),this.Kr=!1,this.Kr=!0,this.$r=new RP,this.referenceDelegate=e(this),this.Ur=new NP(this),this.indexManager=new vP,this.remoteDocumentCache=function(i){return new kP(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yP(n),this.Gr=new SP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new PP(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new DP(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class DP extends dR{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Jr=new Fd,this.Yr=null}static Zr(e){return new Ud(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=H.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yI()?8:fR(Ze())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VP;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(cs()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(cs()<=ee.DEBUG&&$("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(cs()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):O.resolve())}Yi(e,n){if(Jm(n))return O.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=lh(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,lh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Jm(n)||i.isEqual(Q.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(cs()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Kr(n)),this.rs(e,o,n,lR(i,-1)).next(l=>l))})}ts(e,n){let r=new je(qv(e));return n.forEach((i,s)=>{Wl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return cs()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ir.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ve(ie),this._s=new ji(s=>xd(s),Dd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function MP(t,e,n,r){return new LP(t,e,n,r)}async function p0(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Z();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function bP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let S=O.resolve();return y.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(x=>{const L=h.docVersions.get(C);ae(L!==null),x.version.compareTo(L)<0&&(m.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function m0(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function FP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,m)));let S=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(Be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(x,L,I){return x.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=In(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(UP(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function UP(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function jP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fh(t,e,n){const r=Y(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!wo(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ug(t,e,n){const r=Y(t);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=Y(u),y=m._s.get(f);return y!==void 0?O.resolve(m.os.get(y)):m.Ur.getTargetData(h,f)}(r,o,Kt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:Z())).next(l=>(BP(r,DR(e),l),{documents:l,Ts:s})))}function BP(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class cg{constructor(){this.activeTargetIds=FR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $P{constructor(){this.so=new cg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da=null;function ec(){return da===null?da=function(){return 268435456+Math.round(2147483648*Math.random())}():da++,"0x"+da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class KP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=ec(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ri("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=HP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=ec();return new Promise((o,l)=>{const u=new Cv;u.setWithCredentials(!0),u.listenOnce(Nv.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ca.NO_ERROR:const f=u.getResponseJson();$(Ge,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ca.TIMEOUT:$(Ge,`RPC '${e}' ${s} timed out`),l(new W(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const m=u.getStatus();if($(Ge,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const C=function(L){const I=L.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(S.status);l(new W(C,S.message))}else l(new W(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(M.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(Ge,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);$(Ge,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=ec(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Vv(),l=Dv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Ge,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);let y=!1,S=!1;const C=new qP({Io:L=>{S?$(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(y||($(Ge,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),$(Ge,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},To:()=>m.close()}),x=(L,I,E)=>{L.listen(I,A=>{try{E(A)}catch(V){setTimeout(()=>{throw V},0)}})};return x(m,ys.EventType.OPEN,()=>{S||($(Ge,`RPC '${e}' stream ${i} transport opened.`),C.yo())}),x(m,ys.EventType.CLOSE,()=>{S||(S=!0,$(Ge,`RPC '${e}' stream ${i} transport closed`),C.So())}),x(m,ys.EventType.ERROR,L=>{S||(S=!0,Ri(Ge,`RPC '${e}' stream ${i} transport errored:`,L),C.So(new W(M.UNAVAILABLE,"The operation could not be completed")))}),x(m,ys.EventType.MESSAGE,L=>{var I;if(!S){const E=L.data[0];ae(!!E);const A=E,V=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(V){$(Ge,`RPC '${e}' stream ${i} received error:`,V);const j=V.status;let U=function(_){const w=Re[_];if(w!==void 0)return i0(w)}(j),v=V.message;U===void 0&&(U=M.INTERNAL,v="Unknown error status: "+j+" with message "+V.message),S=!0,C.So(new W(U,v)),m.close()}else $(Ge,`RPC '${e}' stream ${i} received:`,E),C.bo(E)}}),x(l,xv.STAT_EVENT,L=>{L.stat===rh.PROXY?$(Ge,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===rh.NOPROXY&&$(Ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new rP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new g0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GP extends y0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=oP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Gt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ah(u)?{documents:uP(s,u)}:{query:cP(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=a0(s,o.resumeToken);const h=uh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=yl(s,o.snapshotVersion.toTimestamp());const h=uh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dh(this.serializer),n.removeTarget=e,this.a_(n)}}class QP extends y0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lP(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aP(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ch(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,ch(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class XP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Tn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{jr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.L_.add(4),await So(h),h.q_.set("Unknown"),h.L_.delete(4),await Ql(h)}(this))})}),this.q_=new XP(r,i)}}async function Ql(t){if(jr(t))for(const e of t.B_)await e(!0)}async function So(t){for(const e of t.B_)await e(!1)}function _0(t,e){const n=Y(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wd(n)?$d(n):zi(n).r_()&&Bd(n,e))}function zd(t,e){const n=Y(t),r=zi(n);n.N_.delete(e),r.r_()&&v0(n,e),n.N_.size===0&&(r.r_()?r.o_():jr(n)&&n.q_.set("Unknown"))}function Bd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zi(t).A_(e)}function v0(t,e){t.Q_.xe(e),zi(t).R_(e)}function $d(t){t.Q_=new ZR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),zi(t).start(),t.q_.v_()}function Wd(t){return jr(t)&&!zi(t).n_()&&t.N_.size>0}function jr(t){return Y(t).L_.size===0}function E0(t){t.Q_=void 0}async function ZP(t){t.q_.set("Online")}async function ek(t){t.N_.forEach((e,n)=>{Bd(t,e)})}async function tk(t,e){E0(t),Wd(t)?(t.q_.M_(e),$d(t)):t.q_.set("Unknown")}async function nk(t,e,n){if(t.q_.set("Online"),e instanceof o0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _l(t,r)}else if(e instanceof Da?t.Q_.Ke(e):e instanceof s0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await m0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Be.EMPTY_BYTE_STRING,f.snapshotVersion)),v0(s,u);const m=new $n(f.target,u,h,f.sequenceNumber);Bd(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await _l(t,r)}}async function _l(t,e,n){if(!wo(e))throw e;t.L_.add(1),await So(t),t.q_.set("Offline"),n||(n=()=>m0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ql(t)})}function w0(t,e){return e().catch(n=>_l(t,n,e))}async function Yl(t){const e=Y(t),n=or(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rk(e);)try{const i=await jP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ik(e,i)}catch(i){await _l(e,i)}T0(e)&&I0(e)}function rk(t){return jr(t)&&t.O_.length<10}function ik(t,e){t.O_.push(e);const n=or(t);n.r_()&&n.V_&&n.m_(e.mutations)}function T0(t){return jr(t)&&!or(t).n_()&&t.O_.length>0}function I0(t){or(t).start()}async function sk(t){or(t).p_()}async function ok(t){const e=or(t);for(const n of t.O_)e.m_(n.mutations)}async function ak(t,e,n){const r=t.O_.shift(),i=Ld.from(r,e,n);await w0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yl(t)}async function lk(t,e){e&&or(t).V_&&await async function(r,i){if(function(o){return YR(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();or(r).s_(),await w0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yl(r)}}(t,e),T0(t)&&I0(t)}async function dg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.L_.add(3),await So(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ql(n)}async function uk(t,e){const n=Y(t);e?(n.L_.delete(2),await Ql(n)):e||(n.L_.add(2),await So(n),n.q_.set("Unknown"))}function zi(t){return t.K_||(t.K_=function(n,r,i){const s=Y(n);return s.w_(),new GP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:ZP.bind(null,t),Ro:ek.bind(null,t),mo:tk.bind(null,t),d_:nk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wd(t)?$d(t):t.q_.set("Unknown")):(await t.K_.stop(),E0(t))})),t.K_}function or(t){return t.U_||(t.U_=function(n,r,i){const s=Y(n);return s.w_(),new QP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:sk.bind(null,t),mo:lk.bind(null,t),f_:ok.bind(null,t),g_:ak.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Yl(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Hd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qd(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),wo(t))return new W(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new yi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(){this.W_=new ve(H.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xi(e,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class hk{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=pg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(M.ABORTED,"Firestore shutting down"))}}function pg(){return new ji(t=>Hv(t),$l)}async function dk(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new ck,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=qd(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Kd(n)}async function fk(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pk(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Kd(n)}function mk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Kd(t){t.Y_.forEach(e=>{e.next()})}var ph,mg;(mg=ph||(ph={})).ea="default",mg.Cache="cache";class gk{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ph.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e){this.key=e}}class A0{constructor(e){this.key=e}}class yk{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=qv(e),this.Ra=new yi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new fg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const y=i.get(f),S=Wl(this.query,m)?m:null,C=!!y&&this.mutatedKeys.has(y.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;y&&S?y.data.isEqual(S.data)?C!==x&&(r.track({type:3,doc:S}),L=!0):this.ga(y,S)||(r.track({type:2,doc:S}),L=!0,(u&&this.Aa(S,u)>0||h&&this.Aa(S,h)<0)&&(l=!0)):!y&&S?(r.track({type:0,doc:S}),L=!0):y&&!S&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(S?(o=o.add(S),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(S,C){const x=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return x(S)-x(C)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new xi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new fg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new A0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new S0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Z();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return xi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _k{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vk{constructor(e){this.key=e,this.va=!1}}class Ek{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ji(l=>Hv(l),$l),this.Ma=new Map,this.xa=new Set,this.Oa=new ve(H.comparator),this.Na=new Map,this.La=new Fd,this.Ba={},this.ka=new Map,this.qa=Ni.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wk(t,e,n=!0){const r=x0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await R0(r,e,n,!0),i}async function Tk(t,e){const n=x0(t);await R0(n,e,!0,!1)}async function R0(t,e,n,r){const i=await zP(t.localStore,Kt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Ik(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&_0(t.remoteStore,i),l}async function Ik(t,e,n,r,i){t.Ka=(m,y,S)=>async function(x,L,I,E){let A=L.view.ma(I);A.ns&&(A=await ug(x.localStore,L.query,!1).then(({documents:v})=>L.view.ma(v,A)));const V=E&&E.targetChanges.get(L.targetId),j=E&&E.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(A,x.isPrimaryClient,V,j);return yg(x,L.targetId,U.wa),U.snapshot}(t,m,y,S);const s=await ug(t.localStore,e,!0),o=new yk(e,s.Ts),l=o.ma(s.documents),u=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);yg(t,n,h.wa);const f=new _k(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function Sk(t,e,n){const r=Y(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$l(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await fh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&zd(r.remoteStore,i.targetId),mh(r,i.targetId)}).catch(Eo)):(mh(r,i.targetId),await fh(r.localStore,i.targetId,!0))}async function Ak(t,e){const n=Y(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zd(n.remoteStore,r.targetId))}async function Rk(t,e,n){const r=Vk(t);try{const i=await function(o,l){const u=Y(o),h=xe.now(),f=l.reduce((S,C)=>S.add(C.key),Z());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=In(),x=Z();return u.cs.getEntries(S,f).next(L=>{C=L,C.forEach((I,E)=>{E.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(L=>{m=L;const I=[];for(const E of l){const A=HR(E,m.get(E.key).overlayedDocument);A!=null&&I.push(new Ur(E.key,A,Fv(A.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,I,l)}).next(L=>{y=L;const I=L.applyToLocalDocumentSet(m,x);return u.documentOverlayCache.saveOverlays(S,L.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Gv(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ve(ie)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ao(r,i.changes),await Yl(r.remoteStore)}catch(i){const s=qd(i,"Failed to persist write");n.reject(s)}}async function P0(t,e){const n=Y(t);try{const r=await FP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ae(o.va):i.removedDocuments.size>0&&(ae(o.va),o.va=!1))}),await Ao(n,r,e)}catch(r){await Eo(r)}}function gg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&Kd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Pk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ve(H.comparator);o=o.insert(s,Xe.newNoDocument(s,Q.min()));const l=Z().add(s),u=new Kl(Q.min(),new Map,new ve(ie),o,l);await P0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Gd(r)}else await fh(r.localStore,e,!1).then(()=>mh(r,e,n)).catch(Eo)}async function kk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await bP(n.localStore,e);C0(n,r,null),k0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,i)}catch(i){await Eo(i)}}async function Ck(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(ae(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);C0(r,e,n),k0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,i)}catch(i){await Eo(i)}}function k0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function C0(t,e,n){const r=Y(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function mh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||N0(t,r)})}function N0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(zd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Gd(t))}function yg(t,e,n){for(const r of n)r instanceof S0?(t.La.addReference(r.key,e),Nk(t,r)):r instanceof A0?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||N0(t,r.key)):G()}function Nk(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),Gd(t))}function Gd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new H(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new vk(n)),t.Oa=t.Oa.insert(n,r),_0(t.remoteStore,new $n(Kt(Vd(n.path)),r,"TargetPurposeLimboResolution",Pd.oe))}}async function Ao(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=jd.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.$i,S=>f.persistence.referenceDelegate.addReference(m,y.targetId,S)).next(()=>O.forEach(y.Ui,S=>f.persistence.referenceDelegate.removeReference(m,y.targetId,S)))))}catch(m){if(!wo(m))throw m;$("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const S=f.os.get(y),C=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(C);f.os=f.os.insert(y,x)}}}(r.localStore,s))}async function xk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await p0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.hs)}}function Dk(t,e){const n=Y(t),r=n.Na.get(e);if(r&&r.va)return Z().add(r.key);{let i=Z();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function x0(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=P0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pk.bind(null,e),e.Ca.d_=pk.bind(null,e.eventManager),e.Ca.$a=mk.bind(null,e.eventManager),e}function Vk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ck.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return MP(this.persistence,new OP,e.initialUser,this.serializer)}Ga(e){return new xP(Ud.Zr,this.serializer)}Wa(e){return new $P}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xk.bind(null,this.syncEngine),await uk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hk}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=function(s){return new KP(s)}(e.databaseInfo);return function(s,o,l,u){return new YP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>gg(this.syncEngine,n,0),function(){return hg.D()?new hg:new WP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const m=new Ek(i,s,o,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await So(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gh.provider={build:()=>new gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=Lv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await p0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _g(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mk(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dg(e.remoteStore,i)),t._onlineComponents=e}async function Mk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ri("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new vl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await nc(t,new vl);return t._offlineComponents}async function D0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await _g(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await _g(t,new gh))),t._onlineComponents}function bk(t){return D0(t).then(e=>e.syncEngine)}async function Fk(t){const e=await D0(t),n=e.eventManager;return n.onListen=wk.bind(null,e.syncEngine),n.onUnlisten=Sk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Tk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ak.bind(null,e.syncEngine),n}function Uk(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Ok({next:y=>{f.Za(),o.enqueueAndForget(()=>fk(s,m));const S=y.docs.has(l);!S&&y.fromCache?h.reject(new W(M.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&y.fromCache&&u&&u.source==="server"?h.reject(new W(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new gk(Vd(l.path),f,{includeMetadataChanges:!0,_a:!0});return dk(s,m)}(await Fk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(t,e,n){if(!n)throw new W(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zk(t,e,n,r){if(e===!0&&r===!0)throw new W(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Eg(t){if(!H.isDocumentKey(t))throw new W(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function oo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qd(t);throw new W(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=V0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZA;switch(r.type){case"firstParty":return new rR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vg.get(n);r&&($("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())}(this),Promise.resolve()}}function Bk(t,e,n,r={}){var i;const s=(t=oo(t,Yd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Qe.MOCK_USER;else{l=cI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Qe(h)}t._authCredentials=new eR(new Ov(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xd(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class ao extends Xd{constructor(e,n,r){super(e,n,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new H(e))}withConverter(e){return new ao(this.firestore,e,this._path)}}function O0(t,e,...n){if(t=gt(t),arguments.length===1&&(e=Lv.newId()),jk("doc","path",e),t instanceof Yd){const r=Te.fromString(e,...n);return Eg(r),new At(t,null,new H(r))}{if(!(t instanceof At||t instanceof ao))throw new W(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Eg(r),new At(t.firestore,t instanceof ao?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new g0(this,"async_queue_retry"),this.Vu=()=>{const r=tc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!wo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Hd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Jd extends Yd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tg(e),this._firestoreClient=void 0,await e}}}function $k(t,e){const n=typeof t=="object"?t:q_(),r=typeof t=="string"?t:"(default)",i=pd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lI("firestore");s&&Bk(i,...s)}return i}function L0(t){if(t._terminated)throw new W(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Wk(t),t._firestoreClient}function Wk(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new gR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,V0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Lk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di(Be.fromBase64String(e))}catch(n){throw new W(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Di(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=/^__.*__$/;class qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ur(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}function b0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return El(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(b0(this.Cu)&&Hk.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Kk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}Qu(e,n,r,i=!1){return new nf({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gk(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new Kk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qk(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);z0("Data must be an object, but it was:",o,r);const l=U0(r,o);let u,h;if(s.merge)u=new Mt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=Yk(e,m,n);if(!o.contains(y))throw new W(M.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Jk(f,y)||f.push(y)}u=new Mt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new qk(new Tt(l),u,h)}function F0(t,e){if(j0(t=gt(t)))return z0("Unsupported field value:",e,t),U0(t,e);if(t instanceof M0)return function(r,i){if(!b0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=F0(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:yl(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yl(i.serializer,s)}}if(r instanceof ef)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Di)return{bytesValue:a0(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof tf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Od(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Qd(r)}`)}(t,e)}function U0(t,e){const n={};return Mv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=F0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function j0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof ef||t instanceof Di||t instanceof At||t instanceof M0||t instanceof tf)}function z0(t,e,n){if(!j0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Qd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Yk(t,e,n){if((e=gt(e))instanceof Zd)return e._internalPath;if(typeof e=="string")return B0(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xk=new RegExp("[~\\*/\\[\\]]");function B0(t,e,n){if(e.search(Xk)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zd(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(M.INVALID_ARGUMENT,l+t+u)}function Jk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(W0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zk extends $0{data(){return super.data()}}function W0(t,e){return typeof e=="string"?B0(t,e):e instanceof Zd?e._internalPath:e._delegate._internalPath}class eC{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new tf(s)}convertGeoPoint(e){return new ef(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=sr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ae(f0(r));const i=new no(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class H0 extends $0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(W0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rC extends H0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(t){t=oo(t,At);const e=oo(t.firestore,Jd);return Uk(L0(e),t._key).then(n=>lC(e,t,n))}class sC extends eC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function oC(t,e,n){t=oo(t,At);const r=oo(t.firestore,Jd),i=tC(t.converter,e);return aC(r,[Qk(Gk(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function aC(t,e){return function(r,i){const s=new tr;return r.asyncQueue.enqueueAndForget(async()=>Rk(await bk(r),i,s)),s.promise}(L0(t),e)}function lC(t,e,n){const r=n.docs.get(e._key),i=new sC(t);return new H0(t,i,e._key,r,new nC(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Fi=i})(Mi),Ai(new xr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Jd(new tR(r.getProvider("auth-internal")),new sR(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),er(Bm,"4.7.3",e),er(Bm,"4.7.3","esm2017")})();const uC={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyDXu-wEYzJVfbCYzuyEyI_5O5BkUBMt650",VITE_FIREBASE_APP_ID:"1:308213760381:web:81833eda1a345a2f844c14",VITE_FIREBASE_AUTH_DOMAIN:"stirring-lollipop-34f1b6.netlify.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"308213760381",VITE_FIREBASE_PROJECT_ID:"stirring-lollipop-34f1b6",VITE_FIREBASE_STORAGE_BUCKET:"stirring-lollipop-34f1b6.appspot.com"},cC=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"];for(const t of cC)if(!uC[t])throw new Error(`Missing required environment variable: ${t}`);const hC={apiKey:"AIzaSyDXu-wEYzJVfbCYzuyEyI_5O5BkUBMt650",authDomain:"stirring-lollipop-34f1b6.netlify.app",authDomains:["stirring-lollipop-34f1b6.netlify.app","stirring-lollipop-34f1b6.netlify.app"],projectId:"stirring-lollipop-34f1b6",storageBucket:"stirring-lollipop-34f1b6.appspot.com",messagingSenderId:"308213760381",appId:"1:308213760381:web:81833eda1a345a2f844c14"},q0=H_(hC),qr=QA(q0),K0=new an,G0=$k(q0);K0.setCustomParameters({prompt:"select_account",auth_type:"popup",ux_mode:"popup"});const Q0=se.createContext(null);function Ro(){const t=se.useContext(Q0);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function dC({children:t}){const[e,n]=se.useState(null),[r,i]=se.useState(!0);se.useEffect(()=>bS(qr,y=>{n(y),i(!1)}),[]);const f={user:e,loading:r,signInWithEmail:async(m,y)=>{try{if(!(await OS(qr,m,y)).user)throw new Error("No user data returned")}catch(S){throw S.code==="auth/invalid-credential"?new Error("Invalid email or password"):S.code==="auth/network-request-failed"?new Error("Network error. Please check your internet connection"):S}},signUpWithEmail:async(m,y)=>{try{if(!(await VS(qr,m,y)).user)throw new Error("No user data returned")}catch(S){throw S.code==="auth/email-already-in-use"?new Error("Email already in use"):S.code==="auth/network-request-failed"?new Error("Network error. Please check your internet connection"):S}},signInWithGoogle:async()=>{try{if(!(await iA(qr,K0)).user)throw new Error("No user data returned")}catch(m){throw console.error("Error signing in with Google:",m),m.code==="auth/network-request-failed"?new Error("Network error. Please check your internet connection"):m.code==="auth/popup-blocked"?new Error("Popups are blocked. Please allow popups for this website to continue."):new Error("Failed to sign in with Google. Please try again")}},resetPassword:async m=>{try{await DS(qr,m)}catch(y){throw y.code==="auth/user-not-found"?new Error("No account found with this email"):y.code==="auth/network-request-failed"?new Error("Network error. Please check your internet connection"):y}},logout:async()=>{try{await FS(qr)}catch(m){throw m.code==="auth/network-request-failed"?new Error("Network error. Please check your internet connection"):m}}};return D.jsx(Q0.Provider,{value:f,children:!r&&t})}function Y0({size:t,strokeWidth:e,progress:n,color:r}){const i=(t-e)/2,s=2*Math.PI*i;return D.jsxs("svg",{width:t,height:t,className:"transform -rotate-90",children:[D.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:"#e5e7eb",strokeWidth:e}),D.jsx("circle",{cx:t/2,cy:t/2,r:i,fill:"none",stroke:r,strokeWidth:e,strokeDasharray:s,strokeDashoffset:s-n,strokeLinecap:"round",className:"transition-all duration-300 ease-out"})]})}function fC({count:t,goal:e,onClick:n,color:r}){const l=2*Math.PI*92.5,u=e>0?t/e*l:0,h=Math.max(0,e-t),f=e>0;return D.jsxs("div",{className:`relative select-none transition-opacity ${f?"cursor-pointer opacity-100":"cursor-not-allowed opacity-50"}`,onClick:f?n:void 0,children:[D.jsx(Y0,{size:200,strokeWidth:15,progress:u,color:r}),D.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[D.jsx("span",{className:"text-4xl font-bold text-gray-800",children:t}),f&&D.jsxs("span",{className:"text-sm text-gray-600 mt-1",children:[h," taps to go"]})]})]})}function pC({onSwipe:t,threshold:e=50,elementId:n}){const r=se.useRef(null);return se.useEffect(()=>{const i=l=>{const u=l.touches[0];r.current={x:u.clientX,y:u.clientY,time:Date.now()}},s=l=>{if(!r.current)return;const u=l.changedTouches[0],h=u.clientX-r.current.x,f=u.clientY-r.current.y;Date.now()-r.current.time<300&&Math.abs(h)>Math.abs(f)&&Math.abs(h)>=e&&(l.preventDefault(),t(h>0?"right":"left")),r.current=null},o=document.getElementById(n);if(o)return o.addEventListener("touchstart",i),o.addEventListener("touchend",s),()=>{o.removeEventListener("touchstart",i),o.removeEventListener("touchend",s)}},[t,e,n]),null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ct=(t,e)=>{const n=se.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>se.createElement("svg",{ref:f,...mC,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${gC(t)}`,l].join(" "),...h},[...e.map(([m,y])=>se.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=Ct("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=Ct("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=Ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=Ct("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=Ct("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=Ct("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=Ct("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=Ct("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=Ct("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=Ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=Ct("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function kC({count:t,remaining:e,isActive:n}){return D.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center",children:[D.jsx("span",{className:"text-4xl font-bold text-gray-800",children:t}),n&&D.jsxs(D.Fragment,{children:[D.jsxs("span",{className:"text-sm text-gray-600 mt-1",children:[e," swipes to go"]}),D.jsxs("div",{className:"mt-2 text-gray-500 flex flex-col gap-1",children:[D.jsxs("div",{className:"flex items-center gap-1 text-blue-500",children:[D.jsx(vC,{size:16}),D.jsx("span",{className:"text-xs",children:"+1"})]}),D.jsxs("div",{className:"flex items-center gap-1",children:[D.jsx(_C,{size:16}),D.jsx("span",{className:"text-xs",children:"-1"})]})]})]})]})}function CC({count:t,goal:e,onSwipe:n,color:r,title:i}){const u=2*Math.PI*92.5,h=e>0?t/e*u:0,f=Math.max(0,e-t),m=e>0,y=`swipe-area-${i.toLowerCase().replace(/\s+/g,"-")}`;return pC({onSwipe:n,elementId:y}),D.jsxs("div",{id:y,className:`relative select-none transition-opacity ${m?"opacity-100":"opacity-50"}`,children:[D.jsx(Y0,{size:200,strokeWidth:15,progress:h,color:r}),D.jsx(kC,{count:t,remaining:f,isActive:m})]})}function NC({goal:t,onGoalChange:e,onSetGoal:n,color:r}){const[i,s]=wh.useState(t.toString()),o=l=>{const u=l.target.value;if(u===""){s(""),e(0);return}const h=parseInt(u);isNaN(h)||(s(h.toString()),e(h))};return D.jsxs("div",{className:"flex gap-2",children:[D.jsx("input",{type:"number",value:i,onChange:o,className:"px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:border-transparent w-32",style:{"--tw-ring-color":r},placeholder:"Enter tap goal"}),D.jsx("button",{onClick:n,className:"px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90",style:{backgroundColor:r,"--tw-ring-color":r},children:"Set Goal"})]})}function xC({count:t,goal:e,color:n}){if(e===0)return D.jsx("p",{className:"text-gray-500 italic",children:"Set a goal above to start tapping!"});const r=t/e*100;return t>=e?D.jsx("p",{className:"text-green-600 font-semibold",children:"Goal achieved! 🎉"}):D.jsx("p",{style:{color:n},children:r>=75?"Almost there! Keep going!":r>=50?"Halfway there! You're doing great!":r>=25?"Good progress! Keep it up!":"Just getting started! Tap away!"})}function DC({counter:t}){const{color:e,title:n,count:r,goal:i,tempGoal:s,handleGoalChange:o,handleSetGoal:l}=t;return D.jsxs("div",{className:"w-full px-4 flex flex-col items-center gap-6",children:[D.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:n}),D.jsx(NC,{goal:s,onGoalChange:o,onSetGoal:l,color:e}),t.type==="tap"?D.jsx(fC,{count:r,goal:i,onClick:t.handleTap,color:e}):D.jsx(CC,{count:r,goal:i,onSwipe:t.handleSwipe,color:e,title:n}),D.jsx(xC,{count:r,goal:i,color:e})]})}function VC({currentPage:t,totalPages:e}){return D.jsx("div",{className:"flex gap-2",children:Array.from({length:e}).map((n,r)=>D.jsx("div",{className:`w-2 h-2 rounded-full transition-colors ${r===t?"bg-gray-800":"bg-gray-300"}`},r))})}function OC({currentPage:t,totalPages:e,onScroll:n}){return D.jsxs("div",{className:"flex items-center justify-center gap-4",children:[D.jsx("button",{onClick:()=>n("left"),className:"p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 flex items-center",disabled:t===0,children:D.jsx(EC,{size:24})}),D.jsx(VC,{currentPage:t,totalPages:e}),D.jsx("button",{onClick:()=>n("right"),className:"p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 flex items-center",disabled:t===e-1,children:D.jsx(wC,{size:24})})]})}function LC({initialCount:t=0,initialGoal:e=0,initialTempGoal:n=10,onSuccess:r}={}){const[i,s]=se.useState(t),[o,l]=se.useState(e),[u,h]=se.useState(n);return{count:i,goal:o,tempGoal:u,handleTap:()=>{if(o>0){const S=Math.min(i+1,o);s(S),S===o&&r&&r()}},handleGoalChange:S=>{h(S)},handleSetGoal:()=>{u>0?(l(u),s(0)):(l(0),s(0))}}}function MC({initialCount:t=0,initialGoal:e=0,initialTempGoal:n=10,onSuccess:r}={}){const[i,s]=se.useState(t),[o,l]=se.useState(e),[u,h]=se.useState(n);return{count:i,goal:o,tempGoal:u,handleSwipe:S=>{o>0&&s(C=>{const x=S==="right"?Math.min(C+1,o):Math.max(C-1,0);return x===o&&r&&r(),x})},handleGoalChange:S=>{h(S)},handleSetGoal:()=>{u>0?(l(u),s(0)):(l(0),s(0))}}}function bC({title:t,children:e}){return D.jsx("div",{className:"h-full flex items-center justify-center bg-gray-50",children:D.jsxs("div",{className:"w-full max-w-md p-8 bg-white rounded-lg shadow-lg",children:[D.jsx("h2",{className:"text-2xl font-bold text-center mb-6",children:t}),e]})})}function FC(t,e){const[n,r]=se.useState(!1);return{loading:n,handleAuth:async()=>{try{r(!0),await t()}catch(s){e(s.message||"Authentication failed")}finally{r(!1)}}}}function UC({onClose:t}){return D.jsxs("div",{className:"mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg relative",children:[D.jsx("button",{onClick:t,className:"absolute top-2 right-2 text-gray-400 hover:text-gray-600",children:D.jsx(PC,{size:16})}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx(yC,{className:"text-yellow-500 flex-shrink-0",size:20}),D.jsxs("div",{className:"text-sm text-yellow-700",children:[D.jsx("p",{className:"font-medium mb-2",children:"Popup Blocked"}),D.jsxs("ol",{className:"list-decimal ml-4 space-y-1",children:[D.jsx("li",{children:"Look for the popup blocker icon in your browser's address bar"}),D.jsx("li",{children:"Click it to open the popup blocker settings"}),D.jsx("li",{children:'Select "Always allow popups from this site"'}),D.jsx("li",{children:"Try signing in again"})]})]})]})]})}function jC({onError:t}){const[e,n]=wh.useState(!1),{signInWithGoogle:r}=Ro(),{loading:i,handleAuth:s}=FC(r,l=>{l.toLowerCase().includes("popup")?n(!0):t(l)}),o=async()=>{n(!1),await s()};return D.jsxs(D.Fragment,{children:[D.jsxs("button",{onClick:o,disabled:i,className:`w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${i?"opacity-50 cursor-not-allowed":""}`,children:[D.jsx("img",{src:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg",alt:"Google",className:"w-5 h-5"}),D.jsx("span",{className:"text-gray-700",children:i?"Signing in...":"Continue with Google"})]}),e&&D.jsx(UC,{onClose:()=>n(!1)})]})}function zC({className:t="",onError:e}){return D.jsxs("div",{className:`space-y-4 ${t}`,children:[D.jsx(jC,{onError:e}),D.jsxs("div",{className:"relative flex items-center",children:[D.jsx("div",{className:"flex-grow border-t border-gray-300"}),D.jsx("span",{className:"flex-shrink mx-4 text-gray-400 text-sm",children:"or"}),D.jsx("div",{className:"flex-grow border-t border-gray-300"})]})]})}function BC({mode:t,onError:e,onSuccess:n}){const[r,i]=se.useState(""),[s,o]=se.useState(""),[l,u]=se.useState(!1),{signInWithEmail:h,signUpWithEmail:f,resetPassword:m}=Ro();return{email:r,setEmail:i,password:s,setPassword:o,loading:l,handleSubmit:async S=>{S.preventDefault(),u(!0);try{switch(t){case"reset":await m(r),n("Password reset email sent. Please check your inbox.");break;case"signup":await f(r,s);break;default:await h(r,s)}}catch(C){e(C.message)}finally{u(!1)}}}}function $C({mode:t,error:e,success:n,onError:r,onSuccess:i}){const[s,o]=se.useState(!1),{email:l,setEmail:u,password:h,setPassword:f,loading:m,handleSubmit:y}=BC({mode:t,onError:r,onSuccess:i});return D.jsxs("form",{onSubmit:y,className:"space-y-4",children:[D.jsxs("div",{className:"relative",children:[D.jsx(RC,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),D.jsx("input",{type:"email",value:l,onChange:S=>u(S.target.value),placeholder:"Email",className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]}),t!=="reset"&&D.jsxs("div",{className:"relative",children:[D.jsx(SC,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",size:20}),D.jsx("input",{type:s?"text":"password",value:h,onChange:S=>f(S.target.value),placeholder:"Password",className:"w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0}),D.jsx("button",{type:"button",onClick:()=>o(!s),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:s?D.jsx(TC,{size:20}):D.jsx(IC,{size:20})})]}),e&&D.jsx("p",{className:"text-red-500 text-sm text-center",children:e}),n&&D.jsx("p",{className:"text-green-500 text-sm text-center",children:n}),D.jsx("button",{type:"submit",disabled:m,className:`w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${m?"opacity-50 cursor-not-allowed":""}`,children:m?"Please wait...":t==="reset"?"Send Reset Link":t==="signup"?"Sign Up":"Sign In"})]})}function WC(){const[t,e]=se.useState("signin"),[n,r]=se.useState(null),[i,s]=se.useState(null),o=u=>{e(u),r(null),s(null)},l=()=>{switch(t){case"signup":return"Create Account";case"reset":return"Reset Password";default:return"Welcome Back"}};return D.jsxs(bC,{title:l(),children:[t!=="reset"&&D.jsx(zC,{className:"mb-4",onError:r}),D.jsx($C,{mode:t,error:n,success:i,onError:r,onSuccess:s}),D.jsxs("div",{className:"mt-4 text-center space-y-2",children:[t!=="reset"&&D.jsx("button",{onClick:()=>o(t==="signup"?"signin":"signup"),className:"text-blue-500 hover:text-blue-600 text-sm block w-full",children:t==="signup"?"Already have an account? Sign in":"Don't have an account? Sign up"}),D.jsx("button",{onClick:()=>o(t==="reset"?"signin":"reset"),className:"text-gray-500 hover:text-gray-600 text-sm block w-full",children:t==="reset"?"Back to sign in":"Forgot password?"})]})]})}function HC(){const{user:t,logout:e}=Ro();return t?D.jsxs("div",{className:"flex items-center gap-4",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("img",{src:t.photoURL||"",alt:t.displayName||"User",className:"w-8 h-8 rounded-full"}),D.jsx("span",{className:"text-gray-800",children:t.displayName})]}),D.jsx("button",{onClick:e,className:"flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-gray-800 transition-colors",children:D.jsx(AC,{size:18})})]}):null}function qC({progress:t}){return D.jsxs("div",{className:"flex gap-6",children:[D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(Ig,{size:20,className:"text-blue-500"}),D.jsxs("span",{className:"text-gray-600",children:["Taps: ",t.tapSuccesses]})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx(Ig,{size:20,className:"text-pink-500"}),D.jsxs("span",{className:"text-gray-600",children:["Swipes: ",t.swipeSuccesses]})]})]})}const KC=async(t,e)=>{try{await oC(O0(G0,"progress",t),e)}catch(n){console.error("Error saving progress:",n)}},GC=async t=>{try{const e=O0(G0,"progress",t),n=await iC(e);return n.exists()?n.data():{tapSuccesses:0,swipeSuccesses:0}}catch(e){return console.error("Error getting progress:",e),{tapSuccesses:0,swipeSuccesses:0}}};function QC(){const{user:t}=Ro(),[e,n]=se.useState({tapSuccesses:0,swipeSuccesses:0});return se.useEffect(()=>{t&&GC(t.uid).then(n)},[t]),{progress:e,updateProgress:async i=>{if(!t)return;const s={...e,[i==="tap"?"tapSuccesses":"swipeSuccesses"]:e[i==="tap"?"tapSuccesses":"swipeSuccesses"]+1};n(s),await KC(t.uid,s)}}}function YC(){const[t,e]=wh.useState(0),n=se.useRef(null),{user:r}=Ro(),{progress:i,updateProgress:s}=QC(),o=LC({onSuccess:()=>s("tap")}),l=MC({onSuccess:()=>s("swipe")}),u=[{...o,type:"tap",color:"#3b82f6",title:"Blue Counter"},{...l,type:"swipe",color:"#ec4899",title:"Pink Counter"}],h=f=>{if(!n.current)return;const m=f==="left"?Math.max(0,t-1):Math.min(1,t+1);e(m),n.current.scrollTo({left:m*n.current.clientWidth,behavior:"smooth"})};return r?D.jsxs("div",{className:"h-full flex flex-col",children:[D.jsxs("div",{className:"p-4 flex justify-between items-center",children:[D.jsx(HC,{}),D.jsx(qC,{progress:i})]}),D.jsx("div",{ref:n,className:"flex-1 w-full overflow-hidden",children:D.jsx("div",{className:"h-full flex transition-transform duration-300",children:u.map((f,m)=>D.jsx("div",{className:"h-full w-full flex-shrink-0 flex items-center justify-center",children:D.jsx(DC,{counter:f})},m))})}),D.jsx("div",{className:"py-6",children:D.jsx(OC,{currentPage:t,totalPages:u.length,onScroll:h})})]}):D.jsx("div",{className:"h-full flex items-center justify-center bg-gray-50",children:D.jsx(WC,{})})}function XC(){return D.jsx(dC,{children:D.jsx(YC,{})})}M_(document.getElementById("root")).render(D.jsx(se.StrictMode,{children:D.jsx(XC,{})}));
