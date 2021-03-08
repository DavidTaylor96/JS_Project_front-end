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
        :timingFunc="timingFunc">
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
 
export default {
  data () {
    return {
      co2Emitted : 10,
      maxCo2Produced: 22,
      startColor: "lightgreen",
      stopColor: "green",
      innerStrokeColor: "lightgray",
      animateSpeed: 1000,
      timingFunc: "liner"
    }
  },
  props: [],
  methods:{
    progress(progress){
      if (progress > 22) {
        return this.startColor = "red"
      }
    }
  },
  components: {
    RadialProgressBar
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