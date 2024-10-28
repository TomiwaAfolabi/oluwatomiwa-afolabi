import { createStore } from "vuex";

// Create a new store instance.
export const theme = createStore({
  state() {
    return {
      themeNo: "",
      isTheme: false,
    };
  },
  mutations: {
    switchTheme(state) {
      if (state.themeNo === "" && !state.isTheme) {
        state.isTheme = true;
        state.themeNo = "1";
      } else if (state.themeNo === "1" && state.isTheme) {
        state.themeNo = "";
        state.isTheme = false;
      }
    },
  },
});
