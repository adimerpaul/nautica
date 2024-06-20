import{Q as c}from"./QTooltip.8852e1b3.js";import{_ as v,Q as u,R as m,S as r,T as l,U as t,X as p,Z as f,aE as h,an as C,aC as x,aB as _,V as n,W as y,aF as D,L as Q,aG as k}from"./index.ea69d991.js";import{Q as V,a as S,C as U}from"./ClosePopup.6edd962f.js";import{d as g}from"./QChip.54b0f243.js";import{Q as A,a as E}from"./QSpace.f87c73ef.js";import{Q as I}from"./QForm.2a37e5e1.js";import{Q as N}from"./QPage.6495c621.js";import"./position-engine.299ce442.js";import"./QList.99f36a25.js";import"./QMarkupTable.d889b165.js";import"./use-fullscreen.b2b12d06.js";import"./format.2cae61da.js";const q={name:"ClientsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:s=>s.option},{name:"id",label:"ID",align:"left",field:s=>s.id},{name:"name",label:"Nombre",align:"left",field:s=>s.name},{name:"username",label:"Usuario",align:"left",field:s=>s.username},{name:"role",label:"Rol",align:"left",field:s=>s.role}],loading:!1,users:[],user:{},userDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1}},mounted(){this.userGet()},methods:{userSave(){this.loading=!0,this.user.id?this.$axios.put(`users/${this.user.id}`,this.user).then(s=>{this.userDialog=!1;const a=this.users.findIndex(i=>i.id===this.user.id);this.users.splice(a,1,s.data)}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(s=>{this.userDialog=!1,this.users.unshift(s.data)}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})},userChangePassword(s){this.$alert.promptPassword("Ingrese la nueva contrase\xF1a").onOk(a=>{this.loading=!0,this.$axios.put(`passwordUpdate/${s.id}`,{password:a}).then(i=>{this.$alert.success("Contrase\xF1a cambiada con \xE9xito")}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.loading=!1})})},userDelete(s){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este usere?").onOk(()=>{this.loading=!0,this.$axios.delete(`users/${s.id}`).then(a=>{const i=this.users.findIndex(w=>w.id===a.data.id);i>-1&&this.users.splice(i,1)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})})},userEdit(s){this.userDialog=!0,this.user={...s}},userAdd(){this.userDialog=!0,this.user={name:"",ci:""}},userGet(){this.loading=!0,this.$axios.get("users").then(s=>{this.users=s.data}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})}}},P={class:"text-h6"},R={class:"row"},B={class:"col-12"},O={class:"col-12"},T={class:"col-12"},G={class:"col-12"};function M(s,a,i,w,o,d){return u(),m(N,{class:"bg-grey-3 q-pa-md"},{default:r(()=>[l(S,{rows:o.users,columns:o.columns,title:"Usuarios","rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading},{"body-cell-option":r(e=>[l(V,{"auto-width":""},{default:r(()=>[l(t,{flat:"",dense:"",icon:"edit",onClick:b=>d.userEdit(e.row)},{default:r(()=>[l(c,null,{default:r(()=>[p("Editar")]),_:1})]),_:2},1032,["onClick"]),l(t,{flat:"",dense:"",icon:"delete",onClick:b=>d.userDelete(e.row)},{default:r(()=>[l(c,null,{default:r(()=>[p("Eliminar")]),_:1})]),_:2},1032,["onClick"]),l(t,{flat:"",dense:"",icon:"vpn_key",onClick:b=>d.userChangePassword(e.row)},{default:r(()=>[l(c,null,{default:r(()=>[p("Cambiar Contrase\xF1a")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-role":r(e=>[l(V,{props:e},{default:r(()=>[e.row.role==="VENDEDOR"?(u(),m(g,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):f("",!0),e.row.role==="ADMIN"?(u(),m(g,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):f("",!0),e.row.role==="SUPERADMIN"?(u(),m(g,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):f("",!0)]),_:2},1032,["props"])]),"top-right":r(()=>[l(t,{outline:"",dense:"",icon:"add_circle",onClick:d.userAdd,label:"Agregar","no-caps":"",loading:o.loading},{default:r(()=>[l(c,null,{default:r(()=>[p("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),l(h,{modelValue:o.filter,"onUpdate:modelValue":a[0]||(a[0]=e=>o.filter=e),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:r(()=>[l(C,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"]),l(k,{modelValue:o.userDialog,"onUpdate:modelValue":a[7]||(a[7]=e=>o.userDialog=e),persistent:""},{default:r(()=>[l(x,{style:{width:"250px","max-width":"90vw"}},{default:r(()=>[l(_,{class:"row items-center q-pb-none"},{default:r(()=>[n("div",P,y(o.user.id?"Editar":"Agregar")+" Usuario",1),l(A),l(t,{flat:"",dense:"",icon:"close",onClick:a[1]||(a[1]=e=>o.userDialog=!1)})]),_:1}),l(I,{onSubmit:d.userSave},{default:r(()=>[l(_,null,{default:r(()=>[n("div",R,[n("div",B,[l(h,{modelValue:o.user.name,"onUpdate:modelValue":a[2]||(a[2]=e=>o.user.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),n("div",O,[l(h,{modelValue:o.user.username,"onUpdate:modelValue":a[3]||(a[3]=e=>o.user.username=e),label:"Usuario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),n("div",T,[o.user.id?f("",!0):(u(),m(h,{key:0,modelValue:o.user.password,"onUpdate:modelValue":a[5]||(a[5]=e=>o.user.password=e),label:"Contrase\xF1a",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],type:o.passwordShow?"text":"password"},{append:r(()=>[l(C,{name:o.passwordShow?"visibility":"visibility_off",onClick:a[4]||(a[4]=e=>o.passwordShow=!o.passwordShow)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]))]),n("div",G,[l(E,{modelValue:o.user.role,"onUpdate:modelValue":a[6]||(a[6]=e=>o.user.role=e),label:"Rol",outlined:"",dense:"",options:[{label:"Vendedor",value:"VENDEDOR"},{label:"Admin",value:"ADMIN"},{label:"Super Admin",value:"SUPERADMIN"}],rules:[e=>!!e||"Campo requerido"],"emit-value":"","map-options":""},null,8,["modelValue","rules"])])])]),_:1}),l(D,{align:"right"},{default:r(()=>[Q(l(t,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[U]]),l(t,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ee=v(q,[["render",M]]);export{ee as default};
