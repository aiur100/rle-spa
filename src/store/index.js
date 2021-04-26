import { createStore } from 'vuex'
const STORE_KEY = "app-state";

export default createStore({
  state: {
    user: null
  },
  mutations: {
    PERSIST_STATE(state){
      localStorage.setItem(STORE_KEY,JSON.stringify(state))
    },
    ADD_USER(state, user) {
      state.user = user;
    },
    START_STATE(state){
      const data = JSON.parse(localStorage.getItem(STORE_KEY));
      state.user = data?.user;
    },
    CLEAR_USER(state){
      state.user = null;
    }
  },
  getters: {
    curUser: state => {
      return state;
    }
  },
  actions: {
    loginUser({ commit }, user) {
      commit('ADD_USER', user);
      commit('PERSIST_STATE');
    },
    logoutUser({ commit }){
      commit('CLEAR_USER');
      commit('PERSIST_STATE');
    }
  },
  modules: {
  }
})
