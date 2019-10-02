<template>
  <div>
    <div>
      <p>Elige tu surcusal</p>
      <!--aqui va el boton que me lleva a view Order.vue-->
    <TwoButtons>
      <template #button1>Chilpancingo</template>
      <template #button2>Orizaba</template>
    </TwoButtons>
    </div>
    <div>
      <p>Apretura de caja</p>
      <input type="number" />
    </div>
    <v-btn>ACEPTAR</v-btn>
    <router-link :to="{ name: 'TomaComanda' }">ACEPTAR</router-link>
  </div>
</template>

<script>
import TwoButtons from "@/components/TwoButtons";

export default {
  name: "ChooseLocation",
   components: {
     TwoButtons,
  } 
};
</script>