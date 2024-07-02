var TR=Object.defineProperty;var SR=(t,e,n)=>e in t?TR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Qf=(t,e,n)=>(SR(t,typeof e!="symbol"?e+"":e,n),n);function IR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ow(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dw={exports:{}},Nc={},Lw={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),AR=Symbol.for("react.portal"),RR=Symbol.for("react.fragment"),kR=Symbol.for("react.strict_mode"),CR=Symbol.for("react.profiler"),PR=Symbol.for("react.provider"),bR=Symbol.for("react.context"),xR=Symbol.for("react.forward_ref"),NR=Symbol.for("react.suspense"),OR=Symbol.for("react.memo"),DR=Symbol.for("react.lazy"),nv=Symbol.iterator;function LR(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var Mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vw=Object.assign,Fw={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Fw,this.updater=n||Mw}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jw(){}jw.prototype=Fs.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=Fw,this.updater=n||Mw}var Hp=Wp.prototype=new jw;Hp.constructor=Wp;Vw(Hp,Fs.prototype);Hp.isPureReactComponent=!0;var rv=Array.isArray,Uw=Object.prototype.hasOwnProperty,qp={current:null},zw={key:!0,ref:!0,__self:!0,__source:!0};function Bw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uw.call(e,r)&&!zw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Da,type:t,key:s,ref:o,props:i,_owner:qp.current}}function MR(t,e){return{$$typeof:Da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Da}function VR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function Yf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VR(""+t.key):e.toString(36)}function iu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Da:case AR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yf(o,0):r,rv(i)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),iu(i,e,n,"",function(c){return c})):i!=null&&(Kp(i)&&(i=MR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(iv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rv(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Yf(s,a);o+=iu(s,e,n,u,i)}else if(u=LR(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Yf(s,a++),o+=iu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var r=[],i=0;return iu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function FR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},su={transition:null},jR={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:su,ReactCurrentOwner:qp};function $w(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!Kp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Fs;ie.Fragment=RR;ie.Profiler=CR;ie.PureComponent=Wp;ie.StrictMode=kR;ie.Suspense=NR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jR;ie.act=$w;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Uw.call(e,u)&&!zw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Da,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:bR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PR,_context:t},t.Consumer=t};ie.createElement=Bw;ie.createFactory=function(t){var e=Bw.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:xR,render:t}};ie.isValidElement=Kp;ie.lazy=function(t){return{$$typeof:DR,_payload:{_status:-1,_result:t},_init:FR}};ie.memo=function(t,e){return{$$typeof:OR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};ie.unstable_act=$w;ie.useCallback=function(t,e){return gt.current.useCallback(t,e)};ie.useContext=function(t){return gt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return gt.current.useEffect(t,e)};ie.useId=function(){return gt.current.useId()};ie.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return gt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};ie.useRef=function(t){return gt.current.useRef(t)};ie.useState=function(t){return gt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return gt.current.useTransition()};ie.version="18.3.1";Lw.exports=ie;var j=Lw.exports;const La=Ow(j),Gh=IR({__proto__:null,default:La},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UR=j,zR=Symbol.for("react.element"),BR=Symbol.for("react.fragment"),$R=Object.prototype.hasOwnProperty,WR=UR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,HR={key:!0,ref:!0,__self:!0,__source:!0};function Ww(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$R.call(e,r)&&!HR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zR,type:t,key:s,ref:o,props:i,_owner:WR.current}}Nc.Fragment=BR;Nc.jsx=Ww;Nc.jsxs=Ww;Dw.exports=Nc;var b=Dw.exports,Qh={},Hw={exports:{}},Dt={},qw={exports:{}},Kw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,J){var ne=$.length;$.push(J);e:for(;0<ne;){var Se=ne-1>>>1,he=$[Se];if(0<i(he,J))$[Se]=J,$[ne]=he,ne=Se;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var J=$[0],ne=$.pop();if(ne!==J){$[0]=ne;e:for(var Se=0,he=$.length,xe=he>>>1;Se<xe;){var Sn=2*(Se+1)-1,In=$[Sn],An=Sn+1,Rn=$[An];if(0>i(In,ne))An<he&&0>i(Rn,In)?($[Se]=Rn,$[An]=ne,Se=An):($[Se]=In,$[Sn]=ne,Se=Sn);else if(An<he&&0>i(Rn,ne))$[Se]=Rn,$[An]=ne,Se=An;else break e}}return J}function i($,J){var ne=$.sortIndex-J.sortIndex;return ne!==0?ne:$.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,d=null,m=3,g=!1,w=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E($){for(var J=n(c);J!==null;){if(J.callback===null)r(c);else if(J.startTime<=$)r(c),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(c)}}function x($){if(A=!1,E($),!w)if(n(u)!==null)w=!0,Zs(M);else{var J=n(c);J!==null&&Tn(x,J.startTime-$)}}function M($,J){w=!1,A&&(A=!1,T(y),y=-1),g=!0;var ne=m;try{for(E(J),d=n(u);d!==null&&(!(d.expirationTime>J)||$&&!P());){var Se=d.callback;if(typeof Se=="function"){d.callback=null,m=d.priorityLevel;var he=Se(d.expirationTime<=J);J=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(u)&&r(u),E(J)}else r(u);d=n(u)}if(d!==null)var xe=!0;else{var Sn=n(c);Sn!==null&&Tn(x,Sn.startTime-J),xe=!1}return xe}finally{d=null,m=ne,g=!1}}var V=!1,S=null,y=-1,I=5,R=-1;function P(){return!(t.unstable_now()-R<I)}function O(){if(S!==null){var $=t.unstable_now();R=$;var J=!0;try{J=S(!0,$)}finally{J?k():(V=!1,S=null)}}else V=!1}var k;if(typeof _=="function")k=function(){_(O)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,Yr=Vt.port2;Vt.port1.onmessage=O,k=function(){Yr.postMessage(null)}}else k=function(){C(O,0)};function Zs($){S=$,V||(V=!0,k())}function Tn($,J){y=C(function(){$(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,Zs(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var J=3;break;default:J=m}var ne=m;m=J;try{return $()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,J){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=m;m=$;try{return J()}finally{m=ne}},t.unstable_scheduleCallback=function($,J,ne){var Se=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Se+ne:Se):ne=Se,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ne+he,$={id:f++,callback:J,priorityLevel:$,startTime:ne,expirationTime:he,sortIndex:-1},ne>Se?($.sortIndex=ne,e(c,$),n(u)===null&&$===n(c)&&(A?(T(y),y=-1):A=!0,Tn(x,ne-Se))):($.sortIndex=he,e(u,$),w||g||(w=!0,Zs(M))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var J=m;return function(){var ne=m;m=J;try{return $.apply(this,arguments)}finally{m=ne}}}})(Kw);qw.exports=Kw;var qR=qw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KR=j,xt=qR;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gw=new Set,Jo={};function Oi(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Jo[t]=e,t=0;t<e.length;t++)Gw.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yh=Object.prototype.hasOwnProperty,GR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv={},ov={};function QR(t){return Yh.call(ov,t)?!0:Yh.call(sv,t)?!1:GR.test(t)?ov[t]=!0:(sv[t]=!0,!1)}function YR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XR(t,e,n,r){if(e===null||typeof e>"u"||YR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Qp);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Qp);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XR(e,n,i,r)&&(n=null),r||i===null?QR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=KR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Al=Symbol.for("react.element"),Ki=Symbol.for("react.portal"),Gi=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Qw=Symbol.for("react.provider"),Yw=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),Zh=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),Xw=Symbol.for("react.offscreen"),av=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Xf;function Ao(t){if(Xf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xf=e&&e[1]||""}return`
`+Xf+t}var Jf=!1;function Zf(t,e){if(!t||Jf)return"";Jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function JR(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Zf(t.type,!1),t;case 11:return t=Zf(t.type.render,!1),t;case 1:return t=Zf(t.type,!0),t;default:return""}}function ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gi:return"Fragment";case Ki:return"Portal";case Xh:return"Profiler";case Xp:return"StrictMode";case Jh:return"Suspense";case Zh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yw:return(t.displayName||"Context")+".Consumer";case Qw:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:ed(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return ed(t(e))}catch{}}return null}function ZR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ek(t){var e=Jw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rl(t){t._valueTracker||(t._valueTracker=ek(t))}function Zw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function td(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eE(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function nd(t,e){eE(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&rd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rd(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function us(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ro(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function tE(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,rE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tk=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){tk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function iE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function sE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nk=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function od(t,e){if(e){if(nk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function em(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ud=null,cs=null,fs=null;function hv(t){if(t=Fa(t)){if(typeof ud!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Vc(e),ud(t.stateNode,t.type,e))}}function oE(t){cs?fs?fs.push(t):fs=[t]:cs=t}function aE(){if(cs){var t=cs,e=fs;if(fs=cs=null,hv(t),e)for(t=0;t<e.length;t++)hv(e[t])}}function lE(t,e){return t(e)}function uE(){}var eh=!1;function cE(t,e,n){if(eh)return t(e,n);eh=!0;try{return lE(t,e,n)}finally{eh=!1,(cs!==null||fs!==null)&&(uE(),aE())}}function ea(t,e){var n=t.stateNode;if(n===null)return null;var r=Vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var cd=!1;if(zn)try{var go={};Object.defineProperty(go,"passive",{get:function(){cd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{cd=!1}function rk(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Vo=!1,bu=null,xu=!1,fd=null,ik={onError:function(t){Vo=!0,bu=t}};function sk(t,e,n,r,i,s,o,a,u){Vo=!1,bu=null,rk.apply(ik,arguments)}function ok(t,e,n,r,i,s,o,a,u){if(sk.apply(this,arguments),Vo){if(Vo){var c=bu;Vo=!1,bu=null}else throw Error(z(198));xu||(xu=!0,fd=c)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dv(t){if(Di(t)!==t)throw Error(z(188))}function ak(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dv(i),t;if(s===r)return dv(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function hE(t){return t=ak(t),t!==null?dE(t):null}function dE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dE(t);if(e!==null)return e;t=t.sibling}return null}var pE=xt.unstable_scheduleCallback,pv=xt.unstable_cancelCallback,lk=xt.unstable_shouldYield,uk=xt.unstable_requestPaint,Ne=xt.unstable_now,ck=xt.unstable_getCurrentPriorityLevel,tm=xt.unstable_ImmediatePriority,mE=xt.unstable_UserBlockingPriority,Nu=xt.unstable_NormalPriority,fk=xt.unstable_LowPriority,gE=xt.unstable_IdlePriority,Oc=null,gn=null;function hk(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Oc,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:mk,dk=Math.log,pk=Math.LN2;function mk(t){return t>>>=0,t===0?32:31-(dk(t)/pk|0)|0}var Cl=64,Pl=4194304;function ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ko(a):(s&=o,s!==0&&(r=ko(s)))}else o=n&~i,o!==0?r=ko(o):s!==0&&(r=ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),i=1<<n,r|=t[n],e&=~i;return r}function gk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=gk(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function hd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yE(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function vk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function vE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _E,rm,wE,EE,TE,dd=!1,bl=[],Tr=null,Sr=null,Ir=null,ta=new Map,na=new Map,dr=[],_k="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mv(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":na.delete(e.pointerId)}}function yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fa(e),e!==null&&rm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wk(t,e,n,r,i){switch(e){case"focusin":return Tr=yo(Tr,t,e,n,r,i),!0;case"dragenter":return Sr=yo(Sr,t,e,n,r,i),!0;case"mouseover":return Ir=yo(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ta.set(s,yo(ta.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,na.set(s,yo(na.get(s)||null,t,e,n,r,i)),!0}return!1}function SE(t){var e=oi(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=fE(n),e!==null){t.blockedOn=e,TE(t.priority,function(){wE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ld=r,n.target.dispatchEvent(r),ld=null}else return e=Fa(n),e!==null&&rm(e),t.blockedOn=n,!1;e.shift()}return!0}function gv(t,e,n){ou(t)&&n.delete(e)}function Ek(){dd=!1,Tr!==null&&ou(Tr)&&(Tr=null),Sr!==null&&ou(Sr)&&(Sr=null),Ir!==null&&ou(Ir)&&(Ir=null),ta.forEach(gv),na.forEach(gv)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,dd||(dd=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Ek)))}function ra(t){function e(i){return vo(i,t)}if(0<bl.length){vo(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&vo(Tr,t),Sr!==null&&vo(Sr,t),Ir!==null&&vo(Ir,t),ta.forEach(e),na.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)SE(n),n.blockedOn===null&&dr.shift()}var hs=Jn.ReactCurrentBatchConfig,Du=!0;function Tk(t,e,n,r){var i=fe,s=hs.transition;hs.transition=null;try{fe=1,im(t,e,n,r)}finally{fe=i,hs.transition=s}}function Sk(t,e,n,r){var i=fe,s=hs.transition;hs.transition=null;try{fe=4,im(t,e,n,r)}finally{fe=i,hs.transition=s}}function im(t,e,n,r){if(Du){var i=pd(t,e,n,r);if(i===null)fh(t,e,r,Lu,n),mv(t,r);else if(wk(i,t,e,n,r))r.stopPropagation();else if(mv(t,r),e&4&&-1<_k.indexOf(t)){for(;i!==null;){var s=Fa(i);if(s!==null&&_E(s),s=pd(t,e,n,r),s===null&&fh(t,e,r,Lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fh(t,e,r,null,n)}}var Lu=null;function pd(t,e,n,r){if(Lu=null,t=em(r),t=oi(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function IE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ck()){case tm:return 1;case mE:return 4;case Nu:case fk:return 16;case gE:return 536870912;default:return 16}default:return 16}}var vr=null,sm=null,au=null;function AE(){if(au)return au;var t,e=sm,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return au=i.slice(t,1<r?1-r:void 0)}function lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function yv(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:yv,this.isPropagationStopped=yv,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},om=Lt(js),Va=Re({},js,{view:0,detail:0}),Ik=Lt(Va),nh,rh,_o,Dc=Re({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(nh=t.screenX-_o.screenX,rh=t.screenY-_o.screenY):rh=nh=0,_o=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),vv=Lt(Dc),Ak=Re({},Dc,{dataTransfer:0}),Rk=Lt(Ak),kk=Re({},Va,{relatedTarget:0}),ih=Lt(kk),Ck=Re({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Pk=Lt(Ck),bk=Re({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xk=Lt(bk),Nk=Re({},js,{data:0}),_v=Lt(Nk),Ok={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lk[t])?!!e[t]:!1}function am(){return Mk}var Vk=Re({},Va,{key:function(t){if(t.key){var e=Ok[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:am,charCode:function(t){return t.type==="keypress"?lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fk=Lt(Vk),jk=Re({},Dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=Lt(jk),Uk=Re({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:am}),zk=Lt(Uk),Bk=Re({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),$k=Lt(Bk),Wk=Re({},Dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hk=Lt(Wk),qk=[9,13,27,32],lm=zn&&"CompositionEvent"in window,Fo=null;zn&&"documentMode"in document&&(Fo=document.documentMode);var Kk=zn&&"TextEvent"in window&&!Fo,RE=zn&&(!lm||Fo&&8<Fo&&11>=Fo),Ev=" ",Tv=!1;function kE(t,e){switch(t){case"keyup":return qk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function CE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qi=!1;function Gk(t,e){switch(t){case"compositionend":return CE(e);case"keypress":return e.which!==32?null:(Tv=!0,Ev);case"textInput":return t=e.data,t===Ev&&Tv?null:t;default:return null}}function Qk(t,e){if(Qi)return t==="compositionend"||!lm&&kE(t,e)?(t=AE(),au=sm=vr=null,Qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return RE&&e.locale!=="ko"?null:e.data;default:return null}}var Yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yk[t.type]:e==="textarea"}function PE(t,e,n,r){oE(r),e=Mu(e,"onChange"),0<e.length&&(n=new om("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ia=null;function Xk(t){UE(t,0)}function Lc(t){var e=Ji(t);if(Zw(e))return t}function Jk(t,e){if(t==="change")return e}var bE=!1;if(zn){var sh;if(zn){var oh="oninput"in document;if(!oh){var Iv=document.createElement("div");Iv.setAttribute("oninput","return;"),oh=typeof Iv.oninput=="function"}sh=oh}else sh=!1;bE=sh&&(!document.documentMode||9<document.documentMode)}function Av(){jo&&(jo.detachEvent("onpropertychange",xE),ia=jo=null)}function xE(t){if(t.propertyName==="value"&&Lc(ia)){var e=[];PE(e,ia,t,em(t)),cE(Xk,e)}}function Zk(t,e,n){t==="focusin"?(Av(),jo=e,ia=n,jo.attachEvent("onpropertychange",xE)):t==="focusout"&&Av()}function eC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(ia)}function tC(t,e){if(t==="click")return Lc(e)}function nC(t,e){if(t==="input"||t==="change")return Lc(e)}function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:rC;function sa(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yh.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Rv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kv(t,e){var n=Rv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rv(n)}}function NE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?NE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function OE(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iC(t){var e=OE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&NE(n.ownerDocument.documentElement,n)){if(r!==null&&um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kv(n,s);var o=kv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sC=zn&&"documentMode"in document&&11>=document.documentMode,Yi=null,md=null,Uo=null,gd=!1;function Cv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gd||Yi==null||Yi!==Pu(r)||(r=Yi,"selectionStart"in r&&um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&sa(Uo,r)||(Uo=r,r=Mu(md,"onSelect"),0<r.length&&(e=new om("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yi)))}function Nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xi={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},ah={},DE={};zn&&(DE=document.createElement("div").style,"AnimationEvent"in window||(delete Xi.animationend.animation,delete Xi.animationiteration.animation,delete Xi.animationstart.animation),"TransitionEvent"in window||delete Xi.transitionend.transition);function Mc(t){if(ah[t])return ah[t];if(!Xi[t])return t;var e=Xi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in DE)return ah[t]=e[n];return t}var LE=Mc("animationend"),ME=Mc("animationiteration"),VE=Mc("animationstart"),FE=Mc("transitionend"),jE=new Map,Pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){jE.set(t,e),Oi(e,[t])}for(var lh=0;lh<Pv.length;lh++){var uh=Pv[lh],oC=uh.toLowerCase(),aC=uh[0].toUpperCase()+uh.slice(1);qr(oC,"on"+aC)}qr(LE,"onAnimationEnd");qr(ME,"onAnimationIteration");qr(VE,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(FE,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function bv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ok(r,e,void 0,t),t.currentTarget=null}function UE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;bv(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;bv(i,a,c),s=u}}}if(xu)throw t=fd,xu=!1,fd=null,t}function ye(t,e){var n=e[Ed];n===void 0&&(n=e[Ed]=new Set);var r=t+"__bubble";n.has(r)||(zE(e,t,2,!1),n.add(r))}function ch(t,e,n){var r=0;e&&(r|=4),zE(n,t,r,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function oa(t){if(!t[Ol]){t[Ol]=!0,Gw.forEach(function(n){n!=="selectionchange"&&(lC.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,ch("selectionchange",!1,e))}}function zE(t,e,n,r){switch(IE(e)){case 1:var i=Tk;break;case 4:i=Sk;break;default:i=im}n=i.bind(null,e,n,t),i=void 0,!cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cE(function(){var c=s,f=em(n),d=[];e:{var m=jE.get(t);if(m!==void 0){var g=om,w=t;switch(t){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":g=Fk;break;case"focusin":w="focus",g=ih;break;case"focusout":w="blur",g=ih;break;case"beforeblur":case"afterblur":g=ih;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Rk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zk;break;case LE:case ME:case VE:g=Pk;break;case FE:g=$k;break;case"scroll":g=Ik;break;case"wheel":g=Hk;break;case"copy":case"cut":case"paste":g=xk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wv}var A=(e&4)!==0,C=!A&&t==="scroll",T=A?m!==null?m+"Capture":null:m;A=[];for(var _=c,E;_!==null;){E=_;var x=E.stateNode;if(E.tag===5&&x!==null&&(E=x,T!==null&&(x=ea(_,T),x!=null&&A.push(aa(_,x,E)))),C)break;_=_.return}0<A.length&&(m=new g(m,w,null,n,f),d.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==ld&&(w=n.relatedTarget||n.fromElement)&&(oi(w)||w[Bn]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?oi(w):null,w!==null&&(C=Di(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(A=vv,x="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=wv,x="onPointerLeave",T="onPointerEnter",_="pointer"),C=g==null?m:Ji(g),E=w==null?m:Ji(w),m=new A(x,_+"leave",g,n,f),m.target=C,m.relatedTarget=E,x=null,oi(f)===c&&(A=new A(T,_+"enter",w,n,f),A.target=E,A.relatedTarget=C,x=A),C=x,g&&w)t:{for(A=g,T=w,_=0,E=A;E;E=$i(E))_++;for(E=0,x=T;x;x=$i(x))E++;for(;0<_-E;)A=$i(A),_--;for(;0<E-_;)T=$i(T),E--;for(;_--;){if(A===T||T!==null&&A===T.alternate)break t;A=$i(A),T=$i(T)}A=null}else A=null;g!==null&&xv(d,m,g,A,!1),w!==null&&C!==null&&xv(d,C,w,A,!0)}}e:{if(m=c?Ji(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var M=Jk;else if(Sv(m))if(bE)M=nC;else{M=eC;var V=Zk}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=tC);if(M&&(M=M(t,c))){PE(d,M,n,f);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&rd(m,"number",m.value)}switch(V=c?Ji(c):window,t){case"focusin":(Sv(V)||V.contentEditable==="true")&&(Yi=V,md=c,Uo=null);break;case"focusout":Uo=md=Yi=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,Cv(d,n,f);break;case"selectionchange":if(sC)break;case"keydown":case"keyup":Cv(d,n,f)}var S;if(lm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Qi?kE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(RE&&n.locale!=="ko"&&(Qi||y!=="onCompositionStart"?y==="onCompositionEnd"&&Qi&&(S=AE()):(vr=f,sm="value"in vr?vr.value:vr.textContent,Qi=!0)),V=Mu(c,y),0<V.length&&(y=new _v(y,t,null,n,f),d.push({event:y,listeners:V}),S?y.data=S:(S=CE(n),S!==null&&(y.data=S)))),(S=Kk?Gk(t,n):Qk(t,n))&&(c=Mu(c,"onBeforeInput"),0<c.length&&(f=new _v("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=S))}UE(d,e)})}function aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ea(t,n),s!=null&&r.unshift(aa(t,s,i)),s=ea(t,e),s!=null&&r.push(aa(t,s,i))),t=t.return}return r}function $i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=ea(n,s),u!=null&&o.unshift(aa(n,u,a))):i||(u=ea(n,s),u!=null&&o.push(aa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function Nv(t){return(typeof t=="string"?t:""+t).replace(uC,`
`).replace(cC,"")}function Dl(t,e,n){if(e=Nv(e),Nv(t)!==e&&n)throw Error(z(425))}function Vu(){}var yd=null,vd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wd=typeof setTimeout=="function"?setTimeout:void 0,fC=typeof clearTimeout=="function"?clearTimeout:void 0,Ov=typeof Promise=="function"?Promise:void 0,hC=typeof queueMicrotask=="function"?queueMicrotask:typeof Ov<"u"?function(t){return Ov.resolve(null).then(t).catch(dC)}:wd;function dC(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ra(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),pn="__reactFiber$"+Us,la="__reactProps$"+Us,Bn="__reactContainer$"+Us,Ed="__reactEvents$"+Us,pC="__reactListeners$"+Us,mC="__reactHandles$"+Us;function oi(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dv(t);t!==null;){if(n=t[pn])return n;t=Dv(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[pn]||t[Bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Vc(t){return t[la]||null}var Td=[],Zi=-1;function Kr(t){return{current:t}}function we(t){0>Zi||(t.current=Td[Zi],Td[Zi]=null,Zi--)}function pe(t,e){Zi++,Td[Zi]=t.current,t.current=e}var Vr={},ct=Kr(Vr),wt=Kr(!1),yi=Vr;function Es(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function Fu(){we(wt),we(ct)}function Lv(t,e,n){if(ct.current!==Vr)throw Error(z(168));pe(ct,e),pe(wt,n)}function BE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,ZR(t)||"Unknown",i));return Re({},n,r)}function ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,yi=ct.current,pe(ct,t),pe(wt,wt.current),!0}function Mv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=BE(t,e,yi),r.__reactInternalMemoizedMergedChildContext=t,we(wt),we(ct),pe(ct,t)):we(wt),pe(wt,n)}var bn=null,Fc=!1,dh=!1;function $E(t){bn===null?bn=[t]:bn.push(t)}function gC(t){Fc=!0,$E(t)}function Gr(){if(!dh&&bn!==null){dh=!0;var t=0,e=fe;try{var n=bn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}bn=null,Fc=!1}catch(i){throw bn!==null&&(bn=bn.slice(t+1)),pE(tm,Gr),i}finally{fe=e,dh=!1}}return null}var es=[],ts=0,Uu=null,zu=0,Ft=[],jt=0,vi=null,Nn=1,On="";function ti(t,e){es[ts++]=zu,es[ts++]=Uu,Uu=t,zu=e}function WE(t,e,n){Ft[jt++]=Nn,Ft[jt++]=On,Ft[jt++]=vi,vi=t;var r=Nn;t=On;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var s=32-rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-rn(e)+i|n<<i|r,On=s+t}else Nn=1<<s|n<<i|r,On=t}function cm(t){t.return!==null&&(ti(t,1),WE(t,1,0))}function fm(t){for(;t===Uu;)Uu=es[--ts],es[ts]=null,zu=es[--ts],es[ts]=null;for(;t===vi;)vi=Ft[--jt],Ft[jt]=null,On=Ft[--jt],Ft[jt]=null,Nn=Ft[--jt],Ft[jt]=null}var bt=null,Ct=null,Te=!1,Jt=null;function HE(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bt=t,Ct=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bt=t,Ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vi!==null?{id:Nn,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bt=t,Ct=null,!0):!1;default:return!1}}function Sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Id(t){if(Te){var e=Ct;if(e){var n=e;if(!Vv(t,e)){if(Sd(t))throw Error(z(418));e=Ar(n.nextSibling);var r=bt;e&&Vv(t,e)?HE(r,n):(t.flags=t.flags&-4097|2,Te=!1,bt=t)}}else{if(Sd(t))throw Error(z(418));t.flags=t.flags&-4097|2,Te=!1,bt=t}}}function Fv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bt=t}function Ll(t){if(t!==bt)return!1;if(!Te)return Fv(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=Ct)){if(Sd(t))throw qE(),Error(z(418));for(;e;)HE(t,e),e=Ar(e.nextSibling)}if(Fv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ct=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ct=null}}else Ct=bt?Ar(t.stateNode.nextSibling):null;return!0}function qE(){for(var t=Ct;t;)t=Ar(t.nextSibling)}function Ts(){Ct=bt=null,Te=!1}function hm(t){Jt===null?Jt=[t]:Jt.push(t)}var yC=Jn.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Ml(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jv(t){var e=t._init;return e(t._payload)}function KE(t){function e(T,_){if(t){var E=T.deletions;E===null?(T.deletions=[_],T.flags|=16):E.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=Pr(T,_),T.index=0,T.sibling=null,T}function s(T,_,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<_?(T.flags|=2,_):E):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,_,E,x){return _===null||_.tag!==6?(_=wh(E,T.mode,x),_.return=T,_):(_=i(_,E),_.return=T,_)}function u(T,_,E,x){var M=E.type;return M===Gi?f(T,_,E.props.children,x,E.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&jv(M)===_.type)?(x=i(_,E.props),x.ref=wo(T,_,E),x.return=T,x):(x=mu(E.type,E.key,E.props,null,T.mode,x),x.ref=wo(T,_,E),x.return=T,x)}function c(T,_,E,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Eh(E,T.mode,x),_.return=T,_):(_=i(_,E.children||[]),_.return=T,_)}function f(T,_,E,x,M){return _===null||_.tag!==7?(_=pi(E,T.mode,x,M),_.return=T,_):(_=i(_,E),_.return=T,_)}function d(T,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=wh(""+_,T.mode,E),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Al:return E=mu(_.type,_.key,_.props,null,T.mode,E),E.ref=wo(T,null,_),E.return=T,E;case Ki:return _=Eh(_,T.mode,E),_.return=T,_;case fr:var x=_._init;return d(T,x(_._payload),E)}if(Ro(_)||mo(_))return _=pi(_,T.mode,E,null),_.return=T,_;Ml(T,_)}return null}function m(T,_,E,x){var M=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:a(T,_,""+E,x);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Al:return E.key===M?u(T,_,E,x):null;case Ki:return E.key===M?c(T,_,E,x):null;case fr:return M=E._init,m(T,_,M(E._payload),x)}if(Ro(E)||mo(E))return M!==null?null:f(T,_,E,x,null);Ml(T,E)}return null}function g(T,_,E,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return T=T.get(E)||null,a(_,T,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Al:return T=T.get(x.key===null?E:x.key)||null,u(_,T,x,M);case Ki:return T=T.get(x.key===null?E:x.key)||null,c(_,T,x,M);case fr:var V=x._init;return g(T,_,E,V(x._payload),M)}if(Ro(x)||mo(x))return T=T.get(E)||null,f(_,T,x,M,null);Ml(_,x)}return null}function w(T,_,E,x){for(var M=null,V=null,S=_,y=_=0,I=null;S!==null&&y<E.length;y++){S.index>y?(I=S,S=null):I=S.sibling;var R=m(T,S,E[y],x);if(R===null){S===null&&(S=I);break}t&&S&&R.alternate===null&&e(T,S),_=s(R,_,y),V===null?M=R:V.sibling=R,V=R,S=I}if(y===E.length)return n(T,S),Te&&ti(T,y),M;if(S===null){for(;y<E.length;y++)S=d(T,E[y],x),S!==null&&(_=s(S,_,y),V===null?M=S:V.sibling=S,V=S);return Te&&ti(T,y),M}for(S=r(T,S);y<E.length;y++)I=g(S,T,y,E[y],x),I!==null&&(t&&I.alternate!==null&&S.delete(I.key===null?y:I.key),_=s(I,_,y),V===null?M=I:V.sibling=I,V=I);return t&&S.forEach(function(P){return e(T,P)}),Te&&ti(T,y),M}function A(T,_,E,x){var M=mo(E);if(typeof M!="function")throw Error(z(150));if(E=M.call(E),E==null)throw Error(z(151));for(var V=M=null,S=_,y=_=0,I=null,R=E.next();S!==null&&!R.done;y++,R=E.next()){S.index>y?(I=S,S=null):I=S.sibling;var P=m(T,S,R.value,x);if(P===null){S===null&&(S=I);break}t&&S&&P.alternate===null&&e(T,S),_=s(P,_,y),V===null?M=P:V.sibling=P,V=P,S=I}if(R.done)return n(T,S),Te&&ti(T,y),M;if(S===null){for(;!R.done;y++,R=E.next())R=d(T,R.value,x),R!==null&&(_=s(R,_,y),V===null?M=R:V.sibling=R,V=R);return Te&&ti(T,y),M}for(S=r(T,S);!R.done;y++,R=E.next())R=g(S,T,y,R.value,x),R!==null&&(t&&R.alternate!==null&&S.delete(R.key===null?y:R.key),_=s(R,_,y),V===null?M=R:V.sibling=R,V=R);return t&&S.forEach(function(O){return e(T,O)}),Te&&ti(T,y),M}function C(T,_,E,x){if(typeof E=="object"&&E!==null&&E.type===Gi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Al:e:{for(var M=E.key,V=_;V!==null;){if(V.key===M){if(M=E.type,M===Gi){if(V.tag===7){n(T,V.sibling),_=i(V,E.props.children),_.return=T,T=_;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===fr&&jv(M)===V.type){n(T,V.sibling),_=i(V,E.props),_.ref=wo(T,V,E),_.return=T,T=_;break e}n(T,V);break}else e(T,V);V=V.sibling}E.type===Gi?(_=pi(E.props.children,T.mode,x,E.key),_.return=T,T=_):(x=mu(E.type,E.key,E.props,null,T.mode,x),x.ref=wo(T,_,E),x.return=T,T=x)}return o(T);case Ki:e:{for(V=E.key;_!==null;){if(_.key===V)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(T,_.sibling),_=i(_,E.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Eh(E,T.mode,x),_.return=T,T=_}return o(T);case fr:return V=E._init,C(T,_,V(E._payload),x)}if(Ro(E))return w(T,_,E,x);if(mo(E))return A(T,_,E,x);Ml(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,E),_.return=T,T=_):(n(T,_),_=wh(E,T.mode,x),_.return=T,T=_),o(T)):n(T,_)}return C}var Ss=KE(!0),GE=KE(!1),Bu=Kr(null),$u=null,ns=null,dm=null;function pm(){dm=ns=$u=null}function mm(t){var e=Bu.current;we(Bu),t._currentValue=e}function Ad(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){$u=t,dm=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(dm!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if($u===null)throw Error(z(308));ns=t,$u.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var ai=null;function gm(t){ai===null?ai=[t]:ai.push(t)}function QE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gm(e)):(n.next=i.next,i.next=n),e.interleaved=n,$n(t,r)}function $n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$n(t,n)}return i=r.interleaved,i===null?(e.next=e,gm(r)):(e.next=i.next,i.next=e),r.interleaved=e,$n(t,n)}function uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}function Uv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wu(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(s!==null){var d=i.baseState;o=0,f=c=u=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,A=a;switch(m=e,g=n,A.tag){case 1:if(w=A.payload,typeof w=="function"){d=w.call(g,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=A.payload,m=typeof w=="function"?w.call(g,d,m):w,m==null)break e;d=Re({},d,m);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,u=d):f=f.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wi|=o,t.lanes=o,t.memoizedState=d}}function zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ja={},yn=Kr(ja),ua=Kr(ja),ca=Kr(ja);function li(t){if(t===ja)throw Error(z(174));return t}function vm(t,e){switch(pe(ca,e),pe(ua,t),pe(yn,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}we(yn),pe(yn,e)}function Is(){we(yn),we(ua),we(ca)}function XE(t){li(ca.current);var e=li(yn.current),n=sd(e,t.type);e!==n&&(pe(ua,t),pe(yn,n))}function _m(t){ua.current===t&&(we(yn),we(ua))}var Ie=Kr(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function wm(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var cu=Jn.ReactCurrentDispatcher,mh=Jn.ReactCurrentBatchConfig,_i=0,Ae=null,je=null,We=null,qu=!1,zo=!1,fa=0,vC=0;function it(){throw Error(z(321))}function Em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Tm(t,e,n,r,i,s){if(_i=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=t===null||t.memoizedState===null?TC:SC,t=n(r,i),zo){s=0;do{if(zo=!1,fa=0,25<=s)throw Error(z(301));s+=1,We=je=null,e.updateQueue=null,cu.current=IC,t=n(r,i)}while(zo)}if(cu.current=Ku,e=je!==null&&je.next!==null,_i=0,We=je=Ae=null,qu=!1,e)throw Error(z(300));return t}function Sm(){var t=fa!==0;return fa=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Ae.memoizedState=We=t:We=We.next=t,We}function qt(){if(je===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=We===null?Ae.memoizedState:We.next;if(e!==null)We=e,je=t;else{if(t===null)throw Error(z(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},We===null?Ae.memoizedState=We=t:We=We.next=t}return We}function ha(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var f=c.lane;if((_i&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,o=r):u=u.next=d,Ae.lanes|=f,wi|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,ln(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,wi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yh(t){var e=qt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function JE(){}function ZE(t,e){var n=Ae,r=qt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Im(n1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,da(9,t1.bind(null,n,r,i,e),void 0,null),He===null)throw Error(z(349));_i&30||e1(n,e,i)}return i}function e1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function t1(t,e,n,r){e.value=n,e.getSnapshot=r,r1(e)&&i1(t)}function n1(t,e,n){return n(function(){r1(e)&&i1(t)})}function r1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function i1(t){var e=$n(t,1);e!==null&&sn(e,t,1,-1)}function Bv(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=EC.bind(null,Ae,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function s1(){return qt().memoizedState}function fu(t,e,n,r){var i=hn();Ae.flags|=t,i.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function jc(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&Em(r,o.deps)){i.memoizedState=da(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=da(1|e,n,s,r)}function $v(t,e){return fu(8390656,8,t,e)}function Im(t,e){return jc(2048,8,t,e)}function o1(t,e){return jc(4,2,t,e)}function a1(t,e){return jc(4,4,t,e)}function l1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function u1(t,e,n){return n=n!=null?n.concat([t]):null,jc(4,4,l1.bind(null,e,t),n)}function Am(){}function c1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function f1(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function h1(t,e,n){return _i&21?(ln(n,e)||(n=yE(),Ae.lanes|=n,wi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function _C(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=mh.transition;mh.transition={};try{t(!1),e()}finally{fe=n,mh.transition=r}}function d1(){return qt().memoizedState}function wC(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},p1(t))m1(e,n);else if(n=QE(t,e,n,r),n!==null){var i=mt();sn(n,t,r,i),g1(n,e,r)}}function EC(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(p1(t))m1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var u=e.interleaved;u===null?(i.next=i,gm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=QE(t,e,i,r),n!==null&&(i=mt(),sn(n,t,r,i),g1(n,e,r))}}function p1(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function m1(t,e){zo=qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nm(t,n)}}var Ku={readContext:Ht,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},TC={readContext:Ht,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:$v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,l1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wC.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:Bv,useDebugValue:Am,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=Bv(!1),e=t[0];return t=_C.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=hn();if(Te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),He===null)throw Error(z(349));_i&30||e1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$v(n1.bind(null,r,s,t),[t]),r.flags|=2048,da(9,t1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=He.identifierPrefix;if(Te){var n=On,r=Nn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SC={readContext:Ht,useCallback:c1,useContext:Ht,useEffect:Im,useImperativeHandle:u1,useInsertionEffect:o1,useLayoutEffect:a1,useMemo:f1,useReducer:gh,useRef:s1,useState:function(){return gh(ha)},useDebugValue:Am,useDeferredValue:function(t){var e=qt();return h1(e,je.memoizedState,t)},useTransition:function(){var t=gh(ha)[0],e=qt().memoizedState;return[t,e]},useMutableSource:JE,useSyncExternalStore:ZE,useId:d1,unstable_isNewReconciler:!1},IC={readContext:Ht,useCallback:c1,useContext:Ht,useEffect:Im,useImperativeHandle:u1,useInsertionEffect:o1,useLayoutEffect:a1,useMemo:f1,useReducer:yh,useRef:s1,useState:function(){return yh(ha)},useDebugValue:Am,useDeferredValue:function(t){var e=qt();return je===null?e.memoizedState=t:h1(e,je.memoizedState,t)},useTransition:function(){var t=yh(ha)[0],e=qt().memoizedState;return[t,e]},useMutableSource:JE,useSyncExternalStore:ZE,useId:d1,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Cr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(sn(e,t,i,r),uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Cr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(sn(e,t,i,r),uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Cr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(sn(e,t,r,n),uu(e,t,r))}};function Wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function y1(t,e,n){var r=!1,i=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Et(e)?yi:ct.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ym(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Et(e)?yi:ct.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Uc.enqueueReplaceState(i,i.state,null),Wu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",r=e;do n+=JR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AC=typeof WeakMap=="function"?WeakMap:Map;function v1(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qu||(Qu=!0,Fd=r),Cd(t,e)},n}function _1(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jC.bind(null,t,e,n),e.then(t,t))}function Kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var RC=Jn.ReactCurrentOwner,_t=!1;function pt(t,e,n,r){e.child=t===null?GE(e,null,n,r):Ss(e,t.child,n,r)}function Qv(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=Tm(t,e,n,r,s,i),n=Sm(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Te&&n&&cm(e),e.flags|=1,pt(t,e,r,i),e.child)}function Yv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Om(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w1(t,e,s,r,i)):(t=mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function w1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sa(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return Pd(t,e,n,r,i)}function E1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(is,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(is,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(is,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(is,kt),kt|=r;return pt(t,e,i,n),e.child}function T1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,i){var s=Et(n)?yi:ct.current;return s=Es(e,s),ds(e,i),n=Tm(t,e,n,r,s,i),r=Sm(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Te&&r&&cm(e),e.flags|=1,pt(t,e,n,i),e.child)}function Xv(t,e,n,r,i){if(Et(n)){var s=!0;ju(e)}else s=!1;if(ds(e,i),e.stateNode===null)hu(t,e),y1(e,n,r),kd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Et(n)?yi:ct.current,c=Es(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Hv(e,o,r,c),hr=!1;var m=e.memoizedState;o.state=m,Wu(e,r,o,i),u=e.memoizedState,a!==r||m!==u||wt.current||hr?(typeof f=="function"&&(Rd(e,n,f,r),u=e.memoizedState),(a=hr||Wv(e,n,a,r,m,u,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,YE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Yt(e.type,a),o.props=c,d=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Et(n)?yi:ct.current,u=Es(e,u));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||m!==u)&&Hv(e,o,r,u),hr=!1,m=e.memoizedState,o.state=m,Wu(e,r,o,i);var w=e.memoizedState;a!==d||m!==w||wt.current||hr?(typeof g=="function"&&(Rd(e,n,g,r),w=e.memoizedState),(c=hr||Wv(e,n,c,r,m,w,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return bd(t,e,n,r,s,i)}function bd(t,e,n,r,i,s){T1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mv(e,n,!1),Wn(t,e,s);r=e.stateNode,RC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&Mv(e,n,!0),e.child}function S1(t){var e=t.stateNode;e.pendingContext?Lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lv(t,e.context,!1),vm(t,e.containerInfo)}function Jv(t,e,n,r,i){return Ts(),hm(i),e.flags|=256,pt(t,e,n,r),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function Nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function I1(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return Id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,r,0,null),t=pi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nd(n),e.memoizedState=xd,t):Rm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return kC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=pi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xd,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rm(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vl(t,e,n,r){return r!==null&&hm(r),Ss(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vh(Error(z(422))),Vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$c({mode:"visible",children:r.children},i,0,null),s=pi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ss(e,t.child,null,o),e.child.memoizedState=Nd(o),e.memoizedState=xd,s);if(!(e.mode&1))return Vl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=vh(s,r,void 0),Vl(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(t,i),sn(r,t,i,-1))}return Nm(),r=vh(Error(z(421))),Vl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ct=Ar(i.nextSibling),bt=e,Te=!0,Jt=null,t!==null&&(Ft[jt++]=Nn,Ft[jt++]=On,Ft[jt++]=vi,Nn=t.id,On=t.overflow,vi=e),e=Rm(e,r.children),e.flags|=4096,e)}function Zv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ad(t.return,e,n)}function _h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function A1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zv(t,n,e);else if(t.tag===19)Zv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Hu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_h(e,!0,n,null,s);break;case"together":_h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CC(t,e,n){switch(e.tag){case 3:S1(e),Ts();break;case 5:XE(e);break;case 1:Et(e.type)&&ju(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?I1(t,e,n):(pe(Ie,Ie.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return A1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,E1(t,e,n)}return Wn(t,e,n)}var R1,Od,k1,C1;R1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};k1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,li(yn.current);var s=null;switch(n){case"input":i=td(t,i),r=td(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=id(t,i),r=id(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}od(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ye("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};C1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Eo(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PC(t,e,n){var r=e.pendingProps;switch(fm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Et(e.type)&&Fu(),st(e),null;case 3:return r=e.stateNode,Is(),we(wt),we(ct),wm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(zd(Jt),Jt=null))),Od(t,e),st(e),null;case 5:_m(e);var i=li(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)k1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return st(e),null}if(t=li(yn.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pn]=e,r[la]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<Co.length;i++)ye(Co[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":lv(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":cv(r,s),ye("invalid",r)}od(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Rl(r),uv(r,s,!0);break;case"textarea":Rl(r),fv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[la]=r,R1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ad(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<Co.length;i++)ye(Co[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":lv(t,r),i=td(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ye("invalid",t);break;case"textarea":cv(t,r),i=id(t,r),ye("invalid",t);break;default:i=r}od(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?sE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&rE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zo(t,u):typeof u=="number"&&Zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&Yp(t,s,u,o))}switch(n){case"input":Rl(t),uv(t,r,!1);break;case"textarea":Rl(t),fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?us(t,!!r.multiple,s,!1):r.defaultValue!=null&&us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)C1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=li(ca.current),li(yn.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(s=r.nodeValue!==n)&&(t=bt,t!==null))switch(t.tag){case 3:Dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return st(e),null;case 13:if(we(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Ct!==null&&e.mode&1&&!(e.flags&128))qE(),Ts(),e.flags|=98560,s=!1;else if(s=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[pn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Jt!==null&&(zd(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ue===0&&(Ue=3):Nm())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Is(),Od(t,e),t===null&&oa(e.stateNode.containerInfo),st(e),null;case 10:return mm(e.type._context),st(e),null;case 17:return Et(e.type)&&Fu(),st(e),null;case 19:if(we(Ie),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Eo(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hu(t),o!==null){for(e.flags|=128,Eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Rs&&(e.flags|=128,r=!0,Eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Hu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return st(e),null}else 2*Ne()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,r=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return xm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function bC(t,e){switch(fm(e),e.tag){case 1:return Et(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),we(wt),we(ct),wm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _m(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return Is(),null;case 10:return mm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Fl=!1,lt=!1,xC=typeof WeakSet=="function"?WeakSet:Set,H=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var e_=!1;function NC(t,e){if(yd=Du,t=OE(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,d=t,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(u=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++f===r&&(u=o),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:t,selectionRange:n},Du=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var A=w.memoizedProps,C=w.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Yt(e.type,A),C);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Pe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return w=e_,e_=!1,w}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dd(e,n,s)}i=i.next}while(i!==r)}}function zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function P1(t){var e=t.alternate;e!==null&&(t.alternate=null,P1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[la],delete e[Ed],delete e[pC],delete e[mC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b1(t){return t.tag===5||t.tag===3||t.tag===4}function t_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}var Ge=null,Xt=!1;function ar(t,e,n){for(n=n.child;n!==null;)x1(t,e,n),n=n.sibling}function x1(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Oc,n)}catch{}switch(n.tag){case 5:lt||rs(n,e);case 6:var r=Ge,i=Xt;Ge=null,ar(t,e,n),Ge=r,Xt=i,Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),ra(t)):hh(Ge,n.stateNode));break;case 4:r=Ge,i=Xt,Ge=n.stateNode.containerInfo,Xt=!0,ar(t,e,n),Ge=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dd(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!lt&&(rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,ar(t,e,n),lt=r):ar(t,e,n);break;default:ar(t,e,n)}}function n_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xC),e.forEach(function(r){var i=zC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Xt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(Ge===null)throw Error(z(160));x1(s,o,i),Ge=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N1(e,t),e=e.sibling}function N1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),fn(t),r&4){try{Bo(3,t,t.return),zc(3,t)}catch(A){Pe(t,t.return,A)}try{Bo(5,t,t.return)}catch(A){Pe(t,t.return,A)}}break;case 1:Qt(e,t),fn(t),r&512&&n!==null&&rs(n,n.return);break;case 5:if(Qt(e,t),fn(t),r&512&&n!==null&&rs(n,n.return),t.flags&32){var i=t.stateNode;try{Zo(i,"")}catch(A){Pe(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eE(i,s),ad(a,o);var c=ad(a,s);for(o=0;o<u.length;o+=2){var f=u[o],d=u[o+1];f==="style"?sE(i,d):f==="dangerouslySetInnerHTML"?rE(i,d):f==="children"?Zo(i,d):Yp(i,f,d,c)}switch(a){case"input":nd(i,s);break;case"textarea":tE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?us(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?us(i,!!s.multiple,s.defaultValue,!0):us(i,!!s.multiple,s.multiple?[]:"",!1))}i[la]=s}catch(A){Pe(t,t.return,A)}}break;case 6:if(Qt(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Pe(t,t.return,A)}}break;case 3:if(Qt(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(A){Pe(t,t.return,A)}break;case 4:Qt(e,t),fn(t);break;case 13:Qt(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pm=Ne())),r&4&&n_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(c=lt)||f,Qt(e,t),lt=c):Qt(e,t),fn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(d=H=f;H!==null;){switch(m=H,g=m.child,m.tag){case 0:case 11:case 14:case 15:Bo(4,m,m.return);break;case 1:rs(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(A){Pe(r,n,A)}}break;case 5:rs(m,m.return);break;case 22:if(m.memoizedState!==null){i_(d);continue}}g!==null?(g.return=m,H=g):i_(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,u=d.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=iE("display",o))}catch(A){Pe(t,t.return,A)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(A){Pe(t,t.return,A)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(e,t),fn(t),r&4&&n_(t);break;case 21:break;default:Qt(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b1(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zo(i,""),r.flags&=-33);var s=t_(t);Vd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=t_(t);Md(t,a,o);break;default:throw Error(z(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OC(t,e,n){H=t,O1(t)}function O1(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||lt;a=Fl;var c=lt;if(Fl=o,(lt=u)&&!c)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?s_(i):u!==null?(u.return=o,H=u):s_(i);for(;s!==null;)H=s,O1(s),s=s.sibling;H=i,Fl=a,lt=c}r_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):r_(t)}}function r_(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||zc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}lt||e.flags&512&&Ld(e)}catch(m){Pe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function i_(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function s_(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zc(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Ld(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Ld(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var DC=Math.ceil,Gu=Jn.ReactCurrentDispatcher,km=Jn.ReactCurrentOwner,Bt=Jn.ReactCurrentBatchConfig,le=0,He=null,Me=null,Xe=0,kt=0,is=Kr(0),Ue=0,pa=null,wi=0,Bc=0,Cm=0,$o=null,vt=null,Pm=0,Rs=1/0,Pn=null,Qu=!1,Fd=null,kr=null,jl=!1,_r=null,Yu=0,Wo=0,jd=null,du=-1,pu=0;function mt(){return le&6?Ne():du!==-1?du:du=Ne()}function Cr(t){return t.mode&1?le&2&&Xe!==0?Xe&-Xe:yC.transition!==null?(pu===0&&(pu=yE()),pu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:IE(t.type)),t):1}function sn(t,e,n,r){if(50<Wo)throw Wo=0,jd=null,Error(z(185));Ma(t,n,r),(!(le&2)||t!==He)&&(t===He&&(!(le&2)&&(Bc|=n),Ue===4&&pr(t,Xe)),Tt(t,r),n===1&&le===0&&!(e.mode&1)&&(Rs=Ne()+500,Fc&&Gr()))}function Tt(t,e){var n=t.callbackNode;yk(t,e);var r=Ou(t,t===He?Xe:0);if(r===0)n!==null&&pv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pv(n),e===1)t.tag===0?gC(o_.bind(null,t)):$E(o_.bind(null,t)),hC(function(){!(le&6)&&Gr()}),n=null;else{switch(vE(r)){case 1:n=tm;break;case 4:n=mE;break;case 16:n=Nu;break;case 536870912:n=gE;break;default:n=Nu}n=z1(n,D1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D1(t,e){if(du=-1,pu=0,le&6)throw Error(z(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=Ou(t,t===He?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xu(t,r);else{e=r;var i=le;le|=2;var s=M1();(He!==t||Xe!==e)&&(Pn=null,Rs=Ne()+500,di(t,e));do try{VC();break}catch(a){L1(t,a)}while(!0);pm(),Gu.current=s,le=i,Me!==null?e=0:(He=null,Xe=0,e=Ue)}if(e!==0){if(e===2&&(i=hd(t),i!==0&&(r=i,e=Ud(t,i))),e===1)throw n=pa,di(t,0),pr(t,r),Tt(t,Ne()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!LC(i)&&(e=Xu(t,r),e===2&&(s=hd(t),s!==0&&(r=s,e=Ud(t,s))),e===1))throw n=pa,di(t,0),pr(t,r),Tt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:ni(t,vt,Pn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Pm+500-Ne(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wd(ni.bind(null,t,vt,Pn),e);break}ni(t,vt,Pn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*DC(r/1960))-r,10<r){t.timeoutHandle=wd(ni.bind(null,t,vt,Pn),r);break}ni(t,vt,Pn);break;case 5:ni(t,vt,Pn);break;default:throw Error(z(329))}}}return Tt(t,Ne()),t.callbackNode===n?D1.bind(null,t):null}function Ud(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=Xu(t,e),t!==2&&(e=vt,vt=n,e!==null&&zd(e)),t}function zd(t){vt===null?vt=t:vt.push.apply(vt,t)}function LC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Cm,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function o_(t){if(le&6)throw Error(z(327));ps();var e=Ou(t,0);if(!(e&1))return Tt(t,Ne()),null;var n=Xu(t,e);if(t.tag!==0&&n===2){var r=hd(t);r!==0&&(e=r,n=Ud(t,r))}if(n===1)throw n=pa,di(t,0),pr(t,e),Tt(t,Ne()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,vt,Pn),Tt(t,Ne()),null}function bm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Rs=Ne()+500,Fc&&Gr())}}function Ei(t){_r!==null&&_r.tag===0&&!(le&6)&&ps();var e=le;le|=1;var n=Bt.transition,r=fe;try{if(Bt.transition=null,fe=1,t)return t()}finally{fe=r,Bt.transition=n,le=e,!(le&6)&&Gr()}}function xm(){kt=is.current,we(is)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fC(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(fm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Is(),we(wt),we(ct),wm();break;case 5:_m(r);break;case 4:Is();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:mm(r.type._context);break;case 22:case 23:xm()}n=n.return}if(He=t,Me=t=Pr(t.current,null),Xe=kt=e,Ue=0,pa=null,Cm=Bc=wi=0,vt=$o=null,ai!==null){for(e=0;e<ai.length;e++)if(n=ai[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ai=null}return t}function L1(t,e){do{var n=Me;try{if(pm(),cu.current=Ku,qu){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(_i=0,We=je=Ae=null,zo=!1,fa=0,km.current=null,n===null||n.return===null){Ue=1,pa=e,Me=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Xe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Kv(o);if(g!==null){g.flags&=-257,Gv(g,o,a,s,e),g.mode&1&&qv(s,c,e),e=g,u=c;var w=e.updateQueue;if(w===null){var A=new Set;A.add(u),e.updateQueue=A}else w.add(u);break e}else{if(!(e&1)){qv(s,c,e),Nm();break e}u=Error(z(426))}}else if(Te&&a.mode&1){var C=Kv(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Gv(C,o,a,s,e),hm(As(u,a));break e}}s=u=As(u,a),Ue!==4&&(Ue=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=v1(s,u,e);Uv(s,T);break e;case 1:a=u;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(kr===null||!kr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=_1(s,a,e);Uv(s,x);break e}}s=s.return}while(s!==null)}F1(n)}catch(M){e=M,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function M1(){var t=Gu.current;return Gu.current=Ku,t===null?Ku:t}function Nm(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),He===null||!(wi&268435455)&&!(Bc&268435455)||pr(He,Xe)}function Xu(t,e){var n=le;le|=2;var r=M1();(He!==t||Xe!==e)&&(Pn=null,di(t,e));do try{MC();break}catch(i){L1(t,i)}while(!0);if(pm(),le=n,Gu.current=r,Me!==null)throw Error(z(261));return He=null,Xe=0,Ue}function MC(){for(;Me!==null;)V1(Me)}function VC(){for(;Me!==null&&!lk();)V1(Me)}function V1(t){var e=U1(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?F1(t):Me=e,km.current=null}function F1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bC(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=PC(n,e,kt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function ni(t,e,n){var r=fe,i=Bt.transition;try{Bt.transition=null,fe=1,FC(t,e,n,r)}finally{Bt.transition=i,fe=r}return null}function FC(t,e,n,r){do ps();while(_r!==null);if(le&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vk(t,s),t===He&&(Me=He=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,z1(Nu,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=fe;fe=1;var a=le;le|=4,km.current=null,NC(t,n),N1(n,t),iC(vd),Du=!!yd,vd=yd=null,t.current=n,OC(n),uk(),le=a,fe=o,Bt.transition=s}else t.current=n;if(jl&&(jl=!1,_r=t,Yu=i),s=t.pendingLanes,s===0&&(kr=null),hk(n.stateNode),Tt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qu)throw Qu=!1,t=Fd,Fd=null,t;return Yu&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===jd?Wo++:(Wo=0,jd=t):Wo=0,Gr(),null}function ps(){if(_r!==null){var t=vE(Yu),e=Bt.transition,n=fe;try{if(Bt.transition=null,fe=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Yu=0,le&6)throw Error(z(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(H=c;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Bo(8,f,s)}var d=f.child;if(d!==null)d.return=f,H=d;else for(;H!==null;){f=H;var m=f.sibling,g=f.return;if(P1(f),f===c){H=null;break}if(m!==null){m.return=g,H=m;break}H=g}}}var w=s.alternate;if(w!==null){var A=w.child;if(A!==null){w.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,H=E;else e:for(o=_;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zc(9,a)}}catch(M){Pe(a,a.return,M)}if(a===o){H=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,H=x;break e}H=a.return}}if(le=i,Gr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Oc,t)}catch{}r=!0}return r}finally{fe=n,Bt.transition=e}}return!1}function a_(t,e,n){e=As(n,e),e=v1(t,e,1),t=Rr(t,e,1),e=mt(),t!==null&&(Ma(t,1,e),Tt(t,e))}function Pe(t,e,n){if(t.tag===3)a_(t,t,n);else for(;e!==null;){if(e.tag===3){a_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=As(n,t),t=_1(e,t,1),e=Rr(e,t,1),t=mt(),e!==null&&(Ma(e,1,t),Tt(e,t));break}}e=e.return}}function jC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>Ne()-Pm?di(t,0):Cm|=n),Tt(t,e)}function j1(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=mt();t=$n(t,e),t!==null&&(Ma(t,e,n),Tt(t,n))}function UC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j1(t,n)}function zC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),j1(t,n)}var U1;U1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,CC(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Te&&e.flags&1048576&&WE(e,zu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hu(t,e),t=e.pendingProps;var i=Es(e,ct.current);ds(e,n),i=Tm(null,e,r,t,i,n);var s=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,ju(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ym(e),i.updater=Uc,e.stateNode=i,i._reactInternals=e,kd(e,r,t,n),e=bd(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&cm(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$C(r),t=Yt(r,t),i){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=Xv(null,e,r,t,n);break e;case 11:e=Qv(null,e,r,t,n);break e;case 14:e=Yv(null,e,r,Yt(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Xv(t,e,r,i,n);case 3:e:{if(S1(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,YE(t,e),Wu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=As(Error(z(423)),e),e=Jv(t,e,r,n,i);break e}else if(r!==i){i=As(Error(z(424)),e),e=Jv(t,e,r,n,i);break e}else for(Ct=Ar(e.stateNode.containerInfo.firstChild),bt=e,Te=!0,Jt=null,n=GE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),r===i){e=Wn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return XE(e),t===null&&Id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_d(r,i)?o=null:s!==null&&_d(r,s)&&(e.flags|=32),T1(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&Id(e),null;case 13:return I1(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ss(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Qv(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Bu,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!wt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Vn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ad(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ad(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=Ht(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Yv(t,e,r,i,n);case 15:return w1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),hu(t,e),e.tag=1,Et(r)?(t=!0,ju(e)):t=!1,ds(e,n),y1(e,r,i),kd(e,r,i,n),bd(null,e,r,!0,t,n);case 19:return A1(t,e,n);case 22:return E1(t,e,n)}throw Error(z(156,e.tag))};function z1(t,e){return pE(t,e)}function BC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new BC(t,e,n,r)}function Om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $C(t){if(typeof t=="function")return Om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===Zp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Om(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gi:return pi(n.children,i,s,e);case Xp:o=8,i|=8;break;case Xh:return t=zt(12,n,e,i|2),t.elementType=Xh,t.lanes=s,t;case Jh:return t=zt(13,n,e,i),t.elementType=Jh,t.lanes=s,t;case Zh:return t=zt(19,n,e,i),t.elementType=Zh,t.lanes=s,t;case Xw:return $c(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qw:o=10;break e;case Yw:o=9;break e;case Jp:o=11;break e;case Zp:o=14;break e;case fr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pi(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function $c(t,e,n,r){return t=zt(22,t,r,e),t.elementType=Xw,t.lanes=n,t.stateNode={isHidden:!1},t}function wh(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dm(t,e,n,r,i,s,o,a,u){return t=new WC(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ym(s),t}function HC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ki,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function B1(t){if(!t)return Vr;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Et(n))return BE(t,n,e)}return e}function $1(t,e,n,r,i,s,o,a,u){return t=Dm(n,r,!0,t,i,s,o,a,u),t.context=B1(null),n=t.current,r=mt(),i=Cr(n),s=Vn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,Ma(t,i,r),Tt(t,r),t}function Wc(t,e,n,r){var i=e.current,s=mt(),o=Cr(i);return n=B1(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(sn(t,i,o,s),uu(t,i,o)),o}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function l_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lm(t,e){l_(t,e),(t=t.alternate)&&l_(t,e)}function qC(){return null}var W1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}Hc.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Wc(t,e,null,null)};Hc.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ei(function(){Wc(null,t,null,null)}),e[Bn]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=EE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&SE(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u_(){}function KC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ju(o);s.call(c)}}var o=$1(e,r,t,0,null,!1,!1,"",u_);return t._reactRootContainer=o,t[Bn]=o.current,oa(t.nodeType===8?t.parentNode:t),Ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ju(u);a.call(c)}}var u=Dm(t,0,!1,null,null,!1,!1,"",u_);return t._reactRootContainer=u,t[Bn]=u.current,oa(t.nodeType===8?t.parentNode:t),Ei(function(){Wc(e,u,n,r)}),u}function Kc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ju(o);a.call(u)}}Wc(e,o,t,i)}else o=KC(n,e,t,i,r);return Ju(o)}_E=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ko(e.pendingLanes);n!==0&&(nm(e,n|1),Tt(e,Ne()),!(le&6)&&(Rs=Ne()+500,Gr()))}break;case 13:Ei(function(){var r=$n(t,1);if(r!==null){var i=mt();sn(r,t,1,i)}}),Lm(t,1)}};rm=function(t){if(t.tag===13){var e=$n(t,134217728);if(e!==null){var n=mt();sn(e,t,134217728,n)}Lm(t,134217728)}};wE=function(t){if(t.tag===13){var e=Cr(t),n=$n(t,e);if(n!==null){var r=mt();sn(n,t,e,r)}Lm(t,e)}};EE=function(){return fe};TE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};ud=function(t,e,n){switch(e){case"input":if(nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vc(r);if(!i)throw Error(z(90));Zw(r),nd(r,i)}}}break;case"textarea":tE(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};lE=bm;uE=Ei;var GC={usingClientEntryPoint:!1,Events:[Fa,Ji,Vc,oE,aE,bm]},To={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QC={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hE(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Oc=Ul.inject(QC),gn=Ul}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GC;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(z(200));return HC(t,e,null,n)};Dt.createRoot=function(t,e){if(!Vm(t))throw Error(z(299));var n=!1,r="",i=W1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dm(t,1,!1,null,null,n,!1,r,i),t[Bn]=e.current,oa(t.nodeType===8?t.parentNode:t),new Mm(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=hE(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Ei(t)};Dt.hydrate=function(t,e,n){if(!qc(e))throw Error(z(200));return Kc(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=W1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$1(e,null,t,1,n??null,i,!1,s,o),t[Bn]=e.current,oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Hc(e)};Dt.render=function(t,e,n){if(!qc(e))throw Error(z(200));return Kc(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!qc(t))throw Error(z(40));return t._reactRootContainer?(Ei(function(){Kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Bn]=null})}),!0):!1};Dt.unstable_batchedUpdates=bm;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!qc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Kc(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function H1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H1)}catch(t){console.error(t)}}H1(),Hw.exports=Dt;var YC=Hw.exports,c_=YC;Qh.createRoot=c_.createRoot,Qh.hydrateRoot=c_.hydrateRoot;var q1={exports:{}},K1={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=j;function XC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var JC=typeof Object.is=="function"?Object.is:XC,ZC=Ua.useSyncExternalStore,eP=Ua.useRef,tP=Ua.useEffect,nP=Ua.useMemo,rP=Ua.useDebugValue;K1.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=eP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=nP(function(){function u(g){if(!c){if(c=!0,f=g,g=r(g),i!==void 0&&o.hasValue){var w=o.value;if(i(w,g))return d=w}return d=g}if(w=d,JC(f,g))return w;var A=r(g);return i!==void 0&&i(w,A)?w:(f=g,d=A)}var c=!1,f,d,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var a=ZC(t,s[0],s[1]);return tP(function(){o.hasValue=!0,o.value=a},[a]),rP(a),a};q1.exports=K1;var iP=q1.exports,Pt="default"in Gh?La:Gh,f_=Symbol.for("react-redux-context"),h_=typeof globalThis<"u"?globalThis:{};function sP(){if(!Pt.createContext)return{};const t=h_[f_]??(h_[f_]=new Map);let e=t.get(Pt.createContext);return e||(e=Pt.createContext(null),t.set(Pt.createContext,e)),e}var Fr=sP(),oP=()=>{throw new Error("uSES not initialized!")};function Fm(t=Fr){return function(){return Pt.useContext(t)}}var G1=Fm(),Q1=oP,aP=t=>{Q1=t},lP=(t,e)=>t===e;function uP(t=Fr){const e=t===Fr?G1:Fm(t),n=(r,i={})=>{const{equalityFn:s=lP,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:f,identityFunctionCheck:d}=e();Pt.useRef(!0);const m=Pt.useCallback({[r.name](w){return r(w)}}[r.name],[r,f,o.stabilityCheck]),g=Q1(u.addNestedSub,a.getState,c||a.getState,m,s);return Pt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var jm=uP();function cP(t){t()}function fP(){let t=null,e=null;return{clear(){t=null,e=null},notify(){cP(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var d_={notify(){},get:()=>[]};function hP(t,e){let n,r=d_,i=0,s=!1;function o(A){f();const C=r.subscribe(A);let T=!1;return()=>{T||(T=!0,C(),d())}}function a(){r.notify()}function u(){w.onStateChange&&w.onStateChange()}function c(){return s}function f(){i++,n||(n=t.subscribe(u),r=fP())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=d_)}function m(){s||(s=!0,f())}function g(){s&&(s=!1,d())}const w={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:m,tryUnsubscribe:g,getListeners:()=>r};return w}var dP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pP=typeof navigator<"u"&&navigator.product==="ReactNative",mP=dP||pP?Pt.useLayoutEffect:Pt.useEffect;function gP({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=Pt.useMemo(()=>{const c=hP(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=Pt.useMemo(()=>t.getState(),[t]);mP(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||Fr;return Pt.createElement(u.Provider,{value:o},n)}var yP=gP;function Y1(t=Fr){const e=t===Fr?G1:Fm(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var vP=Y1();function _P(t=Fr){const e=t===Fr?vP:Y1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Um=_P();aP(iP.useSyncExternalStoreWithSelector);function Ke(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var wP=typeof Symbol=="function"&&Symbol.observable||"@@observable",p_=wP,Th=()=>Math.random().toString(36).substring(7).split("").join("."),EP={INIT:`@@redux/INIT${Th()}`,REPLACE:`@@redux/REPLACE${Th()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Th()}`},Zu=EP;function zm(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function X1(t,e,n){if(typeof t!="function")throw new Error(Ke(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ke(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ke(1));return n(X1)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((C,T)=>{o.set(T,C)}))}function f(){if(u)throw new Error(Ke(3));return i}function d(C){if(typeof C!="function")throw new Error(Ke(4));if(u)throw new Error(Ke(5));let T=!0;c();const _=a++;return o.set(_,C),function(){if(T){if(u)throw new Error(Ke(6));T=!1,c(),o.delete(_),s=null}}}function m(C){if(!zm(C))throw new Error(Ke(7));if(typeof C.type>"u")throw new Error(Ke(8));if(typeof C.type!="string")throw new Error(Ke(17));if(u)throw new Error(Ke(9));try{u=!0,i=r(i,C)}finally{u=!1}return(s=o).forEach(_=>{_()}),C}function g(C){if(typeof C!="function")throw new Error(Ke(10));r=C,m({type:Zu.REPLACE})}function w(){const C=d;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(Ke(11));function _(){const x=T;x.next&&x.next(f())}return _(),{unsubscribe:C(_)}},[p_](){return this}}}return m({type:Zu.INIT}),{dispatch:m,subscribe:d,getState:f,replaceReducer:g,[p_]:w}}function TP(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Zu.INIT})>"u")throw new Error(Ke(12));if(typeof n(void 0,{type:Zu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ke(13))})}function J1(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{TP(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let f=0;f<r.length;f++){const d=r[f],m=n[d],g=o[d],w=m(g,a);if(typeof w>"u")throw a&&a.type,new Error(Ke(14));c[d]=w,u=u||w!==g}return u=u||r.length!==Object.keys(o).length,u?c:o}}function ec(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function SP(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(Ke(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=ec(...a)(i.dispatch),{...i,dispatch:s}}}function IP(t){return zm(t)&&"type"in t&&typeof t.type=="string"}var Z1=Symbol.for("immer-nothing"),m_=Symbol.for("immer-draftable"),Nt=Symbol.for("immer-state");function Zt(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ks=Object.getPrototypeOf;function jr(t){return!!t&&!!t[Nt]}function Hn(t){var e;return t?eT(t)||Array.isArray(t)||!!t[m_]||!!((e=t.constructor)!=null&&e[m_])||Qc(t)||Yc(t):!1}var AP=Object.prototype.constructor.toString();function eT(t){if(!t||typeof t!="object")return!1;const e=ks(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===AP}function tc(t,e){Gc(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Gc(t){const e=t[Nt];return e?e.type_:Array.isArray(t)?1:Qc(t)?2:Yc(t)?3:0}function Bd(t,e){return Gc(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function tT(t,e,n){const r=Gc(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function RP(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Qc(t){return t instanceof Map}function Yc(t){return t instanceof Set}function ri(t){return t.copy_||t.base_}function $d(t,e){if(Qc(t))return new Map(t);if(Yc(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=eT(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Nt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(ks(t),r)}else{const r=ks(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Bm(t,e=!1){return Xc(t)||jr(t)||!Hn(t)||(Gc(t)>1&&(t.set=t.add=t.clear=t.delete=kP),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Bm(r,!0))),t}function kP(){Zt(2)}function Xc(t){return Object.isFrozen(t)}var CP={};function Ti(t){const e=CP[t];return e||Zt(0,t),e}var ma;function nT(){return ma}function PP(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function g_(t,e){e&&(Ti("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function Wd(t){Hd(t),t.drafts_.forEach(bP),t.drafts_=null}function Hd(t){t===ma&&(ma=t.parent_)}function y_(t){return ma=PP(ma,t)}function bP(t){const e=t[Nt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function v_(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Nt].modified_&&(Wd(e),Zt(4)),Hn(t)&&(t=nc(e,t),e.parent_||rc(e,t)),e.patches_&&Ti("Patches").generateReplacementPatches_(n[Nt].base_,t,e.patches_,e.inversePatches_)):t=nc(e,n,[]),Wd(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Z1?t:void 0}function nc(t,e,n){if(Xc(e))return e;const r=e[Nt];if(!r)return tc(e,(i,s)=>__(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return rc(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),tc(s,(a,u)=>__(t,r,i,a,u,n,o)),rc(t,i,!1),n&&t.patches_&&Ti("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function __(t,e,n,r,i,s,o){if(jr(i)){const a=s&&e&&e.type_!==3&&!Bd(e.assigned_,r)?s.concat(r):void 0,u=nc(t,i,a);if(tT(n,r,u),jr(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Hn(i)&&!Xc(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;nc(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&rc(t,i)}}function rc(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Bm(e,n)}function xP(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:nT(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=$m;n&&(i=[r],s=ga);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var $m={get(t,e){if(e===Nt)return t;const n=ri(t);if(!Bd(n,e))return NP(t,n,e);const r=n[e];return t.finalized_||!Hn(r)?r:r===Sh(t.base_,e)?(Ih(t),t.copy_[e]=Kd(r,t)):r},has(t,e){return e in ri(t)},ownKeys(t){return Reflect.ownKeys(ri(t))},set(t,e,n){const r=rT(ri(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Sh(ri(t),e),s=i==null?void 0:i[Nt];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(RP(n,i)&&(n!==void 0||Bd(t.base_,e)))return!0;Ih(t),qd(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Sh(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Ih(t),qd(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=ri(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Zt(11)},getPrototypeOf(t){return ks(t.base_)},setPrototypeOf(){Zt(12)}},ga={};tc($m,(t,e)=>{ga[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ga.deleteProperty=function(t,e){return ga.set.call(this,t,e,void 0)};ga.set=function(t,e,n){return $m.set.call(this,t[0],e,n,t[0])};function Sh(t,e){const n=t[Nt];return(n?ri(n):t)[e]}function NP(t,e,n){var i;const r=rT(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function rT(t,e){if(!(e in t))return;let n=ks(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ks(n)}}function qd(t){t.modified_||(t.modified_=!0,t.parent_&&qd(t.parent_))}function Ih(t){t.copy_||(t.copy_=$d(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var OP=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,f=>n.call(this,f,...c))}}typeof n!="function"&&Zt(6),r!==void 0&&typeof r!="function"&&Zt(7);let i;if(Hn(e)){const s=y_(this),o=Kd(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?Wd(s):Hd(s)}return g_(s,r),v_(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Z1&&(i=void 0),this.autoFreeze_&&Bm(i,!0),r){const s=[],o=[];Ti("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Zt(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Hn(t)||Zt(8),jr(t)&&(t=iT(t));const e=y_(this),n=Kd(t,void 0);return n[Nt].isManual_=!0,Hd(e),n}finishDraft(t,e){const n=t&&t[Nt];(!n||!n.isManual_)&&Zt(9);const{scope_:r}=n;return g_(r,e),v_(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Ti("Patches").applyPatches_;return jr(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Kd(t,e){const n=Qc(t)?Ti("MapSet").proxyMap_(t,e):Yc(t)?Ti("MapSet").proxySet_(t,e):xP(t,e);return(e?e.scope_:nT()).drafts_.push(n),n}function iT(t){return jr(t)||Zt(10,t),sT(t)}function sT(t){if(!Hn(t)||Xc(t))return t;const e=t[Nt];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=$d(t,e.scope_.immer_.useStrictShallowCopy_)}else n=$d(t,!0);return tc(n,(r,i)=>{tT(n,r,sT(i))}),e&&(e.finalized_=!1),n}var Ot=new OP,oT=Ot.produce;Ot.produceWithPatches.bind(Ot);Ot.setAutoFreeze.bind(Ot);Ot.setUseStrictShallowCopy.bind(Ot);Ot.applyPatches.bind(Ot);Ot.createDraft.bind(Ot);Ot.finishDraft.bind(Ot);function DP(t,e=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(e)}function LP(t,e=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(e)}function MP(t,e="expected all items to be functions, instead received the following types: "){if(!t.every(n=>typeof n=="function")){const n=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${n}]`)}}var w_=t=>Array.isArray(t)?t:[t];function VP(t){const e=Array.isArray(t[0])?t[0]:t;return MP(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function FP(t,e){const n=[],{length:r}=t;for(let i=0;i<r;i++)n.push(t[i].apply(null,e));return n}var jP=class{constructor(t){this.value=t}deref(){return this.value}},UP=typeof WeakRef<"u"?WeakRef:jP,zP=0,E_=1;function zl(){return{s:zP,v:void 0,o:null,p:null}}function Wm(t,e={}){let n=zl();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var d;let a=n;const{length:u}=arguments;for(let m=0,g=u;m<g;m++){const w=arguments[m];if(typeof w=="function"||typeof w=="object"&&w!==null){let A=a.o;A===null&&(a.o=A=new WeakMap);const C=A.get(w);C===void 0?(a=zl(),A.set(w,a)):a=C}else{let A=a.p;A===null&&(a.p=A=new Map);const C=A.get(w);C===void 0?(a=zl(),A.set(w,a)):a=C}}const c=a;let f;if(a.s===E_)f=a.v;else if(f=t.apply(null,arguments),s++,r){const m=((d=i==null?void 0:i.deref)==null?void 0:d.call(i))??i;m!=null&&r(m,f)&&(f=m,s!==0&&s--),i=typeof f=="object"&&f!==null||typeof f=="function"?new UP(f):f}return c.s=E_,c.v=f,f}return o.clearCache=()=>{n=zl(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function aT(t,...e){const n=typeof t=="function"?{memoize:t,memoizeOptions:e}:t,r=(...i)=>{let s=0,o=0,a,u={},c=i.pop();typeof c=="object"&&(u=c,c=i.pop()),DP(c,`createSelector expects an output function after the inputs, but received: [${typeof c}]`);const f={...n,...u},{memoize:d,memoizeOptions:m=[],argsMemoize:g=Wm,argsMemoizeOptions:w=[],devModeChecks:A={}}=f,C=w_(m),T=w_(w),_=VP(i),E=d(function(){return s++,c.apply(null,arguments)},...C),x=g(function(){o++;const V=FP(_,arguments);return a=E.apply(null,V),a},...T);return Object.assign(x,{resultFunc:c,memoizedResultFunc:E,dependencies:_,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>a,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:d,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var BP=aT(Wm),$P=Object.assign((t,e=BP)=>{LP(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const n=Object.keys(t),r=n.map(s=>t[s]);return e(r,(...s)=>s.reduce((o,a,u)=>(o[n[u]]=a,o),{}))},{withTypes:()=>$P});function lT(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var WP=lT(),HP=lT,qP=(...t)=>{const e=aT(...t),n=Object.assign((...r)=>{const i=e(...r),s=(o,...a)=>i(jr(o)?iT(o):o,...a);return Object.assign(s,i),s},{withTypes:()=>n});return n};qP(Wm);var KP=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ec:ec.apply(null,arguments)},GP=t=>t&&typeof t.match=="function";function Fn(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(St(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>IP(r)&&r.type===t,n}var uT=class Po extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Po.prototype)}static get[Symbol.species](){return Po}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Po(...e[0].concat(this)):new Po(...e.concat(this))}};function T_(t){return Hn(t)?oT(t,()=>{}):t}function S_(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(St(10));const r=n.insert(e,t);return t.set(e,r),r}function QP(t){return typeof t=="boolean"}var YP=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new uT;return n&&(QP(n)?o.push(WP):o.push(HP(n.extraArgument))),o},XP="RTK_autoBatch",cT=t=>e=>{setTimeout(e,t)},JP=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:cT(10),ZP=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?JP:t.type==="callback"?t.queueNotification:cT(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(f=>f()))};return Object.assign({},r,{subscribe(f){const d=()=>i&&f(),m=r.subscribe(d);return a.add(f),()=>{m(),a.delete(f)}},dispatch(f){var d;try{return i=!((d=f==null?void 0:f.meta)!=null&&d[XP]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(f)}finally{i=!0}}})},eb=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new uT(t);return r&&i.push(ZP(typeof r=="object"?r:void 0)),i},tb=!0;function nb(t){const e=YP(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(zm(n))a=J1(n);else throw new Error(St(1));let u;typeof r=="function"?u=r(e):u=e();let c=ec;i&&(c=KP({trace:!tb,...typeof i=="object"&&i}));const f=SP(...u),d=eb(f);let m=typeof o=="function"?o(d):d();const g=c(...m);return X1(a,s,g)}function fT(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(St(28));if(a in e)throw new Error(St(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function rb(t){return typeof t=="function"}function ib(t,e){let[n,r,i]=fT(e),s;if(rb(t))s=()=>T_(t());else{const a=T_(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:f})=>f(u)).map(({reducer:f})=>f)];return c.filter(f=>!!f).length===0&&(c=[i]),c.reduce((f,d)=>{if(d)if(jr(f)){const g=d(f,u);return g===void 0?f:g}else{if(Hn(f))return oT(f,m=>d(m,u));{const m=d(f,u);if(m===void 0){if(f===null)return f;throw new Error(St(9))}return m}}return f},a)}return o.getInitialState=s,o}var sb="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",hT=(t=21)=>{let e="",n=t;for(;n--;)e+=sb[Math.random()*64|0];return e},ob=(t,e)=>GP(t)?t.match(e):t(e);function ab(...t){return e=>t.some(n=>ob(n,e))}var lb=["name","message","stack","code"],Ah=class{constructor(t,e){Qf(this,"_type");this.payload=t,this.meta=e}},I_=class{constructor(t,e){Qf(this,"_type");this.payload=t,this.meta=e}},ub=t=>{if(typeof t=="object"&&t!==null){const e={};for(const n of lb)typeof t[n]=="string"&&(e[n]=t[n]);return e}return{message:String(t)}},cb=(()=>{function t(e,n,r){const i=Fn(e+"/fulfilled",(u,c,f,d)=>({payload:u,meta:{...d||{},arg:f,requestId:c,requestStatus:"fulfilled"}})),s=Fn(e+"/pending",(u,c,f)=>({payload:void 0,meta:{...f||{},arg:c,requestId:u,requestStatus:"pending"}})),o=Fn(e+"/rejected",(u,c,f,d,m)=>({payload:d,error:(r&&r.serializeError||ub)(u||"Rejected"),meta:{...m||{},arg:f,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function a(u){return(c,f,d)=>{const m=r!=null&&r.idGenerator?r.idGenerator(u):hT(),g=new AbortController;let w,A;function C(_){A=_,g.abort()}const T=async function(){var x,M;let _;try{let V=(x=r==null?void 0:r.condition)==null?void 0:x.call(r,u,{getState:f,extra:d});if(hb(V)&&(V=await V),V===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const S=new Promise((y,I)=>{w=()=>{I({name:"AbortError",message:A||"Aborted"})},g.signal.addEventListener("abort",w)});c(s(m,u,(M=r==null?void 0:r.getPendingMeta)==null?void 0:M.call(r,{requestId:m,arg:u},{getState:f,extra:d}))),_=await Promise.race([S,Promise.resolve(n(u,{dispatch:c,getState:f,extra:d,requestId:m,signal:g.signal,abort:C,rejectWithValue:(y,I)=>new Ah(y,I),fulfillWithValue:(y,I)=>new I_(y,I)})).then(y=>{if(y instanceof Ah)throw y;return y instanceof I_?i(y.payload,m,u,y.meta):i(y,m,u)})])}catch(V){_=V instanceof Ah?o(null,m,u,V.payload,V.meta):o(V,m,u)}finally{w&&g.signal.removeEventListener("abort",w)}return r&&!r.dispatchConditionRejection&&o.match(_)&&_.meta.condition||c(_),_}();return Object.assign(T,{abort:C,requestId:m,arg:u,unwrap(){return T.then(fb)}})}}return Object.assign(a,{pending:s,rejected:o,fulfilled:i,settled:ab(o,i),typePrefix:e})}return t.withTypes=()=>t,t})();function fb(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function hb(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var db=Symbol.for("rtk-slice-createasyncthunk");function pb(t,e){return`${t}/${e}`}function mb({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[db];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(St(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(yb()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(E,x){const M=typeof E=="string"?E:E.type;if(!M)throw new Error(St(12));if(M in c.sliceCaseReducersByType)throw new Error(St(13));return c.sliceCaseReducersByType[M]=x,f},addMatcher(E,x){return c.sliceMatchers.push({matcher:E,reducer:x}),f},exposeAction(E,x){return c.actionCreators[E]=x,f},exposeCaseReducer(E,x){return c.sliceCaseReducersByName[E]=x,f}};u.forEach(E=>{const x=a[E],M={reducerName:E,type:pb(s,E),createNotation:typeof i.reducers=="function"};_b(x)?Eb(M,x,f,e):vb(M,x,f)});function d(){const[E={},x=[],M=void 0]=typeof i.extraReducers=="function"?fT(i.extraReducers):[i.extraReducers],V={...E,...c.sliceCaseReducersByType};return ib(i.initialState,S=>{for(let y in V)S.addCase(y,V[y]);for(let y of c.sliceMatchers)S.addMatcher(y.matcher,y.reducer);for(let y of x)S.addMatcher(y.matcher,y.reducer);M&&S.addDefaultCase(M)})}const m=E=>E,g=new Map;let w;function A(E,x){return w||(w=d()),w(E,x)}function C(){return w||(w=d()),w.getInitialState()}function T(E,x=!1){function M(S){let y=S[E];return typeof y>"u"&&x&&(y=C()),y}function V(S=m){const y=S_(g,x,{insert:()=>new WeakMap});return S_(y,S,{insert:()=>{const I={};for(const[R,P]of Object.entries(i.selectors??{}))I[R]=gb(P,S,C,x);return I}})}return{reducerPath:E,getSelectors:V,get selectors(){return V(M)},selectSlice:M}}const _={name:s,reducer:A,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:C,...T(o),injectInto(E,{reducerPath:x,...M}={}){const V=x??o;return E.inject({reducerPath:V,reducer:A},M),{..._,...T(V,!0)}}};return _}}function gb(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var Hm=mb();function yb(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function vb({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!wb(r))throw new Error(St(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Fn(t,o):Fn(t))}function _b(t){return t._reducerDefinitionType==="asyncThunk"}function wb(t){return t._reducerDefinitionType==="reducerWithPrepare"}function Eb({type:t,reducerName:e},n,r,i){if(!i)throw new Error(St(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:f}=n,d=i(t,s,f);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),u&&r.addCase(d.rejected,u),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(e,{fulfilled:o||Bl,pending:a||Bl,rejected:u||Bl,settled:c||Bl})}function Bl(){}var Tb=(t,e)=>{if(typeof t!="function")throw new Error(St(32))},qm="listenerMiddleware",Sb=t=>{let{type:e,actionCreator:n,matcher:r,predicate:i,effect:s}=t;if(e)i=Fn(e).match;else if(n)e=n.type,i=n.match;else if(r)i=r;else if(!i)throw new Error(St(21));return Tb(s),{predicate:i,type:e,effect:s}},Ib=Object.assign(t=>{const{type:e,predicate:n,effect:r}=Sb(t);return{id:hT(),effect:r,type:e,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(St(22))}}},{withTypes:()=>Ib}),Ab=Object.assign(Fn(`${qm}/add`),{withTypes:()=>Ab});Fn(`${qm}/removeAll`);var Rb=Object.assign(Fn(`${qm}/remove`),{withTypes:()=>Rb});function St(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const kb={name:"",email:"",address:"",isAdmin:!1},dT=Hm({name:"user",initialState:kb,reducers:{setUserDetails:(t,{payload:e})=>{Object.assign(t,e)}}}),{setUserDetails:Cb}=dT.actions,Pb=dT.reducer;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ya.apply(this,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const A_="popstate";function bb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Gd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ic(i)}return Nb(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function pT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xb(){return Math.random().toString(36).substr(2,8)}function R_(t,e){return{usr:t.state,key:t.key,idx:e}}function Gd(t,e,n,r){return n===void 0&&(n=null),ya({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||r||xb()})}function ic(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Nb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(ya({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=wr.Pop;let C=f(),T=C==null?null:C-c;c=C,u&&u({action:a,location:A.location,delta:T})}function m(C,T){a=wr.Push;let _=Gd(A.location,C,T);c=f()+1;let E=R_(_,c),x=A.createHref(_);try{o.pushState(E,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(x)}s&&u&&u({action:a,location:A.location,delta:1})}function g(C,T){a=wr.Replace;let _=Gd(A.location,C,T);c=f();let E=R_(_,c),x=A.createHref(_);o.replaceState(E,"",x),s&&u&&u({action:a,location:A.location,delta:0})}function w(C){let T=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof C=="string"?C:ic(C);return _=_.replace(/ $/,"%20"),Fe(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let A={get action(){return a},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(A_,d),u=C,()=>{i.removeEventListener(A_,d),u=null}},createHref(C){return e(i,C)},createURL:w,encodeLocation(C){let T=w(C);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:g,go(C){return o.go(C)}};return A}var k_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(k_||(k_={}));function Ob(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zs(e):e,i=Km(r.pathname||"/",n);if(i==null)return null;let s=mT(t);Db(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let u=qb(i);o=$b(s[a],u)}return o}function mT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=br([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),mT(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:zb(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of gT(s.path))i(s,o,u)}),e}function gT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=gT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Db(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Bb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lb=/^:[\w-]+$/,Mb=3,Vb=2,Fb=1,jb=10,Ub=-2,C_=t=>t==="*";function zb(t,e){let n=t.split("/"),r=n.length;return n.some(C_)&&(r+=Ub),e&&(r+=Vb),n.filter(i=>!C_(i)).reduce((i,s)=>i+(Lb.test(s)?Mb:s===""?Fb:jb),r)}function Bb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $b(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",f=Wb({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!f)return null;Object.assign(r,f.params);let d=a.route;s.push({params:r,pathname:br([i,f.pathname]),pathnameBase:Yb(br([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=br([i,f.pathnameBase]))}return s}function Wb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Hb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,f,d)=>{let{paramName:m,isOptional:g}=f;if(m==="*"){let A=a[d]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const w=a[d];return g&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Hb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),pT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return pT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Km(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Kb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:Gb(n,e):e,search:Xb(r),hash:Jb(i)}}function Gb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yT(t,e){let n=Qb(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=zs(t):(i=ya({},t),Fe(!i.pathname||!i.pathname.includes("?"),Rh("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),Rh("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),Rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?e[d]:"/"}let u=Kb(i,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const br=t=>t.join("/").replace(/\/\/+/g,"/"),Yb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Jb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Zb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _T=["post","put","patch","delete"];new Set(_T);const ex=["get",..._T];new Set(ex);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},va.apply(this,arguments)}const Gm=j.createContext(null),tx=j.createContext(null),Li=j.createContext(null),Jc=j.createContext(null),Qr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),wT=j.createContext(null);function nx(t,e){let{relative:n}=e===void 0?{}:e;za()||Fe(!1);let{basename:r,navigator:i}=j.useContext(Li),{hash:s,pathname:o,search:a}=TT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:br([r,o])),i.createHref({pathname:u,search:a,hash:s})}function za(){return j.useContext(Jc)!=null}function Bs(){return za()||Fe(!1),j.useContext(Jc).location}function ET(t){j.useContext(Li).static||j.useLayoutEffect(t)}function Ba(){let{isDataRoute:t}=j.useContext(Qr);return t?yx():rx()}function rx(){za()||Fe(!1);let t=j.useContext(Gm),{basename:e,future:n,navigator:r}=j.useContext(Li),{matches:i}=j.useContext(Qr),{pathname:s}=Bs(),o=JSON.stringify(yT(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return ET(()=>{a.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=vT(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:br([e,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[e,r,o,s,t])}const ix=j.createContext(null);function sx(t){let e=j.useContext(Qr).outlet;return e&&j.createElement(ix.Provider,{value:t},e)}function TT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Li),{matches:i}=j.useContext(Qr),{pathname:s}=Bs(),o=JSON.stringify(yT(i,r.v7_relativeSplatPath));return j.useMemo(()=>vT(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ox(t,e){return ax(t,e)}function ax(t,e,n,r){za()||Fe(!1);let{navigator:i}=j.useContext(Li),{matches:s}=j.useContext(Qr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Bs(),f;if(e){var d;let C=typeof e=="string"?zs(e):e;u==="/"||(d=C.pathname)!=null&&d.startsWith(u)||Fe(!1),f=C}else f=c;let m=f.pathname||"/",g=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=Ob(t,{pathname:g}),A=hx(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:br([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:br([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&A?j.createElement(Jc.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:wr.Pop}},A):A}function lx(){let t=gx(),e=Zb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const ux=j.createElement(lx,null);class cx extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Qr.Provider,{value:this.props.routeContext},j.createElement(wT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fx(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Gm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Qr.Provider,{value:e},r)}function hx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||Fe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:m,errors:g}=n,w=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||w){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,m)=>{let g,w=!1,A=null,C=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,A=d.route.errorElement||ux,u&&(c<0&&m===0?(w=!0,C=null):c===m&&(w=!0,C=d.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),_=()=>{let E;return g?E=A:w?E=C:d.route.Component?E=j.createElement(d.route.Component,null):d.route.element?E=d.route.element:E=f,j.createElement(fx,{match:d,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:E})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?j.createElement(cx,{location:n.location,revalidation:n.revalidation,component:A,error:g,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var ST=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ST||{}),sc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sc||{});function dx(t){let e=j.useContext(Gm);return e||Fe(!1),e}function px(t){let e=j.useContext(tx);return e||Fe(!1),e}function mx(t){let e=j.useContext(Qr);return e||Fe(!1),e}function IT(t){let e=mx(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function gx(){var t;let e=j.useContext(wT),n=px(sc.UseRouteError),r=IT(sc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function yx(){let{router:t}=dx(ST.UseNavigateStable),e=IT(sc.UseNavigateStable),n=j.useRef(!1);return ET(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,va({fromRouteId:e},s)))},[t,e])}function vx(t){return sx(t.context)}function ii(t){Fe(!1)}function _x(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:a}=t;za()&&Fe(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=zs(r));let{pathname:f="/",search:d="",hash:m="",state:g=null,key:w="default"}=r,A=j.useMemo(()=>{let C=Km(f,u);return C==null?null:{location:{pathname:C,search:d,hash:m,state:g,key:w},navigationType:i}},[u,f,d,m,g,w,i]);return A==null?null:j.createElement(Li.Provider,{value:c},j.createElement(Jc.Provider,{children:n,value:A}))}function wx(t){let{children:e,location:n}=t;return ox(Qd(e),n)}new Promise(()=>{});function Qd(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Qd(r.props.children,s));return}r.type!==ii&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yd(){return Yd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yd.apply(this,arguments)}function Ex(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Tx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Sx(t,e){return t.button===0&&(!e||e==="_self")&&!Tx(t)}const Ix=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ax="6";try{window.__reactRouterVersion=Ax}catch{}const Rx="startTransition",P_=Gh[Rx];function kx(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=bb({window:i,v5Compat:!0}));let o=s.current,[a,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=j.useCallback(d=>{c&&P_?P_(()=>u(d)):u(d)},[u,c]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.createElement(_x,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Cx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Px=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cs=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:f,unstable_viewTransition:d}=e,m=Ex(e,Ix),{basename:g}=j.useContext(Li),w,A=!1;if(typeof c=="string"&&Px.test(c)&&(w=c,Cx))try{let E=new URL(window.location.href),x=c.startsWith("//")?new URL(E.protocol+c):new URL(c),M=Km(x.pathname,g);x.origin===E.origin&&M!=null?c=M+x.search+x.hash:A=!0}catch{}let C=nx(c,{relative:i}),T=bx(c,{replace:o,state:a,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:d});function _(E){r&&r(E),E.defaultPrevented||T(E)}return j.createElement("a",Yd({},m,{href:w||C,onClick:A||s?r:_,ref:n,target:u}))});var b_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(b_||(b_={}));var x_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(x_||(x_={}));function bx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=Ba(),c=Bs(),f=TT(t,{relative:o});return j.useCallback(d=>{if(Sx(d,n)){d.preventDefault();let m=r!==void 0?r:ic(c)===ic(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,u,f,r,i,n,t,s,o,a])}var N_={};/**
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
 */const AT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},RT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,d=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;u||(g=64,o||(m=64)),r.push(n[f],n[d],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(AT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new Nx;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const w=c<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ox=function(t){const e=AT(t);return RT.encodeByteArray(e,!0)},oc=function(t){return Ox(t).replace(/\./g,"")},kT=function(t){try{return RT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lx=()=>Dx().__FIREBASE_DEFAULTS__,Mx=()=>{if(typeof process>"u"||typeof N_>"u")return;const t=N_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kT(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return Lx()||Mx()||Vx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CT=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fx=t=>{const e=CT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},PT=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},bT=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ux(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oc(JSON.stringify(n)),oc(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function Bx(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $x(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hx(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qx(){return!Bx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kx(){try{return typeof indexedDB=="object"}catch{return!1}}function Gx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qx="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qx,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function Yx(t,e){return t.replace(Xx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xx=/\{\$([^}]+)}/g;function Jx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ac(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(O_(s)&&O_(o)){if(!ac(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function O_(t){return t!==null&&typeof t=="object"}/**
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
 */function Wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zx(t,e){const n=new eN(t,e);return n.subscribe.bind(n)}class eN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kh),i.error===void 0&&(i.error=kh),i.complete===void 0&&(i.complete=kh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kh(){}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const si="[DEFAULT]";/**
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
 */class nN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iN(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rN(t){return t===si?void 0:t}function iN(t){return t.instantiationMode==="EAGER"}/**
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
 */class sN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const oN={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},aN=oe.INFO,lN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},uN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qm{constructor(e){this.name=e,this._logLevel=aN,this._logHandler=uN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const cN=(t,e)=>e.some(n=>t instanceof n);let D_,L_;function fN(){return D_||(D_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hN(){return L_||(L_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xT=new WeakMap,Xd=new WeakMap,NT=new WeakMap,Ch=new WeakMap,Ym=new WeakMap;function dN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xT.set(n,t)}).catch(()=>{}),Ym.set(e,t),e}function pN(t){if(Xd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Xd.set(t,e)}let Jd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||NT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mN(t){Jd=t(Jd)}function gN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ph(this),e,...n);return NT.set(r,e.sort?e.sort():[e]),xr(r)}:hN().includes(t)?function(...e){return t.apply(Ph(this),e),xr(xT.get(this))}:function(...e){return xr(t.apply(Ph(this),e))}}function yN(t){return typeof t=="function"?gN(t):(t instanceof IDBTransaction&&pN(t),cN(t,fN())?new Proxy(t,Jd):t)}function xr(t){if(t instanceof IDBRequest)return dN(t);if(Ch.has(t))return Ch.get(t);const e=yN(t);return e!==t&&(Ch.set(t,e),Ym.set(e,t)),e}const Ph=t=>Ym.get(t);function vN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xr(o.result),u.oldVersion,u.newVersion,xr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _N=["get","getKey","getAll","getAllKeys","count"],wN=["put","add","delete","clear"],bh=new Map;function M_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_N.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return bh.set(e,s),s}mN(t=>({...t,get:(e,n,r)=>M_(e,n)||t.get(e,n,r),has:(e,n)=>!!M_(e,n)||t.has(e,n)}));/**
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
 */class EN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",V_="0.10.5";/**
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
 */const Ii=new Qm("@firebase/app"),SN="@firebase/app-compat",IN="@firebase/analytics-compat",AN="@firebase/analytics",RN="@firebase/app-check-compat",kN="@firebase/app-check",CN="@firebase/auth",PN="@firebase/auth-compat",bN="@firebase/database",xN="@firebase/database-compat",NN="@firebase/functions",ON="@firebase/functions-compat",DN="@firebase/installations",LN="@firebase/installations-compat",MN="@firebase/messaging",VN="@firebase/messaging-compat",FN="@firebase/performance",jN="@firebase/performance-compat",UN="@firebase/remote-config",zN="@firebase/remote-config-compat",BN="@firebase/storage",$N="@firebase/storage-compat",WN="@firebase/firestore",HN="@firebase/vertexai-preview",qN="@firebase/firestore-compat",KN="firebase",GN="10.12.2";/**
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
 */const ep="[DEFAULT]",QN={[Zd]:"fire-core",[SN]:"fire-core-compat",[AN]:"fire-analytics",[IN]:"fire-analytics-compat",[kN]:"fire-app-check",[RN]:"fire-app-check-compat",[CN]:"fire-auth",[PN]:"fire-auth-compat",[bN]:"fire-rtdb",[xN]:"fire-rtdb-compat",[NN]:"fire-fn",[ON]:"fire-fn-compat",[DN]:"fire-iid",[LN]:"fire-iid-compat",[MN]:"fire-fcm",[VN]:"fire-fcm-compat",[FN]:"fire-perf",[jN]:"fire-perf-compat",[UN]:"fire-rc",[zN]:"fire-rc-compat",[BN]:"fire-gcs",[$N]:"fire-gcs-compat",[WN]:"fire-fst",[qN]:"fire-fst-compat",[HN]:"fire-vertex","fire-js":"fire-js",[KN]:"fire-js-all"};/**
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
 */const lc=new Map,YN=new Map,tp=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(n){Ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(tp.has(e))return Ii.debug(`There were multiple attempts to register component ${e}.`),!1;tp.set(e,t);for(const n of lc.values())F_(n,t);for(const n of YN.values())F_(n,t);return!0}function Xm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t.settings!==void 0}/**
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
 */const XN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new $a("app","Firebase",XN);/**
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
 */class JN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=GN;function OT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ep,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=PT()),!n)throw Nr.create("no-options");const s=lc.get(i);if(s){if(ac(n,s.options)&&ac(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new sN(i);for(const u of tp.values())o.addComponent(u);const a=new JN(n,r,o);return lc.set(i,a),a}function DT(t=ep){const e=lc.get(t);if(!e&&t===ep&&PT())return OT();if(!e)throw Nr.create("no-app",{appName:t});return e}function Or(t,e,n){var r;let i=(r=QN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ii.warn(a.join(" "));return}Ps(new Si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZN="firebase-heartbeat-database",e2=1,_a="firebase-heartbeat-store";let xh=null;function LT(){return xh||(xh=vN(ZN,e2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),xh}async function t2(t){try{const n=(await LT()).transaction(_a),r=await n.objectStore(_a).get(MT(t));return await n.done,r}catch(e){if(e instanceof Zn)Ii.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ii.warn(n.message)}}}async function j_(t,e){try{const r=(await LT()).transaction(_a,"readwrite");await r.objectStore(_a).put(e,MT(t)),await r.done}catch(n){if(n instanceof Zn)Ii.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ii.warn(r.message)}}}function MT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const n2=1024,r2=30*24*60*60*1e3;class i2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=U_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=r2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U_(),{heartbeatsToSend:r,unsentEntries:i}=s2(this._heartbeatsCache.heartbeats),s=oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function U_(){return new Date().toISOString().substring(0,10)}function s2(t,e=n2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),z_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class o2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kx()?Gx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await t2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function z_(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function a2(t){Ps(new Si("platform-logger",e=>new EN(e),"PRIVATE")),Ps(new Si("heartbeat",e=>new i2(e),"PRIVATE")),Or(Zd,V_,t),Or(Zd,V_,"esm2017"),Or("fire-js","")}a2("");var l2="firebase",u2="10.12.2";/**
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
 */Or(l2,u2,"app");function Jm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function VT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c2=VT,FT=new $a("auth","Firebase",VT());/**
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
 */const uc=new Qm("@firebase/auth");function f2(t,...e){uc.logLevel<=oe.WARN&&uc.warn(`Auth (${$s}): ${t}`,...e)}function gu(t,...e){uc.logLevel<=oe.ERROR&&uc.error(`Auth (${$s}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw eg(t,...e)}function on(t,...e){return eg(t,...e)}function Zm(t,e,n){const r=Object.assign(Object.assign({},c2()),{[e]:n});return new $a("auth","Firebase",r).create(e,{appName:t.name})}function jn(t){return Zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function h2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),Zm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FT.create(t,...e)}function Y(t,e,...n){if(!t)throw eg(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gu(e),new Error(e)}function qn(t,e){t||Dn(e)}/**
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
 */function np(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function d2(){return B_()==="http:"||B_()==="https:"}function B_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function p2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d2()||$x()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=zx()||Wx()}get(){return p2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tg(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const y2=new Ha(3e4,6e4);function er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return UT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),jT.fetch()(zT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function UT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g2),e);try{const i=new _2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $l(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $l(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $l(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $l(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zm(t,f,c);Kt(t,f)}}catch(i){if(i instanceof Zn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function qa(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`}function v2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),y2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $l(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function $_(t){return t!==void 0&&t.enterprise!==void 0}class w2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return v2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function E2(t,e){return tr(t,"GET","/v2/recaptchaConfig",er(t,e))}/**
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
 */async function T2(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function BT(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ho(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S2(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=ng(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ho(Nh(i.auth_time)),issuedAtTime:Ho(Nh(i.iat)),expirationTime:Ho(Nh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nh(t){return Number(t)*1e3}function ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const i=kT(n);return i?JSON.parse(i):(gu("Failed to decode base64 JWT payload"),null)}catch(i){return gu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function W_(t){const e=ng(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&I2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function I2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class A2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ho(this.lastLoginAt),this.creationTime=Ho(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wa(t,BT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$T(s.providerUserInfo):[],a=k2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=u?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rp(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function R2(t){const e=At(t);await cc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function k2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $T(t){return t.map(e=>{var{providerId:n}=e,r=Jm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function C2(t,e){const n=await UT(t,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function P2(t,e){return tr(t,"POST","/v2/accounts:revokeToken",er(t,e))}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):W_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=W_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await C2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ms;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function lr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wa(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S2(this,e)}reload(){return R2(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(jn(this.auth));const e=await this.getIdToken();return await wa(this,T2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:x,isAnonymous:M,providerData:V,stsTokenManager:S}=n;Y(E&&S,e,"internal-error");const y=ms.fromJSON(this.name,S);Y(typeof E=="string",e,"internal-error"),lr(d,e.name),lr(m,e.name),Y(typeof x=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),lr(g,e.name),lr(w,e.name),lr(A,e.name),lr(C,e.name),lr(T,e.name),lr(_,e.name);const I=new Ln({uid:E,auth:e,email:m,emailVerified:x,displayName:d,isAnonymous:M,photoURL:w,phoneNumber:g,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:_});return V&&Array.isArray(V)&&(I.providerData=V.map(R=>Object.assign({},R))),C&&(I._redirectEventId=C),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new ms;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$T(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ms;a.updateFromIdToken(r);const u=new Ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const H_=new Map;function Mn(t){qn(t instanceof Function,"Expected a class definition");let e=H_.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,H_.set(t,e),e)}/**
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
 */class WT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WT.type="NONE";const q_=WT;/**
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
 */function yu(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(Mn(q_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mn(q_);const o=yu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const d=Ln._fromJSON(e,f);c!==s&&(a=d),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new gs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new gs(s,e,r))}}/**
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
 */function K_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(KT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(HT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QT(e))return"Blackberry";if(YT(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||qT(e))&&!e.includes("edge/"))return"Chrome";if(GT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function HT(t=et()){return/firefox\//i.test(t)}function rg(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qT(t=et()){return/crios\//i.test(t)}function KT(t=et()){return/iemobile/i.test(t)}function GT(t=et()){return/android/i.test(t)}function QT(t=et()){return/blackberry/i.test(t)}function YT(t=et()){return/webos/i.test(t)}function ef(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b2(t=et()){var e;return ef(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function x2(){return Hx()&&document.documentMode===10}function XT(t=et()){return ef(t)||GT(t)||YT(t)||QT(t)||/windows phone/i.test(t)||KT(t)}function N2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function JT(t,e=[]){let n;switch(t){case"Browser":n=K_(et());break;case"Worker":n=`${K_(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
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
 */class O2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function D2(t,e={}){return tr(t,"GET","/v2/passwordPolicy",er(t,e))}/**
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
 */const L2=6;class M2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:L2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class V2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G_(this),this.idTokenSubscription=new G_(this),this.beforeStateQueue=new O2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await BT(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(jn(this));const n=e?At(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D2(this),n=new M2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await P2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&f2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return At(t)}class G_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zx(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function F2(t){tf=t}function ZT(t){return tf.loadJS(t)}function j2(){return tf.recaptchaEnterpriseScript}function U2(){return tf.gapiScript}function z2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const B2="recaptcha-enterprise",$2="NO_RECAPTCHA";class W2{constructor(e){this.type=B2,this.auth=nr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{E2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new w2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;$_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o($2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=j2();u.length!==0&&(u+=a),ZT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Q_(t,e,n,r=!1){const i=new W2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Q_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Q_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function H2(t,e){const n=Xm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ac(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function q2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K2(t,e,n){const r=nr(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=eS(e),{host:o,port:a}=G2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Q2()}function eS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function G2(t){const e=eS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Y_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Y_(o)}}}function Y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function Y2(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function X2(t,e){return qa(t,"POST","/v1/accounts:signInWithPassword",er(t,e))}async function J2(t,e){return tr(t,"POST","/v1/accounts:sendOobCode",er(t,e))}async function Z2(t,e){return J2(t,e)}/**
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
 */async function eO(t,e){return qa(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}async function tO(t,e){return qa(t,"POST","/v1/accounts:signInWithEmailLink",er(t,e))}/**
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
 */class Ea extends ig{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,n,"signInWithPassword",X2);case"emailLink":return eO(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,r,"signUpPassword",Y2);case"emailLink":return tO(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return qa(t,"POST","/v1/accounts:signInWithIdp",er(t,e))}/**
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
 */const nO="http://localhost";class Ai extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ai(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:nO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wa(n)}return e}}/**
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
 */function rO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iO(t){const e=bo(xo(t)).link,n=e?bo(xo(e)).deep_link_id:null,r=bo(xo(t)).deep_link_id;return(r?bo(xo(r)).link:null)||r||n||e||t}class sg{constructor(e){var n,r,i,s,o,a;const u=bo(xo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,d=rO((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&f&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=iO(e);try{return new sg(n)}catch{return null}}}/**
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
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sg.parseLink(n);return Y(r,"argument-error"),Ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class og{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends og{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mr extends Ka{constructor(){super("facebook.com")}static credential(e){return Ai._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
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
 */class xn extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ai._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class gr extends Ka{constructor(){super("github.com")}static credential(e){return Ai._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class yr extends Ka{constructor(){super("twitter.com")}static credential(e,n){return Ai._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */async function sO(t,e){return qa(t,"POST","/v1/accounts:signUp",er(t,e))}/**
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
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=X_(r);return new Ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=X_(r);return new Ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function X_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hc extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hc(e,n,r,i)}}function tS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(t,s,e,r):s})}async function oO(t,e,n=!1){const r=await wa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ri._forOperation(t,"link",r)}/**
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
 */async function aO(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const s=await wa(t,tS(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=ng(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function nS(t,e,n=!1){if(en(t.app))return Promise.reject(jn(t));const r="signIn",i=await tS(t,r,e),s=await Ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function lO(t,e){return nS(nr(t),e)}/**
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
 */async function rS(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uO(t,e,n){const r=nr(t);await fc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Z2)}async function cO(t,e,n){if(en(t.app))return Promise.reject(jn(t));const r=nr(t),o=await fc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sO).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rS(t),u}),a=await Ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function fO(t,e,n){return en(t.app)?Promise.reject(jn(t)):lO(At(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rS(t),r})}function hO(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function dO(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function pO(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}const dc="__sak";/**
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
 */class iS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mO(){const t=et();return rg(t)||ef(t)}const gO=1e3,yO=10;class sS extends iS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mO()&&N2(),this.fallbackToPolling=XT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);x2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sS.type="LOCAL";const vO=sS;/**
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
 */class oS extends iS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oS.type="SESSION";const aS=oS;/**
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
 */function _O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await _O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nf.receivers=[];/**
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
 */function ag(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=ag("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function EO(t){vn().location.href=t}/**
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
 */function lS(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function TO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IO(){return lS()?self:null}/**
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
 */const uS="firebaseLocalStorageDb",AO=1,pc="firebaseLocalStorage",cS="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rf(t,e){return t.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function RO(){const t=indexedDB.deleteDatabase(uS);return new Ga(t).toPromise()}function ip(){const t=indexedDB.open(uS,AO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pc,{keyPath:cS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),await RO(),e(await ip()))})})}async function J_(t,e,n){const r=rf(t,!0).put({[cS]:e,value:n});return new Ga(r).toPromise()}async function kO(t,e){const n=rf(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function Z_(t,e){const n=rf(t,!0).delete(e);return new Ga(n).toPromise()}const CO=800,PO=3;class fS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ip(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nf._getInstance(IO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TO(),!this.activeServiceWorker)return;this.sender=new wO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ip();return await J_(e,dc,"1"),await Z_(e,dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>J_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Z_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rf(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fS.type="LOCAL";const bO=fS;new Ha(3e4,6e4);/**
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
 */function hS(t,e){return e?Mn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class lg extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xO(t){return nS(t.auth,new lg(t),t.bypassAuthState)}function NO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),aO(n,new lg(t),t.bypassAuthState)}async function OO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),oO(n,new lg(t),t.bypassAuthState)}/**
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
 */class dS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xO;case"linkViaPopup":case"linkViaRedirect":return OO;case"reauthViaPopup":case"reauthViaRedirect":return NO;default:Kt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const DO=new Ha(2e3,1e4);async function LO(t,e,n){if(en(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=nr(t);h2(t,e,og);const i=hS(r,n);return new ui(r,"signInViaPopup",e,i).executeNotNull()}class ui extends dS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DO.get())};e()}}ui.currentPopupAction=null;/**
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
 */const MO="pendingRedirect",vu=new Map;class VO extends dS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vu.get(this.auth._key());if(!e){try{const r=await FO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vu.set(this.auth._key(),e)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FO(t,e){const n=zO(e),r=UO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jO(t,e){vu.set(t._key(),e)}function UO(t){return Mn(t._redirectPersistence)}function zO(t){return yu(MO,t.config.apiKey,t.name)}async function BO(t,e,n=!1){if(en(t.app))return Promise.reject(jn(t));const r=nr(t),i=hS(r,e),o=await new VO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $O=10*60*1e3;class WO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$O&&this.cachedEventUids.clear(),this.cachedEventUids.has(e0(e))}saveEventToCache(e){this.cachedEventUids.add(e0(e)),this.lastProcessedEventTime=Date.now()}}function e0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pS(t);default:return!1}}/**
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
 */async function qO(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const KO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GO=/^https?/;async function QO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qO(t);for(const n of e)try{if(YO(n))return}catch{}Kt(t,"unauthorized-domain")}function YO(t){const e=np(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GO.test(n))return!1;if(KO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const XO=new Ha(3e4,6e4);function t0(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JO(t){return new Promise((e,n)=>{var r,i,s;function o(){t0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t0(),n(on(t,"network-request-failed"))},timeout:XO.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const a=z2("iframefcb");return vn()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},ZT(`${U2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw _u=null,e})}let _u=null;function ZO(t){return _u=_u||JO(t),_u}/**
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
 */const eD=new Ha(5e3,15e3),tD="__/auth/iframe",nD="emulator/auth/iframe",rD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sD(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,nD):`https://${t.config.authDomain}/${tD}`,r={apiKey:e.apiKey,appName:t.name,v:$s},i=iD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wa(r).slice(1)}`}async function oD(t){const e=await ZO(t),n=vn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:sD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},eD.get());function u(){vn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const aD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lD=500,uD=600,cD="_blank",fD="http://localhost";class n0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hD(t,e,n,r=lD,i=uD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},aD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=et().toLowerCase();n&&(a=qT(c)?cD:n),HT(c)&&(e=e||fD,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(b2(c)&&a!=="_self")return dD(e||"",a),new n0(null);const d=window.open(e||"",a,f);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new n0(d)}function dD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pD="__/auth/handler",mD="emulator/auth/handler",gD=encodeURIComponent("fac");async function r0(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(e instanceof og){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Ka){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),c=u?`#${gD}=${encodeURIComponent(u)}`:"";return`${yD(t)}?${Wa(a).slice(1)}${c}`}function yD({config:t}){return t.emulator?tg(t,mD):`https://${t.authDomain}/${pD}`}/**
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
 */const Oh="webStorageSupport";class vD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aS,this._completeRedirectFn=BO,this._overrideRedirectResult=jO}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await r0(e,n,r,np(),i);return hD(e,o,ag())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await r0(e,n,r,np(),i);return EO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oD(e),r=new WO(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oh,{type:Oh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oh];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XT()||rg()||ef()}}const _D=vD;var i0="@firebase/auth",s0="1.7.4";/**
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
 */class wD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ED(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TD(t){Ps(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JT(t)},c=new V2(r,i,s,u);return q2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Si("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(r=>new wD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(i0,s0,ED(t)),Or(i0,s0,"esm2017")}/**
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
 */const SD=5*60,ID=bT("authIdTokenMaxAge")||SD;let o0=null;const AD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ID)return;const i=n==null?void 0:n.token;o0!==i&&(o0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function RD(t=DT()){const e=Xm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=H2(t,{popupRedirectResolver:_D,persistence:[bO,vO,aS]}),r=bT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AD(s.toString());dO(n,o,()=>o(n.currentUser)),hO(n,a=>o(a))}}const i=CT("auth");return i&&K2(n,`http://${i}`),n}function kD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}F2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TD("Browser");var a0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,mS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,y){function I(){}I.prototype=y.prototype,S.D=y.prototype,S.prototype=new I,S.prototype.constructor=S,S.C=function(R,P,O){for(var k=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)k[Vt-2]=arguments[Vt];return y.prototype[P].apply(R,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,y,I){I||(I=0);var R=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)R[P]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(P=0;16>P;++P)R[P]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=S.g[0],I=S.g[1],P=S.g[2];var O=S.g[3],k=y+(O^I&(P^O))+R[0]+3614090360&4294967295;y=I+(k<<7&4294967295|k>>>25),k=O+(P^y&(I^P))+R[1]+3905402710&4294967295,O=y+(k<<12&4294967295|k>>>20),k=P+(I^O&(y^I))+R[2]+606105819&4294967295,P=O+(k<<17&4294967295|k>>>15),k=I+(y^P&(O^y))+R[3]+3250441966&4294967295,I=P+(k<<22&4294967295|k>>>10),k=y+(O^I&(P^O))+R[4]+4118548399&4294967295,y=I+(k<<7&4294967295|k>>>25),k=O+(P^y&(I^P))+R[5]+1200080426&4294967295,O=y+(k<<12&4294967295|k>>>20),k=P+(I^O&(y^I))+R[6]+2821735955&4294967295,P=O+(k<<17&4294967295|k>>>15),k=I+(y^P&(O^y))+R[7]+4249261313&4294967295,I=P+(k<<22&4294967295|k>>>10),k=y+(O^I&(P^O))+R[8]+1770035416&4294967295,y=I+(k<<7&4294967295|k>>>25),k=O+(P^y&(I^P))+R[9]+2336552879&4294967295,O=y+(k<<12&4294967295|k>>>20),k=P+(I^O&(y^I))+R[10]+4294925233&4294967295,P=O+(k<<17&4294967295|k>>>15),k=I+(y^P&(O^y))+R[11]+2304563134&4294967295,I=P+(k<<22&4294967295|k>>>10),k=y+(O^I&(P^O))+R[12]+1804603682&4294967295,y=I+(k<<7&4294967295|k>>>25),k=O+(P^y&(I^P))+R[13]+4254626195&4294967295,O=y+(k<<12&4294967295|k>>>20),k=P+(I^O&(y^I))+R[14]+2792965006&4294967295,P=O+(k<<17&4294967295|k>>>15),k=I+(y^P&(O^y))+R[15]+1236535329&4294967295,I=P+(k<<22&4294967295|k>>>10),k=y+(P^O&(I^P))+R[1]+4129170786&4294967295,y=I+(k<<5&4294967295|k>>>27),k=O+(I^P&(y^I))+R[6]+3225465664&4294967295,O=y+(k<<9&4294967295|k>>>23),k=P+(y^I&(O^y))+R[11]+643717713&4294967295,P=O+(k<<14&4294967295|k>>>18),k=I+(O^y&(P^O))+R[0]+3921069994&4294967295,I=P+(k<<20&4294967295|k>>>12),k=y+(P^O&(I^P))+R[5]+3593408605&4294967295,y=I+(k<<5&4294967295|k>>>27),k=O+(I^P&(y^I))+R[10]+38016083&4294967295,O=y+(k<<9&4294967295|k>>>23),k=P+(y^I&(O^y))+R[15]+3634488961&4294967295,P=O+(k<<14&4294967295|k>>>18),k=I+(O^y&(P^O))+R[4]+3889429448&4294967295,I=P+(k<<20&4294967295|k>>>12),k=y+(P^O&(I^P))+R[9]+568446438&4294967295,y=I+(k<<5&4294967295|k>>>27),k=O+(I^P&(y^I))+R[14]+3275163606&4294967295,O=y+(k<<9&4294967295|k>>>23),k=P+(y^I&(O^y))+R[3]+4107603335&4294967295,P=O+(k<<14&4294967295|k>>>18),k=I+(O^y&(P^O))+R[8]+1163531501&4294967295,I=P+(k<<20&4294967295|k>>>12),k=y+(P^O&(I^P))+R[13]+2850285829&4294967295,y=I+(k<<5&4294967295|k>>>27),k=O+(I^P&(y^I))+R[2]+4243563512&4294967295,O=y+(k<<9&4294967295|k>>>23),k=P+(y^I&(O^y))+R[7]+1735328473&4294967295,P=O+(k<<14&4294967295|k>>>18),k=I+(O^y&(P^O))+R[12]+2368359562&4294967295,I=P+(k<<20&4294967295|k>>>12),k=y+(I^P^O)+R[5]+4294588738&4294967295,y=I+(k<<4&4294967295|k>>>28),k=O+(y^I^P)+R[8]+2272392833&4294967295,O=y+(k<<11&4294967295|k>>>21),k=P+(O^y^I)+R[11]+1839030562&4294967295,P=O+(k<<16&4294967295|k>>>16),k=I+(P^O^y)+R[14]+4259657740&4294967295,I=P+(k<<23&4294967295|k>>>9),k=y+(I^P^O)+R[1]+2763975236&4294967295,y=I+(k<<4&4294967295|k>>>28),k=O+(y^I^P)+R[4]+1272893353&4294967295,O=y+(k<<11&4294967295|k>>>21),k=P+(O^y^I)+R[7]+4139469664&4294967295,P=O+(k<<16&4294967295|k>>>16),k=I+(P^O^y)+R[10]+3200236656&4294967295,I=P+(k<<23&4294967295|k>>>9),k=y+(I^P^O)+R[13]+681279174&4294967295,y=I+(k<<4&4294967295|k>>>28),k=O+(y^I^P)+R[0]+3936430074&4294967295,O=y+(k<<11&4294967295|k>>>21),k=P+(O^y^I)+R[3]+3572445317&4294967295,P=O+(k<<16&4294967295|k>>>16),k=I+(P^O^y)+R[6]+76029189&4294967295,I=P+(k<<23&4294967295|k>>>9),k=y+(I^P^O)+R[9]+3654602809&4294967295,y=I+(k<<4&4294967295|k>>>28),k=O+(y^I^P)+R[12]+3873151461&4294967295,O=y+(k<<11&4294967295|k>>>21),k=P+(O^y^I)+R[15]+530742520&4294967295,P=O+(k<<16&4294967295|k>>>16),k=I+(P^O^y)+R[2]+3299628645&4294967295,I=P+(k<<23&4294967295|k>>>9),k=y+(P^(I|~O))+R[0]+4096336452&4294967295,y=I+(k<<6&4294967295|k>>>26),k=O+(I^(y|~P))+R[7]+1126891415&4294967295,O=y+(k<<10&4294967295|k>>>22),k=P+(y^(O|~I))+R[14]+2878612391&4294967295,P=O+(k<<15&4294967295|k>>>17),k=I+(O^(P|~y))+R[5]+4237533241&4294967295,I=P+(k<<21&4294967295|k>>>11),k=y+(P^(I|~O))+R[12]+1700485571&4294967295,y=I+(k<<6&4294967295|k>>>26),k=O+(I^(y|~P))+R[3]+2399980690&4294967295,O=y+(k<<10&4294967295|k>>>22),k=P+(y^(O|~I))+R[10]+4293915773&4294967295,P=O+(k<<15&4294967295|k>>>17),k=I+(O^(P|~y))+R[1]+2240044497&4294967295,I=P+(k<<21&4294967295|k>>>11),k=y+(P^(I|~O))+R[8]+1873313359&4294967295,y=I+(k<<6&4294967295|k>>>26),k=O+(I^(y|~P))+R[15]+4264355552&4294967295,O=y+(k<<10&4294967295|k>>>22),k=P+(y^(O|~I))+R[6]+2734768916&4294967295,P=O+(k<<15&4294967295|k>>>17),k=I+(O^(P|~y))+R[13]+1309151649&4294967295,I=P+(k<<21&4294967295|k>>>11),k=y+(P^(I|~O))+R[4]+4149444226&4294967295,y=I+(k<<6&4294967295|k>>>26),k=O+(I^(y|~P))+R[11]+3174756917&4294967295,O=y+(k<<10&4294967295|k>>>22),k=P+(y^(O|~I))+R[2]+718787259&4294967295,P=O+(k<<15&4294967295|k>>>17),k=I+(O^(P|~y))+R[9]+3951481745&4294967295,S.g[0]=S.g[0]+y&4294967295,S.g[1]=S.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+O&4294967295}r.prototype.u=function(S,y){y===void 0&&(y=S.length);for(var I=y-this.blockSize,R=this.B,P=this.h,O=0;O<y;){if(P==0)for(;O<=I;)i(this,S,O),O+=this.blockSize;if(typeof S=="string"){for(;O<y;)if(R[P++]=S.charCodeAt(O++),P==this.blockSize){i(this,R),P=0;break}}else for(;O<y;)if(R[P++]=S[O++],P==this.blockSize){i(this,R),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var y=1;y<S.length-8;++y)S[y]=0;var I=8*this.o;for(y=S.length-8;y<S.length;++y)S[y]=I&255,I/=256;for(this.u(S),S=Array(16),y=I=0;4>y;++y)for(var R=0;32>R;R+=8)S[I++]=this.g[y]>>>R&255;return S};function s(S,y){var I=a;return Object.prototype.hasOwnProperty.call(I,S)?I[S]:I[S]=y(S)}function o(S,y){this.h=y;for(var I=[],R=!0,P=S.length-1;0<=P;P--){var O=S[P]|0;R&&O==y||(I[P]=O,R=!1)}this.g=I}var a={};function u(S){return-128<=S&&128>S?s(S,function(y){return new o([y|0],0>y?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return C(c(-S));for(var y=[],I=1,R=0;S>=I;R++)y[R]=S/I|0,I*=4294967296;return new o(y,0)}function f(S,y){if(S.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(S.charAt(0)=="-")return C(f(S.substring(1),y));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),R=d,P=0;P<S.length;P+=8){var O=Math.min(8,S.length-P),k=parseInt(S.substring(P,P+O),y);8>O?(O=c(Math.pow(y,O)),R=R.j(O).add(c(k))):(R=R.j(I),R=R.add(c(k)))}return R}var d=u(0),m=u(1),g=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-C(this).m();for(var S=0,y=1,I=0;I<this.g.length;I++){var R=this.i(I);S+=(0<=R?R:4294967296+R)*y,y*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(A(this))return"-"+C(this).toString(S);for(var y=c(Math.pow(S,6)),I=this,R="";;){var P=x(I,y).g;I=T(I,P.j(y));var O=((0<I.g.length?I.g[0]:I.h)>>>0).toString(S);if(I=P,w(I))return O+R;for(;6>O.length;)O="0"+O;R=O+R}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var y=0;y<S.g.length;y++)if(S.g[y]!=0)return!1;return!0}function A(S){return S.h==-1}t.l=function(S){return S=T(this,S),A(S)?-1:w(S)?0:1};function C(S){for(var y=S.g.length,I=[],R=0;R<y;R++)I[R]=~S.g[R];return new o(I,~S.h).add(m)}t.abs=function(){return A(this)?C(this):this},t.add=function(S){for(var y=Math.max(this.g.length,S.g.length),I=[],R=0,P=0;P<=y;P++){var O=R+(this.i(P)&65535)+(S.i(P)&65535),k=(O>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);R=k>>>16,O&=65535,k&=65535,I[P]=k<<16|O}return new o(I,I[I.length-1]&-2147483648?-1:0)};function T(S,y){return S.add(C(y))}t.j=function(S){if(w(this)||w(S))return d;if(A(this))return A(S)?C(this).j(C(S)):C(C(this).j(S));if(A(S))return C(this.j(C(S)));if(0>this.l(g)&&0>S.l(g))return c(this.m()*S.m());for(var y=this.g.length+S.g.length,I=[],R=0;R<2*y;R++)I[R]=0;for(R=0;R<this.g.length;R++)for(var P=0;P<S.g.length;P++){var O=this.i(R)>>>16,k=this.i(R)&65535,Vt=S.i(P)>>>16,Yr=S.i(P)&65535;I[2*R+2*P]+=k*Yr,_(I,2*R+2*P),I[2*R+2*P+1]+=O*Yr,_(I,2*R+2*P+1),I[2*R+2*P+1]+=k*Vt,_(I,2*R+2*P+1),I[2*R+2*P+2]+=O*Vt,_(I,2*R+2*P+2)}for(R=0;R<y;R++)I[R]=I[2*R+1]<<16|I[2*R];for(R=y;R<2*y;R++)I[R]=0;return new o(I,0)};function _(S,y){for(;(S[y]&65535)!=S[y];)S[y+1]+=S[y]>>>16,S[y]&=65535,y++}function E(S,y){this.g=S,this.h=y}function x(S,y){if(w(y))throw Error("division by zero");if(w(S))return new E(d,d);if(A(S))return y=x(C(S),y),new E(C(y.g),C(y.h));if(A(y))return y=x(S,C(y)),new E(C(y.g),y.h);if(30<S.g.length){if(A(S)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,R=y;0>=R.l(S);)I=M(I),R=M(R);var P=V(I,1),O=V(R,1);for(R=V(R,2),I=V(I,2);!w(R);){var k=O.add(R);0>=k.l(S)&&(P=P.add(I),O=k),R=V(R,1),I=V(I,1)}return y=T(S,P.j(y)),new E(P,y)}for(P=d;0<=S.l(y);){for(I=Math.max(1,Math.floor(S.m()/y.m())),R=Math.ceil(Math.log(I)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),O=c(I),k=O.j(y);A(k)||0<k.l(S);)I-=R,O=c(I),k=O.j(y);w(O)&&(O=m),P=P.add(O),S=T(S,k)}return new E(P,S)}t.A=function(S){return x(this,S).h},t.and=function(S){for(var y=Math.max(this.g.length,S.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)&S.i(R);return new o(I,this.h&S.h)},t.or=function(S){for(var y=Math.max(this.g.length,S.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)|S.i(R);return new o(I,this.h|S.h)},t.xor=function(S){for(var y=Math.max(this.g.length,S.g.length),I=[],R=0;R<y;R++)I[R]=this.i(R)^S.i(R);return new o(I,this.h^S.h)};function M(S){for(var y=S.g.length+1,I=[],R=0;R<y;R++)I[R]=S.i(R)<<1|S.i(R-1)>>>31;return new o(I,S.h)}function V(S,y){var I=y>>5;y%=32;for(var R=S.g.length-I,P=[],O=0;O<R;O++)P[O]=0<y?S.i(O+I)>>>y|S.i(O+I+1)<<32-y:S.i(O+I);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,mi=o}).apply(typeof a0<"u"?a0:typeof self<"u"?self:typeof window<"u"?window:{});var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gS,yS,No,vS,wu,sp,_S,wS,ES;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wl=="object"&&Wl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var N=l[v];if(!(N in p))break e;p=p[N]}l=l[l.length-1],v=p[l],h=h(v),h!=v&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var p=0,v=!1,N={next:function(){if(!v&&p<l.length){var D=p++;return{value:h(D,l[D]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function f(l,h,p){return l.call.apply(l.bind,arguments)}function d(l,h,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),l.apply(h,N)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,m.apply(null,arguments)}function g(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function w(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,N,D){for(var B=Array(arguments.length-2),de=2;de<arguments.length;de++)B[de-2]=arguments[de];return h.prototype[N].apply(v,B)}}function A(l){const h=l.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=l[v];return p}return[]}function C(l,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const N=l.length||0,D=v.length||0;l.length=N+D;for(let B=0;B<D;B++)l[N+B]=v[B]}else l.push(v)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(l){return/^[\s\xa0]*$/.test(l)}function E(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(l,h,p){for(const v in l)h.call(p,l[v],v,l)}function S(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function y(l){const h={};for(const p in l)h[p]=l[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,h){let p,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(p in v)l[p]=v[p];for(let D=0;D<I.length;D++)p=I[D],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function P(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function O(l){a.setTimeout(()=>{throw l},0)}function k(){var l=J;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Vt{constructor(){this.h=this.g=null}add(h,p){const v=Yr.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Yr=new T(()=>new Zs,l=>l.reset());class Zs{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,$=!1,J=new Vt,ne=()=>{const l=a.Promise.resolve(void 0);Tn=()=>{l.then(Se)}};var Se=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(p){O(p)}var h=Yr;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function In(l,h){if(xe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(M){e:{try{x(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:An[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&In.aa.h.call(this)}}w(In,xe);var An={2:"touch",3:"pen",4:"mouse"};In.prototype.h=function(){In.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),HA=0;function qA(l,h,p,v,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=N,this.key=++HA,this.da=this.fa=!1}function al(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ll(l){this.src=l,this.g={},this.h=0}ll.prototype.add=function(l,h,p,v,N){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var B=kf(l,h,v,N);return-1<B?(h=l[B],p||(h.fa=!1)):(h=new qA(h,this.src,D,!!v,N),h.fa=p,l.push(h)),h};function Rf(l,h){var p=h.type;if(p in l.g){var v=l.g[p],N=Array.prototype.indexOf.call(v,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(v,N,1),D&&(al(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function kf(l,h,p,v){for(var N=0;N<l.length;++N){var D=l[N];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==v)return N}return-1}var Cf="closure_lm_"+(1e6*Math.random()|0),Pf={};function ry(l,h,p,v,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)ry(l,h[D],p,v,N);return null}return p=oy(p),l&&l[Rn]?l.K(h,p,c(v)?!!v.capture:!!v,N):KA(l,h,p,!1,v,N)}function KA(l,h,p,v,N,D){if(!h)throw Error("Invalid event type");var B=c(N)?!!N.capture:!!N,de=xf(l);if(de||(l[Cf]=de=new ll(l)),p=de.add(h,p,v,B,D),p.proxy)return p;if(v=GA(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)Sn||(N=B),N===void 0&&(N=!1),l.addEventListener(h.toString(),v,N);else if(l.attachEvent)l.attachEvent(sy(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function GA(){function l(p){return h.call(l.src,l.listener,p)}const h=QA;return l}function iy(l,h,p,v,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)iy(l,h[D],p,v,N);else v=c(v)?!!v.capture:!!v,p=oy(p),l&&l[Rn]?(l=l.i,h=String(h).toString(),h in l.g&&(D=l.g[h],p=kf(D,p,v,N),-1<p&&(al(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete l.g[h],l.h--)))):l&&(l=xf(l))&&(h=l.g[h.toString()],l=-1,h&&(l=kf(h,p,v,N)),(p=-1<l?h[l]:null)&&bf(p))}function bf(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Rn])Rf(h.i,l);else{var p=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(p,v,l.capture):h.detachEvent?h.detachEvent(sy(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=xf(h))?(Rf(p,l),p.h==0&&(p.src=null,h[Cf]=null)):al(l)}}}function sy(l){return l in Pf?Pf[l]:Pf[l]="on"+l}function QA(l,h){if(l.da)l=!0;else{h=new In(h,this);var p=l.listener,v=l.ha||l.src;l.fa&&bf(l),l=p.call(v,h)}return l}function xf(l){return l=l[Cf],l instanceof ll?l:null}var Nf="__closure_events_fn_"+(1e9*Math.random()>>>0);function oy(l){return typeof l=="function"?l:(l[Nf]||(l[Nf]=function(h){return l.handleEvent(h)}),l[Nf])}function tt(){he.call(this),this.i=new ll(this),this.M=this,this.F=null}w(tt,he),tt.prototype[Rn]=!0,tt.prototype.removeEventListener=function(l,h,p,v){iy(this,l,h,p,v)};function ht(l,h){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new xe(h,l);else if(h instanceof xe)h.target=h.target||l;else{var N=h;h=new xe(v,l),R(h,N)}if(N=!0,p)for(var D=p.length-1;0<=D;D--){var B=h.g=p[D];N=ul(B,v,!0,h)&&N}if(B=h.g=l,N=ul(B,v,!0,h)&&N,N=ul(B,v,!1,h)&&N,p)for(D=0;D<p.length;D++)B=h.g=p[D],N=ul(B,v,!1,h)&&N}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],v=0;v<p.length;v++)al(p[v]);delete l.g[h],l.h--}}this.F=null},tt.prototype.K=function(l,h,p,v){return this.i.add(String(l),h,!1,p,v)},tt.prototype.L=function(l,h,p,v){return this.i.add(String(l),h,!0,p,v)};function ul(l,h,p,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==p){var de=B.listener,qe=B.ha||B.src;B.fa&&Rf(l.i,B),N=de.call(qe,v)!==!1&&N}}return N&&!v.defaultPrevented}function ay(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function ly(l){l.g=ay(()=>{l.g=null,l.i&&(l.i=!1,ly(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class YA extends he{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ly(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eo(l){he.call(this),this.h=l,this.g={}}w(eo,he);var uy=[];function cy(l){V(l.g,function(h,p){this.g.hasOwnProperty(p)&&bf(h)},l),l.g={}}eo.prototype.N=function(){eo.aa.N.call(this),cy(this)},eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Of=a.JSON.stringify,XA=a.JSON.parse,JA=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Df(){}Df.prototype.h=null;function fy(l){return l.h||(l.h=l.i())}function hy(){}var to={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lf(){xe.call(this,"d")}w(Lf,xe);function Mf(){xe.call(this,"c")}w(Mf,xe);var Xr={},dy=null;function cl(){return dy=dy||new tt}Xr.La="serverreachability";function py(l){xe.call(this,Xr.La,l)}w(py,xe);function no(l){const h=cl();ht(h,new py(h))}Xr.STAT_EVENT="statevent";function my(l,h){xe.call(this,Xr.STAT_EVENT,l),this.stat=h}w(my,xe);function dt(l){const h=cl();ht(h,new my(h,l))}Xr.Ma="timingevent";function gy(l,h){xe.call(this,Xr.Ma,l),this.size=h}w(gy,xe);function ro(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function io(){this.g=!0}io.prototype.xa=function(){this.g=!1};function ZA(l,h,p,v,N,D){l.info(function(){if(l.g)if(D)for(var B="",de=D.split("&"),qe=0;qe<de.length;qe++){var ue=de[qe].split("=");if(1<ue.length){var nt=ue[0];ue=ue[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+ue+"&"):B+(nt+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function eR(l,h,p,v,N,D,B){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+h+`
`+p+`
`+D+" "+B})}function ji(l,h,p,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+nR(l,p)+(v?" "+v:"")})}function tR(l,h){l.info(function(){return"TIMEOUT: "+h})}io.prototype.info=function(){};function nR(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return Of(p)}catch{return h}}var fl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vf;function hl(){}w(hl,Df),hl.prototype.g=function(){return new XMLHttpRequest},hl.prototype.i=function(){return{}},Vf=new hl;function ir(l,h,p,v){this.j=l,this.i=h,this.l=p,this.R=v||1,this.U=new eo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vy}function vy(){this.i=null,this.g="",this.h=!1}var _y={},Ff={};function jf(l,h,p){l.L=1,l.v=gl(kn(h)),l.m=p,l.P=!0,wy(l,null)}function wy(l,h){l.F=Date.now(),dl(l),l.A=kn(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Dy(p.i,"t",v),l.C=0,p=l.j.J,l.h=new vy,l.g=Jy(l.j,p?h:null,!l.m),0<l.O&&(l.M=new YA(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,v=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(uy[0]=N.toString()),N=uy);for(var D=0;D<N.length;D++){var B=ry(p,N[D],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),no(),ZA(l.i,l.u,l.A,l.l,l.R,l.m)}ir.prototype.ca=function(l){l=l.target;const h=this.M;h&&Cn(l)==3?h.j():this.Y(l)},ir.prototype.Y=function(l){try{if(l==this.g)e:{const rt=Cn(this.g);var h=this.g.Ba();const Bi=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||zy(this.g)))){this.J||rt!=4||h==7||(h==8||0>=Bi?no(3):no(2)),Uf(this);var p=this.g.Z();this.X=p;t:if(Ey(this)){var v=zy(this.g);l="";var N=v.length,D=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),so(this);var B="";break t}this.h.i=new a.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(D&&h==N-1)});v.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,eR(this.i,this.u,this.A,this.l,this.R,rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var de,qe=this.g;if((de=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var ue=de;break t}}ue=null}if(p=ue)ji(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zf(this,p);else{this.o=!1,this.s=3,dt(12),Jr(this),so(this);break e}}if(this.P){p=!0;let Gt;for(;!this.J&&this.C<B.length;)if(Gt=rR(this,B),Gt==Ff){rt==4&&(this.s=4,dt(14),p=!1),ji(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==_y){this.s=4,dt(15),ji(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else ji(this.i,this.l,Gt,null),zf(this,Gt);if(Ey(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,dt(16),p=!1),this.o=this.o&&p,!p)ji(this.i,this.l,B,"[Invalid Chunked Response]"),Jr(this),so(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Kf(nt),nt.M=!0,dt(11))}}else ji(this.i,this.l,B,null),zf(this,B);rt==4&&Jr(this),this.o&&!this.J&&(rt==4?Gy(this.j,this):(this.o=!1,dl(this)))}else wR(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Jr(this),so(this)}}}catch{}finally{}};function Ey(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function rR(l,h){var p=l.C,v=h.indexOf(`
`,p);return v==-1?Ff:(p=Number(h.substring(p,v)),isNaN(p)?_y:(v+=1,v+p>h.length?Ff:(h=h.slice(v,v+p),l.C=v+p,h)))}ir.prototype.cancel=function(){this.J=!0,Jr(this)};function dl(l){l.S=Date.now()+l.I,Ty(l,l.I)}function Ty(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ro(m(l.ba,l),h)}function Uf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ir.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(tR(this.i,this.A),this.L!=2&&(no(),dt(17)),Jr(this),this.s=2,so(this)):Ty(this,this.S-l)};function so(l){l.j.G==0||l.J||Gy(l.j,l)}function Jr(l){Uf(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,cy(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function zf(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||Bf(p.h,l))){if(!l.K&&Bf(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)El(p),_l(p);else break e;qf(p),dt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=ro(m(p.Za,p),6e3));if(1>=Ay(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ei(p,11)}else if((l.K||p.g==l)&&El(p),!_(h))for(N=p.Da.g.parse(h),h=0;h<N.length;h++){let ue=N[h];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const nt=ue[3];nt!=null&&(p.la=nt,p.j.info("VER="+p.la));const rt=ue[4];rt!=null&&(p.Aa=rt,p.j.info("SVER="+p.Aa));const Bi=ue[5];Bi!=null&&typeof Bi=="number"&&0<Bi&&(v=1.5*Bi,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Gt=l.g;if(Gt){const Sl=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sl){var D=v.h;D.g||Sl.indexOf("spdy")==-1&&Sl.indexOf("quic")==-1&&Sl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&($f(D,D.h),D.h=null))}if(v.D){const Gf=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Gf&&(v.ya=Gf,ge(v.I,v.D,Gf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var B=l;if(v.qa=Xy(v,v.J?v.ia:null,v.W),B.K){Ry(v.h,B);var de=B,qe=v.L;qe&&(de.I=qe),de.B&&(Uf(de),dl(de)),v.g=B}else qy(v);0<p.i.length&&wl(p)}else ue[0]!="stop"&&ue[0]!="close"||ei(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?ei(p,7):Hf(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}no(4)}catch{}}var iR=class{constructor(l,h){this.g=l,this.map=h}};function Sy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Iy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ay(l){return l.h?1:l.g?l.g.size:0}function Bf(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function $f(l,h){l.g?l.g.add(h):l.h=h}function Ry(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Sy.prototype.cancel=function(){if(this.i=ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ky(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return A(l.i)}function sR(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],p=l.length,v=0;v<p;v++)h.push(l[v]);return h}h=[],p=0;for(v in l)h[p++]=l[v];return h}function oR(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const v in l)h[p++]=v;return h}}}function Cy(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=oR(l),v=sR(l),N=v.length,D=0;D<N;D++)h.call(void 0,v[D],p&&p[D],l)}var Py=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aR(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),N=null;if(0<=v){var D=l[p].substring(0,v);N=l[p].substring(v+1)}else D=l[p];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Zr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zr){this.h=l.h,pl(this,l.j),this.o=l.o,this.g=l.g,ml(this,l.s),this.l=l.l;var h=l.i,p=new lo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),by(this,p),this.m=l.m}else l&&(h=String(l).match(Py))?(this.h=!1,pl(this,h[1]||"",!0),this.o=oo(h[2]||""),this.g=oo(h[3]||"",!0),ml(this,h[4]),this.l=oo(h[5]||"",!0),by(this,h[6]||"",!0),this.m=oo(h[7]||"")):(this.h=!1,this.i=new lo(null,this.h))}Zr.prototype.toString=function(){var l=[],h=this.j;h&&l.push(ao(h,xy,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(ao(h,xy,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(ao(p,p.charAt(0)=="/"?cR:uR,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",ao(p,hR)),l.join("")};function kn(l){return new Zr(l)}function pl(l,h,p){l.j=p?oo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function ml(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function by(l,h,p){h instanceof lo?(l.i=h,dR(l.i,l.h)):(p||(h=ao(h,fR)),l.i=new lo(h,l.h))}function ge(l,h,p){l.i.set(h,p)}function gl(l){return ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function oo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function ao(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,lR),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lR(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var xy=/[#\/\?@]/g,uR=/[#\?:]/g,cR=/[#\?]/g,fR=/[#\?@]/g,hR=/#/g;function lo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function sr(l){l.g||(l.g=new Map,l.h=0,l.i&&aR(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=lo.prototype,t.add=function(l,h){sr(this),this.i=null,l=Ui(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Ny(l,h){sr(l),h=Ui(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Oy(l,h){return sr(l),h=Ui(l,h),l.g.has(h)}t.forEach=function(l,h){sr(this),this.g.forEach(function(p,v){p.forEach(function(N){l.call(h,N,v,this)},this)},this)},t.na=function(){sr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const N=l[v];for(let D=0;D<N.length;D++)p.push(h[v])}return p},t.V=function(l){sr(this);let h=[];if(typeof l=="string")Oy(this,l)&&(h=h.concat(this.g.get(Ui(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return sr(this),this.i=null,l=Ui(this,l),Oy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Dy(l,h,p){Ny(l,h),0<p.length&&(l.i=null,l.g.set(Ui(l,h),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const D=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var N=D;B[v]!==""&&(N+="="+encodeURIComponent(String(B[v]))),l.push(N)}}return this.i=l.join("&")};function Ui(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function dR(l,h){h&&!l.j&&(sr(l),l.i=null,l.g.forEach(function(p,v){var N=v.toLowerCase();v!=N&&(Ny(this,v),Dy(this,N,p))},l)),l.j=h}function pR(l,h){const p=new io;if(a.Image){const v=new Image;v.onload=g(or,p,"TestLoadImage: loaded",!0,h,v),v.onerror=g(or,p,"TestLoadImage: error",!1,h,v),v.onabort=g(or,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=g(or,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function mR(l,h){const p=new io,v=new AbortController,N=setTimeout(()=>{v.abort(),or(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(D=>{clearTimeout(N),D.ok?or(p,"TestPingServer: ok",!0,h):or(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),or(p,"TestPingServer: error",!1,h)})}function or(l,h,p,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(p)}catch{}}function gR(){this.g=new JA}function yR(l,h,p){const v=p||"";try{Cy(l,function(N,D){let B=N;c(N)&&(B=Of(N)),h.push(v+D+"="+encodeURIComponent(B))})}catch(N){throw h.push(v+"type="+encodeURIComponent("_badmap")),N}}function uo(l){this.l=l.Ub||null,this.j=l.eb||!1}w(uo,Df),uo.prototype.g=function(){return new yl(this.l,this.j)},uo.prototype.i=function(l){return function(){return l}}({});function yl(l,h){tt.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(yl,tt),t=yl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,fo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ly(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ly(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?co(this):fo(this),this.readyState==3&&Ly(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,co(this))},t.Qa=function(l){this.g&&(this.response=l,co(this))},t.ga=function(){this.g&&co(this)};function co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,fo(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function fo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function My(l){let h="";return V(l,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Wf(l,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=My(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ge(l,h,p))}function Ce(l){tt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Ce,tt);var vR=/^https?$/i,_R=["POST","PUT"];t=Ce.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vf.g(),this.v=this.o?fy(this.o):fy(Vf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){Vy(this,D);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)p.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const D of v.keys())p.set(D,v.get(D));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(_R,h,void 0))||v||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uy(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){Vy(this,D)}};function Vy(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,Fy(l),vl(l)}function Fy(l){l.A||(l.A=!0,ht(l,"complete"),ht(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ht(this,"complete"),ht(this,"abort"),vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vl(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jy(this):this.bb())},t.bb=function(){jy(this)};function jy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Cn(l)!=4||l.Z()!=2)){if(l.u&&Cn(l)==4)ay(l.Ea,0,l);else if(ht(l,"readystatechange"),Cn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=B===0){var N=String(l.D).match(Py)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),v=!vR.test(N?N.toLowerCase():"")}p=v}if(p)ht(l,"complete"),ht(l,"success");else{l.m=6;try{var D=2<Cn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",Fy(l)}}finally{vl(l)}}}}function vl(l,h){if(l.g){Uy(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||ht(l,"ready");try{p.onreadystatechange=v}catch{}}}function Uy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Cn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),XA(h)}};function zy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function wR(l){const h={};l=(l.g&&2<=Cn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var p=P(l[v]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[N]||[];h[N]=D,D.push(p)}S(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function By(l){this.Aa=0,this.i=[],this.j=new io,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ho("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ho("baseRetryDelayMs",5e3,l),this.cb=ho("retryDelaySeedMs",1e4,l),this.Wa=ho("forwardChannelMaxRetries",2,l),this.wa=ho("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Sy(l&&l.concurrentRequestLimit),this.Da=new gR,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=By.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,v){dt(0),this.W=l,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Xy(this,null,this.W),wl(this)};function Hf(l){if($y(l),l.G==3){var h=l.U++,p=kn(l.I);if(ge(p,"SID",l.K),ge(p,"RID",h),ge(p,"TYPE","terminate"),po(l,p),h=new ir(l,l.j,h),h.L=2,h.v=gl(kn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=Jy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),dl(h)}Yy(l)}function _l(l){l.g&&(Kf(l),l.g.cancel(),l.g=null)}function $y(l){_l(l),l.u&&(a.clearTimeout(l.u),l.u=null),El(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function wl(l){if(!Iy(l.h)&&!l.s){l.s=!0;var h=l.Ga;Tn||ne(),$||(Tn(),$=!0),J.add(h,l),l.B=0}}function ER(l,h){return Ay(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ro(m(l.Ga,l,h),Qy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new ir(this,this.j,l);let D=this.o;if(this.S&&(D?(D=y(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hy(this,N,h),p=kn(this.I),ge(p,"RID",l),ge(p,"CVER",22),this.D&&ge(p,"X-HTTP-Session-Id",this.D),po(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(My(D)))+"&"+h:this.m&&Wf(p,this.m,D)),$f(this.h,N),this.Ua&&ge(p,"TYPE","init"),this.P?(ge(p,"$req",h),ge(p,"SID","null"),N.T=!0,jf(N,p,null)):jf(N,p,h),this.G=2}}else this.G==3&&(l?Wy(this,l):this.i.length==0||Iy(this.h)||Wy(this))};function Wy(l,h){var p;h?p=h.l:p=l.U++;const v=kn(l.I);ge(v,"SID",l.K),ge(v,"RID",p),ge(v,"AID",l.T),po(l,v),l.m&&l.o&&Wf(v,l.m,l.o),p=new ir(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Hy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),$f(l.h,p),jf(p,v,h)}function po(l,h){l.H&&V(l.H,function(p,v){ge(h,v,p)}),l.l&&Cy({},function(p,v){ge(h,v,p)})}function Hy(l,h,p){p=Math.min(l.i.length,p);var v=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let D=-1;for(;;){const B=["count="+p];D==-1?0<p?(D=N[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let de=!0;for(let qe=0;qe<p;qe++){let ue=N[qe].g;const nt=N[qe].map;if(ue-=D,0>ue)D=Math.max(0,N[qe].g-100),de=!1;else try{yR(nt,B,"req"+ue+"_")}catch{v&&v(nt)}}if(de){v=B.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,v}function qy(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Tn||ne(),$||(Tn(),$=!0),J.add(h,l),l.v=0}}function qf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ro(m(l.Fa,l),Qy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Ky(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ro(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),_l(this),Ky(this))};function Kf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Ky(l){l.g=new ir(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=kn(l.qa);ge(h,"RID","rpc"),ge(h,"SID",l.K),ge(h,"AID",l.T),ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&ge(h,"TO",l.ja),ge(h,"TYPE","xmlhttp"),po(l,h),l.m&&l.o&&Wf(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=gl(kn(h)),p.m=null,p.P=!0,wy(p,l)}t.Za=function(){this.C!=null&&(this.C=null,_l(this),qf(this),dt(19))};function El(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gy(l,h){var p=null;if(l.g==h){El(l),Kf(l),l.g=null;var v=2}else if(Bf(l.h,h))p=h.D,Ry(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var N=l.B;v=cl(),ht(v,new gy(v,p)),wl(l)}else qy(l);else if(N=h.s,N==3||N==0&&0<h.X||!(v==1&&ER(l,h)||v==2&&qf(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),N){case 1:ei(l,5);break;case 4:ei(l,10);break;case 3:ei(l,6);break;default:ei(l,2)}}}function Qy(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ei(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),v=l.Xa;const N=!v;v=new Zr(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pl(v,"https"),gl(v),N?pR(v.toString(),p):mR(v.toString(),p)}else dt(2);l.G=0,l.l&&l.l.sa(h),Yy(l),$y(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Yy(l){if(l.G=0,l.ka=[],l.l){const h=ky(l.h);(h.length!=0||l.i.length!=0)&&(C(l.ka,h),C(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Xy(l,h,p){var v=p instanceof Zr?kn(p):new Zr(p);if(v.g!="")h&&(v.g=h+"."+v.g),ml(v,v.s);else{var N=a.location;v=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Zr(null);v&&pl(D,v),h&&(D.g=h),N&&ml(D,N),p&&(D.l=p),v=D}return p=l.D,h=l.ya,p&&h&&ge(v,p,h),ge(v,"VER",l.la),po(l,v),v}function Jy(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ce(new uo({eb:p})):new Ce(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zy(){}t=Zy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Tl(){}Tl.prototype.g=function(l,h){return new Rt(l,h)};function Rt(l,h){tt.call(this),this.g=new By(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!_(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new zi(this)}w(Rt,tt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Hf(this.g)},Rt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Of(l),l=p);h.i.push(new iR(h.Ya++,l)),h.G==3&&wl(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Hf(this.g),delete this.g,Rt.aa.N.call(this)};function ev(l){Lf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}w(ev,Lf);function tv(){Mf.call(this),this.status=1}w(tv,Mf);function zi(l){this.g=l}w(zi,Zy),zi.prototype.ua=function(){ht(this.g,"a")},zi.prototype.ta=function(l){ht(this.g,new ev(l))},zi.prototype.sa=function(l){ht(this.g,new tv)},zi.prototype.ra=function(){ht(this.g,"b")},Tl.prototype.createWebChannel=Tl.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ES=function(){return new Tl},wS=function(){return cl()},_S=Xr,sp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fl.NO_ERROR=0,fl.TIMEOUT=8,fl.HTTP_ERROR=6,wu=fl,yy.COMPLETE="complete",vS=yy,hy.EventType=to,to.OPEN="a",to.CLOSE="b",to.ERROR="c",to.MESSAGE="d",tt.prototype.listen=tt.prototype.K,No=hy,yS=uo,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,gS=Ce}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});const l0="@firebase/firestore";/**
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
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Hs="10.12.1";/**
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
 */const ki=new Qm("@firebase/firestore");function So(){return ki.logLevel}function q(t,...e){if(ki.logLevel<=oe.DEBUG){const n=e.map(ug);ki.debug(`Firestore (${Hs}): ${t}`,...n)}}function Kn(t,...e){if(ki.logLevel<=oe.ERROR){const n=e.map(ug);ki.error(`Firestore (${Hs}): ${t}`,...n)}}function bs(t,...e){if(ki.logLevel<=oe.WARN){const n=e.map(ug);ki.warn(`Firestore (${Hs}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function me(t,e){t||X()}function ee(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class TS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class PD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bD{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new TS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new at(e)}}class xD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ND{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new OD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function LD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class SS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=LD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ze(0,0))}static max(){return new Z(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Ta{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const MD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ta{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return MD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}function VD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Ur(i,Q.empty(),e)}function FD(t){return new Ur(t.readTime,t.key,-1)}class Ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ur(Z.min(),Q.empty(),-1)}static max(){return new Ur(Z.max(),Q.empty(),-1)}}function jD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const UD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==UD)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++a,a===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function BD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ya(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cg.oe=-1;function sf(t){return t==null}function mc(t){return t===0&&1/t==-1/0}function $D(t){return typeof t=="number"&&Number.isInteger(t)&&!mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function u0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function IS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hl(this.root,e,this.comparator,!0)}}class Hl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c0(this.data.getIterator())}getIteratorFrom(e){return new c0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class c0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class AS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AS("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const WD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(t){if(me(!!t),typeof t=="string"){let e=0;const n=WD.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hg(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?hg(e):e}function Sa(t){const e=zr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class HD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ia{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ia&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ql={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:qD(t)?9007199254740991:10:X()}function En(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sa(t).isEqual(Sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zr(i.timestampValue),a=zr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?mc(o)===mc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(u0(o)!==u0(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!En(o[u],a[u])))return!1;return!0}(t,e);default:return X()}}function Aa(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return f0(t.timestampValue,e.timestampValue);case 4:return f0(Sa(t),Sa(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ci(s),u=Ci(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const f=ce(a[c],u[c]);if(f!==0)return f}return ce(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(Le(s.latitude),Le(o.latitude));return a!==0?a:ce(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const f=Ns(a[c],u[c]);if(f)return f}return ce(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ql.mapValue&&o===ql.mapValue)return 0;if(s===ql.mapValue)return 1;if(o===ql.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let d=0;d<u.length&&d<f.length;++d){const m=ce(u[d],f[d]);if(m!==0)return m;const g=Ns(a[u[d]],c[f[d]]);if(g!==0)return g}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function f0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=zr(t),r=zr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function Os(t){return op(t)}function op(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=op(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${op(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function h0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ap(t){return!!t&&"integerValue"in t}function dg(t){return!!t&&"arrayValue"in t}function d0(t){return!!t&&"nullValue"in t}function p0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eu(t){return!!t&&"mapValue"in t}function qo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return qs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=qo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){qs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(qo(this.value))}}function RS(t){const e=[];return qs(t.fields,(n,r)=>{const i=new Ye([n]);if(Eu(r)){const s=RS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
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
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Z.min(),Z.min(),Z.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Z.min(),Z.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Z.min(),Z.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gc{constructor(e,n){this.position=e,this.inclusive=n}}function m0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function g0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yc{constructor(e,n="asc"){this.field=e,this.dir=n}}function KD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kS{}class Ve extends kS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QD(e,n,r):n==="array-contains"?new JD(e,r):n==="in"?new ZD(e,r):n==="not-in"?new eL(e,r):n==="array-contains-any"?new tL(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YD(e,r):new XD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends kS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return CS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CS(t){return t.op==="and"}function PS(t){return GD(t)&&CS(t)}function GD(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function lp(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(PS(t))return t.filters.map(e=>lp(e)).join(",");{const e=t.filters.map(n=>lp(n)).join(",");return`${t.op}(${e})`}}function bS(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof un?function(r,i){return i instanceof un&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&bS(o,i.filters[a]),!0):!1}(t,e):void X()}function xS(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(xS).join(" ,")+"}"}(t):"Filter"}class QD extends Ve{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class YD extends Ve{constructor(e,n){super(e,"in",n),this.keys=NS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XD extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=NS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class JD extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dg(n)&&Aa(n.arrayValue,this.value)}}class ZD extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class eL extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class tL extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
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
 */class nL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function y0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new nL(t,e,n,r,i,s,o)}function pg(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e.ue=n}return e.ue}function mg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!g0(t.startAt,e.startAt)&&g0(t.endAt,e.endAt)}function up(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function rL(t,e,n,r,i,s,o,a){return new Xa(t,e,n,r,i,s,o,a)}function OS(t){return new Xa(t)}function v0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function DS(t){return t.collectionGroup!==null}function Ko(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new yc(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new yc(Ye.keyField(),r))}return e.ce}function _n(t){const e=ee(t);return e.le||(e.le=iL(e,Ko(t))),e.le}function iL(t,e){if(t.limitType==="F")return y0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yc(i.field,s)});const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;return y0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cp(t,e){const n=t.filters.concat([e]);return new Xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function fp(t,e,n){return new Xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function of(t,e){return mg(_n(t),_n(e))&&t.limitType===e.limitType}function LS(t){return`${pg(_n(t))}|lt:${t.limitType}`}function Wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xS(i)).join(", ")}]`),sf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Os(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function af(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=m0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Ko(r),i)||r.endAt&&!function(o,a,u){const c=m0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Ko(r),i))}(t,e)}function sL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MS(t){return(e,n)=>{let r=!1;for(const i of Ko(t)){const s=oL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oL(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Ns(u,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return IS(this.inner)}size(){return this.innerSize}}/**
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
 */const aL=new ke(Q.comparator);function Gn(){return aL}const VS=new ke(Q.comparator);function Oo(...t){let e=VS;for(const n of t)e=e.insert(n.key,n);return e}function FS(t){let e=VS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ci(){return Go()}function jS(){return Go()}function Go(){return new Ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const lL=new ke(Q.comparator),uL=new Je(Q.comparator);function se(...t){let e=uL;for(const n of t)e=e.add(n);return e}const cL=new Je(ce);function fL(){return cL}/**
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
 */function US(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function zS(t){return{integerValue:""+t}}function hL(t,e){return $D(e)?zS(e):US(t,e)}/**
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
 */class lf{constructor(){this._=void 0}}function dL(t,e,n){return t instanceof vc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fg(s)&&(s=hg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ra?$S(t,e):t instanceof ka?WS(t,e):function(i,s){const o=BS(i,s),a=_0(o)+_0(i.Pe);return ap(o)&&ap(i.Pe)?zS(a):US(i.serializer,a)}(t,e)}function pL(t,e,n){return t instanceof Ra?$S(t,e):t instanceof ka?WS(t,e):n}function BS(t,e){return t instanceof _c?function(r){return ap(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vc extends lf{}class Ra extends lf{constructor(e){super(),this.elements=e}}function $S(t,e){const n=HS(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class ka extends lf{constructor(e){super(),this.elements=e}}function WS(t,e){let n=HS(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class _c extends lf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _0(t){return Le(t.integerValue||t.doubleValue)}function HS(t){return dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ra&&i instanceof Ra||r instanceof ka&&i instanceof ka?xs(r.elements,i.elements,En):r instanceof _c&&i instanceof _c?En(r.Pe,i.Pe):r instanceof vc&&i instanceof vc}(t.transform,e.transform)}class gL{constructor(e,n){this.version=e,this.transformResults=n}}class Un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Un}static exists(e){return new Un(void 0,e)}static updateTime(e){return new Un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uf{}function qS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new GS(t.key,Un.none()):new Ja(t.key,t.data,Un.none());{const n=t.data,r=Ut.empty();let i=new Je(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new tn(i.toArray()),Un.none())}}function yL(t,e,n){t instanceof Ja?function(i,s,o){const a=i.value.clone(),u=E0(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=E0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(KS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qo(t,e,n,r){return t instanceof Ja?function(s,o,a,u){if(!Tu(s.precondition,o))return a;const c=s.value.clone(),f=T0(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,a,u){if(!Tu(s.precondition,o))return a;const c=T0(s.fieldTransforms,u,o),f=o.data;return f.setAll(KS(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BS(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function w0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>mL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ja extends uf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends uf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E0(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,pL(o,a,n[i]))}return r}function T0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,dL(s,o,e))}return r}class GS extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _L extends uf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=qS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>w0(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>w0(n,r))}}class gg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return lL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new gg(e,n,r,i)}}/**
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
 */class EL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,ae;function SL(t){switch(t){default:return X();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function QS(t){if(t===void 0)return Kn("GRPC error has no .code"),F.UNKNOWN;switch(t){case De.OK:return F.OK;case De.CANCELLED:return F.CANCELLED;case De.UNKNOWN:return F.UNKNOWN;case De.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case De.INTERNAL:return F.INTERNAL;case De.UNAVAILABLE:return F.UNAVAILABLE;case De.UNAUTHENTICATED:return F.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case De.NOT_FOUND:return F.NOT_FOUND;case De.ALREADY_EXISTS:return F.ALREADY_EXISTS;case De.PERMISSION_DENIED:return F.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case De.ABORTED:return F.ABORTED;case De.OUT_OF_RANGE:return F.OUT_OF_RANGE;case De.UNIMPLEMENTED:return F.UNIMPLEMENTED;case De.DATA_LOSS:return F.DATA_LOSS;default:return X()}}(ae=De||(De={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IL(){return new TextEncoder}/**
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
 */const AL=new mi([4294967295,4294967295],0);function S0(t){const e=IL().encode(t),n=new mS;return n.update(e),new Uint8Array(n.digest())}function I0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new mi([n,r],0),new mi([i,s],0)]}class yg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=mi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(mi.fromNumber(r)));return i.compare(AL)===1&&(i=new mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=S0(e),[r,i]=I0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new yg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=S0(e),[r,i]=I0(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cf(Z.min(),i,new ke(ce),Gn(),se())}}class Za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Za(r,n,se(),se(),se())}}/**
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
 */class Su{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class YS{constructor(e,n){this.targetId=e,this.me=n}}class XS{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class A0{constructor(){this.fe=0,this.ge=k0(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Za(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=k0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=R0(),this.Qe=new ke(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(up(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,ut.newNoDocument(o,Z.min()))}else me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ci(r).toUint8Array()}catch(u){if(u instanceof AS)return bs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new yg(o,i,s)}catch(u){return bs(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&up(a.target)){const u=new Q(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cf(e,n,this.Qe,this.ke,r);return this.ke=Gn(),this.qe=R0(),this.Qe=new ke(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new A0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new A0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function R0(){return new ke(Q.comparator)}function k0(){return new ke(Q.comparator)}const kL={asc:"ASCENDING",desc:"DESCENDING"},CL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PL={and:"AND",or:"OR"};class bL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hp(t,e){return t.useProto3Json||sf(e)?e:{value:e}}function wc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function xL(t,e){return wc(t,e.toTimestamp())}function wn(t){return me(!!t),Z.fromTimestamp(function(n){const r=zr(n);return new ze(r.seconds,r.nanos)}(t))}function vg(t,e){return dp(t,e).canonicalString()}function dp(t,e){const n=function(i){return new _e(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ZS(t){const e=_e.fromString(t);return me(iI(e)),e}function pp(t,e){return vg(t.databaseId,e.path)}function Dh(t,e){const n=ZS(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(tI(n))}function eI(t,e){return vg(t.databaseId,e)}function NL(t){const e=ZS(t);return e.length===4?_e.emptyPath():tI(e)}function mp(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tI(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C0(t,e,n){return{name:pp(t,e),fields:n.value.mapValue.fields}}function OL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(me(f===void 0||typeof f=="string"),ft.fromBase64String(f||"")):(me(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const f=c.code===void 0?F.UNKNOWN:QS(c.code);return new K(f,c.message||"")}(o);n=new XS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dh(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):Z.min(),a=new Ut({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,a),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Su(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dh(t,r.document),s=r.readTime?wn(r.readTime):Z.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dh(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new TL(i,s),a=r.targetId;n=new YS(a,o)}}return n}function DL(t,e){let n;if(e instanceof Ja)n={update:C0(t,e.key,e.value)};else if(e instanceof GS)n={delete:pp(t,e.key)};else if(e instanceof Mi)n={update:C0(t,e.key,e.data),updateMask:$L(e.fieldMask)};else{if(!(e instanceof _L))return X();n={verify:pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _c)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(t,e.precondition)),n}function LL(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wn(i.updateTime):wn(s);return o.isEqual(Z.min())&&(o=wn(s)),new gL(o,i.transformResults||[])}(n,e))):[]}function ML(t,e){return{documents:[eI(t,e.path)]}}function VL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eI(t,i);const s=function(c){if(c.length!==0)return rI(un.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Hi(m.field),direction:UL(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function FL(t){let e=NL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(d){const m=nI(d);return m instanceof un&&PS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(m=>function(w){return new yc(qi(w.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(d){let m;return m=typeof d=="object"?d.value:d,sf(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(d){const m=!!d.before,g=d.values||[];return new gc(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const m=!d.before,g=d.values||[];return new gc(g,m)}(n.endAt)),rL(e,i,o,s,a,"F",u,c)}function jL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>nI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function UL(t){return kL[t]}function zL(t){return CL[t]}function BL(t){return PL[t]}function Hi(t){return{fieldPath:t.canonicalString()}}function qi(t){return Ye.fromServerFormat(t.fieldPath)}function rI(t){return t instanceof Ve?function(n){if(n.op==="=="){if(p0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NAN"}};if(d0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NAN"}};if(d0(n.value))return{unaryFilter:{field:Hi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hi(n.field),op:zL(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(i=>rI(i));return r.length===1?r[0]:{compositeFilter:{op:BL(n.op),filters:r}}}(t):X()}function $L(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Er{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class WL{constructor(e){this.ct=e}}function HL(t){const e=FL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fp(e,e.limit,"L"):e}/**
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
 */class qL{constructor(){this._n=new KL}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Ur.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Ur.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class KL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(_e.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(_e.comparator)).toArray()}}/**
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
 */class Ds{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ds(0)}static Ln(){return new Ds(-1)}}/**
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
 */class GL{constructor(){this.changes=new Ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class QL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class YL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qo(r.mutation,i,tn.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Gn();const o=Go(),a=function(){return Go()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Mi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Qo(f.mutation,c,f.mutation.getFieldMask(),ze.now())):o.set(c.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var d;return a.set(c,new QL(f,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new ke((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||tn.empty();f=a.applyToLocalView(c,f),r.set(u,f);const d=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,f=u.value,d=jS();f.forEach(m=>{if(!s.has(m)){const g=qS(n.get(m),r.get(m));g!==null&&d.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(ci());let a=-1,u=s;return o.next(c=>U.forEach(c,(f,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,se())).next(f=>({batchId:a,changes:FS(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const c=function(d,m){return new Xa(m,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((d,m)=>{o=o.insert(d,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let a=Oo();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Qo(f.mutation,c,tn.empty(),ze.now()),af(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class XL{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:HL(i.bundledQuery),readTime:wn(i.readTime)}}(n)),U.resolve()}}/**
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
 */class JL{constructor(){this.overlays=new ke(Q.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ci();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=ci(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=ci(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const a=ci(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>a.set(c,f)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EL(n,r));let s=this.hr.get(n);s===void 0&&(s=se(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class _g{constructor(){this.Pr=new Je($e.Ir),this.Tr=new Je($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Q(new _e([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Q(new _e([])),r=new $e(n,e),i=new $e(n,e+1);let s=se();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Q.comparator(e.key,n.key)||ce(e.pr,n.pr)}static Er(e,n){return ce(e.pr,n.pr)||Q.comparator(e.key,n.key)}}/**
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
 */class ZL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Je($e.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new $e(new Q(s),0);let a=new Je(ce);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),U.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eM{constructor(e){this.vr=e,this.docs=function(){return new ke(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gn();const o=n.path,a=new Q(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||jD(FD(f),r)<=0||(i.has(f.key)||af(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tM(this)}getSize(e){return U.resolve(this.size)}}class tM extends GL{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class nM{constructor(e){this.persistence=e,this.Mr=new Ks(n=>pg(n),mg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _g,this.targetCount=0,this.Lr=Ds.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
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
 */class rM{constructor(e,n){this.Br={},this.overlays={},this.kr=new cg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new nM(this),this.indexManager=new qL,this.remoteDocumentCache=function(i){return new eM(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new WL(n),this.$r=new XL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ZL(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new iM(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class iM extends zD{constructor(e){super(),this.currentSequenceNumber=e}}class wg{constructor(e){this.persistence=e,this.zr=new _g,this.jr=null}static Hr(e){return new wg(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=Q.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Eg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Eg(e,n.fromCache,r,i)}}/**
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
 */class sM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oM{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return qx()?8:BD(et())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sM;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(So()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(So()<=oe.DEBUG&&q("QueryEngine","Query:",Wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(So()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):U.resolve())}ji(e,n){if(v0(n))return U.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fp(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,fp(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return v0(n)||i.isEqual(Z.min())?U.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?U.resolve(null):(So()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wi(n)),this.es(e,o,n,VD(i,-1)).next(a=>a))})}Zi(e,n){let r=new Je(MS(e));return n.forEach((i,s)=>{af(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return So()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Wi(n)),this.zi.getDocumentsMatchingQuery(e,n,Ur.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class aM{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ke(ce),this.rs=new Ks(s=>pg(s),mg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YL(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function lM(t,e,n,r){return new aM(t,e,n,r)}async function sI(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){a.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function uM(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,f){const d=c.batch,m=d.keys();let g=U.resolve();return m.forEach(w=>{g=g.next(()=>f.getEntry(u,w)).next(A=>{const C=c.docVersions.get(w);me(C!==null),A.version.compareTo(C)<0&&(d.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),f.addEntry(A)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(u,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oI(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cM(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((f,d)=>{const m=i.get(d);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,d)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(ft.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(f.resumeToken,r)),i=i.insert(d,g),function(A,C,T){return A.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,g,f)&&a.push(n.Qr.updateTargetData(s,g))});let u=Gn(),c=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(fM(s,o,e.documentUpdates).next(f=>{u=f.cs,c=f.ls})),!r.isEqual(Z.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(f)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function fM(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function hM(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dM(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function gp(t,e,n){const r=ee(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ya(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function P0(t,e,n){const r=ee(t);let i=Z.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const d=ee(u),m=d.rs.get(f);return m!==void 0?U.resolve(d.ns.get(m)):d.Qr.getTargetData(c,f)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:se())).next(a=>(pM(r,sL(e),a),{documents:a,hs:s})))}function pM(t,e,n){let r=t.ss.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class b0{constructor(){this.activeTargetIds=fL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mM{constructor(){this.no=new b0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new b0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gM{io(e){}shutdown(){}}/**
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
 */class x0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kl=null;function Lh(){return Kl===null?Kl=function(){return 268435456+Math.round(2147483648*Math.random())}():Kl++,"0x"+Kl.toString(16)}/**
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
 */const yM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vM{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const ot="WebChannelConnection";class _M extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Lh(),u=this.vo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw bs("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=yM[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Lh();return new Promise((o,a)=>{const u=new gS;u.setWithCredentials(!0),u.listenOnce(vS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wu.NO_ERROR:const f=u.getResponseJson();q(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case wu.TIMEOUT:q(ot,`RPC '${e}' ${s} timed out`),a(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case wu.HTTP_ERROR:const d=u.getStatus();if(q(ot,`RPC '${e}' ${s} failed with status:`,d,"response text:",u.getResponseText()),d>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const w=function(C){const T=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(g.status);a(new K(w,g.message))}else a(new K(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(F.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Lh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ES(),a=wS(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new yS({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const d=o.createWebChannel(f,u);let m=!1,g=!1;const w=new vM({lo:C=>{g?q(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(q(ot,`Opening RPC '${e}' stream ${i} transport.`),d.open(),m=!0),q(ot,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},ho:()=>d.close()}),A=(C,T,_)=>{C.listen(T,E=>{try{_(E)}catch(x){setTimeout(()=>{throw x},0)}})};return A(d,No.EventType.OPEN,()=>{g||(q(ot,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),A(d,No.EventType.CLOSE,()=>{g||(g=!0,q(ot,`RPC '${e}' stream ${i} transport closed`),w.po())}),A(d,No.EventType.ERROR,C=>{g||(g=!0,bs(ot,`RPC '${e}' stream ${i} transport errored:`,C),w.po(new K(F.UNAVAILABLE,"The operation could not be completed")))}),A(d,No.EventType.MESSAGE,C=>{var T;if(!g){const _=C.data[0];me(!!_);const E=_,x=E.error||((T=E[0])===null||T===void 0?void 0:T.error);if(x){q(ot,`RPC '${e}' stream ${i} received error:`,x);const M=x.status;let V=function(I){const R=De[I];if(R!==void 0)return QS(R)}(M),S=x.message;V===void 0&&(V=F.INTERNAL,S="Unknown error status: "+M+" with message "+x.message),g=!0,w.po(new K(V,S)),d.close()}else q(ot,`RPC '${e}' stream ${i} received:`,_),w.yo(_)}}),A(a,_S.STAT_EVENT,C=>{C.stat===sp.PROXY?q(ot,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===sp.NOPROXY&&q(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function Mh(){return typeof document<"u"?document:null}/**
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
 */function ff(t){return new bL(t,!0)}/**
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
 */class aI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class lI{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new aI(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wM extends lI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=OL(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?wn(o.readTime):Z.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=mp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=up(u)?{documents:ML(s,u)}:{query:VL(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=JS(s,o.resumeToken);const c=hp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=wc(s,o.snapshotVersion.toTimestamp());const c=hp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=jL(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=mp(this.serializer),n.removeTarget=e,this.i_(n)}}class EM extends lI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=LL(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.A_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=mp(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DL(this.serializer,r))};this.i_(n)}}/**
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
 */class TM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,dp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,dp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class SM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Kn(n),this.y_=!1):q("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class IM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Vi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ee(u);c.M_.add(4),await el(c),c.N_.set("Unknown"),c.M_.delete(4),await hf(c)}(this))})}),this.N_=new SM(r,i)}}async function hf(t){if(Vi(t))for(const e of t.x_)await e(!0)}async function el(t){for(const e of t.x_)await e(!1)}function uI(t,e){const n=ee(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ag(n)?Ig(n):Gs(n).Xo()&&Sg(n,e))}function Tg(t,e){const n=ee(t),r=Gs(n);n.F_.delete(e),r.Xo()&&cI(n,e),n.F_.size===0&&(r.Xo()?r.n_():Vi(n)&&n.N_.set("Unknown"))}function Sg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).P_(e)}function cI(t,e){t.L_.xe(e),Gs(t).I_(e)}function Ig(t){t.L_=new RL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.N_.w_()}function Ag(t){return Vi(t)&&!Gs(t).Zo()&&t.F_.size>0}function Vi(t){return ee(t).M_.size===0}function fI(t){t.L_=void 0}async function AM(t){t.N_.set("Online")}async function RM(t){t.F_.forEach((e,n)=>{Sg(t,e)})}async function kM(t,e){fI(t),Ag(t)?(t.N_.D_(e),Ig(t)):t.N_.set("Unknown")}async function CM(t,e,n){if(t.N_.set("Online"),e instanceof XS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ec(t,r)}else if(e instanceof Su?t.L_.Ke(e):e instanceof YS?t.L_.He(e):t.L_.We(e),!n.isEqual(Z.min()))try{const r=await oI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.F_.get(c);f&&s.F_.set(c,f.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const f=s.F_.get(u);if(!f)return;s.F_.set(u,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),cI(s,u);const d=new Er(f.target,u,c,f.sequenceNumber);Sg(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ec(t,r)}}async function Ec(t,e,n){if(!Ya(e))throw e;t.M_.add(1),await el(t),t.N_.set("Offline"),n||(n=()=>oI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await hf(t)})}function hI(t,e){return e().catch(n=>Ec(t,n,e))}async function df(t){const e=ee(t),n=Br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;PM(e);)try{const i=await hM(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,bM(e,i)}catch(i){await Ec(e,i)}dI(e)&&pI(e)}function PM(t){return Vi(t)&&t.v_.length<10}function bM(t,e){t.v_.push(e);const n=Br(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function dI(t){return Vi(t)&&!Br(t).Zo()&&t.v_.length>0}function pI(t){Br(t).start()}async function xM(t){Br(t).V_()}async function NM(t){const e=Br(t);for(const n of t.v_)e.d_(n.mutations)}async function OM(t,e,n){const r=t.v_.shift(),i=gg.from(r,e,n);await hI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await df(t)}async function DM(t,e){e&&Br(t).E_&&await async function(r,i){if(function(o){return SL(o)&&o!==F.ABORTED}(i.code)){const s=r.v_.shift();Br(r).t_(),await hI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await df(r)}}(t,e),dI(t)&&pI(t)}async function N0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Vi(n);n.M_.add(3),await el(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await hf(n)}async function LM(t,e){const n=ee(t);e?(n.M_.delete(2),await hf(n)):e||(n.M_.add(2),await el(n),n.N_.set("Unknown"))}function Gs(t){return t.B_||(t.B_=function(n,r,i){const s=ee(n);return s.f_(),new wM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:AM.bind(null,t),To:RM.bind(null,t),Ao:kM.bind(null,t),h_:CM.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ag(t)?Ig(t):t.N_.set("Unknown")):(await t.B_.stop(),fI(t))})),t.B_}function Br(t){return t.k_||(t.k_=function(n,r,i){const s=ee(n);return s.f_(),new EM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:xM.bind(null,t),Ao:DM.bind(null,t),R_:NM.bind(null,t),A_:OM.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await df(t)):(await t.k_.stop(),t.v_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Rg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Rg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kg(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Ya(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class O0{constructor(){this.q_=new ke(Q.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):X():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ls{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ls(e,n,vs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&of(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class MM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class VM{constructor(){this.queries=new Ks(e=>LS(e),of),this.onlineState="Unknown",this.z_=new Set}}async function FM(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new MM,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=kg(o,`Initialization of query '${Wi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Cg(n)}async function jM(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UM(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Cg(n)}function zM(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Cg(t){t.z_.forEach(e=>{e.next()})}var yp,D0;(D0=yp||(yp={})).J_="default",D0.Cache="cache";class BM{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==yp.Cache}}/**
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
 */class mI{constructor(e){this.key=e}}class gI{constructor(e){this.key=e}}class $M{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=se(),this.mutatedKeys=se(),this.Ia=MS(e),this.Ta=new vs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new O0,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,d)=>{const m=i.get(f),g=af(this.query,d)?d:null,w=!!m&&this.mutatedKeys.has(m.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?w!==A&&(r.track({type:3,doc:g}),C=!0):this.Ra(m,g)||(r.track({type:2,doc:g}),C=!0,(u&&this.Ia(g,u)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),C=!0):m&&!g&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(a=!0)),C&&(g?(o=o.add(g),s=A?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,d)=>function(g,w){const A=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return A(g)-A(w)}(f.type,d.type)||this.Ia(f.doc,d.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new Ls(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new O0,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=se(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gI(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new mI(r))}),n}pa(e){this.la=e.hs,this.Pa=se();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Ls.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class WM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HM{constructor(e){this.key=e,this.wa=!1}}class qM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ks(a=>LS(a),of),this.Da=new Map,this.Ca=new Set,this.va=new ke(Q.comparator),this.Fa=new Map,this.Ma=new _g,this.xa={},this.Oa=new Map,this.Na=Ds.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function KM(t,e,n=!0){const r=TI(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await yI(r,e,n,!0),i}async function GM(t,e){const n=TI(t);await yI(n,e,!0,!1)}async function yI(t,e,n,r){const i=await dM(t.localStore,_n(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await QM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uI(t.remoteStore,i),a}async function QM(t,e,n,r,i){t.Ba=(d,m,g)=>async function(A,C,T,_){let E=C.view.da(T);E.Xi&&(E=await P0(A.localStore,C.query,!1).then(({documents:S})=>C.view.da(S,E)));const x=_&&_.targetChanges.get(C.targetId),M=_&&_.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(E,A.isPrimaryClient,x,M);return M0(A,C.targetId,V.fa),V.snapshot}(t,d,m,g);const s=await P0(t.localStore,e,!0),o=new $M(e,s.hs),a=o.da(s.documents),u=Za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);M0(t,n,c.fa);const f=new WM(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function YM(t,e,n){const r=ee(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!of(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tg(r.remoteStore,i.targetId),vp(r,i.targetId)}).catch(Qa)):(vp(r,i.targetId),await gp(r.localStore,i.targetId,!0))}async function XM(t,e){const n=ee(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tg(n.remoteStore,r.targetId))}async function JM(t,e,n){const r=s4(t);try{const i=await function(o,a){const u=ee(o),c=ze.now(),f=a.reduce((g,w)=>g.add(w.key),se());let d,m;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=Gn(),A=se();return u.os.getEntries(g,f).next(C=>{w=C,w.forEach((T,_)=>{_.isValidDocument()||(A=A.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,w)).next(C=>{d=C;const T=[];for(const _ of a){const E=vL(_,d.get(_.key).overlayedDocument);E!=null&&T.push(new Mi(_.key,E,RS(E.value.mapValue),Un.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,T,a)}).next(C=>{m=C;const T=C.applyToLocalDocumentSet(d,A);return u.documentOverlayCache.saveOverlays(g,C.batchId,T)})}).then(()=>({batchId:m.batchId,changes:FS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.xa[o.currentUser.toKey()];c||(c=new ke(ce)),c=c.insert(a,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await tl(r,i.changes),await df(r.remoteStore)}catch(i){const s=kg(i,"Failed to persist write");n.reject(s)}}async function vI(t,e){const n=ee(t);try{const r=await cM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?me(o.wa):i.removedDocuments.size>0&&(me(o.wa),o.wa=!1))}),await tl(n,r,e)}catch(r){await Qa(r)}}function L0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=ee(o);u.onlineState=a;let c=!1;u.queries.forEach((f,d)=>{for(const m of d.U_)m.j_(a)&&(c=!0)}),c&&Cg(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZM(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ke(Q.comparator);o=o.insert(s,ut.newNoDocument(s,Z.min()));const a=se().add(s),u=new cf(Z.min(),new Map,new ke(ce),o,a);await vI(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Pg(r)}else await gp(r.localStore,e,!1).then(()=>vp(r,e,n)).catch(Qa)}async function e4(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await uM(n.localStore,e);wI(n,r,null),_I(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tl(n,i)}catch(i){await Qa(i)}}async function t4(t,e,n){const r=ee(t);try{const i=await function(o,a){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,a).next(d=>(me(d!==null),f=d.keys(),u.mutationQueue.removeMutationBatch(c,d))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);wI(r,e,n),_I(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tl(r,i)}catch(i){await Qa(i)}}function _I(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function wI(t,e,n){const r=ee(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function vp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||EI(t,r)})}function EI(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Tg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Pg(t))}function M0(t,e,n){for(const r of n)r instanceof mI?(t.Ma.addReference(r.key,e),n4(t,r)):r instanceof gI?(q("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||EI(t,r.key)):X()}function n4(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(q("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Pg(t))}function Pg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Q(_e.fromString(e)),r=t.Na.next();t.Fa.set(r,new HM(n)),t.va=t.va.insert(n,r),uI(t.remoteStore,new Er(_n(OS(n.path)),r,"TargetPurposeLimboResolution",cg.oe))}}async function tl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const f=c&&!c.fromCache;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Eg.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>U.forEach(c,m=>U.forEach(m.qi,g=>f.persistence.referenceDelegate.addReference(d,m.targetId,g)).next(()=>U.forEach(m.Qi,g=>f.persistence.referenceDelegate.removeReference(d,m.targetId,g)))))}catch(d){if(!Ya(d))throw d;q("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const m=d.targetId;if(!d.fromCache){const g=f.ns.get(m),w=g.snapshotVersion,A=g.withLastLimboFreeSnapshotVersion(w);f.ns=f.ns.insert(m,A)}}}(r.localStore,s))}async function r4(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await sI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tl(n,r.us)}}function i4(t,e){const n=ee(t),r=n.Fa.get(e);if(r&&r.wa)return se().add(r.key);{let i=se();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function TI(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZM.bind(null,e),e.Sa.h_=UM.bind(null,e.eventManager),e.Sa.ka=zM.bind(null,e.eventManager),e}function s4(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t4.bind(null,e),e}class V0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ff(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return lM(this.persistence,new oM,e.initialUser,this.serializer)}createPersistence(e){return new rM(wg.Hr,this.serializer)}createSharedClientState(e){return new mM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>L0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r4.bind(null,this.syncEngine),await LM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VM}()}createDatastore(e){const n=ff(e.databaseInfo.databaseId),r=function(s){return new _M(s)}(e.databaseInfo);return function(s,o,a,u){return new TM(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new IM(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>L0(this.syncEngine,n,0),function(){return x0.D()?new x0:new gM}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,f){const d=new qM(i,s,o,a,u,c);return f&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ee(r);q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await el(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class a4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class l4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=SS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await c4(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>N0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>N0(e.remoteStore,i)),t._onlineComponents=e}function u4(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function c4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!u4(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Vh(t,new V0)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Vh(t,new V0);return t._offlineComponents}async function SI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await F0(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await F0(t,new o4))),t._onlineComponents}function f4(t){return SI(t).then(e=>e.syncEngine)}async function h4(t){const e=await SI(t),n=e.eventManager;return n.onListen=KM.bind(null,e.syncEngine),n.onUnlisten=YM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=XM.bind(null,e.syncEngine),n}function d4(t,e,n={}){const r=new Dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const f=new a4({next:m=>{o.enqueueAndForget(()=>jM(s,d)),m.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),d=new BM(a,f,{includeMetadataChanges:!0,ra:!0});return FM(s,d)}(await h4(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function II(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const j0=new Map;/**
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
 */function AI(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function p4(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function U0(t){if(!Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function z0(t){if(Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Tc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pf(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class B0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=II((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CD;switch(r.type){case"firstParty":return new ND(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=j0.get(n);r&&(q("ComponentProvider","Removing Datastore"),j0.delete(n),r.terminate())}(this),Promise.resolve()}}function m4(t,e,n,r={}){var i;const s=(t=Tc(t,mf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=at.MOCK_USER;else{a=Ux(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(c)}t._authCredentials=new PD(new TS(a,u))}}/**
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
 */class Qs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qs(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Lr extends Qs{constructor(e,n,r){super(e,n,OS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new Q(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function _p(t,e,...n){if(t=At(t),AI("collection","path",e),t instanceof mf){const r=_e.fromString(e,...n);return z0(r),new Lr(t,null,r)}{if(!(t instanceof $t||t instanceof Lr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return z0(r),new Lr(t.firestore,null,r)}}function g4(t,e,...n){if(t=At(t),arguments.length===1&&(e=SS.newId()),AI("doc","path",e),t instanceof mf){const r=_e.fromString(e,...n);return U0(r),new $t(t,null,new Q(r))}{if(!(t instanceof $t||t instanceof Lr))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return U0(r),new $t(t.firestore,t instanceof Lr?t.converter:null,new Q(r))}}/**
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
 */class y4{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new aI(this,"async_queue_retry"),this.hu=()=>{const n=Mh();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Dr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ya(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Rg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&X()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class bg extends mf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new y4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kI(this),this._firestoreClient.terminate()}}function v4(t,e){const n=typeof t=="object"?t:DT(),r=typeof t=="string"?t:"(default)",i=Xm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fx("firestore");s&&m4(i,...s)}return i}function RI(t){return t._firestoreClient||kI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,f){return new HD(a,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,II(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new l4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(ft.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class CI{constructor(e){this._methodName=e}}/**
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
 */class Ng{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const _4=/^__.*__$/;class w4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ja(e,this.data,n,this.fieldTransforms)}}function PI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Og{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Og(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Sc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(PI(this.fu)&&_4.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class E4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ff(e)}Fu(e,n,r,i=!1){return new Og({fu:e,methodName:n,vu:r,path:Ye.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bI(t){const e=t._freezeSettings(),n=ff(t._databaseId);return new E4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function T4(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);OI("Data must be an object, but it was:",o,r);const a=xI(r,o);let u,c;if(s.merge)u=new tn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const d of s.mergeFields){const m=I4(e,d,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);R4(f,m)||f.push(m)}u=new tn(f),c=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,c=o.fieldTransforms;return new w4(new Ut(a),u,c)}function S4(t,e,n,r=!1){return Dg(n,t.Fu(r?4:3,e))}function Dg(t,e){if(NI(t=At(t)))return OI("Unsupported field value:",e,t),xI(t,e);if(t instanceof CI)return function(r,i){if(!PI(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Dg(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ze.fromDate(r);return{timestampValue:wc(i.serializer,s)}}if(r instanceof ze){const s=new ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wc(i.serializer,s)}}if(r instanceof Ng)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ms)return{bytesValue:JS(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${pf(r)}`)}(t,e)}function xI(t,e){const n={};return IS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qs(t,(r,i)=>{const s=Dg(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Ng||t instanceof Ms||t instanceof $t||t instanceof CI)}function OI(t,e,n){if(!NI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=pf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function I4(t,e,n){if((e=At(e))instanceof xg)return e._internalPath;if(typeof e=="string")return DI(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const A4=new RegExp("[~\\*/\\[\\]]");function DI(t,e,n){if(e.search(A4)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xg(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,a+t+u)}function R4(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class LI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new k4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class k4 extends LI{data(){return super.data()}}function Lg(t,e){return typeof e=="string"?DI(t,e):e instanceof xg?e._internalPath:e._delegate._internalPath}/**
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
 */function C4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mg{}class P4 extends Mg{}function b4(t,e,...n){let r=[];e instanceof Mg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Vg).length,a=s.filter(u=>u instanceof gf).length;if(o>1||o>0&&a>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class gf extends P4{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gf(e,n,r)}_apply(e){const n=this._parse(e);return MI(e._query,n),new Qs(e.firestore,e.converter,cp(e._query,n))}_parse(e){const n=bI(e.firestore);return function(s,o,a,u,c,f,d){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){W0(d,f);const g=[];for(const w of d)g.push($0(u,s,w));m={arrayValue:{values:g}}}else m=$0(u,s,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||W0(d,f),m=S4(a,o,d,f==="in"||f==="not-in");return Ve.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function x4(t,e,n){const r=e,i=Lg("where",t);return gf._create(i,r,n)}class Vg extends Mg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)MI(o,u),o=cp(o,u)}(e._query,n),new Qs(e.firestore,e.converter,cp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $0(t,e,n){if(typeof(n=At(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DS(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!Q.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return h0(t,new Q(r))}if(n instanceof $t)return h0(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pf(n)}.`)}function W0(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class N4{convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return qs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ng(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Sa(e));default:return null}}convertTimestamp(e){const n=zr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);me(iI(r));const i=new Ia(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function O4(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Gl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class D4 extends LI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Iu extends D4{data(e={}){return super.data(e)}}class L4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Gl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new Gl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Gl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),f=o.indexOf(a.doc.key)),{type:M4(a.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function M4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class V4 extends N4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function F4(t){t=Tc(t,Qs);const e=Tc(t.firestore,bg),n=RI(e),r=new V4(e);return C4(t._query),d4(n,t._query).then(i=>new L4(e,r,t,i))}function VI(t,e){const n=Tc(t.firestore,bg),r=g4(t),i=O4(t.converter,e);return j4(n,[T4(bI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Un.exists(!1))]).then(()=>r)}function j4(t,e){return function(r,i){const s=new Dr;return r.asyncQueue.enqueueAndForget(async()=>JM(await f4(r),i,s)),s.promise}(RI(t),e)}(function(e,n=!0){(function(i){Hs=i})($s),Ps(new Si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new bg(new bD(r.getProvider("auth-internal")),new DD(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Or(l0,"4.6.3",e),Or(l0,"4.6.3","esm2017")})();const U4={apiKey:"AIzaSyBzh66S3qT6wUnOLYrrgf33m1ZF4jIx2Ps",authDomain:"jewel-garden.firebaseapp.com",projectId:"jewel-garden",storageBucket:"jewel-garden.appspot.com",messagingSenderId:"386872933475",appId:"1:386872933475:web:5d44f085d56bb869cd0c56"},FI=OT(U4),Fi=RD(FI),wp=v4(FI),z4=new xn,jI=async()=>{try{const e=(await LO(Fi,z4)).user,n=b4(_p(wp,"users"),x4("uid","==",e.uid));(await F4(n)).docs.length===0&&await VI(_p(wp,"users"),{uid:e.uid,name:e.displayName,authProvider:"google",email:e.email})}catch(t){console.error(t)}},B4=async(t,e)=>{try{await fO(Fi,t,e)}catch(n){console.error(n)}},$4=async(t,e,n)=>{try{const i=(await cO(Fi,e,n)).user;await VI(_p(wp,"users"),{uid:i.uid,name:t,authProvider:"local",email:e})}catch(r){console.error(r)}},W4=async t=>{try{await uO(Fi,t),alert("Password reset link sent!")}catch(e){console.error(e)}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function H4(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(f){try{c(r.next(f))}catch(d){o(d)}}function u(f){try{c(r.throw(f))}catch(d){o(d)}}function c(f){f.done?s(f.value):i(f.value).then(a,u)}c((r=r.apply(t,[])).next())})}function q4(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(f){return u([c,f])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(f){c=[6,f],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ss=function(){return ss=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ss.apply(this,arguments)},UI=function(t){return{loading:t==null,value:t}},K4=function(){return function(t,e){switch(e.type){case"error":return ss(ss({},t),{error:e.error,loading:!1,value:void 0});case"reset":return UI(e.defaultValue);case"value":return ss(ss({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},G4=function(t){var e=t?t():void 0,n=j.useReducer(K4(),UI(e)),r=n[0],i=n[1],s=j.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=j.useCallback(function(u){i({type:"error",error:u})},[]),a=j.useCallback(function(u){i({type:"value",value:u})},[]);return j.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Fg=function(t,e){var n=G4(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return j.useEffect(function(){var u=pO(t,function(c){return H4(void 0,void 0,void 0,function(){var f;return q4(this,function(d){switch(d.label){case 0:return[3,4];case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return f=d.sent(),s(f),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]),[a,i,r]};function Q4(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=Fg(Fi),o=Ba();return j.useEffect(()=>{s||i&&o("/dashboard")},[i,s]),b.jsx("div",{className:"login",children:b.jsxs("div",{className:"login__container",children:[b.jsx("input",{type:"text",className:"login__textBox",value:t,onChange:a=>e(a.target.value),placeholder:"E-mail Address"}),b.jsx("input",{type:"password",className:"login__textBox",value:n,onChange:a=>r(a.target.value),placeholder:"Password"}),b.jsx("button",{className:"login__btn",onClick:()=>B4(t,n),children:"Login"}),b.jsx("button",{className:"login__btn login__google",onClick:jI,children:"Login with Google"}),b.jsx("div",{children:b.jsx(Cs,{to:"/reset",children:"Forgot Password"})}),b.jsxs("div",{children:["Don't have an account? ",b.jsx(Cs,{to:"/register",children:"Register"})," now."]})]})})}function Y4(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),[o,a]=Fg(Fi),u=Ba(),c=()=>{i||alert("Please enter name"),$4(i,t,n)};return j.useEffect(()=>{a||o&&u("/dashboard",{replace:!0})},[o,a]),b.jsx("div",{className:"register",children:b.jsxs("div",{className:"register__container",children:[b.jsx("input",{type:"text",className:"register__textBox",value:i,onChange:f=>s(f.target.value),placeholder:"Full Name"}),b.jsx("input",{type:"text",className:"register__textBox",value:t,onChange:f=>e(f.target.value),placeholder:"E-mail Address"}),b.jsx("input",{type:"password",className:"register__textBox",value:n,onChange:f=>r(f.target.value),placeholder:"Password"}),b.jsx("button",{className:"register__btn",onClick:c,children:"Register"}),b.jsx("button",{className:"register__btn register__google",onClick:jI,children:"Register with Google"}),b.jsxs("div",{children:["Already have an account? ",b.jsx(Cs,{to:"/",children:"Login"})," now."]})]})})}function X4(){const[t,e]=j.useState(""),[n,r]=Fg(Fi),i=Ba();return j.useEffect(()=>{r||n&&i("/dashboard")},[n,r]),b.jsx("div",{className:"reset",children:b.jsxs("div",{className:"reset__container",children:[b.jsx("input",{type:"text",className:"reset__textBox",value:t,onChange:s=>e(s.target.value),placeholder:"E-mail Address"}),b.jsx("button",{className:"reset__btn",onClick:()=>W4(t),children:"Send password reset email"}),b.jsxs("div",{children:["Don't have an account? ",b.jsx(Cs,{to:"/register",children:"Register"})," now."]})]})})}const J4=""+new URL("../imgs/app-logo.jpg",import.meta.url).href,Z4=""+new URL("../imgs/jewel-lady-4.webp",import.meta.url).href,eV=({img:t,description:e})=>b.jsxs("div",{className:"relative rounded-sm overflow-hidden group",children:[b.jsx("img",{src:t,alt:"category 1",className:"w-full"}),b.jsx("a",{href:"#",className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition",children:e})]}),tV=""+new URL("../imgs/necklace.jpeg",import.meta.url).href,nV=""+new URL("../imgs/ring.jpeg",import.meta.url).href,rV=""+new URL("../imgs/bracelet.jpeg",import.meta.url).href,iV=""+new URL("../imgs/earings.jpeg",import.meta.url).href,sV=""+new URL("../imgs/anklets.jpeg",import.meta.url).href,oV=""+new URL("../imgs/pendants.jpeg",import.meta.url).href,zI=[{id:"neckalaces",label:"Necklaces",img:tV},{id:"rings",label:"Rings",img:nV},{id:"bracelets",label:"Bracelets",img:rV},{id:"earings",label:"Earings",img:iV},{id:"anklets",label:"Anklets",img:sV},{id:"pendants",label:"Pendants",img:oV}],aV=[{id:"silver",label:"Silver"},{id:"gold",label:"Gold"}],lV=[{id:"lkr",label:"LKR"},{id:"usd",label:"USD"}],uV=5,cV=()=>b.jsxs("div",{children:[b.jsx("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6",children:"shop by category"}),b.jsx("div",{className:"grid grid-cols-6 gap-6",children:zI.map((t,e)=>b.jsx(eV,{img:t.img,description:t.label},e))})]}),fV={name:"Untitled-name",type:"",price:0},BI=Hm({name:"JewelleryItem",initialState:fV,reducers:{updateName:(t,{payload:e})=>{t.name=e}}}),{updateName:hV}=BI.actions,dV=BI.reducer;function H0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?H0(Object(n),!0).forEach(function(r){Be(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ic(t){"@babel/helpers - typeof";return Ic=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ic(t)}function pV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mV(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gV(t,e,n){return e&&mV(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jg(t,e){return vV(t)||wV(t,e)||$I(t,e)||TV()}function nl(t){return yV(t)||_V(t)||$I(t)||EV()}function yV(t){if(Array.isArray(t))return Ep(t)}function vV(t){if(Array.isArray(t))return t}function _V(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wV(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(u){s=!0,a=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function $I(t,e){if(t){if(typeof t=="string")return Ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(t,e)}}function Ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function EV(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TV(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var q0=function(){},Ug={},WI={},HI=null,qI={mark:q0,measure:q0};try{typeof window<"u"&&(Ug=window),typeof document<"u"&&(WI=document),typeof MutationObserver<"u"&&(HI=MutationObserver),typeof performance<"u"&&(qI=performance)}catch{}var SV=Ug.navigator||{},K0=SV.userAgent,G0=K0===void 0?"":K0,$r=Ug,Ee=WI,Q0=HI,Ql=qI;$r.document;var rr=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",KI=~G0.indexOf("MSIE")||~G0.indexOf("Trident/"),Yl,Xl,Jl,Zl,eu,Qn="___FONT_AWESOME___",Tp=16,GI="fa",QI="svg-inline--fa",bi="data-fa-i2svg",Sp="data-fa-pseudo-element",IV="data-fa-pseudo-element-pending",zg="data-prefix",Bg="data-icon",Y0="fontawesome-i2svg",AV="async",RV=["HTML","HEAD","STYLE","SCRIPT"],YI=function(){try{return!0}catch{return!1}}(),ve="classic",be="sharp",$g=[ve,be];function rl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var Ca=rl((Yl={},Be(Yl,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Be(Yl,be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Yl)),Pa=rl((Xl={},Be(Xl,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Be(Xl,be,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Xl)),ba=rl((Jl={},Be(Jl,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Be(Jl,be,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Jl)),kV=rl((Zl={},Be(Zl,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Be(Zl,be,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Zl)),CV=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,XI="fa-layers-text",PV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bV=rl((eu={},Be(eu,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Be(eu,be,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),eu)),JI=[1,2,3,4,5,6,7,8,9,10],xV=JI.concat([11,12,13,14,15,16,17,18,19,20]),NV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xa=new Set;Object.keys(Pa[ve]).map(xa.add.bind(xa));Object.keys(Pa[be]).map(xa.add.bind(xa));var OV=[].concat($g,nl(xa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fi.GROUP,fi.SWAP_OPACITY,fi.PRIMARY,fi.SECONDARY]).concat(JI.map(function(t){return"".concat(t,"x")})).concat(xV.map(function(t){return"w-".concat(t)})),Yo=$r.FontAwesomeConfig||{};function DV(t){var e=Ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function LV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ee&&typeof Ee.querySelector=="function"){var MV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];MV.forEach(function(t){var e=jg(t,2),n=e[0],r=e[1],i=LV(DV(n));i!=null&&(Yo[r]=i)})}var ZI={styleDefault:"solid",familyDefault:"classic",cssPrefix:GI,replacementClass:QI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yo.familyPrefix&&(Yo.cssPrefix=Yo.familyPrefix);var Vs=W(W({},ZI),Yo);Vs.autoReplaceSvg||(Vs.observeMutations=!1);var G={};Object.keys(ZI).forEach(function(t){Object.defineProperty(G,t,{enumerable:!0,set:function(n){Vs[t]=n,Xo.forEach(function(r){return r(G)})},get:function(){return Vs[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(e){Vs.cssPrefix=e,Xo.forEach(function(n){return n(G)})},get:function(){return Vs.cssPrefix}});$r.FontAwesomeConfig=G;var Xo=[];function VV(t){return Xo.push(t),function(){Xo.splice(Xo.indexOf(t),1)}}var ur=Tp,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function FV(t){if(!(!t||!rr)){var e=Ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ee.head.insertBefore(e,r),t}}var jV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Na(){for(var t=12,e="";t-- >0;)e+=jV[Math.random()*62|0];return e}function Ys(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wg(t){return t.classList?Ys(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function eA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function UV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(eA(t[n]),'" ')},"").trim()}function yf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Hg(t){return t.size!==mn.size||t.x!==mn.x||t.y!==mn.y||t.rotate!==mn.rotate||t.flipX||t.flipY}function zV(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:c}}function BV(t){var e=t.transform,n=t.width,r=n===void 0?Tp:n,i=t.height,s=i===void 0?Tp:i,o=t.startCentered,a=o===void 0?!1:o,u="";return a&&KI?u+="translate(".concat(e.x/ur-r/2,"em, ").concat(e.y/ur-s/2,"em) "):a?u+="translate(calc(-50% + ".concat(e.x/ur,"em), calc(-50% + ").concat(e.y/ur,"em)) "):u+="translate(".concat(e.x/ur,"em, ").concat(e.y/ur,"em) "),u+="scale(".concat(e.size/ur*(e.flipX?-1:1),", ").concat(e.size/ur*(e.flipY?-1:1),") "),u+="rotate(".concat(e.rotate,"deg) "),u}var $V=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tA(){var t=GI,e=QI,n=G.cssPrefix,r=G.replacementClass,i=$V;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var X0=!1;function Fh(){G.autoAddCss&&!X0&&(FV(tA()),X0=!0)}var WV={mixout:function(){return{dom:{css:tA,insertCss:Fh}}},hooks:function(){return{beforeDOMElementCreation:function(){Fh()},beforeI2svg:function(){Fh()}}}},Yn=$r||{};Yn[Qn]||(Yn[Qn]={});Yn[Qn].styles||(Yn[Qn].styles={});Yn[Qn].hooks||(Yn[Qn].hooks={});Yn[Qn].shims||(Yn[Qn].shims=[]);var nn=Yn[Qn],nA=[],HV=function t(){Ee.removeEventListener("DOMContentLoaded",t),Ac=1,nA.map(function(e){return e()})},Ac=!1;rr&&(Ac=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),Ac||Ee.addEventListener("DOMContentLoaded",HV));function qV(t){rr&&(Ac?setTimeout(t,0):nA.push(t))}function il(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?eA(t):"<".concat(e," ").concat(UV(r),">").concat(s.map(il).join(""),"</").concat(e,">")}function J0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var jh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,u,c,f;for(r===void 0?(u=1,f=e[s[0]]):(u=0,f=r);u<o;u++)c=s[u],f=a(f,e[c],c,e);return f};function KV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Ip(t){var e=KV(t);return e.length===1?e[0].toString(16):null}function GV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Z0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ap(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Z0(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,Z0(e)):nn.styles[t]=W(W({},nn.styles[t]||{}),s),t==="fas"&&Ap("fa",e)}var tu,nu,ru,os=nn.styles,QV=nn.shims,YV=(tu={},Be(tu,ve,Object.values(ba[ve])),Be(tu,be,Object.values(ba[be])),tu),qg=null,rA={},iA={},sA={},oA={},aA={},XV=(nu={},Be(nu,ve,Object.keys(Ca[ve])),Be(nu,be,Object.keys(Ca[be])),nu);function JV(t){return~OV.indexOf(t)}function ZV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!JV(i)?i:null}var lA=function(){var e=function(s){return jh(os,function(o,a,u){return o[u]=jh(a,s,{}),o},{})};rA=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(u){return typeof u=="number"});a.forEach(function(u){i[u.toString(16)]=o})}return i}),iA=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(u){return typeof u=="string"});a.forEach(function(u){i[u]=o})}return i}),aA=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(u){i[u]=o}),i});var n="far"in os||G.autoFetchSvg,r=jh(QV,function(i,s){var o=s[0],a=s[1],u=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:u}),i},{names:{},unicodes:{}});sA=r.names,oA=r.unicodes,qg=vf(G.styleDefault,{family:G.familyDefault})};VV(function(t){qg=vf(t.styleDefault,{family:G.familyDefault})});lA();function Kg(t,e){return(rA[t]||{})[e]}function eF(t,e){return(iA[t]||{})[e]}function hi(t,e){return(aA[t]||{})[e]}function uA(t){return sA[t]||{prefix:null,iconName:null}}function tF(t){var e=oA[t],n=Kg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wr(){return qg}var Gg=function(){return{prefix:null,iconName:null,rest:[]}};function vf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=Ca[r][t],s=Pa[r][t]||Pa[r][i],o=t in nn.styles?t:null;return s||o||null}var ew=(ru={},Be(ru,ve,Object.keys(ba[ve])),Be(ru,be,Object.keys(ba[be])),ru);function _f(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Be(e,ve,"".concat(G.cssPrefix,"-").concat(ve)),Be(e,be,"".concat(G.cssPrefix,"-").concat(be)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(c){return ew[ve].includes(c)}))&&(a=ve),(t.includes(s[be])||t.some(function(c){return ew[be].includes(c)}))&&(a=be);var u=t.reduce(function(c,f){var d=ZV(G.cssPrefix,f);if(os[f]?(f=YV[a].includes(f)?kV[a][f]:f,o=f,c.prefix=f):XV[a].indexOf(f)>-1?(o=f,c.prefix=vf(f,{family:a})):d?c.iconName=d:f!==G.replacementClass&&f!==s[ve]&&f!==s[be]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var m=o==="fa"?uA(c.iconName):{},g=hi(c.prefix,c.iconName);m.prefix&&(o=null),c.iconName=m.iconName||g||c.iconName,c.prefix=m.prefix||c.prefix,c.prefix==="far"&&!os.far&&os.fas&&!G.autoFetchSvg&&(c.prefix="fas")}return c},Gg());return(t.includes("fa-brands")||t.includes("fab"))&&(u.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(u.prefix="fad"),!u.prefix&&a===be&&(os.fass||G.autoFetchSvg)&&(u.prefix="fass",u.iconName=hi(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Wr()||"fas"),u}var nF=function(){function t(){pV(this,t),this.definitions={}}return gV(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=W(W({},n.definitions[a]||{}),o[a]),Ap(a,o[a]);var u=ba[ve][a];u&&Ap(u,o[a]),lA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,u=o.iconName,c=o.icon,f=c[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[a][d]=c)}),n[a][u]=c}),n}}]),t}(),tw=[],as={},_s={},rF=Object.keys(_s);function iF(t,e){var n=e.mixoutsTo;return tw=t,as={},Object.keys(_s).forEach(function(r){rF.indexOf(r)===-1&&delete _s[r]}),tw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ic(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){as[o]||(as[o]=[]),as[o].push(s[o])})}r.provides&&r.provides(_s)}),n}function Rp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=as[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function xi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=as[t]||[];i.forEach(function(s){s.apply(null,n)})}function Xn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return _s[t]?_s[t].apply(null,e):void 0}function kp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Wr();if(e)return e=hi(n,e)||e,J0(cA.definitions,n,e)||J0(nn.styles,n,e)}var cA=new nF,sF=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,xi("noAuto")},oF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(xi("beforeI2svg",e),Xn("pseudoElements2svg",e),Xn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,qV(function(){lF({autoReplaceSvgRoot:n}),xi("watch",e)})}},aF={icon:function(e){if(e===null)return null;if(Ic(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:hi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=vf(e[0]);return{prefix:r,iconName:hi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(G.cssPrefix,"-"))>-1||e.match(CV))){var i=_f(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wr(),iconName:hi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Wr();return{prefix:s,iconName:hi(s,e)||e}}}},Mt={noAuto:sF,config:G,dom:oF,parse:aF,library:cA,findIconDefinition:kp,toHtml:il},lF=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ee:n;(Object.keys(nn.styles).length>0||G.autoFetchSvg)&&rr&&G.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function wf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return il(r)})}}),Object.defineProperty(t,"node",{get:function(){if(rr){var r=Ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function uF(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Hg(o)&&n.found&&!r.found){var a=n.width,u=n.height,c={x:a/u/2,y:.5};i.style=yf(W(W({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function cF(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:W(W({},i),{},{id:o}),children:r}]}]}function Qg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,u=t.title,c=t.maskId,f=t.titleId,d=t.extra,m=t.watchable,g=m===void 0?!1:m,w=r.found?r:n,A=w.width,C=w.height,T=i==="fak",_=[G.replacementClass,s?"".concat(G.cssPrefix,"-").concat(s):""].filter(function(I){return d.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(d.classes).join(" "),E={children:[],attributes:W(W({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(C)})},x=T&&!~d.classes.indexOf("fa-fw")?{width:"".concat(A/C*16*.0625,"em")}:{};g&&(E.attributes[bi]=""),u&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(f||Na())},children:[u]}),delete E.attributes.title);var M=W(W({},E),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:W(W({},x),d.styles)}),V=r.found&&n.found?Xn("generateAbstractMask",M)||{children:[],attributes:{}}:Xn("generateAbstractIcon",M)||{children:[],attributes:{}},S=V.children,y=V.attributes;return M.children=S,M.attributes=y,a?cF(M):uF(M)}function nw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,u=a===void 0?!1:a,c=W(W(W({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});u&&(c[bi]="");var f=W({},o.styles);Hg(i)&&(f.transform=BV({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=yf(f);d.length>0&&(c.style=d);var m=[];return m.push({tag:"span",attributes:c,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function fF(t){var e=t.content,n=t.title,r=t.extra,i=W(W(W({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=yf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Uh=nn.styles;function Cp(t){var e=t[0],n=t[1],r=t.slice(4),i=jg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(fi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(fi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(fi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var hF={found:!1,width:512,height:512};function dF(t,e){!YI&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pp(t,e){var n=e;return e==="fa"&&G.styleDefault!==null&&(e=Wr()),new Promise(function(r,i){if(Xn("missingIconAbstract"),n==="fa"){var s=uA(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Uh[e]&&Uh[e][t]){var o=Uh[e][t];return r(Cp(o))}dF(t,e),r(W(W({},hF),{},{icon:G.showMissingIcons&&t?Xn("missingIconAbstract")||{}:{}}))})}var rw=function(){},bp=G.measurePerformance&&Ql&&Ql.mark&&Ql.measure?Ql:{mark:rw,measure:rw},Lo='FA "6.5.2"',pF=function(e){return bp.mark("".concat(Lo," ").concat(e," begins")),function(){return fA(e)}},fA=function(e){bp.mark("".concat(Lo," ").concat(e," ends")),bp.measure("".concat(Lo," ").concat(e),"".concat(Lo," ").concat(e," begins"),"".concat(Lo," ").concat(e," ends"))},Yg={begin:pF,end:fA},Au=function(){};function iw(t){var e=t.getAttribute?t.getAttribute(bi):null;return typeof e=="string"}function mF(t){var e=t.getAttribute?t.getAttribute(zg):null,n=t.getAttribute?t.getAttribute(Bg):null;return e&&n}function gF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function yF(){if(G.autoReplaceSvg===!0)return Ru.replace;var t=Ru[G.autoReplaceSvg];return t||Ru.replace}function vF(t){return Ee.createElementNS("http://www.w3.org/2000/svg",t)}function _F(t){return Ee.createElement(t)}function hA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vF:_F:n;if(typeof t=="string")return Ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(hA(o,{ceFn:r}))}),i}function wF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ru={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(hA(i),n)}),n.getAttribute(bi)===null&&G.keepOriginalSource){var r=Ee.createComment(wF(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Wg(n).indexOf(G.replacementClass))return Ru.replace(e);var i=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,u){return u===G.replacementClass||u.match(i)?a.toSvg.push(u):a.toNode.push(u),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return il(a)}).join(`
`);n.setAttribute(bi,""),n.innerHTML=o}};function sw(t){t()}function dA(t,e){var n=typeof e=="function"?e:Au;if(t.length===0)n();else{var r=sw;G.mutateApproach===AV&&(r=$r.requestAnimationFrame||sw),r(function(){var i=yF(),s=Yg.begin("mutate");t.map(i),s(),n()})}}var Xg=!1;function pA(){Xg=!0}function xp(){Xg=!1}var Rc=null;function ow(t){if(Q0&&G.observeMutations){var e=t.treeCallback,n=e===void 0?Au:e,r=t.nodeCallback,i=r===void 0?Au:r,s=t.pseudoElementsCallback,o=s===void 0?Au:s,a=t.observeMutationsRoot,u=a===void 0?Ee:a;Rc=new Q0(function(c){if(!Xg){var f=Wr();Ys(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!iw(d.addedNodes[0])&&(G.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&G.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&iw(d.target)&&~NV.indexOf(d.attributeName))if(d.attributeName==="class"&&mF(d.target)){var m=_f(Wg(d.target)),g=m.prefix,w=m.iconName;d.target.setAttribute(zg,g||f),w&&d.target.setAttribute(Bg,w)}else gF(d.target)&&i(d.target)})}}),rr&&Rc.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function EF(){Rc&&Rc.disconnect()}function TF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function SF(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=_f(Wg(t));return i.prefix||(i.prefix=Wr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=eF(i.prefix,t.innerText)||Kg(i.prefix,Ip(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function IF(t){var e=Ys(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||Na()):(e["aria-hidden"]="true",e.focusable="false")),e}function AF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function aw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=SF(t),r=n.iconName,i=n.prefix,s=n.rest,o=IF(t),a=Rp("parseNodeAttributes",{},t),u=e.styleParser?TF(t):[];return W({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:u,attributes:o}},a)}var RF=nn.styles;function mA(t){var e=G.autoReplaceSvg==="nest"?aw(t,{styleParser:!1}):aw(t);return~e.extra.classes.indexOf(XI)?Xn("generateLayersText",t,e):Xn("generateSvgReplacementMutation",t,e)}var Hr=new Set;$g.map(function(t){Hr.add("fa-".concat(t))});Object.keys(Ca[ve]).map(Hr.add.bind(Hr));Object.keys(Ca[be]).map(Hr.add.bind(Hr));Hr=nl(Hr);function lw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();var n=Ee.documentElement.classList,r=function(d){return n.add("".concat(Y0,"-").concat(d))},i=function(d){return n.remove("".concat(Y0,"-").concat(d))},s=G.autoFetchSvg?Hr:$g.map(function(f){return"fa-".concat(f)}).concat(Object.keys(RF));s.includes("fa")||s.push("fa");var o=[".".concat(XI,":not([").concat(bi,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(bi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ys(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Yg.begin("onTree"),c=a.reduce(function(f,d){try{var m=mA(d);m&&f.push(m)}catch(g){YI||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(m){dA(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),u(),f()})}).catch(function(m){u(),d(m)})})}function kF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mA(t).then(function(n){n&&dA([n],e)})}function CF(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:kp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:kp(i||{})),t(r,W(W({},n),{},{mask:i}))}}var PF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,u=a===void 0?null:a,c=n.maskId,f=c===void 0?null:c,d=n.title,m=d===void 0?null:d,g=n.titleId,w=g===void 0?null:g,A=n.classes,C=A===void 0?[]:A,T=n.attributes,_=T===void 0?{}:T,E=n.styles,x=E===void 0?{}:E;if(e){var M=e.prefix,V=e.iconName,S=e.icon;return wf(W({type:"icon"},e),function(){return xi("beforeDOMElementCreation",{iconDefinition:e,params:n}),G.autoA11y&&(m?_["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(w||Na()):(_["aria-hidden"]="true",_.focusable="false")),Qg({icons:{main:Cp(S),mask:u?Cp(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:V,transform:W(W({},mn),i),symbol:o,title:m,maskId:f,titleId:w,extra:{attributes:_,styles:x,classes:C}})})}},bF={mixout:function(){return{icon:CF(PF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=lw,n.nodeCallback=kF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ee:r,s=n.callback,o=s===void 0?function(){}:s;return lw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,u=r.transform,c=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(g,w){Promise.all([Pp(i,a),f.iconName?Pp(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var C=jg(A,2),T=C[0],_=C[1];g([n,Qg({icons:{main:T,mask:_},prefix:a,iconName:i,transform:u,symbol:c,maskId:d,title:s,titleId:o,extra:m,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,u=yf(a);u.length>0&&(i.style=u);var c;return Hg(o)&&(c=Xn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},xF={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return wf({type:"layer"},function(){xi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(u){o=o.concat(u.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(nl(s)).join(" ")},children:o}]})}}}},NF={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,u=r.attributes,c=u===void 0?{}:u,f=r.styles,d=f===void 0?{}:f;return wf({type:"counter",content:n},function(){return xi("beforeDOMElementCreation",{content:n,params:r}),fF({content:n.toString(),title:s,extra:{attributes:c,styles:d,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(nl(a))}})})}}}},OF={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?mn:i,o=r.title,a=o===void 0?null:o,u=r.classes,c=u===void 0?[]:u,f=r.attributes,d=f===void 0?{}:f,m=r.styles,g=m===void 0?{}:m;return wf({type:"text",content:n},function(){return xi("beforeDOMElementCreation",{content:n,params:r}),nw({content:n,transform:W(W({},mn),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(G.cssPrefix,"-layers-text")].concat(nl(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,u=null;if(KI){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/c,u=f.height/c}return G.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,nw({content:n.innerHTML,width:a,height:u,transform:s,title:i,extra:o,watchable:!0})])}}},DF=new RegExp('"',"ug"),uw=[1105920,1112319];function LF(t){var e=t.replace(DF,""),n=GV(e,0),r=n>=uw[0]&&n<=uw[1],i=e.length===2?e[0]===e[1]:!1;return{value:Ip(i?e[0]:e),isSecondary:r||i}}function cw(t,e){var n="".concat(IV).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ys(t.children),o=s.filter(function(S){return S.getAttribute(Sp)===e})[0],a=$r.getComputedStyle(t,e),u=a.getPropertyValue("font-family").match(PV),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),r();if(u&&f!=="none"&&f!==""){var d=a.getPropertyValue("content"),m=~["Sharp"].indexOf(u[2])?be:ve,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Pa[m][u[2].toLowerCase()]:bV[m][c],w=LF(d),A=w.value,C=w.isSecondary,T=u[0].startsWith("FontAwesome"),_=Kg(g,A),E=_;if(T){var x=tF(A);x.iconName&&x.prefix&&(_=x.iconName,g=x.prefix)}if(_&&!C&&(!o||o.getAttribute(zg)!==g||o.getAttribute(Bg)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);var M=AF(),V=M.extra;V.attributes[Sp]=e,Pp(_,g).then(function(S){var y=Qg(W(W({},M),{},{icons:{main:S,mask:Gg()},prefix:g,iconName:E,extra:V,watchable:!0})),I=Ee.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(I,t.firstChild):t.appendChild(I),I.outerHTML=y.map(function(R){return il(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function MF(t){return Promise.all([cw(t,"::before"),cw(t,"::after")])}function VF(t){return t.parentNode!==document.head&&!~RV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Sp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fw(t){if(rr)return new Promise(function(e,n){var r=Ys(t.querySelectorAll("*")).filter(VF).map(MF),i=Yg.begin("searchPseudoElements");pA(),Promise.all(r).then(function(){i(),xp(),e()}).catch(function(){i(),xp(),n()})})}var FF={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ee:r;G.searchPseudoElements&&fw(i)}}},hw=!1,jF={mixout:function(){return{dom:{unwatch:function(){pA(),hw=!0}}}},hooks:function(){return{bootstrap:function(){ow(Rp("mutationObserverCallbacks",{}))},noAuto:function(){EF()},watch:function(n){var r=n.observeMutationsRoot;hw?xp():ow(Rp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},dw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},UF={mixout:function(){return{parse:{transform:function(n){return dw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=dw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(u," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:m};return{tag:"g",attributes:W({},g.outer),children:[{tag:"g",attributes:W({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:W(W({},r.icon.attributes),g.path)}]}]}}}},zh={x:0,y:0,width:"100%",height:"100%"};function pw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function zF(t){return t.tag==="g"?t.children:[t]}var BF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?_f(i.split(" ").map(function(o){return o.trim()})):Gg();return s.prefix||(s.prefix=Wr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,u=n.transform,c=s.width,f=s.icon,d=o.width,m=o.icon,g=zV({transform:u,containerWidth:d,iconWidth:c}),w={tag:"rect",attributes:W(W({},zh),{},{fill:"white"})},A=f.children?{children:f.children.map(pw)}:{},C={tag:"g",attributes:W({},g.inner),children:[pw(W({tag:f.tag,attributes:W(W({},f.attributes),g.path)},A))]},T={tag:"g",attributes:W({},g.outer),children:[C]},_="mask-".concat(a||Na()),E="clip-".concat(a||Na()),x={tag:"mask",attributes:W(W({},zh),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,T]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:zF(m)},x]};return r.push(M,{tag:"rect",attributes:W({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(_,")")},zh)}),{children:r,attributes:i}}}},$F={provides:function(e){var n=!1;$r.matchMedia&&(n=$r.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:W(W({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=W(W({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:W(W({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:W(W({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:W(W({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:W(W({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:W(W({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:W(W({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:W(W({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},WF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},HF=[WV,bF,xF,NF,OF,FF,jF,UF,BF,$F,WF];iF(HF,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;var Np=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var qF=Mt.icon;Mt.layer;Mt.text;Mt.counter;var gA={exports:{}},KF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",GF=KF,QF=GF;function yA(){}function vA(){}vA.resetWarningCache=yA;var YF=function(){function t(r,i,s,o,a,u){if(u!==QF){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vA,resetWarningCache:yA};return n.PropTypes=n,n};gA.exports=YF();var XF=gA.exports;const re=Ow(XF);function mw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mw(Object(n),!0).forEach(function(r){ls(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kc(t){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kc(t)}function ls(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function JF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZF(t,e){if(t==null)return{};var n=JF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Op(t){return ej(t)||tj(t)||nj(t)||rj()}function ej(t){if(Array.isArray(t))return Dp(t)}function tj(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nj(t,e){if(t){if(typeof t=="string")return Dp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dp(t,e)}}function Dp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ij(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,u=t.spin,c=t.spinPulse,f=t.spinReverse,d=t.pulse,m=t.fixedWidth,g=t.inverse,w=t.border,A=t.listItem,C=t.flip,T=t.size,_=t.rotation,E=t.pull,x=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":u,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":m,"fa-inverse":g,"fa-border":w,"fa-li":A,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},ls(e,"fa-".concat(T),typeof T<"u"&&T!==null),ls(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),ls(e,"fa-pull-".concat(E),typeof E<"u"&&E!==null),ls(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(M){return x[M]?M:null}).filter(function(M){return M})}function sj(t){return t=t-0,t===t}function _A(t){return sj(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var oj=["style"];function aj(t){return t.charAt(0).toUpperCase()+t.slice(1)}function lj(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=_A(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[aj(i)]=s:e[i]=s,e},{})}function wA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(u){return wA(t,u)}),i=Object.keys(e.attributes||{}).reduce(function(u,c){var f=e.attributes[c];switch(c){case"class":u.attrs.className=f,delete e.attributes.class;break;case"style":u.attrs.style=lj(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?u.attrs[c.toLowerCase()]=f:u.attrs[_A(c)]=f}return u},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=ZF(n,oj);return i.attrs.style=dn(dn({},i.attrs.style),o),t.apply(void 0,[e.tag,dn(dn({},i.attrs),a)].concat(Op(r)))}var EA=!1;try{EA=!0}catch{}function uj(){if(!EA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gw(t){if(t&&kc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Np.icon)return Np.icon(t);if(t===null)return null;if(t&&kc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ls({},t,e):{}}var yw={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Cc=La.forwardRef(function(t,e){var n=dn(dn({},yw),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,u=n.titleId,c=n.maskId,f=gw(r),d=Bh("classes",[].concat(Op(ij(n)),Op((o||"").split(" ")))),m=Bh("transform",typeof n.transform=="string"?Np.transform(n.transform):n.transform),g=Bh("mask",gw(i)),w=qF(f,dn(dn(dn(dn({},d),m),g),{},{symbol:s,title:a,titleId:u,maskId:c}));if(!w)return uj("Could not find icon",f),null;var A=w.abstract,C={ref:e};return Object.keys(n).forEach(function(T){yw.hasOwnProperty(T)||(C[T]=n[T])}),cj(A[0],C)});Cc.displayName="FontAwesomeIcon";Cc.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};var cj=wA.bind(null,La.createElement),fj={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},hj={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};const Pc=t=>b.jsxs("span",{className:"px-1",children:[t.toUpperCase(),"."]}),dj=({id:t,img:e,title:n,priceLast:r,priceNow:i,currency:s,date:o,description:a})=>{const u=jm(m=>m.jewelleryItem.name),c=Um(),f=Ba();j.useEffect(()=>{console.log("itemName",u)},[]);const d=()=>{c(hV("Jade Ring")),f(`/dashboard/item/${t}`,{state:{id:t,img:e,title:n,priceLast:r,priceNow:i,currency:s,date:o,description:a}})};return b.jsxs("div",{className:"bg-white shadow rounded overflow-hidden group",onClick:d,children:[b.jsxs("div",{className:"relative h-64 flex items-center justify-center",children:[b.jsx("img",{src:e,alt:"product 1",className:"object-contain h-full"}),b.jsxs("div",{className:`absolute inset-0 bg-black bg-opacity-40 flex items-center
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition`,children:[b.jsx("a",{className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"view product",children:b.jsx(Cc,{icon:hj})}),b.jsx("a",{className:"text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition",title:"add to wishlist",children:b.jsx(Cc,{icon:fj})})]})]}),b.jsxs("div",{className:"pt-4 pb-3 px-4",children:[b.jsx("a",{children:b.jsx("h4",{className:"uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition",children:n})}),b.jsxs("div",{className:"flex items-baseline mb-1 space-x-2",children:[b.jsxs("p",{className:"text-xl text-primary font-semibold ",children:[Pc(s),i]}),b.jsxs("p",{className:"text-sm text-gray-400 line-through",children:[Pc(r!==void 0?s:""),r]})]}),b.jsxs("div",{className:"flex items-center",children:[b.jsxs("div",{className:"flex gap-1 text-sm text-yellow-400",children:[b.jsx("span",{children:b.jsx("i",{className:"fa-solid fa-star"})}),b.jsx("span",{children:b.jsx("i",{className:"fa-solid fa-star"})}),b.jsx("span",{children:b.jsx("i",{className:"fa-solid fa-star"})}),b.jsx("span",{children:b.jsx("i",{className:"fa-solid fa-star"})}),b.jsx("span",{children:b.jsx("i",{className:"fa-solid fa-star"})})]}),b.jsx("div",{className:"text-xs text-gray-500 ml-3",children:"(150)"}),b.jsx("div",{className:"text-xs text-gray-500 ml-3",children:o})]})]}),b.jsx("a",{className:"block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition",children:"Add to cart"})]})};function TA(t,e){return function(){return t.apply(e,arguments)}}const{toString:pj}=Object.prototype,{getPrototypeOf:Jg}=Object,Ef=(t=>e=>{const n=pj.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cn=t=>(t=t.toLowerCase(),e=>Ef(e)===t),Tf=t=>e=>typeof e===t,{isArray:Xs}=Array,Oa=Tf("undefined");function mj(t){return t!==null&&!Oa(t)&&t.constructor!==null&&!Oa(t.constructor)&&Wt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const SA=cn("ArrayBuffer");function gj(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&SA(t.buffer),e}const yj=Tf("string"),Wt=Tf("function"),IA=Tf("number"),Sf=t=>t!==null&&typeof t=="object",vj=t=>t===!0||t===!1,ku=t=>{if(Ef(t)!=="object")return!1;const e=Jg(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},_j=cn("Date"),wj=cn("File"),Ej=cn("Blob"),Tj=cn("FileList"),Sj=t=>Sf(t)&&Wt(t.pipe),Ij=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Wt(t.append)&&((e=Ef(t))==="formdata"||e==="object"&&Wt(t.toString)&&t.toString()==="[object FormData]"))},Aj=cn("URLSearchParams"),[Rj,kj,Cj,Pj]=["ReadableStream","Request","Response","Headers"].map(cn),bj=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Xs(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function AA(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const RA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kA=t=>!Oa(t)&&t!==RA;function Lp(){const{caseless:t}=kA(this)&&this||{},e={},n=(r,i)=>{const s=t&&AA(e,i)||i;ku(e[s])&&ku(r)?e[s]=Lp(e[s],r):ku(r)?e[s]=Lp({},r):Xs(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&sl(arguments[r],n);return e}const xj=(t,e,n,{allOwnKeys:r}={})=>(sl(e,(i,s)=>{n&&Wt(i)?t[s]=TA(i,n):t[s]=i},{allOwnKeys:r}),t),Nj=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Oj=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Dj=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Jg(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Lj=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Mj=t=>{if(!t)return null;if(Xs(t))return t;let e=t.length;if(!IA(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Vj=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Jg(Uint8Array)),Fj=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},jj=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Uj=cn("HTMLFormElement"),zj=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),vw=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Bj=cn("RegExp"),CA=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};sl(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},$j=t=>{CA(t,(e,n)=>{if(Wt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Wt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Wj=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Xs(t)?r(t):r(String(t).split(e)),n},Hj=()=>{},qj=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,$h="abcdefghijklmnopqrstuvwxyz",_w="0123456789",PA={DIGIT:_w,ALPHA:$h,ALPHA_DIGIT:$h+$h.toUpperCase()+_w},Kj=(t=16,e=PA.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Gj(t){return!!(t&&Wt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Qj=t=>{const e=new Array(10),n=(r,i)=>{if(Sf(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Xs(r)?[]:{};return sl(r,(o,a)=>{const u=n(o,i+1);!Oa(u)&&(s[a]=u)}),e[i]=void 0,s}}return r};return n(t,0)},Yj=cn("AsyncFunction"),Xj=t=>t&&(Sf(t)||Wt(t))&&Wt(t.then)&&Wt(t.catch),L={isArray:Xs,isArrayBuffer:SA,isBuffer:mj,isFormData:Ij,isArrayBufferView:gj,isString:yj,isNumber:IA,isBoolean:vj,isObject:Sf,isPlainObject:ku,isReadableStream:Rj,isRequest:kj,isResponse:Cj,isHeaders:Pj,isUndefined:Oa,isDate:_j,isFile:wj,isBlob:Ej,isRegExp:Bj,isFunction:Wt,isStream:Sj,isURLSearchParams:Aj,isTypedArray:Vj,isFileList:Tj,forEach:sl,merge:Lp,extend:xj,trim:bj,stripBOM:Nj,inherits:Oj,toFlatObject:Dj,kindOf:Ef,kindOfTest:cn,endsWith:Lj,toArray:Mj,forEachEntry:Fj,matchAll:jj,isHTMLForm:Uj,hasOwnProperty:vw,hasOwnProp:vw,reduceDescriptors:CA,freezeMethods:$j,toObjectSet:Wj,toCamelCase:zj,noop:Hj,toFiniteNumber:qj,findKey:AA,global:RA,isContextDefined:kA,ALPHABET:PA,generateString:Kj,isSpecCompliantForm:Gj,toJSONObject:Qj,isAsyncFn:Yj,isThenable:Xj};function te(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}L.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const bA=te.prototype,xA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{xA[t]={value:t}});Object.defineProperties(te,xA);Object.defineProperty(bA,"isAxiosError",{value:!0});te.from=(t,e,n,r,i,s)=>{const o=Object.create(bA);return L.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),te.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Jj=null;function Mp(t){return L.isPlainObject(t)||L.isArray(t)}function NA(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function ww(t,e,n){return t?t.concat(e).map(function(i,s){return i=NA(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function Zj(t){return L.isArray(t)&&!t.some(Mp)}const eU=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function If(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(A,C){return!L.isUndefined(C[A])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(i))throw new TypeError("visitor must be a function");function c(w){if(w===null)return"";if(L.isDate(w))return w.toISOString();if(!u&&L.isBlob(w))throw new te("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(w)||L.isTypedArray(w)?u&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function f(w,A,C){let T=w;if(w&&!C&&typeof w=="object"){if(L.endsWith(A,"{}"))A=r?A:A.slice(0,-2),w=JSON.stringify(w);else if(L.isArray(w)&&Zj(w)||(L.isFileList(w)||L.endsWith(A,"[]"))&&(T=L.toArray(w)))return A=NA(A),T.forEach(function(E,x){!(L.isUndefined(E)||E===null)&&e.append(o===!0?ww([A],x,s):o===null?A:A+"[]",c(E))}),!1}return Mp(w)?!0:(e.append(ww(C,A,s),c(w)),!1)}const d=[],m=Object.assign(eU,{defaultVisitor:f,convertValue:c,isVisitable:Mp});function g(w,A){if(!L.isUndefined(w)){if(d.indexOf(w)!==-1)throw Error("Circular reference detected in "+A.join("."));d.push(w),L.forEach(w,function(T,_){(!(L.isUndefined(T)||T===null)&&i.call(e,T,L.isString(_)?_.trim():_,A,m))===!0&&g(T,A?A.concat(_):[_])}),d.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ew(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Zg(t,e){this._pairs=[],t&&If(t,this,e)}const OA=Zg.prototype;OA.append=function(e,n){this._pairs.push([e,n])};OA.toString=function(e){const n=e?function(r){return e.call(this,r,Ew)}:Ew;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function tU(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function DA(t,e,n){if(!e)return t;const r=n&&n.encode||tU,i=n&&n.serialize;let s;if(i?s=i(e,n):s=L.isURLSearchParams(e)?e.toString():new Zg(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Tw{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(r){r!==null&&e(r)})}}const LA={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nU=typeof URLSearchParams<"u"?URLSearchParams:Zg,rU=typeof FormData<"u"?FormData:null,iU=typeof Blob<"u"?Blob:null,sU={isBrowser:!0,classes:{URLSearchParams:nU,FormData:rU,Blob:iU},protocols:["http","https","file","blob","url","data"]},ey=typeof window<"u"&&typeof document<"u",oU=(t=>ey&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),aU=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lU=ey&&window.location.href||"http://localhost",uU=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ey,hasStandardBrowserEnv:oU,hasStandardBrowserWebWorkerEnv:aU,origin:lU},Symbol.toStringTag,{value:"Module"})),an={...uU,...sU};function cU(t,e){return If(t,new an.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return an.isNode&&L.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function fU(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function hU(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function MA(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&L.isArray(i)?i.length:o,u?(L.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!L.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&L.isArray(i[o])&&(i[o]=hU(i[o])),!a)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(r,i)=>{e(fU(r),i,n,0)}),n}return null}function dU(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ol={transitional:LA,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return i?JSON.stringify(MA(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cU(e,this.formSerializer).toString();if((a=L.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return If(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),dU(e)):e}],transformResponse:[function(e){const n=this.transitional||ol.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?te.from(a,te.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:an.classes.FormData,Blob:an.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch"],t=>{ol.headers[t]={}});const pU=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mU=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&pU[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Sw=Symbol("internals");function Io(t){return t&&String(t).trim().toLowerCase()}function Cu(t){return t===!1||t==null?t:L.isArray(t)?t.map(Cu):String(t)}function gU(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const yU=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wh(t,e,n,r,i){if(L.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!L.isString(e)){if(L.isString(r))return e.indexOf(r)!==-1;if(L.isRegExp(r))return r.test(e)}}function vU(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function _U(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class It{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,u,c){const f=Io(u);if(!f)throw new Error("header name must be a non-empty string");const d=L.findKey(i,f);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||u]=Cu(a))}const o=(a,u)=>L.forEach(a,(c,f)=>s(c,f,u));if(L.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(L.isString(e)&&(e=e.trim())&&!yU(e))o(mU(e),n);else if(L.isHeaders(e))for(const[a,u]of e.entries())s(u,a,r);else e!=null&&s(n,e,r);return this}get(e,n){if(e=Io(e),e){const r=L.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return gU(i);if(L.isFunction(n))return n.call(this,i,r);if(L.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Io(e),e){const r=L.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Wh(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Io(o),o){const a=L.findKey(r,o);a&&(!n||Wh(r,r[a],a,n))&&(delete r[a],i=!0)}}return L.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||Wh(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return L.forEach(this,(i,s)=>{const o=L.findKey(r,s);if(o){n[o]=Cu(i),delete n[s];return}const a=e?vU(s):String(s).trim();a!==s&&delete n[s],n[a]=Cu(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&L.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Sw]=this[Sw]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Io(o);r[a]||(_U(i,o),r[a]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}}It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(It.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});L.freezeMethods(It);function Hh(t,e){const n=this||ol,r=e||n,i=It.from(r.headers);let s=r.data;return L.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function VA(t){return!!(t&&t.__CANCEL__)}function Js(t,e,n){te.call(this,t??"canceled",te.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(Js,te,{__CANCEL__:!0});function FA(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new te("Request failed with status code "+n.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function wU(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function EU(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const c=Date.now(),f=r[s];o||(o=c),n[i]=u,r[i]=c;let d=s,m=0;for(;d!==i;)m+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const g=f&&c-f;return g?Math.round(m*1e3/g):void 0}}function TU(t,e){let n=0;const r=1e3/e;let i=null;return function(){const o=this===!0,a=Date.now();if(o||a-n>r)return i&&(clearTimeout(i),i=null),n=a,t.apply(null,arguments);i||(i=setTimeout(()=>(i=null,n=Date.now(),t.apply(null,arguments)),r-(a-n)))}}const bc=(t,e,n=3)=>{let r=0;const i=EU(50,250);return TU(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,u=o-r,c=i(u),f=o<=a;r=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&f?(a-o)/c:void 0,event:s,lengthComputable:a!=null};d[e?"download":"upload"]=!0,t(d)},n)},SU=an.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=L.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),IU=an.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(r)&&o.push("path="+r),L.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function AU(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function RU(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function jA(t,e){return t&&!AU(e)?RU(t,e):e}const Iw=t=>t instanceof It?{...t}:t;function Ni(t,e){e=e||{};const n={};function r(c,f,d){return L.isPlainObject(c)&&L.isPlainObject(f)?L.merge.call({caseless:d},c,f):L.isPlainObject(f)?L.merge({},f):L.isArray(f)?f.slice():f}function i(c,f,d){if(L.isUndefined(f)){if(!L.isUndefined(c))return r(void 0,c,d)}else return r(c,f,d)}function s(c,f){if(!L.isUndefined(f))return r(void 0,f)}function o(c,f){if(L.isUndefined(f)){if(!L.isUndefined(c))return r(void 0,c)}else return r(void 0,f)}function a(c,f,d){if(d in e)return r(c,f);if(d in t)return r(void 0,c)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,f)=>i(Iw(c),Iw(f),!0)};return L.forEach(Object.keys(Object.assign({},t,e)),function(f){const d=u[f]||i,m=d(t[f],e[f],f);L.isUndefined(m)&&d!==a||(n[f]=m)}),n}const UA=t=>{const e=Ni({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=It.from(o),e.url=DA(jA(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let u;if(L.isFormData(n)){if(an.hasStandardBrowserEnv||an.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((u=o.getContentType())!==!1){const[c,...f]=u?u.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...f].join("; "))}}if(an.hasStandardBrowserEnv&&(r&&L.isFunction(r)&&(r=r(e)),r||r!==!1&&SU(e.url))){const c=i&&s&&IU.read(s);c&&o.set(i,c)}return e},kU=typeof XMLHttpRequest<"u",CU=kU&&function(t){return new Promise(function(n,r){const i=UA(t);let s=i.data;const o=It.from(i.headers).normalize();let{responseType:a}=i,u;function c(){i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(i.method.toUpperCase(),i.url,!0),f.timeout=i.timeout;function d(){if(!f)return;const g=It.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),A={data:!a||a==="text"||a==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:t,request:f};FA(function(T){n(T),c()},function(T){r(T),c()},A),f=null}"onloadend"in f?f.onloadend=d:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(d)},f.onabort=function(){f&&(r(new te("Request aborted",te.ECONNABORTED,i,f)),f=null)},f.onerror=function(){r(new te("Network Error",te.ERR_NETWORK,i,f)),f=null},f.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const A=i.transitional||LA;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),r(new te(w,A.clarifyTimeoutError?te.ETIMEDOUT:te.ECONNABORTED,i,f)),f=null},s===void 0&&o.setContentType(null),"setRequestHeader"in f&&L.forEach(o.toJSON(),function(w,A){f.setRequestHeader(A,w)}),L.isUndefined(i.withCredentials)||(f.withCredentials=!!i.withCredentials),a&&a!=="json"&&(f.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&f.addEventListener("progress",bc(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",bc(i.onUploadProgress)),(i.cancelToken||i.signal)&&(u=g=>{f&&(r(!g||g.type?new Js(null,t,f):g),f.abort(),f=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const m=wU(i.url);if(m&&an.protocols.indexOf(m)===-1){r(new te("Unsupported protocol "+m+":",te.ERR_BAD_REQUEST,t));return}f.send(s||null)})},PU=(t,e)=>{let n=new AbortController,r;const i=function(u){if(!r){r=!0,o();const c=u instanceof Error?u:this.reason;n.abort(c instanceof te?c:new Js(c instanceof Error?c.message:c))}};let s=e&&setTimeout(()=>{i(new te(`timeout ${e} of ms exceeded`,te.ETIMEDOUT))},e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(u=>{u&&(u.removeEventListener?u.removeEventListener("abort",i):u.unsubscribe(i))}),t=null)};t.forEach(u=>u&&u.addEventListener&&u.addEventListener("abort",i));const{signal:a}=n;return a.unsubscribe=o,[a,()=>{s&&clearTimeout(s),s=null}]},bU=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,i;for(;r<n;)i=r+e,yield t.slice(r,i),r=i},xU=async function*(t,e,n){for await(const r of t)yield*bU(ArrayBuffer.isView(r)?r:await n(String(r)),e)},Aw=(t,e,n,r,i)=>{const s=xU(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(a){const{done:u,value:c}=await s.next();if(u){a.close(),r();return}let f=c.byteLength;n&&n(o+=f),a.enqueue(new Uint8Array(c))},cancel(a){return r(a),s.return()}},{highWaterMark:2})},Rw=(t,e)=>{const n=t!=null;return r=>setTimeout(()=>e({lengthComputable:n,total:t,loaded:r}))},Af=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",zA=Af&&typeof ReadableStream=="function",Vp=Af&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),NU=zA&&(()=>{let t=!1;const e=new Request(an.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),kw=64*1024,Fp=zA&&!!(()=>{try{return L.isReadableStream(new Response("").body)}catch{}})(),xc={stream:Fp&&(t=>t.body)};Af&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!xc[e]&&(xc[e]=L.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new te(`Response type '${e}' is not supported`,te.ERR_NOT_SUPPORT,r)})})})(new Response);const OU=async t=>{if(t==null)return 0;if(L.isBlob(t))return t.size;if(L.isSpecCompliantForm(t))return(await new Request(t).arrayBuffer()).byteLength;if(L.isArrayBufferView(t))return t.byteLength;if(L.isURLSearchParams(t)&&(t=t+""),L.isString(t))return(await Vp(t)).byteLength},DU=async(t,e)=>{const n=L.toFiniteNumber(t.getContentLength());return n??OU(e)},LU=Af&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:u,responseType:c,headers:f,withCredentials:d="same-origin",fetchOptions:m}=UA(t);c=c?(c+"").toLowerCase():"text";let[g,w]=i||s||o?PU([i,s],o):[],A,C;const T=()=>{!A&&setTimeout(()=>{g&&g.unsubscribe()}),A=!0};let _;try{if(u&&NU&&n!=="get"&&n!=="head"&&(_=await DU(f,r))!==0){let V=new Request(e,{method:"POST",body:r,duplex:"half"}),S;L.isFormData(r)&&(S=V.headers.get("content-type"))&&f.setContentType(S),V.body&&(r=Aw(V.body,kw,Rw(_,bc(u)),null,Vp))}L.isString(d)||(d=d?"cors":"omit"),C=new Request(e,{...m,signal:g,method:n.toUpperCase(),headers:f.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let E=await fetch(C);const x=Fp&&(c==="stream"||c==="response");if(Fp&&(a||x)){const V={};["status","statusText","headers"].forEach(y=>{V[y]=E[y]});const S=L.toFiniteNumber(E.headers.get("content-length"));E=new Response(Aw(E.body,kw,a&&Rw(S,bc(a,!0)),x&&T,Vp),V)}c=c||"text";let M=await xc[L.findKey(xc,c)||"text"](E,t);return!x&&T(),w&&w(),await new Promise((V,S)=>{FA(V,S,{data:M,headers:It.from(E.headers),status:E.status,statusText:E.statusText,config:t,request:C})})}catch(E){throw T(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new te("Network Error",te.ERR_NETWORK,t,C),{cause:E.cause||E}):te.from(E,E&&E.code,t,C)}}),jp={http:Jj,xhr:CU,fetch:LU};L.forEach(jp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Cw=t=>`- ${t}`,MU=t=>L.isFunction(t)||t===null||t===!1,BA={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!MU(n)&&(r=jp[(o=String(n)).toLowerCase()],r===void 0))throw new te(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,u])=>`adapter ${a} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Cw).join(`
`):" "+Cw(s[0]):"as no adapter specified";throw new te("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:jp};function qh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Js(null,t)}function Pw(t){return qh(t),t.headers=It.from(t.headers),t.data=Hh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),BA.getAdapter(t.adapter||ol.adapter)(t).then(function(r){return qh(t),r.data=Hh.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return VA(r)||(qh(t),r&&r.response&&(r.response.data=Hh.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const $A="1.7.2",ty={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ty[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const bw={};ty.transitional=function(e,n,r){function i(s,o){return"[Axios v"+$A+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new te(i(o," has been removed"+(n?" in "+n:"")),te.ERR_DEPRECATED);return n&&!bw[o]&&(bw[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function VU(t,e,n){if(typeof t!="object")throw new te("options must be an object",te.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new te("option "+s+" must be "+u,te.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new te("Unknown option "+s,te.ERR_BAD_OPTION)}}const Up={assertOptions:VU,validators:ty},cr=Up.validators;class gi{constructor(e){this.defaults=e,this.interceptors={request:new Tw,response:new Tw}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ni(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Up.assertOptions(r,{silentJSONParsing:cr.transitional(cr.boolean),forcedJSONParsing:cr.transitional(cr.boolean),clarifyTimeoutError:cr.transitional(cr.boolean)},!1),i!=null&&(L.isFunction(i)?n.paramsSerializer={serialize:i}:Up.assertOptions(i,{encode:cr.function,serialize:cr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","common"],w=>{delete s[w]}),n.headers=It.concat(o,s);const a=[];let u=!0;this.interceptors.request.forEach(function(A){typeof A.runWhen=="function"&&A.runWhen(n)===!1||(u=u&&A.synchronous,a.unshift(A.fulfilled,A.rejected))});const c=[];this.interceptors.response.forEach(function(A){c.push(A.fulfilled,A.rejected)});let f,d=0,m;if(!u){const w=[Pw.bind(this),void 0];for(w.unshift.apply(w,a),w.push.apply(w,c),m=w.length,f=Promise.resolve(n);d<m;)f=f.then(w[d++],w[d++]);return f}m=a.length;let g=n;for(d=0;d<m;){const w=a[d++],A=a[d++];try{g=w(g)}catch(C){A.call(this,C);break}}try{f=Pw.call(this,g)}catch(w){return Promise.reject(w)}for(d=0,m=c.length;d<m;)f=f.then(c[d++],c[d++]);return f}getUri(e){e=Ni(this.defaults,e);const n=jA(e.baseURL,e.url);return DA(n,e.params,e.paramsSerializer)}}L.forEach(["delete","get","head","options"],function(e){gi.prototype[e]=function(n,r){return this.request(Ni(r||{},{method:e,url:n,data:(r||{}).data}))}});L.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ni(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}gi.prototype[e]=n(),gi.prototype[e+"Form"]=n(!0)});class ny{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Js(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new ny(function(i){e=i}),cancel:e}}}function FU(t){return function(n){return t.apply(null,n)}}function jU(t){return L.isObject(t)&&t.isAxiosError===!0}const zp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zp).forEach(([t,e])=>{zp[e]=t});function WA(t){const e=new gi(t),n=TA(gi.prototype.request,e);return L.extend(n,gi.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return WA(Ni(t,i))},n}const Oe=WA(ol);Oe.Axios=gi;Oe.CanceledError=Js;Oe.CancelToken=ny;Oe.isCancel=VA;Oe.VERSION=$A;Oe.toFormData=If;Oe.AxiosError=te;Oe.Cancel=Oe.CanceledError;Oe.all=function(e){return Promise.all(e)};Oe.spread=FU;Oe.isAxiosError=jU;Oe.mergeConfig=Ni;Oe.AxiosHeaders=It;Oe.formToJSON=t=>MA(L.isHTMLForm(t)?new FormData(t):t);Oe.getAdapter=BA.getAdapter;Oe.HttpStatusCode=zp;Oe.default=Oe;const UU="http://localhost:3000/api/v1",xw=Oe.create({baseURL:UU}),zU=async()=>{try{const t=await xw.get("/products");console.log("res",t);let n=await(async r=>{for(let i=0;i<r.data.length;i++){let s;try{s=await xw.get(`/products/image/${r.data[i].image}`,{responseType:"blob"}),console.error("itemImage",s,r.data[i].name),s.data&&(r.data[i].image=URL.createObjectURL(s.data))}catch{console.error("image loading failed")}}return r})(t);return console.log("returned ",n.data),n.data}catch{return[]}},BU={items:[],error:null},Bp=cb("itemList/fetchItems",async(t,{rejectWithValue:e})=>{try{const n=await zU();return console.error("fetchFavoriteWatchlistSymbols :: ",n),n}catch(n){return console.error("fetchFavoriteWatchlistSymbols :: ",n),n instanceof Error?e(n.message):e("An unexpected error occurred")}}),$U=Hm({name:"itemList",initialState:BU,reducers:{},extraReducers:t=>{t.addCase(Bp.fulfilled,(e,n)=>{console.log(n.payload),e.items=n.payload}).addCase(Bp.rejected,(e,n)=>{e.error=n.payload})}}),WU=$U.reducer,HU=J1({jewelleryItem:dV,user:Pb,itemList:WU}),qU=nb({reducer:HU}),KU=Um,GU=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),i=jm(o=>o.itemList.items)||[],s=KU();return j.useEffect(()=>{i.length===0?s(Bp()):r(!1)},[s,i.length]),j.useEffect(()=>{if(i.length>0){let o=[];o=[...i].sort((a,u)=>{const c=new Date(a.dateCreated).getTime();return new Date(u.dateCreated).getTime()-c}),e(o),console.log("on sort best offer",o)}},[i]),b.jsxs("div",{className:"mt-10",children:[b.jsx("h2",{className:"text-2xl font-medium text-gray-800 uppercase mb-6",children:"Recommended for You"}),b.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[t.map(o=>b.jsx(dj,{id:o.id,img:o.image,currency:o.currency,priceLast:o.priceLast,priceNow:o.price,title:o.name,description:o.description,date:o.dateCreated},o.id)),n&&b.jsx("div",{children:"Loading ...."})]})]})},Nw=()=>b.jsxs("div",{className:"py-16 px-16",children:[b.jsx(cV,{}),b.jsx(GU,{})]}),QU=()=>b.jsx("div",{className:"text-3xl text-center",children:"Coming Soon...."}),YU=()=>b.jsx("div",{className:"text-3xl text-center",children:"Coming Soon ..."}),Kh=({options:t,onSelect:e})=>{const[n,r]=j.useState(!1),[i,s]=j.useState("Please Select"),o=j.useRef(null);j.useEffect(()=>{const c=f=>{const d=f.target;o.current&&d.role!=="menuitem"&&r(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]);const a=()=>r(!n),u=c=>{a(),s(c.label),e(c)};return b.jsxs("div",{className:"relative inline-block text-left",ref:o,children:[b.jsx("div",{children:b.jsxs("button",{type:"button",className:"inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:a,children:[i,n&&b.jsx("svg",{className:"-mr-1 ml-2 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:b.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z",clipRule:"evenodd"})})]})}),n&&b.jsx("div",{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",children:b.jsx("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:t.map(c=>b.jsx("div",{onClick:()=>u(c),className:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",role:"menuitem",children:c.label},c.id))})})]})};let XU="http://localhost:3000";const JU=()=>{const t=j.useRef(null),e={name:"",description:"",image:"",brand:"",price:0,priceLast:0,currency:"",category:"",countInStock:0,rating:"",numReviews:0,isFeatured:!1},[n,r]=j.useState(e),i=()=>{var A,C;console.error("add item",n);const g=new FormData;g.append("name",n.name),g.append("description",n.description),g.append("brand",n.brand),g.append("price",n.price),g.append("priceLast",n.priceLast),g.append("currency",n.currency),g.append("category",n.category),g.append("countInStock",n.countInStock),g.append("rating",n.rating),g.append("numReviews",n.numReviews),g.append("isFeatured",n.isFeatured);const w=((A=t.current)==null?void 0:A.files)&&((C=t.current)==null?void 0:C.files[0]);w&&g.append("image",w),Oe.put(`${XU}/api/v1/products`,g,{headers:{"Content-Type":"multipart/form-data"}}).then(T=>{console.log(T)}).catch(T=>{console.error(T)})},s=()=>{r(e)},o=g=>typeof n[g]=="string"||typeof n[g]>"u",a=g=>g==="price"||g==="priceLast"||g==="countInStock"||g==="numReviews",u=g=>g==="isFeatured",c=(g,w)=>{let A={...n};o(w)?A[w]=g.target.value:a(w)?A[w]=parseFloat(g.target.value):u(w)&&(A[w]=g.target.checked),r(A)},f=g=>{r({...n,brand:g.id}),console.error("product",n)},d=g=>{r({...n,currency:g.id}),console.error("product",n)},m=g=>{r({...n,category:g.id}),console.error("product",n)};return b.jsx("div",{className:"p-10",children:b.jsxs("div",{className:"grid grid-cols-3 px-10 gap-4",children:[b.jsx("div",{className:"col-span-3 text-center p-10 text-4xl",children:"Add Products"}),b.jsx("div",{className:"p-4",children:"Name"}),b.jsx("input",{type:"text",className:"p-4 col-span-2",value:n.name,onChange:g=>c(g,"name"),placeholder:"Name"}),b.jsx("div",{className:"p-4",children:"Description"}),b.jsx("input",{type:"text",className:"p-4 col-span-2",value:n.description,onChange:g=>c(g,"description"),placeholder:"Description"}),b.jsx("div",{className:"p-4",children:"Image"}),b.jsx("input",{ref:t,className:"p-4 col-span-2",type:"file"}),b.jsx("div",{className:"p-4",children:"Brand"}),b.jsx("div",{className:"p-4 col-span-2",children:b.jsx(Kh,{options:aV,onSelect:f})}),b.jsx("div",{className:"p-4",children:"Price"}),b.jsx("input",{type:"number",className:"p-4 col-span-2",value:n.price,onChange:g=>c(g,"price"),placeholder:"Price"}),b.jsx("div",{className:"p-4",children:"Price Earlier"}),b.jsx("input",{type:"number",className:"p-4 col-span-2",value:n.priceLast,onChange:g=>c(g,"priceLast"),placeholder:"Price Earlier"}),b.jsx("div",{className:"p-4",children:"Currency"}),b.jsx("div",{className:"p-4 col-span-2",children:b.jsx(Kh,{options:lV,onSelect:d})}),b.jsx("div",{className:"p-4",children:"Category"}),b.jsx("div",{className:"p-4 col-span-2",children:b.jsx(Kh,{options:zI,onSelect:m})}),b.jsx("div",{className:"p-4",children:"Stock"}),b.jsx("input",{type:"number",className:"p-4 col-span-2",value:n.countInStock,onChange:g=>c(g,"countInStock"),placeholder:"Stock"}),b.jsx("button",{className:"col-span-3 p-10 bg-black border-primary text-white",onClick:()=>i(),children:"Add"}),b.jsx("button",{className:"col-span-3 p-10 bg-black border-primary text-white",onClick:()=>s(),children:"Clear All"})]})})},ZU=()=>{const t=Bs(),{img:e,title:n,priceLast:r,priceNow:i,currency:s,description:o}=t.state||{},[a,u]=j.useState(1),[c,f]=j.useState(0),[d,m]=j.useState(0),[g,w]=j.useState(!1),A=T=>{w(!0),f(T.nativeEvent.offsetX),m(T.nativeEvent.offsetY)},C=()=>{w(!1)};return b.jsx("div",{children:b.jsxs("div",{className:"grid grid-cols-3 px-10 gap-4 h-[800px]",children:[b.jsx("div",{className:"p-4",children:b.jsx("div",{children:b.jsx("img",{src:e,alt:"product 1",className:"object-contain h-full group-hover: cursor-zoom-in",onMouseMove:A,onMouseLeave:C})})}),!g&&b.jsxs("div",{className:"p-4 col-span-2",children:[b.jsx("div",{className:"text-6xl font-bold",children:n}),b.jsx("div",{className:"text-3xl text-gray-600 font-semibold",children:o}),b.jsxs("p",{className:"text-3xl text-primary font-semibold ",children:[Pc(s),i]}),b.jsxs("p",{className:"text-xl text-gray-400 line-through",children:[Pc(r!==void 0?s:""),r]}),b.jsxs("div",{className:"flex items-center py-4",children:[b.jsx("div",{className:"pr-4",children:"Quantity"}),b.jsx("button",{className:"text-2xl bg-gray-200 h-8 w-8",disabled:a===1,onClick:()=>u(a-1),children:"-"}),b.jsx("label",{className:"text-xl px-4",children:a}),b.jsx("button",{className:"text-xl bg-gray-200 h-8 w-8",disabled:a===uV,onClick:()=>u(a+1),children:"+"})]}),b.jsxs("div",{className:"flex",children:[b.jsx("button",{className:"py-1 px-4 text-xl text-center text-white bg-cyan-500 border border-cyan-500 rounded hover:bg-transparent hover:text-cyan-500 transition",children:"Buy Now"}),b.jsx("span",{className:"p-3"}),b.jsx("button",{className:"py-1 px-4 text-xl text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition",children:"Add To Cart"})]})]}),g&&b.jsx("div",{className:"p-4 col-span-2 overflow-hidden relative",children:b.jsx("img",{src:e,alt:"product 1",className:"object-contain absolute",style:{width:2e3,left:-c,top:-d}})})]})})},$p=[{path:"",label:"Home",element:b.jsx(Nw,{})},{path:"home",label:"Home",element:b.jsx(Nw,{})},{path:"orders",label:"Orders",element:b.jsx(QU,{})},{path:"accountSettings",label:"Account Settings",element:b.jsx(YU,{})},{path:"admin",label:"Admin",element:b.jsx(JU,{})}],e3=[{path:"item/:itemId",element:b.jsx(ZU,{})}],t3=()=>{const[t,e]=j.useState($p[0]),[n,r]=j.useState(!0),i=jm(a=>a.user),s=Bs();j.useEffect(()=>{const a=s.pathname.replaceAll("/","");r(s.pathname.includes("dashboard/home")||a==="dashboard")},[s.pathname]),j.useEffect(()=>{var u;const a=(u=document.querySelector("header"))==null?void 0:u.offsetHeight;console.log("header height from header",a),document.documentElement.style.setProperty("--header-height",`${a}px`)},[n]);const o=a=>{e(a)};return b.jsxs("header",{className:n?"":"h-[120px]",children:[b.jsx("nav",{className:"bg-gray-800",children:b.jsx("div",{className:"flex",children:b.jsxs("div",{className:"flex items-center justify-between flex-grow md:px-12 py-2",children:[b.jsx(Cs,{to:"home",children:b.jsx("img",{src:J4,alt:"Logo",className:"w-12 h-12"})}),b.jsx("div",{className:"flex items-center space-x-6 capitalize",children:$p.map(a=>a.path===""||a.path==="admin"&&!i.isAdmin?"":b.jsx(Cs,{to:a.path,className:t.path===a.path?"text-gray-200 hover:text-white transition active":"text-gray-200 hover:text-white transition",onClick:()=>o(a),children:a.label},a.path))}),b.jsxs("div",{className:"text-white",children:[b.jsx("span",{className:"pr-2",children:i.name}),b.jsx("span",{className:"pr-2",children:"|"}),b.jsx("span",{children:i.email})]})]})})}),n&&b.jsx("div",{className:"bg-contain bg-no-repeat bg-right py-36 bg-[#b4c5cb]",style:{backgroundImage:`url(${Z4})`},children:b.jsxs("div",{className:"container",children:[b.jsxs("h1",{className:"text-6xl text-black-800 font-medium mb-4 capitalize",children:["Radiance ",b.jsx("br",{}),"Redefined"]}),b.jsxs("p",{className:"text-white",children:["Embrace the essence of elegance and let your ",b.jsx("br",{}),"beauty shine with our exquisite jewelry. ",b.jsx("br",{}),"Because true beauty isn't just seen, it's felt."]}),b.jsx("div",{className:"mt-12",children:b.jsx("a",{href:"#",className:`bg-primary border border-primary text-white px-8 py-3 font-medium
                    rounded-md hover:bg-transparent hover:text-primary`,children:"Shop Now"})})]})})]})},n3=()=>b.jsx("footer",{className:"bg-gray-800 py-4",children:b.jsx("div",{className:"flex items-center justify-center",children:b.jsx("p",{className:"text-white",children:"© Jewel Garden - All Right Reserved"})})});function r3(){console.log("window height",window.innerHeight);const t=j.useCallback(()=>{var r,i;const e=(r=document.querySelector("header"))==null?void 0:r.offsetHeight,n=(i=document.querySelector("footer"))==null?void 0:i.offsetHeight;document.documentElement.style.setProperty("--header-height",`${e}px`),document.documentElement.style.setProperty("--footer-height",`${n}px`)},[]);return j.useEffect(()=>(t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}),[t]),b.jsxs(b.Fragment,{children:[b.jsx(t3,{}),b.jsx("div",{className:"outlet-container",children:b.jsx(vx,{})}),b.jsx(n3,{})]})}const i3=()=>b.jsx("div",{children:"..."});function s3(){const t=Um();let e=!0;return j.useEffect(()=>{t(Cb({name:"subodha",email:"subodha@gmail.com",address:"colombo",isAdmin:e}))},[]),b.jsx("div",{className:"app",children:b.jsx(kx,{basename:"/jewel-garden",children:b.jsx(j.Suspense,{fallback:b.jsx(i3,{}),children:b.jsxs(wx,{children:[b.jsx(ii,{path:"/",element:b.jsx(Q4,{})}),b.jsx(ii,{path:"/register",element:b.jsx(Y4,{})}),b.jsx(ii,{path:"/reset",element:b.jsx(X4,{})}),b.jsxs(ii,{path:"/dashboard",element:b.jsx(r3,{}),children:[$p.map(n=>(n.path!=="admin"||e)&&b.jsx(ii,{path:n.path,element:n.element},n.path)),e3.map(n=>b.jsx(ii,{path:n.path,element:n.element},n.path))]})]})})})})}const o3=()=>b.jsx(yP,{store:qU,children:b.jsx(s3,{})});Qh.createRoot(document.getElementById("root")).render(b.jsx(La.StrictMode,{children:b.jsx(o3,{})}));
