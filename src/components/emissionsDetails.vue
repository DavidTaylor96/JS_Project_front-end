<template>
    <article class="wrapper">
        <div class="data-wrap">
            <button type="button" class="delete-button" v-on:click="deleteUserData">&#9587;</button>
            <p class="display-data"><i id="icon" :class="['fa', typeIcon]"></i> {{data.label}} {{data.quantity}} {{data.unit}} <span class="total">{{emissionTotal}}kg</span></p>
            <p class="emission">Co2</p>
        </div>
    </article>
</template>

<script>

import{eventBus} from '@/main.js'
import userData from '@/services/userData'

export default {
    name: 'emission-details',
    props: ['data', 'factor'],    
    methods: {
        deleteUserData() {
            userData.deleteUserData(this.data._id)
            .then(() => eventBus.$emit('userData-deleted', this.data._id))
        }
    },
    computed: {
        emissionTotal() {
            return (this.factorTypes[this.data.label] * this.data.quantity).toFixed(1)
        },
        typeIcon() {
            const icons = {
                'car': 'fa-car',
                'bus': 'fa-bus',
                'train': 'fa-subway',
                'plane': 'fa-plane',
                'lowMeat': 'fa-bacon',
                'mediumMeat': 'fa-drumstick-bite',
                'pescatarian': 'fa-fish',
                'highMeat': 'fa-hamburger',
                'vegan': 'fa-leaf',
                'vegetarian': 'fa-apple-alt',
                "electricity": 'fa-bolt',
                'gas': 'fa-burn'
            }
            return icons[this.data.label]
        },
        factorTypes() {
            const factorClone = {...this.factor}
            delete factorClone._id

            return Object.values(factorClone).reduce((acc, factorObject) => {
                return {...acc, ...factorObject}
            }, {})
        },
    },
}
</script>

<style scoped>

.delete-button {
    display: flex;
    float: right;
    background-color: whitesmoke;
    border: none;
    margin-right: 5px;
    margin-top: 20px;
}
.delete-button:hover{
    color: red;
}

.data-wrap{
    border-bottom: 1px gainsboro solid;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    background-color: whitesmoke;
}
.wrapper{
    font-family: 'Montserrat', sans-serif;
    padding: 0px 1px;
    margin: 0px;

}
.emissions{
    float: right;
    margin-right: 50px;
    font-size: 14px;
}
.emission{
    margin-left: 93%;
    margin-top: 0;
    color:  #236422;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 0em;
}
.total{
    float: right;
    margin-right: 13px;
    font-size: 14px;
    margin-bottom: 0;
}
.display-data{
    margin-left: 20px;
    margin-bottom: 0px;
}

.detail-text{
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 0px;
}

#icon{
    border: 1px #236422 solid;
    padding: 5px;
    border-radius: 5px;
    background-color: gainsboro
}

@media only screen and (max-width: 1000px){
/* .emissions{
   font-weight: 900;
   font-size: 14px;
   margin-left: 260px;
 } */
 .emission{
    margin-left: 83%;
    margin-top: 0;
    color:  #236422;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 0em;
}
}

@media only screen and (max-width: 500px){
 .emission{
    margin-left: 244px;
    margin-top: 0;
    color:  #236422;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    line-height: 0em;
}
}
</style>