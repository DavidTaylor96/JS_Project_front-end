<template>
    <article>
       <div class="data-wrap" v-if="data" >
            <h2>Transport</h2>
            <p v-if="data.car">Car: {{data.car}} miles - Carbon Emissions: {{carTotal}} </p>
            <p v-if="data.train">Train: {{data.train }} miles - Carbon Emissions: {{trainTotal}}</p>
            <p v-if="data.bus">Bus: {{data.bus}} miles - Carbon Emissions: {{busTotal}}</p>
            <p v-if="data.plane">Plane: {{data.plane}} miles - Carbon Emissions: {{planeTotal}}</p>
            <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>
            <button type="button" class="update-button" v-on:click="updateUserData">Update User Data</button>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Food</h2>
            <p v-if="data.highMeat">High Meat - Carbon Emissions: {{data.highMeat}}</p>
            <p v-if="data.lowMeat">Low Meat - Carbon Emissions: {{data.lowMeat}}</p>
            <p v-if="data.mediumMeat">Medium Meat - Carbon Emissions: {{data.mediumMeat}}</p>
            <p v-if="data.pescatarian">Pescatarian - Carbon Emissions: {{data.pescatarian}}</p>
            <p v-if="data.vegetarian">Vegetarian - Carbon Emissions: {{data.vegetarian}}</p>
            <p v-if="data.vegan">Vegan - Carbon Emissions: {{data.vegan}}</p>
            <button type="button" class="delete-button" v-on:click="deleteUserData">Delete User Data</button>
            <button type="button" class="update-button" v-on:click="updateUserData">Update User Data</button>
        </div>

        <div class="data-wrap" v-if="data">
            <h2>Energy Usage</h2>
            <p v-if="data.electricity"> Electricity Used: {{data.electricity}} kWh - Carbon Emissions: {{electricityTotal}}</p>
            <p v-if="data.gas"> Gas Used: {{data.gas}} kWh - Carbon Emissions: {{gasTotal}}</p>
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
    props: ['data', 'factor'],    
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
    computed: {
        carTotal(){
            let total = this.data.car * this.factor.transport.car
            if (this.data.car){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
        },
        trainTotal(){
            let total = this.data.train * this.factor.transport.train
            if (this.data.train){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
        },
        busTotal(){
            let total = this.data.bus * this.factor.transport.bus
            if (this.data.bus){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
        },
        planeTotal(){
            let total = this.data.plane * this.factor.transport.plane
            if (this.data.plane){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
        },
        electricityTotal(){
            let total = this.data.electricity * this.factor.energy.electricity
            if (this.data.electricity){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
        },
         gasTotal(){
            let total = this.data.gas * this.factor.energy.gas
            if (this.data.gas){
                return `${total}kg`}else{
                    return "No Data Entered"
                }
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