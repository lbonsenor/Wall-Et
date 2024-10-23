<template>
    <v-card class="pa-5 rounded-xl balance-card" color="surface" min-width="302">
        <v-text style="font-weight: 500; color:rgb(var(--v-theme-title))">Dinero Disponible</v-text>
        <div class="d-flex align-center justify-space-between mt-2 balance-container">
            <v-text class="me-auto text-no-wrap balance">
                {{ isBalanceShown ? formatter.format(balance) : "∗∗∗∗∗∗∗∗∗∗∗∗" }}
            </v-text>
            
            <v-btn color="details" class="ml-2" variant="tonal" size="small" @click="isBalanceShown = !isBalanceShown" icon>
                <v-icon size="large">{{ isBalanceShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
            </v-btn>
        </div>
        <v-row class="mt-4" no-gutters>
            <v-col cols="12" sm="6" class="pr-sm-2 mb-2 mb-sm-0">
                <v-btn
                    class="text-none"
                    prepend-icon="mdi-send-outline"
                    color="button"
                    rounded="pill"
                    variant="flat"
                    @click="navigateToTransferir"
                    block
                >
                Transferir
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="pl-sm-2">
                <v-btn
                    class="text-none"
                    prepend-icon="mdi-cash-multiple"
                    color="button"
                    rounded="pill"
                    variant="flat"
                    block
                >
                Ingresar
                </v-btn>
            </v-col>
        </v-row>
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
    .balance-card {
        max-width: 800px;
    }
</style>