(self.webpackChunk=self.webpackChunk||[]).push([[782],{19e3:function(I,v,e){var i,A,p,h=e(24596),r=e(67394),c=e(93168),P=e(23587),B=e(83452),Y=e(95315),M=e(63774),H=e(92937);(function(C,L){if(!0)!(A=[v,e(17225),e(28757),e(35049),e(77809),e(57379),e(81853),e(27378),e(66697),e(14798),e(14870),e(73262),e(74427)],i=L,p=typeof i=="function"?i.apply(v,A):i,p!==void 0&&(I.exports=p));else var _})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(C,L,_,x,R,U,g,t,X,K,ce,b,m){"use strict";var S=e(67971);r(C,"__esModule",{value:!0}),C.default=void 0,L=S(L),_=S(_),x=S(x),R=S(R),U=S(U),g=S(g),t=fe(t),X=S(X),K=S(K),m=S(m);function w(a){if(typeof c!="function")return null;var s=new c,n=new c;return(w=function(d){return d?n:s})(a)}function fe(a,s){if(!s&&a&&a.__esModule)return a;if(a===null||h(a)!=="object"&&typeof a!="function")return{default:a};var n=w(s);if(n&&n.has(a))return n.get(a);var u={},d=r&&P;for(var D in a)if(D!=="default"&&Object.prototype.hasOwnProperty.call(a,D)){var T=d?P(a,D):null;T&&(T.get||T.set)?r(u,D,T):u[D]=a[D]}return u.default=a,n&&n.set(a,u),u}function k(a,s){var n=B(a);if(Y){var u=Y(a);s&&(u=u.filter(function(d){return P(a,d).enumerable})),n.push.apply(n,u)}return n}function J(a){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?k(Object(n),!0).forEach(function(u){(0,U.default)(a,u,n[u])}):M?H(a,M(n)):k(Object(n)).forEach(function(u){r(a,u,P(n,u))})}return a}var pe=function(s){var n=s.params,u=s.value,d=s.appInfo,D=s.placeholder,T=s.onChange,me=(0,ce.useDispatch)(),Ee=(0,t.useState)([]),q=(0,g.default)(Ee,2),O=q[0],$=q[1],W=(0,t.useRef)(1),Z=(0,t.useRef)(!1),ve=(0,t.useState)(!1),ee=(0,g.default)(ve,2),ge=ee[0],V=ee[1],Ae=(0,t.useState)(0),te=(0,g.default)(Ae,2),he=te[0],Pe=te[1],Se=(0,t.useState)(""),ae=(0,g.default)(Se,2),ne=ae[0],le=ae[1],ye=(0,t.useState)(!1),oe=(0,g.default)(ye,2),Ce=oe[0],Re=oe[1],De=(0,t.useState)(u),se=(0,g.default)(De,2),Te=se[0],ue=se[1],re=(0,t.useRef)(J({},n));(0,t.useEffect)(function(){ue(s.value),le("")},[s.value]);var G=function(){var o=function(){var F=(0,R.default)(regeneratorRuntime.mark(function N(){var y,E,z,ie;return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return V(!0),j.next=3,me.experimentDataSource.getApplication(J(J({},re.current),{},{page:W.current,size:11,key:ne}));case 3:y=j.sent,E=y.data,z=y.pages,ie=y.total,(E==null?void 0:E.length)>0?(E==null||E.map(function(f){return f.value=f.app_id,f.label=f.app_name,f.scopesType=f.scope_type,f.appType=f.app_type,f.osType=f.os_type,f}),$(function(f){return[].concat((0,x.default)(f),(0,x.default)(E))})):ie===0&&$([]),Pe(z),V(!1),Z.current=!1;case 9:case"end":return j.stop()}},N)}));return function(){return F.apply(this,arguments)}}();(n.appType!==void 0||n.osType!==void 0&&!isNaN(n.osType))&&o()};(0,t.useEffect)(function(){G()},[ne]),(0,t.useEffect)(function(){W.current=1,re.current=n,$([]),G()},[n.osType,n.appType]),(0,t.useEffect)(function(){var l=document.querySelector("#selectScroll .next-menu");return setTimeout(function(){var o;l=document.querySelector("#selectScroll .next-menu"),(o=l)===null||o===void 0||o.addEventListener("scroll",de)},300),function(){var o;(o=l)===null||o===void 0||o.removeEventListener("scroll",de)}},[Ce]);var de=function(o){var F=o.target,N=F||{},y=N.scrollTop,E=N.offsetHeight,z=N.scrollHeight;F&&y+E>60&&y+E>z&&(!Z.current&&W.current<he&&(W.current=W.current+1,Z.current=!0,G()))};function Q(l,o){return o===b.SCOPE_TYPE.HOST?l===b.OS_TYPE.LINUX?K.default.t("Host-linux"):K.default.t("Host"):o===b.SCOPE_TYPE.K8S?K.default.t("Kubernetes"):""}function Oe(l){return t.default.createElement("div",{className:m.default.itemContent,title:l&&l.label},t.default.createElement("div",{className:m.default.appName},l&&l.label),t.default.createElement("div",{className:m.default.scopeTip},Q(l.os_type,l.scope_type)))}return t.default.createElement(t.default.Fragment,null,t.default.createElement(_.default,{className:m.default.appSelect,showSearch:!0,filterLocal:!1,style:{width:"100%"},value:Te,placeholder:D||"",onChange:function(o,F){var N=O.find(function(y){return y.app_id===o});ue(o),T==null||T(o,F,N)},fillProps:"app_id",onFocus:function(){return Re(!0)},onSearch:function(o){V(!0),W.current=1,$([]),le(o)},dataSource:O,popupContainer:"selectScroll",itemRender:function(o){return Oe(o)}},O==null?void 0:O.map(function(l,o){return t.default.createElement(_.default.Option,{value:l.app_id,key:o},t.default.createElement("div",{className:m.default.itemContent,title:l.label},t.default.createElement("div",{className:m.default.appName},l.label),t.default.createElement("div",{className:m.default.scopeTip},Q(l.os_type,l.scope_type))))}),(O==null?void 0:O.length)===0&&(d==null?void 0:d.appId)&&t.default.createElement(_.default.Option,{value:d.appId},t.default.createElement("div",{className:m.default.itemContent,title:d.appName},t.default.createElement("div",{className:m.default.appName},d.appName),t.default.createElement("div",{className:m.default.scopeTip},Q(d.osType,d.scopeType)))),ge&&t.default.createElement(_.default.Option,{value:"more",key:"more"},t.default.createElement("div",{style:{color:"#0064C8"}},t.default.createElement(L.default,{size:"small",type:"loading"}),"\xA0\xA0",t.default.createElement(X.default,null,"Load more options...")))),t.default.createElement("div",{id:"selectScroll"}))},_e=pe;C.default=_e})},68055:function(I,v,e){var i,A,p,h=e(67394);(function(r,c){if(!0)!(A=[v,e(46454),e(17014),e(57379),e(13026)],i=c,p=typeof i=="function"?i.apply(v,A):i,p!==void 0&&(I.exports=p));else var P})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(r,c,P,B,Y){"use strict";var M=e(67971);h(r,"__esModule",{value:!0}),r.default=void 0,c=M(c),P=M(P),B=M(B);var H={en:{Timeline:{expand:"Expand",fold:"Fold"},Balloon:{close:"Close"},Card:{expand:"Expand",fold:"Fold"},Dialog:{close:"Close",ok:"Confirm",cancel:"Cancel"},Drawer:{close:"Close"},Message:{closeAriaLabel:"Close"},Pagination:{prev:"Prev",next:"Next",goTo:"Go To",page:"Page",go:"Go",total:"Page {current} of {total} pages.",labelPrev:"Prev page, current page {current}",labelNext:"Next page, current page {current}",inputAriaLabel:"Please enter the page to jump to",selectAriaLabel:"Please select page size",pageSize:"Page Size:"},Input:{clear:"Clear"},List:{empty:"No Data"},Select:{selectPlaceholder:"Please select",autoCompletePlaceholder:"Please enter",notFoundContent:"No Options",maxTagPlaceholder:"{selected}/{total} items have been selected.",selectAll:"Select All"},Table:{empty:"No Data",ok:"Confirm",reset:"Reset",asc:"Asc",desc:"Desc",expanded:"Expanded",folded:"Folded",filter:"Filter",selectAll:"Select All"},Upload:{card:{cancel:"Cancel",delete:"Delete"},upload:{delete:"Delete"}},Search:{buttonText:"Search"},Tag:{delete:"Delete"},Switch:{on:"On",off:"Off"},Tab:{closeAriaLabel:"Close"},Dropdown:{empty:"No Data"},Radio:{empty:"No Data"}},zh:{Timeline:{expand:"\u5C55\u5F00",fold:"\u6536\u8D77"},Balloon:{close:"\u5173\u95ED"},Card:{expand:"\u5C55\u5F00",fold:"\u6536\u8D77"},Dialog:{close:"\u5173\u95ED",ok:"\u786E\u8BA4",cancel:"\u53D6\u6D88"},Drawer:{close:"\u5173\u95ED"},Message:{closeAriaLabel:"\u5173\u95ED\u6807\u7B7E"},Pagination:{prev:"\u524D\u4E00\u9875",next:"\u4E0B\u4E00\u9875",goTo:"\u53BB\u5F80",page:"\u5206\u9875",go:"\u53BB",total:"Page {current} of {total} pages.",labelPrev:"\u524D\u4E00\u9875, \u5F53\u524D\u9875 {current}",labelNext:"\u4E0B\u4E00\u9875, \u5F53\u524D\u9875 {current}",inputAriaLabel:"\u8BF7\u8F93\u5165\u8981\u8DF3\u8F6C\u5230\u7684\u9875\u9762",selectAriaLabel:"\u8BF7\u9009\u62E9\u9875\u9762\u5C55\u793A\u7684\u6570\u91CF",pageSize:"\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761:"},Input:{clear:"\u6E05\u7A7A"},List:{empty:"\u6CA1\u6709\u6570\u636E"},Select:{selectPlaceholder:"\u8BF7\u9009\u62E9",autoCompletePlaceholder:"\u8BF7\u8F93\u5165",notFoundContent:"\u6CA1\u6709\u4E0B\u62C9\u9879",maxTagPlaceholder:"{selected}/{total} \u6761\u76EE\u5DF2\u9009\u62E9.",selectAll:"\u5168\u9009"},Table:{empty:"\u6CA1\u6709\u6570\u636E",ok:"\u786E\u8BA4",reset:"\u91CD\u7F6E",asc:"\u751F\u5E8F",desc:"\u964D\u5E8F",expanded:"\u5C55\u5F00",folded:"\u6536\u8D77",filter:"\u8FC7\u6EE4",selectAll:"\u5168\u9009"},Upload:{card:{cancel:"\u53D6\u6D88",delete:"\u5220\u9664"},upload:{delete:"\u5220\u9664"}},Search:{buttonText:"\u641C\u7D22"},Tag:{delete:"\u5220\u9664"},Switch:{on:"\u6253\u5F00",off:"\u5173\u95ED"},Tab:{closeAriaLabel:"\u5173\u95ED"},Dropdown:{empty:"\u6CA1\u6709\u6570\u636E"},Radio:{empty:"\u6CA1\u6709\u6570\u636E"}}},C=function(){function _(){(0,c.default)(this,_),(0,B.default)(this,"local",void 0)}return(0,P.default)(_,[{key:"setLocal",value:function(R){this.local=R}},{key:"getLocal",value:function(){var R=this;return function(){var U,g=(0,Y.getLanguage)();return(U=R.local[g])!==null&&U!==void 0?U:R.local.en}}}],[{key:"getInstance",value:function(){return this.instance=this.instance||new _,this.instance}}]),_}();(0,B.default)(C,"instance",null),C.getInstance().setLocal(H);var L=C.getInstance().getLocal();r.default=L})},78576:(I,v,e)=>{"use strict";e.d(v,{Z:()=>c});var i=e(60994),A=e.n(i),p=e(93476),h=e.n(p),r=h()(A());r.push([I.id,`.index__itemContent__z8YF9 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.index__scopeTip__JF-e2 {
  color: #c1c1c1;
  margin-right: 8px;
}

.index__appName__CfdNm {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.index__appSelect__cjp84 em {
    display: block;
    width: 100%;
  }
.index__appSelect__cjp84 .index__scopeTip__JF-e2{
    display: none;
  }`,"",{version:3,sources:["webpack://./pages/Chaos/Experiment/common/CustomSelect/index.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,WAAW;AACb;AAEE;IACE,cAAc;IACd,WAAW;EACb;AACA;IACE,aAAa;EACf",sourcesContent:[`.itemContent {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scopeTip {
  color: #c1c1c1;
  margin-right: 8px;
}

.appName {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.appSelect {
  em {
    display: block;
    width: 100%;
  }
  .scopeTip{
    display: none;
  }
}`],sourceRoot:""}]),r.locals={itemContent:"index__itemContent__z8YF9",scopeTip:"index__scopeTip__JF-e2",appName:"index__appName__CfdNm",appSelect:"index__appSelect__cjp84"};const c=r},74427:(I,v,e)=>{"use strict";e.r(v),e.d(v,{default:()=>c});var i=e(1892),A=e.n(i),p=e(78576),h={};h.insert="head",h.singleton=!1;var r=A()(p.Z,h);const c=p.Z.locals||{}}}]);

//# sourceMappingURL=782.bundle.js.map