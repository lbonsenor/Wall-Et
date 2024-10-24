import { ref } from 'vue'
import { defineStore } from 'pinia'
import walletApi from '@/api/wallet'

export const useCardStore = defineStore('card', () => {
    const previousCards = [
        {
            card_brand:'hi',
            card_type:'Debito',
            card_number:'1234 4567 7890 0000',
            card_owner:'Camila Lee',
            card_expiry_date:'04/30',
            card_cvv:'123'
        },
        {
            card_brand:'hi',
            card_type:'Debito',
            card_number:'1234 4567 7890 0000',
            card_owner:'Camila Lee',
            card_expiry_date:'04/30',
            card_cvv:'123'
        },
        {
            card_brand:'hi',
            card_type:'Debito',
            card_number:'1234 4567 7890 0000',
            card_owner:'Camila Lee',
            card_expiry_date:'04/30',
            card_cvv:'123'
        }
    ]
    const cards = ref([...previousCards])

    function fetchCards() {
        cards.value = walletApi.getCards()
    }

    function addCard(card) {
        const newId = cards.value.length > 0 ? Math.max(...cards.value.map(c => c.id)) + 1 : 1
        const newCard = {...card, id: newId}
        cards.value.push(newCard)
        return newId;
    }

    function removeCard(cardId) {
        cards.value = cards.value.filter(card => card.id !== cardId)
    }

    function modifyCard(cardId) {
        const card = cards.value.find(card => card.id === cardId)
        if (card) {
            // Modificar la tarjeta
        }
    }

    return { cards, fetchCards, addCard, removeCard }
})