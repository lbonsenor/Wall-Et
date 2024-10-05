<template>
    <v-card class="mx-auto" min-width="200px" height="fit-content" color="surface" rounded="xl">
        <v-card-text>
            <v-text-field v-model="search" class="search-field mb-2" :loading="loading" prepend-inner-icon="mdi-magnify"
                density="compact" label="Buscar" variant="outlined" hide-details flat rounded="xl"
                @click:prependInner="onSearch" @keyup.enter="onSearch" clearable />

            <!-- Tipo de transferencia -->
            <p class="title">Tipo de transferencia</p>
            <v-chip-group column selected-class="bg-primary" multiple v-model="selectedTransactionTypes">
                <v-chip variant="outlined" v-for="type in transaction_type" :key="type" :value="type" :text="type"
                     />
            </v-chip-group>

            <!-- Periodo -->
            <p class="title">Período</p>
            <v-chip-group v-model="selectedPeriod" column selected-class="bg-primary">
                <v-chip variant="outlined" v-for="period in period_type" :key="period.type" :text="period.text"/>
                <DateDialog ref="DateDialogRef"></DateDialog>
            </v-chip-group>

            <!-- Monto -->
            <p class="title">Monto</p>
            <v-range-slider rounded="pill" color="primary" v-model="range" min="0" max="17500" :step="1"
                class="align-center mx-3" thumb-label thumb-color="primary" hide-details hide-spin-buttons>
            </v-range-slider>
            <div class="d-flex justify-space-between pl-2" style="margin-top: -12px;">
                <v-text-field prefix="$"
                    class="currency-input d-lg-inline-flex d-md-inline-flex d-none pa-0 ma-0" color="primary"
                    v-model="range[0]" density="compact" type="number" variant="text" hide-details=""></v-text-field>
                <v-spacer style="width: 45%;" />
                <v-text-field prefix="$"
                    class="currency-input d-lg-inline-flex d-md-inline-flex d-none pa-0 ma-0" color="primary"
                    v-model="range[1]" density="compact" type="number" variant="text" hide-details=""></v-text-field>
            </div>

            <!-- Medio de Pago -->
            <p class="title">Medio de pago</p>
            <v-checkbox v-for="payment_method in payment_methods" hide-details v-model="selectedPaymentTypes"
                :value="payment_method.value" :label="payment_method.label" class="custom-checkbox" />

            <!-- Botones de aplicar y limpiar -->
            <div class="flex-row justify-center d-md-flex d-lg-flex justify-md-space-between justify-lg-space-between align-center mt-4">
                <v-btn class="mb-2 mr-2 flex-grow-1 flex-grow" flat variant="tonal" rounded="xl" @click="apply">Aplicar</v-btn>
                <v-btn class="mb-2 mr-2 flex-grow-1 flex-grow" flat variant="tonal" rounded="xl" @click="cleanup">Limpiar</v-btn>
            </div>

        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import DateDialog from './DateDialog.vue'

const dateDialogRef = ref(null)

const loading = ref(false)
const loaded = ref(false)
const search = ref('')
const selectedTransactionTypes = ref([])
const selectedPeriod = ref('all_time')
const range = ref([0, 17500]) // luego crear una funcion que devuelva el max monto de transaccion
const selectedPaymentTypes = ref([])

const transaction_type = ref(['Recibida', 'Enviada']);

const period_type = ref([
    {
        text: 'Todo',
        type: 'all_time',
    },
    {
        text: 'Hoy',
        type: 'today',
    },
    {
        text: 'Esta semana',
        type: 'this_week',
    },
    {
        text: 'Este mes',
        type: 'this_month',
    },
    {
        text: 'Este año',
        type: 'this_year',
    },
    // {
    //     text: 'Otro período...',
    //     type: 'select_period',
    // },

])

const payment_methods = [
    {
        value: 'default',
        label: 'Dinero diponible'
    },
    {
        value: 'credit1',
        label: 'Tarjeta de credito VISA 1602'
    },
    {
        value: 'debit1',
        label: 'Tarjeta de debito Santander 1900'
    },
    {
        value: 'credit2',
        label: 'Tarjeta de credito VISA 9000'
    },
]

const openDialog = () => {
    dateDialogRef.value.openDialog()
}

const onSearch = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        loaded.value = true
        // call api to search 
    }, 2000)
}

const apply = () => {
    // mandamos los filtros a una api 
    window.scrollTo({ top: 50, behavior: 'smooth' })
    alert('Filtrando...')
}

const cleanup = () => {
    search.value = '';
    selectedTransactionTypes.value = []
    selectedPeriod.value = null
    selectedPaymentTypes.value = []
    range.value = [0, 17500]; //este valor hay que cambiarlo despues

    window.scrollTo({ top: 50, behavior: 'smooth' })
    alert('Limpiando filtros...')

}
</script>

<style scoped>
.search-field {
    background-color: transparent;
    padding: 0;
}

.title {
    color: rgb(var(--v-theme-title));
    font-weight: bold;
    font-size: medium;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 5px;
}

.currency-input {
    max-width: fit-content;
}

.currency-input :deep(.v-text-field__prefix) {
    margin-left: -4px !important;
    padding-inline-start: 0;
}

.currency-input :deep(.v-field__input) {
    max-width: fit-content;
}
/* 
.custom-checkbox {
    background-color: transparent;
    padding: 0px 10px;
    color: white;
    border-width: 5px;

    border-color: white;
} */

.custom-checkbox :deep(.v-label--clickable) {
    opacity: 100%;
    font-size: 14px;
}


</style>