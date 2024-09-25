import{_ as G,Q as r,R as u,S as a,T as s,aB as f,V as e,aE as C,ar as x,U as p,Y as m,Z as D,$ as w,aC as y,W as i,X as d,aT as Q,aD as P,L as I,a3 as A,a0 as B}from"./index.566a0c7b.js";import{a as z,b as _,d as T,e as c}from"./QChip.9398b8f1.js";import{Q as S}from"./QBtnDropdown.5a1c6132.js";import{Q as U}from"./QMarkupTable.443ee27d.js";import{Q as E}from"./QForm.11af5cf4.js";import{Q as M}from"./QPage.d89092e2.js";const N={data(){return{search:"",loading:!1,deudores:[],dialog:!1,historyDialog:!1,deudor:{},pago:""}},mounted(){this.deudoresGet()},methods:{anularPago(o){this.$alert.confirm("\xBFEst\xE1 seguro de anular el pago?").onOk(()=>{this.loading=!0,this.$axios.post("anularPago/"+o.id).then(n=>{this.$alert.success("Pago anulado con \xE9xito");const v=this.deudor.payments.findIndex(k=>k.id===o.id);this.deudor.payments[v].status="ANULADO",this.deudoresGet()}).catch(n=>{this.$alert.error(n.response.data.message)}).finally(()=>{this.loading=!1})})},history(o){this.historyDialog=!0,this.deudor=o},agregarPago(o){this.dialog=!0,this.deudor=o,this.pago=o.debt},registrarPago(){this.loading=!0,this.$axios.post("payments",{sale_id:this.deudor.id,amount:this.pago}).then(o=>{this.$alert.success(o.data.message),this.dialog=!1,this.deudoresGet()}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})},deudoresGet(){this.loading=!0,this.$axios.get("debtors",{params:{search:this.search}}).then(o=>{this.deudores=o.data}).catch(o=>{this.$alert.error(o.response.data.message)}).finally(()=>{this.loading=!1})}}},F={class:"row"},L={class:"col-8 col-md-4"},q={class:"col-4 col-md-4"},Y={class:"col-12 q-mt-md"},H=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",null,"Operaci\xF3n"),e("th",null,"Fecha"),e("th",null,"Cliente"),e("th",null,"Total"),e("th",null,"Pago"),e("th",null,"Deuda"),e("th",null,"Usuario"),e("th",null,"Estado"),e("th",null,"Observaci\xF3n")])],-1),R={class:"text-right"},W={class:"text-right"},X={class:"text-right"},Z={class:"text-bold"},j=e("br",null,null,-1),J={class:"text-bold text-red"},K=e("br",null,null,-1),$={class:"text-bold text-green"},ee=e("br",null,null,-1),le={class:"text-bold"},te={class:"text-bold"},se=e("br",null,null,-1),ae={class:"text-bold text-red"},oe=e("br",null,null,-1),ne={class:"text-bold text-green"},ie=e("br",null,null,-1),re={class:"text-bold"},de=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",null,"Opciones"),e("th",null,"Fecha"),e("th",null,"Monto"),e("th",null,"Usuario"),e("th",null,"Estado")])],-1),ue={class:"text-right"};function ce(o,n,v,k,t,h){return r(),u(M,{class:"bg-grey-3 q-pa-md"},{default:a(()=>[s(y,null,{default:a(()=>[s(f,{class:"q-pa-xs"},{default:a(()=>[e("div",F,[e("div",L,[s(C,{modelValue:t.search,"onUpdate:modelValue":n[0]||(n[0]=l=>t.search=l),label:"Buscar por cliente o usuario",placeholder:"Buscar",dense:"",outlined:""},{append:a(()=>[s(x,{name:"search"})]),_:1},8,["modelValue"])]),e("div",q,[s(p,{modelValue:t.search,"onUpdate:modelValue":n[1]||(n[1]=l=>t.search=l),color:"primary",label:"Buscar",onClick:h.deudoresGet,loading:t.loading,icon:"search","no-caps":""},null,8,["modelValue","onClick","loading"])]),e("div",Y,[s(U,{dense:"","wrap-cells":"",separator:"cell"},{default:a(()=>[H,e("tbody",null,[(r(!0),m(w,null,D(t.deudores,l=>{var g,b,V;return r(),m("tr",{key:l.id},[e("td",null,[s(S,{label:"Opciones",color:"primary","no-caps":"",size:"10px","auto-close":""},{default:a(()=>[I((r(),u(z,{clickable:"",onClick:O=>h.agregarPago(l)},{default:a(()=>[s(_,{avatar:""},{default:a(()=>[s(x,{name:"payment",color:"green"})]),_:1}),s(_,null,{default:a(()=>[s(T,null,{default:a(()=>[d("Agregar Pago")]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[A]]),I((r(),u(z,{clickable:"",onClick:O=>h.history(l)},{default:a(()=>[s(_,{avatar:""},{default:a(()=>[s(x,{name:"visibility",color:"primary"})]),_:1}),s(_,null,{default:a(()=>[s(T,null,{default:a(()=>[d("Ver Detalles")]),_:1})]),_:1})]),_:2},1032,["onClick"])),[[A]])]),_:2},1024)]),e("td",null,i(o.$filters.formatdMYHID(l.date)),1),e("td",null,i(o.$filters.capitalizeText(((g=l.client)==null?void 0:g.name)+" "+(((b=l.client)==null?void 0:b.lastname)!=null?(V=l.client)==null?void 0:V.lastname:""))),1),e("td",R,i(l.total),1),e("td",W,[l.pago>0?(r(),u(c,{key:0,color:"positive","text-color":"white",label:l.pago,dense:"",size:"10px"},null,8,["label"])):B("",!0)]),e("td",X,[l.debt>0?(r(),u(c,{key:0,color:"negative","text-color":"white",label:l.debt,dense:"",size:"10px"},null,8,["label"])):B("",!0)]),e("td",null,i(l.user.name),1),e("td",null,[l.status=="ACTIVO"?(r(),u(c,{key:0,color:"positive","text-color":"white",label:"Activo",dense:"",size:"10px"})):(r(),u(c,{key:1,color:"negative","text-color":"white",label:"Inactivo",dense:"",size:"10px"}))]),e("td",null,i(l.observacion),1)])}),128))])]),_:1})])])]),_:1})]),_:1}),s(P,{modelValue:t.dialog,"onUpdate:modelValue":n[4]||(n[4]=l=>t.dialog=l)},{default:a(()=>[s(y,{style:{width:"250px","max-width":"90vw"}},{default:a(()=>[s(f,null,{default:a(()=>[s(E,{onSubmit:h.registrarPago},{default:a(()=>[e("div",null,[e("span",Z,i(t.deudor.client.name+" "+(t.deudor.client.lastname!=null?t.deudor.client.lastname:"")),1),j,d(" Deuda: "),e("span",J,i(t.deudor.debt),1),d(),K,d(" Pagado: "),e("span",$,i(t.deudor.pago),1),d(),ee,d(" Total: "),e("span",le,i(t.deudor.total),1)]),s(C,{modelValue:t.pago,"onUpdate:modelValue":n[2]||(n[2]=l=>t.pago=l),label:"Monto",type:"number",dense:"",outlined:"",step:"0.01",rules:[l=>l>0||"Debe ser mayor a 0",l=>l<=t.deudor.debt||"Debe ser menor o igual a la deuda"]},null,8,["modelValue","rules"]),s(Q,{align:"right"},{default:a(()=>[s(p,{label:"Cancelar",color:"negative",onClick:n[3]||(n[3]=l=>t.dialog=!1),"no-caps":"",loading:t.loading},null,8,["loading"]),s(p,{label:"Guardar",color:"primary",type:"submit","no-caps":"",loading:t.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(P,{modelValue:t.historyDialog,"onUpdate:modelValue":n[6]||(n[6]=l=>t.historyDialog=l)},{default:a(()=>[s(y,{style:{width:"500px","max-width":"90vw"}},{default:a(()=>[s(f,null,{default:a(()=>[e("div",null,[e("span",te,i(t.deudor.client.name+" "+t.deudor.client.lastname),1),se,d(" Deuda: "),e("span",ae,i(t.deudor.debt),1),d(),oe,d(" Pagado: "),e("span",ne,i(t.deudor.pago),1),d(),ie,d(" Total: "),e("span",re,i(t.deudor.total),1)]),s(U,{dense:"","wrap-cells":"",separator:"cell"},{default:a(()=>[de,e("tbody",null,[(r(!0),m(w,null,D(t.deudor.payments,l=>{var g;return r(),m("tr",{key:l.id},[e("td",null,[s(p,{label:"Anular",color:"negative",dense:"",icon:"delete","no-caps":"",size:"10px",onClick:b=>h.anularPago(l)},null,8,["onClick"])]),e("td",null,i(o.$filters.formatdMYHID(l.date)),1),e("td",ue,i(l.amount),1),e("td",null,i((g=l.user)==null?void 0:g.name),1),e("td",null,[l.status=="PAGADO"?(r(),u(c,{key:0,color:"positive","text-color":"white",label:"Pagado",dense:"",size:"10px"})):(r(),u(c,{key:1,color:"negative","text-color":"white",label:"Anulado",dense:"",size:"10px"}))])])}),128))])]),_:1}),s(Q,{align:"right"},{default:a(()=>[s(p,{label:"Cerrar",color:"negative",onClick:n[5]||(n[5]=l=>t.historyDialog=!1),"no-caps":"",loading:t.loading},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var fe=G(N,[["render",ce]]);export{fe as default};
