<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col>
            <h1>{{ dish }}</h1>
          </v-col>
          <v-col>
            <!--boton -->
            <v-btn v-on:click="agregarCliente" color="success">
              Agregar Cliente +
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" v-for="tipo in tipos" :key>
            <DishTypeCard :name="tipo.nombre" :combo = "tipo.combo" :sencilla = "tipo.sencilla" />
          </v-col>
        </v-row>
          <v-btn color="success">
            <router-link :to="{ name: 'TomaComanda' }"
                    >REGRESAR</router-link>
          </v-btn>
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
    },
    agregarCliente(){
      console.log("holicliente");
      
    }
  }
};
</script>

</script>
<style scoped>
p {
  font-size: 2rem;
}
a {
  text-decoration: none;
}

.v-application a {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
</style>