<template>
  <div>
    <p>Elige</p>
    <TwoButtons ref="twoButtons">
      <template #button1 :value="buttons.button1" > Restaurante</template>
      <template #button2 :value="buttons.button2"> Para llevar</template>
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
  data() {
    return 
    buttons: [
                {
                    id: 1,
                    value: "Restaurante"
                },{
                    id: 2,
                    value: "Para llevar"
                },
  },
  // methods: {
  //    clicked() {
  //     let place=this.$refs.twoButtons.toggle_exclusive
  //     console.log(place)
  // },
  // },
};
</script>

