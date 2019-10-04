<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <h1>Personaliza el pedido</h1>

      <CustomizeOrder />
      <Building />

      <router-link :to="{ name: 'Platillo' }">regresar</router-link>
    </v-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CustomizeOrder from "@/components/CustomizeOrder.vue";
import Building from "@/components/Building.vue";
export default {
  components: {
    NavBar,
    Building,
    CustomizeOrder
  }
};
</script>
