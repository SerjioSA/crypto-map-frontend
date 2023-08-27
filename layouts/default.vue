<script setup>
import { ref } from 'vue'

const model = ref(null)
const options = ['Batumi', 'Tbilisi', 'Kutaisi']
const mySelect = ref(null)




const toggleDropdown = () => {
  mySelect.value.togglePopup()
}


</script>

<template>
    <div class="DefaultLayout text-white bg-white h-screen">
        
    <div class="flex justify-center items-center py-10">
        <div class="w-1/3">      
            <q-select
                class="full-width"
                outlined
                ref="mySelect"
                v-model="model"
                :options="options"
                label="Select an city"
            />
        </div>
    </div>
    
    
    
    
    <div class="drop-shadow-2xl flex  justify-center items-center  grid lg:grid-cols-3 md:grid-cols-1 gap-20 px-20">

        <div class="bg-teal-500 text-white text-center p-6  rounded-lg">
            <p class="font-normal text-gray-700 dark:text-gray-400">Bitcoin: 20</p>
        </div>

        <div class="bg-teal-500 text-white text-center p-6  rounded-lg">
            <p class="font-normal text-gray-700 dark:text-gray-400">Bitcoin: 20</p>
        </div>

        <div class="bg-teal-500 text-white text-center p-6  rounded-lg">
            <p class="font-normal text-gray-700 dark:text-gray-400">Bitcoin: 20</p>
        </div>
       
    </div>
    <div class="drop-shadow-2xl flex  justify-center items-center  grid lg:grid-cols-3 md:grid-cols-1 gap-20 px-20">
       
        <div class="q-my-xl">      
            <q-select
                class="full-width"
                filled
                ref="mySelect"
                v-model="model"
                :options="options"
                label="Comission"
            />
        </div>
        
        <div class="q-my-xl">      
            <q-select
                class="full-width"
                filled
                ref="mySelect"
                v-model="model"
                :options="options"
                label="Currency"
            />
        </div>
        
        <div class="q-my-xl">      
            <q-select
                class="full-width"
                filled
                ref="mySelect"
                v-model="model"
                :options="options"
                label="Type"
            />
        </div>
        
    </div>
    


        
        
        <slot/>
    </div>
</template>

<style lang="scss">
.citySelect{
    color:white;
}
</style>