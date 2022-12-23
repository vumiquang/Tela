import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import VClickOutSide from 'v-click-outside'
import PortalVue from 'portal-vue'

Vue.use(VClickOutSide)
Vue.use(PortalVue)


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')