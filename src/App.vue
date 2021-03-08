<template>
  <div id="app">
    <h1 id="header">Try-Atomic</h1>
     <emissions-chart id="chart"></emissions-chart>
    <emissions-form></emissions-form>
    <emissions-grid></emissions-grid>
    
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
    'emissions-grid' : emissionGrid,
    'emissions-chart': emissionsChart
  
  }
}
</script>

<style>
#header{
  text-align: center;
  font-weight: 100;
}

#chart{
  text-align: center;
}

</style>
