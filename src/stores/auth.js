import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    logIn() {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', true);
    },
    logOut() {
      this.isAuthenticated = false;
      localStorage.removeItem('isAuthenticated');
    },
    init() {
      const token = localStorage.getItem('isAuthenticated');
      if (token) {
        this.isAuthenticated = true;
      }
    },
  },
})