<template>
    <div id="app">
        <div id="nav">
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
