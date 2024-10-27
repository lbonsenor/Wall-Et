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
    signIn(username, password) {
      if(username === 'lau.bonsenor' && password != undefined){
        this.isSignedIn = true;
        this.user = walletApi.getUser();
        return true;
      }
      return false;

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

    register(email,username,password, passwordrepeat) {
      if(email !== undefined && username!==undefined && password !== undefined && passwordrepeat !== undefined  
          && password === passwordrepeat)
      this.isSignedIn = true;
        this.user = walletApi.getUser();
        return true;
    }
  }
})