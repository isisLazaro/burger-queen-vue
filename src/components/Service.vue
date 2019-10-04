<template>
  <div>
    <p>Elige</p>
    <TwoButtons ref="twoButtons">
      <template #button1 v-on="clicked()"> Restaurante</template>
      <template #button2 v-on="clicked()"> Para llevar</template>
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
  methods: {
     clicked() {
      let place=this.$refs.twoButtons.toggle_exclusive
      console.log(place)
  },
  },
};
</script>

