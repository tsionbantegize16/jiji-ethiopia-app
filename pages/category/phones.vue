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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Phones</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-[#2EC4B6] to-[#4F7F8F] rounded-xl shadow-lg p-8 mb-8 text-white">
        <h1 class="text-4xl font-bold mb-4">Phones in Ethiopia</h1>
        <p class="text-lg opacity-90">Find the latest smartphones from top brands like Apple, Samsung, Google, and more. Browse through our extensive collection of new and used phones.</p>
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
              <p class="text-xl font-bold text-[#2EC4B6]">ETB 45,000</p>
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
              <p class="text-xl font-bold text-[#2EC4B6]">567</p>
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
              <option>Google</option>
              <option>Xiaomi</option>
              <option>OnePlus</option>
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

      <!-- Phone Listings -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="phone in phones" 
          :key="phone.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/phones/${phone.id}`">
            <div class="relative">
              <img 
                :src="phone.image" 
                :alt="phone.title"
                class="w-full h-48 object-cover"
              />
              <div 
                v-if="phone.isNew"
                class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                {{ phone.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ phone.price }}
              </p>
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ phone.location }}
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ phone.postedTime }}
                </span>
                <div class="flex items-center space-x-2">
                  <button class="text-[#2EC4B6] hover:text-[#4F7F8F] transition-colors duration-200">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <NuxtLink 
                    :to="`/category/phones/${phone.id}`"
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
import { ref } from 'vue'

// Mock data - Replace with actual API call
const phones = ref([
  {
    id: 1,
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
    title: 'Samsung Galaxy S23 Ultra',
    price: 'ETB 85,000',
    location: 'Dire Dawa',
    postedTime: '1 day ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1678775702101-9ed9a8aef6a0?auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      storage: '512GB',
      color: 'Phantom Black',
      condition: 'New',
      warranty: '1 Year',
      ram: '12GB',
      screen: '6.8" Dynamic AMOLED 2X',
      camera: '200MP Quad Camera'
    }
  },
  {
    id: 3,
    title: 'Google Pixel 7 Pro',
    price: 'ETB 65,000',
    location: 'Hawassa',
    postedTime: '3 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=500&q=80',
    brand: 'Google',
    specs: {
      storage: '256GB',
      color: 'Obsidian',
      condition: 'Like New',
      warranty: '6 Months',
      ram: '12GB',
      screen: '6.7" LTPO OLED',
      camera: '50MP Triple Camera'
    }
  },
  {
    id: 4,
    title: 'OnePlus 11',
    price: 'ETB 55,000',
    location: 'Addis Ababa',
    postedTime: '5 days ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1678775702101-9ed9a8aef6a0?auto=format&fit=crop&w=500&q=80',
    brand: 'OnePlus',
    specs: {
      storage: '256GB',
      color: 'Eternal Green',
      condition: 'New',
      warranty: '1 Year',
      ram: '16GB',
      screen: '6.7" AMOLED',
      camera: '50MP Triple Camera'
    }
  },
  {
    id: 5,
    title: 'Xiaomi 13 Pro',
    price: 'ETB 45,000',
    location: 'Bahir Dar',
    postedTime: '1 week ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1678775702101-9ed9a8aef6a0?auto=format&fit=crop&w=500&q=80',
    brand: 'Xiaomi',
    specs: {
      storage: '256GB',
      color: 'Ceramic Black',
      condition: 'Like New',
      warranty: '6 Months',
      ram: '12GB',
      screen: '6.73" AMOLED',
      camera: '50MP Triple Camera'
    }
  },
  {
    id: 6,
    title: 'iPhone 13 Pro',
    price: 'ETB 75,000',
    location: 'Addis Ababa',
    postedTime: '2 weeks ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1632661674596-79bd3e16c2bd?auto=format&fit=crop&w=500&q=80',
    brand: 'Apple',
    specs: {
      storage: '128GB',
      color: 'Graphite',
      condition: 'Used',
      warranty: '3 Months',
      ram: '6GB',
      screen: '6.1" Super Retina XDR',
      camera: '12MP Triple Camera'
    }
  },
  {
    id: 7,
    title: 'Samsung Galaxy S22 Ultra',
    price: 'ETB 65,000',
    location: 'Dire Dawa',
    postedTime: '3 weeks ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1678775702101-9ed9a8aef6a0?auto=format&fit=crop&w=500&q=80',
    brand: 'Samsung',
    specs: {
      storage: '256GB',
      color: 'Burgundy',
      condition: 'Used',
      warranty: '3 Months',
      ram: '12GB',
      screen: '6.8" Dynamic AMOLED 2X',
      camera: '108MP Quad Camera'
    }
  },
  {
    id: 8,
    title: 'Google Pixel 6a',
    price: 'ETB 35,000',
    location: 'Hawassa',
    postedTime: '1 month ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=500&q=80',
    brand: 'Google',
    specs: {
      storage: '128GB',
      color: 'Sage',
      condition: 'Used',
      warranty: 'None',
      ram: '6GB',
      screen: '6.1" OLED',
      camera: '12.2MP Dual Camera'
    }
  }
])

definePageMeta({
  title: 'Phones',
  description: 'Browse our collection of smartphones from top brands.',
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