import{Q as c}from"./QTooltip.8852e1b3.js";import{_ as y,Q as b,R as _,S as i,T as a,U as t,X as p,b6 as C,aE as m,an as Q,aC as w,aB as f,V as d,W as x,aF as V,L as D,aG as v}from"./index.ea69d991.js";import{Q as g,a as k,C as S}from"./ClosePopup.6edd962f.js";import{d as E}from"./QChip.54b0f243.js";import{Q as I}from"./QSpace.f87c73ef.js";import{Q as T}from"./QForm.2a37e5e1.js";import{Q as q}from"./QPage.6495c621.js";import"./position-engine.299ce442.js";import"./QList.99f36a25.js";import"./QMarkupTable.d889b165.js";import"./use-fullscreen.b2b12d06.js";import"./format.2cae61da.js";const A={name:"CompaniesIndex",data(){return{columns:[{name:"option",label:"Opciones",align:"left",field:e=>e.option},{name:"id",label:"ID",align:"left",field:e=>e.id},{name:"name",label:"Nombre",align:"left",field:e=>e.name},{name:"address",label:"Direcci\xF3n",align:"left",field:e=>e.address},{name:"phone",label:"Tel\xE9fono",align:"left",field:e=>e.phone}],loading:!1,companies:[],company:{},companyDialog:!1,clienDialogHistory:!1,filter:"",passwordShow:!1}},mounted(){this.companyGet()},methods:{companySave(){this.loading=!0,this.company.id?this.$axios.put(`companies/${this.company.id}`,this.company).then(e=>{this.companyDialog=!1;const n=this.companies.findIndex(s=>s.id===this.company.id);this.companies.splice(n,1,e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("companies",this.company).then(e=>{this.companyDialog=!1,this.companies.unshift(e.data)}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})},companyDelete(e){this.$alert.confirm("\xBFEst\xE1 seguro de eliminar este companye?").onOk(()=>{this.loading=!0,this.$axios.delete(`companies/${e.id}`).then(n=>{const s=this.companies.findIndex(u=>u.id===n.data.id);console.log(s),s!==-1&&this.companies.splice(s,1)}).catch(n=>{this.$alert.error(n.response.data.message)}).finally(()=>{this.loading=!1})})},companyEdit(e){this.companyDialog=!0,this.company={...e}},companyAdd(){this.companyDialog=!0,this.company={name:"",ci:""}},companyGet(){this.loading=!0,this.$axios.get("companies").then(e=>{this.companies=e.data}).catch(e=>{this.$alert.error(e.response.data.message)}).finally(()=>{this.loading=!1})}}},B={class:"text-h6"},U={class:"row"},N={class:"col-12"},G={class:"col-12"},F={class:"col-12"};function O(e,n,s,u,o,r){return b(),_(q,{class:"bg-grey-3 q-pa-md"},{default:i(()=>[a(k,{rows:o.companies,columns:o.columns,title:"Empresas","rows-per-page-options":[0],"row-key":"id",dense:"",filter:o.filter,loading:o.loading},{"body-cell-option":i(l=>[a(g,{"auto-width":""},{default:i(()=>[a(t,{flat:"",dense:"",icon:"edit",onClick:h=>r.companyEdit(l.row)},{default:i(()=>[a(c,null,{default:i(()=>[p("Editar")]),_:1})]),_:2},1032,["onClick"]),a(t,{flat:"",dense:"",icon:"delete",onClick:h=>r.companyDelete(l.row)},{default:i(()=>[a(c,null,{default:i(()=>[p("Eliminar")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),"body-cell-name":i(l=>[a(g,{props:l},{default:i(()=>[a(E,{label:l.row.name,"text-color":"white",style:C({backgroundColor:l.row.color}),icon:"business"},null,8,["label","style"])]),_:2},1032,["props"])]),"top-right":i(()=>[a(t,{outline:"",dense:"",icon:"add_circle",onClick:r.companyAdd,label:"Agregar","no-caps":"",loading:o.loading},{default:i(()=>[a(c,null,{default:i(()=>[p("Agregar")]),_:1})]),_:1},8,["onClick","loading"]),a(m,{modelValue:o.filter,"onUpdate:modelValue":n[0]||(n[0]=l=>o.filter=l),dense:"",class:"q-ml-md",debounce:"300",placeholder:"Buscar",outlined:"",clearable:""},{append:i(()=>[a(Q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"]),a(v,{modelValue:o.companyDialog,"onUpdate:modelValue":n[5]||(n[5]=l=>o.companyDialog=l),persistent:""},{default:i(()=>[a(w,{style:{width:"250px","max-width":"90vw"}},{default:i(()=>[a(f,{class:"row items-center q-pb-none"},{default:i(()=>[d("div",B,x(o.company.id?"Editar":"Agregar")+" Empresas",1),a(I),a(t,{flat:"",dense:"",icon:"close",onClick:n[1]||(n[1]=l=>o.companyDialog=!1)})]),_:1}),a(T,{onSubmit:r.companySave},{default:i(()=>[a(f,null,{default:i(()=>[d("div",U,[d("div",N,[a(m,{modelValue:o.company.name,"onUpdate:modelValue":n[2]||(n[2]=l=>o.company.name=l),label:"Nombre",outlined:"",dense:"",rules:[l=>!!l||"Campo requerido"]},null,8,["modelValue","rules"])]),d("div",G,[a(m,{modelValue:o.company.address,"onUpdate:modelValue":n[3]||(n[3]=l=>o.company.address=l),label:"Direcci\xF3n",outlined:"",dense:"",rules:[l=>!!l||"Campo requerido"]},null,8,["modelValue","rules"])]),d("div",F,[a(m,{modelValue:o.company.phone,"onUpdate:modelValue":n[4]||(n[4]=l=>o.company.phone=l),label:"Tel\xE9fono",outlined:"",dense:"",rules:[l=>!!l||"Campo requerido"]},null,8,["modelValue","rules"])])])]),_:1}),a(V,{align:"right"},{default:i(()=>[D(a(t,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[S]]),a(t,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Z=y(A,[["render",O]]);export{Z as default};
