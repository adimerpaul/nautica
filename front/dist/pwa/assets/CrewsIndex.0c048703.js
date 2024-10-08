import{Q as g}from"./QTooltip.577cf44c.js";import{_ as O,Q as u,R as m,S as t,T as o,U as n,X as b,b9 as _,a0 as h,V as s,aE as f,ar as I,aC as v,aB as N,W as T,aT as E,L as D,aD as x}from"./index.5e6a47e9.js";import{b as C,Q}from"./QTable.bb1d0409.js";import{e as p}from"./QChip.81a2916c.js";import{Q as U}from"./QSpace.3df0d842.js";import{Q as w}from"./QSelect.9e338aa4.js";import{Q as y}from"./QForm.7f3320f2.js";import{Q as R}from"./QPage.7ce9e4f3.js";import{C as S}from"./ClosePopup.4838f874.js";import"./QList.f4bb995d.js";import"./QMarkupTable.9e7c78a7.js";import"./use-fullscreen.eba407b6.js";import"./format.2cae61da.js";const k={name:"BoatsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:l=>l.option},{name:"name",label:"Nombre",align:"left",field:l=>l.name},{name:"role",label:"Rol",align:"left",field:l=>l.role},{name:"nacionalidad",label:"Nacionalidad",align:"left",field:l=>l.nacionalidad},{name:"tipoDocumento",label:"Tipo de Documento",align:"left",field:l=>l.tipoDocumento},{name:"numeroIdentificacion",label:"N\xFAmero de Identificaci\xF3n",align:"left",field:l=>l.numeroIdentificacion},{name:"telefono",label:"Tel\xE9fono",align:"left",field:l=>l.telefono},{name:"id",label:"ID",align:"left",field:l=>l.id},{name:"boat",label:"Barco",align:"left",field:l=>{var i;return(i=l.boat)==null?void 0:i.name}}],loading:!1,crews:[],crew:{},crewDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,boats:[]}},mounted(){this.crewGet(),this.boatsGet()},methods:{boatsGet(){this.$axios.get("boats").then(l=>{this.boats=l.data})},crewSave(){this.loading=!0,this.crew.id?this.$axios.put(`crews/${this.crew.id}`,this.crew).then(l=>{this.crewDialog=!1;const i=this.crews.findIndex(r=>r.id===this.crew.id);this.crews.splice(i,1,l.data),this.$alert.success("Tripulante actualizado")}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("crews",this.crew).then(l=>{this.crewDialog=!1,this.crews.unshift(l.data),this.$alert.success("Tripulante agregado")}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})},crewDelete(l){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este Tripulante?").onOk(()=>{this.loading=!0,this.$axios.delete(`crews/${l.id}`).then(i=>{const r=this.crews.findIndex(A=>A.id===i.data.id);console.log(r),r!==-1&&this.crews.splice(r,1),this.$alert.success("Tripulante eliminado")}).catch(i=>{this.$alert.error("No se puede eliminar registro, contacte con su administrador.")}).finally(()=>{this.loading=!1})})},crewEdit(l){this.crewDialog=!0,this.crew={...l}},crewAdd(){this.crewDialog=!0,this.crew={name:""}},crewGet(){this.loading=!0,this.$axios.get("crews").then(l=>{this.crews=l.data}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})}}},B={class:"row"},q={class:"col-4 flex flex-center"},G={class:"col-8"},L={class:"text-h6"},M={class:"row"},P={class:"col-12"},H={class:"col-12"},z={class:"col-12"},X={class:"col-12"},Y={class:"col-12"},F={class:"col-12"},W={class:"col-12"};function Z(l,i,r,A,a,d){return u(),m(R,{class:"bg-grey-3 q-pa-md"},{default:t(()=>[o(Q,{rows:a.crews,columns:a.columns,title:"Tripulantes","rows-per-page-options":[0],"row-key":"id",dense:"",filter:a.filter,loading:a.loading},{"body-cell-option":t(e=>[o(C,{"auto-width":""},{default:t(()=>[o(n,{flat:"",dense:"",icon:"edit",onClick:c=>d.crewEdit(e.row)},{default:t(()=>[o(g,null,{default:t(()=>[b("Editar")]),_:1})]),_:2},1032,["onClick"]),o(n,{flat:"",dense:"",icon:"delete",onClick:c=>d.crewDelete(e.row)},{default:t(()=>[o(g,null,{default:t(()=>[b("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-boat":t(e=>[o(C,{props:e},{default:t(()=>{var c,V;return[o(p,{label:(c=e.row.boat)==null?void 0:c.name,"text-color":"white",style:_({backgroundColor:(V=e.row.boat)==null?void 0:V.color}),icon:"directions_boat"},null,8,["label","style"])]}),_:2},1032,["props"])]),"body-cell-role":t(e=>[o(C,{props:e},{default:t(()=>[e.row.role==="CAPITAN"?(u(),m(p,{key:0,label:"Capitan","text-color":"white",dense:"",icon:"person",color:"primary"})):h("",!0),e.row.role==="MARINERO"?(u(),m(p,{key:1,label:"Tripulante","text-color":"white",dense:"",icon:"person",color:"green"})):h("",!0),e.row.role==="MAQUINISTA"?(u(),m(p,{key:2,label:"Maquinista","text-color":"white",dense:"",icon:"person",color:"accent"})):h("",!0)]),_:2},1032,["props"])]),"top-right":t(()=>[s("div",B,[s("div",q,[o(n,{outline:"",dense:"",icon:"add_circle",onClick:d.crewAdd,label:"Agregar","no-caps":"",loading:a.loading},{default:t(()=>[o(g,null,{default:t(()=>[b("Agregar")]),_:1})]),_:1},8,["onClick","loading"])]),s("div",G,[o(f,{modelValue:a.filter,"onUpdate:modelValue":i[0]||(i[0]=e=>a.filter=e),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:t(()=>[o(I,{name:"search"})]),_:1},8,["modelValue"])])])]),_:1},8,["rows","columns","filter","loading"]),o(x,{modelValue:a.crewDialog,"onUpdate:modelValue":i[9]||(i[9]=e=>a.crewDialog=e),persistent:""},{default:t(()=>[o(v,{style:{width:"250px","max-width":"90vw"}},{default:t(()=>[o(N,{class:"row items-center q-pb-none"},{default:t(()=>[s("div",L,T(a.crew.id?"Editar":"Agregar")+" Tripulantes",1),o(U),o(n,{flat:"",dense:"",icon:"close",onClick:i[1]||(i[1]=e=>a.crewDialog=!1)})]),_:1}),o(y,{onSubmit:d.crewSave},{default:t(()=>[o(N,null,{default:t(()=>[s("div",M,[s("div",P,[o(f,{modelValue:a.crew.name,"onUpdate:modelValue":i[2]||(i[2]=e=>a.crew.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",H,[o(w,{modelValue:a.crew.role,"onUpdate:modelValue":i[3]||(i[3]=e=>a.crew.role=e),options:l.$cargos,label:"Rol",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"value-field":"value","label-field":"label","map-options":"","emit-value":""},null,8,["modelValue","options","rules"])]),s("div",z,[o(w,{modelValue:a.crew.nacionalidad,"onUpdate:modelValue":i[4]||(i[4]=e=>a.crew.nacionalidad=e),options:["SALVADORE\xD1O","GUATEMALTECO","HONDURE\xD1O","NICARAGUENSE","COSTARRICENSE","PANAME\xD1O","COLOMBIANO","VENEZOLANO","ECUATORIANO","PERUANO","BOLIVIANO","CHILENO","ARGENTINO","URUGUAYO","PARAGUAYO","BRASILE\xD1O","MEXICANO","CUBANO","DOMINICANO","OTRO"],label:"Nacionalidad",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"value-field":"value","label-field":"label"},null,8,["modelValue","rules"])]),s("div",X,[o(w,{modelValue:a.crew.tipoDocumento,"onUpdate:modelValue":i[5]||(i[5]=e=>a.crew.tipoDocumento=e),options:["DUI","NIT","PASAPORTE","LICENCIA","OTRO"],label:"Tipo de Documento",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"value-field":"value","label-field":"label"},null,8,["modelValue","rules"])]),s("div",Y,[o(f,{modelValue:a.crew.numeroIdentificacion,"onUpdate:modelValue":i[6]||(i[6]=e=>a.crew.numeroIdentificacion=e),label:"N\xFAmero de Identificaci\xF3n",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",F,[o(f,{modelValue:a.crew.telefono,"onUpdate:modelValue":i[7]||(i[7]=e=>a.crew.telefono=e),label:"Tel\xE9fono",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",W,[o(w,{modelValue:a.crew.boat_id,"onUpdate:modelValue":i[8]||(i[8]=e=>a.crew.boat_id=e),options:a.boats,label:"Barco",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"],"emit-value":"","map-options":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])])])]),_:1}),o(E,{align:"right"},{default:t(()=>[D(o(n,{flat:"",label:"Cancelar",loading:a.loading},null,8,["loading"]),[[S]]),o(n,{color:"primary",label:"Guardar",type:"submit",loading:a.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var de=O(k,[["render",Z]]);export{de as default};