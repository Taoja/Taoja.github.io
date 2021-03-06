import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import stores from './store'
import '@/common/css/index.css'
import 'vuti/common/css/iconfont.css'
import {plugins, tButton, tPopup, tDialog, tToast, tPicker, tGrid, tCarousel, tNotice, tRow, tActionsheet, tMask, tScroll, tCell, tCellInput, tSwitch, tGroup, tPage, tHeader, tSort, tDatepicker, tGestures, tKeyboard, tSearch, tDate} from 'vuti/src/index'
import example from '@/components/window.vue'
Vue.component('tButton', tButton)
Vue.component('tPopup', tPopup)
Vue.component('tDialog', tDialog)
Vue.component('tToast', tToast)
Vue.component('tPicker', tPicker)
Vue.component('tGrid', tGrid)
Vue.component('tCarousel', tCarousel)
Vue.component('tNotice', tNotice)
Vue.component('tRow', tRow)
Vue.component('tActionsheet', tActionsheet)
Vue.component('tMask', tMask)
Vue.component('tScroll', tScroll)
Vue.component('tCell', tCell)
Vue.component('tCellInput', tCellInput)
Vue.component('tSwitch', tSwitch)
Vue.component('tGroup', tGroup)
Vue.component('tPage', tPage)
Vue.component('tSort', tSort)
Vue.component('tHeader', tHeader)
Vue.component('tDatepicker', tDatepicker)
Vue.component('tGestures', tGestures)
Vue.component('tKeyboard', tKeyboard)
Vue.component('tSearch', tSearch)
Vue.component('tDate', tDate)
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
