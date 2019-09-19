<template>
  <div class="home">
    <Service></Service>
    <ChooseTable></ChooseTable>
    <DishCard></DishCard>
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
  }
};
</script>
