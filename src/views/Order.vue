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
              <v-col cols="6" v-for="categoria in categorias" :key>
              <!--si dejo :name = categorias me pinta toda la data cuando clik, todas las categorias -->
              <!--la solucion seria crear otravdishcard y meterla en la dishcard principal??-->
                <DishCard :name="categoria.categoria" :foto="categoria.foto" />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <!-- <Service /> -->
            
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
    }
  ,
  methods : {
    listarDishCard(){
      let me=this;
      axios.get('dishcard/list')
      .then(function (response){
        //response.data es un arreglo de objetos y cada objeto es una categoria
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
