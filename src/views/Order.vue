<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col>
            <Service />
          </v-col>
          <v-col>
            <ChooseTable />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" v-for="categoria in categorias" :key>
            <DishCard :name="categoria.categoria" :foto="categoria.foto" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Service from "@/components/Service.vue";
import ChooseTable from "@/components/ChooseTable.vue";
import DishCard from "@/components/DishCard.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import axios from "axios";
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
      categorias: []
    };
  },
  
    created() {
      this.listarDishCard()
    },
  methods : {
    listarDishCard(){
      let me=this;
      axios.get('dishcard/list')
      .then(function (response){
        console.log(response.data)
        me.categorias = response.data
      })
      .catch(function (error) {
        console.log(error);  
      })
    }
  }
};
</script>