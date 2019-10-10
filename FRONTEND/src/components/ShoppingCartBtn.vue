<template>
  <div class="text-center">
    <v-btn>
      <slot name="greenBtn">Texto por defecto</slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartBtn"
};
</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #42c157;
  color: white;
}
</style>
