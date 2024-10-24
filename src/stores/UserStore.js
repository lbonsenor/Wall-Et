// functions: login, logout, updateProfile, fetchUserDetails
import { defineStore } from 'pinia'


export const useUserStore = defineStore('counter', {
    state: () => ({
      isSignedIn: false,
      //name, mail, cvu, etc.
    }),
    actions: {
      signIn() {
        this.isSignedIn = true;
      },
      signOut() {
        this.isSignedIn = false;
      },
      register(){
        // this.name == etc etc -> and call the api to register
        this.signOut();
      },
    },
  })