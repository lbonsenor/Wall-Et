import { defineStore } from 'pinia'

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
      // Simulating user data
      this.user = {
        id: 1,
        name: 'Lautaro Bonseñor',
        username: 'lau_bonsenor',
        email: 'lbonsenor@itba.edu.ar',
        phone: '+54 911 6447 3647',
        dni: '44358712',
        avatar: null,
        cvu: '0000079800000000000000',
        alias: 'lau.bonsenor.wallet'
      }
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