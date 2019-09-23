<template>
  <div>
    <h1>{{ dish }}</h1>
    <DishTypeCard></DishTypeCard>
    <router-link :to="{ name: 'TomaComanda' }">regresar</router-link>
  </div>
</template>

<script>
import DishTypeCard from "@/components/DishTypeCard.vue";
export default {
  name: "Dish",
  props: ["dish"],
  components: {
    DishTypeCard
  }
};
</script>
