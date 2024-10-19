import{a as c3,b as e3,c as l3,d as t3,e as n3,f as Q,g as R2,h as s3,i as a3,j as i3,k as o3,l as O2,m as r3,n as f3,o as z2,p as m3,q as p3}from"./chunk-GBWJMS7N.js";import{$ as I2,$a as V,Db as h,Fb as Q2,Ga as R1,Hb as N2,Ib as y2,Ka as L,La as w,Oa as O1,Ob as J1,Qb as Z1,S as x2,T as T2,Va as $,Wa as V1,X as I1,Xa as U1,Y as F2,Ya as q1,Za as H2,_ as g,_a as A,a as p,aa as B2,b as S,ba as B1,bb as j1,c as $4,cb as W1,d as X4,db as o,e as Y4,eb as r,fb as k,ga as p2,gb as G1,ha as W,hb as $1,ia as G,ib as b2,jb as X1,mb as t2,na as d2,nb as N,ob as Y1,pb as K1,qa as H1,ub as B,vb as d,wb as y,xb as n2,yb as Q1}from"./chunk-D55NI4RC.js";var O4=$4(T1=>{"use strict";Object.defineProperty(T1,"__esModule",{value:!0});var h2=class c{constructor(e,l){var t,n;this.bornTime=Date.now(),this.hideEventHandler=this.handleHideEvent.bind(this),c.appendCSS(),this.viewID=c.generateViewID();let s=c.getHtml(this.viewID);document.body.appendChild(s),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.setMessage(this.message=e),this.setPosition(this.position=l?.position||c.DEFAULT_POSITION),this.setTheme(l?.theme),this.setIconSrc(l?.iconSrc),this.setStyle(l?.style),this.setActionText(l?.actionText),this.setActionCallback(l?.onAction),this.waitForEvent=(t=l?.waitForEvent)!==null&&t!==void 0?t:!0,this.timeout=(n=l?.timeout)!==null&&n!==void 0?n:c.DEFAULT_HIDING_TIMEOUT,this.isWaitingForHide=!1,this.afterHide=l?.afterHide,this.addHideEventListener(),this.waitForEvent||this.startHidingTimer(this.timeout),this.show()}static appendCSS(){if(document.getElementById("snackbar-style")===null){let e=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.id="snackbar-style",e.appendChild(l),l.appendChild(document.createTextNode(C8))}}static generateViewID(){let e=Math.floor(Math.random()*1e9)+1e8;return document.getElementById(e.toString())===null?e:c.generateViewID()}static getHtml(e){let l=`
            <div class="snackbar" id="${e}">
                <div class="container">
                    <span class='icon'></span>
                    <p class="message"></p>
                    <input type="button" class="actionButton" id="${e}_actionButton" value="">
                </div>
            </div>
        `,t=document.createElement("div");return t.innerHTML=l.trim(),t.firstChild||t}setMessage(e){this.message=e;let l=this.view.getElementsByClassName("message")[0];l.innerHTML=this.message}setPosition(e){this.position=e,this.view.classList.remove("bottom-left"),this.view.classList.remove("bottom-center"),this.view.classList.remove("bottom-right"),this.view.classList.remove("top-left"),this.view.classList.remove("top-center"),this.view.classList.remove("top-right"),this.view.classList.add(e),c.adjustListPositions(this)}setIconSrc(e){if(e===void 0)return;this.iconSrc=e;let l=this.view.getElementsByClassName("icon")[0];l.style.setProperty("display","block"),l.style.setProperty("background-image","url("+this.iconSrc+")")}setTheme(e){e!==void 0&&(this.theme==e,this.view.classList.remove("light"),this.view.classList.remove("dark"),this.view.classList.add(e))}setStyle(e){if(e!==void 0){this.style=e;for(let[l,t]of Object.entries(this.style)){let s=document.getElementById(this.viewID.toString()).getElementsByClassName(l)[0];if(s!==void 0)for(let a of t)s.style.setProperty(a[0],a[1])}}}setActionText(e){if(e===void 0)return;this.actionText=e;let l=this.view.getElementsByClassName("actionButton")[0];l.style.setProperty("display","block"),l.value=this.actionText}setActionCallback(e){this.onAction=e,this.view.getElementsByClassName("actionButton")[0].addEventListener("click",()=>{this.onAction!==void 0&&this.onAction(),this.hide()})}show(){setTimeout(()=>{c.List.push(this),c.adjustListPositions(this)},10)}addHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(function(l){window.addEventListener(l,e.hideEventHandler)})}removeHideEventListener(){let e=this;"mousemove mousedown mouseup touchmove click keydown keyup scroll".split(" ").forEach(l=>{window.removeEventListener(l,e.hideEventHandler)})}handleHideEvent(){let e=this.timeout;Date.now()-this.bornTime>this.timeout&&(e=this.timeout/2),this.startHidingTimer(e),this.removeHideEventListener()}startHidingTimer(e){e>0&&!this.isWaitingForHide&&(this.isWaitingForHide=!0,setTimeout(()=>{this.hide()},e))}hide(){let e=this;c.List.filter(n=>n.position===this.position).length>1?(this.view.style.opacity="0",this.position.indexOf("bottom")>=0?this.view.style.marginBottom="-"+(this.getHeight()+5)+"px":this.view.style.marginTop="-"+(this.getHeight()+5)+"px"):this.position.indexOf("bottom")>=0?this.view.style.bottom="-"+(this.getHeight()+15)+"px":this.view.style.top="-"+(this.getHeight()+15)+"px";let t=c.List.indexOf(this);t>-1&&c.List.splice(t,1),c.adjustListPositions(this),setTimeout(function(){e.view.remove(),e.afterHide!==void 0&&e.afterHide()},500)}static adjustListPositions(e){let l=c.List.filter(t=>t.position===e.position);l.forEach(function(t,n){let s=20+(l.length-n-1)*(t.getHeight()+5)+"px";e.position.indexOf("bottom")>=0?(t.view.style.bottom=s,t.view.style.top="unset"):(t.view.style.top=s,t.view.style.bottom="unset")})}getHeight(){return+getComputedStyle(this.view).height.replace("px","")}};T1.default=h2;h2.List=[];h2.DEFAULT_HIDING_TIMEOUT=4e3;h2.DEFAULT_POSITION="bottom-left";var C8=`
.snackbar {
    z-index: 999999995;
    position: fixed;
    transition: top 400ms ease 0s, bottom 400ms ease 0s, margin-top 300ms ease 0s, margin-bottom 300ms ease 0s, opacity 150ms ease 150ms;
  }
  .snackbar > .container {
    box-sizing: border-box;
    max-width: 450px;
    min-height: 46px;
    padding: 9px 20px 10px 20px;
    border-radius: 3px;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    display: flex;
    color: rgb(250, 250, 250);
    align-items: center;
    gap: 10px;
    transition: all 150ms ease-in-out;
  }
  .snackbar > .container * {
    box-sizing: border-box;
  }
  .snackbar > .container > .icon {
    width: 20px;
    height: 20px;
    margin-left: -3px;
    margin-right: -2px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    display: none;
  }
  .snackbar > .container > .message {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
  }
  .snackbar > .container > .actionButton {
    padding: 5px 3px;
    background-color: transparent;
    font-size: 0.9375rem;
    line-height: 0.9375rem;
    color: #F7FF00;
    border: none;
    outline: none;
    cursor: pointer;
    display: none;
  }
  
  .snackbar.bottom-left {
    left: 24px;
    bottom: -60px;
  }
  
  .snackbar.bottom-center {
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.bottom-right {
    right: 24px;
    bottom: -60px;
  }
  
  .snackbar.top-left {
    left: 24px;
    top: -60px;
  }
  
  .snackbar.top-center {
    left: 50%;
    top: -60px;
    transform: translate(-50%, 0);
  }
  
  .snackbar.top-right {
    right: 24px;
    top: -60px;
  }
  
  .snackbar.light > .container {
    background-color: #fbfbfb;
    color: #555;
  }
  .snackbar.light > .container > .actionButton {
    color: #D60;
  }
  
  @media only screen and (max-width: 500px) {
    .snackbar {
      max-width: calc(100% - 48px);
    }
    .snackbar.top-center,
  .snackbar.bottom-center {
      width: calc(100% - 24px);
      max-width: unset;
      left: 12px;
      transform: translate(0, 0);
      display: flex;
      justify-content: center;
    }
  }
`});var J2=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-home"]],standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"text-center"]],template:function(n,s){n&1&&(o(0,"h1",0),d(1,"This is Home Component"),r())}});let c=e;return c})();var z3=(()=>{let e=class e{constructor(t,n){this.router=t,this.location=n,this.pageHasChanges=!0}};e.\u0275fac=function(n){return new(n||e)(w(f3),w(e3))},e.\u0275cmp=g({type:e,selectors:[["app-aboutus"]],standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"text-center"]],template:function(n,s){n&1&&(o(0,"h1",0),d(1,"This is About Us Component"),r())}});let c=e;return c})();var Q4=()=>[import("./chunk-5FOX2PT4.js").then(c=>c.LargeComponent)];function J4(c,e){c&1&&k(0,"app-large")}function Z4(c,e){c&1&&(o(0,"p"),d(1,"Placeholder content"),r())}var L3=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-careers"]],standalone:!0,features:[h],decls:15,vars:0,consts:[[500],[1,"text-center"],[1,"row"],[1,"col-sm-3"],["routerLink","permanent",1,"nav-link"],["routerLink","contract",1,"nav-link"],[1,"col-sm-9"]],template:function(n,s){n&1&&(o(0,"h2",1),d(1,"This is Careers Component"),r(),k(2,"hr"),o(3,"div",2)(4,"div",3)(5,"a",4),d(6,"Permanent Jobs"),r(),o(7,"a",5),d(8,"Contract Jobs"),r()(),o(9,"div",6),$(10,J4,1,0)(11,Z4,2,0),U1(12,10,Q4,null,11,null,null,0,V1),q1(),k(14,"router-outlet"),r()())},dependencies:[r3,z2]});let c=e;return c})();var u3=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-notfound"]],standalone:!0,features:[h],decls:2,vars:0,template:function(n,s){n&1&&(o(0,"p"),d(1,"notfound works!"),r())}});let c=e;return c})();var Z2={};X4(Z2,{default:()=>c1});var c1=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];var M3=()=>{},x1={},V3={},U3=null,q3={mark:M3,measure:M3};try{typeof window<"u"&&(x1=window),typeof document<"u"&&(V3=document),typeof MutationObserver<"u"&&(U3=MutationObserver),typeof performance<"u"&&(q3=performance)}catch{}var{userAgent:C3=""}=x1.navigator||{},c2=x1,x=V3,g3=U3,V2=q3,k8=!!c2.document,K=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",j3=~C3.indexOf("MSIE")||~C3.indexOf("Trident/"),b="classic",W3="duotone",P="sharp",T="sharp-duotone",e0=[b,W3,P,T],l0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},h3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},t0=["kit"],n0=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,s0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,a0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},i0={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},o0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},r0={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},f0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},m0={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},G3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},p0=["solid","regular","light","thin","duotone","brands"],$3=[1,2,3,4,5,6,7,8,9,10],d0=$3.concat([11,12,13,14,15,16,17,18,19,20]),v2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z0=[...Object.keys(r0),...p0,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",v2.GROUP,v2.SWAP_OPACITY,v2.PRIMARY,v2.SECONDARY].concat($3.map(c=>"".concat(c,"x"))).concat(d0.map(c=>"w-".concat(c))),L0={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},u0={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},M0={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},x3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},X="___FONT_AWESOME___",a1=16,X3="fa",Y3="svg-inline--fa",o2="data-fa-i2svg",i1="data-fa-pseudo-element",C0="data-fa-pseudo-element-pending",b1="data-prefix",N1="data-icon",b3="fontawesome-i2svg",g0="async",h0=["HTML","HEAD","STYLE","SCRIPT"],K3=(()=>{try{return!0}catch{return!1}})(),Q3=[b,P,T];function _2(c){return new Proxy(c,{get(e,l){return l in e?e[l]:e[b]}})}var J3=p({},G3);J3[b]=p(p(p({},G3[b]),h3.kit),h3["kit-duotone"]);var a2=_2(J3),o1=p({},m0);o1[b]=p(p(p({},o1[b]),x3.kit),x3["kit-duotone"]);var A2=_2(o1),r1=p({},f0);r1[b]=p(p({},r1[b]),M0.kit);var i2=_2(r1),f1=p({},o0);f1[b]=p(p({},f1[b]),u0.kit);var x0=_2(f1),b0=n0,Z3="fa-layers-text",N0=s0,y0=p({},l0),A8=_2(y0),v0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],e1=v2,M2=new Set;Object.keys(A2[b]).map(M2.add.bind(M2));Object.keys(A2[P]).map(M2.add.bind(M2));Object.keys(A2[T]).map(M2.add.bind(M2));var S0=[...t0,...z0],w2=c2.FontAwesomeConfig||{};function w0(c){var e=x.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function k0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[l,t]=e,n=k0(w0(l));n!=null&&(w2[t]=n)});var c4={styleDefault:"solid",familyDefault:"classic",cssPrefix:X3,replacementClass:Y3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};w2.familyPrefix&&(w2.cssPrefix=w2.familyPrefix);var C2=p(p({},c4),w2);C2.autoReplaceSvg||(C2.observeMutations=!1);var z={};Object.keys(c4).forEach(c=>{Object.defineProperty(z,c,{enumerable:!0,set:function(e){C2[c]=e,k2.forEach(l=>l(z))},get:function(){return C2[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(c){C2.cssPrefix=c,k2.forEach(e=>e(z))},get:function(){return C2.cssPrefix}});c2.FontAwesomeConfig=z;var k2=[];function A0(c){return k2.push(c),()=>{k2.splice(k2.indexOf(c),1)}}var J=a1,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function E0(c){if(!c||!K)return;let e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;let l=x.head.childNodes,t=null;for(let n=l.length-1;n>-1;n--){let s=l[n],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(t=s)}return x.head.insertBefore(e,t),c}var _0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E2(){let c=12,e="";for(;c-- >0;)e+=_0[Math.random()*62|0];return e}function g2(c){let e=[];for(let l=(c||[]).length>>>0;l--;)e[l]=c[l];return e}function y1(c){return c.classList?g2(c.classList):(c.getAttribute("class")||"").split(" ").filter(e=>e)}function e4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function D0(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,'="').concat(e4(c[l]),'" '),"").trim()}function G2(c){return Object.keys(c||{}).reduce((e,l)=>e+"".concat(l,": ").concat(c[l].trim(),";"),"")}function v1(c){return c.size!==U.size||c.x!==U.x||c.y!==U.y||c.rotate!==U.rotate||c.flipX||c.flipY}function P0(c){let{transform:e,containerWidth:l,iconWidth:t}=c,n={transform:"translate(".concat(l/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(s," ").concat(a," ").concat(i)},m={transform:"translate(".concat(t/2*-1," -256)")};return{outer:n,inner:f,path:m}}function T0(c){let{transform:e,width:l=a1,height:t=a1,startCentered:n=!1}=c,s="";return n&&j3?s+="translate(".concat(e.x/J-l/2,"em, ").concat(e.y/J-t/2,"em) "):n?s+="translate(calc(-50% + ".concat(e.x/J,"em), calc(-50% + ").concat(e.y/J,"em)) "):s+="translate(".concat(e.x/J,"em, ").concat(e.y/J,"em) "),s+="scale(".concat(e.size/J*(e.flipX?-1:1),", ").concat(e.size/J*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var F0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
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
}`;function l4(){let c=X3,e=Y3,l=z.cssPrefix,t=z.replacementClass,n=F0;if(l!==c||t!==e){let s=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");n=n.replace(s,".".concat(l,"-")).replace(a,"--".concat(l,"-")).replace(i,".".concat(t))}return n}var N3=!1;function l1(){z.autoAddCss&&!N3&&(E0(l4()),N3=!0)}var I0={mixout(){return{dom:{css:l4,insertCss:l1}}},hooks(){return{beforeDOMElementCreation(){l1()},beforeI2svg(){l1()}}}},Y=c2||{};Y[X]||(Y[X]={});Y[X].styles||(Y[X].styles={});Y[X].hooks||(Y[X].hooks={});Y[X].shims||(Y[X].shims=[]);var q=Y[X],t4=[],n4=function(){x.removeEventListener("DOMContentLoaded",n4),j2=1,t4.map(c=>c())},j2=!1;K&&(j2=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),j2||x.addEventListener("DOMContentLoaded",n4));function B0(c){K&&(j2?setTimeout(c,0):t4.push(c))}function D2(c){let{tag:e,attributes:l={},children:t=[]}=c;return typeof c=="string"?e4(c):"<".concat(e," ").concat(D0(l),">").concat(t.map(D2).join(""),"</").concat(e,">")}function y3(c,e,l){if(c&&c[e]&&c[e][l])return{prefix:e,iconName:l,icon:c[e][l]}}var H0=function(e,l){return function(t,n,s,a){return e.call(l,t,n,s,a)}},t1=function(e,l,t,n){var s=Object.keys(e),a=s.length,i=n!==void 0?H0(l,n):l,f,m,u;for(t===void 0?(f=1,u=e[s[0]]):(f=0,u=t);f<a;f++)m=s[f],u=i(u,e[m],m,e);return u};function R0(c){let e=[],l=0,t=c.length;for(;l<t;){let n=c.charCodeAt(l++);if(n>=55296&&n<=56319&&l<t){let s=c.charCodeAt(l++);(s&64512)==56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),l--)}else e.push(n)}return e}function m1(c){let e=R0(c);return e.length===1?e[0].toString(16):null}function O0(c,e){let l=c.length,t=c.charCodeAt(e),n;return t>=55296&&t<=56319&&l>e+1&&(n=c.charCodeAt(e+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function v3(c){return Object.keys(c).reduce((e,l)=>{let t=c[l];return!!t.icon?e[t.iconName]=t.icon:e[l]=t,e},{})}function p1(c,e){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:t=!1}=l,n=v3(e);typeof q.hooks.addPack=="function"&&!t?q.hooks.addPack(c,v3(e)):q.styles[c]=p(p({},q.styles[c]||{}),n),c==="fas"&&p1("fa",e)}var{styles:s2,shims:V0}=q,U0={[b]:Object.values(i2[b]),[P]:Object.values(i2[P]),[T]:Object.values(i2[T])},S1=null,s4={},a4={},i4={},o4={},r4={},q0={[b]:Object.keys(a2[b]),[P]:Object.keys(a2[P]),[T]:Object.keys(a2[T])};function j0(c){return~S0.indexOf(c)}function W0(c,e){let l=e.split("-"),t=l[0],n=l.slice(1).join("-");return t===c&&n!==""&&!j0(n)?n:null}var f4=()=>{let c=t=>t1(s2,(n,s,a)=>(n[a]=t1(s,t,{}),n),{});s4=c((t,n,s)=>(n[3]&&(t[n[3]]=s),n[2]&&n[2].filter(i=>typeof i=="number").forEach(i=>{t[i.toString(16)]=s}),t)),a4=c((t,n,s)=>(t[s]=s,n[2]&&n[2].filter(i=>typeof i=="string").forEach(i=>{t[i]=s}),t)),r4=c((t,n,s)=>{let a=n[2];return t[s]=s,a.forEach(i=>{t[i]=s}),t});let e="far"in s2||z.autoFetchSvg,l=t1(V0,(t,n)=>{let s=n[0],a=n[1],i=n[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(t.names[s]={prefix:a,iconName:i}),typeof s=="number"&&(t.unicodes[s.toString(16)]={prefix:a,iconName:i}),t},{names:{},unicodes:{}});i4=l.names,o4=l.unicodes,S1=$2(z.styleDefault,{family:z.familyDefault})};A0(c=>{S1=$2(c.styleDefault,{family:z.familyDefault})});f4();function w1(c,e){return(s4[c]||{})[e]}function G0(c,e){return(a4[c]||{})[e]}function Z(c,e){return(r4[c]||{})[e]}function m4(c){return i4[c]||{prefix:null,iconName:null}}function $0(c){let e=o4[c],l=w1("fas",c);return e||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function e2(){return S1}var k1=()=>({prefix:null,iconName:null,rest:[]});function $2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=b}=e,t=a2[l][c],n=A2[l][c]||A2[l][t],s=c in q.styles?c:null;return n||s||null}var X0={[b]:Object.keys(i2[b]),[P]:Object.keys(i2[P]),[T]:Object.keys(i2[T])};function X2(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=e,t={[b]:"".concat(z.cssPrefix,"-").concat(b),[P]:"".concat(z.cssPrefix,"-").concat(P),[T]:"".concat(z.cssPrefix,"-").concat(T)},n=null,s=b,a=e0.filter(f=>f!==W3);a.forEach(f=>{(c.includes(t[f])||c.some(m=>X0[f].includes(m)))&&(s=f)});let i=c.reduce((f,m)=>{let u=W0(z.cssPrefix,m);if(s2[m]?(m=U0[s].includes(m)?x0[s][m]:m,n=m,f.prefix=m):q0[s].indexOf(m)>-1?(n=m,f.prefix=$2(m,{family:s})):u?f.iconName=u:m!==z.replacementClass&&!a.some(C=>m===t[C])&&f.rest.push(m),!l&&f.prefix&&f.iconName){let C=n==="fa"?m4(f.iconName):{},M=Z(f.prefix,f.iconName);C.prefix&&(n=null),f.iconName=C.iconName||M||f.iconName,f.prefix=C.prefix||f.prefix,f.prefix==="far"&&!s2.far&&s2.fas&&!z.autoFetchSvg&&(f.prefix="fas")}return f},k1());return(c.includes("fa-brands")||c.includes("fab"))&&(i.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(i.prefix="fad"),!i.prefix&&s===P&&(s2.fass||z.autoFetchSvg)&&(i.prefix="fass",i.iconName=Z(i.prefix,i.iconName)||i.iconName),!i.prefix&&s===T&&(s2.fasds||z.autoFetchSvg)&&(i.prefix="fasds",i.iconName=Z(i.prefix,i.iconName)||i.iconName),(i.prefix==="fa"||n==="fa")&&(i.prefix=e2()||"fas"),i}var d1=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];let n=l.reduce(this._pullDefinitions,{});Object.keys(n).forEach(s=>{this.definitions[s]=p(p({},this.definitions[s]||{}),n[s]),p1(s,n[s]);let a=i2[b][s];a&&p1(a,n[s]),f4()})}reset(){this.definitions={}}_pullDefinitions(e,l){let t=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(t).map(n=>{let{prefix:s,iconName:a,icon:i}=t[n],f=i[2];e[s]||(e[s]={}),f.length>0&&f.forEach(m=>{typeof m=="string"&&(e[s][m]=i)}),e[s][a]=i}),e}},S3=[],L2={},u2={},Y0=Object.keys(u2);function K0(c,e){let{mixoutsTo:l}=e;return S3=c,L2={},Object.keys(u2).forEach(t=>{Y0.indexOf(t)===-1&&delete u2[t]}),S3.forEach(t=>{let n=t.mixout?t.mixout():{};if(Object.keys(n).forEach(s=>{typeof n[s]=="function"&&(l[s]=n[s]),typeof n[s]=="object"&&Object.keys(n[s]).forEach(a=>{l[s]||(l[s]={}),l[s][a]=n[s][a]})}),t.hooks){let s=t.hooks();Object.keys(s).forEach(a=>{L2[a]||(L2[a]=[]),L2[a].push(s[a])})}t.provides&&t.provides(u2)}),l}function z1(c,e){for(var l=arguments.length,t=new Array(l>2?l-2:0),n=2;n<l;n++)t[n-2]=arguments[n];return(L2[c]||[]).forEach(a=>{e=a.apply(null,[e,...t])}),e}function r2(c){for(var e=arguments.length,l=new Array(e>1?e-1:0),t=1;t<e;t++)l[t-1]=arguments[t];(L2[c]||[]).forEach(s=>{s.apply(null,l)})}function l2(){let c=arguments[0],e=Array.prototype.slice.call(arguments,1);return u2[c]?u2[c].apply(null,e):void 0}function L1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:e}=c,l=c.prefix||e2();if(e)return e=Z(l,e)||e,y3(p4.definitions,l,e)||y3(q.styles,l,e)}var p4=new d1,Q0=()=>{z.autoReplaceSvg=!1,z.observeMutations=!1,r2("noAuto")},J0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return K?(r2("beforeI2svg",c),l2("pseudoElements2svg",c),l2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=c;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,B0(()=>{c6({autoReplaceSvgRoot:e}),r2("watch",c)})}},Z0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Z(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let e=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=$2(c[0]);return{prefix:l,iconName:Z(l,e)||e}}if(typeof c=="string"&&(c.indexOf("".concat(z.cssPrefix,"-"))>-1||c.match(b0))){let e=X2(c.split(" "),{skipLookups:!0});return{prefix:e.prefix||e2(),iconName:Z(e.prefix,e.iconName)||e.iconName}}if(typeof c=="string"){let e=e2();return{prefix:e,iconName:Z(e,c)||c}}}},F={noAuto:Q0,config:z,dom:J0,parse:Z0,library:p4,findIconDefinition:L1,toHtml:D2},c6=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=x}=c;(Object.keys(q.styles).length>0||z.autoFetchSvg)&&K&&z.autoReplaceSvg&&F.dom.i2svg({node:e})};function Y2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>D2(l))}}),Object.defineProperty(c,"node",{get:function(){if(!K)return;let l=x.createElement("div");return l.innerHTML=c.html,l.children}}),c}function e6(c){let{children:e,main:l,mask:t,attributes:n,styles:s,transform:a}=c;if(v1(a)&&l.found&&!t.found){let{width:i,height:f}=l,m={x:i/f/2,y:.5};n.style=G2(S(p({},s),{"transform-origin":"".concat(m.x+a.x/16,"em ").concat(m.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:e}]}function l6(c){let{prefix:e,iconName:l,children:t,attributes:n,symbol:s}=c,a=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(l):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(p({},n),{id:a}),children:t}]}]}function A1(c){let{icons:{main:e,mask:l},prefix:t,iconName:n,transform:s,symbol:a,title:i,maskId:f,titleId:m,extra:u,watchable:C=!1}=c,{width:M,height:v}=l.found?l:e,I=t==="fak",O=[z.replacementClass,n?"".concat(z.cssPrefix,"-").concat(n):""].filter(m2=>u.classes.indexOf(m2)===-1).filter(m2=>m2!==""||!!m2).concat(u.classes).join(" "),_={children:[],attributes:S(p({},u.attributes),{"data-prefix":t,"data-icon":n,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(v)})},H=I&&!~u.classes.indexOf("fa-fw")?{width:"".concat(M/v*16*.0625,"em")}:{};C&&(_.attributes[o2]=""),i&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(m||E2())},children:[i]}),delete _.attributes.title);let D=S(p({},_),{prefix:t,iconName:n,main:e,mask:l,maskId:f,transform:s,symbol:a,styles:p(p({},H),u.styles)}),{children:R,attributes:f2}=l.found&&e.found?l2("generateAbstractMask",D)||{children:[],attributes:{}}:l2("generateAbstractIcon",D)||{children:[],attributes:{}};return D.children=R,D.attributes=f2,a?l6(D):e6(D)}function w3(c){let{content:e,width:l,height:t,transform:n,title:s,extra:a,watchable:i=!1}=c,f=S(p(p({},a.attributes),s?{title:s}:{}),{class:a.classes.join(" ")});i&&(f[o2]="");let m=p({},a.styles);v1(n)&&(m.transform=T0({transform:n,startCentered:!0,width:l,height:t}),m["-webkit-transform"]=m.transform);let u=G2(m);u.length>0&&(f.style=u);let C=[];return C.push({tag:"span",attributes:f,children:[e]}),s&&C.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),C}function t6(c){let{content:e,title:l,extra:t}=c,n=S(p(p({},t.attributes),l?{title:l}:{}),{class:t.classes.join(" ")}),s=G2(t.styles);s.length>0&&(n.style=s);let a=[];return a.push({tag:"span",attributes:n,children:[e]}),l&&a.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),a}var{styles:n1}=q;function u1(c){let e=c[0],l=c[1],[t]=c.slice(4),n=null;return Array.isArray(t)?n={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(e1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(e1.SECONDARY),fill:"currentColor",d:t[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(e1.PRIMARY),fill:"currentColor",d:t[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:t}},{found:!0,width:e,height:l,icon:n}}var n6={found:!1,width:512,height:512};function s6(c,e){!K3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function M1(c,e){let l=e;return e==="fa"&&z.styleDefault!==null&&(e=e2()),new Promise((t,n)=>{if(l==="fa"){let s=m4(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&n1[e]&&n1[e][c]){let s=n1[e][c];return t(u1(s))}s6(c,e),t(S(p({},n6),{icon:z.showMissingIcons&&c?l2("missingIconAbstract")||{}:{}}))})}var k3=()=>{},C1=z.measurePerformance&&V2&&V2.mark&&V2.measure?V2:{mark:k3,measure:k3},S2='FA "6.6.0"',a6=c=>(C1.mark("".concat(S2," ").concat(c," begins")),()=>d4(c)),d4=c=>{C1.mark("".concat(S2," ").concat(c," ends")),C1.measure("".concat(S2," ").concat(c),"".concat(S2," ").concat(c," begins"),"".concat(S2," ").concat(c," ends"))},E1={begin:a6,end:d4},U2=()=>{};function A3(c){return typeof(c.getAttribute?c.getAttribute(o2):null)=="string"}function i6(c){let e=c.getAttribute?c.getAttribute(b1):null,l=c.getAttribute?c.getAttribute(N1):null;return e&&l}function o6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function r6(){return z.autoReplaceSvg===!0?q2.replace:q2[z.autoReplaceSvg]||q2.replace}function f6(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function m6(c){return x.createElement(c)}function z4(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?f6:m6}=e;if(typeof c=="string")return x.createTextNode(c);let t=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(s){t.setAttribute(s,c.attributes[s])}),(c.children||[]).forEach(function(s){t.appendChild(z4(s,{ceFn:l}))}),t}function p6(c){let e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var q2={replace:function(c){let e=c[0];if(e.parentNode)if(c[1].forEach(l=>{e.parentNode.insertBefore(z4(l),e)}),e.getAttribute(o2)===null&&z.keepOriginalSource){let l=x.createComment(p6(e));e.parentNode.replaceChild(l,e)}else e.remove()},nest:function(c){let e=c[0],l=c[1];if(~y1(e).indexOf(z.replacementClass))return q2.replace(c);let t=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let s=l[0].attributes.class.split(" ").reduce((a,i)=>(i===z.replacementClass||i.match(t)?a.toSvg.push(i):a.toNode.push(i),a),{toNode:[],toSvg:[]});l[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}let n=l.map(s=>D2(s)).join(`
`);e.setAttribute(o2,""),e.innerHTML=n}};function E3(c){c()}function L4(c,e){let l=typeof e=="function"?e:U2;if(c.length===0)l();else{let t=E3;z.mutateApproach===g0&&(t=c2.requestAnimationFrame||E3),t(()=>{let n=r6(),s=E1.begin("mutate");c.map(n),s(),l()})}}var _1=!1;function u4(){_1=!0}function g1(){_1=!1}var W2=null;function _3(c){if(!g3||!z.observeMutations)return;let{treeCallback:e=U2,nodeCallback:l=U2,pseudoElementsCallback:t=U2,observeMutationsRoot:n=x}=c;W2=new g3(s=>{if(_1)return;let a=e2();g2(s).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!A3(i.addedNodes[0])&&(z.searchPseudoElements&&t(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&z.searchPseudoElements&&t(i.target.parentNode),i.type==="attributes"&&A3(i.target)&&~v0.indexOf(i.attributeName))if(i.attributeName==="class"&&i6(i.target)){let{prefix:f,iconName:m}=X2(y1(i.target));i.target.setAttribute(b1,f||a),m&&i.target.setAttribute(N1,m)}else o6(i.target)&&l(i.target)})}),K&&W2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function d6(){W2&&W2.disconnect()}function z6(c){let e=c.getAttribute("style"),l=[];return e&&(l=e.split(";").reduce((t,n)=>{let s=n.split(":"),a=s[0],i=s.slice(1);return a&&i.length>0&&(t[a]=i.join(":").trim()),t},{})),l}function L6(c){let e=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),t=c.innerText!==void 0?c.innerText.trim():"",n=X2(y1(c));return n.prefix||(n.prefix=e2()),e&&l&&(n.prefix=e,n.iconName=l),n.iconName&&n.prefix||(n.prefix&&t.length>0&&(n.iconName=G0(n.prefix,c.innerText)||w1(n.prefix,m1(c.innerText))),!n.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function u6(c){let e=g2(c.attributes).reduce((n,s)=>(n.name!=="class"&&n.name!=="style"&&(n[s.name]=s.value),n),{}),l=c.getAttribute("title"),t=c.getAttribute("data-fa-title-id");return z.autoA11y&&(l?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(t||E2()):(e["aria-hidden"]="true",e.focusable="false")),e}function M6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function D3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:t,rest:n}=L6(c),s=u6(c),a=z1("parseNodeAttributes",{},c),i=e.styleParser?z6(c):[];return p({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:t,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:i,attributes:s}},a)}var{styles:C6}=q;function M4(c){let e=z.autoReplaceSvg==="nest"?D3(c,{styleParser:!1}):D3(c);return~e.extra.classes.indexOf(Z3)?l2("generateLayersText",c,e):l2("generateSvgReplacementMutation",c,e)}var j=new Set;Q3.map(c=>{j.add("fa-".concat(c))});Object.keys(a2[b]).map(j.add.bind(j));Object.keys(a2[P]).map(j.add.bind(j));Object.keys(a2[T]).map(j.add.bind(j));j=[...j];function P3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!K)return Promise.resolve();let l=x.documentElement.classList,t=u=>l.add("".concat(b3,"-").concat(u)),n=u=>l.remove("".concat(b3,"-").concat(u)),s=z.autoFetchSvg?j:Q3.map(u=>"fa-".concat(u)).concat(Object.keys(C6));s.includes("fa")||s.push("fa");let a=[".".concat(Z3,":not([").concat(o2,"])")].concat(s.map(u=>".".concat(u,":not([").concat(o2,"])"))).join(", ");if(a.length===0)return Promise.resolve();let i=[];try{i=g2(c.querySelectorAll(a))}catch{}if(i.length>0)t("pending"),n("complete");else return Promise.resolve();let f=E1.begin("onTree"),m=i.reduce((u,C)=>{try{let M=M4(C);M&&u.push(M)}catch(M){K3||M.name==="MissingIcon"&&console.error(M)}return u},[]);return new Promise((u,C)=>{Promise.all(m).then(M=>{L4(M,()=>{t("active"),t("complete"),n("pending"),typeof e=="function"&&e(),f(),u()})}).catch(M=>{f(),C(M)})})}function g6(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M4(c).then(l=>{l&&L4([l],e)})}function h6(c){return function(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:L1(e||{}),{mask:n}=l;return n&&(n=(n||{}).icon?n:L1(n||{})),c(t,S(p({},l),{mask:n}))}}var x6=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=U,symbol:t=!1,mask:n=null,maskId:s=null,title:a=null,titleId:i=null,classes:f=[],attributes:m={},styles:u={}}=e;if(!c)return;let{prefix:C,iconName:M,icon:v}=c;return Y2(p({type:"icon"},c),()=>(r2("beforeDOMElementCreation",{iconDefinition:c,params:e}),z.autoA11y&&(a?m["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(i||E2()):(m["aria-hidden"]="true",m.focusable="false")),A1({icons:{main:u1(v),mask:n?u1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:M,transform:p(p({},U),l),symbol:t,title:a,maskId:s,titleId:i,extra:{attributes:m,styles:u,classes:f}})))},b6={mixout(){return{icon:h6(x6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=P3,c.nodeCallback=g6,c}}},provides(c){c.i2svg=function(e){let{node:l=x,callback:t=()=>{}}=e;return P3(l,t)},c.generateSvgReplacementMutation=function(e,l){let{iconName:t,title:n,titleId:s,prefix:a,transform:i,symbol:f,mask:m,maskId:u,extra:C}=l;return new Promise((M,v)=>{Promise.all([M1(t,a),m.iconName?M1(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(I=>{let[O,_]=I;M([e,A1({icons:{main:O,mask:_},prefix:a,iconName:t,transform:i,symbol:f,maskId:u,title:n,titleId:s,extra:C,watchable:!0})])}).catch(v)})},c.generateAbstractIcon=function(e){let{children:l,attributes:t,main:n,transform:s,styles:a}=e,i=G2(a);i.length>0&&(t.style=i);let f;return v1(s)&&(f=l2("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),l.push(f||n.icon),{children:l,attributes:t}}}},N6={mixout(){return{layer(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=e;return Y2({type:"layer"},()=>{r2("beforeDOMElementCreation",{assembler:c,params:e});let t=[];return c(n=>{Array.isArray(n)?n.map(s=>{t=t.concat(s.abstract)}):t=t.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers"),...l].join(" ")},children:t}]})}}}},y6={mixout(){return{counter(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:t=[],attributes:n={},styles:s={}}=e;return Y2({type:"counter",content:c},()=>(r2("beforeDOMElementCreation",{content:c,params:e}),t6({content:c.toString(),title:l,extra:{attributes:n,styles:s,classes:["".concat(z.cssPrefix,"-layers-counter"),...t]}})))}}}},v6={mixout(){return{text(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=U,title:t=null,classes:n=[],attributes:s={},styles:a={}}=e;return Y2({type:"text",content:c},()=>(r2("beforeDOMElementCreation",{content:c,params:e}),w3({content:c,transform:p(p({},U),l),title:t,extra:{attributes:s,styles:a,classes:["".concat(z.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(e,l){let{title:t,transform:n,extra:s}=l,a=null,i=null;if(j3){let f=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();a=m.width/f,i=m.height/f}return z.autoA11y&&!t&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,w3({content:e.innerHTML,width:a,height:i,transform:n,title:t,extra:s,watchable:!0})])}}},S6=new RegExp('"',"ug"),T3=[1105920,1112319],F3=p(p(p({FontAwesome:{normal:"fas",400:"fas"}},i0),a0),L0),h1=Object.keys(F3).reduce((c,e)=>(c[e.toLowerCase()]=F3[e],c),{}),w6=Object.keys(h1).reduce((c,e)=>{let l=h1[e];return c[e]=l[900]||[...Object.entries(l)][0][1],c},{});function k6(c){let e=c.replace(S6,""),l=O0(e,0),t=l>=T3[0]&&l<=T3[1],n=e.length===2?e[0]===e[1]:!1;return{value:m1(n?e[0]:e),isSecondary:t||n}}function A6(c,e){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(e),n=isNaN(t)?"normal":t;return(h1[l]||{})[n]||w6[l]}function I3(c,e){let l="".concat(C0).concat(e.replace(":","-"));return new Promise((t,n)=>{if(c.getAttribute(l)!==null)return t();let a=g2(c.children).filter(M=>M.getAttribute(i1)===e)[0],i=c2.getComputedStyle(c,e),f=i.getPropertyValue("font-family"),m=f.match(N0),u=i.getPropertyValue("font-weight"),C=i.getPropertyValue("content");if(a&&!m)return c.removeChild(a),t();if(m&&C!=="none"&&C!==""){let M=i.getPropertyValue("content"),v=A6(f,u),{value:I,isSecondary:O}=k6(M),_=m[0].startsWith("FontAwesome"),H=w1(v,I),D=H;if(_){let R=$0(I);R.iconName&&R.prefix&&(H=R.iconName,v=R.prefix)}if(H&&!O&&(!a||a.getAttribute(b1)!==v||a.getAttribute(N1)!==D)){c.setAttribute(l,D),a&&c.removeChild(a);let R=M6(),{extra:f2}=R;f2.attributes[i1]=e,M1(H,v).then(m2=>{let W4=A1(S(p({},R),{icons:{main:m2,mask:k1()},prefix:v,iconName:D,extra:f2,watchable:!0})),K2=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(K2,c.firstChild):c.appendChild(K2),K2.outerHTML=W4.map(G4=>D2(G4)).join(`
`),c.removeAttribute(l),t()}).catch(n)}else t()}else t()})}function E6(c){return Promise.all([I3(c,"::before"),I3(c,"::after")])}function _6(c){return c.parentNode!==document.head&&!~h0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(i1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function B3(c){if(K)return new Promise((e,l)=>{let t=g2(c.querySelectorAll("*")).filter(_6).map(E6),n=E1.begin("searchPseudoElements");u4(),Promise.all(t).then(()=>{n(),g1(),e()}).catch(()=>{n(),g1(),l()})})}var D6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=B3,c}}},provides(c){c.pseudoElements2svg=function(e){let{node:l=x}=e;z.searchPseudoElements&&B3(l)}}},H3=!1,P6={mixout(){return{dom:{unwatch(){u4(),H3=!0}}}},hooks(){return{bootstrap(){_3(z1("mutationObserverCallbacks",{}))},noAuto(){d6()},watch(c){let{observeMutationsRoot:e}=c;H3?g1():_3(z1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},R3=c=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,t)=>{let n=t.toLowerCase().split("-"),s=n[0],a=n.slice(1).join("-");if(s&&a==="h")return l.flipX=!0,l;if(s&&a==="v")return l.flipY=!0,l;if(a=parseFloat(a),isNaN(a))return l;switch(s){case"grow":l.size=l.size+a;break;case"shrink":l.size=l.size-a;break;case"left":l.x=l.x-a;break;case"right":l.x=l.x+a;break;case"up":l.y=l.y-a;break;case"down":l.y=l.y+a;break;case"rotate":l.rotate=l.rotate+a;break}return l},e)},T6={mixout(){return{parse:{transform:c=>R3(c)}}},hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-transform");return l&&(c.transform=R3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(e){let{main:l,transform:t,containerWidth:n,iconWidth:s}=e,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),f="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(i," ").concat(f," ").concat(m)},C={transform:"translate(".concat(s/2*-1," -256)")},M={outer:a,inner:u,path:C};return{tag:"g",attributes:p({},M.outer),children:[{tag:"g",attributes:p({},M.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:p(p({},l.icon.attributes),M.path)}]}]}}}},s1={x:0,y:0,width:"100%",height:"100%"};function O3(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function F6(c){return c.tag==="g"?c.children:[c]}var I6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-mask"),t=l?X2(l.split(" ").map(n=>n.trim())):k1();return t.prefix||(t.prefix=e2()),c.mask=t,c.maskId=e.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(e){let{children:l,attributes:t,main:n,mask:s,maskId:a,transform:i}=e,{width:f,icon:m}=n,{width:u,icon:C}=s,M=P0({transform:i,containerWidth:u,iconWidth:f}),v={tag:"rect",attributes:S(p({},s1),{fill:"white"})},I=m.children?{children:m.children.map(O3)}:{},O={tag:"g",attributes:p({},M.inner),children:[O3(p({tag:m.tag,attributes:p(p({},m.attributes),M.path)},I))]},_={tag:"g",attributes:p({},M.outer),children:[O]},H="mask-".concat(a||E2()),D="clip-".concat(a||E2()),R={tag:"mask",attributes:S(p({},s1),{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,_]},f2={tag:"defs",children:[{tag:"clipPath",attributes:{id:D},children:F6(C)},R]};return l.push(f2,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(D,")"),mask:"url(#".concat(H,")")},s1)}),{children:l,attributes:t}}}},B6={provides(c){let e=!1;c2.matchMedia&&(e=c2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],t={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:S(p({},t),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let s=S(p({},n),{attributeName:"opacity"}),a={tag:"circle",attributes:S(p({},t),{cx:"256",cy:"364",r:"28"}),children:[]};return e||a.children.push({tag:"animate",attributes:S(p({},n),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(p({},s),{values:"1;0;1;1;0;1;"})}),l.push(a),l.push({tag:"path",attributes:S(p({},t),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(p({},s),{values:"1;0;0;0;0;1;"})}]}),e||l.push({tag:"path",attributes:S(p({},t),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(p({},s),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},H6={hooks(){return{parseNodeAttributes(c,e){let l=e.getAttribute("data-fa-symbol"),t=l===null?!1:l===""?!0:l;return c.symbol=t,c}}}},R6=[I0,b6,N6,y6,v6,D6,P6,T6,I6,B6,H6];K0(R6,{mixoutsTo:F});var E8=F.noAuto,C4=F.config,_8=F.library,g4=F.dom,h4=F.parse,D8=F.findIconDefinition,P8=F.toHtml,x4=F.icon,T8=F.layer,O6=F.text,V6=F.counter;var U6=["*"],q6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},j6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},W6=c=>{let e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(l=>e[l]?l:null).filter(l=>l)},D1=new WeakSet,b4="fa-auto-css";function G6(c,e){if(!e.autoAddCss||D1.has(c))return;if(c.getElementById(b4)!=null){e.autoAddCss=!1,D1.add(c);return}let l=c.createElement("style");l.setAttribute("type","text/css"),l.setAttribute("id",b4),l.innerHTML=g4.css();let t=c.head.childNodes,n=null;for(let s=t.length-1;s>-1;s--){let a=t[s],i=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}c.head.insertBefore(l,n),e.autoAddCss=!1,D1.add(c)}var $6=c=>c.prefix!==void 0&&c.iconName!==void 0,X6=(c,e)=>$6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},Y6=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(t){C4.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),K6=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...t){for(let n of t){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let s of n.icon[2])typeof s=="string"&&(this.definitions[n.prefix][s]=n)}}addIconPacks(...t){for(let n of t){let s=Object.keys(n).map(a=>n[a]);this.addIcons(...s)}}getIconDefinition(t,n){return t in this.definitions&&n in this.definitions[t]?this.definitions[t][n]:null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),Q6=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(t){if("size"in t)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=B2({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[p2]});let c=e;return c})(),J6=(()=>{let e=class e{constructor(t,n){this.renderer=t,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(t){"size"in t&&(t.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${t.size.currentValue}`),t.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${t.size.previousValue}`))}};e.\u0275fac=function(n){return new(n||e)(w(O1),w(H1))},e.\u0275cmp=g({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[p2,h],ngContentSelectors:U6,decls:1,vars:0,template:function(n,s){n&1&&(Y1(),K1(0))},encapsulation:2});let c=e;return c})(),N4=(()=>{let e=class e{constructor(t,n,s,a,i){this.sanitizer=t,this.config=n,this.iconLibrary=s,this.stackItem=a,this.document=F2(c3),i!=null&&a==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(t){if(this.icon==null&&this.config.fallbackIcon==null){j6();return}if(t){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let s=this.buildParams();G6(this.document,this.config);let a=x4(n,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(a.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(t){let n=X6(t,this.config.defaultPrefix);if("icon"in n)return n;let s=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return s??(q6(n),null)}buildParams(){let t={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?h4.transform(this.transform):this.transform;return{title:this.title,transform:n,classes:W6(t),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};e.\u0275fac=function(n){return new(n||e)(w(o3),w(Y6),w(K6),w(Q6,8),w(J6,8))},e.\u0275cmp=g({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,s){n&2&&(X1("innerHTML",s.renderedIconHTML,R1),H2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[p2,h],decls:0,vars:0,template:function(n,s){},encapsulation:2});let c=e;return c})();var y4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=I2({type:e}),e.\u0275inj=T2({});let c=e;return c})();var v4={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var S4={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};function c8(c,e){if(c&1){let l=b2();o(0,"a",12),t2("keyup.enter",function(){W(l),N(3);let n=B(1);return G(n.previous())})("click",function(){W(l),N(3);let n=B(1);return G(n.previous())}),d(1),o(2,"span",13),d(3),r()()}if(c&2){let l=N(3);L(),n2(" ",l.previousLabel," "),L(2),y(l.screenReaderPageLabel)}}function e8(c,e){if(c&1&&(o(0,"span",14),d(1),o(2,"span",13),d(3),r()()),c&2){let l=N(3);L(),n2(" ",l.previousLabel," "),L(2),y(l.screenReaderPageLabel)}}function l8(c,e){if(c&1&&(o(0,"li",9),$(1,c8,4,2,"a",10)(2,e8,4,2,"span",11),r()),c&2){N(2);let l=B(1);V("disabled",l.isFirstPage()),L(),A("ngIf",1<l.getCurrent()),L(),A("ngIf",l.isFirstPage())}}function t8(c,e){if(c&1){let l=b2();o(0,"a",12),t2("keyup.enter",function(){W(l);let n=N().$implicit;N(2);let s=B(1);return G(s.setCurrent(n.value))})("click",function(){W(l);let n=N().$implicit;N(2);let s=B(1);return G(s.setCurrent(n.value))}),o(1,"span",13),d(2),r(),o(3,"span"),d(4),N2(5,"number"),r()()}if(c&2){let l=N().$implicit,t=N(2);L(2),n2("",t.screenReaderPageLabel," "),L(2),y(l.label==="..."?l.label:y2(5,2,l.label,""))}}function n8(c,e){if(c&1&&(G1(0),o(1,"span",16)(2,"span",13),d(3),r(),o(4,"span"),d(5),N2(6,"number"),r()(),$1()),c&2){let l=N().$implicit,t=N(2);L(3),n2("",t.screenReaderCurrentLabel," "),L(2),y(l.label==="..."?l.label:y2(6,2,l.label,""))}}function s8(c,e){if(c&1&&(o(0,"li"),$(1,t8,6,5,"a",10)(2,n8,7,5,"ng-container",15),r()),c&2){let l=e.$implicit;N(2);let t=B(1);V("current",t.getCurrent()===l.value)("ellipsis",l.label==="..."),L(),A("ngIf",t.getCurrent()!==l.value),L(),A("ngIf",t.getCurrent()===l.value)}}function a8(c,e){if(c&1){let l=b2();o(0,"a",12),t2("keyup.enter",function(){W(l),N(3);let n=B(1);return G(n.next())})("click",function(){W(l),N(3);let n=B(1);return G(n.next())}),d(1),o(2,"span",13),d(3),r()()}if(c&2){let l=N(3);L(),n2(" ",l.nextLabel," "),L(2),y(l.screenReaderPageLabel)}}function i8(c,e){if(c&1&&(o(0,"span",14),d(1),o(2,"span",13),d(3),r()()),c&2){let l=N(3);L(),n2(" ",l.nextLabel," "),L(2),y(l.screenReaderPageLabel)}}function o8(c,e){if(c&1&&(o(0,"li",17),$(1,a8,4,2,"a",10)(2,i8,4,2,"span",11),r()),c&2){N(2);let l=B(1);V("disabled",l.isLastPage()),L(),A("ngIf",!l.isLastPage()),L(),A("ngIf",l.isLastPage())}}function r8(c,e){if(c&1&&(o(0,"ul",4),$(1,l8,3,4,"li",5),o(2,"li",6),d(3),r(),$(4,s8,3,6,"li",7)(5,o8,3,4,"li",8),r()),c&2){let l=N(),t=B(1);V("responsive",l.responsive),L(),A("ngIf",l.directionLinks),L(2),Q1(" ",t.getCurrent()," / ",t.getLastPage()," "),L(),A("ngForOf",t.pages)("ngForTrackBy",l.trackByIndex),L(),A("ngIf",l.directionLinks)}}var P2=class{constructor(){this.change=new d2,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(e){return e.id==null&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)}updateInstance(e){let l=!1;for(let t in this.instances[e.id])e[t]!==this.instances[e.id][t]&&(this.instances[e.id][t]=e[t],l=!0);return l}getCurrentPage(e){return this.instances[e]?this.instances[e].currentPage:1}setCurrentPage(e,l){if(this.instances[e]){let t=this.instances[e],n=Math.ceil(t.totalItems/t.itemsPerPage);l<=n&&1<=l&&(this.instances[e].currentPage=l,this.change.emit(e))}}setTotalItems(e,l){this.instances[e]&&0<=l&&(this.instances[e].totalItems=l,this.change.emit(e))}setItemsPerPage(e,l){this.instances[e]&&(this.instances[e].itemsPerPage=l,this.change.emit(e))}getInstance(e=this.DEFAULT_ID){return this.instances[e]?this.clone(this.instances[e]):{}}clone(e){var l={};for(var t in e)e.hasOwnProperty(t)&&(l[t]=e[t]);return l}},f8=Number.MAX_SAFE_INTEGER,w4=(()=>{class c{constructor(l){this.service=l,this.state={}}transform(l,t){if(!(l instanceof Array)){let C=t.id||this.service.defaultId();return this.state[C]?this.state[C].slice:l}let n=t.totalItems&&t.totalItems!==l.length,s=this.createInstance(l,t),a=s.id,i,f,m=s.itemsPerPage,u=this.service.register(s);if(!n&&l instanceof Array){if(m=+m||f8,i=(s.currentPage-1)*m,f=i+m,this.stateIsIdentical(a,l,i,f))return this.state[a].slice;{let M=l.slice(i,f);return this.saveState(a,l,M,i,f),this.service.change.emit(a),M}}else return u&&this.service.change.emit(a),this.saveState(a,l,l,i,f),l}createInstance(l,t){return this.checkConfig(t),{id:t.id!=null?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||l.length}}checkConfig(l){let n=["itemsPerPage","currentPage"].filter(s=>!(s in l));if(0<n.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${n.join(", ")}`)}saveState(l,t,n,s,a){this.state[l]={collection:t,size:t.length,slice:n,start:s,end:a}}stateIsIdentical(l,t,n,s){let a=this.state[l];return!a||!(a.size===t.length&&a.start===n&&a.end===s)?!1:a.slice.every((f,m)=>f===t[n+m])}}return c.\u0275fac=function(l){return new(l||c)(w(P2,16))},c.\u0275pipe=B1({name:"paginate",type:c,pure:!1}),c})();var m8=(()=>{class c{constructor(l,t){this.service=l,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new d2,this.pageBoundsCorrection=new d2,this.pages=[],this.changeSub=this.service.change.subscribe(n=>{this.id===n&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(l){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(l){this.pageChange.emit(l)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let l=this.service.getInstance(this.id);return l.totalItems<1?1:Math.ceil(l.totalItems/l.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let l=this.service.getInstance(this.id),t=this.outOfBoundCorrection(l);t!==l.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(t),this.pages=this.createPageArray(l.currentPage,l.itemsPerPage,l.totalItems,this.maxSize)}):this.pages=this.createPageArray(l.currentPage,l.itemsPerPage,l.totalItems,this.maxSize)}outOfBoundCorrection(l){let t=Math.ceil(l.totalItems/l.itemsPerPage);return t<l.currentPage&&0<t?t:l.currentPage<1?1:l.currentPage}createPageArray(l,t,n,s){s=+s;let a=[],i=Math.max(Math.ceil(n/t),1),f=Math.ceil(s/2),m=l<=f,u=i-f<l,C=!m&&!u,M=s<i,v=1;for(;v<=i&&v<=s;){let I,O=this.calculatePageNumber(v,l,s,i),_=v===2&&(C||u),H=v===s-1&&(C||m);M&&(_||H)?I="...":I=O,a.push({label:I,value:O}),v++}return a}calculatePageNumber(l,t,n,s){let a=Math.ceil(n/2);return l===n?s:l===1?l:n<s?s-a<t?s-n+l:a<t?t-a+l:l:l}}return c.\u0275fac=function(l){return new(l||c)(w(P2),w(Z1))},c.\u0275dir=B2({type:c,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[p2]}),c})();function P1(c){return!!c&&c!=="false"}var k4=(()=>{class c{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new d2,this.pageBoundsCorrection=new d2,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(l){this._directionLinks=P1(l)}get autoHide(){return this._autoHide}set autoHide(l){this._autoHide=P1(l)}get responsive(){return this._responsive}set responsive(l){this._responsive=P1(l)}trackByIndex(l){return l}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=g({type:c,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(l,t){if(l&1){let n=b2();o(0,"pagination-template",1,0),t2("pageChange",function(a){return W(n),G(t.pageChange.emit(a))})("pageBoundsCorrection",function(a){return W(n),G(t.pageBoundsCorrection.emit(a))}),o(2,"nav",2),$(3,r8,6,8,"ul",3),r()()}if(l&2){let n=B(1);A("id",t.id)("maxSize",t.maxSize),L(2),H2("aria-label",t.screenReaderPaginationLabel),L(),A("ngIf",!(t.autoHide&&n.pages.length<=1))}},dependencies:[m8,t3,l3,n3],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),c})(),A4=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=I2({type:c}),c.\u0275inj=T2({providers:[P2],imports:[[Q]]}),c})();var d8=(c,e)=>e.id,z8=c=>({itemsPerPage:5,currentPage:c}),L8=c=>["/userdetails",c];function u8(c,e){if(c&1&&(o(0,"tr")(1,"td"),d(2),r(),o(3,"td"),d(4),r(),o(5,"td"),d(6),r(),o(7,"td"),d(8),r(),o(9,"td"),d(10),r(),o(11,"td"),k(12,"fa-icon",3)(13,"fa-icon",4),r()()),c&2){let l=e.$implicit,t=N();L(2),y(l.id),L(2),y(l.name),L(2),y(l.email),L(2),y(l.phone),L(2),y(l.address.city),L(2),A("icon",t.faUser),L(),A("icon",t.faEye)("routerLink",Q2(8,L8,l.id))}}var E4=(()=>{let e=class e{constructor(){this.users=c1,this.faUser=v4,this.faEye=S4,this.page=1,console.log(Z2)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-user-list"]],standalone:!0,features:[h],decls:22,vars:5,consts:[[1,"text-center"],[1,"table","table-bordered","table-striped"],[1,"pagination","justify-content-end",3,"pageChange"],[1,"mx-3",3,"icon"],[1,"mx-3",3,"icon","routerLink"]],template:function(n,s){n&1&&(o(0,"h3",0),d(1,"User List"),r(),o(2,"table",1)(3,"thead")(4,"tr")(5,"th"),d(6,"User Id"),r(),o(7,"th"),d(8,"Name"),r(),o(9,"th"),d(10,"Email"),r(),o(11,"th"),d(12,"Phone"),r(),o(13,"th"),d(14,"City"),r(),o(15,"th"),d(16,"Profile Photo"),r()()(),o(17,"tbody"),j1(18,u8,14,10,"tr",null,d8),N2(20,"paginate"),r()(),o(21,"pagination-controls",2),t2("pageChange",function(i){return s.page=i}),r()),n&2&&(L(18),W1(y2(20,0,s.users,Q2(3,z8,s.page))))},dependencies:[y4,N4,A4,w4,k4,z2]});let c=e;return c})();var _4=(()=>{let e=class e{constructor(t,n){this.activatedRoute=t,this.httpClient=n}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.user=t.userInfo})}};e.\u0275fac=function(n){return new(n||e)(w(O2),w(R2))},e.\u0275cmp=g({type:e,selectors:[["app-user-details"]],standalone:!0,features:[h],decls:17,vars:5,consts:[[1,"text-center"],[1,"row"],[1,"col-sm-4","offset-4"],[1,"card","text-center"],["src","https://attic.sh/ul4khwf22vvfdnk27l1qa7tuv03g","alt","Card image cap","height","200px",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(n,s){n&1&&(o(0,"h2",0),d(1,"User Details"),r(),o(2,"div",1)(3,"div",2)(4,"div",3),k(5,"img",4),o(6,"div",5)(7,"h5",6),d(8),r(),o(9,"p",7),d(10),r(),o(11,"p",7),d(12),r(),o(13,"p",7),d(14),r(),o(15,"p",7),d(16),r()()()()()),n&2&&(L(8),y(s.user.name),L(2),y(s.user.address.city),L(2),y(s.user.phone),L(2),y(s.user.email),L(2),y(s.user.id))}});let c=e;return c})();var D4=(()=>{let e=class e{constructor(t){this.httpClient=t,this.users_api="https://jsonplaceholder.typicode.com/users"}getAllUsers(){return this.httpClient.get(this.users_api)}getUserById(t){return this.httpClient.get(`${this.users_api}/${t}`)}};e.\u0275fac=function(n){return new(n||e)(I1(R2))},e.\u0275prov=x2({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();var P4=(c,e)=>{let l=+c.params.id;return F2(D4).getUserById(l)};var T4=(c,e)=>!0;var F4=(()=>{let e=class e{constructor(t){this.activatedRoute=t}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.prod=t,console.log(t)})}};e.\u0275fac=function(n){return new(n||e)(w(O2))},e.\u0275cmp=g({type:e,selectors:[["app-product-details"]],standalone:!0,features:[h],decls:10,vars:3,consts:[[1,"text-center"],[1,"col-sm-3","0ffset-3","card","text-center"],[1,"card-body"],[1,"card-text"]],template:function(n,s){n&1&&(o(0,"h2",0),d(1,"Product Details"),r(),o(2,"div",1)(3,"div",2)(4,"p",3),d(5),r(),o(6,"p",3),d(7),r(),o(8,"p",3),d(9),r()()()),n&2&&(L(5),y(s.prod.id),L(2),y(s.prod.title),L(2),y(s.prod.price))}});let c=e;return c})();var I4=[{path:"",component:J2},{path:"home",component:J2},{path:"aboutus",component:z3},{path:"users",component:E4},{path:"careers",component:L3},{path:"userdetails/:id",component:_4,resolve:{userInfo:P4}},{path:"products",canActivate:[T4],loadComponent:()=>import("./chunk-JU546WBS.js").then(c=>c.ProductListComponent)},{path:"productdetails",component:F4},{path:"**",component:u3}];var B4={providers:[J1({eventCoalescing:!0}),p3(I4),s3(a3([]))]};var H4=(()=>{let e=class e{constructor(){this.isAdmin=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-navbar"]],standalone:!0,features:[h],decls:25,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["routerLink","home","routerLinkActive","active",1,"nav-link"],["routerLink","aboutus","routerLinkActive","active",1,"nav-link"],["routerLink","careers","routerLinkActive","active",1,"nav-link"],["routerLink","users","routerLinkActive","active",1,"nav-link"],["routerLink","products","routerLinkActive","active",1,"nav-link"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(n,s){n&1&&(o(0,"nav",0)(1,"div",1)(2,"button",2),k(3,"span",3),r(),o(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),d(8,"Home"),r()(),o(9,"li",6)(10,"a",8),d(11,"About-us"),r()(),o(12,"li",6)(13,"a",9),d(14,"Careers"),r()(),o(15,"li",6)(16,"a",10),d(17,"UserList"),r()(),o(18,"li",6)(19,"a",11),d(20,"Products"),r()()(),o(21,"form",12),k(22,"input",13),o(23,"button",14),d(24,"Search"),r()()()()())},dependencies:[z2,m3,Q],styles:[".active[_ngcontent-%COMP%]{background-color:#0ff}"]});let c=e;return c})();var R4=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-footer"]],standalone:!0,features:[h],decls:20,vars:0,consts:[[1,"container-fluid"],[1,"py-3","my-4","bg-dark","text-white"],[1,"nav","justify-content-center","border-bottom","pb-3","mb-3"],[1,"nav-item"],["href","#",1,"nav-link","px-2"],[1,"text-center","text-muted"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"footer",1)(2,"ul",2)(3,"li",3)(4,"a",4),d(5,"Home"),r()(),o(6,"li",3)(7,"a",4),d(8,"Features"),r()(),o(9,"li",3)(10,"a",4),d(11,"Pricing"),r()(),o(12,"li",3)(13,"a",4),d(14,"FAQs"),r()(),o(15,"li",3)(16,"a",4),d(17,"About"),r()()(),o(18,"p",5),d(19,"\xA9 2021 Company, Inc"),r()()())}});let c=e;return c})();var g8=Y4(O4());var U4=(()=>{let e=class e{constructor(){this.currentLight="red"}ngOnInit(){this.startTrafficLight()}startTrafficLight(){this.interval=setInterval(()=>{switch(this.currentLight){case"red":this.currentLight="green";break;case"green":this.currentLight="yellow";break;case"yellow":this.currentLight="red";break}},1e3)}ngOnDestroy(){clearInterval(this.interval)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-traffic-light"]],standalone:!0,features:[h],decls:6,vars:6,consts:[[1,"traffic-light"],[1,"light","red"],[1,"light","yellow"],[1,"light","green"]],template:function(n,s){n&1&&(o(0,"h1"),d(1,"Traffic Light Simulation"),r(),o(2,"div",0),k(3,"div",1)(4,"div",2)(5,"div",3),r()),n&2&&(L(3),V("active",s.currentLight==="red"),L(),V("active",s.currentLight==="yellow"),L(),V("active",s.currentLight==="green"))},dependencies:[Q],styles:[".traffic-light[_ngcontent-%COMP%]{width:100px;height:300px;background-color:#000;border-radius:10px;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.light[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;opacity:.3}.red.active[_ngcontent-%COMP%]{background-color:red;opacity:1}.yellow.active[_ngcontent-%COMP%]{background-color:#ff0;opacity:1}.green.active[_ngcontent-%COMP%]{background-color:green;opacity:1}"]});let c=e;return c})();var q4=(()=>{let e=class e{constructor(){this.flag=!0}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-body"]],standalone:!0,features:[h],decls:4,vars:0,consts:[[1,"container"],[1,"row"],[1,"body","border","p-2","m-1"]],template:function(n,s){n&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),k(3,"app-traffic-light"),r()()())},dependencies:[Q,U4],styles:[".body[_ngcontent-%COMP%]{min-height:400px}"]});let c=e;return c})();var j4=(()=>{let e=class e{constructor(){this.title="MyApp"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[h],decls:3,vars:0,template:function(n,s){n&1&&k(0,"app-navbar")(1,"app-body")(2,"app-footer")},dependencies:[H4,R4,q4]});let c=e;return c})();i3(j4,B4).catch(c=>console.error(c));
