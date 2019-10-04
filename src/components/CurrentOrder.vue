<template>
    <div>
        <v-card-text v-text="place"></v-card-text>
        <v-card-text @my-table="myTable()" v-text="table"> </v-card-text>
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
      table:'',
      places:['Restaurante', 'Para llevar'],
            headers: [
        {
          text: "Pedido",
          align: "left",
          value: "name"
        },
        {
          text: "precio",
          value: "price"
        }
      ],
      platillos: [
    {
      name: "Frozen Yogurt",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Ice cream sandwich",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "Eclair",
      category: "Cliente 3",
      price: 5
    },
    {
      name: "Cupcake",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Gingerbread",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "Jelly bean",
      category: "Cliente 3",
      price: 5
    },
    {
      name: "Lollipop",
      category: "Cliente 4",
      price: 5
    },
    {
      name: "Honeycomb",
      category: "Cliente 1",
      price: 5
    },
    {
      name: "Donut",
      category: "Cliente 2",
      price: 5
    },
    {
      name: "KitKat",
      category: "Cliente 5",
      price: 5
    }
  ]
    }
  },
    created() {
        this.$root.$on('selected-button',item => {
        this.place=this.places[item]
        }),

        this.$root.$on('my-table',item => {
        this.table=item.join(' , ')
        })
    },
}
</script>