<template>
    <div>
        <v-btn-toggle v-model="toggle_exclusive" shaped dense>
            <v-btn>
                <v-icon><slot name="button1">Botón 1</slot> </v-icon>
            </v-btn>
            <v-btn>
                <v-icon><slot name="button2">Botón 2</slot> </v-icon>
            </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script>
export default {
name: "TwoButtons",
};
</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #3C2D89;
}

.v-btn{
    text-transform:none; 
}


</style>


