<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <h1>Personalizar Pedido</h1>
      <router-link :to="{ name: 'Platillo' }">regresar</router-link>
    </v-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
