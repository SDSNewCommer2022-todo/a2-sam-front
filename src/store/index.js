import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputName: ''
  },
  getters: {
  },
  mutations: {
    saveName(state, name){
      state.inputName = name;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:
    [createPersistedState()],
});
