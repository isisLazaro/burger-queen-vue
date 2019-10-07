<template>


  <v-card class="mx-auto" width="600">
    <v-card-title>{{ name }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-container>
        <v-row no-gutters>
          <v-col cols="5">
            <v-btn>Combo {{ combo }}</v-btn>
            <v-btn>Sencilla {{ sencilla}}</v-btn>
          </v-col>
          <v-col cols="6">
           <!--  <v-row no-gutters>
              <!--aqui deben mandar la info a el carrito de compras 
              <v-col>
                <v-btn v-on:click="addDish" left="true">+</v-btn>
              </v-col>
              <v-col>
                <v-text-field v-model="numDishes" id readonly solo />
              </v-col>
              <v-col>
                <v-btn v-on:click="removeDish" :disabled="numDishes < 1"
                  >-</v-btn
                >
              </v-col>
            </v-row> -->
          </v-col>
          <v-col cols="1" class="fill-height align-end">
            <router-link :to="{ name: 'EditarPlatillo' }">
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DishTypeCard",
  data() {
    return {
      numDishes: 0 //FIXME:
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    combo: {
      type: Number
    },
    sencilla: {
      type: Number
    }
    },
    methods: {
    addDish() {
      this.numDishes += 1;
    },
    removeDish() {
      this.numDishes -= 1;
    }
    }
  }
</script>

<style scoped></style>