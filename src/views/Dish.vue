<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col>
            <h1>{{ dish }}</h1>
          </v-col>
          <v-col>
            <h1> + Agregar cliente </h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" v-for="tipo in tipos" :key>
            <DishTypeCard :name="tipo.nombre" />
          </v-col>
        </v-row>
        <router-link :to="{ name: 'TomaComanda' }">regresar</router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DishTypeCard from "@/components/DishTypeCard.vue";
import ShoppingCart from "@/components/ShoppingCart";
import axios from "axios";

export default {

  name: "Dish",
  props: ["dish"],
  components: {
    NavBar,
    DishTypeCard,
    ShoppingCart
  },
  data() {
    return {
      tipos:[] 
     
    };
  },
  created() {
    this.listarDishType()
  },
  methods :{
    
    listarDishType(){   
      let me =this;
      axios.get('dishtype/list')
      .then(function (response){
        //console.log(response.data)
        me.tipos=response.data   
      })
      .catch(function (error) {
        console.log(error);  
      })
    }
  }
};
</script>
