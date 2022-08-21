import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//gde nam je dist?

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.use(new VueSocketIO({
  debug: false,
  connection: 'ws://localhost:8000',
  vuex: {
    store,  //vezuje se na store
    actionPrefix: 'socket_',  //akcije pocinju tako
  }
}));

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')










