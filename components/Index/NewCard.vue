<script setup>
import { ref } from 'vue'

const items = ref(['Item 1', 'Item 2', 'Item 3'])
const expanded = ref(false)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const Cards = ref([])
const currentCards = ref([])

function getCards() {
  fetch(`https://mdl.belosnezhka-pg.ru/bot/`)
    .then(response => response.json())
    .then(data => {
      currentCards.value = data;
      const numCards = currentCards.value.length;

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
            window.location.href = currentCards.value[i]["map_links"];
          }
        })
      }
    });
}

getCards()
</script>

<template>
  <div class="q-pa-xl row items-start flex flex-center items-center text-white q-gutter-md q-dark">
    <q-card v-for="card in Cards" :key="card.name" class="my-card col-3" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ card.name }}</div>
        <div class="text-caption text-grey">
          {{ lorem }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="white" label="Name" />
        <q-btn flat color="white" label="Address" />

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
            {{ card.address }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<style scoped>
.my-card {
  width: calc(33.33% - 20px);
  max-width: 350px;
  background-color: #1e1e1e;
  border: 1px solid white;
}
</style>
