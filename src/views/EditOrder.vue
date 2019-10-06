<template>
  <div>
    <v-content>
      <h1>Personaliza el pedido</h1>
      <v-container>
        <v-row>
          <v-col>
            <Building />
          </v-col>
          <v-col>
            <CustomizeOrder />
          </v-col>
        </v-row>
      </v-container>
      <router-link :to="{ name: 'Platillo' }">regresar</router-link>
    </v-content>
  </div>
</template>

<script>
import CustomizeOrder from "@/components/CustomizeOrder.vue";
import Building from "@/components/Building.vue";
export default {
  components: {
    Building,
    CustomizeOrder
  }
};
</script>
