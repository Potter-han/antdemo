import{u as O,r as u,o as E,w as U,a as n,b as v,c as w,d as a,e,f as i,g as p,h as V,i as c,j as m,t as f,C as $,k as T,n as j,m as q,p as P,l as Q}from"./index-BcLJizlc.js";import{s as X}from"./service-BS3Pjq1X.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{U as F}from"./UserOutlined-CNYvPbDU.js";const G=l=>(P("data-v-4c115cb8"),l=l(),Q(),l),J=G(()=>i("div",{class:"logo"},null,-1)),W={class:"user"},Z={style:{color:"white"}},ee={key:0},te={__name:"index",setup(l){const o=O(),y=u([]),_=u(["/index"]),b=u(document.body.clientHeight-120+"px"),C=u({path:o.currentRoute.value.path,breadcrumbName:o.currentRoute.value.meta.title}),d=u([{path:"/index",breadcrumbName:"控制台"}]),g=u(["/","/index"]),N=u(5);E(()=>{o.push("/index")}),U(()=>o.currentRoute.value,(t,s)=>{C.value={path:t.path,breadcrumbName:t.meta.title},_.value=[t.path],!g.value.includes(t.path)&&(g.value.push(t.path),d.value.push({breadcrumbName:t.meta.title,path:t.path}))}),window.addEventListener("resize",()=>{b.value=document.body.clientHeight-120+"px"}),(()=>{y.value=o.options.routes[0].children.map(t=>t.meta).slice(0,3)})();const I=t=>{if(t.key==0)return o.push("/userCenter");if(t.key==1)return o.push("/index");if(t.key==3){q.close(),m().$reset(),X().$reset(),o.push("/login");return}};return(t,s)=>{const S=n("a-avatar"),z=n("a-badge"),h=n("a-menu-item"),L=n("a-menu-divider"),x=n("a-menu"),M=n("a-dropdown"),R=n("a-layout-header"),A=n("router-link"),D=n("a-breadcrumb"),B=n("router-view"),H=n("a-layout-content"),K=n("a-layout");return v(),w(K,null,{default:a(()=>[e(R,{style:{position:"fixed",zIndex:1,width:"100%"}},{default:a(()=>[J,i("div",W,[e(M,{trigger:["hover"]},{overlay:a(()=>[e(x,{onClick:I},{default:a(()=>[e(h,{key:"0"},{default:a(()=>[p("个人中心")]),_:1}),e(h,{key:"1"},{default:a(()=>[p("控制台")]),_:1}),e(L),e(h,{key:"3"},{default:a(()=>[p("退出登录")]),_:1})]),_:1})]),default:a(()=>[i("a",{class:"ant-dropdown-link",onClick:s[0]||(s[0]=V(()=>{},["prevent"]))},[e(z,{count:N.value},{default:a(()=>[e(S,{size:"large",shape:"square",src:c(m)().avatarurl?c(m)().avatarurl:"https://tse4-mm.cn.bing.net/th/id/OIP-C.uMf5AX3a6yYpIhpEkyDxiQAAAA?rs=1&pid=ImgDetMain"},{icon:a(()=>[e(c(F))]),_:1},8,["src"])]),_:1},8,["count"]),i("span",Z,f(c(m)().username),1),e(c($),{style:{color:"white","font-size":"large"}})])]),_:1})]),e(x,{selectedKeys:_.value,"onUpdate:selectedKeys":s[1]||(s[1]=r=>_.value=r),theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},items:y.value,onClick:s[2]||(s[2]=r=>c(o).push({path:r.key}))},null,8,["selectedKeys","items"])]),_:1}),e(H,{style:{padding:"0 50px",marginTop:"64px"}},{default:a(()=>[e(D,{style:{margin:"16px 0"},routes:d.value},{itemRender:a(({route:r,paths:k})=>[d.value.indexOf(r)===d.value.length-1?(v(),T("span",ee,f(r.breadcrumbName),1)):(v(),w(A,{key:1,to:`${k[k.length-1]}`},{default:a(()=>[p(f(r.breadcrumbName),1)]),_:2},1032,["to"]))]),_:1},8,["routes"]),i("div",{style:j({background:"#fff",padding:"5px",height:b.value})},[e(B)],4)]),_:1})]),_:1})}}},ue=Y(te,[["__scopeId","data-v-4c115cb8"]]);export{ue as default};
