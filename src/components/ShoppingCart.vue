<template>
  <div class="container">
    <v-card class="mx-auto">
      <!-- <v-card width="30vw" height="75vh" class="mx-auto"> -->
      <v-card-title>
        {{ showAll ? "Pedidos para llevar" : "Pedido Actual" }}
      </v-card-title>
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
      headers: [
        {
          text: "Pedido",
          align: "left",
          value: "name"
        },
        {
          text: "precio",
          value: "price"
        }
      ]
    };
  },
  platillos: [
    {
      name: "Frozen Yogurt",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Ice cream sandwich",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "Eclair",
      category: "Cliente 3",
      price: 5
    },
    {
      name: "Cupcake",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Gingerbread",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "Jelly bean",
      category: "Cliente 3",
      price: 5
    },
    {
      name: "Lollipop",
      category: "Cliente 4",
      price: 5
    },
    {
      name: "Honeycomb",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Donut",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "KitKat",
      category: "Cliente 5",
      price: 5
    }
  ]
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