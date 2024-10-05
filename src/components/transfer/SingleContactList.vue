<template>
    <v-list density="comfortable" class="scrollable-list">
    <v-list-item 
      rounded="pill" 
      ripple 
      v-for="contact in contacts" 
      :key="contact.id"
      :value="contact" 
      :active="false"
    >
    <template v-slot:prepend>
        <v-avatar color="info">
          <v-icon icon="mdi-account-circle" />
        </v-avatar>
      </template>
      <v-list-item-title>{{ contact.name }}</v-list-item-title>
      <template v-slot:append>
        <v-icon 
          :icon="contact.isFavorite ? 'mdi-star' : 'mdi-star-outline'" 
          class="mr-2"
          @click.stop="toggleFavorite(contact.id)" 
          color="star" 
        />
        <v-icon 
          icon="mdi-trash-can-outline" 
          class="delete-icon"
          @click.stop="deleteContact(contact.id)" 
        />
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleFavorite(id) {
      this.$emit('toggle-favorite', id);
    },
    deleteContact(id) {
      this.$emit('delete-contact', id);
    }
  }
}
</script>

<style scoped>
.delete-icon {
  transition: color 0.3s ease;
}

.delete-icon:hover {
  color: rgb(var(--v-theme-error)) !important;
}

.scrollable-list {
  max-height: 40vh;
  overflow-y: auto;
}
</style>