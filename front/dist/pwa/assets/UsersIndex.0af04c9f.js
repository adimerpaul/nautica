import{_ as N,Q as t,R as n,S as a,T as l,L as h,ar as f,X as g,a0 as m,U as c,aE as b,aC as k,aB as _,V as p,W as Q,Y as S,aT as U,aD as D,b8 as G,a3 as w}from"./index.ef53a57e.js";import{a as y,b as u,e as V}from"./QChip.2472fcbc.js";import{Q as B}from"./QBtnDropdown.07f04442.js";import{b as P,Q as R}from"./QTable.57099e42.js";import{Q as T}from"./QTooltip.d7491c4e.js";import{b as A,Q as x}from"./QSpace.c8eb600c.js";import{Q as E}from"./QForm.2721a59c.js";import{Q as q}from"./QPage.0899af7a.js";import{C as I}from"./ClosePopup.a45ca875.js";import"./QList.7d117ac9.js";import"./QMarkupTable.487b9519.js";import"./use-fullscreen.520bae0c.js";import"./format.2cae61da.js";const O={name:"ClientsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:e=>e.option},{name:"id",label:"ID",align:"left",field:e=>e.id},{name:"name",label:"Nombre",align:"left",field:e=>e.name},{name:"username",label:"Usuario",align:"left",field:e=>e.username},{name:"company",label:"Empresa",align:"left",field:e=>{var s;return(s=e==null?void 0:e.company)==null?void 0:s.name}},{name:"boat",label:"Barco",align:"left",field:e=>{var s;return(s=e==null?void 0:e.boat)==null?void 0:s.name}},{name:"role",label:"Rol",align:"left",field:e=>e.role}],loading:!1,users:[],user:{},userDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,permisos:[],permisosSelected:[],dialogPermisos:!1,companies:[],boats:[],boatsAll:[]}},mounted(){this.companiesGet(),this.boatGet(),this.permissionGet(),this.userGet()},methods:{boatFilter(e){e?this.boats=this.boatsAll.filter(s=>s.company_id===e):this.boats=[]},companiesGet(){this.loading=!0,this.companies=[{name:"Seleccione una empresa",id:""}],this.$axios.get("companies").then(e=>{this.companies=this.companies.concat(e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},boatGet(){this.loading=!0,this.$axios.get("boats").then(e=>{this.boats=e.data,this.boatsAll=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},userPermisos(){this.loading=!0,this.$axios.put(`permissions/${this.user.id}`,{permissions:this.permisosSelected}).then(e=>{this.dialogPermisos=!1;const s=this.users.findIndex(r=>r.id===e.data.id);this.users.splice(s,1,e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},permisosUpdate(e){this.user=e,this.permisosSelected=e.permissions.map(s=>s.id),this.dialogPermisos=!0},permissionGet(){this.$axios.get("permissions").then(e=>{e.data.forEach(s=>{s.label=s.name,s.value=s.id}),this.permisos=e.data}).catch(e=>{this.$alert.error(e.response.data.message)})},userSave(){this.loading=!0,this.user.id?this.$axios.put(`users/${this.user.id}`,this.user).then(e=>{this.userDialog=!1;const s=this.users.findIndex(r=>r.id===this.user.id);this.users.splice(s,1,e.data),this.$alert.success("Usuario actualizado con \xE9xito")}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(e=>{this.userDialog=!1,this.users.unshift(e.data),this.$alert.success("Usuario agregado con \xE9xito")}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},userChangePassword(e){this.$alert.promptPassword("Ingrese la nueva contrase\xF1a").onOk(s=>{this.loading=!0,this.$axios.put(`passwordUpdate/${e.id}`,{password:s}).then(r=>{this.$alert.success("Contrase\xF1a cambiada con \xE9xito")}).catch(r=>{this.$alert.error(r.response.data.message)}).finally(()=>{this.loading=!1})})},userDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este usuario?").onOk(()=>{this.loading=!0,this.$axios.delete(`users/${e.id}`).then(s=>{const r=this.users.findIndex(C=>C.id===s.data.id);r>-1&&this.users.splice(r,1),this.$alert.success("Usuario eliminado con \xE9xito")}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})})},userEdit(e){this.userDialog=!0,e.company_id="",this.user={...e}},userAdd(){this.userDialog=!0,this.user={name:"",ci:""}},userGet(){this.loading=!0,this.$axios.get("users").then(e=>{this.users=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})}}},F={class:"text-h6"},M={class:"row"},z={class:"col-12"},H={class:"col-12"},L={class:"col-12"},W={class:"col-12"},X={key:0,class:"col-12"},Y={key:1,class:"col-12"},j={class:"text-h6"};function J(e,s,r,C,o,d){return t(),n(q,{class:"bg-grey-3 q-pa-md"},{default:a(()=>[l(R,{rows:o.users,columns:o.columns,title:"Usuarios","rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading},{"body-cell-option":a(i=>[l(P,{"auto-width":""},{default:a(()=>[l(B,{flat:"",dense:"","dropdown-icon":"more_vert","auto-close":""},{default:a(()=>[h((t(),n(y,{clickable:"",onClick:v=>d.userEdit(i.row)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(f,{name:"edit"})]),_:1}),l(u,null,{default:a(()=>[g("Editar")]),_:1})]),_:2},1032,["onClick"])),[[w]]),h((t(),n(y,{clickable:"",onClick:v=>d.userDelete(i.row)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(f,{name:"delete"})]),_:1}),l(u,null,{default:a(()=>[g("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[w]]),h((t(),n(y,{clickable:"",onClick:v=>d.userChangePassword(i.row)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(f,{name:"vpn_key"})]),_:1}),l(u,null,{default:a(()=>[g("Cambiar Contrase\xF1a")]),_:1})]),_:2},1032,["onClick"])),[[w]]),h((t(),n(y,{clickable:"",onClick:v=>d.permisosUpdate(i.row)},{default:a(()=>[l(u,{avatar:""},{default:a(()=>[l(f,{name:"verified_user"})]),_:1}),l(u,null,{default:a(()=>[g("Permisos")]),_:1})]),_:2},1032,["onClick"])),[[w]])]),_:2},1024)]),_:2},1024)]),"body-cell-role":a(i=>[l(P,{props:i},{default:a(()=>[i.row.role==="VENDEDOR"?(t(),n(V,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):m("",!0),i.row.role==="ADMIN"?(t(),n(V,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):m("",!0),i.row.role==="SUPERADMIN"?(t(),n(V,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):m("",!0),i.row.role==="PATRON"?(t(),n(V,{key:3,dense:"",label:"Patron",color:"green","text-color":"white",icon:"account_circle"})):m("",!0)]),_:2},1032,["props"])]),"top-right":a(()=>[l(c,{outline:"",dense:"",icon:"add_circle",onClick:d.userAdd,label:"Agregar","no-caps":"",loading:o.loading},{default:a(()=>[l(T,null,{default:a(()=>[g("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),l(b,{modelValue:o.filter,"onUpdate:modelValue":s[0]||(s[0]=i=>o.filter=i),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:a(()=>[l(f,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"]),l(D,{modelValue:o.userDialog,"onUpdate:modelValue":s[9]||(s[9]=i=>o.userDialog=i),persistent:""},{default:a(()=>[l(k,{style:{width:"250px","max-width":"90vw"}},{default:a(()=>[l(_,{class:"row items-center q-pb-none"},{default:a(()=>[p("div",F,Q(o.user.id?"Editar":"Agregar")+" Usuario",1),l(A),l(c,{flat:"",dense:"",icon:"close",onClick:s[1]||(s[1]=i=>o.userDialog=!1)})]),_:1}),l(E,{onSubmit:d.userSave},{default:a(()=>[l(_,null,{default:a(()=>[p("div",M,[p("div",z,[l(b,{modelValue:o.user.name,"onUpdate:modelValue":s[2]||(s[2]=i=>o.user.name=i),label:"Nombre",outlined:"",dense:"",rules:[i=>!!i||"Campo requerido"]},null,8,["modelValue","rules"])]),p("div",H,[l(b,{modelValue:o.user.username,"onUpdate:modelValue":s[3]||(s[3]=i=>o.user.username=i),label:"Usuario",outlined:"",dense:"",rules:[i=>!!i||"Campo requerido"]},null,8,["modelValue","rules"])]),p("div",L,[o.user.id?m("",!0):(t(),n(b,{key:0,modelValue:o.user.password,"onUpdate:modelValue":s[5]||(s[5]=i=>o.user.password=i),label:"Contrase\xF1a",outlined:"",dense:"",rules:[i=>!!i||"Campo requerido"],type:o.passwordShow?"text":"password"},{append:a(()=>[l(f,{name:o.passwordShow?"visibility":"visibility_off",onClick:s[4]||(s[4]=i=>o.passwordShow=!o.passwordShow)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]))]),p("div",W,[l(x,{modelValue:o.user.role,"onUpdate:modelValue":s[6]||(s[6]=i=>o.user.role=i),label:"Rol",outlined:"",dense:"",options:e.$roles,rules:[i=>!!i||"Campo requerido"],"emit-value":"","map-options":""},null,8,["modelValue","options","rules"])]),o.user.role=="PATRON"?(t(),S("div",X,[l(x,{modelValue:o.user.company_id,"onUpdate:modelValue":[s[7]||(s[7]=i=>o.user.company_id=i),d.boatFilter],label:"Empresa",outlined:"",dense:"",options:o.companies,"option-label":"name","option-value":"id",hint:"","emit-value":"","map-options":""},null,8,["modelValue","options","onUpdate:modelValue"])])):m("",!0),o.user.role=="PATRON"?(t(),S("div",Y,[l(x,{modelValue:o.user.boat_id,"onUpdate:modelValue":s[8]||(s[8]=i=>o.user.boat_id=i),label:"Barco",outlined:"",dense:"",options:o.boats,"option-label":"name","option-value":"id",hint:"","emit-value":"","map-options":""},null,8,["modelValue","options"])])):m("",!0)])]),_:1}),l(U,{align:"right"},{default:a(()=>[h(l(c,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[I]]),l(c,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(D,{modelValue:o.dialogPermisos,"onUpdate:modelValue":s[12]||(s[12]=i=>o.dialogPermisos=i)},{default:a(()=>[l(k,{style:{width:"450px","max-width":"90vw"}},{default:a(()=>[l(_,{class:"row items-center q-pb-none"},{default:a(()=>[p("div",j,"Permisos de "+Q(o.user.name),1),l(A),l(c,{flat:"",dense:"",icon:"close",onClick:s[10]||(s[10]=i=>o.dialogPermisos=!1)})]),_:1}),l(E,{onSubmit:d.userPermisos},{default:a(()=>[l(_,null,{default:a(()=>[l(G,{modelValue:o.permisosSelected,"onUpdate:modelValue":s[11]||(s[11]=i=>o.permisosSelected=i),options:o.permisos,dense:"",type:"checkbox"},null,8,["modelValue","options"])]),_:1}),l(U,{align:"right"},{default:a(()=>[h(l(c,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[I]]),l(c,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ue=N(O,[["render",J]]);export{ue as default};
