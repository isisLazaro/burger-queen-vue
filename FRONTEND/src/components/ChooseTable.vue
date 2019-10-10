<template>
  <div>
    <v-select
      @change="selectedTable"
      v-model="table"
      :items="items"
      outlined
      multiple
      chips
      deletable-chips="true"
      dense="true"
      label="Seleccionar mesa"
      background-color="#8a7cd4"
      item-color="#8a7cd4"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "ChooseTable",
  data() {
    return {
      items: [
        "mesa 1",
        "mesa 2",
        "mesa 3",
        "mesa 4",
        "mesa 5",
        "barra lugar 6",
        "barra lugar 7",
        "barra lugar 8",
        "barra lugar 9",
        "barra lugar 10"
      ],
      table: []
    };
  },
  methods: {
    selectedTable() {
      this.$root.$emit("my-table", this.table);
    }
  }
};
</script>
<style scoped>
.v-.theme--light {
  color: white !important;
  /* v-icon notranslate mdi mdi-menu-down theme--light */
}
</style>
