import{t as pu,b as Z,d as tu}from"../chunks/Bks5XCQV.js";import{ac as Q,B as O,C as K,D as mu,h as T,Q as Iu,m as Cu,t as H,n as x,G as Du,p as Ru,g as j,af as Su,q as Tu,r as ru,v as G,z as D,K as Zu,w as gu,x as yu,y as Bu,ar as P,O as wu,as as Vu,ai as Lu,s as cu,at as Ou,au as Ku,N as Mu,av as qu,W as Hu,aw as Gu,ax as Pu,I as Uu,k as Wu,ay as Yu,az as ju,aA as Ju,E as Qu,aB as Xu,aC as u0,aa as a0,a as Fu,aD as e0,aE as f0,aF as t0,V as R,aG as r0,aH as c0,ab as n0,R as i0,ap as nu,a9 as B,a6 as iu,aI as N,T as s0,e as xu,a7 as S,a8 as I}from"../chunks/DxQjJD43.js";import{a as d0,d as o0,s as b0}from"../chunks/A20zZSwX.js";import{p as Au,i as su}from"../chunks/Bmrb9RaO.js";function l0(u,a){{const e=document.body;u.autofocus=!0,Q(()=>{document.activeElement===e&&u.focus()})}}let du=!1;function Nu(){du||(du=!0,document.addEventListener("reset",u=>{Promise.resolve().then(()=>{var a;if(!u.defaultPrevented)for(const e of u.target.elements)(a=e.__on_r)==null||a.call(e)})},{capture:!0}))}function Eu(u){var a=mu,e=T;O(null),K(null);try{return u()}finally{O(a),K(e)}}function v0(u,a,e,f=e){u.addEventListener(a,()=>Eu(e));const t=u.__on_r;t?u.__on_r=()=>{t(),f(!0)}:u.__on_r=()=>f(!0),Nu()}let L=null;function h0(u,a,e,f){for(var t=[],c=a.length,r=0;r<c;r++)Ku(a[r].e,t,!0);var o=c>0&&t.length===0&&e!==null;if(o){var l=e.parentNode;Mu(l),l.append(e),f.clear(),z(u,a[0].prev,a[c-1].next)}qu(t,()=>{for(var v=0;v<c;v++){var i=a[v];o||(f.delete(i.k),z(u,i.prev,i.next)),Hu(i.e,!o)}})}function _0(u,a,e,f,t,c=null){var r=u,o={flags:a,items:new Map,first:null};{var l=u;r=x?H(Du(l)):l.appendChild(Iu())}x&&Ru();var v=null,i=!1,_=Su(()=>{var s=e();return Wu(s)?s:s==null?[]:wu(s)});Cu(()=>{var s=j(_),h=s.length;if(i&&h===0)return;i=h===0;let m=!1;if(x){var d=r.data===Tu;d!==(h===0)&&(r=ru(),H(r),G(!1),m=!0)}if(x){for(var p=null,g,n=0;n<h;n++){if(D.nodeType===8&&D.data===Zu){r=D,m=!0,G(!1);break}var b=s[n],w=f(b,n);g=ku(D,o,p,null,b,w,n,t,a,e),o.items.set(w,g),p=g}h>0&&H(ru())}x||p0(s,o,r,t,a,f,e),c!==null&&(h===0?v?gu(v):v=yu(()=>c(r)):v!==null&&Bu(v,()=>{v=null})),m&&G(!0),j(_)}),x&&(r=D)}function p0(u,a,e,f,t,c,r){var X,uu,au,eu;var o=u.length,l=a.items,v=a.first,i=v,_,s=null,h,m=[],d=[],p,g,n,b;for(b=0;b<o;b+=1)p=u[b],g=c(p,b),n=l.get(g),n!==void 0&&((X=n.a)==null||X.measure(),(h??(h=new Set)).add(n));for(b=0;b<o;b+=1){if(p=u[b],g=c(p,b),n=l.get(g),n===void 0){var w=i?i.e.nodes_start:e;s=ku(w,a,s,s===null?a.first:s.next,p,g,b,f,t,r),l.set(g,s),m=[],d=[],i=s.next;continue}if(m0(n,p,b),(n.e.f&P)!==0&&(gu(n.e),(uu=n.a)==null||uu.unfix(),(h??(h=new Set)).delete(n)),n!==i){if(_!==void 0&&_.has(n)){if(m.length<d.length){var A=d[0],y;s=A.prev;var E=m[0],$=m[m.length-1];for(y=0;y<m.length;y+=1)ou(m[y],A,e);for(y=0;y<d.length;y+=1)_.delete(d[y]);z(a,E.prev,$.next),z(a,s,E),z(a,$,A),i=A,s=$,b-=1,m=[],d=[]}else _.delete(n),ou(n,i,e),z(a,n.prev,n.next),z(a,n,s===null?a.first:s.next),z(a,s,n),s=n;continue}for(m=[],d=[];i!==null&&i.k!==g;)(i.e.f&P)===0&&(_??(_=new Set)).add(i),d.push(i),i=i.next;if(i===null)continue;n=i}m.push(n),s=n,i=n.next}if(i!==null||_!==void 0){for(var F=_===void 0?[]:wu(_);i!==null;)(i.e.f&P)===0&&F.push(i),i=i.next;var C=F.length;if(C>0){var q=o===0?e:null;{for(b=0;b<C;b+=1)(au=F[b].a)==null||au.measure();for(b=0;b<C;b+=1)(eu=F[b].a)==null||eu.fix()}h0(a,F,q,l)}}Q(()=>{var fu;if(h!==void 0)for(n of h)(fu=n.a)==null||fu.apply()}),T.first=a.first&&a.first.e,T.last=s&&s.e}function m0(u,a,e,f){Vu(u.i,e)}function ku(u,a,e,f,t,c,r,o,l,v){var i=L,_=(l&Gu)!==0,s=(l&Pu)===0,h=_?s?Lu(t):cu(t):t,m=(l&Ou)===0?r:cu(r),d={i:m,v:h,k:c,a:null,e:null,prev:e,next:f};L=d;try{return d.e=yu(()=>o(u,h,m,v),x),d.e.prev=e&&e.e,d.e.next=f&&f.e,e===null?a.first=d:(e.next=d,e.e.next=d.e),f!==null&&(f.prev=d,f.e.prev=d.e),d}finally{L=i}}function ou(u,a,e){for(var f=u.next?u.next.e.nodes_start:e,t=a?a.e.nodes_start:e,c=u.e.nodes_start;c!==f;){var r=Uu(c);t.before(c),c=r}}function z(u,a,e){a===null?u.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}const bu=[...` 	
\r\f \v\uFEFF`];function g0(u,a,e){var f=u==null?"":""+u;if(a&&(f=f?f+" "+a:a),e){for(var t in e)if(e[t])f=f?f+" "+t:t;else if(f.length)for(var c=t.length,r=0;(r=f.indexOf(t,r))>=0;){var o=r+c;(r===0||bu.includes(f[r-1]))&&(o===f.length||bu.includes(f[o]))?f=(r===0?"":f.substring(0,r))+f.substring(o+1):r=o}}return f===""?null:f}function U(u,a,e,f,t,c){var r=u.__className;if(x||r!==e){var o=g0(e,f,c);(!x||o!==u.getAttribute("class"))&&(o==null?u.removeAttribute("class"):u.className=o),u.__className=e}else if(c&&t!==c)for(var l in c){var v=!!c[l];(t==null||v!==!!t[l])&&u.classList.toggle(l,v)}return c}const y0=Symbol("is custom element"),w0=Symbol("is html");function F0(u){if(x){var a=!1,e=()=>{if(!a){if(a=!0,u.hasAttribute("value")){var f=u.value;lu(u,"value",null),u.value=f}if(u.hasAttribute("checked")){var t=u.checked;lu(u,"checked",null),u.checked=t}}};u.__on_r=e,Yu(e),Nu()}}function lu(u,a,e,f){var t=x0(u);x&&(t[a]=u.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&u.nodeName==="LINK")||t[a]!==(t[a]=e)&&(a==="loading"&&(u[ju]=e),u.removeAttribute(a))}function x0(u){return u.__attributes??(u.__attributes={[y0]:u.nodeName.includes("-"),[w0]:u.namespaceURI===Ju})}const A0=()=>performance.now(),k={tick:u=>requestAnimationFrame(u),now:()=>A0(),tasks:new Set};function $u(){const u=k.now();k.tasks.forEach(a=>{a.c(u)||(k.tasks.delete(a),a.f())}),k.tasks.size!==0&&k.tick($u)}function N0(u){let a;return k.tasks.size===0&&k.tick($u),{promise:new Promise(e=>{k.tasks.add(a={c:u,f:e})}),abort(){k.tasks.delete(a)}}}function V(u,a){Eu(()=>{u.dispatchEvent(new CustomEvent(a))})}function E0(u){if(u==="float")return"cssFloat";if(u==="offset")return"cssOffset";if(u.startsWith("--"))return u;const a=u.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function vu(u){const a={},e=u.split(";");for(const f of e){const[t,c]=f.split(":");if(!t||c===void 0)break;const r=E0(t.trim());a[r]=c.trim()}return a}const k0=u=>u;function $0(u,a,e){var f=L,t,c,r,o=null;f.a??(f.a={element:u,measure(){t=this.element.getBoundingClientRect()},apply(){if(r==null||r.abort(),c=this.element.getBoundingClientRect(),t.left!==c.left||t.right!==c.right||t.top!==c.top||t.bottom!==c.bottom){const l=a()(this.element,{from:t,to:c},e==null?void 0:e());r=M(this.element,l,void 0,1,()=>{r==null||r.abort(),r=void 0})}},fix(){if(!u.getAnimations().length){var{position:l,width:v,height:i}=getComputedStyle(u);if(l!=="absolute"&&l!=="fixed"){var _=u.style;o={position:_.position,width:_.width,height:_.height,transform:_.transform},_.position="absolute",_.width=v,_.height=i;var s=u.getBoundingClientRect();if(t.left!==s.left||t.top!==s.top){var h=`translate(${t.left-s.left}px, ${t.top-s.top}px)`;_.transform=_.transform?`${_.transform} ${h}`:h}}}},unfix(){if(o){var l=u.style;l.position=o.position,l.width=o.width,l.height=o.height,l.transform=o.transform}}}),f.a.element=u}function hu(u,a,e,f){var t=(u&f0)!==0,c=(u&r0)!==0,r=t&&c,o=(u&e0)!==0,l=r?"both":t?"in":"out",v,i=a.inert,_=a.style.overflow,s,h;function m(){var b=mu,w=T;O(null),K(null);try{return v??(v=e()(a,(f==null?void 0:f())??{},{direction:l}))}finally{O(b),K(w)}}var d={is_global:o,in(){var b;if(a.inert=i,!t){h==null||h.abort(),(b=h==null?void 0:h.reset)==null||b.call(h);return}c||s==null||s.abort(),V(a,"introstart"),s=M(a,m(),h,1,()=>{V(a,"introend"),s==null||s.abort(),s=v=void 0,a.style.overflow=_})},out(b){if(!c){b==null||b(),v=void 0;return}a.inert=!0,V(a,"outrostart"),h=M(a,m(),s,0,()=>{V(a,"outroend"),b==null||b()})},stop:()=>{s==null||s.abort(),h==null||h.abort()}},p=T;if((p.transitions??(p.transitions=[])).push(d),t&&d0){var g=o;if(!g){for(var n=p.parent;n&&(n.f&Qu)!==0;)for(;(n=n.parent)&&(n.f&Xu)===0;);g=!n||(n.f&u0)!==0}g&&a0(()=>{Fu(()=>d.in())})}}function M(u,a,e,f,t){var c=f===1;if(t0(a)){var r,o=!1;return Q(()=>{if(!o){var p=a({direction:c?"in":"out"});r=M(u,p,e,f,t)}}),{abort:()=>{o=!0,r==null||r.abort()},deactivate:()=>r.deactivate(),reset:()=>r.reset(),t:()=>r.t()}}if(e==null||e.deactivate(),!(a!=null&&a.duration))return t(),{abort:R,deactivate:R,reset:R,t:()=>f};const{delay:l=0,css:v,tick:i,easing:_=k0}=a;var s=[];if(c&&e===void 0&&(i&&i(0,1),v)){var h=vu(v(0,1));s.push(h,h)}var m=()=>1-f,d=u.animate(s,{duration:l});return d.onfinish=()=>{var p=(e==null?void 0:e.t())??1-f;e==null||e.abort();var g=f-p,n=a.duration*Math.abs(g),b=[];if(n>0){var w=!1;if(v)for(var A=Math.ceil(n/16.666666666666668),y=0;y<=A;y+=1){var E=p+g*_(y/A),$=vu(v(E,1-E));b.push($),w||(w=$.overflow==="hidden")}w&&(u.style.overflow="hidden"),m=()=>{var F=d.currentTime;return p+g*_(F/n)},i&&N0(()=>{if(d.playState!=="running")return!1;var F=m();return i(F,1-F),!0})}d=u.animate(b,{duration:n,fill:"forwards"}),d.onfinish=()=>{m=()=>f,i==null||i(f,1-f),t()}},{abort:()=>{d&&(d.cancel(),d.effect=null,d.onfinish=R)},deactivate:()=>{t=R},reset:()=>{f===0&&(i==null||i(1,0))},t:()=>m()}}function z0(u,a,e=a){var f=c0();v0(u,"input",t=>{var c=t?u.defaultValue:u.value;if(c=W(u)?Y(c):c,e(c),f&&c!==(c=a())){var r=u.selectionStart,o=u.selectionEnd;u.value=c??"",o!==null&&(u.selectionStart=r,u.selectionEnd=Math.min(o,u.value.length))}}),(x&&u.defaultValue!==u.value||Fu(a)==null&&u.value)&&e(W(u)?Y(u.value):u.value),n0(()=>{var t=a();W(u)&&t===Y(u.value)||u.type==="date"&&!t&&!u.value||t!==u.value&&(u.value=t??"")})}function W(u){var a=u.type;return a==="number"||a==="range"}function Y(u){return u===""?null:+u}const M0=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function J(u){const a=u-1;return a*a*a+1}function I0(u,{from:a,to:e},f={}){var{delay:t=0,duration:c=y=>Math.sqrt(y)*120,easing:r=J}=f,o=getComputedStyle(u),l=o.transform==="none"?"":o.transform,[v,i]=o.transformOrigin.split(" ").map(parseFloat);v/=u.clientWidth,i/=u.clientHeight;var _=C0(u),s=u.clientWidth/e.width/_,h=u.clientHeight/e.height/_,m=a.left+a.width*v,d=a.top+a.height*i,p=e.left+e.width*v,g=e.top+e.height*i,n=(m-p)*s,b=(d-g)*h,w=a.width/e.width,A=a.height/e.height;return{delay:t,duration:typeof c=="function"?c(Math.sqrt(n*n+b*b)):c,easing:r,css:(y,E)=>{var $=E*n,F=E*b,C=y+E*w,q=y+E*A;return`transform: ${l} translate(${$}px, ${F}px) scale(${C}, ${q});`}}}function C0(u){if("currentCSSZoom"in u)return u.currentCSSZoom;for(var a=u,e=1;a!==null;)e*=+getComputedStyle(a).zoom,a=a.parentElement;return e}function D0(u){const a=u-1;return a*a*a+1}function _u(u,{delay:a=0,duration:e=400,easing:f=D0,start:t=0,opacity:c=0}={}){const r=getComputedStyle(u),o=+r.opacity,l=r.transform==="none"?"":r.transform,v=1-t,i=o*(1-c);return{delay:a,duration:e,easing:f,css:(_,s)=>`
			transform: ${l} scale(${1-v*s});
			opacity: ${o-i*s}
		`}}const zu={JavaScript:{reservedKeywords:["abstract","as","async","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","export","extends","false","final","finally","float","for","from","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"],syntaxRegex:/^[a-zA-Z_$][a-zA-Z_$0-9]*$/,isValid:async u=>/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(u),testValidNames:["foo","bar","_foo","$foo","foo1"],testInvalidNames:["in","while","return","1foo"]},Go:{reservedKeywords:["break","default","func","interface","select","case","defer","go","map","struct","chan","else","goto","package","switch","const","fallthrough","if","range","type","continue","for","import","return","var"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["func","return","1foo","$foo"],iconName:"golang"},Rust:{reservedKeywords:["as","break","const","continue","crate","else","enum","extern","false","fn","for","if","impl","in","let","loop","match","mod","move","mut","pub","ref","return","self","Self","static","struct","super","trait","true","type","unsafe","use","where","while","async","await","dyn","abstract","become","box","do","final","macro","override","priv","typeof","unsized","virtual","yield","try","gen"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["crate","impl","1foo","$foo"]},Zig:{reservedKeywords:["addrspace","align","allowzero","and","anyframe","anytype","asm","async","await","break","callconv","catch","comptime","const","continue","defer","else","enum","errdefer","error","export","extern","fn","for","if","inline","noalias","nosuspend","noinline","opaque","or","orelse","packed","pub","resume","return","linksection","struct","suspend","switch","test","threadlocal","try","union","unreachable","usingnamespace","var","volatile","while"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["comptime","errdefer","1foo","$foo"],iconName:"zig-dark"},C:{reservedKeywords:["auto","break","case","char","const","continue","default","do","double","else","enum","extern","float","for","goto","if","inline","int","long","register","restrict","return","short","signed","sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while","_Alignas","_Alignof","_Atomic"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["double","restrict","1foo","$foo"]},"C++":{reservedKeywords:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","bool","break","case","catch","char","char8_t","char16_t","char32_t","class","compl","concept","const","consteval","constexpr","constinit","const_cast","continue","contract_assert","co_await","co_return","co_yield","decltype","default","delete","do","double","dynamic_cast","else","enum","explicit","export","extern","false","float","for","friend","goto","if","inline","int","long","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","private","protected","public","reflexpr","register","reinterpret_cast","requires","return","short","signed","sizeof","static","static_assert","static_cast","struct","switch","synchronized","template","this","thread_local","throw","true","try","typedef","typeid","typename","union","unsigned","using","virtual","void","volatile","wchar_t","while","xor","xor_eq"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["friend","virtual","1foo","$foo"],iconName:"cpp"},"C#":{reservedKeywords:["abstract","as","base","bool","break","byte","case","catch","char","checked","class","const","continue","decimal","default","delegate","do","double","else","enum","event","explicit","extern","false","finally","fixed","float","for","foreach","goto","if","implicit","in","int","interface","internal","is","lock","long","namespace","new","null","object","operator","out","override","params","private","protected","public","readonly","ref","return","sbyte","sealed","short","sizeof","stackalloc","static","string","struct","switch","this","throw","true","try","typeof","uint","ulong","unchecked","unsafe","ushort","using","virtual","void","volatile","while"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["params","sealed","1foo","$foo"],iconName:"cs"},Java:{reservedKeywords:["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while"],syntaxRegex:/^[a-zA-Z_$][a-zA-Z0-9_$]*$/,testValidNames:["foo","bar","_foo","$foo","foo1"],testInvalidNames:["native","super","1foo"],iconName:"java-dark"},Kotlin:{reservedKeywords:["as","as?","break","class","continue","do","else","false","for","fun","if","in","!in","interface","is","!is","null","object","package","return","super","this","throw","true","try","typealias","typeof","val","var","when","while"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["fun","when","1foo","$foo"],iconName:"kotlin-dark"},Swift:{reservedKeywords:["associatedtype","borrowing","class","consuming","deinit","enum","extension","fileprivate","func","import","init","inout","internal","let","open","operator","private","precedencegroup","protocol","public","rethrows","static","struct","subscript","typealias","var","break","case","catch","continue","default","defer","do","else","fallthrough","for","guard","if","in","repeat","return","throw","switch","where","while","Any","as","await","catch","false","is","nil","rethrows","self","Self","super","throw","throws","true","try"],syntaxRegex:/^[a-zA-Z_\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF\u1E00-\u1FFF\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793\u2C00-\u2DFF\u2E80-\u2FFF\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44\uFE47-\uFFFF\u{10000}-\u{10FFFF}][a-zA-Z_\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF\u1E00-\u1FFF\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793\u2C00-\u2DFF\u2E80-\u2FFF\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44\uFE47-\uFFFF\u{10000}-\u{10FFFF}0-9$]*$/u,testValidNames:["foo","bar","_foo","foo$","foo1","💯","💻s"],testInvalidNames:["rethrows","guard","1foo","$foo"]},Python:{reservedKeywords:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"],syntaxRegex:/^[a-zA-Z_][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","foo1"],testInvalidNames:["lambda","pass","1foo","$foo"],iconName:"python-dark"},Ruby:{reservedKeywords:["__ENCODING__","__LINE__","__FILE__","BEGIN","END","alias","and","begin","break","case","class","def","defined?","do","else","elsif","end","ensure","false","for","if","in","module","next","nil","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield"],syntaxRegex:/^[a-zA-Z_$][a-zA-Z0-9_]*$/,testValidNames:["foo","bar","_foo","__LINE__foo","foo1","$foo"],testInvalidNames:["rescue","retry","__LINE__","1foo"]}};async function R0(u,a){var e,f;return a.isValid?await a.isValid(u):a.reservedKeywords?(!a.reservedKeywords.includes(u)&&((e=a.syntaxRegex)==null?void 0:e.test(u)))??!1:((f=a.syntaxRegex)==null?void 0:f.test(u))??!1}async function S0(u){const a=[];for(const[e,f]of Object.entries(zu))await R0(u,f)&&a.push(e);return a}var T0=async(u,a,e)=>{xu(a,Au(await S0(N(e))))},Z0=pu('<div class="uno-304wwt"><h2 class="uno-eihlrr"> </h2> <div></div></div>'),B0=pu('<main class="uno-al42lr"><section class="uno-99k832"><h1 class="uno-kprsdw">Enter variable name</h1> <input type="text"> <span><!></span></section> <section class="uno-4oyd88"></section></main>');function q0(u,a){i0(a,!0);var e=nu(""),f=nu(Au([]));const t=d=>zu[d].iconName||d.toLowerCase();var c=B0(),r=S(c),o=B(S(r),2);F0(o),l0(o),o.__input=[T0,f,e];let l;var v=B(o,2);let i;var _=S(v);{var s=d=>{var p=tu("Valid");Z(d,p)},h=(d,p)=>{{var g=n=>{var b=tu("Invalid");Z(n,b)};su(d,n=>{N(e).length>0&&n(g)},p)}};su(_,d=>{N(f).length>0?d(s):d(h,!1)})}I(v),I(r);var m=B(r,2);_0(m,30,()=>N(f),d=>d,(d,p,g)=>{var n=Z0(),b=S(n),w=S(b,!0);I(b);var A=B(b,2);I(n),iu(y=>{b0(w,p),U(A,1,`uno-217qiw i-skill-icons:${y??""}`,"svelte-jnue9a")},[()=>t(p)]),hu(1,n,()=>_u,()=>({start:0,delay:70*j(g),duration:300,easing:J})),hu(2,n,()=>_u,()=>({start:0,duration:300,easing:J})),$0(n,()=>I0,()=>({duration:500})),Z(d,n)}),I(m),I(c),iu((d,p)=>{l=U(o,1,"uno-64hmpg svelte-jnue9a",null,l,d),i=U(v,1,"uno-adcgaq",null,i,p)},[()=>({invalid:N(e).length>0&&N(f).length==0,valid:N(f).length>0}),()=>({"uno-chw0bu":N(f).length>0,"uno-y54yxm":N(e).length>0&&N(f).length==0})]),z0(o,()=>N(e),d=>xu(e,d)),Z(u,c),s0()}o0(["input"]);export{q0 as component,M0 as universal};
