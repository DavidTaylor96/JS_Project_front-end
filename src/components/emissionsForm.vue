<template lang="html">
    <article>

         <section class="transport-form base-form">
            <button v-if="!transport.status" v-on:click="handleClickTransport">Transport</button>
            <div v-if="transport.status">

            <p>Please enter the distance traveled in miles</p>
            <form class="transport" v-on:submit="addTransportData" method="post">
                <label for="car">Car</label>
                <input type="number" id="car" class="inputs" v-model.number="transport.car"/>
                <label for="train">Train</label>
                <input type="number" id="train" class="inputs" v-model.number="transport.train"/>
                <label for="bus">Bus</label>
                <input type="number" id="bus" class="inputs" v-model.number="transport.bus"/>
                <label for="plane">Plane</label>
                <input type="number" id="plane" class="inputs" v-model.number="transport.plane"/> 

                <input type="submit" value="Submit Transport" class="transport-button" id="save"/>     
            </form>
            </div>
         </section>

         <section class="diet-form base-form">
            <button v-if="!diet.status" v-on:click="handleClickDiet">Diet</button>
            <div v-if="diet.status">
        
            <form class="diet" v-on:submit="addDietData" method="post">
                <label for="diet-select"> Select a Diet Type:</label>

                <select name="diet-select" id="diet-select" class="inputs-diet" v-on:change="handleSelect(index)" v-model="selectedDiet">
                    <option value="highMeat" >High Meat</option>
                    <option value="mediumMeat" >Medium Meat</option>
                    <option value="lowMeat" >Low Meat</option>
                    <option :value="pescatarian" >Pescatarian</option>
                    <option value="vegetarian" >Vegetarian</option>
                    <option value="vegan" >Vegan</option>
                </select>
          
                <input type="submit" value="Submit Diet" class="diet-button" id="save" />
                
            </form>
            </div>
         </section>

         <section class="energy-form base-form">
           <button v-if="!energy.status" v-on:click="handleClickEnergy()">Energy Usage</button>
           <div v-if="energy.status">

            <form class="energy" v-on:submit="addEnergyData" method="post">
                <label for="electricity">Electricity:</label>
                <input type="number" id="electricity"  class="inputs" v-model.number="electricity"/>
             
                <label for="gas">Gas:</label>
                <input type="number" id="gas" class="inputs" v-model.number="gas"/>

                <label for="oil">Oil:</label>
                <input type="number" id="oil" class="inputs" v-model.number="oil"/>

                <input  type="submit" value="Submit Energy" class="energy-button" id="save" />
            </form>
            </div>
         </section>

    </article>
</template>

<script>
import {eventBus} from '@/main.js'
import userData from '@/services/userData.js'
import emissionGrid from '@/components/emissionGrid.vue'
import emissionFactor from '@/services/emissionsDataServices'

export default {
    name: 'emissions-form',
    

    data(){
        return{
            transport: {
                car: null,
                train: null,
                bus: null,
                plane: null,
                status: false
                },

            energy: {
                electricity: null,
                gas: null,
                oil: null,
                status: false
            },

            diet: {
               selectedDiet: null,
                status: false
            }
            
        }
    },

    component: {
        'emissions-grid' : emissionGrid,
    },
   
    methods: {
        addTransportData(evt){
            evt.preventDefault()
            const transport = {
                car: this.transport.car,
                train: this.transport.train,
                bus: this.transport.bus,
                plane: this.transport.plane
            }
            userData.postUserData(transport)
            .then(res => eventBus.$emit('user-emissions', res))
            this.transport = {
                car: null,
                train: null,
                bus: null,
                plane: null,
                status: false
                }
        },
        addEnergyData(evt){
            evt.preventDefault()
            const energy = {
                electricity: this.electricity,
                gas: this.gas,
                oil: this.oil
            }
            userData.postUserData(energy)
            .then(res => eventBus.$emit('user-emissions', res))
            this.energy = {
                electricity: null,
                gas: null,
                status: false
            }
        },
        addDietData(evt){
            evt.preventDefault()
            const diet = {
                highMeat: this.highMeat,
                mediumMeat: this.mediumMeat,
                lowMeat: this.lowMeat,
                pescatarian: this.pescatarian,
                vegetarian: this.vegetarian,
                vegan: this.vegan
            }
            userData.postUserData(diet)
            .then(res => eventBus.$emit('user-emissions', res))
            this.diet = {
                highMeat: null,             
                mediumMeat: null,            
                lowMeat: null,   
                pescatarian: null,
                vegetarian: null,  
                vegan: null, 
                status: false
            }
        },
        handleClickTransport: function(index) {
            this.transport.status = true
        },
        handleClickDiet: function() {
            this.diet.status = true
        },
        handleClickEnergy: function() {
            this.energy.status = true
        },
        handleSelect: function() {
        emissionFactor.getEmissionFactor(index)
            .then(res => eventBus.$emit('diet-selected', this.factor, index, res))
        },
        
    },
    
}
</script>

<style scope>

.transport-holder{
    background-color: #4CAF50;
    border: none;
    padding: 20px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    border-radius: 500px;
}

.diet-holder{
    background-color: #4CAF50;
    border: none;
    padding: 20px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    border-radius: 500px;
}

.energy-holder{
    background-color: #4CAF50;
    border: none;
    padding: 20px;
    text-align: center;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    border-radius: 500px;
}

.transport-form{
    margin: 2 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
.transport{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    
}

.transport-form > p {
    box-sizing: border-box;
    margin-bottom: 7px;
}
.transport-form > h2 {
    box-sizing: border-box;
    margin:0;
}

.inputs{
    border: 1px lightslategray inset;
    padding: 7px;
    border-radius: 5px;
}

.inputs-diet{
    border: 1px lightslategray inset;
    padding: 7px 30px;
    border-radius: 5px;
}

#save{
    margin: 7px auto;
    background-color:#4CAF50;
    border: 1px lightslategray solid;
    border-radius: 5px;
    color: #fff;
}

.transport-button{
  padding: 7px 30px; 
}

.diet-button{
    padding: 7px 45px;
}

.energy-button{
    padding: 7px 35px;
}

.diet-form{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: center;
       
}
.diet {
    margin: 2 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
.energy-form{
    text-align: center;
}
.energy{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}

.info-button {
    display: block;
    border-color: yellowgreen;
    border-width: thin;
    border-radius: 25px;

    align-items: center;
    margin: auto;
    height: 3vh;
    width: 6vh;

}
.info-button:hover {
    display: block;
    background-color: yellowgreen;
 }



</style>