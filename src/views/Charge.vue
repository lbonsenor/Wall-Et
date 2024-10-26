<template>
  <h1>Cobrar</h1>
  <div class="d-flex">
    <div class="left-column mr-5">
      <ContactList />
    </div>
    <div class="right-column">
      <ChargeForm class="charge-form" />
    </div>
  </div>
</template>

<script>
import ChargeForm from '@/components/charge/ChargeForm.vue';
import ContactList from '@/components/transfer/ContactList.vue';

export default {
  components: {
    ContactList,
    ChargeForm,
  },
};
</script>

<style scoped>
.left-column {
  width: 25%;
}

.right-column {
  width: 40%;
}
</style>