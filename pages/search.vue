<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Search Input -->
      <div class="max-w-2xl mx-auto mb-8">
        <form @submit.prevent="performSearch" class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="What are you looking for?"
            class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <svg
            class="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
  
      <!-- Search Results -->
      <div v-if="hasSearched">
        <div v-if="searchResults.length > 0">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Search Results for "{{ searchQuery }}"
          </h2>
  
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductCard
              v-for="product in searchResults"
              :key="product.id"
              :product="product"
              :show-favorite="true"
              :is-favorite="isFavorite(product.id)"
              @toggle-favorite="toggleFavorite"
            />
          </div>
  
          <!-- Pagination -->
          <div class="mt-8 flex justify-center">
            <div class="flex space-x-2">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                class="px-4 py-2 rounded-lg"
                :class="{
                  'bg-primary-600 text-white': currentPage === page,
                  'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': currentPage !== page
                }"
              >
                {{ page }}
              </button>
            </div>
          </div>
        </div>
  
        <!-- No Results -->
        <div
          v-else
          class="text-center py-12"
        >
          <svg
            class="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No results found
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mb-6">
            Try adjusting your search terms or browse our categories
          </p>
          <NuxtLink
            to="/"
            class="btn btn-primary"
          >
            Browse Categories
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  const searchQuery = ref(route.query.q as string || '')
  const currentPage = ref(1)
  const totalPages = ref(5)
  const hasSearched = ref(false)
  
  // Mock data - replace with actual data from your backend
  const searchResults = ref([
    {
      id: 1,
      title: 'iPhone 13 Pro Max',
      price: 85000,
      location: 'Addis Ababa',
      image: '/images/iphone.jpg',
      isNew: true,
    },
    {
      id: 2,
      title: 'Samsung Galaxy S21',
      price: 65000,
      location: 'Dire Dawa',
      image: '/images/samsung.jpg',
      isNew: false,
    },
    {
      id: 3,
      title: 'Google Pixel 6',
      price: 55000,
      location: 'Bahir Dar',
      image: '/images/pixel.jpg',
      isNew: true,
    },
    {
      id: 4,
      title: 'OnePlus 9 Pro',
      price: 75000,
      location: 'Addis Ababa',
      image: '/images/oneplus.jpg',
      isNew: false,
    },
  ])
  
  // Mock favorites - replace with actual data from your backend
  const favorites = ref<number[]>([])
  
  const performSearch = () => {
    if (searchQuery.value.trim()) {
      hasSearched.value = true
      // Implement actual search functionality here
      console.log('Searching for:', searchQuery.value)
    }
  }
  
  const isFavorite = (productId: number) => {
    return favorites.value.includes(productId)
  }
  
  const toggleFavorite = (product: { id: number }) => {
    const index = favorites.value.indexOf(product.id)
    if (index === -1) {
      favorites.value.push(product.id)
    } else {
      favorites.value.splice(index, 1)
    }
  }
  
  // Watch for route query changes
  watch(
    () => route.query.q,
    (newQuery) => {
      if (newQuery) {
        searchQuery.value = newQuery as string
        performSearch()
      }
    },
    { immediate: true }
  )
  </script>