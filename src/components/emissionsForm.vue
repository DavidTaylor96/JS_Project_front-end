<template lang="html">
    <article>
        <section class="transport-form">
            <h2>Transport</h2>
            <p>Please enter the distance traveled in miles</p>
            <form class="transport" v-on:submit="addTransportData" method="post">
                <label for="car">Car:</label>
                <input type="number" id="car" v-model.number="carInput"/>
                <label for="train">Train:</label>
                <input type="number" id="train" v-model.number="trainInput"/>
                <label for="bus">Bus:</label>
                <input type="number" id="bus" v-model.number="busInput"/>
                <label for="plane">Plane:</label>
                <input type="number" id="plane" v-model.number="planeInput"/> 

                <input type="submit" value="Submit Transport Details" id="save" />     
            </form>
        </section>
        <!-- <section class="diet-form">
            <h2>Diet</h2>
            <form class="diet" v-on:submit="addDietData" method="post">
                <label for="diet-select"> Select a Diet Type:</label>

                <select name="diet-select" id="diet-select">
                    <option value="highMeat">High Meat</option>
                    <option value="mediumMeat">Medium Meat</option>
                    <option value="lowMeat">Low Meat</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>
        </section>
        <section class="energy-form">
            <h2>Energy Usage</h2>
            <form class="energy" v-on:submit="addTransportData" method="post">
                <label for="electricity">Electricity</label>
                <input type="number" id="electricity" v-model.number="electricity-input"/>

                <label for="gas">Gas</label>
                <input type="number" id="gas" v-model.number="gas-input"/>

                <label for="oil">Oil</label>
                <input type="number" id="oil" v-model.number="oil-input"/>

                <input type="submit" value="Submit Energy Values" id="save" />
            </form>
        </section> -->

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
            .then(res => eventBus.$emit('transport-emissions', res))
        }
    },

}
</script>

<style>

</style>