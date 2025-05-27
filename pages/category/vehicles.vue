<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Category Header -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Vehicles
            </h1>
            <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              {{ totalListings }} active listings
            </p>
          </div>
        </div>
      </div>

      <!-- Subcategories -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <a 
          v-for="subcat in subcategories" 
          :key="subcat.id"
          :href="subcat.path"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300"
        >
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
            {{ subcat.name }}
          </h3>
          <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
            {{ subcat.count }} listings
          </p>
        </a>
      </div>

      <!-- Latest Listings -->
      <div>
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Latest Listings
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="listing in latestListings" 
            :key="listing.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg"
          >
            <a :href="`/listings/${listing.id}`">
              <div class="relative">
                <img 
                  :src="listing.image" 
                  :alt="listing.title"
                  class="w-full h-48 object-cover"
                />
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const totalListings = ref('8,500')

// Subcategories data
const subcategories = ref([
  {
    id: 1,
    name: 'Cars',
    path: '/category/cars',
    count: '4,500'
  },
  {
    id: 2,
    name: 'Motorcycles',
    path: '/category/motorcycles',
    count: '2,000'
  },
  {
    id: 3,
    name: 'Trucks',
    path: '/category/trucks',
    count: '1,200'
  },
  {
    id: 4,
    name: 'Auto Parts',
    path: '/category/auto-parts',
    count: '800'
  }
])

// Latest listings data
const latestListings = ref([
  {
    id: 1,
    title: 'Toyota Land Cruiser 2020',
    price: 'ETB 2,500,000',
    location: 'Addis Ababa',
    image: '/images/landcruiser.jpg'
  },
  {
    id: 2,
    title: 'Honda Civic 2019',
    price: 'ETB 850,000',
    location: 'Dire Dawa',
    image: '/images/civic.jpg'
  },
  {
    id: 3,
    title: 'BMW X5 2021',
    price: 'ETB 3,500,000',
    location: 'Hawassa',
    image: '/images/bmw.jpg'
  },
  {
    id: 4,
    title: 'Suzuki V-Strom 650',
    price: 'ETB 380,000',
    location: 'Addis Ababa',
    image: '/images/vstrom.jpg'
  }
])
</script> 