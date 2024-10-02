import{Q as w}from"./QSpace.3df0d842.js";import{u as b,_ as I,Q as S,R as V,S as h,T as l,L as D,U as y,aB as A,V as m,aE as g,aD as R,aC as N,aT as _}from"./index.5e6a47e9.js";import{Q as M}from"./QSelect.9e338aa4.js";import{Q as L}from"./QForm.7f3320f2.js";import{C as O}from"./ClosePopup.4838f874.js";import{h as U}from"./moment.40bc58bf.js";import{b as C,P as T}from"./index.22e72184.js";class z{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let i=0,s=!0;for(i=0;i<t.length;i++)if(t.charAt(i)!=0){s=!1;break}return s?"0":t.substr(i)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let i=parseInt(t);return this.units[i]}getTens(t){let i=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(i);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(i);let s=this.tens[t.charAt(0)-3];return i>0&&(s+=" y "+this.getUnits(i)),s}getHundreds(t){let i="",s=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(s){case"1":i="ciento";break;case"5":i="quinientos";break;case"7":i="setecientos";break;case"9":i="novecientos"}return i===""&&(i=this.getUnits(s)+"cientos"),o>0&&(i+=" "+this.getName(o)),i}getThousands(t){let i="mil",s=t.length-3,o=t.substr(0,s),n=t.substr(s);return o>1&&(i=this.getName(o).replace("uno","un")+" mil"),n>0&&(i+=" "+this.getName(n)),i}getPeriod(t,i,s){let o="un "+s,n=t.length-i,e=t.substr(0,n),u=t.substr(n);return e>1&&(o=this.getName(e).replace("uno","un")+" "+s.replace("\xF3","o")+"es"),u>0&&(o+=" "+this.getName(u)),o}}var F={conversorNumerosALetras:z};class P{static factura(t){return new Promise((i,s)=>{const o=F.conversorNumerosALetras,e=new o().convertToText(parseInt(t.montoTotal)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},c=b().env;C.toDataURL(c.url2+"consulta/QR?nit="+c.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",u).then(a=>{let r=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
      <div class='titulo'>FACTURA <br>CON DERECHO A CREDITO FISCAL</div>
      <div class='titulo2'>${c.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${c.direccion}<br>
Tel. ${c.telefono}<br>
Oruro</div>
<hr>
<div class='titulo'>NIT</div>
<div class='titulo2'>${c.nit}</div>
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
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(p=>{r+=`<div style='font-size: 12px'><b>${p.product_id} ${p.descripcion} </b></div>`,r+=`<div>${p.cantidad} ${parseFloat(p.precioUnitario).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(p.subTotal).toFixed(2)}</span></div>`}),r+=`<hr>
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
      <div style='display: flex;justify-content: center;'> <img  src="${a}" ></div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=r,new T().print(document.getElementById("myElement")),i(a)}).catch(a=>{s(a)})})}static nota(t){return console.log("factura",t),new Promise((i,s)=>{const o=F.conversorNumerosALetras,e=new o().convertToText(parseInt(t.total)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},c=b().env;C.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,u).then(a=>{let r=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="/logo.png" alt="logo" style="width: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
      <div class='titulo2'>${c.razon} <br>
      Casa Matriz<br>
      <span style="font-weight: bold">No.  ${t.id}</span><br>
${c.direccion}<br>
Tel. ${c.telefono}<br>
</div>
<hr>
<table>
<tr><td class='titder'>${t.tipo_venta==="EGRESO"?"PROVEEDOR":"NOMBRE/RAZ\xD3N SOCIAL"}:</td><td class='contenido'>${t.client?t.client.name:""}</td>
</tr><tr><td class='titder'>CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.date}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.tipo_venta==="EGRESO"?r+=`<div style='font-size: 14px'><b>${t.description} </b></div>`:t.details.forEach(p=>{r+=`<div style='font-size: 14px'><b>${p.product_name} </b></div>`,r+=`<div>${p.quantity} ${parseFloat(p.price).toFixed(2)}
                    <span style='float:right'>${parseFloat(p.total).toFixed(2)}</span></div>`}),r+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${e} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${a}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=r,new T().print(document.getElementById("myElement")),i(a)}).catch(a=>{s(a)})})}static reportTotal(t,i){const s=t.filter(e=>e.tipoVenta==="Ingreso").reduce((e,u)=>e+u.montoTotal,0),o=t.filter(e=>e.tipoVenta==="Egreso").reduce((e,u)=>e+u.montoTotal,0),n=s-o;return console.log("montoTotal",n),new Promise((e,u)=>{const c=F.conversorNumerosALetras,a=new c,r=Math.abs(n),v=a.convertToText(parseInt(r)),p={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},f=b().env;C.toDataURL(` Monto: ${parseFloat(n).toFixed(2)}`,p).then(E=>{let $=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>title</div>
      <div class='titulo2'>${f.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${f.direccion}<br>
Tel. ${f.telefono}<br>
Oruro</div>
<hr><hr><div class='titulo'>DETALLE</div>`;t.forEach(x=>{$+=`<div style='font-size: 12px'><b> ${x.user.name} </b></div>`,$+=`<div> ${parseFloat(x.montoTotal).toFixed(2)} ${x.tipoVenta}
          <span style='float:right'> ${x.tipoVenta==="Egreso"?"-":""} ${parseFloat(x.montoTotal).toFixed(2)}</span></div>`}),$+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(n).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${v} ${((parseFloat(n)-Math.floor(parseFloat(n)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${E}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=$,new T().print(document.getElementById("myElement")),e(E)}).catch(E=>{u(E)})})}static reciboCompra(t){return new Promise((i,s)=>{const o=F.conversorNumerosALetras,e=new o().convertToText(parseInt(t.total)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},c=b().env;C.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,u).then(a=>{let r=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE COMPRA</div>
      <div class='titulo2'>${c.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${c.direccion}<br>
    Tel. ${c.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;r+=`<div style='font-size: 12px'><b>${t.product_id} ${t.product.descripcion} </b></div>`,r+=`<div>${t.quantity} ${parseFloat(t.price).toFixed(2)} 0.00
          //           <span style='float:right'>${parseFloat(t.total).toFixed(2)}</span></div>`,r+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL $</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${e} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Dolares</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${a}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=r,new T().print(document.getElementById("myElement")),i(a)}).catch(a=>{s(a)})})}static reciboTranferencia(t,i,s,o){return console.log("producto",t,"de",i,"ha",s,"cantidad",o),new Promise((n,e)=>{const u=F.conversorNumerosALetras,a=new u().convertToText(parseInt(o)),r={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},v=b().env;C.toDataURL(`de: ${i} A: ${s}`,r).then(p=>{let f=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="/logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE TRANSFERENCIA</div>
      <div class='titulo2'>${v.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${v.direccion}<br>
    Tel. ${v.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;f+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${i} a ${s} </b></div>`,f+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>CANTIDAD </td><td class='conte2'>${o+""}</td></tr>
      </table>
      <br>
      <div>Son ${a+""} ${o+""} unidades</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${p}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=f,new T().print(document.getElementById("myElement")),n(p)}).catch(p=>{e(p)})})}static head(){return`<html>
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
<div style="width: 300px;">`}}const B={props:{viaje_id:{type:String,default:null}},data(){return{provider:[],gasto:{monto:"",concepto:"",metodo:"EFECTIVO",client_id:"",date:U().format("YYYY-MM-DD HH:mm")},client:{name:"",lastname:"",company:"",nit:"",phone:"",tipo:"PROVEEDOR"},clientDialog:!1,loading:!1}},mounted(){this.proveedoresGet()},methods:{clientSave(){this.loading=!0,this.client.id?this.$axios.put(`clients/${this.client.id}`,this.client).then(d=>{this.clientDialog=!1}).catch(d=>{this.$alert.error(d.response.data.message)}).finally(()=>{this.loading=!1}):this.$axios.post("clients",this.client).then(d=>{this.clientDialog=!1,this.provider.unshift(d.data),this.gasto.client_id=d.data.id}).catch(d=>{this.$alert.error(d.response.data.message)}).finally(()=>{this.loading=!1})},proveedoresGet(){this.$axios.get("proveedores").then(d=>{this.provider=d.data})},saveSale(){this.loading=!0,this.$axios.post("registrarGasto",{...this.gasto,viaje_id:this.viaje_id}).then(d=>{this.$emit("gastoCreated",d.data),this.$alert.success("Gasto registrado"),P.nota(d.data)}).catch(d=>{this.$alert.error(d.response.data.message)}).finally(()=>{this.loading=!1})},proveedorCreateSimple(){this.clientDialog=!0,this.client={name:"",lastname:"",company:"",nit:"",phone:"",tipo:"PROVEEDOR"}}}},k=m("div",{class:"text-subtitle2 text-bold text-grey"}," Registrar gasto ",-1),q={class:"row"},G={class:"col-12"},Q={class:"col-12"},H={class:"col-12"},j={class:"col-12"},Z={class:"col-12"},Y={class:"col-12"},J=m("div",{class:"text-h6"},"Registrar Proveedor",-1),X={class:"row"},K={class:"col-12"},W={class:"col-12"},tt={class:"col-12"},et={class:"col-12"},ot={class:"col-12"};function it(d,t,i,s,o,n){return S(),V(N,{style:{width:"500px","max-width":"80vw"}},{default:h(()=>[l(A,{class:"row items-center q-pb-none"},{default:h(()=>[k,l(w),D(l(y,{icon:"o_highlight_off",flat:"",round:"",dense:""},null,512),[[O]])]),_:1}),l(A,null,{default:h(()=>[l(L,{onSubmit:n.saveSale},{default:h(()=>[m("div",q,[m("div",G,[l(g,{outlined:"",dense:"",modelValue:o.gasto.monto,"onUpdate:modelValue":t[0]||(t[0]=e=>o.gasto.monto=e),label:"Monto *",type:"number",step:"0.1",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",Q,[l(g,{outlined:"",dense:"",hint:"",modelValue:o.gasto.concepto,"onUpdate:modelValue":t[1]||(t[1]=e=>o.gasto.concepto=e),label:"Descripci\xF3n"},null,8,["modelValue"])]),m("div",H,[l(g,{outlined:"",dense:"",hint:"",modelValue:o.gasto.date,"onUpdate:modelValue":t[2]||(t[2]=e=>o.gasto.date=e),label:"Fecha",type:"datetime-local"},null,8,["modelValue"])]),m("div",j,[l(g,{outlined:"",dense:"",hint:"",modelValue:o.gasto.numeroFactura,"onUpdate:modelValue":t[3]||(t[3]=e=>o.gasto.numeroFactura=e),label:"N\xFAmero de factura",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",Z,[l(M,{outlined:"",dense:"",hint:"",modelValue:o.gasto.client_id,"onUpdate:modelValue":t[4]||(t[4]=e=>o.gasto.client_id=e),options:o.provider,label:"Proveedor","emit-value":"","map-options":"","option-value":"id","option-label":"name","use-input":"",rules:[e=>!!e||"Campo requerido"]},{after:h(()=>[l(y,{flat:"",dense:"",icon:"add_circle_outline",onClick:n.proveedorCreateSimple,color:"green"},null,8,["onClick"])]),_:1},8,["modelValue","options","rules"])]),m("div",Y,[l(y,{type:"submit",label:"Guardar",color:"red-7",class:"full-width","no-caps":"",rounded:"",loading:o.loading},null,8,["loading"])])])]),_:1},8,["onSubmit"]),l(R,{modelValue:o.clientDialog,"onUpdate:modelValue":t[11]||(t[11]=e=>o.clientDialog=e),persistent:""},{default:h(()=>[l(N,{style:{width:"250px","max-width":"90vw"}},{default:h(()=>[l(A,{class:"row items-center q-pb-none"},{default:h(()=>[J,l(w),l(y,{flat:"",dense:"",icon:"close",onClick:t[5]||(t[5]=e=>o.clientDialog=!1)})]),_:1}),l(L,{onSubmit:n.clientSave},{default:h(()=>[l(A,null,{default:h(()=>[m("div",X,[m("div",K,[l(g,{modelValue:o.client.name,"onUpdate:modelValue":t[6]||(t[6]=e=>o.client.name=e),label:"Nombre",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",W,[l(g,{modelValue:o.client.lastname,"onUpdate:modelValue":t[7]||(t[7]=e=>o.client.lastname=e),label:"Apellido",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",tt,[l(g,{modelValue:o.client.company,"onUpdate:modelValue":t[8]||(t[8]=e=>o.client.company=e),label:"Empresa",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",et,[l(g,{modelValue:o.client.nit,"onUpdate:modelValue":t[9]||(t[9]=e=>o.client.nit=e),label:"NIT",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])]),m("div",ot,[l(g,{modelValue:o.client.phone,"onUpdate:modelValue":t[10]||(t[10]=e=>o.client.phone=e),label:"Tel\xE9fono",outlined:"",dense:"",rules:[e=>!!e||"Campo requerido"]},null,8,["modelValue","rules"])])])]),_:1}),l(_,{align:"right"},{default:h(()=>[D(l(y,{flat:"",label:"Cancelar",loading:o.loading},null,8,["loading"]),[[O]]),l(y,{color:"primary",label:"Guardar",type:"submit",loading:o.loading},null,8,["loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}var ut=I(B,[["render",it]]);export{ut as D,P as I};
