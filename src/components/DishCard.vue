<template>
  <router-link :to="{ name: 'Platillo', params: { dish: name } }">
    <v-card class="mx-auto" :width="width">
      <v-img :src="foto" alt="foto platillo" :width="width" :height="height"></v-img>
      <v-card-title>{{ name  }}</v-card-title>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "DishCard",
  data() {
    return {
      width: 250,

      height: 137

    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    }
  },
  methods: {
    agregado: function() {
      alert(`Agregado ${this.name}`);
    }
  }
};
</script>

<style scoped>
.v-sheet {
  border-radius: 0;
}
.v-card__title {
  color: #333333;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
