import { ref } from 'vue'
import { defineStore } from 'pinia'
import walletApi from '@/api/wallet'

export const useBalanceStore = defineStore('balance', () => {
    const balance = ref(0)

    function updateBalance(newBalance) {
        balance.value = newBalance
    }

    function fetchBalance() {
        balance.value = walletApi.getBalance()
    }

    function calculateBalance(transactions) {
        let total = 0
        transactions.forEach(transaction => {
            const cleanAmount = transaction.amount
                .replace('$', '')
                .replace(/\./g, '')
                .replace(',', '.')
            const amount = parseFloat(cleanAmount)

            if (!isNaN(amount)) {
                total += transaction.out ? -amount : amount
            }
        })
        balance.value = total
    }

    return {
        balance,
        updateBalance,
        fetchBalance,
        calculateBalance
    }
})