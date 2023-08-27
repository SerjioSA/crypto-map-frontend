<script setup>
import { ref } from 'vue'

const items = ref(['Item 1', 'Item 2', 'Item 3'])
const expanded = ref(false)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const Cards = ref([]) 
const currentCards = ref([]) 

function getCards() {
    
    useNuxtApp().$api.get(`https://mdl.belosnezhka-pg.ru/bot/`)
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
                onClick: () => {
                    navigateTo(currentCards.value[i]["map_links"])
                }
            })
            }
    });
}

getCards()
</script>
<template>
    <div class="q-pa-xl row items-start flex flex-center items-center text-black q-gutter-md">
      <q-card  v-for="item in items" :key="item" class="my-card col-3" flat bordered>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
  
        <q-card-section>
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>
  
        <q-card-actions>
          <q-btn flat color="primary" label="Share" />
          <q-btn flat color="secondary" label="Book" />
  
          <q-space />
  
          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>
  
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subtitle2">
              {{ item }}
            </q-card-section>
          </div>
        </q-slide-transition>
        
      </q-card>
    </div>
  </template>
  


