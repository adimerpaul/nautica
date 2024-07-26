import{Q as c}from"./QImg.b3cea98e.js";import{_ as m,Q as n,R as p,S as o,T as e,V as r,aC as _,aB as f,a0 as g,Z as h,bd as v,aE as d,ar as i,U as b}from"./index.4b805d87.js";import{Q as w,a as V}from"./QForm.6bbf5327.js";import{a as x,b as y}from"./QPageContainer.fe4bd8c3.js";var Q="/assets/login.196a23db.jpg";const k={data(){return{username:"",password:"",passwordVisible:!1,loading:!1}},methods:{login(){this.loading=!0,this.$axios.post("login",{username:this.username,password:this.password}).then(s=>{this.$store.user=s.data.user,this.$store.isLogged=!0,localStorage.setItem("tokenPrestamos",s.data.token),localStorage.setItem("permisos",JSON.stringify(s.data.user.permisosName)),this.$axios.defaults.headers.common.Authorization=`Bearer ${s.data.token}`,s.data.user.permisosName.includes("ver inicio")?this.$router.push("/"):this.$router.push("/sales")}).catch(s=>{this.$alert.error(s.response.data.message)}).finally(()=>{this.loading=!1})}}},S={class:"row"},C=r("div",{class:"col-12 col-md-1"},null,-1),I={class:"col-12 col-md-10"},N={class:"row"},B={key:0,class:"col-12 col-md-8 flex flex-center"},q={class:"col-12 col-md-4 q-pa-md"},P=r("div",{class:"text-h6 text-center text-bold"},"Iniciar Sesi\xF3n",-1),E=r("div",{class:"text-caption text-center"},"Ingresa tus credenciales para acceder al sistema",-1);function L(s,l,U,$,a,u){return n(),p(x,null,{default:o(()=>[e(y,null,{default:o(()=>[e(w,{class:"q-pa-lg dark-overlay"},{default:o(()=>[r("div",S,[C,r("div",I,[e(_,null,{default:o(()=>[e(f,null,{default:o(()=>[r("div",N,[s.$q.screen.lt.md?h("",!0):(n(),g("div",B,[e(c,{src:Q})])),r("div",q,[e(V,{onSubmit:v(u.login,["prevent"])},{default:o(()=>[P,E,e(d,{modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=t=>a.username=t),label:"Usuario",outlined:"",rules:[t=>!!t||"Este campo es requerido"],rounded:""},{prepend:o(()=>[e(i,{name:"account_circle"})]),_:1},8,["modelValue","rules"]),e(d,{modelValue:a.password,"onUpdate:modelValue":l[2]||(l[2]=t=>a.password=t),label:"Contrase\xF1a",type:a.passwordVisible?"text":"password",outlined:"",rules:[t=>!!t||"Este campo es requerido"],rounded:""},{prepend:o(()=>[e(i,{name:"lock"})]),append:o(()=>[e(i,{name:a.passwordVisible?"visibility":"visibility_off",onClick:l[1]||(l[1]=t=>a.passwordVisible=!a.passwordVisible)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),e(b,{color:"primary",class:"full-width",rounded:"",label:"Iniciar Sesi\xF3n",type:"submit","no-caps":"",loading:a.loading},null,8,["loading"])]),_:1},8,["onSubmit"])])])]),_:1})]),_:1})])])]),_:1})]),_:1})]),_:1})}var J=m(k,[["render",L]]);export{J as default};