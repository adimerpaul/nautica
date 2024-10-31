import{_ as O,O as m,P as h,Q as t,R as i,T as s,aE as p,S as v,aC as S,J as g,aq as b,V,Z as w,b9 as N,aB as Q,U as E,W as y,X as M,Y as F,aT as P,aD as T,a1 as _}from"./index.4e492503.js";import{a as C,b as f,e as D}from"./QChip.372f1346.js";import{Q as Y}from"./QList.52522713.js";import{Q as q}from"./QBtnDropdown.bee0b951.js";import{b as U,Q as B}from"./QTable.94049b08.js";import{Q as R}from"./QSpace.21d55d61.js";import{Q as A}from"./QSelect.c0e2e1ac.js";import{Q as G}from"./QMarkupTable.ce20973e.js";import{Q as z}from"./QForm.8f75e92a.js";import{Q as H}from"./QPage.b6f28960.js";import{C as Z}from"./ClosePopup.d5206220.js";import{h as j}from"./moment.40bc58bf.js";import"./use-fullscreen.16b07beb.js";import"./format.2cae61da.js";const J={name:"ViajesActivosIndex",data(){return{fechaInicio:j().startOf("month").format("YYYY-MM-DD"),fechaFin:j().endOf("month").format("YYYY-MM-DD"),columns:[{name:"option",label:"Opciones",align:"left",field:a=>a.option},{name:"id",label:"ID",align:"left",field:a=>a.id},{name:"name",label:"Empresa",align:"left",field:a=>{var l,d;return(d=(l=a==null?void 0:a.boat)==null?void 0:l.company)==null?void 0:d.name}},{name:"boat",label:"Barco",align:"left",field:a=>{var l;return(l=a==null?void 0:a.boat)==null?void 0:l.name}},{name:"zarpe",label:"Zarpe",align:"left",field:a=>a.zarpe},{name:"dias",label:"D\xEDas",align:"left",field:a=>a.dias},{name:"fechaInicio",label:"Fecha Inicio",align:"left",field:a=>this.$filters.formatdMY(a.fechaInicio)},{name:"fechaFin",label:"Fecha Fin",align:"left",field:a=>this.$filters.formatdMY(a.fechaFin)},{name:"status",label:"Estado",align:"left",field:a=>a.status}],loading:!1,moment:j,viajes:[],puertos:["SONSONATE, Acajutla - Muelle Artesanal de Pesca","SONSONATE, Acajutla - Puerto de ACAJUTLA CEPA","LA LIBERTAD, La Libertad - Muelle Artesanal de Pesca","LA PAZ, San Luis La Herradura - Oficinas de CENDEPESCA","USULUTAN, Puerto El Triunfo - Muelle Artesanal de Puerto el Triunfo","LA UNION, La Uni\xF3n Puerto CORSAIN","LA UNION, La Uni\xF3n - Muelle Artesanal los Coquitos","LA UNION, Meanguera del Golfo - Muelle de Meanguera del Golfo"],viaje:{},viajeDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,boats:[],crewViajes:[{crew_id:"",cargo:""}],crews:[]}},mounted(){this.crewsGet(),this.viajeActivosGet(),this.boatsGet()},methods:{updateCrew(a,l){const d=this.crews.findIndex(r=>r.id===a),c=this.crews[d];if(this.crewViajes.filter(r=>r.crew_id===a).length>1){this.$alert.error("No puede agregar tripulantes repetidos"),l.crew_id="";return}l.cargo=c.role},changePropietario(a){var d;const l=this.boats.find(c=>c.id===a);this.viaje.propietario=(d=l.company)==null?void 0:d.name},crewsGet(){this.loading=!0,this.$axios.get("crews").then(a=>{this.crews=a.data}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},caculoDias(){if(this.viaje.fechaInicio&&this.viaje.fechaFin){const a=j(this.viaje.fechaFin).diff(j(this.viaje.fechaInicio),"days");this.viaje.dias=a}},boatsGet(){this.loading=!0,this.$axios.get("boats").then(a=>{this.boats=a.data}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},viajeSave(){const a=this.crewViajes.map(l=>l.crew_id);if(a.length!==new Set(a).size){this.$alert.error("No puede agregar tripulantes repetidos"),this.loading=!1;return}if(this.crewViajes.some(l=>!l.crew_id)){this.$alert.error("Debe seleccionar un tripulante"),this.loading=!1;return}this.viaje.crews=this.crewViajes,this.loading=!0,this.viaje.id?this.$axios.put(`viajes/${this.viaje.id}`,this.viaje).then(l=>{this.viajeDialog=!1;const d=this.viajes.findIndex(c=>c.id===this.viaje.id);this.viajes.splice(d,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("viajes",this.viaje).then(l=>{this.viajeDialog=!1,this.viajes.unshift(l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},viajeClose(a){this.$alert.confirm("\xBFEst\xE1 seguro de cerrar este viaje?").onOk(()=>{this.loading=!0,this.$axios.put(`viajes/${a.id}/close`).then(l=>{const d=this.viajes.findIndex(c=>c.id===l.data.id);this.viajes.splice(d,1,l.data)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},listaTripulantes(a){this.loading=!0,this.$axios.get(`listaTripulantes/${a.id}`,{responseType:"blob"}).then(l=>{const d=window.URL.createObjectURL(new Blob([l.data],{type:"application/pdf"})),c=window.document.createElement("a");c.href=d,c.setAttribute("download",`listaTripulantes-${a.id}.pdf`),window.document.body.appendChild(c),c.click(),c.remove(),window.URL.revokeObjectURL(d)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},addLance(a){this.$router.push("/viajesLance/"+a.id)},addProducts(a){this.$router.push("/viajesShow/"+a.id)},viajeDelete(a){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este viaje?").onOk(()=>{this.loading=!0,this.$axios.delete(`viajes/${a.id}`).then(l=>{const d=this.viajes.findIndex(c=>c.id===l.data.id);console.log(d),d!==-1&&this.viajes.splice(d,1)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},viajeClick(a,l){this.$router.push("/viajesConciliacion/"+l.id)},viajeEdit(a){this.viajeDialog=!0,this.viaje={...a},this.crewViajes=[],a.crews.forEach(l=>{this.crewViajes.push({crew_id:l.id,cargo:l.pivot.role})}),this.crewViajes.length===0&&(this.crewViajes=[{crew_id:"",cargo:""}])},viajeAdd(){this.crewViajes=[{crew_id:"",cargo:""}],this.viajeDialog=!0,this.viaje={fechaInicio:j().format("YYYY-MM-DD"),fechaFin:j().add(1,"month").format("YYYY-MM-DD"),boat_id:"",observaciones:"",hora:j().format("HH:00"),dias:"",zarpe:"",puertoSalida:"",puertoLlegada:"",bandera:"SALVADORE\xD1A ESA-00283 (ARB 90.74 TM)",propietario:"LA REYNAGA MORENO, S.A. DE C.V."},this.caculoDias()},viajeActivosGet(){this.loading=!0,this.$axios.get("viajesActivos",{params:{fechaInicio:this.fechaInicio,fechaFin:this.fechaFin}}).then(a=>{this.viajes=a.data}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})}}},W={class:"row"},X={class:"col-6 col-md-2 q-pa-xs"},K={class:"col-6 col-md-2 q-pa-xs"},$={class:"col-12 col-md-3 q-pa-xs"},ee={class:"col-12 col-md-5 q-pa-xs text-right"},le={class:"text-h6"},ae={class:"row"},ie={class:"col-6 col-md-3"},oe={class:"col-6 col-md-3"},te={class:"col-6 col-md-3"},se={class:"col-6 col-md-3"},ne={class:"col-12 col-md-6"},de={class:"col-12 col-md-6"},re={class:"col-12 col-md-6"},ce={class:"col-12 col-md-6"},ue={class:"col-12 col-md-6"},me={class:"col-12 col-md-6"},fe={class:"col-12"},he=s("thead",null,[s("tr",null,[s("th",null,"#"),s("th",null,"Nombre"),s("th",null,"Cargo"),s("th",null,"Opciones")])],-1);function pe(a,l,d,c,o,r){return m(),h(H,{class:"bg-grey-3 q-pa-xs"},{default:t(()=>[i(S,null,{default:t(()=>[s("div",W,[s("div",X,[i(p,{modelValue:o.fechaInicio,"onUpdate:modelValue":l[0]||(l[0]=e=>o.fechaInicio=e),label:"Fecha Inicio",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",K,[i(p,{modelValue:o.fechaFin,"onUpdate:modelValue":l[1]||(l[1]=e=>o.fechaFin=e),label:"Fecha Fin",type:"date",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",$,[i(p,{modelValue:o.filter,"onUpdate:modelValue":l[2]||(l[2]=e=>o.filter=e),label:"Buscar",outlined:"",dense:"",loading:o.loading},null,8,["modelValue","loading"])]),s("div",ee,[i(v,{color:"indigo",label:"Buscar",onClick:r.viajeActivosGet,"no-caps":"",icon:"search",loading:o.loading},null,8,["onClick","loading"]),i(v,{color:"green",label:"Agregar",onClick:r.viajeAdd,"no-caps":"",icon:"add_circle_outline",loading:o.loading},null,8,["onClick","loading"])])])]),_:1}),i(B,{rows:o.viajes,columns:o.columns,"rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading,onRowClick:r.viajeClick},{"body-cell-option":t(e=>[i(U,{"auto-width":""},{default:t(()=>[i(q,{label:"Opciones",color:"primary","auto-close":"","no-caps":"",size:"10px",onClick:l[3]||(l[3]=n=>{n.stopPropagation()})},{default:t(()=>[i(Y,null,{default:t(()=>[e.row.estado==="Activo"?g((m(),h(C,{key:0,clickable:"",onClick:n=>r.viajeEdit(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"edit"})]),_:1}),i(f,null,{default:t(()=>[V("Editar")]),_:1})]),_:2},1032,["onClick"])),[[_]]):w("",!0),e.row.estado==="Activo"?g((m(),h(C,{key:1,clickable:"",onClick:n=>r.viajeDelete(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"delete"})]),_:1}),i(f,null,{default:t(()=>[V("Eliminar")]),_:1})]),_:2},1032,["onClick"])),[[_]]):w("",!0),e.row.estado==="Activo"?g((m(),h(C,{key:2,clickable:"",onClick:n=>r.addProducts(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"add_circle_outline"})]),_:1}),i(f,null,{default:t(()=>[V("Agregar Descarga")]),_:1})]),_:2},1032,["onClick"])),[[_]]):w("",!0),e.row.estado==="Activo"?g((m(),h(C,{key:3,clickable:"",onClick:n=>r.addLance(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"add_circle_outline"})]),_:1}),i(f,null,{default:t(()=>[V("Agregar Lance")]),_:1})]),_:2},1032,["onClick"])),[[_]]):w("",!0),g((m(),h(C,{clickable:"",onClick:n=>r.listaTripulantes(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"print"})]),_:1}),i(f,null,{default:t(()=>[V("Lista Tripulantes")]),_:1})]),_:2},1032,["onClick"])),[[_]]),g((m(),h(C,{clickable:"",to:"/viajesConciliacion/"+e.row.id},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"check_circle"})]),_:1}),i(f,null,{default:t(()=>[V("Consolidado")]),_:1})]),_:2},1032,["to"])),[[_]]),e.row.estado==="Activo"?g((m(),h(C,{key:4,clickable:"",onClick:n=>r.viajeClose(e.row)},{default:t(()=>[i(f,{avatar:""},{default:t(()=>[i(b,{name:"close"})]),_:1}),i(f,null,{default:t(()=>[V("Cerrar Viaje")]),_:1})]),_:2},1032,["onClick"])),[[_]]):w("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"body-cell-name":t(e=>[i(U,{props:e},{default:t(()=>{var n,u,k,I,x,L;return[i(D,{label:(k=(u=(n=e.row)==null?void 0:n.boat)==null?void 0:u.company)==null?void 0:k.name,"text-color":"white",style:N({backgroundColor:(L=(x=(I=e.row)==null?void 0:I.boat)==null?void 0:x.company)==null?void 0:L.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"body-cell-status":t(e=>[i(U,{props:e},{default:t(()=>{var n,u,k;return[((n=e.row)==null?void 0:n.estado)==="Activo"?(m(),h(D,{key:0,label:(u=e.row)==null?void 0:u.estado,"text-color":"white",dense:"",color:"green"},null,8,["label"])):(m(),h(D,{key:1,label:(k=e.row)==null?void 0:k.estado,"text-color":"white",dense:"",color:"red"},null,8,["label"]))]}),_:2},1032,["props"])]),_:1},8,["rows","columns","filter","loading","onRowClick"]),i(T,{modelValue:o.viajeDialog,"onUpdate:modelValue":l[16]||(l[16]=e=>o.viajeDialog=e),persistent:""},{default:t(()=>[i(S,{style:{width:"650px","max-width":"95vw"}},{default:t(()=>[i(Q,{class:"row items-center q-pb-none"},{default:t(()=>[s("div",le,E(o.viaje.id?"Editar":"Agregar")+" Viaje",1),i(R),i(v,{flat:"",dense:"",icon:"close",onClick:l[4]||(l[4]=e=>o.viajeDialog=!1)})]),_:1}),i(z,{onSubmit:r.viajeSave},{default:t(()=>[i(Q,null,{default:t(()=>[s("div",ae,[s("div",ie,[i(p,{modelValue:o.viaje.fechaInicio,"onUpdate:modelValue":[l[5]||(l[5]=e=>o.viaje.fechaInicio=e),r.caculoDias],label:"Fecha Inicio",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",oe,[i(p,{modelValue:o.viaje.fechaFin,"onUpdate:modelValue":[l[6]||(l[6]=e=>o.viaje.fechaFin=e),r.caculoDias],label:"Fecha Fin",type:"date",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido",e=>o.moment(e).isSameOrAfter(o.viaje.fechaInicio)||"La fecha debe ser mayor o igual a la fecha de inicio"]},null,8,["modelValue","rules","onUpdate:modelValue"])]),s("div",te,[i(p,{modelValue:o.viaje.hora,"onUpdate:modelValue":l[7]||(l[7]=e=>o.viaje.hora=e),label:"Hora",outlined:"",dense:"",type:"time",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",se,[i(p,{modelValue:o.viaje.dias,"onUpdate:modelValue":l[8]||(l[8]=e=>o.viaje.dias=e),label:"D\xEDas",outlined:"",dense:"",type:"number",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ne,[i(p,{modelValue:o.viaje.zarpe,"onUpdate:modelValue":l[9]||(l[9]=e=>o.viaje.zarpe=e),label:"Zarpe",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",de,[i(A,{modelValue:o.viaje.boat_id,"onUpdate:modelValue":[l[10]||(l[10]=e=>o.viaje.boat_id=e),r.changePropietario],options:o.boats,label:"Barco",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules","onUpdate:modelValue"])]),s("div",re,[i(A,{modelValue:o.viaje.puertoSalida,"onUpdate:modelValue":l[11]||(l[11]=e=>o.viaje.puertoSalida=e),options:o.puertos,label:"Puerto de Salida",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":""},null,8,["modelValue","options","rules"])]),s("div",ce,[i(A,{modelValue:o.viaje.puertoLlegada,"onUpdate:modelValue":l[12]||(l[12]=e=>o.viaje.puertoLlegada=e),options:o.puertos,label:"Puerto de Llegada",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"map-options":"","emit-value":""},null,8,["modelValue","options","rules"])]),s("div",ue,[i(p,{modelValue:o.viaje.bandera,"onUpdate:modelValue":l[13]||(l[13]=e=>o.viaje.bandera=e),label:"Bandera",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",me,[i(p,{modelValue:o.viaje.propietario,"onUpdate:modelValue":l[14]||(l[14]=e=>o.viaje.propietario=e),label:"Propietario",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",fe,[i(G,{flat:"",bordered:"",dense:"","wrap-cells":""},{default:t(()=>[he,s("tbody",null,[(m(!0),y(F,null,M(o.crewViajes,(e,n)=>(m(),y("tr",{key:n},[s("td",null,E(n+1),1),s("td",null,[i(A,{modelValue:e.crew_id,"onUpdate:modelValue":[u=>e.crew_id=u,u=>r.updateCrew(u,e)],options:o.crews,outlined:"",dense:"","map-options":"","emit-value":"","option-value":"id","option-label":"name"},null,8,["modelValue","onUpdate:modelValue","options"])]),s("td",null,[i(A,{modelValue:e.cargo,"onUpdate:modelValue":u=>e.cargo=u,options:a.$cargos,outlined:"",dense:"","value-field":"value","label-field":"label","map-options":"","emit-value":""},null,8,["modelValue","onUpdate:modelValue","options"])]),s("td",null,[o.crewViajes.length>1&&n!==o.crewViajes.length-1?(m(),h(v,{key:0,rounded:"",color:"red",dense:"",icon:"delete",onClick:u=>o.crewViajes.splice(n,1)},null,8,["onClick"])):w("",!0),n===o.crewViajes.length-1?(m(),y(F,{key:1},[i(v,{rounded:"",color:"green",dense:"",icon:"add",onClick:l[15]||(l[15]=u=>o.crewViajes.push({crew_id:"",cargo:""}))}),i(v,{rounded:"",color:"red",dense:"",icon:"delete",onClick:u=>o.crewViajes.splice(n,1)},null,8,["onClick"])],64)):w("",!0)])]))),128))])]),_:1})])])]),_:1}),i(P,{align:"right"},{default:t(()=>[g(i(v,{flat:"",label:"Cancelar",loading:o.loading,"no-caps":"",class:"text-bold"},null,8,["loading"]),[[Z]]),i(v,{color:"primary",label:"Guardar",type:"submit",loading:o.loading,"no-caps":"",class:"text-bold"},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var xe=O(J,[["render",pe]]);export{xe as default};
