<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F]">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Sports & Fitness
        </h1>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
          Find sports equipment, fitness gear, and more
        </p>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl p-6 mb-8 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Price Range
            </label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
              <option value="">Any Price</option>
              <option value="0-1000">Under ETB 1,000</option>
              <option value="1000-5000">ETB 1,000 - 5,000</option>
              <option value="5000-10000">ETB 5,000 - 10,000</option>
              <option value="10000+">Over ETB 10,000</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Sport Type
            </label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
              <option value="">All Sports</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="fitness">Fitness</option>
              <option value="running">Running</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Location
            </label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
              <option value="">All Locations</option>
              <option value="addis-ababa">Addis Ababa</option>
              <option value="dire-dawa">Dire Dawa</option>
              <option value="bahir-dar">Bahir Dar</option>
              <option value="mekelle">Mekelle</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Sort By
            </label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="listing in sportsListings" 
          :key="listing.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          <NuxtLink :to="`/listings/${listing.id}`">
            <div class="relative">
              <img 
                :src="listing.image" 
                :alt="listing.title"
                class="w-full h-48 object-cover"
              />
              <div 
                v-if="listing.isNew"
                class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
              </div>
              <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-[#4F7F8F]/90 text-[#4F7F8F] dark:text-[#C9F0EF] px-3 py-1 rounded-full text-sm font-medium">
                {{ listing.condition }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                {{ listing.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ listing.price }}
              </p>
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ listing.location }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sportsListings = [
  {
    id: 1,
    title: 'Professional Football',
    price: 'ETB 2,500',
    location: 'Addis Ababa',
    image: '/images/listings/football.jpg',
    isNew: true,
    condition: 'New'
  },
  {
    id: 2,
    title: 'Basketball Set',
    price: 'ETB 4,500',
    location: 'Dire Dawa',
    image: '/images/listings/basketball.jpg',
    isNew: false,
    condition: 'Like New'
  },
  {
    id: 3,
    title: 'Fitness Equipment',
    price: 'ETB 15,000',
    location: 'Bahir Dar',
    image: '/images/listings/fitness.jpg',
    isNew: true,
    condition: 'New'
  },
  {
    id: 4,
    title: 'Running Shoes',
    price: 'ETB 3,500',
    location: 'Mekelle',
    image: '/images/listings/shoes.jpg',
    isNew: false,
    condition: 'Good'
  }
]
</script> 