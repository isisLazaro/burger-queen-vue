<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col>
                <h1>{{ dish }}</h1>
              </v-col>
              <v-col>
                <v-btn>
                  <slot name="greenBtn">Agregar Cliente</slot>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" v-for="tipo in tipos" :key>
              <DishTypeCard :tipos="tipo.nombre" :combo="tipo.combo" :sencilla="tipo.sencilla"/>
              </v-col>
            </v-row>
                <v-btn>
                  <slot name="greenBtn"></slot>
                <router-link :to="{ name: 'TomaComanda' }">REGRESAR</router-link>  
                </v-btn>
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
      tipos:[],
      
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
        console.log(response.data)
        me.tipos=response.data 
         
      })
      .catch(function (error) {
        console.log(error);  
      })
    }
  }
};
</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #42c157;
  color: white;
}
</style>