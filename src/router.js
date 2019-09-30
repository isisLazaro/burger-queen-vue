import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Order from "./views/Order.vue";
import Dish from "./views/Dish.vue";
import EditOrder from "./views/EditOrder.vue";
import Login from "./views/Login.vue";
import Admin from "./views/Admin.vue"
import CreateUser from "./components/CreateUser.vue"


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/tomacomanda",
      name: "TomaComanda",
      component: Order
    },
    {
      path: "/tomacomanda/:dish",
      name: "Platillo",
      component: Dish,
      props: true
    },
    {
      path: "/tomacomanda/:dish/editarplatillo",
      name: "EditarPlatillo",
      component: EditOrder
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin2
    },
    {
      path: "/createuser",
      name: "createuser",
      component: CreateUser
    }
  ]
});
