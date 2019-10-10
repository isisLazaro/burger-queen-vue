<template>
  <div>
    <v-btn-toggle
      v-model="toggle_exclusive"
      @change="selectedButton"
      shaped
      dense
    >
      <v-btn>
        <v-icon color="white">
          <slot name="button1">Botón 1</slot>
        </v-icon>
      </v-btn>
      <v-btn>
        <v-icon color="white">
          <slot name="button2">Botón 2</slot>
        </v-icon>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>
<script>
export default {
  name: "TwoButtons",
  methods: {
    selectedButton() {
      this.$root.$emit("selected-button", this.toggle_exclusive);
    }
  },
  data() {
    return {
      toggle_exclusive: null
    };
  },
  props: ["value"]
};
</script>
<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #8a7cd4;
}
.v-btn {
  text-transform: none;
}
.theme--light.v-btn-toggle .v-btn.v-btn .v-icon {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1rem;
}
</style>
