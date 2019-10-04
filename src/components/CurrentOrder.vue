<template>
    <div>
        <v-card-text v-show="inRestaurant">Restaurante</v-card-text>
        <v-card-text v-show="carryout">Para llevar</v-card-text>
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
}
</script>