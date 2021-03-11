<template>
  <div class="progress-bar" v-on:change.self="reload">
    <radial-progress-bar
        :diameter="190"
        :completedSteps="co2Emitted"
        :totalSteps="maxCo2Produced"
        :startColor="startColor"
        :stopColor="stopColor"
        :innerStrokeColor="innerStrokeColor"
        :animateSpeed="animateSpeed"
        :timingFunc="timingFunc"
        :fps="fps"
        :isClockwise="isClockwise"
        :strokeLinecap="strokeLinecap">
    <div class="co2-emitted">
      <p id="co2-inner-text">Co2</p>
      <h3 id="co2-heading">{{ co2Emitted }}kg</h3>
      <p id="inner-texts">So far this month</p>
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
      startColor: "green",
      stopColor: "lightgreen",
      innerStrokeColor: "lightgray",
      animateSpeed: 2000,
      timingFunc: "linear",
      strokeLinecap: "round",
      fps: 60,
      isClockwise: true,
      data: [],
      factors: null
    }
  },


  mounted() {
    emissionsFactors.getEmissionFactor()
        .then(emissionsFactors => this.factors = emissionsFactors[0])
        
    userData.getUserData()
      .then(userData => this.data = userData)

  },

  watch:{
   co2Emitted: function(){
     if (this.co2Emitted > 600){
       this.startColor = "red"
     }
   },
   maxCo2Produced: function(){
    if (this.co2Emitted === this.maxCo2Produced){
      this.innerStrokeColor = "red"
    }
   },
   '$route': 'fetchData'
  },
   methods:{
   appForceUpdate(){
     this.$forceUpdate()
   }
  },
  computed:{
    animationIncrements () {
      return 1000/ this.fps
    },
    totalPoints(){
      return this.animateSpeed /this.animationIncrements
    },
    factorTypes() {
      const factorClone = {...this.factors}
      delete factorClone._id

      return Object.values(factorClone).reduce((acc, factorObject) => {
        return {...acc, ...factorObject}
      }, {})
    },
    co2Emitted(){
      return Number(this.data.reduce((total, emission) => {
        return total + (this.factorTypes[emission.label] * emission.quantity)
      },0).toFixed(0))
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
#inner-texts{
  padding: 0px;
  line-height: 0.1em;
  color: #42D23F;
}

.co2-emitted{
  line-height: 0.1em;
}

#co2-heading{
  color: white;
  font-size: 25px;
}
#co2-inner-text{
  color: #42D23F
}
</style>