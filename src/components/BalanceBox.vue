<template>
    <v-card class="mx-auto px-5 py-4 rounded-xl" 
            color="surface"
            min-width="280"
            max-width="50vw">
        <v-text style="font-weight: 500; color:rgb(var(--v-theme-title))">Dinero Disponible</v-text>
        <div class="d-flex container">
            <v-text class="me-auto text-no-wrap balance">
                {{ isBalanceShown ? formatter.format(balance) : "******" }}
            </v-text>
            <v-btn color="button" variant="flat" size="x-small" @click="isBalanceShown = !isBalanceShown" icon>
                <v-icon>{{ isBalanceShown ? "mdi-eye-off-outline" : "mdi-eye-outline" }}</v-icon>
            </v-btn>
        </div>
        <div class="d-flex py-2 mt-2 ga-3">
            <v-btn class="v-btn__content text-none" 
                prepend-icon="mdi-tray-arrow-up"
                color="button" rounded="xl" variant="flat">Transferir</v-btn>
            <v-btn class="v-btn__content text-none"
                prepend-icon="mdi-tray-arrow-down"
                color="button" rounded="xl" variant="flat">Ingresar</v-btn>
        </div>
    </v-card>
</template>

<script>
// import { computed } from 'vue';
    export default{
        data() {
            return {
                isBalanceShown: false,
                formatter: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}),
                balance: 1234567890123
            };
        },
    };

</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
    }
    .v-btn__content {
        letter-spacing: 0px;
        font-size: small;
    }
    .balance{
        font-size: x-large; 
        font-weight: bold;
        width: 80%; 
        overflow: hidden;
    }
</style>