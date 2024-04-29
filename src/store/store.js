// improting ability to use pinia in stuff
import {defineStore} from 'pinia'
import {ref, computed} from 'vue'


export const useStore = defineStore('BMIDataStore', () => {


    const height = ref(0)
    const weight = ref(0)

    const calculatedBMI = computed(() => {
        const bmi = weight / (height * height)
        return bmi
    })





    return {
        // TODO reactive data
        height,
        weight,

        // TODO functions

        // TODO computed properties
        calculatedBMI

    }

})


