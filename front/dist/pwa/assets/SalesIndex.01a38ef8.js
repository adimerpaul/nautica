import{_ as q,P as I,Q as r,R as v,S as a,T as l,aB as p,V as t,aE as u,Y as h,Z as V,$ as C,aC as _,ar as w,U as g,a2 as A,W as d,aD as k,X as x,a0 as P,aT as S,L as D,bc as Q}from"./index.ef53a57e.js";import{Q as f,b}from"./QSpace.c8eb600c.js";import{Q as N}from"./QImg.d1723c28.js";import{Q as T}from"./QMarkupTable.487b9519.js";import{Q as G}from"./QForm.2721a59c.js";import{Q as B}from"./QPage.0899af7a.js";import{D as E,I as F}from"./DialogGasto.0c0b393c.js";import"./QChip.2472fcbc.js";import"./format.2cae61da.js";import"./ClosePopup.a45ca875.js";import"./moment.40bc58bf.js";import"./index.22e72184.js";const L={name:"ProductsIndex",components:{DialogGasto:E},data(){return{products:[],productsAll:[],clients:[],clientsAll:[],client:"",product:{},categories:[],category:"",search:"",saleDialog:!1,loading:!1,tipo:"",tipos:["CREDITO","CONTADO"],monto:"",observacion:"",pago:"",nit:"",name:"",phone:"",gastoDialog:!1}},mounted(){this.productsGet(),this.clientGet(),this.categoriesGet()},methods:{gastoCreated(o){this.gastoDialog=!1},searchClient(){if(this.nit.length===0){this.name="SN",this.phone="";return}this.$axios.get("searchClient/"+this.nit).then(o=>{var s;if(!((s=o.data)!=null&&s.name)){this.name="SN",this.phone="";return}this.name=o.data.name,this.phone=o.data.phone})},saleInsert(){this.loading=!0,this.$axios.post("sales",{tipo:this.tipo,monto:this.monto,products:this.$store.orders,observacion:this.observacion,pago:this.pago,nit:this.nit,name:this.name,phone:this.phone}).then(o=>{this.$alert.success("Venta realizada con \xE9xito"),this.saleDialog=!1,this.cartClear(),this.productsGet(),F.nota(o.data)}).catch(o=>{this.$alert.error("Error al realizar la venta")}).finally(()=>{this.loading=!1})},clientGet(){this.$axios.get("clientsCliente").then(o=>{this.clients=o.data,this.clientsAll=o.data})},pay(){if(this.$store.orders.length===0)return this.$alert.error("No hay productos en el carrito"),!1;if(this.$store.orders.some(o=>o.stock<o.quantity))return this.$alert.error("No hay stock suficiente "+this.$store.orders.find(o=>o.stock<o.quantity).name),!1;this.saleDialog=!0,this.nit=0,this.name="SN",this.phone="",this.client="",this.tipo="",this.monto="",this.observacion="",this.pago=""},deleteProduct(o){const s=this.$store.orders.findIndex(c=>c.id===o.id);this.$store.orders.splice(s,1)},sumNum(o,s){return(parseFloat(o)*parseInt(s)).toFixed(2)},orderAdd(o){const s=this.$store.orders.find(c=>c.id===o.id);s?s.quantity++:this.$store.orders.push({...o,quantity:1})},cartClear(){this.$store.orders=[]},productsGet(){this.$axios.get("productsActivos").then(o=>{this.products=o.data,this.productsAll=o.data})},categoriesGet(){this.categories=[{id:"",name:"Todas"}],this.$axios.get("categories").then(o=>{this.categories=this.categories.concat(o.data)})},filterProductsSearch(){this.search===""?this.products=this.productsAll:this.products=this.productsAll.filter(o=>o.name.toLowerCase().includes(this.search.toLowerCase()))},filterProducts(){console.log(this.category),this.category.id===""?this.products=this.productsAll:this.products=this.productsAll.filter(o=>o.category_id===this.category.id)},fnFilter(o,s,c){if(o===""){s(()=>{this.clients=this.clientsAll});return}s(()=>{const y=o.toLowerCase();this.clients=this.clientsAll.filter(i=>i.name.toLowerCase().indexOf(y)>-1)})}},computed:{total(){return this.$store.orders.reduce((o,s)=>o+parseFloat(s.price)*parseInt(s.quantity),0).toFixed(2)}}},O={class:"row"},z={class:"col-12 col-md-8"},R={class:"row"},M={class:"col-12 col-md-4"},W={class:"col-12 col-md-3 text-right"},X=t("div",{class:"col-12 col-md-5 text-right"},null,-1),Y={class:"col-12"},Z={class:"row"},j={class:"absolute-bottom text-subtitle2 text-center text-bold",style:{padding:"0px",background:"linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.7))",color:"white","line-height":"1"}},H={class:"row items-center"},J={class:"text-bold text-center q-pl-xs"},K={class:"text-bold text-center q-pr-xs"},$={class:"col-12 col-md-4"},ee={class:"row"},te=t("div",{class:"text-subtitle2 text-primary text-bold q-pl-xs"}," Carrito de Compras ",-1),oe=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",null,"Producto"),t("th",{class:"text-right"},"Precio"),t("th",{class:"text-right"},"Cantidad"),t("th",{class:"text-right",width:"80px"},"Total")])],-1),se={key:0},le={style:{"max-width":"170px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},ie={class:"text-right"},ae=["onUpdate:modelValue"],ne={class:"text-right"},re=["onUpdate:modelValue"],de={class:"text-right"},ce={key:1},ue=t("tr",null,[t("td",{colspan:"4",class:"text-center"}," No hay productos en el carrito ")],-1),he=[ue],me=t("td",{colspan:"3",class:"text-right text-bold"}," Total ",-1),pe={class:"text-right text-subtitle2 text-red text-bold"},ge={colspan:"4"},_e=t("div",{class:"text-h6 text-primary text-center text-bold"}," Pago ",-1),xe={class:"row"},fe={class:"col-12 col-md-4"},be={class:"col-12 col-md-4"},ye={class:"col-12 col-md-4"},ve={class:"col-6 col-md-2 text-bold text-red text-h6 text-center"},Ve={style:{"line-height":"1"}},Ce=t("span",{class:"text-grey"},"Total",-1),we=t("br",null,null,-1),ke={class:"col-6 col-md-4"},De={class:"col-12 col-md-2"},Qe={class:"col-12 col-md-6"},Ue={class:"col-12 col-md-4"},qe=t("div",{id:"myElement",class:"hidden"},null,-1);function Ie(o,s,c,y,i,n){const U=I("DialogGasto");return r(),v(B,{class:"bg-grey-3 q-pa-xs"},{default:a(()=>[l(_,null,{default:a(()=>[l(p,{class:"q-pa-xs"},{default:a(()=>[t("div",O,[t("div",z,[t("div",R,[t("div",M,[l(u,{modelValue:i.search,"onUpdate:modelValue":[s[0]||(s[0]=e=>i.search=e),n.filterProductsSearch],label:"Buscar",outlined:"",dense:"",clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),t("div",W,[l(f,{modelValue:i.category,"onUpdate:modelValue":[s[1]||(s[1]=e=>i.category=e),n.filterProducts],options:i.categories,label:"Categor\xEDa",outlined:"",dense:"","option-value":"id","option-label":"name"},null,8,["modelValue","options","onUpdate:modelValue"])]),X,t("div",Y,[t("div",Z,[(r(!0),h(C,null,V(i.products,e=>(r(),h("div",{class:"col-6 col-md-2",key:e.id},[l(_,{class:"q-ma-xs cursor-pointer",flat:"",bordered:"",onClick:m=>n.orderAdd(e)},{default:a(()=>[l(N,{src:`${o.$url}../images/${e.image}`,"spinner-color":"white","spinner-size":"40",style:{height:"100px"}},{default:a(()=>[t("div",j,[x(d(e.name)+" ",1),t("div",H,[t("div",J,d(e.stock),1),l(b),t("div",K,d(e.price)+" $ ",1)])])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),128))])])])]),t("div",$,[l(_,null,{default:a(()=>[l(p,{class:"q-pb-none row items-center"},{default:a(()=>[t("div",ee,[l(w,{name:"o_shopping_cart"}),te]),l(b),l(g,{flat:"",dense:"",icon:"o_delete",onClick:n.cartClear,size:"10px",label:"Vaciar","no-caps":"",color:"red"},null,8,["onClick"])]),_:1}),l(A),l(p,{class:"q-pa-none"},{default:a(()=>[l(T,{dense:"","wrap-cells":""},{default:a(()=>[oe,o.$store.orders.length>0?(r(),h("tbody",se,[(r(!0),h(C,null,V(o.$store.orders,e=>(r(),h("tr",{key:e.id},[t("td",null,[t("div",le,[l(w,{name:"o_delete",class:"cursor-pointer",color:"red",onClick:m=>n.deleteProduct(e)},null,8,["onClick"]),x(" "+d(e.name),1)])]),t("td",ie,[D(t("input",{"onUpdate:modelValue":m=>e.price=m,type:"number",min:"1",style:{width:"50px"},step:"0.01"},null,8,ae),[[Q,e.price]])]),t("td",ne,[D(t("input",{"onUpdate:modelValue":m=>e.quantity=m,type:"number",min:"1",style:{width:"50px"}},null,8,re),[[Q,e.quantity]])]),t("td",de,d(n.sumNum(e.price,e.quantity))+" $ ",1)]))),128))])):(r(),h("tbody",ce,he)),t("tfoot",null,[t("tr",null,[me,t("td",pe,d(n.total)+" $ ",1)]),t("tr",null,[t("td",ge,[l(g,{dense:"",color:"primary",label:"Pagar","no-caps":"",icon:"o_payment",push:"",class:"full-width text-bold",onClick:n.pay},null,8,["onClick"])])])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1}),l(k,{modelValue:i.gastoDialog,"onUpdate:modelValue":s[2]||(s[2]=e=>i.gastoDialog=e),position:"right",maximized:""},{default:a(()=>[l(U,{onGastoCreated:n.gastoCreated},null,8,["onGastoCreated"])]),_:1},8,["modelValue"]),l(k,{modelValue:i.saleDialog,"onUpdate:modelValue":s[12]||(s[12]=e=>i.saleDialog=e),persistent:""},{default:a(()=>[l(_,{style:{width:"700px","max-width":"90vw"}},{default:a(()=>[l(p,{class:"q-pb-none row items-center"},{default:a(()=>[_e,l(b),l(g,{flat:"",dense:"",icon:"cancel",onClick:s[3]||(s[3]=e=>i.saleDialog=!1)})]),_:1}),l(p,null,{default:a(()=>[l(G,{onSubmit:n.saleInsert},{default:a(()=>[t("div",xe,[t("div",fe,[l(u,{modelValue:i.nit,"onUpdate:modelValue":[s[4]||(s[4]=e=>i.nit=e),n.searchClient],label:"dui",outlined:"",dense:"",debounce:"300"},null,8,["modelValue","onUpdate:modelValue"])]),t("div",be,[l(u,{modelValue:i.name,"onUpdate:modelValue":s[5]||(s[5]=e=>i.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Ingrese un nombre"]},null,8,["modelValue","rules"])]),t("div",ye,[l(u,{modelValue:i.phone,"onUpdate:modelValue":s[6]||(s[6]=e=>i.phone=e),label:"Telefono",outlined:"",dense:""},null,8,["modelValue"])]),t("div",ve,[t("div",Ve,[Ce,x(),we,x(" "+d(n.total)+"$ ",1)])]),t("div",ke,[l(f,{modelValue:i.tipo,"onUpdate:modelValue":s[7]||(s[7]=e=>i.tipo=e),options:i.tipos,label:"Tipo",outlined:"",dense:"",rules:[e=>!!e||"Seleccione un tipo"]},null,8,["modelValue","options","rules"])]),t("div",De,[i.tipo==="CREDITO"?(r(),v(u,{key:0,modelValue:i.monto,"onUpdate:modelValue":s[8]||(s[8]=e=>i.monto=e),label:"Adelanto",outlined:"",dense:"",type:"number",rules:[e=>!!e||"Ingrese un monto",e=>e>=0||"Ingrese un monto v\xE1lido",e=>e<=n.total||"El monto no puede ser mayor al total"]},null,8,["modelValue","rules"])):P("",!0)]),t("div",Qe,[l(u,{modelValue:i.observacion,"onUpdate:modelValue":s[9]||(s[9]=e=>i.observacion=e),label:"Observaci\xF3n",outlined:"",dense:"",type:"textarea",rows:"2"},null,8,["modelValue"])]),t("div",Ue,[l(f,{modelValue:i.pago,"onUpdate:modelValue":s[10]||(s[10]=e=>i.pago=e),options:o.$metodos,label:"Pago",outlined:"",dense:"",rules:[e=>!!e||"Seleccione un pago"]},null,8,["modelValue","options","rules"])])]),l(S,{align:"right"},{default:a(()=>[l(g,{label:"Cancelar",color:"red","no-caps":"",class:"text-bold",push:"",icon:"cancel",onClick:s[11]||(s[11]=e=>i.saleDialog=!1),loading:i.loading},null,8,["loading"]),l(g,{label:"Pagar",color:"primary","no-caps":"",class:"text-bold",push:"",icon:"o_payment",type:"submit",loading:i.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),qe]),_:1})}var Re=q(L,[["render",Ie]]);export{Re as default};
