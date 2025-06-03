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

      <!-- Hero Section -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-8 mb-8 shadow-lg">
        <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Phones & Tablets in Ethiopia</h1>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
          Discover a wide range of smartphones and tablets from leading brands. Find the perfect device for your needs at competitive prices.
        </p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Total Listings</h3>
          <p class="text-2xl font-bold text-[#2EC4B6]">2,345</p>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Average Price</h3>
          <p class="text-2xl font-bold text-[#2EC4B6]">ETB 35,000</p>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Active Sellers</h3>
          <p class="text-2xl font-bold text-[#2EC4B6]">789</p>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 shadow-lg">
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Verified Items</h3>
          <p class="text-2xl font-bold text-[#2EC4B6]">1,234</p>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 mb-8 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="relative">
            <select class="w-full bg-[#C9F0EF] dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]">
              <option value="">Price Range</option>
              <option value="0-10000">Under ETB 10,000</option>
              <option value="10000-30000">ETB 10,000 - 30,000</option>
              <option value="30000-50000">ETB 30,000 - 50,000</option>
              <option value="50000+">Over ETB 50,000</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select class="w-full bg-[#C9F0EF] dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]">
              <option value="">Device Type</option>
              <option value="phone">Phones</option>
              <option value="tablet">Tablets</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select class="w-full bg-[#C9F0EF] dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]">
              <option value="">Brand</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="google">Google</option>
              <option value="xiaomi">Xiaomi</option>
              <option value="oneplus">OnePlus</option>
              <option value="huawei">Huawei</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select class="w-full bg-[#C9F0EF] dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]">
              <option value="">Location</option>
              <option value="addis-ababa">Addis Ababa</option>
              <option value="dire-dawa">Dire Dawa</option>
              <option value="hawassa">Hawassa</option>
              <option value="bahir-dar">Bahir Dar</option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg class="w-4 h-4 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Device Listings -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="device in devices" 
          :key="device.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/${device.type}/${device.id}`">
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
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Mock data - Replace with actual API call
const devices = ref([
  {
    id: 1,
    type: 'phones',
    title: 'iPhone 14 Pro Max',
    price: 'ETB 95,000',
    location: 'Addis Ababa',
    postedTime: '2 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1678652197831-2d1801b5d5f5?auto=format&fit=crop&w=500&q=80',
    brand: 'Apple',
    specs: {
      storage: '256GB',
      color: 'Deep Purple',
      condition: 'New',
      warranty: '1 Year',
      ram: '6GB',
      screen: '6.7" Super Retina XDR',
      camera: '48MP Triple Camera'
    }
  },
  {
    id: 2,
    type: 'tablets',
    title: 'iPad Pro 12.9"',
    price: 'ETB 85,000',
    location: 'Dire Dawa',
    postedTime: '1 day ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80',
    brand: 'Apple',
    specs: {
      storage: '256GB',
      color: 'Space Gray',
      condition: 'New',
      warranty: '1 Year',
      ram: '8GB',
      screen: '12.9" Liquid Retina XDR',
      camera: '12MP Wide + 10MP Ultra Wide'
    }
  },
  {
    id: 3,
    type: 'phones',
    title: 'Samsung Galaxy S23 Ultra',
    price: 'ETB 85,000',
    location: 'Hawassa',
    postedTime: '3 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1678775702101-9ed9a8aef6a0?auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      storage: '512GB',
      color: 'Phantom Black',
      condition: 'Like New',
      warranty: '6 Months',
      ram: '12GB',
      screen: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Quad Camera'
    }
  },
  {
    id: 4,
    type: 'tablets',
    title: 'Samsung Galaxy Tab S9 Ultra',
    price: 'ETB 75,000',
    location: 'Addis Ababa',
    postedTime: '5 days ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      storage: '256GB',
      color: 'Graphite',
      condition: 'New',
      warranty: '1 Year',
      ram: '12GB',
      screen: '14.6" Dynamic AMOLED 2X',
      camera: '13MP + 8MP Dual Camera'
    }
  }
])

definePageMeta({
  title: 'Phones & Tablets',
  description: 'Browse our collection of smartphones and tablets from top brands.',
  layout: 'default'
})
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #2EC4B6 #C9F0EF;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #C9F0EF;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #2EC4B6;
  border-radius: 3px;
}

/* Enhanced hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

.hover\:translate-x-1:hover {
  transform: translateX(0.25rem);
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Enhanced shadows */
.shadow-hover {
  transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style> 