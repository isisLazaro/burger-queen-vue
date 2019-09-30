<template>
  <div>
    <navBar></navBar>
    <v-content>
      <p>Hola mesera!</p>
      <ChooseLocation></ChooseLocation>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ChooseLocation from "@/components/ChooseLocation.vue";
export default {
  name: "home",
  components: {
    NavBar,
    ChooseLocation
  }
};
</script>