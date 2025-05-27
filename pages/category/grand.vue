<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F]">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Premium & Luxury Items
        </h1>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
          Discover exclusive and high-end products
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
              <option value="10000-50000">ETB 10,000 - 50,000</option>
              <option value="50000-100000">ETB 50,000 - 100,000</option>
              <option value="100000-500000">ETB 100,000 - 500,000</option>
              <option value="500000+">Over ETB 500,000</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Category
            </label>
            <select class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
              <option value="">All Categories</option>
              <option value="watches">Luxury Watches</option>
              <option value="jewelry">Fine Jewelry</option>
              <option value="cars">Premium Cars</option>
              <option value="fashion">Designer Fashion</option>
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
          v-for="listing in grandListings" 
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
              <div 
                v-if="listing.isVerified"
                class="absolute top-4 left-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Verified
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
              <div class="mt-2 flex items-center gap-2">
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ listing.brand }}
                </span>
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  • {{ listing.year }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const grandListings = [
  {
    id: 1,
    title: 'Rolex Datejust 41',
    price: 'ETB 450,000',
    location: 'Addis Ababa',
    image: '/images/listings/rolex.jpg',
    isNew: true,
    condition: 'New',
    isVerified: true,
    brand: 'Rolex',
    year: '2024'
  },
  {
    id: 2,
    title: 'Mercedes-Benz S-Class',
    price: 'ETB 4,500,000',
    location: 'Dire Dawa',
    image: '/images/listings/mercedes.jpg',
    isNew: false,
    condition: 'Like New',
    isVerified: true,
    brand: 'Mercedes-Benz',
    year: '2023'
  },
  {
    id: 3,
    title: 'Diamond Necklace',
    price: 'ETB 150,000',
    location: 'Bahir Dar',
    image: '/images/listings/diamond.jpg',
    isNew: true,
    condition: 'New',
    isVerified: true,
    brand: 'Cartier',
    year: '2024'
  },
  {
    id: 4,
    title: 'Louis Vuitton Bag',
    price: 'ETB 85,000',
    location: 'Mekelle',
    image: '/images/listings/lv-bag.jpg',
    isNew: false,
    condition: 'Excellent',
    isVerified: true,
    brand: 'Louis Vuitton',
    year: '2023'
  }
]
</script> 