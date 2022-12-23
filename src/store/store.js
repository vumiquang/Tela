import Vue from "vue";
import Vuex from "vuex";
import ModuleA from "./ModuleA";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ModuleA,
  },
});
