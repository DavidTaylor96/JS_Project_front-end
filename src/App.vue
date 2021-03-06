<template>
  <div id="app">
    <emissions-form></emissions-form>
    
  </div>
</template>

<script>
import emissionsForm from '@/components/emissionsForm.vue';


export default {
  name: 'App',
  components: {
    'emissions-form' : emissionsForm
  
  }
}
</script>

<style>

</style>
