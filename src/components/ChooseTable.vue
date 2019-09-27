<template>
  <div>
    <v-select
      :items="items"
      outlined
      multiple
      chips
      dense
      label="Seleccionar mesa"
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
        "mesa 6",
        "mesa 7",
        "mesa 8",
        "mesa 9",
        "mesa 10"
      ]
    };
  }
};
</script>
