import{S as H,i as q,s as V,k,q as K,l as w,m as $,r as Y,h as p,n as m,b as L,G as y,u as Z,H as F,w as j,J as G,y as S,a as C,z as O,c as D,A as I,K as U,L as Pe,M as X,g as R,v as me,d as A,f as pe,B,I as le,N as nt,O as rt,P as J,Q as it}from"../chunks/index.7d3c8b6c.js";import{L as be}from"../chunks/i18n-svelte.b73e67d5.js";import{w as lt}from"../chunks/index.1c1de94c.js";function at(e){let t,n,r;return{c(){t=k("h1"),n=K(e[0]),r=K("!"),this.h()},l(i){t=w(i,"H1",{id:!0,class:!0});var l=$(t);n=Y(l,e[0]),r=Y(l,"!"),l.forEach(p),this.h()},h(){m(t,"id","title"),m(t,"class","text-4xl text-500 text-center svelte-sgmoxy")},m(i,l){L(i,t,l),y(t,n),y(t,r)},p(i,[l]){l&1&&Z(n,i[0])},i:F,o:F,d(i){i&&p(t)}}}function st(e,t,n){let{value:r}=t;return e.$$set=i=>{"value"in i&&n(0,r=i.value)},[r]}class ut extends H{constructor(t){super(),q(this,t,st,at,V,{value:0})}}function ot(e,t){return{title:t.head.getElementsByTagName("title")[0].innerText,description:Ce(t,"description","content"),introduction:"",summary:"",keewords:Ce(t,"keewords","content"),content:t.body.innerHTML,url:e,draft:!1,date:new Date,categories:"reads",tags:"",document:t,template:""}}function ft(e,t){return e.tags=e.categories+", "+e.keewords,e.date=new Date,t=ct(t,">"),e.template=`---
title: "${e.title}"
description: '${e.description}'
summary: "${e.summary}"
keywords: [${mt(e)}]
date: ${pt(e)}
draft: ${e.draft}
categories: ['${e.categories}']
tags: [${dt(e)}]
---

${e.introduction}

${e.url}

---

${t}`,e}function ct(e,t){return e.split(`
`).map(n=>`${t} ${n}`).join(`
`)}function dt(e){return Fe(e.tags.split(","))}function mt(e){return Fe(e.keewords.split(","))}function pt(e){return e.date.toISOString()}function Ce(e,t,n){const r=e.getElementsByName(t);if(r.length<=0)return"";const i=r[0];if(i===void 0)return"";const l=i.getAttribute(n);return l??""}function Fe(e){e=e.map(n=>n.trim());let t=e.join("', '");return t="'"+t+"'",t}class ht{constructor(t){this.client=t}async getHTML(t){try{return this.client.get(t).then(n=>n.status!=200?Promise.resolve(n.status):Promise.resolve(n.text().then(r=>ot(t,new DOMParser().parseFromString(r,"text/html")))))}catch(n){return console.error(n),Promise.resolve(500)}}}const gt=globalThis.__sveltekit_13agiou.env;class vt{get(t){const n={url:t,method:Me.get};return this.request(n)}request(t){const n=t.url,r={method:t.method};return fetch(n,r)}}class _t extends vt{request(t){const n=gt.PUBLIC_RELAY_URL,r={"x-relay-url":t.url},i={method:t.method,headers:r};return console.log(n),console.log(i),fetch(n,i)}}var Me=(e=>(e.get="GET",e))(Me||{});function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}function _e(e,t){return Array(t+1).join(e)}function Et(e){return e.replace(/^\n*/,"")}function kt(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}var wt=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function Ee(e){return ke(e,wt)}var Ue=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function He(e){return ke(e,Ue)}function yt(e){return Ve(e,Ue)}var qe=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function Tt(e){return ke(e,qe)}function $t(e){return Ve(e,qe)}function ke(e,t){return t.indexOf(e.nodeName)>=0}function Ve(e,t){return e.getElementsByTagName&&t.some(function(n){return e.getElementsByTagName(n).length})}var N={};N.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};N.lineBreak={filter:"br",replacement:function(e,t,n){return n.br+`
`}};N.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,n){var r=Number(t.nodeName.charAt(1));if(n.headingStyle==="setext"&&r<3){var i=_e(r===1?"=":"-",e.length);return`

`+e+`
`+i+`

`}else return`

`+_e("#",r)+" "+e+`

`}};N.blockquote={filter:"blockquote",replacement:function(e){return e=e.replace(/^\n+|\n+$/g,""),e=e.replace(/^/gm,"> "),`

`+e+`

`}};N.list={filter:["ul","ol"],replacement:function(e,t){var n=t.parentNode;return n.nodeName==="LI"&&n.lastElementChild===t?`
`+e:`

`+e+`

`}};N.listItem={filter:"li",replacement:function(e,t,n){e=e.replace(/^\n+/,"").replace(/\n+$/,`
`).replace(/\n/gm,`
    `);var r=n.bulletListMarker+"   ",i=t.parentNode;if(i.nodeName==="OL"){var l=i.getAttribute("start"),s=Array.prototype.indexOf.call(i.children,t);r=(l?Number(l)+s:s+1)+".  "}return r+e+(t.nextSibling&&!/\n$/.test(e)?`
`:"")}};N.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};N.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,n){for(var r=t.firstChild.getAttribute("class")||"",i=(r.match(/language-(\S+)/)||[null,""])[1],l=t.firstChild.textContent,s=n.fence.charAt(0),c=3,u=new RegExp("^"+s+"{3,}","gm"),f;f=u.exec(l);)f[0].length>=c&&(c=f[0].length+1);var o=_e(s,c);return`

`+o+i+`
`+l.replace(/\n$/,"")+`
`+o+`

`}};N.horizontalRule={filter:"hr",replacement:function(e,t,n){return`

`+n.hr+`

`}};N.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var n=t.getAttribute("href"),r=ae(t.getAttribute("title"));return r&&(r=' "'+r+'"'),"["+e+"]("+n+r+")"}};N.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,n){var r=t.getAttribute("href"),i=ae(t.getAttribute("title"));i&&(i=' "'+i+'"');var l,s;switch(n.linkReferenceStyle){case"collapsed":l="["+e+"][]",s="["+e+"]: "+r+i;break;case"shortcut":l="["+e+"]",s="["+e+"]: "+r+i;break;default:var c=this.references.length+1;l="["+e+"]["+c+"]",s="["+c+"]: "+r+i}return this.references.push(s),l},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};N.emphasis={filter:["em","i"],replacement:function(e,t,n){return e.trim()?n.emDelimiter+e+n.emDelimiter:""}};N.strong={filter:["strong","b"],replacement:function(e,t,n){return e.trim()?n.strongDelimiter+e+n.strongDelimiter:""}};N.code={filter:function(e){var t=e.previousSibling||e.nextSibling,n=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!n},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",n="`",r=e.match(/`+/gm)||[];r.indexOf(n)!==-1;)n=n+"`";return n+t+e+t+n}};N.image={filter:"img",replacement:function(e,t){var n=ae(t.getAttribute("alt")),r=t.getAttribute("src")||"",i=ae(t.getAttribute("title")),l=i?' "'+i+'"':"";return r?"!["+n+"]("+r+l+")":""}};function ae(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function xe(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}xe.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=he(this.array,e,this.options))||(t=he(this._keep,e,this.options))||(t=he(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function he(e,t,n){for(var r=0;r<e.length;r++){var i=e[r];if(Rt(i,t,n))return i}}function Rt(e,t,n){var r=e.filter;if(typeof r=="string"){if(r===t.nodeName.toLowerCase())return!0}else if(Array.isArray(r)){if(r.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof r=="function"){if(r.call(e,t,n))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function Lt(e){var t=e.element,n=e.isBlock,r=e.isVoid,i=e.isPre||function(h){return h.nodeName==="PRE"};if(!(!t.firstChild||i(t))){for(var l=null,s=!1,c=null,u=De(c,t,i);u!==t;){if(u.nodeType===3||u.nodeType===4){var f=u.data.replace(/[ \r\n\t]+/g," ");if((!l||/ $/.test(l.data))&&!s&&f[0]===" "&&(f=f.substr(1)),!f){u=ge(u);continue}u.data=f,l=u}else if(u.nodeType===1)n(u)||u.nodeName==="BR"?(l&&(l.data=l.data.replace(/ $/,"")),l=null,s=!1):r(u)||i(u)?(l=null,s=!0):l&&(s=!1);else{u=ge(u);continue}var o=De(c,u,i);c=u,u=o}l&&(l.data=l.data.replace(/ $/,""),l.data||ge(l))}}function ge(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function De(e,t,n){return e&&e.parentNode===t||n(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var We=typeof window<"u"?window:{};function At(){var e=We.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function Nt(){var e=function(){};return Ct()?e.prototype.parseFromString=function(t){var n=new window.ActiveXObject("htmlfile");return n.designMode="on",n.open(),n.write(t),n.close(),n}:e.prototype.parseFromString=function(t){var n=document.implementation.createHTMLDocument("");return n.open(),n.write(t),n.close(),n},e}function Ct(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{window.ActiveXObject&&(e=!0)}return e}var Dt=At()?We.DOMParser:Nt();function St(e,t){var n;if(typeof e=="string"){var r=Ot().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");n=r.getElementById("turndown-root")}else n=e.cloneNode(!0);return Lt({element:n,isBlock:Ee,isVoid:He,isPre:t.preformattedCode?It:null}),n}var ve;function Ot(){return ve=ve||new Dt,ve}function It(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function Bt(e,t){return e.isBlock=Ee(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=Pt(e),e.flankingWhitespace=Ft(e,t),e}function Pt(e){return!He(e)&&!Tt(e)&&/^\s*$/i.test(e.textContent)&&!yt(e)&&!$t(e)}function Ft(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var n=Mt(e.textContent);return n.leadingAscii&&Se("left",e,t)&&(n.leading=n.leadingNonAscii),n.trailingAscii&&Se("right",e,t)&&(n.trailing=n.trailingNonAscii),{leading:n.leading,trailing:n.trailing}}function Mt(e){var t=e.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function Se(e,t,n){var r,i,l;return e==="left"?(r=t.previousSibling,i=/ $/):(r=t.nextSibling,i=/^ /),r&&(r.nodeType===3?l=i.test(r.nodeValue):n.preformattedCode&&r.nodeName==="CODE"?l=!1:r.nodeType===1&&!Ee(r)&&(l=i.test(r.textContent))),l}var Ut=Array.prototype.reduce,Ht=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function se(e){if(!(this instanceof se))return new se(e);var t={rules:N,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(n,r){return r.isBlock?`

`:""},keepReplacement:function(n,r){return r.isBlock?`

`+r.outerHTML+`

`:r.outerHTML},defaultReplacement:function(n,r){return r.isBlock?`

`+n+`

`:n}};this.options=bt({},t,e),this.rules=new xe(this.options)}se.prototype={turndown:function(e){if(!xt(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=je.call(this,new St(e,this.options));return qt.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return Ht.reduce(function(t,n){return t.replace(n[0],n[1])},e)}};function je(e){var t=this;return Ut.call(e.childNodes,function(n,r){r=new Bt(r,t.options);var i="";return r.nodeType===3?i=r.isCode?r.nodeValue:t.escape(r.nodeValue):r.nodeType===1&&(i=Vt.call(t,r)),Ge(n,i)},"")}function qt(e){var t=this;return this.rules.forEach(function(n){typeof n.append=="function"&&(e=Ge(e,n.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function Vt(e){var t=this.rules.forNode(e),n=je.call(this,e),r=e.flankingWhitespace;return(r.leading||r.trailing)&&(n=n.trim()),r.leading+t.replacement(n,e,this.options)+r.trailing}function Ge(e,t){var n=kt(e),r=Et(t),i=Math.max(e.length-n.length,t.length-r.length),l=`

`.substring(0,i);return n+l+r}function xt(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}var M=(e=>(e[e.initial=0]="initial",e[e.loading=1]="loading",e[e.showingForm=2]="showingForm",e[e.showingTemplate=3]="showingTemplate",e[e.showingURLError=4]="showingURLError",e))(M||{});function Xe(e,t){return{value:e,state:t,loading:t==1,showingURLError:t==4,showingForm:t==2,showingTemplate:t==3}}function Wt(){const e=lt({});return{set:e.set,subscribe:e.subscribe,update:e.update,state:M.initial}}function Ke(e,t){return Ye(e,M.loading,t)}function jt(e){return Ye(e,M.showingURLError)}function Ye(e,t,n){return e.update(r=>Xe(r.value,t)),e.state=t,n==null?void 0:n()}function Gt(e,t){return we(e,t,M.initial)}function Xt(e,t){return we(e,t,M.showingForm)}function Kt(e,t){return we(e,t,M.showingTemplate)}function we(e,t,n){const r=Xe(t,n);return e.state=n,console.log(r),console.log(e.state),e.set(r)}const ie=Yt();function Yt(){const e=Wt(),t=e.subscribe,n=new ht(new _t);return{subscribe:t,submittedURL:r=>zt(e,n,r),submittedForm:r=>Qt(e,r),reset:()=>Zt(e)}}function zt(e,t,n){if(e.state!=M.loading)return Ke(e,()=>t.getHTML(n).then(r=>Jt(e,r)))}function Qt(e,t){if(e.state!=M.loading)return Ke(e,()=>Kt(e,t))}function Jt(e,t){typeof t=="number"?jt(e):Xt(e,t)}function Zt(e){return Gt(e,{})}function Oe(e){let t,n;return t=new En({props:{message:`Error. Not possible to call '${e[0]}'`}}),{c(){S(t.$$.fragment)},l(r){O(t.$$.fragment,r)},m(r,i){I(t,r,i),n=!0},p(r,i){const l={};i&1&&(l.message=`Error. Not possible to call '${r[0]}'`),t.$set(l)},i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){B(t,r)}}}function Ie(e){let t,n,r,i,l,s,c,u;return l=new an({props:{read:e[2].value}}),{c(){t=k("div"),n=k("div"),r=k("form"),i=k("section"),S(l.$$.fragment),this.h()},l(f){t=w(f,"DIV",{class:!0});var o=$(t);n=w(o,"DIV",{class:!0});var h=$(n);r=w(h,"FORM",{action:!0});var d=$(r);i=w(d,"SECTION",{id:!0,class:!0});var g=$(i);O(l.$$.fragment,g),g.forEach(p),d.forEach(p),h.forEach(p),o.forEach(p),this.h()},h(){m(i,"id","form"),m(i,"class","svelte-s8f4qf"),m(r,"action","."),m(n,"class","card-body"),m(t,"class","card svelte-s8f4qf")},m(f,o){L(f,t,o),y(t,n),y(n,r),y(r,i),I(l,i,null),s=!0,c||(u=U(r,"submit",Pe(e[6])),c=!0)},p(f,o){const h={};o&4&&(h.read=f[2].value),l.$set(h)},i(f){s||(R(l.$$.fragment,f),s=!0)},o(f){A(l.$$.fragment,f),s=!1},d(f){f&&p(t),B(l),c=!1,u()}}}function Be(e){let t,n,r,i,l;return i=new vn({props:{readtemplate:e[2].value.template}}),{c(){t=k("div"),n=k("div"),r=k("section"),S(i.$$.fragment),this.h()},l(s){t=w(s,"DIV",{class:!0});var c=$(t);n=w(c,"DIV",{class:!0});var u=$(n);r=w(u,"SECTION",{id:!0,class:!0});var f=$(r);O(i.$$.fragment,f),f.forEach(p),u.forEach(p),c.forEach(p),this.h()},h(){m(r,"id","read-template-input"),m(r,"class","svelte-s8f4qf"),m(n,"class","card-body"),m(t,"class","card mt-2 svelte-s8f4qf")},m(s,c){L(s,t,c),y(t,n),y(n,r),I(i,r,null),l=!0},p(s,c){const u={};c&4&&(u.readtemplate=s[2].value.template),i.$set(u)},i(s){l||(R(i.$$.fragment,s),l=!0)},o(s){A(i.$$.fragment,s),l=!1},d(s){s&&p(t),B(i)}}}function en(e){let t,n,r,i,l,s,c,u,f,o;function h(v){e[7](v)}let d={label:e[3].urlLabel()};e[0]!==void 0&&(d.value=e[0]),r=new Q({props:d}),j.push(()=>G(r,"value",h)),r.$on("onInput",e[4]);let g=e[2].showingURLError&&!e[1]&&Oe(e),E=(e[2].showingForm||e[2].showingTemplate)&&Ie(e),b=e[2].showingTemplate&&Be(e);return{c(){t=k("section"),n=k("form"),S(r.$$.fragment),l=C(),g&&g.c(),s=C(),E&&E.c(),c=C(),b&&b.c(),this.h()},l(v){t=w(v,"SECTION",{id:!0,class:!0});var T=$(t);n=w(T,"FORM",{action:!0});var P=$(n);O(r.$$.fragment,P),P.forEach(p),l=D(T),g&&g.l(T),s=D(T),E&&E.l(T),c=D(T),b&&b.l(T),T.forEach(p),this.h()},h(){m(n,"action","."),m(t,"id","body"),m(t,"class","svelte-s8f4qf")},m(v,T){L(v,t,T),y(t,n),I(r,n,null),y(t,l),g&&g.m(t,null),y(t,s),E&&E.m(t,null),y(t,c),b&&b.m(t,null),u=!0,f||(o=U(n,"submit",Pe(e[5])),f=!0)},p(v,[T]){const P={};T&8&&(P.label=v[3].urlLabel()),!i&&T&1&&(i=!0,P.value=v[0],X(()=>i=!1)),r.$set(P),v[2].showingURLError&&!v[1]?g?(g.p(v,T),T&6&&R(g,1)):(g=Oe(v),g.c(),R(g,1),g.m(t,s)):g&&(me(),A(g,1,1,()=>{g=null}),pe()),v[2].showingForm||v[2].showingTemplate?E?(E.p(v,T),T&4&&R(E,1)):(E=Ie(v),E.c(),R(E,1),E.m(t,c)):E&&(me(),A(E,1,1,()=>{E=null}),pe()),v[2].showingTemplate?b?(b.p(v,T),T&4&&R(b,1)):(b=Be(v),b.c(),R(b,1),b.m(t,null)):b&&(me(),A(b,1,1,()=>{b=null}),pe())},i(v){u||(R(r.$$.fragment,v),R(g),R(E),R(b),u=!0)},o(v){A(r.$$.fragment,v),A(g),A(E),A(b),u=!1},d(v){v&&p(t),B(r),g&&g.d(),E&&E.d(),b&&b.d(),f=!1,o()}}}function tn(e,t,n){let r,i;le(e,ie,d=>n(2,r=d)),le(e,be,d=>n(3,i=d));let l,s=!0;const c=new se;async function u(d){n(1,s=d.detail.isEditing)}async function f(){ie.reset(),ie.submittedURL(l),n(1,s=!1)}async function o(){let d=r.value;const g=c.turndown(d.content);ft(d,g),ie.submittedForm(d),n(1,s=!1)}function h(d){l=d,n(0,l)}return[l,s,r,i,u,f,o,h]}class nn extends H{constructor(t){super(),q(this,t,tn,en,V,{})}}function rn(e){let t,n,r,i,l,s,c,u,f,o,h,d,g,E,b,v,T,P,x,W,ee=e[1].generateButton()+"",ne,te,ue,ye;function ze(a){e[3](a)}let Te={label:e[1].titleLabel()};e[0].title!==void 0&&(Te.value=e[0].title),t=new Q({props:Te}),j.push(()=>G(t,"value",ze));function Qe(a){e[4](a)}let $e={label:e[1].descriptionLabel(),multiline:!0};e[0].description!==void 0&&($e.value=e[0].description),i=new Q({props:$e}),j.push(()=>G(i,"value",Qe));function Je(a){e[5](a)}let Re={label:e[1].summaryLabel(),multiline:!0};e[0].summary!==void 0&&(Re.value=e[0].summary),c=new Q({props:Re}),j.push(()=>G(c,"value",Je));function Ze(a){e[6](a)}let Le={label:e[1].introductionLabel(),multiline:!0};e[0].introduction!==void 0&&(Le.value=e[0].introduction),o=new Q({props:Le}),j.push(()=>G(o,"value",Ze));function et(a){e[7](a)}let Ae={label:e[1].keewordsLabel(),title:e[1].keewordsTootipTitle()};e[0].keewords!==void 0&&(Ae.value=e[0].keewords),g=new Q({props:Ae}),j.push(()=>G(g,"value",et));function tt(a){e[8](a)}let Ne={label:e[1].draftLabel()};return e[0].draft!==void 0&&(Ne.checked=e[0].draft),v=new mn({props:Ne}),j.push(()=>G(v,"checked",tt)),{c(){S(t.$$.fragment),r=C(),S(i.$$.fragment),s=C(),S(c.$$.fragment),f=C(),S(o.$$.fragment),d=C(),S(g.$$.fragment),b=C(),S(v.$$.fragment),P=C(),x=k("div"),W=k("button"),ne=K(ee),this.h()},l(a){O(t.$$.fragment,a),r=D(a),O(i.$$.fragment,a),s=D(a),O(c.$$.fragment,a),f=D(a),O(o.$$.fragment,a),d=D(a),O(g.$$.fragment,a),b=D(a),O(v.$$.fragment,a),P=D(a),x=w(a,"DIV",{class:!0});var _=$(x);W=w(_,"BUTTON",{class:!0});var z=$(W);ne=Y(z,ee),z.forEach(p),_.forEach(p),this.h()},h(){m(W,"class","button btn btn-secondary"),m(x,"class","flex flex-col justify-center mt-8")},m(a,_){I(t,a,_),L(a,r,_),I(i,a,_),L(a,s,_),I(c,a,_),L(a,f,_),I(o,a,_),L(a,d,_),I(g,a,_),L(a,b,_),I(v,a,_),L(a,P,_),L(a,x,_),y(x,W),y(W,ne),te=!0,ue||(ye=U(W,"click",e[2]),ue=!0)},p(a,[_]){const z={};_&2&&(z.label=a[1].titleLabel()),!n&&_&1&&(n=!0,z.value=a[0].title,X(()=>n=!1)),t.$set(z);const oe={};_&2&&(oe.label=a[1].descriptionLabel()),!l&&_&1&&(l=!0,oe.value=a[0].description,X(()=>l=!1)),i.$set(oe);const fe={};_&2&&(fe.label=a[1].summaryLabel()),!u&&_&1&&(u=!0,fe.value=a[0].summary,X(()=>u=!1)),c.$set(fe);const ce={};_&2&&(ce.label=a[1].introductionLabel()),!h&&_&1&&(h=!0,ce.value=a[0].introduction,X(()=>h=!1)),o.$set(ce);const re={};_&2&&(re.label=a[1].keewordsLabel()),_&2&&(re.title=a[1].keewordsTootipTitle()),!E&&_&1&&(E=!0,re.value=a[0].keewords,X(()=>E=!1)),g.$set(re);const de={};_&2&&(de.label=a[1].draftLabel()),!T&&_&1&&(T=!0,de.checked=a[0].draft,X(()=>T=!1)),v.$set(de),(!te||_&2)&&ee!==(ee=a[1].generateButton()+"")&&Z(ne,ee)},i(a){te||(R(t.$$.fragment,a),R(i.$$.fragment,a),R(c.$$.fragment,a),R(o.$$.fragment,a),R(g.$$.fragment,a),R(v.$$.fragment,a),te=!0)},o(a){A(t.$$.fragment,a),A(i.$$.fragment,a),A(c.$$.fragment,a),A(o.$$.fragment,a),A(g.$$.fragment,a),A(v.$$.fragment,a),te=!1},d(a){B(t,a),a&&p(r),B(i,a),a&&p(s),B(c,a),a&&p(f),B(o,a),a&&p(d),B(g,a),a&&p(b),B(v,a),a&&p(P),a&&p(x),ue=!1,ye()}}}function ln(e,t,n){let r;le(e,be,d=>n(1,r=d));let{read:i}=t;function l(d){nt.call(this,e,d)}function s(d){e.$$.not_equal(i.title,d)&&(i.title=d,n(0,i))}function c(d){e.$$.not_equal(i.description,d)&&(i.description=d,n(0,i))}function u(d){e.$$.not_equal(i.summary,d)&&(i.summary=d,n(0,i))}function f(d){e.$$.not_equal(i.introduction,d)&&(i.introduction=d,n(0,i))}function o(d){e.$$.not_equal(i.keewords,d)&&(i.keewords=d,n(0,i))}function h(d){e.$$.not_equal(i.draft,d)&&(i.draft=d,n(0,i))}return e.$$set=d=>{"read"in d&&n(0,i=d.read)},[i,r,l,s,c,u,f,o,h]}class an extends H{constructor(t){super(),q(this,t,ln,rn,V,{read:0})}}function sn(e){let t,n,r;return{c(){t=k("input"),this.h()},l(i){t=w(i,"INPUT",{type:!0,class:!0,id:!0,"aria-describedby":!0,"data-toggle":!0,"data-placement":!0,title:!0}),this.h()},h(){m(t,"type","text"),m(t,"class","form-control svelte-3h3qam"),m(t,"id",e[1]),m(t,"aria-describedby","basic-addon3"),m(t,"data-toggle","tooltip"),m(t,"data-placement","bottom"),m(t,"title",e[2]),t.required=!0},m(i,l){L(i,t,l),J(t,e[0]),n||(r=[U(t,"input",e[6]),U(t,"input",e[4])],n=!0)},p(i,l){l&2&&m(t,"id",i[1]),l&4&&m(t,"title",i[2]),l&1&&t.value!==i[0]&&J(t,i[0])},d(i){i&&p(t),n=!1,it(r)}}}function un(e){let t,n,r;return{c(){t=k("textarea"),this.h()},l(i){t=w(i,"TEXTAREA",{class:!0,id:!0,"aria-describedby":!0,"data-toggle":!0,"data-placement":!0,title:!0}),$(t).forEach(p),this.h()},h(){m(t,"class","form-control svelte-3h3qam"),m(t,"id",e[1]),m(t,"aria-describedby","basic-addon3"),m(t,"data-toggle","tooltip"),m(t,"data-placement","bottom"),m(t,"title",e[2]),t.required=!0},m(i,l){L(i,t,l),J(t,e[0]),n||(r=U(t,"input",e[5]),n=!0)},p(i,l){l&2&&m(t,"id",i[1]),l&4&&m(t,"title",i[2]),l&1&&J(t,i[0])},d(i){i&&p(t),n=!1,r()}}}function on(e){let t,n,r,i,l;function s(f,o){return f[3]?un:sn}let c=s(e),u=c(e);return{c(){t=k("div"),n=k("div"),r=k("span"),i=K(e[1]),l=C(),u.c(),this.h()},l(f){t=w(f,"DIV",{class:!0});var o=$(t);n=w(o,"DIV",{class:!0});var h=$(n);r=w(h,"SPAN",{class:!0});var d=$(r);i=Y(d,e[1]),d.forEach(p),h.forEach(p),l=D(o),u.l(o),o.forEach(p),this.h()},h(){m(r,"class","input-group-text"),m(n,"class","input-group-prepend"),m(t,"class","w-full text-center flex-row input-group mb-2")},m(f,o){L(f,t,o),y(t,n),y(n,r),y(r,i),y(t,l),u.m(t,null)},p(f,[o]){o&2&&Z(i,f[1]),c===(c=s(f))&&u?u.p(f,o):(u.d(1),u=c(f),u&&(u.c(),u.m(t,null)))},i:F,o:F,d(f){f&&p(t),u.d()}}}function fn(e,t,n){let{label:r=""}=t,{value:i=""}=t,{title:l=""}=t,{multiline:s=!1}=t;const c=rt();function u(){c("onInput",{isEditing:!0})}function f(){i=this.value,n(0,i)}function o(){i=this.value,n(0,i)}return e.$$set=h=>{"label"in h&&n(1,r=h.label),"value"in h&&n(0,i=h.value),"title"in h&&n(2,l=h.title),"multiline"in h&&n(3,s=h.multiline)},[i,r,l,s,u,f,o]}class Q extends H{constructor(t){super(),q(this,t,fn,on,V,{label:1,value:0,title:2,multiline:3})}}function cn(e){let t,n,r,i,l,s,c;return{c(){t=k("div"),n=k("input"),r=C(),i=k("label"),l=K(e[1]),this.h()},l(u){t=w(u,"DIV",{class:!0});var f=$(t);n=w(f,"INPUT",{type:!0,class:!0,id:!0}),r=D(f),i=w(f,"LABEL",{class:!0,for:!0});var o=$(i);l=Y(o,e[1]),o.forEach(p),f.forEach(p),this.h()},h(){m(n,"type","checkbox"),m(n,"class","form-check-input"),m(n,"id","Check"),m(i,"class","form-check-label"),m(i,"for","Check"),m(t,"class","w-full text-center flex-row input-group mb-2")},m(u,f){L(u,t,f),y(t,n),n.checked=e[0],y(t,r),y(t,i),y(i,l),s||(c=U(n,"change",e[2]),s=!0)},p(u,[f]){f&1&&(n.checked=u[0]),f&2&&Z(l,u[1])},i:F,o:F,d(u){u&&p(t),s=!1,c()}}}function dn(e,t,n){let{label:r=""}=t,{checked:i=!1}=t;function l(){i=this.checked,n(0,i)}return e.$$set=s=>{"label"in s&&n(1,r=s.label),"checked"in s&&n(0,i=s.checked)},[i,r,l]}class mn extends H{constructor(t){super(),q(this,t,dn,cn,V,{label:1,checked:0})}}function pn(e){let t,n,r;return{c(){t=k("textarea"),this.h()},l(i){t=w(i,"TEXTAREA",{class:!0,id:!0,"aria-describedby":!0,"data-toggle":!0,"data-placement":!0}),$(t).forEach(p),this.h()},h(){m(t,"class","form-control svelte-6y3fo2"),m(t,"id",hn),m(t,"aria-describedby","basic-addon3"),m(t,"data-toggle","tooltip"),m(t,"data-placement","bottom"),t.required=!0},m(i,l){L(i,t,l),J(t,e[0]),n||(r=U(t,"input",e[1]),n=!0)},p(i,[l]){l&1&&J(t,i[0])},i:F,o:F,d(i){i&&p(t),n=!1,r()}}}const hn="read";function gn(e,t,n){let{readtemplate:r}=t;function i(){r=this.value,n(0,r)}return e.$$set=l=>{"readtemplate"in l&&n(0,r=l.readtemplate)},[r,i]}class vn extends H{constructor(t){super(),q(this,t,gn,pn,V,{readtemplate:0})}}function _n(e){let t,n;return{c(){t=k("div"),n=K(e[0]),this.h()},l(r){t=w(r,"DIV",{class:!0,role:!0});var i=$(t);n=Y(i,e[0]),i.forEach(p),this.h()},h(){m(t,"class","alert alert-danger svelte-1sg3lp9"),m(t,"role","alert")},m(r,i){L(r,t,i),y(t,n)},p(r,[i]){i&1&&Z(n,r[0])},i:F,o:F,d(r){r&&p(t)}}}function bn(e,t,n){let{message:r=""}=t;return e.$$set=i=>{"message"in i&&n(0,r=i.message)},[r]}class En extends H{constructor(t){super(),q(this,t,bn,_n,V,{message:0})}}function kn(e){let t,n,r,i,l,s,c=e[0].greetings()+"",u,f;return t=new ut({props:{value:"html2read"}}),r=new nn({}),{c(){S(t.$$.fragment),n=C(),S(r.$$.fragment),i=C(),l=k("div"),s=k("p"),u=K(c),this.h()},l(o){O(t.$$.fragment,o),n=D(o),O(r.$$.fragment,o),i=D(o),l=w(o,"DIV",{class:!0});var h=$(l);s=w(h,"P",{class:!0});var d=$(s);u=Y(d,c),d.forEach(p),h.forEach(p),this.h()},h(){m(s,"class","text-center"),m(l,"class","flex flex-col justify-center")},m(o,h){I(t,o,h),L(o,n,h),I(r,o,h),L(o,i,h),L(o,l,h),y(l,s),y(s,u),f=!0},p(o,[h]){(!f||h&1)&&c!==(c=o[0].greetings()+"")&&Z(u,c)},i(o){f||(R(t.$$.fragment,o),R(r.$$.fragment,o),f=!0)},o(o){A(t.$$.fragment,o),A(r.$$.fragment,o),f=!1},d(o){B(t,o),o&&p(n),B(r,o),o&&p(i),o&&p(l)}}}function wn(e,t,n){let r;return le(e,be,i=>n(0,r=i)),[r]}class Rn extends H{constructor(t){super(),q(this,t,wn,kn,V,{})}}export{Rn as default};
