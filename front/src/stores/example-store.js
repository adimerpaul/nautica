import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: {},
    isLogged: !!localStorage.getItem('tokenPrestamos'),
    orders: [],
    env: {
      razon: 'Tévez Mariscos',
      direccion: 'Calle Francisco, gavidia #19,Puerto El triunfo Usulutan',
      telefono: '72790988',
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
