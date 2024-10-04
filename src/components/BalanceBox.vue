<template>
    <v-card class="pa-5 rounded-xl" 
            color="surface"
            min-width="302">
        <v-text style="font-weight: 500; color:rgb(var(--v-theme-title))">Dinero Disponible</v-text>
        <div class="d-flex align-center">
            <v-text class="me-auto text-no-wrap balance">
                {{ isBalanceShown ? formatter.format(balance) : "∗∗∗∗∗∗∗∗∗∗∗∗" }}
            </v-text>
            
            <v-btn color="button" class="ml-2" variant="tonal" size="x-small" @click="isBalanceShown = !isBalanceShown" icon>
                <v-icon>{{ isBalanceShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
            </v-btn>
        </div>
        <v-row class="pa-3 mt-2 ga-3">
            <v-btn class="v-btn__content text-none" 
                prepend-icon="mdi-send-outline"
                color="button" rounded="pill" variant="flat" text="Transferir"
                @click="navigateToTransferir"
                />
            <v-btn class="v-btn__content text-none"
                prepend-icon="mdi-cash-multiple"
                color="button" rounded="pill" variant="flat" text="Ingresar"/>
        </v-row>
    </v-card>
</template>

<script>
    export default{
        data() {
            return {
                isBalanceShown: false,
                formatter: new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}),
                balance: 1234562222.22
            };
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