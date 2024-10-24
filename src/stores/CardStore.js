import { ref } from 'vue'
import { defineStore } from 'pinia'
import walletApi from '@/api/wallet'

export const useCardStore = defineStore('card', () => {
    const previousCards = [
        {
            id: 1,
            card_brand: 'Visa',
            card_type: 'Debito',
            card_number: '1234 4567 7890 0000',
            card_owner: 'Camila Lee',
            card_expiry_date: '04/30',
            card_cvv: '123'
        },
        {
            id: 2,
            card_brand: 'Mastercard',
            card_type: 'Credito',
            card_number: '9876 5432 1098 7654',
            card_owner: 'John Smith',
            card_expiry_date: '12/25',
            card_cvv: '456'
        },
        {
            id: 3,
            card_brand: 'American Express',
            card_type: 'Credito',
            card_number: '3456 7890 1234 5678',
            card_owner: 'Emma Watson',
            card_expiry_date: '09/27',
            card_cvv: '789'
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

    function modifyCard(cardId, updatedCard) {
        const index = cards.value.findIndex(card => card.id === cardId)
        if (index !== -1) {
            cards.value[index] = {
                ...cards.value[index],
                ...updatedCard
            }
        }
    }

    return { cards, fetchCards, addCard, removeCard, modifyCard }
})