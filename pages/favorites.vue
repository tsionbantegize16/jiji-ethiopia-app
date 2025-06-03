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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Favorites</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          My Favorites
        </h1>
        <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 max-w-2xl mx-auto">
          Browse and manage your favorite listings
        </p>
      </div>

      <!-- Filters -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-4">
          <select
            v-model="selectedCategory"
            class="px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
          >
            <option value="all">All Categories</option>
            <option value="phones">Phones</option>
            <option value="tablets">Tablets</option>
            <option value="laptops">Laptops</option>
          </select>
          <select
            v-model="sortBy"
            class="px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <!-- Favorites Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="item in filteredFavorites"
          :key="item.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
        >
          <NuxtLink :to="`/listings/${item.id}`" class="block">
            <div class="relative">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-48 object-cover"
              />
              <button
                @click.prevent="removeFavorite(item.id)"
                class="absolute top-2 right-2 p-2 bg-white dark:bg-[#4F7F8F] rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
              >
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </button>
              <div v-if="item.isNew" class="absolute top-2 left-2">
                <span class="px-2 py-1 text-xs font-semibold text-white bg-[#2EC4B6] rounded-full">
                  New
                </span>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2 line-clamp-2">
                {{ item.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ item.price.toLocaleString('en-US', { style: 'currency', currency: 'ETB' }) }}
              </p>
              <div class="flex items-center text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 text-sm">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ item.location }}
              </div>
              <div class="flex items-center text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 text-sm mt-2">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ item.postedTime }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredFavorites.length === 0"
        class="text-center py-12"
      >
        <svg
          class="w-16 h-16 text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h3 class="text-xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
          No favorites yet
        </h3>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mb-6">
          Start adding items to your favorites by clicking the heart icon on any listing
        </p>
        <NuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          Browse Listings
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  title: 'My Favorites',
  description: 'Browse and manage your favorite listings on Jiji Ethiopia.',
  layout: 'default'
})

// State
const selectedCategory = ref('all')
const sortBy = ref('newest')

// Mock data for favorites
const favorites = ref([
  {
    id: 1,
    category: 'phones',
    title: 'iPhone 14 Pro Max - 256GB - Deep Purple',
    price: 125000,
    location: 'Addis Ababa, Bole',
    postedTime: '2 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'phones',
    title: 'Samsung Galaxy S23 Ultra - 512GB - Black',
    price: 115000,
    location: 'Addis Ababa, Sarbet',
    postedTime: '5 hours ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'tablets',
    title: 'iPad Pro 12.9" - 256GB - Space Gray',
    price: 95000,
    location: 'Addis Ababa, CMC',
    postedTime: '1 day ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'laptops',
    title: 'MacBook Pro 16" M2 Pro - 1TB - Space Gray',
    price: 350000,
    location: 'Addis Ababa, Bole',
    postedTime: '3 days ago',
    isNew: true,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'phones',
    title: 'Google Pixel 7 Pro - 128GB - Obsidian',
    price: 85000,
    location: 'Addis Ababa, Summit',
    postedTime: '4 days ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'tablets',
    title: 'Samsung Galaxy Tab S9 Ultra - 256GB - Beige',
    price: 75000,
    location: 'Addis Ababa, Sarbet',
    postedTime: '1 week ago',
    isNew: false,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop'
  }
])

// Computed
const filteredFavorites = computed(() => {
  let filtered = [...favorites.value]

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(item => item.category === selectedCategory.value)
  }

  // Sort items
  switch (sortBy.value) {
    case 'newest':
      filtered.sort((a, b) => new Date(b.postedTime).getTime() - new Date(a.postedTime).getTime())
      break
    case 'oldest':
      filtered.sort((a, b) => new Date(a.postedTime).getTime() - new Date(b.postedTime).getTime())
      break
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price)
      break
  }

  return filtered
})

// Methods
const removeFavorite = (id: number) => {
  favorites.value = favorites.value.filter(item => item.id !== id)
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #C9F0EF;
}

::-webkit-scrollbar-thumb {
  background: #4F7F8F;
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-track {
  background: #4F7F8F;
}

.dark ::-webkit-scrollbar-thumb {
  background: #C9F0EF;
}
</style> 