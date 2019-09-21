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
      <!--aqui va el boton que me lleva a view Order.vue-->
      <router-link to="/tomacomanda">ACEPTAR</router-link>
      <router-view />
  </div>
</template>
<script>

export default {
  name: "ChooseLocation"
  /* components: {
  } */
};
</script>
