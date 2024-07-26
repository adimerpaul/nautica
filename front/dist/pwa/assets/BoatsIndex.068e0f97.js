import{Q as c}from"./QTooltip.78fa554c.js";import{_ as w,Q as x,R as C,S as t,T as a,U as n,X as u,b9 as g,aE as h,ar as Q,aC as D,aB as _,V as m,W as V,aU as v,L as k,aD as S}from"./index.4b805d87.js";import{b,Q as B}from"./QTable.00ac40c2.js";import{e as y}from"./QChip.75150d70.js";import{b as E,Q as I}from"./QSpace.aca64fbf.js";import{Q as A,a as U}from"./QForm.6bbf5327.js";import{C as q}from"./ClosePopup.f8c58c97.js";import"./QList.227bd71c.js";import"./QMarkupTable.998cfc10.js";import"./use-fullscreen.309b04ff.js";import"./format.2cae61da.js";const G={name:"BoatsIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:e=>e.option},{name:"id",label:"ID",align:"left",field:e=>e.id},{name:"name",label:"Nombre",align:"left",field:e=>e.name},{name:"company",label:"Empresa",align:"left",field:e=>{var l;return(l=e.company)==null?void 0:l.name}}],loading:!1,boats:[],boat:{},boatDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1,companies:[]}},mounted(){this.boatGet(),this.companiesGet()},methods:{companiesGet(){this.$axios.get("companies").then(e=>{this.companies=e.data})},boatSave(){this.loading=!0,this.boat.id?this.$axios.put(`boats/${this.boat.id}`,this.boat).then(e=>{this.boatDialog=!1;const l=this.boats.findIndex(s=>s.id===this.boat.id);this.boats.splice(l,1,e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("boats",this.boat).then(e=>{this.boatDialog=!1,this.boats.unshift(e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},boatDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este boate?").onOk(()=>{this.loading=!0,this.$axios.delete(`boats/${e.id}`).then(l=>{const s=this.boats.findIndex(p=>p.id===l.data.id);console.log(s),s!==-1&&this.boats.splice(s,1)}).catch(l=>{this.$alert.error(l.response.data.message)}).finally(()=>{this.loading=!1})})},boatEdit(e){this.boatDialog=!0,this.boat={...e}},boatAdd(){this.boatDialog=!0,this.boat={name:""}},boatGet(){this.loading=!0,this.$axios.get("boats").then(e=>{this.boats=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})}}},N={class:"text-h6"},T={class:"row"},O={class:"col-12"},P={class:"col-12"};function z(e,l,s,p,i,r){return x(),C(A,{class:"bg-grey-3 q-pa-md"},{default:t(()=>[a(B,{rows:i.boats,columns:i.columns,title:"Botes","rows-per-page-options":[0],"row-key":"id",dense:"",filter:i.filter,loading:i.loading},{"body-cell-option":t(o=>[a(b,{"auto-width":""},{default:t(()=>[a(n,{flat:"",dense:"",icon:"edit",onClick:d=>r.boatEdit(o.row)},{default:t(()=>[a(c,null,{default:t(()=>[u("Editar")]),_:1})]),_:2},1032,["onClick"]),a(n,{flat:"",dense:"",icon:"delete",onClick:d=>r.boatDelete(o.row)},{default:t(()=>[a(c,null,{default:t(()=>[u("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-name":t(o=>[a(b,{props:o},{default:t(()=>[a(y,{label:o.row.name,"text-color":"white",style:g({backgroundColor:o.row.color}),icon:"directions_boat"},null,8,["label","style"])]),_:2},1032,["props"])]),"body-cell-company":t(o=>[a(b,{props:o},{default:t(()=>{var d,f;return[a(y,{label:(d=o.row.company)==null?void 0:d.name,"text-color":"white",dense:"",style:g({backgroundColor:(f=o.row.company)==null?void 0:f.color}),icon:"business"},null,8,["label","style"])]}),_:2},1032,["props"])]),"top-right":t(()=>[a(n,{outline:"",dense:"",icon:"add_circle",onClick:r.boatAdd,label:"Agregar","no-caps":"",loading:i.loading},{default:t(()=>[a(c,null,{default:t(()=>[u("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),a(h,{modelValue:i.filter,"onUpdate:modelValue":l[0]||(l[0]=o=>i.filter=o),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:t(()=>[a(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"]),a(S,{modelValue:i.boatDialog,"onUpdate:modelValue":l[4]||(l[4]=o=>i.boatDialog=o),persistent:""},{default:t(()=>[a(D,{style:{width:"250px","max-width":"90vw"}},{default:t(()=>[a(_,{class:"row items-center q-pb-none"},{default:t(()=>[m("div",N,V(i.boat.id?"Editar":"Agregar")+" Botes",1),a(E),a(n,{flat:"",dense:"",icon:"close",onClick:l[1]||(l[1]=o=>i.boatDialog=!1)})]),_:1}),a(U,{onSubmit:r.boatSave},{default:t(()=>[a(_,null,{default:t(()=>[m("div",T,[m("div",O,[a(h,{modelValue:i.boat.name,"onUpdate:modelValue":l[2]||(l[2]=o=>i.boat.name=o),label:"Nombre",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",P,[a(I,{modelValue:i.boat.company_id,"onUpdate:modelValue":l[3]||(l[3]=o=>i.boat.company_id=o),options:i.companies,label:"Empresa",outlined:"",dense:"",rules:[o=>!!o||"Campo requerido"],"emit-value":"","map-options":"","option-value":"id","option-label":"name"},null,8,["modelValue","options","rules"])])])]),_:1}),a(v,{align:"right"},{default:t(()=>[k(a(n,{flat:"",label:"Cancelar",loading:i.loading},null,8,["loading"]),[[q]]),a(n,{color:"primary",label:"Guardar",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Z=w(G,[["render",z]]);export{Z as default};