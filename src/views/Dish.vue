<template>
  <div>
    <h1>{{ dish }}</h1>
    <router-link :to="{ name: 'TomaComanda' }">regresar</router-link>
  </div>
</template>

<script>
export default {
  props: ["dish"]
};
</script>
