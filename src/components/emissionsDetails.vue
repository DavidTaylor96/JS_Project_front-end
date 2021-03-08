<template>
    <div>
       <div class="data-wrap" v-if="data">
            <h2>Transport</h2>
            <p>Your Input:{{data.car}}miles - Carbon Emissions: </p>
            <p>{{data.train}}</p>
            <p>{{data.bus}}</p>
            <p>{{data.plane}}</p>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Food</h2>
            <p>{{data.highMeat}}</p>
            <p>{{data.mediumMeat}}</p>
            <p>{{data.lowMeat}}</p>
            <p>{{data.pescatarian}}</p>
            <p>{{data.vegetarian}}</p>
            <p>{{data.vegan}}</p>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Energy Usage</h2>
            <p>{{data.gas}}</p>
            <p>{{data.oil}}</p>
            <p>{{data.electricity}}</p>
        </div>

        <button v-on:click="deleteUserData">Delete User Data</button>
        <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>

        <button v-on:click="updateUserData">Update User Data</button>
        <button type="button" class="update-button" v-on:click="updateUserData">Update User Data></button>
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
            userData.deleteUserData(this.data._id)
            .then(() => eventBus.$emit('userData-deleted', this.data._id))
        },
        updateUserData() {
            userData.updateUserData(this.data._id)
            .then(() => eventBus.$emit('userData-updated', this.data._id))
        }
    },
    // computed: {
    //     carTotal(){
    //         let total = this.data.car * 10
    //         return total
    //         console.log(total)
    //     },
    // },
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