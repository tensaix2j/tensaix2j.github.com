(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Iy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J0={exports:{}},Wu={},Q0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),By=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Hy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),um=Symbol.iterator;function Wy(t){return t===null||typeof t!="object"?null:(t=um&&t[um]||t["@@iterator"],typeof t=="function"?t:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function _a(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}_a.prototype.isReactComponent={};_a.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function i_(){}i_.prototype=_a.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=n_,this.updater=n||e_}var Ah=bh.prototype=new i_;Ah.constructor=bh;t_(Ah,_a.prototype);Ah.isPureReactComponent=!0;var cm=Array.isArray,r_=Object.prototype.hasOwnProperty,Rh={current:null},s_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)r_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ko,type:t,key:s,ref:a,props:r,_owner:Rh.current}}function jy(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function Xy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fm=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xy(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ko:case Dy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+_c(a,0):i,cm(r)?(n="",t!=null&&(n=t.replace(fm,"$&/")+"/"),Vl(r,e,n,"",function(u){return u})):r!=null&&(Ch(r)&&(r=jy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",cm(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+_c(s,o);a+=Vl(s,e,n,l,r)}else if(l=Wy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+_c(s,o++),a+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Hl={transition:null},Yy={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Rh};function o_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=_a;Ye.Fragment=Uy;Ye.Profiler=Oy;Ye.PureComponent=bh;Ye.StrictMode=Fy;Ye.Suspense=Vy;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;Ye.act=o_;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=t_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Rh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)r_.call(e,l)&&!s_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ko,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:By,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ky,_context:t},t.Consumer=t};Ye.createElement=a_;Ye.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:zy,render:t}};Ye.isValidElement=Ch;Ye.lazy=function(t){return{$$typeof:Gy,_payload:{_status:-1,_result:t},_init:$y}};Ye.memo=function(t,e){return{$$typeof:Hy,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};Ye.unstable_act=o_;Ye.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ye.useContext=function(t){return dn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ye.useId=function(){return dn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ye.useRef=function(t){return dn.current.useRef(t)};Ye.useState=function(t){return dn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return dn.current.useTransition()};Ye.version="18.3.1";Q0.exports=Ye;var j=Q0.exports;const ns=Iy(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=j,Ky=Symbol.for("react.element"),Zy=Symbol.for("react.fragment"),Jy=Object.prototype.hasOwnProperty,Qy=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eS={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Jy.call(e,i)&&!eS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ky,type:t,key:s,ref:a,props:r,_owner:Qy.current}}Wu.Fragment=Zy;Wu.jsx=l_;Wu.jsxs=l_;J0.exports=Wu;var z=J0.exports,Df={},u_={exports:{}},Ln={},c_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,$){var ee=k.length;k.push($);e:for(;0<ee;){var oe=ee-1>>>1,he=k[oe];if(0<r(he,$))k[oe]=$,k[ee]=he,ee=oe;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var $=k[0],ee=k.pop();if(ee!==$){k[0]=ee;e:for(var oe=0,he=k.length,Ge=he>>>1;oe<Ge;){var qe=2*(oe+1)-1,Ne=k[qe],Z=qe+1,de=k[Z];if(0>r(Ne,ee))Z<he&&0>r(de,Ne)?(k[oe]=de,k[Z]=ee,oe=Z):(k[oe]=Ne,k[qe]=ee,oe=qe);else if(Z<he&&0>r(de,ee))k[oe]=de,k[Z]=ee,oe=Z;else break e}}return $}function r(k,$){var ee=k.sortIndex-$.sortIndex;return ee!==0?ee:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=k)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function S(k){if(x=!1,v(k),!_)if(n(l)!==null)_=!0,W(b);else{var $=n(u);$!==null&&B(S,$.startTime-k)}}function b(k,$){_=!1,x&&(x=!1,h(y),y=-1),p=!0;var ee=d;try{for(v($),f=n(l);f!==null&&(!(f.expirationTime>$)||k&&!C());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var he=oe(f.expirationTime<=$);$=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),v($)}else i(l);f=n(l)}if(f!==null)var Ge=!0;else{var qe=n(u);qe!==null&&B(S,qe.startTime-$),Ge=!1}return Ge}finally{f=null,d=ee,p=!1}}var T=!1,A=null,y=-1,R=5,P=-1;function C(){return!(t.unstable_now()-P<R)}function O(){if(A!==null){var k=t.unstable_now();P=k;var $=!0;try{$=A(!0,k)}finally{$?X():(T=!1,A=null)}}else T=!1}var X;if(typeof g=="function")X=function(){g(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,N=K.port2;K.port1.onmessage=O,X=function(){N.postMessage(null)}}else X=function(){m(O,0)};function W(k){A=k,T||(T=!0,X())}function B(k,$){y=m(function(){k(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,W(b))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var ee=d;d=$;try{return k()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=d;d=k;try{return $()}finally{d=ee}},t.unstable_scheduleCallback=function(k,$,ee){var oe=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,k){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,k={id:c++,callback:$,priorityLevel:k,startTime:ee,expirationTime:he,sortIndex:-1},ee>oe?(k.sortIndex=ee,e(u,k),n(l)===null&&k===n(u)&&(x?(h(y),y=-1):x=!0,B(S,ee-oe))):(k.sortIndex=he,e(l,k),_||p||(_=!0,W(b))),k},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(k){var $=d;return function(){var ee=d;d=$;try{return k.apply(this,arguments)}finally{d=ee}}}})(f_);c_.exports=f_;var tS=c_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=j,Rn=tS;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d_=new Set,po={};function ds(t,e){ta(t,e),ta(t+"Capture",e)}function ta(t,e){for(po[t]=e,t=0;t<e.length;t++)d_.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,iS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},hm={};function rS(t){return Uf.call(hm,t)?!0:Uf.call(dm,t)?!1:iS.test(t)?hm[t]=!0:(dm[t]=!0,!1)}function sS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aS(t,e,n,i){if(e===null||typeof e>"u"||sS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Lh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aS(e,n,r,i)&&(n=null),i||r===null?rS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),m_=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,vc;function $a(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function oS(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Bf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Us:return"Fragment";case Ds:return"Portal";case Ff:return"Profiler";case Ih:return"StrictMode";case Of:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case p_:return(t.displayName||"Context")+".Consumer";case h_:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:Bf(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Bf(t(e))}catch{}}return null}function lS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(t){var e=g_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=uS(t))}function __(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=g_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function lu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zf(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v_(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function Vf(t,e){v_(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hf(t,e,n){(e!=="number"||lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ya=Array.isArray;function Xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Ya(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function x_(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function y_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?y_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,S_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){cS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function M_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function E_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=M_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(t,e){if(e){if(fS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yf=null,$s=null,Ys=null;function xm(t){if(t=Vo(t)){if(typeof Yf!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=qu(e),Yf(t.stateNode,t.type,e))}}function T_(t){$s?Ys?Ys.push(t):Ys=[t]:$s=t}function w_(){if($s){var t=$s,e=Ys;if(Ys=$s=null,xm(t),e)for(t=0;t<e.length;t++)xm(e[t])}}function b_(t,e){return t(e)}function A_(){}var Sc=!1;function R_(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return b_(t,e,n)}finally{Sc=!1,($s!==null||Ys!==null)&&(A_(),w_())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var i=qu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var qf=!1;if(Yi)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){qf=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{qf=!1}function dS(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var no=!1,uu=null,cu=!1,Kf=null,hS={onError:function(t){no=!0,uu=t}};function pS(t,e,n,i,r,s,a,o,l){no=!1,uu=null,dS.apply(hS,arguments)}function mS(t,e,n,i,r,s,a,o,l){if(pS.apply(this,arguments),no){if(no){var u=uu;no=!1,uu=null}else throw Error(ie(198));cu||(cu=!0,Kf=u)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function C_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(hs(t)!==t)throw Error(ie(188))}function gS(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ym(r),t;if(s===i)return ym(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function P_(t){return t=gS(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var N_=Rn.unstable_scheduleCallback,Sm=Rn.unstable_cancelCallback,_S=Rn.unstable_shouldYield,vS=Rn.unstable_requestPaint,Nt=Rn.unstable_now,xS=Rn.unstable_getCurrentPriorityLevel,Oh=Rn.unstable_ImmediatePriority,I_=Rn.unstable_UserBlockingPriority,fu=Rn.unstable_NormalPriority,yS=Rn.unstable_LowPriority,D_=Rn.unstable_IdlePriority,ju=null,Si=null;function SS(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:TS,MS=Math.log,ES=Math.LN2;function TS(t){return t>>>=0,t===0?32:31-(MS(t)/ES|0)|0}var Qo=64,el=4194304;function qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function du(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=qa(o):(s&=a,s!==0&&(i=qa(s)))}else a=n&~r,a!==0?i=qa(a):s!==0&&(i=qa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function wS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=wS(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Zf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function U_(){var t=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function AS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function F_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var O_,Bh,k_,B_,z_,Jf=!1,tl=[],wr=null,br=null,Ar=null,_o=new Map,vo=new Map,xr=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vo(e),e!==null&&Bh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function CS(t,e,n,i,r){switch(e){case"focusin":return wr=Ca(wr,t,e,n,i,r),!0;case"dragenter":return br=Ca(br,t,e,n,i,r),!0;case"mouseover":return Ar=Ca(Ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _o.set(s,Ca(_o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,vo.set(s,Ca(vo.get(s)||null,t,e,n,i,r)),!0}return!1}function V_(t){var e=Kr(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=C_(n),e!==null){t.blockedOn=e,z_(t.priority,function(){k_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$f=i,n.target.dispatchEvent(i),$f=null}else return e=Vo(n),e!==null&&Bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Em(t,e,n){Gl(t)&&n.delete(e)}function PS(){Jf=!1,wr!==null&&Gl(wr)&&(wr=null),br!==null&&Gl(br)&&(br=null),Ar!==null&&Gl(Ar)&&(Ar=null),_o.forEach(Em),vo.forEach(Em)}function Pa(t,e){t.blockedOn===e&&(t.blockedOn=null,Jf||(Jf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,PS)))}function xo(t){function e(r){return Pa(r,t)}if(0<tl.length){Pa(tl[0],t);for(var n=1;n<tl.length;n++){var i=tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Pa(wr,t),br!==null&&Pa(br,t),Ar!==null&&Pa(Ar,t),_o.forEach(e),vo.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)V_(n),n.blockedOn===null&&xr.shift()}var qs=nr.ReactCurrentBatchConfig,hu=!0;function LS(t,e,n,i){var r=st,s=qs.transition;qs.transition=null;try{st=1,zh(t,e,n,i)}finally{st=r,qs.transition=s}}function NS(t,e,n,i){var r=st,s=qs.transition;qs.transition=null;try{st=4,zh(t,e,n,i)}finally{st=r,qs.transition=s}}function zh(t,e,n,i){if(hu){var r=Qf(t,e,n,i);if(r===null)Nc(t,e,i,pu,n),Mm(t,i);else if(CS(r,t,e,n,i))i.stopPropagation();else if(Mm(t,i),e&4&&-1<RS.indexOf(t)){for(;r!==null;){var s=Vo(r);if(s!==null&&O_(s),s=Qf(t,e,n,i),s===null&&Nc(t,e,i,pu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var pu=null;function Qf(t,e,n,i){if(pu=null,t=Fh(i),t=Kr(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=C_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pu=t,null}function H_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xS()){case Oh:return 1;case I_:return 4;case fu:case yS:return 16;case D_:return 536870912;default:return 16}default:return 16}}var Mr=null,Vh=null,Wl=null;function G_(){if(Wl)return Wl;var t,e=Vh,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Wl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function Tm(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:Tm,this.isPropagationStopped=Tm,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Nn(va),zo=wt({},va,{view:0,detail:0}),IS=Nn(zo),Ec,Tc,La,Xu=wt({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==La&&(La&&t.type==="mousemove"?(Ec=t.screenX-La.screenX,Tc=t.screenY-La.screenY):Tc=Ec=0,La=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),wm=Nn(Xu),DS=wt({},Xu,{dataTransfer:0}),US=Nn(DS),FS=wt({},zo,{relatedTarget:0}),wc=Nn(FS),OS=wt({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=Nn(OS),BS=wt({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zS=Nn(BS),VS=wt({},va,{data:0}),bm=Nn(VS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WS[t])?!!e[t]:!1}function Gh(){return jS}var XS=wt({},zo,{key:function(t){if(t.key){var e=HS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$S=Nn(XS),YS=wt({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Nn(YS),qS=wt({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),KS=Nn(qS),ZS=wt({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Nn(ZS),QS=wt({},Xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eM=Nn(QS),tM=[9,13,27,32],Wh=Yi&&"CompositionEvent"in window,io=null;Yi&&"documentMode"in document&&(io=document.documentMode);var nM=Yi&&"TextEvent"in window&&!io,W_=Yi&&(!Wh||io&&8<io&&11>=io),Rm=" ",Cm=!1;function j_(t,e){switch(t){case"keyup":return tM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function iM(t,e){switch(t){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(Cm=!0,Rm);case"textInput":return t=e.data,t===Rm&&Cm?null:t;default:return null}}function rM(t,e){if(Fs)return t==="compositionend"||!Wh&&j_(t,e)?(t=G_(),Wl=Vh=Mr=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var sM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sM[t.type]:e==="textarea"}function $_(t,e,n,i){T_(i),e=mu(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ro=null,yo=null;function aM(t){rv(t,0)}function $u(t){var e=Bs(t);if(__(e))return t}function oM(t,e){if(t==="change")return e}var Y_=!1;if(Yi){var bc;if(Yi){var Ac="oninput"in document;if(!Ac){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),Ac=typeof Lm.oninput=="function"}bc=Ac}else bc=!1;Y_=bc&&(!document.documentMode||9<document.documentMode)}function Nm(){ro&&(ro.detachEvent("onpropertychange",q_),yo=ro=null)}function q_(t){if(t.propertyName==="value"&&$u(yo)){var e=[];$_(e,yo,t,Fh(t)),R_(aM,e)}}function lM(t,e,n){t==="focusin"?(Nm(),ro=e,yo=n,ro.attachEvent("onpropertychange",q_)):t==="focusout"&&Nm()}function uM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(yo)}function cM(t,e){if(t==="click")return $u(e)}function fM(t,e){if(t==="input"||t==="change")return $u(e)}function dM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:dM;function So(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uf.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function Im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dm(t,e){var n=Im(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Im(n)}}function K_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var t=window,e=lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lu(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hM(t){var e=Z_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K_(n.ownerDocument.documentElement,n)){if(i!==null&&jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dm(n,s);var a=Dm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pM=Yi&&"documentMode"in document&&11>=document.documentMode,Os=null,ed=null,so=null,td=!1;function Um(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||Os==null||Os!==lu(i)||(i=Os,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),so&&So(so,i)||(so=i,i=mu(ed,"onSelect"),0<i.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Os)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Rc={},J_={};Yi&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Yu(t){if(Rc[t])return Rc[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J_)return Rc[t]=e[n];return t}var Q_=Yu("animationend"),ev=Yu("animationiteration"),tv=Yu("animationstart"),nv=Yu("transitionend"),iv=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){iv.set(t,e),ds(e,[t])}for(var Cc=0;Cc<Fm.length;Cc++){var Pc=Fm[Cc],mM=Pc.toLowerCase(),gM=Pc[0].toUpperCase()+Pc.slice(1);Fr(mM,"on"+gM)}Fr(Q_,"onAnimationEnd");Fr(ev,"onAnimationIteration");Fr(tv,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(nv,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ka));function Om(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,mS(i,e,void 0,t),t.currentTarget=null}function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,u),s=l}}}if(cu)throw t=Kf,cu=!1,Kf=null,t}function gt(t,e){var n=e[ad];n===void 0&&(n=e[ad]=new Set);var i=t+"__bubble";n.has(i)||(sv(e,t,2,!1),n.add(i))}function Lc(t,e,n){var i=0;e&&(i|=4),sv(n,t,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[rl]){t[rl]=!0,d_.forEach(function(n){n!=="selectionchange"&&(_M.has(n)||Lc(n,!1,t),Lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[rl]||(e[rl]=!0,Lc("selectionchange",!1,e))}}function sv(t,e,n,i){switch(H_(e)){case 1:var r=LS;break;case 4:r=NS;break;default:r=zh}n=r.bind(null,e,n,t),r=void 0,!qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Kr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}R_(function(){var u=s,c=Fh(n),f=[];e:{var d=iv.get(t);if(d!==void 0){var p=Hh,_=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=$S;break;case"focusin":_="focus",p=wc;break;case"focusout":_="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KS;break;case Q_:case ev:case tv:p=kS;break;case nv:p=JS;break;case"scroll":p=IS;break;case"wheel":p=eM;break;case"copy":case"cut":case"paste":p=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Am}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=go(g,h),S!=null&&x.push(Eo(g,S,v)))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,n,c),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$f&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[qi]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?Kr(_):null,_!==null&&(m=hs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=wm,S="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Am,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:Bs(p),v=_==null?d:Bs(_),d=new x(S,g+"leave",p,n,c),d.target=m,d.relatedTarget=v,S=null,Kr(c)===u&&(x=new x(h,g+"enter",_,n,c),x.target=v,x.relatedTarget=m,S=x),m=S,p&&_)t:{for(x=p,h=_,g=0,v=x;v;v=_s(v))g++;for(v=0,S=h;S;S=_s(S))v++;for(;0<g-v;)x=_s(x),g--;for(;0<v-g;)h=_s(h),v--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=_s(x),h=_s(h)}x=null}else x=null;p!==null&&km(f,d,p,x,!1),_!==null&&m!==null&&km(f,m,_,x,!0)}}e:{if(d=u?Bs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=oM;else if(Pm(d))if(Y_)b=fM;else{b=uM;var T=lM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=cM);if(b&&(b=b(t,u))){$_(f,b,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Hf(d,"number",d.value)}switch(T=u?Bs(u):window,t){case"focusin":(Pm(T)||T.contentEditable==="true")&&(Os=T,ed=u,so=null);break;case"focusout":so=ed=Os=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Um(f,n,c);break;case"selectionchange":if(pM)break;case"keydown":case"keyup":Um(f,n,c)}var A;if(Wh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fs?j_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(W_&&n.locale!=="ko"&&(Fs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fs&&(A=G_()):(Mr=c,Vh="value"in Mr?Mr.value:Mr.textContent,Fs=!0)),T=mu(u,y),0<T.length&&(y=new bm(y,t,null,n,c),f.push({event:y,listeners:T}),A?y.data=A:(A=X_(n),A!==null&&(y.data=A)))),(A=nM?iM(t,n):rM(t,n))&&(u=mu(u,"onBeforeInput"),0<u.length&&(c=new bm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=A))}rv(f,e)})}function Eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=go(t,n),s!=null&&i.unshift(Eo(t,s,r)),s=go(t,e),s!=null&&i.push(Eo(t,s,r))),t=t.return}return i}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function km(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=go(n,s),l!=null&&a.unshift(Eo(n,l,o))):r||(l=go(n,s),l!=null&&a.push(Eo(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var vM=/\r\n?/g,xM=/\u0000|\uFFFD/g;function Bm(t){return(typeof t=="string"?t:""+t).replace(vM,`
`).replace(xM,"")}function sl(t,e,n){if(e=Bm(e),Bm(t)!==e&&n)throw Error(ie(425))}function gu(){}var nd=null,id=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,yM=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(t){return zm.resolve(null).then(t).catch(MM)}:sd;function MM(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xo(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xa=Math.random().toString(36).slice(2),_i="__reactFiber$"+xa,To="__reactProps$"+xa,qi="__reactContainer$"+xa,ad="__reactEvents$"+xa,EM="__reactListeners$"+xa,TM="__reactHandles$"+xa;function Kr(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vm(t);t!==null;){if(n=t[_i])return n;t=Vm(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[_i]||t[qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function qu(t){return t[To]||null}var od=[],zs=-1;function Or(t){return{current:t}}function _t(t){0>zs||(t.current=od[zs],od[zs]=null,zs--)}function pt(t,e){zs++,od[zs]=t.current,t.current=e}var Dr={},sn=Or(Dr),gn=Or(!1),ss=Dr;function na(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function _u(){_t(gn),_t(sn)}function Hm(t,e,n){if(sn.current!==Dr)throw Error(ie(168));pt(sn,e),pt(gn,n)}function av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,lS(t)||"Unknown",r));return wt({},n,i)}function vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ss=sn.current,pt(sn,t),pt(gn,gn.current),!0}function Gm(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=av(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,_t(gn),_t(sn),pt(sn,t)):_t(gn),pt(gn,n)}var zi=null,Ku=!1,Dc=!1;function ov(t){zi===null?zi=[t]:zi.push(t)}function wM(t){Ku=!0,ov(t)}function kr(){if(!Dc&&zi!==null){Dc=!0;var t=0,e=st;try{var n=zi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Ku=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),N_(Oh,kr),r}finally{st=e,Dc=!1}}return null}var Vs=[],Hs=0,xu=null,yu=0,Fn=[],On=0,as=null,Vi=1,Hi="";function jr(t,e){Vs[Hs++]=yu,Vs[Hs++]=xu,xu=t,yu=e}function lv(t,e,n){Fn[On++]=Vi,Fn[On++]=Hi,Fn[On++]=as,as=t;var i=Vi;t=Hi;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Vi=1<<32-ni(e)+r|n<<r|i,Hi=s+t}else Vi=1<<s|n<<r|i,Hi=t}function Xh(t){t.return!==null&&(jr(t,1),lv(t,1,0))}function $h(t){for(;t===xu;)xu=Vs[--Hs],Vs[Hs]=null,yu=Vs[--Hs],Vs[Hs]=null;for(;t===as;)as=Fn[--On],Fn[On]=null,Hi=Fn[--On],Fn[On]=null,Vi=Fn[--On],Fn[On]=null}var An=null,bn=null,xt=!1,Qn=null;function uv(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,bn=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Vi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,bn=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(xt){var e=bn;if(e){var n=e;if(!Wm(t,e)){if(ld(t))throw Error(ie(418));e=Rr(n.nextSibling);var i=An;e&&Wm(t,e)?uv(i,n):(t.flags=t.flags&-4097|2,xt=!1,An=t)}}else{if(ld(t))throw Error(ie(418));t.flags=t.flags&-4097|2,xt=!1,An=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function al(t){if(t!==An)return!1;if(!xt)return jm(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=bn)){if(ld(t))throw cv(),Error(ie(418));for(;e;)uv(t,e),e=Rr(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=An?Rr(t.stateNode.nextSibling):null;return!0}function cv(){for(var t=bn;t;)t=Rr(t.nextSibling)}function ia(){bn=An=null,xt=!1}function Yh(t){Qn===null?Qn=[t]:Qn.push(t)}var bM=nr.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xm(t){var e=t._init;return e(t._payload)}function fv(t){function e(h,g){if(t){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Nr(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,g,v,S){return g===null||g.tag!==6?(g=Vc(v,h.mode,S),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,S){var b=v.type;return b===Us?c(h,g,v.props.children,S,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Xm(b)===g.type)?(S=r(g,v.props),S.ref=Na(h,g,v),S.return=h,S):(S=Jl(v.type,v.key,v.props,null,h.mode,S),S.ref=Na(h,g,v),S.return=h,S)}function u(h,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Hc(v,h.mode,S),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function c(h,g,v,S,b){return g===null||g.tag!==7?(g=rs(v,h.mode,S,b),g.return=h,g):(g=r(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ko:return v=Jl(g.type,g.key,g.props,null,h.mode,v),v.ref=Na(h,null,g),v.return=h,v;case Ds:return g=Hc(g,h.mode,v),g.return=h,g;case _r:var S=g._init;return f(h,S(g._payload),v)}if(Ya(g)||Aa(g))return g=rs(g,h.mode,v,null),g.return=h,g;ol(h,g)}return null}function d(h,g,v,S){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(h,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:return v.key===b?l(h,g,v,S):null;case Ds:return v.key===b?u(h,g,v,S):null;case _r:return b=v._init,d(h,g,b(v._payload),S)}if(Ya(v)||Aa(v))return b!==null?null:c(h,g,v,S,null);ol(h,v)}return null}function p(h,g,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,o(g,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ko:return h=h.get(S.key===null?v:S.key)||null,l(g,h,S,b);case Ds:return h=h.get(S.key===null?v:S.key)||null,u(g,h,S,b);case _r:var T=S._init;return p(h,g,v,T(S._payload),b)}if(Ya(S)||Aa(S))return h=h.get(v)||null,c(g,h,S,b,null);ol(g,S)}return null}function _(h,g,v,S){for(var b=null,T=null,A=g,y=g=0,R=null;A!==null&&y<v.length;y++){A.index>y?(R=A,A=null):R=A.sibling;var P=d(h,A,v[y],S);if(P===null){A===null&&(A=R);break}t&&A&&P.alternate===null&&e(h,A),g=s(P,g,y),T===null?b=P:T.sibling=P,T=P,A=R}if(y===v.length)return n(h,A),xt&&jr(h,y),b;if(A===null){for(;y<v.length;y++)A=f(h,v[y],S),A!==null&&(g=s(A,g,y),T===null?b=A:T.sibling=A,T=A);return xt&&jr(h,y),b}for(A=i(h,A);y<v.length;y++)R=p(A,h,y,v[y],S),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?y:R.key),g=s(R,g,y),T===null?b=R:T.sibling=R,T=R);return t&&A.forEach(function(C){return e(h,C)}),xt&&jr(h,y),b}function x(h,g,v,S){var b=Aa(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var T=b=null,A=g,y=g=0,R=null,P=v.next();A!==null&&!P.done;y++,P=v.next()){A.index>y?(R=A,A=null):R=A.sibling;var C=d(h,A,P.value,S);if(C===null){A===null&&(A=R);break}t&&A&&C.alternate===null&&e(h,A),g=s(C,g,y),T===null?b=C:T.sibling=C,T=C,A=R}if(P.done)return n(h,A),xt&&jr(h,y),b;if(A===null){for(;!P.done;y++,P=v.next())P=f(h,P.value,S),P!==null&&(g=s(P,g,y),T===null?b=P:T.sibling=P,T=P);return xt&&jr(h,y),b}for(A=i(h,A);!P.done;y++,P=v.next())P=p(A,h,y,P.value,S),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?y:P.key),g=s(P,g,y),T===null?b=P:T.sibling=P,T=P);return t&&A.forEach(function(O){return e(h,O)}),xt&&jr(h,y),b}function m(h,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Us&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ko:e:{for(var b=v.key,T=g;T!==null;){if(T.key===b){if(b=v.type,b===Us){if(T.tag===7){n(h,T.sibling),g=r(T,v.props.children),g.return=h,h=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Xm(b)===T.type){n(h,T.sibling),g=r(T,v.props),g.ref=Na(h,T,v),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}v.type===Us?(g=rs(v.props.children,h.mode,S,v.key),g.return=h,h=g):(S=Jl(v.type,v.key,v.props,null,h.mode,S),S.ref=Na(h,g,v),S.return=h,h=S)}return a(h);case Ds:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Hc(v,h.mode,S),g.return=h,h=g}return a(h);case _r:return T=v._init,m(h,g,T(v._payload),S)}if(Ya(v))return _(h,g,v,S);if(Aa(v))return x(h,g,v,S);ol(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,v),g.return=h,h=g):(n(h,g),g=Vc(v,h.mode,S),g.return=h,h=g),a(h)):n(h,g)}return m}var ra=fv(!0),dv=fv(!1),Su=Or(null),Mu=null,Gs=null,qh=null;function Kh(){qh=Gs=Mu=null}function Zh(t){var e=Su.current;_t(Su),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Mu=t,qh=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Mu===null)throw Error(ie(308));Gs=t,Mu.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Zr=null;function Jh(t){Zr===null?Zr=[t]:Zr.push(t)}function hv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Jh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ki(t,i)}function Ki(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function Qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(t,n)}return r=i.interleaved,r===null?(e.next=e,Jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(t,n)}function Xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kh(t,n)}}function $m(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,c=u=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=wt({},f,d);break e;case 2:vr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=a,t.lanes=a,t.memoizedState=f}}function Ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ho={},Mi=Or(Ho),wo=Or(Ho),bo=Or(Ho);function Jr(t){if(t===Ho)throw Error(ie(174));return t}function ep(t,e){switch(pt(bo,e),pt(wo,t),pt(Mi,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wf(e,t)}_t(Mi),pt(Mi,e)}function sa(){_t(Mi),_t(wo),_t(bo)}function mv(t){Jr(bo.current);var e=Jr(Mi.current),n=Wf(e,t.type);e!==n&&(pt(wo,t),pt(Mi,n))}function tp(t){wo.current===t&&(_t(Mi),_t(wo))}var Mt=Or(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function np(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var $l=nr.ReactCurrentDispatcher,Fc=nr.ReactCurrentBatchConfig,os=0,Et=null,kt=null,jt=null,wu=!1,ao=!1,Ao=0,AM=0;function Qt(){throw Error(ie(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function rp(t,e,n,i,r,s){if(os=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?LM:NM,t=n(i,r),ao){s=0;do{if(ao=!1,Ao=0,25<=s)throw Error(ie(301));s+=1,jt=kt=null,e.updateQueue=null,$l.current=IM,t=n(i,r)}while(ao)}if($l.current=bu,e=kt!==null&&kt.next!==null,os=0,jt=kt=Et=null,wu=!1,e)throw Error(ie(300));return t}function sp(){var t=Ao!==0;return Ao=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Et.memoizedState=jt=t:jt=jt.next=t,jt}function Gn(){if(kt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=jt===null?Et.memoizedState:jt.next;if(e!==null)jt=e,kt=t;else{if(t===null)throw Error(ie(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?Et.memoizedState=jt=t:jt=jt.next=t}return jt}function Ro(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Et.lanes|=c,ls|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Gn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gv(){}function _v(t,e){var n=Et,i=Gn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,ap(yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Co(9,xv.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ie(349));os&30||vv(n,e,r)}return r}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&Mv(t)}function yv(t,e,n){return n(function(){Sv(e)&&Mv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function Mv(t){var e=Ki(t,1);e!==null&&ii(e,t,1,-1)}function qm(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},e.queue=t,t=t.dispatch=PM.bind(null,Et,t),[e.memoizedState,t]}function Co(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ev(){return Gn().memoizedState}function Yl(t,e,n,i){var r=pi();Et.flags|=t,r.memoizedState=Co(1|e,n,void 0,i===void 0?null:i)}function Zu(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&ip(i,a.deps)){r.memoizedState=Co(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Co(1|e,n,s,i)}function Km(t,e){return Yl(8390656,8,t,e)}function ap(t,e){return Zu(2048,8,t,e)}function Tv(t,e){return Zu(4,2,t,e)}function wv(t,e){return Zu(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Av(t,e,n){return n=n!=null?n.concat([t]):null,Zu(4,4,bv.bind(null,e,t),n)}function op(){}function Rv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pv(t,e,n){return os&21?(oi(n,e)||(n=U_(),Et.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function RM(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{st=n,Fc.transition=i}}function Lv(){return Gn().memoizedState}function CM(t,e,n){var i=Lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Iv(e,n);else if(n=hv(t,e,n,i),n!==null){var r=cn();ii(n,t,i,r),Dv(n,e,i)}}function PM(t,e,n){var i=Lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,Jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=hv(t,e,r,i),n!==null&&(r=cn(),ii(n,t,i,r),Dv(n,e,i))}}function Nv(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Iv(t,e){ao=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kh(t,n)}}var bu={readContext:Hn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},LM={readContext:Hn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=CM.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:op,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=RM.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=pi();if(xt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),$t===null)throw Error(ie(349));os&30||vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Km(yv.bind(null,i,s,t),[t]),i.flags|=2048,Co(9,xv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=$t.identifierPrefix;if(xt){var n=Hi,i=Vi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NM={readContext:Hn,useCallback:Rv,useContext:Hn,useEffect:ap,useImperativeHandle:Av,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:Cv,useReducer:Oc,useRef:Ev,useState:function(){return Oc(Ro)},useDebugValue:op,useDeferredValue:function(t){var e=Gn();return Pv(e,kt.memoizedState,t)},useTransition:function(){var t=Oc(Ro)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1},IM={readContext:Hn,useCallback:Rv,useContext:Hn,useEffect:ap,useImperativeHandle:Av,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:Cv,useReducer:kc,useRef:Ev,useState:function(){return kc(Ro)},useDebugValue:op,useDeferredValue:function(t){var e=Gn();return kt===null?e.memoizedState=t:Pv(e,kt.memoizedState,t)},useTransition:function(){var t=kc(Ro)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ju={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Lr(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(ii(e,t,r,i),Xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=Lr(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(ii(e,t,r,i),Xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=Lr(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(ii(e,t,i,n),Xl(e,t,i))}};function Zm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!So(n,i)||!So(r,s):!0}function Uv(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=_n(e)?ss:sn.current,i=e.contextTypes,s=(i=i!=null)?na(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ju.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=_n(e)?ss:sn.current,r.context=na(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ju.enqueueReplaceState(r,r.state,null),Eu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,e){try{var n="",i=e;do n+=oS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DM=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ru||(Ru=!0,Ed=i),hd(t,e)},n}function Ov(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Qm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=YM.bind(null,t,e,n),e.then(t,t))}function eg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var UM=nr.ReactCurrentOwner,mn=!1;function ln(t,e,n,i){e.child=t===null?dv(e,null,n,i):ra(e,t.child,n,i)}function ng(t,e,n,i,r){n=n.render;var s=e.ref;return Ks(e,r),i=rp(t,e,n,i,s,r),n=sp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&n&&Xh(e),e.flags|=1,ln(t,e,i,r),e.child)}function ig(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kv(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(So(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return pd(t,e,n,i,r)}function Bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(js,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(js,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(js,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(js,Tn),Tn|=i;return ln(t,e,r,n),e.child}function zv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pd(t,e,n,i,r){var s=_n(n)?ss:sn.current;return s=na(e,s),Ks(e,r),n=rp(t,e,n,i,s,r),i=sp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(xt&&i&&Xh(e),e.flags|=1,ln(t,e,n,r),e.child)}function rg(t,e,n,i,r){if(_n(n)){var s=!0;vu(e)}else s=!1;if(Ks(e,r),e.stateNode===null)ql(t,e),Uv(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=_n(n)?ss:sn.current,u=na(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Jm(e,a,i,u),vr=!1;var d=e.memoizedState;a.state=d,Eu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||vr?(typeof c=="function"&&(fd(e,n,c,i),l=e.memoizedState),(o=vr||Zm(e,n,o,i,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,pv(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Zn(e.type,o),a.props=u,f=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=_n(n)?ss:sn.current,l=na(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Jm(e,a,i,l),vr=!1,d=e.memoizedState,a.state=d,Eu(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||gn.current||vr?(typeof p=="function"&&(fd(e,n,p,i),_=e.memoizedState),(u=vr||Zm(e,n,u,i,d,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return md(t,e,n,i,s,r)}function md(t,e,n,i,r,s){zv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gm(e,n,!1),Zi(t,e,s);i=e.stateNode,UM.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&Gm(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?Hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(t,e.context,!1),ep(t,e.containerInfo)}function sg(t,e,n,i,r){return ia(),Yh(r),e.flags|=256,ln(t,e,n,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Mt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tc(a,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=gd,t):lp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return FM(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Nr(o,s):(s=rs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=gd,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lp(t,e){return e=tc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ll(t,e,n,i){return i!==null&&Yh(i),ra(e,t.child,null,n),t=lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FM(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(ie(422))),ll(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=gd,s);if(!(e.mode&1))return ll(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Bc(s,i,void 0),ll(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(t,r),ii(i,t,r,-1))}return pp(),i=Bc(Error(ie(421))),ll(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=Rr(r.nextSibling),An=e,xt=!0,Qn=null,t!==null&&(Fn[On++]=Vi,Fn[On++]=Hi,Fn[On++]=as,Vi=t.id,Hi=t.overflow,as=e),e=lp(e,i.children),e.flags|=4096,e)}function ag(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,n,e);else if(t.tag===19)ag(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OM(t,e,n){switch(e.tag){case 3:Vv(e),ia();break;case 5:mv(e);break;case 1:_n(e.type)&&vu(e);break;case 4:ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(pt(Mt,Mt.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return Zi(t,e,n)}var Wv,vd,jv,Xv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};jv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Mi.current);var s=null;switch(n){case"input":r=zf(t,r),i=zf(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Gf(t,r),i=Gf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gu)}jf(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ia(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kM(t,e,n){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return _n(e.type)&&_u(),en(e),null;case 3:return i=e.stateNode,sa(),_t(gn),_t(sn),np(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(bd(Qn),Qn=null))),vd(t,e),en(e),null;case 5:tp(e);var r=Jr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)jv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return en(e),null}if(t=Jr(Mi.current),al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[To]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ka.length;r++)gt(Ka[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":mm(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":_m(i,s),gt("invalid",i)}jf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,t),r=["children",""+o]):po.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":Zo(i),gm(i,s,!0);break;case"textarea":Zo(i),vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=y_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[_i]=e,t[To]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Xf(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ka.length;r++)gt(Ka[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":mm(t,i),r=zf(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":_m(t,i),r=Gf(t,i),gt("invalid",t);break;default:r=i}jf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?E_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&S_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mo(t,l):typeof l=="number"&&mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Nh(t,s,l,a))}switch(n){case"input":Zo(t),gm(t,i,!1);break;case"textarea":Zo(t),vm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Jr(bo.current),Jr(Mi.current),al(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return en(e),null;case 13:if(_t(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&bn!==null&&e.mode&1&&!(e.flags&128))cv(),ia(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[_i]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(bd(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Bt===0&&(Bt=3):pp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return sa(),vd(t,e),t===null&&Mo(e.stateNode.containerInfo),en(e),null;case 10:return Zh(e.type._context),en(e),null;case 17:return _n(e.type)&&_u(),en(e),null;case 19:if(_t(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ia(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tu(t),a!==null){for(e.flags|=128,Ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>oa&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return en(e),null}else 2*Nt()-s.renderingStartTime>oa&&n!==1073741824&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Mt.current,pt(Mt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return hp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function BM(t,e){switch($h(e),e.tag){case 1:return _n(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(),_t(gn),_t(sn),np(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tp(e),null;case 13:if(_t(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ia()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Mt),null;case 4:return sa(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var ul=!1,rn=!1,zM=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ws(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var og=!1;function VM(t,e){if(nd=hu,t=Z_(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++c===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:t,selectionRange:n},hu=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Zn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return _=og,og=!1,_}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function yd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $v(t){var e=t.alternate;e!==null&&(t.alternate=null,$v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[To],delete e[ad],delete e[EM],delete e[TM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gu));else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var qt=null,Jn=!1;function ur(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:rn||Ws(n,e);case 6:var i=qt,r=Jn;qt=null,ur(t,e,n),qt=i,Jn=r,qt!==null&&(Jn?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(Jn?(t=qt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),xo(t)):Ic(qt,n.stateNode));break;case 4:i=qt,r=Jn,qt=n.stateNode.containerInfo,Jn=!0,ur(t,e,n),qt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(n,e,a),r=r.next}while(r!==i)}ur(t,e,n);break;case 1:if(!rn&&(Ws(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,ur(t,e,n),rn=i):ur(t,e,n);break;default:ur(t,e,n)}}function ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zM),e.forEach(function(i){var r=KM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:qt=o.stateNode,Jn=!1;break e;case 3:qt=o.stateNode.containerInfo,Jn=!0;break e;case 4:qt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(qt===null)throw Error(ie(160));qv(s,a,r),qt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kv(e,t),e=e.sibling}function Kv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),fi(t),i&4){try{oo(3,t,t.return),Qu(3,t)}catch(x){Rt(t,t.return,x)}try{oo(5,t,t.return)}catch(x){Rt(t,t.return,x)}}break;case 1:$n(e,t),fi(t),i&512&&n!==null&&Ws(n,n.return);break;case 5:if($n(e,t),fi(t),i&512&&n!==null&&Ws(n,n.return),t.flags&32){var r=t.stateNode;try{mo(r,"")}catch(x){Rt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&v_(r,s),Xf(o,a);var u=Xf(o,s);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?E_(r,f):c==="dangerouslySetInnerHTML"?S_(r,f):c==="children"?mo(r,f):Nh(r,c,f,u)}switch(o){case"input":Vf(r,s);break;case"textarea":x_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(x){Rt(t,t.return,x)}}break;case 6:if($n(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Rt(t,t.return,x)}}break;case 3:if($n(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(x){Rt(t,t.return,x)}break;case 4:$n(e,t),fi(t);break;case 13:$n(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(fp=Nt())),i&4&&ug(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||c,$n(e,t),rn=u):$n(e,t),fi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Ee=t,c=t.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:Ws(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Rt(i,n,x)}}break;case 5:Ws(d,d.return);break;case 22:if(d.memoizedState!==null){fg(f);continue}}p!==null?(p.return=d,Ee=p):fg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=M_("display",a))}catch(x){Rt(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Rt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),fi(t),i&4&&ug(t);break;case 21:break;default:$n(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yv(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(mo(r,""),i.flags&=-33);var s=lg(t);Md(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lg(t);Sd(t,o,a);break;default:throw Error(ie(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HM(t,e,n){Ee=t,Zv(t)}function Zv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ul;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=ul;var u=rn;if(ul=a,(rn=l)&&!u)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?dg(r):l!==null?(l.return=a,Ee=l):dg(r);for(;s!==null;)Ee=s,Zv(s),s=s.sibling;Ee=r,ul=o,rn=u}cg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):cg(t)}}function cg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ym(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}rn||e.flags&512&&yd(e)}catch(d){Rt(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function fg(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function dg(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{yd(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var GM=Math.ceil,Au=nr.ReactCurrentDispatcher,up=nr.ReactCurrentOwner,Vn=nr.ReactCurrentBatchConfig,et=0,$t=null,Ut=null,Kt=0,Tn=0,js=Or(0),Bt=0,Po=null,ls=0,ec=0,cp=0,lo=null,pn=null,fp=0,oa=1/0,Bi=null,Ru=!1,Ed=null,Pr=null,cl=!1,Er=null,Cu=0,uo=0,Td=null,Kl=-1,Zl=0;function cn(){return et&6?Nt():Kl!==-1?Kl:Kl=Nt()}function Lr(t){return t.mode&1?et&2&&Kt!==0?Kt&-Kt:bM.transition!==null?(Zl===0&&(Zl=U_()),Zl):(t=st,t!==0||(t=window.event,t=t===void 0?16:H_(t.type)),t):1}function ii(t,e,n,i){if(50<uo)throw uo=0,Td=null,Error(ie(185));Bo(t,n,i),(!(et&2)||t!==$t)&&(t===$t&&(!(et&2)&&(ec|=n),Bt===4&&yr(t,Kt)),vn(t,i),n===1&&et===0&&!(e.mode&1)&&(oa=Nt()+500,Ku&&kr()))}function vn(t,e){var n=t.callbackNode;bS(t,e);var i=du(t,t===$t?Kt:0);if(i===0)n!==null&&Sm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sm(n),e===1)t.tag===0?wM(hg.bind(null,t)):ov(hg.bind(null,t)),SM(function(){!(et&6)&&kr()}),n=null;else{switch(F_(i)){case 1:n=Oh;break;case 4:n=I_;break;case 16:n=fu;break;case 536870912:n=D_;break;default:n=fu}n=sx(n,Jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jv(t,e){if(Kl=-1,Zl=0,et&6)throw Error(ie(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var i=du(t,t===$t?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pu(t,i);else{e=i;var r=et;et|=2;var s=ex();($t!==t||Kt!==e)&&(Bi=null,oa=Nt()+500,is(t,e));do try{XM();break}catch(o){Qv(t,o)}while(!0);Kh(),Au.current=s,et=r,Ut!==null?e=0:($t=null,Kt=0,e=Bt)}if(e!==0){if(e===2&&(r=Zf(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=Po,is(t,0),yr(t,i),vn(t,Nt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!WM(r)&&(e=Pu(t,i),e===2&&(s=Zf(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=Po,is(t,0),yr(t,i),vn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Xr(t,pn,Bi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=fp+500-Nt(),10<e)){if(du(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sd(Xr.bind(null,t,pn,Bi),e);break}Xr(t,pn,Bi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GM(i/1960))-i,10<i){t.timeoutHandle=sd(Xr.bind(null,t,pn,Bi),i);break}Xr(t,pn,Bi);break;case 5:Xr(t,pn,Bi);break;default:throw Error(ie(329))}}}return vn(t,Nt()),t.callbackNode===n?Jv.bind(null,t):null}function wd(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=Pu(t,e),t!==2&&(e=pn,pn=n,e!==null&&bd(e)),t}function bd(t){pn===null?pn=t:pn.push.apply(pn,t)}function WM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~cp,e&=~ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function hg(t){if(et&6)throw Error(ie(327));Zs();var e=du(t,0);if(!(e&1))return vn(t,Nt()),null;var n=Pu(t,e);if(t.tag!==0&&n===2){var i=Zf(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=Po,is(t,0),yr(t,e),vn(t,Nt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,pn,Bi),vn(t,Nt()),null}function dp(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(oa=Nt()+500,Ku&&kr())}}function us(t){Er!==null&&Er.tag===0&&!(et&6)&&Zs();var e=et;et|=1;var n=Vn.transition,i=st;try{if(Vn.transition=null,st=1,t)return t()}finally{st=i,Vn.transition=n,et=e,!(et&6)&&kr()}}function hp(){Tn=js.current,_t(js)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yM(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_u();break;case 3:sa(),_t(gn),_t(sn),np();break;case 5:tp(i);break;case 4:sa();break;case 13:_t(Mt);break;case 19:_t(Mt);break;case 10:Zh(i.type._context);break;case 22:case 23:hp()}n=n.return}if($t=t,Ut=t=Nr(t.current,null),Kt=Tn=e,Bt=0,Po=null,cp=ec=ls=0,pn=lo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Zr=null}return t}function Qv(t,e){do{var n=Ut;try{if(Kh(),$l.current=bu,wu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wu=!1}if(os=0,jt=kt=Et=null,ao=!1,Ao=0,up.current=null,n===null||n.return===null){Bt=1,Po=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=eg(a);if(p!==null){p.flags&=-257,tg(p,a,o,s,e),p.mode&1&&Qm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Qm(s,u,e),pp();break e}l=Error(ie(426))}}else if(xt&&o.mode&1){var m=eg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tg(m,a,o,s,e),Yh(aa(l,o));break e}}s=l=aa(l,o),Bt!==4&&(Bt=2),lo===null?lo=[s]:lo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Fv(s,l,e);$m(s,h);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pr===null||!Pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ov(s,o,e);$m(s,S);break e}}s=s.return}while(s!==null)}nx(n)}catch(b){e=b,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function ex(){var t=Au.current;return Au.current=bu,t===null?bu:t}function pp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),$t===null||!(ls&268435455)&&!(ec&268435455)||yr($t,Kt)}function Pu(t,e){var n=et;et|=2;var i=ex();($t!==t||Kt!==e)&&(Bi=null,is(t,e));do try{jM();break}catch(r){Qv(t,r)}while(!0);if(Kh(),et=n,Au.current=i,Ut!==null)throw Error(ie(261));return $t=null,Kt=0,Bt}function jM(){for(;Ut!==null;)tx(Ut)}function XM(){for(;Ut!==null&&!_S();)tx(Ut)}function tx(t){var e=rx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?nx(t):Ut=e,up.current=null}function nx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BM(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=kM(n,e,Tn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Xr(t,e,n){var i=st,r=Vn.transition;try{Vn.transition=null,st=1,$M(t,e,n,i)}finally{Vn.transition=r,st=i}return null}function $M(t,e,n,i){do Zs();while(Er!==null);if(et&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AS(t,s),t===$t&&(Ut=$t=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,sx(fu,function(){return Zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=st;st=1;var o=et;et|=4,up.current=null,VM(t,n),Kv(n,t),hM(id),hu=!!nd,id=nd=null,t.current=n,HM(n),vS(),et=o,st=a,Vn.transition=s}else t.current=n;if(cl&&(cl=!1,Er=t,Cu=r),s=t.pendingLanes,s===0&&(Pr=null),SS(n.stateNode),vn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ru)throw Ru=!1,t=Ed,Ed=null,t;return Cu&1&&t.tag!==0&&Zs(),s=t.pendingLanes,s&1?t===Td?uo++:(uo=0,Td=t):uo=0,kr(),null}function Zs(){if(Er!==null){var t=F_(Cu),e=Vn.transition,n=st;try{if(Vn.transition=null,st=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Cu=0,et&6)throw Error(ie(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:oo(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var d=c.sibling,p=c.return;if($v(c),c===u){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Ee=v;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qu(9,o)}}catch(b){Rt(o,o.return,b)}if(o===a){Ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ee=S;break e}Ee=o.return}}if(et=r,kr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(ju,t)}catch{}i=!0}return i}finally{st=n,Vn.transition=e}}return!1}function pg(t,e,n){e=aa(n,e),e=Fv(t,e,1),t=Cr(t,e,1),e=cn(),t!==null&&(Bo(t,1,e),vn(t,e))}function Rt(t,e,n){if(t.tag===3)pg(t,t,n);else for(;e!==null;){if(e.tag===3){pg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=aa(n,t),t=Ov(e,t,1),e=Cr(e,t,1),t=cn(),e!==null&&(Bo(e,1,t),vn(e,t));break}}e=e.return}}function YM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(Kt&n)===n&&(Bt===4||Bt===3&&(Kt&130023424)===Kt&&500>Nt()-fp?is(t,0):cp|=n),vn(t,e)}function ix(t,e){e===0&&(t.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var n=cn();t=Ki(t,e),t!==null&&(Bo(t,e,n),vn(t,n))}function qM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ix(t,n)}function KM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),ix(t,n)}var rx;rx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,OM(t,e,n);mn=!!(t.flags&131072)}else mn=!1,xt&&e.flags&1048576&&lv(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ql(t,e),t=e.pendingProps;var r=na(e,sn.current);Ks(e,n),r=rp(null,e,i,t,r,n);var s=sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,vu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qh(e),r.updater=Ju,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=md(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Xh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JM(i),t=Zn(i,t),r){case 0:e=pd(null,e,i,t,n);break e;case 1:e=rg(null,e,i,t,n);break e;case 11:e=ng(null,e,i,t,n);break e;case 14:e=ig(null,e,i,Zn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),pd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),rg(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pv(t,e),Eu(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ie(423)),e),e=sg(t,e,i,n,r);break e}else if(i!==r){r=aa(Error(ie(424)),e),e=sg(t,e,i,n,r);break e}else for(bn=Rr(e.stateNode.containerInfo.firstChild),An=e,xt=!0,Qn=null,n=dv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ia(),i===r){e=Zi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return mv(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),zv(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Hv(t,e,n);case 4:return ep(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ra(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),ng(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(Su,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!gn.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),cd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ks(e,n),r=Hn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),ig(t,e,i,r,n);case 15:return kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),ql(t,e),e.tag=1,_n(i)?(t=!0,vu(e)):t=!1,Ks(e,n),Uv(e,i,r),dd(e,i,r,n),md(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return Bv(t,e,n)}throw Error(ie(156,e.tag))};function sx(t,e){return N_(t,e)}function ZM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new ZM(t,e,n,i)}function mp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JM(t){if(typeof t=="function")return mp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Uh)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Us:return rs(n.children,r,s,e);case Ih:a=8,r|=8;break;case Ff:return t=kn(12,n,e,r|2),t.elementType=Ff,t.lanes=s,t;case Of:return t=kn(13,n,e,r),t.elementType=Of,t.lanes=s,t;case kf:return t=kn(19,n,e,r),t.elementType=kf,t.lanes=s,t;case m_:return tc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case h_:a=10;break e;case p_:a=9;break e;case Dh:a=11;break e;case Uh:a=14;break e;case _r:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function tc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=m_,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gp(t,e,n,i,r,s,a,o,l){return t=new QM(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(s),t}function eE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ax(t){if(!t)return Dr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(_n(n))return av(t,n,e)}return e}function ox(t,e,n,i,r,s,a,o,l){return t=gp(n,i,!0,t,r,s,a,o,l),t.context=ax(null),n=t.current,i=cn(),r=Lr(n),s=ji(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,Bo(t,r,i),vn(t,i),t}function nc(t,e,n,i){var r=e.current,s=cn(),a=Lr(r);return n=ax(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,a),t!==null&&(ii(t,r,a,s),Xl(t,r,a)),a}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _p(t,e){mg(t,e),(t=t.alternate)&&mg(t,e)}function tE(){return null}var lx=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}ic.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));nc(t,e,null,null)};ic.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){nc(null,t,null,null)}),e[qi]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=B_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&V_(t)}};function xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gg(){}function nE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Lu(a);s.call(u)}}var a=ox(e,i,t,0,null,!1,!1,"",gg);return t._reactRootContainer=a,t[qi]=a.current,Mo(t.nodeType===8?t.parentNode:t),us(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Lu(l);o.call(u)}}var l=gp(t,0,!1,null,null,!1,!1,"",gg);return t._reactRootContainer=l,t[qi]=l.current,Mo(t.nodeType===8?t.parentNode:t),us(function(){nc(e,l,n,i)}),l}function sc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Lu(a);o.call(l)}}nc(e,a,t,r)}else a=nE(n,e,t,r,i);return Lu(a)}O_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qa(e.pendingLanes);n!==0&&(kh(e,n|1),vn(e,Nt()),!(et&6)&&(oa=Nt()+500,kr()))}break;case 13:us(function(){var i=Ki(t,1);if(i!==null){var r=cn();ii(i,t,1,r)}}),_p(t,1)}};Bh=function(t){if(t.tag===13){var e=Ki(t,134217728);if(e!==null){var n=cn();ii(e,t,134217728,n)}_p(t,134217728)}};k_=function(t){if(t.tag===13){var e=Lr(t),n=Ki(t,e);if(n!==null){var i=cn();ii(n,t,e,i)}_p(t,e)}};B_=function(){return st};z_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Yf=function(t,e,n){switch(e){case"input":if(Vf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qu(i);if(!r)throw Error(ie(90));__(i),Vf(i,r)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};b_=dp;A_=us;var iE={usingClientEntryPoint:!1,Events:[Vo,Bs,qu,T_,w_,dp]},Da={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=P_(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ju=fl.inject(rE),Si=fl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(ie(200));return eE(t,e,null,n)};Ln.createRoot=function(t,e){if(!xp(t))throw Error(ie(299));var n=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gp(t,1,!1,null,null,n,!1,i,r),t[qi]=e.current,Mo(t.nodeType===8?t.parentNode:t),new vp(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=P_(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return us(t)};Ln.hydrate=function(t,e,n){if(!rc(e))throw Error(ie(200));return sc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!xp(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=lx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ox(e,null,t,1,n??null,r,!1,s,a),t[qi]=e.current,Mo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ic(e)};Ln.render=function(t,e,n){if(!rc(e))throw Error(ie(200));return sc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!rc(t))throw Error(ie(40));return t._reactRootContainer?(us(function(){sc(null,null,t,!1,function(){t._reactRootContainer=null,t[qi]=null})}),!0):!1};Ln.unstable_batchedUpdates=dp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rc(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return sc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(t){console.error(t)}}ux(),u_.exports=Ln;var sE=u_.exports,_g=sE;Df.createRoot=_g.createRoot,Df.hydrateRoot=_g.hydrateRoot;/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vg="popstate";function xg(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function aE(t={}){function e(i,r){var u;let s=(u=r.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||i.location;return Ad("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function n(i,r){return typeof r=="string"?r:Lo(r)}return lE(e,n,null,t)}function Tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bi(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oE(){return Math.random().toString(36).substring(2,10)}function yg(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Ad(t,e,n=null,i,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:n,key:e&&e.key||i||oE(),mask:r}}function Lo({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function lE(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function f(){o="POP";let m=c(),h=m==null?null:m-u;u=m,l&&l({action:o,location:x.location,delta:h})}function d(m,h){o="PUSH";let g=xg(m)?m:Ad(x.location,m,h);u=c()+1;let v=yg(g,u),S=x.createHref(g.mask||g);try{a.pushState(v,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:o,location:x.location,delta:1})}function p(m,h){o="REPLACE";let g=xg(m)?m:Ad(x.location,m,h);u=c();let v=yg(g,u),S=x.createHref(g.mask||g);a.replaceState(v,"",S),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){return uE(m)}let x={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(vg,f),l=m,()=>{r.removeEventListener(vg,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return x}function uE(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Tt(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Lo(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function cx(t,e,n="/"){return cE(t,e,n,!1)}function cE(t,e,n,i,r){let s=typeof e=="string"?ya(e):e,a=Ji(s.pathname||"/",n);if(a==null)return null;let o=fE(t),l=null,u=EE(a);for(let c=0;l==null&&c<o.length;++c)l=SE(o[c],u,i);return l}function fE(t){let e=fx(t);return dE(e),e}function fx(t,e=[],n=[],i="",r=!1){let s=(a,o,l=r,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;Tt(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let f=ri([i,c.relativePath]),d=n.concat(c);a.children&&a.children.length>0&&(Tt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),fx(a.children,e,d,f,l)),!(a.path==null&&!a.index)&&e.push({path:f,score:xE(f,a.index),routesMeta:d})};return t.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of dx(a.path))s(a,o,!0,u)}),e}function dx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=dx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function dE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var hE=/^:[\w-]+$/,pE=3,mE=2,gE=1,_E=10,vE=-2,Sg=t=>t==="*";function xE(t,e){let n=t.split("/"),i=n.length;return n.some(Sg)&&(i+=vE),e&&(i+=mE),n.filter(r=>!Sg(r)).reduce((r,s)=>r+(hE.test(s)?pE:s===""?gE:_E),i)}function yE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function SE(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=Nu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&n&&!i[i.length-1].route.index&&(f=Nu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:ri([s,f.pathname]),pathnameBase:AE(ri([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=ri([s,f.pathnameBase]))}return a}function Nu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ME(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:f},d)=>{if(c==="*"){let _=o[d]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[d];return f&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function ME(t,e=!1,n=!0){bi(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,c)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let f=c.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function EE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}var TE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wE(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ya(t):t,s;return n?(n=px(n),n.startsWith("/")?s=Mg(n.substring(1),"/"):s=Mg(n,e)):s=e,{pathname:s,search:RE(i),hash:CE(r)}}function Mg(t,e){let n=Iu(e).split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Gc(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hx(t){let e=bE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function yp(t,e,n,i=!1){let r;typeof t=="string"?r=ya(t):(r={...t},Tt(!r.pathname||!r.pathname.includes("?"),Gc("?","pathname","search",r)),Tt(!r.pathname||!r.pathname.includes("#"),Gc("#","pathname","hash",r)),Tt(!r.search||!r.search.includes("#"),Gc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=wE(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var px=t=>t.replace(/\/\/+/g,"/"),ri=t=>px(t.join("/")),Iu=t=>t.replace(/\/+$/,""),AE=t=>Iu(t).replace(/^\/*/,"/"),RE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,PE=class{constructor(t,e,n,i=!1){this.status=t,this.statusText=e||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function LE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function NE(t){let e=t.map(n=>n.route.path).filter(Boolean);return ri(e)||"/"}var mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gx(t,e){let n=t;if(typeof n!="string"||!TE.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let i=n,r=!1;if(mx)try{let s=new URL(window.location.href),a=n.startsWith("//")?new URL(s.protocol+n):new URL(n),o=Ji(a.pathname,e);a.origin===s.origin&&o!=null?n=o+a.search+a.hash:r=!0}catch{bi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _x=["POST","PUT","PATCH","DELETE"];new Set(_x);var IE=["GET",..._x];new Set(IE);var Sa=j.createContext(null);Sa.displayName="DataRouter";var ac=j.createContext(null);ac.displayName="DataRouterState";var vx=j.createContext(!1);function DE(){return j.useContext(vx)}var xx=j.createContext({isTransitioning:!1});xx.displayName="ViewTransition";var UE=j.createContext(new Map);UE.displayName="Fetchers";var FE=j.createContext(null);FE.displayName="Await";var Wn=j.createContext(null);Wn.displayName="Navigation";var Go=j.createContext(null);Go.displayName="Location";var ir=j.createContext({outlet:null,matches:[],isDataRoute:!1});ir.displayName="Route";var Sp=j.createContext(null);Sp.displayName="RouteError";var yx="REACT_ROUTER_ERROR",OE="REDIRECT",kE="ROUTE_ERROR_RESPONSE";function BE(t){if(t.startsWith(`${yx}:${OE}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function zE(t){if(t.startsWith(`${yx}:${kE}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new PE(e.status,e.statusText,e.data)}catch{}}function VE(t,{relative:e}={}){Tt(Wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=j.useContext(Wn),{hash:r,pathname:s,search:a}=jo(t,{relative:e}),o=s;return n!=="/"&&(o=s==="/"?n:ri([n,s])),i.createHref({pathname:o,search:a,hash:r})}function Wo(){return j.useContext(Go)!=null}function Ci(){return Tt(Wo(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Go).location}var Sx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mx(t){j.useContext(Wn).static||j.useLayoutEffect(t)}function HE(){let{isDataRoute:t}=j.useContext(ir);return t?tT():GE()}function GE(){Tt(Wo(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(Sa),{basename:e,navigator:n}=j.useContext(Wn),{matches:i}=j.useContext(ir),{pathname:r}=Ci(),s=JSON.stringify(hx(i)),a=j.useRef(!1);return Mx(()=>{a.current=!0}),j.useCallback((l,u={})=>{if(bi(a.current,Sx),!a.current)return;if(typeof l=="number"){n.go(l);return}let c=yp(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ri([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}j.createContext(null);function jo(t,{relative:e}={}){let{matches:n}=j.useContext(ir),{pathname:i}=Ci(),r=JSON.stringify(hx(n));return j.useMemo(()=>yp(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function WE(t,e){return Ex(t,e)}function Ex(t,e,n){var m;Tt(Wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=j.useContext(Wn),{matches:r}=j.useContext(ir),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";wx(o,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=Ci(),f;if(e){let h=typeof e=="string"?ya(e):e;Tt(l==="/"||((m=h.pathname)==null?void 0:m.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),f=h}else f=c;let d=f.pathname||"/",p=d;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(h.length).join("/")}let _=n&&n.state.matches.length?n.state.matches.map(h=>Object.assign(h,{route:n.manifest[h.route.id]||h.route})):cx(t,{pathname:p});bi(u||_!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),bi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=qE(_&&_.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:ri([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:ri([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,n);return e&&x?j.createElement(Go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...f},navigationType:"POP"}},x):x}function jE(){let t=eT(),e=LE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:s},"ErrorBoundary")," or"," ",j.createElement("code",{style:s},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:r},n):null,a)}var XE=j.createElement(jE,null),Tx=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=zE(t.digest);n&&(t=n)}let e=t!==void 0?j.createElement(ir.Provider,{value:this.props.routeContext},j.createElement(Sp.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?j.createElement($E,{error:t},e):e}};Tx.contextType=vx;var Wc=new WeakMap;function $E({children:t,error:e}){let{basename:n}=j.useContext(Wn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=BE(e.digest);if(i){let r=Wc.get(e);if(r)throw r;let s=gx(i.location,n);if(mx&&!Wc.get(e))if(s.isExternal||i.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw Wc.set(e,a),a}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function YE({routeContext:t,match:e,children:n}){let i=j.useContext(Sa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(ir.Provider,{value:t},n)}function qE(t,e=[],n){let i=n==null?void 0:n.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let r=t,s=i==null?void 0:i.errors;if(s!=null){let c=r.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Tt(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(n&&i){a=i.renderFallback;for(let c=0;c<r.length;c++){let f=r[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=c),f.route.id){let{loaderData:d,errors:p}=i,_=f.route.loader&&!d.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||_){n.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=n==null?void 0:n.onError,u=i&&l?(c,f)=>{var d,p;l(c,{location:i.location,params:((p=(d=i.matches)==null?void 0:d[0])==null?void 0:p.params)??{},pattern:NE(i.matches),errorInfo:f})}:void 0;return r.reduceRight((c,f,d)=>{let p,_=!1,x=null,m=null;i&&(p=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||XE,a&&(o<0&&d===0?(wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,m=null):o===d&&(_=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,d+1)),g=()=>{let v;return p?v=x:_?v=m:f.route.Component?v=j.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,j.createElement(YE,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:i!=null},children:v})};return i&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?j.createElement(Tx,{location:i.location,revalidation:i.revalidation,component:x,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):g()},null)}function Mp(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KE(t){let e=j.useContext(Sa);return Tt(e,Mp(t)),e}function ZE(t){let e=j.useContext(ac);return Tt(e,Mp(t)),e}function JE(t){let e=j.useContext(ir);return Tt(e,Mp(t)),e}function Ep(t){let e=JE(t),n=e.matches[e.matches.length-1];return Tt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function QE(){return Ep("useRouteId")}function eT(){var i;let t=j.useContext(Sp),e=ZE("useRouteError"),n=Ep("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function tT(){let{router:t}=KE("useNavigate"),e=Ep("useNavigate"),n=j.useRef(!1);return Mx(()=>{n.current=!0}),j.useCallback(async(r,s={})=>{bi(n.current,Sx),n.current&&(typeof r=="number"?await t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var Eg={};function wx(t,e,n){!e&&!Eg[t]&&(Eg[t]=!0,bi(!1,n))}j.memo(nT);function nT({routes:t,manifest:e,future:n,state:i,isStatic:r,onError:s}){return Ex(t,void 0,{manifest:e,state:i,isStatic:r,onError:s})}function Za(t){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function iT({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1,useTransitions:a}){Tt(!Wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:o,navigator:r,static:s,useTransitions:a,future:{}}),[o,r,s,a]);typeof n=="string"&&(n=ya(n));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default",mask:_}=n,x=j.useMemo(()=>{let m=Ji(u,o);return m==null?null:{location:{pathname:m,search:c,hash:f,state:d,key:p,mask:_},navigationType:i}},[o,u,c,f,d,p,i,_]);return bi(x!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:j.createElement(Wn.Provider,{value:l},j.createElement(Go.Provider,{children:e,value:x}))}function rT({children:t,location:e}){return WE(Rd(t),e)}function Rd(t,e=[]){let n=[];return j.Children.forEach(t,(i,r)=>{if(!j.isValidElement(i))return;let s=[...e,r];if(i.type===j.Fragment){n.push.apply(n,Rd(i.props.children,s));return}Tt(i.type===Za,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Rd(i.props.children,s)),n.push(a)}),n}var Ql="get",eu="application/x-www-form-urlencoded";function oc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function sT(t){return oc(t)&&t.tagName.toLowerCase()==="button"}function aT(t){return oc(t)&&t.tagName.toLowerCase()==="form"}function oT(t){return oc(t)&&t.tagName.toLowerCase()==="input"}function lT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uT(t,e){return t.button===0&&(!e||e==="_self")&&!lT(t)}var dl=null;function cT(){if(dl===null)try{new FormData(document.createElement("form"),0),dl=!1}catch{dl=!0}return dl}var fT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(t){return t!=null&&!fT.has(t)?(bi(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):t}function dT(t,e){let n,i,r,s,a;if(aT(t)){let o=t.getAttribute("action");i=o?Ji(o,e):null,n=t.getAttribute("method")||Ql,r=jc(t.getAttribute("enctype"))||eu,s=new FormData(t)}else if(sT(t)||oT(t)&&(t.type==="submit"||t.type==="image")){let o=t.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||o.getAttribute("action");if(i=l?Ji(l,e):null,n=t.getAttribute("formmethod")||o.getAttribute("method")||Ql,r=jc(t.getAttribute("formenctype"))||jc(o.getAttribute("enctype"))||eu,s=new FormData(o,t),!cT()){let{name:u,type:c,value:f}=t;if(c==="image"){let d=u?`${u}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else u&&s.append(u,f)}}else{if(oc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ql,i=null,r=eu,a=t}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tp(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bx(t,e,n,i){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&Ji(r.pathname,e)==="/"?r.pathname=`${Iu(e)}/_root.${i}`:r.pathname=`${Iu(r.pathname)}.${i}`,r}async function hT(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pT(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function mT(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await hT(s,n);return a.links?a.links():[]}return[]}));return xT(i.flat(1).filter(pT).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Tg(t,e,n,i,r,s){let a=(l,u)=>n[u]?l.route.id!==n[u].route.id:!0,o=(l,u)=>{var c;return n[u].pathname!==l.pathname||((c=n[u].route.path)==null?void 0:c.endsWith("*"))&&n[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?e.filter((l,u)=>{var f;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function gT(t,e,{includeHydrateFallback:n}={}){return _T(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function _T(t){return[...new Set(t)]}function vT(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function xT(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(vT(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}function wp(){let t=j.useContext(Sa);return Tp(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function yT(){let t=j.useContext(ac);return Tp(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var bp=j.createContext(void 0);bp.displayName="FrameworkContext";function Ap(){let t=j.useContext(bp);return Tp(t,"You must render this element inside a <HydratedRouter> element"),t}function ST(t,e){let n=j.useContext(bp),[i,r]=j.useState(!1),[s,a]=j.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=e,d=j.useRef(null);j.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let x=h=>{h.forEach(g=>{a(g.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return d.current&&m.observe(d.current),()=>{m.disconnect()}}},[t]),j.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return n?t!=="intent"?[s,d,{}]:[s,d,{onFocus:Ua(o,p),onBlur:Ua(l,_),onMouseEnter:Ua(u,p),onMouseLeave:Ua(c,_),onTouchStart:Ua(f,p)}]:[!1,d,{}]}function Ua(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function MT({page:t,...e}){let n=DE(),{router:i}=wp(),r=j.useMemo(()=>cx(i.routes,t,i.basename),[i.routes,t,i.basename]);return r?n?j.createElement(TT,{page:t,matches:r,...e}):j.createElement(wT,{page:t,matches:r,...e}):null}function ET(t){let{manifest:e,routeModules:n}=Ap(),[i,r]=j.useState([]);return j.useEffect(()=>{let s=!1;return mT(t,e,n).then(a=>{s||r(a)}),()=>{s=!0}},[t,e,n]),i}function TT({page:t,matches:e,...n}){let i=Ci(),{future:r}=Ap(),{basename:s}=wp(),a=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let o=bx(t,s,r.unstable_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of e)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,r.unstable_trailingSlashAwareDataRequests,t,i,e]);return j.createElement(j.Fragment,null,a.map(o=>j.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...n})))}function wT({page:t,matches:e,...n}){let i=Ci(),{future:r,manifest:s,routeModules:a}=Ap(),{basename:o}=wp(),{loaderData:l,matches:u}=yT(),c=j.useMemo(()=>Tg(t,e,u,s,i,"data"),[t,e,u,s,i]),f=j.useMemo(()=>Tg(t,e,u,s,i,"assets"),[t,e,u,s,i]),d=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let x=new Set,m=!1;if(e.forEach(g=>{var S;let v=s.routes[g.route.id];!v||!v.hasLoader||(!c.some(b=>b.route.id===g.route.id)&&g.route.id in l&&((S=a[g.route.id])!=null&&S.shouldRevalidate)||v.hasClientLoader?m=!0:x.add(g.route.id))}),x.size===0)return[];let h=bx(t,o,r.unstable_trailingSlashAwareDataRequests,"data");return m&&x.size>0&&h.searchParams.set("_routes",e.filter(g=>x.has(g.route.id)).map(g=>g.route.id).join(",")),[h.pathname+h.search]},[o,r.unstable_trailingSlashAwareDataRequests,l,i,s,c,e,t,a]),p=j.useMemo(()=>gT(f,s),[f,s]),_=ET(f);return j.createElement(j.Fragment,null,d.map(x=>j.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),p.map(x=>j.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),_.map(({key:x,link:m})=>j.createElement("link",{key:x,nonce:n.nonce,...m,crossOrigin:m.crossOrigin??n.crossOrigin})))}function bT(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var AT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{AT&&(window.__reactRouterVersion="7.15.0")}catch{}function RT({basename:t,children:e,useTransitions:n,window:i}){let r=j.useRef();r.current==null&&(r.current=aE({window:i,v5Compat:!0}));let s=r.current,[a,o]=j.useState({action:s.action,location:s.location}),l=j.useCallback(u=>{n===!1?o(u):j.startTransition(()=>o(u))},[n]);return j.useLayoutEffect(()=>s.listen(l),[s,l]),j.createElement(iT,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:s,useTransitions:n})}var Ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rx=j.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,mask:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:d,defaultShouldRevalidate:p,..._},x){let{basename:m,navigator:h,useTransitions:g}=j.useContext(Wn),v=typeof c=="string"&&Ax.test(c),S=gx(c,m);c=S.to;let b=VE(c,{relative:r}),T=Ci(),A=null;if(o){let N=yp(o,[],T.mask?T.mask.pathname:"/",!0);m!=="/"&&(N.pathname=N.pathname==="/"?m:ri([m,N.pathname])),A=h.createHref(N)}let[y,R,P]=ST(i,_),C=LT(c,{replace:a,mask:o,state:l,target:u,preventScrollReset:f,relative:r,viewTransition:d,defaultShouldRevalidate:p,useTransitions:g});function O(N){e&&e(N),N.defaultPrevented||C(N)}let X=!(S.isExternal||s),K=j.createElement("a",{..._,...P,href:(X?A:void 0)||S.absoluteURL||b,onClick:X?O:e,ref:bT(x,R),target:u,"data-discover":!v&&n==="render"?"true":void 0});return y&&!v?j.createElement(j.Fragment,null,K,j.createElement(MT,{page:b})):K});Rx.displayName="Link";var Cd=j.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...u},c){let f=jo(a,{relative:u.relative}),d=Ci(),p=j.useContext(ac),{navigator:_,basename:x}=j.useContext(Wn),m=p!=null&&FT(f)&&o===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,g=d.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(g=g.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&x&&(v=Ji(v,x)||v);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=g===h||!r&&g.startsWith(h)&&g.charAt(S)==="/",T=v!=null&&(v===h||!r&&v.startsWith(h)&&v.charAt(h.length)==="/"),A={isActive:b,isPending:T,isTransitioning:m},y=b?e:void 0,R;typeof i=="function"?R=i(A):R=[i,b?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(A):s;return j.createElement(Rx,{...u,"aria-current":y,className:R,ref:c,style:P,to:a,viewTransition:o},typeof l=="function"?l(A):l)});Cd.displayName="NavLink";var CT=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:a=Ql,action:o,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,defaultShouldRevalidate:d,...p},_)=>{let{useTransitions:x}=j.useContext(Wn),m=DT(),h=UT(o,{relative:u}),g=a.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&Ax.test(o),S=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let T=b.nativeEvent.submitter,A=(T==null?void 0:T.getAttribute("formmethod"))||a,y=()=>m(T||b.currentTarget,{fetcherKey:e,method:A,navigate:n,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:f,defaultShouldRevalidate:d});x&&n!==!1?j.startTransition(()=>y()):y()};return j.createElement("form",{ref:_,method:g,action:h,onSubmit:i?l:S,...p,"data-discover":!v&&t==="render"?"true":void 0})});CT.displayName="Form";function PT(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cx(t){let e=j.useContext(Sa);return Tt(e,PT(t)),e}function LT(t,{target:e,replace:n,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l,useTransitions:u}={}){let c=HE(),f=Ci(),d=jo(t,{relative:a});return j.useCallback(p=>{if(uT(p,e)){p.preventDefault();let _=n!==void 0?n:Lo(f)===Lo(d),x=()=>c(t,{replace:_,mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,defaultShouldRevalidate:l});u?j.startTransition(()=>x()):x()}},[f,c,d,n,i,r,e,t,s,a,o,l,u])}var NT=0,IT=()=>`__${String(++NT)}__`;function DT(){let{router:t}=Cx("useSubmit"),{basename:e}=j.useContext(Wn),n=QE(),i=t.fetch,r=t.navigate;return j.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:c,body:f}=dT(s,e);if(a.navigate===!1){let d=a.fetcherKey||IT();await i(d,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await r(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,n])}function UT(t,{relative:e}={}){let{basename:n}=j.useContext(Wn),i=j.useContext(ir);Tt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...jo(t||".",{relative:e})},a=Ci();if(t==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(c=>c==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let c=o.toString();s.search=c?`?${c}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:ri([n,s.pathname])),Lo(s)}function FT(t,{relative:e}={}){let n=j.useContext(xx);Tt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Cx("useViewTransitionState"),r=jo(t,{relative:e});if(!n.isTransitioning)return!1;let s=Ji(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=Ji(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Nu(r.pathname,a)!=null||Nu(r.pathname,s)!=null}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=t=>{const e=kT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},zT=j.createContext({}),VT=()=>j.useContext(zT),HT=j.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=VT()??{},_=i??f?Number(n??c)*24/Number(e??u):n??c;return j.createElement("svg",{ref:l,...Xc,width:e??u??Xc.width,height:e??u??Xc.height,stroke:t??d,strokeWidth:_,className:Px("lucide",p,r),...!s&&!BT(o)&&{"aria-hidden":"true"},...o},[...a.map(([x,m])=>j.createElement(x,m)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=(t,e)=>{const n=j.forwardRef(({className:i,...r},s)=>j.createElement(HT,{ref:s,iconNode:e,className:Px(`lucide-${OT(wg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=wg(t),n};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],WT=jn("arrow-right",GT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],XT=jn("arrow-up-right",jT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],YT=jn("braces",$T);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],KT=jn("code-xml",qT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],JT=jn("external-link",ZT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],e1=jn("gamepad-2",QT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],n1=jn("layers",t1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],r1=jn("map-pin",i1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],a1=jn("mouse",s1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],l1=jn("rocket",o1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],c1=jn("sparkles",u1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],d1=jn("x",f1);function h1(){return z.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500",children:[z.jsx(a1,{className:"w-6 h-6"}),z.jsx("div",{className:"mt-2 animate-bounce",children:z.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:z.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="184",p1=0,bg=1,m1=2,tu=1,g1=2,Ja=3,Qi=0,xn=1,vi=2,Xi=0,Js=1,Ag=2,Rg=3,Cg=4,_1=5,Yr=100,v1=101,x1=102,y1=103,S1=104,M1=200,E1=201,T1=202,w1=203,Pd=204,Ld=205,b1=206,A1=207,R1=208,C1=209,P1=210,L1=211,N1=212,I1=213,D1=214,Nd=0,Id=1,Dd=2,la=3,Ud=4,Fd=5,Od=6,kd=7,Lx=0,U1=1,F1=2,Ei=0,Nx=1,Ix=2,Dx=3,Cp=4,Ux=5,Fx=6,Ox=7,Pg="attached",O1="detached",kx=300,cs=301,ua=302,$c=303,Yc=304,lc=306,ca=1e3,xi=1001,Du=1002,zt=1003,Bx=1004,Qa=1005,Vt=1006,nu=1007,Gi=1008,wn=1009,zx=1010,Vx=1011,No=1012,Pp=1013,Ai=1014,Bn=1015,er=1016,Lp=1017,Np=1018,Io=1020,Hx=35902,Gx=35899,Wx=1021,jx=1022,zn=1023,tr=1026,Qr=1027,Ip=1028,Dp=1029,fs=1030,Up=1031,Fp=1033,iu=33776,ru=33777,su=33778,au=33779,Bd=35840,zd=35841,Vd=35842,Hd=35843,Gd=36196,Wd=37492,jd=37496,Xd=37488,$d=37489,Uu=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,ah=37819,oh=37820,lh=37821,uh=36492,ch=36494,fh=36495,dh=36283,hh=36284,Fu=36285,ph=36286,Do=2300,Uo=2301,qc=2302,Lg=2303,Ng=2400,Ig=2401,Dg=2402,k1=2500,B1=0,Xx=1,mh=2,z1=3200,gh=0,V1=1,Sr="",Xt="srgb",Cn="srgb-linear",Ou="linear",nt="srgb",vs=7680,Ug=519,H1=512,G1=513,W1=514,Op=515,j1=516,X1=517,kp=518,$1=519,_h=35044,Fg="300 es",yi=2e3,Fo=2001;function Y1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function q1(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Oo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K1(){const t=Oo("canvas");return t.style.display="block",t}const Og={};function ku(...t){const e="THREE."+t.shift();console.log(e,...t)}function $x(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function we(...t){t=$x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Pe(...t){t=$x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function vh(...t){const e=t.join(" ");e in Og||(Og[e]=!0,we(...t))}function Z1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const J1={[Nd]:Id,[Dd]:Od,[Ud]:kd,[la]:Fd,[Id]:Nd,[Od]:Dd,[kd]:Ud,[Fd]:la};class ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const co=Math.PI/180,fa=180/Math.PI;function si(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Bp(t,e){return(t%e+e)%e}function Q1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function ew(t,e,n){return t!==e?(n-t)/(e-t):0}function fo(t,e,n){return(1-n)*t+n*e}function tw(t,e,n,i){return fo(t,e,1-Math.exp(-n*i))}function nw(t,e=1){return e-Math.abs(Bp(t,e*2)-e)}function iw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function rw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function sw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function aw(t,e){return t+Math.random()*(e-t)}function ow(t){return t*(.5-Math.random())}function lw(t){t!==void 0&&(kg=t);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uw(t){return t*co}function cw(t){return t*fa}function fw(t){return(t&t-1)===0&&t!==0}function dw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function hw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pw(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*f,l*d,o*u);break;case"YZY":t.set(l*d,o*c,l*f,o*u);break;case"ZXZ":t.set(l*f,l*d,o*c,o*u);break;case"XZX":t.set(o*c,l*_,l*p,o*u);break;case"YXY":t.set(l*p,o*c,l*_,o*u);break;case"ZYZ":t.set(l*_,l*p,o*c,o*u);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const mw={DEG2RAD:co,RAD2DEG:fa,generateUUID:si,clamp:$e,euclideanModulo:Bp,mapLinear:Q1,inverseLerp:ew,lerp:fo,damp:tw,pingpong:nw,smoothstep:iw,smootherstep:rw,randInt:sw,randFloat:aw,randFloatSpread:ow,seededRandom:lw,degToRad:uw,radToDeg:cw,isPowerOfTwo:fw,ceilPowerOfTwo:dw,floorPowerOfTwo:hw,setQuaternionFromProperEuler:pw,normalize:it,denormalize:ei},Kp=class Kp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kp.prototype.isVector2=!0;let Je=Kp;class rr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(f!==x||l!==d||u!==p||c!==_){let m=l*d+u*p+c*_+f*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);h=Math.sin(h*g)/v,o=Math.sin(o*g)/v,l=l*h+d*o,u=u*h+p*o,c=c*h+_*o,f=f*h+x*o}else{l=l*h+d*o,u=u*h+p*o,c=c*h+_*o,f=f*h+x*o;const g=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=g,u*=g,c*=g,f*=g}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+c*f+l*p-u*d,e[n+1]=l*_+c*d+u*f-o*p,e[n+2]=u*_+c*p+o*d-l*f,e[n+3]=c*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let U=Zp;const Kc=new U,Bg=new rr,Jp=class Jp{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],h=r[6],g=r[1],v=r[4],S=r[7],b=r[2],T=r[5],A=r[8];return s[0]=a*x+o*g+l*b,s[3]=a*m+o*v+l*T,s[6]=a*h+o*S+l*A,s[1]=u*x+c*g+f*b,s[4]=u*m+c*v+f*T,s[7]=u*h+c*S+f*A,s[2]=d*x+p*g+_*b,s[5]=d*m+p*v+_*T,s[8]=d*h+p*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,p=u*s-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Zc.makeScale(e,n)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let Ue=Jp;const Zc=new Ue,zg=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gw(){const t={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Ou:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Cn]:{primaries:e,whitePoint:i,transfer:Ou,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),t}const Xe=gw();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class _w{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Oo("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vw=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_w.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let xw=0;const Qc=new U;class Yt extends ps{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=xi,r=xi,s=Vt,a=Gi,o=zn,l=wn,u=Yt.DEFAULT_ANISOTROPY,c=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=si(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){we(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){we(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=kx;Yt.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(p+1)/2,b=(h+1)/2,T=(c+d)/4,A=(f+x)/4,y=(_+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let ft=Qp;class yw extends ps{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Yt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new zp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends yw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yx extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sw extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,n,i,r,s,a,o,l,u,c,f,d,p,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,f,d,p,_,x,m)}set(e,n,i,r,s,a,o,l,u,c,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*f,_=o*c,x=o*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-x*u,n[9]=-o*l,n[2]=x-d*u,n[6]=_+p*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,x=u*f;n[0]=d+x*o,n[4]=_*o-p,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-o,n[2]=p*o-_,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,x=u*f;n[0]=d-x*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*c,n[9]=x-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*f,_=o*c,x=o*f;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=p*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,x=o*u;n[0]=l*c,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,x=o*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+x,n[5]=a*c,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*c,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,Ew)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),cr.crossVectors(i,Mn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),cr.crossVectors(i,Mn)),cr.normalize(),hl.crossVectors(Mn,cr),r[0]=cr.x,r[4]=hl.x,r[8]=Mn.x,r[1]=cr.y,r[5]=hl.y,r[9]=Mn.y,r[2]=cr.z,r[6]=hl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],g=i[3],v=i[7],S=i[11],b=i[15],T=r[0],A=r[4],y=r[8],R=r[12],P=r[1],C=r[5],O=r[9],X=r[13],K=r[2],N=r[6],W=r[10],B=r[14],k=r[3],$=r[7],ee=r[11],oe=r[15];return s[0]=a*T+o*P+l*K+u*k,s[4]=a*A+o*C+l*N+u*$,s[8]=a*y+o*O+l*W+u*ee,s[12]=a*R+o*X+l*B+u*oe,s[1]=c*T+f*P+d*K+p*k,s[5]=c*A+f*C+d*N+p*$,s[9]=c*y+f*O+d*W+p*ee,s[13]=c*R+f*X+d*B+p*oe,s[2]=_*T+x*P+m*K+h*k,s[6]=_*A+x*C+m*N+h*$,s[10]=_*y+x*O+m*W+h*ee,s[14]=_*R+x*X+m*B+h*oe,s[3]=g*T+v*P+S*K+b*k,s[7]=g*A+v*C+S*N+b*$,s[11]=g*y+v*O+S*W+b*ee,s[15]=g*R+v*X+S*B+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],g=l*p-u*d,v=o*p-u*f,S=o*d-l*f,b=a*p-u*c,T=a*d-l*c,A=a*f-o*c;return n*(x*g-m*v+h*S)-i*(_*g-m*b+h*T)+r*(_*v-x*b+h*A)-s*(_*S-x*T+m*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],g=n*o-i*a,v=n*l-r*a,S=n*u-s*a,b=i*l-r*o,T=i*u-s*o,A=r*u-s*l,y=c*x-f*_,R=c*m-d*_,P=c*h-p*_,C=f*m-d*x,O=f*h-p*x,X=d*h-p*m,K=g*X-v*O+S*C+b*P-T*R+A*y;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/K;return e[0]=(o*X-l*O+u*C)*N,e[1]=(r*O-i*X-s*C)*N,e[2]=(x*A-m*T+h*b)*N,e[3]=(d*T-f*A-p*b)*N,e[4]=(l*P-a*X-u*R)*N,e[5]=(n*X-r*P+s*R)*N,e[6]=(m*S-_*A-h*v)*N,e[7]=(c*A-d*S+p*v)*N,e[8]=(a*O-o*P+u*y)*N,e[9]=(i*P-n*O-s*y)*N,e[10]=(_*T-x*S+h*g)*N,e[11]=(f*S-c*T-p*g)*N,e[12]=(o*R-a*C-l*y)*N,e[13]=(n*C-i*R+r*y)*N,e[14]=(x*v-_*b-m*g)*N,e[15]=(c*b-f*v+d*g)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,f=o+o,d=s*u,p=s*c,_=s*f,x=a*c,m=a*f,h=o*f,g=l*u,v=l*c,S=l*f,b=i.x,T=i.y,A=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),l=ys.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const u=1/a,c=1/o,f=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,n.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=yi,l=!1){const u=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===yi)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Fo)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=yi,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===yi)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Fo)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Gu.prototype.isMatrix4=!0;let He=Gu;const ys=new U,Yn=new He,Mw=new U(0,0,0),Ew=new U(1,1,1),cr=new U,hl=new U,Mn=new U,Hg=new He,Gg=new rr;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class qx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tw=0;const Wg=new U,Ss=new rr,Ii=new He,pl=new U,Fa=new U,ww=new U,bw=new rr,jg=new U(1,0,0),Xg=new U(0,1,0),$g=new U(0,0,1),Yg={type:"added"},Aw={type:"removed"},Ms={type:"childadded",child:null},ef={type:"childremoved",child:null};class vt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new U,n=new Ur,i=new rr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Ue}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis($g,e)}translateOnAxis(e,n){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis($g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?pl.copy(e):pl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Fa,pl,this.up):Ii.lookAt(pl,Fa,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Aw),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,bw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new U(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class es extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rw={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Fe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=Bp(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nf(a,s,e+1/3),this.g=nf(a,s,e),this.b=nf(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xt){const i=Kx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Xe.workingToColorSpace(nn.copy(this),e),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Xt){Xe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Xt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(ml);const i=fo(fr.h,ml.h,n),r=fo(fr.s,ml.s,n),s=fo(fr.l,ml.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Fe;Fe.NAMES=Kx;class Cw extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const qn=new U,Di=new U,rf=new U,Ui=new U,Es=new U,Ts=new U,qg=new U,sf=new U,af=new U,of=new U,lf=new ft,uf=new ft,cf=new ft;class ti{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Di.subVectors(i,n),rf.subVectors(e,n);const a=qn.dot(qn),o=qn.dot(Di),l=qn.dot(rf),u=Di.dot(Di),c=Di.dot(rf),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return lf.setScalar(0),uf.setScalar(0),cf.setScalar(0),lf.fromBufferAttribute(e,n),uf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lf,s.x),a.addScaledVector(uf,s.y),a.addScaledVector(cf,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Di.subVectors(e,n),qn.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Es.subVectors(r,i),Ts.subVectors(s,i),sf.subVectors(e,i);const l=Es.dot(sf),u=Ts.dot(sf);if(l<=0&&u<=0)return n.copy(i);af.subVectors(e,r);const c=Es.dot(af),f=Ts.dot(af);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Es,a);of.subVectors(e,s);const p=Es.dot(of),_=Ts.dot(of);if(_>=0&&p<=_)return n.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Ts,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return qg.subVectors(s,r),o=(f-c)/(f-c+(p-_)),n.copy(r).addScaledVector(qg,o);const h=1/(m+x+d);return a=x*h,o=d*h,n.copy(i).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sr{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),_l.subVectors(this.max,Oa),ws.subVectors(e.a,Oa),bs.subVectors(e.b,Oa),As.subVectors(e.c,Oa),dr.subVectors(bs,ws),hr.subVectors(As,bs),zr.subVectors(ws,As);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!ff(n,ws,bs,As,_l)||(n=[1,0,0,0,1,0,0,0,1],!ff(n,ws,bs,As,_l))?!1:(vl.crossVectors(dr,hr),n=[vl.x,vl.y,vl.z],ff(n,ws,bs,As,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,gl=new sr,ws=new U,bs=new U,As=new U,dr=new U,hr=new U,zr=new U,Oa=new U,_l=new U,vl=new U,Vr=new U;function ff(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Vr.fromArray(t,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),u=n.dot(Vr),c=i.dot(Vr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Dt=new U,xl=new Je;let Pw=0;class fn extends ps{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zx extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jx extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ai extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Lw=new sr,ka=new U,df=new U;class Pi{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(df)),this.expandByPoint(ka.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Nw=0;const Dn=new He,hf=new vt,Rs=new U,En=new sr,Ba=new sr,Wt=new U;class Xn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nw++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y1(e)?Jx:Zx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(En.min,Ba.min),En.expandByPoint(Wt),Wt.addVectors(En.max,Ba.max),En.expandByPoint(Wt)):(En.expandByPoint(Ba.min),En.expandByPoint(Ba.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Wt.fromBufferAttribute(o,u),l&&(Rs.fromBufferAttribute(e,u),Wt.add(Rs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new U,l[y]=new U;const u=new U,c=new U,f=new U,d=new Je,p=new Je,_=new Je,x=new U,m=new U;function h(y,R,P){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,P),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(C),o[y].add(x),o[R].add(x),o[P].add(x),l[y].add(m),l[R].add(m),l[P].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,R=g.length;y<R;++y){const P=g[y],C=P.start,O=P.count;for(let X=C,K=C+O;X<K;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new U,S=new U,b=new U,T=new U;function A(y){b.fromBufferAttribute(r,y),T.copy(b);const R=o[y];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),S.crossVectors(T,R);const C=S.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,C)}for(let y=0,R=g.length;y<R;++y){const P=g[y],C=P.start,O=P.count;for(let X=C,K=C+O;X<K;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new fn(d,c,f)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iw{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new U;class Vp{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ku("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ku("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Dw=0;class wi extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Js,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){we(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){we(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new U,pf=new U,yl=new U,pr=new U,mf=new U,Sl=new U,gf=new U;class uc{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pf.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(pf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(yl),o=pr.dot(this.direction),l=-pr.dot(yl),u=pr.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const x=1/c;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pf).addScaledVector(yl,d),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){mf.subVectors(n,e),Sl.subVectors(i,e),gf.crossVectors(mf,Sl);let a=this.direction.dot(gf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pr.subVectors(this.origin,e);const l=o*this.direction.dot(Sl.crossVectors(pr,Sl));if(l<0)return null;const u=o*this.direction.dot(mf.cross(pr));if(u<0||l+u>a)return null;const c=-o*pr.dot(gf);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ts extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kg=new He,Hr=new uc,Ml=new Pi,Zg=new U,El=new U,Tl=new U,wl=new U,_f=new U,bl=new U,Jg=new U,Al=new U;class Pn extends vt{constructor(e=new Xn,n=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(_f.fromBufferAttribute(f,e),a?bl.addScaledVector(_f,c):bl.addScaledVector(_f.sub(n),c))}n.add(bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ml,Zg)===null||Hr.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Kg),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const T=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);r=Rl(this,h,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Rl(this,a,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const T=S,A=S+1,y=S+2;r=Rl(this,h,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=m,v=m+1,S=m+2;r=Rl(this,a,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Uw(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qi,o),l===null)return null;Al.copy(o),Al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Al);return u<n.near||u>n.far?null:{distance:u,point:Al.clone(),object:t}}function Rl(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,El),t.getVertexPosition(l,Tl),t.getVertexPosition(u,wl);const c=Uw(t,e,n,i,El,Tl,wl,Jg);if(c){const f=new U;ti.getBarycoord(Jg,El,Tl,wl,f),r&&(c.uv=ti.getInterpolatedAttribute(r,o,l,u,f,new Je)),s&&(c.uv1=ti.getInterpolatedAttribute(s,o,l,u,f,new Je)),a&&(c.normal=ti.getInterpolatedAttribute(a,o,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new U,materialIndex:0};ti.getNormal(El,Tl,wl,d.normal),c.face=d,c.barycoord=f}return c}const za=new ft,Qg=new ft,e0=new ft,Fw=new ft,t0=new He,Cl=new U,vf=new Pi,n0=new He,xf=new uc;class Ow extends Pn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pg,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sr),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vf.copy(this.boundingSphere),vf.applyMatrix4(r),e.ray.intersectsSphere(vf)!==!1&&(n0.copy(r).invert(),xf.copy(e.ray).applyMatrix4(n0),!(this.boundingBox!==null&&xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,xf)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===O1?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;Qg.fromBufferAttribute(r.attributes.skinIndex,e),e0.fromBufferAttribute(r.attributes.skinWeight,e),n.isVector4?(za.copy(n),n.set(0,0,0,0)):(za.set(...n,1),n.set(0,0,0)),za.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=e0.getComponent(s);if(a!==0){const o=Qg.getComponent(s);t0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(Fw.copy(za).applyMatrix4(t0),a)}}return n.isVector4&&(n.w=za.w),n.applyMatrix4(this.bindMatrixInverse)}}class Qx extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hp extends Yt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=zt,c=zt,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const i0=new He,kw=new He;class Gp{constructor(e=[],n=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:kw;i0.multiplyMatrices(o,n[s]),i0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new Hp(n,e,e,zn,Bn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=n[s];a===void 0&&(we("Skeleton: No bone found with UUID:",s),a=new Qx),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const a=n[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class xh extends fn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new He,r0=new He,Pl=[],s0=new sr,Bw=new He,Va=new Pn,Ha=new Pi;class ey extends Pn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bw)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Cs),s0.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Cs),Ha.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Ha)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Va.geometry=this.geometry,Va.material=this.material,Va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(i),e.ray.intersectsSphere(Ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),r0.multiplyMatrices(i,Cs),Va.matrixWorld=r0,Va.raycast(e,Pl);for(let a=0,o=Pl.length;a<o;a++){const l=Pl[a];l.instanceId=s,l.object=this,n.push(l)}Pl.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(r*this.count),r,this.count,Ip,Bn));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yf=new U,zw=new U,Vw=new Ue;class $r{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yf.subVectors(i,n).cross(zw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(yf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vw.getNormalMatrix(e),r=this.coplanarPoint(yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Pi,Hw=new Je(.5,.5),Ll=new U;class Wp{constructor(e=new $r,n=new $r,i=new $r,r=new $r,s=new $r,a=new $r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],f=s[5],d=s[6],p=s[7],_=s[8],x=s[9],m=s[10],h=s[11],g=s[12],v=s[13],S=s[14],b=s[15];if(r[0].setComponents(u-a,p-c,h-_,b-g).normalize(),r[1].setComponents(u+a,p+c,h+_,b+g).normalize(),r[2].setComponents(u+o,p+f,h+x,b+v).normalize(),r[3].setComponents(u-o,p-f,h-x,b-v).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(u-l,p-d,h-m,b-S).normalize();else if(r[4].setComponents(u-l,p-d,h-m,b-S).normalize(),n===yi)r[5].setComponents(u+l,p+d,h+m,b+S).normalize();else if(n===Fo)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=Hw.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new U,zu=new U,a0=new He,Ga=new uc,Nl=new Pi,Sf=new U,o0=new U;class jp extends vt{constructor(e=new Xn,n=new ty){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Bu.fromBufferAttribute(n,r-1),zu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new ai(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;a0.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(a0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=c.getX(x),g=c.getX(x+1),v=Il(this,e,Ga,l,h,g,x);v&&n.push(v)}if(this.isLineLoop){const x=c.getX(_-1),m=c.getX(p),h=Il(this,e,Ga,l,x,m,_-1);h&&n.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=Il(this,e,Ga,l,x,x+1,x);h&&n.push(h)}if(this.isLineLoop){const x=Il(this,e,Ga,l,_-1,p,_-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Il(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Bu.fromBufferAttribute(o,r),zu.fromBufferAttribute(o,s),n.distanceSqToSegment(Bu,zu,Sf,o0)>i)return;Sf.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(Sf);if(!(u<e.near||u>e.far))return{distance:u,point:o0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const l0=new U,u0=new U;class Gw extends jp{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)l0.fromBufferAttribute(n,r),u0.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+l0.distanceTo(u0);e.setAttribute("lineDistance",new ai(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ww extends jp{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class ny extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const c0=new He,yh=new uc,Dl=new Pi,Ul=new U;class jw extends vt{constructor(e=new Xn,n=new ny){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;c0.copy(r).invert(),yh.copy(e.ray).applyMatrix4(c0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=u.getX(_);Ul.fromBufferAttribute(f,m),f0(Ul,m,l,r,e,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Ul.fromBufferAttribute(f,_),f0(Ul,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function f0(t,e,n,i,r,s,a){const o=yh.distanceSqToPoint(t);if(o<n){const l=new U;yh.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iy extends Yt{constructor(e=[],n=cs,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class da extends Yt{constructor(e,n,i=Ai,r,s,a,o=zt,l=zt,u,c=tr,f=1){if(c!==tr&&c!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Xw extends da{constructor(e,n=Ai,i=cs,r,s,a=zt,o=zt,l,u=tr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ry extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xo extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(c,3)),this.setAttribute("uv",new ai(f,2));function _(x,m,h,g,v,S,b,T,A,y,R){const P=S/A,C=b/y,O=S/2,X=b/2,K=T/2,N=A+1,W=y+1;let B=0,k=0;const $=new U;for(let ee=0;ee<W;ee++){const oe=ee*C-X;for(let he=0;he<N;he++){const Ge=he*P-O;$[x]=Ge*g,$[m]=oe*v,$[h]=K,u.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[h]=T>0?1:-1,c.push($.x,$.y,$.z),f.push(he/A),f.push(1-ee/y),B+=1}}for(let ee=0;ee<y;ee++)for(let oe=0;oe<A;oe++){const he=d+oe+N*ee,Ge=d+oe+N*(ee+1),qe=d+(oe+1)+N*(ee+1),Ne=d+(oe+1)+N*ee;l.push(he,Ge,Ne),l.push(Ge,qe,Ne),k+=6}o.addGroup(p,k,R),p+=k,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cc extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=n/l,p=[],_=[],x=[],m=[];for(let h=0;h<c;h++){const g=h*d-a;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-g,0),x.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const v=g+u*h,S=g+u*(h+1),b=g+1+u*(h+1),T=g+1+u*h;p.push(v,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ha(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(d0(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(d0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ha(t[n]);for(const r in i)e[r]=i[r]}return e}function d0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $w(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Yw={clone:ha,merge:on};var qw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qw,this.fragmentShader=Kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=$w(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zw extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Jw extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qw extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function eb(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function h0(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){const o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function ay(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push(...a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class Ma{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=n[++i],e<r)break t}a=n.length;break n}if(!(e>=s)){const o=n[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<n[o]?a=o:i=o+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)n[a]=i[s+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tb extends Ma{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ng,endingEnd:Ng}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ig:s=e,o=2*n-i;break;case Dg:s=r.length-2,o=n+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ig:a=e,l=2*i-n;break;case Dg:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=n}const u=(i-n)*.5,c=this.valueSize;this._weightPrev=u/(n-o),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-n)/(r-n),x=_*_,m=x*_,h=-d*m+2*d*x-d*_,g=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-p)*m+(1.5+p)*x+.5*_,S=p*m-p*x;for(let b=0;b!==o;++b)s[b]=h*a[c+b]+g*a[u+b]+v*a[l+b]+S*a[f+b];return s}}class nb extends Ma{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(i-n)/(r-n),f=1-c;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[l+d]*c;return s}}class ib extends Ma{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class rb extends Ma{interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this.settings||this.DefaultSettings_,f=c.inTangents,d=c.outTangents;if(!f||!d){const x=(i-n)/(r-n),m=1-x;for(let h=0;h!==o;++h)s[h]=a[u+h]*m+a[l+h]*x;return s}const p=o*2,_=e-1;for(let x=0;x!==o;++x){const m=a[u+x],h=a[l+x],g=_*p+x*2,v=d[g],S=d[g+1],b=e*p+x*2,T=f[b],A=f[b+1];let y=(i-n)/(r-n),R,P,C,O,X;for(let K=0;K<8;K++){R=y*y,P=R*y,C=1-y,O=C*C,X=O*C;const W=X*n+3*O*y*v+3*C*R*T+P*r-i;if(Math.abs(W)<1e-10)break;const B=3*O*(v-n)+6*C*y*(T-v)+3*R*(r-T);if(Math.abs(B)<1e-10)break;y=y-W/B,y=Math.max(0,Math.min(1,y))}s[x]=X*m+3*O*y*S+3*C*R*A+P*h}return s}}class li{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(n,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ib(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const n=new rb(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.settings=this.settings),n}setInterpolation(e){let n;switch(e){case Do:n=this.InterpolantFactoryMethodDiscrete;break;case Uo:n=this.InterpolantFactoryMethodLinear;break;case qc:n=this.InterpolantFactoryMethodSmooth;break;case Lg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return qc;case this.InterpolantFactoryMethodBezier:return Lg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>n;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&q1(r))for(let o=0,l=r.length;o!==l;++o){const u=r[o];if(isNaN(u)){Pe("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(r)l=!0;else{const f=o*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const x=n[f+_];if(x!==n[d+_]||x!==n[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,d=a*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,u=0;u!==i;++u)n[l+u]=n[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Uo;class Ea extends li{constructor(e,n,i){super(e,n,i)}}Ea.prototype.ValueTypeName="bool";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Do;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class oy extends li{constructor(e,n,i,r){super(e,n,i,r)}}oy.prototype.ValueTypeName="color";class pa extends li{constructor(e,n,i,r){super(e,n,i,r)}}pa.prototype.ValueTypeName="number";class sb extends Ma{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(r-n);let u=e*o;for(let c=u+o;u!==c;u+=4)rr.slerpFlat(s,0,a,u-o,a,u,l);return s}}class ma extends li{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new sb(this.times,this.values,this.getValueSize(),e)}}ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends li{constructor(e,n,i){super(e,n,i)}}Ta.prototype.ValueTypeName="string";Ta.prototype.ValueBufferType=Array;Ta.prototype.DefaultInterpolation=Do;Ta.prototype.InterpolantFactoryMethodLinear=void 0;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends li{constructor(e,n,i,r){super(e,n,i,r)}}ga.prototype.ValueTypeName="vector";class ab{constructor(e="",n=-1,i=[],r=k1){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)n.push(lb(i[a]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)n.push(li.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,a=[];for(let o=0;o<s;o++){let l=[],u=[];l.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const c=eb(l);l=h0(l,1,c),u=h0(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),a.push(new pa(".morphTargetInfluences["+n[o].name+"]",l,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const u=e[o],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],n,i));return a}static parseAnimation(e,n){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,x){if(p.length!==0){const m=[],h=[];ay(p,m,h,_),m.length!==0&&x.push(new f(d,m,h))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const m=[],h=[];for(let g=0;g!==d[_].morphTargets.length;++g){const v=d[_];m.push(v.time),h.push(v.morphTarget===x?1:0)}r.push(new pa(".morphTargetInfluence["+x+"]",m,h))}l=p.length*a}else{const p=".bones["+n[f].name+"]";i(ga,p+".position",d,"pos",r),i(ma,p+".quaternion",d,"rot",r),i(ga,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}}function ob(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pa;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return oy;case"quaternion":return ma;case"bool":case"boolean":return Ea;case"string":return Ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function lb(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ob(t.type);if(t.times===void 0){const n=[],i=[];ay(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const Wi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(p0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!p0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function p0(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ub{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cb=new ub;class wa{constructor(e){this.manager=e!==void 0?e:cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class fb extends Error{constructor(e,n){super(e),this.response=n}}class ly extends wa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:n,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ki[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(h){g();function g(){f.read().then(({done:v,value:S})=>{if(v)h.close();else{x+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let T=0,A=c.length;T<A;T++){const y=c[T];y.onProgress&&y.onProgress(b)}h.enqueue(S),g()}},v=>{h.error(v)})}}});return new Response(m)}else throw new fb(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Wi.add(`file:${e}`,u);const c=ki[e];delete ki[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ki[e];if(c===void 0)throw this.manager.itemError(e),u;delete ki[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ps=new WeakMap;class db extends wa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let f=Ps.get(a);f===void 0&&(f=[],Ps.set(a,f)),f.push({onLoad:n,onError:r})}return a}const o=Oo("img");function l(){c(),n&&n(this);const f=Ps.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Ps.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),Wi.remove(`image:${e}`);const d=Ps.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(f)}Ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class hb extends wa{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,a=new db(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class fc extends vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Mf=new He,m0=new U,g0=new U;class $p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;m0.setFromMatrixPosition(e.matrixWorld),n.position.copy(m0),g0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(g0),n.updateMatrixWorld(),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Fo||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new U,kl=new rr,di=new U;class uy extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ol,kl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new U,_0=new Je,v0=new Je;class un extends uy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,_0,v0),n.subVectors(v0,_0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class pb extends $p{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=fa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mb extends fc{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new pb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class gb extends $p{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class _b extends fc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class dc extends uy{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vb extends $p{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends fc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new vb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class xb extends fc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ho{static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}const Ef=new WeakMap;class yb extends wa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{Ef.has(a)===!0?(r&&r(Ef.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(n&&n(u),s.manager.itemEnd(e))});return}setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){Wi.add(`image-bitmap:${e}`,u),n&&n(u),s.manager.itemEnd(e)}).catch(function(u){r&&r(u),Ef.set(l,u),Wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=-90,Ns=1;class Sb extends vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Ls,Ns,e,n);r.layers=this.layers,this.add(r);const s=new un(Ls,Ns,e,n);s.layers=this.layers,this.add(s);const a=new un(Ls,Ns,e,n);a.layers=this.layers,this.add(a);const o=new un(Ls,Ns,e,n);o.layers=this.layers,this.add(o);const l=new un(Ls,Ns,e,n);l.layers=this.layers,this.add(l);const u=new un(Ls,Ns,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Mb extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yp="\\[\\]\\.:\\/",Eb=new RegExp("["+Yp+"]","g"),qp="[^"+Yp+"]",Tb="[^"+Yp.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",qp),bb=/(WCOD+)?/.source.replace("WCOD",Tb),Ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qp),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qp),Cb=new RegExp("^"+wb+bb+Ab+Rb+"$"),Pb=["material","materials","bones","map"];class Lb{constructor(e,n,i){const r=i||rt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class rt{constructor(e,n,i){this.path=n,this.parsedPath=i||rt.parseTrackName(n),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,n,i):new rt(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eb,"")}static parseTrackName(e){const n=Cb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Pb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=rt.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=n.nodeName;Pe("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Lb;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const em=class em{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};em.prototype.isMatrix2=!0;let x0=em;function y0(t,e,n,i){const r=Ib(i);switch(n){case Wx:return t*e;case Ip:return t*e/r.components*r.byteLength;case Dp:return t*e/r.components*r.byteLength;case fs:return t*e*2/r.components*r.byteLength;case Up:return t*e*2/r.components*r.byteLength;case jx:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Fp:return t*e*4/r.components*r.byteLength;case iu:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case su:case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Vd:return Math.max(t,8)*Math.max(e,8)/2;case Gd:case Wd:case Xd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jd:case Uu:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uh:case ch:case fh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fu:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ib(t){switch(t){case wn:case zx:return{byteLength:1,components:1};case No:case Vx:case er:return{byteLength:2,components:1};case Lp:case Np:return{byteLength:2,components:4};case Ai:case Pp:case Bn:return{byteLength:4,components:1};case Hx:case Gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cy(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Db(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fA="gl_FragColor = linearToOutputTexel( gl_FragColor );",dA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,AA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_R=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ER=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,HR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Ub,alphahash_pars_fragment:Fb,alphamap_fragment:Ob,alphamap_pars_fragment:kb,alphatest_fragment:Bb,alphatest_pars_fragment:zb,aomap_fragment:Vb,aomap_pars_fragment:Hb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:jb,beginnormal_vertex:Xb,bsdfs:$b,iridescence_fragment:Yb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:Qb,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:aA,displacementmap_pars_vertex:oA,displacementmap_vertex:lA,emissivemap_fragment:uA,emissivemap_pars_fragment:cA,colorspace_fragment:fA,colorspace_pars_fragment:dA,envmap_fragment:hA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:AA,envmap_vertex:_A,fog_vertex:vA,fog_pars_vertex:xA,fog_fragment:yA,fog_pars_fragment:SA,gradientmap_pars_fragment:MA,lightmap_pars_fragment:EA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:wA,lights_pars_begin:bA,lights_toon_fragment:RA,lights_toon_pars_fragment:CA,lights_phong_fragment:PA,lights_phong_pars_fragment:LA,lights_physical_fragment:NA,lights_physical_pars_fragment:IA,lights_fragment_begin:DA,lights_fragment_maps:UA,lights_fragment_end:FA,lightprobes_pars_fragment:OA,logdepthbuf_fragment:kA,logdepthbuf_pars_fragment:BA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:VA,map_fragment:HA,map_pars_fragment:GA,map_particle_fragment:WA,map_particle_pars_fragment:jA,metalnessmap_fragment:XA,metalnessmap_pars_fragment:$A,morphinstance_vertex:YA,morphcolor_vertex:qA,morphnormal_vertex:KA,morphtarget_pars_vertex:ZA,morphtarget_vertex:JA,normal_fragment_begin:QA,normal_fragment_maps:eR,normal_pars_fragment:tR,normal_pars_vertex:nR,normal_vertex:iR,normalmap_pars_fragment:rR,clearcoat_normal_fragment_begin:sR,clearcoat_normal_fragment_maps:aR,clearcoat_pars_fragment:oR,iridescence_pars_fragment:lR,opaque_fragment:uR,packing:cR,premultiplied_alpha_fragment:fR,project_vertex:dR,dithering_fragment:hR,dithering_pars_fragment:pR,roughnessmap_fragment:mR,roughnessmap_pars_fragment:gR,shadowmap_pars_fragment:_R,shadowmap_pars_vertex:vR,shadowmap_vertex:xR,shadowmask_pars_fragment:yR,skinbase_vertex:SR,skinning_pars_vertex:MR,skinning_vertex:ER,skinnormal_vertex:TR,specularmap_fragment:wR,specularmap_pars_fragment:bR,tonemapping_fragment:AR,tonemapping_pars_fragment:RR,transmission_fragment:CR,transmission_pars_fragment:PR,uv_pars_fragment:LR,uv_pars_vertex:NR,uv_vertex:IR,worldpos_vertex:DR,background_vert:UR,background_frag:FR,backgroundCube_vert:OR,backgroundCube_frag:kR,cube_vert:BR,cube_frag:zR,depth_vert:VR,depth_frag:HR,distance_vert:GR,distance_frag:WR,equirect_vert:jR,equirect_frag:XR,linedashed_vert:$R,linedashed_frag:YR,meshbasic_vert:qR,meshbasic_frag:KR,meshlambert_vert:ZR,meshlambert_frag:JR,meshmatcap_vert:QR,meshmatcap_frag:eC,meshnormal_vert:tC,meshnormal_frag:nC,meshphong_vert:iC,meshphong_frag:rC,meshphysical_vert:sC,meshphysical_frag:aC,meshtoon_vert:oC,meshtoon_frag:lC,points_vert:uC,points_frag:cC,shadow_vert:fC,shadow_frag:dC,sprite_vert:hC,sprite_frag:pC},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},gi={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gi.physical={uniforms:on([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Bl={r:0,b:0,g:0},mC=new He,fy=new Ue;fy.set(-1,0,0,0,1,0,0,0,1);function gC(t,e,n,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,u,c=null,f=0,d=null;function p(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const S=g.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(g){let v=!1;const S=p(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(g,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===lc)?(u===void 0&&(u=new Pn(new Xo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ha(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mC.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(fy),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(c!==S||f!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=S,f=S.version,d=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pn(new cc(2,2),new Ri({name:"BackgroundMaterial",uniforms:ha(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,v){g.getRGB(Bl,sy(t)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,v,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:x,dispose:h}}function _C(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,O,X,K,N){let W=!1;const B=f(C,K,X,O);s!==B&&(s=B,u(s.object)),W=p(C,K,X,N),W&&_(C,K,X,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(C,O,X,K),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function u(C){return t.bindVertexArray(C)}function c(C){return t.deleteVertexArray(C)}function f(C,O,X,K){const N=K.wireframe===!0;let W=i[O.id];W===void 0&&(W={},i[O.id]=W);const B=C.isInstancedMesh===!0?C.id:0;let k=W[B];k===void 0&&(k={},W[B]=k);let $=k[X.id];$===void 0&&($={},k[X.id]=$);let ee=$[N];return ee===void 0&&(ee=d(l()),$[N]=ee),ee}function d(C){const O=[],X=[],K=[];for(let N=0;N<n;N++)O[N]=0,X[N]=0,K[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:K,object:C,attributes:{},index:null}}function p(C,O,X,K){const N=s.attributes,W=O.attributes;let B=0;const k=X.getAttributes();for(const $ in k)if(k[$].location>=0){const oe=N[$];let he=W[$];if(he===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==K}function _(C,O,X,K){const N={},W=O.attributes;let B=0;const k=X.getAttributes();for(const $ in k)if(k[$].location>=0){let oe=W[$];oe===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),N[$]=he,B++}s.attributes=N,s.attributesNum=B,s.index=K}function x(){const C=s.newAttributes;for(let O=0,X=C.length;O<X;O++)C[O]=0}function m(C){h(C,0)}function h(C,O){const X=s.newAttributes,K=s.enabledAttributes,N=s.attributeDivisors;X[C]=1,K[C]===0&&(t.enableVertexAttribArray(C),K[C]=1),N[C]!==O&&(t.vertexAttribDivisor(C,O),N[C]=O)}function g(){const C=s.newAttributes,O=s.enabledAttributes;for(let X=0,K=O.length;X<K;X++)O[X]!==C[X]&&(t.disableVertexAttribArray(X),O[X]=0)}function v(C,O,X,K,N,W,B){B===!0?t.vertexAttribIPointer(C,O,X,N,W):t.vertexAttribPointer(C,O,X,K,N,W)}function S(C,O,X,K){x();const N=K.attributes,W=X.getAttributes(),B=O.defaultAttributeValues;for(const k in W){const $=W[k];if($.location>=0){let ee=N[k];if(ee===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const oe=ee.normalized,he=ee.itemSize,Ge=e.get(ee);if(Ge===void 0)continue;const qe=Ge.buffer,Ne=Ge.type,Z=Ge.bytesPerElement,de=Ne===t.INT||Ne===t.UNSIGNED_INT||ee.gpuType===Pp;if(ee.isInterleavedBufferAttribute){const le=ee.data,Ce=le.stride,De=ee.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<$.locationSize;Le++)h($.location+Le,le.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<$.locationSize;Le++)m($.location+Le);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Le=0;Le<$.locationSize;Le++)v($.location+Le,he/$.locationSize,Ne,oe,Ce*Z,(De+he/$.locationSize*Le)*Z,de)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)h($.location+le,ee.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<$.locationSize;le++)m($.location+le);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let le=0;le<$.locationSize;le++)v($.location+le,he/$.locationSize,Ne,oe,he*Z,he/$.locationSize*le*Z,de)}}else if(B!==void 0){const oe=B[k];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv($.location,oe);break;case 3:t.vertexAttrib3fv($.location,oe);break;case 4:t.vertexAttrib4fv($.location,oe);break;default:t.vertexAttrib1fv($.location,oe)}}}}g()}function b(){R();for(const C in i){const O=i[C];for(const X in O){const K=O[X];for(const N in K){const W=K[N];for(const B in W)c(W[B].object),delete W[B];delete K[N]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const O=i[C.id];for(const X in O){const K=O[X];for(const N in K){const W=K[N];for(const B in W)c(W[B].object),delete W[B];delete K[N]}}delete i[C.id]}function A(C){for(const O in i){const X=i[O];for(const K in X){const N=X[K];if(N[C.id]===void 0)continue;const W=N[C.id];for(const B in W)c(W[B].object),delete W[B];delete N[C.id]}}}function y(C){for(const O in i){const X=i[O],K=C.isInstancedMesh===!0?C.id:0,N=X[K];if(N!==void 0){for(const W in N){const B=N[W];for(const k in B)c(B[k].object),delete B[k];delete N[W]}delete X[K],Object.keys(X).length===0&&delete i[O]}}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function vC(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let d=0;for(let p=0;p<c;p++)d+=u[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(we("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:T}}function yC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new $r,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let S=h.clippingState||null;l.value=S,S=c(_,d,v,p);for(let b=0;b!==v;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Tr=4,S0=[.125,.215,.35,.446,.526,.582],qr=20,SC=256,Wa=new dc,M0=new Fe;let Tf=null,wf=0,bf=0,Af=!1;const MC=new U;class E0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=MC}=s;Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,wf,bf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:er,format:zn,colorSpace:Cn,depthBuffer:!1},r=T0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=EC(s)),this._blurMaterial=wC(s,e,n),this._ggxMaterial=TC(s,e,n)}return r}_compileMaterial(e){const n=new Pn(new Xn,e);this._renderer.compile(n,Wa)}_sceneToCubeUV(e,n,i,r,s){const l=new un(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(M0),f.toneMapping=Ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Xo,new ts({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(M0),h=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[v],s.y,s.z)):S===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[v]));const b=this._cubeSize;Is(r,S*b,v>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===cs||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Wa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,p=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Tr?i-_+Tr:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Is(s,m,h,3*x,2*x),r.setRenderTarget(s),r.render(o,Wa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Is(e,m,h,3*x,2*x),r.setRenderTarget(e),r.render(o,Wa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qr-1),x=s/_,m=isFinite(s)?1+Math.floor(c*x):qr;m>qr&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const h=[];let g=0;for(let A=0;A<qr;++A){const y=A/x,R=Math.exp(-y*y/2);h.push(R),A===0?g+=R:A<m&&(g+=2*R)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Tr?r-v+Tr:0),T=4*(this._cubeSize-S);Is(n,b,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Wa)}}function EC(t){const e=[],n=[],i=[];let r=t;const s=t-Tr+1+S0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Tr?l=S0[a-t+Tr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,x=3,m=2,h=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,y=T>2?0:-1,R=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];g.set(R,x*_*T),v.set(d,m*_*T);const P=[T,T,T,T,T,T];S.set(P,h*_*T)}const b=new Xn;b.setAttribute("position",new fn(g,x)),b.setAttribute("uv",new fn(v,m)),b.setAttribute("faceIndex",new fn(S,h)),i.push(new Pn(b,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function T0(t,e,n){const i=new Ti(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TC(t,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function wC(t,e,n){const i=new Float32Array(qr),r=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function w0(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function b0(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dy extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xo(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Xi});s.uniforms.tEquirect.value=n;const a=new Pn(r,s),o=n.minFilter;return n.minFilter===Gi&&(n.minFilter=Vt),new Sb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function bC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===$c||p===Yc)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new dy(_.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",u),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===$c||p===Yc,x=p===cs||p===ua;if(_||x){let m=n.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new E0(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return _&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new E0(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function o(d,p){return p===$c?d.mapping=cs:p===Yc&&(d.mapping=ua),d}function l(d){let p=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&p++;return p===_}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function AC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&vh("WebGLRenderer: "+i+" extension not supported."),r}}}function RC(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const g=p.array;x=p.version;for(let v=0,S=g.length;v<S;v+=3){const b=g[v+0],T=g[v+1],A=g[v+2];d.push(b,T,T,A,A,b)}}else{const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const b=v+0,T=v+1,A=v+2;d.push(b,T,T,A,A,b)}}const m=new(_.count>=65535?Jx:Zx)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function CC(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function u(f,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,f*a,p),n.update(d,i,p))}function c(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function PC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LC(t,e,n){const i=new WeakMap,r=new ft;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*f),y=new Yx(A,b,T,f);y.type=Bn,y.needsUpdate=!0;const R=S*4;for(let C=0;C<f;C++){const O=h[C],X=g[C],K=v[C],N=b*T*4*C;for(let W=0;W<O.count;W++){const B=W*R;_===!0&&(r.fromBufferAttribute(O,W),A[N+B+0]=r.x,A[N+B+1]=r.y,A[N+B+2]=r.z,A[N+B+3]=0),x===!0&&(r.fromBufferAttribute(X,W),A[N+B+4]=r.x,A[N+B+5]=r.y,A[N+B+6]=r.z,A[N+B+7]=0),m===!0&&(r.fromBufferAttribute(K,W),A[N+B+8]=r.x,A[N+B+9]=r.y,A[N+B+10]=r.z,A[N+B+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new Je(b,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function NC(t,e,n,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const IC={[Nx]:"LINEAR_TONE_MAPPING",[Ix]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[Cp]:"ACES_FILMIC_TONE_MAPPING",[Fx]:"AGX_TONE_MAPPING",[Ox]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function DC(t,e,n,i,r){const s=new Ti(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new da(e,n):void 0}),a=new Ti(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),o=new Xn;o.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ai([0,2,0,0,2,0],2));const l=new Zw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pn(o,l),c=new dc(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(g,v){s.setSize(g,v),a.setSize(g,v);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(g,v)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const v=s.width,S=s.height;for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(v,S)}},this.begin=function(g,v){if(p||g.toneMapping===Ei&&m.length===0)return!1;if(x=v,v!==null){const S=v.width,b=v.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return h===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=Ei,!0},this.hasRenderPass=function(){return h},this.end=function(g,v){g.toneMapping=_,p=!0;let S=s,b=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(g,b,S,v),A.needsSwap!==!1)){const y=S;S=b,b=y}}if(f!==g.outputColorSpace||d!==g.toneMapping){f=g.outputColorSpace,d=g.toneMapping,l.defines={},Xe.getTransfer(f)===nt&&(l.defines.SRGB_TRANSFER="");const T=IC[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(x),g.render(u,c),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const hy=new Yt,Mh=new da(1,1),py=new Yx,my=new Sw,gy=new iy,A0=[],R0=[],C0=new Float32Array(16),P0=new Float32Array(9),L0=new Float32Array(4);function ba(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=A0[r];if(s===void 0&&(s=new Float32Array(r),A0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=R0[e];n===void 0&&(n=new Int32Array(e),R0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function kC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function BC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;L0.set(i),t.uniformMatrix2fv(this.addr,!1,L0),Gt(n,i)}}function zC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;P0.set(i),t.uniformMatrix3fv(this.addr,!1,P0),Gt(n,i)}}function VC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;C0.set(i),t.uniformMatrix4fv(this.addr,!1,C0),Gt(n,i)}}function HC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function WC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function XC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function KC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mh.compareFunction=n.isReversedDepthBuffer()?kp:Op,s=Mh):s=hy,n.setTexture2D(e||s,r)}function ZC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||my,r)}function JC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gy,r)}function QC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||py,r)}function e2(t){switch(t){case 5126:return UC;case 35664:return FC;case 35665:return OC;case 35666:return kC;case 35674:return BC;case 35675:return zC;case 35676:return VC;case 5124:case 35670:return HC;case 35667:case 35671:return GC;case 35668:case 35672:return WC;case 35669:case 35673:return jC;case 5125:return XC;case 36294:return $C;case 36295:return YC;case 36296:return qC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return ZC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return QC}}function t2(t,e){t.uniform1fv(this.addr,e)}function n2(t,e){const n=ba(e,this.size,2);t.uniform2fv(this.addr,n)}function i2(t,e){const n=ba(e,this.size,3);t.uniform3fv(this.addr,n)}function r2(t,e){const n=ba(e,this.size,4);t.uniform4fv(this.addr,n)}function s2(t,e){const n=ba(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function a2(t,e){const n=ba(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o2(t,e){const n=ba(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l2(t,e){t.uniform1iv(this.addr,e)}function u2(t,e){t.uniform2iv(this.addr,e)}function c2(t,e){t.uniform3iv(this.addr,e)}function f2(t,e){t.uniform4iv(this.addr,e)}function d2(t,e){t.uniform1uiv(this.addr,e)}function h2(t,e){t.uniform2uiv(this.addr,e)}function p2(t,e){t.uniform3uiv(this.addr,e)}function m2(t,e){t.uniform4uiv(this.addr,e)}function g2(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Mh:a=hy;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function _2(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||my,s[a])}function v2(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||gy,s[a])}function x2(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||py,s[a])}function y2(t){switch(t){case 5126:return t2;case 35664:return n2;case 35665:return i2;case 35666:return r2;case 35674:return s2;case 35675:return a2;case 35676:return o2;case 5124:case 35670:return l2;case 35667:case 35671:return u2;case 35668:case 35672:return c2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return h2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return _2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return x2}}class S2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e2(n.type)}}class M2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y2(n.type)}}class E2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function N0(t,e){t.seq.push(e),t.map[e.id]=e}function T2(t,e,n){const i=t.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),a=Rf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){N0(n,u===void 0?new S2(o,t,e):new M2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new E2(o),N0(n,f)),n=f}}}class ou{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);T2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function I0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const w2=37297;let b2=0;function A2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const D0=new Ue;function R2(t){Xe._getMatrix(D0,Xe.workingColorSpace,t);const e=`mat3( ${D0.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Ou:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function U0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+A2(t.getShaderSource(e),o)}else return s}function C2(t,e){const n=R2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const P2={[Nx]:"Linear",[Ix]:"Reinhard",[Dx]:"Cineon",[Cp]:"ACESFilmic",[Fx]:"AgX",[Ox]:"Neutral",[Ux]:"Custom"};function L2(t,e){const n=P2[e];return n===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zl=new U;function N2(){Xe.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),n=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function D2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function U2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function eo(t){return t!==""}function F0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace(F2,k2)}const O2=new Map;function k2(t,e){let n=ze[e];if(n===void 0){const i=O2.get(e);if(i!==void 0)n=ze[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(n)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(t){return t.replace(B2,z2)}function z2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function B0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const V2={[tu]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function H2(t){return V2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const G2={[cs]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function W2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":G2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const j2={[ua]:"ENVMAP_MODE_REFRACTION"};function X2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":j2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $2={[Lx]:"ENVMAP_BLENDING_MULTIPLY",[U1]:"ENVMAP_BLENDING_MIX",[F1]:"ENVMAP_BLENDING_ADD"};function Y2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":$2[t.combine]||"ENVMAP_BLENDING_NONE"}function q2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=H2(n),u=W2(n),c=X2(n),f=Y2(n),d=q2(n),p=I2(n),_=D2(s),x=r.createProgram();let m,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(eo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(eo).join(`
`),h.length>0&&(h+=`
`)):(m=[B0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),h=[B0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ei?L2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,C2("linearToOutputTexel",n.outputColorSpace),N2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),a=Eh(a),a=F0(a,n),a=O0(a,n),o=Eh(o),o=F0(o,n),o=O0(o,n),a=k0(a),o=k0(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+a,S=g+h+o,b=I0(r,r.VERTEX_SHADER,v),T=I0(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(C){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(b)||"",K=r.getShaderInfoLog(T)||"",N=O.trim(),W=X.trim(),B=K.trim();let k=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,T);else{const ee=U0(r,b,"vertex"),oe=U0(r,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+ee+`
`+oe)}else N!==""?we("WebGLProgram: Program Info Log:",N):(W===""||B==="")&&($=!1);$&&(C.diagnostics={runnable:k,programLog:N,vertexShader:{log:W,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(b),r.deleteShader(T),y=new ou(r,x),R=U2(r,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,w2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let Z2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Q2(e),n.set(e,i)),i}}class Q2{constructor(e){this.id=Z2++,this.code=e,this.usedTimes=0}}function eP(t){return t===fs||t===Uu||t===Fu}function tP(t,e,n,i,r,s){const a=new qx,o=new J2,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,R,P,C,O,X){const K=C.fog,N=O.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||W,B),$=k&&k.mapping===lc?k.image.height:null,ee=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&we("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=oe!==void 0?oe.length:0;let Ge=0;N.morphAttributes.position!==void 0&&(Ge=1),N.morphAttributes.normal!==void 0&&(Ge=2),N.morphAttributes.color!==void 0&&(Ge=3);let qe,Ne,Z,de;if(ee){const Oe=gi[ee];qe=Oe.vertexShader,Ne=Oe.fragmentShader}else qe=y.vertexShader,Ne=y.fragmentShader,o.update(y),Z=o.getVertexShaderID(y),de=o.getFragmentShaderID(y);const le=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,yt=!!y.map,Ke=!!y.matcap,at=!!k,mt=!!y.aoMap,je=!!y.lightMap,Ft=!!y.bumpMap,St=!!y.normalMap,yn=!!y.displacementMap,I=!!y.emissiveMap,Ot=!!y.metalnessMap,Ze=!!y.roughnessMap,dt=y.anisotropy>0,pe=y.clearcoat>0,bt=y.dispersion>0,w=y.iridescence>0,M=y.sheen>0,F=y.transmission>0,J=dt&&!!y.anisotropyMap,ne=pe&&!!y.clearcoatMap,re=pe&&!!y.clearcoatNormalMap,fe=pe&&!!y.clearcoatRoughnessMap,Y=w&&!!y.iridescenceMap,Q=w&&!!y.iridescenceThicknessMap,ve=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,ue=!!y.specularMap,se=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Be=F&&!!y.transmissionMap,tt=F&&!!y.thicknessMap,L=!!y.gradientMap,ae=!!y.alphaMap,q=y.alphaTest>0,xe=!!y.alphaHash,ce=!!y.extensions;let te=Ei;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=t.toneMapping);const be={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:Ne,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:Ke,envMap:at,envMapMode:at&&k.mapping,envMapCubeUVHeight:$,aoMap:mt,lightMap:je,bumpMap:Ft,normalMap:St,displacementMap:yn,emissiveMap:I,normalMapObjectSpace:St&&y.normalMapType===V1,normalMapTangentSpace:St&&y.normalMapType===gh,packedNormalMap:St&&y.normalMapType===gh&&eP(y.normalMap.format),metalnessMap:Ot,roughnessMap:Ze,anisotropy:dt,anisotropyMap:J,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:bt,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:ve,sheenRoughnessMap:Se,specularMap:ue,specularColorMap:se,specularIntensityMap:Ie,transmission:F,transmissionMap:Be,thicknessMap:tt,gradientMap:L,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:q,alphaHash:xe,combine:y.combine,mapUv:yt&&_(y.map.channel),aoMapUv:mt&&_(y.aoMap.channel),lightMapUv:je&&_(y.lightMap.channel),bumpMapUv:Ft&&_(y.bumpMap.channel),normalMapUv:St&&_(y.normalMap.channel),displacementMapUv:yn&&_(y.displacementMap.channel),emissiveMapUv:I&&_(y.emissiveMap.channel),metalnessMapUv:Ot&&_(y.metalnessMap.channel),roughnessMapUv:Ze&&_(y.roughnessMap.channel),anisotropyMapUv:J&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:ue&&_(y.specularMap.channel),specularColorMapUv:se&&_(y.specularColorMap.channel),specularIntensityMapUv:Ie&&_(y.specularIntensityMap.channel),transmissionMapUv:Be&&_(y.transmissionMap.channel),thicknessMapUv:tt&&_(y.thicknessMap.channel),alphaMapUv:ae&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(St||dt),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(yt||ae),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&St===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ge,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:I&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)R.push(P),R.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(h(R,y),g(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function h(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function g(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function v(y){const R=p[y.type];let P;if(R){const C=gi[R];P=Yw.clone(C.uniforms)}else P=y.uniforms;return P}function S(y,R){let P=c.get(R);return P!==void 0?++P.usedTimes:(P=new K2(t,R,y,r),u.push(P),c.set(R,P)),P}function b(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:A}}function nP(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function iP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function z0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function V0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,x,m,h){let g=t[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},t[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=_,g.materialVariant=a(d),g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=m,g.group=h),e++,g}function l(d,p,_,x,m,h){const g=o(d,p,_,x,m,h);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):n.push(g)}function u(d,p,_,x,m,h){const g=o(d,p,_,x,m,h);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):n.unshift(g)}function c(d,p){n.length>1&&n.sort(d||iP),i.length>1&&i.sort(p||z0),r.length>1&&r.sort(p||z0)}function f(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:f,sort:c}}function rP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new V0,t.set(i,[a])):r>=s.length?(a=new V0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function sP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Fe};break;case"SpotLight":n={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":n={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function aP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oP=0;function lP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uP(t){const e=new sP,n=aP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new He,a=new He;function o(u){let c=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,g=0,v=0,S=0,b=0,T=0,A=0;u.sort(lP);for(let R=0,P=u.length;R<P;R++){const C=u[R],O=C.color,X=C.intensity,K=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===fs?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=O.r*X,f+=O.g*X,d+=O.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],X);A++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,k=n.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=W,p++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(X),W.distance=K,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[x]=W;const B=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,B.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=B.matrix,C.castShadow){const k=n.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=N,S++}x++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(O).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const B=C.shadow,k=n.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=C.shadow.matrix,v++}i.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[h]=W,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==g||y.numPointShadows!==v||y.numSpotShadows!==S||y.numSpotMaps!==b||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,y.directionalLength=p,y.pointLength=_,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=g,y.numPointShadows=v,y.numSpotShadows=S,y.numSpotMaps=b,y.numLightProbes=A,i.version=oP++)}function l(u,c){let f=0,d=0,p=0,_=0,x=0;const m=c.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function H0(t){const e=new uP(t),n=[],i=[],r=[];function s(d){f.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function c(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cP(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new H0(t),e.set(r,[o])):s>=a.length?(o=new H0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const fP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hP=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],pP=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],G0=new He,ja=new U,Cf=new U;function mP(t,e,n){let i=new Wp;const r=new Je,s=new Je,a=new ft,o=new Jw,l=new Qw,u={},c=n.maxTextureSize,f={[Qi]:xn,[xn]:Qi,[vi]:vi},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:fP,fragmentShader:dP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let h=this.type;this.render=function(T,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===g1&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const R=t.getRenderTarget(),P=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Xi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=h!==this.type;X&&A.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(N=>N.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,N=T.length;K<N;K++){const W=T[K],B=W.shadow;if(B===void 0){we("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const k=B.getFrameExtents();r.multiply(k),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,B.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ja){if(W.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ti(r.x,r.y,{format:fs,type:er,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new da(r.x,r.y,Bn),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=tr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt}else W.isPointLight?(B.map=new dy(r.x),B.map.depthTexture=new Xw(r.x,Ai)):(B.map=new Ti(r.x,r.y),B.map.depthTexture=new da(r.x,r.y,Ai)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=tr,this.type===tu?(B.map.depthTexture.compareFunction=$?kp:Op,B.map.depthTexture.minFilter=Vt,B.map.depthTexture.magFilter=Vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt);B.camera.updateProjectionMatrix()}const ee=B.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ee;oe++){if(B.map.isWebGLCubeRenderTarget)t.setRenderTarget(B.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(B.map),t.clear());const he=B.getViewport(oe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}if(W.isPointLight){const he=B.camera,Ge=B.matrix,qe=W.distance||he.far;qe!==he.far&&(he.far=qe,he.updateProjectionMatrix()),ja.setFromMatrixPosition(W.matrixWorld),he.position.copy(ja),Cf.copy(he.position),Cf.add(hP[oe]),he.up.copy(pP[oe]),he.lookAt(Cf),he.updateMatrixWorld(),Ge.makeTranslation(-ja.x,-ja.y,-ja.z),G0.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),B._frustum.setFromProjectionMatrix(G0,he.coordinateSystem,he.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),S(A,y,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Ja&&g(B,y),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(R,P,C)};function g(T,A){const y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(r.x,r.y,{format:fs,type:er})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,y,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,y,p,x,null)}function v(T,A,y,R){let P=null;const C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)P=C;else if(P=y.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=P.uuid,X=A.uuid;let K=u[O];K===void 0&&(K={},u[O]=K);let N=K[X];N===void 0&&(N=P.clone(),K[X]=N,A.addEventListener("dispose",b)),P=N}if(P.visible=A.visible,P.wireframe=A.wireframe,R===Ja?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=y}return P}function S(T,A,y,R,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ja)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const X=e.update(T),K=T.material;if(Array.isArray(K)){const N=X.groups;for(let W=0,B=N.length;W<B;W++){const k=N[W],$=K[k.materialIndex];if($&&$.visible){const ee=v(T,$,R,P);T.onBeforeShadow(t,T,A,y,X,ee,k),t.renderBufferDirect(y,null,X,ee,T,k),T.onAfterShadow(t,T,A,y,X,ee,k)}}}else if(K.visible){const N=v(T,K,R,P);T.onBeforeShadow(t,T,A,y,X,N,null),t.renderBufferDirect(y,null,X,N,T,null),T.onAfterShadow(t,T,A,y,X,N,null)}}const O=T.children;for(let X=0,K=O.length;X<K;X++)S(O[X],A,y,R,P)}function b(T){T.target.removeEventListener("dispose",b);for(const y in u){const R=u[y],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function gP(t,e){function n(){let L=!1;const ae=new ft;let q=null;const xe=new ft(0,0,0,0);return{setMask:function(ce){q!==ce&&!L&&(t.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,be,Oe,Ct){Ct===!0&&(ce*=Oe,te*=Oe,be*=Oe),ae.set(ce,te,be,Oe),xe.equals(ae)===!1&&(t.clearColor(ce,te,be,Oe),xe.copy(ae))},reset:function(){L=!1,q=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,q=null,xe=null,ce=null;return{setReversed:function(te){if(ae!==te){const be=e.get("EXT_clip_control");te?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const Oe=ce;ce=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(te){te?le(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(te){q!==te&&!L&&(t.depthMask(te),q=te)},setFunc:function(te){if(ae&&(te=J1[te]),xe!==te){switch(te){case Nd:t.depthFunc(t.NEVER);break;case Id:t.depthFunc(t.ALWAYS);break;case Dd:t.depthFunc(t.LESS);break;case la:t.depthFunc(t.LEQUAL);break;case Ud:t.depthFunc(t.EQUAL);break;case Fd:t.depthFunc(t.GEQUAL);break;case Od:t.depthFunc(t.GREATER);break;case kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(ce=te,ae&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,q=null,xe=null,ce=null,ae=!1}}}function r(){let L=!1,ae=null,q=null,xe=null,ce=null,te=null,be=null,Oe=null,Ct=null;return{setTest:function(ot){L||(ot?le(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!L&&(t.stencilMask(ot),ae=ot)},setFunc:function(ot,Ni,ui){(q!==ot||xe!==Ni||ce!==ui)&&(t.stencilFunc(ot,Ni,ui),q=ot,xe=Ni,ce=ui)},setOp:function(ot,Ni,ui){(te!==ot||be!==Ni||Oe!==ui)&&(t.stencilOp(ot,Ni,ui),te=ot,be=Ni,Oe=ui)},setLocked:function(ot){L=ot},setClear:function(ot){Ct!==ot&&(t.clearStencil(ot),Ct=ot)},reset:function(){L=!1,ae=null,q=null,xe=null,ce=null,te=null,be=null,Oe=null,Ct=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d={},p=new WeakMap,_=[],x=null,m=!1,h=null,g=null,v=null,S=null,b=null,T=null,A=null,y=new Fe(0,0,0),R=0,P=!1,C=null,O=null,X=null,K=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),B=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=k>=2);let ee=null,oe={};const he=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),qe=new ft().fromArray(he),Ne=new ft().fromArray(Ge);function Z(L,ae,q,xe){const ce=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<q;be++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(ae+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return te}const de={};de[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(la),Ft(!1),St(bg),le(t.CULL_FACE),mt(Xi);function le(L){c[L]!==!0&&(t.enable(L),c[L]=!0)}function Ce(L){c[L]!==!1&&(t.disable(L),c[L]=!1)}function De(L,ae){return d[L]!==ae?(t.bindFramebuffer(L,ae),d[L]=ae,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(L,ae){let q=_,xe=!1;if(L){q=p.get(ae),q===void 0&&(q=[],p.set(ae,q));const ce=L.textures;if(q.length!==ce.length||q[0]!==t.COLOR_ATTACHMENT0){for(let te=0,be=ce.length;te<be;te++)q[te]=t.COLOR_ATTACHMENT0+te;q.length=ce.length,xe=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,xe=!0);xe&&t.drawBuffers(q)}function yt(L){return x!==L?(t.useProgram(L),x=L,!0):!1}const Ke={[Yr]:t.FUNC_ADD,[v1]:t.FUNC_SUBTRACT,[x1]:t.FUNC_REVERSE_SUBTRACT};Ke[y1]=t.MIN,Ke[S1]=t.MAX;const at={[M1]:t.ZERO,[E1]:t.ONE,[T1]:t.SRC_COLOR,[Pd]:t.SRC_ALPHA,[P1]:t.SRC_ALPHA_SATURATE,[R1]:t.DST_COLOR,[b1]:t.DST_ALPHA,[w1]:t.ONE_MINUS_SRC_COLOR,[Ld]:t.ONE_MINUS_SRC_ALPHA,[C1]:t.ONE_MINUS_DST_COLOR,[A1]:t.ONE_MINUS_DST_ALPHA,[L1]:t.CONSTANT_COLOR,[N1]:t.ONE_MINUS_CONSTANT_COLOR,[I1]:t.CONSTANT_ALPHA,[D1]:t.ONE_MINUS_CONSTANT_ALPHA};function mt(L,ae,q,xe,ce,te,be,Oe,Ct,ot){if(L===Xi){m===!0&&(Ce(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),L!==_1){if(L!==h||ot!==P){if((g!==Yr||b!==Yr)&&(t.blendEquation(t.FUNC_ADD),g=Yr,b=Yr),ot)switch(L){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ag:t.blendFunc(t.ONE,t.ONE);break;case Rg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ag:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rg:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}v=null,S=null,T=null,A=null,y.set(0,0,0),R=0,h=L,P=ot}return}ce=ce||ae,te=te||q,be=be||xe,(ae!==g||ce!==b)&&(t.blendEquationSeparate(Ke[ae],Ke[ce]),g=ae,b=ce),(q!==v||xe!==S||te!==T||be!==A)&&(t.blendFuncSeparate(at[q],at[xe],at[te],at[be]),v=q,S=xe,T=te,A=be),(Oe.equals(y)===!1||Ct!==R)&&(t.blendColor(Oe.r,Oe.g,Oe.b,Ct),y.copy(Oe),R=Ct),h=L,P=!1}function je(L,ae){L.side===vi?Ce(t.CULL_FACE):le(t.CULL_FACE);let q=L.side===xn;ae&&(q=!q),Ft(q),L.blending===Js&&L.transparent===!1?mt(Xi):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){C!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),C=L)}function St(L){L!==p1?(le(t.CULL_FACE),L!==O&&(L===bg?t.cullFace(t.BACK):L===m1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),O=L}function yn(L){L!==X&&(B&&t.lineWidth(L),X=L)}function I(L,ae,q){L?(le(t.POLYGON_OFFSET_FILL),(K!==ae||N!==q)&&(K=ae,N=q,a.getReversed()&&(ae=-ae),t.polygonOffset(ae,q))):Ce(t.POLYGON_OFFSET_FILL)}function Ot(L){L?le(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=t.TEXTURE0+W-1),ee!==L&&(t.activeTexture(L),ee=L)}function dt(L,ae,q){q===void 0&&(ee===null?q=t.TEXTURE0+W-1:q=ee);let xe=oe[q];xe===void 0&&(xe={type:void 0,texture:void 0},oe[q]=xe),(xe.type!==L||xe.texture!==ae)&&(ee!==q&&(t.activeTexture(q),ee=q),t.bindTexture(L,ae||de[L]),xe.type=L,xe.texture=ae)}function pe(){const L=oe[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bt(){try{t.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function M(){try{t.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Y(){try{t.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Q(){try{t.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ve(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function Se(L,ae){f[L]!==ae&&(t.pixelStorei(L,ae),f[L]=ae)}function ue(L){qe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function se(L){Ne.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Ie(L,ae){let q=u.get(ae);q===void 0&&(q=new WeakMap,u.set(ae,q));let xe=q.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(ae,L.name),q.set(L,xe))}function Be(L,ae){const xe=u.get(ae).get(L);l.get(ae)!==xe&&(t.uniformBlockBinding(ae,xe,L.__bindingPointIndex),l.set(ae,xe))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},f={},ee=null,oe={},d={},p=new WeakMap,_=[],x=null,m=!1,h=null,g=null,v=null,S=null,b=null,T=null,A=null,y=new Fe(0,0,0),R=0,P=!1,C=null,O=null,X=null,K=null,N=null,qe.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:De,drawBuffers:Le,useProgram:yt,setBlending:mt,setMaterial:je,setFlipSided:Ft,setCullFace:St,setLineWidth:yn,setPolygonOffset:I,setScissorTest:Ot,activeTexture:Ze,bindTexture:dt,unbindTexture:pe,compressedTexImage2D:bt,compressedTexImage3D:w,texImage2D:Y,texImage3D:Q,pixelStorei:Se,getParameter:ve,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:fe,texSubImage2D:M,texSubImage3D:F,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:ue,viewport:se,reset:tt}}function _P(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap,f=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return _?new OffscreenCanvas(w,M):Oo("canvas")}function m(w,M,F){let J=1;const ne=bt(w);if((ne.width>F||ne.height>F)&&(J=F/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(J*ne.width),fe=Math.floor(J*ne.height);d===void 0&&(d=x(re,fe));const Y=M?x(re,fe):d;return Y.width=re,Y.height=fe,Y.getContext("2d").drawImage(w,0,0,re,fe),we("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+fe+")."),Y}else return"data"in w&&we("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function h(w){return w.generateMipmaps}function g(w){t.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(w,M,F,J,ne,re=!1){if(w!==null){if(t[w]!==void 0)return t[w];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;J&&(fe=e.get("EXT_texture_norm16"),fe||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8),F===t.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),F===t.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),M===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8),F===t.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),F===t.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&(F===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),F===t.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),M===t.RGBA){const Q=re?Ou:Xe.getTransfer(ne);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=Q===nt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),F===t.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(w,M){let F;return w?M===null||M===Ai||M===Io?F=t.DEPTH24_STENCIL8:M===Bn?F=t.DEPTH32F_STENCIL8:M===No&&(F=t.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===Io?F=t.DEPTH_COMPONENT24:M===Bn?F=t.DEPTH_COMPONENT32F:M===No&&(F=t.DEPTH_COMPONENT16),F}function T(w,M){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Vt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&f.delete(M)}function y(w){const M=w.target;M.removeEventListener("dispose",y),C(M)}function R(w){const M=i.get(w);if(M.__webglInit===void 0)return;const F=w.source,J=p.get(F);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(w),Object.keys(J).length===0&&p.delete(F)}i.remove(w)}function P(w){const M=i.get(w);t.deleteTexture(M.__webglTexture);const F=w.source,J=p.get(F);delete J[M.__cacheKey],a.memory.textures--}function C(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=w.textures;for(let J=0,ne=F.length;J<ne;J++){const re=i.get(F[J]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(w)}let O=0;function X(){O=0}function K(){return O}function N(w){O=w}function W(){const w=O;return w>=r.maxTextures&&we("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function k(w,M){const F=i.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const J=w.image;if(J===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(F,w,M);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function $(w,M){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ce(F,w,M);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function ee(w,M){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ce(F,w,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function oe(w,M){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){De(F,w,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const he={[ca]:t.REPEAT,[xi]:t.CLAMP_TO_EDGE,[Du]:t.MIRRORED_REPEAT},Ge={[zt]:t.NEAREST,[Bx]:t.NEAREST_MIPMAP_NEAREST,[Qa]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Gi]:t.LINEAR_MIPMAP_LINEAR},qe={[H1]:t.NEVER,[$1]:t.ALWAYS,[G1]:t.LESS,[Op]:t.LEQUAL,[W1]:t.EQUAL,[kp]:t.GEQUAL,[j1]:t.GREATER,[X1]:t.NOTEQUAL};function Ne(w,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vt||M.magFilter===nu||M.magFilter===Qa||M.magFilter===Gi||M.minFilter===Vt||M.minFilter===nu||M.minFilter===Qa||M.minFilter===Gi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,he[M.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,he[M.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,he[M.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Ge[M.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Ge[M.minFilter]),M.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==Qa&&M.minFilter!==Gi||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const J=M.source;let ne=p.get(J);ne===void 0&&(ne={},p.set(J,ne));const re=B(M);if(re!==w.__cacheKey){ne[re]===void 0&&(ne[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[re].usedTimes++;const fe=ne[w.__cacheKey];fe!==void 0&&(ne[w.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),w.__cacheKey=re,w.__webglTexture=ne[re].texture}return F}function de(w,M,F){return Math.floor(Math.floor(w/F)/M)}function le(w,M,F,J){const re=w.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,F,J,M.data);else{re.sort((Se,ue)=>Se.start-ue.start);let fe=0;for(let Se=1;Se<re.length;Se++){const ue=re[fe],se=re[Se],Ie=ue.start+ue.count,Be=de(se.start,M.width,4),tt=de(ue.start,M.width,4);se.start<=Ie+1&&Be===tt&&de(se.start+se.count-1,M.width,4)===Be?ue.count=Math.max(ue.count,se.start+se.count-ue.start):(++fe,re[fe]=se)}re.length=fe+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Se=0,ue=re.length;Se<ue;Se++){const se=re[Se],Ie=Math.floor(se.start/4),Be=Math.ceil(se.count/4),tt=Ie%M.width,L=Math.floor(Ie/M.width),ae=Be,q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,tt,L,ae,q,F,J,M.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Ce(w,M,F){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Z(w,M),re=M.source;n.bindTexture(J,w.__webglTexture,t.TEXTURE0+F);const fe=i.get(re);if(re.version!==fe.__version||ne===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const q=Xe.getPrimaries(Xe.workingColorSpace),xe=M.colorSpace===Sr?null:Xe.getPrimaries(M.colorSpace),ce=M.colorSpace===Sr||q===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,r.maxTextureSize);Q=pe(M,Q);const ve=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let ue=S(M.internalFormat,ve,Se,M.normalized,M.colorSpace,M.isVideoTexture);Ne(J,M);let se;const Ie=M.mipmaps,Be=M.isVideoTexture!==!0,tt=fe.__version===void 0||ne===!0,L=re.dataReady,ae=T(M,Q);if(M.isDepthTexture)ue=b(M.format===Qr,M.type),tt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ue,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ue,Q.width,Q.height,0,ve,Se,null));else if(M.isDataTexture)if(Ie.length>0){Be&&tt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let q=0,xe=Ie.length;q<xe;q++)se=Ie[q],Be?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,se.width,se.height,ve,Se,se.data):n.texImage2D(t.TEXTURE_2D,q,ue,se.width,se.height,0,ve,Se,se.data);M.generateMipmaps=!1}else Be?(tt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Q.width,Q.height),L&&le(M,Q,ve,Se)):n.texImage2D(t.TEXTURE_2D,0,ue,Q.width,Q.height,0,ve,Se,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,Ie[0].width,Ie[0].height,Q.depth);for(let q=0,xe=Ie.length;q<xe;q++)if(se=Ie[q],M.format!==zn)if(ve!==null)if(Be){if(L)if(M.layerUpdates.size>0){const ce=y0(se.width,se.height,M.format,M.type);for(const te of M.layerUpdates){const be=se.data.subarray(te*ce/se.data.BYTES_PER_ELEMENT,(te+1)*ce/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,te,se.width,se.height,1,ve,be)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,Q.depth,ve,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,ue,se.width,se.height,Q.depth,0,se.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,Q.depth,ve,Se,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,ue,se.width,se.height,Q.depth,0,ve,Se,se.data)}else{Be&&tt&&n.texStorage2D(t.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let q=0,xe=Ie.length;q<xe;q++)se=Ie[q],M.format!==zn?ve!==null?Be?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,se.width,se.height,ve,se.data):n.compressedTexImage2D(t.TEXTURE_2D,q,ue,se.width,se.height,0,se.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,se.width,se.height,ve,Se,se.data):n.texImage2D(t.TEXTURE_2D,q,ue,se.width,se.height,0,ve,Se,se.data)}else if(M.isDataArrayTexture)if(Be){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,ue,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){const q=y0(Q.width,Q.height,M.format,M.type);for(const xe of M.layerUpdates){const ce=Q.data.subarray(xe*q/Q.data.BYTES_PER_ELEMENT,(xe+1)*q/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,ve,Se,ce)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,Se,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ve,Se,Q.data);else if(M.isData3DTexture)Be?(tt&&n.texStorage3D(t.TEXTURE_3D,ae,ue,Q.width,Q.height,Q.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,Se,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ve,Se,Q.data);else if(M.isFramebufferTexture){if(tt)if(Be)n.texStorage2D(t.TEXTURE_2D,ae,ue,Q.width,Q.height);else{let q=Q.width,xe=Q.height;for(let ce=0;ce<ae;ce++)n.texImage2D(t.TEXTURE_2D,ce,ue,q,xe,0,ve,Se,null),q>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Q.parentNode!==q){q.appendChild(Q),f.add(M),q.onpaint=Oe=>{const Ct=Oe.changedElements;for(const ot of f)Ct.includes(ot.image)&&(ot.needsUpdate=!0)},q.requestPaint();return}const xe=0,ce=t.RGBA,te=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,ce,te,be,Q),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&tt){const q=bt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ae,ue,q.width,q.height)}for(let q=0,xe=Ie.length;q<xe;q++)se=Ie[q],Be?L&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve,Se,se):n.texImage2D(t.TEXTURE_2D,q,ue,ve,Se,se);M.generateMipmaps=!1}else if(Be){if(tt){const q=bt(Q);n.texStorage2D(t.TEXTURE_2D,ae,ue,q.width,q.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Se,Q)}else n.texImage2D(t.TEXTURE_2D,0,ue,ve,Se,Q);h(M)&&g(J),fe.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function De(w,M,F){if(M.image.length!==6)return;const J=Z(w,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+F);const re=i.get(ne);if(ne.version!==re.__version||J===!0){n.activeTexture(t.TEXTURE0+F);const fe=Xe.getPrimaries(Xe.workingColorSpace),Y=M.colorSpace===Sr?null:Xe.getPrimaries(M.colorSpace),Q=M.colorSpace===Sr||fe===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ve&&!Se?ue[te]=m(M.image[te],!0,r.maxCubemapSize):ue[te]=Se?M.image[te].image:M.image[te],ue[te]=pe(M,ue[te]);const se=ue[0],Ie=s.convert(M.format,M.colorSpace),Be=s.convert(M.type),tt=S(M.internalFormat,Ie,Be,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,ae=re.__version===void 0||J===!0,q=ne.dataReady;let xe=T(M,se);Ne(t.TEXTURE_CUBE_MAP,M);let ce;if(ve){L&&ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,tt,se.width,se.height);for(let te=0;te<6;te++){ce=ue[te].mipmaps;for(let be=0;be<ce.length;be++){const Oe=ce[be];M.format!==zn?Ie!==null?L?q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Oe.width,Oe.height,Ie,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,tt,Oe.width,Oe.height,0,Oe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Oe.width,Oe.height,Ie,Be,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,tt,Oe.width,Oe.height,0,Ie,Be,Oe.data)}}}else{if(ce=M.mipmaps,L&&ae){ce.length>0&&xe++;const te=bt(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,tt,te.width,te.height)}for(let te=0;te<6;te++)if(Se){L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ie,Be,ue[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,ue[te].width,ue[te].height,0,Ie,Be,ue[te].data);for(let be=0;be<ce.length;be++){const Ct=ce[be].image[te].image;L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Ct.width,Ct.height,Ie,Be,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,tt,Ct.width,Ct.height,0,Ie,Be,Ct.data)}}else{L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Be,ue[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Ie,Be,ue[te]);for(let be=0;be<ce.length;be++){const Oe=ce[be];L?q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Ie,Be,Oe.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,tt,Ie,Be,Oe.image[te])}}}h(M)&&g(t.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Le(w,M,F,J,ne,re){const fe=s.convert(F.format,F.colorSpace),Y=s.convert(F.type),Q=S(F.internalFormat,fe,Y,F.normalized,F.colorSpace),ve=i.get(M),Se=i.get(F);if(Se.__renderTarget=M,!ve.__hasExternalTextures){const ue=Math.max(1,M.width>>re),se=Math.max(1,M.height>>re);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,re,Q,ue,se,M.depth,0,fe,Y,null):n.texImage2D(ne,re,Q,ue,se,0,fe,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,Se.__webglTexture,0,Ot(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,Se.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function yt(w,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,w),M.depthBuffer){const J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,re=b(M.stencilBuffer,ne),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(M),re,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(M),re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,w)}else{const J=M.textures;for(let ne=0;ne<J.length;ne++){const re=J[ne],fe=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),Q=S(re.internalFormat,fe,Y,re.normalized,re.colorSpace);Ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ot(M),Q,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ot(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ke(w,M,F){const J=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M.depthTexture);const ve=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===tr?ue=t.DEPTH_COMPONENT24:M.depthTexture.format===Qr&&(ue=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,M.width,M.height,0,ve,Se,null)}}else k(M.depthTexture,0);const re=ne.__webglTexture,fe=Ot(M),Y=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,Q=M.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===tr)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,re,0);else if(M.depthTexture.format===Qr)Ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Y,re,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Y,re,0);else throw new Error("Unknown depthTexture format")}function at(w){const M=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)Ke(M.__webglFramebuffer[J],w,J);else{const J=w.texture.mipmaps;J&&J.length>0?Ke(M.__webglFramebuffer[0],w,0):Ke(M.__webglFramebuffer,w,0)}else if(F){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),yt(M.__webglDepthbuffer[J],w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}else{const J=w.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),yt(M.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(w,M,F){const J=i.get(w);M!==void 0&&Le(J.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&at(w)}function je(w){const M=w.texture,F=i.get(w),J=i.get(M);w.addEventListener("dispose",y);const ne=w.textures,re=w.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Q=0;Q<M.mipmaps.length;Q++)F.__webglFramebuffer[Y][Q]=t.createFramebuffer()}else F.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)F.__webglFramebuffer[Y]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(fe)for(let Y=0,Q=ne.length;Y<Q;Y++){const ve=i.get(ne[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Ze(w)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const Q=ne[Y];F.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const ve=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),ue=S(Q.internalFormat,ve,Se,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),se=Ot(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ue,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),yt(F.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(t.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Le(F.__webglFramebuffer[Y][Q],w,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Le(F.__webglFramebuffer[Y],w,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let Y=0,Q=ne.length;Y<Q;Y++){const ve=ne[Y],Se=i.get(ve);let ue=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Se.__webglTexture),Ne(ue,ve),Le(F.__webglFramebuffer,w,ve,t.COLOR_ATTACHMENT0+Y,ue,0),h(ve)&&g(ue)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,J.__webglTexture),Ne(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Le(F.__webglFramebuffer[Q],w,M,t.COLOR_ATTACHMENT0,Y,Q);else Le(F.__webglFramebuffer,w,M,t.COLOR_ATTACHMENT0,Y,0);h(M)&&g(Y),n.unbindTexture()}w.depthBuffer&&at(w)}function Ft(w){const M=w.textures;for(let F=0,J=M.length;F<J;F++){const ne=M[F];if(h(ne)){const re=v(w),fe=i.get(ne).__webglTexture;n.bindTexture(re,fe),g(re),n.unbindTexture()}}}const St=[],yn=[];function I(w){if(w.samples>0){if(Ze(w)===!1){const M=w.textures,F=w.width,J=w.height;let ne=t.COLOR_BUFFER_BIT;const re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(w),Y=M.length>1;if(Y)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Se=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,F,J,0,0,F,J,ne,t.NEAREST),l===!0&&(St.length=0,yn.length=0,St.push(t.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(St.push(re),yn.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,yn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Se=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ot(w){return Math.min(r.maxSamples,w.samples)}function Ze(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(w){const M=a.render.frame;c.get(w)!==M&&(c.set(w,M),w.update())}function pe(w,M){const F=w.colorSpace,J=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Cn&&F!==Sr&&(Xe.getTransfer(F)===nt?(J!==zn||ne!==wn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),M}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.getTextureUnits=K,this.setTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=oe,this.rebindTextures=mt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function vP(t,e){function n(i,r=Sr){let s;const a=Xe.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===Lp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zx)return t.BYTE;if(i===Vx)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===Pp)return t.INT;if(i===Ai)return t.UNSIGNED_INT;if(i===Bn)return t.FLOAT;if(i===er)return t.HALF_FLOAT;if(i===Wx)return t.ALPHA;if(i===jx)return t.RGB;if(i===zn)return t.RGBA;if(i===tr)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===Ip)return t.RED;if(i===Dp)return t.RED_INTEGER;if(i===fs)return t.RG;if(i===Up)return t.RG_INTEGER;if(i===Fp)return t.RGBA_INTEGER;if(i===iu||i===ru||i===su||i===au)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Uu||i===Yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===Wd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uu)return s.COMPRESSED_RG11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uh||i===ch||i===fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uh)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===hh||i===Fu||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const xP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ry(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:xP,fragmentShader:yP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MP extends ps{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new SP,h={},g=n.getContextAttributes();let v=null,S=null;const b=[],T=[],A=new Je;let y=null;const R=new un;R.viewport=new ft;const P=new un;P.viewport=new ft;const C=[R,P],O=new Mb;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getHandSpace()};function N(Z){const de=T.indexOf(Z.inputSource);if(de===-1)return;const le=b[de];le!==void 0&&(le.update(Z.inputSource,Z.frame,u||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<b.length;Z++){const de=T[Z];de!==null&&(T[Z]=null,b[Z].disconnect(de))}X=null,K=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(v),p=null,d=null,f=null,r=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,De=null;g.depth&&(De=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Qr:tr,Ce=g.stencil?Io:Ai);const Le={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ti(d.textureWidth,d.textureHeight,{format:zn,type:wn,depthTexture:new da(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:zn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let de=0;de<Z.removed.length;de++){const le=Z.removed[de],Ce=T.indexOf(le);Ce>=0&&(T[Ce]=null,b[Ce].disconnect(le))}for(let de=0;de<Z.added.length;de++){const le=Z.added[de];let Ce=T.indexOf(le);if(Ce===-1){for(let Le=0;Le<b.length;Le++)if(Le>=T.length){T.push(le),Ce=Le;break}else if(T[Le]===null){T[Le]=le,Ce=Le;break}if(Ce===-1)break}const De=b[Ce];De&&De.connect(le)}}const k=new U,$=new U;function ee(Z,de,le){k.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const Ce=k.distanceTo($),De=de.projectionMatrix.elements,Le=le.projectionMatrix.elements,yt=De[14]/(De[10]-1),Ke=De[14]/(De[10]+1),at=(De[9]+1)/De[5],mt=(De[9]-1)/De[5],je=(De[8]-1)/De[0],Ft=(Le[8]+1)/Le[0],St=yt*je,yn=yt*Ft,I=Ce/(-je+Ft),Ot=I*-je;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(I),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ze=yt+I,dt=Ke+I,pe=St-Ot,bt=yn+(Ce-Ot),w=at*Ke/dt*Ze,M=mt*Ke/dt*Ze;Z.projectionMatrix.makePerspective(pe,bt,w,M,Ze,dt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let de=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(le=m.depthFar)),O.near=P.near=R.near=de,O.far=P.far=R.far=le,(X!==O.near||K!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,K=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Ce=Z.parent,De=O.cameras;oe(O,Ce);for(let Le=0;Le<De.length;Le++)oe(De[Le],Ce);De.length===2?ee(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),he(Z,O,Ce)};function he(Z,de,le){le===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let Ge=null;function qe(Z,de){if(c=de.getViewerPose(u||a),_=de,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ce=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let Ke=0;Ke<le.length;Ke++){const at=le[Ke];let mt=null;if(p!==null)mt=p.getViewport(at);else{const Ft=f.getViewSubImage(d,at);mt=Ft.viewport,Ke===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(S))}let je=C[Ke];je===void 0&&(je=new un,je.layers.enable(Ke),je.viewport=new ft,C[Ke]=je),je.matrix.fromArray(at.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(at.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(mt.x,mt.y,mt.width,mt.height),Ke===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(je)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ke=f.getDepthInformation(le[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,r.renderState)}if(De&&De.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ke=0;Ke<le.length;Ke++){const at=le[Ke].camera;if(at){let mt=h[at];mt||(mt=new ry,h[at]=mt);const je=f.getCameraImage(at);mt.sourceTexture=je}}}}for(let le=0;le<b.length;le++){const Ce=T[le],De=b[le];Ce!==null&&De!==void 0&&De.update(Ce,de,u||a)}Ge&&Ge(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ne=new cy;Ne.setAnimationLoop(qe),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const EP=new He,_y=new Ue;_y.set(-1,0,0,0,1,0,0,0,1);function TP(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sy(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===xn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===xn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(EP.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_y),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wP(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(_(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function c(g){const v=f();g.__bindingPointIndex=v;const S=t.createBuffer(),b=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let R=0,P=y.length;R<P;R++){const C=y[R];if(p(C,T,R,b)===!0){const O=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let N=0;N<X.length;N++){const W=X[N],B=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,O+K,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):ArrayBuffer.isView(W)?C.__data.set(new W.constructor(W.buffer,W.byteOffset,C.__data.length)):(W.toArray(C.__data,K),K+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,S,b){const T=g.value,A=v+"_"+S;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:ArrayBuffer.isView(T)?b[A]=T.slice():b[A]=T.clone(),!0;{const y=b[A];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return b[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(y.equals(T)===!1)return y.copy(T),!0}}return!1}function _(g){const v=g.uniforms;let S=0;const b=16;for(let A=0,y=v.length;A<y;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let P=0,C=R.length;P<C;P++){const O=R[P],X=Array.isArray(O.value)?O.value:[O.value];for(let K=0,N=X.length;K<N;K++){const W=X[K],B=x(W),k=S%b,$=k%B.boundary,ee=k+$;S+=$,ee!==0&&b-ee<B.storage&&(S+=b-ee),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=B.storage}}}const T=S%b;return T>0&&(S+=b-T),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):we("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}const bP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function AP(){return hi===null&&(hi=new Hp(bP,16,16,fs,er),hi.name="DFG_LUT",hi.minFilter=Vt,hi.magFilter=Vt,hi.wrapS=xi,hi.wrapT=xi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class RP{constructor(e={}){const{canvas:n=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=p,m=new Set([Fp,Up,Dp]),h=new Set([wn,Ai,No,Io,Lp,Np]),g=new Uint32Array(4),v=new Int32Array(4),S=new U;let b=null,T=null;const A=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,O=null;this._outputColorSpace=Xt;let X=0,K=0,N=null,W=-1,B=null;const k=new ft,$=new ft;let ee=null;const oe=new Fe(0);let he=0,Ge=n.width,qe=n.height,Ne=1,Z=null,de=null;const le=new ft(0,0,Ge,qe),Ce=new ft(0,0,Ge,qe);let De=!1;const Le=new Wp;let yt=!1,Ke=!1;const at=new He,mt=new U,je=new ft,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function yn(){return N===null?Ne:1}let I=i;function Ot(E,D){return n.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rp}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Oe,!1),I===null){const D="webgl2";if(I=Ot(D,E),I===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let Ze,dt,pe,bt,w,M,F,J,ne,re,fe,Y,Q,ve,Se,ue,se,Ie,Be,tt,L,ae,q;function xe(){Ze=new AC(I),Ze.init(),L=new vP(I,Ze),dt=new xC(I,Ze,e,L),pe=new gP(I,Ze),dt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),bt=new PC(I),w=new nP,M=new _P(I,Ze,pe,w,dt,L,bt),F=new bC(P),J=new Db(I),ae=new _C(I,J),ne=new RC(I,J,bt,ae),re=new NC(I,ne,J,ae,bt),Ie=new LC(I,dt,M),Se=new yC(w),fe=new tP(P,F,Ze,dt,ae,Se),Y=new TP(P,w),Q=new rP,ve=new cP(Ze),se=new gC(P,F,pe,re,_,l),ue=new mP(P,re,dt),q=new wP(I,bt,dt,pe),Be=new vC(I,Ze,bt),tt=new CC(I,Ze,bt),bt.programs=fe.programs,P.capabilities=dt,P.extensions=Ze,P.properties=w,P.renderLists=Q,P.shadowMap=ue,P.state=pe,P.info=bt}xe(),x!==wn&&(R=new DC(x,n.width,n.height,r,s));const ce=new MP(P,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(Ge,qe,!1))},this.getSize=function(E){return E.set(Ge,qe)},this.setSize=function(E,D,G=!0){if(ce.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=E,qe=D,n.width=Math.floor(E*Ne),n.height=Math.floor(D*Ne),G===!0&&(n.style.width=E+"px",n.style.height=D+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Ge*Ne,qe*Ne).floor()},this.setDrawingBufferSize=function(E,D,G){Ge=E,qe=D,Ne=G,n.width=Math.floor(E*G),n.height=Math.floor(D*G),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(x===wn){Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,D,G,V){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,D,G,V),pe.viewport(k.copy(le).multiplyScalar(Ne).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,D,G,V){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,D,G,V),pe.scissor($.copy(Ce).multiplyScalar(Ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){pe.setScissorTest(De=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,G=!0){let V=0;if(E){let H=!1;if(N!==null){const _e=N.texture.format;H=m.has(_e)}if(H){const _e=N.texture.type,Me=h.has(_e),ge=se.getClearColor(),Te=se.getClearAlpha(),Ae=ge.r,ke=ge.g,Ve=ge.b;Me?(g[0]=Ae,g[1]=ke,g[2]=Ve,g[3]=Te,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ae,v[1]=ke,v[2]=Ve,v[3]=Te,I.clearBufferiv(I.COLOR,0,v))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),Q.dispose(),ve.dispose(),w.dispose(),F.dispose(),re.dispose(),ae.dispose(),q.dispose(),fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",tm),ce.removeEventListener("sessionend",nm),Br.stop()};function te(E){E.preventDefault(),ku("WebGLRenderer: Context Lost."),C=!0}function be(){ku("WebGLRenderer: Context Restored."),C=!1;const E=bt.autoReset,D=ue.enabled,G=ue.autoUpdate,V=ue.needsUpdate,H=ue.type;xe(),bt.autoReset=E,ue.enabled=D,ue.autoUpdate=G,ue.needsUpdate=V,ue.type=H}function Oe(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const D=E.target;D.removeEventListener("dispose",Ct),ot(D)}function ot(E){Ni(E),w.remove(E)}function Ni(E){const D=w.get(E).programs;D!==void 0&&(D.forEach(function(G){fe.releaseProgram(G)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,G,V,H,_e){D===null&&(D=Ft);const Me=H.isMesh&&H.matrixWorld.determinant()<0,ge=Ay(E,D,G,V,H);pe.setMaterial(V,Me);let Te=G.index,Ae=1;if(V.wireframe===!0){if(Te=ne.getWireframeAttribute(G),Te===void 0)return;Ae=2}const ke=G.drawRange,Ve=G.attributes.position;let Re=ke.start*Ae,lt=(ke.start+ke.count)*Ae;_e!==null&&(Re=Math.max(Re,_e.start*Ae),lt=Math.min(lt,(_e.start+_e.count)*Ae)),Te!==null?(Re=Math.max(Re,0),lt=Math.min(lt,Te.count)):Ve!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,Ve.count));const Pt=lt-Re;if(Pt<0||Pt===1/0)return;ae.setup(H,V,ge,G,Te);let At,ut=Be;if(Te!==null&&(At=J.get(Te),ut=tt,ut.setIndex(At)),H.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*yn()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(H.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),pe.setLineWidth(Jt*yn()),H.isLineSegments?ut.setMode(I.LINES):H.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else H.isPoints?ut.setMode(I.POINTS):H.isSprite&&ut.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Jt=H._multiDrawStarts,ye=H._multiDrawCounts,Sn=H._multiDrawCount,Qe=Te?J.get(Te).bytesPerElement:1,In=w.get(V).currentProgram.getUniforms();for(let ci=0;ci<Sn;ci++)In.setValue(I,"_gl_DrawID",ci),ut.render(Jt[ci]/Qe,ye[ci])}else if(H.isInstancedMesh)ut.renderInstances(Re,Pt,H.count);else if(G.isInstancedBufferGeometry){const Jt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,Jt);ut.renderInstances(Re,Pt,ye)}else ut.render(Re,Pt)};function ui(E,D,G){E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Yo(E,D,G),E.side=Qi,E.needsUpdate=!0,Yo(E,D,G),E.side=vi):Yo(E,D,G)}this.compile=function(E,D,G=null){G===null&&(G=E),T=ve.get(G),T.init(D),y.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==G&&E.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const ge=_e[Me];ui(ge,G,H),V.add(ge)}else ui(_e,G,H),V.add(_e)}),T=y.pop(),V},this.compileAsync=function(E,D,G=null){const V=this.compile(E,D,G);return new Promise(H=>{function _e(){if(V.forEach(function(Me){w.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){H(E);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mc=null;function wy(E){mc&&mc(E)}function tm(){Br.stop()}function nm(){Br.start()}const Br=new cy;Br.setAnimationLoop(wy),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(E){mc=E,ce.setAnimationLoop(E),E===null?Br.stop():Br.start()},ce.addEventListener("sessionstart",tm),ce.addEventListener("sessionend",nm),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;O!==null&&O.renderStart(E,D);const G=ce.enabled===!0&&ce.isPresenting===!0,V=R!==null&&(N===null||G)&&R.begin(P,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(D),D=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,D,N),T=ve.get(E,y.length),T.init(D),T.state.textureUnits=M.getTextureUnits(),y.push(T),at.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Le.setFromProjectionMatrix(at,yi,D.reversedDepth),Ke=this.localClippingEnabled,yt=Se.init(this.clippingPlanes,Ke),b=Q.get(E,A.length),b.init(),A.push(b),ce.enabled===!0&&ce.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&gc(Me,D,-1/0,P.sortObjects)}gc(E,D,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Z,de),St=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,St&&se.addToRenderList(b,E),this.info.render.frame++,yt===!0&&Se.beginShadows();const H=T.state.shadowsArray;if(ue.render(H,E,D),yt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&R.hasRenderPass())===!1){const Me=b.opaque,ge=b.transmissive;if(T.setupLights(),D.isArrayCamera){const Te=D.cameras;if(ge.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae];rm(Me,ge,E,Ve)}St&&se.render(E);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae];im(b,E,Ve,Ve.viewport)}}else ge.length>0&&rm(Me,ge,E,D),St&&se.render(E),im(b,E,D)}N!==null&&K===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),V&&R.end(P),E.isScene===!0&&E.onAfterRender(P,E,D),ae.resetDefaultState(),W=-1,B=null,y.pop(),y.length>0?(T=y[y.length-1],M.setTextureUnits(T.state.textureUnits),yt===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,O!==null&&O.renderEnd()};function gc(E,D,G,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){V&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const Me=re.update(E),ge=E.material;ge.visible&&b.push(E,Me,ge,G,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const Me=re.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(ge)){const Te=Me.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae],Re=ge[Ve.materialIndex];Re&&Re.visible&&b.push(E,Me,Re,G,je.z,Ve)}}else ge.visible&&b.push(E,Me,ge,G,je.z,null)}}const _e=E.children;for(let Me=0,ge=_e.length;Me<ge;Me++)gc(_e[Me],D,G,V)}function im(E,D,G,V){const{opaque:H,transmissive:_e,transparent:Me}=E;T.setupLightsView(G),yt===!0&&Se.setGlobalState(P.clippingPlanes,G),V&&pe.viewport(k.copy(V)),H.length>0&&$o(H,D,G),_e.length>0&&$o(_e,D,G),Me.length>0&&$o(Me,D,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function rm(E,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Re=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:Re?er:wn,minFilter:Gi,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const _e=T.state.transmissionRenderTarget[V.id],Me=V.viewport||k;_e.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(oe),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),St&&se.render(G);const ke=P.toneMapping;P.toneMapping=Ei;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),yt===!0&&Se.setGlobalState(P.clippingPlanes,V),$o(E,G,V),M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,Pt=D.length;lt<Pt;lt++){const At=D[lt],{object:ut,geometry:Jt,material:ye,group:Sn}=At;if(ye.side===vi&&ut.layers.test(V.layers)){const Qe=ye.side;ye.side=xn,ye.needsUpdate=!0,sm(ut,G,V,Jt,ye,Sn),ye.side=Qe,ye.needsUpdate=!0,Re=!0}}Re===!0&&(M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e))}P.setRenderTarget(ge,Te,Ae),P.setClearColor(oe,he),Ve!==void 0&&(V.viewport=Ve),P.toneMapping=ke}function $o(E,D,G){const V=D.isScene===!0?D.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){const Me=E[H],{object:ge,geometry:Te,group:Ae}=Me;let ke=Me.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(G.layers)&&sm(ge,D,G,Te,ke,Ae)}}function sm(E,D,G,V,H,_e){E.onBeforeRender(P,D,G,V,H,_e),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,D,G,V,E,_e),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,E,_e),H.side=Qi,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,E,_e),H.side=vi):P.renderBufferDirect(G,D,V,H,E,_e),E.onAfterRender(P,D,G,V,H,_e)}function Yo(E,D,G){D.isScene!==!0&&(D=Ft);const V=w.get(E),H=T.state.lights,_e=T.state.shadowsArray,Me=H.state.version,ge=fe.getParameters(E,H.state,_e,D,G,T.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=F.get(E.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Ct),Ae=new Map,V.programs=Ae);let Ve=Ae.get(Te);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Me)return om(E,ge),Ve}else ge.uniforms=fe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,G,ge),E.onBeforeCompile(ge,P),Ve=fe.acquireProgram(ge,Te),Ae.set(Te,Ve),V.uniforms=ge.uniforms;const Re=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Se.uniform),om(E,ge),V.needsLights=Cy(E),V.lightsStateVersion=Me,V.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Ve,V.uniformsList=null,Ve}function am(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ou.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function om(E,D){const G=w.get(E);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function by(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let G=0,V=E.length;G<V;G++){const H=E[G];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Ay(E,D,G,V,H){D.isScene!==!0&&(D=Ft),M.resetTextureUnits();const _e=D.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,ge=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Xe.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=F.get(V.envMap||Me,Te),ke=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color;let At=Ei;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=P.toneMapping);const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=ut!==void 0?ut.length:0,ye=w.get(V),Sn=T.state.lights;if(yt===!0&&(Ke===!0||E!==B)){const ht=E===B&&V.id===W;Se.setState(V,E,ht)}let Qe=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Sn.state.version||ye.outputColorSpace!==ge||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Ae||V.fog===!0&&ye.fog!==_e||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==Ve||ye.morphTargets!==Re||ye.morphNormals!==lt||ye.morphColors!==Pt||ye.toneMapping!==At||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=V.version);let In=ye.currentProgram;Qe===!0&&(In=Yo(V,D,H),O&&V.isNodeMaterial&&O.onUpdateProgram(V,In,ye));let ci=!1,ar=!1,ms=!1;const ct=In.getUniforms(),Lt=ye.uniforms;if(pe.useProgram(In.program)&&(ci=!0,ar=!0,ms=!0),V.id!==W&&(W=V.id,ar=!0),ye.needsLights){const ht=by(T.state.lightProbeGridArray,H);ye.lightProbeGrid!==ht&&(ye.lightProbeGrid=ht,ar=!0)}if(ci||B!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",E.projectionMatrix),ct.setValue(I,"viewMatrix",E.matrixWorldInverse);const lr=ct.map.cameraPosition;lr!==void 0&&lr.setValue(I,mt.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,ar=!0,ms=!0)}if(ye.needsLights&&(Sn.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Sn.state.directionalShadowMap,M),Sn.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Sn.state.spotShadowMap,M),Sn.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Sn.state.pointShadowMap,M)),H.isSkinnedMesh){ct.setOptional(I,H,"bindMatrix"),ct.setOptional(I,H,"bindMatrixInverse");const ht=H.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(I,"boneTexture",ht.boneTexture,M))}H.isBatchedMesh&&(ct.setOptional(I,H,"batchingTexture"),ct.setValue(I,"batchingTexture",H._matricesTexture,M),ct.setOptional(I,H,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",H._indirectTexture,M),ct.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",H._colorsTexture,M));const or=G.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ie.update(H,G,In),(ar||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,ct.setValue(I,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=AP()),ar){if(ct.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&Ry(Lt,ms),_e&&V.fog===!0&&Y.refreshFogUniforms(Lt,_e),Y.refreshMaterialUniforms(Lt,V,Ne,qe,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const ht=ye.lightProbeGrid;Lt.probesSH.value=ht.texture,Lt.probesMin.value.copy(ht.boundingBox.min),Lt.probesMax.value.copy(ht.boundingBox.max),Lt.probesResolution.value.copy(ht.resolution)}ou.upload(I,am(ye),Lt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ou.upload(I,am(ye),Lt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(I,"center",H.center),ct.setValue(I,"modelViewMatrix",H.modelViewMatrix),ct.setValue(I,"normalMatrix",H.normalMatrix),ct.setValue(I,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ht=V.uniformsGroups;for(let lr=0,gs=ht.length;lr<gs;lr++){const lm=ht[lr];q.update(lm,In),q.bind(lm,In)}}return In}function Ry(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Cy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,D,G){const V=w.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),w.get(E.texture).__webglTexture=D,w.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const G=w.get(E);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0};const Py=I.createFramebuffer();this.setRenderTarget=function(E,D=0,G=0){N=E,X=D,K=G;let V=null,H=!1,_e=!1;if(E){const ge=w.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(E.viewport),$.copy(E.scissor),ee=E.scissorTest,pe.viewport(k),pe.scissor($),pe.setScissorTest(ee),W=-1;return}else if(ge.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ge.__hasExternalTextures)M.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&w.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Ae=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?V=Ae[D][G]:V=Ae[D],H=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?V=w.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[G]:V=Ae,k.copy(E.viewport),$.copy(E.scissor),ee=E.scissorTest}else k.copy(le).multiplyScalar(Ne).floor(),$.copy(Ce).multiplyScalar(Ne).floor(),ee=De;if(G!==0&&(V=Py),pe.bindFramebuffer(I.FRAMEBUFFER,V)&&pe.drawBuffers(E,V),pe.viewport(k),pe.scissor($),pe.setScissorTest(ee),H){const ge=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,G)}else if(_e){const ge=D;for(let Te=0;Te<E.textures.length;Te++){const Ae=w.get(E.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,G,ge)}}else if(E!==null&&G!==0){const ge=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(E,D,G,V,H,_e,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=E.textures[ge],ke=Ae.format,Ve=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!dt.textureFormatReadable(ke)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ve)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&G>=0&&G<=E.height-H&&I.readPixels(D,G,V,H,L.convert(ke),L.convert(Ve),_e)}finally{const Ae=N!==null?w.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,D,G,V,H,_e,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(D>=0&&D<=E.width-V&&G>=0&&G<=E.height-H){pe.bindFramebuffer(I.FRAMEBUFFER,Te);const Ae=E.textures[ge],ke=Ae.format,Ve=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!dt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(D,G,V,H,L.convert(ke),L.convert(Ve),0);const lt=N!==null?w.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,lt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Z1(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Re),I.deleteSync(Pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,G=0){const V=Math.pow(2,-G),H=Math.floor(E.image.width*V),_e=Math.floor(E.image.height*V),Me=D!==null?D.x:0,ge=D!==null?D.y:0;M.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Me,ge,H,_e),pe.unbindTexture()};const Ly=I.createFramebuffer(),Ny=I.createFramebuffer();this.copyTextureToTexture=function(E,D,G=null,V=null,H=0,_e=0){let Me,ge,Te,Ae,ke,Ve,Re,lt,Pt;const At=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(G!==null)Me=G.max.x-G.min.x,ge=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,ke=G.min.y,Ve=G.isBox3?G.min.z:0;else{const Lt=Math.pow(2,-H);Me=Math.floor(At.width*Lt),ge=Math.floor(At.height*Lt),E.isDataArrayTexture?Te=At.depth:E.isData3DTexture?Te=Math.floor(At.depth*Lt):Te=1,Ae=0,ke=0,Ve=0}V!==null?(Re=V.x,lt=V.y,Pt=V.z):(Re=0,lt=0,Pt=0);const ut=L.convert(D.format),Jt=L.convert(D.type);let ye;D.isData3DTexture?(M.setTexture3D(D,0),ye=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(M.setTexture2DArray(D,0),ye=I.TEXTURE_2D_ARRAY):(M.setTexture2D(D,0),ye=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Sn=pe.getParameter(I.UNPACK_ROW_LENGTH),Qe=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),In=pe.getParameter(I.UNPACK_SKIP_PIXELS),ci=pe.getParameter(I.UNPACK_SKIP_ROWS),ar=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(I.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const ms=E.isDataArrayTexture||E.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Lt=w.get(E),or=w.get(D),ht=w.get(Lt.__renderTarget),lr=w.get(or.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ht.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let gs=0;gs<Te;gs++)ms&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(E).__webglTexture,H,Ve+gs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(D).__webglTexture,_e,Pt+gs)),I.blitFramebuffer(Ae,ke,Me,ge,Re,lt,Me,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||w.has(E)){const Lt=w.get(E),or=w.get(D);pe.bindFramebuffer(I.READ_FRAMEBUFFER,Ly),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ny);for(let ht=0;ht<Te;ht++)ms?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,H,Ve+ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,H),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,or.__webglTexture,_e,Pt+ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,or.__webglTexture,_e),H!==0?I.blitFramebuffer(Ae,ke,Me,ge,Re,lt,Me,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(ye,_e,Re,lt,Pt+ht,Ae,ke,Me,ge):I.copyTexSubImage2D(ye,_e,Re,lt,Ae,ke,Me,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,Jt,At.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,At.data):I.texSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,Jt,At):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Re,lt,Me,ge,ut,Jt,At.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Re,lt,At.width,At.height,ut,At.data):I.texSubImage2D(I.TEXTURE_2D,_e,Re,lt,Me,ge,ut,Jt,At);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Sn),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,In),pe.pixelStorei(I.UNPACK_SKIP_ROWS,ci),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,ar),_e===0&&D.generateMipmaps&&I.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(E){w.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){X=0,K=0,N=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}function W0(t,e){if(e===B1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===mh||e===Xx){let n=t.getIndex();if(n===null){const a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(e===mh)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}function CP(t){const e=new Map,n=new Map,i=t.clone();return vy(t,i,function(r,s){e.set(s,r),n.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return n.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function vy(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)vy(t.children[i],e.children[i],n)}class PP extends wa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new UP(n)}),this.register(function(n){return new FP(n)}),this.register(function(n){return new jP(n)}),this.register(function(n){return new XP(n)}),this.register(function(n){return new $P(n)}),this.register(function(n){return new kP(n)}),this.register(function(n){return new BP(n)}),this.register(function(n){return new zP(n)}),this.register(function(n){return new VP(n)}),this.register(function(n){return new DP(n)}),this.register(function(n){return new HP(n)}),this.register(function(n){return new OP(n)}),this.register(function(n){return new WP(n)}),this.register(function(n){return new GP(n)}),this.register(function(n){return new NP(n)}),this.register(function(n){return new j0(n,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new j0(n,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new YP(n)})}load(e,n,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=ho.extractUrlBase(e);a=ho.resolveURL(u,this.path)}else a=ho.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ly(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,a,function(c){n(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xy){try{a[We.KHR_BINARY_GLTF]=new qP(e)}catch(f){r&&r(f);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new l3(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:a[f]=new IP;break;case We.KHR_DRACO_MESH_COMPRESSION:a[f]=new KP(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[f]=new ZP;break;case We.KHR_MESH_QUANTIZATION:a[f]=new JP;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function LP(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function It(t,e,n){const i=t.json.materials[e];return i.extensions&&i.extensions[n]?i.extensions[n]:null}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class NP{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Fe(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Cn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Sh(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new _b(c),u.distance=f;break;case"spot":u=new mb(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),mi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(n.cache,o,l)})}}class IP{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,n,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class DP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class UP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Je(s,s)}return Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class OP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class kP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(n.sheenColor=new Fe(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;n.sheenColor.setRGB(s[0],s[1],s[2],Cn)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,Xt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class BP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class zP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return n.attenuationColor=new Fe().setRGB(s[0],s[1],s[2],Cn),Promise.all(r)}}class VP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}}class HP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return n.specularColor=new Fe().setRGB(s[0],s[1],s[2],Cn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,Xt)),Promise.all(r)}}class GP{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(r)}}class WP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,n){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class jP{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,a)}}class XP{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const a=s.extensions[n],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}}class $P{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const a=s.extensions[n],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}}class j0{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,d=new Uint8Array(o,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(c*f);return a.decodeGltfBuffer(new Uint8Array(p),c,f,d,r.mode,r.filter),p})})}else return null}}class YP{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==Un.TRIANGLES&&u.mode!==Un.TRIANGLE_STRIP&&u.mode!==Un.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(c=>(l[u]=c,l[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],d=u[0].count,p=[];for(const _ of f){const x=new He,m=new U,h=new rr,g=new U(1,1,1),v=new ey(_.geometry,_.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,S),l.SCALE&&g.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,x.compose(m,h,g));for(const S in l)if(S==="_COLOR_0"){const b=l[S];v.instanceColor=new xh(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);vt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const xy="glTF",Xa=12,X0={JSON:1313821514,BIN:5130562};class qP{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==xy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Xa,s=new DataView(e,Xa);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===X0.JSON){const u=new Uint8Array(e,Xa+a,o);this.content=i.decode(u)}else if(l===X0.BIN){const u=Xa+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KP{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},u={};for(const c in a){const f=Th[c]||c.toLowerCase();o[f]=a[c]}for(const c in e.attributes){const f=Th[c]||c.toLowerCase();if(a[c]!==void 0){const d=i.accessors[e.attributes[c]],p=ea[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return n.getDependency("bufferView",s).then(function(c){return new Promise(function(f,d){r.decodeDracoFile(c,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}f(p)},o,u,Cn,d)})})}}class ZP{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class JP{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class yy extends Ma{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)n[a]=i[s+a];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,c=r-n,f=(i-n)/c,d=f*f,p=d*f,_=e*u,x=_-u,m=-2*p+3*d,h=p-d,g=1-m,v=h-d+f;for(let S=0;S!==o;S++){const b=a[x+S+o],T=a[x+S+l]*c,A=a[_+S+o],y=a[_+S]*c;s[S]=g*b+v*T+m*A+h*y}return s}}const QP=new rr;class e3 extends yy{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return QP.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$0={9728:zt,9729:Vt,9984:Bx,9985:nu,9986:Qa,9987:Gi},Y0={33071:xi,33648:Du,10497:ca},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Th={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},t3={CUBICSPLINE:void 0,LINEAR:Uo,STEP:Do},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function n3(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Xp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),t.DefaultMaterial}function Wr(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function mi(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function i3(t,e,n){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const a=[],o=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):t.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):t.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):t.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2];return i&&(t.morphAttributes.position=c),r&&(t.morphAttributes.normal=f),s&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function r3(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s3(t){let e;const n=t.extensions&&t.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Nf(n.attributes):e=t.indices+":"+Nf(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Nf(t.targets[i]);return e}function Nf(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function wh(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a3(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const o3=new He;class l3{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new LP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new hb(this.options.manager):this.textureLoader=new yb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ly(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Wr(s,o,r),mi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const a=n[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[u,c]of a.children.entries())s(c,o.children[u])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(ho.resolveURL(n.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Pf[r.type],o=ea[r.componentType],l=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new fn(u,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Pf[r.type],u=ea[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,m;if(p&&p!==f){const h=Math.floor(d/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let v=n.cache.get(g);v||(x=new u(o,h*p,r.count*p/c),v=new Iw(x,p/c),n.cache.add(g,v)),m=new Vp(v,l,d%p/c,_)}else o===null?x=new u(r.count*l):x=new u(o,d,r.count*l),m=new fn(x,l,_);if(r.sparse!==void 0){const h=Pf.SCALAR,g=ea[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,b=new g(a[1],v,r.sparse.count*h),T=new u(a[2],S,r.sparse.count*l);o!==null&&(m=new fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=b.length;A<y;A++){const R=b[A];if(m.setX(R,T[A*l]),l>=2&&m.setY(R,T[A*l+1]),l>=3&&m.setZ(R,T[A*l+2]),l>=4&&m.setW(R,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,a=n.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,n,i){const r=this,s=this.json,a=s.textures[e],o=s.images[n],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(n,i).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return c.magFilter=$0[d.magFilter]||Vt,c.minFilter=$0[d.minFilter]||Gi,c.wrapS=Y0[d.wrapS]||ca,c.wrapT=Y0[d.wrapT]||ca,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==zt&&c.minFilter!==Vt,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;n.isImageBitmapLoader===!0&&(_=function(x){const m=new Yt(x);m.needsUpdate=!0,d(m)}),n.load(ho.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return u===!0&&o.revokeObjectURL(l),mi(f,a),f.userData.mimeType=a.mimeType||a3(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[n]=a,a})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ny,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ty,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xp}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(o,s,n))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Cn),o.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(n.assignTexture(o,"map",f.baseColorTexture,Xt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),u.push(n.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=vi);const c=s.alphaMode||Lf.OPAQUE;if(c===Lf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Lf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ts&&(u.push(n.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==ts&&(u.push(n.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ts){const f=s.emissiveFactor;o.emissive=new Fe().setRGB(f[0],f[1],f[2],Cn)}return s.emissiveTexture!==void 0&&a!==ts&&u.push(n.assignTexture(o,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(u).then(function(){const f=new a(o);return s.name&&(f.name=s.name),mi(f,s),n.associations.set(f,{materials:e}),s.extensions&&Wr(r,f,s),f})}createUniqueName(e){const n=rt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(l){return q0(l,o,n)})}const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],c=s3(u),f=r[c];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=q0(new Xn,u,n),r[c]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,u=a.length;l<u;l++){const c=a[l].material===void 0?n3(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(n.loadGeometries(a)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,_=c.length;p<_;p++){const x=c[p],m=a[p];let h;const g=u[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new Ow(x,g):new Pn(x,g),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?h.geometry=W0(h.geometry,Xx):m.mode===Un.TRIANGLE_FAN&&(h.geometry=W0(h.geometry,mh));else if(m.mode===Un.LINES)h=new Gw(x,g);else if(m.mode===Un.LINE_STRIP)h=new jp(x,g);else if(m.mode===Un.LINE_LOOP)h=new Ww(x,g);else if(m.mode===Un.POINTS)h=new jw(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&r3(h,s),h.name=n.createUniqueName(s.name||"mesh_"+e),mi(h,s),m.extensions&&Wr(r,h,m),n.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)n.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Wr(r,f[0],s),f[0];const d=new es;s.extensions&&Wr(r,d,s),n.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new un(mw.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new dc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),mi(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let u=0,c=a.length;u<c;u++){const f=a[u];if(f){o.push(f);const d=new He;s!==null&&d.fromArray(s.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new Gp(o,l)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],u=[],c=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],x=p.target,m=x.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,g=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",g)),u.push(_),c.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(f){const d=f[0],p=f[1],_=f[2],x=f[3],m=f[4],h=[];for(let v=0,S=d.length;v<S;v++){const b=d[v],T=p[v],A=_[v],y=x[v],R=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const P=i._createAnimationTracks(b,T,A,y,R);if(P)for(let C=0;C<P.length;C++)h.push(P[C])}const g=new ab(s,void 0,h);return mi(g,r),g})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,u=r.weights.length;l<u;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,c=o.length;u<c;u++)a.push(i.getDependency("node",o[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(u){const c=u[0],f=u[1],d=u[2];d!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(d,o3)});for(let p=0,_=f.length;p<_;p++)c.add(f[p]);if(c.userData.pivot!==void 0&&f.length>0){const p=c.userData.pivot,_=f[0];c.pivot=new U().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],_.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let c;if(s.isBone===!0?c=new Qx:u.length>1?c=new es:u.length===1?c=u[0]:c=new vt,c!==u[0])for(let f=0,d=u.length;f<d;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=a),mi(c,s),s.extensions&&Wr(i,c,s),s.matrix!==void 0){const f=new He;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!r.associations.has(c))r.associations.set(c,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(c);r.associations.set(c,{...f})}return r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new es;i.name&&(s.name=r.createUniqueName(i.name)),mi(s,i),i.extensions&&Wr(n,s,i);const a=i.nodes||[],o=[];for(let l=0,u=a.length;l<u;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,f=l.length;c<f;c++){const d=l[c];d.parent!==null?s.add(CP(d)):s.add(d)}const u=c=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof wi||d instanceof Yt)&&f.set(d,p);return c.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,n,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function u(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}gr[s.path]===gr.weights?(u(e),e.isGroup&&e.children.forEach(u)):l.push(o);let c;switch(gr[s.path]){case gr.weights:c=pa;break;case gr.rotation:c=ma;break;case gr.translation:case gr.scale:c=ga;break;default:switch(i.itemSize){case 1:c=pa;break;case 2:case 3:default:c=ga;break}break}const f=r.interpolation!==void 0?t3[r.interpolation]:Uo,d=this._getArrayFromAccessor(i);for(let p=0,_=l.length;p<_;p++){const x=new c(l[p]+"."+gr[s.path],n.array,d,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=wh(n.constructor),r=new Float32Array(n.length);for(let s=0,a=n.length;s<a;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ma?e3:yy;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function u3(t,e,n){const i=e.attributes,r=new sr;if(i.POSITION!==void 0){const o=n.json.accessors[i.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(u[0],u[1],u[2])),o.normalized){const c=wh(ea[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const d=n.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=wh(ea[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;const a=new Pi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function q0(t,e,n){const i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(const a in i){const o=Th[a]||a.toLowerCase();o in t.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){const a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}return Xe.workingColorSpace!==Cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),mi(t,e),u3(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?i3(t,e.targets,n):t})}const c3=["/models/board.glb","/models/logo_l.glb","/models/logo_r.glb"];function f3(){const t=j.useRef(null);let e=0;const n=i=>{if(i.type=="Group"){let r=new vt;r.scale.set(i.scale.x,i.scale.y,i.scale.z),r.rotation.set(i.rotation.x,i.rotation.y,i.rotation.z),r.position.set(i.position.x,i.position.y,i.position.z);for(let s=0;s<i.children.length;s++){let a=i.children[s],o=n(a);r.add(o)}return r}else{let r=new ey(i.geometry,i.material,10);return r.scale.set(i.scale.x,i.scale.y,i.scale.z),r.rotation.set(i.rotation.x,i.rotation.y,i.rotation.z),r.position.set(i.position.x,i.position.y,i.position.z),r}};return j.useEffect(()=>{const i=t.current;if(!i)return;const r=new Cw,s=new un(32,1,.1,1e3);s.position.set(-4,3,3),s.lookAt(-1,0,0);const a=new RP({antialias:!0,alpha:!1,powerPreference:"high-performance"});a.setClearColor(0,0),a.outputColorSpace=Xt,a.toneMapping=Cp,a.toneMappingExposure=1.15,i.appendChild(a.domElement);const o=new Sh(16777215,3.2);o.position.set(3,4,5),r.add(o);const l=new Sh(16760970,1.5);l.position.set(-4,2,3),r.add(l);const u=new xb(16777215,1.6);r.add(u);const c=new PP;let f=!1,d;const p=()=>{const{width:g,height:v}=i.getBoundingClientRect();a.setSize(g,v,!1),s.aspect=1,s.updateProjectionMatrix()};let _=[];const x=new vt;r.add(x),Promise.all(c3.map(g=>new Promise((v,S)=>{c.load(g,v,void 0,S)}))).then(g=>{f||(g.forEach(v=>{if(x.add(v.scene),["L","R"].indexOf(v.scene.children[0].name)>-1){_.push(v.scene);let S=n(v.scene);x.add(S),S.rotation.x=Math.PI/2,S.position.z+=.25,S.position.y+=.45,S.oz=S.position.z,S.tick=0,_.push(S),S=n(v.scene),x.add(S),S.rotation.z=Math.PI/2,S.rotation.x=Math.PI/2,S.position.x-=.25,S.position.y+=.45,S.ox=S.position.x,S.tick=0,_.push(S),v.scene.position.y+=.7,v.scene.oy=v.scene.position.y,v.scene.tick=0}}),console.log(_.length))}).catch(g=>{console.error("Failed to load hero GLB models:",g)});const m=new Nb,h=()=>{m.getElapsedTime();let g=.02;for(let v=0;v<_.length;v++){let S=_[v];S.ox&&(S.position.x=S.ox+Math.sin(S.tick)*g),S.oy&&(S.position.y=S.oy+Math.sin(S.tick)*g),S.oz&&(S.position.z=S.oz+Math.sin(S.tick)*g),S.tick+=.01}x.rotation.y=e/300,a.render(r,s),d=requestAnimationFrame(h)};return p(),h(),window.addEventListener("resize",p),()=>{f=!0,window.removeEventListener("resize",p),cancelAnimationFrame(d),r.traverse(g=>{g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material:[g.material]).forEach(S=>S.dispose())}),a.dispose(),a.domElement.remove()}},[]),j.useEffect(()=>{const i=()=>{e=window.scrollY};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),z.jsx("div",{ref:t,className:"h-full w-full","aria-hidden":"true"})}const d3=()=>z.jsxs(z.Fragment,{children:[z.jsx("section",{className:"h-screen overflow-hidden flex items-center justify-center text-black bg-[#f5f1ed]",children:z.jsxs("div",{className:"z-10 w-full max-w-6xl px-6 pt-24 relative",children:[z.jsxs("div",{className:"",children:[z.jsx("div",{className:"inline-flex items-center rounded-full border border-[#c8713b]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#7a3f20] shadow-sm backdrop-blur",children:"Open to work - Singapore"}),z.jsx(h1,{}),z.jsx("h1",{className:"mt-8 max-w-4xl text-[clamp(3rem,7vw,5rem)] font-black leading-[0.95] tracking-normal md:max-w-[58%]",children:"I build games, websites, and whatever's interesting."}),z.jsx("p",{className:"mt-6 max-w-2xl text-lg leading-8 text-zinc-700 md:max-w-[52%]",children:"TensaiStudio is the portfolio of a Singapore-based full stack developer making playful web experiences, polished interfaces, and small games with memorable interactions."}),z.jsx("div",{className:"mt-8 flex flex-wrap gap-3",children:z.jsxs("a",{href:"/projects",className:"inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:["View projects ",z.jsx(WT,{className:"h-4 w-4"})]})})]}),z.jsx("div",{className:"pointer-events-none absolute top-0 left-0 z-[-40] w-[100%] aspect-square",children:z.jsx(f3,{})})]})}),z.jsx("section",{className:"bg-[#c8713b] px-6 py-20 text-white",children:z.jsx("div",{className:"mx-auto grid max-w-6xl gap-6 md:grid-cols-3",children:[{icon:KT,title:"Web apps",copy:"Responsive React experiences with clean flows, fast feedback, and UI that feels good to use."},{icon:e1,title:"Game prototypes",copy:"Small playable ideas, systems experiments, and interactive builds shaped around feel first."},{icon:c1,title:"Creative tools",copy:"Odd little utilities, visual experiments, and digital toys for learning by making."}].map(({icon:t,title:e,copy:n})=>z.jsxs("article",{className:"rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur",children:[z.jsx(t,{className:"h-7 w-7"}),z.jsx("h2",{className:"mt-5 text-2xl font-bold",children:e}),z.jsx("p",{className:"mt-3 leading-7 text-white/85",children:n})]},e))})}),z.jsx("section",{className:"bg-[#f5f1ed] px-6 py-20 text-zinc-900",children:z.jsxs("div",{className:"mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]",children:"Current focus"}),z.jsx("h2",{className:"mt-3 text-4xl font-black",children:"Building sharper every release."})]}),z.jsx("p",{className:"text-lg leading-8 text-zinc-700",children:"I like projects where engineering and taste meet: a page that loads cleanly, an interaction with the right timing, a mechanic that clicks, or a tool that makes a messy task easier. The work here is growing in public, one shipped thing at a time."})]})})]}),h3=()=>z.jsx(z.Fragment,{children:z.jsx("section",{className:"min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900",children:z.jsxs("div",{className:"mx-auto max-w-6xl",children:[z.jsxs("div",{className:"max-w-3xl",children:[z.jsxs("p",{className:"inline-flex items-center gap-2 rounded-full bg-[#c8713b]/15 px-4 py-2 text-sm font-semibold text-[#8a471f]",children:[z.jsx(r1,{className:"h-4 w-4"}),"Singapore"]}),z.jsx("h1",{className:"mt-8 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none",children:"A developer with a builder's curiosity."}),z.jsx("p",{className:"mt-6 text-lg leading-8 text-zinc-700",children:"I make web apps, games, and experiments under TensaiStudio. My work sits somewhere between practical software and playful interaction: useful enough to ship, expressive enough to remember."})]}),z.jsx("div",{className:"mt-16 grid gap-6 md:grid-cols-3",children:[{icon:YT,title:"Full stack foundations",copy:"React, JavaScript, APIs, routing, state, data, and the practical pieces that turn an idea into a working product."},{icon:n1,title:"Interface craft",copy:"Layouts, motion, visual hierarchy, and small details that make a site feel intentional instead of assembled."},{icon:l1,title:"Game-minded thinking",copy:"Rapid prototyping, feedback loops, readable systems, and an instinct for making interactions feel responsive."}].map(({icon:t,title:e,copy:n})=>z.jsxs("article",{className:"rounded-lg bg-white p-6 shadow-sm",children:[z.jsx(t,{className:"h-7 w-7 text-[#c8713b]"}),z.jsx("h2",{className:"mt-5 text-xl font-bold",children:e}),z.jsx("p",{className:"mt-3 leading-7 text-zinc-600",children:n})]},e))}),z.jsxs("div",{className:"mt-16 grid gap-10 rounded-lg bg-zinc-950 p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b860]",children:"How I work"}),z.jsx("h2",{className:"mt-3 text-3xl font-black",children:"Prototype, polish, ship, learn."})]}),z.jsxs("div",{className:"space-y-5 text-white/80",children:[z.jsx("p",{children:"I start by getting the core loop working: the main user flow, the most important interaction, or the mechanic that has to feel right."}),z.jsx("p",{children:"From there, I tighten the product with clearer structure, stronger visuals, better performance, and the kind of finishing touches that make people trust what they are using."})]})]})]})})});var Sy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K0=ns.createContext&&ns.createContext(Sy),p3=["attr","size","title"];function m3(t,e){if(t==null)return{};var n,i,r=g3(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function g3(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vu.apply(null,arguments)}function Z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Hu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z0(Object(n),!0).forEach(function(i){_3(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function _3(t,e,n){return(e=v3(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v3(t){var e=x3(t,"string");return typeof e=="symbol"?e:e+""}function x3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function My(t){return t&&t.map((e,n)=>ns.createElement(e.tag,Hu({key:n},e.attr),My(e.child)))}function Ey(t){return e=>ns.createElement(y3,Vu({attr:Hu({},t.attr)},e),My(t.child))}function y3(t){var e=n=>{var{attr:i,size:r,title:s}=t,a=m3(t,p3),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),ns.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Hu(Hu({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&ns.createElement("title",null,s),t.children)};return K0!==void 0?ns.createElement(K0.Consumer,null,n=>e(n)):e(Sy)}function S3(t){return Ey({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"},child:[]}]})(t)}function Ty(t){return Ey({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}const M3=[{id:13,type:"web",title:"Blockfolio",sub:"React.js",desc:"This project is a simple blockfolio that can quickly track your crypto possessions in USD or SGD equivalent. Can import and export. Using localcache for data storage.",tags:["javascript","react.js","localcache"],complexity:"high",thumbnail:"/thumbnails/blockfolio.jpg",url:"https://tensaix2j.github.io/blockfolio/"},{id:12,type:"web",title:"Chinese Calendar 农历",sub:"React.js",desc:"This project is a Chinese Calendar that can quickly show 四柱， 节气， 天干地支 without having to wait several seconds for ads like most Chinese Calendar apps in the wild.",tags:["javascript","react.js","localcache"],complexity:"high",thumbnail:"/thumbnails/nongli.jpg",url:"https://tensaix2j.github.io/nongli/"},{id:11,type:"web",title:"Personal Tradingview",sub:"React.js",desc:"This project is created to save $240 per year from tradingview.com simply because i need to have more than 50 tickers on my watchlist without paying. It uses localcache for the watchlist. Tickers data composed of data from Binance, MEXC, finnhub and CMC.",tags:["javascript","react.js","localcache"],complexity:"high",thumbnail:"/thumbnails/tradingview.jpg",url:"https://tensaix2j.github.io/tradingview"},{id:9,type:"web",title:"TensaiGrocer",sub:"Next.js · MongoDB · TailwindCSS",desc:"A website I made with Next.js and MongoDb hosted on Vercel. It features catalogues of over 22,000 items scraped from local groceries store websites. The database is indexed for search optimization. The catalogues are incrementally loaded for each category of items. Dark and Light Visual Theme modes are also implemented along with Responsive design NavBar and Sidebar. It was created as an exercise to use Next.js, MongoDB, TailwindCSS, JWT.",tags:["next.js","react.js","tailwindcss"],complexity:"high",thumbnail:"/thumbnails/tensaigrocer.jpg",url:"https://tensaigrocer.vercel.app"},{id:10,type:"web",title:"FindPathSG",sub:"React.js · Mapbox.js",desc:"This project I created as an experiment to implement the A* pathfinding algorithm to Singapore’s bus network. It calculates paths between a selected start and end point. It also provides information on which buses # to transfer between along the route.",tags:["javascript","react.js","tailwindcss","mapbox","geojson"],complexity:"high",thumbnail:"/thumbnails/findpathsg.jpg",url:"https://tensaix2j.github.io/findpathsg"},{id:1,type:"game",title:"Puzzle Lab",sub:"Phaser.js · Three.js · HTML5",desc:"This is a game I created using Three.js and Javascript. The game is about exploring a museum-like space in first person, where every exhibit is a puzzle waiting to be solved. Featuring 22 handcrafted challenges, the collection spans a variety of classic and original designs. Wander the halls, interact with each installation, and uncover solutions at your own pace in a calm, gallery-inspired setting.",tags:["threejs","3d","puzzle","first-person","javascript"],complexity:"high",thumbnail:"/thumbnails/puzzle_lab.jpg",url:"https://tensaix2j.github.io/puzzle_lab"},{id:2,type:"game",title:"Crystal Maze",sub:"Phaser.js · Three.js · HTML5",desc:"This is another complex games I created using Three.js and Javascript. It is a retro puzzle adventure based on an old Windows game, Chip Challenge. Players have to navigate vibrant grid mazes to collect crystals. Solve clever challenges with keys, switches, and strategy while avoiding traps and hazards. Perfect for fans of logic and nostalgic fun. There are 36 levels in total.",tags:["threejs","3d","puzzle","tiled","javascript"],complexity:"high",thumbnail:"/thumbnails/crystal_maze.jpg",url:"https://tensaix2j.github.io/crystal_maze"},{id:3,type:"game",title:"Doge Warrior",sub:"Phaser.js · Tiled · HTML5",desc:"This is a game I created using Phaser.js. Doge Warrior is a platformer where you control a powerful doge exploring a trap-filled, mysterious labyrinth. It combines action and puzzles, letting you shoot Dogecoin to defeat enemies and solve challenges. As you progress, you unlock upgrades and face tougher obstacles that test your skill and strategy.",tags:["platformer","action","puzzle","javascript"],complexity:"high",thumbnail:"/thumbnails/doge_warrior.jpg",url:"https://tensaix2j.github.io/dogewarrior"},{id:4,type:"game",title:"Horseh Jump",sub:"Phaser.js · Three.js · HTML5",desc:"This is another mini game I created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Hold to charge, release to leap. Guide the bespectacled horse scientist across precarious floating platforms over a breathtaking mountain chasm. Time your jumps perfectly to avoid the deadly drop, with endless thrills awaiting every run.",tags:["three.js","3d","javascript","phaser.js"],complexity:"low",thumbnail:"/thumbnails/horseh_jump.jpg",url:"https://tensaix2j.itch.io/horseh_jump"},{id:5,type:"game",title:"Horseh Run",sub:"Phaser.js · Three.js · HTML5",desc:"This is also another mini game I created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Race through a fast-paced obstacle course where your character runs nonstop and you must quickly jump or dodge incoming obstacles. As the speed increases over time, sharp reflexes and precise timing determine how long you can survive.",tags:["three.js","3d","javascript","phaser.js"],complexity:"low",thumbnail:"/thumbnails/horseh_run.jpg",url:"https://tensaix2j.itch.io/horseh_run"},{id:6,type:"game",title:"Roblox Crystal Maze",sub:"Roblox · Lua",desc:"This is my attempt to create Crystal Maze in Roblox Game Engine using the Lua scripting language.",tags:["roblox","lua"],complexity:"low",thumbnail:"/thumbnails/roblox_crystal_maze.jpg",url:"https://www.roblox.com/games/93128275517682/Crystal-Maze"},{id:7,type:"game",title:"Pico-8 Tiny Games",sub:"Pico-8 · Lua",desc:"PICO-8 is a fantasy console that has only 16 colors and 128x128 pixels and runs the Lua scripting language. Here are some of the games I created on Pico-8, published on the Lexaloffle BBS.",tags:["pico-8","lua"],complexity:"low",thumbnail:"/thumbnails/pico_8_games.jpg",url:[["Lucky Stack","https://www.lexaloffle.com/bbs/?tid=156436"],["Lucky Jump","https://www.lexaloffle.com/bbs/?tid=156424"],["Trap The Cat","https://www.lexaloffle.com/bbs/?tid=156402"]]},{id:8,type:"web",title:"TensaiStudio Portfolio",sub:"React.js · TailwindCSS",desc:"This is a React.js website I semi vibe-coded to showcase a portfolio of all games and websites created by me. The project was initially hand-coded for some basic ReactJS web structures before being fully vibe coded using Codex to fill up the flesh of the site.",tags:["typescript","react.js","tailwindcss","github pages"],complexity:"low",thumbnail:"/thumbnails/tensaistudio.jpg",url:"https://tensaix2j.github.io"},{id:20,type:"Game",title:"Telegram Minigames",sub:"Telegram Bot API · Phaser.js",desc:"I made over 40 telegram minigames using Phaser.js on comissioned work for a company known as LuckyMiuuu games. ",tags:["javascript","phaser.js","three.js","telegram"],complexity:"low",thumbnail:"/thumbnails/luckymiuuu_games.jpg",url:[["Lucky Angler","https,//molecule-dev.muaverse.build/muaton/public/games/angler/output/"],["Lucky Blast","https,//molecule-dev.muaverse.build/muaton/public/games/blast/output/"],["Lucky Bomber","https,//molecule-dev.muaverse.build/muaton/public/games/bomber/output/"],["Lucky Pile","https,//molecule-dev.muaverse.build/muaton/public/games/boxstaking/output/"],["Lucky Bubble","https,//molecule-dev.muaverse.build/muaton/public/games/bubble/output/"],["Lucky Trump","https,//molecule-dev.muaverse.build/muaton/public/games/bulletdodger/output/"],["Lucky Catcher","https,//molecule-dev.muaverse.build/muaton/public/games/catcher/output/"],["Lucky Climber","https,//molecule-dev.muaverse.build/muaton/public/games/climber/output/"],["Lucky Coin","https,//molecule-dev.muaverse.build/muaton/public/games/coin/output/"],["Lucky Combine","https,//molecule-dev.muaverse.build/muaton/public/games/combine/output/"],["Lucky Crosser","https,//molecule-dev.muaverse.build/muaton/public/games/crossy/output/"],["Lucky Cutter","https,//molecule-dev.muaverse.build/muaton/public/games/cutter/output/"],["Lucky Drop","https,//molecule-dev.muaverse.build/muaton/public/games/drop/output/"],["Lucky Fighter","https,//molecule-dev.muaverse.build/muaton/public/games/fighter/output/"],["Lucky Fish","https,//molecule-dev.muaverse.build/muaton/public/games/fish/output/"],["Lucky Flap","https,//molecule-dev.muaverse.build/muaton/public/games/flappy/output/"],["Gaia Shooter","https,//molecule-dev.muaverse.build/muaton/public/games/gaia_shooter/output/"],["Lucky Jump","https,//molecule-dev.muaverse.build/muaton/public/games/just-jump/output/"],["Lucky Kisser","https,//molecule-dev.muaverse.build/muaton/public/games/kisser/output/"],["Lucky Lumberjack","https,//molecule-dev.muaverse.build/muaton/public/games/lumberjack/output/"],["Lucky Match","https,//molecule-dev.muaverse.build/muaton/public/games/match/output/"],["Lucky Pacman","https,//molecule-dev.muaverse.build/muaton/public/games/pacman/output/"],["Lucky Tap","https,//molecule-dev.muaverse.build/muaton/public/games/pianokey/output/"],["Lucky Pinball","https,//molecule-dev.muaverse.build/muaton/public/games/pinball/output/"],["Lucky Platformer","https,//molecule-dev.muaverse.build/muaton/public/games/platformer/output/"],["Lucky Plumber","https,//molecule-dev.muaverse.build/muaton/public/games/plumber/output/"],["Lucky Racer","https,//molecule-dev.muaverse.build/muaton/public/games/racer/output/"],["Lucky Runner","https,//molecule-dev.muaverse.build/muaton/public/games/runner/output/"],["Lucky Shooter","https,//molecule-dev.muaverse.build/muaton/public/games/shooter/output/"],["Lucky Sketch","https,//molecule-dev.muaverse.build/muaton/public/games/sketch/output/"],["Lucky Slicer","https,//molecule-dev.muaverse.build/muaton/public/games/slicer/output/"],["Lucky Slide","https,//molecule-dev.muaverse.build/muaton/public/games/slide/output/"],["Lucky Eater","https,//molecule-dev.muaverse.build/muaton/public/games/snake/output/"],["Lucky Split","https,//molecule-dev.muaverse.build/muaton/public/games/split/output/"],["Lucky Step","https,//molecule-dev.muaverse.build/muaton/public/games/step/output/"],["Lucky Tetris","https,//molecule-dev.muaverse.build/muaton/public/games/tetris/output/"],["Lucky Throw","https,//molecule-dev.muaverse.build/muaton/public/games/throw/output/"],["Lucky Towerstacker","https,//molecule-dev.muaverse.build/muaton/public/games/towerstacker/output/"],["Trap The Cat","https,//molecule-dev.muaverse.build/muaton/public/games/trapthecat/output/"],["Lucky Defense","https,//molecule-dev.muaverse.build/muaton/public/games/turretdefense/output/"],["Lucky Rise","https,//molecule-dev.muaverse.build/muaton/public/games/up/output/"],["Lucky Walk","https,//molecule-dev.muaverse.build/muaton/public/games/walk/output/"]]}],E3=t=>t==null?void 0:t.replace("https,//","https://"),If=t=>{var e;return Array.isArray(t.url)?t.url.map(([n,i])=>({label:n,url:E3(i)})):(e=t.url)!=null&&e.startsWith("http")?[{label:"Visit live site",url:t.url}]:[]},T3=()=>{const[t,e]=j.useState(null);return j.useEffect(()=>{if(!t)return;const n=i=>{i.key==="Escape"&&e(null)};return document.body.style.overflow="hidden",window.addEventListener("keydown",n),()=>{document.body.style.overflow="",window.removeEventListener("keydown",n)}},[t]),z.jsxs(z.Fragment,{children:[z.jsx("section",{id:"top",className:"min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900",children:z.jsxs("div",{className:"mx-auto max-w-6xl",children:[z.jsxs("div",{className:"flex flex-col gap-6 md:flex-row md:items-end md:justify-between",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]",children:"Selected work"}),z.jsx("h1",{className:"mt-3 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none",children:"My Web and Game projects."}),z.jsx("p",{className:"mt-5 max-w-2xl text-lg leading-8 text-zinc-700",children:"A growing portfolio of my web designs, experiments, algorithms, 3D web games, platformers, puzzle games, Roblox builds, Telegram Minigames, Pico-8 releases, and the portfolio site that brings them together."})]}),z.jsxs("a",{href:"https://github.com/tensaix2j",className:"inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:[z.jsx(Ty,{className:"h-4 w-4"}),"GitHub"]})]}),z.jsx("div",{className:"mt-14 grid gap-6 lg:grid-cols-2",children:M3.map(n=>z.jsxs("button",{type:"button",onClick:()=>e(n),className:"group overflow-hidden rounded-lg bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#c8713b] focus:ring-offset-4 focus:ring-offset-[#f5f1ed]",children:[z.jsx("div",{className:"aspect-[16/9] overflow-hidden bg-zinc-200",children:z.jsx("img",{src:n.thumbnail,alt:`${n.title} thumbnail`,className:"h-full w-full object-cover transition duration-500 group-hover:scale-105",loading:"lazy"})}),z.jsxs("div",{className:"p-6",children:[z.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[z.jsx("div",{className:"flex flex-wrap gap-2",children:z.jsx("span",{className:"rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:n.type})}),z.jsx(XT,{className:"h-5 w-5 text-zinc-400 transition group-hover:text-[#c8713b]"})]}),z.jsx("h2",{className:"mt-5 text-2xl font-black",children:n.title}),z.jsx("p",{className:"mt-2 text-sm font-semibold text-[#8a471f]",children:n.sub}),z.jsx("p",{className:"mt-4 line-clamp-3 leading-7 text-zinc-600",children:n.desc}),z.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.tags.map(i=>z.jsx("span",{className:"rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600",children:i},i))})]})]},n.id))})]})}),t&&z.jsx("div",{className:"fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm",role:"dialog","aria-modal":"true","aria-labelledby":"project-modal-title",onClick:()=>e(null),children:z.jsxs("div",{className:"max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#f5f1ed] text-zinc-900 shadow-2xl",onClick:n=>n.stopPropagation(),children:[z.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-zinc-200",children:[z.jsx("img",{src:t.thumbnail,alt:`${t.title} thumbnail`,className:"h-full w-full object-cover"}),z.jsx("button",{type:"button",onClick:()=>e(null),className:"absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#c8713b] focus:outline-none focus:ring-2 focus:ring-white","aria-label":"Close project details",children:z.jsx(d1,{className:"h-5 w-5"})})]}),z.jsxs("div",{className:"p-6 md:p-8",children:[z.jsx("div",{className:"flex flex-wrap gap-2",children:z.jsx("span",{className:"rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:t.type})}),z.jsx("h2",{id:"project-modal-title",className:"mt-5 text-[clamp(2rem,6vw,4rem)] font-black leading-none",children:t.title}),z.jsx("p",{className:"mt-3 text-sm font-semibold text-[#8a471f]",children:t.sub}),z.jsx("p",{className:"mt-6 text-lg leading-8 text-zinc-700",children:t.desc}),z.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:t.tags.map(n=>z.jsx("span",{className:"rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700",children:n},n))}),z.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3",children:[If(t).length>0?z.jsxs("div",{className:"w-full",children:[If(t).length>1&&z.jsx("h3",{className:"mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:"Playable links"}),z.jsx("div",{className:"grid max-h-64 gap-3 overflow-y-auto pr-1 sm:grid-cols-2",children:If(t).map(n=>z.jsxs("a",{href:n.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-between gap-3 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:[z.jsx("span",{children:n.label}),z.jsx(JT,{className:"h-4 w-4 shrink-0"})]},n.url))})]}):z.jsx("span",{className:"rounded-full border border-[#c8713b]/30 bg-[#fff8f1] px-5 py-3 text-sm font-semibold text-[#8a471f]",children:"Live site coming soon"}),z.jsx("button",{type:"button",onClick:()=>e(null),className:"rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#c8713b] hover:text-[#c8713b]",children:"Close"})]})]})]})})]})},w3=()=>z.jsx("section",{className:"h-screen flex-col flex",children:z.jsx("div",{className:"flex-1 flex items-center justify-center text-2xl",children:"The requested resource is Not Found."})}),b3=()=>{const[t,e]=j.useState(!1),[n,i]=j.useState(!1),r=Ci(),s=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"}],a=j.useRef([]),[o,l]=j.useState({});return j.useEffect(()=>{const u=()=>{const c=window.scrollY,f=window.innerHeight*.2;i(c>f)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),j.useEffect(()=>{const u=s.findIndex(f=>f.path===r.pathname),c=a.current[u];c&&l({transform:`translateX(${c.offsetLeft}px)`,width:`${c.offsetWidth}px`})},[r.pathname]),z.jsxs("nav",{className:`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[90%] max-w-2xl bg-[#f5f1ed]/10 backdrop-blur-md rounded-[2rem] px-4 py-2.5 text-black
      transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]
      ${n?"-translate-y-24 opacity-0":"translate-y-0 opacity-100"}`,children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("img",{src:"/logo512.png",alt:"TensaiStudio logo",className:"h-8 w-8 object-contain translate-x-[4px] translate-y-[-2px]"}),z.jsx("span",{className:"text-[1.1rem] font-bold",children:"TensaiStudio"})]}),z.jsxs("div",{className:"relative hidden md:flex",children:[z.jsx("div",{className:"absolute top-0 bottom-0 bg-orange-400/20 rounded-full transition-all duration-300 ease-out",style:o}),s.map((u,c)=>z.jsx(Cd,{to:u.path,ref:f=>a.current[c]=f,className:({isActive:f})=>`relative z-10 px-4 py-2 rounded-full transition whitespace-nowrap ${f?"text-black":"text-[#c8713b] hover:text-black"}`,children:u.name},u.path))]}),z.jsx("button",{className:"md:hidden text-2xl",onClick:()=>e(!t),children:"☰"})]}),t&&z.jsx("div",{className:"md:hidden mt-4 flex flex-col gap-2",children:s.map(u=>z.jsx(Cd,{to:u.path,onClick:()=>e(!1),className:({isActive:c})=>`px-4 py-2 rounded-full transition ${c?"bg-orange-400/20 text-black":"text-[#c8713b] hover:text-black"}`,children:u.name},u.path))})]})};function A3(){return z.jsxs("footer",{className:"w-full border-t border-gray-200 bg-white text-gray-600",children:[z.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"TensaiStudio"}),z.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Full stack web and game dev based in Singapore."})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Navigate"}),z.jsxs("ul",{className:"space-y-2 text-sm",children:[z.jsx("li",{children:z.jsx("a",{href:"/",className:"hover:text-gray-900 transition",children:"Home"})}),z.jsx("li",{children:z.jsx("a",{href:"/about",className:"hover:text-gray-900 transition",children:"About"})}),z.jsx("li",{children:z.jsx("a",{href:"/projects",className:"hover:text-gray-900 transition",children:"Projects"})})]})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Connect"}),z.jsxs("ul",{className:"space-y-2 text-sm",children:[z.jsx("li",{children:z.jsxs("a",{href:"https://github.com/tensaix2j",className:"hover:text-gray-900 transition",children:[z.jsx(Ty,{className:"w-4 h-4 inline translate-y-[-2px]"}),z.jsx("span",{className:"mx-2",children:"Github"})]})}),z.jsx("li",{className:"flex",children:z.jsxs("a",{href:"https://tensaix2j.itch.io",className:"hover:text-gray-900 transition",children:[z.jsx(S3,{className:"w-4 h-4  inline translate-y-[-2px] "}),z.jsx("span",{className:"mx-2",children:"ItchIo"})]})})]})]})]}),z.jsx("div",{className:"border-t border-gray-200",children:z.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-gray-500",children:[z.jsxs("p",{children:["© ",new Date().getFullYear()," TensaiStudio"]}),z.jsx("p",{className:"whitespace-nowrap",children:"Built with React"})]})})]})}const R3="https://myvercel-puce.vercel.app/api/insert_visitor",C3="1",P3="20261001",L3=()=>{const t=window.localStorage.getItem("playerId");if(t)return t;const e=crypto.randomUUID();return window.localStorage.setItem("playerId",e),e},N3=async()=>{const t={useraddr:L3(),username:`visitor.${C3}.${window.location.host}`,scene_id:P3};try{const e=await fetch(R3,{headers:{"content-type":"application/json"},body:JSON.stringify(t),method:"POST"});if(!e.ok)throw new Error(`Visitor request failed with status ${e.status}`);console.log("Sent visitor request successfully",await e.text())}catch(e){console.error("Unable to send visitor request",e)}};function I3(){return j.useEffect(()=>{N3()},[]),z.jsxs(z.Fragment,{children:[z.jsx(b3,{}),z.jsxs(rT,{children:[z.jsx(Za,{path:"/",element:z.jsx(d3,{})}),z.jsx(Za,{path:"/about",element:z.jsx(h3,{})}),z.jsx(Za,{path:"/projects",element:z.jsx(T3,{})}),z.jsx(Za,{path:"*",element:z.jsx(w3,{})})]}),z.jsx(A3,{})]})}Df.createRoot(document.getElementById("root")).render(z.jsx(RT,{children:z.jsx(I3,{})}));
