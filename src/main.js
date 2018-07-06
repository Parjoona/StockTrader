import Vue from 'vue'
import App from './App.vue'

// Vue Router
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

// Vuex
import store from './store/store'

// Filter
Vue.filter('currency', (value) => {
  return `$${value.toLocaleString()}`
})

// Vue Resource
import {secret} from './fakedb/secret'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = secret.adress

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
