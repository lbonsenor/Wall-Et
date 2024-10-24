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

function getCards() {
    // Llamar a la API y obtener las tarjetas dinamicamente 
    return cards;
}

export default { getCards }