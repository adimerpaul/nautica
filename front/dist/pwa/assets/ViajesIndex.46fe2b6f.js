import{_ as Q,Q as c,R as m,S as t,T as o,V as s,aD as d,U as _,aC as I,L as C,ar as y,X as w,Z as D,b8 as S,aB as U,W as L,aF as A,aE as Y,a3 as x}from"./index.af1c8bda.js";import{a as k,b as p,e as E}from"./QChip.dfb61d16.js";import{Q as q}from"./QList.f59cf983.js";import{Q as O}from"./QBtnDropdown.9a792fde.js";import{b as F,Q as T,C as M}from"./ClosePopup.8c6c81e0.js";import{Q as R,a as B}from"./QSpace.9c1a12fd.js";import{a as P,Q as z}from"./QForm.4fe3df70.js";import{h}from"./moment.40bc58bf.js";import"./QMarkupTable.e0e6cbe5.js";import"./use-fullscreen.447fcdef.js";import"./format.2cae61da.js";const N={name:"CompaniesIndex",data(){return{fechaInicio:h().startOf("month").format("YYYY-MM-DD"),fechaFin:h().endOf("month").format("YYYY-MM-DD"),columns:[{name:"option",label:"Opciones",align:"left",field:l=>l.option},{name:"id",label:"ID",align:"left",field:l=>l.id},{name:"name",label:"Empresa",align:"left",field:l=>{var a,n;return(n=(a=l==null?void 0:l.boat)==null?void 0:a.company)==null?void 0:n.name}},{name:"boat",label:"Barco",align:"left",field:l=>{var a;return(a=l==null?void 0:l.boat)==null?void 0:a.name}},{name:"zarpe",label:"Zarpe",align:"left",field:l=>l.zarpe},{name:"dias",label:"D\xEDas",align:"left",field:l=>l.dias},{name:"fechaInicio",label:"Fecha Inicio",align:"left",field:l=>this.$filters.formatdMY(l.fechaInicio)},{name:"fechaFin",label:"Fecha Fin",align:"left",field:l=>this.$filters.formatdMY(l.fechaFin)},{name:"status",label:"Estado",align:"left",field:l=>l.status}],loading:!1,moment:h,viajes:[],viaje:{},viajeDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,boats:[]}},mounted(){this.viajeGet(),this.boatsGet()},methods:{caculoDias(){if(this.viaje.fechaInicio&&this.viaje.fechaFin){const l=h(this.viaje.fechaFin).diff(h(this.viaje.fechaInicio),"days");this.viaje.dias=l}},boatsGet(){this.loading=!0,this.$axios.get("boats").then(l=>{this.boats=l.data}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},viajeSave(){this.loading=!0,this.viaje.id?this.$axios.put(`viajes/${this.viaje.id}`,this.viaje).then(l=>{this.viajeDialog=!1;const a=this.viajes.findIndex(n=>n.id===this.viaje.id);this.viajes.splice(a,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("viajes",this.viaje).then(l=>{this.viajeDialog=!1,this.viajes.unshift(l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},listaTripulantes(l){this.loading=!0,this.$axios.get(`listaTripulantes/${l.id}`,{responseType:"blob"}).then(a=>{const n=window.URL.createObjectURL(new Blob([a.data],{type:"application/pdf"})),f=window.document.createElement("a");f.href=n,f.setAttribute("download",`listaTripulantes-${l.id}.pdf`),window.document.body.appendChild(f),f.click(),f.remove(),window.URL.revokeObjectURL(n)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},addProducts(l){this.$router.push("/viajesShow/"+l.id)},viajeDelete(l){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este viaje?").onOk(()=>{this.loading=!0,this.$axios.delete(`viajes/${l.id}`).then(a=>{const n=this.viajes.findIndex(f=>f.id===a.data.id);console.log(n),n!==-1&&this.viajes.splice(n,1)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})})},viajeEdit(l){this.viajeDialog=!0,this.viaje={...l}},viajeAdd(){this.viajeDialog=!0,this.viaje={fechaInicio:h().format("YYYY-MM-DD"),fechaFin:h().add(1,"month").format("YYYY-MM-DD"),boat_id:"",observaciones:"",hora:h().format("HH:00"),dias:"",zarpe:"",puertoSalida:"MUELLE DE PESCA, PUERTO EL TRIUNFO",puertoLlegada:"MUELLE DE PESCA, PUERTO EL TRIUNFO",bandera:"SALVADORE\xD1A ESA-00283 (ARB 90.74 TM)",propietario:"LA REYNAGA MORENO, S.A. DE C.V."},this.caculoDias()},viajeGet(){this.loading=!0,this.$axios.get("viajes",{params:{fechaInicio:this.fechaInicio,fechaFin:this.fechaFin}}).then(l=>{this.viajes=l.data}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})}}},G={class:"row"},H={class:"col-6 col-md-2 q-pa-xs"},Z={class:"col-6 col-md-2 q-pa-xs"},W={class:"col-12 col-md-3 q-pa-xs"},X={class:"col-12 col-md-5 q-pa-xs text-right"},J={class:"text-h6"},K={class:"row"},$={class:"col-12 col-md-6"},ee={class:"col-12 col-md-6"},le={class:"col-12 col-md-6"},ae={class:"col-12 col-md-6"},ie={class:"col-12"},oe={class:"col-12"},te={class:"col-12"},se={class:"col-12"},ne={class:"col-12"},de={class:"col-12"};function re(l,a,n,f,i,r){return c(),m(P,{class:"bg-grey-3 q-pa-xs"},{default:t(()=>[o(I,null,{default:t(()=>[s("div",G,[s("div",H,[o(d,{modelValue:i.fechaInicio,"onUpdate:modelValue":a[0]||(a[0]=e=>i.fechaInicio=e),label:"Fecha Inicio",type:"date",outlined:"",dense:"",loading:i.loading},null,8,["modelValue","loading"])]),s("div",Z,[o(d,{modelValue:i.fechaFin,"onUpdate:modelValue":a[1]||(a[1]=e=>i.fechaFin=e),label:"Fecha Fin",type:"date",outlined:"",dense:"",loading:i.loading},null,8,["modelValue","loading"])]),s("div",W,[o(d,{modelValue:i.filter,"onUpdate:modelValue":a[2]||(a[2]=e=>i.filter=e),label:"Buscar",outlined:"",dense:"",loading:i.loading},null,8,["modelValue","loading"])]),s("div",X,[o(_,{color:"indigo",label:"Buscar",onClick:r.viajeGet,"no-caps":"",icon:"search",loading:i.loading},null,8,["onClick","loading"]),o(_,{color:"green",label:"Agregar",onClick:r.viajeAdd,"no-caps":"",icon:"add_circle_outline",loading:i.loading},null,8,["onClick","loading"])])])]),_:1}),o(T,{rows:i.viajes,columns:i.columns,"rows-per-page-options":[0],"row-key":"id",dense:"",filter:i.filter,loading:i.loading},{"body-cell-option":t(e=>[o(F,{"auto-width":""},{default:t(()=>[e.row.status!=="Finalizado"?(c(),m(O,{key:0,label:"Opciones",color:"primary","auto-close":"","no-caps":"",size:"10px"},{default:t(()=>[o(q,null,{default:t(()=>[C((c(),m(k,{clickable:"",onClick:u=>r.viajeEdit(e.row)},{default:t(()=>[o(p,{avatar:""},{default:t(()=>[o(y,{name:"edit"})]),_:1}),o(p,null,{default:t(()=>[w("Editar")]),_:1})]),_:2},1032,["onClick"])),[[x]]),C((c(),m(k,{clickable:"",onClick:u=>r.viajeDelete(e.row)},{default:t(()=>[o(p,{avatar:""},{default:t(()=>[o(y,{name:"delete"})]),_:1}),o(p,null,{default:t(()=>[w("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[x]]),C((c(),m(k,{clickable:"",onClick:u=>r.addProducts(e.row)},{default:t(()=>[o(p,{avatar:""},{default:t(()=>[o(y,{name:"add_shopping_cart"})]),_:1}),o(p,null,{default:t(()=>[w("Agregar productos")]),_:1})]),_:2},1032,["onClick"])),[[x]]),C((c(),m(k,{clickable:"",onClick:u=>r.listaTripulantes(e.row)},{default:t(()=>[o(p,{avatar:""},{default:t(()=>[o(y,{name:"print"})]),_:1}),o(p,null,{default:t(()=>[w("Lista Tripulantes")]),_:1})]),_:2},1032,["onClick"])),[[x]])]),_:2},1024)]),_:2},1024)):D("",!0)]),_:2},1024)]),"body-cell-name":t(e=>[o(F,{props:e},{default:t(()=>{var u,v,g,b,j,V;return[o(E,{label:(g=(v=(u=e.row)==null?void 0:u.boat)==null?void 0:v.company)==null?void 0:g.name,"text-color":"white",style:S({backgroundColor:(V=(j=(b=e.row)==null?void 0:b.boat)==null?void 0:j.company)==null?void 0:V.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"body-cell-status":t(e=>[o(F,{props:e},{default:t(()=>{var u,v,g,b,j,V;return[((u=e.row)==null?void 0:u.status)==="Finalizado"?(c(),m(E,{key:0,label:(v=e.row)==null?void 0:v.status,"text-color":"white",dense:"",color:"green"},null,8,["label"])):D("",!0),((g=e.row)==null?void 0:g.status)==="Pendiente"?(c(),m(E,{key:1,label:(b=e.row)==null?void 0:b.status,"text-color":"white",dense:"",color:"orange"},null,8,["label"])):D("",!0),((j=e.row)==null?void 0:j.status)==="En curso"?(c(),m(E,{key:2,label:(V=e.row)==null?void 0:V.status,"text-color":"white",dense:"",color:"blue"},null,8,["label"])):D("",!0)]}),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","loading"]),o(Y,{modelValue:i.viajeDialog,"onUpdate:modelValue":a[14]||(a[14]=e=>i.viajeDialog=e),persistent:""},{default:t(()=>[o(I,{style:{width:"350px","max-width":"95vw"}},{default:t(()=>[o(U,{class:"row items-center q-pb-none"},{default:t(()=>[s("div",J,L(i.viaje.id?"Editar":"Agregar")+" Viaje",1),o(R),o(_,{flat:"",dense:"",icon:"close",onClick:a[3]||(a[3]=e=>i.viajeDialog=!1)})]),_:1}),o(z,{onSubmit:r.viajeSave},{default:t(()=>[o(U,null,{default:t(()=>[s("div",K,[s("div",$,[o(d,{modelValue:i.viaje.fechaInicio,"onUpdate:modelValue":[a[4]||(a[4]=e=>i.viaje.fechaInicio=e),r.caculoDias],label:"Fecha Inicio",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",ee,[o(d,{modelValue:i.viaje.fechaFin,"onUpdate:modelValue":[a[5]||(a[5]=e=>i.viaje.fechaFin=e),r.caculoDias],label:"Fecha Fin",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido",e=>i.moment(e).isSameOrAfter(i.viaje.fechaInicio)||"La fecha debe ser mayor o igual a la fecha de inicio"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",le,[o(d,{modelValue:i.viaje.hora,"onUpdate:modelValue":a[6]||(a[6]=e=>i.viaje.hora=e),label:"Hora",outlined:"",dense:"",type:"time",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ae,[o(d,{modelValue:i.viaje.dias,"onUpdate:modelValue":a[7]||(a[7]=e=>i.viaje.dias=e),label:"D\xEDas",outlined:"",dense:"",type:"number",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ie,[o(d,{modelValue:i.viaje.zarpe,"onUpdate:modelValue":a[8]||(a[8]=e=>i.viaje.zarpe=e),label:"Zarpe",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",oe,[o(d,{modelValue:i.viaje.puertoSalida,"onUpdate:modelValue":a[9]||(a[9]=e=>i.viaje.puertoSalida=e),label:"Puerto de Salida",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",te,[o(d,{modelValue:i.viaje.puertoLlegada,"onUpdate:modelValue":a[10]||(a[10]=e=>i.viaje.puertoLlegada=e),label:"Puerto de Llegada",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",se,[o(d,{modelValue:i.viaje.bandera,"onUpdate:modelValue":a[11]||(a[11]=e=>i.viaje.bandera=e),label:"Bandera",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ne,[o(d,{modelValue:i.viaje.propietario,"onUpdate:modelValue":a[12]||(a[12]=e=>i.viaje.propietario=e),label:"Propietario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",de,[o(B,{modelValue:i.viaje.boat_id,"onUpdate:modelValue":a[13]||(a[13]=e=>i.viaje.boat_id=e),options:i.boats,label:"Barco",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])])])]),_:1}),o(A,{align:"right"},{default:t(()=>[C(o(_,{flat:"",label:"Cancelar",loading:i.loading},null,8,["loading"]),[[M]]),o(_,{color:"primary",label:"Guardar",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var _e=Q(N,[["render",re]]);export{_e as default};
