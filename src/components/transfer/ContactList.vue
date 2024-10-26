<template>
    <v-card rounded="xl" bg-color="surface" class="pa-2">
        <v-tabs v-model="tab" bg-color="surface" class="d-flex justify-space-between align-center" grow>
            <v-tab value="recents">Recientes</v-tab>
            <v-tab value="favorites">Favoritos</v-tab>
        </v-tabs>

        <v-card-text class="pa-0">
            <v-window v-model="tab">
                <v-window-item value="recents">
                    <SingleContactList :contacts="recentContacts" @toggle-favorite="toggleFavorite"
                        @delete-contact="deleteContact" />
                </v-window-item>
                <v-window-item value="favorites">
                    <SingleContactList :contacts="favoriteContacts" @toggle-favorite="toggleFavorite"
                        @delete-contact="deleteContact" />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import SingleContactList from './SingleContactList.vue';
export default {
    components: {
        SingleContactList
    },
    data: () => ({
        tab: null,
        contacts: [
            { id: 1, name: 'Camila Lee', avatar: '', isFavorite: true },
            { id: 2, name: 'John Doe', avatar: '', isFavorite: false },
            { id: 3, name: 'Jane Smith', avatar: '', isFavorite: true },
            { id: 4, name: 'Alex Johnson', avatar: '', isFavorite: false },
            { id: 5, name: 'Lautaro Bonsenor', avatar: '', isFavorite: false },
            { id: 6, name: 'Michael Scott', avatar: '', isFavorite: true },
            { id: 7, name: 'Pam Beesly', avatar: '', isFavorite: false },
            { id: 8, name: 'Jim Halpert', avatar: '', isFavorite: true },
            { id: 9, name: 'Dwight Schrute', avatar: '', isFavorite: false },
            { id: 10, name: 'Angela Martin', avatar: '', isFavorite: false },
        ]
    }),
    computed: {
        recentContacts() {
            return this.contacts.slice(0, 8);
        },
        favoriteContacts() {
            return this.contacts.filter(contact => contact.isFavorite);
        }
    },
    methods: {
        toggleFavorite(id) {
            const contact = this.contacts.find(c => c.id === id);
            if (contact) {
                contact.isFavorite = !contact.isFavorite;
            }
        },
        deleteContact(id) {
            const index = this.contacts.findIndex(c => c.id === id);
            if (index !== -1) {
                this.contacts.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
.contact-list-wrapper {
    min-width: 250px;
    max-width: 400px;
    height: fit-content;
}
</style>