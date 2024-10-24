import { defineStore } from 'pinia'
import walletApi from '@/api/wallet';

export const useUserStore = defineStore('user', {
  state: () => ({
    isSignedIn: false,
    user: {
      id: null,
      name: '',
      username: '',
      email: '',
      phone: '',
      dni: '',
      avatar: null,
      cvu: '',
      alias: ''
    }
  }),

  getters: {
    getUserAvatar: (state) => state.user.avatar || 'mdi-account',
    getUserProfile: (state) => state.user,
  },

  actions: {
    signIn() {
      this.isSignedIn = true;
      this.user = walletApi.getUser();
    },

    signOut() {
      this.isSignedIn = false;
      this.user = {
        id: null,
        name: '',
        username: '',
        email: '',
        phone: '',
        dni: '',
        avatar: null,
        cvu: '',
        alias: ''
      }
    },

    updateProfile(profileData) {
      this.user = {
        ...this.user,
        ...profileData
      }
    },

    register(userData) {
      // TODO: Implement API call for registration
      this.signOut();
    }
  }
})