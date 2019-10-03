<template>
  <v-container>
    <v-btn-toggle v-model="toggle_exclusive" shaped dense>
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
  </v-container>
</template>

<script>
export default {
  name: "TwoButtons"
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-style: normal;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #3c2d89;
}

.v-btn {
  text-transform: none;
  font-weight: 700;
}
.v-icon {
  font-size: 1rem;
}
.theme--light.v-btn-toggle .v-btn.v-btn .v-icon {
  color: white;
}
</style>
