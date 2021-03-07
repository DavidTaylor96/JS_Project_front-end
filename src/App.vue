<template>
  <div id="app">
     <emissions-chart></emissions-chart>
    <emissions-form></emissions-form>
    
  </div>
</template>

<script>
import emissionsForm from '@/components/emissionsForm.vue';
import emissionGrid from '@/components/emissionGrid.vue';
import emissionsChart from '@/components/emissionsChart.vue'


export default {
  name: 'App',
  components: {
    'emissions-form' : emissionsForm,
    'emissons-grid' : emissionGrid,
    'emissions-chart': emissionsChart
  
  }
}
</script>

<style>

</style>
