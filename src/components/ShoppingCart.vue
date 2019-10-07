<template>
  <div class="container">
    <v-card class="mx-auto"  height="70vh">
      <!-- <v-card width="30vw" height="75vh" class="mx-auto"> -->
      <v-card-title>{{
        showAll ? "Pedidos para llevar" : "Pedido Actual"
      }}</v-card-title>
      <v-divider class="mx-4" :inset="inset" horizontal></v-divider>
      <CurrentOrder v-show="!showAll"></CurrentOrder>
      <AllOrders v-show="showAll"></AllOrders>
    </v-card>
  </div>
</template>

<script>
import CurrentOrder from "@/components/CurrentOrder.vue";
import AllOrders from "@/components/AllOrders.vue";
export default {
  name: "ShoppingCart",
  components: {
    AllOrders,
    CurrentOrder
  },
  mounted() {
    this.$root.$on("show-all-orders", () => {
      this.showAll = !this.showAll;
      console.log(this.showAll);
    });
  },
  data() {
    return {
      showAll: false,

    };
  },
  
};
</script>

<style scoped>
.container {
  display: inline-flex;
  justify-content: flex-end;
}
.v-card__actions {
  flex-direction: column;
  justify-self: flex-end;
  align-self: center;
}
.mx-auto {
  display: flex;
  flex-direction: column;
}
</style>
