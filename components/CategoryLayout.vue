<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Category Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">{{ title }}</h1>
      <p class="text-[#4F7F8F] dark:text-[#C9F0EF]">{{ description }}</p>
    </div>

    <!-- Filters -->
    <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-4 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Price Range -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Price Range</label>
          <div class="flex space-x-2">
            <input
              v-model="filters.minPrice"
              type="number"
              placeholder="Min"
              class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
            />
            <input
              v-model="filters.maxPrice"
              type="number"
              placeholder="Max"
              class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
            />
          </div>
        </div>

        <!-- Condition -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Condition</label>
          <select
            v-model="filters.condition"
            class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          >
            <option value="">All Conditions</option>
            <option value="new">New</option>
            <option value="like_new">Like New</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>

        <!-- Location -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Location</label>
          <select
            v-model="filters.location"
            class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="addis_ababa">Addis Ababa</option>
            <option value="dire_dawa">Dire Dawa</option>
            <option value="bahir_dar">Bahir Dar</option>
            <option value="mekelle">Mekelle</option>
          </select>
        </div>

        <!-- Sort -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Sort By</label>
          <select
            v-model="filters.sort"
            class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          >
            <option value="newest">Newest First</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Listings Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="item in filteredItems" :key="item.id" 
           class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
        <!-- Image -->
        <div class="relative aspect-square">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          <button @click="toggleFavorite(item.id)" 
                  class="absolute top-2 right-2 p-2 bg-white dark:bg-[#4F7F8F] rounded-full shadow-lg hover:bg-red-100 dark:hover:bg-red-900 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" :class="item.isFavorite ? 'text-red-500' : 'text-gray-400'" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-4">
          <h3 class="text-lg font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2 truncate">
            {{ item.title }}
          </h3>
          <p class="text-xl font-bold text-[#2EC4B6] dark:text-[#C9F0EF] mb-2">
            ETB {{ item.price.toLocaleString() }}
          </p>
          <div class="flex items-center text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ item.location }}
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-4 pt-0 flex space-x-2">
          <NuxtLink :to="`/product/${item.id}`" 
                    class="flex-1 btn-primary text-center">
            View Details
          </NuxtLink>
          <button @click="contactSeller(item.id)"
                  class="flex-1 px-4 py-2 bg-[#C9F0EF] dark:bg-[#2EC4B6] text-[#4F7F8F] dark:text-white rounded-lg hover:bg-[#2EC4B6] dark:hover:bg-[#C9F0EF] transition-colors duration-200">
            Contact
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredItems.length === 0" 
         class="text-center py-12">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-[#4F7F8F] dark:text-[#C9F0EF] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
        No items found
      </h3>
      <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
        Try adjusting your filters or check back later
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  items: Array<{
    id: number
    title: string
    price: number
    location: string
    image: string
    condition: string
    isFavorite: boolean
  }>
}

const props = defineProps<Props>()

interface Filters {
  minPrice: number | null
  maxPrice: number | null
  condition: string
  location: string
  sort: string
}

const filters = ref<Filters>({
  minPrice: null,
  maxPrice: null,
  condition: '',
  location: '',
  sort: 'newest'
})

const filteredItems = computed(() => {
  let result = [...props.items]

  // Apply price filter
  if (filters.value.minPrice !== null) {
    result = result.filter(item => item.price >= filters.value.minPrice!)
  }
  if (filters.value.maxPrice !== null) {
    result = result.filter(item => item.price <= filters.value.maxPrice!)
  }

  // Apply condition filter
  if (filters.value.condition) {
    result = result.filter(item => item.condition === filters.value.condition)
  }

  // Apply location filter
  if (filters.value.location) {
    result = result.filter(item => item.location.toLowerCase().includes(filters.value.location.toLowerCase()))
  }

  // Apply sorting
  switch (filters.value.sort) {
    case 'price_low':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price_high':
      result.sort((a, b) => b.price - a.price)
      break
    case 'newest':
    default:
      // Assuming items are already sorted by newest first
      break
  }

  return result
})

const toggleFavorite = (id: number) => {
  // TODO: Implement favorite toggle logic
  console.log('Toggle favorite for item:', id)
}

const contactSeller = (id: number) => {
  // TODO: Implement contact seller logic
  console.log('Contact seller for item:', id)
}
</script> 