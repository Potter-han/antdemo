import{j as N,r as m,a as n,b as c,k as p,e,d as a,f as _,F as S,x as V,i as x,g as d,q as h,y as z,t as R}from"./index-hS4mzb-q.js";import{d as T,u as U}from"./fileOperation-CaNOphSy.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";const D={class:"page"},E={class:"leftBox"},G=["onClick"],M={class:"rightBox"},$={class:"avatar"},A={class:"form"},H={__name:"userCenter",setup(J){const r=N(),t=m(r.userInfo);m({nickname:[{required:!0,message:"请输入昵称",trigger:"blur"}],gender:[{required:!0,message:"请选择性别",trigger:"change"}],mail:[{required:!0,message:"请输入邮箱",trigger:"blur"}],sign:[{required:!0,message:"请输入签名",trigger:"blur"}]});const C=m([{name:"基础设置"},{name:"创作中心"}]),f=m("基础设置"),I=u=>(r.avatarurl?T(r.avatarurl.split("/")[3],()=>{U(u,l=>{t.value.avatarurl="http://"+decodeURI(l.Location)})}):U(u,l=>{t.value.avatarurl="http://"+decodeURI(l.Location)}),setTimeout(()=>{g(!1)},1e3),!1),g=u=>{t.value.gender=Number(t.value.gender),r.updateUserInfo(t.value),u&&h.success("保存成功")},y=()=>{t.value=r.userInfo};return(u,l)=>{const b=n("a-col"),F=n("a-avatar"),q=n("a-upload"),i=n("a-input"),s=n("a-form-item"),v=n("a-radio"),B=n("a-radio-group"),k=n("a-button"),L=n("a-form"),w=n("a-row");return c(),p("div",D,[e(w,null,{default:a(()=>[e(b,{xs:0,sm:4},{default:a(()=>[_("div",E,[(c(!0),p(S,null,V(C.value,o=>(c(),p("div",{class:z(["menu",f.value===o.name?"active":""]),onClick:()=>{f.value=o.name},key:o.name},R(o.name),11,G))),128))])]),_:1}),e(b,{xs:24,sm:20},{default:a(()=>[_("div",M,[_("div",$,[e(q,{name:"file",maxCount:1,showUploadList:!1,"before-upload":I},{default:a(()=>[e(F,{size:80,src:t.value.avatarurl},null,8,["src"])]),_:1})]),_("div",A,[e(L,{layout:"vertical",model:t.value},{default:a(()=>[e(s,{label:"用户账号"},{default:a(()=>[e(i,{value:x(r).loginInfo.username,"onUpdate:value":l[0]||(l[0]=o=>x(r).loginInfo.username=o),disabled:""},null,8,["value"])]),_:1}),e(s,{label:"用户昵称",name:"nickname"},{default:a(()=>[e(i,{value:t.value.nickname,"onUpdate:value":l[1]||(l[1]=o=>t.value.nickname=o)},null,8,["value"])]),_:1}),e(s,{label:"用户性别",name:"gender"},{default:a(()=>[e(B,{value:t.value.gender,"onUpdate:value":l[2]||(l[2]=o=>t.value.gender=o),name:"radioGroup"},{default:a(()=>[e(v,{value:"0"},{default:a(()=>[d("保密")]),_:1}),e(v,{value:"1"},{default:a(()=>[d("男")]),_:1}),e(v,{value:"2"},{default:a(()=>[d("女")]),_:1})]),_:1},8,["value"])]),_:1}),e(s,{label:"联系邮箱",name:"mail"},{default:a(()=>[e(i,{value:t.value.mail,"onUpdate:value":l[3]||(l[3]=o=>t.value.mail=o)},null,8,["value"])]),_:1}),e(s,{label:"个性签名",name:"sign"},{default:a(()=>[e(i,{value:t.value.sign,"onUpdate:value":l[4]||(l[4]=o=>t.value.sign=o)},null,8,["value"])]),_:1}),e(s,null,{default:a(()=>[e(k,{type:"primary",style:{"margin-right":".625rem"},onClick:l[5]||(l[5]=o=>g(!0))},{default:a(()=>[d("提交")]),_:1}),e(k,{onClick:y},{default:a(()=>[d("重置")]),_:1})]),_:1})]),_:1},8,["model"])])])]),_:1})]),_:1})])}}},Q=j(H,[["__scopeId","data-v-96110107"]]);export{Q as default};
