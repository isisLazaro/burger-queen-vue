<template>
  <router-link :to="{ name: 'Platillo', params: { dish: name } }">
    <div>
      <figure>
        <img :src="foto" alt="foto platillo" width="200" />
      </figure>
      <p>{{ name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "DishCard",
  props: {
    name: {
      type: String,
      required: true
    },
    foto: {}
  },
  methods: {
    agregado: function(){
      alert(`Agregado ${this.name}`);
    }
  }
};
</script>
