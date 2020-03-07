import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

import VueApollo from "vue-apollo"
import apolloClient from "./vue-apollo"

Vue.config.productionTip = false

Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Articles.vue")
    }
  ]
})

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
