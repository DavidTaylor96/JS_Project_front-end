<!---<template>
  <div>
    <h2>This will be the grid/pie chart</h2>
    <GChart
     type="PieChart"
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
        ['Co2 used', 'Pre-Day'],
        ['Transport', 20],
        ['Energy', 60],
        ['Food', 40]
      ],
      chartOptions:{
        chart: {
          width: 800,
          height: 240,
          title: 'Emissions User Data',
        },
      }
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

</style> -->

<template>
  <radial-progress-bar 
     :diameter="200"
     :transport-traveled="Transport"
     :energy-used="Energy"
     :food-eaten="Food">
   <p>Transport: {{ Transport }}kg</p>
   <p>Energy: {{ Energy }}kg</p>
   <p>Food: {{ Food }}kg</p>
  </radial-progress-bar>
</template>
 
<script>
import RadialProgressBar from 'vue-radial-progress'
 
export default {
  data () {
    return {
      Transport: 10,
      Energy: 5,
      Food: 0.2,
    }
  },
 
  components: {
    RadialProgressBar
  }
}
</script>

