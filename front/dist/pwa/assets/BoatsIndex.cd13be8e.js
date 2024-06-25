import{Q as c}from"./QTooltip.9b5d394c.js";import{_ as w,Q as x,R as C,S as t,T as a,U as n,X as u,b8 as g,aD as h,ar as Q,aC as D,aB as _,V as m,W as V,b7 as v,L as k,aE as S}from"./index.b3039264.js";import{a as b,Q as B,C as E}from"./ClosePopup.dd71a0ed.js";import{e as y}from"./QChip.6c3d612f.js";import{Q as I,a as A}from"./QSpace.23243f30.js";import{a as q,Q as G}from"./QForm.b3efc297.js";import"./QList.53778565.js";import"./QMarkupTable.35ec11ee.js";import"./use-fullscreen.7825d4f4.js";import"./format.2cae61da.js";const N={name:"BoatsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:e=>e.option},{name:"id",label:"ID",align:"left",field:e=>e.id},{name:"name",label:"Nombre",align:"left",field:e=>e.name},{name:"company",label:"Empresa",align:"left",field:e=>{var l;return(l=e.company)==null?void 0:l.name}}],loading:!1,boats:[],boat:{},boatDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,companies:[]}},mounted(){this.boatGet(),this.companiesGet()},methods:{companiesGet(){this.$axios.get("companies").then(e=>{this.companies=e.data})},boatSave(){this.loading=!0,this.boat.id?this.$axios.put(`boats/${this.boat.id}`,this.boat).then(e=>{this.boatDialog=!1;const l=this.boats.findIndex(s=>s.id===this.boat.id);this.boats.splice(l,1,e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("boats",this.boat).then(e=>{this.boatDialog=!1,this.boats.unshift(e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},boatDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este boate?").onOk(()=>{this.loading=!0,this.$axios.delete(`boats/${e.id}`).then(l=>{const s=this.boats.findIndex(p=>p.id===l.data.id);console.log(s),s!==-1&&this.boats.splice(s,1)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},boatEdit(e){this.boatDialog=!0,this.boat={...e}},boatAdd(){this.boatDialog=!0,this.boat={name:""}},boatGet(){this.loading=!0,this.$axios.get("boats").then(e=>{this.boats=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})}}},T={class:"text-h6"},U={class:"row"},O={class:"col-12"},P={class:"col-12"};function z(e,l,s,p,i,d){return x(),C(q,{class:"bg-grey-3 q-pa-md"},{default:t(()=>[a(B,{rows:i.boats,columns:i.columns,title:"Botes","rows-per-page-options":[0],"row-key":"id",dense:"",filter:i.filter,loading:i.loading},{"body-cell-option":t(o=>[a(b,{"auto-width":""},{default:t(()=>[a(n,{flat:"",dense:"",icon:"edit",onClick:r=>d.boatEdit(o.row)},{default:t(()=>[a(c,null,{default:t(()=>[u("Editar")]),_:1})]),_:2},1032,["onClick"]),a(n,{flat:"",dense:"",icon:"delete",onClick:r=>d.boatDelete(o.row)},{default:t(()=>[a(c,null,{default:t(()=>[u("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-name":t(o=>[a(b,{props:o},{default:t(()=>[a(y,{label:o.row.name,"text-color":"white",style:g({backgroundColor:o.row.color}),icon:"directions_boat"},null,8,["label","style"])]),_:2},1032,["props"])]),"body-cell-company":t(o=>[a(b,{props:o},{default:t(()=>{var r,f;return[a(y,{label:(r=o.row.company)==null?void 0:r.name,"text-color":"white",dense:"",style:g({backgroundColor:(f=o.row.company)==null?void 0:f.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"top-right":t(()=>[a(n,{outline:"",dense:"",icon:"add_circle",onClick:d.boatAdd,label:"Agregar","no-caps":"",loading:i.loading},{default:t(()=>[a(c,null,{default:t(()=>[u("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),a(h,{modelValue:i.filter,"onUpdate:modelValue":l[0]||(l[0]=o=>i.filter=o),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:t(()=>[a(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"]),a(S,{modelValue:i.boatDialog,"onUpdate:modelValue":l[4]||(l[4]=o=>i.boatDialog=o),persistent:""},{default:t(()=>[a(D,{style:{width:"250px","max-width":"90vw"}},{default:t(()=>[a(_,{class:"row items-center q-pb-none"},{default:t(()=>[m("div",T,V(i.boat.id?"Editar":"Agregar")+" Botes",1),a(I),a(n,{flat:"",dense:"",icon:"close",onClick:l[1]||(l[1]=o=>i.boatDialog=!1)})]),_:1}),a(G,{onSubmit:d.boatSave},{default:t(()=>[a(_,null,{default:t(()=>[m("div",U,[m("div",O,[a(h,{modelValue:i.boat.name,"onUpdate:modelValue":l[2]||(l[2]=o=>i.boat.name=o),label:"Nombre",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",P,[a(A,{modelValue:i.boat.company_id,"onUpdate:modelValue":l[3]||(l[3]=o=>i.boat.company_id=o),options:i.companies,label:"Empresa",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"],"emit-value":"","map-options":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])])])]),_:1}),a(v,{align:"right"},{default:t(()=>[k(a(n,{flat:"",label:"Cancelar",loading:i.loading},null,8,["loading"]),[[E]]),a(n,{color:"primary",label:"Guardar",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Y=w(N,[["render",z]]);export{Y as default};
