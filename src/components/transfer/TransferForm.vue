<template>
    <v-card rounded="xl" class="pa-6">
        <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Destinatario</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá CVU o alias"></v-text-field>
        </div>
        <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Mensaje</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá un mensaje al destinatario"></v-text-field>
        </div>
        <div class="display mb-4">
            <v-text class="mb-2" style="color: rgb(var(--v-theme-title));">Medio de Pago</v-text>
            <v-btn prepend-icon="mdi-credit-card-outline" text="Elegir medio" variant="outlined" rounded="xl"></v-btn>
        </div>
        <div>
            <v-text style="color: rgb(var(--v-theme-title));">Monto</v-text>
            <v-text-field v-model="amount" @blur="handleAmountInput" class="amount" variant="underlined"
                prepend-icon="mdi-currency-usd"></v-text-field>

        </div>

    </v-card>
</template>

<script>
export default {
    data: () => ({
        amount: '',
    }),
    methods: {
        handleAmountInput() {
            const num = parseFloat(this.amount.split('').filter(s=> (s>= '0' && s<= '9') || s == ',').join('').replace(',', '.'))
            console.log(num)
            if (!isNaN(num)) {
                const formatter = new Intl.NumberFormat('es-AR', { style: 'decimal', minimumFractionDigits: 2 })
                this.amount = formatter.format(num)
            }
            // input = formatter.format(Number(input))
        }
    }
}
</script>

<style>
.amount input,
.amount {
    font-size: xxx-large !important;
    text-align: end;
    min-width: 50%;
    margin-left: auto;
    font-family: "Fira Mono";
}

.display {
    display: flex;
    flex-direction: column;
    lg-width: 30%;
    sm-width: 100%
}

@media (min-width: 940px) {
    .display {
        width: 35%;
    }
}
</style>
