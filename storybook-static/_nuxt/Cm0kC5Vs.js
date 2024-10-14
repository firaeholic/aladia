import{l as D,f as $,F as z}from"./3m3GTthy.js";import{_ as G}from"./DlAUqK2U.js";import{L as H,D as m,E as K,M as O,K as j,H as i,G as J,N as Q,F as R}from"./RK4kQ0Je.js";D.add($);const X={components:{FontAwesomeIcon:z},name:"Textfield",props:{fieldMessage:{type:String,required:!1},placeholder:{type:String,required:!1},value:{type:String,required:!1},showIcon:{type:Boolean,default:!1},messageColor:{type:String,default:"red"}}},Y=["value","placeholder"];function Z(ae,se,e,re,oe,ce){const T=H("font-awesome-icon");return m(),K(R,null,[e.showIcon?(m(),O(T,{key:0,icon:["fas","envelope"],class:"absolute left-7 top-7"})):j("",!0),i("input",{value:e.value,placeholder:e.placeholder,class:"w-full p-2 email-field max-w-96 pl-10 border border-gray-600 rounded bg-white text-black focus:outline-none focus:border-blue-500"},null,8,Y),i("div",{style:Q({color:e.messageColor}),class:"text-xs"},J(e.fieldMessage),5)],64)}const ee=G(X,[["render",Z]]),ne={title:"Molecules/Textfield",component:ee},a={args:{placeholder:"Password"}},s={args:{value:"someone2@example.com",showIcon:!0}},r={args:{value:"someone2",fieldMessage:"Invalid Email",showIcon:!0}},o={args:{value:"Abcde1321!",fieldMessage:"Invalid Password"}},c={args:{value:"Abcde1!!",fieldMessage:"Passwords don't match"}},l={args:{value:"Abc1!",fieldMessage:"8 character minimum"}},t={args:{value:"aabsdsdc1!",fieldMessage:"Upper case letter required",messageColor:"orange"}},d={args:{value:"Aasdbcas!",fieldMessage:"Number required",messageColor:"#f5cb42"}},n={args:{value:"Aasdbcas1",fieldMessage:"Symbol required(@$!%*?&)",messageColor:"yellow"}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Password"
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: "someone2@example.com",
    showIcon: true
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var b,h,M;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: "someone2",
    fieldMessage: "Invalid Email",
    showIcon: true
  }
}`,...(M=(h=r.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var S,P,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: "Abcde1321!",
    fieldMessage: "Invalid Password"
  }
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var _,I,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "Abcde1!!",
    fieldMessage: "Passwords don't match"
  }
}`,...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var x,E,A;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: "Abc1!",
    fieldMessage: "8 character minimum"
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var C,q,W;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: "aabsdsdc1!",
    fieldMessage: "Upper case letter required",
    messageColor: 'orange'
  }
}`,...(W=(q=t.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var N,B,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: "Aasdbcas!",
    fieldMessage: "Number required",
    messageColor: '#f5cb42'
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,V,L;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: "Aasdbcas1",
    fieldMessage: "Symbol required(@$!%*?&)",
    messageColor: 'yellow'
  }
}`,...(L=(V=n.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const me=["Empty","ValidEmail","InvalidEmail","InvalidPassword","PasswordMismatch","PasswordWeakLength","PasswordWeakUppercase","PasswordWeakNumber","PasswordWeakSpecial"];export{a as Empty,r as InvalidEmail,o as InvalidPassword,c as PasswordMismatch,l as PasswordWeakLength,d as PasswordWeakNumber,n as PasswordWeakSpecial,t as PasswordWeakUppercase,s as ValidEmail,me as __namedExportsOrder,ne as default};
