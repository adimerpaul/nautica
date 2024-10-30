import{_ as S,O as r,P as m,Q as t,R as a,T as s,aE as f,S as C,aC as I,J as v,aq as j,V as b,Z as V,b9 as Y,aB as Q,U as F,W as L,X as O,Y as q,aT as T,aD as R,a1 as w}from"./index.a28cbdd6.js";import{a as _,b as c,e as y}from"./QChip.bf28b724.js";import{Q as M}from"./QList.f03b2443.js";import{Q as B}from"./QBtnDropdown.90b3488a.js";import{b as D,Q as P}from"./QTable.f815b9f8.js";import{Q as N}from"./QSpace.31a3f351.js";import{Q as x}from"./QSelect.fe34ff71.js";import{Q as G}from"./QMarkupTable.ee172159.js";import{Q as z}from"./QForm.95b13511.js";import{Q as H}from"./QPage.cc208f87.js";import{C as Z}from"./ClosePopup.af139de8.js";import{h as g}from"./moment.40bc58bf.js";import"./use-fullscreen.ed4c5bfa.js";import"./format.2cae61da.js";const J={name:"ViajesActivosIndex",data(){return{fechaInicio:g().startOf("month").format("YYYY-MM-DD"),fechaFin:g().endOf("month").format("YYYY-MM-DD"),columns:[{name:"option",label:"Opciones",align:"left",field:i=>i.option},{name:"id",label:"ID",align:"left",field:i=>i.id},{name:"name",label:"Empresa",align:"left",field:i=>{var l,d;return(d=(l=i==null?void 0:i.boat)==null?void 0:l.company)==null?void 0:d.name}},{name:"boat",label:"Barco",align:"left",field:i=>{var l;return(l=i==null?void 0:i.boat)==null?void 0:l.name}},{name:"zarpe",label:"Zarpe",align:"left",field:i=>i.zarpe},{name:"dias",label:"D\xEDas",align:"left",field:i=>i.dias},{name:"fechaInicio",label:"Fecha Inicio",align:"left",field:i=>this.$filters.formatdMY(i.fechaInicio)},{name:"fechaFin",label:"Fecha Fin",align:"left",field:i=>this.$filters.formatdMY(i.fechaFin)},{name:"status",label:"Estado",align:"left",field:i=>i.status}],loading:!1,moment:g,viajes:[],viaje:{},viajeDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,boats:[],crewViajes:[{crew_id:"",cargo:""}],crews:[]}},mounted(){this.crewsGet(),this.viajeActivosGet(),this.boatsGet()},methods:{crewsGet(){this.loading=!0,this.$axios.get("crews").then(i=>{this.crews=i.data}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.loading=!1})},caculoDias(){if(this.viaje.fechaInicio&&this.viaje.fechaFin){const i=g(this.viaje.fechaFin).diff(g(this.viaje.fechaInicio),"days");this.viaje.dias=i}},boatsGet(){this.loading=!0,this.$axios.get("boats").then(i=>{this.boats=i.data}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.loading=!1})},viajeSave(){const i=this.crewViajes.map(l=>l.crew_id);if(i.length!==new Set(i).size){this.$alert.error("No puede agregar tripulantes repetidos"),this.loading=!1;return}if(this.crewViajes.some(l=>!l.crew_id)){this.$alert.error("Debe seleccionar un tripulante"),this.loading=!1;return}this.viaje.crews=this.crewViajes,this.loading=!0,this.viaje.id?this.$axios.put(`viajes/${this.viaje.id}`,this.viaje).then(l=>{this.viajeDialog=!1;const d=this.viajes.findIndex(u=>u.id===this.viaje.id);this.viajes.splice(d,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("viajes",this.viaje).then(l=>{this.viajeDialog=!1,this.viajes.unshift(l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},viajeClose(i){this.$alert.confirm("\xBFEst\xE1 seguro de cerrar este viaje?").onOk(()=>{this.loading=!0,this.$axios.put(`viajes/${i.id}/close`).then(l=>{const d=this.viajes.findIndex(u=>u.id===l.data.id);this.viajes.splice(d,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},listaTripulantes(i){this.loading=!0,this.$axios.get(`listaTripulantes/${i.id}`,{responseType:"blob"}).then(l=>{const d=window.URL.createObjectURL(new Blob([l.data],{type:"application/pdf"})),u=window.document.createElement("a");u.href=d,u.setAttribute("download",`listaTripulantes-${i.id}.pdf`),window.document.body.appendChild(u),u.click(),u.remove(),window.URL.revokeObjectURL(d)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},addLance(i){this.$router.push("/viajesLance/"+i.id)},addProducts(i){this.$router.push("/viajesShow/"+i.id)},viajeDelete(i){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este viaje?").onOk(()=>{this.loading=!0,this.$axios.delete(`viajes/${i.id}`).then(l=>{const d=this.viajes.findIndex(u=>u.id===l.data.id);console.log(d),d!==-1&&this.viajes.splice(d,1)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},viajeClick(i,l){this.$router.push("/viajesConciliacion/"+l.id)},viajeEdit(i){this.viajeDialog=!0,this.viaje={...i},this.crewViajes=[],i.crews.forEach(l=>{this.crewViajes.push({crew_id:l.id,cargo:l.pivot.role})}),this.crewViajes.length===0&&(this.crewViajes=[{crew_id:"",cargo:""}])},viajeAdd(){this.crewViajes=[{crew_id:"",cargo:""}],this.viajeDialog=!0,this.viaje={fechaInicio:g().format("YYYY-MM-DD"),fechaFin:g().add(1,"month").format("YYYY-MM-DD"),boat_id:"",observaciones:"",hora:g().format("HH:00"),dias:"",zarpe:"",puertoSalida:"MUELLE DE PESCA, PUERTO EL TRIUNFO",puertoLlegada:"MUELLE DE PESCA, PUERTO EL TRIUNFO",bandera:"SALVADORE\xD1A ESA-00283 (ARB 90.74 TM)",propietario:"LA REYNAGA MORENO, S.A. DE C.V."},this.caculoDias()},viajeActivosGet(){this.loading=!0,this.$axios.get("viajesActivos",{params:{fechaInicio:this.fechaInicio,fechaFin:this.fechaFin}}).then(i=>{this.viajes=i.data}).catch(i=>{this.$alert.error(i.response.data.message)}).finally(()=>{this.loading=!1})}}},W={class:"row"},X={class:"col-6 col-md-2 q-pa-xs"},K={class:"col-6 col-md-2 q-pa-xs"},$={class:"col-12 col-md-3 q-pa-xs"},ee={class:"col-12 col-md-5 q-pa-xs text-right"},le={class:"text-h6"},ae={class:"row"},ie={class:"col-6 col-md-3"},oe={class:"col-6 col-md-3"},te={class:"col-6 col-md-3"},se={class:"col-6 col-md-3"},ne={class:"col-12 col-md-6"},de={class:"col-12 col-md-6"},re={class:"col-12 col-md-6"},ce={class:"col-12 col-md-6"},ue={class:"col-12 col-md-6"},me={class:"col-12 col-md-6"},fe={class:"col-12"},he=s("thead",null,[s("tr",null,[s("th",null,"#"),s("th",null,"Nombre"),s("th",null,"Cargo"),s("th",null,"Opciones")])],-1);function pe(i,l,d,u,o,h){return r(),m(H,{class:"bg-grey-3 q-pa-xs"},{default:t(()=>[a(I,null,{default:t(()=>[s("div",W,[s("div",X,[a(f,{modelValue:o.fechaInicio,"onUpdate:modelValue":l[0]||(l[0]=e=>o.fechaInicio=e),label:"Fecha Inicio",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",K,[a(f,{modelValue:o.fechaFin,"onUpdate:modelValue":l[1]||(l[1]=e=>o.fechaFin=e),label:"Fecha Fin",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",$,[a(f,{modelValue:o.filter,"onUpdate:modelValue":l[2]||(l[2]=e=>o.filter=e),label:"Buscar",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",ee,[a(C,{color:"indigo",label:"Buscar",onClick:h.viajeActivosGet,"no-caps":"",icon:"search",loading:o.loading},null,8,["onClick","loading"])])])]),_:1}),a(P,{rows:o.viajes,columns:o.columns,"rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading,onRowClick:h.viajeClick},{"body-cell-option":t(e=>[a(D,{"auto-width":""},{default:t(()=>[a(B,{label:"Opciones",color:"primary","auto-close":"","no-caps":"",size:"10px",onClick:l[3]||(l[3]=n=>{n.stopPropagation()})},{default:t(()=>[a(M,null,{default:t(()=>[e.row.estado==="Activo"?v((r(),m(_,{key:0,clickable:"",onClick:n=>h.viajeEdit(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"edit"})]),_:1}),a(c,null,{default:t(()=>[b("Editar")]),_:1})]),_:2},1032,["onClick"])),[[w]]):V("",!0),e.row.estado==="Activo"?v((r(),m(_,{key:1,clickable:"",onClick:n=>h.viajeDelete(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"delete"})]),_:1}),a(c,null,{default:t(()=>[b("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[w]]):V("",!0),e.row.estado==="Activo"?v((r(),m(_,{key:2,clickable:"",onClick:n=>h.addProducts(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"add_circle_outline"})]),_:1}),a(c,null,{default:t(()=>[b("Agregar Descarga")]),_:1})]),_:2},1032,["onClick"])),[[w]]):V("",!0),e.row.estado==="Activo"?v((r(),m(_,{key:3,clickable:"",onClick:n=>h.addLance(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"add_circle_outline"})]),_:1}),a(c,null,{default:t(()=>[b("Agregar Lance")]),_:1})]),_:2},1032,["onClick"])),[[w]]):V("",!0),v((r(),m(_,{clickable:"",onClick:n=>h.listaTripulantes(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"print"})]),_:1}),a(c,null,{default:t(()=>[b("Lista Tripulantes")]),_:1})]),_:2},1032,["onClick"])),[[w]]),v((r(),m(_,{clickable:"",to:"/viajesConciliacion/"+e.row.id},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"check_circle"})]),_:1}),a(c,null,{default:t(()=>[b("Consolidado")]),_:1})]),_:2},1032,["to"])),[[w]]),e.row.estado==="Activo"?v((r(),m(_,{key:4,clickable:"",onClick:n=>h.viajeClose(e.row)},{default:t(()=>[a(c,{avatar:""},{default:t(()=>[a(j,{name:"close"})]),_:1}),a(c,null,{default:t(()=>[b("Cerrar Viaje")]),_:1})]),_:2},1032,["onClick"])),[[w]]):V("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"body-cell-name":t(e=>[a(D,{props:e},{default:t(()=>{var n,p,k,U,A,E;return[a(y,{label:(k=(p=(n=e.row)==null?void 0:n.boat)==null?void 0:p.company)==null?void 0:k.name,"text-color":"white",style:Y({backgroundColor:(E=(A=(U=e.row)==null?void 0:U.boat)==null?void 0:A.company)==null?void 0:E.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"body-cell-status":t(e=>[a(D,{props:e},{default:t(()=>{var n,p,k;return[((n=e.row)==null?void 0:n.estado)==="Activo"?(r(),m(y,{key:0,label:(p=e.row)==null?void 0:p.estado,"text-color":"white",dense:"",color:"green"},null,8,["label"])):(r(),m(y,{key:1,label:(k=e.row)==null?void 0:k.estado,"text-color":"white",dense:"",color:"red"},null,8,["label"]))]}),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","loading","onRowClick"]),a(R,{modelValue:o.viajeDialog,"onUpdate:modelValue":l[16]||(l[16]=e=>o.viajeDialog=e),persistent:""},{default:t(()=>[a(I,{style:{width:"650px","max-width":"95vw"}},{default:t(()=>[a(Q,{class:"row items-center q-pb-none"},{default:t(()=>[s("div",le,F(o.viaje.id?"Editar":"Agregar")+" Viaje",1),a(N),a(C,{flat:"",dense:"",icon:"close",onClick:l[4]||(l[4]=e=>o.viajeDialog=!1)})]),_:1}),a(z,{onSubmit:h.viajeSave},{default:t(()=>[a(Q,null,{default:t(()=>[s("div",ae,[s("div",ie,[a(f,{modelValue:o.viaje.fechaInicio,"onUpdate:modelValue":[l[5]||(l[5]=e=>o.viaje.fechaInicio=e),h.caculoDias],label:"Fecha Inicio",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",oe,[a(f,{modelValue:o.viaje.fechaFin,"onUpdate:modelValue":[l[6]||(l[6]=e=>o.viaje.fechaFin=e),h.caculoDias],label:"Fecha Fin",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido",e=>o.moment(e).isSameOrAfter(o.viaje.fechaInicio)||"La fecha debe ser mayor o igual a la fecha de inicio"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",te,[a(f,{modelValue:o.viaje.hora,"onUpdate:modelValue":l[7]||(l[7]=e=>o.viaje.hora=e),label:"Hora",outlined:"",dense:"",type:"time",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",se,[a(f,{modelValue:o.viaje.dias,"onUpdate:modelValue":l[8]||(l[8]=e=>o.viaje.dias=e),label:"D\xEDas",outlined:"",dense:"",type:"number",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ne,[a(f,{modelValue:o.viaje.zarpe,"onUpdate:modelValue":l[9]||(l[9]=e=>o.viaje.zarpe=e),label:"Zarpe",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",de,[a(x,{modelValue:o.viaje.boat_id,"onUpdate:modelValue":l[10]||(l[10]=e=>o.viaje.boat_id=e),options:o.boats,label:"Barco",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])]),s("div",re,[a(f,{modelValue:o.viaje.puertoSalida,"onUpdate:modelValue":l[11]||(l[11]=e=>o.viaje.puertoSalida=e),label:"Puerto de Salida",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ce,[a(f,{modelValue:o.viaje.puertoLlegada,"onUpdate:modelValue":l[12]||(l[12]=e=>o.viaje.puertoLlegada=e),label:"Puerto de Llegada",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ue,[a(f,{modelValue:o.viaje.bandera,"onUpdate:modelValue":l[13]||(l[13]=e=>o.viaje.bandera=e),label:"Bandera",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",me,[a(f,{modelValue:o.viaje.propietario,"onUpdate:modelValue":l[14]||(l[14]=e=>o.viaje.propietario=e),label:"Propietario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",fe,[a(G,{flat:"",bordered:"",dense:"","wrap-cells":""},{default:t(()=>[he,s("tbody",null,[(r(!0),L(q,null,O(o.crewViajes,(e,n)=>(r(),L("tr",{key:n},[s("td",null,F(n+1),1),s("td",null,[a(x,{modelValue:e.crew_id,"onUpdate:modelValue":p=>e.crew_id=p,options:o.crews,outlined:"",dense:"","map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("td",null,[a(x,{modelValue:e.cargo,"onUpdate:modelValue":p=>e.cargo=p,options:i.$cargos,outlined:"",dense:"","value-field":"value","label-field":"label","map-options":"","emit-value":""},null,8,["modelValue","onUpdate:modelValue","options"])]),s("td",null,[o.crewViajes.length>1&&n!==o.crewViajes.length-1?(r(),m(C,{key:0,rounded:"",color:"red",dense:"",icon:"delete",onClick:p=>o.crewViajes.splice(n,1)},null,8,["onClick"])):V("",!0),n===o.crewViajes.length-1?(r(),m(C,{key:1,rounded:"",color:"green",dense:"",icon:"add",onClick:l[15]||(l[15]=p=>o.crewViajes.push({crew_id:"",cargo:""}))})):V("",!0)])]))),128))])]),_:1})])])]),_:1}),a(T,{align:"right"},{default:t(()=>[v(a(C,{flat:"",label:"Cancelar",loading:o.loading,"no-caps":"",class:"text-bold"},null,8,["loading"]),[[Z]]),a(C,{color:"primary",label:"Guardar",type:"submit",loading:o.loading,"no-caps":"",class:"text-bold"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Ee=S(J,[["render",pe]]);export{Ee as default};
