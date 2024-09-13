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
      //   const themeId = ["1", "2", "3"];
      //   let randomNumber = "";
      //   let randNumCopy = "";
      if (state.themeNo === "" && !state.isTheme) {
        state.isTheme = true;
        state.themeNo = "1";
      } else if (state.themeNo === "1" && state.isTheme) {
        state.themeNo = "";
        state.isTheme = false;
      }

      //   if (state.isTheme) {
      //     let randomNo = Math.floor(Math.random() * themeId.length).toString();
      //     randomNumber = themeId[randomNo];

      //     if (randNumCopy === randomNumber) {
      //       randomNumber = Math.floor(Math.random() * themeId.length).toString();
      //       randomNumber = themeId[randomNo];
      //       randNumCopy = themeId[randomNo];
      //     }
      //     if (randNumCopy !== randomNumber) {
      //       randNumCopy = themeId[randomNo];
      //       state.themeNo = randomNumber;
      //     }
      //   }
    },
  },
});
