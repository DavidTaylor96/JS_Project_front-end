<template>
  <div class="circle">
    <div class="circle-text-body">
      <p class="Emissions-precent"></p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
const $ = typeof window !== 'undefined' ?  require('jquery-easing') : null;
export default {
  props : {
    co2Emitted: {
        type: Number,
        required: true,
        default : 0.25
    },
    scale: {
      type: Number,
      required: true,
      default: 100
    },
    size: {
        type: Number,
        required: false,
        default : 150
    },
    insertMode:{
      type : String,
    },
    showPercent:{
      type : Boolean,
      default : true
    },
    showEmissions:{
      type : Boolean,
      default : true
    },
  },
  mounted(){
    require('jquery-circle-progress');
    let vm = this;
    $(vm.$el)
    .on('circle-inited', function(event){
      renderCircleBody(this, (vm.co2Emitted/vm.scale));
      vm.$emit('vue-circle-init', event);
    })
    .circleProgress({
      value: this.convertedProgress(vm.co2Emitted),
      size: vm.size,
      fill: vm.fill,
      emptyFill: vm.emptyFill,
      insertMode: vm.insertMode,
    })
    function renderCircleBody(self, value){
      if (!vm.showEmissions){
        return
      }else{
        (vm.showEmissions && vm.showPercent) 
        $(self).find('p.Emissions-precent').html(Math.floor(value*vm.scale)+"%");
      }
    }
  },
  methods:{
    convertedProgress(co2Emitted) {
      return co2Emitted/this.scale;
    },
  },
}
</script>

<style scoped>
.circle {
  position: relative;
  display: inline-block;
}
.circle-text-body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>