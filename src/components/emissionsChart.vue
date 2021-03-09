<template>
  <div class="progress-bar">
    <radial-progress-bar
        :diameter="170"
        :completedSteps="co2Emitted"
        :totalSteps="maxCo2Produced"
        :startColor="startColor"
        :stopColor="stopColor"
        :innerStrokeColor="innerStrokeColor"
        :animateSpeed="animateSpeed"
        :timingFunc="timingFunc"
        :fps="fps"
        :isClockwise="isClockwise">
    <div class="inner-text">
      <h3>{{ maxCo2Produced }}kg</h3>
      <p id="inner-texts">Max per day</p>
    </div>
    <div class="co2-emitted">
      <h3>{{ co2Emitted }}kg</h3>
      <p id="inner-texts">Co2 Emitted</p>
    </div>
    </radial-progress-bar>
  </div>
</template>
 
<script>
import RadialProgressBar from 'vue-radial-progress'
import emissionGrid from '@/components/emissionGrid.vue';
import emissionsDetails from './emissionsDetails.vue'
import userData from '@/services/userData'
import emissionsFactors from '@/services/emissionsDataServices'

export default {
  data () {
    return {
      maxCo2Produced: 654,
      startColor: "lightgreen",
      stopColor: "green",
      innerStrokeColor: "lightgray",
      animateSpeed: 2000,
      timingFunc: "linear",
      fps: 60,
      isClockwise: true
    }
  },

  props: ['data', 'factor'],

  mounted() {
     emissionsFactors.getEmissionFactor()
        .then(emissionsFactors => this.factors = emissionsFactors[0])

    userData.getUserData()
      .then(userData => this.data = userData[0])
  },
  watch:{
   co2Emitted: function(){
     if (this.co2Emitted > 20){
       this.startColor = "red"
     }else{
       this.startColor = "lightgreen"
     }
   },
   maxCo2Produced: function(){
    if (this.co2Emitted === this.maxCo2Produced){
      this.innerStrokeColor = "red"
    }
   }
  },
  computed:{
    animationIncrements () {
      return 1000/ this.fps
    },
    totalPoints(){
      return this.animateSpeed /this.animationIncrements
    },
    co2Emitted(){
        let total = 0
         if (this.data && this.factor){
          total = (this.data.car * this.factor.transport.car) + (this.data.bus * this.factor.bus) + (this.data.train * this.factor.train)
         }
        return Number(total.toFixed(2)) 
        },
  },
  components: {
    RadialProgressBar,
    'emissions-grid' : emissionGrid,
    'emission-details' : emissionsDetails ,
    'emission-factors': emissionsFactors,
    'user-data': userData
  }
}
</script>
<style scoped>
.progress-bar{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-size: 14px;
}
.inner-text{
  padding: 0px;
  line-height: 0.1em;
}

.co2-emitted{
  line-height: 0.1em;
}
</style>