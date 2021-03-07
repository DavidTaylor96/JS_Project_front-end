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

<!--<template>
  <radial-progress-bar 
     :diameter="200"
     :transport-traveled="transport"
     :energy-used="energy"
     :food-eaten="food"
     :Total="Total">
   <p v-for="(user, index) in users" :key="index">Total: {{ user.total }}kg</p>
  </radial-progress-bar>
</template>
 
<script>
import RadialProgressBar from 'vue-radial-progress'
 
export default {
  data () {
    return {
      users:[
      { total: 10 },
      ]
    }
  },
 
  components: {
    RadialProgressBar
  }
}
</script>-->

<!--<template>
   	<div class="box">
 		 <ul>
 		 	<li v-for="(user, index) in users" :key="index">
 		 		<div class="lang">{{user.lang}}</div>
 				<div class="bar">
 					<div class="progress" v-bind:style = "{'background':user.color, 'width':user.percent+''}"></div>
 		 			<span class="percent">{{user.percent}}%</span>
 				</div>
 		 	</li>
 		 </ul>
 	</div>
</template>

<script>
export default {
 			el:".box",
 			data (){
        return {
 				users:[
 				{ lang:"Food",      	percent:90,   color:"#ec407a"	},
				{ lang:"Energy", 			percent:76,   color:"#f4511e"	},
				{ lang:"Transport", 	percent:84,   color:"#512da8"	},
 			 ]
      }
 		}
}
</script>

<style>

.box{
	width: 800px;
	padding: 40px;
	margin:50px auto;
}

ul li{
	list-style-type: none;
	padding:10px;
}

.lang{
	margin:5px;
	font-size: 20px;
}

.bar{
	width: 100%;
	background:#dfdfdf;
	overflow: hidden;
	padding:5px;
}

.progress{
	float:left;
	padding:15px;
}

</style>-->
<!--<template>
  <div>
    <vue-ellipse-progress 
      :data="circles"                    
      :progress="co2prodced"
      color="blue"
      :colorFill="colorFillGradient"
      :size="180"
      :thickness="7"
      :empty-thickness="3"
      :Co2-max-value="co2Emittied"
      animation="reverse 700 400" 
      fontSize="1.5rem"
      :loading="loading"
      :no-data="no-data"
      >
      
      <span slot="Co2-max-value">/200</span>
      <p slot="legend-caption">Total</p>
    
    </vue-ellipse-progress>
  </div>
</template>

<script>
export default {
  name: 'emissions-chart',
  data() {
    return{
      co2Emittied: 125,
    }
  },
}
</script>

<style>

</style>-->

<template>
  <div id="app">
    <p>
      A Vue.js component to draw animated circular progress bars!
    </p>
      <vue-circle
        :progress="50"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        empty-fill="rgba(0, 0, 0, .1)"
        :animation-start-value="0.0"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Slot!</p>
      </vue-circle>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
  export default {
    components: {
      VueCircle
    },
    data(){
      return{
        fill : { gradient: ["red", "green", "blue"] },
      }
    },
    methods:{
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      }
    }
  }
</script>