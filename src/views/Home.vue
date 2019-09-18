<template>
  <div>
    <navBar></navBar>
    <ChooseLocation></ChooseLocation>
    <!--
            1. navbar 
            2.elige sucursal y apretura de caja
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ChooseLocation from "@/components/ChooseLocation.vue";

export default {
  name: "home",
  components: {
    NavBar,
    ChooseLocation
  }
};
</script>
