<template>
    <article class="wrapper">
       <div class="data-wrap" v-if="data" >
            <h4 class="detail-text">Transport</h4>
            <button type="button" class="delete-button" v-on:click="deleteUserData">&#9587;</button>
            <p v-if="data.car" class="display-data"><i id="icon" class="fa fa-car"></i> {{data.car}} miles <span class="total">{{carTotal}}kg</span></p>
            <p v-if="data.car" class="emissions">Co2</p>
            <p v-if="data.train" class="display-data"><i id="icon" class="fa fa-subway"></i> {{data.train }} miles <span class="total">{{trainTotal}}kg</span></p>
            <p class="emissions" v-if="data.train">Co2</p>
            <p v-if="data.bus" class="display-data"><i id="icon" class="fa fa-bus"></i> {{data.bus}} miles <span class="total">{{busTotal}}kg</span></p>
            <p class="emissions" v-if="data.bus">Co2</p>
            <p v-if="data.plane" class="display-data"><i id="icon" class="fa fa-plane"></i> {{data.plane}} miles <span class="total">{{planeTotal}}kg</span></p>
            <p class="emissions" v-if="data.plane">Co2</p>
            <button type="button" class="update-button" v-on:click="updateUserData"><i class="fa fa-edit"></i>Update</button>
        </div>
        <div class="data-wrap" v-if="data">
            <h4 class="detail-text">Food</h4>
            <button type="button" class="delete-button" v-on:click="deleteUserData">&#9587;</button>
            <p v-if="data.highMeat" class="display-data"><i id="icon" class="fa fa-hamburger"></i> High Meat <span class="total">{{factor.food.highMeat}}kg</span></p>
            <p v-if="data.highMeat" class="emissions">Co2</p>
            <p v-if="data.lowMeat" class="display-data"><i id="icon" class="fa fa-bacon"></i> Low Meat <span class="total">{{factor.food.lowMeat}}kg</span></p>
            <p v-if="data.lowMeat" class="emissions">Co2</p>
            <p v-if="data.mediumMeat" class="display-data"><i id="icon" class="fa fa-drumstick-bite"></i> Medium Meat <span class="total">{{factor.food.mediumMeat}}kg</span></p>
            <p v-if="data.mediumMeat" class="emissions">Co2</p>
            <p v-if="data.pescatarian" class="display-data"><i id="icon" class="fa fa-fish"></i> Pescatarian <span class="total">{{factor.food.pescatarian}}kg</span></p>
            <p v-if="data.pescatarian" class="emissions">Co2</p>
            <p v-if="data.vegetarian" class="display-data">Vegetarian <span class="total">{{factor.food.vegetarian}}kg</span></p>
            <p v-if="data.vegetarian" class="emissions">Co2</p>
            <p v-if="data.vegan" class="display-data"><i id="icon" class="fa fa-apple-alt"></i> Vegan <span class="total">{{factor.food.vegan}}kg</span></p>
            <p v-if="data.vegan" class="emissions">Co2</p>
            <button type="button" class="update-button" v-on:click="updateUserData"><i class="fa fa-edit">Update</i></button>
        </div>

        <div class="data-wrap" v-if="data">
            <h4 class="detail-text">Energy Usage</h4>
            <button type="button" class="delete-button" v-on:click="deleteUserData">&#9587;</button>
            <p v-if="data.electricity" class="display-data"><i id="icon" class="fa fa-bolt"></i> Electricity {{data.electricity}} kWh <span class="total">{{electricityTotal}}kg</span></p>
            <p v-if="data.electricity" class="emissions">Co2</p>
            <p v-if="data.gas" class="display-data"><i id="icon" class="fa fa-burn"></i> Gas {{data.gas}} kWh <span class="total">{{gasTotal}}kg</span></p>
            <p v-if="data.gas" class="emissions">Co2</p>
            <button type="button" class="update-button" v-on:click="updateUserData"><i class="fa fa-edit">Update</i></button>
        </div>    
    </article>
</template>

<script>

import{eventBus} from '@/main.js'
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
                return `${total.toFixed(2)}`}else{
                    return "No Data Entered"
                }
        },
        trainTotal(){
            let total = this.data.train * this.factor.transport.train
            if (this.data.train){
                return `${total.toFixed(2)}`}else{
                    return "No Data Entered"
                }
        },
        busTotal(){
            let total = this.data.bus * this.factor.transport.bus
            if (this.data.bus){
                return `${total.toFixed(2)}`}else{
                    return "No Data Entered"
                }
        },
        planeTotal(){
            let total = this.data.plane * this.factor.transport.plane
            if (this.data.plane){
                return `${total.toFixed(2)}`}else{
                    return "No Data Entered"
                }
        },
        electricityTotal(){
            let total = this.data.electricity * this.factor.energy.electricity
            if (this.data.electricity){
                return `${total.toFixed(2)}`}else{
                    return "No Data Entered"
                }
        },
         gasTotal(){
            let total = this.data.gas * this.factor.energy.gas
            if (this.data.gas){
                return `${total.toFixed(2)}`}else{
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
    display: flex;
    float: right;
    background-color: #fff;
    border: none;
    margin-right: 5px;
    margin-top: 20px;
}
.delete-button:hover{
    color: red;
}

.update-button {
    text-align: center;
    border: none;
    background-color: #fff;
    padding: 7px;
    margin-left: 20px;
    margin-top: 10px
}

.data-wrap{
    border-bottom: 1px gainsboro solid
}
.wrapper{
    font-family: 'Montserrat', sans-serif;
    padding: 20px 0px;
    margin: 5px;
    border-radius: 10px;
}
.emissions{
    float: right;
    margin-right: 50px;
    font-weight: 900;
    font-size: 14px;
    line-height: 0em;
    margin-top: 0;
}
.total{
    float: right;
    margin-right: 50px;
    margin-bottom: 0px;
    font-size: 14px;
}
.display-data{
    margin-left: 20px;
    margin-bottom: 0;
}

.detail-text{
    display: inline-block;
    margin-left: 10px;
}

#icon{
    border: 1px gray solid;
    padding: 5px;
    border-radius: 5px;
    background-color: gainsboro
}

@media only screen and (max-width: 1200px){
.emissions{
   font-weight: 900;
   font-size: 14px;
   margin-left: 260px;
   line-height: 0em;
   margin-top: 0;
 }
 .wrapper{
    box-shadow: 0 0 5px gainsboro;
}
}
</style>