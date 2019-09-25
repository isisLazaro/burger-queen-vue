<template>
  <div>
    <p>Nombre Platillo</p>
    <button>combo</button>
    <button>sencillo</button>
    <button v-on:click="addDish">+</button>
    <input type="text" v-model="numDishes" id readonly />
    <button v-on:click="removeDish" :disabled="numDishes < 1">-</button>
    <router-link :to="{ name: 'EditarPlatillo' }">
      <button>editar</button>
    </router-link>
  </div>
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
