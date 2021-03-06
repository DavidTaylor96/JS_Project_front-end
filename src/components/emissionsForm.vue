<template lang="html">
    <article>
        <section class="transport-form">
            <h2>Transport</h2>
            <form class="Transport" v-on:submit="addTransportData" method="post">
                <label for="car">Car:</label>
                <input type="number" id="car"/>
                <label for="train">Train:</label>
                <input type="number" id="train"/>
                <label for="bus">Bus:</label>
                <input type="number" id="bus"/>
                <label for="plane">Plane:</label>
                <input type="number" id="plane"/> 

                <input type="submit" value="Submit Transport Details" id="save" />     
            </form>
        </section>
        <section>
            <h2>Diet</h2>
            <form class="Diet" v-on:change="addDietData" method="post">
                <label for="diet"> Select a Diet Type:</label>

                <select name="diet" id="diet">
                    <option value="highMeat">High Meat</option>
                    <option value="mediumMeat">Medium Meat</option>
                    <option value="lowMeat">Low Meat</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
        </section>

    </article>
  
</template>

<script>
export default {

}
</script>

<style>

</style>