<template>
  <v-container>
    <div justify-center>
      <p>Elige tu surcusal</p>
      <!--aqui va el boton que me lleva a view Order.vue-->
      <TwoButtons>
        <template #button1
          >Chilpancingo</template
        >
        <template #button2
          >Orizaba</template
        >
      </TwoButtons>
    </div>
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
