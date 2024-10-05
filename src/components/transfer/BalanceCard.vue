<template>
    <v-card class="pa-5 rounded-xl" 
            color="surface"
            min-width="20vw"
            height="15vh">
        <v-text style="font-weight: 500; color:rgb(var(--v-theme-title))">Dinero Disponible</v-text>
        <div class="d-flex">
            <v-text class="me-auto text-no-wrap balance">
                {{ isBalanceShown ? formatter.format(balance) : "∗∗∗∗∗∗∗∗∗∗∗∗" }}
            </v-text>
            
            <v-btn color="button" class="ml-2" variant="tonal" size="x-small" @click="isBalanceShown = !isBalanceShown" icon>
                <v-icon>{{ isBalanceShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
    export default{
        data() {
            return {
                isBalanceShown: false,
                formatter: new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}),
            };
        },
        props:{
            balance: {
                type: Number,
                default: 0
            }
        },  
        methods: {
            navigateToTransferir() {
                this.$router.push({ path: '/transferir' });
            }
        }
    };

</script>

<style scoped>
    .v-btn__content {
        letter-spacing: 0px;
        min-width: 125px;
    }
    .balance{
        font-size: x-large; 
        font-weight: 600;
        overflow: scroll;
        /* font-family: "Fira Mono", monospace; */
    }
    .balance::-webkit-scrollbar{
        width: 0px;
        background: transparent;
    }
</style>