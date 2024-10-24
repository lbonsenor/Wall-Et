<template>
    <v-card rounded="xl" style="min-width: fit-content;" class="pa-6">
        <!-- <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Cliente</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá CVU, alias o email"></v-text-field>
        </div> -->
        <div class="mb-2">
            <v-text style="color: rgb(var(--v-theme-title));">Producto o Servicio</v-text>
            <v-text-field variant="underlined" persistent-hint hint="Ingresá el nombre del producto o sevicio"></v-text-field>
        </div>
        <div>
            <v-text style="color: rgb(var(--v-theme-title));">Monto</v-text>
            <v-text-field v-model="amount" @blur="handleAmountInput" class="amount" variant="underlined"
                prepend-icon="mdi-currency-usd"></v-text-field>
        </div>
        <div class="display mb-4">
            <v-text class="mb-2" style="color: rgb(var(--v-theme-title));">Generar enlace de pago</v-text>
            
        </div>
        <div class="button-container">
        <v-btn class="d-flex mx-auto" prepend-icon="mdi-content-copy" width="40%" height=50 style="min-width: fit-content;" text="Copiar enlace" variant="outlined" rounded="xl"></v-btn>
        <v-btn class="d-flex mx-auto" style="min-width: fit-content;" width="40%" height=50 color="primary" rounded="xl" prepend-icon="mdi-send-outline" text="Enviar enlace"></v-btn> 
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
}
.button-container {
    display: flex;
    justify-content: space-between; /* Adjusts space between buttons */
    margin-top: 16px; /* Optional: adds space above the button container */
}

@media (min-width: 940px) {
    .display {
        width: 35%;
    }
}
</style>