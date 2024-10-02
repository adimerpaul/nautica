import{_ as N,P as F,Q as f,Y as _,T as o,S as a,aD as Q,$ as G,V as i,aE as b,ar as y,U as g,a0 as k,X as r,R as w,L as x,W as c,a4 as O}from"./index.5e6a47e9.js";import{Q as A,a as u,b as p}from"./QTable.bb1d0409.js";import{Q as S}from"./index.81ed06c2.js";import{a as C,b as v,e as I}from"./QChip.81a2916c.js";import{Q as U}from"./QList.f4bb995d.js";import{Q as T}from"./QBtnDropdown.01e34dec.js";import{Q as R}from"./QTooltip.577cf44c.js";import{Q as M}from"./QPage.7ce9e4f3.js";import{C as V}from"./ClosePopup.4838f874.js";import{h as D}from"./moment.40bc58bf.js";import{D as B,I as L}from"./DialogGasto.8ca4b3e5.js";import"./QMarkupTable.9e7c78a7.js";import"./QSelect.9e338aa4.js";import"./format.2cae61da.js";import"./use-fullscreen.eba407b6.js";import"./_commonjsHelpers.48c1ef9f.js";import"./QSpace.3df0d842.js";import"./QForm.7f3320f2.js";import"./index.22e72184.js";const P={name:"GastosIndex",components:{DialogGasto:B},data(){return{gastoDialog:!1,fechaInicioSemana:D().startOf("isoWeek").format("YYYY-MM-DD"),fechaFinSemana:D().endOf("isoWeek").format("YYYY-MM-DD"),concepto:"",columns:[{name:"opcion",label:"Opcion",align:"left",field:"opcion"},{name:"proveedorcliente",label:"Proveedor / cliente",align:"left",field:"proveedor / cliente",sortable:!0},{name:"montoTotal",label:"Monto total",align:"left",field:"montoTotal",sortable:!0},{name:"fechayhora",label:"Fecha y hora",align:"left",field:"fechayhora",sortable:!0},{name:"concepto",label:"Concepto",align:"left",field:"concepto",sortable:!0},{name:"pago",label:"Pago",align:"left",field:"pago",sortable:!0},{name:"numeroFactura",label:"Numero de factura",align:"left",field:"numero de factura",sortable:!0},{name:"user",label:"Usuario",align:"left",field:t=>t.user.name,sortable:!0}],sales:[],loading:!1,filter:""}},mounted(){this.salesGastos()},methods:{exportarExcel(){this.loading=!0,this.$axios.get("exportSalesExcel",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto},responseType:"blob"}).then(t=>{const l=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=l,n.setAttribute("download","ventas.xlsx"),document.body.appendChild(n),n.click()}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},exportarPdf(){this.loading=!0,this.$axios.get("exportSalesPdf",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto},responseType:"blob"}).then(t=>{const l=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a");n.href=l,n.setAttribute("download","ventas.pdf"),document.body.appendChild(n),n.click()}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},reimprimirNota(t){L.nota(t).then(l=>{})},saleAnular(t){this.$q.dialog({title:"Anular venta",message:"\xBFEst\xE1 seguro de anular la venta?",persistent:!0,prompt:{model:"",type:"text",label:"Motivo de anulaci\xF3n",required:!0},ok:{label:"Si",color:"negative",push:!0},cancel:{label:"No",color:"primary",push:!0}}).onOk(l=>{this.$axios.post("saleAnular",{id:t,motivo:l}).then(n=>{this.salesGastos()}).catch(n=>{console.log(n)})})},gastoCreated(t){this.sales.unshift(t),this.gastoDialog=!1},salesGastos(){this.loading=!0,this.$axios.get("salesGastos",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto}}).then(t=>{this.sales=t.data,console.log(t.data)}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})}},computed:{balance(){const t=this.sales.reduce((l,n)=>n.status!=="ANULADO"?n.tipo_venta==="INGRESO"?l+n.total:l-n.total:l,0);return Math.round(t*100)/100},ingreso(){const t=this.sales.reduce((l,n)=>n.tipo_venta==="INGRESO"&&n.status!=="ANULADO"&&n.pago==="EFECTIVO"?l+n.total:l,0);return Math.round(t*100)/100},ingresoTransferencia(){const t=this.sales.reduce((l,n)=>n.tipo_venta==="INGRESO"&&n.status!=="ANULADO"&&n.pago==="TRANSFERENCIA"?l+n.total:l,0);return Math.round(t*100)/100},gasto(){const t=this.sales.reduce((l,n)=>n.tipo_venta==="EGRESO"&&n.status!=="ANULADO"?l+n.total:l,0);return Math.round(t*100)/100}}},Y={key:0,class:"row"},q={class:"col-6 col-md-2 q-pa-xs"},z={class:"col-6 col-md-2 q-pa-xs"},W={class:"col-12 col-md-2 q-pa-xs"},j={class:"col-12 col-md-6 text-right"},H={class:"row"},X={class:"col-12"},J=i("div",null,"Imprimir nota",-1),K=i("div",null,"Anular",-1),Z={key:1,style:{width:"95px"}},$={key:0,class:"text-grey-8"},ee={style:{}},oe={class:"q-ml-xs",style:{width:"180px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},ae={class:"",style:{width:"100px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},te={class:"text-right text-red text-bold"},le=i("div",{id:"myElement",class:"hidden"},null,-1);function ne(t,l,n,se,s,m){const E=F("DialogGasto");return f(),_(G,null,[o(M,{class:"q-pa-xs bg-grey-3"},{default:a(()=>[t.$store.user.id==1?(f(),_("div",Y,[i("div",q,[o(b,{modelValue:s.fechaInicioSemana,"onUpdate:modelValue":[l[0]||(l[0]=e=>s.fechaInicioSemana=e),m.salesGastos],label:"Fecha inicio",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),i("div",z,[o(b,{modelValue:s.fechaFinSemana,"onUpdate:modelValue":[l[1]||(l[1]=e=>s.fechaFinSemana=e),m.salesGastos],label:"Fecha fin",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),i("div",W,[o(b,{modelValue:s.concepto,"onUpdate:modelValue":[l[2]||(l[2]=e=>s.concepto=e),m.salesGastos],label:"Buscar por concepto",dense:"",outlined:"",class:"bg-white",debounce:"300",clearable:"",placeholder:"Buscar por concepto"},{prepend:a(()=>[o(y,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),i("div",j,[o(g,{label:"Excel",color:"green",size:"10px",icon:"fa-solid fa-file-excel","no-caps":"",rounded:"",onClick:m.exportarExcel,loading:s.loading},null,8,["onClick","loading"]),o(g,{label:"Pdf",color:"red",size:"10px",icon:"fa-solid fa-file-pdf","no-caps":"",rounded:"",onClick:m.exportarPdf,loading:s.loading},null,8,["onClick","loading"]),o(g,{loading:s.loading,size:"10px",label:"Nuevo Gasto",color:"red",icon:"add_circle_outline","no-caps":"",rounded:"",onClick:l[3]||(l[3]=e=>s.gastoDialog=!0)},null,8,["loading"])])])):k("",!0),i("div",H,[i("div",X,[o(A,{columns:s.columns,rows:s.sales,dense:"","rows-per-page-options":[0],filter:s.filter,loading:s.loading,"wrap-cells":"","no-data-label":"No hay ventas","no-results-label":"No hay ventas",title:"Historial de ventas"},{"top-right":a(()=>[o(b,{outlined:"",modelValue:s.filter,"onUpdate:modelValue":l[4]||(l[4]=e=>s.filter=e),debounce:"300",placeholder:"Buscar",dense:""},{append:a(()=>[o(g,{flat:"",round:"",dense:"",icon:"search"})]),_:1},8,["modelValue"])]),header:a(e=>[o(S,{props:e,class:"bg-primary text-white"},{default:a(()=>[o(u,{key:"opcion",props:e,"auto-width":""},{default:a(()=>[r("Opcion")]),_:2},1032,["props"]),o(u,{key:"proveedorcliente",props:e},{default:a(()=>[r("Proveedor / cliente")]),_:2},1032,["props"]),o(u,{key:"montoTotal",props:e},{default:a(()=>[r("Monto total")]),_:2},1032,["props"]),o(u,{key:"fechayhora",props:e},{default:a(()=>[r("Fecha y hora")]),_:2},1032,["props"]),o(u,{key:"concepto",props:e},{default:a(()=>[r("Concepto")]),_:2},1032,["props"]),o(u,{key:"observacion",props:e},{default:a(()=>[r("Comentario")]),_:2},1032,["props"]),o(u,{key:"pago",props:e},{default:a(()=>[r("Pago")]),_:2},1032,["props"]),o(u,{key:"numeroFactura",props:e},{default:a(()=>[r("Num. Fac")]),_:2},1032,["props"]),o(u,{key:"user",props:e},{default:a(()=>[r("Usuario")]),_:2},1032,["props"]),o(u,{key:"lugar",props:e},{default:a(()=>[r("Lugar")]),_:2},1032,["props"])]),_:2},1032,["props"])]),body:a(e=>[o(S,{props:e},{default:a(()=>[o(p,{key:"opcion",props:e,"auto-width":""},{default:a(()=>[e.row.status=="ACTIVO"?(f(),w(T,{key:0,dense:"",icon:"more_vert",align:"right",label:"Opciones","no-caps":"",color:e.row.tipo_venta=="INGRESO"?"green-9":"red-9",size:"10px"},{default:a(()=>[o(U,null,{default:a(()=>[x((f(),w(C,{clickable:"",onClick:d=>m.reimprimirNota(e.row)},{default:a(()=>[o(v,{avatar:""},{default:a(()=>[o(y,{name:"o_print"})]),_:1}),o(v,null,{default:a(()=>[J]),_:1})]),_:2},1032,["onClick"])),[[V]]),x((f(),w(C,{clickable:"",onClick:d=>m.saleAnular(e.row.id)},{default:a(()=>[o(v,{avatar:""},{default:a(()=>[o(y,{name:"o_highlight_off"})]),_:1}),o(v,null,{default:a(()=>[K]),_:1})]),_:2},1032,["onClick"])),[[V]])]),_:2},1024)]),_:2},1032,["color"])):(f(),_("div",Z,[o(I,{label:"Anulado",color:"grey-4","text-color":"white",dense:"",flat:""}),e.row.motivo_anulacion?(f(),w(g,{key:0,dense:"",color:"red-4",size:"10px","no-caps":"","no-wrap":"",icon:"visibility",onClick:d=>t.$alert.dialogShow(e.row.motivo_anulacion)},{default:a(()=>[o(R,null,{default:a(()=>[r("Motivo de anulaci\xF3n")]),_:1})]),_:2},1032,["onClick"])):k("",!0)]))]),_:2},1032,["props"]),o(p,{key:"proveedorcliente",props:e},{default:a(()=>{var d,h;return[e.row.client?(f(),_("div",$,c((d=e.row.client)==null?void 0:d.name)+" "+c((h=e.row.client)==null?void 0:h.lastname),1)):k("",!0)]}),_:2},1032,["props"]),o(p,{key:"montoTotal",props:e,class:"text-right"},{default:a(()=>[i("span",{class:O(`text-${e.row.tipo_venta=="INGRESO"?"green":"red"}-7 text-bold`)},c(e.row.total)+" $ ",3)]),_:2},1032,["props"]),o(p,{key:"fechayhora",props:e,style:{"min-width":"150px"}},{default:a(()=>[r(c(t.$filters.dateDmYHis(e.row.date)),1)]),_:2},1032,["props"]),o(p,{key:"concepto",props:e,class:""},{default:a(()=>{var d,h;return[i("div",null,[i("div",ee,[i("div",oe,c(e.row.description)+" "+c((h=(d=e.row)==null?void 0:d.boat)==null?void 0:h.name),1)])])]}),_:2},1032,["props"]),o(p,{key:"observacion",props:e},{default:a(()=>[i("div",ae,c(e.row.observacion),1)]),_:2},1032,["props"]),o(p,{key:"pago",props:e},{default:a(()=>[o(I,{color:`${e.row.pago=="EFECTIVO"?"blue":"green"}-5`,"text-color":"white",dense:"",flat:"",label:e.row.pago},null,8,["color","label"])]),_:2},1032,["props"]),o(p,{key:"numeroFactura",props:e},{default:a(()=>[i("p",te,c(e.row.numeroFactura),1)]),_:2},1032,["props"]),o(p,{key:"user",props:e},{default:a(()=>{var d;return[i("p",null,c((d=e.row.user)==null?void 0:d.name),1)]}),_:2},1032,["props"]),o(p,{key:"lugar",props:e},{default:a(()=>[i("p",null,c(e.row.lugar),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","loading"])])])]),_:1}),o(Q,{modelValue:s.gastoDialog,"onUpdate:modelValue":l[5]||(l[5]=e=>s.gastoDialog=e),position:"right",maximized:""},{default:a(()=>[o(E,{onGastoCreated:m.gastoCreated},null,8,["onGastoCreated"])]),_:1},8,["modelValue"]),le],64)}var Ie=N(P,[["render",ne]]);export{Ie as default};
