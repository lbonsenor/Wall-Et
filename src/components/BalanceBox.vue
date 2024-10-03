<template>
    <v-card class="mx-auto px-5 py-4 rounded-xl" 
        color="surface"
        max-width="290"
        >
        <v-text style="font-size: medium; font-weight: 500; color:rgb(var(--v-theme-title))" color="error">Dinero Disponible</v-text>
        <div class="d-flex container">
            <v-text class="me-auto" style="font-size: xx-large; font-weight: bold">
                {{ balanceString }}
            </v-text>
            <v-btn color="button" variant="flat" icon="mdi-eye-outline" size="x-small"></v-btn>
        </div>
        <div class="d-flex justify-space-between mt-3">
            <v-btn class="v-btn__content text-none" 
                prepend-icon="mdi-tray-arrow-up"
                color="button" rounded="xl" variant="flat">Transferir</v-btn>
            <v-btn class="v-btn__content text-none"
                prepend-icon="mdi-tray-arrow-down"
                color="button" rounded="xl" variant="flat">Ingresar</v-btn>
        </div>
    </v-card>
</template>

<script setup>
import { computed } from 'vue';

const isBalanceShown = computed(false);

const balance = 123000;
const balanceString = "$" + balance; 

const balanceIcon = computed(() => 
    isBalanceShown ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
)
// function toggleBalance() {
//     isBalanceShown ?? 
// }

// 
//
</script>

<style scoped>
    .container{
        display: flex;
        align-items: center;
    }
    .v-btn__content {
        letter-spacing: 0.2px;
    }
</style>