<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link>|
      <router-link to="/tomacomanda">Toma de comanda</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Service from "./components/Service.vue";
export default {
  name: "app",
  components: {
    Service
  }
};
</script>
<style></style>
