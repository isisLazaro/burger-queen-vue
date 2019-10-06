<template>
  <div id="app">
    <router-view />
    <shopping-cart></shopping-cart>
  </div>
</template>

<script>
import login from "./views/Login.vue";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "app",
  components: {
    ShoppingCart
  }, /* ,
  computed: {
    logueado(){
      return this.$store.state.usuario;
    },
    esAdministrador(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == "Administradora";
    },
    esMesera(){
      return this.$store.state.usuario && this.$store.state.usuario.rol == "Mesera";
    }
  },
  created() {
      this.$store.dispatch("autoLogin");
    }, 
  methods:{

  } */
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}
</style>
