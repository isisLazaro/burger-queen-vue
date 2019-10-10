<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="platillos"
      item-key="name"
      group-by="category"
      class="elevation-1"
      show-group-by
      hide-default-header
    ></v-data-table>
    <v-card-text>Pedidos Abiertos</v-card-text>
    <v-divider class="mx-4" :inset="inset" horizontal></v-divider>
    <v-data-table
      :headers="headers"
      :items="platillos"
      item-key="name"
      group-by="category"
      class="elevation-1"
      show-group-by
      hide-default-header
    ></v-data-table>
    <ShoppingCartBtn>
      <template v-slot:greenBtn
        >Pagar</template
      >
    </ShoppingCartBtn>
  </div>
</template>

<script>
import ShoppingCartBtn from "@/components/ShoppingCartBtn";

export default {
  name: "AllOrders",
  components: {
    ShoppingCartBtn
  }
};
</script>
