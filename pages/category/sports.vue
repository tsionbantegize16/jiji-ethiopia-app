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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Sports</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-[#2EC4B6] to-[#4F7F8F] rounded-xl shadow-lg p-8 mb-8 text-white">
        <h1 class="text-4xl font-bold mb-4">Sports in Ethiopia</h1>
        <p class="text-lg opacity-90">Find sports equipment, gear, and accessories for all your activities</p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
              <p class="text-xl font-bold text-[#2EC4B6]">ETB 2,500</p>
            </div>
          </div>
        </div>
        <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 shadow-lg">
          <div class="flex items-center">
            <div class="p-3 bg-[#2EC4B6]/10 rounded-lg mr-4">
              <svg class="w-6 h-6 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
              <option>Under ETB 1,000</option>
              <option>ETB 1,000 - 3,000</option>
              <option>ETB 3,000 - 5,000</option>
              <option>Over ETB 5,000</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Category
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Categories</option>
              <option>Football</option>
              <option>Basketball</option>
              <option>Fitness</option>
              <option>Outdoor Sports</option>
              <option>Sports Wear</option>
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
              <option>Like New</option>
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
          v-for="item in sportsItems" 
          :key="item.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/sports/${item.id}`">
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
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                {{ item.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ item.price }}
              </p>
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
                    :to="`/category/sports/${item.id}`"
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
  title: 'Sports in Ethiopia',
  description: 'Find sports equipment, gear, and accessories in Ethiopia.'
})

// Update the mock data with real image URLs
const sportsItems = ref([
  {
    id: 1,
    title: 'Professional Football',
    price: 'ETB 1,200',
    location: 'Addis Ababa',
    postedTime: '2 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=80',
    brand: 'Adidas',
    specs: {
      size: 'Size 5',
      material: 'Synthetic',
      type: 'Professional',
      condition: 'New'
    }
  },
  {
    id: 2,
    title: 'Running Shoes',
    price: 'ETB 3,500',
    location: 'Dire Dawa',
    postedTime: '1 day ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
    brand: 'Nike',
    specs: {
      size: '42',
      type: 'Running',
      color: 'Black/Red',
      condition: 'Like New'
    }
  },
  {
    id: 3,
    title: 'Basketball',
    price: 'ETB 800',
    location: 'Hawassa',
    postedTime: '3 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1546519638-68e109acd27b?auto=format&fit=crop&w=500&q=80',
    brand: 'Spalding',
    specs: {
      size: 'Official Size',
      material: 'Leather',
      type: 'Indoor/Outdoor',
      condition: 'Used'
    }
  },
  {
    id: 4,
    title: 'Tennis Racket Set',
    price: 'ETB 2,500',
    location: 'Bahir Dar',
    postedTime: '5 days ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=500&q=80',
    brand: 'Wilson',
    specs: {
      type: 'Professional',
      includes: '2 Rackets, Balls',
      material: 'Graphite',
      condition: 'New'
    }
  },
  {
    id: 5,
    title: 'Gym Equipment Set',
    price: 'ETB 15,000',
    location: 'Addis Ababa',
    postedTime: '1 week ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80',
    brand: 'Life Fitness',
    specs: {
      items: 'Dumbbells, Bench, Mat',
      weight: '20kg Set',
      material: 'Steel',
      condition: 'Like New'
    }
  },
  {
    id: 6,
    title: 'Cycling Helmet',
    price: 'ETB 1,800',
    location: 'Dire Dawa',
    postedTime: '2 weeks ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=500&q=80',
    brand: 'Giro',
    specs: {
      size: 'Medium',
      type: 'Road Cycling',
      color: 'Black',
      condition: 'New'
    }
  },
  {
    id: 7,
    title: 'Yoga Mat Set',
    price: 'ETB 1,500',
    location: 'Hawassa',
    postedTime: '3 weeks ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=80',
    brand: 'Liforme',
    specs: {
      thickness: '6mm',
      material: 'Eco-friendly',
      includes: 'Mat, Strap, Block',
      condition: 'Used'
    }
  },
  {
    id: 8,
    title: 'Swimming Goggles',
    price: 'ETB 1,200',
    location: 'Bahir Dar',
    postedTime: '1 month ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=80',
    brand: 'Speedo',
    specs: {
      type: 'Competition',
      lens: 'Anti-fog',
      color: 'Blue',
      condition: 'New'
    }
  }
])
</script> 

<style scoped>
/* Add any additional styles here */
</style> 