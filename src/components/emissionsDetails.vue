<template>
    <div>
       <!-- <div class="data-wrap">
            <h2>Transport</h2>
            <p>Your Input:{{userData.car}}miles - Carbon Emissions: {{this.carCalc}}kg</p>
            <p>{{userData.train}}</p>
            <p>{{userData.bus}}</p>
            <p>{{userData.plane}}</p>
        </div>

        <div class="data-wrap">
            <h2>Food</h2>
            <p>{{userData.highMeat}}</p>
            <p>{{userData.mediumMeat}}</p>
            <p>{{userData.lowMeat}}</p>
            <p>{{userData.pescatarian}}</p>
            <p>{{userData.vegetarian}}</p>
            <p>{{userData.vegan}}</p>
        </div>

        <div class="data-wrap">
            <h2>Energy Usage</h2>
            <p>{{userData.gas}}</p>
            <p>{{userData.oil}}</p>
            <p>{{userData.electricity}}</p>
        </div>

        <button v-on:click="deleteUserData">Delete User Data</button>
        <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>

        <button v-on:click="updateUserData">Update User Data</button>
        <button type="button" class="update-button" v-on:click="updateUserData">Update User Data></button>-->
    </div>
</template>

<script>

import{eventBus} from '@/main.js'
import emissionGrid from '@/components/emissionGrid.vue'
import userData from '@/services/userData'
import emissionsFactors from '@/services/emissionsDataServices'

export default {
    name: 'emission-details',
    props: ['data'],    
    methods: {
        deleteUserData() {
            userData.deleteUserData(this.userData._id)
            .then(() => eventBus.$emit('userData-deleted', this.userData._id))
        },
        updateUserData() {
            userData.updateUserData(this.userData._id)
            .then(() => eventBus.$emit('userData-updated', this.userData._id))
        }
    },
    computed: {
        carTotal(){
            let total = this.data.car * 10
            return total
            console.log(total)
        },
    },
    components: { 
      'emission-factors': emissionsFactors,
      'user-data': userData
      },
}
</script>

<style scoped>

.delete-button {
    background: yellow; 
}

.update-button {
    background: yellow;
}

.data-wrap {
    border: 2px solid black;
}

</style>