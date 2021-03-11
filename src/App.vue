<template>
  <div id="app">
    <h1 id="header">try-atomic</h1>
    <p id="max-usage">Max Per Month 654kg</p>
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
  
  },
}
</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(#126563, #084f69, #084f69);
}
#max-usage{
  padding-bottom: 4px;
  text-align: center;
  font-weight: 100;
  color: #fff;
  margin-top: 0;
  margin-bottom: 30px;
  padding: 5px;
  padding-bottom: 10px;
  border-bottom: 1px slategrey solid 
  }

#header{
  text-align: center;
  font-weight: 700;
  color: #fff;
  margin-top: 5px;
  margin-bottom: 0px;
  }

#chart{
  text-align: center;
}

</style>
