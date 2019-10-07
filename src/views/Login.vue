<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="nombre"
            label="Nombre"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Contraseña"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
<!--         <v-btn @click="ingresar()" color="info">Login</v-btn>--> 
        <v-btn color="info">
          <router-link :to="{ name: 'home' }"
                    >LOGIN</router-link
                  >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";



import { log } from 'util';


export default {
  name: "App",
  components: {
  },
  data() {
    return {
      nombre: "",
      password: "",
      showPassword: false
    };
  },

  

  methods :{
    //aqui solo con esa petición funciona, 
    ingresar(){   
      axios.post('user/login',{nombre: this.nombre, password: this.password})
      .then(function(response){
        console.log(response.data.user);
        console.log(response.data.tokenReturn);   
      }).catch(function(error){
        console.log(error); 
      });

    }
  }
};
</script>
