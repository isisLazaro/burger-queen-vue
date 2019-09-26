<template>
  <div>
    <div>
      <p>Elige tu surcusal</p>
      <!--aqui va el boton que me lleva a view Order.vue-->
      <button>Orizaba</button>
      <button>Chilpancingo</button>
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
export default {
  name: "ChooseLocation"
  /* components: {
  } */
};
</script>
