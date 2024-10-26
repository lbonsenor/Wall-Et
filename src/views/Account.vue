<template>
  <v-container fluid>
    <div class="d-flex">
      <v-form @submit.prevent="updateProfile" class="form-container"> 
        <v-text-field v-model="userData.name" label="Nombre" prepend-inner-icon="mdi-account-outline"
          variant="outlined" />

        <v-text-field v-model="userData.username" label="Usuario" prepend-inner-icon="mdi-at" variant="outlined" />

        <v-text-field v-model="userData.email" label="Email" prepend-inner-icon="mdi-email-outline"
          variant="outlined" />

        <v-text-field v-model="userData.phone" label="Teléfono" prepend-inner-icon="mdi-phone-outline"
          variant="outlined" />

        <v-text-field v-model="userData.dni" label="DNI" prepend-inner-icon="mdi-card-account-details-outline"
          variant="outlined" />

        <v-btn color="secondary" block rounded="pill" type="submit">
          Actualizar
        </v-btn>
      </v-form>

      <v-card class="profile-card ml-5" rounded="xl">
        <div class="pa-6">
          <div class="d-flex align-center mb-6">
            <div class="avatar-container">
              <v-avatar size="80">
                <v-img v-if="userData.avatar" :src="userData.avatar" alt="Profile picture" />
                <v-icon v-else size="40">mdi-account</v-icon>
              </v-avatar>
              <v-btn icon size="30" color="primary" class="change-avatar-btn" @click="triggerFileInput">
                <v-icon size="small">mdi-camera</v-icon>
              </v-btn>
              <input type="file" ref="fileInput" accept="image/*" style="display: none" @change="onFileSelected" />
            </div>
            <div>
              <h2>{{ userData.name }}</h2>
              <p>{{ userData.username }}</p>
            </div>
          </div>
          <div>
            <v-btn variant="text" prepend-icon="mdi-lock-outline" class="justify-start" block @click="resetPassword">
              <span class="text-decoration-underline">Cambiar contraseña</span>
            </v-btn>
            <v-btn variant="text" prepend-icon="mdi-delete-outline" class="justify-start delete-account" block
              @click="showDeleteConfirmation = true">
              <span class="text-decoration-underline delete-account">Eliminar cuenta</span>
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>

    <v-dialog v-model="showDeleteConfirmation" max-width="400">
      <v-card rounded="lg">
        <v-card-title class="headline">Confirmar eliminación de cuenta</v-card-title>
        <v-card-text class="pt-2">
          ¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="showDeleteConfirmation = false">Cancelar</v-btn>
          <v-btn color="error" @click="deleteAccount">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { useUserStore } from '@/stores/UserStore';

export default {
  name: "Account",
  data() {
    const userStore = useUserStore();
    return {
      userStore,
      userData: { ...userStore.getUserProfile },
      showDeleteConfirmation: false,
    };
  },

  methods: {
    updateProfile() {
      this.userStore.updateProfile(this.userData);
      console.log("Profile updated");
    },

    deleteAccount() {
      console.log("Account deleted");
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
          this.userData.avatar = e.target.result;
          this.userStore.updateProfile({ ...this.userData });
        };
        reader.readAsDataURL(file);
      }
    },

    resetPassword() {
      this.$router.push("/resetar-contraseña");
    },
  },

  watch: {
    'userStore.getUserProfile': {
      handler(newValue) {
        this.userData = { ...newValue };
      },
      deep: true
    }
  }
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

.delete-account {
  color: red;
}

.form-container {
  width: 600px;
}

.profile-card {
  width: 400px;
  height: fit-content;
}
</style>