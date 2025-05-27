<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">All Listings</h1>

      <!-- Filters -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-4 mb-8">
        <div class="flex flex-wrap gap-4">
          <select
            v-model="selectedCategory"
            class="px-4 py-2 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          >
            <option value="">All Categories</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>

          <select
            v-model="selectedLocation"
            class="px-4 py-2 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          >
            <option value="">All Locations</option>
            <option v-for="location in locations" :key="location.id" :value="location.id">
              {{ location.name }}
            </option>
          </select>

          <select
            v-model="sortBy"
            class="px-4 py-2 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="listing in listings"
          :key="listing.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
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
                class="absolute top-4 left-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
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
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mt-2">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ listing.time }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="listings.length === 0" class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-8 text-center">
        <svg class="w-16 h-16 mx-auto text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
          No listings found
        </h3>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mb-6">
          Try adjusting your filters or check back later for new listings
        </p>
        <NuxtLink
          to="/create-listing"
          class="inline-flex items-center px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          Create Listing
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Listing {
  id: number
  title: string
  price: string
  location: string
  time: string
  image: string
  isNew: boolean
  category: string
}

const selectedCategory = ref('')
const selectedLocation = ref('')
const sortBy = ref('newest')

// Mock data - Replace with actual API calls
const categories = ref([
  { id: 1, name: 'Vehicles' },
  { id: 2, name: 'Phones' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Fashion' }
])

const locations = ref([
  { id: 1, name: 'Addis Ababa' },
  { id: 2, name: 'Dire Dawa' },
  { id: 3, name: 'Bahir Dar' },
  { id: 4, name: 'Mekelle' }
])

const listings = ref<Listing[]>([
  {
    id: 1,
    title: 'iPhone 13 Pro Max',
    price: 'ETB 45,000',
    location: 'Addis Ababa',
    time: '2 hours ago',
    image: '/images/iphone.jpg',
    isNew: true,
    category: 'phones'
  },
  {
    id: 2,
    title: 'Toyota Land Cruiser 2020',
    price: 'ETB 2,500,000',
    location: 'Dire Dawa',
    time: '5 hours ago',
    image: '/images/car.jpg',
    isNew: false,
    category: 'vehicles'
  },
  {
    id: 3,
    title: 'Samsung 4K Smart TV',
    price: 'ETB 35,000',
    location: 'Hawassa',
    time: '1 day ago',
    image: '/images/tv.jpg',
    isNew: true,
    category: 'electronics'
  },
  {
    id: 4,
    title: 'MacBook Pro 2021',
    price: 'ETB 85,000',
    location: 'Addis Ababa',
    time: '2 days ago',
    image: '/images/laptop.jpg',
    isNew: false,
    category: 'electronics'
  }
])
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 