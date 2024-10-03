<template>
    <div class="flex flex-row bg-white rounded-lg p-4 text-black ">
        <div class="flex-1 flex items-center justify-center">
            <v-icon size="large">{{ icon }}</v-icon>
        </div>
        <div class="flex-2">
            <h1 class="text-lg font-bold">{{ title }}</h1>
            <p>{{ payment_type }}</p>
            <div class="flex items-center mt-2">   
                <v-icon small class="mr-1">mdi-circle</v-icon>
                <p class="text-sm">Dinero disponible</p>
            </div>
        </div>
        <div class="flex-3 text-right">
            <h1 :class="{ 'text-black': out, 'text-green': !out }" class="text-lg font-bold">{{ price }}</h1>
            <p class="text-xs text-gray-500">{{ time }}</p>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                title: 'Pedidos Ya', 
                icon: 'mdi-account',
                payment_type: 'Pago online',
                price: '$20.500,00',
                out: true, 
                time: '17:15',
            }
        }
    }
</script>