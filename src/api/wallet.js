const cards = [
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

const transactions = [
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

function getCards() {
    // Llamar a la API y obtener las tarjetas dinamicamente 
    return cards;
}

function getTransactions() {
    // Llamar a la API y obtener las transacciones dinamicamente 
    return transactions;
}

export default { getCards, getTransactions }