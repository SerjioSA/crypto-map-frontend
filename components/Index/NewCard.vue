<script setup>
import { ref } from 'vue'

const items = ref(['Item 1', 'Item 2', 'Item 3'])
const expanded = ref(false)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const Cards = ref([]) 
const currentCards = ref([]) 

async function getCards() {
    
    await useNuxtApp().$api.get(`https://mdl.belosnezhka-pg.ru/bot/`)
    .then((response) => {
        currentCards.value = response.data;
        const numCards = currentCards.value.length;
        console.log(currentCards.value)

        for (let i = 0; i < numCards; i++) {
            Cards.value.push({
                address: currentCards.value[i]["address"],
                city: currentCards.value[i]["city"],
                commission: currentCards.value[i]["commission"],
                contacts: currentCards.value[i]["contacts"],
                currencies: currentCards.value[i]["currencies"],
                name: currentCards.value[i]["name"],
                opening_hours: currentCards.value[i]["opening_hours"],
                type: currentCards.value[i]["type"],
                expanded:false,
                onClick: () => {
                    navigateTo(currentCards.value[i]["map_links"], { external: true })
                }
            })
            }
    });
}

getCards()
</script>
<template>
    <div class="q-pa-xl row items-start flex flex-center items-center text-black q-gutter-md">
      <q-card  v-for="card in Cards" :key="card" class="my-card col-3" flat bordered>
        <q-img
          src="~/assets/crypto.jpg"
        />
  
        <q-card-section>
          
          <div class="text-h5 q-mt-sm q-mb-xs">{{card.name}}</div>
          <div class="text-overline text-gray-9">{{ card.address }}</div>
          <div class="text-overline text-gray-9">Comission: {{ card.commission }}</div>
          <div class="text-caption text-grey">
            Type: {{ card.type }}
          </div>
        </q-card-section>
  
        <q-card-actions>
          <q-space />
  
          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="card.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="card.expanded = !card.expanded"
          />
        </q-card-actions>
  
        <q-slide-transition>
          <div v-show="card.expanded">
            <q-separator />
            <q-card-section class="text-subtitle2">
                <div class="text-overline text-gray-9">{{ card.currencies }}</div>
                <div class="text-overline text-gray-9">{{ card.opening_hours }}</div>
                <div class="text-overline text-gray-9">{{ card.contacts }}</div>
            </q-card-section>
            <q-card-section>
                <q-btn @click="card.onClick()">Go</q-btn>
            </q-card-section>
          </div>
        </q-slide-transition>
        
      </q-card>
    </div>
  </template>
  


