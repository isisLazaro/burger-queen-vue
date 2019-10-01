<template>
  <v-app>
    <navBar />
    <v-content>
      <v-container>
        <p>Hola mesera!</p>
        <ChooseLocation />
        <InitialCash />
        <v-btn>
          <router-link :to="{ name: 'TomaComanda' }">ACEPTAR</router-link>
        </v-btn>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ChooseLocation from "@/components/ChooseLocation.vue";
import InitialCash from "@/components/InitialCash.vue";
export default {
  name: "home",
  components: {
    NavBar,
    ChooseLocation,
    InitialCash
  }
};
</script>
