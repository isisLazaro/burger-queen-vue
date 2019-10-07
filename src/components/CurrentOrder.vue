<template>
    <div>
        <v-card-text v-text="place"></v-card-text>
        <v-card-text @my-table="myTable()" v-text="table"> </v-card-text>
        <!--en vi card data debe ir como arriba pero en agregar cliente-->
        <p class="text-left pl-5"  v-for="order in orders">{{order.nombre}}  {{order.total}}</p>
<!--         <v-data-table 
        
                      :headers="headers"
                     
                      item-key="name" 
                      group-by="category" class="elevation-1"show-group-by hide-default-header></v-data-table>
        <v-card-actions> -->
            <v-card-text>Total : $  </v-card-text>
        </v-card-actions>
        <ShoppingCartBtn> <template v-slot:greenBtn> A cocina </template> </ShoppingCartBtn>
    </div>
</template> 
<script>
import ShoppingCartBtn from "@/components/ShoppingCartBtn";
import { log } from 'util';
export default {
    name: "CurrentOrder",
    components:{
      ShoppingCartBtn,
    },
  data() {
    return {
      place:'',
      table:'',
      orders:[],
      tipo:'',
      resultadoCombo: "",
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
      ]
    }
  },
  props: {
  
    },
    created() {

     
        this.$root.$on('selected-button',item => {
        this.place=this.places[item]
        }),
        this.$root.$on('my-table',item => {
        this.table=item.join(' , ')
        }),
        /* this.$root.$on('enviarTipo',item=>{
          this.tipo=item
        }), */
        /* this.$root.$on('enviarResultado',item=>{
          this.resultadoCombo=item
        }), */
        this.$root.$on('enviarTipo', item =>{
          
          this.orders.push(item)
          console.log(this.orders)
        })
    }/* ,
    methods: {
      pintar(){
        console.log("holi pintando")
      }
    }*/
}
</script> 
