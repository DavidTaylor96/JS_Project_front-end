<template lang="html">
    <article>

         <section>
            <button class="button" v-if="!transport.status" v-on:click="handleClickTransport">Transport</button>
            <div class="transport-form base-form" v-if="transport.status">

            <p id="small-heading">Distance travelled in miles</p>
            <form class="transport" v-on:submit="addTransportData" method="post">
                <label for="car">Car</label>
                <input type="number" id="car" class="inputs" v-model.number="transport.car"/>
                <label for="train">Train</label>
                <input type="number" id="train" class="inputs" v-model.number="transport.train"/>
                <label for="bus">Bus</label>
                <input type="number" id="bus" class="inputs" v-model.number="transport.bus"/>
                <label for="plane">Plane</label>
                <input type="number" id="plane" class="inputs" v-model.number="transport.plane"/> 

                <input type="submit" value="Submit Transport" class="transport-input-button" id="save"/>     
            </form>
            </div>
         </section>

         <section>
            <button class="button" v-if="!diet.status" v-on:click="handleClickDiet">Diet</button>
            <div class="diet-form base-form" v-if="diet.status">
        
            <form class="diet" v-on:submit="addDietData" method="post">
                <label for="diet-select"> Select a Diet Type</label>

                <select name="diet-select" id="diet-select" class="inputs-diet" v-model="selectedDiet">
                    <option v-for="(carbon,label,index) in diets" :key="index" :value="{[label]:carbon}"> {{label}} </option>
                </select>
          
                <input type="submit" value="Submit Diet" class="diet-input-button" id="save" />
                
            </form>
            </div>
         </section>

         <section>
           <button class="button" v-if="!energy.status" v-on:click="handleClickEnergy()">Energy</button>
           <div class="energy-form base-form" v-if="energy.status">

            <form class="energy" v-on:submit="addEnergyData" method="post">
                <label for="electricity">Electricity</label>
                <input type="number" id="electricity"  class="inputs" v-model.number="electricity"/>
             
                <label for="gas">Gas</label>
                <input type="number" id="gas" class="inputs" v-model.number="gas"/>

                <label for="oil">Oil</label>
                <input type="number" id="oil" class="inputs" v-model.number="oil"/>

                <input  type="submit" value="Submit Energy" class="energy-input-button" id="save" />
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
            diets: [],
            selectedDiet: null,

            transport: {
                car: 0,
                train: 0,
                bus: 0,
                plane: 0,
                status: false
                },

            energy: {
                electricity: 0,
                gas: 0,
                oil: 0,
                status: false
            },

            diet: {
               
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
                car: 0,
                train: 0,
                bus: 0,
                plane: 0,
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
                electricity: 0,
                gas: 0,
                status: false
            }
        },
        addDietData(evt){
            evt.preventDefault()
            userData.postUserData(this.selectedDiet)
            .then(res => eventBus.$emit('user-emissions', res))
            this.diet = {
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

        getDietEmissionFactors() {
            fetch("http://localhost:3000/api/emission/")
            .then(res => res.json())
            .then(data => {
                this.diets = data[0].food
            })
        }


        
    },
    mounted() {
        this.getDietEmissionFactors();
        
    },
    
}
</script>

<style >

.transport-form{
    padding: 10px;
    margin: 2 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    background-color: whitesmoke ;
    border-radius: 10px;
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
    border: 1px gainsboro solid;
    padding: 7px;
    border-radius: 7px;
}

.inputs-diet{
    border: 1px gainsboro solid;
    padding: 7px 30px;
    border-radius: 7px;
}


.diet-form{
    padding: 20px;
    font-size: 18px;
    text-align: center;
    background-color: whitesmoke ;
    box-shadow: 0 0 5px rgb(22, 98, 60);
    border-radius: 10px;
    margin: 10px auto;
       
}
.diet {
    margin: 2 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
.energy-form{
    padding: 15px;
    text-align: center;
    background-color: whitesmoke ;
    border-radius: 10px;
}
.energy{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}

.energy-input-button{
   margin: 5px 5px;
   border: 1px solid #ccc;
   border-radius: 8px;
   color: #fff;
   padding: 10px 35px;
   background-color: #246C5A;

}
.transport-input-button{
   margin: 5px 5px;
   border: 1px solid #ccc;
   border-radius: 8px;
   color: #fff;
   padding: 10px 30px;
   background-color: #246C5A;

}

.diet-input-button{
   margin: 5px 5px;
   border: 1px solid #ccc;
   border-radius: 8px;
   color: #fff;
   padding: 10px 45px;
   background-color: #246C5A;

}
 .button{
   font-size: 15px;
   margin-top: 2px;
   border: none;
   border-radius: 7px;
   color: #fff;
   padding: 7px 10px;
   background-color: #4CAF50;
 }

 .button:hover{
     background-color: #45a049;
 }
 #small-heading{
     font-weight: bold;
     color: black;
 }
</style>