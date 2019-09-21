<template>
  <div class="home">
    <Service></Service>
    <ChooseTable></ChooseTable>
    <DishCard
      v-for="dish in dishes"
      :key
      :name="dish.name"
      :foto="dish.foto"
    ></DishCard>

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
          name: "Hamburguesa",
          foto: require("../assets/imgMenu/hamburguesa.png")
        },
        {
          name: "Jocho",
          foto: require("../assets/imgMenu/jocho.png")
        },
        {
          name: "Pizza",
          foto: require("../assets/imgMenu/pizza.png")
        },
        {
          name: "Extra",
          foto: require("../assets/imgMenu/extras.png")
        },
        {
          name: "Ensalada",
          foto: require("../assets/imgMenu/ensalada.png")
        },
        {
          name: "Malteadas",
          foto: require("../assets/imgMenu/malteadas.png")
        },
        {
          name: "Soda Italiana",
          foto: require("../assets/imgMenu/sodaItaliana.png")
        },
        {
          name: "Postres",
          foto: require("../assets/imgMenu/postres.png")
        }
      ]
    };
  }
};
</script>
