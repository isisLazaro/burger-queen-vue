<template>
  <v-card class="mx-auto" width="600">
    <!-- <v-card-title>{{ name }}</v-card-title> -->
    <v-card-title>Nombre Platillo</v-card-title>
    <v-divider />
    <v-card-text>
      <v-row no-gutters align="center">
        <v-col cols="6">
          <v-btn small>combo</v-btn>
          <v-btn small>sencillo</v-btn>
        </v-col>
        <v-col cols="5">
          <v-row no-gutters align="center">
            <v-col>
              <v-btn v-on:click="addDish" x-small>+</v-btn>
            </v-col>
            <v-col>
              <v-text-field v-model="numDishes" id readonly solo />
            </v-col>
            <v-col>
              <v-btn v-on:click="removeDish" x-small :disabled="numDishes < 1"
                >-</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="fill-height align-end">
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

<style scoped></style>
