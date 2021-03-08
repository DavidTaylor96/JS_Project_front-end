<template>
    <article>
       <div class="data-wrap" v-if="data">
            <h2>Transport</h2>
            <p>Your Input: {{data.car}} miles - Carbon Emissions: </p>
            <p>Your Input: {{data.train}} miles - Carbon Emissions:</p>
            <p>Your Input: {{data.bus}} miles - Carbon Emissions:</p>
            <p>Your Input: {{data.plane}} miles - Carbon Emissions:</p>
            <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>
            <button type="button" class="update-button" v-on:click="updateUserData">Update User Data</button>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Food</h2>
            <p>Diet Choice: {{data.highMeat}} - Carbon Emissions:</p>
            <p>Diet Choice: {{data.mediumMeat}} - Carbon Emissions:</p>
            <p>Diet Choice: {{data.lowMeat}} - Carbon Emissions:</p>
            <p>Diet Choice: {{data.pescatarian}} - Carbon Emissions:</p>
            <p>Diet Choice: {{data.vegetarian}} - Carbon Emissions:</p>
            <p>Diet Choice: {{data.vegan}}</p>
            <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>
            <button type="button" class="update-button" v-on:click="updateUserData">Update User Data</button>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Energy Usage</h2>
            <p> Energy Useage: {{data.gas}}kWh - Carbon Emissions:</p>
            <p> Energy Useage: {{data.oil}}kWh - Carbon Emissions:</p>
            <p> Energy Useage: {{data.electricity}}Litres - Carbon Emissions:</p>
            <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>
            <button type="button" class="update-button" v-on:click="updateUserData">Update User Data</button>
        </div>    
    </article>
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