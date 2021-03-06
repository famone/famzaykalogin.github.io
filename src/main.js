import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueTheMask from 'vue-the-mask'
import Vuelidate from 'vuelidate'
import * as firebase from 'firebase/app';




import 'swiper/css/swiper.css'

Vue.use(VueRouter) 
Vue.use(Vuelidate)
Vue.use(require('vue-cookies'))




new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
