import Vue from "vue";
import Vuex from "vuex";

import Auth from "./store/Auth";
import Products from "./store/Products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Products
  },
  state: {},
  mutations: {},
  actions: {}
});
