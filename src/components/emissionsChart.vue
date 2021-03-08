<template>
  <div id="app">
      <vue-circle
        ref="co2produced"
        :co2Emitted="userData"
        :size="150"
        :scale="654"
        insert-mode="append"
        @vue-circle-progress="progress"
        >
        <p id="tag" >Co2 Emittied</p>
      </vue-circle>
  </div>
</template>

<script>
 import VueCircle from '@/components/emissionsProgress.vue'
  export default {
    components: {
      VueCircle
    },
    data(){
      return{
        fill : { gradient: ["green"] },
        userData: 200
      }
    },
    methods:{
      progress(progress){
        if (progress > 654) {
          this.$refs.co2produced.updateFill("red");
        }
      }
    },
  }
</script>
<style scoped>
#tag{
  margin: 0;
  font-size: 13px;
}

</style>