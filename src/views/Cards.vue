<template>
    <h1>Mis Tarjetas</h1>
    <CardsList :cardItems="cards" />
</template>

<script>
import CardsList from '@/components/cards/CardsList.vue';

export default {
    name: 'Cards',
    components: {
        CardsList
    },
    data() {
        return { 
            cards: [
                {card_brand:'hi',
                card_type:'Debito',
                card_number:'1234 4567 7890 0000',
                card_owner:'Camila Lee',
                card_expiry_date:'04/30',
                card_cvv:'123'},
                {card_brand:'hi',
                card_type:'Debito',
                card_number:'1234 4567 7890 0000',
                card_owner:'Camila Lee',
                card_expiry_date:'04/30',
                card_cvv:'123'},
                {card_brand:'hi',
                card_type:'Debito',
                card_number:'1234 4567 7890 0000',
                card_owner:'Camila Lee',
                card_expiry_date:'04/30',
                card_cvv:'123'},

            ]
        }
    }
};
</script>