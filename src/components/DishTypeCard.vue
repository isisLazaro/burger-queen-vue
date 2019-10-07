<template>
  <v-card class="mx-auto" width="600">
    <v-card-title>{{ name }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-row no-gutters>
        <v-col cols="7">
          <v-btn
            v-on:click="agregarCarritoCombo"
            v-on:enviarTipo="pintarTipo($event)"
            small
            >Combo {{ combo }}</v-btn
          >
          <v-btn v-on:click="agregarCarritoSencilla" small
            >Sencilla {{ sencilla }}</v-btn
          >
        </v-col>
        <v-col cols="4">
          <v-row no-gutters>
            <v-col>
              <v-btn v-on:click="addDish" left="true" x-small>+</v-btn>
            </v-col>
            <v-col>
              <v-text-field v-model="numDishes" id readonly solo />
            </v-col>
            <v-col>
              <v-btn v-on:click="removeDish" x-small :disabled="numDishes < 1"
                >-</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1" class="fill-height align-end">
          <router-link :to="{ name: 'EditarPlatillo' }">
            <v-btn icon small>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { log } from "util";
export default {
  name: "DishTypeCard",
  data() {
    return {
      numDishes: 2,
      pedidos: [],
      tipo: [],
      resultadoCombo: [],
      resultadoSencilla: []
    };
  },
  props: {
    name: {
      type: String,
      required: true
    },
    combo: {
      type: Number
    },
    sencilla: {
      type: Number
    }
  },
  methods: {
    addDish() {
      this.numDishes += 1;
    },
    removeDish() {
      this.numDishes -= 1;
    },
    agregarCarritoCombo() {
      let me = this;
      me.pedidos = this.combo;
      let tipo = this.name;
      let resultadoCombo = me.pedidos * this.numDishes;
      let objetoPrueba = { nombre: "", total: "" };
      objetoPrueba.nombre = tipo;
      objetoPrueba.total = resultadoCombo;
      console.log(objetoPrueba);
      this.$root.$emit("enviarTipo", objetoPrueba);
      /* let me = this;
      me.pedidos = this.combo
      let  tipo = this.name
      let resultadoCombo = me.pedidos  * this.numDishes
      console.log(tipo + " " + resultadoCombo);
      this.$root.$emit('enviarTipo', tipo);
      this.$root.$emit('enviarResultado', resultadoCombo); */
    },
    agregarCarritoSencilla() {
      let me = this;
      me.pedidos = this.sencilla;
      let tipo = this.name;
      let resultadoSencilla = me.pedidos * this.numDishes;
      let objetoPrueba = { nombre: "", total: "" };
      objetoPrueba.nombre = tipo;
      objetoPrueba.total = resultadoSencilla;
      console.log(objetoPrueba);
      this.$root.$emit("enviarTipo", objetoPrueba);
    }
  }
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
.v-card__text {
  padding: 1.5% 2%;
}
</style>
Contraer
