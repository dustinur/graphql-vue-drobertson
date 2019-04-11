import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'


Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
