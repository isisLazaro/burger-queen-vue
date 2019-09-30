<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <LeftMenu />
      <v-spacer></v-spacer>
      <figure>
        <img src="../assets/logo-comdi.png" alt="logoComandi" width="200" />
      </figure>
      <v-spacer></v-spacer>
      <v-btn icon @click="$root.$emit('show-all-orders')">
        <v-icon>mdi-clipboard-check-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  /* components: {
  } */
  data() {
    return {
      showAll: false,
    }
  }
};
</script>

<style>
.v-toolbar__content {
  background: #c4c4c4;
}
</style>
