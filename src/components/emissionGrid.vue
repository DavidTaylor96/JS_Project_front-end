<template>
  <article>
      <emissions-details></emissions-details>
  </article>
</template>

<script>
import {eventBus} from '@/main.js'
import emissionsDetails from './emissionsDetails.vue'
import userData from '@/services/userData'

export default {
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