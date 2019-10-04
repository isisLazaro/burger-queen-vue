<template>
  <div>
    <p>Elige</p>
    <!-- <p v-text="place"></p> -->
    <TwoButtons>
      <template #button1 > Restaurante</template>
      <template #button2 > Para llevar</template>
    </TwoButtons>
  </div>
</template>

<script>
import TwoButtons from "@/components/TwoButtons";

export default {
  name: "Service",
  components:{
    TwoButtons,
  },
  // data() {
  //   return {
  //     place:'Holi',
  //     places:['Restaurante', 'Para llevar'],
  //   }
  // },
  // created() {
  //   this.$root.$on('selected-button',item =>{
  //   this.place=this.places[item]
  //   })
  // },
};
</script>

