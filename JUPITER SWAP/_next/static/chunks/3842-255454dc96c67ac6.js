"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3842,4566,2580],{54566:function(e,t,n){n.r(t);var r=n(93981),i=n(13838),a=n(65838),s=n(25546),l=n(29541);t.default=function(e){var t,n=e.tokenInfo,o=e.amount,c=e.maxDecimals,u=e.prefix,d=(0,a.y6)(),x=d.tokenPriceMap,h=d.getUSDValue,f=n.address;(0,r.useEffect)((function(){f&&h([f])}),[f,h]);var p=f&&(null===(t=x[f])||void 0===t?void 0:t.usd)||0,v=new i.Z(o||0).mul(p).toNumber();return!v||v<=0?(0,l.jsx)(l.Fragment,{children:""}):c&&new i.Z(v).lte(.1)?(0,l.jsxs)(l.Fragment,{children:[u,"$",parseFloat(s.uf.format(v,c))]}):(0,l.jsxs)(l.Fragment,{children:[u,"$",s.uf.format(v,2)]})}},71130:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(93981),i=n(50269),a=n(89388),s=n(29541),l=function(e){var t=e.children,n=e.className,i=void 0===n?"":n,l=e.height,o=e.maxHeight,c=e.expanded,u=(0,r.useState)(l),d=u[0],x=u[1];(0,r.useEffect)((function(){x(c?o:l)}),[l,o,c]);var h=c?"animate-fade-in":"animate-fade-out";return(0,s.jsx)("div",{className:(0,a.cn)("transition-all duration-200 overflow-hidden",h,i),style:{height:d,maxHeight:o},children:t})},o=function(e){var t=e.message,n=e.iconSize,r=void 0===n?20:n,o=e.className;return(0,s.jsx)(l,{height:0,maxHeight:"auto",expanded:Boolean(t),children:(0,s.jsxs)("div",{className:(0,a.cn)("md:px-6 mt-1 flex items-center text-xs fill-current text-black-50 dark:text-white font-semibold",o),children:[(0,s.jsx)(i.Z,{width:r,style:{minWidth:r},height:r}),(0,s.jsx)("span",{className:"ml-2",children:t})]})})}},17463:function(e,t,n){n.d(t,{x:function(){return j}});var r=n(97620),i=n(73360),a=n(7761),s=n(65838),l=n(93981),o=n(90342),c=n(97431),u=n(86150),d=n(57917),x=n(89388),h=n(25546),f=n(85394),p=n(22580),v=n(59394),m=n(54524),g=n(57731),w=n(88951),b=n(29541),j=function(e){var t=e.toastProps,n=t.closeToast,j=t.toastId,y=e.className,k=e.customTitle,C=(0,d.Sk)(j.toString()),S=C.tx,N=C.errorTitle,Z=C.description,_=C.shouldShowFeedbackLink,M=C.shouldShowUpdatePriorityFee,P=C.customTitle,T=C.shouldShowShareLink,F=(0,s.jB)().asLegacyTransaction,O=(0,o.gs)().toggle,L=l.useState(!1),R=(0,r.Z)(L,2),E=R[0],I=R[1],H=(0,l.useMemo)((function(){return{waitingWalletToSign:!S&&!N,hasPendingTxs:"loading"===(null===S||void 0===S?void 0:S.status)||(null===S||void 0===S?void 0:S.hasAdditionalPendingSteps),isSwapSuccess:"success"===(null===S||void 0===S?void 0:S.status)}}),[S,N]),V=H.waitingWalletToSign,A=H.hasPendingTxs,B=H.isSwapSuccess,D=(0,l.useRef)(null);if((0,l.useEffect)((function(){var e,t;(V||!S||A||D.current||(D.current=new h.o6(n,5e3)),E)?null===(e=D.current)||void 0===e||e.pause():null===(t=D.current)||void 0===t||t.resume()}),[A,V,n,S,E]),!S&&!N)return null;var U=P||k||(V?a.ag._("Waiting for wallet to sign transaction"):A?a.ag._("Confirming transaction"):B?a.ag._("Swap Success"):a.ag._("Swap Failed{0}",{0:N&&" (".concat(N,")")}));return(0,b.jsxs)("div",{className:(0,x.cn)("bg-white dark:bg-black dark:text-white px-6 py-5 shadow-lg rounded-lg max-w-[420px]",y),children:[(0,b.jsx)("div",{className:"flex justify-between items-center mb-1",children:(0,b.jsx)("div",{className:"text-lg font-semibold",children:U})}),(0,b.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,b.jsxs)("div",{className:"text-[13px] leading-4 text-black-50 dark:text-white-50",children:[Z,!F&&N&&!S&&(0,b.jsx)("div",{children:(0,b.jsx)(i.cC,{id:"This wallet might not support Versioned Transaction, turn it off and try again."})}),(0,b.jsx)("div",{className:"text-xs flex flex-col text-black-75 dark:text-white-75",children:function(){if(!S)return null;var e=S.status,t=S.txid,n=S.additionalSteps;return"fail-no-txid"===e?(0,b.jsx)("span",{children:S.stepText}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"flex space-x-2.5 mt-2",children:[("loading"===e||V)&&(0,b.jsx)(f.Z,{width:20,height:20}),"unknown"===e&&(0,b.jsx)(g.Z,{width:20,height:20}),"fail"===e&&(0,b.jsx)(m.Z,{width:20,height:20}),"success"===e&&(0,b.jsx)(w.Z,{width:20,height:20}),(0,b.jsxs)("span",{className:"my-auto flex whitespace-nowrap space-x-0.5",children:[t?(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(v.Z,{txid:t})}):null,S.stepText&&(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)("span",{children:":"}),(0,b.jsx)("span",{className:(0,x.cn)(t&&"pl-0.5"),children:S.stepText})]})]})]}),null===n||void 0===n?void 0:n.map((function(e,t){return(0,b.jsx)("div",{children:e},t)}))]})}()})]}),T&&null!==S&&void 0!==S&&S.txid?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("button",{type:"button",onClick:function(){return I(!0)},className:(0,x.cn)("rounded-lg flex px-3 py-2  fill-current space-x-2 text-xs font-semibold items-center w-auto self-start border border-white/10","hover:bg-v2-primary/5 hover:border-v2-primary/10 hover:text-v2-primary"),children:[(0,b.jsx)("span",{children:a.ag._("Share")}),(0,b.jsx)(u.Z,{})]}),(0,b.jsx)(p.default,{txid:S.txid,open:E,onClose:function(){return I(!1)}})]}):null,M&&(0,b.jsx)("div",{className:"flex items-center space-x-2",children:(0,b.jsx)("button",{className:"bg-v2-background border hover:dark:border-v2-primary/50 hover:text-v2-primary dark:border-white/[.35] py-1 px-3 rounded flex items-center text-xs dark:text-white/35 w-fit",onClick:function(){n(),O()},children:(0,b.jsx)(i.cC,{id:"Update Priority Fee"})})}),_?(0,b.jsx)("div",{className:"flex items-center space-x-2",children:(0,b.jsxs)("a",{className:"bg-transparent border border-black/[.35] dark:border-white/[.35] py-1 px-2 rounded flex items-center text-xs dark:text-white/50 text-black/50 w-fit",href:"https://discord.gg/jup",target:"_blank",rel:"noreferrer",children:[(0,b.jsx)("div",{className:"mr-1 w-4 h-4 text-black/50 dark:text-white/50",children:(0,b.jsx)(c.Z,{width:16,height:16})}),(0,b.jsx)(i.cC,{id:"Discord"})]})}):null]})]})}},16330:function(e,t,n){var r=n(93981),i=n(87821),a=n(65838),s=n(25546),l=n(89388),o=n(29541),c=r.forwardRef((function(e,t){e.testId;var n=e.name,c=e.onChange,u=e.onChangeWithoutEffect,d=e.value,x=e.disabled,h=void 0!==x&&x,f=e.decimals,p=void 0===f?6:f,v=e.onMouseOver,m=e.onFocus,g=e.className,w=e.placeholder,b=e.customWithValueLimit,j=e.suffix,y=(0,a.MG)().constants.MAX_INPUT_LIMIT,k=r.useMemo((function(){return function(e){var t=e.floatValue;return b?!t||b(t):!t||t<=y}}),[y,b]),C=String(d).length>=9?"text-sm sm:text-base lg:text-lg":"text-lg",S=","===s.A5?".":",",N=","===s.A5?",":".";return(0,o.jsx)(i.Z,{name:n,inputMode:"decimal","data-lpignore":"true",decimalSeparator:N,allowedDecimalSeparators:[".",","],value:null!==d&&void 0!==d?d:"",thousandSeparator:S,decimalScale:p,allowNegative:!1,allowLeadingZeros:!1,disabled:h,isAllowed:k,suffix:j,onChange:function(e){var t=e.target.value,n=(0,s.jj)(t).replaceAll(",","");u&&u(n)},onValueChange:function(e){e.value!==(null===d||void 0===d?void 0:d.toString())&&c&&c(e.value)},isNumericString:!0,placeholder:null!==w&&void 0!==w?w:"0.00",className:(0,l.cn)("h-full w-full bg-transparent disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 outline-none",C,g),onMouseOver:v||void 0,onFocus:m||void 0,getInputRef:t})}));t.Z=c},22580:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(27195),i=n(8857),a=n.n(i),s=n(7761),l=n(12197),o=n(93981),c=n(12866),u=n(85216),d=n(16178),x=n(85394),h=n(89388),f=n(47222),p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},v=n(24628),m=n(29541),g=1e3,w=function(e){var t=e.txid,n=e.open,i=e.onClose,w=(0,o.useRef)(null),b=(0,o.useRef)(null);(0,l.O3)(b,(function(){var e;return null===(e=w.current)||void 0===e?void 0:e.close()}));var j=(0,o.useMemo)((function(){return(0,f.cK)(t)}),[t]),y=function(e,t){var n=(0,o.useRef)(0),i=(0,o.useState)(null),s=i[0],l=i[1];return(0,o.useEffect)((function(){l(null)}),[t]),(0,o.useEffect)((function(){function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://stats.jup.ag/transactions/".concat(t));case 3:if(200===(r=e.sent).status){e.next=6;break}throw"Failed to fetch metadata";case 6:return e.next=8,r.json();case 8:s=e.sent,l(s),e.next=20;break;case 12:if(e.prev=12,e.t0=e.catch(0),!(n.current<30)){e.next=20;break}return n.current+=1,e.next=18,p(g);case 18:return e.next=20,i();case 20:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}e&&!s&&i()}),[t,s,e]),s}(n,t),k=(0,o.useMemo)((function(){return t?(0,f.W3)(t):""}),[t]),C=(0,o.useState)(!1),S=C[0],N=C[1],Z=(0,o.useState)(""),_=Z[0],M=Z[1],P=(0,o.useCallback)((function(){k&&(navigator.clipboard.writeText(k),N(!0),setTimeout((function(){N(!1)}),1500))}),[k]),T=function(e,t){var n=(0,o.useRef)(0),i=(0,o.useState)(null),l=i[0],c=i[1],u=(0,o.useState)(null),d=u[0],h=u[1],f=(0,o.useState)(null),v=f[0],w=f[1],b=(0,o.useCallback)((function(){w((0,m.jsxs)("div",{className:"h-full w-full flex flex-col space-y-4 items-center justify-center text-xs flex-wrap",children:[(0,m.jsx)("span",{className:"p-6 text-center",children:s.ag._("Generating Image...")}),(0,m.jsx)(x.Z,{})]}))}),[]),j=(0,o.useCallback)((0,r.Z)(a().mark((function e(){var r,i,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.blob();case 6:return i=e.sent,s=URL.createObjectURL(i),l=new Promise((function(e,t){var n=new Image;n.src=s,n.onload=function(){c(s),h(i),w(null),e()},n.onerror=t})),e.next=11,l;case 11:e.next=22;break;case 13:if(e.prev=13,e.t0=e.catch(0),b(),!(n.current<30)){e.next=22;break}return n.current+=1,e.next=20,p(g);case 20:console.log("retrying...",n.current),j();case 22:case"end":return e.stop()}}),e,null,[[0,13]])}))),[t,b]);return(0,o.useEffect)((function(){t&&e&&j()}),[t,j,e]),(0,o.useEffect)((function(){n.current>30&&w((0,m.jsxs)("div",{className:"h-full w-full flex flex-col items-center justify-center text-xs flex-wrap p-6",children:[(0,m.jsx)("span",{className:"text-center",children:s.ag._("Failed to generate swap image.")}),(0,m.jsx)("span",{className:"mt-2 text-center",children:s.ag._("Please try again later.")})]}))}),[]),{imageSrc:l,imageBlob:d,errorMessage:v}}(n,j),F=T.imageSrc,O=T.imageBlob,L=T.errorMessage,R=(0,o.useMemo)((function(){return"undefined"!==typeof window.navigator.share}),[]),E=(0,o.useMemo)((function(){if(!y)return"";var e=new URLSearchParams({text:"I just swapped ".concat(y.inSymbol," for ").concat(y.outSymbol," on Jupiter!"),url:k,via:"JupiterExchange"});return"http://twitter.com/share?".concat(e.toString())}),[k,y]),I=(0,o.useCallback)((function(){if(!y)return"";if(R){var e=["I just swapped ".concat(y.inSymbol," for ").concat(y.outSymbol," on Jupiter!"),k].join("\n");navigator.share({title:"Jupiter",text:e,files:O?[new File([O],"".concat(y.inSymbol," ").concat(y.outSymbol," Swap.png"),{type:"image/png"})]:void 0}).then((function(){})).catch((function(){}))}}),[y,R,k,O]),H=(0,o.useCallback)((function(){var e;null===(e=w.current)||void 0===e||e.close(),i()}),[i,w]);(0,o.useEffect)((function(){if(w.current&&(n?w.current.open||w.current.showModal():w.current.close()),n){var e=w.current;return null===e||void 0===e||e.addEventListener("close",H),function(){null===e||void 0===e||e.removeEventListener("close",H)}}}),[H,n]);var V=(0,o.useCallback)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,navigator.clipboard.write([new ClipboardItem({"image/png":O})]);case 5:M(s.ag._("Copied to clipboard!")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),M(s.ag._("Failed to copy"));case 12:return e.prev=12,setTimeout((function(){M("")}),1500),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,8,12,15]])}))),[O]);return n?(0,m.jsx)("dialog",{role:"dialog","aria-modal":"true",className:"top-0 left-0 h-full w-full flex items-center justify-center bg-black/25 backdrop-blur-md animate-fade-in cursor-auto",ref:w,children:(0,m.jsxs)("div",{ref:b,className:"max-w-[90wv] max-h-[90vh] w-[326px] rounded-xl overflow-hidden relative",children:[(0,m.jsx)("div",{className:"absolute right-3 top-3 cursor-pointer",onClick:H,children:(0,m.jsx)(c.Z,{width:12,height:12})}),(0,m.jsxs)("div",{className:"bg-tuna rounded-lg shadow-lg",children:[(0,m.jsxs)("div",{className:"h-[184px] w-[326px]",children:[L||null,!L&&F?(0,m.jsx)("img",{src:F,alt:"Share tx ".concat(t),className:"w-full h-full"}):null]}),(0,m.jsxs)("div",{className:"max-h-[50vh] overflow-y-scroll hideScrollbar px-4 py-5 bg-[#1B2229]",children:[R?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"text-xs text-white/75",children:s.ag._("Share to")}),(0,m.jsx)("div",{className:"mt-2 space-y-2",children:(0,m.jsxs)("button",{onClick:I,className:(0,h.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",L?"!cursor-not-allowed pointer-events-none opacity-50":""),children:[(0,m.jsx)(v.Z,{width:16,height:16}),(0,m.jsx)("div",{className:"font-semibold",children:s.ag._("Share")})]})})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"text-xs text-white/75",children:s.ag._("Copy Image")}),(0,m.jsx)("div",{className:"mt-2 space-y-2",children:(0,m.jsx)("button",{type:"button",disabled:Boolean(L||_),className:(0,h.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",L?"!cursor-not-allowed pointer-events-none opacity-50":""),onClick:V,children:(0,m.jsx)("div",{className:"font-semibold",children:_||s.ag._("Copy Image")})})}),(0,m.jsx)("div",{className:"mt-4 text-xs text-white/75",children:s.ag._("Share to")}),(0,m.jsx)("div",{className:"mt-2 space-y-2",children:(0,m.jsxs)("a",{target:"_blank",href:E,rel:"noopener noreferrer",className:(0,h.cn)("flex space-x-2 text-xs items-center rounded-lg bg-v2-lily/5 border border-v2-lily/[.15] px-4 py-3 w-full hover:bg-v2-lily/10",L?"!cursor-not-allowed pointer-events-none opacity-50":""),children:[(0,m.jsx)(d.Z,{width:16,height:16}),(0,m.jsx)("div",{className:"font-semibold",children:s.ag._("X / Twitter")})]})})]}),(0,m.jsxs)("div",{className:"mt-5 flex items-center justify-between text-xs",children:[(0,m.jsx)("div",{children:s.ag._("or copy swap link")}),(0,m.jsxs)("div",{onClick:P,className:(0,h.cn)("cursor-pointer bg-black/[.35] rounded-lg px-3 py-2  w-[184px]  space-x-2 flex items-center justify-between",L?"!cursor-not-allowed opacity-50":""),children:[(0,m.jsx)("span",{className:"whitespace-nowrap truncate w-[82%] overflow-hidden",children:S?s.ag._("Copied!"):k}),(0,m.jsx)(u.Z,{width:20,height:20})]})]})]})]})]})}):null}},3561:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.fill,n=void 0===t?"white":t,i=e.width,a=void 0===i?12:i,s=e.height,l=void 0===s?12:s;return(0,r.jsxs)("svg",{width:a,height:l,viewBox:"0 0 12 12",fill:n,xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{clipPath:"url(#clip0_9115_125056)",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.95362 7.63052C5.60347 7.63083 5.31644 7.35363 5.30407 7.0038L5.15183 2.7132C5.14549 2.53686 5.21146 2.36591 5.33389 2.23905C5.45631 2.11218 5.62504 2.04082 5.80138 2.04082H6.10586C6.2822 2.04082 6.45093 2.11218 6.57336 2.23905C6.69578 2.36591 6.76175 2.53686 6.75541 2.7132L6.60317 7.0038C6.5908 7.35363 6.30377 7.63083 5.95362 7.63052ZM5.95352 10.0669C6.45812 10.0669 6.86694 9.65807 6.86694 9.15347C6.86694 8.64887 6.45812 8.24004 5.95352 8.24004C5.44891 8.24004 5.04009 8.64887 5.04009 9.15347C5.04009 9.65807 5.44891 10.0669 5.95352 10.0669Z",fill:n})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_9115_125056",children:(0,r.jsx)("rect",{width:"12",height:"12",fill:n})})})]})}},11017:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.className,n=void 0===t?"":t,i=e.width,a=void 0===i?8:i,s=e.height,l=void 0===s?7:s;return(0,r.jsx)("svg",{className:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:l,fill:"none",viewBox:"0 0 8 7",children:(0,r.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.647 3.674H.69c-.91 0-.91-1.38 0-1.38h4.957L3.89.537c-.659-.659.314-1.631.973-.972l2.949 2.949c.25.25.25.69 0 .972l-2.95 2.95c-.658.627-1.63-.346-.972-.973l1.757-1.788z",clipRule:"evenodd"})})}},94223:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.width,n=void 0===t?32:t,i=e.height,a=void 0===i?32:i;return(0,r.jsx)("svg",{width:n,height:a,viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.1425 8.45597H5.22047L5.22025 8.45592C4.66944 8.40838 4.15821 8.1496 3.79392 7.73368C3.52351 7.52371 3.34106 7.22064 3.28188 6.88329C3.24718 5.65089 4.6625 4.79883 5.9425 4.79883H22.3996C23.1264 4.80107 23.8229 5.09067 24.3368 5.60455C24.8507 6.11843 25.1403 6.81496 25.1425 7.54168V8.45597ZM26.0564 10.2846H5.02779C4.54289 10.2846 4.07777 10.092 3.73473 9.74912C3.39187 9.40605 3.19922 8.94094 3.19922 8.45605V25.8275C3.19922 26.555 3.4882 27.2526 4.00248 27.7671C4.51698 28.2814 5.21451 28.5703 5.94208 28.5703H26.0564C26.7839 28.5703 27.4814 28.2814 27.996 27.7671C28.5102 27.2526 28.7992 26.555 28.7992 25.8275V23.0846H24.2278C22.9213 23.0846 21.7139 22.3875 21.0607 21.2561C20.4074 20.1246 20.4074 18.7303 21.0607 17.5989C21.7139 16.4675 22.9213 15.7703 24.2278 15.7703H28.7992V13.0275C28.7992 12.2999 28.5102 11.6024 27.996 11.0879C27.4815 10.5736 26.7839 10.2846 26.0564 10.2846ZM22.4014 19.4277C22.4014 19.9126 22.594 20.3777 22.9369 20.7208C23.2799 21.0636 23.7451 21.2563 24.2299 21.2563H28.8014V17.5991H24.2299C23.745 17.5991 23.2799 17.7918 22.9369 18.1346C22.594 18.4777 22.4014 18.9428 22.4014 19.4277Z",fill:"currentColor"})})}},57917:function(e,t,n){n.d(t,{SR:function(){return h},Sk:function(){return x}});var r=n(63956),i=n(9364),a=n(3011),s=n(93981),l=n(49803);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={tx:void 0,errorTitle:"",shouldShowFeedbackLink:!1,shouldShowUpdatePriorityFee:!1,shouldShowShareLink:!1},d=(0,i.cn)({}),x=function(e){return(0,a.Dv)(d,{store:l.e})[e]||u},h=function(){var e=(0,a.b9)(d,{store:l.e}),t=(0,s.useCallback)((function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e((function(e){return c(c({},e),{},(0,r.Z)({},t,c(c(c(c({},u),e[t]),i),{},{tx:n})))}))}),[e]),n=(0,s.useCallback)((function(t){e((function(e){return e[t]=c({},u),e}))}),[e]);return{addNotificationTx:t,updateNotificationTxStatus:(0,s.useCallback)((function(t,n,r){e((function(e){var i,a=null===e||void 0===e||null===(i=e[t])||void 0===i?void 0:i.tx;return a&&(a=c(c(c({},a),n),{},{hasAdditionalPendingSteps:null===r||void 0===r?void 0:r.hasAdditionalPendingSteps,additionalSteps:null===r||void 0===r?void 0:r.additionalSteps}),e[t].tx=a,"fail"!==n.status&&"fail-no-txid"!==n.status||(e[t].shouldShowFeedbackLink=!0)),c({},e)}))}),[e]),resetNotificationMultipleTxs:n,updateNotificationMetadata:(0,s.useCallback)((function(t,n){e((function(e){return c(c({},e),{},(0,r.Z)({},t,c(c({},e[t]),n)))}))}),[e])}}},47222:function(e,t,n){n.d(t,{L5:function(){return a},SV:function(){return s},W3:function(){return i},cK:function(){return r}});var r=function(e){var t="api/swap/".concat(e),n=s();if(n.includes("vercel.app")){var r=n.replace("jupiter","dynamic-og");return"".concat(r,"/").concat(t)}return"https://og.jup.ag/".concat(t)},i=function(e){return"".concat(s(),"/share/").concat(e)},a=function(e){var t=e.inSymbol,n=e.outSymbol,r=e.amount,i=e.baseUrl;return"".concat(i,"/swap/").concat(t,"-").concat(n,"?inAmount=").concat(r)},s=function(){var e,t="jupiter-git-mainnet-wowcats.vercel.app";return t=null!==(e=t)&&void 0!==e&&e.includes("vercel.app")?"https://".concat("jupiter-git-mainnet-wowcats.vercel.app"):"https://jup.ag",window.location.origin}}}]);
//# sourceMappingURL=3842-255454dc96c67ac6.js.map