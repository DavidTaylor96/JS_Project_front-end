import Vue from 'vue'
import App from './App.vue'
import DoughnutChart from './DoughnutChart.vue'

Vue.config.productionTip = false

export default DoughnutChart

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
