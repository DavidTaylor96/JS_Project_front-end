<template lang="html">
    <article>
        <section class="transport-form base-form">
            <h2>Transport</h2>
            <button class="info-button"><span>Index</span></button>
            <p>Please enter the distance traveled in miles</p>
            <form class="transport" v-on:submit="addTransportData" method="post">
                <label for="car">Car</label>
                <input type="number" id="car" class="inputs" v-model.number="car"/>
                <label for="train">Train</label>
                <input type="number" id="train" class="inputs" v-model.number="train"/>
                <label for="bus">Bus</label>
                <input type="number" id="bus" class="inputs" v-model.number="bus"/>
                <label for="plane">Plane</label>
                <input type="number" id="plane" class="inputs" v-model.number="plane"/> 

                <input type="submit" value="Submit Transport" class="transport-button" id="save" />     
            </form>
        </section>

        <section class="diet-form base-form">
            <h2>Diet</h2>
            
            <form class="diet" v-on:submit="addDietData" method="post">
                <label for="diet-select"> Select a Diet Type:</label>

                <select name="diet-select" id="diet-select" class="inputs-diet">
                    <option value="highMeat" v-model="highMeat">High Meat</option>
                    <option value="mediumMeat" v-model="mediumMeat">Medium Meat</option>
                    <option value="lowMeat" v-model="lowMeat">Low Meat</option>
                    <option value="pescatarian" v-model="pescatarian">Pescatarian</option>
                    <option value="vegetarian" v-model="vegetarian">Vegetarian</option>
                    <option value="vegan" v-model="vegan">Vegan</option>
                </select>
                
                <input type="submit" value="Submit Diet" class="diet-button" id="save" />
                
            </form>
        </section>

        <section class="energy-form base-form">
           <h2>Energy Usage</h2>
            <form class="energy" v-on:submit="addEnergyData" method="post">
                <label for="electricity">Electricity:</label>
                <input type="number" id="electricity"  class="inputs" v-model.number="electricity"/>
             
                <label for="gas">Gas:</label>
                <input type="number" id="gas" class="inputs" v-model.number="gas"/>

                <label for="oil">Oil:</label>
                <input type="number" id="oil" class="inputs" v-model.number="oil"/>

                <input  type="submit" value="Submit Energy" class="energy-button" id="save" />
            </form>
        </section>

    </article>
  
</template>

<script>
import {eventBus} from '@/main.js'
import userData from '@/services/userData.js'

export default {
    name: 'emissions-form',

    data(){
        return{
            car: null,
            train: null,
            bus: null,
            plane: null,
            electricity: null,
            gas: null,
            oil: null,
            highMeat: null,
            mediumMeat: null,
            lowMeat: null,
            pescatarian: null,
            vegetarian: null,
            vegan: null
        }
    },

    methods: {
        addTransportData(evt){
            evt.preventDefault()
            const transport = {
                car: this.car,
                train: this.train,
                bus: this.bus,
                plane: this.plane
            }
            userData.postUserData(transport)
            .then(res => eventBus.$emit('user-emissions', res))
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
            userData.portUserData(diet)
            .then(res => eventBus.$emit('user-emissions', res))
        }
    },

}
</script>

<style scope>
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