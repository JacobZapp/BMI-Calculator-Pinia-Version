<script setup>
  import {ref} from 'vue'
 import {useStore} from "../store/store.js";
 import {storeToRefs} from "pinia";

const {height, weight} = storeToRefs(useStore)

</script>


<template>

<div id="BMI">

  <h2> Enter your Height and Weight</h2>

  <label> Height in Meters: </label>
  <input v-model="height" type="text">

  <br>

  <label> Weight in Kilograms: </label>
  <input v-model="weight" type="text">

  <br>



</div>

</template>


<style scoped>



</style>