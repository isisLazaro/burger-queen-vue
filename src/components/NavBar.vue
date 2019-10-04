<template>
  <div>
    <v-app-bar app>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <LeftMenu />
      <v-spacer />
      <figure>
        <img src="../assets/logo-comdi.png" alt="logoComandi" width="200" />
      </figure>
      <v-spacer />
      <v-btn class="mr-5" icon @click="$root.$emit('show-all-orders')">
        <v-icon x-large>mdi-clipboard-check-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu.vue";
export default {
  name: "NavBar",
  components: {
    LeftMenu
  },
  data() {
    return {
      showAll: false
    };
  }
};
</script>

<style>
.v-toolbar__content {
  background: #c4c4c4;
}
</style>
