<template>
  <div id="app">
    <emissions-form></emissions-form>
    <emissions-chart></emissions-chart>
    
  </div>
</template>

<script>
import emissionsForm from '@/components/emissionsForm.vue';
import emissionGrid from '@/components/emissionGrid.vue';


export default {
  name: 'App',
  components: {
    'emissions-form' : emissionsForm,
    'emissons-chart' : emissionGrid
  
  }
}
</script>

<style>

</style>
