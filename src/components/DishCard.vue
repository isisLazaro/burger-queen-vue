<template>
  <div>
    <!--fotos y con diferentes id-->
    <figure>
      <img :src="dishes[0].foto" alt="foto platillo" width="100" />
    </figure>
    <p>{{ dishes[0].name }}</p>
  </div>
</template>

<script>
export default {
  name: "DishCard",
  data() {
    return {
      dishes: [
        {
          name: "HAMBURGUESA",
          tipo: "un nombre que no me acuerdo en este momento",
          foto:
            "https://image.freepik.com/free-vector/burger-vector-illustration-simple-element-illustration-king-burger-with-crown-logo-vector_101969-3.jpg"
        },
        {
          name: "JOCHO",
          tipo: "norteño",
          foto: "https://image.freepik.com/free-vector/hot-dog_53876-43863.jpg"
        }
      ]
    };
  }
};
</script>
