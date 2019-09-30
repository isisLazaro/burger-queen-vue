<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <h1>{{ dish }}</h1>
      <DishTypeCard></DishTypeCard>
      <router-link :to="{ name: 'TomaComanda' }">regresar</router-link>
    </v-content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import DishTypeCard from "@/components/DishTypeCard.vue";
export default {
  name: "Dish",
  props: ["dish"],
  components: {
    NavBar,
    DishTypeCard
  }
};
</script>
