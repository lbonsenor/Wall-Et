<template>
    <v-card class="mx-auto" height="fit-content" color="surface" rounded="xl">
        <v-card-text>
            <v-text-field v-model="search" class="search-field mb-2" :loading="loading" prepend-inner-icon="mdi-magnify"
                density="compact" label="Buscar" variant="outlined" hide-details flat rounded="xl"
                @click:prependInner="onSearch" @keyup.enter="onSearch" clearable />
            <v-responsive>
                <p class="title">Tipo de transferencia</p>
                <v-chip-group column class="vertical-chip-group" selected-class="bg-primary" multiple>
                    <v-chip variant="outlined" v-for="type in transaction_type" :key="type" :text="type"
                        @click="onChipClick(type)" />
                </v-chip-group>
            </v-responsive>
            <div class="title">Período</div>
            <v-responsive>
                <v-chip-group column selected-class="bg-primary">
                    <v-chip variant="outlined" v-for="period in period_type" :key="period.type" :text="period.text"
                        @click="onChipClick(period.type)" />
                </v-chip-group>
            </v-responsive>
            <div class="title">Monto</div>
                <v-range-slider rounded="pill" color="primary" v-model="range" min="0" max="1000" :step="1"
                class="align-center" thumb-label thumb-color="primary" hide-details hide-spin-buttons>
            </v-range-slider>
            <div class="d-flex justify-space-between pl-2" style="margin-top: -12px;">
                <v-text-field prefix="$" width="100px" class="currency-input d-lg-inline-flex d-md-inline-flex d-sm-none pa-0 ma-0"
                        color="primary" v-model="range[0]" density="compact" type="number" variant="text"
                        hide-details=""></v-text-field>  
                        <v-spacer style="width: 45%;" />
                        <v-text-field prefix="$" width="100px" class="currency-input d-lg-inline-flex d-md-inline-flex d-sm-none pa-0 ma-0"
                        color="primary" v-model="range[1]" density="compact" type="number" variant="text"
                        hide-details=""></v-text-field>             
            </div>
            

            <!-- <div class="d-flex justify-space-between align-center" style="width: 100%;">
                <div>
                    
                <div>
                    <v-text-field color="primary" v-model="range[1]" density="compact" type="number" variant="outlined"
                        prepend-inner-icon="mdi-currency-usd"></v-text-field>
                </div>
            </div> -->

        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const loaded = ref(false)
const search = ref('')
const onSearch = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
        loaded.value = true
        // call api to search 
    }, 2000)
}
//
const getAverageAmount = () => {
    return 2500;
}

const tickLabels = ref({ 0: '$0', 2500: '$2500' });

const monto = ref([0, 2500]);



const transaction_type = ref(['Recibida', 'Enviada']);

const period_type = ref([
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
    {
        text: 'Otro período...',
        type: 'select_period',
    },

])

const onChipClick = (type) => {
    console.log('Clicked:', type)
    // Add your chip click logic here
}
const range = ref([0, 500])

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
}

.currency-input {
    max-width: fit-content;
}

.currency-input :deep(.v-text-field__prefix) {
    margin-left: -4px !important;
    padding-inline-start: 0;
}

.currency-input :deep(.v-field__input) {
    max-width:fit-content;
}

/* v-text-field__prefix */
</style>