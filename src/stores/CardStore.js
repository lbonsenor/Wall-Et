import { ref } from 'vue'
import { defineStore } from 'pinia'
import walletApi from '@/api/wallet'

export const useCardStore = defineStore('card', () => {
    const cards = ref([])

    function fetchCards() {
        cards.value = walletApi.getCards()
    }

    function addCard(card) {
        const newId = cards.value.length > 0 ? cards.value.length + 1 : 1
        const newCard = {...card, id: newId}
        cards.value.push(newCard)
    }

    return { cards, fetchCards, addCard }
})