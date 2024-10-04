<template>
    <v-main>
        <h2>Mis Tarjetas</h2>
        <CardItem
            card_brand="hi"
            card_type="Débito"
            card_number="1234 5678 9012 2345"
            card_owner="Lautaro Bonsenor"
            card_expiry_date="05/26"
            card_cvv="123"
        ></CardItem>
    </v-main>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
    name: 'Cards',
    components: {
        CardItem
    }
};
</script>