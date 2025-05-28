<template>
  <div class="min-h-screen bg-gradient-to-b from-[#C9F0EF] to-[#4F7F8F] dark:from-[#4F7F8F] dark:to-[#22223B] py-10">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Image Carousel -->
        <div>
          <div class="relative rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-[#22223B]">
            <img :src="product.images[currentImageIndex]" :alt="product.title" class="w-full h-96 object-cover transition-all duration-300" />
            <button v-if="product.images.length > 1" @click="previousImage" class="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-[#4F7F8F]/80 rounded-full p-2 shadow hover:bg-[#2EC4B6] transition-colors">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button v-if="product.images.length > 1" @click="nextImage" class="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-[#4F7F8F]/80 rounded-full p-2 shadow hover:bg-[#2EC4B6] transition-colors">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div class="flex gap-2 mt-4 justify-center">
            <img v-for="(img, idx) in product.images" :key="img" :src="img" :alt="product.title" @click="currentImageIndex = idx" :class="['w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all', currentImageIndex === idx ? 'border-[#2EC4B6] scale-105' : 'border-transparent opacity-70 hover:opacity-100']" />
          </div>
        </div>
        <!-- Product Details -->
        <div class="bg-white dark:bg-[#22223B] rounded-2xl shadow-xl p-8 flex flex-col gap-6">
          <div class="flex items-center gap-3 mb-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2EC4B6]/10 text-[#2EC4B6]">{{ product.condition }}</span>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#4F7F8F]/10 text-[#4F7F8F]">{{ product.category }}</span>
          </div>
          <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">{{ product.title }}</h1>
          <div class="text-2xl font-bold text-[#2EC4B6] mb-2">ETB {{ product.price.toLocaleString() }}</div>
          <div class="flex items-center gap-2 text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 mb-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {{ product.location }}
          </div>
          <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 mb-4 whitespace-pre-line">{{ product.description }}</p>
          <div class="flex items-center gap-4 mt-4">
            <button class="px-6 py-3 bg-[#2EC4B6] text-white rounded-full font-bold hover:bg-[#4F7F8F] transition-colors duration-200 shadow">
              Contact Seller
            </button>
            <button @click="toggleFavorite" :class="['px-4 py-3 rounded-full font-bold transition-colors duration-200 shadow', isFavorite ? 'bg-[#2EC4B6] text-white' : 'bg-gray-100 dark:bg-[#4F7F8F]/30 text-[#2EC4B6] hover:bg-[#2EC4B6]/10']">
              <svg v-if="isFavorite" class="w-6 h-6 inline" fill="#2EC4B6" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" /></svg>
              <svg v-else class="w-6 h-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" /></svg>
            </button>
          </div>
          <div class="flex items-center gap-4 mt-8 p-4 rounded-xl bg-gray-50 dark:bg-[#4F7F8F]/30">
            <img :src="seller.avatar" :alt="seller.name" class="w-14 h-14 rounded-full object-cover border-2 border-[#2EC4B6]" />
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">{{ seller.name }}</span>
                <svg v-if="seller.verified" class="w-5 h-5 text-[#2EC4B6]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              </div>
              <div class="flex items-center gap-1 text-sm text-yellow-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>{{ seller.rating }}</span>
              </div>
              <div class="text-xs text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Joined: {{ seller.joinDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentImageIndex = ref(0)
const isFavorite = ref(false)

const product = ref({
  id: route.params.id,
  title: 'iPhone 13 Pro Max',
  price: 85000,
  location: 'Addis Ababa',
  category: 'Phones',
  condition: 'Like New',
  description: 'iPhone 13 Pro Max 256GB\nGraphite\nPerfect condition\nAll accessories included\nWarranty until December 2024',
  images: [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  ]
})

const seller = ref({
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  joinDate: 'January 2023',
  responseTime: 'Usually responds within 1 hour',
  rating: 4.9,
  verified: true
})

function previousImage() {
  currentImageIndex.value = (currentImageIndex.value - 1 + product.value.images.length) % product.value.images.length
}

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length
}

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>

<style scoped>
/* Carousel arrow hover effect */
button:focus {
  outline: 2px solid #2EC4B6;
}
</style> 