<template>
  <!-- <div class="container"> -->
  <!-- <v-card width="30vw" height="75vh" class="mx-auto"> -->
  <v-card class="mx-auto">
    <v-card-title>Pedido actual</v-card-title>
    <v-divider class="mx-4" :inset="inset" horizontal></v-divider>
    <!-- <v-card-text>Ej: Restaurante Mesa 3</v-card-text> -->
    <!-- <v-data-table :headers="headers" :items="platillos" item-key="name" group-by="category" class="elevation-1"
    show-group-by hide-default-header></v-data-table>-->
    <v-card-actions>
      <v-card-text>Total : $$$$$$$$</v-card-text>
      <div class="text-center">
        <v-btn>A COCINA</v-btn>
      </div>
    </v-card-actions>
  </v-card>
  <!-- </div> -->
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      headers: [
        {
          text: "Pedido",
          align: "left",
          value: "name"
        },
        { text: "precio", value: "price" }
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
    };
  }
};
</script>

<style scoped>
.container {
  display: inline-flex;
  justify-content: flex-end;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #42c157;
  color: white;
}

.v-card__actions {
  flex-direction: column;
  justify-self: flex-end;
  align-self: center;
}

.mx-auto {
  display: flex;
  flex-direction: column;
}
</style>
