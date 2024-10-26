import{_ as w,Q as r,R as m,S as a,T as e,L as S,a1 as Q,ar as f,X as C,W as n,aB as g,a4 as D,aC as h,a3 as U,P as E,V as s,aE as u,ba as I,U as p,Y as v,Z as G,$ as T,bb as P,a0 as b,aD as z}from"./index.d0cdc383.js";import{Q as y}from"./QSpace.a0dd195b.js";import{Q as V}from"./QImg.9b0b0303.js";import{Q as F}from"./QBadge.2292052b.js";import{Q as B}from"./QSelect.0793eb75.js";import{Q as N}from"./QForm.54665059.js";import{Q as A}from"./QPage.ef29aaa2.js";import{a as L,b as x,d as k}from"./QChip.dfad0562.js";import{Q as O}from"./QList.53b2dad9.js";import"./format.2cae61da.js";const R={name:"Card2Component",props:{color:{type:String,default:"indigo"},title:{type:String,default:"Total"},subtitle:{type:String,default:"456 Unid"},icon:{type:String,default:"home"}}};function K(i,l,c,q,o,d){return r(),m(h,{flat:"",bordered:"",class:D(`bg-${c.color}`)},{default:a(()=>[e(g,{class:"q-pa-none"},{default:a(()=>[e(O,null,{default:a(()=>[S((r(),m(L,{clickable:""},{default:a(()=>[e(x,{avatar:""},{default:a(()=>[e(Q,{class:"bg-white text-white",size:"3.5em"},{default:a(()=>[e(f,{name:c.icon,color:c.color,size:"1.2em"},null,8,["name","color"])]),_:1})]),_:1}),e(x,null,{default:a(()=>[e(k,{caption:"",class:"text-bold text-white"},{default:a(()=>[C(n(c.title),1)]),_:1}),e(k,{class:"text-h5 text-bold text-white"},{default:a(()=>[C(n(c.subtitle),1)]),_:1})]),_:1}),e(x,{side:""},{default:a(()=>[e(f,{name:"keyboard_arrow_right",color:"white"})]),_:1})]),_:1})),[[U]])]),_:1})]),_:1})]),_:1},8,["class"])}var J=w(R,[["render",K]]);const j={name:"ProductsIndex",components:{Card2Component:J},data(){return{products:[],product:{},categories:[],category:"",search:"",productDialog:!1,loading:!1}},mounted(){this.productsGet(),this.categoriesGet()},methods:{productDelete(){this.$alert.confirm("\xBFEstas seguro de eliminar este producto?").onOk(()=>{this.loading=!0,this.$axios.delete(`products/${this.product.id}`).then(i=>{this.productDialog=!1,this.productsGet()}).finally(()=>{this.loading=!1})})},handleFileChange(){const i=event.target.files[0];i&&(this.product.image=URL.createObjectURL(i))},productCreate(){this.loading=!0;const i=new FormData;i.append("product",JSON.stringify(this.product)),i.append("file",this.$refs.file.files[0]),this.$axios.post("products",i,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{this.productDialog=!1,this.productsGet()}).finally(()=>{this.loading=!1})},productUpdate(){this.loading=!0;const i=new FormData;i.append("product",JSON.stringify(this.product)),this.$refs.file.files.length>0&&i.append("file",this.$refs.file.files[0]),this.$axios.post(`products/${this.product.id}`,i,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{this.productDialog=!1,this.productsGet()}).finally(()=>{this.loading=!1})},productSave(){this.product.id?this.productUpdate():this.productCreate()},productClick(){this.productDialog=!0,this.product={name:"",description:"",price:"",stock:"",image:"images.png",status:"ACTIVE",costo:""}},productEditClick(i){this.productDialog=!0,this.product={...i}},productsGet(){this.loading=!0,this.$axios.get("products",{params:{search:this.search}}).then(i=>{this.products=i.data}).finally(()=>{this.loading=!1})},categoriesGet(){this.$axios.get("categories").then(i=>{this.categories=i.data})}},computed:{totalPrice(){let i=0;return this.products.forEach(l=>{i+=l.price*l.stock}),i.toFixed(2)},totalCost(){let i=0;return this.products.forEach(l=>{i+=l.costo*l.stock}),i.toFixed(2)}}},W={class:"row"},X={class:"col-12 col-md-4"},Y={class:"col-6 col-md-2 q-mt-xs"},Z={class:"col-6 col-md-6 text-right q-mt-xs"},H={class:"col-12 col-md-4 q-pa-xs"},M={class:"col-12 col-md-4 q-pa-xs"},$={class:"col-12 col-md-4 q-pa-xs"},ee={class:"col-12"},te={class:"row"},oe={class:"absolute-bottom text-subtitle2 text-center text-bold",style:{padding:"0px",background:"linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.7))",color:"white","line-height":"1"}},le={class:"row items-center"},se={class:"text-bold text-center q-pl-xs"},ie={class:"text-bold text-center q-pr-xs"},ae={class:"text-bold text-h6"},de={class:"row"},re={class:"col-12 col-md-12 flex flex-center"},ne={class:"col-12"},ce=s("label",{class:"text-caption text-bold"},"Nombre:",-1),ue={class:"col-12"},pe=s("label",{class:"text-caption text-bold"},"Descripcion:",-1),me={class:"col-12 col-md-6"},ge=s("label",{class:"text-caption text-bold"},"Precio:",-1),he={class:"col-12 col-md-6"},fe=s("label",{class:"text-caption text-bold"},"Costo:",-1),_e={class:"col-12"},be=s("label",{class:"text-caption text-bold"},"Cantidad:",-1),xe={class:"col-12"},Ce=s("label",{class:"text-caption text-bold"},"Categoria:",-1),ve={class:"col-12"},ye=s("label",{class:"text-caption text-bold"},"Estado:",-1);function Ve(i,l,c,q,o,d){const _=E("Card2Component");return r(),m(A,{class:"bg-grey-3 q-pa-xs"},{default:a(()=>[e(h,null,{default:a(()=>[e(g,{class:"q-pa-xs"},{default:a(()=>[s("div",W,[s("div",X,[e(u,{modelValue:o.search,"onUpdate:modelValue":l[0]||(l[0]=t=>o.search=t),label:"Buscar",outlined:"",dense:"",onKeyup:I(d.productsGet,["enter"])},{append:a(()=>[e(f,{name:"search"})]),_:1},8,["modelValue","onKeyup"])]),s("div",Y,[e(p,{color:"primary",label:"Actualizar",class:"text-bold",onClick:d.productsGet,"no-caps":"",icon:"refresh",rounded:"",loading:o.loading},null,8,["onClick","loading"])]),s("div",Z,[e(p,{color:"green",label:"Crear Product",class:"text-bold",onClick:l[1]||(l[1]=t=>d.productClick()),"no-caps":"",icon:"add_circle",rounded:"",loading:o.loading},null,8,["loading"])]),s("div",H,[e(_,{color:"green-8",title:"Productos",subtitle:o.products.length+" Unid",icon:"all_inbox"},null,8,["subtitle"])]),s("div",M,[e(_,{color:"indigo-8",title:"Total Stock",subtitle:d.totalPrice+" $",icon:"shopping_cart"},null,8,["subtitle"])]),s("div",$,[e(_,{color:"purple-8",title:"Total Ganancias",subtitle:d.totalCost+" $",icon:"attach_money"},null,8,["subtitle"])]),s("div",ee,[s("div",te,[(r(!0),v(T,null,G(o.products,t=>(r(),v("div",{class:"col-6 col-md-2",key:t.id},[e(h,{class:"q-ma-xs cursor-pointer",flat:"",bordered:"",onClick:ke=>d.productEditClick(t)},{default:a(()=>[e(V,{src:`${i.$url}../images/${t.image}`,"spinner-color":"white","spinner-size":"40",style:{height:"100px"}},{default:a(()=>[s("div",oe,[C(n(t.name)+" ",1),s("div",le,[s("div",se,n(t.stock),1),e(y),s("div",ie,n(t.price)+" $ ",1)])])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]))),128))])])])]),_:1})]),_:1}),e(z,{modelValue:o.productDialog,"onUpdate:modelValue":l[12]||(l[12]=t=>o.productDialog=t),maximized:"",position:"right"},{default:a(()=>[e(h,{style:{width:"350px","max-width":"80vw"}},{default:a(()=>[e(g,{class:"row items-center q-pb-none"},{default:a(()=>[s("div",ae,n(o.product.id?"Editar":"Crear")+" Producto ",1),e(y),e(p,{flat:"",icon:"close",onClick:l[2]||(l[2]=t=>o.productDialog=!1)})]),_:1}),e(g,null,{default:a(()=>[e(N,{onSubmit:d.productSave},{default:a(()=>[s("div",de,[s("div",re,[e(Q,{onClick:l[3]||(l[3]=t=>i.$refs.file.click()),class:"bg-grey-3","text-color":"grey-8",size:"100px"},{default:a(()=>[e(V,{src:o.product.image.includes("http")?o.product.image:`${i.$url}../images/${o.product.image}`,"spinner-color":"grey-8","spinner-size":"40",style:{height:"100px"}},null,8,["src"]),e(F,{color:"grey-8","text-color":"white",floating:""},{default:a(()=>[e(f,{name:"camera_alt"})]),_:1})]),_:1}),s("input",{type:"file",class:"hidden",onChange:l[4]||(l[4]=(...t)=>d.handleFileChange&&d.handleFileChange(...t)),ref:"file",accept:"image/*"},null,544)]),s("div",ne,[ce,e(u,{modelValue:o.product.name,"onUpdate:modelValue":l[5]||(l[5]=t=>o.product.name=t),outlined:"",dense:"",rules:[t=>!!t||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",ue,[pe,e(u,{modelValue:o.product.description,"onUpdate:modelValue":l[6]||(l[6]=t=>o.product.description=t),outlined:"",dense:"",type:"textarea"},null,8,["modelValue"])]),s("div",me,[ge,e(u,{modelValue:o.product.price,"onUpdate:modelValue":l[7]||(l[7]=t=>o.product.price=t),outlined:"",dense:"",type:"number",step:"0.01",rules:[t=>!!t||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",he,[fe,e(u,{modelValue:o.product.costo,"onUpdate:modelValue":l[8]||(l[8]=t=>o.product.costo=t),outlined:"",dense:"",type:"number",step:"0.01",rules:[t=>!!t||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",_e,[be,e(u,{modelValue:o.product.stock,"onUpdate:modelValue":l[9]||(l[9]=t=>o.product.stock=t),outlined:"",dense:"",type:"number",rules:[t=>!!t||"Campo requerido"]},null,8,["modelValue","rules"])]),s("div",xe,[Ce,e(B,{modelValue:o.product.category_id,"onUpdate:modelValue":l[10]||(l[10]=t=>o.product.category_id=t),options:o.categories,outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"name",rules:[t=>!!t||"Campo requerido"]},null,8,["modelValue","options","rules"])]),s("div",ve,[ye,e(P,{modelValue:o.product.status,"onUpdate:modelValue":l[11]||(l[11]=t=>o.product.status=t),color:o.product.status?"green":"red","true-value":"ACTIVE","false-value":"INACTIVE"},{default:a(()=>[s("div",{class:D(`text-${o.product.status?"green":"red"} text-subtitle2 text-bold`)},n(o.product.status?"Activo":"Inactivo"),3)]),_:1},8,["modelValue","color"])])]),s("div",null,[o.product.id===void 0?(r(),m(p,{key:0,color:"primary",label:"Guardar",class:"text-bold full-width",type:"submit","no-caps":"",icon:"save",rounded:"",loading:o.loading},null,8,["loading"])):b("",!0),o.product.id!==void 0?(r(),m(p,{key:1,color:"yellow-8",label:"Actualizar",class:"text-bold full-width q-mb-md",type:"submit","no-caps":"",icon:"save",rounded:"",loading:o.loading},null,8,["loading"])):b("",!0),o.product.id!==void 0?(r(),m(p,{key:2,color:"red",outline:"",label:"Eliminar",class:"text-bold full-width","no-caps":"",icon:"close",rounded:"",onClick:d.productDelete,loading:o.loading},null,8,["onClick","loading"])):b("",!0)])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var Pe=w(j,[["render",Ve]]);export{Pe as default};