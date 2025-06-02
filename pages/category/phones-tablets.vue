<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6]">
                Home
              </NuxtLink>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Phones & Tablets</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Price Range
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>Any Price</option>
              <option>Under ETB 5,000</option>
              <option>ETB 5,000 - 10,000</option>
              <option>ETB 10,000 - 20,000</option>
              <option>Over ETB 20,000</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Device Type
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Types</option>
              <option>Smartphones</option>
              <option>Tablets</option>
              <option>Accessories</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Brand
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Xiaomi</option>
              <option>Huawei</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Location
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Locations</option>
              <option>Addis Ababa</option>
              <option>Dire Dawa</option>
              <option>Hawassa</option>
              <option>Bahir Dar</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="device in devices" 
          :key="device.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/phones-tablets/${device.id}`">
            <div class="relative">
              <img 
                :src="device.image" 
                :alt="device.title"
                class="w-full h-48 object-cover"
              />
              <div 
                v-if="device.isNew"
                class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                {{ device.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ device.price }}
              </p>
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ device.location }}
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ device.postedTime }}
                </span>
                <button class="text-[#2EC4B6] hover:text-[#4F7F8F] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock data - Replace with actual API call
const devices = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro Max - 256GB',
    price: 'ETB 45,000',
    location: 'Addis Ababa',
    postedTime: '2 hours ago',
    image: '/images/phones/iphone-13.jpg',
    isNew: true
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21 Ultra',
    price: 'ETB 38,000',
    location: 'Dire Dawa',
    postedTime: '5 hours ago',
    image: '/images/phones/s21-ultra.jpg',
    isNew: false
  },
  {
    id: 3,
    title: 'iPad Pro 12.9" 2023',
    price: 'ETB 55,000',
    location: 'Hawassa',
    postedTime: '1 day ago',
    image: '/images/phones/ipad-pro.jpg',
    isNew: true
  },
  {
    id: 4,
    title: 'Xiaomi 12 Pro',
    price: 'ETB 32,000',
    location: 'Addis Ababa',
    postedTime: '2 days ago',
    image: '/images/phones/xiaomi-12.jpg',
    isNew: false
  },
  {
    id: 5,
    title: 'Samsung Galaxy Tab S8',
    price: 'ETB 28,000',
    location: 'Bahir Dar',
    postedTime: '3 days ago',
    image: '/images/phones/tab-s8.jpg',
    isNew: true
  },
  {
    id: 6,
    title: 'iPhone 12 - 128GB',
    price: 'ETB 35,000',
    location: 'Addis Ababa',
    postedTime: '4 days ago',
    image: '/images/phones/iphone-12.jpg',
    isNew: false
  },
  {
    id: 7,
    title: 'Huawei MatePad Pro',
    price: 'ETB 25,000',
    location: 'Dire Dawa',
    postedTime: '5 days ago',
    image: '/images/phones/matepad-pro.jpg',
    isNew: true
  },
  {
    id: 8,
    title: 'OnePlus 10 Pro',
    price: 'ETB 40,000',
    location: 'Hawassa',
    postedTime: '1 week ago',
    image: '/images/phones/oneplus-10.jpg',
    isNew: false
  }
])
</script>

<style scoped>
/* Add any additional styles here */
</style> 