import Vue from "vue";
import Router from "vue-router";
import Store from "./store";
import Home from "./views/Home.vue";
import Order from "./views/Order.vue";
import Dish from "./views/Dish.vue";
import EditOrder from "./views/EditOrder.vue";
import Login from "./views/Login.vue";
import Admin from "./views/Admin.vue";
import CreateUser from "./components/CreateUser.vue";

Vue.use(Router);

let router = new Router({
  routes: [
      {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        libre:true 
      }
    }, 
    {
      path: "/",
      name: "login",
      component: Login,
      meta: {
        libre:true
      }
    },
    {
      path: "/tomacomanda",
      name: "TomaComanda",
      component: Order,
      meta: {
        libre:true 
      }
    },
    {
      path: "/tomacomanda/:dish",
      name: "Platillo",
      component: Dish,
      props: true,
      meta: {
        libre:true 
      }
    },
    {
      path: "/tomacomanda/:dish/editarplatillo",
      name: "EditarPlatillo",
      component: EditOrder,
      meta: {
        libre:true 
      }
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: {
        libre:true
      }
    },
    {
      path: "/crearusuario/:admin",
      name: "createuser",
      component: CreateUser,
      meta: {
        libre:true 
       }
    }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.libre)){
    next();
  } else if ( store.state.usuario && store.state.usuario.rol == 'Administrador'){
    if (to.matched.some(record => record.meta.administradora)){
      next();
    }
  } else if ( store.state.usuario && store.state.usuario.rol == 'Mesera'){
    if (to.matched.some(record => record.meta.mesera)){
      next();
    }
  } else if ( store.state.usuario && store.state.usuario.rol == 'Mesero'){
    if (to.matched.some(record => record.meta.mesero)){
      next();
    }
  } else{
    next({name: 'login'});
  }
})
export default router



