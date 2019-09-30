<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Service from "./components/Service.vue";
export default {
  name: "app",
  components: {
    Service
  },
};
</script>
<style>
* {
  font-family: "Lato", sans-serif;
}
</style>
