<template >
  <router-link :to="{ name: 'Platillo', params: { dish: name , idCat : id, categorias: tipos } }">
    <v-card  :keyclass="mx-auto" :width="width">
      <v-img :src="foto" alt="foto platillo" :width="width" :height="height"></v-img>
      <v-card-title  >{{ name  }}</v-card-title>
    </v-card>
  </router-link>
</template>

<script>
import { stringify } from 'querystring';
import axios from "axios";
import { log } from 'util';
export default {
  name: "DishCard",
  data() {
    return {
      width: 250,
      height: 137,
      tipos : []

    };
  },
 
  props: {
    name: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    },
    //el id es la categoria x platillo
    id: {
      type: String
    }
  },
  created() {
    this.listarDishType()
  },
  methods: {
    agregado: function() {
      alert(`Agregado ${this.name}`);
    },

    async listarDishType(){   
      
      const respuesta = await axios.get('dishtype/list')
      respuesta
      .then(function (response){
        //console.log(response.data)
        this.tipos=response.data.filter(dishtype => dishtype.categoria === this.name);
        //console.log(`FILTRANDO= ${this.tipos}`)
      })
      .catch(function (error) {
        console.log(error);  
      })
    }/* ,
    queryCategoria() {
      let me = this;
      axios.get('dishtyp')
      .then(function (response){
        
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);  
      })
      
    } */
  }
};
</script>

<style scoped>
.v-sheet {
  border-radius: 0;
}
.v-card__title {
  color: #333333;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
