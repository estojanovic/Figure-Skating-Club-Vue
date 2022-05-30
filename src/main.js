import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import VueSocketIO from 'vue-socket.io';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//gde nam je dist?

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// Vue.use(new VueSocketIO({//podesavanja za server
//   debug: false,
//   connection: 'ws://127.0.0.1:8000',//gde se nalazi back-end socket server
//   vuex: {
//     store,
//     actionPrefix: 'socket_',
//   }
// }));

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')










