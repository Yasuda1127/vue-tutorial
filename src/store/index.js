// import { createStore } from "vuex";

// export const store = createStore({
//   state() {
//     return {
//       animal: "dog",
//     };
//   },
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello Vuex"
  }
})
