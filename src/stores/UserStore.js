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

    register(name, email,username,password, passwordrepeat) {
      if(name!== '' && email !== '' && username!=='' && password !== '' && passwordrepeat !== ''  
        && password === passwordrepeat){
        console.log("Hello");
        this.isSignedIn = true;
        walletApi.setNewUser(name, email,username);
        this.user = walletApi.getUser();
        return true;
      }
      else{
      return false;
      }
    }
  }
})