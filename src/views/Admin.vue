<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>USUARIOS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>LISTA DE USUARIOS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'createuser' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>AGREGAR USUARIOS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>MODIFICAR CARTA</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>

                

                <v-list-item-title>
                   AGREGAR PLATILLO
                </v-list-item-title>

              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>---</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>INVENTARIO</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>---</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>---</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>PROVEEDORES</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>DATOS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
        <template>
          <v-list-group>
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title>CONSULTAS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>table_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>CONSULTA COMPRAS</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: '' }">
              <v-list-item-action>
                <v-icon>t</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>CONSULTA VENTA</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">ADMINISTRADORA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Admin",
  data() {
    return {
      drawer: true
    };
  }
};
</script>
