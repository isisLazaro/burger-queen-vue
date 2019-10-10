<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon x-large v-on="on" class="ml-5" />
    </template>
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Pan D´monium</v-list-item-title>
          <v-list-item-subtitle>User Name</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      items: [{ title: "Nueva Orden" }, { title: "Cerrar Sesión" }]
    };
  }
};
</script>
