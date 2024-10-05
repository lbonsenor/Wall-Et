<template>
    <v-container fluid>
        <v-row justify="left">
            <v-col cols="12" sm="8" md="6" lg="4">
                <h1>Mi Cuenta</h1>

                <div class="d-flex align-center mb-6">
                    <div class="avatar-container mr-4">
                        <v-avatar size="80">
                            <v-img :src="avatar" alt="Profile picture"/>
                        </v-avatar>
                        
                        <v-btn icon size="30" color="primary" class="change-avatar-btn" @click="changeAvatar">
                            <v-icon size="small">mdi-camera</v-icon>
                        </v-btn>
                    </div>

                    <div>
                        <h2>{{ name }}</h2>
                        <p>{{ username }}</p>
                    </div>
                </div>

                <v-form @submit.prevent="updateProfile" class="mb-4">
                    <v-text-field
                        v-model="name"
                        label="Nombre"
                        prepend-inner-icon="mdi-account-outline"
                        variant="outlined"
                    />

                    <v-text-field
                        v-model="username"
                        label="Usuario"
                        prepend-inner-icon="mdi-at"
                        variant="outlined"
                    />

                    <v-text-field
                        v-model="email"
                        label="Email"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                    />
            
                    <v-text-field
                        v-model="phone"
                        label="Teléfono"
                        prepend-inner-icon="mdi-phone-outline"
                        variant="outlined"
                    />
            
                    <v-text-field
                        v-model="dni"
                        label="DNI"
                        prepend-inner-icon="mdi-card-account-details-outline"
                        variant="outlined"
                    />
            
                    <v-btn color="primary" block rounded="pill" type="submit" class="white-border">
                        Actualizar
                    </v-btn>
                </v-form>
            
                <v-btn variant="text" prepend-icon="mdi-lock-outline" block class="justify-start">
                    <span class="text-decoration-underline">Cambiar contraseña</span>
                </v-btn>

                <v-btn variant="text" prepend-icon="mdi-delete-outline" block class="justify-start">
                    <span class="text-decoration-underline">Eliminar cuenta</span>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>    
</template>

<script>
    import avatar from '@/assets/wallet-white.png';

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
            };
        },
        methods: {
            updateProfile() {
                console.log('Profile updated');
            },
            changeAvatar() {
                console.log('Avatar changed');
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