(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],v=0,d=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("1356"),o=a.n(r);o.a},1356:function(t,e,a){},"2e85":function(t,e,a){},"34ba":function(t,e,a){"use strict";var r=a("576a"),o=a.n(r);o.a},"42e9":function(t,e,a){},"50fc":function(t,e,a){},"516e":function(t,e,a){"use strict";var r=a("be88"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",["/"!==t.$router.history.current["path"]&&"/home"!==t.$router.history.current["path"]?a("Navbar"):t._e(),a("v-content",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("router-view")],1)],1)],1),a("v-col",["/"!==t.$router.history.current["path"]&&"/home"!==t.$router.history.current["path"]?a("ShoppingCart"):t._e()],1)],1)],1)],1)],1)],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{staticClass:"mx-auto mt-5",attrs:{width:"400"}},[a("v-card-title",[a("h1",[t._v("Login")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Nombre","prepend-icon":"mdi-account-circle"},model:{value:t.nombre,callback:function(e){t.nombre=e},expression:"nombre"}}),a("v-text-field",{attrs:{type:t.showPassword?"text":"password",label:"Contraseña","prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"info"}},[a("router-link",{attrs:{to:{name:"home"}}},[t._v("LOGIN")])],1)],1)],1)],1)},s=[],l=a("bc3a"),c=a.n(l),u=(a("3022"),{name:"App",components:{},data(){return{nombre:"",password:"",showPassword:!1}},methods:{ingresar(){c.a.post("user/login",{nombre:this.nombre,password:this.password}).then((function(t){console.log(t.data.user),console.log(t.data.tokenReturn)})).catch((function(t){console.log(t)}))}}}),v=u,d=a("2877"),m=a("6544"),p=a.n(m),h=a("7496"),f=a("8336"),b=a("b0af"),g=a("99d9"),_=a("ce7e"),C=a("4bd4"),w=a("8654"),V=Object(d["a"])(v,i,s,!1,null,null,null),x=V.exports;p()(V,{VApp:h["a"],VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDivider:_["a"],VForm:C["a"],VTextField:w["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-card",{staticClass:"mx-auto",attrs:{height:"70vh"}},[a("v-card-title",[t._v(t._s(t.showAll?"Pedidos para llevar":"Pedido Actual"))]),a("v-divider",{staticClass:"mx-4",attrs:{inset:t.inset,horizontal:""}}),a("CurrentOrder",{directives:[{name:"show",rawName:"v-show",value:!t.showAll,expression:"!showAll"}]}),a("AllOrders",{directives:[{name:"show",rawName:"v-show",value:t.showAll,expression:"showAll"}]})],1)],1)},T=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card-text",{domProps:{textContent:t._s(t.place)}}),a("v-card-text",{domProps:{textContent:t._s(t.table)},on:{"my-table":function(e){return t.myTable()}}}),t._l(t.orders,(function(e){return a("p",{staticClass:"text-left pl-5"},[t._v("\n    "+t._s(e.nombre)+" "+t._s(e.total)+"\n  ")])})),a("v-card-text",[t._v("Total : $")]),a("ShoppingCartBtn",{scopedSlots:t._u([{key:"greenBtn",fn:function(){return[t._v("A cocina")]},proxy:!0}])})],2)},O=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-btn",[t._t("greenBtn",[t._v("Texto por defecto")])],2)],1)},k=[],$={name:"ShoppingCartBtn"},j=$,E=(a("516e"),Object(d["a"])(j,S,k,!1,null,"5accc8c5",null)),D=E.exports;p()(E,{VBtn:f["a"]});var B={name:"CurrentOrder",components:{ShoppingCartBtn:D},data(){return{place:"",table:"",orders:[],tipo:"",resultadoCombo:"",places:["Restaurante","Para llevar"],headers:[{text:"Pedido",align:"left",value:"name"},{text:"precio",value:"price"}]}},props:{},created(){this.$root.$on("selected-button",t=>{this.place=this.places[t]}),this.$root.$on("my-table",t=>{this.table=t.join(" , ")}),this.$root.$on("enviarTipo",t=>{this.orders.push(t),console.log(this.orders)})}},I=B,P=Object(d["a"])(I,A,O,!1,null,null,null),L=P.exports;p()(P,{VCardText:g["b"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.platillos,"item-key":"name","group-by":"category","show-group-by":"","hide-default-header":""}}),a("v-card-text",[t._v("Pedidos Abiertos")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:t.inset,horizontal:""}}),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.platillos,"item-key":"name","group-by":"category","show-group-by":"","hide-default-header":""}}),a("ShoppingCartBtn",{scopedSlots:t._u([{key:"greenBtn",fn:function(){return[t._v("Pagar")]},proxy:!0}])})],1)},R=[],U={name:"AllOrders",components:{ShoppingCartBtn:D}},M=U,F=a("8fea"),z=Object(d["a"])(M,N,R,!1,null,null,null),G=z.exports;p()(z,{VCardText:g["b"],VDataTable:F["a"],VDivider:_["a"]});var q={name:"ShoppingCart",components:{AllOrders:G,CurrentOrder:L},mounted(){this.$root.$on("show-all-orders",()=>{this.showAll=!this.showAll,console.log(this.showAll)})},data(){return{showAll:!1}}},J=q,H=(a("cc3c"),Object(d["a"])(J,y,T,!1,null,"4312fcf1",null)),X=H.exports;p()(H,{VCard:b["a"],VCardTitle:g["c"],VDivider:_["a"]});var Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{app:""}},[r("LeftMenu"),r("v-spacer"),r("figure",[r("img",{attrs:{src:a("916e"),alt:"logoComandi",width:"200"}})]),r("v-spacer"),r("v-btn",{staticClass:"mr-5",attrs:{icon:""},on:{click:function(e){return t.$root.$emit("show-all-orders")}}},[r("v-icon",{attrs:{"x-large":""}},[t._v("mdi-clipboard-check-outline")])],1)],1)],1)},Z=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-app-bar-nav-icon",t._g({staticClass:"ml-5",attrs:{"x-large":""}},r))]}}])},[a("v-card",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Pan D´monium")]),a("v-list-item-subtitle",[t._v("User Name")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},Q=[],W={name:"LeftMenu",data(){return{items:[{title:"Nueva Orden"},{title:"Cerrar Sesión"}]}}},tt=W,et=a("5bc1"),at=a("8860"),rt=a("da13"),ot=a("5d23"),nt=a("e449"),it=Object(d["a"])(tt,K,Q,!1,null,null,null),st=it.exports;p()(it,{VAppBarNavIcon:et["a"],VCard:b["a"],VDivider:_["a"],VList:at["a"],VListItem:rt["a"],VListItemContent:ot["a"],VListItemSubtitle:ot["b"],VListItemTitle:ot["c"],VMenu:nt["a"]});var lt={name:"NavBar",components:{LeftMenu:st},data(){return{showAll:!1}}},ct=lt,ut=(a("34ba"),a("40dc")),vt=a("132d"),dt=a("2fa4"),mt=Object(d["a"])(ct,Y,Z,!1,null,null,null),pt=mt.exports;p()(mt,{VAppBar:ut["a"],VBtn:f["a"],VIcon:vt["a"],VSpacer:dt["a"]});var ht={name:"app",components:{ShoppingCart:X,Navbar:pt}},ft=ht,bt=(a("034f"),a("62ad")),gt=a("a523"),_t=a("a75b"),Ct=a("0fd9"),wt=Object(d["a"])(ft,o,n,!1,null,null,null),Vt=wt.exports;p()(wt,{VApp:h["a"],VCol:bt["a"],VContainer:gt["a"],VContent:_t["a"],VRow:Ct["a"]});var xt=a("8c4f"),yt=a("2f62"),Tt=a("04e1"),At=a.n(Tt);r["a"].use(yt["a"]);var Ot=new yt["a"].Store({state:{token:null,usuario:null},mutations:{setToken(t,e){e=e},setUsuario(t,e){e=e}},actions:{guardarToken({commit:t},e){t("setToken",e),t("setUsuario",At()(e)),localStorage.setItem("token",e)},autoLogin({commit:t}){let e=localStorage.getItem("token");e&&(t("setToken",e),t("setUsuario",At()(e))),wa.push({name:"home"})},salir({commit:t}){t("setToken",null),t("setUsuario",null),localStorage.removeItem("token"),wa.push({name:"login"})}}}),St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navBar"),a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-start":"","justify-center":""}},[a("v-flex",[a("v-row",{attrs:{justify:"center"}},[a("p",[t._v("¡Hola mesera!")])]),a("v-form",[a("v-row",{attrs:{justify:"right","align-content":"right"}},[a("v-col",[a("ChooseLocation")],1),a("v-col",[a("InitialCash")],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"success"}},[a("router-link",{attrs:{to:{name:"TomaComanda"}}},[t._v("ACEPTAR")])],1)],1)],1)],1)],1)],1)],1)},kt=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":""}},[a("v-card",[a("v-card-title",[t._v("Elige tu surcusal")]),a("v-card-text",[a("TwoButtons",{scopedSlots:t._u([{key:"button1",fn:function(){return[t._v("Chilpancingo")]},proxy:!0},{key:"button2",fn:function(){return[t._v("Orizaba")]},proxy:!0}])})],1)],1)],1)],1)},jt=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn-toggle",{attrs:{shaped:"",dense:""},on:{change:t.selectedButton},model:{value:t.toggle_exclusive,callback:function(e){t.toggle_exclusive=e},expression:"toggle_exclusive"}},[a("v-btn",[a("v-icon",{attrs:{color:"white"}},[t._t("button1",[t._v("Botón 1")])],2)],1),a("v-btn",[a("v-icon",{attrs:{color:"white"}},[t._t("button2",[t._v("Botón 2")])],2)],1)],1)],1)},Dt=[],Bt={name:"TwoButtons",methods:{selectedButton(){this.$root.$emit("selected-button",this.toggle_exclusive)}},data(){return{toggle_exclusive:null}},props:["value"]},It=Bt,Pt=(a("d1e7"),a("a609")),Lt=Object(d["a"])(It,Et,Dt,!1,null,"b4bc5248",null),Nt=Lt.exports;p()(Lt,{VBtn:f["a"],VBtnToggle:Pt["a"],VIcon:vt["a"]});var Rt={name:"ChooseLocation",components:{TwoButtons:Nt}},Ut=Rt,Mt=(a("f2a4"),a("a722")),Ft=Object(d["a"])(Ut,$t,jt,!1,null,"7a7854a4",null),zt=Ft.exports;p()(Ft,{VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VContainer:gt["a"],VLayout:Mt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"justify-center":""}},[a("v-card",[a("v-card-title",[a("p",[t._v("Apertura de caja")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{filled:"",color:"#C4C4C4",prefix:"$",required:""}})],1)],1)],1)],1)],1)},qt=[],Jt={name:"InitialCash"},Ht=Jt,Xt=(a("e9c7"),Object(d["a"])(Ht,Gt,qt,!1,null,"cb1e71c0",null)),Yt=Xt.exports;p()(Xt,{VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VContainer:gt["a"],VForm:C["a"],VLayout:Mt["a"],VTextField:w["a"]});var Zt={name:"home",components:{NavBar:pt,ChooseLocation:zt,InitialCash:Yt}},Kt=Zt,Qt=(a("739e"),a("0e8f")),Wt=Object(d["a"])(Kt,St,kt,!1,null,"473e44fc",null),te=Wt.exports;p()(Wt,{VApp:h["a"],VBtn:f["a"],VCol:bt["a"],VContainer:gt["a"],VFlex:Qt["a"],VForm:C["a"],VLayout:Mt["a"],VRow:Ct["a"]});var ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",[a("Service")],1),a("v-col",[a("ChooseTable")],1)],1),a("v-row",t._l(t.categorias,(function(e){return a("v-col",{attrs:{cols:"6"}},[e.categoria?a("DishCard",{attrs:{name:e.categoria,foto:e.foto,id:e._id}}):t._e()],1)})),1)],1)],1)],1)},ae=[],re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("Elige")]),a("TwoButtons",{scopedSlots:t._u([{key:"button1",fn:function(){return[t._v(" Restaurante")]},proxy:!0},{key:"button2",fn:function(){return[t._v(" Para llevar")]},proxy:!0}])})],1)},oe=[],ne={name:"Service",components:{TwoButtons:Nt}},ie=ne,se=Object(d["a"])(ie,re,oe,!1,null,null,null),le=se.exports,ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-select",{attrs:{items:t.items,outlined:"",multiple:"",chips:"","deletable-chips":"true",dense:"true",label:"Seleccionar mesa","background-color":"#8a7cd4","item-color":"#8a7cd4"},on:{change:t.selectedTable},model:{value:t.table,callback:function(e){t.table=e},expression:"table"}})],1)},ue=[],ve={name:"ChooseTable",data(){return{items:["mesa 1","mesa 2","mesa 3","mesa 4","mesa 5","barra lugar 6","barra lugar 7","barra lugar 8","barra lugar 9","barra lugar 10"],table:[]}},methods:{selectedTable(){this.$root.$emit("my-table",this.table)}}},de=ve,me=(a("f9c6"),a("b974")),pe=Object(d["a"])(de,ce,ue,!1,null,"405168e6",null),he=pe.exports;p()(pe,{VSelect:me["a"]});var fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{attrs:{to:{name:"Platillo",params:{dish:t.name,idCat:t.id,categorias:t.tipos}}}},[a("v-card",{attrs:{keyclass:t.mx-t.auto,width:t.width}},[a("v-img",{attrs:{src:t.foto,alt:"foto platillo",width:t.width,height:t.height}}),a("v-card-title",[t._v(t._s(t.name))])],1)],1)},be=[],ge=(a("b383"),{name:"DishCard",data(){return{width:250,height:137,tipos:[]}},props:{name:{type:String,required:!0},foto:{type:String,required:!0},id:{type:String}},created(){this.listarDishType()},methods:{agregado:function(){alert(`Agregado ${this.name}`)},async listarDishType(){const t=await c.a.get("dishtype/list");t.then((function(t){this.tipos=t.data.filter(t=>t.categoria===this.name)})).catch((function(t){console.log(t)}))}}}),_e=ge,Ce=(a("aba9"),a("adda")),we=Object(d["a"])(_e,fe,be,!1,null,"b2711ee4",null),Ve=we.exports;p()(we,{VCard:b["a"],VCardTitle:g["c"],VImg:Ce["a"]});var xe={name:"Order",components:{NavBar:pt,Service:le,ChooseTable:he,DishCard:Ve,ShoppingCart:X},data(){return{categorias:[]}},created(){this.listarDishCard()},methods:{listarDishCard(){let t=this;c.a.get("dishcard/list").then((function(e){t.categorias=e.data})).catch((function(t){console.log(t)}))}}},ye=xe,Te=Object(d["a"])(ye,ee,ae,!1,null,null,null),Ae=Te.exports;p()(Te,{VCol:bt["a"],VRow:Ct["a"]});var Oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",[a("v-col",[a("h1",[t._v(t._s(t.dish))])]),a("v-col",[a("v-btn",{attrs:{color:"success"},on:{click:t.agregarCliente}},[t._v("\n            Agregar Cliente +\n          ")])],1)],1),a("v-row",t._l(t.filtertipos,(function(t){return a("v-col",{attrs:{cols:"6"}},[a("DishTypeCard",{attrs:{name:t.nombre,combo:t.combo,sencilla:t.sencilla,categoria:t.categoria}})],1)})),1),a("v-btn",{attrs:{color:"success"}},[a("router-link",{attrs:{to:{name:"TomaComanda"}}},[t._v("REGRESAR")])],1)],1)],1)],1)},Se=[],ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{width:"600"}},[a("v-card-title",[t._v(t._s(t.name))]),a("v-divider"),a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"7"}},[a("v-btn",{attrs:{small:""},on:{click:t.agregarCarritoCombo,enviarTipo:function(e){return t.pintarTipo(e)}}},[t._v("Combo "+t._s(t.combo))]),a("v-btn",{attrs:{small:""},on:{click:t.agregarCarritoSencilla}},[t._v("Sencilla "+t._s(t.sencilla))])],1),a("v-col",{attrs:{cols:"4"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-btn",{attrs:{"x-small":"",disabled:t.numDishes<1},on:{click:t.removeDish}},[t._v("-")])],1),a("v-col",[a("v-text-field",{attrs:{id:"",readonly:"",solo:""},model:{value:t.numDishes,callback:function(e){t.numDishes=e},expression:"numDishes"}})],1),a("v-col",[a("v-btn",{attrs:{left:"true","x-small":""},on:{click:t.addDish}},[t._v("+")])],1)],1)],1),a("v-col",{staticClass:"fill-height align-end",attrs:{cols:"1"}},[a("router-link",{attrs:{to:{name:"EditarPlatillo"}}},[a("v-btn",{attrs:{icon:"",small:""}},[a("v-icon",[t._v("mdi-pencil")])],1)],1)],1)],1)],1)],1)},$e=[],je={name:"DishTypeCard",data(){return{numDishes:0,pedidos:[],tipo:[],resultadoCombo:[],resultadoSencilla:[]}},created(){},props:{name:{type:String,required:!0},combo:{type:Number},sencilla:{type:Number},categoria:{type:Number},id:{}},methods:{addDish(){this.numDishes+=1},removeDish(){this.numDishes-=1},agregarCarritoCombo(){let t=this;t.pedidos=this.combo;let e=this.name,a=t.pedidos*this.numDishes,r={nombre:"",total:""};r.nombre=e,r.total=a,this.$root.$emit("enviarTipo",r)},agregarCarritoSencilla(){let t=this;t.pedidos=this.sencilla;let e=this.name,a=t.pedidos*this.numDishes,r={nombre:"",total:""};r.nombre=e,r.total=a,this.$root.$emit("enviarTipo",r)}}},Ee=je,De=(a("b54e"),Object(d["a"])(Ee,ke,$e,!1,null,"0111433e",null)),Be=De.exports;p()(De,{VBtn:f["a"],VCard:b["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:bt["a"],VDivider:_["a"],VIcon:vt["a"],VRow:Ct["a"],VTextField:w["a"]});var Ie={name:"Dish",props:["dish","idCat","categorias"],components:{NavBar:pt,DishTypeCard:Be,ShoppingCart:X},data(){return{tipos:[]}},created(){this.listarDishType(),this.crearArray()},computed:{filtertipos(){return this.tipos.filter(t=>t.categoria===this.dish)}},methods:{crearArray(){},listarDishType(){let t=this;c.a.get("dishtype/list").then((function(e){t.tipos=e.data})).catch((function(t){console.log(t)}))},agregarCliente(){}}},Pe=Ie,Le=(a("897e"),Object(d["a"])(Pe,Oe,Se,!1,null,"18bd6093",null)),Ne=Le.exports;p()(Le,{VBtn:f["a"],VCol:bt["a"],VRow:Ct["a"]});var Re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-content",[a("h1",[t._v("Personaliza el pedido")]),a("v-container",[a("v-row",[a("v-col",[a("Building")],1),a("v-col",[a("CustomizeOrder")],1)],1)],1),a("router-link",{attrs:{to:{name:"Platillo"}}},[t._v("regresar")])],1)],1)},Ue=[],Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("v-textarea",{attrs:{filled:"",solo:"",flat:"",label:"Observaciones","prepend-inner-icon":"mdi-pencil",disabled:""}})],1)],1)},Fe=[],ze={name:"CustomizeOrder"},Ge=ze,qe=a("a844"),Je=Object(d["a"])(Ge,Me,Fe,!1,null,null,null),He=Je.exports;p()(Je,{VCard:b["a"],VCardTitle:g["c"],VTextarea:qe["a"]});var Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("Estamos en construcción")]),a("v-img",{attrs:{src:"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"}})],1)},Ye=[],Ze={name:"Building"},Ke=Ze,Qe=Object(d["a"])(Ke,Xe,Ye,!1,null,null,null),We=Qe.exports;p()(Qe,{VCard:b["a"],VCardTitle:g["c"],VImg:Ce["a"]});var ta={components:{Building:We,CustomizeOrder:He}},ea=ta,aa=Object(d["a"])(ea,Re,Ue,!1,null,null,null),ra=aa.exports;p()(aa,{VCol:bt["a"],VContainer:gt["a"],VContent:_t["a"],VRow:Ct["a"]});var oa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-content",[a("v-list-item-title",[t._v("USUARIOS")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("LISTA DE USUARIOS")])],1)],1),a("v-list-item",{attrs:{to:{name:"createuser"}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("AGREGAR USUARIOS")])],1)],1)],1)],[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-content",[a("v-list-item-title",[t._v("MODIFICAR CARTA")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                 AGREGAR PLATILLO\n              ")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("---")])],1)],1)],1)],[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-content",[a("v-list-item-title",[t._v("INVENTARIO")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("---")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("---")])],1)],1)],1)],[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-content",[a("v-list-item-title",[t._v("PROVEEDORES")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon")],1),a("v-list-item-content",[a("v-list-item-title",[t._v("DATOS")])],1)],1)],1)],[a("v-list-group",[a("v-list-item",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-item-content",[a("v-list-item-title",[t._v("CONSULTAS")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon",[t._v("table_chart")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("CONSULTA COMPRAS")])],1)],1),a("v-list-item",{attrs:{to:{name:""}}},[a("v-list-item-action",[a("v-icon",[t._v("t")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("CONSULTA VENTA")])],1)],1)],1)]],2)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("span",{staticClass:"hidden-sm-and-down"},[t._v("ADMINISTRADORA")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("logout")])],1)],1),a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)],1)},na=[],ia={name:"Admin",data(){return{drawer:!0}}},sa=ia,la=a("56b0"),ca=a("1800"),ua=a("f774"),va=a("0789"),da=a("2a7f"),ma=Object(d["a"])(sa,oa,na,!1,null,null,null),pa=ma.exports;p()(ma,{VApp:h["a"],VAppBar:ut["a"],VAppBarNavIcon:et["a"],VBtn:f["a"],VContainer:gt["a"],VContent:_t["a"],VIcon:vt["a"],VList:at["a"],VListGroup:la["a"],VListItem:rt["a"],VListItemAction:ca["a"],VListItemContent:ot["a"],VListItemTitle:ot["c"],VNavigationDrawer:ua["a"],VSlideYTransition:va["e"],VSpacer:dt["a"],VToolbarTitle:da["a"]});var ha=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},fa=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("crear usuario")])])}],ba={},ga=Object(d["a"])(ba,ha,fa,!1,null,null,null),_a=ga.exports;r["a"].use(xt["a"]);let Ca=new xt["a"]({routes:[{path:"/home",name:"home",component:te,meta:{libre:!0}},{path:"/",name:"login",component:x,meta:{libre:!0}},{path:"/tomacomanda",name:"TomaComanda",component:Ae,meta:{libre:!0}},{path:"/tomacomanda/:dish",name:"Platillo",component:Ne,props:!0,meta:{libre:!0}},{path:"/tomacomanda/:dish/editarplatillo",name:"EditarPlatillo",component:ra,meta:{libre:!0}},{path:"/admin",name:"admin",component:pa,meta:{libre:!0}},{path:"/crearusuario/:admin",name:"createuser",component:_a,meta:{libre:!0}}]});Ca.beforeEach((t,e,a)=>{t.matched.some(t=>t.meta.libre)?a():store.state.usuario&&"Administrador"==store.state.usuario.rol?t.matched.some(t=>t.meta.administradora)&&a():store.state.usuario&&"Mesera"==store.state.usuario.rol?t.matched.some(t=>t.meta.mesera)&&a():store.state.usuario&&"Mesero"==store.state.usuario.rol?t.matched.some(t=>t.meta.mesero)&&a():a({name:"login"})});var wa=Ca,Va=a("9483");Object(Va["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var xa=a("f309");r["a"].use(xa["a"]);var ya=new xa["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,c.a.defaults.baseURL="http://localhost:3000/api/",new r["a"]({router:wa,store:Ot,vuetify:ya,render:t=>t(Vt)}).$mount("#app")},"576a":function(t,e,a){},"739e":function(t,e,a){"use strict";var r=a("ddee"),o=a.n(r);o.a},"897e":function(t,e,a){"use strict";var r=a("50fc"),o=a.n(r);o.a},"916e":function(t,e,a){t.exports=a.p+"img/logo-comdi.db25515e.png"},"9bff":function(t,e,a){},aba9:function(t,e,a){"use strict";var r=a("9bff"),o=a.n(r);o.a},b54e:function(t,e,a){"use strict";var r=a("baea"),o=a.n(r);o.a},baea:function(t,e,a){},be88:function(t,e,a){},c2d9:function(t,e,a){},cc3c:function(t,e,a){"use strict";var r=a("42e9"),o=a.n(r);o.a},d1e7:function(t,e,a){"use strict";var r=a("fe82"),o=a.n(r);o.a},ddee:function(t,e,a){},e9c7:function(t,e,a){"use strict";var r=a("c2d9"),o=a.n(r);o.a},f2a4:function(t,e,a){"use strict";var r=a("2e85"),o=a.n(r);o.a},f9c6:function(t,e,a){"use strict";var r=a("fb92"),o=a.n(r);o.a},fb92:function(t,e,a){},fe82:function(t,e,a){}});
//# sourceMappingURL=app.7941ed99.js.map