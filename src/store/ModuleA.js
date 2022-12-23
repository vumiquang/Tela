export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => state.count,
  },
  mutations: {
    SET_COUNT(state, payload) {
      state.count = payload;
    },
  },
  actions: {
    setCount({ commit }, payload) {
      commit("SET_COUNT", payload);
    },
  },
};
