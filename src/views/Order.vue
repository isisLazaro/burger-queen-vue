<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col>
                <Service />
              </v-col>
              <v-col>
                <ChooseTable />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" v-for="dish in dishes" :key>
                <DishCard :name="dish.name" :foto="dish.foto" />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <ShoppingCart />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
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
          name: "Jochos",
          foto: require("../assets/imgMenu/jocho.png"),
          hasCombo: true
        },
        {
          name: "Pizzas",
          foto: require("../assets/imgMenu/pizza.png"),
          hasCombo: false
        },
        {
          name: "Entradas/Extras",
          foto: require("../assets/imgMenu/extras.png"),
          hasCombo: false
        },
        {
          name: "Ensaladas",
          foto: require("../assets/imgMenu/ensalada.png"),
          hasCombo: false
        },
        {
          name: "Bebidas",
          foto: require("../assets/imgMenu/sodaItaliana.png"),
          hasCombo: false
        },
        {
          name: "Postres",
          foto: require("../assets/imgMenu/postres.png"),
          hasCombo: false
        }
      ],
    };
  }
};
</script>

<style scoped>
.ShoppingCart {
  align-items: flex-end;
}
</style>
