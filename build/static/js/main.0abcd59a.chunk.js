(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{56:function(e,n,t){},57:function(e,n,t){},89:function(e,n){},94:function(e,n,t){"use strict";t.r(n);var a,r=t(1),i=t.n(r),c=t(44),o=t.n(c),s=(t(56),t(13)),l=t(5),d=(t(57),t(7)),u=t(6),p=t.p+"static/media/instagram.56e41213.jpeg",j=t(0),x=u.a.div(a||(a=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  align-items: center;\n"])));var b,f,m,h,O,g=function(){return Object(j.jsxs)(x,{children:[Object(j.jsx)("img",{src:p,alt:"mainImage"}),"\uc22d\uc2e4\ub300\ud559\uad50 \uc778\uc2a4\ud0c0\uadf8\ub7a8"]})},v=t(3),w=t.n(v),y=t(8),k=t(16),C=t(2),S=t(4),z="#FFC46B",P=t(9),E=t.n(P),N=t(10),B=t.n(N),Y=u.a.div(b||(b=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  padding-top: 100px;\n  padding-bottom: 80px;\n  align-items: center;\n  flex-direction: column;\n  @media screen and (max-width: 1145px) {\n    height: 559px;\n  }\n"]))),_=u.a.div(f||(f=Object(d.a)(['\n  width: 100%;\n  height: 100%;\n  padding: 70px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: "YonnGodic340";\n\n  @media screen and (max-width: 1145px) {\n    width: 100vw;\n  }\n']))),I=u.a.button(m||(m=Object(d.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 400px;\n  background-color: ",';\n  font-family: "YonnGodic340";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ',";\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n"])),z,z),A=u.a.button(h||(h=Object(d.a)(["\n  margin-top: 10px;\n  padding: 10px;\n  width: 400px;\n  background-color: ",';\n  font-family: "YonnGodic340";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ',";\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n"])),z,z),F=u.a.div(O||(O=Object(d.a)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  input {\n    outline: none;\n    border: none;\n  }\n  .email {\n    margin-top: 1px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-left: ",";\n    color: gray;\n  }\n  .password {\n    margin-top: 1px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid black;\n    border-left: ",";\n    color: gray;\n  }\n\n  @media screen and (max-width: 1145px) {\n    width: 100%;\n  }\n"])),(function(e){return e.emailState?"3px solid#2BA8E0":"1px solid black"}),(function(e){return e.passwordState?"3px solid#2BA8E0":" 1px solid black"}));var D,H,M,L,Z=function(){var e=Object(r.useState)(!1),n=Object(S.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(!1),c=Object(S.a)(i,2),o=c[0],s=c[1],d=Object(r.useRef)(null),u=Object(r.useRef)(null),p=Object(l.f)(),x=Object(r.useState)({email:"",password:""}),b=Object(S.a)(x,2),f=b[0],m=b[1],h=function(e){var n=e.target,t=n.value,a=n.type;m(Object(C.a)(Object(C.a)({},f),{},Object(k.a)({},a,t)))},O=function(){var e=Object(y.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/login",{params:f});case 3:t=e.sent,a=t.data.user.id,B.a.set("user-id",a),p("/home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\ub4f1\ub85d\ub41c \ud68c\uc6d0\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),g=function(e){"email"===e?(d.current.focus(),a(!0),s(!1)):"password"===e&&(u.current.focus(),a(!1),s(!0))};return Object(j.jsx)(Y,{children:Object(j.jsxs)(_,{children:[Object(j.jsxs)(F,{emailState:t,passwordState:o,children:[Object(j.jsxs)("div",{className:"email",onClick:function(){return g("email")},children:["\uc774\uba54\uc77c\uc8fc\uc18c",Object(j.jsx)("input",{type:"email",name:"email",onChange:h,ref:d})]}),Object(j.jsxs)("div",{className:"password",onClick:function(){return g("password")},children:["\ube44\ubc00\ubc88\ud638",Object(j.jsx)("input",{type:"password",name:"password",onChange:h,ref:u})]})]}),Object(j.jsx)(A,{onClick:O,children:"\ub85c\uadf8\uc778"}),Object(j.jsx)(I,{onClick:function(e){p("/account")},children:"\uc0ac\uc6a9\uc790 \ub4f1\ub85d"})]})})},G=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(g,{}),Object(j.jsx)(Z,{})]})},W=u.a.div(D||(D=Object(d.a)(["\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n  }\n"]))),J=u.a.div(H||(H=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  margin-bottom: 50px;\n  h1 {\n    padding-top: 30px;\n    font-size: 30px;\n    line-height: 0;\n  }\n  p {\n    font-size: 15px;\n    line-height: 20px;\n    color: gray;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 480px) {\n    h1 {\n      padding-top: 30px;\n      font-size: 45px;\n      line-height: 0;\n    }\n    p {\n      font-size: 13px;\n      line-height: 20px;\n      color: gray;\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    p {\n      font-size: 10px;\n      line-height: 20px;\n      color: gray;\n    }\n  }\n"]))),R=u.a.button(M||(M=Object(d.a)(["\n  margin-top: 30px;\n  padding: 10px;\n  width: 554px;\n  background-color: ",";\n  color: white;\n  border-radius: 3px;\n  border: 1px solid ",";\n\n  @media screen and (max-width: 1024px) {\n    width: 80%;\n  }\n"])),z,z),T=u.a.div(L||(L=Object(d.a)(["\n  width: 554px;\n  display: flex;\n  background: white;\n  flex-direction: column;\n  input {\n    outline: gray;\n    border: none;\n    background: none;\n  }\n  label {\n    line-height: 300%;\n  }\n  .invalidEmail {\n    color: red;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validEmail {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validEmail {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .invalidPW {\n    color: red;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .validPW {\n    color: green;\n    font-size: 8px;\n    line-height: 0;\n  }\n  .email {\n    margin-top: 1px;\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",";\n    color: gray;\n  }\n  .password {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",";\n    color: gray;\n  }\n  .confirmPassword {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",";\n    color: gray;\n  }\n  .name {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",";\n    color: gray;\n  }\n  .id {\n    padding-bottom: 18px;\n    padding-left: 10px;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid gray;\n    border-left: ",";\n    color: gray;\n  }\n\n  @media screen and (max-width: 1024px) {\n    width: 80%;\n  }\n"])),(function(e){return e.inputStates.email?"3px solid#2BA8E0":"1px solid gray"}),(function(e){return e.inputStates.password?"3px solid#2BA8E0":" 1px solid gray"}),(function(e){return e.inputStates.confirmPassword?"3px solid#2BA8E0":"1px solid gray"}),(function(e){return e.inputStates.name?"3px solid#2BA8E0":"1px solid gray"}),(function(e){return e.inputStates.id?"3px solid#2BA8E0":"1px solid gray"}));var U,q=function(){var e=Object(r.useState)(!1),n=Object(S.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(!1),c=Object(S.a)(i,2),o=c[0],s=c[1],d=Object(l.f)(),u=Object(r.useState)({email:"",password:"",name:"",id:""}),p=Object(S.a)(u,2),x=p[0],b=p[1];Object(r.useEffect)((function(){/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(x.email)?s(!0):s(!1),x.confirmPassword===x.password?a(!0):a(!1)}),[x.password,x.name,x.email,x.id,x.confirmPassword]);var f=function(e){var n=e.target,t=n.value,a=n.name;b(Object(C.a)(Object(C.a)({},x),{},Object(k.a)({},a,t)))},m=Object(r.useState)({email:!1,password:!1,confirmPassword:!1,name:!1,id:!1}),h=Object(S.a)(m,2),O=h[0],g=h[1],v=function(){var e=Object(y.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:x.email,password:x.password,name:x.name,id:x.id},e.prev=1,e.next=4,E.a.post("/signup",n);case 4:e.sent,d("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("\uc774\uba54\uc77c \ub610\ub294 \uc544\uc774\ub514 \uc911\ubcf5");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(e){switch(e){case"email":g({email:!0});break;case"password":g({password:!0});break;case"confirmPassword":g({confirmPassword:!0});break;case"name":g({name:!0});break;case"id":g({id:!0})}};return Object(j.jsx)(W,{children:Object(j.jsxs)(J,{children:[Object(j.jsx)("h1",{children:"\uc22d\uc2e4\ub300\ud559\uad50 Instagram"}),Object(j.jsx)("p",{children:"\ud68c\uc6d0\uac00\uc785 \uc2e0\uccad \ud6c4 \ucd08\uae30\ud654\uba74\uc73c\ub85c \uc774\ub3d9"}),Object(j.jsxs)(T,{inputStates:O,children:[Object(j.jsxs)("label",{className:"email",onClick:function(){return z("email")},children:["\uc774\uba54\uc77c\uc8fc\uc18c",Object(j.jsx)("input",{type:"email",name:"email",onChange:f,onBlur:function(){g(Object(C.a)(Object(C.a)({},O),{},{email:!1}))}}),x.email&&Object(j.jsx)("p",{className:o?"validEmail":"invalidEmail",children:o?"\uc774\uba54\uc77c \uc591\uc2dd OK":"\uc774\uba54\uc77c \uc591\uc2dd\uc5d0 \ub9de\ucdb0\uc8fc\uc138\uc694"})]}),Object(j.jsxs)("label",{className:"id",onClick:function(){return z("id")},children:["ID",Object(j.jsx)("input",{type:"text",name:"id",onChange:f,onBlur:function(){g(Object(C.a)(Object(C.a)({},O),{},{id:!1}))}})]}),Object(j.jsxs)("label",{className:"password",onClick:function(){return z("password")},children:["\ube44\ubc00\ubc88\ud638",Object(j.jsx)("input",{type:"password",name:"password",onChange:f,onBlur:function(){g(Object(C.a)(Object(C.a)({},O),{},{password:!1}))}})]}),Object(j.jsxs)("label",{className:"confirmPassword",onClick:function(){return z("confirmPassword")},children:["\ube44\ubc00\ubc88\ud638 \ud655\uc778",Object(j.jsx)("input",{type:"password",name:"confirmPassword",onChange:f,onBlur:function(){g(Object(C.a)(Object(C.a)({},O),{},{confirmPassword:!1}))}}),x.confirmPassword&&Object(j.jsx)("p",{className:t?"validPW":"invalidPW",children:t?"\u2705\ube44\ubc00\ubc88\ud638 \uc77c\uce58":"\u274c\ubd88\uc77c\uce58"})]}),Object(j.jsxs)("label",{className:"name",onClick:function(){return z("name")},children:["\uc774\ub984",Object(j.jsx)("input",{type:"text",name:"name",onChange:f,onBlur:function(){g(Object(C.a)(Object(C.a)({},O),{},{name:!1}))}})]})]}),Object(j.jsx)(R,{onClick:v,children:"\ud68c\uc6d0\uac00\uc785"})]})})},K=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(q,{})})},Q=t(51),$=t(96),V=u.a.div(U||(U=Object(d.a)(["\n  width: 100%;\n  height: 15%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  background-color: gray;\n  Button {\n    width: 13%;\n    margin: 5px;\n  }\n"])));var X,ee,ne,te,ae=function(){var e=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B.a.remove("user-id"),e.next=4,E.a.post("./login/logout");case 4:n("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),n=Object(l.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(V,{children:[Object(j.jsx)($.a,{variant:"primary",onClick:function(){return n("/home")},children:"Home"})," ",Object(j.jsx)($.a,{variant:"secondary",onClick:function(){return n("/new")},children:"New"})," ",Object(j.jsx)($.a,{variant:"success",onClick:function(){return n("/profile")},children:"Profile"})," ",Object(j.jsx)($.a,{variant:"warning",onClick:function(){return n("/follow")},children:"Follow"})," ",Object(j.jsx)($.a,{variant:"danger",onClick:function(){return n("/msg")},children:"Message"})," ",Object(j.jsx)($.a,{variant:"info",onClick:e,children:"Logout"})," "]})})},re=u.a.div(X||(X=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  a {\n  }\n"]))),ie=u.a.div(ee||(ee=Object(d.a)(["\n  width: 300px;\n  display: flex;\n  background-color: #fff8f8;\n  margin: 25px;\n  flex-direction: column;\n  justify-content: center;\n  & > image {\n    width: 250px;\n    height: 250px;\n  }\n  .tag {\n    border: 0;\n    outline: 0;\n    background: none;\n    color: blue;\n  }\n  button {\n    margin-bottom: 30px;\n  }\n"]))),ce=u.a.div(ne||(ne=Object(d.a)(["\n  width: 300px;\n  display: flex;\n  background-color: #fff8f8;\n  flex-direction: column;\n  align-items: center;\n  & > image {\n    width: 250px;\n    height: 250px;\n  }\n"]))),oe=u.a.div(te||(te=Object(d.a)(["\n  width: 100px;\n  height: 55px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  .slideBtn {\n    border-radius: 50%;\n    background-color: gray;\n    margin-top: 30px;\n    padding: 10px;\n    margin-right: 5px;\n    &:focus {\n      background-color: #00ff95;\n      box-shadow: 0px 0px 2px red;\n    }\n  }\n"])));var se,le=function(e){var n=e.number,t=e.images,a=e.author,i=e.date,c=e.text,o=c.split(/(#[^\s]+)/g),s=Object(r.useState)([]),d=Object(S.a)(s,2),u=d[0],p=d[1],x=Object(l.f)();Object(r.useEffect)((function(){var e=[];Object(y.a)(w.a.mark((function n(){var a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(a in t[0])t[0][a]&&"number"!==a&&e.push(t[0][a]);p(e);case 2:case"end":return n.stop()}}),n)})))()}),[n]);var b=o.filter((function(e){return""!==e&&" "!==e&&e.includes("#")})),f=o.filter((function(e){return!e.includes("#")})).join(""),m=function(){var e=Object(y.a)(w.a.mark((function e(a){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.target.value,document.getElementById("mainImg".concat(n)).src="./write/test?image=".concat(t[0]["img".concat(Number(r)+1)]);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(j.jsxs)(ie,{children:[Object(j.jsxs)(ce,{children:[Object(j.jsx)("img",{src:"./write/test?image=".concat(t[0].img1),alt:"alt",id:"mainImg".concat(n),height:"250px",width:"250px"}),Object(j.jsx)(oe,{children:u.map((function(e,n){return Object(j.jsx)("button",{className:"slideBtn",value:n,onClick:m})}))})]}),Object(j.jsxs)("button",{className:"tag",onClick:function(){!function(e){x("/home?text=".concat(e,"&type=id"),{replace:!0})}(a)},children:["\uae00\uc4f4\uc774: ",a]}),Object(j.jsxs)("p",{children:["\uae00\ub0b4\uc6a9: ",f]}),Object(j.jsx)(re,{children:b.map((function(e){return Object(j.jsx)("button",{className:"tag",onClick:function(){!function(e){var n=e.slice(1);x("/home?text=".concat(n,"&type=hashtag"),{replace:!0})}(e)},children:e})}))}),Object(j.jsxs)("p",{children:["\uc791\uc131\uc2dc\uac04: ",i]}),Object(j.jsx)("button",{onClick:function(){x("../edit",{state:{number:n,images:t,id:a,contents:c}})},children:"\ud3b8\uc9d1"})]})},de=u.a.div(se||(se=Object(d.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-items: center;\n"])));var ue,pe,je,xe=function(e){var n=e.cardList;return Object(r.useEffect)((function(){}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(de,{children:null===n||void 0===n?void 0:n.map((function(e,n){return Object(j.jsx)(le,{number:e.number,author:e.id,text:e.contents,date:e.date,images:e.images,postInfo:e},n)}))})})},be=t(97),fe=t(48),me=t.n(fe),he=u.a.div(ue||(ue=Object(d.a)(["\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  input {\n    height: 40px;\n    width: 200px;\n    border-radius: 3px;\n  }\n  button {\n    height: 40px;\n    border-radius: 3px;\n  }\n  div {\n    height: 40px;\n  }\n"]))),Oe=u.a.div(pe||(pe=Object(d.a)(["\n  width: 100%;\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  label {\n    padding: 5px;\n  }\n"]))),ge=u.a.div(je||(je=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));var ve=function(){var e=Object(r.useState)({text:"",type:""}),n=Object(S.a)(e,2),t=n[0],a=n[1],i=Object(l.f)(),c=Object(r.useState)([]),o=Object(S.a)(c,2),s=o[0],d=o[1],u=Object(r.useState)(!1),p=Object(S.a)(u,2),x=p[0],b=p[1],f=Object(r.useState)(0),m=Object(S.a)(f,2),h=m[0],O=m[1],g=Object(r.useState)(0),v=Object(S.a)(g,2),k=v[0],z=v[1],P=Object(l.e)(),N=me.a.parse(P.search,{ignoreQueryPrefix:!0});Object(r.useEffect)((function(){console.log("new2"),(null===N||void 0===N?void 0:N.text)||(null===N||void 0===N?void 0:N.type)?Y():Object(y.a)(w.a.mark((function e(){var n,t,a,r,i,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("write/totalPage");case 2:return t=e.sent,a=t.data,z(a),e.next=7,E.a.get("write/getPost",{params:{page:h}});case 7:return r=e.sent,e.next=10,E.a.get("write/getImage",{params:{page:h}});case 10:i=e.sent,c=null===(n=r.data)||void 0===n?void 0:n.map((function(e){var n,t=null===(n=i.data)||void 0===n?void 0:n.filter((function(n){return n.number===e.number}));return Object(C.a)(Object(C.a)({},e),{},{images:t})})),d(c);case 13:case"end":return e.stop()}}),e)})))()}),[h,x,P]);var B=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(Object(C.a)(Object(C.a)({},t),{},{type:n.target.value}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(y.a)(w.a.mark((function e(){var n,a,r,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("write/filterPage",{params:{type:(null===N||void 0===N?void 0:N.type)||t.type,text:(null===N||void 0===N?void 0:N.text)||t.text,page:h||0}});case 2:return n=e.sent,a=n.data,z(a),e.next=7,E.a.get("write/filterGetPost",{params:{type:(null===N||void 0===N?void 0:N.type)||t.type,text:(null===N||void 0===N?void 0:N.text)||t.text,page:h||0}});case 7:r=e.sent,i=r.data,Promise.all(i.map(function(){var e=Object(y.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("write/getEachImages",{params:{number:n.number}});case 2:return t=e.sent,e.abrupt("return",Object(C.a)(Object(C.a)({},n),{},{images:[t.data]}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())).then((function(e){return d(e)})),b(!0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(ae,{}),Object(j.jsxs)(he,{children:[Object(j.jsx)("input",{placeholder:"\uac80\uc0c9\uc5b4",type:"text",onChange:function(e){a(Object(C.a)(Object(C.a)({},t),{},{text:e.target.value}))}}),Object(j.jsx)("button",{type:"submit",onClick:function(){i("/home?text=".concat(t.text,"&type=").concat(t.type))},children:"\uac80\uc0c9"})]}),Object(j.jsxs)(Oe,{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"text",value:"id",onClick:B})," ","\uc791\uc131\uc790"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"text",value:"text",onClick:B})," ","\uc77c\ubc18\ud14d\uc2a4\ud2b8"]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"radio",name:"text",value:"hashtag",onClick:B})," ","Hashtag"]})]}),Object(j.jsx)(xe,{cardList:s}),Object(j.jsx)(ge,{children:Object(j.jsx)(be.a,{children:Object(Q.a)(Array(k).keys()).map((function(e){return Object(j.jsx)(be.a.Item,{active:h===e,onClick:function(){return O(e)},children:e+1})}))})})]})};var we,ye=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(ve,{})})},ke=t(19),Ce=t.n(ke),Se=u.a.div(we||(we=Object(d.a)(["\n  width: 100%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: large;\n  div {\n    margin: 20px;\n  }\n"])));var ze=function(){var e=B.a.get("user-id"),n=Object(r.useState)({following_id:0,followed_id:0}),t=Object(S.a)(n,2),a=t[0],i=t[1];Object(r.useEffect)((function(){Object(y.a)(w.a.mark((function n(){var t,r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.get("follow/getFollowingNum",{params:{user_id:e}});case 2:return t=n.sent,n.next=5,E.a.get("follow/getFollowedNum",{params:{user_id:e}});case 5:r=n.sent,i(Object(C.a)(Object(C.a)({},a),{},{following_id:t.data,followed_id:r.data}));case 7:case"end":return n.stop()}}),n)})))()}),[]);var c=Ce()().format("YYYY-MM-DD HH:mm:ss");return Object(j.jsxs)("div",{children:[Object(j.jsx)(ae,{}),Object(j.jsxs)(Se,{children:[Object(j.jsxs)("div",{children:["\uc0ac\uc6a9\uc790 id : ",e]}),Object(j.jsxs)("div",{children:["\ud604\uc7ac\uc2dc\uac04 : ",c]}),Object(j.jsxs)("div",{children:["\uc0ac\uc6a9\uc790\uac00 \ud314\ub85c\uc6b0\ud558\ub294 \uc0ac\ub78c \uc218 : ",null===a||void 0===a?void 0:a.following_id," "]}),Object(j.jsxs)("div",{children:["\ub2f9\uc2e0\uc744 \ud314\ub85c\uc6b0 \ud574\uc8fc\ub294 \uc0ac\ub78c \uc218 : ",null===a||void 0===a?void 0:a.followed_id," "]})]})]})};var Pe,Ee=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(ze,{})})},Ne=u.a.div(Pe||(Pe=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  align-items: center;\n\n  .content {\n    height: 500px;\n    width: 1000px;\n  }\n  div {\n    margin: 10px;\n  }\n  .exist {\n    border: none;\n    background-color: 0;\n    margin: 5px;\n  }\n"])));var Be=function(){var e=Object(l.e)(),n=e.state.id,t=Object(r.useState)([]),a=Object(S.a)(t,2),i=a[0],c=a[1],o=Object(l.f)(),s=[],d=e.state.number,u=Object(r.useState)(0),p=Object(S.a)(u,2),x=(p[0],p[1]),b=Object(r.useState)({number:"",id:"",date:"",contents:""}),f=Object(S.a)(b,2),m=f[0],h=f[1];Object(r.useEffect)((function(){Object(y.a)(w.a.mark((function n(){var t,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(a in(t=e.state.images)[0])null!==t[0][a]&&"number"!==a&&s.push(t[0][a]),c(s);h(Object(C.a)(Object(C.a)({},m),{},{number:e.state.number,id:e.state.id,contents:e.state.contents}));case 3:case"end":return n.stop()}}),n)})))()}),[]);var O=new FormData,g=function(){var e=Object(y.a)(w.a.mark((function e(n){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.target.id,document.getElementById(t).style.display="none",delete i[t],a=i.filter((function(e){return null!=e})),c(a),x(a.length);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(y.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files.length>5-i.length)alert("\ud30c\uc77c \ucd5c\ub300 5\uac1c\ub9cc \uc120\ud0dd\uac00\ub2a5 \ub2e4\uc2dc \uc120\ud0dd\ud558\uc138\uc694.");else for(t=0;t<5;t++)O.append("img",n.target.files[t]);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(){var e=Object(y.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{header:{"content-type":"multipart/form-data"}},e.prev=1,e.next=4,E.a.post("/write/updatePost",m);case 4:e.sent,O.append("f1",i[0]),O.append("f2",i[1]),O.append("f3",i[2]),O.append("f4",i[3]),O.append("f5",i[4]),O.append("num",d),O.append("fileLength",i.length),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert(e.t0);case 17:o("/home");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("/write/deletePost",m);case 3:e.sent,o("/home"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(Ne,{children:[Object(j.jsx)("input",{className:"content",placeholder:"\ub0b4\uc6a9\uc785\ub825",type:"email",value:m.contents,onChange:function(e){var t=Ce()().format("YYYY-MM-DD HH:mm");h(Object(C.a)(Object(C.a)({},m),{},{contents:e.target.value,id:n,date:t}))}}),Object(j.jsx)("input",{type:"file",className:"file",id:"file",name:"img",onChange:v,multiple:"multiple"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"\uc874\uc7ac\ud558\ub294 \ud30c\uc77c\uc774\ub984 \ud074\ub9ad \uc2dc \uc0ad\uc81c\ub428"}),"\ud604\uc7ac \uc874\uc7ac\ud558\ub294\ud30c\uc77c",i.map((function(e,n){return Object(j.jsx)("button",{className:"exist",id:n,onClick:g,children:e},e)}))]}),Object(j.jsx)("button",{type:"submit",onClick:k,children:"\uc218\uc815"}),Object(j.jsx)("button",{onClick:z,children:"\uac8c\uc2dc\ubb3c \uc0ad\uc81c"})]})};var Ye,_e=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(Be,{})})},Ie=u.a.div(Ye||(Ye=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-size: 20px;\n  text-align: center;\n  align-items: center;\n\n  .content {\n    height: 500px;\n    width: 1000px;\n  }\n"])));var Ae=function(){var e=B.a.get("user-id"),n=Object(r.useState)([]),t=Object(S.a)(n,2),a=(t[0],t[1],Object(l.f)()),i=Object(r.useState)({id:"",date:"",contents:""}),c=Object(S.a)(i,2),o=c[0],s=c[1],d=new FormData,u=function(){var e=Object(y.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.files.length>5)alert("\ud30c\uc77c \ucd5c\ub300 5\uac1c\ub9cc \uc120\ud0dd\uac00\ub2a5");else for(t=0;t<5;t++)d.append("img",n.target.files[t]);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(y.a)(w.a.mark((function e(n){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={header:{"content-type":"multipart/form-data"}},e.prev=1,e.next=4,E.a.post("/write/uploadImages",d,t);case 4:return e.sent,e.next=7,E.a.post("/write/uploadPost",o);case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert("\uc9c0\uc6d0\ud558\uc9c0\uc54a\ub294 \ud30c\uc77c\uc874\uc7ac\n \ub2e4\ub978 \uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \ub123\uc5b4\uc8fc\uc138\uc694.");case 13:a("/Home");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return Object(j.jsxs)(Ie,{children:[Object(j.jsx)("input",{className:"content",placeholder:"\ub0b4\uc6a9\uc785\ub825",type:"email",onChange:function(n){var t=Ce()().format("YYYY-MM-DD HH:mm");s(Object(C.a)(Object(C.a)({},o),{},{contents:n.target.value,id:e,date:t}))}}),Object(j.jsx)("input",{type:"file",className:"file",id:"file",name:"img",onChange:u,multiple:"multiple"}),Object(j.jsx)("button",{type:"submit",onClick:p,children:"\uc804\uc1a1"})]})};var Fe,De=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(Ae,{})})},He=u.a.div(Fe||(Fe=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  div {\n    margin: 20px;\n  }\n  button {\n    background-color: antiquewhite;\n  }\n"])));var Me,Le=function(e){var n=e.followingUser,t=B.a.get("user-id"),a=Object(r.useState)(null===n||void 0===n?void 0:n.following),i=Object(S.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)({following_id:t,followed_id:n.id,state:c}),l=Object(S.a)(s,2),d=l[0],u=l[1];Object(r.useEffect)((function(){u(Object(C.a)(Object(C.a)({},d),{},{state:c}))}),[c]);var p=function(){var e=Object(y.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return o(!1),e.next=4,E.a.post("/follow/update",d);case 4:e.sent,e.next=11;break;case 7:return o(!0),e.next=10,E.a.post("/follow/update",d);case 10:e.sent;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(He,{children:[Object(j.jsxs)("div",{children:["\uc544\uc774\ub514: ",null===n||void 0===n?void 0:n.id]}),Object(j.jsx)("button",{onClick:p,children:c?"follow":"unfollow"})]})},Ze=u.a.div(Me||(Me=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));var Ge=function(){var e=Object(r.useState)([]),n=Object(S.a)(e,2),t=n[0],a=n[1],i=B.a.get("user-id");return Object(r.useEffect)((function(){Object(y.a)(w.a.mark((function e(){var n,t,r,c,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("follow/user");case 2:return n=e.sent,t=n.data,e.next=6,E.a.get("follow/table",{params:{user_id:i}});case 6:r=e.sent,c=r.data,o=t.map((function(e){var n=!1;return c.forEach((function(t){t.followed_id===e.id&&(n=!0)})),{id:e.id,following:n}})),a(o);case 10:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsxs)(Ze,{children:[Object(j.jsx)(ae,{id:"header"}),null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(Le,{followingUser:e})}))]})};var We=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(Ge,{})})};var Je=function(){var e=B.a.get("user-id"),n=Object(r.useState)([]),t=Object(S.a)(n,2);return t[0],t[1],Object(r.useEffect)((function(){Object(y.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:E.a.get("follow/table",{params:{user_id:e}});case 1:case"end":return n.stop()}}),n)})))()}),[]),Object(j.jsx)("div",{})},Re=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(Je,{})})};t(93);var Te=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(G,{})}),Object(j.jsx)(l.a,{path:"/account",element:Object(j.jsx)(K,{})}),Object(j.jsx)(l.a,{path:"/home",element:Object(j.jsx)(ye,{})}),Object(j.jsx)(l.a,{path:"/profile",element:Object(j.jsx)(Ee,{})}),Object(j.jsx)(l.a,{path:"/new",element:Object(j.jsx)(De,{})}),Object(j.jsx)(l.a,{path:"/edit",element:Object(j.jsx)(_e,{})}),Object(j.jsx)(l.a,{path:"/follow",element:Object(j.jsx)(We,{})}),Object(j.jsx)(l.a,{path:"/msg",element:Object(j.jsx)(Re,{})})]})})})},Ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,98)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),i(e),c(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(Te,{})}),document.getElementById("root")),Ue()}},[[94,1,2]]]);
//# sourceMappingURL=main.0abcd59a.chunk.js.map