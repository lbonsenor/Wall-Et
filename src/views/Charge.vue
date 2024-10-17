<template>
    <h1>Cobrar</h1>
    <div class="flex-container">
      <div class="left-column">
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
  .flex-container {
    display: flex;
    height: 100vh; /* Full height of the viewport */
  }
  
  .left-column,
  .right-column {
    flex: 1; /* equal width for both columns*/
    padding: 20px; 
    box-sizing: border-box; 
  }
  

  </style>