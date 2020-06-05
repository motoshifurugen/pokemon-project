import Vue from "vue";
import App from './App.vue';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// import Quasar, * as All from 'quasar-framework'
// import 'quasar-framework/dist/quasar.mat.css'
// import 'quasar-extras/material-icons'
// import 'quasar-extras/animate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Vue.use(Quasar, {
//   components: All,
//   directives: All
// })
