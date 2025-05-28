<template>
  <div class="min-h-screen bg-gradient-to-b from-[#C9F0EF] to-[#4F7F8F] dark:from-[#4F7F8F] dark:to-[#22223B] py-10">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl md:text-4xl font-bold text-[#2EC4B6] dark:text-[#C9F0EF] mb-8 text-center drop-shadow-lg">
        Latest Listings
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="item in listings"
          :key="item.id"
          class="bg-white dark:bg-[#22223B] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-200 overflow-hidden relative group"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <button
            class="absolute top-4 right-4 bg-white/80 dark:bg-[#4F7F8F]/80 rounded-full p-2 shadow-md hover:bg-[#2EC4B6] hover:text-white transition-colors"
            @click="toggleFavorite(item.id)"
          >
            <svg v-if="item.isFavorite" xmlns="http://www.w3.org/2000/svg" fill="#2EC4B6" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" />
            </svg>
          </button>
          <div class="p-5">
            <h2 class="text-lg font-semibold text-[#22223B] dark:text-[#C9F0EF] mb-1 truncate">{{ item.title }}</h2>
            <div class="text-[#2EC4B6] font-bold text-xl mb-1">ETB {{ item.price.toLocaleString() }}</div>
            <div class="flex items-center text-sm text-[#4F7F8F] dark:text-[#C9F0EF]/70">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ item.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Listing {
  id: number
  title: string
  price: number
  location: string
  image: string
  isFavorite: boolean
}

const listings = ref<Listing[]>([
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    price: 125000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    isFavorite: true
  },
  {
    id: 3,
    title: 'MacBook Pro M2',
    price: 185000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Nike Air Zoom Pegasus 39',
    price: 8500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 5,
    title: 'Sony 65" 4K Smart TV',
    price: 85000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 6,
    title: 'Mountain Bike Trek',
    price: 45000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 7,
    title: 'PlayStation 5',
    price: 65000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=60',
    isFavorite: true
  },
  {
    id: 8,
    title: 'Adidas Predator Soccer Cleats',
    price: 9500,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 9,
    title: 'Dell XPS 15',
    price: 165000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 10,
    title: 'Under Armour Training Mat',
    price: 3500,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 11,
    title: 'Samsung Galaxy S23 Ultra',
    price: 115000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  },
  {
    id: 12,
    title: 'Yoga Mat Premium',
    price: 2800,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=60',
    isFavorite: false
  }
])

function toggleFavorite(id: number) {
  const item = listings.value.find(i => i.id === id)
  if (item) item.isFavorite = !item.isFavorite
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 