import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {},
    isLogged: !!localStorage.getItem('tokenPrestamos'),
    orders: [],
    env: {
      razon: 'Mariscos Tevez',
      direccion: 'Calle 1, No. 2',
      telefono: '809-123-4567',
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
