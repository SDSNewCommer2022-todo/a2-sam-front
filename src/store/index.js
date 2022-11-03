import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputContent: '',
    todoList: []
  },
  getters: {
    getOwner(state){
      return state.inputContent;
    },
    getCompletedList(state){
      return state.todoList.filter(task => task.status === "COMPLETED")
    },
    getTotalList(state){
      return state.todoList.filter(task => task.status !== "DELETED")
    }
  },
  mutations: {
    saveContent(state, content){
      state.inputContent = content;
    },
    pushData(state, content){
      state.todoList.push(content);
    },
    addList(state, content){
      state.todoList = content;
    }

  },
  actions: {
  },
  modules: {
  },
  plugins:
    [createPersistedState()],
});
