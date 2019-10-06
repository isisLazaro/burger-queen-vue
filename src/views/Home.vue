<template>
  <v-app>
    <navBar />
      <v-container fluid fill-height>
        <v-layout align-start justify-center>
          <v-flex>
            <v-row justify="center">
              <p>¡Hola mesera!</p>
            </v-row>
            <v-form>
              <v-row justify="right" align-content="right">
                <v-col>
                  <ChooseLocation />
                </v-col>
                <v-col>
                  <InitialCash />
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-btn color="success">
                  <router-link :to="{ name: 'TomaComanda' }"
                    >ACEPTAR</router-link
                  >
                </v-btn>
              </v-row>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ChooseLocation from "@/components/ChooseLocation.vue";
import InitialCash from "@/components/InitialCash.vue";
export default {
  name: "home",
  components: {
    NavBar,
    ChooseLocation,
    InitialCash
  },
};
</script>
<style scoped>
p {
  font-size: 2rem;
}
a {
  text-decoration: none;
}

.v-application a {
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
</style>
