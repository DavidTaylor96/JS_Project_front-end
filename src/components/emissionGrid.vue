<template>
  <article>
      <emission-details></emission-details>
  </article>
</template>

<script>
import {eventBus} from '@/main.js'
import emissionsDetails from './emissionsDetails.vue'
import userData from '@/services/userData'
import emissionsFactors from '@/services/emissionsDataServices'

export default {
  name:'emissions-grid',
    data () {
        return {

        };
    },
  components: { 
      'emission-details' : emissionsDetails 

      },

}
</script>

<style>

</style>