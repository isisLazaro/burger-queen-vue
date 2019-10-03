<template>
  <v-container>
    <v-layout justify-center>
      <v-card>
        <v-card-title>Elige tu surcusal</v-card-title>
        <!--aqui va el boton que me lleva a view Order.vue-->
        <v-card-text>
          <TwoButtons>
            <template #button1
              >Chilpancingo</template
            >
            <template #button2
              >Orizaba</template
            >
          </TwoButtons>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import TwoButtons from "@/components/TwoButtons";

export default {
  name: "ChooseLocation",
  components: {
    TwoButtons
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
