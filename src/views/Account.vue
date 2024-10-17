<template>
    <v-container fluid>
        <v-row justify="left">
            <div class="d-flex fill-width align-center justify-space-around" style="width: 100%;">
                <v-form @submit.prevent="updateProfile" style="width: 100%;" class="mb-4">
                    <h1>Mi Cuenta</h1>

                    <v-text-field v-model="name" label="Nombre" prepend-inner-icon="mdi-account-outline"
                        variant="outlined" />

                    <v-text-field v-model="username" label="Usuario" prepend-inner-icon="mdi-at" variant="outlined" />

                    <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email-outline"
                        variant="outlined" />

                    <v-text-field v-model="phone" label="Teléfono" prepend-inner-icon="mdi-phone-outline"
                        variant="outlined" />

                    <v-text-field v-model="dni" label="DNI" prepend-inner-icon="mdi-card-account-details-outline"
                        variant="outlined" />

                    <v-btn color="secondary" block rounded="pill" type="submit">
                        Actualizar
                    </v-btn>
                </v-form>

                <v-col cols="12" md="4">
                    <v-card class="pa-6" rounded="xl">
                        <div>
                            <div class="d-flex align-center mb-6">
                                <div class="avatar-container mr-4">
                                    <v-avatar size="80">
                                        <v-img :src="avatar" alt="Profile picture" />
                                    </v-avatar>

                                    <v-btn icon size="30" color="primary" class="change-avatar-btn" @click="triggerFileInput">
                                        <v-icon size="small">mdi-camera</v-icon>
                                    </v-btn>

                                    <input type="file" ref="fileInput" accept="image/*" style="display: none" @change="onFileSelected">
                                </div>

                                <div>
                                    <h2>{{ name }}</h2>
                                    <p>{{ username }}</p>
                                </div>
                            </div>
                            
                            <div>
                                <v-btn variant="text" prepend-icon="mdi-lock-outline" class="justify-start" block>
                                    <span class="text-decoration-underline">Cambiar contraseña</span>
                                </v-btn>

                                <v-btn variant="text" prepend-icon="mdi-delete-outline" class="justify-start" block @click="showDeleteConfirmation = true">
                                    <span class="text-decoration-underline">Eliminar cuenta</span>
                                </v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </div>
        </v-row>

        <!-- Quizás debería ser otro componente -->
        <v-dialog v-model="showDeleteConfirmation" max-width="400">
            <v-card>
                <v-card-title class="headline">Confirmar eliminación de cuenta</v-card-title>
                <v-card-text class="pt-2">¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.</v-card-text>
                <v-card-actions>    
                    <v-btn color="primary" text @click="showDeleteConfirmation = false">Cancelar</v-btn>
                    <v-btn color="error" @click="deleteAccount">Eliminar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </v-container>
</template>

<script>
import avatar from '@/assets/logo.png';

export default {
    name: 'Account',
    data() {
        return {
            name: 'Lautaro Bonseñor',
            username: 'lau_bonsenor',
            avatar: avatar,
            email: 'lbonsenor@itba.edu.ar',
            phone: '+54 911 6447 3647',
            dni: '44358712',
            showDeleteConfirmation: false,
        };
    },
    methods: {
        updateProfile() {
            console.log('Profile updated');
        },
        changeAvatar() {
            console.log('Avatar changed');
        },
        deleteAccount() {
            console.log('Account deleted');
            this.showDeleteConfirmation = false;
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileSelected(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatar = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
    },
};
</script>

<style scoped>
.v-btn {
    text-transform: none;
}

.white-border {
    border: 1px solid white;
}

.avatar-container {
    position: relative;
    margin-right: 1rem;
}

.change-avatar-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;
    border: 2px solid var(--v-primary-base);
    transform: translate(20%, 20%);
}
</style>