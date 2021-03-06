import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/application.css'

// vue-socket.io
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'

// const getToken = () => localStorage.getItem('token')

Vue.config.productionTip = false

// const options = { extraHeaders: { Authorization: `Bearer ${getToken()}` }, autoConnect: false, path: '/api/chat/' }


// Vue.use(new VueSocketIO({
//   debug: false,
//   connection:SocketIO('https://twitter-api-for-2021.herokuapp.com',options),
//   vuex: {
//     store

//   }
// }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
