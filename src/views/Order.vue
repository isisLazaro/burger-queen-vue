<template>
  <div class="home">
    <NavBar></NavBar>
    <v-content>
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
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Service from "@/components/Service.vue";
import ChooseTable from "@/components/ChooseTable.vue";
import DishCard from "@/components/DishCard.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "Order",
  components: {
    NavBar,
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
          foto: require("../assets/imgMenu/hamburguesa.png"),
          tipo: [
            "Malicia",
            "Soberbia",
            "Gula",
            "Alma en pena",
            "Encarnación",
            "Banana Limbo"
          ],
          hasCombo: true
        },
        {
          name: "Jocho",
          foto: require("../assets/imgMenu/jocho.png"),
          hasCombo: true
        },
        {
          name: "Pizza",
          foto: require("../assets/imgMenu/pizza.png"),
          hasCombo: false
        },
        {
          name: "Extra",
          foto: require("../assets/imgMenu/extras.png"),
          hasCombo: false
        },
        {
          name: "Ensalada",
          foto: require("../assets/imgMenu/ensalada.png"),
          hasCombo: false
        },
        {
          name: "Malteadas",
          foto: require("../assets/imgMenu/malteadas.png"),
          hasCombo: false
        },
        {
          name: "Soda Italiana",
          foto: require("../assets/imgMenu/sodaItaliana.png"),
          hasCombo: false
        },
        {
          name: "Postres",
          foto: require("../assets/imgMenu/postres.png"),
          hasCombo: false
        }
      ]
    };
  }
};
</script>
