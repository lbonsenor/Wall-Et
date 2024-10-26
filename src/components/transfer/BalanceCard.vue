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
            
            <v-btn color="details" class="ml-2" variant="tonal" size="small" @click="isBalanceShown = !isBalanceShown" icon>
                <v-icon size="large">{{ isBalanceShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
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
    }
    .balance::-webkit-scrollbar{
        width: 0px;
        background: transparent;
    }
</style>