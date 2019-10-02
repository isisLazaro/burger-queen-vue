<template>
  <div>
    <p>Elige</p>
    <TwoButtons>
      <template #button1>Restaurante</template>
      <template #button2>Para llevar</template>
    </TwoButtons>
  </div>
</template>

<script>
import TwoButtons from "@/components/TwoButtons";

export default {
  name: "Service",
  components:{
    TwoButtons,
  }
};
</script>