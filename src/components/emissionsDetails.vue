<template>
    <div>
        <div>
            <h2>Transport</h2>
            <p>{{userData.car}}</p>
            <p>{{userData.train}}</p>
            <p>{{userData.bus}}</p>
            <p>{{userData.plane}}</p>
        </div>

        <div>
            <h2>Food</h2>
            <p>{{userData.highMeat}}</p>
            <p>{{userData.mediumMeat}}</p>
            <p>{{userData.lowMeat}}</p>
            <p>{{userData.pescatarian}}</p>
            <p>{{userData.vegetarian}}</p>
            <p>{{userData.vegan}}</p>
        </div>

        <div>
            <h2>Energy Usage</h2>
            <p>{{userData.gas}}</p>
            <p>{{userData.oil}}</p>
            <p>{{userData.electricity}}</p>
        </div>

        <button v-on:click="deleteUserData">Delete User Data</button>
        <button type="button" v-on:click="deleteUserData">Delete User Data</button>

        <button v-on:click="updateUserData">Update User Data</button>
        <button type="button" v-on:click="updateUserData">Update User Data></button>
    </div>
</template>

<script>

import{eventBus} from '@/main.js'
import emissionGrid from '@/components/emissionGrid.vue'

export default {
    name: 'emission-details',
    props: [''],
    methods: {
        deleteUserData() {
            userData.deleteUserData(this.userData._id)
            .then(() => eventBus.$emit('userData-deleted', this.userData._id))
        },
        updateUserData() {
            userData.updateUserData(this.userData._id)
            .then(() => eventBus.$emit('userData-updated', this.userData._id))
        }
    }
}
</script>

<style scoped>

</style>