<template>
  <div>
    <!--fotos y con diferentes id-->
    <figure>
      <img :src="foto" alt="foto platillo" width="200" />
    </figure>
    <p>{{ name }}</p>
  </div>
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
  }
};
</script>
