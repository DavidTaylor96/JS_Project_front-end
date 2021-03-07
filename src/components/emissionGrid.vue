<template>
  <article>
      <emission-details :data="data"></emission-details>
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
          data: []

        };
    },
  components: { 
      'emission-details' : emissionsDetails ,
      'emission-factors': emissionsFactors,
      'user-data': userData

      },
    mounted(){
      emissionsFactors.getEmissionFactor()
        .then(emissionsFactors => this.data = emissionsFactors)
    }

}
</script>

<style>

</style>