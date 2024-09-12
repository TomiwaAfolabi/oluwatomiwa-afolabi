import { createStore } from "vuex";

// Create a new store instance.
export const theme = createStore({
  state() {
    return {
      isTheme: false,
    };
  },
  mutations: {
    switchTheme(state) {
      state.isTheme = !state.isTheme;
    },
  },
});
