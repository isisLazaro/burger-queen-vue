<template>
  <div>
    <div>
      <p>Holi mesera!</p>
      <p>Elige tu surcusal</p>
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
