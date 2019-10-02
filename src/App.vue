<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import login from "./views/Login.vue";

export default {
  name: "app",
  components: {} /* ,
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
