<template>
    <div>
        <navBar></navBar>
        <EligeSucursal></EligeSucursal>
        <!--
            1. navbar 
            2.elige sucursal y apretura de caja
        -->
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import EligeSucursal from "@/components/EligeSucursal.vue"

export default {
  name: "home",
  components: {
    NavBar,
    EligeSucursal
  }
};
</script>
