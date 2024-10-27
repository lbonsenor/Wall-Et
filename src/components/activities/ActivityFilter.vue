<template>
    <v-card class="mx-auto" min-width="200px" height="fit-content" color="surface" rounded="xl">
        <v-card-text>
            <v-text-field v-model="search" class="search-field mb-2" :loading="loading" prepend-inner-icon="mdi-magnify"
                density="compact" label="Buscar" variant="outlined" hide-details flat rounded="xl" @input="onSearch"
                clearable />
                <div
                class="flex-row justify-center d-md-flex d-lg-flex justify-md-space-between justify-lg-space-between align-center mt-4">
                <v-btn class="mb-2 mr-2 flex-grow-1 flex-grow" flat variant="tonal" rounded="xl"
                    @click="apply">Aplicar</v-btn>
                <v-btn class="mb-2 mr-2 flex-grow-1 flex-grow" flat variant="tonal" rounded="xl"
                    @click="cleanup">Limpiar</v-btn>
            </div>

            <p class="title">Tipo de transferencia</p>
            <v-chip-group column selected-class="bg-primary" multiple v-model="selectedTransactionTypes">
                <v-chip variant="outlined" v-for="type in transaction_type" :key="type" :value="type" :text="type" />
            </v-chip-group>

            <p class="title">Período</p>
            <v-chip-group v-model="selectedPeriod" column selected-class="bg-primary">
                <v-chip variant="outlined" v-for="period in period_type" :key="period.type" :value="period.type"
                    :text="period.text" />
                <DateDialog ref="dateDialogRef"></DateDialog>
            </v-chip-group>

            <p class="title">Monto</p>
            <v-range-slider rounded="pill" color="primary" v-model="range" min="0" :max="maxAmount" :step="1"
                class="align-center mx-3" thumb-label thumb-color="primary" hide-details hide-spin-buttons>
            </v-range-slider>

            <v-row class="pl-2">
                <v-col>
                    <v-text-field prefix="$" class="currency-input" color="primary" v-model="range[0]" density="compact"
                        variant="underlined" hide-details="" />
                </v-col>
                <v-col>
                    <v-text-field suffix="$" class="currency-input-right" color="primary" v-model="range[1]"
                        density="compact" variant="underlined" />
                </v-col>
            </v-row>

            <p class="title">Medio de pago</p>
            <template v-for="(payment_method, index) in availablePaymentMethods" :key="index">
                <v-checkbox hide-details v-model="selectedPaymentTypes" :value="payment_method.value"
                    :label="payment_method.label" class="custom-checkbox" />
            </template>

        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTransactionStore } from '@/stores/TransactionStore'
import { useCardStore } from '@/stores/CardStore'
import DateDialog from './DateDialog.vue'

const transactionStore = useTransactionStore()
const cardStore = useCardStore()
const dateDialogRef = ref(null)

const loading = ref(false)
const search = ref('')
const selectedTransactionTypes = ref([])
const selectedPeriod = ref('all_time')
const maxAmount = ref(0)
const range = ref([0, 0])
const selectedPaymentTypes = ref([])

const transaction_type = ref([
    'Pago online',
    'Transferencia recibida',
    'Transferencia enviada'
])

const period_type = ref([
    { text: 'Todo', type: 'all_time' },
    { text: 'Hoy', type: 'today' },
    { text: 'Esta semana', type: 'this_week' },
    { text: 'Este mes', type: 'this_month' },
    { text: 'Este año', type: 'this_year' }
])

const availablePaymentMethods = computed(() => {
    const methods = [
        {
            value: 'default',
            label: 'Dinero disponible'
        }
    ]

    cardStore.cards.forEach(card => {
        methods.push({
            value: card.id.toString(),
            label: `${card.card_type} ${card.card_brand} ${card.card_number.slice(-4)}`
        })
    })

    return methods
})

let searchTimeout
const onSearch = () => {
    loading.value = true
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
        applyFilters()
        loading.value = false
    }, 500)
}

const apply = () => {
    applyFilters()
}

const applyFilters = () => {
    const startDate = selectedPeriod.value === 'custom' ? dateDialogRef.value?.confirmedSelection[0] : null
    const endDate = selectedPeriod.value === 'custom' ? dateDialogRef.value?.confirmedSelection[1] : null

    transactionStore.applyFilters({
        search: search.value,
        transactionTypes: selectedTransactionTypes.value,
        period: selectedPeriod.value,
        range: range.value,
        paymentTypes: selectedPaymentTypes.value,
        startDate,
        endDate
    })
}

const cleanup = () => {
    search.value = ''
    selectedTransactionTypes.value = []
    selectedPeriod.value = 'all_time'
    selectedPaymentTypes.value = []
    range.value = [0, maxAmount.value]

    transactionStore.clearFilters()
    window.scrollTo({ top: 50, behavior: 'smooth' })
}

onMounted(() => {
    cardStore.fetchCards()
    transactionStore.clearFilters()
    maxAmount.value = transactionStore.getMaxAmount()
    range.value = [0, maxAmount.value]
})
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

.currency-input :deep(.v-text-field__prefix) {
    padding-inline-start: 0;
    padding-top: 0;
}

.currency-input :deep(input) {
    padding-top: 0px !important;
}

.custom-checkbox :deep(.v-label--clickable) {
    opacity: 100%;
    font-size: 14px;
}

.currency-input-right :deep(input) {
    text-align: end;
    padding-top: 0px !important;
    margin-right: 5px;
}

.currency-input-right :deep(.v-text-field__suffix) {
    padding-top: 0;
    padding-inline-end: 0;
}
</style>