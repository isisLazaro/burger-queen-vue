<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <figure>
        <img src="../assets/logo-comdi.png" alt="logoComandi" width="200" />
      </figure>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-clipboard-check-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
  /* components: {
  } */
  
};
</script>

<style>
.v-toolbar__content {
  background: #c4c4c4;
}
</style>
