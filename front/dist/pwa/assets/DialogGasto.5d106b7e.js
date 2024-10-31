import{Q as D}from"./QSpace.21d55d61.js";import{u as x,_ as I,O as S,P as V,Q as g,R as l,J as w,S as E,aB as A,T as m,aE as f,aD as R,aC as N,aT as _}from"./index.4e492503.js";import{Q as M}from"./QSelect.c0e2e1ac.js";import{Q as L}from"./QForm.8f75e92a.js";import{C as O}from"./ClosePopup.d5206220.js";import{h as U}from"./moment.40bc58bf.js";import{b as C,P as F}from"./index.22e72184.js";class z{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let i=0,s=!0;for(i=0;i<t.length;i++)if(t.charAt(i)!=0){s=!1;break}return s?"0":t.substr(i)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let i=parseInt(t);return this.units[i]}getTens(t){let i=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(i);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(i);let s=this.tens[t.charAt(0)-3];return i>0&&(s+=" y "+this.getUnits(i)),s}getHundreds(t){let i="",s=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(s){case"1":i="ciento";break;case"5":i="quinientos";break;case"7":i="setecientos";break;case"9":i="novecientos"}return i===""&&(i=this.getUnits(s)+"cientos"),o>0&&(i+=" "+this.getName(o)),i}getThousands(t){let i="mil",s=t.length-3,o=t.substr(0,s),n=t.substr(s);return o>1&&(i=this.getName(o).replace("uno","un")+" mil"),n>0&&(i+=" "+this.getName(n)),i}getPeriod(t,i,s){let o="un "+s,n=t.length-i,e=t.substr(0,n),c=t.substr(n);return e>1&&(o=this.getName(e).replace("uno","un")+" "+s.replace("\xF3","o")+"es"),c>0&&(o+=" "+this.getName(c)),o}}var T={conversorNumerosALetras:z};class P{static factura(t){return new Promise((i,s)=>{const o=T.conversorNumerosALetras,e=new o().convertToText(parseInt(t.montoTotal)),c={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},p=x().env;C.toDataURL(p.url2+"consulta/QR?nit="+p.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",c).then(u=>{let d=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
      <div class='titulo'>FACTURA <br>CON DERECHO A CREDITO FISCAL</div>
      <div class='titulo2'>${p.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${p.direccion}<br>
Tel. ${p.telefono}<br>
Oruro</div>
<hr>
<div class='titulo'>NIT</div>
<div class='titulo2'>${p.nit}</div>
<div class='titulo'>FACTURA N\xB0</div>
<div class='titulo2'>${t.numeroFactura}</div>
<div class='titulo'>C\xD3D. AUTORIZACI\xD3N</div>
<div class='titulo2'>${t.cuf}</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${t.client.nombreRazonSocial}</td>
</tr><tr><td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client.numeroDocumento}</td></tr>
<tr><td class='titder'>COD. CLIENTE:</td ><td class='contenido'>${t.client.id}</td></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fechaEmision}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(r=>{d+=`<div style='font-size: 12px'><b>${r.product_id} ${r.descripcion} </b></div>`,d+=`<div>${r.cantidad} ${parseFloat(r.precioUnitario).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(r.subTotal).toFixed(2)}</span></div>`}),d+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder'>DESCUENTO $</td><td class='conte2'>0.00</td></tr>
      <tr><td class='titder'>TOTAL $</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder'>MONTO GIFT CARD $</td ><td class='conte2'>0.00</td></tr>
      <tr><td class='titder'>MONTO A PAGAR $</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder' style='font-size: 8px'>IMPORTE BASE CR\xC9DITO FISCAL $</td>
      <td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${e} ${((parseFloat(t.montoTotal)-Math.floor(parseFloat(t.montoTotal)))*100).toFixed(2)} /100 Dorales</div><hr>
      <div class='titulo2' style='font-size: 9px'>
      ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PA\xCDS,<br>
      EL USO IL\xCDCITO SER\xC1 SANCIONADO PENALMENTE DE<br>
      ACUERDO A LEY<br><br>
      ${t.leyenda} <br><br>
      \u201CEste documento es la Representaci\xF3n Gr\xE1fica de un<br>
      Documento Fiscal Digital emitido en una modalidad de<br>
      facturaci\xF3n en l\xEDnea\u201D</div><br>
      <div style='display: flex;justify-content: center;'> <img  src="${u}" ></div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=d,new F().print(document.getElementById("myElement")),i(u)}).catch(u=>{s(u)})})}static nota(t){return console.log("factura",t),new Promise((i,s)=>{const o=T.conversorNumerosALetras,e=new o().convertToText(parseInt(t.total)),c={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}};let p="";t.pago>0&&(p=`<tr><td class='titder'>PAGO $</td><td class='conte2'>${parseFloat(t.pago).toFixed(2)}</td></tr>`);let u="";t.debt>0&&(u=`<tr><td class='titder'>DEUDA $</td><td class='conte2'>${parseFloat(t.debt).toFixed(2)}</td></tr>`);const d=x().env;C.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,c).then(h=>{let r=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="/logo.png" alt="logo" style="width: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
      <div class='titulo2'>${d.razon} <br>
      Casa Matriz<br>
      <span style="font-weight: bold">No.  ${t.id}</span><br>
${d.direccion}<br>
Tel. ${d.telefono}<br>
</div>
<hr>
<table>
<tr><td class='titder'>${t.tipo_venta==="EGRESO"?"PROVEEDOR":"NOMBRE/RAZ\xD3N SOCIAL"}:</td><td class='contenido'>${t.client?t.client.name:""}</td>
</tr><tr><td class='titder'>CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.date}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.tipo_venta==="EGRESO"?r+=`<div style='font-size: 14px'><b>${t.description} </b></div>`:t.details.forEach(v=>{r+=`<div style='font-size: 14px'><b>${v.product_name} </b></div>`,r+=`<div>${v.quantity} ${parseFloat(v.price).toFixed(2)}
                    <span style='float:right'>${parseFloat(v.total).toFixed(2)}</span></div>`}),r+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      ${p}
      ${u}
      </table>
      <br>
      <div>Son ${e} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${h}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=r,new F().print(document.getElementById("myElement")),i(h)}).catch(h=>{s(h)})})}static reportTotal(t,i){const s=t.filter(e=>e.tipoVenta==="Ingreso").reduce((e,c)=>e+c.montoTotal,0),o=t.filter(e=>e.tipoVenta==="Egreso").reduce((e,c)=>e+c.montoTotal,0),n=s-o;return console.log("montoTotal",n),new Promise((e,c)=>{const p=T.conversorNumerosALetras,u=new p,d=Math.abs(n),h=u.convertToText(parseInt(d)),r={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},y=x().env;C.toDataURL(` Monto: ${parseFloat(n).toFixed(2)}`,r).then(v=>{let $=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>title</div>
      <div class='titulo2'>${y.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${y.direccion}<br>
Tel. ${y.telefono}<br>
Oruro</div>
<hr><hr><div class='titulo'>DETALLE</div>`;t.forEach(b=>{$+=`<div style='font-size: 12px'><b> ${b.user.name} </b></div>`,$+=`<div> ${parseFloat(b.montoTotal).toFixed(2)} ${b.tipoVenta}
          <span style='float:right'> ${b.tipoVenta==="Egreso"?"-":""} ${parseFloat(b.montoTotal).toFixed(2)}</span></div>`}),$+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(n).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${h} ${((parseFloat(n)-Math.floor(parseFloat(n)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${v}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=$,new F().print(document.getElementById("myElement")),e(v)}).catch(v=>{c(v)})})}static reciboCompra(t){return new Promise((i,s)=>{const o=T.conversorNumerosALetras,e=new o().convertToText(parseInt(t.total)),c={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},p=x().env;C.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,c).then(u=>{let d=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE COMPRA</div>
      <div class='titulo2'>${p.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${p.direccion}<br>
    Tel. ${p.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;d+=`<div style='font-size: 12px'><b>${t.product_id} ${t.product.descripcion} </b></div>`,d+=`<div>${t.quantity} ${parseFloat(t.price).toFixed(2)} 0.00
          //           <span style='float:right'>${parseFloat(t.total).toFixed(2)}</span></div>`,d+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${e} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${u}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=d,new F().print(document.getElementById("myElement")),i(u)}).catch(u=>{s(u)})})}static reciboTranferencia(t,i,s,o){return console.log("producto",t,"de",i,"ha",s,"cantidad",o),new Promise((n,e)=>{const c=T.conversorNumerosALetras,u=new c().convertToText(parseInt(o)),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=x().env;C.toDataURL(`de: ${i} A: ${s}`,d).then(r=>{let y=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE TRANSFERENCIA</div>
      <div class='titulo2'>${h.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${h.direccion}<br>
    Tel. ${h.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;y+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${i} a ${s} </b></div>`,y+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>CANTIDAD </td><td class='conte2'>${o+""}</td></tr>
      </table>
      <br>
      <div>Son ${u+""} ${o+""} unidades</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${r}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=y,new F().print(document.getElementById("myElement")),n(r)}).catch(r=>{e(r)})})}static head(){return`<html>
<style>
      .titulo{
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      }
      .titulo2{
      font-size: 10px;
      text-align: center;
      }
            .titulo3{
      font-size: 10px;
      text-align: center;
      width:70%;
      }
            .contenido{
      font-size: 10px;
      text-align: left;
      }
      .conte2{
      font-size: 10px;
      text-align: right;
      }
      .titder{
      font-size: 12px;
      text-align: right;
      font-weight: bold;
      }
      hr{
  border-top: 1px dashed   ;
}
  table{
    width:100%
  }
  h1 {
    color: black;
    font-family: sans-serif;
  }
  </style>
<body>
<div style="width: 300px;">`}}const B={props:{viaje_id:{type:String,default:null}},data(){return{provider:[],gasto:{monto:"",concepto:"",metodo:"EFECTIVO",client_id:"",date:U().format("YYYY-MM-DD HH:mm")},client:{name:"",lastname:"",company:"",nit:"",phone:"",tipo:"PROVEEDOR"},clientDialog:!1,loading:!1}},mounted(){this.proveedoresGet()},methods:{clientSave(){this.loading=!0,this.client.id?this.$axios.put(`clients/${this.client.id}`,this.client).then(a=>{this.clientDialog=!1}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("clients",this.client).then(a=>{this.clientDialog=!1,this.provider.unshift(a.data),this.gasto.client_id=a.data.id}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},proveedoresGet(){this.$axios.get("proveedores").then(a=>{this.provider=a.data})},saveSale(){this.loading=!0,this.$axios.post("registrarGasto",{...this.gasto,viaje_id:this.viaje_id}).then(a=>{this.$emit("gastoCreated",a.data),this.$alert.success("Gasto registrado"),P.nota(a.data)}).catch(a=>{this.$alert.error(a.response.data.message)}).finally(()=>{this.loading=!1})},proveedorCreateSimple(){this.clientDialog=!0,this.client={name:"",lastname:"",company:"",nit:"",phone:"",tipo:"PROVEEDOR"}}}},k=m("div",{class:"text-subtitle2 text-bold text-grey"}," Registrar gasto ",-1),q={class:"row"},G={class:"col-12"},Q={class:"col-12"},H={class:"col-12"},j={class:"col-12"},Z={class:"col-12"},Y={class:"col-12"},J=m("div",{class:"text-h6"},"Registrar Proveedor",-1),X={class:"row"},K={class:"col-12"},W={class:"col-12"},tt={class:"col-12"},et={class:"col-12"},ot={class:"col-12"};function it(a,t,i,s,o,n){return S(),V(N,{style:{width:"500px","max-width":"80vw"}},{default:g(()=>[l(A,{class:"row items-center q-pb-none"},{default:g(()=>[k,l(D),w(l(E,{icon:"o_highlight_off",flat:"",round:"",dense:""},null,512),[[O]])]),_:1}),l(A,null,{default:g(()=>[l(L,{onSubmit:n.saveSale},{default:g(()=>[m("div",q,[m("div",G,[l(f,{outlined:"",dense:"",modelValue:o.gasto.monto,"onUpdate:modelValue":t[0]||(t[0]=e=>o.gasto.monto=e),label:"Monto *",type:"number",step:"0.1",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",Q,[l(f,{outlined:"",dense:"",hint:"",modelValue:o.gasto.concepto,"onUpdate:modelValue":t[1]||(t[1]=e=>o.gasto.concepto=e),label:"Descripci\xF3n"},null,8,["modelValue"])]),m("div",H,[l(f,{outlined:"",dense:"",hint:"",modelValue:o.gasto.date,"onUpdate:modelValue":t[2]||(t[2]=e=>o.gasto.date=e),label:"Fecha",type:"datetime-local"},null,8,["modelValue"])]),m("div",j,[l(f,{outlined:"",dense:"",hint:"",modelValue:o.gasto.numeroFactura,"onUpdate:modelValue":t[3]||(t[3]=e=>o.gasto.numeroFactura=e),label:"N\xFAmero de factura",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",Z,[l(M,{outlined:"",dense:"",hint:"",modelValue:o.gasto.client_id,"onUpdate:modelValue":t[4]||(t[4]=e=>o.gasto.client_id=e),options:o.provider,label:"Proveedor","emit-value":"","map-options":"","option-value":"id","option-label":"name","use-input":"",rules:[e=>!!e||"Campo requerido"]},{after:g(()=>[l(E,{flat:"",dense:"",icon:"add_circle_outline",onClick:n.proveedorCreateSimple,color:"green"},null,8,["onClick"])]),_:1},8,["modelValue","options","rules"])]),m("div",Y,[l(E,{type:"submit",label:"Guardar",color:"red-7",class:"full-width","no-caps":"",rounded:"",loading:o.loading},null,8,["loading"])])])]),_:1},8,["onSubmit"]),l(R,{modelValue:o.clientDialog,"onUpdate:modelValue":t[11]||(t[11]=e=>o.clientDialog=e),persistent:""},{default:g(()=>[l(N,{style:{width:"250px","max-width":"90vw"}},{default:g(()=>[l(A,{class:"row items-center q-pb-none"},{default:g(()=>[J,l(D),l(E,{flat:"",dense:"",icon:"close",onClick:t[5]||(t[5]=e=>o.clientDialog=!1)})]),_:1}),l(L,{onSubmit:n.clientSave},{default:g(()=>[l(A,null,{default:g(()=>[m("div",X,[m("div",K,[l(f,{modelValue:o.client.name,"onUpdate:modelValue":t[6]||(t[6]=e=>o.client.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",W,[l(f,{modelValue:o.client.lastname,"onUpdate:modelValue":t[7]||(t[7]=e=>o.client.lastname=e),label:"Apellido",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",tt,[l(f,{modelValue:o.client.company,"onUpdate:modelValue":t[8]||(t[8]=e=>o.client.company=e),label:"Empresa",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",et,[l(f,{modelValue:o.client.nit,"onUpdate:modelValue":t[9]||(t[9]=e=>o.client.nit=e),label:"NIT",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",ot,[l(f,{modelValue:o.client.phone,"onUpdate:modelValue":t[10]||(t[10]=e=>o.client.phone=e),label:"Tel\xE9fono",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])])])]),_:1}),l(_,{align:"right"},{default:g(()=>[w(l(E,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[O]]),l(E,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}var ut=I(B,[["render",it]]);export{ut as D,P as I};
