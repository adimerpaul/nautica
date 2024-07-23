import{_ as Q,Q as f,R as h,S as t,T as i,V as s,aE as d,U as j,aC as U,L as v,ar as V,X as _,Z as k,b9 as A,aB as F,W as S,aU as L,aD as Y,a3 as C}from"./index.4b805d87.js";import{a as y,b as m,e as w}from"./QChip.75150d70.js";import{Q as q}from"./QList.227bd71c.js";import{Q as O}from"./QBtnDropdown.eb357689.js";import{b as D,Q as T}from"./QTable.00ac40c2.js";import{b as M,Q as R}from"./QSpace.aca64fbf.js";import{Q as B,a as P}from"./QForm.6bbf5327.js";import{C as z}from"./ClosePopup.f8c58c97.js";import{h as p}from"./moment.40bc58bf.js";import"./QMarkupTable.998cfc10.js";import"./use-fullscreen.309b04ff.js";import"./format.2cae61da.js";const N={name:"CompaniesIndex",data(){return{fechaInicio:p().startOf("month").format("YYYY-MM-DD"),fechaFin:p().endOf("month").format("YYYY-MM-DD"),columns:[{name:"option",label:"Opciones",align:"left",field:a=>a.option},{name:"id",label:"ID",align:"left",field:a=>a.id},{name:"name",label:"Empresa",align:"left",field:a=>{var l,n;return(n=(l=a==null?void 0:a.boat)==null?void 0:l.company)==null?void 0:n.name}},{name:"boat",label:"Barco",align:"left",field:a=>{var l;return(l=a==null?void 0:a.boat)==null?void 0:l.name}},{name:"zarpe",label:"Zarpe",align:"left",field:a=>a.zarpe},{name:"dias",label:"D\xEDas",align:"left",field:a=>a.dias},{name:"fechaInicio",label:"Fecha Inicio",align:"left",field:a=>this.$filters.formatdMY(a.fechaInicio)},{name:"fechaFin",label:"Fecha Fin",align:"left",field:a=>this.$filters.formatdMY(a.fechaFin)},{name:"status",label:"Estado",align:"left",field:a=>a.status}],loading:!1,moment:p,viajes:[],viaje:{},viajeDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,boats:[]}},mounted(){this.viajeGet(),this.boatsGet()},methods:{caculoDias(){if(this.viaje.fechaInicio&&this.viaje.fechaFin){const a=p(this.viaje.fechaFin).diff(p(this.viaje.fechaInicio),"days");this.viaje.dias=a}},boatsGet(){this.loading=!0,this.$axios.get("boats").then(a=>{this.boats=a.data}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},viajeSave(){this.loading=!0,this.viaje.id?this.$axios.put(`viajes/${this.viaje.id}`,this.viaje).then(a=>{this.viajeDialog=!1;const l=this.viajes.findIndex(n=>n.id===this.viaje.id);this.viajes.splice(l,1,a.data)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("viajes",this.viaje).then(a=>{this.viajeDialog=!1,this.viajes.unshift(a.data)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},viajeClose(a){this.$alert.confirm("\xBFEst\xE1 seguro de cerrar este viaje?").onOk(()=>{this.loading=!0,this.$axios.put(`viajes/${a.id}/close`).then(l=>{const n=this.viajes.findIndex(r=>r.id===l.data.id);this.viajes.splice(n,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},listaTripulantes(a){this.loading=!0,this.$axios.get(`listaTripulantes/${a.id}`,{responseType:"blob"}).then(l=>{const n=window.URL.createObjectURL(new Blob([l.data],{type:"application/pdf"})),r=window.document.createElement("a");r.href=n,r.setAttribute("download",`listaTripulantes-${a.id}.pdf`),window.document.body.appendChild(r),r.click(),r.remove(),window.URL.revokeObjectURL(n)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},addProducts(a){this.$router.push("/viajesShow/"+a.id)},viajeDelete(a){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este viaje?").onOk(()=>{this.loading=!0,this.$axios.delete(`viajes/${a.id}`).then(l=>{const n=this.viajes.findIndex(r=>r.id===l.data.id);console.log(n),n!==-1&&this.viajes.splice(n,1)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},viajeEdit(a){this.viajeDialog=!0,this.viaje={...a}},viajeAdd(){this.viajeDialog=!0,this.viaje={fechaInicio:p().format("YYYY-MM-DD"),fechaFin:p().add(1,"month").format("YYYY-MM-DD"),boat_id:"",observaciones:"",hora:p().format("HH:00"),dias:"",zarpe:"",puertoSalida:"MUELLE DE PESCA, PUERTO EL TRIUNFO",puertoLlegada:"MUELLE DE PESCA, PUERTO EL TRIUNFO",bandera:"SALVADORE\xD1A ESA-00283 (ARB 90.74 TM)",propietario:"LA REYNAGA MORENO, S.A. DE C.V."},this.caculoDias()},viajeGet(){this.loading=!0,this.$axios.get("viajes",{params:{fechaInicio:this.fechaInicio,fechaFin:this.fechaFin}}).then(a=>{this.viajes=a.data}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})}}},G={class:"row"},H={class:"col-6 col-md-2 q-pa-xs"},Z={class:"col-6 col-md-2 q-pa-xs"},W={class:"col-12 col-md-3 q-pa-xs"},X={class:"col-12 col-md-5 q-pa-xs text-right"},J={class:"text-h6"},K={class:"row"},$={class:"col-12 col-md-6"},ee={class:"col-12 col-md-6"},ae={class:"col-12 col-md-6"},le={class:"col-12 col-md-6"},ie={class:"col-12"},oe={class:"col-12"},te={class:"col-12"},se={class:"col-12"},ne={class:"col-12"},de={class:"col-12"};function re(a,l,n,r,o,u){return f(),h(B,{class:"bg-grey-3 q-pa-xs"},{default:t(()=>[i(U,null,{default:t(()=>[s("div",G,[s("div",H,[i(d,{modelValue:o.fechaInicio,"onUpdate:modelValue":l[0]||(l[0]=e=>o.fechaInicio=e),label:"Fecha Inicio",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",Z,[i(d,{modelValue:o.fechaFin,"onUpdate:modelValue":l[1]||(l[1]=e=>o.fechaFin=e),label:"Fecha Fin",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",W,[i(d,{modelValue:o.filter,"onUpdate:modelValue":l[2]||(l[2]=e=>o.filter=e),label:"Buscar",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",X,[i(j,{color:"indigo",label:"Buscar",onClick:u.viajeGet,"no-caps":"",icon:"search",loading:o.loading},null,8,["onClick","loading"]),i(j,{color:"green",label:"Agregar",onClick:u.viajeAdd,"no-caps":"",icon:"add_circle_outline",loading:o.loading},null,8,["onClick","loading"])])])]),_:1}),i(T,{rows:o.viajes,columns:o.columns,"rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading},{"body-cell-option":t(e=>[i(D,{"auto-width":""},{default:t(()=>[e.row.status!=="Finalizado"?(f(),h(O,{key:0,label:"Opciones",color:"primary","auto-close":"","no-caps":"",size:"10px"},{default:t(()=>[i(q,null,{default:t(()=>[e.row.estado==="Activo"?v((f(),h(y,{key:0,clickable:"",onClick:c=>u.viajeEdit(e.row)},{default:t(()=>[i(m,{avatar:""},{default:t(()=>[i(V,{name:"edit"})]),_:1}),i(m,null,{default:t(()=>[_("Editar")]),_:1})]),_:2},1032,["onClick"])),[[C]]):k("",!0),e.row.estado==="Activo"?v((f(),h(y,{key:1,clickable:"",onClick:c=>u.viajeDelete(e.row)},{default:t(()=>[i(m,{avatar:""},{default:t(()=>[i(V,{name:"delete"})]),_:1}),i(m,null,{default:t(()=>[_("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[C]]):k("",!0),v((f(),h(y,{clickable:"",onClick:c=>u.addProducts(e.row)},{default:t(()=>[i(m,{avatar:""},{default:t(()=>[i(V,{name:"add_shopping_cart"})]),_:1}),i(m,null,{default:t(()=>[_("Agregar productos")]),_:1})]),_:2},1032,["onClick"])),[[C]]),v((f(),h(y,{clickable:"",onClick:c=>u.listaTripulantes(e.row)},{default:t(()=>[i(m,{avatar:""},{default:t(()=>[i(V,{name:"print"})]),_:1}),i(m,null,{default:t(()=>[_("Lista Tripulantes")]),_:1})]),_:2},1032,["onClick"])),[[C]]),e.row.estado==="Activo"?v((f(),h(y,{key:2,clickable:"",onClick:c=>u.viajeClose(e.row)},{default:t(()=>[i(m,{avatar:""},{default:t(()=>[i(V,{name:"close"})]),_:1}),i(m,null,{default:t(()=>[_("Cerrar Viaje")]),_:1})]),_:2},1032,["onClick"])),[[C]]):k("",!0)]),_:2},1024)]),_:2},1024)):k("",!0)]),_:2},1024)]),"body-cell-name":t(e=>[i(D,{props:e},{default:t(()=>{var c,g,b,x,E,I;return[i(w,{label:(b=(g=(c=e.row)==null?void 0:c.boat)==null?void 0:g.company)==null?void 0:b.name,"text-color":"white",style:A({backgroundColor:(I=(E=(x=e.row)==null?void 0:x.boat)==null?void 0:E.company)==null?void 0:I.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"body-cell-status":t(e=>[i(D,{props:e},{default:t(()=>{var c,g,b;return[((c=e.row)==null?void 0:c.estado)==="Activo"?(f(),h(w,{key:0,label:(g=e.row)==null?void 0:g.estado,"text-color":"white",dense:"",color:"green"},null,8,["label"])):(f(),h(w,{key:1,label:(b=e.row)==null?void 0:b.estado,"text-color":"white",dense:"",color:"red"},null,8,["label"]))]}),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","loading"]),i(Y,{modelValue:o.viajeDialog,"onUpdate:modelValue":l[14]||(l[14]=e=>o.viajeDialog=e),persistent:""},{default:t(()=>[i(U,{style:{width:"350px","max-width":"95vw"}},{default:t(()=>[i(F,{class:"row items-center q-pb-none"},{default:t(()=>[s("div",J,S(o.viaje.id?"Editar":"Agregar")+" Viaje",1),i(M),i(j,{flat:"",dense:"",icon:"close",onClick:l[3]||(l[3]=e=>o.viajeDialog=!1)})]),_:1}),i(P,{onSubmit:u.viajeSave},{default:t(()=>[i(F,null,{default:t(()=>[s("div",K,[s("div",$,[i(d,{modelValue:o.viaje.fechaInicio,"onUpdate:modelValue":[l[4]||(l[4]=e=>o.viaje.fechaInicio=e),u.caculoDias],label:"Fecha Inicio",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",ee,[i(d,{modelValue:o.viaje.fechaFin,"onUpdate:modelValue":[l[5]||(l[5]=e=>o.viaje.fechaFin=e),u.caculoDias],label:"Fecha Fin",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido",e=>o.moment(e).isSameOrAfter(o.viaje.fechaInicio)||"La fecha debe ser mayor o igual a la fecha de inicio"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",ae,[i(d,{modelValue:o.viaje.hora,"onUpdate:modelValue":l[6]||(l[6]=e=>o.viaje.hora=e),label:"Hora",outlined:"",dense:"",type:"time",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",le,[i(d,{modelValue:o.viaje.dias,"onUpdate:modelValue":l[7]||(l[7]=e=>o.viaje.dias=e),label:"D\xEDas",outlined:"",dense:"",type:"number",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ie,[i(d,{modelValue:o.viaje.zarpe,"onUpdate:modelValue":l[8]||(l[8]=e=>o.viaje.zarpe=e),label:"Zarpe",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",oe,[i(d,{modelValue:o.viaje.puertoSalida,"onUpdate:modelValue":l[9]||(l[9]=e=>o.viaje.puertoSalida=e),label:"Puerto de Salida",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",te,[i(d,{modelValue:o.viaje.puertoLlegada,"onUpdate:modelValue":l[10]||(l[10]=e=>o.viaje.puertoLlegada=e),label:"Puerto de Llegada",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",se,[i(d,{modelValue:o.viaje.bandera,"onUpdate:modelValue":l[11]||(l[11]=e=>o.viaje.bandera=e),label:"Bandera",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ne,[i(d,{modelValue:o.viaje.propietario,"onUpdate:modelValue":l[12]||(l[12]=e=>o.viaje.propietario=e),label:"Propietario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",de,[i(R,{modelValue:o.viaje.boat_id,"onUpdate:modelValue":l[13]||(l[13]=e=>o.viaje.boat_id=e),options:o.boats,label:"Barco",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])])])]),_:1}),i(L,{align:"right"},{default:t(()=>[v(i(j,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[z]]),i(j,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ce=Q(N,[["render",re]]);export{Ce as default};
