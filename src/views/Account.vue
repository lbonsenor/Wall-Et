<template>
    <v-container fluid>
        <v-row justify="left">
            <v-col cols="12" sm="8" md="6" lg="4">
                <h1>Mi Cuenta</h1>

                <div class="d-flex align-center mb-6">
                    <v-avatar size="80" class="mr-4">
                        <v-img :src="avatar" alt="Profile picture"/>
                    </v-avatar>
                    
                    <div>
                        <h2>{{name}}</h2>
                        <p>{{username}}</p>
                    </div>

                    <v-btn icon="mdi-pencil" variant="text" color="primary"/>
                </div>
                
                <v-form @submit.prevent="updateProfile" class="mb-4">
                    <v-text-field
                        v-model="email"
                        label="E-mail"
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
            
                    <v-btn color="primary" block rounded="pill" type="submit">
                        Actualizar
                    </v-btn>
                </v-form>
            
                <v-btn color="white" variant="text" prepend-icon="mdi-lock-outline" block class="justify-start">
                    Cambiar contraseña
                </v-btn>

                <v-btn color="error" variant="text" prepend-icon="mdi-delete-outline" block class="justify-start">
                    Eliminar cuenta
                </v-btn>
            </v-col>
        </v-row>
    </v-container>    
</template>
  
<script>
    export default {
        name: 'Account',
        data() {
            return {
                name: 'Lautaro Bonseñor',
                username: 'lau_bonsenor',
                avatar: '@/assets/wallet-white.png',
                email: 'lbonsenor@itba.edu.ar',
                phone: '+54 911 6447 3647',
                dni: '44358712',
            };
        },
        methods: {
            updateProfile() {
                console.log('Profile updated');
            },
        },
    };
</script>
  
<style scoped>
    .v-btn {
        text-transform: none;
    }
</style>