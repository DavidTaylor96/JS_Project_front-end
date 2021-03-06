import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD


Vue.config.productionTip = false


=======

Vue.config.productionTip = false

>>>>>>> 1144870418737b943cdbb34271e67275105901c4

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
