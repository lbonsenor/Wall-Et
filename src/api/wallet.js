import pedidosYaIcon from '@/assets/pedidos_ya.png'

const cards = [
    {
        id: 1,
        card_brand: 'Visa',
        card_type: 'Débito',
        card_number: '1234 4567 7890 0000',
        card_owner: 'Camila Lee',
        card_expiry_date: '04/30',
        card_cvv: '123'
    },
    {
        id: 2,
        card_brand: 'Mastercard',
        card_type: 'Crédito',
        card_number: '9876 5432 1098 7654',
        card_owner: 'John Smith',
        card_expiry_date: '12/25',
        card_cvv: '456'
    },
    {
        id: 3,
        card_brand: 'American Express',
        card_type: 'Crédito',
        card_number: '3456 7890 1234 5678',
        card_owner: 'Emma Watson',
        card_expiry_date: '09/27',
        card_cvv: '789'
    },
    {
        id: 4,
        card_brand: 'American Express',
        card_type: 'Débito',
        card_number: '2139 3718 4719 1574',
        card_owner: 'Noah Cefalta',
        card_expiry_date: '11/25',
        card_cvv: '153'
    }
]

const transactions = [
    {
        date: '2024-09-10',
        user: 'Pedidos Ya',
        transaction_type: 'Pago online',
        payment_type: 'Dinero disponible',
        amount: '$17.500.000,00',
        time: '17:15',
        out: true,
        icon: pedidosYaIcon
    },
    {
        date: '2024-03-01',
        user: 'Camila Lee',
        transaction_type: 'Transferencia recibida',
        payment_type: 'Dinero disponible',
        amount: '$20.500,00',
        time: '09:00',
        out: false,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
    {
        date: '2024-02-28',
        user: 'Farmacity',
        transaction_type: 'Pago online',
        payment_type: 'Mastercard prepago',
        amount: '$25.176,70',
        time: '11:45',
        out: true,
        icon: null
    },
]

const balance = 175000.50;

const user = {
    id: 1,
    name: 'Lautaro Bonseñor',
    username: 'lau_bonsenor',
    email: 'lbonsenor@itba.edu.ar',
    phone: '+54 911 6447 3647',
    dni: '44358712',
    avatar: null,
    cvu: '0000079800000000000000',
    alias: 'lau.bonsenor.wallet'
}

function getCards() {
    return cards;
}

function getTransactions() {
    return transactions;
}

function getBalance() {
    return balance;
}

function getUser() {
    return user;
}

export default { getCards, getTransactions, getBalance, getUser }