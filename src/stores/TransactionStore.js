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

    function filterTransactions({ startDate, endDate, type, paymentMethod }) {
        return transactions.value.filter(transaction => {
            let matches = true
            
            if (startDate && endDate) {
                const transDate = new Date(transaction.date)
                matches = matches && transDate >= new Date(startDate) && transDate <= new Date(endDate)
            }
            
            if (type) {
                matches = matches && transaction.transaction_type === type
            }
            
            if (paymentMethod) {
                matches = matches && transaction.payment_type === paymentMethod
            }
            
            return matches
        })
    }

    return { transactions, fetchTransactions, addTransaction, filterTransactions }
})