<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">My Favorites</h1>

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

      <!-- Favorites Grid -->
      <div v-if="favorites.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="item in favorites"
          :key="item.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/listings/${item.id}`">
            <div class="relative">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover"
              />
              <button
                @click.prevent="removeFromFavorites(item)"
                class="absolute top-4 right-4 p-2 bg-white dark:bg-[#4F7F8F] rounded-full shadow-lg hover:bg-[#C9F0EF] dark:hover:bg-[#2EC4B6] transition-colors duration-200"
              >
                <svg class="w-6 h-6 text-[#2EC4B6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
              <div
                v-if="item.isNew"
                class="absolute top-4 left-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
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
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mt-2">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ item.time }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-8 text-center">
        <svg class="w-16 h-16 mx-auto text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
          No favorites yet
        </h3>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mb-6">
          Save your favorite listings to view them here later
        </p>
        <NuxtLink
          to="/listings"
          class="inline-flex items-center px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          Browse Listings
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Favorite {
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

const favorites = ref<Favorite[]>([
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

const removeFromFavorites = (item: Favorite) => {
  favorites.value = favorites.value.filter(favorite => favorite.id !== item.id)
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 