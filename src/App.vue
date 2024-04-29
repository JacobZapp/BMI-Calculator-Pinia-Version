<script setup>
//Importing so things can talk to each other
 import BodyMassIndex from "./components/BodyMassIndex.vue";
 import {ref, computed} from 'vue'
 import {useStore} from "./store/store.js";

 const BMIStore = useStore()
const finalBmi = useStore(calculatedBMI)


</script>


<template>
  <h1> Body Mass Index Calculator</h1>

  <BodyMassIndex v-on:stats-entered="calculatedBMI"></BodyMassIndex>


</template>


<style scoped>



</style>