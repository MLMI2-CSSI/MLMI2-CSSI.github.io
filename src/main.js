import 'mdb-vue-ui-kit/css/mdb.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

 

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// https://icons.getbootstrap.com/
Vue.use(IconsPlugin)
// for code snippets been trying to get this to work: https://www.npmjs.com/package/vue-highlight.js
//but having a dependency issue with highlight.js



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
