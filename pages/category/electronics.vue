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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Electronics</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-[#2EC4B6] to-[#4F7F8F] rounded-xl shadow-lg p-8 mb-8 text-white">
        <h1 class="text-4xl font-bold mb-4">Electronics in Ethiopia</h1>
        <p class="text-lg opacity-90">Find the latest gadgets, computers, TVs, and more at great prices</p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">Total Listings</p>
              <p class="text-xl font-bold text-[#2EC4B6]">1,234</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">Average Price</p>
              <p class="text-xl font-bold text-[#2EC4B6]">ETB 15,000</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">Active Sellers</p>
              <p class="text-xl font-bold text-[#2EC4B6]">456</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">Verified Items</p>
              <p class="text-xl font-bold text-[#2EC4B6]">789</p>
            </div>
          </div>
        </div>
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
              Brand
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Sony</option>
              <option>LG</option>
              <option>Dell</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Category
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Categories</option>
              <option>Laptops</option>
              <option>Desktops</option>
              <option>TVs</option>
              <option>Audio</option>
              <option>Gaming</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Condition
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>Any Condition</option>
              <option>New</option>
              <option>Used</option>
              <option>Refurbished</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="item in electronics" 
          :key="item.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/electronics/${item.id}`">
            <div class="relative">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-48 object-cover"
              />
              <div 
                v-if="item.isNew"
                class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
                  {{ item.title }}
                </h3>
                <span class="text-sm font-medium text-[#2EC4B6]">{{ item.brand }}</span>
              </div>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ item.price }}
              </p>
              <div class="mb-3">
                <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  <div v-for="(value, key) in item.specs" :key="key" class="flex items-center mb-1">
                    <span class="font-medium capitalize">{{ key }}:</span>
                    <span class="ml-2">{{ value }}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ item.location }}
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ item.postedTime }}
                </span>
                <div class="flex items-center space-x-2">
                  <button class="text-[#2EC4B6] hover:text-[#4F7F8F] transition-colors duration-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <NuxtLink 
                    :to="`/category/electronics/${item.id}`"
                    class="px-4 py-2 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </NuxtLink>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Electronics in Ethiopia',
  description: 'Find laptops, TVs, audio equipment and more electronics in Ethiopia.'
})

// Update the mock data with real image URLs
const electronics = ref([
  {
    id: 1,
    title: 'MacBook Pro 2023',
    price: 'ETB 120,000',
    location: 'Addis Ababa',
    postedTime: '2 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Apple',
    specs: {
      processor: 'M2 Pro',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14-inch Liquid Retina XDR'
    }
  },
  {
    id: 2,
    title: 'Samsung 4K Smart TV',
    price: 'ETB 45,000',
    location: 'Dire Dawa',
    postedTime: '1 day ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      size: '55-inch',
      resolution: '4K UHD',
      type: 'QLED',
      features: 'Smart TV, HDR'
    }
  },
  {
    id: 3,
    title: 'Sony WH-1000XM4',
    price: 'ETB 25,000',
    location: 'Hawassa',
    postedTime: '3 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Sony',
    specs: {
      type: 'Wireless Noise Cancelling',
      battery: '30 hours',
      features: 'Bluetooth 5.0, NFC'
    }
  },
  {
    id: 4,
    title: 'PlayStation 5',
    price: 'ETB 65,000',
    location: 'Bahir Dar',
    postedTime: '5 days ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Sony',
    specs: {
      storage: '825GB SSD',
      features: '4K Gaming, Ray Tracing',
      controller: 'DualSense'
    }
  },
  {
    id: 5,
    title: 'Dell XPS 13',
    price: 'ETB 85,000',
    location: 'Addis Ababa',
    postedTime: '1 week ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Dell',
    specs: {
      processor: 'Intel i7',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.4-inch 4K'
    }
  },
  {
    id: 6,
    title: 'LG OLED TV',
    price: 'ETB 75,000',
    location: 'Dire Dawa',
    postedTime: '2 weeks ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'LG',
    specs: {
      size: '65-inch',
      type: 'OLED',
      features: '4K, HDR, AI ThinQ'
    }
  },
  {
    id: 7,
    title: 'iPad Pro 12.9',
    price: 'ETB 55,000',
    location: 'Hawassa',
    postedTime: '3 weeks ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Apple',
    specs: {
      processor: 'M2',
      storage: '256GB',
      display: '12.9-inch Liquid Retina',
      features: 'ProMotion, True Tone'
    }
  },
  {
    id: 8,
    title: 'Samsung Galaxy Tab S9',
    price: 'ETB 35,000',
    location: 'Bahir Dar',
    postedTime: '1 month ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      processor: 'Snapdragon 8 Gen 2',
      storage: '128GB',
      display: '11-inch AMOLED',
      features: 'S Pen, 5G'
    }
  }
])
</script> 

<style scoped>
/* Add any additional styles here */
</style> 