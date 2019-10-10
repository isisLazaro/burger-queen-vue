<template>
  <v-container>
    <v-layout justify-center>
      <v-card>
        <v-card-title>
          <p>Apertura de caja</p>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field filled color="#C4C4C4" prefix="$" required />
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "InitialCash"
};
</script>

<style scoped>
p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
}
* {
  font-family: "Roboto", sans-serif;
}
</style>
