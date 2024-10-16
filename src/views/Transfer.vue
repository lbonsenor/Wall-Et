<template>
    <h1>Transferir</h1>
    <div class="d-flex">
        <div class="left-column mr-6">
        <BalanceCard class="mb-6"/>
        <ContactList></ContactList>
        </div>
    <TransferForm class="transfer-form"></TransferForm> 
    </div>
</template>

<!-- https://r8knh813-3000.brs.devtunnels.ms/ -->

<script>
import ContactList from '@/components/transfer/ContactList.vue';
import TransferForm from '@/components/transfer/TransferForm.vue';
import BalanceCard from '@/components/transfer/BalanceCard.vue';

export default {
    name: 'Transfer',
};
</script>

<style scoped>
.left-column {
    width: 30%;
    min-width: 250px;
}
.transfer-form {
    flex-grow: 1; 
    width:70%;
}
</style>
