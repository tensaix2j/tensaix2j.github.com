(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Iy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var J0={exports:{}},Wu={},Q0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),Dy=Symbol.for("react.portal"),Uy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),By=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Hy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),um=Symbol.iterator;function Wy(n){return n===null||typeof n!="object"?null:(n=um&&n[um]||n["@@iterator"],typeof n=="function"?n:null)}var e_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t_=Object.assign,n_={};function _a(n,e,t){this.props=n,this.context=e,this.refs=n_,this.updater=t||e_}_a.prototype.isReactComponent={};_a.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};_a.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function i_(){}i_.prototype=_a.prototype;function bh(n,e,t){this.props=n,this.context=e,this.refs=n_,this.updater=t||e_}var Ah=bh.prototype=new i_;Ah.constructor=bh;t_(Ah,_a.prototype);Ah.isPureReactComponent=!0;var cm=Array.isArray,r_=Object.prototype.hasOwnProperty,Rh={current:null},s_={key:!0,ref:!0,__self:!0,__source:!0};function a_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)r_.call(e,i)&&!s_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ko,type:n,key:s,ref:a,props:r,_owner:Rh.current}}function jy(n,e){return{$$typeof:ko,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ch(n){return typeof n=="object"&&n!==null&&n.$$typeof===ko}function Xy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var fm=/\/+/g;function _c(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Xy(""+n.key):e.toString(36)}function Vl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case ko:case Dy:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+_c(a,0):i,cm(r)?(t="",n!=null&&(t=n.replace(fm,"$&/")+"/"),Vl(r,e,t,"",function(u){return u})):r!=null&&(Ch(r)&&(r=jy(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fm,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",cm(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+_c(s,o);a+=Vl(s,e,t,l,r)}else if(l=Wy(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+_c(s,o++),a+=Vl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ko(n,e,t){if(n==null)return n;var i=[],r=0;return Vl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function $y(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},Hl={transition:null},Yy={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Rh};function o_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Ko,forEach:function(n,e,t){Ko(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ko(n,function(){e++}),e},toArray:function(n){return Ko(n,function(e){return e})||[]},only:function(n){if(!Ch(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=_a;Ye.Fragment=Uy;Ye.Profiler=Oy;Ye.PureComponent=bh;Ye.StrictMode=Fy;Ye.Suspense=Vy;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yy;Ye.act=o_;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=t_({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Rh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)r_.call(e,l)&&!s_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ko,type:n.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(n){return n={$$typeof:By,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ky,_context:n},n.Consumer=n};Ye.createElement=a_;Ye.createFactory=function(n){var e=a_.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:zy,render:n}};Ye.isValidElement=Ch;Ye.lazy=function(n){return{$$typeof:Gy,_payload:{_status:-1,_result:n},_init:$y}};Ye.memo=function(n,e){return{$$typeof:Hy,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=Hl.transition;Hl.transition={};try{n()}finally{Hl.transition=e}};Ye.unstable_act=o_;Ye.useCallback=function(n,e){return dn.current.useCallback(n,e)};Ye.useContext=function(n){return dn.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return dn.current.useEffect(n,e)};Ye.useId=function(){return dn.current.useId()};Ye.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return dn.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};Ye.useRef=function(n){return dn.current.useRef(n)};Ye.useState=function(n){return dn.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return dn.current.useTransition()};Ye.version="18.3.1";Q0.exports=Ye;var j=Q0.exports;const ns=Iy(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=j,qy=Symbol.for("react.element"),Zy=Symbol.for("react.fragment"),Jy=Object.prototype.hasOwnProperty,Qy=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eS={key:!0,ref:!0,__self:!0,__source:!0};function l_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Jy.call(e,i)&&!eS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qy,type:n,key:s,ref:a,props:r,_owner:Qy.current}}Wu.Fragment=Zy;Wu.jsx=l_;Wu.jsxs=l_;J0.exports=Wu;var z=J0.exports,Df={},u_={exports:{}},Ln={},c_={exports:{}},f_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(k,$){var ee=k.length;k.push($);e:for(;0<ee;){var oe=ee-1>>>1,he=k[oe];if(0<r(he,$))k[oe]=$,k[ee]=he,ee=oe;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var $=k[0],ee=k.pop();if(ee!==$){k[0]=ee;e:for(var oe=0,he=k.length,Ge=he>>>1;oe<Ge;){var Ke=2*(oe+1)-1,Ne=k[Ke],Z=Ke+1,de=k[Z];if(0>r(Ne,ee))Z<he&&0>r(de,Ne)?(k[oe]=de,k[Z]=ee,oe=Z):(k[oe]=Ne,k[Ke]=ee,oe=Ke);else if(Z<he&&0>r(de,ee))k[oe]=de,k[Z]=ee,oe=Z;else break e}}return $}function r(k,$){var ee=k.sortIndex-$.sortIndex;return ee!==0?ee:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=k)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function S(k){if(x=!1,v(k),!_)if(t(l)!==null)_=!0,W(b);else{var $=t(u);$!==null&&B(S,$.startTime-k)}}function b(k,$){_=!1,x&&(x=!1,h(y),y=-1),p=!0;var ee=d;try{for(v($),f=t(l);f!==null&&(!(f.expirationTime>$)||k&&!C());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var he=oe(f.expirationTime<=$);$=n.unstable_now(),typeof he=="function"?f.callback=he:f===t(l)&&i(l),v($)}else i(l);f=t(l)}if(f!==null)var Ge=!0;else{var Ke=t(u);Ke!==null&&B(S,Ke.startTime-$),Ge=!1}return Ge}finally{f=null,d=ee,p=!1}}var T=!1,A=null,y=-1,R=5,P=-1;function C(){return!(n.unstable_now()-P<R)}function O(){if(A!==null){var k=n.unstable_now();P=k;var $=!0;try{$=A(!0,k)}finally{$?X():(T=!1,A=null)}}else T=!1}var X;if(typeof g=="function")X=function(){g(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,N=q.port2;q.port1.onmessage=O,X=function(){N.postMessage(null)}}else X=function(){m(O,0)};function W(k){A=k,T||(T=!0,X())}function B(k,$){y=m(function(){k(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,W(b))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(k){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var ee=d;d=$;try{return k()}finally{d=ee}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=d;d=k;try{return $()}finally{d=ee}},n.unstable_scheduleCallback=function(k,$,ee){var oe=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?oe+ee:oe):ee=oe,k){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,k={id:c++,callback:$,priorityLevel:k,startTime:ee,expirationTime:he,sortIndex:-1},ee>oe?(k.sortIndex=ee,e(u,k),t(l)===null&&k===t(u)&&(x?(h(y),y=-1):x=!0,B(S,ee-oe))):(k.sortIndex=he,e(l,k),_||p||(_=!0,W(b))),k},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(k){var $=d;return function(){var ee=d;d=$;try{return k.apply(this,arguments)}finally{d=ee}}}})(f_);c_.exports=f_;var tS=c_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=j,Rn=tS;function ie(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d_=new Set,po={};function ds(n,e){ta(n,e),ta(n+"Capture",e)}function ta(n,e){for(po[n]=e,n=0;n<e.length;n++)d_.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,iS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dm={},hm={};function rS(n){return Uf.call(hm,n)?!0:Uf.call(dm,n)?!1:iS.test(n)?hm[n]=!0:(dm[n]=!0,!1)}function sS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function aS(n,e,t,i){if(e===null||typeof e>"u"||sS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Zt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Zt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Zt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Zt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Zt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Zt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Zt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Zt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Zt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Lh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Ph,Lh);Zt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Zt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Zt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Nh(n,e,t,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aS(e,t,r,i)&&(t=null),i||r===null?rS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Us=Symbol.for("react.fragment"),Ih=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),h_=Symbol.for("react.provider"),p_=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),m_=Symbol.for("react.offscreen"),pm=Symbol.iterator;function Aa(n){return n===null||typeof n!="object"?null:(n=pm&&n[pm]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,vc;function $a(n){if(vc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+n}var xc=!1;function yc(n,e){if(!n||xc)return"";xc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{xc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$a(n):""}function oS(n){switch(n.tag){case 5:return $a(n.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return n=yc(n.type,!1),n;case 11:return n=yc(n.type.render,!1),n;case 1:return n=yc(n.type,!0),n;default:return""}}function Bf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Us:return"Fragment";case Ds:return"Portal";case Ff:return"Profiler";case Ih:return"StrictMode";case Of:return"Suspense";case kf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case p_:return(n.displayName||"Context")+".Consumer";case h_:return(n._context.displayName||"Context")+".Provider";case Dh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Uh:return e=n.displayName||null,e!==null?e:Bf(n.type)||"Memo";case _r:e=n._payload,n=n._init;try{return Bf(n(e))}catch{}}return null}function lS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===Ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function g_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(n){var e=g_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Zo(n){n._valueTracker||(n._valueTracker=uS(n))}function __(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=g_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function lu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zf(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function mm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function v_(n,e){e=e.checked,e!=null&&Nh(n,"checked",e,!1)}function Vf(n,e){v_(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Hf(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function gm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Hf(n,e,t){(e!=="number"||lu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ya=Array.isArray;function Xs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Gf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _m(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ie(92));if(Ya(t)){if(1<t.length)throw Error(ie(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function x_(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function vm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function y_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?y_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Jo,S_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function mo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(n){cS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),to[e]=to[n]})});function M_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||to.hasOwnProperty(n)&&to[n]?(""+e).trim():e+"px"}function E_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=M_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var fS=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jf(n,e){if(e){if(fS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Xf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function Fh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yf=null,$s=null,Ys=null;function xm(n){if(n=Vo(n)){if(typeof Yf!="function")throw Error(ie(280));var e=n.stateNode;e&&(e=Ku(e),Yf(n.stateNode,n.type,e))}}function T_(n){$s?Ys?Ys.push(n):Ys=[n]:$s=n}function w_(){if($s){var n=$s,e=Ys;if(Ys=$s=null,xm(n),e)for(n=0;n<e.length;n++)xm(e[n])}}function b_(n,e){return n(e)}function A_(){}var Sc=!1;function R_(n,e,t){if(Sc)return n(e,t);Sc=!0;try{return b_(n,e,t)}finally{Sc=!1,($s!==null||Ys!==null)&&(A_(),w_())}}function go(n,e){var t=n.stateNode;if(t===null)return null;var i=Ku(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ie(231,e,typeof t));return t}var Kf=!1;if(Yi)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{Kf=!1}function dS(n,e,t,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var no=!1,uu=null,cu=!1,qf=null,hS={onError:function(n){no=!0,uu=n}};function pS(n,e,t,i,r,s,a,o,l){no=!1,uu=null,dS.apply(hS,arguments)}function mS(n,e,t,i,r,s,a,o,l){if(pS.apply(this,arguments),no){if(no){var u=uu;no=!1,uu=null}else throw Error(ie(198));cu||(cu=!0,qf=u)}}function hs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function C_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ym(n){if(hs(n)!==n)throw Error(ie(188))}function gS(n){var e=n.alternate;if(!e){if(e=hs(n),e===null)throw Error(ie(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ym(r),n;if(s===i)return ym(r),e;s=s.sibling}throw Error(ie(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(t.alternate!==i)throw Error(ie(190))}if(t.tag!==3)throw Error(ie(188));return t.stateNode.current===t?n:e}function P_(n){return n=gS(n),n!==null?L_(n):null}function L_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=L_(n);if(e!==null)return e;n=n.sibling}return null}var N_=Rn.unstable_scheduleCallback,Sm=Rn.unstable_cancelCallback,_S=Rn.unstable_shouldYield,vS=Rn.unstable_requestPaint,Nt=Rn.unstable_now,xS=Rn.unstable_getCurrentPriorityLevel,Oh=Rn.unstable_ImmediatePriority,I_=Rn.unstable_UserBlockingPriority,fu=Rn.unstable_NormalPriority,yS=Rn.unstable_LowPriority,D_=Rn.unstable_IdlePriority,ju=null,Si=null;function SS(n){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(ju,n,void 0,(n.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:TS,MS=Math.log,ES=Math.LN2;function TS(n){return n>>>=0,n===0?32:31-(MS(n)/ES|0)|0}var Qo=64,el=4194304;function Ka(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function du(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=Ka(o):(s&=a,s!==0&&(i=Ka(s)))}else a=t&~r,a!==0?i=Ka(a):s!==0&&(i=Ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ni(e),r=1<<t,i|=n[t],e&=~r;return i}function wS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=wS(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Zf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function U_(){var n=Qo;return Qo<<=1,!(Qo&4194240)&&(Qo=64),n}function Mc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Bo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ni(e),n[e]=t}function AS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ni(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function kh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ni(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var st=0;function F_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var O_,Bh,k_,B_,z_,Jf=!1,tl=[],wr=null,br=null,Ar=null,_o=new Map,vo=new Map,xr=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(n,e){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Ca(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vo(e),e!==null&&Bh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function CS(n,e,t,i,r){switch(e){case"focusin":return wr=Ca(wr,n,e,t,i,r),!0;case"dragenter":return br=Ca(br,n,e,t,i,r),!0;case"mouseover":return Ar=Ca(Ar,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return _o.set(s,Ca(_o.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,vo.set(s,Ca(vo.get(s)||null,n,e,t,i,r)),!0}return!1}function V_(n){var e=qr(n.target);if(e!==null){var t=hs(e);if(t!==null){if(e=t.tag,e===13){if(e=C_(t),e!==null){n.blockedOn=e,z_(n.priority,function(){k_(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Gl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Qf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);$f=i,t.target.dispatchEvent(i),$f=null}else return e=Vo(t),e!==null&&Bh(e),n.blockedOn=t,!1;e.shift()}return!0}function Em(n,e,t){Gl(n)&&t.delete(e)}function PS(){Jf=!1,wr!==null&&Gl(wr)&&(wr=null),br!==null&&Gl(br)&&(br=null),Ar!==null&&Gl(Ar)&&(Ar=null),_o.forEach(Em),vo.forEach(Em)}function Pa(n,e){n.blockedOn===e&&(n.blockedOn=null,Jf||(Jf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,PS)))}function xo(n){function e(r){return Pa(r,n)}if(0<tl.length){Pa(tl[0],n);for(var t=1;t<tl.length;t++){var i=tl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wr!==null&&Pa(wr,n),br!==null&&Pa(br,n),Ar!==null&&Pa(Ar,n),_o.forEach(e),vo.forEach(e),t=0;t<xr.length;t++)i=xr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<xr.length&&(t=xr[0],t.blockedOn===null);)V_(t),t.blockedOn===null&&xr.shift()}var Ks=nr.ReactCurrentBatchConfig,hu=!0;function LS(n,e,t,i){var r=st,s=Ks.transition;Ks.transition=null;try{st=1,zh(n,e,t,i)}finally{st=r,Ks.transition=s}}function NS(n,e,t,i){var r=st,s=Ks.transition;Ks.transition=null;try{st=4,zh(n,e,t,i)}finally{st=r,Ks.transition=s}}function zh(n,e,t,i){if(hu){var r=Qf(n,e,t,i);if(r===null)Nc(n,e,i,pu,t),Mm(n,i);else if(CS(r,n,e,t,i))i.stopPropagation();else if(Mm(n,i),e&4&&-1<RS.indexOf(n)){for(;r!==null;){var s=Vo(r);if(s!==null&&O_(s),s=Qf(n,e,t,i),s===null&&Nc(n,e,i,pu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(n,e,i,null,t)}}var pu=null;function Qf(n,e,t,i){if(pu=null,n=Fh(i),n=qr(n),n!==null)if(e=hs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=C_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return pu=n,null}function H_(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xS()){case Oh:return 1;case I_:return 4;case fu:case yS:return 16;case D_:return 536870912;default:return 16}default:return 16}}var Mr=null,Vh=null,Wl=null;function G_(){if(Wl)return Wl;var n,e=Vh,t=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Wl=r.slice(n,1<i?1-i:void 0)}function jl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function Tm(){return!1}function Nn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nl:Tm,this.isPropagationStopped=Tm,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Nn(va),zo=wt({},va,{view:0,detail:0}),IS=Nn(zo),Ec,Tc,La,Xu=wt({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==La&&(La&&n.type==="mousemove"?(Ec=n.screenX-La.screenX,Tc=n.screenY-La.screenY):Tc=Ec=0,La=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:Tc}}),wm=Nn(Xu),DS=wt({},Xu,{dataTransfer:0}),US=Nn(DS),FS=wt({},zo,{relatedTarget:0}),wc=Nn(FS),OS=wt({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=Nn(OS),BS=wt({},va,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zS=Nn(BS),VS=wt({},va,{data:0}),bm=Nn(VS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=WS[n])?!!e[n]:!1}function Gh(){return jS}var XS=wt({},zo,{key:function(n){if(n.key){var e=HS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=jl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?GS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gh,charCode:function(n){return n.type==="keypress"?jl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$S=Nn(XS),YS=wt({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Nn(YS),KS=wt({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gh}),qS=Nn(KS),ZS=wt({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Nn(ZS),QS=wt({},Xu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eM=Nn(QS),tM=[9,13,27,32],Wh=Yi&&"CompositionEvent"in window,io=null;Yi&&"documentMode"in document&&(io=document.documentMode);var nM=Yi&&"TextEvent"in window&&!io,W_=Yi&&(!Wh||io&&8<io&&11>=io),Rm=" ",Cm=!1;function j_(n,e){switch(n){case"keyup":return tM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function iM(n,e){switch(n){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(Cm=!0,Rm);case"textInput":return n=e.data,n===Rm&&Cm?null:n;default:return null}}function rM(n,e){if(Fs)return n==="compositionend"||!Wh&&j_(n,e)?(n=G_(),Wl=Vh=Mr=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W_&&e.locale!=="ko"?null:e.data;default:return null}}var sM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sM[n.type]:e==="textarea"}function $_(n,e,t,i){T_(i),e=mu(e,"onChange"),0<e.length&&(t=new Hh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ro=null,yo=null;function aM(n){rv(n,0)}function $u(n){var e=Bs(n);if(__(e))return n}function oM(n,e){if(n==="change")return e}var Y_=!1;if(Yi){var bc;if(Yi){var Ac="oninput"in document;if(!Ac){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),Ac=typeof Lm.oninput=="function"}bc=Ac}else bc=!1;Y_=bc&&(!document.documentMode||9<document.documentMode)}function Nm(){ro&&(ro.detachEvent("onpropertychange",K_),yo=ro=null)}function K_(n){if(n.propertyName==="value"&&$u(yo)){var e=[];$_(e,yo,n,Fh(n)),R_(aM,e)}}function lM(n,e,t){n==="focusin"?(Nm(),ro=e,yo=t,ro.attachEvent("onpropertychange",K_)):n==="focusout"&&Nm()}function uM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $u(yo)}function cM(n,e){if(n==="click")return $u(e)}function fM(n,e){if(n==="input"||n==="change")return $u(e)}function dM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var oi=typeof Object.is=="function"?Object.is:dM;function So(n,e){if(oi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Uf.call(e,r)||!oi(n[r],e[r]))return!1}return!0}function Im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Dm(n,e){var t=Im(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Im(t)}}function q_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?q_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Z_(){for(var n=window,e=lu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=lu(n.document)}return e}function jh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hM(n){var e=Z_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&q_(t.ownerDocument.documentElement,t)){if(i!==null&&jh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Dm(t,s);var a=Dm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pM=Yi&&"documentMode"in document&&11>=document.documentMode,Os=null,ed=null,so=null,td=!1;function Um(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;td||Os==null||Os!==lu(i)||(i=Os,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),so&&So(so,i)||(so=i,i=mu(ed,"onSelect"),0<i.length&&(e=new Hh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Os)))}function il(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ks={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Rc={},J_={};Yi&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Yu(n){if(Rc[n])return Rc[n];if(!ks[n])return n;var e=ks[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in J_)return Rc[n]=e[t];return n}var Q_=Yu("animationend"),ev=Yu("animationiteration"),tv=Yu("animationstart"),nv=Yu("transitionend"),iv=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){iv.set(n,e),ds(e,[n])}for(var Cc=0;Cc<Fm.length;Cc++){var Pc=Fm[Cc],mM=Pc.toLowerCase(),gM=Pc[0].toUpperCase()+Pc.slice(1);Fr(mM,"on"+gM)}Fr(Q_,"onAnimationEnd");Fr(ev,"onAnimationIteration");Fr(tv,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(nv,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_M=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function Om(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,mS(i,e,void 0,n),n.currentTarget=null}function rv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Om(r,o,u),s=l}}}if(cu)throw n=qf,cu=!1,qf=null,n}function gt(n,e){var t=e[ad];t===void 0&&(t=e[ad]=new Set);var i=n+"__bubble";t.has(i)||(sv(e,n,2,!1),t.add(i))}function Lc(n,e,t){var i=0;e&&(i|=4),sv(t,n,i,e)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[rl]){n[rl]=!0,d_.forEach(function(t){t!=="selectionchange"&&(_M.has(t)||Lc(t,!1,n),Lc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[rl]||(e[rl]=!0,Lc("selectionchange",!1,e))}}function sv(n,e,t,i){switch(H_(e)){case 1:var r=LS;break;case 4:r=NS;break;default:r=zh}t=r.bind(null,e,t,n),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Nc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=qr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}R_(function(){var u=s,c=Fh(t),f=[];e:{var d=iv.get(n);if(d!==void 0){var p=Hh,_=n;switch(n){case"keypress":if(jl(t)===0)break e;case"keydown":case"keyup":p=$S;break;case"focusin":_="focus",p=wc;break;case"focusout":_="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qS;break;case Q_:case ev:case tv:p=kS;break;case nv:p=JS;break;case"scroll":p=IS;break;case"wheel":p=eM;break;case"copy":case"cut":case"paste":p=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Am}var x=(e&4)!==0,m=!x&&n==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=go(g,h),S!=null&&x.push(Eo(g,S,v)))),m)break;g=g.return}0<x.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==$f&&(_=t.relatedTarget||t.fromElement)&&(qr(_)||_[Ki]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?qr(_):null,_!==null&&(m=hs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(x=wm,S="onMouseLeave",h="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(x=Am,S="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?d:Bs(p),v=_==null?d:Bs(_),d=new x(S,g+"leave",p,t,c),d.target=m,d.relatedTarget=v,S=null,qr(c)===u&&(x=new x(h,g+"enter",_,t,c),x.target=v,x.relatedTarget=m,S=x),m=S,p&&_)t:{for(x=p,h=_,g=0,v=x;v;v=_s(v))g++;for(v=0,S=h;S;S=_s(S))v++;for(;0<g-v;)x=_s(x),g--;for(;0<v-g;)h=_s(h),v--;for(;g--;){if(x===h||h!==null&&x===h.alternate)break t;x=_s(x),h=_s(h)}x=null}else x=null;p!==null&&km(f,d,p,x,!1),_!==null&&m!==null&&km(f,m,_,x,!0)}}e:{if(d=u?Bs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=oM;else if(Pm(d))if(Y_)b=fM;else{b=uM;var T=lM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=cM);if(b&&(b=b(n,u))){$_(f,b,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Hf(d,"number",d.value)}switch(T=u?Bs(u):window,n){case"focusin":(Pm(T)||T.contentEditable==="true")&&(Os=T,ed=u,so=null);break;case"focusout":so=ed=Os=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,Um(f,t,c);break;case"selectionchange":if(pM)break;case"keydown":case"keyup":Um(f,t,c)}var A;if(Wh)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Fs?j_(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(W_&&t.locale!=="ko"&&(Fs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Fs&&(A=G_()):(Mr=c,Vh="value"in Mr?Mr.value:Mr.textContent,Fs=!0)),T=mu(u,y),0<T.length&&(y=new bm(y,n,null,t,c),f.push({event:y,listeners:T}),A?y.data=A:(A=X_(t),A!==null&&(y.data=A)))),(A=nM?iM(n,t):rM(n,t))&&(u=mu(u,"onBeforeInput"),0<u.length&&(c=new bm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}rv(f,e)})}function Eo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function mu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=go(n,t),s!=null&&i.unshift(Eo(n,s,r)),s=go(n,e),s!=null&&i.push(Eo(n,s,r))),n=n.return}return i}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function km(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=go(t,s),l!=null&&a.unshift(Eo(t,l,o))):r||(l=go(t,s),l!=null&&a.push(Eo(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var vM=/\r\n?/g,xM=/\u0000|\uFFFD/g;function Bm(n){return(typeof n=="string"?n:""+n).replace(vM,`
`).replace(xM,"")}function sl(n,e,t){if(e=Bm(e),Bm(n)!==e&&t)throw Error(ie(425))}function gu(){}var nd=null,id=null;function rd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,yM=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(n){return zm.resolve(null).then(n).catch(MM)}:sd;function MM(n){setTimeout(function(){throw n})}function Ic(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),xo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);xo(e)}function Rr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Vm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var xa=Math.random().toString(36).slice(2),_i="__reactFiber$"+xa,To="__reactProps$"+xa,Ki="__reactContainer$"+xa,ad="__reactEvents$"+xa,EM="__reactListeners$"+xa,TM="__reactHandles$"+xa;function qr(n){var e=n[_i];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ki]||t[_i]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Vm(n);n!==null;){if(t=n[_i])return t;n=Vm(n)}return e}n=t,t=n.parentNode}return null}function Vo(n){return n=n[_i]||n[Ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ie(33))}function Ku(n){return n[To]||null}var od=[],zs=-1;function Or(n){return{current:n}}function _t(n){0>zs||(n.current=od[zs],od[zs]=null,zs--)}function pt(n,e){zs++,od[zs]=n.current,n.current=e}var Dr={},sn=Or(Dr),gn=Or(!1),ss=Dr;function na(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function _u(){_t(gn),_t(sn)}function Hm(n,e,t){if(sn.current!==Dr)throw Error(ie(168));pt(sn,e),pt(gn,t)}function av(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,lS(n)||"Unknown",r));return wt({},t,i)}function vu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,ss=sn.current,pt(sn,n),pt(gn,gn.current),!0}function Gm(n,e,t){var i=n.stateNode;if(!i)throw Error(ie(169));t?(n=av(n,e,ss),i.__reactInternalMemoizedMergedChildContext=n,_t(gn),_t(sn),pt(sn,n)):_t(gn),pt(gn,t)}var zi=null,qu=!1,Dc=!1;function ov(n){zi===null?zi=[n]:zi.push(n)}function wM(n){qu=!0,ov(n)}function kr(){if(!Dc&&zi!==null){Dc=!0;var n=0,e=st;try{var t=zi;for(st=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}zi=null,qu=!1}catch(r){throw zi!==null&&(zi=zi.slice(n+1)),N_(Oh,kr),r}finally{st=e,Dc=!1}}return null}var Vs=[],Hs=0,xu=null,yu=0,Fn=[],On=0,as=null,Vi=1,Hi="";function jr(n,e){Vs[Hs++]=yu,Vs[Hs++]=xu,xu=n,yu=e}function lv(n,e,t){Fn[On++]=Vi,Fn[On++]=Hi,Fn[On++]=as,as=n;var i=Vi;n=Hi;var r=32-ni(i)-1;i&=~(1<<r),t+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Vi=1<<32-ni(e)+r|t<<r|i,Hi=s+n}else Vi=1<<s|t<<r|i,Hi=n}function Xh(n){n.return!==null&&(jr(n,1),lv(n,1,0))}function $h(n){for(;n===xu;)xu=Vs[--Hs],Vs[Hs]=null,yu=Vs[--Hs],Vs[Hs]=null;for(;n===as;)as=Fn[--On],Fn[On]=null,Hi=Fn[--On],Fn[On]=null,Vi=Fn[--On],Fn[On]=null}var An=null,bn=null,xt=!1,Qn=null;function uv(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Wm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,An=n,bn=Rr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,An=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=as!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,An=n,bn=null,!0):!1;default:return!1}}function ld(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ud(n){if(xt){var e=bn;if(e){var t=e;if(!Wm(n,e)){if(ld(n))throw Error(ie(418));e=Rr(t.nextSibling);var i=An;e&&Wm(n,e)?uv(i,t):(n.flags=n.flags&-4097|2,xt=!1,An=n)}}else{if(ld(n))throw Error(ie(418));n.flags=n.flags&-4097|2,xt=!1,An=n}}}function jm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;An=n}function al(n){if(n!==An)return!1;if(!xt)return jm(n),xt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!rd(n.type,n.memoizedProps)),e&&(e=bn)){if(ld(n))throw cv(),Error(ie(418));for(;e;)uv(n,e),e=Rr(e.nextSibling)}if(jm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ie(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=Rr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=An?Rr(n.stateNode.nextSibling):null;return!0}function cv(){for(var n=bn;n;)n=Rr(n.nextSibling)}function ia(){bn=An=null,xt=!1}function Yh(n){Qn===null?Qn=[n]:Qn.push(n)}var bM=nr.ReactCurrentBatchConfig;function Na(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ie(309));var i=t.stateNode}if(!i)throw Error(ie(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(ie(284));if(!t._owner)throw Error(ie(290,n))}return n}function ol(n,e){throw n=Object.prototype.toString.call(e),Error(ie(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xm(n){var e=n._init;return e(n._payload)}function fv(n){function e(h,g){if(n){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function t(h,g){if(!n)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Nr(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,g,v,S){return g===null||g.tag!==6?(g=Vc(v,h.mode,S),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,S){var b=v.type;return b===Us?c(h,g,v.props.children,S,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Xm(b)===g.type)?(S=r(g,v.props),S.ref=Na(h,g,v),S.return=h,S):(S=Jl(v.type,v.key,v.props,null,h.mode,S),S.ref=Na(h,g,v),S.return=h,S)}function u(h,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Hc(v,h.mode,S),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function c(h,g,v,S,b){return g===null||g.tag!==7?(g=rs(v,h.mode,S,b),g.return=h,g):(g=r(g,v),g.return=h,g)}function f(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return v=Jl(g.type,g.key,g.props,null,h.mode,v),v.ref=Na(h,null,g),v.return=h,v;case Ds:return g=Hc(g,h.mode,v),g.return=h,g;case _r:var S=g._init;return f(h,S(g._payload),v)}if(Ya(g)||Aa(g))return g=rs(g,h.mode,v,null),g.return=h,g;ol(h,g)}return null}function d(h,g,v,S){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(h,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return v.key===b?l(h,g,v,S):null;case Ds:return v.key===b?u(h,g,v,S):null;case _r:return b=v._init,d(h,g,b(v._payload),S)}if(Ya(v)||Aa(v))return b!==null?null:c(h,g,v,S,null);ol(h,v)}return null}function p(h,g,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,o(g,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qo:return h=h.get(S.key===null?v:S.key)||null,l(g,h,S,b);case Ds:return h=h.get(S.key===null?v:S.key)||null,u(g,h,S,b);case _r:var T=S._init;return p(h,g,v,T(S._payload),b)}if(Ya(S)||Aa(S))return h=h.get(v)||null,c(g,h,S,b,null);ol(g,S)}return null}function _(h,g,v,S){for(var b=null,T=null,A=g,y=g=0,R=null;A!==null&&y<v.length;y++){A.index>y?(R=A,A=null):R=A.sibling;var P=d(h,A,v[y],S);if(P===null){A===null&&(A=R);break}n&&A&&P.alternate===null&&e(h,A),g=s(P,g,y),T===null?b=P:T.sibling=P,T=P,A=R}if(y===v.length)return t(h,A),xt&&jr(h,y),b;if(A===null){for(;y<v.length;y++)A=f(h,v[y],S),A!==null&&(g=s(A,g,y),T===null?b=A:T.sibling=A,T=A);return xt&&jr(h,y),b}for(A=i(h,A);y<v.length;y++)R=p(A,h,y,v[y],S),R!==null&&(n&&R.alternate!==null&&A.delete(R.key===null?y:R.key),g=s(R,g,y),T===null?b=R:T.sibling=R,T=R);return n&&A.forEach(function(C){return e(h,C)}),xt&&jr(h,y),b}function x(h,g,v,S){var b=Aa(v);if(typeof b!="function")throw Error(ie(150));if(v=b.call(v),v==null)throw Error(ie(151));for(var T=b=null,A=g,y=g=0,R=null,P=v.next();A!==null&&!P.done;y++,P=v.next()){A.index>y?(R=A,A=null):R=A.sibling;var C=d(h,A,P.value,S);if(C===null){A===null&&(A=R);break}n&&A&&C.alternate===null&&e(h,A),g=s(C,g,y),T===null?b=C:T.sibling=C,T=C,A=R}if(P.done)return t(h,A),xt&&jr(h,y),b;if(A===null){for(;!P.done;y++,P=v.next())P=f(h,P.value,S),P!==null&&(g=s(P,g,y),T===null?b=P:T.sibling=P,T=P);return xt&&jr(h,y),b}for(A=i(h,A);!P.done;y++,P=v.next())P=p(A,h,y,P.value,S),P!==null&&(n&&P.alternate!==null&&A.delete(P.key===null?y:P.key),g=s(P,g,y),T===null?b=P:T.sibling=P,T=P);return n&&A.forEach(function(O){return e(h,O)}),xt&&jr(h,y),b}function m(h,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Us&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:e:{for(var b=v.key,T=g;T!==null;){if(T.key===b){if(b=v.type,b===Us){if(T.tag===7){t(h,T.sibling),g=r(T,v.props.children),g.return=h,h=g;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&Xm(b)===T.type){t(h,T.sibling),g=r(T,v.props),g.ref=Na(h,T,v),g.return=h,h=g;break e}t(h,T);break}else e(h,T);T=T.sibling}v.type===Us?(g=rs(v.props.children,h.mode,S,v.key),g.return=h,h=g):(S=Jl(v.type,v.key,v.props,null,h.mode,S),S.ref=Na(h,g,v),S.return=h,h=S)}return a(h);case Ds:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else e(h,g);g=g.sibling}g=Hc(v,h.mode,S),g.return=h,h=g}return a(h);case _r:return T=v._init,m(h,g,T(v._payload),S)}if(Ya(v))return _(h,g,v,S);if(Aa(v))return x(h,g,v,S);ol(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(h,g.sibling),g=r(g,v),g.return=h,h=g):(t(h,g),g=Vc(v,h.mode,S),g.return=h,h=g),a(h)):t(h,g)}return m}var ra=fv(!0),dv=fv(!1),Su=Or(null),Mu=null,Gs=null,Kh=null;function qh(){Kh=Gs=Mu=null}function Zh(n){var e=Su.current;_t(Su),n._currentValue=e}function cd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function qs(n,e){Mu=n,Kh=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(mn=!0),n.firstContext=null)}function Hn(n){var e=n._currentValue;if(Kh!==n)if(n={context:n,memoizedValue:e,next:null},Gs===null){if(Mu===null)throw Error(ie(308));Gs=n,Mu.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return e}var Zr=null;function Jh(n){Zr===null?Zr=[n]:Zr.push(n)}function hv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Jh(e)):(t.next=r.next,r.next=t),e.interleaved=t,qi(n,i)}function qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vr=!1;function Qh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Jh(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(n,t)}function Xl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kh(n,t)}}function $m(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Eu(n,e,t,i){var r=n.updateQueue;vr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var c=n.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==a&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,c=u=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,x=o;switch(d=e,p=t,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=wt({},f,d);break e;case 2:vr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=a,n.lanes=a,n.memoizedState=f}}function Ym(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ho={},Mi=Or(Ho),wo=Or(Ho),bo=Or(Ho);function Jr(n){if(n===Ho)throw Error(ie(174));return n}function ep(n,e){switch(pt(bo,e),pt(wo,n),pt(Mi,Ho),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Wf(e,n)}_t(Mi),pt(Mi,e)}function sa(){_t(Mi),_t(wo),_t(bo)}function mv(n){Jr(bo.current);var e=Jr(Mi.current),t=Wf(e,n.type);e!==t&&(pt(wo,n),pt(Mi,t))}function tp(n){wo.current===n&&(_t(Mi),_t(wo))}var Mt=Or(0);function Tu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function np(){for(var n=0;n<Uc.length;n++)Uc[n]._workInProgressVersionPrimary=null;Uc.length=0}var $l=nr.ReactCurrentDispatcher,Fc=nr.ReactCurrentBatchConfig,os=0,Et=null,kt=null,jt=null,wu=!1,ao=!1,Ao=0,AM=0;function Qt(){throw Error(ie(321))}function ip(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!oi(n[t],e[t]))return!1;return!0}function rp(n,e,t,i,r,s){if(os=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=n===null||n.memoizedState===null?LM:NM,n=t(i,r),ao){s=0;do{if(ao=!1,Ao=0,25<=s)throw Error(ie(301));s+=1,jt=kt=null,e.updateQueue=null,$l.current=IM,n=t(i,r)}while(ao)}if($l.current=bu,e=kt!==null&&kt.next!==null,os=0,jt=kt=Et=null,wu=!1,e)throw Error(ie(300));return n}function sp(){var n=Ao!==0;return Ao=0,n}function pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Et.memoizedState=jt=n:jt=jt.next=n,jt}function Gn(){if(kt===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=jt===null?Et.memoizedState:jt.next;if(e!==null)jt=e,kt=n;else{if(n===null)throw Error(ie(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?Et.memoizedState=jt=n:jt=jt.next=n}return jt}function Ro(n,e){return typeof e=="function"?e(n):e}function Oc(n){var e=Gn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((os&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Et.lanes|=c,ls|=c}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,oi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,ls|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function kc(n){var e=Gn(),t=e.queue;if(t===null)throw Error(ie(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function gv(){}function _v(n,e){var t=Et,i=Gn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,ap(yv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(t.flags|=2048,Co(9,xv.bind(null,t,i,r,e),void 0,null),$t===null)throw Error(ie(349));os&30||vv(t,e,r)}return r}function vv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function xv(n,e,t,i){e.value=t,e.getSnapshot=i,Sv(e)&&Mv(n)}function yv(n,e,t){return t(function(){Sv(e)&&Mv(n)})}function Sv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!oi(n,t)}catch{return!0}}function Mv(n){var e=qi(n,1);e!==null&&ii(e,n,1,-1)}function Km(n){var e=pi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},e.queue=n,n=n.dispatch=PM.bind(null,Et,n),[e.memoizedState,n]}function Co(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ev(){return Gn().memoizedState}function Yl(n,e,t,i){var r=pi();Et.flags|=n,r.memoizedState=Co(1|e,t,void 0,i===void 0?null:i)}function Zu(n,e,t,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&ip(i,a.deps)){r.memoizedState=Co(e,t,s,i);return}}Et.flags|=n,r.memoizedState=Co(1|e,t,s,i)}function qm(n,e){return Yl(8390656,8,n,e)}function ap(n,e){return Zu(2048,8,n,e)}function Tv(n,e){return Zu(4,2,n,e)}function wv(n,e){return Zu(4,4,n,e)}function bv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Av(n,e,t){return t=t!=null?t.concat([n]):null,Zu(4,4,bv.bind(null,e,n),t)}function op(){}function Rv(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Cv(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ip(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Pv(n,e,t){return os&21?(oi(t,e)||(t=U_(),Et.lanes|=t,ls|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,mn=!0),n.memoizedState=t)}function RM(n,e){var t=st;st=t!==0&&4>t?t:4,n(!0);var i=Fc.transition;Fc.transition={};try{n(!1),e()}finally{st=t,Fc.transition=i}}function Lv(){return Gn().memoizedState}function CM(n,e,t){var i=Lr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Nv(n))Iv(e,t);else if(t=hv(n,e,t,i),t!==null){var r=cn();ii(t,n,i,r),Dv(t,e,i)}}function PM(n,e,t){var i=Lr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Nv(n))Iv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,oi(o,a)){var l=e.interleaved;l===null?(r.next=r,Jh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=hv(n,e,r,i),t!==null&&(r=cn(),ii(t,n,i,r),Dv(t,e,i))}}function Nv(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function Iv(n,e){ao=wu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Dv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kh(n,t)}}var bu={readContext:Hn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},LM={readContext:Hn,useCallback:function(n,e){return pi().memoizedState=[n,e===void 0?null:e],n},useContext:Hn,useEffect:qm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Yl(4194308,4,bv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Yl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Yl(4,2,n,e)},useMemo:function(n,e){var t=pi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=CM.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=pi();return n={current:n},e.memoizedState=n},useState:Km,useDebugValue:op,useDeferredValue:function(n){return pi().memoizedState=n},useTransition:function(){var n=Km(!1),e=n[0];return n=RM.bind(null,n[1]),pi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=pi();if(xt){if(t===void 0)throw Error(ie(407));t=t()}else{if(t=e(),$t===null)throw Error(ie(349));os&30||vv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,qm(yv.bind(null,i,s,n),[n]),i.flags|=2048,Co(9,xv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pi(),e=$t.identifierPrefix;if(xt){var t=Hi,i=Vi;t=(i&~(1<<32-ni(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ao++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=AM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},NM={readContext:Hn,useCallback:Rv,useContext:Hn,useEffect:ap,useImperativeHandle:Av,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:Cv,useReducer:Oc,useRef:Ev,useState:function(){return Oc(Ro)},useDebugValue:op,useDeferredValue:function(n){var e=Gn();return Pv(e,kt.memoizedState,n)},useTransition:function(){var n=Oc(Ro)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:gv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1},IM={readContext:Hn,useCallback:Rv,useContext:Hn,useEffect:ap,useImperativeHandle:Av,useInsertionEffect:Tv,useLayoutEffect:wv,useMemo:Cv,useReducer:kc,useRef:Ev,useState:function(){return kc(Ro)},useDebugValue:op,useDeferredValue:function(n){var e=Gn();return kt===null?e.memoizedState=n:Pv(e,kt.memoizedState,n)},useTransition:function(){var n=kc(Ro)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:gv,useSyncExternalStore:_v,useId:Lv,unstable_isNewReconciler:!1};function Zn(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function fd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ju={isMounted:function(n){return(n=n._reactInternals)?hs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Lr(n),s=ji(i,r);s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(ii(e,n,r,i),Xl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=Lr(n),s=ji(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Cr(n,s,r),e!==null&&(ii(e,n,r,i),Xl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=Lr(n),r=ji(t,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(n,r,i),e!==null&&(ii(e,n,i,t),Xl(e,n,i))}};function Zm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!So(t,i)||!So(r,s):!0}function Uv(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=_n(e)?ss:sn.current,i=e.contextTypes,s=(i=i!=null)?na(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ju,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ju.enqueueReplaceState(e,e.state,null)}function dd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Qh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=_n(e)?ss:sn.current,r.context=na(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ju.enqueueReplaceState(r,r.state,null),Eu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function aa(n,e){try{var t="",i=e;do t+=oS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function hd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var DM=typeof WeakMap=="function"?WeakMap:Map;function Fv(n,e,t){t=ji(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ru||(Ru=!0,Ed=i),hd(n,e)},t}function Ov(n,e,t){t=ji(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){hd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){hd(n,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Qm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new DM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=YM.bind(null,n,e,t),e.then(n,n))}function eg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function tg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ji(-1,1),e.tag=2,Cr(t,e,1))),t.lanes|=1),n)}var UM=nr.ReactCurrentOwner,mn=!1;function ln(n,e,t,i){e.child=n===null?dv(e,null,t,i):ra(e,n.child,t,i)}function ng(n,e,t,i,r){t=t.render;var s=e.ref;return qs(e,r),i=rp(n,e,t,i,s,r),t=sp(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(xt&&t&&Xh(e),e.flags|=1,ln(n,e,i,r),e.child)}function ig(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!mp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,kv(n,e,s,i,r)):(n=Jl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:So,t(a,i)&&n.ref===e.ref)return Zi(n,e,r)}return e.flags|=1,n=Nr(s,i),n.ref=e.ref,n.return=e,e.child=n}function kv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(So(s,i)&&n.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(mn=!0);else return e.lanes=n.lanes,Zi(n,e,r)}return pd(n,e,t,i,r)}function Bv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(js,Tn),Tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(js,Tn),Tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(js,Tn),Tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(js,Tn),Tn|=i;return ln(n,e,r,t),e.child}function zv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function pd(n,e,t,i,r){var s=_n(t)?ss:sn.current;return s=na(e,s),qs(e,r),t=rp(n,e,t,i,s,r),i=sp(),n!==null&&!mn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(xt&&i&&Xh(e),e.flags|=1,ln(n,e,t,r),e.child)}function rg(n,e,t,i,r){if(_n(t)){var s=!0;vu(e)}else s=!1;if(qs(e,r),e.stateNode===null)Kl(n,e),Uv(e,t,i),dd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Hn(u):(u=_n(t)?ss:sn.current,u=na(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Jm(e,a,i,u),vr=!1;var d=e.memoizedState;a.state=d,Eu(e,i,a,r),l=e.memoizedState,o!==i||d!==l||gn.current||vr?(typeof c=="function"&&(fd(e,t,c,i),l=e.memoizedState),(o=vr||Zm(e,t,o,i,d,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,pv(n,e),o=e.memoizedProps,u=e.type===e.elementType?o:Zn(e.type,o),a.props=u,f=e.pendingProps,d=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=_n(t)?ss:sn.current,l=na(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||d!==l)&&Jm(e,a,i,l),vr=!1,d=e.memoizedState,a.state=d,Eu(e,i,a,r);var _=e.memoizedState;o!==f||d!==_||gn.current||vr?(typeof p=="function"&&(fd(e,t,p,i),_=e.memoizedState),(u=vr||Zm(e,t,u,i,d,_,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return md(n,e,t,i,s,r)}function md(n,e,t,i,r,s){zv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gm(e,t,!1),Zi(n,e,s);i=e.stateNode,UM.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=ra(e,n.child,null,s),e.child=ra(e,null,o,s)):ln(n,e,o,s),e.memoizedState=i.state,r&&Gm(e,t,!0),e.child}function Vv(n){var e=n.stateNode;e.pendingContext?Hm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Hm(n,e.context,!1),ep(n,e.containerInfo)}function sg(n,e,t,i,r){return ia(),Yh(r),e.flags|=256,ln(n,e,t,i),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function _d(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hv(n,e,t){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(Mt,r&1),n===null)return ud(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tc(a,i,0,null),n=rs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=_d(t),e.memoizedState=gd,n):lp(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return FM(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Nr(o,s):(s=rs(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?_d(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=gd,i}return s=n.child,n=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function lp(n,e){return e=tc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ll(n,e,t,i){return i!==null&&Yh(i),ra(e,n.child,null,t),n=lp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FM(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Bc(Error(ie(422))),ll(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=tc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ra(e,n.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=gd,s);if(!(e.mode&1))return ll(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Bc(s,i,void 0),ll(n,e,a,i)}if(o=(a&n.childLanes)!==0,mn||o){if(i=$t,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(n,r),ii(i,n,r,-1))}return pp(),i=Bc(Error(ie(421))),ll(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=KM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,bn=Rr(r.nextSibling),An=e,xt=!0,Qn=null,n!==null&&(Fn[On++]=Vi,Fn[On++]=Hi,Fn[On++]=as,Vi=n.id,Hi=n.overflow,as=e),e=lp(e,i.children),e.flags|=4096,e)}function ag(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),cd(n.return,e,t)}function zc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Gv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(n,e,i.children,t),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ag(n,t,e);else if(n.tag===19)ag(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Tu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),zc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Tu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}zc(e,!0,t,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ls|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ie(153));if(e.child!==null){for(n=e.child,t=Nr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Nr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OM(n,e,t){switch(e.tag){case 3:Vv(e),ia();break;case 5:mv(e);break;case 1:_n(e.type)&&vu(e);break;case 4:ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):t&e.child.childLanes?Hv(n,e,t):(pt(Mt,Mt.current&1),n=Zi(n,e,t),n!==null?n.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Gv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(n,e,t)}return Zi(n,e,t)}var Wv,vd,jv,Xv;Wv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vd=function(){};jv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Jr(Mi.current);var s=null;switch(t){case"input":r=zf(n,r),i=zf(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Gf(n,r),i=Gf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=gu)}jf(t,i);var a;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&gt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Xv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ia(n,e){if(!xt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kM(n,e,t){var i=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return _n(e.type)&&_u(),en(e),null;case 3:return i=e.stateNode,sa(),_t(gn),_t(sn),np(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(al(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(bd(Qn),Qn=null))),vd(n,e),en(e),null;case 5:tp(e);var r=Jr(bo.current);if(t=e.type,n!==null&&e.stateNode!=null)jv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return en(e),null}if(n=Jr(Mi.current),al(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[_i]=e,i[To]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<qa.length;r++)gt(qa[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":mm(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":_m(i,s),gt("invalid",i)}jf(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&sl(i.textContent,o,n),r=["children",""+o]):po.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(t){case"input":Zo(i),gm(i,s,!0);break;case"textarea":Zo(i),vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=y_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[_i]=e,n[To]=i,Wv(n,e,!1,!1),e.stateNode=n;e:{switch(a=Xf(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<qa.length;r++)gt(qa[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":mm(n,i),r=zf(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",n);break;case"textarea":_m(n,i),r=Gf(n,i),gt("invalid",n);break;default:r=i}jf(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?E_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&S_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&mo(n,l):typeof l=="number"&&mo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&Nh(n,s,l,a))}switch(t){case"input":Zo(n),gm(n,i,!1);break;case"textarea":Zo(n),vm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Xs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Xs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=gu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)Xv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(t=Jr(bo.current),Jr(Mi.current),al(e)){if(i=e.stateNode,t=e.memoizedProps,i[_i]=e,(s=i.nodeValue!==t)&&(n=An,n!==null))switch(n.tag){case 3:sl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return en(e),null;case 13:if(_t(Mt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xt&&bn!==null&&e.mode&1&&!(e.flags&128))cv(),ia(),e.flags|=98560,s=!1;else if(s=al(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[_i]=e}else ia(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(bd(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Mt.current&1?Bt===0&&(Bt=3):pp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return sa(),vd(n,e),n===null&&Mo(e.stateNode.containerInfo),en(e),null;case 10:return Zh(e.type._context),en(e),null;case 17:return _n(e.type)&&_u(),en(e),null;case 19:if(_t(Mt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ia(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Tu(n),a!==null){for(e.flags|=128,Ia(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(Mt,Mt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Nt()>oa&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304)}else{if(!i)if(n=Tu(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return en(e),null}else 2*Nt()-s.renderingStartTime>oa&&t!==1073741824&&(e.flags|=128,i=!0,Ia(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,t=Mt.current,pt(Mt,i?t&1|2:t&1),e):(en(e),null);case 22:case 23:return hp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function BM(n,e){switch($h(e),e.tag){case 1:return _n(e.type)&&_u(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return sa(),_t(gn),_t(sn),np(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return tp(e),null;case 13:if(_t(Mt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ia()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(Mt),null;case 4:return sa(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var ul=!1,rn=!1,zM=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ws(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function xd(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var og=!1;function VM(n,e){if(nd=hu,n=Z_(),jh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(o=a),d===s&&++c===i&&(l=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(id={focusedElem:n,selectionRange:t},hu=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Zn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Rt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=og,og=!1,_}function oo(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,t,s)}r=r.next}while(r!==i)}}function Qu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function yd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $v(n){var e=n.alternate;e!==null&&(n.alternate=null,$v(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[_i],delete e[To],delete e[ad],delete e[EM],delete e[TM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yv(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=gu));else if(i!==4&&(n=n.child,n!==null))for(Sd(n,e,t),n=n.sibling;n!==null;)Sd(n,e,t),n=n.sibling}function Md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Md(n,e,t),n=n.sibling;n!==null;)Md(n,e,t),n=n.sibling}var Kt=null,Jn=!1;function ur(n,e,t){for(t=t.child;t!==null;)Kv(n,e,t),t=t.sibling}function Kv(n,e,t){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(ju,t)}catch{}switch(t.tag){case 5:rn||Ws(t,e);case 6:var i=Kt,r=Jn;Kt=null,ur(n,e,t),Kt=i,Jn=r,Kt!==null&&(Jn?(n=Kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Kt.removeChild(t.stateNode));break;case 18:Kt!==null&&(Jn?(n=Kt,t=t.stateNode,n.nodeType===8?Ic(n.parentNode,t):n.nodeType===1&&Ic(n,t),xo(n)):Ic(Kt,t.stateNode));break;case 4:i=Kt,r=Jn,Kt=t.stateNode.containerInfo,Jn=!0,ur(n,e,t),Kt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(t,e,a),r=r.next}while(r!==i)}ur(n,e,t);break;case 1:if(!rn&&(Ws(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Rt(t,e,o)}ur(n,e,t);break;case 21:ur(n,e,t);break;case 22:t.mode&1?(rn=(i=rn)||t.memoizedState!==null,ur(n,e,t),rn=i):ur(n,e,t);break;default:ur(n,e,t)}}function ug(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new zM),e.forEach(function(i){var r=qM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function $n(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Kt=o.stateNode,Jn=!1;break e;case 3:Kt=o.stateNode.containerInfo,Jn=!0;break e;case 4:Kt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(Kt===null)throw Error(ie(160));Kv(s,a,r),Kt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qv(e,n),e=e.sibling}function qv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if($n(e,n),fi(n),i&4){try{oo(3,n,n.return),Qu(3,n)}catch(x){Rt(n,n.return,x)}try{oo(5,n,n.return)}catch(x){Rt(n,n.return,x)}}break;case 1:$n(e,n),fi(n),i&512&&t!==null&&Ws(t,t.return);break;case 5:if($n(e,n),fi(n),i&512&&t!==null&&Ws(t,t.return),n.flags&32){var r=n.stateNode;try{mo(r,"")}catch(x){Rt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&v_(r,s),Xf(o,a);var u=Xf(o,s);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];c==="style"?E_(r,f):c==="dangerouslySetInnerHTML"?S_(r,f):c==="children"?mo(r,f):Nh(r,c,f,u)}switch(o){case"input":Vf(r,s);break;case"textarea":x_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Xs(r,!!s.multiple,s.defaultValue,!0):Xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[To]=s}catch(x){Rt(n,n.return,x)}}break;case 6:if($n(e,n),fi(n),i&4){if(n.stateNode===null)throw Error(ie(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Rt(n,n.return,x)}}break;case 3:if($n(e,n),fi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(x){Rt(n,n.return,x)}break;case 4:$n(e,n),fi(n);break;case 13:$n(e,n),fi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(fp=Nt())),i&4&&ug(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(rn=(u=rn)||c,$n(e,n),rn=u):$n(e,n),fi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(f=Ee=c;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:Ws(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){Rt(i,t,x)}}break;case 5:Ws(d,d.return);break;case 22:if(d.memoizedState!==null){fg(f);continue}}p!==null?(p.return=d,Ee=p):fg(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=M_("display",a))}catch(x){Rt(n,n.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){Rt(n,n.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,n),fi(n),i&4&&ug(n);break;case 21:break;default:$n(e,n),fi(n)}}function fi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Yv(t)){var i=t;break e}t=t.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(mo(r,""),i.flags&=-33);var s=lg(n);Md(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lg(n);Sd(n,o,a);break;default:throw Error(ie(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function HM(n,e,t){Ee=n,Zv(n)}function Zv(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ul;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||rn;o=ul;var u=rn;if(ul=a,(rn=l)&&!u)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?dg(r):l!==null?(l.return=a,Ee=l):dg(r);for(;s!==null;)Ee=s,Zv(s),s=s.sibling;Ee=r,ul=o,rn=u}cg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):cg(n)}}function cg(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Qu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ym(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}rn||e.flags&512&&yd(e)}catch(d){Rt(e,e.return,d)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function fg(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function dg(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Qu(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{yd(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{yd(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var GM=Math.ceil,Au=nr.ReactCurrentDispatcher,up=nr.ReactCurrentOwner,Vn=nr.ReactCurrentBatchConfig,et=0,$t=null,Ut=null,qt=0,Tn=0,js=Or(0),Bt=0,Po=null,ls=0,ec=0,cp=0,lo=null,pn=null,fp=0,oa=1/0,Bi=null,Ru=!1,Ed=null,Pr=null,cl=!1,Er=null,Cu=0,uo=0,Td=null,ql=-1,Zl=0;function cn(){return et&6?Nt():ql!==-1?ql:ql=Nt()}function Lr(n){return n.mode&1?et&2&&qt!==0?qt&-qt:bM.transition!==null?(Zl===0&&(Zl=U_()),Zl):(n=st,n!==0||(n=window.event,n=n===void 0?16:H_(n.type)),n):1}function ii(n,e,t,i){if(50<uo)throw uo=0,Td=null,Error(ie(185));Bo(n,t,i),(!(et&2)||n!==$t)&&(n===$t&&(!(et&2)&&(ec|=t),Bt===4&&yr(n,qt)),vn(n,i),t===1&&et===0&&!(e.mode&1)&&(oa=Nt()+500,qu&&kr()))}function vn(n,e){var t=n.callbackNode;bS(n,e);var i=du(n,n===$t?qt:0);if(i===0)t!==null&&Sm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Sm(t),e===1)n.tag===0?wM(hg.bind(null,n)):ov(hg.bind(null,n)),SM(function(){!(et&6)&&kr()}),t=null;else{switch(F_(i)){case 1:t=Oh;break;case 4:t=I_;break;case 16:t=fu;break;case 536870912:t=D_;break;default:t=fu}t=sx(t,Jv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Jv(n,e){if(ql=-1,Zl=0,et&6)throw Error(ie(327));var t=n.callbackNode;if(Zs()&&n.callbackNode!==t)return null;var i=du(n,n===$t?qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Pu(n,i);else{e=i;var r=et;et|=2;var s=ex();($t!==n||qt!==e)&&(Bi=null,oa=Nt()+500,is(n,e));do try{XM();break}catch(o){Qv(n,o)}while(!0);qh(),Au.current=s,et=r,Ut!==null?e=0:($t=null,qt=0,e=Bt)}if(e!==0){if(e===2&&(r=Zf(n),r!==0&&(i=r,e=wd(n,r))),e===1)throw t=Po,is(n,0),yr(n,i),vn(n,Nt()),t;if(e===6)yr(n,i);else{if(r=n.current.alternate,!(i&30)&&!WM(r)&&(e=Pu(n,i),e===2&&(s=Zf(n),s!==0&&(i=s,e=wd(n,s))),e===1))throw t=Po,is(n,0),yr(n,i),vn(n,Nt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Xr(n,pn,Bi);break;case 3:if(yr(n,i),(i&130023424)===i&&(e=fp+500-Nt(),10<e)){if(du(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=sd(Xr.bind(null,n,pn,Bi),e);break}Xr(n,pn,Bi);break;case 4:if(yr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GM(i/1960))-i,10<i){n.timeoutHandle=sd(Xr.bind(null,n,pn,Bi),i);break}Xr(n,pn,Bi);break;case 5:Xr(n,pn,Bi);break;default:throw Error(ie(329))}}}return vn(n,Nt()),n.callbackNode===t?Jv.bind(null,n):null}function wd(n,e){var t=lo;return n.current.memoizedState.isDehydrated&&(is(n,e).flags|=256),n=Pu(n,e),n!==2&&(e=pn,pn=t,e!==null&&bd(e)),n}function bd(n){pn===null?pn=n:pn.push.apply(pn,n)}function WM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(n,e){for(e&=~cp,e&=~ec,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ni(e),i=1<<t;n[t]=-1,e&=~i}}function hg(n){if(et&6)throw Error(ie(327));Zs();var e=du(n,0);if(!(e&1))return vn(n,Nt()),null;var t=Pu(n,e);if(n.tag!==0&&t===2){var i=Zf(n);i!==0&&(e=i,t=wd(n,i))}if(t===1)throw t=Po,is(n,0),yr(n,e),vn(n,Nt()),t;if(t===6)throw Error(ie(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Xr(n,pn,Bi),vn(n,Nt()),null}function dp(n,e){var t=et;et|=1;try{return n(e)}finally{et=t,et===0&&(oa=Nt()+500,qu&&kr())}}function us(n){Er!==null&&Er.tag===0&&!(et&6)&&Zs();var e=et;et|=1;var t=Vn.transition,i=st;try{if(Vn.transition=null,st=1,n)return n()}finally{st=i,Vn.transition=t,et=e,!(et&6)&&kr()}}function hp(){Tn=js.current,_t(js)}function is(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yM(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch($h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_u();break;case 3:sa(),_t(gn),_t(sn),np();break;case 5:tp(i);break;case 4:sa();break;case 13:_t(Mt);break;case 19:_t(Mt);break;case 10:Zh(i.type._context);break;case 22:case 23:hp()}t=t.return}if($t=n,Ut=n=Nr(n.current,null),qt=Tn=e,Bt=0,Po=null,cp=ec=ls=0,pn=lo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(t=Zr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}Zr=null}return n}function Qv(n,e){do{var t=Ut;try{if(qh(),$l.current=bu,wu){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wu=!1}if(os=0,jt=kt=Et=null,ao=!1,Ao=0,up.current=null,t===null||t.return===null){Bt=1,Po=e,Ut=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=eg(a);if(p!==null){p.flags&=-257,tg(p,a,o,s,e),p.mode&1&&Qm(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Qm(s,u,e),pp();break e}l=Error(ie(426))}}else if(xt&&o.mode&1){var m=eg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tg(m,a,o,s,e),Yh(aa(l,o));break e}}s=l=aa(l,o),Bt!==4&&(Bt=2),lo===null?lo=[s]:lo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Fv(s,l,e);$m(s,h);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Pr===null||!Pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Ov(s,o,e);$m(s,S);break e}}s=s.return}while(s!==null)}nx(t)}catch(b){e=b,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function ex(){var n=Au.current;return Au.current=bu,n===null?bu:n}function pp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),$t===null||!(ls&268435455)&&!(ec&268435455)||yr($t,qt)}function Pu(n,e){var t=et;et|=2;var i=ex();($t!==n||qt!==e)&&(Bi=null,is(n,e));do try{jM();break}catch(r){Qv(n,r)}while(!0);if(qh(),et=t,Au.current=i,Ut!==null)throw Error(ie(261));return $t=null,qt=0,Bt}function jM(){for(;Ut!==null;)tx(Ut)}function XM(){for(;Ut!==null&&!_S();)tx(Ut)}function tx(n){var e=rx(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,e===null?nx(n):Ut=e,up.current=null}function nx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=BM(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ut=null;return}}else if(t=kM(t,e,Tn),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Bt===0&&(Bt=5)}function Xr(n,e,t){var i=st,r=Vn.transition;try{Vn.transition=null,st=1,$M(n,e,t,i)}finally{Vn.transition=r,st=i}return null}function $M(n,e,t,i){do Zs();while(Er!==null);if(et&6)throw Error(ie(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ie(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(AS(n,s),n===$t&&(Ut=$t=null,qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||cl||(cl=!0,sx(fu,function(){return Zs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=st;st=1;var o=et;et|=4,up.current=null,VM(n,t),qv(t,n),hM(id),hu=!!nd,id=nd=null,n.current=t,HM(t),vS(),et=o,st=a,Vn.transition=s}else n.current=t;if(cl&&(cl=!1,Er=n,Cu=r),s=n.pendingLanes,s===0&&(Pr=null),SS(t.stateNode),vn(n,Nt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ru)throw Ru=!1,n=Ed,Ed=null,n;return Cu&1&&n.tag!==0&&Zs(),s=n.pendingLanes,s&1?n===Td?uo++:(uo=0,Td=n):uo=0,kr(),null}function Zs(){if(Er!==null){var n=F_(Cu),e=Vn.transition,t=st;try{if(Vn.transition=null,st=16>n?16:n,Er===null)var i=!1;else{if(n=Er,Er=null,Cu=0,et&6)throw Error(ie(331));var r=et;for(et|=4,Ee=n.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:oo(8,c,s)}var f=c.child;if(f!==null)f.return=c,Ee=f;else for(;Ee!==null;){c=Ee;var d=c.sibling,p=c.return;if($v(c),c===u){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=n.current;for(Ee=g;Ee!==null;){a=Ee;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Ee=v;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Qu(9,o)}}catch(b){Rt(o,o.return,b)}if(o===a){Ee=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ee=S;break e}Ee=o.return}}if(et=r,kr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(ju,n)}catch{}i=!0}return i}finally{st=t,Vn.transition=e}}return!1}function pg(n,e,t){e=aa(t,e),e=Fv(n,e,1),n=Cr(n,e,1),e=cn(),n!==null&&(Bo(n,1,e),vn(n,e))}function Rt(n,e,t){if(n.tag===3)pg(n,n,t);else for(;e!==null;){if(e.tag===3){pg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){n=aa(t,n),n=Ov(e,n,1),e=Cr(e,n,1),n=cn(),e!==null&&(Bo(e,1,n),vn(e,n));break}}e=e.return}}function YM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,$t===n&&(qt&t)===t&&(Bt===4||Bt===3&&(qt&130023424)===qt&&500>Nt()-fp?is(n,0):cp|=t),vn(n,e)}function ix(n,e){e===0&&(n.mode&1?(e=el,el<<=1,!(el&130023424)&&(el=4194304)):e=1);var t=cn();n=qi(n,e),n!==null&&(Bo(n,e,t),vn(n,t))}function KM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),ix(n,t)}function qM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),ix(n,t)}var rx;rx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return mn=!1,OM(n,e,t);mn=!!(n.flags&131072)}else mn=!1,xt&&e.flags&1048576&&lv(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(n,e),n=e.pendingProps;var r=na(e,sn.current);qs(e,t),r=rp(null,e,i,n,r,t);var s=sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,vu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qh(e),r.updater=Ju,e.stateNode=r,r._reactInternals=e,dd(e,i,n,t),e=md(null,e,i,!0,s,t)):(e.tag=0,xt&&s&&Xh(e),ln(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=JM(i),n=Zn(i,n),r){case 0:e=pd(null,e,i,n,t);break e;case 1:e=rg(null,e,i,n,t);break e;case 11:e=ng(null,e,i,n,t);break e;case 14:e=ig(null,e,i,Zn(i.type,n),t);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),pd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),rg(n,e,i,r,t);case 3:e:{if(Vv(e),n===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pv(n,e),Eu(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=aa(Error(ie(423)),e),e=sg(n,e,i,t,r);break e}else if(i!==r){r=aa(Error(ie(424)),e),e=sg(n,e,i,t,r);break e}else for(bn=Rr(e.stateNode.containerInfo.firstChild),An=e,xt=!0,Qn=null,t=dv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ia(),i===r){e=Zi(n,e,t);break e}ln(n,e,i,t)}e=e.child}return e;case 5:return mv(e),n===null&&ud(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,rd(i,r)?a=null:s!==null&&rd(i,s)&&(e.flags|=32),zv(n,e),ln(n,e,a,t),e.child;case 6:return n===null&&ud(e),null;case 13:return Hv(n,e,t);case 4:return ep(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ra(e,null,i,t):ln(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),ng(n,e,i,r,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,pt(Su,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!gn.current){e=Zi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),cd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),cd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,t),r=Hn(r),i=i(r),e.flags|=1,ln(n,e,i,t),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),ig(n,e,i,r,t);case 15:return kv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Kl(n,e),e.tag=1,_n(i)?(n=!0,vu(e)):n=!1,qs(e,t),Uv(e,i,r),dd(e,i,r,t),md(null,e,i,!0,n,t);case 19:return Gv(n,e,t);case 22:return Bv(n,e,t)}throw Error(ie(156,e.tag))};function sx(n,e){return N_(n,e)}function ZM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new ZM(n,e,t,i)}function mp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function JM(n){if(typeof n=="function")return mp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Dh)return 11;if(n===Uh)return 14}return 2}function Nr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")mp(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case Us:return rs(t.children,r,s,e);case Ih:a=8,r|=8;break;case Ff:return n=kn(12,t,e,r|2),n.elementType=Ff,n.lanes=s,n;case Of:return n=kn(13,t,e,r),n.elementType=Of,n.lanes=s,n;case kf:return n=kn(19,t,e,r),n.elementType=kf,n.lanes=s,n;case m_:return tc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case h_:a=10;break e;case p_:a=9;break e;case Dh:a=11;break e;case Uh:a=14;break e;case _r:a=16,i=null;break e}throw Error(ie(130,n==null?n:typeof n,""))}return e=kn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function rs(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function tc(n,e,t,i){return n=kn(22,n,i,e),n.elementType=m_,n.lanes=t,n.stateNode={isHidden:!1},n}function Vc(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Hc(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function QM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gp(n,e,t,i,r,s,a,o,l){return n=new QM(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(s),n}function eE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ax(n){if(!n)return Dr;n=n._reactInternals;e:{if(hs(n)!==n||n.tag!==1)throw Error(ie(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(n.tag===1){var t=n.type;if(_n(t))return av(n,t,e)}return e}function ox(n,e,t,i,r,s,a,o,l){return n=gp(t,i,!0,n,r,s,a,o,l),n.context=ax(null),t=n.current,i=cn(),r=Lr(t),s=ji(i,r),s.callback=e??null,Cr(t,s,r),n.current.lanes=r,Bo(n,r,i),vn(n,i),n}function nc(n,e,t,i){var r=e.current,s=cn(),a=Lr(r);return t=ax(t),e.context===null?e.context=t:e.pendingContext=t,e=ji(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Cr(r,e,a),n!==null&&(ii(n,r,a,s),Xl(n,r,a)),a}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function _p(n,e){mg(n,e),(n=n.alternate)&&mg(n,e)}function tE(){return null}var lx=typeof reportError=="function"?reportError:function(n){console.error(n)};function vp(n){this._internalRoot=n}ic.prototype.render=vp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ie(409));nc(n,e,null,null)};ic.prototype.unmount=vp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;us(function(){nc(null,n,null,null)}),e[Ki]=null}};function ic(n){this._internalRoot=n}ic.prototype.unstable_scheduleHydration=function(n){if(n){var e=B_();n={blockedOn:null,target:n,priority:e};for(var t=0;t<xr.length&&e!==0&&e<xr[t].priority;t++);xr.splice(t,0,n),t===0&&V_(n)}};function xp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gg(){}function nE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Lu(a);s.call(u)}}var a=ox(e,i,n,0,null,!1,!1,"",gg);return n._reactRootContainer=a,n[Ki]=a.current,Mo(n.nodeType===8?n.parentNode:n),us(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Lu(l);o.call(u)}}var l=gp(n,0,!1,null,null,!1,!1,"",gg);return n._reactRootContainer=l,n[Ki]=l.current,Mo(n.nodeType===8?n.parentNode:n),us(function(){nc(e,l,t,i)}),l}function sc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Lu(a);o.call(l)}}nc(e,a,n,r)}else a=nE(t,e,n,r,i);return Lu(a)}O_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ka(e.pendingLanes);t!==0&&(kh(e,t|1),vn(e,Nt()),!(et&6)&&(oa=Nt()+500,kr()))}break;case 13:us(function(){var i=qi(n,1);if(i!==null){var r=cn();ii(i,n,1,r)}}),_p(n,1)}};Bh=function(n){if(n.tag===13){var e=qi(n,134217728);if(e!==null){var t=cn();ii(e,n,134217728,t)}_p(n,134217728)}};k_=function(n){if(n.tag===13){var e=Lr(n),t=qi(n,e);if(t!==null){var i=cn();ii(t,n,e,i)}_p(n,e)}};B_=function(){return st};z_=function(n,e){var t=st;try{return st=n,e()}finally{st=t}};Yf=function(n,e,t){switch(e){case"input":if(Vf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ku(i);if(!r)throw Error(ie(90));__(i),Vf(i,r)}}}break;case"textarea":x_(n,t);break;case"select":e=t.value,e!=null&&Xs(n,!!t.multiple,e,!1)}};b_=dp;A_=us;var iE={usingClientEntryPoint:!1,Events:[Vo,Bs,Ku,T_,w_,dp]},Da={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=P_(n),n===null?null:n.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{ju=fl.inject(rE),Si=fl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;Ln.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xp(e))throw Error(ie(200));return eE(n,e,null,t)};Ln.createRoot=function(n,e){if(!xp(n))throw Error(ie(299));var t=!1,i="",r=lx;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gp(n,1,!1,null,null,t,!1,i,r),n[Ki]=e.current,Mo(n.nodeType===8?n.parentNode:n),new vp(e)};Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ie(188)):(n=Object.keys(n).join(","),Error(ie(268,n)));return n=P_(e),n=n===null?null:n.stateNode,n};Ln.flushSync=function(n){return us(n)};Ln.hydrate=function(n,e,t){if(!rc(e))throw Error(ie(200));return sc(null,n,e,!0,t)};Ln.hydrateRoot=function(n,e,t){if(!xp(n))throw Error(ie(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=lx;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=ox(e,null,n,1,t??null,r,!1,s,a),n[Ki]=e.current,Mo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ic(e)};Ln.render=function(n,e,t){if(!rc(e))throw Error(ie(200));return sc(null,n,e,!1,t)};Ln.unmountComponentAtNode=function(n){if(!rc(n))throw Error(ie(40));return n._reactRootContainer?(us(function(){sc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ki]=null})}),!0):!1};Ln.unstable_batchedUpdates=dp;Ln.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!rc(t))throw Error(ie(200));if(n==null||n._reactInternals===void 0)throw Error(ie(38));return sc(n,e,t,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(n){console.error(n)}}ux(),u_.exports=Ln;var sE=u_.exports,_g=sE;Df.createRoot=_g.createRoot,Df.hydrateRoot=_g.hydrateRoot;/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vg="popstate";function xg(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function aE(n={}){function e(i,r){var u;let s=(u=r.state)==null?void 0:u.masked,{pathname:a,search:o,hash:l}=s||i.location;return Ad("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default",s?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,r){return typeof r=="string"?r:Lo(r)}return lE(e,t,null,n)}function Tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function bi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oE(){return Math.random().toString(36).substring(2,10)}function yg(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Ad(n,e,t=null,i,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:t,key:e&&e.key||i||oE(),unstable_mask:r}}function Lo({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ya(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function lE(n,e,t,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o="POP",l=null,u=c();u==null&&(u=0,a.replaceState({...a.state,idx:u},""));function c(){return(a.state||{idx:null}).idx}function f(){o="POP";let m=c(),h=m==null?null:m-u;u=m,l&&l({action:o,location:x.location,delta:h})}function d(m,h){o="PUSH";let g=xg(m)?m:Ad(x.location,m,h);u=c()+1;let v=yg(g,u),S=x.createHref(g.unstable_mask||g);try{a.pushState(v,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:o,location:x.location,delta:1})}function p(m,h){o="REPLACE";let g=xg(m)?m:Ad(x.location,m,h);u=c();let v=yg(g,u),S=x.createHref(g.unstable_mask||g);a.replaceState(v,"",S),s&&l&&l({action:o,location:x.location,delta:0})}function _(m){return uE(m)}let x={get action(){return o},get location(){return n(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(vg,f),l=m,()=>{r.removeEventListener(vg,f),l=null}},createHref(m){return e(r,m)},createURL:_,encodeLocation(m){let h=_(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return a.go(m)}};return x}function uE(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Tt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:Lo(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function cx(n,e,t="/"){return cE(n,e,t,!1)}function cE(n,e,t,i){let r=typeof e=="string"?ya(e):e,s=Ji(r.pathname||"/",t);if(s==null)return null;let a=fx(n);fE(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let u=ME(s);o=yE(a[l],u,i)}return o}function fx(n,e=[],t=[],i="",r=!1){let s=(a,o,l=r,u)=>{let c={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(i)&&l)return;Tt(c.relativePath.startsWith(i),`Absolute route path "${c.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(i.length)}let f=ri([i,c.relativePath]),d=t.concat(c);a.children&&a.children.length>0&&(Tt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),fx(a.children,e,d,f,l)),!(a.path==null&&!a.index)&&e.push({path:f,score:vE(f,a.index),routesMeta:d})};return n.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))s(a,o);else for(let u of dx(a.path))s(a,o,!0,u)}),e}function dx(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=dx(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>n.startsWith("/")&&l===""?"/":l)}function fE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:xE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var dE=/^:[\w-]+$/,hE=3,pE=2,mE=1,gE=10,_E=-2,Sg=n=>n==="*";function vE(n,e){let t=n.split("/"),i=t.length;return t.some(Sg)&&(i+=_E),e&&(i+=pE),t.filter(r=>!Sg(r)).reduce((r,s)=>r+(dE.test(s)?hE:s===""?mE:gE),i)}function xE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function yE(n,e,t=!1){let{routesMeta:i}=n,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=Nu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&t&&!i[i.length-1].route.index&&(f=Nu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:ri([s,f.pathname]),pathnameBase:bE(ri([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=ri([s,f.pathnameBase]))}return a}function Nu(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=SE(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,{paramName:c,isOptional:f},d)=>{if(c==="*"){let _=o[d]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const p=o[d];return f&&!p?u[c]=void 0:u[c]=(p||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:n}}function SE(n,e=!1,t=!0){bi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l,u,c)=>{if(i.push({paramName:o,isOptional:l!=null}),l){let f=c.charAt(u+a.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function ME(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ji(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}var EE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function TE(n,e="/"){let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?ya(n):n,s;return t?(t=px(t),t.startsWith("/")?s=Mg(t.substring(1),"/"):s=Mg(t,e)):s=e,{pathname:s,search:AE(i),hash:RE(r)}}function Mg(n,e){let t=Iu(e).split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Gc(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function hx(n){let e=wE(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function yp(n,e,t,i=!1){let r;typeof n=="string"?r=ya(n):(r={...n},Tt(!r.pathname||!r.pathname.includes("?"),Gc("?","pathname","search",r)),Tt(!r.pathname||!r.pathname.includes("#"),Gc("#","pathname","hash",r)),Tt(!r.search||!r.search.includes("#"),Gc("#","search","hash",r)));let s=n===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let f=e.length-1;if(!i&&a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}o=f>=0?e[f]:"/"}let l=TE(r,o),u=a&&a!=="/"&&a.endsWith("/"),c=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}var px=n=>n.replace(/\/\/+/g,"/"),ri=n=>px(n.join("/")),Iu=n=>n.replace(/\/+$/,""),bE=n=>Iu(n).replace(/^\/*/,"/"),AE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,RE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,CE=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function PE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function LE(n){let e=n.map(t=>t.route.path).filter(Boolean);return ri(e)||"/"}var mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function gx(n,e){let t=n;if(typeof t!="string"||!EE.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,r=!1;if(mx)try{let s=new URL(window.location.href),a=t.startsWith("//")?new URL(s.protocol+t):new URL(t),o=Ji(a.pathname,e);a.origin===s.origin&&o!=null?t=o+a.search+a.hash:r=!0}catch{bi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:r,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _x=["POST","PUT","PATCH","DELETE"];new Set(_x);var NE=["GET",..._x];new Set(NE);var Sa=j.createContext(null);Sa.displayName="DataRouter";var ac=j.createContext(null);ac.displayName="DataRouterState";var vx=j.createContext(!1);function IE(){return j.useContext(vx)}var xx=j.createContext({isTransitioning:!1});xx.displayName="ViewTransition";var DE=j.createContext(new Map);DE.displayName="Fetchers";var UE=j.createContext(null);UE.displayName="Await";var Wn=j.createContext(null);Wn.displayName="Navigation";var Go=j.createContext(null);Go.displayName="Location";var ir=j.createContext({outlet:null,matches:[],isDataRoute:!1});ir.displayName="Route";var Sp=j.createContext(null);Sp.displayName="RouteError";var yx="REACT_ROUTER_ERROR",FE="REDIRECT",OE="ROUTE_ERROR_RESPONSE";function kE(n){if(n.startsWith(`${yx}:${FE}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function BE(n){if(n.startsWith(`${yx}:${OE}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new CE(e.status,e.statusText,e.data)}catch{}}function zE(n,{relative:e}={}){Tt(Wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=j.useContext(Wn),{hash:r,pathname:s,search:a}=jo(n,{relative:e}),o=s;return t!=="/"&&(o=s==="/"?t:ri([t,s])),i.createHref({pathname:o,search:a,hash:r})}function Wo(){return j.useContext(Go)!=null}function Ci(){return Tt(Wo(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Go).location}var Sx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mx(n){j.useContext(Wn).static||j.useLayoutEffect(n)}function VE(){let{isDataRoute:n}=j.useContext(ir);return n?eT():HE()}function HE(){Tt(Wo(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(Sa),{basename:e,navigator:t}=j.useContext(Wn),{matches:i}=j.useContext(ir),{pathname:r}=Ci(),s=JSON.stringify(hx(i)),a=j.useRef(!1);return Mx(()=>{a.current=!0}),j.useCallback((l,u={})=>{if(bi(a.current,Sx),!a.current)return;if(typeof l=="number"){t.go(l);return}let c=yp(l,JSON.parse(s),r,u.relative==="path");n==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ri([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,s,r,n])}j.createContext(null);function jo(n,{relative:e}={}){let{matches:t}=j.useContext(ir),{pathname:i}=Ci(),r=JSON.stringify(hx(t));return j.useMemo(()=>yp(n,JSON.parse(r),i,e==="path"),[n,r,i,e])}function GE(n,e){return Ex(n,e)}function Ex(n,e,t){var m;Tt(Wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=j.useContext(Wn),{matches:r}=j.useContext(ir),s=r[r.length-1],a=s?s.params:{},o=s?s.pathname:"/",l=s?s.pathnameBase:"/",u=s&&s.route;{let h=u&&u.path||"";wx(o,!u||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${o}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let c=Ci(),f;if(e){let h=typeof e=="string"?ya(e):e;Tt(l==="/"||((m=h.pathname)==null?void 0:m.startsWith(l)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${h.pathname}" was given in the \`location\` prop.`),f=h}else f=c;let d=f.pathname||"/",p=d;if(l!=="/"){let h=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(h.length).join("/")}let _=cx(n,{pathname:p});bi(u||_!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),bi(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=YE(_&&_.map(h=>Object.assign({},h,{params:Object.assign({},a,h.params),pathname:ri([l,i.encodeLocation?i.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?l:ri([l,i.encodeLocation?i.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),r,t);return e&&x?j.createElement(Go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},x):x}function WE(){let n=QE(),e=PE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:s},"ErrorBoundary")," or"," ",j.createElement("code",{style:s},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:r},t):null,a)}var jE=j.createElement(WE,null),Tx=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=BE(n.digest);t&&(n=t)}let e=n!==void 0?j.createElement(ir.Provider,{value:this.props.routeContext},j.createElement(Sp.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?j.createElement(XE,{error:n},e):e}};Tx.contextType=vx;var Wc=new WeakMap;function XE({children:n,error:e}){let{basename:t}=j.useContext(Wn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=kE(e.digest);if(i){let r=Wc.get(e);if(r)throw r;let s=gx(i.location,t);if(mx&&!Wc.get(e))if(s.isExternal||i.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:i.replace}));throw Wc.set(e,a),a}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return n}function $E({routeContext:n,match:e,children:t}){let i=j.useContext(Sa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(ir.Provider,{value:n},t)}function YE(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let r=n,s=i==null?void 0:i.errors;if(s!=null){let c=r.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);Tt(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,c+1))}let a=!1,o=-1;if(t&&i){a=i.renderFallback;for(let c=0;c<r.length;c++){let f=r[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(o=c),f.route.id){let{loaderData:d,errors:p}=i,_=f.route.loader&&!d.hasOwnProperty(f.route.id)&&(!p||p[f.route.id]===void 0);if(f.route.lazy||_){t.isStatic&&(a=!0),o>=0?r=r.slice(0,o+1):r=[r[0]];break}}}}let l=t==null?void 0:t.onError,u=i&&l?(c,f)=>{var d,p;l(c,{location:i.location,params:((p=(d=i.matches)==null?void 0:d[0])==null?void 0:p.params)??{},unstable_pattern:LE(i.matches),errorInfo:f})}:void 0;return r.reduceRight((c,f,d)=>{let p,_=!1,x=null,m=null;i&&(p=s&&f.route.id?s[f.route.id]:void 0,x=f.route.errorElement||jE,a&&(o<0&&d===0?(wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,m=null):o===d&&(_=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(r.slice(0,d+1)),g=()=>{let v;return p?v=x:_?v=m:f.route.Component?v=j.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=c,j.createElement($E,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:i!=null},children:v})};return i&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?j.createElement(Tx,{location:i.location,revalidation:i.revalidation,component:x,error:p,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:u}):g()},null)}function Mp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KE(n){let e=j.useContext(Sa);return Tt(e,Mp(n)),e}function qE(n){let e=j.useContext(ac);return Tt(e,Mp(n)),e}function ZE(n){let e=j.useContext(ir);return Tt(e,Mp(n)),e}function Ep(n){let e=ZE(n),t=e.matches[e.matches.length-1];return Tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function JE(){return Ep("useRouteId")}function QE(){var i;let n=j.useContext(Sp),e=qE("useRouteError"),t=Ep("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function eT(){let{router:n}=KE("useNavigate"),e=Ep("useNavigate"),t=j.useRef(!1);return Mx(()=>{t.current=!0}),j.useCallback(async(r,s={})=>{bi(t.current,Sx),t.current&&(typeof r=="number"?await n.navigate(r):await n.navigate(r,{fromRouteId:e,...s}))},[n,e])}var Eg={};function wx(n,e,t){!e&&!Eg[n]&&(Eg[n]=!0,bi(!1,t))}j.memo(tT);function tT({routes:n,future:e,state:t,isStatic:i,onError:r}){return Ex(n,void 0,{state:t,isStatic:i,onError:r})}function Za(n){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:r,static:s=!1,unstable_useTransitions:a}){Tt(!Wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=n.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:o,navigator:r,static:s,unstable_useTransitions:a,future:{}}),[o,r,s,a]);typeof t=="string"&&(t=ya(t));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default",unstable_mask:_}=t,x=j.useMemo(()=>{let m=Ji(u,o);return m==null?null:{location:{pathname:m,search:c,hash:f,state:d,key:p,unstable_mask:_},navigationType:i}},[o,u,c,f,d,p,i,_]);return bi(x!=null,`<Router basename="${o}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:j.createElement(Wn.Provider,{value:l},j.createElement(Go.Provider,{children:e,value:x}))}function iT({children:n,location:e}){return GE(Rd(n),e)}function Rd(n,e=[]){let t=[];return j.Children.forEach(n,(i,r)=>{if(!j.isValidElement(i))return;let s=[...e,r];if(i.type===j.Fragment){t.push.apply(t,Rd(i.props.children,s));return}Tt(i.type===Za,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Rd(i.props.children,s)),t.push(a)}),t}var Ql="get",eu="application/x-www-form-urlencoded";function oc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function rT(n){return oc(n)&&n.tagName.toLowerCase()==="button"}function sT(n){return oc(n)&&n.tagName.toLowerCase()==="form"}function aT(n){return oc(n)&&n.tagName.toLowerCase()==="input"}function oT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function lT(n,e){return n.button===0&&(!e||e==="_self")&&!oT(n)}var dl=null;function uT(){if(dl===null)try{new FormData(document.createElement("form"),0),dl=!1}catch{dl=!0}return dl}var cT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jc(n){return n!=null&&!cT.has(n)?(bi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):n}function fT(n,e){let t,i,r,s,a;if(sT(n)){let o=n.getAttribute("action");i=o?Ji(o,e):null,t=n.getAttribute("method")||Ql,r=jc(n.getAttribute("enctype"))||eu,s=new FormData(n)}else if(rT(n)||aT(n)&&(n.type==="submit"||n.type==="image")){let o=n.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=n.getAttribute("formaction")||o.getAttribute("action");if(i=l?Ji(l,e):null,t=n.getAttribute("formmethod")||o.getAttribute("method")||Ql,r=jc(n.getAttribute("formenctype"))||jc(o.getAttribute("enctype"))||eu,s=new FormData(o,n),!uT()){let{name:u,type:c,value:f}=n;if(c==="image"){let d=u?`${u}.`:"";s.append(`${d}x`,"0"),s.append(`${d}y`,"0")}else u&&s.append(u,f)}}else{if(oc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ql,i=null,r=eu,a=n}return s&&r==="text/plain"&&(a=s,s=void 0),{action:i,method:t.toLowerCase(),encType:r,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function bx(n,e,t,i){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?r.pathname.endsWith("/")?r.pathname=`${r.pathname}_.${i}`:r.pathname=`${r.pathname}.${i}`:r.pathname==="/"?r.pathname=`_root.${i}`:e&&Ji(r.pathname,e)==="/"?r.pathname=`${Iu(e)}/_root.${i}`:r.pathname=`${Iu(r.pathname)}.${i}`,r}async function dT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function hT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function pT(n,e,t){let i=await Promise.all(n.map(async r=>{let s=e.routes[r.route.id];if(s){let a=await dT(s,t);return a.links?a.links():[]}return[]}));return vT(i.flat(1).filter(hT).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Tg(n,e,t,i,r,s){let a=(l,u)=>t[u]?l.route.id!==t[u].route.id:!0,o=(l,u)=>{var c;return t[u].pathname!==l.pathname||((c=t[u].route.path)==null?void 0:c.endsWith("*"))&&t[u].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,u)=>a(l,u)||o(l,u)):s==="data"?e.filter((l,u)=>{var f;let c=i.routes[l.route.id];if(!c||!c.hasLoader)return!1;if(a(l,u)||o(l,u))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=t[0])==null?void 0:f.params)||{},nextUrl:new URL(n,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function mT(n,e,{includeHydrateFallback:t}={}){return gT(n.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),t&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function gT(n){return[...new Set(n)]}function _T(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function vT(n,e){let t=new Set;return new Set(e),n.reduce((i,r)=>{let s=JSON.stringify(_T(r));return t.has(s)||(t.add(s),i.push({key:s,link:r})),i},[])}function wp(){let n=j.useContext(Sa);return Tp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function xT(){let n=j.useContext(ac);return Tp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var bp=j.createContext(void 0);bp.displayName="FrameworkContext";function Ap(){let n=j.useContext(bp);return Tp(n,"You must render this element inside a <HydratedRouter> element"),n}function yT(n,e){let t=j.useContext(bp),[i,r]=j.useState(!1),[s,a]=j.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:u,onMouseLeave:c,onTouchStart:f}=e,d=j.useRef(null);j.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let x=h=>{h.forEach(g=>{a(g.isIntersecting)})},m=new IntersectionObserver(x,{threshold:.5});return d.current&&m.observe(d.current),()=>{m.disconnect()}}},[n]),j.useEffect(()=>{if(i){let x=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},_=()=>{r(!1),a(!1)};return t?n!=="intent"?[s,d,{}]:[s,d,{onFocus:Ua(o,p),onBlur:Ua(l,_),onMouseEnter:Ua(u,p),onMouseLeave:Ua(c,_),onTouchStart:Ua(f,p)}]:[!1,d,{}]}function Ua(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ST({page:n,...e}){let t=IE(),{router:i}=wp(),r=j.useMemo(()=>cx(i.routes,n,i.basename),[i.routes,n,i.basename]);return r?t?j.createElement(ET,{page:n,matches:r,...e}):j.createElement(TT,{page:n,matches:r,...e}):null}function MT(n){let{manifest:e,routeModules:t}=Ap(),[i,r]=j.useState([]);return j.useEffect(()=>{let s=!1;return pT(n,e,t).then(a=>{s||r(a)}),()=>{s=!0}},[n,e,t]),i}function ET({page:n,matches:e,...t}){let i=Ci(),{future:r}=Ap(),{basename:s}=wp(),a=j.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let o=bx(n,s,r.unstable_trailingSlashAwareDataRequests,"rsc"),l=!1,u=[];for(let c of e)typeof c.route.shouldRevalidate=="function"?l=!0:u.push(c.route.id);return l&&u.length>0&&o.searchParams.set("_routes",u.join(",")),[o.pathname+o.search]},[s,r.unstable_trailingSlashAwareDataRequests,n,i,e]);return j.createElement(j.Fragment,null,a.map(o=>j.createElement("link",{key:o,rel:"prefetch",as:"fetch",href:o,...t})))}function TT({page:n,matches:e,...t}){let i=Ci(),{future:r,manifest:s,routeModules:a}=Ap(),{basename:o}=wp(),{loaderData:l,matches:u}=xT(),c=j.useMemo(()=>Tg(n,e,u,s,i,"data"),[n,e,u,s,i]),f=j.useMemo(()=>Tg(n,e,u,s,i,"assets"),[n,e,u,s,i]),d=j.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,m=!1;if(e.forEach(g=>{var S;let v=s.routes[g.route.id];!v||!v.hasLoader||(!c.some(b=>b.route.id===g.route.id)&&g.route.id in l&&((S=a[g.route.id])!=null&&S.shouldRevalidate)||v.hasClientLoader?m=!0:x.add(g.route.id))}),x.size===0)return[];let h=bx(n,o,r.unstable_trailingSlashAwareDataRequests,"data");return m&&x.size>0&&h.searchParams.set("_routes",e.filter(g=>x.has(g.route.id)).map(g=>g.route.id).join(",")),[h.pathname+h.search]},[o,r.unstable_trailingSlashAwareDataRequests,l,i,s,c,e,n,a]),p=j.useMemo(()=>mT(f,s),[f,s]),_=MT(f);return j.createElement(j.Fragment,null,d.map(x=>j.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),p.map(x=>j.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),_.map(({key:x,link:m})=>j.createElement("link",{key:x,nonce:t.nonce,...m,crossOrigin:m.crossOrigin??t.crossOrigin})))}function wT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var bT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bT&&(window.__reactRouterVersion="7.14.2")}catch{}function AT({basename:n,children:e,unstable_useTransitions:t,window:i}){let r=j.useRef();r.current==null&&(r.current=aE({window:i,v5Compat:!0}));let s=r.current,[a,o]=j.useState({action:s.action,location:s.location}),l=j.useCallback(u=>{t===!1?o(u):j.startTransition(()=>o(u))},[t]);return j.useLayoutEffect(()=>s.listen(l),[s,l]),j.createElement(nT,{basename:n,children:e,location:a.location,navigationType:a.action,navigator:s,unstable_useTransitions:t})}var Ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rx=j.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:r,reloadDocument:s,replace:a,unstable_mask:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:p,..._},x){let{basename:m,navigator:h,unstable_useTransitions:g}=j.useContext(Wn),v=typeof c=="string"&&Ax.test(c),S=gx(c,m);c=S.to;let b=zE(c,{relative:r}),T=Ci(),A=null;if(o){let N=yp(o,[],T.unstable_mask?T.unstable_mask.pathname:"/",!0);m!=="/"&&(N.pathname=N.pathname==="/"?m:ri([m,N.pathname])),A=h.createHref(N)}let[y,R,P]=yT(i,_),C=PT(c,{replace:a,unstable_mask:o,state:l,target:u,preventScrollReset:f,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g});function O(N){e&&e(N),N.defaultPrevented||C(N)}let X=!(S.isExternal||s),q=j.createElement("a",{..._,...P,href:(X?A:void 0)||S.absoluteURL||b,onClick:X?O:e,ref:wT(x,R),target:u,"data-discover":!v&&t==="render"?"true":void 0});return y&&!v?j.createElement(j.Fragment,null,q,j.createElement(ST,{page:b})):q});Rx.displayName="Link";var Cd=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:r=!1,style:s,to:a,viewTransition:o,children:l,...u},c){let f=jo(a,{relative:u.relative}),d=Ci(),p=j.useContext(ac),{navigator:_,basename:x}=j.useContext(Wn),m=p!=null&&UT(f)&&o===!0,h=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,g=d.pathname,v=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;t||(g=g.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&x&&(v=Ji(v,x)||v);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=g===h||!r&&g.startsWith(h)&&g.charAt(S)==="/",T=v!=null&&(v===h||!r&&v.startsWith(h)&&v.charAt(h.length)==="/"),A={isActive:b,isPending:T,isTransitioning:m},y=b?e:void 0,R;typeof i=="function"?R=i(A):R=[i,b?"active":null,T?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(A):s;return j.createElement(Rx,{...u,"aria-current":y,className:R,ref:c,style:P,to:a,viewTransition:o},typeof l=="function"?l(A):l)});Cd.displayName="NavLink";var RT=j.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:r,state:s,method:a=Ql,action:o,onSubmit:l,relative:u,preventScrollReset:c,viewTransition:f,unstable_defaultShouldRevalidate:d,...p},_)=>{let{unstable_useTransitions:x}=j.useContext(Wn),m=IT(),h=DT(o,{relative:u}),g=a.toLowerCase()==="get"?"get":"post",v=typeof o=="string"&&Ax.test(o),S=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let T=b.nativeEvent.submitter,A=(T==null?void 0:T.getAttribute("formmethod"))||a,y=()=>m(T||b.currentTarget,{fetcherKey:e,method:A,navigate:t,replace:r,state:s,relative:u,preventScrollReset:c,viewTransition:f,unstable_defaultShouldRevalidate:d});x&&t!==!1?j.startTransition(()=>y()):y()};return j.createElement("form",{ref:_,method:g,action:h,onSubmit:i?l:S,...p,"data-discover":!v&&n==="render"?"true":void 0})});RT.displayName="Form";function CT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cx(n){let e=j.useContext(Sa);return Tt(e,CT(n)),e}function PT(n,{target:e,replace:t,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l,unstable_useTransitions:u}={}){let c=VE(),f=Ci(),d=jo(n,{relative:a});return j.useCallback(p=>{if(lT(p,e)){p.preventDefault();let _=t!==void 0?t:Lo(f)===Lo(d),x=()=>c(n,{replace:_,unstable_mask:i,state:r,preventScrollReset:s,relative:a,viewTransition:o,unstable_defaultShouldRevalidate:l});u?j.startTransition(()=>x()):x()}},[f,c,d,t,i,r,e,n,s,a,o,l,u])}var LT=0,NT=()=>`__${String(++LT)}__`;function IT(){let{router:n}=Cx("useSubmit"),{basename:e}=j.useContext(Wn),t=JE(),i=n.fetch,r=n.navigate;return j.useCallback(async(s,a={})=>{let{action:o,method:l,encType:u,formData:c,body:f}=fT(s,e);if(a.navigate===!1){let d=a.fetcherKey||NT();await i(d,t,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,flushSync:a.flushSync})}else await r(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:c,body:f,formMethod:a.method||l,formEncType:a.encType||u,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[i,r,e,t])}function DT(n,{relative:e}={}){let{basename:t}=j.useContext(Wn),i=j.useContext(ir);Tt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...jo(n||".",{relative:e})},a=Ci();if(n==null){s.search=a.search;let o=new URLSearchParams(s.search),l=o.getAll("index");if(l.some(c=>c==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let c=o.toString();s.search=c?`?${c}`:""}}return(!n||n===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:ri([t,s.pathname])),Lo(s)}function UT(n,{relative:e}={}){let t=j.useContext(xx);Tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Cx("useViewTransitionState"),r=jo(n,{relative:e});if(!t.isTransitioning)return!1;let s=Ji(t.currentLocation.pathname,i)||t.currentLocation.pathname,a=Ji(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Nu(r.pathname,a)!=null||Nu(r.pathname,s)!=null}/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=n=>{const e=OT(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},BT=j.createContext({}),zT=()=>j.useContext(BT),VT=j.forwardRef(({color:n,size:e,strokeWidth:t,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:f=!1,color:d="currentColor",className:p=""}=zT()??{},_=i??f?Number(t??c)*24/Number(e??u):t??c;return j.createElement("svg",{ref:l,...Xc,width:e??u??Xc.width,height:e??u??Xc.height,stroke:n??d,strokeWidth:_,className:Px("lucide",p,r),...!s&&!kT(o)&&{"aria-hidden":"true"},...o},[...a.map(([x,m])=>j.createElement(x,m)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=(n,e)=>{const t=j.forwardRef(({className:i,...r},s)=>j.createElement(VT,{ref:s,iconNode:e,className:Px(`lucide-${FT(wg(n))}`,`lucide-${n}`,i),...r}));return t.displayName=wg(n),t};/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],GT=jn("arrow-right",HT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],jT=jn("arrow-up-right",WT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],$T=jn("braces",XT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],KT=jn("code-xml",YT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ZT=jn("external-link",qT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],QT=jn("gamepad-2",JT);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],t1=jn("layers",e1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],i1=jn("map-pin",n1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],s1=jn("mouse",r1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],o1=jn("rocket",a1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],u1=jn("sparkles",l1);/**
 * @license lucide-react v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],f1=jn("x",c1);function d1(){return z.jsxs("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500",children:[z.jsx(s1,{className:"w-6 h-6"}),z.jsx("div",{className:"mt-2 animate-bounce",children:z.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:z.jsx("path",{d:"M6 9l6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="184",h1=0,bg=1,p1=2,tu=1,m1=2,Ja=3,Qi=0,xn=1,vi=2,Xi=0,Js=1,Ag=2,Rg=3,Cg=4,g1=5,Yr=100,_1=101,v1=102,x1=103,y1=104,S1=200,M1=201,E1=202,T1=203,Pd=204,Ld=205,w1=206,b1=207,A1=208,R1=209,C1=210,P1=211,L1=212,N1=213,I1=214,Nd=0,Id=1,Dd=2,la=3,Ud=4,Fd=5,Od=6,kd=7,Lx=0,D1=1,U1=2,Ei=0,Nx=1,Ix=2,Dx=3,Cp=4,Ux=5,Fx=6,Ox=7,Pg="attached",F1="detached",kx=300,cs=301,ua=302,$c=303,Yc=304,lc=306,ca=1e3,xi=1001,Du=1002,zt=1003,Bx=1004,Qa=1005,Vt=1006,nu=1007,Gi=1008,wn=1009,zx=1010,Vx=1011,No=1012,Pp=1013,Ai=1014,Bn=1015,er=1016,Lp=1017,Np=1018,Io=1020,Hx=35902,Gx=35899,Wx=1021,jx=1022,zn=1023,tr=1026,Qr=1027,Ip=1028,Dp=1029,fs=1030,Up=1031,Fp=1033,iu=33776,ru=33777,su=33778,au=33779,Bd=35840,zd=35841,Vd=35842,Hd=35843,Gd=36196,Wd=37492,jd=37496,Xd=37488,$d=37489,Uu=37490,Yd=37491,Kd=37808,qd=37809,Zd=37810,Jd=37811,Qd=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,ah=37819,oh=37820,lh=37821,uh=36492,ch=36494,fh=36495,dh=36283,hh=36284,Fu=36285,ph=36286,Do=2300,Uo=2301,Kc=2302,Lg=2303,Ng=2400,Ig=2401,Dg=2402,O1=2500,k1=0,Xx=1,mh=2,B1=3200,gh=0,z1=1,Sr="",Xt="srgb",Cn="srgb-linear",Ou="linear",nt="srgb",vs=7680,Ug=519,V1=512,H1=513,G1=514,Op=515,W1=516,j1=517,kp=518,X1=519,_h=35044,Fg="300 es",yi=2e3,Fo=2001;function $1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Y1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K1(){const n=Oo("canvas");return n.style.display="block",n}const Og={};function ku(...n){const e="THREE."+n.shift();console.log(e,...n)}function $x(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function we(...n){n=$x(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pe(...n){n=$x(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function vh(...n){const e=n.join(" ");e in Og||(Og[e]=!0,we(...n))}function q1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Z1={[Nd]:Id,[Dd]:Od,[Ud]:kd,[la]:Fd,[Id]:Nd,[Od]:Dd,[kd]:Ud,[Fd]:la};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const co=Math.PI/180,fa=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Bp(n,e){return(n%e+e)%e}function J1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Q1(n,e,t){return n!==e?(t-n)/(e-n):0}function fo(n,e,t){return(1-t)*n+t*e}function ew(n,e,t,i){return fo(n,e,1-Math.exp(-t*i))}function tw(n,e=1){return e-Math.abs(Bp(n,e*2)-e)}function nw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sw(n,e){return n+Math.random()*(e-n)}function aw(n){return n*(.5-Math.random())}function ow(n){n!==void 0&&(kg=n);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lw(n){return n*co}function uw(n){return n*fa}function cw(n){return(n&n-1)===0&&n!==0}function fw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hw(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*p,o*c,o*u);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pw={DEG2RAD:co,RAD2DEG:fa,generateUUID:si,clamp:$e,euclideanModulo:Bp,mapLinear:J1,inverseLerp:Q1,lerp:fo,damp:ew,pingpong:tw,smoothstep:nw,smootherstep:iw,randInt:rw,randFloat:sw,randFloatSpread:aw,seededRandom:ow,degToRad:lw,radToDeg:uw,isPowerOfTwo:cw,ceilPowerOfTwo:fw,floorPowerOfTwo:dw,setQuaternionFromProperEuler:hw,normalize:it,denormalize:ei},qp=class qp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qp.prototype.isVector2=!0;let Je=qp;class rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(f!==x||l!==d||u!==p||c!==_){let m=l*d+u*p+c*_+f*x;m<0&&(d=-d,p=-p,_=-_,x=-x,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);h=Math.sin(h*g)/v,o=Math.sin(o*g)/v,l=l*h+d*o,u=u*h+p*o,c=c*h+_*o,f=f*h+x*o}else{l=l*h+d*o,u=u*h+p*o,c=c*h+_*o,f=f*h+x*o;const g=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=g,u*=g,c*=g,f*=g}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-o*p,e[t+2]=u*_+c*p+o*d-l*f,e[t+3]=c*_-o*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,t=Math.sin(t*u)/c,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let U=Zp;const qc=new U,Bg=new rr,Jp=class Jp{constructor(e,t,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],m=r[3],h=r[6],g=r[1],v=r[4],S=r[7],b=r[2],T=r[5],A=r[8];return s[0]=a*x+o*g+l*b,s[3]=a*m+o*v+l*T,s[6]=a*h+o*S+l*A,s[1]=u*x+c*g+f*b,s[4]=u*m+c*v+f*T,s[7]=u*h+c*S+f*A,s[2]=d*x+p*g+_*b,s[5]=d*m+p*v+_*T,s[8]=d*h+p*S+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,p=u*s-a*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(c*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-u*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jp.prototype.isMatrix3=!0;let Ue=Jp;const Zc=new Ue,zg=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mw(){const n={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Ou:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cn]:{primaries:e,whitePoint:i,transfer:Ou,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Xe=mw();function $i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class gw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xs===void 0&&(xs=Oo("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$i(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($i(t[i]/255)*255):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let vw=0;const Qc=new U;class Yt extends ps{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=xi,r=xi,s=Vt,a=Gi,o=zn,l=wn,u=Yt.DEFAULT_ANISOTROPY,c=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=si(),this.name="",this.source=new zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=kx;Yt.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(p+1)/2,b=(h+1)/2,T=(c+d)/4,A=(f+x)/4,y=(_+m)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-x)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let ft=Qp;class xw extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Yt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new zp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends xw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yx extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yw extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,t,i,r,s,a,o,l,u,c,f,d,p,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,p,_,x,m)}set(e,t,i,r,s,a,o,l,u,c,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ys.setFromMatrixColumn(e,0).length(),s=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*f,_=o*c,x=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-x*u,t[9]=-o*l,t[2]=x-d*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,x=u*f;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,x=u*f;t[0]=d-x*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=x-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*f,_=o*c,x=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+x,t[1]=l*f,t[5]=x*u+d,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*u,_=o*l,x=o*u;t[0]=l*c,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,p=a*u,_=o*l,x=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+x,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sw,e,Mw)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),cr.crossVectors(i,Mn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),cr.crossVectors(i,Mn)),cr.normalize(),hl.crossVectors(Mn,cr),r[0]=cr.x,r[4]=hl.x,r[8]=Mn.x,r[1]=cr.y,r[5]=hl.y,r[9]=Mn.y,r[2]=cr.z,r[6]=hl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],m=i[10],h=i[14],g=i[3],v=i[7],S=i[11],b=i[15],T=r[0],A=r[4],y=r[8],R=r[12],P=r[1],C=r[5],O=r[9],X=r[13],q=r[2],N=r[6],W=r[10],B=r[14],k=r[3],$=r[7],ee=r[11],oe=r[15];return s[0]=a*T+o*P+l*q+u*k,s[4]=a*A+o*C+l*N+u*$,s[8]=a*y+o*O+l*W+u*ee,s[12]=a*R+o*X+l*B+u*oe,s[1]=c*T+f*P+d*q+p*k,s[5]=c*A+f*C+d*N+p*$,s[9]=c*y+f*O+d*W+p*ee,s[13]=c*R+f*X+d*B+p*oe,s[2]=_*T+x*P+m*q+h*k,s[6]=_*A+x*C+m*N+h*$,s[10]=_*y+x*O+m*W+h*ee,s[14]=_*R+x*X+m*B+h*oe,s[3]=g*T+v*P+S*q+b*k,s[7]=g*A+v*C+S*N+b*$,s[11]=g*y+v*O+S*W+b*ee,s[15]=g*R+v*X+S*B+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15],g=l*p-u*d,v=o*p-u*f,S=o*d-l*f,b=a*p-u*c,T=a*d-l*c,A=a*f-o*c;return t*(x*g-m*v+h*S)-i*(_*g-m*b+h*T)+r*(_*v-x*b+h*A)-s*(_*S-x*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],g=t*o-i*a,v=t*l-r*a,S=t*u-s*a,b=i*l-r*o,T=i*u-s*o,A=r*u-s*l,y=c*x-f*_,R=c*m-d*_,P=c*h-p*_,C=f*m-d*x,O=f*h-p*x,X=d*h-p*m,q=g*X-v*O+S*C+b*P-T*R+A*y;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/q;return e[0]=(o*X-l*O+u*C)*N,e[1]=(r*O-i*X-s*C)*N,e[2]=(x*A-m*T+h*b)*N,e[3]=(d*T-f*A-p*b)*N,e[4]=(l*P-a*X-u*R)*N,e[5]=(t*X-r*P+s*R)*N,e[6]=(m*S-_*A-h*v)*N,e[7]=(c*A-d*S+p*v)*N,e[8]=(a*O-o*P+u*y)*N,e[9]=(i*P-t*O-s*y)*N,e[10]=(_*T-x*S+h*g)*N,e[11]=(f*S-c*T-p*g)*N,e[12]=(o*R-a*C-l*y)*N,e[13]=(t*C-i*R+r*y)*N,e[14]=(x*v-_*b-m*g)*N,e[15]=(c*b-f*v+d*g)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,p=s*c,_=s*f,x=a*c,m=a*f,h=o*f,g=l*u,v=l*c,S=l*f,b=i.x,T=i.y,A=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+S)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(d+h))*T,r[6]=(m+g)*T,r[7]=0,r[8]=(_+v)*A,r[9]=(m-g)*A,r[10]=(1-(d+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ys.set(r[0],r[1],r[2]).length();const o=ys.set(r[4],r[5],r[6]).length(),l=ys.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yn.copy(this);const u=1/a,c=1/o,f=1/l;return Yn.elements[0]*=u,Yn.elements[1]*=u,Yn.elements[2]*=u,Yn.elements[4]*=c,Yn.elements[5]*=c,Yn.elements[6]*=c,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=yi,l=!1){const u=this.elements,c=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let _,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===yi)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Fo)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=yi,l=!1){const u=this.elements,c=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===yi)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Fo)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=_,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gu.prototype.isMatrix4=!0;let He=Gu;const ys=new U,Yn=new He,Sw=new U(0,0,0),Mw=new U(1,1,1),cr=new U,hl=new U,Mn=new U,Hg=new He,Gg=new rr;class Ur{constructor(e=0,t=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ew=0;const Wg=new U,Ss=new rr,Ii=new He,pl=new U,Fa=new U,Tw=new U,ww=new rr,jg=new U(1,0,0),Xg=new U(0,1,0),$g=new U(0,0,1),Yg={type:"added"},bw={type:"removed"},Ms={type:"childadded",child:null},ef={type:"childremoved",child:null};class vt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new U,t=new Ur,i=new rr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Ue}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(jg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis($g,e)}translateOnAxis(e,t){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis($g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pl.copy(e):pl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Fa,pl,this.up):Ii.lookAt(pl,Fa,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ss.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bw),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,ww,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new U(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class es extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Aw={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),h=this._getHandJoint(u,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Aw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function nf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=Bp(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=nf(a,s,e+1/3),this.g=nf(a,s,e),this.b=nf(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=qx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Xe.workingToColorSpace(nn.copy(this),e),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Xt){Xe.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(ml);const i=fo(fr.h,ml.h,t),r=fo(fr.s,ml.s,t),s=fo(fr.l,ml.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Fe;Fe.NAMES=qx;class Rw extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kn=new U,Di=new U,rf=new U,Ui=new U,Es=new U,Ts=new U,Kg=new U,sf=new U,af=new U,of=new U,lf=new ft,uf=new ft,cf=new ft;class ti{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),Di.subVectors(i,t),rf.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(Di),l=Kn.dot(rf),u=Di.dot(Di),c=Di.dot(rf),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return lf.setScalar(0),uf.setScalar(0),cf.setScalar(0),lf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lf,s.x),a.addScaledVector(uf,s.y),a.addScaledVector(cf,s.z),a}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),Di.subVectors(e,t),Kn.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Kn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Es.subVectors(r,i),Ts.subVectors(s,i),sf.subVectors(e,i);const l=Es.dot(sf),u=Ts.dot(sf);if(l<=0&&u<=0)return t.copy(i);af.subVectors(e,r);const c=Es.dot(af),f=Ts.dot(af);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Es,a);of.subVectors(e,s);const p=Es.dot(of),_=Ts.dot(of);if(_>=0&&p<=_)return t.copy(s);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(Ts,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Kg.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(Kg,o);const h=1/(m+x+d);return a=x*h,o=d*h,t.copy(i).addScaledVector(Es,a).addScaledVector(Ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),_l.subVectors(this.max,Oa),ws.subVectors(e.a,Oa),bs.subVectors(e.b,Oa),As.subVectors(e.c,Oa),dr.subVectors(bs,ws),hr.subVectors(As,bs),zr.subVectors(ws,As);let t=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!ff(t,ws,bs,As,_l)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,ws,bs,As,_l))?!1:(vl.crossVectors(dr,hr),t=[vl.x,vl.y,vl.z],ff(t,ws,bs,As,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new U,new U,new U,new U,new U,new U,new U,new U],qn=new U,gl=new sr,ws=new U,bs=new U,As=new U,dr=new U,hr=new U,zr=new U,Oa=new U,_l=new U,vl=new U,Vr=new U;function ff(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vr.fromArray(n,s);const o=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),u=t.dot(Vr),c=i.dot(Vr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Dt=new U,xl=new Je;let Cw=0;class fn extends ps{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zx extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jx extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ai extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Pw=new sr,ka=new U,df=new U;class Pi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(df)),this.expandByPoint(ka.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lw=0;const Dn=new He,hf=new vt,Rs=new U,En=new sr,Ba=new sr,Wt=new U;class Xn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($1(e)?Jx:Zx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ai(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(En.min,Ba.min),En.expandByPoint(Wt),Wt.addVectors(En.max,Ba.max),En.expandByPoint(Wt)):(En.expandByPoint(Ba.min),En.expandByPoint(Ba.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Wt.fromBufferAttribute(o,u),l&&(Rs.fromBufferAttribute(e,u),Wt.add(Rs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new U,l[y]=new U;const u=new U,c=new U,f=new U,d=new Je,p=new Je,_=new Je,x=new U,m=new U;function h(y,R,P){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,P),c.sub(u),f.sub(u),p.sub(d),_.sub(d);const C=1/(p.x*_.y-_.x*p.y);isFinite(C)&&(x.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(C),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(C),o[y].add(x),o[R].add(x),o[P].add(x),l[y].add(m),l[R].add(m),l[P].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,R=g.length;y<R;++y){const P=g[y],C=P.start,O=P.count;for(let X=C,q=C+O;X<q;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new U,S=new U,b=new U,T=new U;function A(y){b.fromBufferAttribute(r,y),T.copy(b);const R=o[y];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),S.crossVectors(T,R);const C=S.dot(l[y])<0?-1:1;a.setXYZW(y,v.x,v.y,v.z,C)}for(let y=0,R=g.length;y<R;++y){const P=g[y],C=P.start,O=P.count;for(let X=C,q=C+O;X<q;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new fn(d,c,f)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new U;class Vp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ku("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ku("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Iw=0;class wi extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iw++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Js,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Ld,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new U,pf=new U,yl=new U,pr=new U,mf=new U,Sl=new U,gf=new U;class uc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pf.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(pf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yl),o=pr.dot(this.direction),l=-pr.dot(yl),u=pr.lengthSq(),c=Math.abs(1-a*a);let f,d,p,_;if(c>0)if(f=a*l-o,d=a*o-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const x=1/c;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pf).addScaledVector(yl,d),p}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,r,s){mf.subVectors(t,e),Sl.subVectors(i,e),gf.crossVectors(mf,Sl);let a=this.direction.dot(gf),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pr.subVectors(this.origin,e);const l=o*this.direction.dot(Sl.crossVectors(pr,Sl));if(l<0)return null;const u=o*this.direction.dot(mf.cross(pr));if(u<0||l+u>a)return null;const c=-o*pr.dot(gf);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ts extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qg=new He,Hr=new uc,Ml=new Pi,Zg=new U,El=new U,Tl=new U,wl=new U,_f=new U,bl=new U,Jg=new U,Al=new U;class Pn extends vt{constructor(e=new Xn,t=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(_f.fromBufferAttribute(f,e),a?bl.addScaledVector(_f,c):bl.addScaledVector(_f.sub(t),c))}t.add(bl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ml,Zg)===null||Hr.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(qg.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(qg),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const T=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);r=Rl(this,h,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);r=Rl(this,a,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=v;S<b;S+=3){const T=S,A=S+1,y=S+2;r=Rl(this,h,e,i,u,c,f,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const g=m,v=m+1,S=m+2;r=Rl(this,a,e,i,u,c,f,g,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Dw(n,e,t,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Qi,o),l===null)return null;Al.copy(o),Al.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Al);return u<t.near||u>t.far?null:{distance:u,point:Al.clone(),object:n}}function Rl(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,El),n.getVertexPosition(l,Tl),n.getVertexPosition(u,wl);const c=Dw(n,e,t,i,El,Tl,wl,Jg);if(c){const f=new U;ti.getBarycoord(Jg,El,Tl,wl,f),r&&(c.uv=ti.getInterpolatedAttribute(r,o,l,u,f,new Je)),s&&(c.uv1=ti.getInterpolatedAttribute(s,o,l,u,f,new Je)),a&&(c.normal=ti.getInterpolatedAttribute(a,o,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new U,materialIndex:0};ti.getNormal(El,Tl,wl,d.normal),c.face=d,c.barycoord=f}return c}const za=new ft,Qg=new ft,e0=new ft,Uw=new ft,t0=new He,Cl=new U,vf=new Pi,n0=new He,xf=new uc;class Fw extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pg,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vf.copy(this.boundingSphere),vf.applyMatrix4(r),e.ray.intersectsSphere(vf)!==!1&&(n0.copy(r).invert(),xf.copy(e.ray).applyMatrix4(n0),!(this.boundingBox!==null&&xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Pg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F1?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Qg.fromBufferAttribute(r.attributes.skinIndex,e),e0.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(za.copy(t),t.set(0,0,0,0)):(za.set(...t,1),t.set(0,0,0)),za.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=e0.getComponent(s);if(a!==0){const o=Qg.getComponent(s);t0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Uw.copy(za).applyMatrix4(t0),a)}}return t.isVector4&&(t.w=za.w),t.applyMatrix4(this.bindMatrixInverse)}}class Qx extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hp extends Yt{constructor(e=null,t=1,i=1,r,s,a,o,l,u=zt,c=zt,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const i0=new He,Ow=new He;class Gp{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new He;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Ow;i0.multiplyMatrices(o,t[s]),i0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Hp(t,e,e,zn,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(we("Skeleton: No bone found with UUID:",s),a=new Qx),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class xh extends fn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new He,r0=new He,Pl=[],s0=new sr,kw=new He,Va=new Pn,Ha=new Pi;class ey extends Pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,kw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),s0.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(s0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Ha.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(Ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Va.geometry=this.geometry,Va.material=this.material,Va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(i),e.ray.intersectsSphere(Ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Cs),r0.multiplyMatrices(i,Cs),Va.matrixWorld=r0,Va.raycast(e,Pl);for(let a=0,o=Pl.length;a<o;a++){const l=Pl[a];l.instanceId=s,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hp(new Float32Array(r*this.count),r,this.count,Ip,Bn));const s=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yf=new U,Bw=new U,zw=new Ue;class $r{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yf.subVectors(i,t).cross(Bw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(yf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zw.getNormalMatrix(e),r=this.coplanarPoint(yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Pi,Vw=new Je(.5,.5),Ll=new U;class Wp{constructor(e=new $r,t=new $r,i=new $r,r=new $r,s=new $r,a=new $r){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],f=s[5],d=s[6],p=s[7],_=s[8],x=s[9],m=s[10],h=s[11],g=s[12],v=s[13],S=s[14],b=s[15];if(r[0].setComponents(u-a,p-c,h-_,b-g).normalize(),r[1].setComponents(u+a,p+c,h+_,b+g).normalize(),r[2].setComponents(u+o,p+f,h+x,b+v).normalize(),r[3].setComponents(u-o,p-f,h-x,b-v).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(u-l,p-d,h-m,b-S).normalize();else if(r[4].setComponents(u-l,p-d,h-m,b-S).normalize(),t===yi)r[5].setComponents(u+l,p+d,h+m,b+S).normalize();else if(t===Fo)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const t=Vw.distanceTo(e.center);return Gr.radius=.7071067811865476+t,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new U,zu=new U,a0=new He,Ga=new uc,Nl=new Pi,Sf=new U,o0=new U;class jp extends vt{constructor(e=new Xn,t=new ty){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bu.fromBufferAttribute(t,r-1),zu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bu.distanceTo(zu);e.setAttribute("lineDistance",new ai(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;a0.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(a0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=c.getX(x),g=c.getX(x+1),v=Il(this,e,Ga,l,h,g,x);v&&t.push(v)}if(this.isLineLoop){const x=c.getX(_-1),m=c.getX(p),h=Il(this,e,Ga,l,x,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=u){const h=Il(this,e,Ga,l,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=Il(this,e,Ga,l,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Il(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Bu.fromBufferAttribute(o,r),zu.fromBufferAttribute(o,s),t.distanceSqToSegment(Bu,zu,Sf,o0)>i)return;Sf.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Sf);if(!(u<e.near||u>e.far))return{distance:u,point:o0.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const l0=new U,u0=new U;class Hw extends jp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)l0.fromBufferAttribute(t,r),u0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+l0.distanceTo(u0);e.setAttribute("lineDistance",new ai(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gw extends jp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ny extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const c0=new He,yh=new uc,Dl=new Pi,Ul=new U;class Ww extends vt{constructor(e=new Xn,t=new ny){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),Dl.radius+=s,e.ray.intersectsSphere(Dl)===!1)return;c0.copy(r).invert(),yh.copy(e.ray).applyMatrix4(c0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=u.getX(_);Ul.fromBufferAttribute(f,m),f0(Ul,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Ul.fromBufferAttribute(f,_),f0(Ul,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function f0(n,e,t,i,r,s,a){const o=yh.distanceSqToPoint(n);if(o<t){const l=new U;yh.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class iy extends Yt{constructor(e=[],t=cs,i,r,s,a,o,l,u,c){super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class da extends Yt{constructor(e,t,i=Ai,r,s,a,o=zt,l=zt,u,c=tr,f=1){if(c!==tr&&c!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jw extends da{constructor(e,t=Ai,i=cs,r,s,a=zt,o=zt,l,u=tr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,t,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ry extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xo extends Xn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ai(u,3)),this.setAttribute("normal",new ai(c,3)),this.setAttribute("uv",new ai(f,2));function _(x,m,h,g,v,S,b,T,A,y,R){const P=S/A,C=b/y,O=S/2,X=b/2,q=T/2,N=A+1,W=y+1;let B=0,k=0;const $=new U;for(let ee=0;ee<W;ee++){const oe=ee*C-X;for(let he=0;he<N;he++){const Ge=he*P-O;$[x]=Ge*g,$[m]=oe*v,$[h]=q,u.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[h]=T>0?1:-1,c.push($.x,$.y,$.z),f.push(he/A),f.push(1-ee/y),B+=1}}for(let ee=0;ee<y;ee++)for(let oe=0;oe<A;oe++){const he=d+oe+N*ee,Ge=d+oe+N*(ee+1),Ke=d+(oe+1)+N*(ee+1),Ne=d+(oe+1)+N*ee;l.push(he,Ge,Ne),l.push(Ge,Ke,Ne),k+=6}o.addGroup(p,k,R),p+=k,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cc extends Xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,p=[],_=[],x=[],m=[];for(let h=0;h<c;h++){const g=h*d-a;for(let v=0;v<u;v++){const S=v*f-s;_.push(S,-g,0),x.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const v=g+u*h,S=g+u*(h+1),b=g+1+u*(h+1),T=g+1+u*h;p.push(v,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new ai(_,3)),this.setAttribute("normal",new ai(x,3)),this.setAttribute("uv",new ai(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}function ha(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(d0(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(d0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=ha(n[t]);for(const r in i)e[r]=i[r]}return e}function d0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const $w={clone:ha,merge:on};var Yw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yw,this.fragmentShader=Kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=Xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qw extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xp extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Li extends Xp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zw extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jw extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qw(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function h0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function ay(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Ma{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class eb extends Ma{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ng,endingEnd:Ng}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ig:s=e,o=2*t-i;break;case Dg:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ig:a=e,l=2*i-t;break;case Dg:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const u=(i-t)*.5,c=this.valueSize;this._weightPrev=u/(t-o),this._weightNext=u/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),x=_*_,m=x*_,h=-d*m+2*d*x-d*_,g=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,v=(-1-p)*m+(1.5+p)*x+.5*_,S=p*m-p*x;for(let b=0;b!==o;++b)s[b]=h*a[c+b]+g*a[u+b]+v*a[l+b]+S*a[f+b];return s}}class tb extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=(i-t)/(r-t),f=1-c;for(let d=0;d!==o;++d)s[d]=a[u+d]*f+a[l+d]*c;return s}}class nb extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ib extends Ma{interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,c=this.settings||this.DefaultSettings_,f=c.inTangents,d=c.outTangents;if(!f||!d){const x=(i-t)/(r-t),m=1-x;for(let h=0;h!==o;++h)s[h]=a[u+h]*m+a[l+h]*x;return s}const p=o*2,_=e-1;for(let x=0;x!==o;++x){const m=a[u+x],h=a[l+x],g=_*p+x*2,v=d[g],S=d[g+1],b=e*p+x*2,T=f[b],A=f[b+1];let y=(i-t)/(r-t),R,P,C,O,X;for(let q=0;q<8;q++){R=y*y,P=R*y,C=1-y,O=C*C,X=O*C;const W=X*t+3*O*y*v+3*C*R*T+P*r-i;if(Math.abs(W)<1e-10)break;const B=3*O*(v-t)+6*C*y*(T-v)+3*R*(r-T);if(Math.abs(B)<1e-10)break;y=y-W/B,y=Math.max(0,Math.min(1,y))}s[x]=X*m+3*O*y*S+3*C*R*A+P*h}return s}}class li{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new ib(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case Uo:t=this.InterpolantFactoryMethodLinear;break;case Kc:t=this.InterpolantFactoryMethodSmooth;break;case Lg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return Kc;case this.InterpolantFactoryMethodBezier:return Lg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Pe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Y1(r))for(let o=0,l=r.length;o!==l;++o){const u=r[o];if(isNaN(u)){Pe("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Kc,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const u=e[o],c=e[o+1];if(u!==c&&(o!==1||u!==e[0]))if(r)l=!0;else{const f=o*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const x=t[f+_];if(x!==t[d+_]||x!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,u=0;u!==i;++u)t[l+u]=t[o+u];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Uo;class Ea extends li{constructor(e,t,i){super(e,t,i)}}Ea.prototype.ValueTypeName="bool";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Do;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class oy extends li{constructor(e,t,i,r){super(e,t,i,r)}}oy.prototype.ValueTypeName="color";class pa extends li{constructor(e,t,i,r){super(e,t,i,r)}}pa.prototype.ValueTypeName="number";class rb extends Ma{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let u=e*o;for(let c=u+o;u!==c;u+=4)rr.slerpFlat(s,0,a,u-o,a,u,l);return s}}class ma extends li{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new rb(this.times,this.values,this.getValueSize(),e)}}ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Ta extends li{constructor(e,t,i){super(e,t,i)}}Ta.prototype.ValueTypeName="string";Ta.prototype.ValueBufferType=Array;Ta.prototype.DefaultInterpolation=Do;Ta.prototype.InterpolantFactoryMethodLinear=void 0;Ta.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends li{constructor(e,t,i,r){super(e,t,i,r)}}ga.prototype.ValueTypeName="vector";class sb{constructor(e="",t=-1,i=[],r=O1){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(ob(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(li.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],u=[];l.push((o+s-1)%s,o,(o+1)%s),u.push(0,1,0);const c=Qw(l);l=h0(l,1,c),u=h0(u,1,c),!r&&l[0]===0&&(l.push(s),u.push(u[0])),a.push(new pa(".morphTargetInfluences["+t[o].name+"]",l,u).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const u=e[o],c=u.name.match(s);if(c&&c.length>1){const f=c[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Pe("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,x){if(p.length!==0){const m=[],h=[];ay(p,m,h,_),m.length!==0&&x.push(new f(d,m,h))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const u=e.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const m=[],h=[];for(let g=0;g!==d[_].morphTargets.length;++g){const v=d[_];m.push(v.time),h.push(v.morphTarget===x?1:0)}r.push(new pa(".morphTargetInfluence["+x+"]",m,h))}l=p.length*a}else{const p=".bones["+t[f].name+"]";i(ga,p+".position",d,"pos",r),i(ma,p+".quaternion",d,"rot",r),i(ga,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ab(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pa;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return oy;case"quaternion":return ma;case"bool":case"boolean":return Ea;case"string":return Ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ob(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ab(n.type);if(n.times===void 0){const t=[],i=[];ay(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Wi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(p0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!p0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function p0(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lb{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ub=new lb;class wa{constructor(e){this.manager=e!==void 0?e:ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wa.DEFAULT_MATERIAL_NAME="__DEFAULT";const ki={};class cb extends Error{constructor(e,t){super(e),this.response=t}}class ly extends wa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:i,onError:r});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=ki[e],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(h){g();function g(){f.read().then(({done:v,value:S})=>{if(v)h.close();else{x+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let T=0,A=c.length;T<A;T++){const y=c[T];y.onProgress&&y.onProgress(b)}h.enqueue(S),g()}},v=>{h.error(v)})}}});return new Response(m)}else throw new cb(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return u.json();default:if(o==="")return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Wi.add(`file:${e}`,u);const c=ki[e];delete ki[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=ki[e];if(c===void 0)throw this.manager.itemError(e),u;delete ki[e];for(let f=0,d=c.length;f<d;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ps=new WeakMap;class fb extends wa{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Ps.get(a);f===void 0&&(f=[],Ps.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Oo("img");function l(){c(),t&&t(this);const f=Ps.get(this)||[];for(let d=0;d<f.length;d++){const p=f[d];p.onLoad&&p.onLoad(this)}Ps.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),Wi.remove(`image:${e}`);const d=Ps.get(this)||[];for(let p=0;p<d.length;p++){const _=d[p];_.onError&&_.onError(f)}Ps.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class db extends wa{constructor(e){super(e)}load(e,t,i,r){const s=new Yt,a=new fb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fc extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Mf=new He,m0=new U,g0=new U;class $p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wp,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;m0.setFromMatrixPosition(e.matrixWorld),t.position.copy(m0),g0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(g0),t.updateMatrixWorld(),Mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new U,kl=new rr,di=new U;class uy extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,kl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,di.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ol,kl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,kl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new U,_0=new Je,v0=new Je;class un extends uy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,_0,v0),t.subVectors(v0,_0)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hb extends $p{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=fa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pb extends fc{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class mb extends $p{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class gb extends fc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dc extends uy{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _b extends $p{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new _b}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vb extends fc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ho{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ef=new WeakMap;class xb extends wa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(u=>{Ef.has(a)===!0?(r&&r(Ef.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(u),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){Wi.add(`image-bitmap:${e}`,u),t&&t(u),s.manager.itemEnd(e)}).catch(function(u){r&&r(u),Ef.set(l,u),Wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=-90,Ns=1;class yb extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Ls,Ns,e,t);r.layers=this.layers,this.add(r);const s=new un(Ls,Ns,e,t);s.layers=this.layers,this.add(s);const a=new un(Ls,Ns,e,t);a.layers=this.layers,this.add(a);const o=new un(Ls,Ns,e,t);o.layers=this.layers,this.add(o);const l=new un(Ls,Ns,e,t);l.layers=this.layers,this.add(l);const u=new un(Ls,Ns,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Sb extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yp="\\[\\]\\.:\\/",Mb=new RegExp("["+Yp+"]","g"),Kp="[^"+Yp+"]",Eb="[^"+Yp.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",Kp),wb=/(WCOD+)?/.source.replace("WCOD",Eb),bb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kp),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kp),Rb=new RegExp("^"+Tb+wb+bb+Ab+"$"),Cb=["material","materials","bones","map"];class Pb{constructor(e,t,i){const r=i||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class rt{constructor(e,t,i){this.path=t,this.parsedPath=i||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,i):new rt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=Rb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Cb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=t.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const a=e[r];if(a===void 0){const u=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=Pb;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,we("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const em=class em{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};em.prototype.isMatrix2=!0;let x0=em;function y0(n,e,t,i){const r=Nb(i);switch(t){case Wx:return n*e;case Ip:return n*e/r.components*r.byteLength;case Dp:return n*e/r.components*r.byteLength;case fs:return n*e*2/r.components*r.byteLength;case Up:return n*e*2/r.components*r.byteLength;case jx:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case Fp:return n*e*4/r.components*r.byteLength;case iu:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case su:case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(n,16)*Math.max(e,8)/4;case Bd:case Vd:return Math.max(n,8)*Math.max(e,8)/2;case Gd:case Wd:case Xd:case $d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jd:case Uu:case Yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uh:case ch:case fh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dh:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fu:case ph:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nb(n){switch(n){case wn:case zx:return{byteLength:1,components:1};case No:case Vx:case er:return{byteLength:2,components:1};case Lp:case Np:return{byteLength:2,components:4};case Ai:case Pp:case Bn:return{byteLength:4,components:1};case Hx:case Gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cy(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ib(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=n.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];n.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
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
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ob=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hb=`#ifdef USE_BATCHING
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
#endif`,Gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$b=`#ifdef USE_IRIDESCENCE
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
#endif`,Yb=`#ifdef USE_BUMPMAP
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,iA=`#define PI 3.141592653589793
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
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sA=`vec3 transformedNormal = objectNormal;
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
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
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
#endif`,hA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
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
#endif`,mA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
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
#endif`,_A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SA=`#ifdef USE_GRADIENTMAP
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
}`,MA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bA=`#ifdef USE_ENVMAP
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
#endif`,AA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LA=`PhysicalMaterial material;
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
#endif`,NA=`uniform sampler2D dfgLUT;
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
}`,IA=`
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
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
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,OA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WA=`#if defined( USE_POINTS_UV )
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
#endif`,jA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YA=`#if defined( USE_MORPHCOLORS )
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
#endif`,qA=`#ifdef USE_MORPHTARGETS
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
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iR=`#ifdef USE_NORMALMAP
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
#endif`,rR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_R=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xR=`float getShadowMask() {
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
}`,yR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SR=`#ifdef USE_SKINNING
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
#endif`,MR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ER=`#ifdef USE_SKINNING
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
#endif`,TR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RR=`#ifdef USE_TRANSMISSION
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
#endif`,CR=`#ifdef USE_TRANSMISSION
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
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UR=`uniform sampler2D t2D;
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
}`,FR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
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
}`,VR=`#if DEPTH_PACKING == 3200
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
}`,HR=`#define DISTANCE
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
}`,GR=`#define DISTANCE
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
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
}`,$R=`uniform vec3 diffuse;
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
}`,YR=`#include <common>
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
}`,qR=`#define LAMBERT
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
}`,ZR=`#define LAMBERT
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
}`,JR=`#define MATCAP
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
}`,QR=`#define MATCAP
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
}`,eC=`#define NORMAL
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
}`,tC=`#define NORMAL
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
}`,nC=`#define PHONG
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
}`,iC=`#define PHONG
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
}`,rC=`#define STANDARD
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
}`,sC=`#define STANDARD
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
}`,aC=`#define TOON
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
}`,oC=`#define TOON
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
}`,lC=`uniform float size;
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
}`,uC=`uniform vec3 diffuse;
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
}`,cC=`#include <common>
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
}`,fC=`uniform vec3 color;
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
}`,dC=`uniform float rotation;
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
}`,hC=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Fb,alphamap_pars_fragment:Ob,alphatest_fragment:kb,alphatest_pars_fragment:Bb,aomap_fragment:zb,aomap_pars_fragment:Vb,batching_pars_vertex:Hb,batching_vertex:Gb,begin_vertex:Wb,beginnormal_vertex:jb,bsdfs:Xb,iridescence_fragment:$b,bumpmap_pars_fragment:Yb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Jb,color_fragment:Qb,color_pars_fragment:eA,color_pars_vertex:tA,color_vertex:nA,common:iA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:sA,displacementmap_pars_vertex:aA,displacementmap_vertex:oA,emissivemap_fragment:lA,emissivemap_pars_fragment:uA,colorspace_fragment:cA,colorspace_pars_fragment:fA,envmap_fragment:dA,envmap_common_pars_fragment:hA,envmap_pars_fragment:pA,envmap_pars_vertex:mA,envmap_physical_pars_fragment:bA,envmap_vertex:gA,fog_vertex:_A,fog_pars_vertex:vA,fog_fragment:xA,fog_pars_fragment:yA,gradientmap_pars_fragment:SA,lightmap_pars_fragment:MA,lights_lambert_fragment:EA,lights_lambert_pars_fragment:TA,lights_pars_begin:wA,lights_toon_fragment:AA,lights_toon_pars_fragment:RA,lights_phong_fragment:CA,lights_phong_pars_fragment:PA,lights_physical_fragment:LA,lights_physical_pars_fragment:NA,lights_fragment_begin:IA,lights_fragment_maps:DA,lights_fragment_end:UA,lightprobes_pars_fragment:FA,logdepthbuf_fragment:OA,logdepthbuf_pars_fragment:kA,logdepthbuf_pars_vertex:BA,logdepthbuf_vertex:zA,map_fragment:VA,map_pars_fragment:HA,map_particle_fragment:GA,map_particle_pars_fragment:WA,metalnessmap_fragment:jA,metalnessmap_pars_fragment:XA,morphinstance_vertex:$A,morphcolor_vertex:YA,morphnormal_vertex:KA,morphtarget_pars_vertex:qA,morphtarget_vertex:ZA,normal_fragment_begin:JA,normal_fragment_maps:QA,normal_pars_fragment:eR,normal_pars_vertex:tR,normal_vertex:nR,normalmap_pars_fragment:iR,clearcoat_normal_fragment_begin:rR,clearcoat_normal_fragment_maps:sR,clearcoat_pars_fragment:aR,iridescence_pars_fragment:oR,opaque_fragment:lR,packing:uR,premultiplied_alpha_fragment:cR,project_vertex:fR,dithering_fragment:dR,dithering_pars_fragment:hR,roughnessmap_fragment:pR,roughnessmap_pars_fragment:mR,shadowmap_pars_fragment:gR,shadowmap_pars_vertex:_R,shadowmap_vertex:vR,shadowmask_pars_fragment:xR,skinbase_vertex:yR,skinning_pars_vertex:SR,skinning_vertex:MR,skinnormal_vertex:ER,specularmap_fragment:TR,specularmap_pars_fragment:wR,tonemapping_fragment:bR,tonemapping_pars_fragment:AR,transmission_fragment:RR,transmission_pars_fragment:CR,uv_pars_fragment:PR,uv_pars_vertex:LR,uv_vertex:NR,worldpos_vertex:IR,background_vert:DR,background_frag:UR,backgroundCube_vert:FR,backgroundCube_frag:OR,cube_vert:kR,cube_frag:BR,depth_vert:zR,depth_frag:VR,distance_vert:HR,distance_frag:GR,equirect_vert:WR,equirect_frag:jR,linedashed_vert:XR,linedashed_frag:$R,meshbasic_vert:YR,meshbasic_frag:KR,meshlambert_vert:qR,meshlambert_frag:ZR,meshmatcap_vert:JR,meshmatcap_frag:QR,meshnormal_vert:eC,meshnormal_frag:tC,meshphong_vert:nC,meshphong_frag:iC,meshphysical_vert:rC,meshphysical_frag:sC,meshtoon_vert:aC,meshtoon_frag:oC,points_vert:lC,points_frag:uC,shadow_vert:cC,shadow_frag:fC,sprite_vert:dC,sprite_frag:hC},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},gi={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gi.physical={uniforms:on([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Bl={r:0,b:0,g:0},pC=new He,fy=new Ue;fy.set(-1,0,0,0,1,0,0,0,1);function mC(n,e,t,i,r,s){const a=new Fe(0);let o=r===!0?0:1,l,u,c=null,f=0,d=null;function p(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const S=g.backgroundBlurriness>0;v=e.get(v,S)}return v}function _(g){let v=!1;const S=p(g);S===null?m(a,o):S&&S.isColor&&(m(S,1),v=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(g,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===lc)?(u===void 0&&(u=new Pn(new Xo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ha(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pC.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(fy),u.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,(c!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pn(new cc(2,2),new Ri({name:"BackgroundMaterial",uniforms:ha(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(c!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,v){g.getRGB(Bl,sy(n)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,v,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:x,dispose:h}}function gC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(C,O,X,q,N){let W=!1;const B=f(C,q,X,O);s!==B&&(s=B,u(s.object)),W=p(C,q,X,N),W&&_(C,q,X,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(C,O,X,q),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function u(C){return n.bindVertexArray(C)}function c(C){return n.deleteVertexArray(C)}function f(C,O,X,q){const N=q.wireframe===!0;let W=i[O.id];W===void 0&&(W={},i[O.id]=W);const B=C.isInstancedMesh===!0?C.id:0;let k=W[B];k===void 0&&(k={},W[B]=k);let $=k[X.id];$===void 0&&($={},k[X.id]=$);let ee=$[N];return ee===void 0&&(ee=d(l()),$[N]=ee),ee}function d(C){const O=[],X=[],q=[];for(let N=0;N<t;N++)O[N]=0,X[N]=0,q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:q,object:C,attributes:{},index:null}}function p(C,O,X,q){const N=s.attributes,W=O.attributes;let B=0;const k=X.getAttributes();for(const $ in k)if(k[$].location>=0){const oe=N[$];let he=W[$];if(he===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;B++}return s.attributesNum!==B||s.index!==q}function _(C,O,X,q){const N={},W=O.attributes;let B=0;const k=X.getAttributes();for(const $ in k)if(k[$].location>=0){let oe=W[$];oe===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),N[$]=he,B++}s.attributes=N,s.attributesNum=B,s.index=q}function x(){const C=s.newAttributes;for(let O=0,X=C.length;O<X;O++)C[O]=0}function m(C){h(C,0)}function h(C,O){const X=s.newAttributes,q=s.enabledAttributes,N=s.attributeDivisors;X[C]=1,q[C]===0&&(n.enableVertexAttribArray(C),q[C]=1),N[C]!==O&&(n.vertexAttribDivisor(C,O),N[C]=O)}function g(){const C=s.newAttributes,O=s.enabledAttributes;for(let X=0,q=O.length;X<q;X++)O[X]!==C[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function v(C,O,X,q,N,W,B){B===!0?n.vertexAttribIPointer(C,O,X,N,W):n.vertexAttribPointer(C,O,X,q,N,W)}function S(C,O,X,q){x();const N=q.attributes,W=X.getAttributes(),B=O.defaultAttributeValues;for(const k in W){const $=W[k];if($.location>=0){let ee=N[k];if(ee===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),ee!==void 0){const oe=ee.normalized,he=ee.itemSize,Ge=e.get(ee);if(Ge===void 0)continue;const Ke=Ge.buffer,Ne=Ge.type,Z=Ge.bytesPerElement,de=Ne===n.INT||Ne===n.UNSIGNED_INT||ee.gpuType===Pp;if(ee.isInterleavedBufferAttribute){const le=ee.data,Ce=le.stride,De=ee.offset;if(le.isInstancedInterleavedBuffer){for(let Le=0;Le<$.locationSize;Le++)h($.location+Le,le.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Le=0;Le<$.locationSize;Le++)m($.location+Le);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Le=0;Le<$.locationSize;Le++)v($.location+Le,he/$.locationSize,Ne,oe,Ce*Z,(De+he/$.locationSize*Le)*Z,de)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)h($.location+le,ee.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<$.locationSize;le++)m($.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let le=0;le<$.locationSize;le++)v($.location+le,he/$.locationSize,Ne,oe,he*Z,he/$.locationSize*le*Z,de)}}else if(B!==void 0){const oe=B[k];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv($.location,oe);break;case 3:n.vertexAttrib3fv($.location,oe);break;case 4:n.vertexAttrib4fv($.location,oe);break;default:n.vertexAttrib1fv($.location,oe)}}}}g()}function b(){R();for(const C in i){const O=i[C];for(const X in O){const q=O[X];for(const N in q){const W=q[N];for(const B in W)c(W[B].object),delete W[B];delete q[N]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const O=i[C.id];for(const X in O){const q=O[X];for(const N in q){const W=q[N];for(const B in W)c(W[B].object),delete W[B];delete q[N]}}delete i[C.id]}function A(C){for(const O in i){const X=i[O];for(const q in X){const N=X[q];if(N[C.id]===void 0)continue;const W=N[C.id];for(const B in W)c(W[B].object),delete W[B];delete N[C.id]}}}function y(C){for(const O in i){const X=i[O],q=C.isInstancedMesh===!0?C.id:0,N=X[q];if(N!==void 0){for(const W in N){const B=N[W];for(const k in B)c(B[k].object),delete B[k];delete N[W]}delete X[q],Object.keys(X).length===0&&delete i[O]}}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function _C(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function o(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let d=0;for(let p=0;p<c;p++)d+=u[p];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function vC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!y)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(we("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:T}}function xC(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new $r,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let S=h.clippingState||null;l.value=S,S=c(_,d,v,p);for(let b=0;b!==v;++b)S[b]=t[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const h=p+x*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==x;++v,S+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Tr=4,S0=[.125,.215,.35,.446,.526,.582],Kr=20,yC=256,Wa=new dc,M0=new Fe;let Tf=null,wf=0,bf=0,Af=!1;const SC=new U;class E0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=SC}=s;Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tf,wf,bf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tf=this._renderer.getRenderTarget(),wf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:er,format:zn,colorSpace:Cn,depthBuffer:!1},r=T0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=T0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MC(s)),this._blurMaterial=TC(s,e,t),this._ggxMaterial=EC(s,e,t)}return r}_compileMaterial(e){const t=new Pn(new Xn,e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(M0),f.toneMapping=Ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Xo,new ts({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(M0),h=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[v],s.y,s.z)):S===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[v]));const b=this._cubeSize;Is(r,S*b,v>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===cs||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Wa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,p=f*d,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Tr?i-_+Tr:0),h=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Is(s,m,h,3*x,2*x),r.setRenderTarget(s),r.render(o,Wa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Is(e,m,h,3*x,2*x),r.setRenderTarget(e),r.render(o,Wa)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),x=s/_,m=isFinite(s)?1+Math.floor(c*x):Kr;m>Kr&&we(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const h=[];let g=0;for(let A=0;A<Kr;++A){const y=A/x,R=Math.exp(-y*y/2);h.push(R),A===0?g+=R:A<m&&(g+=2*R)}for(let A=0;A<h.length;A++)h[A]=h[A]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Tr?r-v+Tr:0),T=4*(this._cubeSize-S);Is(t,b,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Wa)}}function MC(n){const e=[],t=[],i=[];let r=n;const s=n-Tr+1+S0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Tr?l=S0[a-n+Tr-1]:a===0&&(l=0),t.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,x=3,m=2,h=1,g=new Float32Array(x*_*p),v=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,y=T>2?0:-1,R=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];g.set(R,x*_*T),v.set(d,m*_*T);const P=[T,T,T,T,T,T];S.set(P,h*_*T)}const b=new Xn;b.setAttribute("position",new fn(g,x)),b.setAttribute("uv",new fn(v,m)),b.setAttribute("faceIndex",new fn(S,h)),i.push(new Pn(b,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function T0(n,e,t){const i=new Ti(n,e,t);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function EC(n,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function TC(n,e,t){const i=new Float32Array(Kr),r=new U(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

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
	`}class dy extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xo(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Xi});s.uniforms.tEquirect.value=t;const a=new Pn(r,s),o=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Vt),new yb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function wC(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===$c||p===Yc)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const x=new dy(_.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",u),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===$c||p===Yc,x=p===cs||p===ua;if(_||x){let m=t.get(d);const h=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return i===null&&(i=new E0(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return _&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new E0(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function o(d,p){return p===$c?d.mapping=cs:p===Yc&&(d.mapping=ua),d}function l(d){let p=0;const _=6;for(let x=0;x<_;x++)d[x]!==void 0&&p++;return p===_}function u(d){const p=d.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function bC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vh("WebGLRenderer: "+i+" extension not supported."),r}}}function AC(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(p!==null){const g=p.array;x=p.version;for(let v=0,S=g.length;v<S;v+=3){const b=g[v+0],T=g[v+1],A=g[v+2];d.push(b,T,T,A,A,b)}}else{const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const b=v+0,T=v+1,A=v+2;d.push(b,T,T,A,A,b)}}const m=new(_.count>=65535?Jx:Zx)(d,1);m.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function RC(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function u(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,s,f*a,p),t.update(d,i,p))}function c(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];t.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function CC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function PC(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*T*4*f),y=new Yx(A,b,T,f);y.type=Bn,y.needsUpdate=!0;const R=S*4;for(let C=0;C<f;C++){const O=h[C],X=g[C],q=v[C],N=b*T*4*C;for(let W=0;W<O.count;W++){const B=W*R;_===!0&&(r.fromBufferAttribute(O,W),A[N+B+0]=r.x,A[N+B+1]=r.y,A[N+B+2]=r.z,A[N+B+3]=0),x===!0&&(r.fromBufferAttribute(X,W),A[N+B+4]=r.x,A[N+B+5]=r.y,A[N+B+6]=r.z,A[N+B+7]=0),m===!0&&(r.fromBufferAttribute(q,W),A[N+B+8]=r.x,A[N+B+9]=r.y,A[N+B+10]=r.z,A[N+B+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new Je(b,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function LC(n,e,t,i,r){let s=new WeakMap;function a(u){const c=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const NC={[Nx]:"LINEAR_TONE_MAPPING",[Ix]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[Cp]:"ACES_FILMIC_TONE_MAPPING",[Fx]:"AGX_TONE_MAPPING",[Ox]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function IC(n,e,t,i,r){const s=new Ti(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new da(e,t):void 0}),a=new Ti(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),o=new Xn;o.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ai([0,2,0,0,2,0],2));const l=new qw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pn(o,l),c=new dc(-1,1,1,-1,0,1);let f=null,d=null,p=!1,_,x=null,m=[],h=!1;this.setSize=function(g,v){s.setSize(g,v),a.setSize(g,v);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(g,v)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const v=s.width,S=s.height;for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(v,S)}},this.begin=function(g,v){if(p||g.toneMapping===Ei&&m.length===0)return!1;if(x=v,v!==null){const S=v.width,b=v.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return h===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=Ei,!0},this.hasRenderPass=function(){return h},this.end=function(g,v){g.toneMapping=_,p=!0;let S=s,b=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(g,b,S,v),A.needsSwap!==!1)){const y=S;S=b,b=y}}if(f!==g.outputColorSpace||d!==g.toneMapping){f=g.outputColorSpace,d=g.toneMapping,l.defines={},Xe.getTransfer(f)===nt&&(l.defines.SRGB_TRANSFER="");const T=NC[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(x),g.render(u,c),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const hy=new Yt,Mh=new da(1,1),py=new Yx,my=new yw,gy=new iy,A0=[],R0=[],C0=new Float32Array(16),P0=new Float32Array(9),L0=new Float32Array(4);function ba(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=A0[r];if(s===void 0&&(s=new Float32Array(r),A0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function UC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function FC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function OC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function kC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;L0.set(i),n.uniformMatrix2fv(this.addr,!1,L0),Gt(t,i)}}function BC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;P0.set(i),n.uniformMatrix3fv(this.addr,!1,P0),Gt(t,i)}}function zC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;C0.set(i),n.uniformMatrix4fv(this.addr,!1,C0),Gt(t,i)}}function VC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function HC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function GC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function jC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function YC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function KC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=t.isReversedDepthBuffer()?kp:Op,s=Mh):s=hy,t.setTexture2D(e||s,r)}function qC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||my,r)}function ZC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gy,r)}function JC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||py,r)}function QC(n){switch(n){case 5126:return DC;case 35664:return UC;case 35665:return FC;case 35666:return OC;case 35674:return kC;case 35675:return BC;case 35676:return zC;case 5124:case 35670:return VC;case 35667:case 35671:return HC;case 35668:case 35672:return GC;case 35669:case 35673:return WC;case 5125:return jC;case 36294:return XC;case 36295:return $C;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return qC;case 35680:case 36300:case 36308:case 36293:return ZC;case 36289:case 36303:case 36311:case 36292:return JC}}function e2(n,e){n.uniform1fv(this.addr,e)}function t2(n,e){const t=ba(e,this.size,2);n.uniform2fv(this.addr,t)}function n2(n,e){const t=ba(e,this.size,3);n.uniform3fv(this.addr,t)}function i2(n,e){const t=ba(e,this.size,4);n.uniform4fv(this.addr,t)}function r2(n,e){const t=ba(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s2(n,e){const t=ba(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a2(n,e){const t=ba(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o2(n,e){n.uniform1iv(this.addr,e)}function l2(n,e){n.uniform2iv(this.addr,e)}function u2(n,e){n.uniform3iv(this.addr,e)}function c2(n,e){n.uniform4iv(this.addr,e)}function f2(n,e){n.uniform1uiv(this.addr,e)}function d2(n,e){n.uniform2uiv(this.addr,e)}function h2(n,e){n.uniform3uiv(this.addr,e)}function p2(n,e){n.uniform4uiv(this.addr,e)}function m2(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Mh:a=hy;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function g2(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||my,s[a])}function _2(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gy,s[a])}function v2(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||py,s[a])}function x2(n){switch(n){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return r2;case 35675:return s2;case 35676:return a2;case 5124:case 35670:return o2;case 35667:case 35671:return l2;case 35668:case 35672:return u2;case 35669:case 35673:return c2;case 5125:return f2;case 36294:return d2;case 36295:return h2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return v2}}class y2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QC(t.type)}}class S2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x2(t.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function N0(n,e){n.seq.push(e),n.map[e.id]=e}function E2(n,e,t){const i=n.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),a=Rf.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){N0(t,u===void 0?new y2(o,n,e):new S2(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new M2(o),N0(t,f)),t=f}}}class ou{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);E2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function I0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const T2=37297;let w2=0;function b2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const D0=new Ue;function A2(n){Xe._getMatrix(D0,Xe.workingColorSpace,n);const e=`mat3( ${D0.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Ou:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function U0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+b2(n.getShaderSource(e),o)}else return s}function R2(n,e){const t=A2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const C2={[Nx]:"Linear",[Ix]:"Reinhard",[Dx]:"Cineon",[Cp]:"ACESFilmic",[Fx]:"AgX",[Ox]:"Neutral",[Ux]:"Custom"};function P2(n,e){const t=C2[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new U;function L2(){Xe.getLuminanceCoefficients(zl);const n=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function I2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function D2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function eo(n){return n!==""}function F0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(n){return n.replace(U2,O2)}const F2=new Map;function O2(n,e){let t=ze[e];if(t===void 0){const i=F2.get(e);if(i!==void 0)t=ze[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(t)}const k2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(n){return n.replace(k2,B2)}function B2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function B0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const z2={[tu]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function V2(n){return z2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H2={[cs]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function G2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":H2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const W2={[ua]:"ENVMAP_MODE_REFRACTION"};function j2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":W2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const X2={[Lx]:"ENVMAP_BLENDING_MULTIPLY",[D1]:"ENVMAP_BLENDING_MIX",[U1]:"ENVMAP_BLENDING_ADD"};function $2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":X2[n.combine]||"ENVMAP_BLENDING_NONE"}function Y2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K2(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=V2(t),u=G2(t),c=j2(t),f=$2(t),d=Y2(t),p=N2(t),_=I2(s),x=r.createProgram();let m,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),h.length>0&&(h+=`
`)):(m=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),h=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ei?P2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,R2("linearToOutputTexel",t.outputColorSpace),L2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),a=Eh(a),a=F0(a,t),a=O0(a,t),o=Eh(o),o=F0(o,t),o=O0(o,t),a=k0(a),o=k0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+a,S=g+h+o,b=I0(r,r.VERTEX_SHADER,v),T=I0(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(C){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(b)||"",q=r.getShaderInfoLog(T)||"",N=O.trim(),W=X.trim(),B=q.trim();let k=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,T);else{const ee=U0(r,b,"vertex"),oe=U0(r,T,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+ee+`
`+oe)}else N!==""?we("WebGLProgram: Program Info Log:",N):(W===""||B==="")&&($=!1);$&&(C.diagnostics={runnable:k,programLog:N,vertexShader:{log:W,prefix:m},fragmentShader:{log:B,prefix:h}})}r.deleteShader(b),r.deleteShader(T),y=new ou(r,x),R=D2(r,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(x,T2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=w2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}let q2=0;class Z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new J2(e),t.set(e,i)),i}}class J2{constructor(e){this.id=q2++,this.code=e,this.usedTimes=0}}function Q2(n){return n===fs||n===Uu||n===Fu}function eP(n,e,t,i,r,s){const a=new Kx,o=new Z2,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,R,P,C,O,X){const q=C.fog,N=O.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||W,B),$=k&&k.mapping===lc?k.image.height:null,ee=p[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&we("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=oe!==void 0?oe.length:0;let Ge=0;N.morphAttributes.position!==void 0&&(Ge=1),N.morphAttributes.normal!==void 0&&(Ge=2),N.morphAttributes.color!==void 0&&(Ge=3);let Ke,Ne,Z,de;if(ee){const Oe=gi[ee];Ke=Oe.vertexShader,Ne=Oe.fragmentShader}else Ke=y.vertexShader,Ne=y.fragmentShader,o.update(y),Z=o.getVertexShaderID(y),de=o.getFragmentShaderID(y);const le=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,yt=!!y.map,qe=!!y.matcap,at=!!k,mt=!!y.aoMap,je=!!y.lightMap,Ft=!!y.bumpMap,St=!!y.normalMap,yn=!!y.displacementMap,I=!!y.emissiveMap,Ot=!!y.metalnessMap,Ze=!!y.roughnessMap,dt=y.anisotropy>0,pe=y.clearcoat>0,bt=y.dispersion>0,w=y.iridescence>0,M=y.sheen>0,F=y.transmission>0,J=dt&&!!y.anisotropyMap,ne=pe&&!!y.clearcoatMap,re=pe&&!!y.clearcoatNormalMap,fe=pe&&!!y.clearcoatRoughnessMap,Y=w&&!!y.iridescenceMap,Q=w&&!!y.iridescenceThicknessMap,ve=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,ue=!!y.specularMap,se=!!y.specularColorMap,Ie=!!y.specularIntensityMap,Be=F&&!!y.transmissionMap,tt=F&&!!y.thicknessMap,L=!!y.gradientMap,ae=!!y.alphaMap,K=y.alphaTest>0,xe=!!y.alphaHash,ce=!!y.extensions;let te=Ei;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(te=n.toneMapping);const be={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Ke,fragmentShader:Ne,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:yt,matcap:qe,envMap:at,envMapMode:at&&k.mapping,envMapCubeUVHeight:$,aoMap:mt,lightMap:je,bumpMap:Ft,normalMap:St,displacementMap:yn,emissiveMap:I,normalMapObjectSpace:St&&y.normalMapType===z1,normalMapTangentSpace:St&&y.normalMapType===gh,packedNormalMap:St&&y.normalMapType===gh&&Q2(y.normalMap.format),metalnessMap:Ot,roughnessMap:Ze,anisotropy:dt,anisotropyMap:J,clearcoat:pe,clearcoatMap:ne,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,dispersion:bt,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:ve,sheenRoughnessMap:Se,specularMap:ue,specularColorMap:se,specularIntensityMap:Ie,transmission:F,transmissionMap:Be,thicknessMap:tt,gradientMap:L,opaque:y.transparent===!1&&y.blending===Js&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:K,alphaHash:xe,combine:y.combine,mapUv:yt&&_(y.map.channel),aoMapUv:mt&&_(y.aoMap.channel),lightMapUv:je&&_(y.lightMap.channel),bumpMapUv:Ft&&_(y.bumpMap.channel),normalMapUv:St&&_(y.normalMap.channel),displacementMapUv:yn&&_(y.displacementMap.channel),emissiveMapUv:I&&_(y.emissiveMap.channel),metalnessMapUv:Ot&&_(y.metalnessMap.channel),roughnessMapUv:Ze&&_(y.roughnessMap.channel),anisotropyMapUv:J&&_(y.anisotropyMap.channel),clearcoatMapUv:ne&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(y.sheenRoughnessMap.channel),specularMapUv:ue&&_(y.specularMap.channel),specularColorMapUv:se&&_(y.specularColorMap.channel),specularIntensityMapUv:Ie&&_(y.specularIntensityMap.channel),transmissionMapUv:Be&&_(y.transmissionMap.channel),thicknessMapUv:tt&&_(y.thicknessMap.channel),alphaMapUv:ae&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(St||dt),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(yt||ae),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&St===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ge,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:I&&y.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function m(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)R.push(P),R.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(h(R,y),g(R,y),R.push(n.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function h(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function g(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function v(y){const R=p[y.type];let P;if(R){const C=gi[R];P=$w.clone(C.uniforms)}else P=y.uniforms;return P}function S(y,R){let P=c.get(R);return P!==void 0?++P.usedTimes:(P=new K2(n,R,y,r),u.push(P),c.set(R,P)),P}function b(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:u,dispose:A}}function tP(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function nP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function z0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function V0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,x,m,h){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},n[e]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=_,g.materialVariant=a(d),g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=m,g.group=h),e++,g}function l(d,p,_,x,m,h){const g=o(d,p,_,x,m,h);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):t.push(g)}function u(d,p,_,x,m,h){const g=o(d,p,_,x,m,h);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,p){t.length>1&&t.sort(d||nP),i.length>1&&i.sort(p||z0),r.length>1&&r.sort(p||z0)}function f(){for(let d=e,p=n.length;d<p;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:f,sort:c}}function iP(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new V0,n.set(i,[a])):r>=s.length?(a=new V0,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function sP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let aP=0;function oP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lP(n){const e=new rP,t=sP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new He,a=new He;function o(u){let c=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,g=0,v=0,S=0,b=0,T=0,A=0;u.sort(oP);for(let R=0,P=u.length;R<P;R++){const C=u[R],O=C.color,X=C.intensity,q=C.distance;let N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===fs?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=O.r*X,f+=O.g*X,d+=O.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],X);A++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=C.shadow.matrix,g++}i.directional[p]=W,p++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(O).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[x]=W;const B=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,B.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=B.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=N,S++}x++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(O).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const B=C.shadow,k=t.get(C);k.shadowIntensity=B.intensity,k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=C.shadow.matrix,v++}i.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==p||y.pointLength!==_||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==g||y.numPointShadows!==v||y.numSpotShadows!==S||y.numSpotMaps!==b||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,y.directionalLength=p,y.pointLength=_,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=g,y.numPointShadows=v,y.numSpotShadows=S,y.numSpotMaps=b,y.numLightProbes=A,i.version=aP++)}function l(u,c){let f=0,d=0,p=0,_=0,x=0;const m=c.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function H0(n){const e=new lP(n),t=[],i=[],r=[];function s(d){f.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(t)}function c(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function uP(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new H0(n),e.set(r,[o])):s>=a.length?(o=new H0(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const cP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fP=`uniform sampler2D shadow_pass;
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
}`,dP=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],hP=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],G0=new He,ja=new U,Cf=new U;function pP(n,e,t){let i=new Wp;const r=new Je,s=new Je,a=new ft,o=new Zw,l=new Jw,u={},c=t.maxTextureSize,f={[Qi]:xn,[xn]:Qi,[vi]:vi},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:cP,fragmentShader:fP}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let h=this.type;this.render=function(T,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===m1&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const R=n.getRenderTarget(),P=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Xi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=h!==this.type;X&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(N=>N.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,N=T.length;q<N;q++){const W=T[q],B=W.shadow;if(B===void 0){we("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const k=B.getFrameExtents();r.multiply(k),s.copy(B.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,B.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,B.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=$,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ja){if(W.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ti(r.x,r.y,{format:fs,type:er,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new da(r.x,r.y,Bn),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=tr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt}else W.isPointLight?(B.map=new dy(r.x),B.map.depthTexture=new jw(r.x,Ai)):(B.map=new Ti(r.x,r.y),B.map.depthTexture=new da(r.x,r.y,Ai)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=tr,this.type===tu?(B.map.depthTexture.compareFunction=$?kp:Op,B.map.depthTexture.minFilter=Vt,B.map.depthTexture.magFilter=Vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt);B.camera.updateProjectionMatrix()}const ee=B.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ee;oe++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(B.map),n.clear());const he=B.getViewport(oe);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}if(W.isPointLight){const he=B.camera,Ge=B.matrix,Ke=W.distance||he.far;Ke!==he.far&&(he.far=Ke,he.updateProjectionMatrix()),ja.setFromMatrixPosition(W.matrixWorld),he.position.copy(ja),Cf.copy(he.position),Cf.add(dP[oe]),he.up.copy(hP[oe]),he.lookAt(Cf),he.updateMatrixWorld(),Ge.makeTranslation(-ja.x,-ja.y,-ja.z),G0.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),B._frustum.setFromProjectionMatrix(G0,he.coordinateSystem,he.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),S(A,y,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Ja&&g(B,y),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(R,P,C)};function g(T,A){const y=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(r.x,r.y,{format:fs,type:er})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,y,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,y,p,x,null)}function v(T,A,y,R){let P=null;const C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)P=C;else if(P=y.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=P.uuid,X=A.uuid;let q=u[O];q===void 0&&(q={},u[O]=q);let N=q[X];N===void 0&&(N=P.clone(),q[X]=N,A.addEventListener("dispose",b)),P=N}if(P.visible=A.visible,P.wireframe=A.wireframe,R===Ja?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=y}return P}function S(T,A,y,R,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ja)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const X=e.update(T),q=T.material;if(Array.isArray(q)){const N=X.groups;for(let W=0,B=N.length;W<B;W++){const k=N[W],$=q[k.materialIndex];if($&&$.visible){const ee=v(T,$,R,P);T.onBeforeShadow(n,T,A,y,X,ee,k),n.renderBufferDirect(y,null,X,ee,T,k),T.onAfterShadow(n,T,A,y,X,ee,k)}}}else if(q.visible){const N=v(T,q,R,P);T.onBeforeShadow(n,T,A,y,X,N,null),n.renderBufferDirect(y,null,X,N,T,null),T.onAfterShadow(n,T,A,y,X,N,null)}}const O=T.children;for(let X=0,q=O.length;X<q;X++)S(O[X],A,y,R,P)}function b(T){T.target.removeEventListener("dispose",b);for(const y in u){const R=u[y],P=T.target.uuid;P in R&&(R[P].dispose(),delete R[P])}}}function mP(n,e){function t(){let L=!1;const ae=new ft;let K=null;const xe=new ft(0,0,0,0);return{setMask:function(ce){K!==ce&&!L&&(n.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,be,Oe,Ct){Ct===!0&&(ce*=Oe,te*=Oe,be*=Oe),ae.set(ce,te,be,Oe),xe.equals(ae)===!1&&(n.clearColor(ce,te,be,Oe),xe.copy(ae))},reset:function(){L=!1,K=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,ae=!1,K=null,xe=null,ce=null;return{setReversed:function(te){if(ae!==te){const be=e.get("EXT_clip_control");te?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=te;const Oe=ce;ce=null,this.setClear(Oe)}},getReversed:function(){return ae},setTest:function(te){te?le(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(te){K!==te&&!L&&(n.depthMask(te),K=te)},setFunc:function(te){if(ae&&(te=Z1[te]),xe!==te){switch(te){case Nd:n.depthFunc(n.NEVER);break;case Id:n.depthFunc(n.ALWAYS);break;case Dd:n.depthFunc(n.LESS);break;case la:n.depthFunc(n.LEQUAL);break;case Ud:n.depthFunc(n.EQUAL);break;case Fd:n.depthFunc(n.GEQUAL);break;case Od:n.depthFunc(n.GREATER);break;case kd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(ce=te,ae&&(te=1-te),n.clearDepth(te))},reset:function(){L=!1,K=null,xe=null,ce=null,ae=!1}}}function r(){let L=!1,ae=null,K=null,xe=null,ce=null,te=null,be=null,Oe=null,Ct=null;return{setTest:function(ot){L||(ot?le(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!L&&(n.stencilMask(ot),ae=ot)},setFunc:function(ot,Ni,ui){(K!==ot||xe!==Ni||ce!==ui)&&(n.stencilFunc(ot,Ni,ui),K=ot,xe=Ni,ce=ui)},setOp:function(ot,Ni,ui){(te!==ot||be!==Ni||Oe!==ui)&&(n.stencilOp(ot,Ni,ui),te=ot,be=Ni,Oe=ui)},setLocked:function(ot){L=ot},setClear:function(ot){Ct!==ot&&(n.clearStencil(ot),Ct=ot)},reset:function(){L=!1,ae=null,K=null,xe=null,ce=null,te=null,be=null,Oe=null,Ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d={},p=new WeakMap,_=[],x=null,m=!1,h=null,g=null,v=null,S=null,b=null,T=null,A=null,y=new Fe(0,0,0),R=0,P=!1,C=null,O=null,X=null,q=null,N=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),B=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=k>=2);let ee=null,oe={};const he=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ke=new ft().fromArray(he),Ne=new ft().fromArray(Ge);function Z(L,ae,K,xe){const ce=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<K;be++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ae+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return te}const de={};de[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(la),Ft(!1),St(bg),le(n.CULL_FACE),mt(Xi);function le(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function Ce(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function De(L,ae){return d[L]!==ae?(n.bindFramebuffer(L,ae),d[L]=ae,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Le(L,ae){let K=_,xe=!1;if(L){K=p.get(ae),K===void 0&&(K=[],p.set(ae,K));const ce=L.textures;if(K.length!==ce.length||K[0]!==n.COLOR_ATTACHMENT0){for(let te=0,be=ce.length;te<be;te++)K[te]=n.COLOR_ATTACHMENT0+te;K.length=ce.length,xe=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,xe=!0);xe&&n.drawBuffers(K)}function yt(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const qe={[Yr]:n.FUNC_ADD,[_1]:n.FUNC_SUBTRACT,[v1]:n.FUNC_REVERSE_SUBTRACT};qe[x1]=n.MIN,qe[y1]=n.MAX;const at={[S1]:n.ZERO,[M1]:n.ONE,[E1]:n.SRC_COLOR,[Pd]:n.SRC_ALPHA,[C1]:n.SRC_ALPHA_SATURATE,[A1]:n.DST_COLOR,[w1]:n.DST_ALPHA,[T1]:n.ONE_MINUS_SRC_COLOR,[Ld]:n.ONE_MINUS_SRC_ALPHA,[R1]:n.ONE_MINUS_DST_COLOR,[b1]:n.ONE_MINUS_DST_ALPHA,[P1]:n.CONSTANT_COLOR,[L1]:n.ONE_MINUS_CONSTANT_COLOR,[N1]:n.CONSTANT_ALPHA,[I1]:n.ONE_MINUS_CONSTANT_ALPHA};function mt(L,ae,K,xe,ce,te,be,Oe,Ct,ot){if(L===Xi){m===!0&&(Ce(n.BLEND),m=!1);return}if(m===!1&&(le(n.BLEND),m=!0),L!==g1){if(L!==h||ot!==P){if((g!==Yr||b!==Yr)&&(n.blendEquation(n.FUNC_ADD),g=Yr,b=Yr),ot)switch(L){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ag:n.blendFunc(n.ONE,n.ONE);break;case Rg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pe("WebGLState: Invalid blending: ",L);break}else switch(L){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ag:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Rg:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",L);break}v=null,S=null,T=null,A=null,y.set(0,0,0),R=0,h=L,P=ot}return}ce=ce||ae,te=te||K,be=be||xe,(ae!==g||ce!==b)&&(n.blendEquationSeparate(qe[ae],qe[ce]),g=ae,b=ce),(K!==v||xe!==S||te!==T||be!==A)&&(n.blendFuncSeparate(at[K],at[xe],at[te],at[be]),v=K,S=xe,T=te,A=be),(Oe.equals(y)===!1||Ct!==R)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Ct),y.copy(Oe),R=Ct),h=L,P=!1}function je(L,ae){L.side===vi?Ce(n.CULL_FACE):le(n.CULL_FACE);let K=L.side===xn;ae&&(K=!K),Ft(K),L.blending===Js&&L.transparent===!1?mt(Xi):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){C!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),C=L)}function St(L){L!==h1?(le(n.CULL_FACE),L!==O&&(L===bg?n.cullFace(n.BACK):L===p1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),O=L}function yn(L){L!==X&&(B&&n.lineWidth(L),X=L)}function I(L,ae,K){L?(le(n.POLYGON_OFFSET_FILL),(q!==ae||N!==K)&&(q=ae,N=K,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,K))):Ce(n.POLYGON_OFFSET_FILL)}function Ot(L){L?le(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function Ze(L){L===void 0&&(L=n.TEXTURE0+W-1),ee!==L&&(n.activeTexture(L),ee=L)}function dt(L,ae,K){K===void 0&&(ee===null?K=n.TEXTURE0+W-1:K=ee);let xe=oe[K];xe===void 0&&(xe={type:void 0,texture:void 0},oe[K]=xe),(xe.type!==L||xe.texture!==ae)&&(ee!==K&&(n.activeTexture(K),ee=K),n.bindTexture(L,ae||de[L]),xe.type=L,xe.texture=ae)}function pe(){const L=oe[ee];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function bt(){try{n.compressedTexImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function M(){try{n.texSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function F(){try{n.texSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function fe(){try{n.texStorage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){Pe("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){Pe("WebGLState:",L)}}function ve(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function Se(L,ae){f[L]!==ae&&(n.pixelStorei(L,ae),f[L]=ae)}function ue(L){Ke.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ke.copy(L))}function se(L){Ne.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ne.copy(L))}function Ie(L,ae){let K=u.get(ae);K===void 0&&(K=new WeakMap,u.set(ae,K));let xe=K.get(L);xe===void 0&&(xe=n.getUniformBlockIndex(ae,L.name),K.set(L,xe))}function Be(L,ae){const xe=u.get(ae).get(L);l.get(ae)!==xe&&(n.uniformBlockBinding(ae,xe,L.__bindingPointIndex),l.set(ae,xe))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},f={},ee=null,oe={},d={},p=new WeakMap,_=[],x=null,m=!1,h=null,g=null,v=null,S=null,b=null,T=null,A=null,y=new Fe(0,0,0),R=0,P=!1,C=null,O=null,X=null,q=null,N=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Ce,bindFramebuffer:De,drawBuffers:Le,useProgram:yt,setBlending:mt,setMaterial:je,setFlipSided:Ft,setCullFace:St,setLineWidth:yn,setPolygonOffset:I,setScissorTest:Ot,activeTexture:Ze,bindTexture:dt,unbindTexture:pe,compressedTexImage2D:bt,compressedTexImage3D:w,texImage2D:Y,texImage3D:Q,pixelStorei:Se,getParameter:ve,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:fe,texSubImage2D:M,texSubImage3D:F,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:ue,viewport:se,reset:tt}}function gP(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,c=new WeakMap,f=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,M){return _?new OffscreenCanvas(w,M):Oo("canvas")}function m(w,M,F){let J=1;const ne=bt(w);if((ne.width>F||ne.height>F)&&(J=F/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(J*ne.width),fe=Math.floor(J*ne.height);d===void 0&&(d=x(re,fe));const Y=M?x(re,fe):d;return Y.width=re,Y.height=fe,Y.getContext("2d").drawImage(w,0,0,re,fe),we("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+re+"x"+fe+")."),Y}else return"data"in w&&we("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),w;return w}function h(w){return w.generateMipmaps}function g(w){n.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,M,F,J,ne,re=!1){if(w!==null){if(n[w]!==void 0)return n[w];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;J&&(fe=e.get("EXT_texture_norm16"),fe||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8),F===n.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),F===n.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),M===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),M===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8),F===n.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),F===n.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),M===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),M===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),M===n.RGB&&(F===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),F===n.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),M===n.RGBA){const Q=re?Ou:Xe.getTransfer(ne);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Q===nt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),F===n.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(w,M){let F;return w?M===null||M===Ai||M===Io?F=n.DEPTH24_STENCIL8:M===Bn?F=n.DEPTH32F_STENCIL8:M===No&&(F=n.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ai||M===Io?F=n.DEPTH_COMPONENT24:M===Bn?F=n.DEPTH_COMPONENT32F:M===No&&(F=n.DEPTH_COMPONENT16),F}function T(w,M){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==zt&&w.minFilter!==Vt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&f.delete(M)}function y(w){const M=w.target;M.removeEventListener("dispose",y),C(M)}function R(w){const M=i.get(w);if(M.__webglInit===void 0)return;const F=w.source,J=p.get(F);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(w),Object.keys(J).length===0&&p.delete(F)}i.remove(w)}function P(w){const M=i.get(w);n.deleteTexture(M.__webglTexture);const F=w.source,J=p.get(F);delete J[M.__cacheKey],a.memory.textures--}function C(w){const M=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=w.textures;for(let J=0,ne=F.length;J<ne;J++){const re=i.get(F[J]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(F[J])}i.remove(w)}let O=0;function X(){O=0}function q(){return O}function N(w){O=w}function W(){const w=O;return w>=r.maxTextures&&we("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function k(w,M){const F=i.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const J=w.image;if(J===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(F,w,M);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+M)}function $(w,M){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ce(F,w,M);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+M)}function ee(w,M){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ce(F,w,M);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+M)}function oe(w,M){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){De(F,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+M)}const he={[ca]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Du]:n.MIRRORED_REPEAT},Ge={[zt]:n.NEAREST,[Bx]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[nu]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},Ke={[V1]:n.NEVER,[X1]:n.ALWAYS,[H1]:n.LESS,[Op]:n.LEQUAL,[G1]:n.EQUAL,[kp]:n.GEQUAL,[W1]:n.GREATER,[j1]:n.NOTEQUAL};function Ne(w,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vt||M.magFilter===nu||M.magFilter===Qa||M.magFilter===Gi||M.minFilter===Vt||M.minFilter===nu||M.minFilter===Qa||M.minFilter===Gi)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,he[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,he[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,he[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Ge[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Ge[M.minFilter]),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ke[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==Qa&&M.minFilter!==Gi||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const J=M.source;let ne=p.get(J);ne===void 0&&(ne={},p.set(J,ne));const re=B(M);if(re!==w.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[re].usedTimes++;const fe=ne[w.__cacheKey];fe!==void 0&&(ne[w.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),w.__cacheKey=re,w.__webglTexture=ne[re].texture}return F}function de(w,M,F){return Math.floor(Math.floor(w/F)/M)}function le(w,M,F,J){const re=w.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,F,J,M.data);else{re.sort((Se,ue)=>Se.start-ue.start);let fe=0;for(let Se=1;Se<re.length;Se++){const ue=re[fe],se=re[Se],Ie=ue.start+ue.count,Be=de(se.start,M.width,4),tt=de(ue.start,M.width,4);se.start<=Ie+1&&Be===tt&&de(se.start+se.count-1,M.width,4)===Be?ue.count=Math.max(ue.count,se.start+se.count-ue.start):(++fe,re[fe]=se)}re.length=fe+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),ve=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Se=0,ue=re.length;Se<ue;Se++){const se=re[Se],Ie=Math.floor(se.start/4),Be=Math.ceil(se.count/4),tt=Ie%M.width,L=Math.floor(Ie/M.width),ae=Be,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,tt,L,ae,K,F,J,M.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function Ce(w,M,F){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);const ne=Z(w,M),re=M.source;t.bindTexture(J,w.__webglTexture,n.TEXTURE0+F);const fe=i.get(re);if(re.version!==fe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const K=Xe.getPrimaries(Xe.workingColorSpace),xe=M.colorSpace===Sr?null:Xe.getPrimaries(M.colorSpace),ce=M.colorSpace===Sr||K===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,r.maxTextureSize);Q=pe(M,Q);const ve=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let ue=S(M.internalFormat,ve,Se,M.normalized,M.colorSpace,M.isVideoTexture);Ne(J,M);let se;const Ie=M.mipmaps,Be=M.isVideoTexture!==!0,tt=fe.__version===void 0||ne===!0,L=re.dataReady,ae=T(M,Q);if(M.isDepthTexture)ue=b(M.format===Qr,M.type),tt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ve,Se,null));else if(M.isDataTexture)if(Ie.length>0){Be&&tt&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let K=0,xe=Ie.length;K<xe;K++)se=Ie[K],Be?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,ve,Se,se.data):t.texImage2D(n.TEXTURE_2D,K,ue,se.width,se.height,0,ve,Se,se.data);M.generateMipmaps=!1}else Be?(tt&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Q.width,Q.height),L&&le(M,Q,ve,Se)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,ve,Se,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ue,Ie[0].width,Ie[0].height,Q.depth);for(let K=0,xe=Ie.length;K<xe;K++)if(se=Ie[K],M.format!==zn)if(ve!==null)if(Be){if(L)if(M.layerUpdates.size>0){const ce=y0(se.width,se.height,M.format,M.type);for(const te of M.layerUpdates){const be=se.data.subarray(te*ce/se.data.BYTES_PER_ELEMENT,(te+1)*ce/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,te,se.width,se.height,1,ve,be)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Q.depth,ve,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,ue,se.width,se.height,Q.depth,0,se.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,Q.depth,ve,Se,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,ue,se.width,se.height,Q.depth,0,ve,Se,se.data)}else{Be&&tt&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Ie[0].width,Ie[0].height);for(let K=0,xe=Ie.length;K<xe;K++)se=Ie[K],M.format!==zn?ve!==null?Be?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,ve,se.data):t.compressedTexImage2D(n.TEXTURE_2D,K,ue,se.width,se.height,0,se.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,se.width,se.height,ve,Se,se.data):t.texImage2D(n.TEXTURE_2D,K,ue,se.width,se.height,0,ve,Se,se.data)}else if(M.isDataArrayTexture)if(Be){if(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ue,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){const K=y0(Q.width,Q.height,M.format,M.type);for(const xe of M.layerUpdates){const ce=Q.data.subarray(xe*K/Q.data.BYTES_PER_ELEMENT,(xe+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,Q.width,Q.height,1,ve,Se,ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,Se,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,ve,Se,Q.data);else if(M.isData3DTexture)Be?(tt&&t.texStorage3D(n.TEXTURE_3D,ae,ue,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,Se,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,ve,Se,Q.data);else if(M.isFramebufferTexture){if(tt)if(Be)t.texStorage2D(n.TEXTURE_2D,ae,ue,Q.width,Q.height);else{let K=Q.width,xe=Q.height;for(let ce=0;ce<ae;ce++)t.texImage2D(n.TEXTURE_2D,ce,ue,K,xe,0,ve,Se,null),K>>=1,xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),f.add(M),K.onpaint=Oe=>{const Ct=Oe.changedElements;for(const ot of f)Ct.includes(ot.image)&&(ot.needsUpdate=!0)},K.requestPaint();return}const xe=0,ce=n.RGBA,te=n.RGBA,be=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,xe,ce,te,be,Q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&tt){const K=bt(Ie[0]);t.texStorage2D(n.TEXTURE_2D,ae,ue,K.width,K.height)}for(let K=0,xe=Ie.length;K<xe;K++)se=Ie[K],Be?L&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ve,Se,se):t.texImage2D(n.TEXTURE_2D,K,ue,ve,Se,se);M.generateMipmaps=!1}else if(Be){if(tt){const K=bt(Q);t.texStorage2D(n.TEXTURE_2D,ae,ue,K.width,K.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Se,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,ve,Se,Q);h(M)&&g(J),fe.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function De(w,M,F){if(M.image.length!==6)return;const J=Z(w,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const re=i.get(ne);if(ne.version!==re.__version||J===!0){t.activeTexture(n.TEXTURE0+F);const fe=Xe.getPrimaries(Xe.workingColorSpace),Y=M.colorSpace===Sr?null:Xe.getPrimaries(M.colorSpace),Q=M.colorSpace===Sr||fe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!ve&&!Se?ue[te]=m(M.image[te],!0,r.maxCubemapSize):ue[te]=Se?M.image[te].image:M.image[te],ue[te]=pe(M,ue[te]);const se=ue[0],Ie=s.convert(M.format,M.colorSpace),Be=s.convert(M.type),tt=S(M.internalFormat,Ie,Be,M.normalized,M.colorSpace),L=M.isVideoTexture!==!0,ae=re.__version===void 0||J===!0,K=ne.dataReady;let xe=T(M,se);Ne(n.TEXTURE_CUBE_MAP,M);let ce;if(ve){L&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,tt,se.width,se.height);for(let te=0;te<6;te++){ce=ue[te].mipmaps;for(let be=0;be<ce.length;be++){const Oe=ce[be];M.format!==zn?Ie!==null?L?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Oe.width,Oe.height,Ie,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,tt,Oe.width,Oe.height,0,Oe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,0,0,Oe.width,Oe.height,Ie,Be,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be,tt,Oe.width,Oe.height,0,Ie,Be,Oe.data)}}}else{if(ce=M.mipmaps,L&&ae){ce.length>0&&xe++;const te=bt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,tt,te.width,te.height)}for(let te=0;te<6;te++)if(Se){L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ie,Be,ue[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,ue[te].width,ue[te].height,0,Ie,Be,ue[te].data);for(let be=0;be<ce.length;be++){const Ct=ce[be].image[te].image;L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Ct.width,Ct.height,Ie,Be,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,tt,Ct.width,Ct.height,0,Ie,Be,Ct.data)}}else{L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,Be,ue[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,Ie,Be,ue[te]);for(let be=0;be<ce.length;be++){const Oe=ce[be];L?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,0,0,Ie,Be,Oe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,be+1,tt,Ie,Be,Oe.image[te])}}}h(M)&&g(n.TEXTURE_CUBE_MAP),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Le(w,M,F,J,ne,re){const fe=s.convert(F.format,F.colorSpace),Y=s.convert(F.type),Q=S(F.internalFormat,fe,Y,F.normalized,F.colorSpace),ve=i.get(M),Se=i.get(F);if(Se.__renderTarget=M,!ve.__hasExternalTextures){const ue=Math.max(1,M.width>>re),se=Math.max(1,M.height>>re);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,re,Q,ue,se,M.depth,0,fe,Y,null):t.texImage2D(ne,re,Q,ue,se,0,fe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ne,Se.__webglTexture,0,Ot(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ne,Se.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(w,M,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer){const J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,re=b(M.stencilBuffer,ne),fe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(M),re,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(M),re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,w)}else{const J=M.textures;for(let ne=0;ne<J.length;ne++){const re=J[ne],fe=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),Q=S(re.internalFormat,fe,Y,re.normalized,re.colorSpace);Ze(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ot(M),Q,M.width,M.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot(M),Q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(w,M,F){const J=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(M.depthTexture);if(ne.__renderTarget=M,(!ne.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M.depthTexture);const ve=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===tr?ue=n.DEPTH_COMPONENT24:M.depthTexture.format===Qr&&(ue=n.DEPTH24_STENCIL8);for(let se=0;se<6;se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,M.width,M.height,0,ve,Se,null)}}else k(M.depthTexture,0);const re=ne.__webglTexture,fe=Ot(M),Y=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Q=M.depthTexture.format===Qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===tr)Ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,re,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,re,0);else if(M.depthTexture.format===Qr)Ze(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,re,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,re,0);else throw new Error("Unknown depthTexture format")}function at(w){const M=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let J=0;J<6;J++)qe(M.__webglFramebuffer[J],w,J);else{const J=w.texture.mipmaps;J&&J.length>0?qe(M.__webglFramebuffer[0],w,0):qe(M.__webglFramebuffer,w,0)}else if(F){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),yt(M.__webglDepthbuffer[J],w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}}else{const J=w.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),yt(M.__webglDepthbuffer,w,!1);else{const ne=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(w,M,F){const J=i.get(w);M!==void 0&&Le(J.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&at(w)}function je(w){const M=w.texture,F=i.get(w),J=i.get(M);w.addEventListener("dispose",y);const ne=w.textures,re=w.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let Q=0;Q<M.mipmaps.length;Q++)F.__webglFramebuffer[Y][Q]=n.createFramebuffer()}else F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(fe)for(let Y=0,Q=ne.length;Y<Q;Y++){const ve=i.get(ne[Y]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ze(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const Q=ne[Y];F.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);const ve=s.convert(Q.format,Q.colorSpace),Se=s.convert(Q.type),ue=S(Q.internalFormat,ve,Se,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),se=Ot(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,se,ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Le(F.__webglFramebuffer[Y][Q],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Le(F.__webglFramebuffer[Y],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(M)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Y=0,Q=ne.length;Y<Q;Y++){const ve=ne[Y],Se=i.get(ve);let ue=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Se.__webglTexture),Ne(ue,ve),Le(F.__webglFramebuffer,w,ve,n.COLOR_ATTACHMENT0+Y,ue,0),h(ve)&&g(ue)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,J.__webglTexture),Ne(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Le(F.__webglFramebuffer[Q],w,M,n.COLOR_ATTACHMENT0,Y,Q);else Le(F.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,Y,0);h(M)&&g(Y),t.unbindTexture()}w.depthBuffer&&at(w)}function Ft(w){const M=w.textures;for(let F=0,J=M.length;F<J;F++){const ne=M[F];if(h(ne)){const re=v(w),fe=i.get(ne).__webglTexture;t.bindTexture(re,fe),g(re),t.unbindTexture()}}}const St=[],yn=[];function I(w){if(w.samples>0){if(Ze(w)===!1){const M=w.textures,F=w.width,J=w.height;let ne=n.COLOR_BUFFER_BIT;const re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(w),Y=M.length>1;if(Y)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Q=w.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Se=i.get(M[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,ne,n.NEAREST),l===!0&&(St.length=0,yn.length=0,St.push(n.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(St.push(re),yn.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Se=i.get(M[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ot(w){return Math.min(r.maxSamples,w.samples)}function Ze(w){const M=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function dt(w){const M=a.render.frame;c.get(w)!==M&&(c.set(w,M),w.update())}function pe(w,M){const F=w.colorSpace,J=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Cn&&F!==Sr&&(Xe.getTransfer(F)===nt?(J!==zn||ne!==wn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",F)),M}function bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=oe,this.rebindTextures=mt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _P(n,e){function t(i,r=Sr){let s;const a=Xe.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===Lp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Np)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===zx)return n.BYTE;if(i===Vx)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===Pp)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===Wx)return n.ALPHA;if(i===jx)return n.RGB;if(i===zn)return n.RGBA;if(i===tr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Ip)return n.RED;if(i===Dp)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===Up)return n.RG_INTEGER;if(i===Fp)return n.RGBA_INTEGER;if(i===iu||i===ru||i===su||i===au)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===iu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Uu||i===Yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===Wd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uu)return s.COMPRESSED_RG11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kd||i===qd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uh||i===ch||i===fh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uh)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===hh||i===Fu||i===ph)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const vP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xP=`
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

}`;class yP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ry(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:vP,fragmentShader:xP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SP extends ps{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new yP,h={},g=t.getContextAttributes();let v=null,S=null;const b=[],T=[],A=new Je;let y=null;const R=new un;R.viewport=new ft;const P=new un;P.viewport=new ft;const C=[R,P],O=new Sb;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=b[Z];return de===void 0&&(de=new tf,b[Z]=de),de.getHandSpace()};function N(Z){const de=T.indexOf(Z.inputSource);if(de===-1)return;const le=b[de];le!==void 0&&(le.update(Z.inputSource,Z.frame,u||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let Z=0;Z<b.length;Z++){const de=T[Z];de!==null&&(T[Z]=null,b[Z].disconnect(de))}X=null,q=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(v),p=null,d=null,f=null,r=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ce=null,De=null;g.depth&&(De=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Qr:tr,Ce=g.stencil?Io:Ai);const Le={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ti(d.textureWidth,d.textureHeight,{format:zn,type:wn,depthTexture:new da(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:zn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(Z){for(let de=0;de<Z.removed.length;de++){const le=Z.removed[de],Ce=T.indexOf(le);Ce>=0&&(T[Ce]=null,b[Ce].disconnect(le))}for(let de=0;de<Z.added.length;de++){const le=Z.added[de];let Ce=T.indexOf(le);if(Ce===-1){for(let Le=0;Le<b.length;Le++)if(Le>=T.length){T.push(le),Ce=Le;break}else if(T[Le]===null){T[Le]=le,Ce=Le;break}if(Ce===-1)break}const De=b[Ce];De&&De.connect(le)}}const k=new U,$=new U;function ee(Z,de,le){k.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(le.matrixWorld);const Ce=k.distanceTo($),De=de.projectionMatrix.elements,Le=le.projectionMatrix.elements,yt=De[14]/(De[10]-1),qe=De[14]/(De[10]+1),at=(De[9]+1)/De[5],mt=(De[9]-1)/De[5],je=(De[8]-1)/De[0],Ft=(Le[8]+1)/Le[0],St=yt*je,yn=yt*Ft,I=Ce/(-je+Ft),Ot=I*-je;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ot),Z.translateZ(I),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ze=yt+I,dt=qe+I,pe=St-Ot,bt=yn+(Ce-Ot),w=at*qe/dt*Ze,M=mt*qe/dt*Ze;Z.projectionMatrix.makePerspective(pe,bt,w,M,Ze,dt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let de=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(le=m.depthFar)),O.near=P.near=R.near=de,O.far=P.far=R.far=le,(X!==O.near||q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,q=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Ce=Z.parent,De=O.cameras;oe(O,Ce);for(let Le=0;Le<De.length;Le++)oe(De[Le],Ce);De.length===2?ee(O,R,P):O.projectionMatrix.copy(R.projectionMatrix),he(Z,O,Ce)};function he(Z,de,le){le===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let Ge=null;function Ke(Z,de){if(c=de.getViewerPose(u||a),_=de,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ce=!1;le.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let qe=0;qe<le.length;qe++){const at=le[qe];let mt=null;if(p!==null)mt=p.getViewport(at);else{const Ft=f.getViewSubImage(d,at);mt=Ft.viewport,qe===0&&(e.setRenderTargetTextures(S,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(S))}let je=C[qe];je===void 0&&(je=new un,je.layers.enable(qe),je.viewport=new ft,C[qe]=je),je.matrix.fromArray(at.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(at.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(mt.x,mt.y,mt.width,mt.height),qe===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(je)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const qe=f.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,r.renderState)}if(De&&De.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<le.length;qe++){const at=le[qe].camera;if(at){let mt=h[at];mt||(mt=new ry,h[at]=mt);const je=f.getCameraImage(at);mt.sourceTexture=je}}}}for(let le=0;le<b.length;le++){const Ce=T[le],De=b[le];Ce!==null&&De!==void 0&&De.update(Ce,de,u||a)}Ge&&Ge(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ne=new cy;Ne.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const MP=new He,_y=new Ue;_y.set(-1,0,0,0,1,0,0,0,1);function EP(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sy(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===xn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===xn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,S=g.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(MP.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(_y),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TP(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function u(g,v){let S=r[g.id];S===void 0&&(_(g),S=c(g),r[g.id]=S,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const T=e.render.frame;s[g.id]!==T&&(d(g),s[g.id]=T)}function c(g){const v=f();g.__bindingPointIndex=v;const S=n.createBuffer(),b=g.__size,T=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],S=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=S.length;T<A;T++){const y=Array.isArray(S[T])?S[T]:[S[T]];for(let R=0,P=y.length;R<P;R++){const C=y[R];if(p(C,T,R,b)===!0){const O=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let N=0;N<X.length;N++){const W=X[N],B=x(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+q,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):ArrayBuffer.isView(W)?C.__data.set(new W.constructor(W.buffer,W.byteOffset,C.__data.length)):(W.toArray(C.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,S,b){const T=g.value,A=v+"_"+S;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:ArrayBuffer.isView(T)?b[A]=T.slice():b[A]=T.clone(),!0;{const y=b[A];if(typeof T=="number"||typeof T=="boolean"){if(y!==T)return b[A]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(y.equals(T)===!1)return y.copy(T),!0}}return!1}function _(g){const v=g.uniforms;let S=0;const b=16;for(let A=0,y=v.length;A<y;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let P=0,C=R.length;P<C;P++){const O=R[P],X=Array.isArray(O.value)?O.value:[O.value];for(let q=0,N=X.length;q<N;q++){const W=X[q],B=x(W),k=S%b,$=k%B.boundary,ee=k+$;S+=$,ee!==0&&b-ee<B.storage&&(S+=b-ee),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=B.storage}}}const T=S%b;return T>0&&(S+=b-T),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):we("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)n.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:h}}const wP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let hi=null;function bP(){return hi===null&&(hi=new Hp(wP,16,16,fs,er),hi.name="DFG_LUT",hi.minFilter=Vt,hi.magFilter=Vt,hi.wrapS=xi,hi.wrapT=xi,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}class AP{constructor(e={}){const{canvas:t=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=p,m=new Set([Fp,Up,Dp]),h=new Set([wn,Ai,No,Io,Lp,Np]),g=new Uint32Array(4),v=new Int32Array(4),S=new U;let b=null,T=null;const A=[],y=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,O=null;this._outputColorSpace=Xt;let X=0,q=0,N=null,W=-1,B=null;const k=new ft,$=new ft;let ee=null;const oe=new Fe(0);let he=0,Ge=t.width,Ke=t.height,Ne=1,Z=null,de=null;const le=new ft(0,0,Ge,Ke),Ce=new ft(0,0,Ge,Ke);let De=!1;const Le=new Wp;let yt=!1,qe=!1;const at=new He,mt=new U,je=new ft,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function yn(){return N===null?Ne:1}let I=i;function Ot(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rp}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),I===null){const D="webgl2";if(I=Ot(D,E),I===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pe("WebGLRenderer: "+E.message),E}let Ze,dt,pe,bt,w,M,F,J,ne,re,fe,Y,Q,ve,Se,ue,se,Ie,Be,tt,L,ae,K;function xe(){Ze=new bC(I),Ze.init(),L=new _P(I,Ze),dt=new vC(I,Ze,e,L),pe=new mP(I,Ze),dt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),bt=new CC(I),w=new tP,M=new gP(I,Ze,pe,w,dt,L,bt),F=new wC(P),J=new Ib(I),ae=new gC(I,J),ne=new AC(I,J,bt,ae),re=new LC(I,ne,J,ae,bt),Ie=new PC(I,dt,M),Se=new xC(w),fe=new eP(P,F,Ze,dt,ae,Se),Y=new EP(P,w),Q=new iP,ve=new uP(Ze),se=new mC(P,F,pe,re,_,l),ue=new pP(P,re,dt),K=new TP(I,bt,dt,pe),Be=new _C(I,Ze,bt),tt=new RC(I,Ze,bt),bt.programs=fe.programs,P.capabilities=dt,P.extensions=Ze,P.properties=w,P.renderLists=Q,P.shadowMap=ue,P.state=pe,P.info=bt}xe(),x!==wn&&(R=new IC(x,t.width,t.height,r,s));const ce=new SP(P,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(E){E!==void 0&&(Ne=E,this.setSize(Ge,Ke,!1))},this.getSize=function(E){return E.set(Ge,Ke)},this.setSize=function(E,D,G=!0){if(ce.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=E,Ke=D,t.width=Math.floor(E*Ne),t.height=Math.floor(D*Ne),G===!0&&(t.style.width=E+"px",t.style.height=D+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(Ge*Ne,Ke*Ne).floor()},this.setDrawingBufferSize=function(E,D,G){Ge=E,Ke=D,Ne=G,t.width=Math.floor(E*G),t.height=Math.floor(D*G),this.setViewport(0,0,E,D)},this.setEffects=function(E){if(x===wn){Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let D=0;D<E.length;D++)if(E[D].isOutputPass===!0){we("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,D,G,V){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,D,G,V),pe.viewport(k.copy(le).multiplyScalar(Ne).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,D,G,V){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,D,G,V),pe.scissor($.copy(Ce).multiplyScalar(Ne).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){pe.setScissorTest(De=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(E=!0,D=!0,G=!0){let V=0;if(E){let H=!1;if(N!==null){const _e=N.texture.format;H=m.has(_e)}if(H){const _e=N.texture.type,Me=h.has(_e),ge=se.getClearColor(),Te=se.getClearAlpha(),Ae=ge.r,ke=ge.g,Ve=ge.b;Me?(g[0]=Ae,g[1]=ke,g[2]=Ve,g[3]=Te,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ae,v[1]=ke,v[2]=Ve,v[3]=Te,I.clearBufferiv(I.COLOR,0,v))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),se.dispose(),Q.dispose(),ve.dispose(),w.dispose(),F.dispose(),re.dispose(),ae.dispose(),K.dispose(),fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",tm),ce.removeEventListener("sessionend",nm),Br.stop()};function te(E){E.preventDefault(),ku("WebGLRenderer: Context Lost."),C=!0}function be(){ku("WebGLRenderer: Context Restored."),C=!1;const E=bt.autoReset,D=ue.enabled,G=ue.autoUpdate,V=ue.needsUpdate,H=ue.type;xe(),bt.autoReset=E,ue.enabled=D,ue.autoUpdate=G,ue.needsUpdate=V,ue.type=H}function Oe(E){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const D=E.target;D.removeEventListener("dispose",Ct),ot(D)}function ot(E){Ni(E),w.remove(E)}function Ni(E){const D=w.get(E).programs;D!==void 0&&(D.forEach(function(G){fe.releaseProgram(G)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,G,V,H,_e){D===null&&(D=Ft);const Me=H.isMesh&&H.matrixWorld.determinant()<0,ge=Ay(E,D,G,V,H);pe.setMaterial(V,Me);let Te=G.index,Ae=1;if(V.wireframe===!0){if(Te=ne.getWireframeAttribute(G),Te===void 0)return;Ae=2}const ke=G.drawRange,Ve=G.attributes.position;let Re=ke.start*Ae,lt=(ke.start+ke.count)*Ae;_e!==null&&(Re=Math.max(Re,_e.start*Ae),lt=Math.min(lt,(_e.start+_e.count)*Ae)),Te!==null?(Re=Math.max(Re,0),lt=Math.min(lt,Te.count)):Ve!=null&&(Re=Math.max(Re,0),lt=Math.min(lt,Ve.count));const Pt=lt-Re;if(Pt<0||Pt===1/0)return;ae.setup(H,V,ge,G,Te);let At,ut=Be;if(Te!==null&&(At=J.get(Te),ut=tt,ut.setIndex(At)),H.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*yn()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(H.isLine){let Jt=V.linewidth;Jt===void 0&&(Jt=1),pe.setLineWidth(Jt*yn()),H.isLineSegments?ut.setMode(I.LINES):H.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else H.isPoints?ut.setMode(I.POINTS):H.isSprite&&ut.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Jt=H._multiDrawStarts,ye=H._multiDrawCounts,Sn=H._multiDrawCount,Qe=Te?J.get(Te).bytesPerElement:1,In=w.get(V).currentProgram.getUniforms();for(let ci=0;ci<Sn;ci++)In.setValue(I,"_gl_DrawID",ci),ut.render(Jt[ci]/Qe,ye[ci])}else if(H.isInstancedMesh)ut.renderInstances(Re,Pt,H.count);else if(G.isInstancedBufferGeometry){const Jt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ye=Math.min(G.instanceCount,Jt);ut.renderInstances(Re,Pt,ye)}else ut.render(Re,Pt)};function ui(E,D,G){E.transparent===!0&&E.side===vi&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Yo(E,D,G),E.side=Qi,E.needsUpdate=!0,Yo(E,D,G),E.side=vi):Yo(E,D,G)}this.compile=function(E,D,G=null){G===null&&(G=E),T=ve.get(G),T.init(D),y.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==G&&E.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const ge=_e[Me];ui(ge,G,H),V.add(ge)}else ui(_e,G,H),V.add(_e)}),T=y.pop(),V},this.compileAsync=function(E,D,G=null){const V=this.compile(E,D,G);return new Promise(H=>{function _e(){if(V.forEach(function(Me){w.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){H(E);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let mc=null;function wy(E){mc&&mc(E)}function tm(){Br.stop()}function nm(){Br.start()}const Br=new cy;Br.setAnimationLoop(wy),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(E){mc=E,ce.setAnimationLoop(E),E===null?Br.stop():Br.start()},ce.addEventListener("sessionstart",tm),ce.addEventListener("sessionend",nm),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;O!==null&&O.renderStart(E,D);const G=ce.enabled===!0&&ce.isPresenting===!0,V=R!==null&&(N===null||G)&&R.begin(P,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(D),D=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,D,N),T=ve.get(E,y.length),T.init(D),T.state.textureUnits=M.getTextureUnits(),y.push(T),at.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Le.setFromProjectionMatrix(at,yi,D.reversedDepth),qe=this.localClippingEnabled,yt=Se.init(this.clippingPlanes,qe),b=Q.get(E,A.length),b.init(),A.push(b),ce.enabled===!0&&ce.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&gc(Me,D,-1/0,P.sortObjects)}gc(E,D,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Z,de),St=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,St&&se.addToRenderList(b,E),this.info.render.frame++,yt===!0&&Se.beginShadows();const H=T.state.shadowsArray;if(ue.render(H,E,D),yt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&R.hasRenderPass())===!1){const Me=b.opaque,ge=b.transmissive;if(T.setupLights(),D.isArrayCamera){const Te=D.cameras;if(ge.length>0)for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae];rm(Me,ge,E,Ve)}St&&se.render(E);for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae];im(b,E,Ve,Ve.viewport)}}else ge.length>0&&rm(Me,ge,E,D),St&&se.render(E),im(b,E,D)}N!==null&&q===0&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),V&&R.end(P),E.isScene===!0&&E.onAfterRender(P,E,D),ae.resetDefaultState(),W=-1,B=null,y.pop(),y.length>0?(T=y[y.length-1],M.setTextureUnits(T.state.textureUnits),yt===!0&&Se.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,O!==null&&O.renderEnd()};function gc(E,D,G,V){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){V&&je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const Me=re.update(E),ge=E.material;ge.visible&&b.push(E,Me,ge,G,je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){const Me=re.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),je.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),je.copy(Me.boundingSphere.center)),je.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(ge)){const Te=Me.groups;for(let Ae=0,ke=Te.length;Ae<ke;Ae++){const Ve=Te[Ae],Re=ge[Ve.materialIndex];Re&&Re.visible&&b.push(E,Me,Re,G,je.z,Ve)}}else ge.visible&&b.push(E,Me,ge,G,je.z,null)}}const _e=E.children;for(let Me=0,ge=_e.length;Me<ge;Me++)gc(_e[Me],D,G,V)}function im(E,D,G,V){const{opaque:H,transmissive:_e,transparent:Me}=E;T.setupLightsView(G),yt===!0&&Se.setGlobalState(P.clippingPlanes,G),V&&pe.viewport(k.copy(V)),H.length>0&&$o(H,D,G),_e.length>0&&$o(_e,D,G),Me.length>0&&$o(Me,D,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function rm(E,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Re=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Ti(1,1,{generateMipmaps:!0,type:Re?er:wn,minFilter:Gi,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const _e=T.state.transmissionRenderTarget[V.id],Me=V.viewport||k;_e.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(oe),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),St&&se.render(G);const ke=P.toneMapping;P.toneMapping=Ei;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),yt===!0&&Se.setGlobalState(P.clippingPlanes,V),$o(E,G,V),M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let lt=0,Pt=D.length;lt<Pt;lt++){const At=D[lt],{object:ut,geometry:Jt,material:ye,group:Sn}=At;if(ye.side===vi&&ut.layers.test(V.layers)){const Qe=ye.side;ye.side=xn,ye.needsUpdate=!0,sm(ut,G,V,Jt,ye,Sn),ye.side=Qe,ye.needsUpdate=!0,Re=!0}}Re===!0&&(M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e))}P.setRenderTarget(ge,Te,Ae),P.setClearColor(oe,he),Ve!==void 0&&(V.viewport=Ve),P.toneMapping=ke}function $o(E,D,G){const V=D.isScene===!0?D.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){const Me=E[H],{object:ge,geometry:Te,group:Ae}=Me;let ke=Me.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(G.layers)&&sm(ge,D,G,Te,ke,Ae)}}function sm(E,D,G,V,H,_e){E.onBeforeRender(P,D,G,V,H,_e),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,D,G,V,E,_e),H.transparent===!0&&H.side===vi&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,E,_e),H.side=Qi,H.needsUpdate=!0,P.renderBufferDirect(G,D,V,H,E,_e),H.side=vi):P.renderBufferDirect(G,D,V,H,E,_e),E.onAfterRender(P,D,G,V,H,_e)}function Yo(E,D,G){D.isScene!==!0&&(D=Ft);const V=w.get(E),H=T.state.lights,_e=T.state.shadowsArray,Me=H.state.version,ge=fe.getParameters(E,H.state,_e,D,G,T.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let Ae=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=F.get(E.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Ct),Ae=new Map,V.programs=Ae);let Ve=Ae.get(Te);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Me)return om(E,ge),Ve}else ge.uniforms=fe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,G,ge),E.onBeforeCompile(ge,P),Ve=fe.acquireProgram(ge,Te),Ae.set(Te,Ve),V.uniforms=ge.uniforms;const Re=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Se.uniform),om(E,ge),V.needsLights=Cy(E),V.lightsStateVersion=Me,V.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Ve,V.uniformsList=null,Ve}function am(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ou.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function om(E,D){const G=w.get(E);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function by(E,D){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let G=0,V=E.length;G<V;G++){const H=E[G];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Ay(E,D,G,V,H){D.isScene!==!0&&(D=Ft),M.resetTextureUnits();const _e=D.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,ge=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Xe.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ae=F.get(V.envMap||Me,Te),ke=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,Pt=!!G.morphAttributes.color;let At=Ei;V.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(At=P.toneMapping);const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=ut!==void 0?ut.length:0,ye=w.get(V),Sn=T.state.lights;if(yt===!0&&(qe===!0||E!==B)){const ht=E===B&&V.id===W;Se.setState(V,E,ht)}let Qe=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Sn.state.version||ye.outputColorSpace!==ge||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==Ae||V.fog===!0&&ye.fog!==_e||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Se.numPlanes||ye.numIntersection!==Se.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==Ve||ye.morphTargets!==Re||ye.morphNormals!==lt||ye.morphColors!==Pt||ye.toneMapping!==At||ye.morphTargetsCount!==Jt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ye.__version=V.version);let In=ye.currentProgram;Qe===!0&&(In=Yo(V,D,H),O&&V.isNodeMaterial&&O.onUpdateProgram(V,In,ye));let ci=!1,ar=!1,ms=!1;const ct=In.getUniforms(),Lt=ye.uniforms;if(pe.useProgram(In.program)&&(ci=!0,ar=!0,ms=!0),V.id!==W&&(W=V.id,ar=!0),ye.needsLights){const ht=by(T.state.lightProbeGridArray,H);ye.lightProbeGrid!==ht&&(ye.lightProbeGrid=ht,ar=!0)}if(ci||B!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",E.projectionMatrix),ct.setValue(I,"viewMatrix",E.matrixWorldInverse);const lr=ct.map.cameraPosition;lr!==void 0&&lr.setValue(I,mt.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,ar=!0,ms=!0)}if(ye.needsLights&&(Sn.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Sn.state.directionalShadowMap,M),Sn.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Sn.state.spotShadowMap,M),Sn.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Sn.state.pointShadowMap,M)),H.isSkinnedMesh){ct.setOptional(I,H,"bindMatrix"),ct.setOptional(I,H,"bindMatrixInverse");const ht=H.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(I,"boneTexture",ht.boneTexture,M))}H.isBatchedMesh&&(ct.setOptional(I,H,"batchingTexture"),ct.setValue(I,"batchingTexture",H._matricesTexture,M),ct.setOptional(I,H,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",H._indirectTexture,M),ct.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",H._colorsTexture,M));const or=G.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ie.update(H,G,In),(ar||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,ct.setValue(I,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Lt.envMapIntensity.value=D.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=bP()),ar){if(ct.setValue(I,"toneMappingExposure",P.toneMappingExposure),ye.needsLights&&Ry(Lt,ms),_e&&V.fog===!0&&Y.refreshFogUniforms(Lt,_e),Y.refreshMaterialUniforms(Lt,V,Ne,Ke,T.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const ht=ye.lightProbeGrid;Lt.probesSH.value=ht.texture,Lt.probesMin.value.copy(ht.boundingBox.min),Lt.probesMax.value.copy(ht.boundingBox.max),Lt.probesResolution.value.copy(ht.resolution)}ou.upload(I,am(ye),Lt,M)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ou.upload(I,am(ye),Lt,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(I,"center",H.center),ct.setValue(I,"modelViewMatrix",H.modelViewMatrix),ct.setValue(I,"normalMatrix",H.normalMatrix),ct.setValue(I,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ht=V.uniformsGroups;for(let lr=0,gs=ht.length;lr<gs;lr++){const lm=ht[lr];K.update(lm,In),K.bind(lm,In)}}return In}function Ry(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Cy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,D,G){const V=w.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),w.get(E.texture).__webglTexture=D,w.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,D){const G=w.get(E);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0};const Py=I.createFramebuffer();this.setRenderTarget=function(E,D=0,G=0){N=E,X=D,q=G;let V=null,H=!1,_e=!1;if(E){const ge=w.get(E);if(ge.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(E.viewport),$.copy(E.scissor),ee=E.scissorTest,pe.viewport(k),pe.scissor($),pe.setScissorTest(ee),W=-1;return}else if(ge.__webglFramebuffer===void 0)M.setupRenderTarget(E);else if(ge.__hasExternalTextures)M.rebindTextures(E,w.get(E.texture).__webglTexture,w.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&w.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Ae=w.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?V=Ae[D][G]:V=Ae[D],H=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?V=w.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?V=Ae[G]:V=Ae,k.copy(E.viewport),$.copy(E.scissor),ee=E.scissorTest}else k.copy(le).multiplyScalar(Ne).floor(),$.copy(Ce).multiplyScalar(Ne).floor(),ee=De;if(G!==0&&(V=Py),pe.bindFramebuffer(I.FRAMEBUFFER,V)&&pe.drawBuffers(E,V),pe.viewport(k),pe.scissor($),pe.setScissorTest(ee),H){const ge=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,G)}else if(_e){const ge=D;for(let Te=0;Te<E.textures.length;Te++){const Ae=w.get(E.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ae.__webglTexture,G,ge)}}else if(E!==null&&G!==0){const ge=w.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(E,D,G,V,H,_e,Me,ge=0){if(!(E&&E.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ae=E.textures[ge],ke=Ae.format,Ve=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!dt.textureFormatReadable(ke)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ve)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-V&&G>=0&&G<=E.height-H&&I.readPixels(D,G,V,H,L.convert(ke),L.convert(Ve),_e)}finally{const Ae=N!==null?w.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,D,G,V,H,_e,Me,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=w.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(D>=0&&D<=E.width-V&&G>=0&&G<=E.height-H){pe.bindFramebuffer(I.FRAMEBUFFER,Te);const Ae=E.textures[ge],ke=Ae.format,Ve=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!dt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(D,G,V,H,L.convert(ke),L.convert(Ve),0);const lt=N!==null?w.get(N).__webglFramebuffer:null;pe.bindFramebuffer(I.FRAMEBUFFER,lt);const Pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await q1(I,Pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Re),I.deleteSync(Pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,D=null,G=0){const V=Math.pow(2,-G),H=Math.floor(E.image.width*V),_e=Math.floor(E.image.height*V),Me=D!==null?D.x:0,ge=D!==null?D.y:0;M.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Me,ge,H,_e),pe.unbindTexture()};const Ly=I.createFramebuffer(),Ny=I.createFramebuffer();this.copyTextureToTexture=function(E,D,G=null,V=null,H=0,_e=0){let Me,ge,Te,Ae,ke,Ve,Re,lt,Pt;const At=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(G!==null)Me=G.max.x-G.min.x,ge=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,ke=G.min.y,Ve=G.isBox3?G.min.z:0;else{const Lt=Math.pow(2,-H);Me=Math.floor(At.width*Lt),ge=Math.floor(At.height*Lt),E.isDataArrayTexture?Te=At.depth:E.isData3DTexture?Te=Math.floor(At.depth*Lt):Te=1,Ae=0,ke=0,Ve=0}V!==null?(Re=V.x,lt=V.y,Pt=V.z):(Re=0,lt=0,Pt=0);const ut=L.convert(D.format),Jt=L.convert(D.type);let ye;D.isData3DTexture?(M.setTexture3D(D,0),ye=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(M.setTexture2DArray(D,0),ye=I.TEXTURE_2D_ARRAY):(M.setTexture2D(D,0),ye=I.TEXTURE_2D),pe.activeTexture(I.TEXTURE0),pe.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),pe.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),pe.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Sn=pe.getParameter(I.UNPACK_ROW_LENGTH),Qe=pe.getParameter(I.UNPACK_IMAGE_HEIGHT),In=pe.getParameter(I.UNPACK_SKIP_PIXELS),ci=pe.getParameter(I.UNPACK_SKIP_ROWS),ar=pe.getParameter(I.UNPACK_SKIP_IMAGES);pe.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),pe.pixelStorei(I.UNPACK_SKIP_ROWS,ke),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const ms=E.isDataArrayTexture||E.isData3DTexture,ct=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){const Lt=w.get(E),or=w.get(D),ht=w.get(Lt.__renderTarget),lr=w.get(or.__renderTarget);pe.bindFramebuffer(I.READ_FRAMEBUFFER,ht.__webglFramebuffer),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let gs=0;gs<Te;gs++)ms&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(E).__webglTexture,H,Ve+gs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,w.get(D).__webglTexture,_e,Pt+gs)),I.blitFramebuffer(Ae,ke,Me,ge,Re,lt,Me,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||w.has(E)){const Lt=w.get(E),or=w.get(D);pe.bindFramebuffer(I.READ_FRAMEBUFFER,Ly),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ny);for(let ht=0;ht<Te;ht++)ms?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,H,Ve+ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,H),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,or.__webglTexture,_e,Pt+ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,or.__webglTexture,_e),H!==0?I.blitFramebuffer(Ae,ke,Me,ge,Re,lt,Me,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(ye,_e,Re,lt,Pt+ht,Ae,ke,Me,ge):I.copyTexSubImage2D(ye,_e,Re,lt,Ae,ke,Me,ge);pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,Jt,At.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,At.data):I.texSubImage3D(ye,_e,Re,lt,Pt,Me,ge,Te,ut,Jt,At):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Re,lt,Me,ge,ut,Jt,At.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Re,lt,At.width,At.height,ut,At.data):I.texSubImage2D(I.TEXTURE_2D,_e,Re,lt,Me,ge,ut,Jt,At);pe.pixelStorei(I.UNPACK_ROW_LENGTH,Sn),pe.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),pe.pixelStorei(I.UNPACK_SKIP_PIXELS,In),pe.pixelStorei(I.UNPACK_SKIP_ROWS,ci),pe.pixelStorei(I.UNPACK_SKIP_IMAGES,ar),_e===0&&D.generateMipmaps&&I.generateMipmap(ye),pe.unbindTexture()},this.initRenderTarget=function(E){w.get(E).__webglFramebuffer===void 0&&M.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){X=0,q=0,N=null,pe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}function W0(n,e){if(e===k1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===mh||e===Xx){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===mh)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function RP(n){const e=new Map,t=new Map,i=n.clone();return vy(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function vy(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)vy(n.children[i],e.children[i],t)}class CP extends wa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new DP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new WP(t)}),this.register(function(t){return new jP(t)}),this.register(function(t){return new XP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new GP(t)}),this.register(function(t){return new HP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new j0(t,We.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new j0(t,We.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $P(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=ho.extractUrlBase(e);a=ho.resolveURL(u,this.path)}else a=ho.extractUrlBase(e);this.manager.itemStart(e);const o=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ly(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{s.parse(u,a,function(c){t(c),s.manager.itemEnd(e)},o)}catch(c){o(c)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===xy){try{a[We.KHR_BINARY_GLTF]=new YP(e)}catch(f){r&&r(f);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new o3(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const f=this.pluginCallbacks[c](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const f=s.extensionsUsed[c],d=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:a[f]=new NP;break;case We.KHR_DRACO_MESH_COMPRESSION:a[f]=new KP(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[f]=new qP;break;case We.KHR_MESH_QUANTIZATION:a[f]=new ZP;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(o),u.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function PP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function It(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LP{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const c=new Fe(16777215);l.color!==void 0&&c.setRGB(l.color[0],l.color[1],l.color[2],Cn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Sh(c),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new gb(c),u.distance=f;break;case"spot":u=new pb(c),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),mi(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class NP{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ts}extendParams(e,t,i){const r=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Cn),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class IP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class DP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(s,s)}return Promise.all(r)}}class UP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class FP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class OP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Cn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Xt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class kP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class BP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(s[0],s[1],s[2],Cn),Promise.all(r)}}class zP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class VP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(s[0],s[1],s[2],Cn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Xt)),Promise.all(r)}}class HP{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class GP{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return It(this.parser,e,this.name)!==null?Li:null}extendMaterialParams(e,t){const i=It(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class WP{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class jP{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}}class XP{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const u=i.options.manager.getHandler(o.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}}class j0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,u=r.byteLength||0,c=r.count,f=r.byteStride,d=new Uint8Array(o,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(c,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(c*f);return a.decodeGltfBuffer(new Uint8Array(p),c,f,d,r.mode,r.filter),p})})}else return null}}class $P{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==Un.TRIANGLES&&u.mode!==Un.TRIANGLE_STRIP&&u.mode!==Un.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const u in a)o.push(this.parser.getDependency("accessor",a[u]).then(c=>(l[u]=c,l[u])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(u=>{const c=u.pop(),f=c.isGroup?c.children:[c],d=u[0].count,p=[];for(const _ of f){const x=new He,m=new U,h=new rr,g=new U(1,1,1),v=new ey(_.geometry,_.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,S),l.SCALE&&g.fromBufferAttribute(l.SCALE,S),v.setMatrixAt(S,x.compose(m,h,g));for(const S in l)if(S==="_COLOR_0"){const b=l[S];v.instanceColor=new xh(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,l[S]);vt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return c.isGroup?(c.clear(),c.add(...p),c):p[0]}))}}const xy="glTF",Xa=12,X0={JSON:1313821514,BIN:5130562};class YP{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Xa,s=new DataView(e,Xa);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===X0.JSON){const u=new Uint8Array(e,Xa+a,o);this.content=i.decode(u)}else if(l===X0.BIN){const u=Xa+a;this.body=e.slice(u,u+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},u={};for(const c in a){const f=Th[c]||c.toLowerCase();o[f]=a[c]}for(const c in e.attributes){const f=Th[c]||c.toLowerCase();if(a[c]!==void 0){const d=i.accessors[e.attributes[c]],p=ea[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(c){return new Promise(function(f,d){r.decodeDracoFile(c,function(p){for(const _ in p.attributes){const x=p.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}f(p)},o,u,Cn,d)})})}}class qP{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZP{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class yy extends Ma{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,u=o*3,c=r-t,f=(i-t)/c,d=f*f,p=d*f,_=e*u,x=_-u,m=-2*p+3*d,h=p-d,g=1-m,v=h-d+f;for(let S=0;S!==o;S++){const b=a[x+S+o],T=a[x+S+l]*c,A=a[_+S+o],y=a[_+S]*c;s[S]=g*b+v*T+m*A+h*y}return s}}const JP=new rr;class QP extends yy{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return JP.fromArray(s).normalize().toArray(s),s}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ea={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$0={9728:zt,9729:Vt,9984:Bx,9985:nu,9986:Qa,9987:Gi},Y0={33071:xi,33648:Du,10497:ca},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Th={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e3={CUBICSPLINE:void 0,LINEAR:Uo,STEP:Do},Lf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t3(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Xp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),n.DefaultMaterial}function Wr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function mi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n3(n,e,t){let i=!1,r=!1,s=!1;for(let u=0,c=e.length;u<c;u++){const f=e[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let u=0,c=e.length;u<c;u++){const f=e[u];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(u){const c=u[0],f=u[1],d=u[2];return i&&(n.morphAttributes.position=c),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function i3(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function r3(n){let e;const t=n.extensions&&n.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nf(t.attributes):e=n.indices+":"+Nf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Nf(n.targets[i]);return e}function Nf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function wh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function s3(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const a3=new He;class o3{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new db(this.options.manager):this.textureLoader=new xb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ly(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return Wr(s,o,r),mi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[u,c]of a.children.entries())s(c,o.children[u])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(ho.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Pf[r.type],o=ea[r.componentType],l=r.normalized===!0,u=new o(r.count*a);return Promise.resolve(new fn(u,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=Pf[r.type],u=ea[r.componentType],c=u.BYTES_PER_ELEMENT,f=c*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,m;if(p&&p!==f){const h=Math.floor(d/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let v=t.cache.get(g);v||(x=new u(o,h*p,r.count*p/c),v=new Nw(x,p/c),t.cache.add(g,v)),m=new Vp(v,l,d%p/c,_)}else o===null?x=new u(r.count*l):x=new u(o,d,r.count*l),m=new fn(x,l,_);if(r.sparse!==void 0){const h=Pf.SCALAR,g=ea[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,b=new g(a[1],v,r.sparse.count*h),T=new u(a[2],S,r.sparse.count*l);o!==null&&(m=new fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=b.length;A<y;A++){const R=b[A];if(m.setX(R,T[A*l]),l>=2&&m.setY(R,T[A*l+1]),l>=3&&m.setZ(R,T[A*l+2]),l>=4&&m.setW(R,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,i).then(function(c){c.flipY=!1,c.name=a.name||o.name||"",c.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(c.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return c.magFilter=$0[d.magFilter]||Vt,c.minFilter=$0[d.minFilter]||Gi,c.wrapS=Y0[d.wrapS]||ca,c.wrapT=Y0[d.wrapT]||ca,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==zt&&c.minFilter!==Vt,r.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const c=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){const m=new Yt(x);m.needsUpdate=!0,d(m)}),t.load(ho.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return u===!0&&o.revokeObjectURL(l),mi(f,a),f.userData.mimeType=a.mimeType||s3(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=c,c}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ny,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ty,wi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},u=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=r[We.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Cn),o.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(t.assignTexture(o,"map",f.baseColorTexture,Xt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),u.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=vi);const c=s.alphaMode||Lf.OPAQUE;if(c===Lf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,c===Lf.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ts&&(u.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==ts&&(u.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ts){const f=s.emissiveFactor;o.emissive=new Fe().setRGB(f[0],f[1],f[2],Cn)}return s.emissiveTexture!==void 0&&a!==ts&&u.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(u).then(function(){const f=new a(o);return s.name&&(f.name=s.name),mi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Wr(r,f,s),f})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return K0(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o],c=r3(u),f=r[c];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(u):d=K0(new Xn,u,t),r[c]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,u=a.length;l<u;l++){const c=a[l].material===void 0?t3(this.cache):this.getDependency("material",a[l].material);o.push(c)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const u=l.slice(0,l.length-1),c=l[l.length-1],f=[];for(let p=0,_=c.length;p<_;p++){const x=c[p],m=a[p];let h;const g=u[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new Fw(x,g):new Pn(x,g),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?h.geometry=W0(h.geometry,Xx):m.mode===Un.TRIANGLE_FAN&&(h.geometry=W0(h.geometry,mh));else if(m.mode===Un.LINES)h=new Hw(x,g);else if(m.mode===Un.LINE_STRIP)h=new jp(x,g);else if(m.mode===Un.LINE_LOOP)h=new Gw(x,g);else if(m.mode===Un.POINTS)h=new Ww(x,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&i3(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),mi(h,s),m.extensions&&Wr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Wr(r,f[0],s),f[0];const d=new es;s.extensions&&Wr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(pw.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new dc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),mi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let u=0,c=a.length;u<c;u++){const f=a[u];if(f){o.push(f);const d=new He;s!==null&&d.fromArray(s.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Gp(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],u=[],c=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],x=p.target,m=x.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,g=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",g)),u.push(_),c.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(c)]).then(function(f){const d=f[0],p=f[1],_=f[2],x=f[3],m=f[4],h=[];for(let v=0,S=d.length;v<S;v++){const b=d[v],T=p[v],A=_[v],y=x[v],R=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const P=i._createAnimationTracks(b,T,A,y,R);if(P)for(let C=0;C<P.length;C++)h.push(P[C])}const g=new sb(s,void 0,h);return mi(g,r),g})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,u=r.weights.length;l<u;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let u=0,c=o.length;u<c;u++)a.push(i.getDependency("node",o[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(u){const c=u[0],f=u[1],d=u[2];d!==null&&c.traverse(function(p){p.isSkinnedMesh&&p.bind(d,a3)});for(let p=0,_=f.length;p<_;p++)c.add(f[p]);if(c.userData.pivot!==void 0&&f.length>0){const p=c.userData.pivot,_=f[0];c.pivot=new U().fromArray(p),c.position.x-=p[0],c.position.y-=p[1],c.position.z-=p[2],_.position.set(0,0,0),delete c.userData.pivot}return c})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)}),this.nodeCache[e]=Promise.all(o).then(function(u){let c;if(s.isBone===!0?c=new Qx:u.length>1?c=new es:u.length===1?c=u[0]:c=new vt,c!==u[0])for(let f=0,d=u.length;f<d;f++)c.add(u[f]);if(s.name&&(c.userData.name=s.name,c.name=a),mi(c,s),s.extensions&&Wr(i,c,s),s.matrix!==void 0){const f=new He;f.fromArray(s.matrix),c.applyMatrix4(f)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);if(!r.associations.has(c))r.associations.set(c,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(c);r.associations.set(c,{...f})}return r.associations.get(c).nodes=e,c}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new es;i.name&&(s.name=r.createUniqueName(i.name)),mi(s,i),i.extensions&&Wr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,u=a.length;l<u;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let c=0,f=l.length;c<f;c++){const d=l[c];d.parent!==null?s.add(RP(d)):s.add(d)}const u=c=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof wi||d instanceof Yt)&&f.set(d,p);return c.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function u(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}gr[s.path]===gr.weights?(u(e),e.isGroup&&e.children.forEach(u)):l.push(o);let c;switch(gr[s.path]){case gr.weights:c=pa;break;case gr.rotation:c=ma;break;case gr.translation:case gr.scale:c=ga;break;default:switch(i.itemSize){case 1:c=pa;break;case 2:case 3:default:c=ga;break}break}const f=r.interpolation!==void 0?e3[r.interpolation]:Uo,d=this._getArrayFromAccessor(i);for(let p=0,_=l.length;p<_;p++){const x=new c(l[p]+"."+gr[s.path],t.array,d,f);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=wh(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ma?QP:yy;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function l3(n,e,t){const i=e.attributes,r=new sr;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,u=o.max;if(l!==void 0&&u!==void 0){if(r.set(new U(l[0],l[1],l[2]),new U(u[0],u[1],u[2])),o.normalized){const c=wh(ea[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new U,l=new U;for(let u=0,c=s.length;u<c;u++){const f=s[u];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=wh(ea[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new Pi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function K0(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Th[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Xe.workingColorSpace!==Cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),mi(n,e),l3(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?n3(n,e.targets,t):n})}const u3=["/models/board.glb","/models/logo_l.glb","/models/logo_r.glb"];function c3(){const n=j.useRef(null);let e=0;const t=i=>{if(i.type=="Group"){let r=new vt;r.scale.set(i.scale.x,i.scale.y,i.scale.z),r.rotation.set(i.rotation.x,i.rotation.y,i.rotation.z),r.position.set(i.position.x,i.position.y,i.position.z);for(let s=0;s<i.children.length;s++){let a=i.children[s],o=t(a);r.add(o)}return r}else{let r=new ey(i.geometry,i.material,10);return r.scale.set(i.scale.x,i.scale.y,i.scale.z),r.rotation.set(i.rotation.x,i.rotation.y,i.rotation.z),r.position.set(i.position.x,i.position.y,i.position.z),r}};return j.useEffect(()=>{const i=n.current;if(!i)return;const r=new Rw,s=new un(32,1,.1,1e3);s.position.set(-4,3,3),s.lookAt(-1,0,0);const a=new AP({antialias:!0,alpha:!1,powerPreference:"high-performance"});a.setClearColor(0,0),a.outputColorSpace=Xt,a.toneMapping=Cp,a.toneMappingExposure=1.15,i.appendChild(a.domElement);const o=new Sh(16777215,3.2);o.position.set(3,4,5),r.add(o);const l=new Sh(16760970,1.5);l.position.set(-4,2,3),r.add(l);const u=new vb(16777215,1.6);r.add(u);const c=new CP;let f=!1,d;const p=()=>{const{width:g,height:v}=i.getBoundingClientRect();a.setSize(g,v,!1),s.aspect=1,s.updateProjectionMatrix()};let _=[];const x=new vt;r.add(x),Promise.all(u3.map(g=>new Promise((v,S)=>{c.load(g,v,void 0,S)}))).then(g=>{f||(g.forEach(v=>{if(x.add(v.scene),["L","R"].indexOf(v.scene.children[0].name)>-1){_.push(v.scene);let S=t(v.scene);x.add(S),S.rotation.x=Math.PI/2,S.position.z+=.25,S.position.y+=.45,S.oz=S.position.z,S.tick=0,_.push(S),S=t(v.scene),x.add(S),S.rotation.z=Math.PI/2,S.rotation.x=Math.PI/2,S.position.x-=.25,S.position.y+=.45,S.ox=S.position.x,S.tick=0,_.push(S),v.scene.position.y+=.7,v.scene.oy=v.scene.position.y,v.scene.tick=0}}),console.log(_.length))}).catch(g=>{console.error("Failed to load hero GLB models:",g)});const m=new Lb,h=()=>{m.getElapsedTime();let g=.02;for(let v=0;v<_.length;v++){let S=_[v];S.ox&&(S.position.x=S.ox+Math.sin(S.tick)*g),S.oy&&(S.position.y=S.oy+Math.sin(S.tick)*g),S.oz&&(S.position.z=S.oz+Math.sin(S.tick)*g),S.tick+=.01}x.rotation.y=e/300,a.render(r,s),d=requestAnimationFrame(h)};return p(),h(),window.addEventListener("resize",p),()=>{f=!0,window.removeEventListener("resize",p),cancelAnimationFrame(d),r.traverse(g=>{g.geometry&&g.geometry.dispose(),g.material&&(Array.isArray(g.material)?g.material:[g.material]).forEach(S=>S.dispose())}),a.dispose(),a.domElement.remove()}},[]),j.useEffect(()=>{const i=()=>{e=window.scrollY};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),z.jsx("div",{ref:n,className:"h-full w-full","aria-hidden":"true"})}const f3=()=>z.jsxs(z.Fragment,{children:[z.jsx("section",{className:"h-screen overflow-hidden flex items-center justify-center text-black bg-[#f5f1ed]",children:z.jsxs("div",{className:"z-10 w-full max-w-6xl px-6 pt-24 relative",children:[z.jsxs("div",{className:"",children:[z.jsx("div",{className:"inline-flex items-center rounded-full border border-[#c8713b]/30 bg-white/60 px-4 py-2 text-sm font-medium text-[#7a3f20] shadow-sm backdrop-blur",children:"Open to work - Singapore"}),z.jsx(d1,{}),z.jsx("h1",{className:"mt-8 max-w-4xl text-[clamp(3rem,7vw,5rem)] font-black leading-[0.95] tracking-normal md:max-w-[58%]",children:"I build games, websites, and whatever's interesting."}),z.jsx("p",{className:"mt-6 max-w-2xl text-lg leading-8 text-zinc-700 md:max-w-[52%]",children:"TensaiStudio is the portfolio of a Singapore-based full stack developer making playful web experiences, polished interfaces, and small games with memorable interactions."}),z.jsx("div",{className:"mt-8 flex flex-wrap gap-3",children:z.jsxs("a",{href:"/projects",className:"inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:["View projects ",z.jsx(GT,{className:"h-4 w-4"})]})})]}),z.jsx("div",{className:"pointer-events-none absolute top-0 left-0 z-[-40] w-[100%] aspect-square",children:z.jsx(c3,{})})]})}),z.jsx("section",{className:"bg-[#c8713b] px-6 py-20 text-white",children:z.jsx("div",{className:"mx-auto grid max-w-6xl gap-6 md:grid-cols-3",children:[{icon:KT,title:"Web apps",copy:"Responsive React experiences with clean flows, fast feedback, and UI that feels good to use."},{icon:QT,title:"Game prototypes",copy:"Small playable ideas, systems experiments, and interactive builds shaped around feel first."},{icon:u1,title:"Creative tools",copy:"Odd little utilities, visual experiments, and digital toys for learning by making."}].map(({icon:n,title:e,copy:t})=>z.jsxs("article",{className:"rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur",children:[z.jsx(n,{className:"h-7 w-7"}),z.jsx("h2",{className:"mt-5 text-2xl font-bold",children:e}),z.jsx("p",{className:"mt-3 leading-7 text-white/85",children:t})]},e))})}),z.jsx("section",{className:"bg-[#f5f1ed] px-6 py-20 text-zinc-900",children:z.jsxs("div",{className:"mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]",children:"Current focus"}),z.jsx("h2",{className:"mt-3 text-4xl font-black",children:"Building sharper every release."})]}),z.jsx("p",{className:"text-lg leading-8 text-zinc-700",children:"I like projects where engineering and taste meet: a page that loads cleanly, an interaction with the right timing, a mechanic that clicks, or a tool that makes a messy task easier. The work here is growing in public, one shipped thing at a time."})]})})]}),d3=()=>z.jsx(z.Fragment,{children:z.jsx("section",{className:"min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900",children:z.jsxs("div",{className:"mx-auto max-w-6xl",children:[z.jsxs("div",{className:"max-w-3xl",children:[z.jsxs("p",{className:"inline-flex items-center gap-2 rounded-full bg-[#c8713b]/15 px-4 py-2 text-sm font-semibold text-[#8a471f]",children:[z.jsx(i1,{className:"h-4 w-4"}),"Singapore"]}),z.jsx("h1",{className:"mt-8 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none",children:"A developer with a builder's curiosity."}),z.jsx("p",{className:"mt-6 text-lg leading-8 text-zinc-700",children:"I make web apps, games, and experiments under TensaiStudio. My work sits somewhere between practical software and playful interaction: useful enough to ship, expressive enough to remember."})]}),z.jsx("div",{className:"mt-16 grid gap-6 md:grid-cols-3",children:[{icon:$T,title:"Full stack foundations",copy:"React, JavaScript, APIs, routing, state, data, and the practical pieces that turn an idea into a working product."},{icon:t1,title:"Interface craft",copy:"Layouts, motion, visual hierarchy, and small details that make a site feel intentional instead of assembled."},{icon:o1,title:"Game-minded thinking",copy:"Rapid prototyping, feedback loops, readable systems, and an instinct for making interactions feel responsive."}].map(({icon:n,title:e,copy:t})=>z.jsxs("article",{className:"rounded-lg bg-white p-6 shadow-sm",children:[z.jsx(n,{className:"h-7 w-7 text-[#c8713b]"}),z.jsx("h2",{className:"mt-5 text-xl font-bold",children:e}),z.jsx("p",{className:"mt-3 leading-7 text-zinc-600",children:t})]},e))}),z.jsxs("div",{className:"mt-16 grid gap-10 rounded-lg bg-zinc-950 p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-10",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#f4b860]",children:"How I work"}),z.jsx("h2",{className:"mt-3 text-3xl font-black",children:"Prototype, polish, ship, learn."})]}),z.jsxs("div",{className:"space-y-5 text-white/80",children:[z.jsx("p",{children:"I start by getting the core loop working: the main user flow, the most important interaction, or the mechanic that has to feel right."}),z.jsx("p",{children:"From there, I tighten the product with clearer structure, stronger visuals, better performance, and the kind of finishing touches that make people trust what they are using."})]})]})]})})});var Sy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q0=ns.createContext&&ns.createContext(Sy),h3=["attr","size","title"];function p3(n,e){if(n==null)return{};var t,i,r=m3(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)t=s[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function m3(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function Vu(){return Vu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Vu.apply(null,arguments)}function Z0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Hu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Z0(Object(t),!0).forEach(function(i){g3(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z0(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function g3(n,e,t){return(e=_3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function _3(n){var e=v3(n,"string");return typeof e=="symbol"?e:e+""}function v3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function My(n){return n&&n.map((e,t)=>ns.createElement(e.tag,Hu({key:t},e.attr),My(e.child)))}function Ey(n){return e=>ns.createElement(x3,Vu({attr:Hu({},n.attr)},e),My(n.child))}function x3(n){var e=t=>{var{attr:i,size:r,title:s}=n,a=p3(n,h3),o=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),ns.createElement("svg",Vu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,a,{className:l,style:Hu(Hu({color:n.color||t.color},t.style),n.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&ns.createElement("title",null,s),n.children)};return q0!==void 0?ns.createElement(q0.Consumer,null,t=>e(t)):e(Sy)}function y3(n){return Ey({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"},child:[]}]})(n)}function Ty(n){return Ey({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}const S3=[{id:1,type:"game",title:"Puzzle Lab",sub:"Phaser.js · Three.js · HTML5",desc:"This is a game created using Three.js and Javascript. The game is about exploring a museum-like space in first person, where every exhibit is a puzzle waiting to be solved. Featuring 22 handcrafted challenges, the collection spans a variety of classic and original designs. Wander the halls, interact with each installation, and uncover solutions at your own pace in a calm, gallery-inspired setting.",tags:["threejs","3d","puzzle","first-person","javascript"],complexity:"high",thumbnail:"/thumbnails/puzzle_lab.jpg",url:"https://tensaix2j.github.io/puzzle_lab"},{id:2,type:"game",title:"Crystal Maze",sub:"Phaser.js · Three.js · HTML5",desc:"This is another complex games created using Three.js and Javascript. It is a retro puzzle adventure based on an old Windows game, Chip Challenge. Players have to navigate vibrant grid mazes to collect crystals. Solve clever challenges with keys, switches, and strategy while avoiding traps and hazards. Perfect for fans of logic and nostalgic fun. There are 36 levels in total.",tags:["threejs","3d","puzzle","tiled","javascript"],complexity:"high",thumbnail:"/thumbnails/crystal_maze.jpg",url:"https://tensaix2j.github.io/crystal_maze"},{id:3,type:"game",title:"Doge Warrior",sub:"Phaser.js · Tiled · HTML5",desc:"This is a game created using Phaser.js. Doge Warrior is a platformer where you control a powerful doge exploring a trap-filled, mysterious labyrinth. It combines action and puzzles, letting you shoot Dogecoin to defeat enemies and solve challenges. As you progress, you unlock upgrades and face tougher obstacles that test your skill and strategy.",tags:["platformer","action","puzzle","javascript"],complexity:"high",thumbnail:"/thumbnails/doge_warrior.jpg",url:"https://tensaix2j.github.io/dogewarrior"},{id:4,type:"game",title:"Horseh Jump",sub:"Phaser.js · Three.js · HTML5",desc:"This is another mini game created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Hold to charge, release to leap. Guide the bespectacled horse scientist across precarious floating platforms over a breathtaking mountain chasm. Time your jumps perfectly to avoid the deadly drop, with endless thrills awaiting every run.",tags:["three.js","3d","javascript","phaser.js"],complexity:"low",thumbnail:"/thumbnails/horseh_jump.jpg",url:"https://tensaix2j.itch.io/horseh_jump"},{id:5,type:"game",title:"Horseh Run",sub:"Phaser.js · Three.js · HTML5",desc:"This is also another mini game created using Phaser and Three.js. Phaser for the UI, Three.js for the 3D. Race through a fast-paced obstacle course where your character runs nonstop and you must quickly jump or dodge incoming obstacles. As the speed increases over time, sharp reflexes and precise timing determine how long you can survive.",tags:["three.js","3d","javascript","phaser.js"],complexity:"low",thumbnail:"/thumbnails/horseh_run.jpg",url:"https://tensaix2j.itch.io/horseh_run"},{id:6,type:"game",title:"Roblox Crystal Maze",sub:"Roblox · Lua",desc:"This is my attempt to create Crystal Maze in Roblox Game Engine using the Lua scripting language.",tags:["roblox","lua"],complexity:"low",thumbnail:"/thumbnails/roblox_crystal_maze.jpg",url:"https://www.roblox.com/games/93128275517682/Crystal-Maze"},{id:7,type:"game",title:"Pico-8 Tiny Games",sub:"Pico-8",desc:"PICO-8 is a fantasy console that has only 16 colors and 128x128 pixels and runs the Lua scripting language. Here are some of the games I created on Pico-8, published on the Lexaloffle BBS.",tags:["pico-8","lua"],complexity:"low",thumbnail:"/thumbnails/pico_8_games.jpg",url:[["Lucky Stack","https://www.lexaloffle.com/bbs/?tid=156436"],["Lucky Jump","https://www.lexaloffle.com/bbs/?tid=156424"],["Trap The Cat","https://www.lexaloffle.com/bbs/?tid=156402"]]},{id:8,type:"web",title:"TensaiStudio Portfolio",sub:"React.js",desc:"This is a React.js website semi vibe-coded to showcase a portfolio of all games and websites created by me. The project was initially hand-coded for some basic ReactJS web structures before being fully vibe coded using Codex to fill up the flesh of the site.",tags:["typescript","react.js","tailwindcss"],complexity:"low",thumbnail:"/thumbnails/tensaistudio.jpg",url:"https://tensaix2j.github.io"},{id:9,type:"Game",title:"Telegram Minigames",sub:"Telegram",desc:"I made over 40 telegram minigames using Phaser.js on comissioned work for a company known as LuckyMiuuu games. ",tags:["javascript","phaser.js","three.js","telegram"],complexity:"low",thumbnail:"/thumbnails/luckymiuuu_games.jpg",url:[["Lucky Angler","https,//molecule-dev.muaverse.build/muaton/public/games/angler/output/"],["Lucky Blast","https,//molecule-dev.muaverse.build/muaton/public/games/blast/output/"],["Lucky Bomber","https,//molecule-dev.muaverse.build/muaton/public/games/bomber/output/"],["Lucky Pile","https,//molecule-dev.muaverse.build/muaton/public/games/boxstaking/output/"],["Lucky Bubble","https,//molecule-dev.muaverse.build/muaton/public/games/bubble/output/"],["Lucky Trump","https,//molecule-dev.muaverse.build/muaton/public/games/bulletdodger/output/"],["Lucky Catcher","https,//molecule-dev.muaverse.build/muaton/public/games/catcher/output/"],["Lucky Climber","https,//molecule-dev.muaverse.build/muaton/public/games/climber/output/"],["Lucky Coin","https,//molecule-dev.muaverse.build/muaton/public/games/coin/output/"],["Lucky Combine","https,//molecule-dev.muaverse.build/muaton/public/games/combine/output/"],["Lucky Crosser","https,//molecule-dev.muaverse.build/muaton/public/games/crossy/output/"],["Lucky Cutter","https,//molecule-dev.muaverse.build/muaton/public/games/cutter/output/"],["Lucky Drop","https,//molecule-dev.muaverse.build/muaton/public/games/drop/output/"],["Lucky Fighter","https,//molecule-dev.muaverse.build/muaton/public/games/fighter/output/"],["Lucky Fish","https,//molecule-dev.muaverse.build/muaton/public/games/fish/output/"],["Lucky Flap","https,//molecule-dev.muaverse.build/muaton/public/games/flappy/output/"],["Gaia Shooter","https,//molecule-dev.muaverse.build/muaton/public/games/gaia_shooter/output/"],["Lucky Jump","https,//molecule-dev.muaverse.build/muaton/public/games/just-jump/output/"],["Lucky Kisser","https,//molecule-dev.muaverse.build/muaton/public/games/kisser/output/"],["Lucky Lumberjack","https,//molecule-dev.muaverse.build/muaton/public/games/lumberjack/output/"],["Lucky Match","https,//molecule-dev.muaverse.build/muaton/public/games/match/output/"],["Lucky Pacman","https,//molecule-dev.muaverse.build/muaton/public/games/pacman/output/"],["Lucky Tap","https,//molecule-dev.muaverse.build/muaton/public/games/pianokey/output/"],["Lucky Pinball","https,//molecule-dev.muaverse.build/muaton/public/games/pinball/output/"],["Lucky Platformer","https,//molecule-dev.muaverse.build/muaton/public/games/platformer/output/"],["Lucky Plumber","https,//molecule-dev.muaverse.build/muaton/public/games/plumber/output/"],["Lucky Racer","https,//molecule-dev.muaverse.build/muaton/public/games/racer/output/"],["Lucky Runner","https,//molecule-dev.muaverse.build/muaton/public/games/runner/output/"],["Lucky Shooter","https,//molecule-dev.muaverse.build/muaton/public/games/shooter/output/"],["Lucky Sketch","https,//molecule-dev.muaverse.build/muaton/public/games/sketch/output/"],["Lucky Slicer","https,//molecule-dev.muaverse.build/muaton/public/games/slicer/output/"],["Lucky Slide","https,//molecule-dev.muaverse.build/muaton/public/games/slide/output/"],["Lucky Eater","https,//molecule-dev.muaverse.build/muaton/public/games/snake/output/"],["Lucky Split","https,//molecule-dev.muaverse.build/muaton/public/games/split/output/"],["Lucky Step","https,//molecule-dev.muaverse.build/muaton/public/games/step/output/"],["Lucky Tetris","https,//molecule-dev.muaverse.build/muaton/public/games/tetris/output/"],["Lucky Throw","https,//molecule-dev.muaverse.build/muaton/public/games/throw/output/"],["Lucky Towerstacker","https,//molecule-dev.muaverse.build/muaton/public/games/towerstacker/output/"],["Trap The Cat","https,//molecule-dev.muaverse.build/muaton/public/games/trapthecat/output/"],["Lucky Defense","https,//molecule-dev.muaverse.build/muaton/public/games/turretdefense/output/"],["Lucky Rise","https,//molecule-dev.muaverse.build/muaton/public/games/up/output/"],["Lucky Walk","https,//molecule-dev.muaverse.build/muaton/public/games/walk/output/"]]}],M3=n=>n==null?void 0:n.replace("https,//","https://"),If=n=>{var e;return Array.isArray(n.url)?n.url.map(([t,i])=>({label:t,url:M3(i)})):(e=n.url)!=null&&e.startsWith("http")?[{label:"Visit live site",url:n.url}]:[]},E3=()=>{const[n,e]=j.useState(null);return j.useEffect(()=>{if(!n)return;const t=i=>{i.key==="Escape"&&e(null)};return document.body.style.overflow="hidden",window.addEventListener("keydown",t),()=>{document.body.style.overflow="",window.removeEventListener("keydown",t)}},[n]),z.jsxs(z.Fragment,{children:[z.jsx("section",{id:"top",className:"min-h-screen bg-[#f5f1ed] px-6 pb-20 pt-32 text-zinc-900",children:z.jsxs("div",{className:"mx-auto max-w-6xl",children:[z.jsxs("div",{className:"flex flex-col gap-6 md:flex-row md:items-end md:justify-between",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-sm font-semibold uppercase tracking-[0.18em] text-[#c8713b]",children:"Selected work"}),z.jsx("h1",{className:"mt-3 text-[clamp(2.7rem,8vw,6rem)] font-black leading-none",children:"Games and web projects."}),z.jsx("p",{className:"mt-5 max-w-2xl text-lg leading-8 text-zinc-700",children:"A growing collection of playable experiments, puzzle games, platformers, Roblox builds, Telegram Minigames, Pico-8 releases, and the portfolio site that brings them together."})]}),z.jsxs("a",{href:"https://github.com/tensaix2j",className:"inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:[z.jsx(Ty,{className:"h-4 w-4"}),"GitHub"]})]}),z.jsx("div",{className:"mt-14 grid gap-6 lg:grid-cols-2",children:S3.map(t=>z.jsxs("button",{type:"button",onClick:()=>e(t),className:"group overflow-hidden rounded-lg bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#c8713b] focus:ring-offset-4 focus:ring-offset-[#f5f1ed]",children:[z.jsx("div",{className:"aspect-[16/9] overflow-hidden bg-zinc-200",children:z.jsx("img",{src:t.thumbnail,alt:`${t.title} thumbnail`,className:"h-full w-full object-cover transition duration-500 group-hover:scale-105",loading:"lazy"})}),z.jsxs("div",{className:"p-6",children:[z.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[z.jsx("div",{className:"flex flex-wrap gap-2",children:z.jsx("span",{className:"rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:t.type})}),z.jsx(jT,{className:"h-5 w-5 text-zinc-400 transition group-hover:text-[#c8713b]"})]}),z.jsx("h2",{className:"mt-5 text-2xl font-black",children:t.title}),z.jsx("p",{className:"mt-2 text-sm font-semibold text-[#8a471f]",children:t.sub}),z.jsx("p",{className:"mt-4 line-clamp-3 leading-7 text-zinc-600",children:t.desc}),z.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.tags.map(i=>z.jsx("span",{className:"rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600",children:i},i))})]})]},t.id))})]})}),n&&z.jsx("div",{className:"fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm",role:"dialog","aria-modal":"true","aria-labelledby":"project-modal-title",onClick:()=>e(null),children:z.jsxs("div",{className:"max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-[#f5f1ed] text-zinc-900 shadow-2xl",onClick:t=>t.stopPropagation(),children:[z.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-zinc-200",children:[z.jsx("img",{src:n.thumbnail,alt:`${n.title} thumbnail`,className:"h-full w-full object-cover"}),z.jsx("button",{type:"button",onClick:()=>e(null),className:"absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-[#c8713b] focus:outline-none focus:ring-2 focus:ring-white","aria-label":"Close project details",children:z.jsx(f1,{className:"h-5 w-5"})})]}),z.jsxs("div",{className:"p-6 md:p-8",children:[z.jsx("div",{className:"flex flex-wrap gap-2",children:z.jsx("span",{className:"rounded-full bg-[#c8713b]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:n.type})}),z.jsx("h2",{id:"project-modal-title",className:"mt-5 text-[clamp(2rem,6vw,4rem)] font-black leading-none",children:n.title}),z.jsx("p",{className:"mt-3 text-sm font-semibold text-[#8a471f]",children:n.sub}),z.jsx("p",{className:"mt-6 text-lg leading-8 text-zinc-700",children:n.desc}),z.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:n.tags.map(t=>z.jsx("span",{className:"rounded-full border border-zinc-300 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-700",children:t},t))}),z.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-3",children:[If(n).length>0?z.jsxs("div",{className:"w-full",children:[If(n).length>1&&z.jsx("h3",{className:"mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#8a471f]",children:"Playable links"}),z.jsx("div",{className:"grid max-h-64 gap-3 overflow-y-auto pr-1 sm:grid-cols-2",children:If(n).map(t=>z.jsxs("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"inline-flex items-center justify-between gap-3 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c8713b]",children:[z.jsx("span",{children:t.label}),z.jsx(ZT,{className:"h-4 w-4 shrink-0"})]},t.url))})]}):z.jsx("span",{className:"rounded-full border border-[#c8713b]/30 bg-[#fff8f1] px-5 py-3 text-sm font-semibold text-[#8a471f]",children:"Live site coming soon"}),z.jsx("button",{type:"button",onClick:()=>e(null),className:"rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-[#c8713b] hover:text-[#c8713b]",children:"Close"})]})]})]})})]})},T3=()=>z.jsx("div",{children:"NotFound"}),w3=()=>{const[n,e]=j.useState(!1),[t,i]=j.useState(!1),r=Ci(),s=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Projects",path:"/projects"}],a=j.useRef([]),[o,l]=j.useState({});return j.useEffect(()=>{const u=()=>{const c=window.scrollY,f=window.innerHeight*.2;i(c>f)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),j.useEffect(()=>{const u=s.findIndex(f=>f.path===r.pathname),c=a.current[u];c&&l({transform:`translateX(${c.offsetLeft}px)`,width:`${c.offsetWidth}px`})},[r.pathname]),z.jsxs("nav",{className:`fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[90%] max-w-2xl bg-[#f5f1ed]/10 backdrop-blur-md rounded-[2rem] px-4 py-2.5 text-black
      transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.2)]
      ${t?"-translate-y-24 opacity-0":"translate-y-0 opacity-100"}`,children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("img",{src:"/logo512.png",alt:"TensaiStudio logo",className:"h-8 w-8 object-contain translate-x-[4px] translate-y-[-2px]"}),z.jsx("span",{className:"text-[1.1rem] font-bold",children:"TensaiStudio"})]}),z.jsxs("div",{className:"relative hidden md:flex",children:[z.jsx("div",{className:"absolute top-0 bottom-0 bg-orange-400/20 rounded-full transition-all duration-300 ease-out",style:o}),s.map((u,c)=>z.jsx(Cd,{to:u.path,ref:f=>a.current[c]=f,className:({isActive:f})=>`relative z-10 px-4 py-2 rounded-full transition whitespace-nowrap ${f?"text-black":"text-[#c8713b] hover:text-black"}`,children:u.name},u.path))]}),z.jsx("button",{className:"md:hidden text-2xl",onClick:()=>e(!n),children:"☰"})]}),n&&z.jsx("div",{className:"md:hidden mt-4 flex flex-col gap-2",children:s.map(u=>z.jsx(Cd,{to:u.path,onClick:()=>e(!1),className:({isActive:c})=>`px-4 py-2 rounded-full transition ${c?"bg-orange-400/20 text-black":"text-[#c8713b] hover:text-black"}`,children:u.name},u.path))})]})};function b3(){return z.jsxs("footer",{className:"w-full border-t border-gray-200 bg-white text-gray-600",children:[z.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8",children:[z.jsxs("div",{children:[z.jsx("h2",{className:"text-lg font-semibold text-gray-900",children:"TensaiStudio"}),z.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Full stack web and game dev based in Singapore."})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Navigate"}),z.jsxs("ul",{className:"space-y-2 text-sm",children:[z.jsx("li",{children:z.jsx("a",{href:"/",className:"hover:text-gray-900 transition",children:"Home"})}),z.jsx("li",{children:z.jsx("a",{href:"/about",className:"hover:text-gray-900 transition",children:"About"})}),z.jsx("li",{children:z.jsx("a",{href:"/projects",className:"hover:text-gray-900 transition",children:"Projects"})})]})]}),z.jsxs("div",{children:[z.jsx("h3",{className:"text-sm font-semibold text-gray-900 mb-3",children:"Connect"}),z.jsxs("ul",{className:"space-y-2 text-sm",children:[z.jsx("li",{children:z.jsxs("a",{href:"https://github.com/tensaix2j",className:"hover:text-gray-900 transition",children:[z.jsx(Ty,{className:"w-4 h-4 inline translate-y-[-2px]"}),z.jsx("span",{className:"mx-2",children:"Github"})]})}),z.jsx("li",{className:"flex",children:z.jsxs("a",{href:"https://tensaix2j.itch.io",className:"hover:text-gray-900 transition",children:[z.jsx(y3,{className:"w-4 h-4  inline translate-y-[-2px] "}),z.jsx("span",{className:"mx-2",children:"ItchIo"})]})})]})]})]}),z.jsx("div",{className:"border-t border-gray-200",children:z.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-xs text-gray-500",children:[z.jsxs("p",{children:["© ",new Date().getFullYear()," TensaiStudio"]}),z.jsx("p",{className:"whitespace-nowrap",children:"Built with React"})]})})]})}function A3(){return z.jsxs(z.Fragment,{children:[z.jsx(w3,{}),z.jsxs(iT,{children:[z.jsx(Za,{path:"/",element:z.jsx(f3,{})}),z.jsx(Za,{path:"/about",element:z.jsx(d3,{})}),z.jsx(Za,{path:"/projects",element:z.jsx(E3,{})}),z.jsx(Za,{path:"*",element:z.jsx(T3,{})})]}),z.jsx(b3,{})]})}Df.createRoot(document.getElementById("root")).render(z.jsx(AT,{children:z.jsx(A3,{})}));
