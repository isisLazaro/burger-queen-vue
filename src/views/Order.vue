<template>
  <div class="home">
    <Service></Service>
    <ChooseTable></ChooseTable>
    <DishCard />

    <ShoppingCart></ShoppingCart>
    <!--
            1.(x)navbar 
            2 (x)elige
            3. (x)mesa
            4.agregar cliente
            5 (x)cuadrito de platillo 
    6. carrito de compras-->
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "@/components/Service.vue";
import ChooseTable from "@/components/ChooseTable.vue";
import DishCard from "@/components/DishCard.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "Order",
  components: {
    Service,
    ChooseTable,
    DishCard,
    ShoppingCart
  },
  data() {
    return {
      dishes: [
        {
          name: "HAMBURGUESa",
          tipo: "un nombre que no me acuerdo en este momento",
          foto:
            "https://image.freepik.com/free-vector/burger-vector-illustration-simple-element-illustration-king-burger-with-crown-logo-vector_101969-3.jpg"
        },
        {
          name: "JOCHO",
          tipo: "norteño",
          foto: "https://image.freepik.com/free-vector/hot-dog_53876-43863.jpg"
        }
      ]
    };
  }
};
</script>
