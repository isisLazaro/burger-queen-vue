<template>
    <div>
        <v-card-text v-text="place"></v-card-text>
        <v-card-text> </v-card-text>
        <v-data-table :headers="headers" :items="platillos" item-key="name" group-by="category" class="elevation-1"
            show-group-by hide-default-header></v-data-table>
        <v-card-actions>
            <v-card-text>Total : $$$$$$$$ </v-card-text>
        </v-card-actions>
        <ShoppingCartBtn> <template v-slot:greenBtn> A cocina </template> </ShoppingCartBtn>
    </div>
</template> 

<script>
import ShoppingCartBtn from "@/components/ShoppingCartBtn";
export default {
    name: "CurrentOrder",
    components:{
      ShoppingCartBtn,
    },
  data() {
    return {
      place:'',
      places:['Restaurante', 'Para llevar'],
    }
  },
    created() {
    this.$root.$on('selected-button',item =>{
    this.place=this.places[item]
    })
    },
}
</script>