<template>
  <v-card class="mx-auto" width="600">
    <v-card-title>{{ name }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-row no-gutters align="center">
        <v-col cols="6">
          <v-btn small>Combo {{ combo }}</v-btn>
          <v-btn small>Sencilla {{ sencilla }}</v-btn>
        </v-col>
        <v-col cols="5">
          <v-row no-gutters align="center">
            <!--aqui deben mandar la info a el carrito de compras -->
            <v-col>
              <v-btn v-on:click="addDish" left="true" small>+</v-btn>
            </v-col>
            <v-col>
              <v-text-field v-model="numDishes" id readonly solo />
            </v-col>
            <v-col>
              <v-btn v-on:click="removeDish" small :disabled="numDishes < 1"
                >-</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1">
          <router-link :to="{ name: 'EditarPlatillo' }">
            <v-btn icon>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
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
};
</script>

<style scoped>
.v-card__title {
  padding: 2.5%;
}
.v-card__text {
  padding: 1% 2.5%;
}
</style>
