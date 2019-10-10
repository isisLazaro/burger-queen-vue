<template>
  <v-card>
    <v-card-title>Elige tu surcusal</v-card-title>
    <v-card-text>
      <v-btn-toggle v-model="toggle_exclusive">
        <!-- <v-btn>Chilpancingo</v-btn>
        <v-btn>Orizaba</v-btn>-->
        <v-btn v-for="(button, index) in toggleButtons" :key="index">{{
          button
        }}</v-btn>
      </v-btn-toggle>
      Model: {{ toggleButtons[toggle_exclusive] }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      toggleButtons: ["Chilpancingo", "Orizaba"],
      toggle_exclusive: []
    };
  }
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}
.v-card__title {
  font-weight: 500;
}
</style>
