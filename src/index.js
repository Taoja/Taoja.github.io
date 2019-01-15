import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import stores from './store'
import '@/common/css/index.css'
import {plugins, tButton, tPopup, tDialog} from 'vuti'
import example from '@/components/window.vue'
Vue.component('tButton', tButton)
Vue.component('tPopup', tPopup)
Vue.component('tDialog', tDialog)
Vue.component('example', example)
Vue.use(Vuex)
Vue.use(plugins)
const store = new Vuex.Store(stores)

const router = new VueRouter({
  routes
})

window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  router,
  components: {App}
})
