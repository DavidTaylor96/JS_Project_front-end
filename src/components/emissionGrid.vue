<template>
  <div>
    <h2>This will be the grid/pie chart</h2>
      <GChart
        :type="PieChart"
        :data="chartData"
        :options="chartOptions"
      />
  </div>
</template>

<script>
import EmissionsForm from './emissionsForm.vue'
import { eventBus } from '@/main.js'
import { GChart } from 'vue-google-charts'

export default {
  name: 'emissions-chart',
  components:{ GChart },
  data(){
    return {
      chartData:[
        ['transport', 'energy', 'food']
        [20, 0.2, 2.1]
      ],
      chartOptions:{
        width: 800,
        height: 240,
        title: 'Emissions User Data',
      },
    }
  },
  props:['userData'],

  // computed: {
  //   chartData: function () {
  //     if(this.userData){
  //       const chartData = [['emissions'], ...this.userData.map(mix => ([user.emissions]))]
  //       return chartData
  //     }
  //   }
  // }

}
</script>

<style>

</style>