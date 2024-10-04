<template>
    <v-card
    :color="cardColor"
    class="mx-auto my-auto align-center"
    rounded="xl"
    >
    <template v-slot:prepend>
        <v-icon icon="mdi-credit-card" class="mr-2"></v-icon>
        <v-card-title class="custom-subtitle"> {{ " **** **** **** " + last_digits }}</v-card-title>
    </template>
    
    </v-card>
</template>
    <!-- @click="navigateToCards" -->


<script>
    export default {
        name: 'MiniCard', 
        props: {
            company: {
                type: String,
                required: true
            }, 
            last_digits: {
                type: String, 
                required: true
            }
        },
        data() {  
            return {               
                cardColor: 'red-lighten-1',
            }
        },      
        methods: {
            navigateToCards() {
                this.$router.push('/mis-tarjetas')
            },
            selectRandomColor() {
                const colors = ["red-lighten-1", "pink-lighten-1", "purple-lighten-1", "deep-purple-darken-1", "indigo-lighten-1", "green-darken-1"];
                const random_num = Math.floor(Math.random() * colors.length);
                return colors[0];
            }
        },
        mounted() {
            this.cardColor = this.selectRandomColor();
        }

    }
</script>

<style scoped>
.custom-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold; 
    /* color: rgb(var(--v-theme-title)); */
    font-family: 'Roboto Mono', monospace;
    font-size: medium;
}
</style>