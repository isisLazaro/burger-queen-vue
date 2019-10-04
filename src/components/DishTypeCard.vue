<template>
  <v-card class="mx-auto" width="600">
    <v-card-title>Nombre Platillo</v-card-title>
    <v-divider />
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col>
            <v-btn>combo</v-btn>
            <v-btn>sencillo</v-btn>
          </v-col>
          <v-col>
            <v-btn v-on:click="addDish">+</v-btn>
            <v-text-field v-model="numDishes" id readonly solo />
            <v-btn v-on:click="removeDish" :disabled="numDishes < 1">-</v-btn>
          </v-col>
          <v-col>
            <router-link :to="{ name: 'EditarPlatillo' }">
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
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
