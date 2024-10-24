import { ref } from 'vue'
import { defineStore } from 'pinia'
import walletApi from '@/api/wallet'

export const useTransactionStore = defineStore('transaction', () => {
    const previousTransactions = [
        {
            date: '2024-09-10',
            user: 'Pedidos Ya Hola Hola Hoal HOla ',
            transaction_type: 'Pago online',
            payment_type: 'Dinero disponible',
            amount: '$17.500.000,00',
            time: '17:15',
            out: true
        },
        {
            date: '2024-03-01',
            user: 'Camila Lee',
            transaction_type: 'Transferencia recibida',
            payment_type: 'Dinero disponible',
            amount: '$20.500,00',
            time: '09:00',
            out: false
        },
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        },
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        }, 
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        }, 
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        }, 
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        }, 
        {
            date: '2024-02-28',
            user: 'Farmacity',
            transaction_type: 'Pago online',
            payment_type: 'Mastercard prepago',
            amount: '$25.176,70',
            time: '11:45',
            out: true
        },
    ]

    const transactions = ref([...previousTransactions])
    const filteredTransactions = ref([])

    function fetchTransactions() {
        transactions.value = walletApi.getTransactions()
    }

    function addTransaction(transaction) {
        const newTransaction = {
            ...transaction,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
        }
        transactions.value.unshift(newTransaction)
    }

    function applyFilters({ search, transactionTypes, period, range, paymentTypes, startDate, endDate }) {
        filteredTransactions.value = transactions.value.filter(transaction => {
            let matches = true
            
            // Search filter
            if (search) {
                matches = matches && transaction.user.toLowerCase().includes(search.toLowerCase())
            }

            // Transaction types filter
            if (transactionTypes && transactionTypes.length > 0) {
                matches = matches && transactionTypes.includes(transaction.transaction_type)
            }

            // Payment types filter
            if (paymentTypes && paymentTypes.length > 0) {
                matches = matches && paymentTypes.includes(transaction.payment_type)
            }

            // Amount range filter
            if (range && range.length === 2) {
                const cleanAmount = transaction.amount
                    .replace('$', '')
                    .replace(/\./g, '')
                    .replace(',', '.')
                const amount = parseFloat(cleanAmount)
                
                // Only apply filter if we have valid numbers
                if (!isNaN(amount) && !isNaN(range[0]) && !isNaN(range[1])) {
                    matches = matches && amount >= range[0] && amount <= range[1]
                }
            }

            // Period filter
            if (period) {
                const transDate = new Date(transaction.date)
                const today = new Date()

                switch(period) {
                    case 'today':
                        matches = matches && isSameDay(transDate, today)
                        break
                    case 'this_week':
                        matches = matches && isThisWeek(transDate)
                        break
                    case 'this_month':
                        matches = matches && isThisMonth(transDate)
                        break
                    case 'this_year':
                        matches = matches && isThisYear(transDate)
                        break
                    case 'custom':
                        if (startDate && endDate) {
                            matches = matches && 
                                transDate >= new Date(startDate) && 
                                transDate <= new Date(endDate)
                        }
                        break
                }
            }

            return matches
        })

        return filteredTransactions.value
    }

    function clearFilters() {
        filteredTransactions.value = [...transactions.value]
    }

    function getMaxAmount() {
        return Math.max(...transactions.value.map(transaction => {
            // Remove currency symbol, dots (thousand separators), and convert comma to dot
            const cleanAmount = transaction.amount
                .replace('$', '')
                .replace(/\./g, '')
                .replace(',', '.')
            return parseFloat(cleanAmount)
        }))
    }

    function isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
    }

    function isThisWeek(date) {
        const today = new Date()
        const firstDay = new Date(today.setDate(today.getDate() - today.getDay()))
        const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6))
        return date >= firstDay && date <= lastDay
    }

    function isThisMonth(date) {
        const today = new Date()
        return date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    }

    function isThisYear(date) {
        const today = new Date()
        return date.getFullYear() === today.getFullYear()
    }

    return { 
        transactions, 
        filteredTransactions,
        fetchTransactions, 
        applyFilters,
        clearFilters,
        getMaxAmount
    }
})