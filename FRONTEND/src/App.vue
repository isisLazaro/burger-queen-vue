<template>
  <div id="app">
    <v-app>
      <Navbar v-if="$router.history.current['path'] !=='/' && $router.history.current['path'] !=='/home'"/>
      <v-content>
        <v-container>
          <v-row>
            <v-col cols="8">
              <v-row>
                <v-col cols="12">
                  <router-view />
                </v-col>
              </v-row>
            </v-col>
            <v-col>
              <!-- <Service /> -->
              <ShoppingCart v-if="$router.history.current['path'] !=='/' && $router.history.current['path'] !=='/home'"/>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import login from "./views/Login.vue";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/NavBar";

export default {
  name: "app",
  components: {
    ShoppingCart,
    Navbar,
  }, 
/* ,
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
