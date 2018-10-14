import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import { routes } from  './routes.js'
import { store } from './store/store'

Vue.use(VueRouter, VueResource);

const router = new VueRouter({
  routes,
  store,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
