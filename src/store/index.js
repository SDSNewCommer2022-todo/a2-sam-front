import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputContent: ''
  },
  getters: {
  },
  mutations: {
    saveContent(state, content){
      state.inputContent = content;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:
    [createPersistedState()],
});
