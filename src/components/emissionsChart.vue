<template>
  <div id="app">
      <vue-circle
        ref="myprogress"
        :co2Emitted="userData"
        :size="150"
        :reverse="false"
        :fill="fill"
        :scale="100"
        empty-fill="grey"
        :start-angle="0"
        insert-mode="append"
        :animation="{ duration: 1200}"
        :thickness="10"
        @vue-circle-progress="progress"
        >
        <p style="margin-top:0;font-size:12px;">Co2 Emittied</p>
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
        userData:50
      }
    },
    methods:{
      progress(co2Produced){
        console.log(co2Produced);
        if (co2Produced > 110) {
          this.$refs.myprogress.updateFill('red');
        }
      }
    },
  }
</script>
<style scoped>

</style>