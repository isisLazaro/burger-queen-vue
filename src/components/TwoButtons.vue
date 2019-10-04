<template>
    <div>
        <v-btn-toggle v-model="toggle_exclusive" shaped dense>
            <v-btn>
                <v-icon color="white"><slot name="button1">Botón 1</slot> </v-icon>
            </v-btn>
            <v-btn>
                <v-icon color="white"><slot name="button2">Botón 2</slot> </v-icon>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script>
export default {
name: "TwoButtons",
methods: {
    alerti(event){
      console.log('Holi')
    }
  },
data() {
    return {
        toggle_exclusive: null,
    }
},
};

</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #3C2D89;
}

.v-btn{
    text-transform:none; 
}

.theme--light.v-btn-toggle .v-btn.v-btn .v-icon {
	color: white;
}


</style>


