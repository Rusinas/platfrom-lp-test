import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
import moment from 'moment'


Vue.use(VueChatScroll)
Vue.prototype.$moment = moment 


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
