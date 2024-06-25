import{_ as q,Q as n,R as v,S as a,T as l,aB as p,V as e,aD as f,a0 as u,a1 as V,a2 as C,aC as _,ar as w,U as m,$ as A,W as d,X as g,Z as P,b7 as U,aE as D,L as k,bb as Q}from"./index.6f95fcdd.js";import{a as x,Q as b}from"./QSpace.22bfb77d.js";import{Q as I}from"./QImg.f786cc11.js";import{Q as S}from"./QMarkupTable.48e824b5.js";import{a as T,Q as F}from"./QForm.1c0cbf19.js";import"./QChip.d6607c8a.js";import"./format.2cae61da.js";const N={name:"ProductsIndex",data(){return{products:[],productsAll:[],clients:[],clientsAll:[],client:"",product:{},categories:[],category:"",search:"",saleDialog:!1,loading:!1,tipo:"",tipos:["CREDITO","CONTADO"],monto:"",observacion:"",pago:""}},mounted(){this.productsGet(),this.clientGet(),this.categoriesGet()},methods:{saleInsert(){this.loading=!0,this.$axios.post("sales",{client_id:this.client.id,tipo:this.tipo,monto:this.monto,products:this.$store.orders,observacion:this.observacion,pago:this.pago}).then(s=>{this.$alert.success("Venta realizada con \xE9xito"),this.saleDialog=!1,this.cartClear(),this.productsGet()}).catch(s=>{this.$alert.error("Error al realizar la venta")}).finally(()=>{this.loading=!1})},clientGet(){this.$axios.get("clients").then(s=>{this.clients=s.data,this.clientsAll=s.data})},pay(){if(this.$store.orders.length===0)return this.$alert.error("No hay productos en el carrito"),!1;if(this.$store.orders.some(s=>s.stock<s.quantity))return this.$alert.error("No hay stock suficiente "+this.$store.orders.find(s=>s.stock<s.quantity).name),!1;this.saleDialog=!0,this.client="",this.tipo="",this.monto="",this.observacion="",this.pago=""},deleteProduct(s){const o=this.$store.orders.findIndex(c=>c.id===s.id);this.$store.orders.splice(o,1)},sumNum(s,o){return(parseFloat(s)*parseInt(o)).toFixed(2)},orderAdd(s){const o=this.$store.orders.find(c=>c.id===s.id);o?o.quantity++:this.$store.orders.push({...s,quantity:1})},cartClear(){this.$store.orders=[]},productsGet(){this.$axios.get("products").then(s=>{this.products=s.data,this.productsAll=s.data})},categoriesGet(){this.categories=[{id:"",name:"Todas"}],this.$axios.get("categories").then(s=>{this.categories=this.categories.concat(s.data)})},filterProductsSearch(){this.search===""?this.products=this.productsAll:this.products=this.productsAll.filter(s=>s.name.toLowerCase().includes(this.search.toLowerCase()))},filterProducts(){console.log(this.category),this.category.id===""?this.products=this.productsAll:this.products=this.productsAll.filter(s=>s.category_id===this.category.id)},fnFilter(s,o,c){if(s===""){o(()=>{this.clients=this.clientsAll});return}o(()=>{const y=s.toLowerCase();this.clients=this.clientsAll.filter(i=>i.name.toLowerCase().indexOf(y)>-1)})}},computed:{total(){return this.$store.orders.reduce((s,o)=>s+parseFloat(o.price)*parseInt(o.quantity),0).toFixed(2)}}},B={class:"row"},G={class:"col-12 col-md-8"},E={class:"row"},L={class:"col-12 col-md-4"},O={class:"col-12 col-md-3 text-right"},z=e("div",{class:"col-12 col-md-5 text-right"},null,-1),R={class:"col-12"},M={class:"row"},W={class:"absolute-bottom text-subtitle2 text-center text-bold",style:{padding:"0px",background:"linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.7))",color:"white","line-height":"1"}},X={class:"row items-center"},Z={class:"text-bold text-center q-pl-xs"},j={class:"text-bold text-center q-pr-xs"},H={class:"col-12 col-md-4"},J={class:"row"},K=e("div",{class:"text-subtitle2 text-primary text-bold q-pl-xs"}," Carrito de Compras ",-1),Y=e("thead",{class:"bg-primary text-white"},[e("tr",null,[e("th",null,"Producto"),e("th",{class:"text-right"},"Precio"),e("th",{class:"text-right"},"Cantidad"),e("th",{class:"text-right",width:"80px"},"Total")])],-1),$={key:0},ee={style:{"max-width":"170px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},te={class:"text-right"},se=["onUpdate:modelValue"],oe={class:"text-right"},le=["onUpdate:modelValue"],ie={class:"text-right"},ae={key:1},re=e("tr",null,[e("td",{colspan:"4",class:"text-center"}," No hay productos en el carrito ")],-1),ne=[re],de=e("td",{colspan:"3",class:"text-right text-bold"}," Total ",-1),ce={class:"text-right text-subtitle2 text-red text-bold"},ue={colspan:"4"},he=e("div",{class:"text-h6 text-primary text-center text-bold"}," Pago ",-1),pe={class:"row"},me={class:"col-12 col-md-4"},_e={class:"col-6 col-md-2 text-bold text-red text-h6 text-center"},ge={style:{"line-height":"1"}},xe=e("span",{class:"text-grey"},"Total",-1),fe=e("br",null,null,-1),be={class:"col-6 col-md-4"},ye={class:"col-12 col-md-2"},ve={class:"col-12 col-md-6"},Ve={class:"col-12 col-md-4"};function Ce(s,o,c,y,i,r){return n(),v(T,{class:"bg-grey-3 q-pa-xs"},{default:a(()=>[l(_,null,{default:a(()=>[l(p,{class:"q-pa-xs"},{default:a(()=>[e("div",B,[e("div",G,[e("div",E,[e("div",L,[l(f,{modelValue:i.search,"onUpdate:modelValue":[o[0]||(o[0]=t=>i.search=t),r.filterProductsSearch],label:"Buscar",outlined:"",dense:"",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),e("div",O,[l(x,{modelValue:i.category,"onUpdate:modelValue":[o[1]||(o[1]=t=>i.category=t),r.filterProducts],options:i.categories,label:"Categor\xEDa",outlined:"",dense:"","option-value":"id","option-label":"name"},null,8,["modelValue","options","onUpdate:modelValue"])]),z,e("div",R,[e("div",M,[(n(!0),u(C,null,V(i.products,t=>(n(),u("div",{class:"col-6 col-md-2",key:t.id},[l(_,{class:"q-ma-xs cursor-pointer",flat:"",bordered:"",onClick:h=>r.orderAdd(t)},{default:a(()=>[l(I,{src:`${s.$url}../images/${t.image}`,"spinner-color":"white","spinner-size":"40",style:{height:"100px"}},{default:a(()=>[e("div",W,[g(d(t.name)+" ",1),e("div",X,[e("div",Z,d(t.stock),1),l(b),e("div",j,d(t.price)+" $ ",1)])])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),128))])])])]),e("div",H,[l(_,null,{default:a(()=>[l(p,{class:"q-pb-none row items-center"},{default:a(()=>[e("div",J,[l(w,{name:"o_shopping_cart"}),K]),l(b),l(m,{flat:"",dense:"",icon:"o_delete",onClick:r.cartClear,size:"10px",label:"Vaciar","no-caps":"",color:"red"},null,8,["onClick"])]),_:1}),l(A),l(p,{class:"q-pa-none"},{default:a(()=>[l(S,{dense:"","wrap-cells":""},{default:a(()=>[Y,s.$store.orders.length>0?(n(),u("tbody",$,[(n(!0),u(C,null,V(s.$store.orders,t=>(n(),u("tr",{key:t.id},[e("td",null,[e("div",ee,[l(w,{name:"o_delete",class:"cursor-pointer",color:"red",onClick:h=>r.deleteProduct(t)},null,8,["onClick"]),g(" "+d(t.name),1)])]),e("td",te,[k(e("input",{"onUpdate:modelValue":h=>t.price=h,type:"number",min:"1",style:{width:"50px"},step:"0.01"},null,8,se),[[Q,t.price]])]),e("td",oe,[k(e("input",{"onUpdate:modelValue":h=>t.quantity=h,type:"number",min:"1",style:{width:"50px"}},null,8,le),[[Q,t.quantity]])]),e("td",ie,d(r.sumNum(t.price,t.quantity))+" $ ",1)]))),128))])):(n(),u("tbody",ae,ne)),e("tfoot",null,[e("tr",null,[de,e("td",ce,d(r.total)+" $ ",1)]),e("tr",null,[e("td",ue,[l(m,{dense:"",color:"primary",label:"Pagar","no-caps":"",icon:"o_payment",push:"",class:"full-width text-bold",onClick:r.pay},null,8,["onClick"])])])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1}),l(D,{modelValue:i.saleDialog,"onUpdate:modelValue":o[9]||(o[9]=t=>i.saleDialog=t),persistent:""},{default:a(()=>[l(_,{style:{width:"700px","max-width":"90vw"}},{default:a(()=>[l(p,{class:"q-pb-none row items-center"},{default:a(()=>[he,l(b),l(m,{flat:"",dense:"",icon:"cancel",onClick:o[2]||(o[2]=t=>i.saleDialog=!1)})]),_:1}),l(p,null,{default:a(()=>[l(F,{onSubmit:r.saleInsert},{default:a(()=>[e("div",pe,[e("div",me,[l(x,{modelValue:i.client,"onUpdate:modelValue":o[3]||(o[3]=t=>i.client=t),options:i.clients,label:"Cliente",outlined:"",dense:"",onFilter:r.fnFilter,"use-input":"","option-value":"id","option-label":"name",rules:[t=>!!t||"Seleccione un cliente"]},null,8,["modelValue","options","onFilter","rules"])]),e("div",_e,[e("div",ge,[xe,g(),fe,g(" "+d(r.total)+"$ ",1)])]),e("div",be,[l(x,{modelValue:i.tipo,"onUpdate:modelValue":o[4]||(o[4]=t=>i.tipo=t),options:i.tipos,label:"Tipo",outlined:"",dense:"",rules:[t=>!!t||"Seleccione un tipo"]},null,8,["modelValue","options","rules"])]),e("div",ye,[i.tipo==="CREDITO"?(n(),v(f,{key:0,modelValue:i.monto,"onUpdate:modelValue":o[5]||(o[5]=t=>i.monto=t),label:"Adelanto",outlined:"",dense:"",type:"number",rules:[t=>!!t||"Ingrese un monto",t=>t>=0||"Ingrese un monto v\xE1lido",t=>t<=r.total||"El monto no puede ser mayor al total"]},null,8,["modelValue","rules"])):P("",!0)]),e("div",ve,[l(f,{modelValue:i.observacion,"onUpdate:modelValue":o[6]||(o[6]=t=>i.observacion=t),label:"Observaci\xF3n",outlined:"",dense:"",type:"textarea",rows:"2"},null,8,["modelValue"])]),e("div",Ve,[l(x,{modelValue:i.pago,"onUpdate:modelValue":o[7]||(o[7]=t=>i.pago=t),options:s.$metodos,label:"Pago",outlined:"",dense:"",rules:[t=>!!t||"Seleccione un pago"]},null,8,["modelValue","options","rules"])])]),l(U,{align:"right"},{default:a(()=>[l(m,{label:"Cancelar",color:"red","no-caps":"",class:"text-bold",push:"",icon:"cancel",onClick:o[8]||(o[8]=t=>i.saleDialog=!1),loading:i.loading},null,8,["loading"]),l(m,{label:"Pagar",color:"primary","no-caps":"",class:"text-bold",push:"",icon:"o_payment",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var De=q(N,[["render",Ce]]);export{De as default};