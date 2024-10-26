import{_ as N,Q as r,R as d,S as a,T as l,L as g,ar as b,X as h,a0 as f,V as t,Y as k,Z as I,$ as E,U as c,aE as w,aC as C,aB as _,W as x,aT as A,aD as P,b8 as G,a3 as y}from"./index.d0cdc383.js";import{a as V,b as p,e as v}from"./QChip.dfad0562.js";import{Q as T}from"./QBtnDropdown.f0870783.js";import{b as Q,Q as O}from"./QTable.47cbe813.js";import{Q as q}from"./QTooltip.6c666962.js";import{Q as S}from"./QSpace.a0dd195b.js";import{Q as U}from"./QSelect.0793eb75.js";import{Q as D}from"./QForm.54665059.js";import{Q as F}from"./QPage.ef29aaa2.js";import{C as B}from"./ClosePopup.bf2a9e3b.js";import"./QList.53b2dad9.js";import"./QMarkupTable.8263b7a1.js";import"./use-fullscreen.33ab63bc.js";import"./format.2cae61da.js";const z={name:"ClientsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:e=>e.option},{name:"id",label:"ID",align:"left",field:e=>e.id},{name:"name",label:"Nombre",align:"left",field:e=>e.name},{name:"username",label:"Usuario",align:"left",field:e=>e.username},{name:"company",label:"Empresa",align:"left",field:e=>{var s;return(s=e==null?void 0:e.company)==null?void 0:s.name}},{name:"boat",label:"Barco",align:"left",field:e=>{var s;return(s=e==null?void 0:e.boat)==null?void 0:s.name}},{name:"permisos",label:"Permisos",align:"left",field:e=>e.permissions.map(s=>s.name).join(", ")},{name:"role",label:"Rol",align:"left",field:e=>e.role}],dialogPermisosRole:!1,loading:!1,users:[],user:{},userDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,permisos:[],permisosRole:[],permisosSelected:[],dialogPermisos:!1,companies:[],boats:[],boatsAll:[],roles:[]}},mounted(){this.companiesGet(),this.boatGet(),this.permissionGet(),this.userGet(),this.rolesGet()},methods:{clickRole(e,s){this.$axios.put(`permissionsRole/${e.id}`,{permissions:s}).then(n=>{}).catch(n=>{this.$alert.error(n.response.data.message)})},rolesGet(){this.$axios.get("roles").then(e=>{this.roles=e.data}).catch(e=>{this.$alert.error(e.response.data.message)})},boatFilter(e){e?this.boats=this.boatsAll.filter(s=>s.company_id===e):this.boats=[]},companiesGet(){this.loading=!0,this.companies=[{name:"Seleccione una empresa",id:""}],this.$axios.get("companies").then(e=>{this.companies=this.companies.concat(e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},boatGet(){this.loading=!0,this.$axios.get("boats").then(e=>{this.boats=e.data,this.boatsAll=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},userPermisos(){this.loading=!0,this.$axios.put(`permissions/${this.user.id}`,{permissions:this.permisosSelected}).then(e=>{this.dialogPermisos=!1;const s=this.users.findIndex(n=>n.id===e.data.id);this.users.splice(s,1,e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},permisosUpdate(e){this.user=e,this.permisosSelected=e.permissions.map(s=>s.id),this.dialogPermisos=!0},permissionGet(){this.$axios.get("permissions").then(e=>{e.data.forEach(s=>{s.label=s.name,s.value=s.id}),this.permisos=e.data}).catch(e=>{this.$alert.error(e.response.data.message)})},userSave(){this.loading=!0,this.user.id?this.$axios.put(`users/${this.user.id}`,this.user).then(e=>{this.userDialog=!1;const s=this.users.findIndex(n=>n.id===this.user.id);this.users.splice(s,1,e.data),this.$alert.success("Usuario actualizado con \xE9xito")}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("users",this.user).then(e=>{this.userDialog=!1,this.users.unshift(e.data),this.$alert.success("Usuario agregado con \xE9xito")}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},userChangePassword(e){this.$alert.promptPassword("Ingrese la nueva contrase\xF1a").onOk(s=>{this.loading=!0,this.$axios.put(`passwordUpdate/${e.id}`,{password:s}).then(n=>{this.$alert.success("Contrase\xF1a cambiada con \xE9xito")}).catch(n=>{this.$alert.error(n.response.data.message)}).finally(()=>{this.loading=!1})})},userDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este usuario?").onOk(()=>{this.loading=!0,this.$axios.delete(`users/${e.id}`).then(s=>{const n=this.users.findIndex(R=>R.id===s.data.id);n>-1&&this.users.splice(n,1),this.$alert.success("Usuario eliminado con \xE9xito")}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})})},userEdit(e){this.userDialog=!0,e.company_id="",this.user={...e}},userAdd(){this.userDialog=!0,this.user={name:"",ci:""}},userGet(){this.loading=!0,this.$axios.get("users").then(e=>{this.users=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})}}},L={style:{display:"flex","flex-wrap":"wrap"}},M={class:"row"},j={class:"col-6 text-right"},H={class:"col-6"},W={class:"text-h6"},X={class:"row"},Y={class:"col-12"},Z={class:"col-12"},J={class:"col-12"},K={class:"col-12"},$={class:"col-12"},ee={class:"col-12"},se={class:"text-h6"},le=t("div",{class:"text-h6"},"Permisos de Roles",-1),oe={class:"row"},ie={class:"col-12"},ae={class:"text-bold"};function te(e,s,n,R,i,u){return r(),d(F,{class:"bg-grey-3 q-pa-md"},{default:a(()=>[l(O,{rows:i.users,columns:i.columns,title:"Usuarios","rows-per-page-options":[0],"row-key":"id",dense:"",filter:i.filter,loading:i.loading},{"body-cell-option":a(o=>[l(Q,{"auto-width":""},{default:a(()=>[l(T,{flat:"",dense:"","dropdown-icon":"more_vert","auto-close":""},{default:a(()=>[g((r(),d(V,{clickable:"",onClick:m=>u.userEdit(o.row)},{default:a(()=>[l(p,{avatar:""},{default:a(()=>[l(b,{name:"edit"})]),_:1}),l(p,null,{default:a(()=>[h("Editar")]),_:1})]),_:2},1032,["onClick"])),[[y]]),g((r(),d(V,{clickable:"",onClick:m=>u.userDelete(o.row)},{default:a(()=>[l(p,{avatar:""},{default:a(()=>[l(b,{name:"delete"})]),_:1}),l(p,null,{default:a(()=>[h("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[y]]),g((r(),d(V,{clickable:"",onClick:m=>u.userChangePassword(o.row)},{default:a(()=>[l(p,{avatar:""},{default:a(()=>[l(b,{name:"vpn_key"})]),_:1}),l(p,null,{default:a(()=>[h("Cambiar Contrase\xF1a")]),_:1})]),_:2},1032,["onClick"])),[[y]]),g((r(),d(V,{clickable:"",onClick:m=>u.permisosUpdate(o.row)},{default:a(()=>[l(p,{avatar:""},{default:a(()=>[l(b,{name:"verified_user"})]),_:1}),l(p,null,{default:a(()=>[h("Permisos")]),_:1})]),_:2},1032,["onClick"])),[[y]])]),_:2},1024)]),_:2},1024)]),"body-cell-role":a(o=>[l(Q,{props:o},{default:a(()=>[o.row.role==="VENDEDOR"?(r(),d(v,{key:0,dense:"",label:"Vendedor",color:"orange","text-color":"white",icon:"account_circle"})):f("",!0),o.row.role==="ADMIN"?(r(),d(v,{key:1,dense:"",label:"Admin",color:"indigo","text-color":"white",icon:"account_circle"})):f("",!0),o.row.role==="SUPERADMIN"?(r(),d(v,{key:2,dense:"",label:"Super admin",color:"purple","text-color":"white",icon:"account_circle"})):f("",!0),o.row.role==="PATRON"?(r(),d(v,{key:3,dense:"",label:"Patron",color:"green","text-color":"white",icon:"account_circle"})):f("",!0)]),_:2},1032,["props"])]),"body-cell-permisos":a(o=>[l(Q,{props:o},{default:a(()=>[t("div",L,[(r(!0),k(E,null,I(o.row.permissions,m=>(r(),d(v,{dense:"",key:m.id,size:"10px"},{default:a(()=>[h(x(m.name),1)]),_:2},1024))),128))])]),_:2},1032,["props"])]),"top-right":a(()=>[t("div",M,[t("div",j,[e.$store.user.id===1?(r(),d(c,{key:0,outline:"",dense:"",icon:"add_circle",class:"q-mr-md",onClick:u.userAdd,label:"Agregar","no-caps":"",loading:i.loading},{default:a(()=>[l(q,null,{default:a(()=>[h("Agregar")]),_:1})]),_:1},8,["onClick","loading"])):f("",!0),e.$store.user.id===1?(r(),d(c,{key:1,outline:"",dense:"",icon:"verified_user",onClick:s[0]||(s[0]=o=>i.dialogPermisosRole=!0),label:"Permisos","no-caps":"",loading:i.loading},{default:a(()=>[l(q,null,{default:a(()=>[h("Permisos")]),_:1})]),_:1},8,["loading"])):f("",!0)]),t("div",H,[l(w,{modelValue:i.filter,"onUpdate:modelValue":s[1]||(s[1]=o=>i.filter=o),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:a(()=>[l(b,{name:"search"})]),_:1},8,["modelValue"])])])]),_:1},8,["rows","columns","filter","loading"]),l(P,{modelValue:i.userDialog,"onUpdate:modelValue":s[10]||(s[10]=o=>i.userDialog=o),persistent:""},{default:a(()=>[l(C,{style:{width:"250px","max-width":"90vw"}},{default:a(()=>[l(_,{class:"row items-center q-pb-none"},{default:a(()=>[t("div",W,x(i.user.id?"Editar":"Agregar")+" Usuario",1),l(S),l(c,{flat:"",dense:"",icon:"close",onClick:s[2]||(s[2]=o=>i.userDialog=!1)})]),_:1}),l(D,{onSubmit:u.userSave},{default:a(()=>[l(_,null,{default:a(()=>[t("div",X,[t("div",Y,[l(w,{modelValue:i.user.name,"onUpdate:modelValue":s[3]||(s[3]=o=>i.user.name=o),label:"Nombre",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"]},null,8,["modelValue","rules"])]),t("div",Z,[l(w,{modelValue:i.user.username,"onUpdate:modelValue":s[4]||(s[4]=o=>i.user.username=o),label:"Usuario",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"]},null,8,["modelValue","rules"])]),t("div",J,[i.user.id?f("",!0):(r(),d(w,{key:0,modelValue:i.user.password,"onUpdate:modelValue":s[6]||(s[6]=o=>i.user.password=o),label:"Contrase\xF1a",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"],type:i.passwordShow?"text":"password"},{append:a(()=>[l(b,{name:i.passwordShow?"visibility":"visibility_off",onClick:s[5]||(s[5]=o=>i.passwordShow=!i.passwordShow)},null,8,["name"])]),_:1},8,["modelValue","rules","type"]))]),t("div",K,[l(U,{modelValue:i.user.role,"onUpdate:modelValue":s[7]||(s[7]=o=>i.user.role=o),label:"Rol",outlined:"",dense:"",options:e.$roles,rules:[o=>!!o||"Campo requerido"],"emit-value":"","map-options":""},null,8,["modelValue","options","rules"])]),t("div",$,[l(U,{modelValue:i.user.company_id,"onUpdate:modelValue":[s[8]||(s[8]=o=>i.user.company_id=o),u.boatFilter],label:"Empresa",outlined:"",dense:"",options:i.companies,"option-label":"name","option-value":"id",hint:"","emit-value":"","map-options":""},null,8,["modelValue","options","onUpdate:modelValue"])]),t("div",ee,[l(U,{modelValue:i.user.boat_id,"onUpdate:modelValue":s[9]||(s[9]=o=>i.user.boat_id=o),label:"Barco",outlined:"",dense:"",options:i.boats,"option-label":"name","option-value":"id",hint:"","emit-value":"","map-options":""},null,8,["modelValue","options"])])])]),_:1}),l(A,{align:"right"},{default:a(()=>[g(l(c,{flat:"",label:"Cancelar",loading:i.loading},null,8,["loading"]),[[B]]),l(c,{color:"primary",label:"Guardar",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(P,{modelValue:i.dialogPermisos,"onUpdate:modelValue":s[13]||(s[13]=o=>i.dialogPermisos=o)},{default:a(()=>[l(C,{style:{width:"450px","max-width":"90vw"}},{default:a(()=>[l(_,{class:"row items-center q-pb-none"},{default:a(()=>[t("div",se,"Permisos de "+x(i.user.name),1),l(S),l(c,{flat:"",dense:"",icon:"close",onClick:s[11]||(s[11]=o=>i.dialogPermisos=!1)})]),_:1}),l(D,{onSubmit:u.userPermisos},{default:a(()=>[l(_,null,{default:a(()=>[l(G,{modelValue:i.permisosSelected,"onUpdate:modelValue":s[12]||(s[12]=o=>i.permisosSelected=o),options:i.permisos,dense:"",type:"checkbox"},null,8,["modelValue","options"])]),_:1}),l(A,{align:"right"},{default:a(()=>[g(l(c,{flat:"",label:"Cancelar",loading:i.loading},null,8,["loading"]),[[B]]),l(c,{color:"primary",label:"Guardar",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(P,{modelValue:i.dialogPermisosRole,"onUpdate:modelValue":s[15]||(s[15]=o=>i.dialogPermisosRole=o)},{default:a(()=>[l(C,{style:{width:"450px","max-width":"90vw"}},{default:a(()=>[l(_,{class:"row items-center q-pb-none"},{default:a(()=>[le,l(S),l(c,{flat:"",dense:"",icon:"close",onClick:s[14]||(s[14]=o=>i.dialogPermisosRole=!1)})]),_:1}),l(_,null,{default:a(()=>[l(D,{onSubmit:u.userPermisos},{default:a(()=>[t("div",oe,[t("div",ie,[(r(!0),k(E,null,I(i.roles,o=>(r(),k("div",{key:o.id},[t("div",ae,x(e.$filters.capitalizeText(o.name)),1),l(G,{modelValue:o.permisosId,"onUpdate:modelValue":[m=>o.permisosId=m,m=>u.clickRole(o,m)],options:i.permisos,dense:"",type:"checkbox"},null,8,["modelValue","onUpdate:modelValue","options"])]))),128))])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var xe=N(z,[["render",te]]);export{xe as default};