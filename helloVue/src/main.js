import Vue from 'vue'
import App from './App.vue'
import Routes from './routers'
// import router from './routers'
new Vue({
  el: '#app',
    routes,
  render: h => h(App)
})
