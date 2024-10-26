<template>
    <h1>Transferir</h1>
    <div class="d-flex">
        <div class="left-column mr-8">
            <BalanceCard class="mb-8" :balance="balanceStore.balance" />
            <ContactList></ContactList>
        </div>
        <TransferForm class="transfer-form"></TransferForm>
    </div>
</template>

<script>
import ContactList from '@/components/transfer/ContactList.vue';
import TransferForm from '@/components/transfer/TransferForm.vue';
import BalanceCard from '@/components/transfer/BalanceCard.vue';
import { useBalanceStore } from '@/stores/BalanceStore';

export default {
    name: 'Transfer',
    setup() {
        const balanceStore = useBalanceStore();
        balanceStore.fetchBalance();

        return {
            balanceStore
        };
    }
};
</script>

<style scoped>
.left-column {
    width: 30%;
    min-width: 250px;
}

.transfer-form {
    flex-grow: 1;
    width: 70%;
}
</style>