<template>
  <article v-if="factors">
      <emission-details v-for="(data, index) in emissionData" :key="index" :data="data" :factor="factors"></emission-details>
     
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
          emissionData: [],
          factors: null
        };
    },
  components: { 
      'emission-details' : emissionsDetails ,
      'emission-factors': emissionsFactors,
      'user-data': userData

      },
    mounted(){

      emissionsFactors.getEmissionFactor()
        .then(emissionsFactors => this.factors = emissionsFactors[0])

      eventBus.$on("emission-factors", (data) => {
          this.factors = data
      })

      userData.getUserData()
        .then(result => this.emissionData = result)

      eventBus.$on("user-emissions", (data) => {
            this.emissionData.push(data)
        })

      eventBus.$on('userData-deleted', (id) => {
        let index = this.emissionData.findIndex(data => data._id === id)
        this.emissionData.splice(index, 1)
      })
    }

}
</script>

<style>

</style>