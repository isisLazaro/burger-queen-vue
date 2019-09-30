<template>
  <div>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-card-title>Elige sucursal</v-card-title>
       <v-row
          align="center"
          justify="center"
        >
          <v-btn-toggle
            v-model="toggle_exclusive"
            mandatory
          >
            <v-btn text value="chilpancingo">
             Chilpancingo
            </v-btn>
            <v-btn text value="tonala">
              Tonalá
            </v-btn>
            
          </v-btn-toggle>
        </v-row>
      
    </v-card>

    <div>
     <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <v-card-title>Apertura de caja</v-card-title>
    
        <v-text-field
            label="Cantidad"
            
            prefix="$"
          ></v-text-field>

      <v-card-actions>
       <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      </v-card-actions> 
    </v-card>
    </div>

    <router-link :to="{ name: 'TomaComanda' }">
    <v-btn>ACEPTAR</v-btn>

    </router-link>
  </div>
</template>
<script>

</script>

<style>

  
</style>