<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Filters Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h2>
          
          <!-- Price Range -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Price Range</h3>
            <div class="space-y-2">
              <input
                type="number"
                v-model="filters.minPrice"
                placeholder="Min"
                class="input"
              />
              <input
                type="number"
                v-model="filters.maxPrice"
                placeholder="Max"
                class="input"
              />
            </div>
          </div>
          
          <!-- Location -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Location</h3>
            <select v-model="filters.location" class="select">
              <option value="">All Locations</option>
              <option v-for="location in locations" :key="location.id" :value="location.id">
                {{ location.name }}
              </option>
            </select>
          </div>
          
          <!-- Condition -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Condition</h3>
            <div class="space-y-2">
              <label v-for="condition in conditions" :key="condition.value" class="flex items-center">
                <input
                  type="checkbox"
                  v-model="filters.conditions"
                  :value="condition.value"
                  class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span class="ml-2 text-gray-700 dark:text-gray-300">{{ condition.label }}</span>
              </label>
            </div>
          </div>
          
          <!-- Sort By -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Sort By</h3>
            <select v-model="filters.sortBy" class="select">
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
          
          <button
            @click="applyFilters"
            class="w-full btn btn-primary"
          >
            Apply Filters
          </button>
        </div>
      </div>
      
      <!-- Products Grid -->
      <div class="lg:col-span-3">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            {{ category.name }}
          </h1>
          
          <div class="flex items-center space-x-4">
            <button
              @click="viewMode = 'grid'"
              class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600"
              :class="{ 'text-primary-600': viewMode === 'grid' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            
            <button
              @click="viewMode = 'list'"
              class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600"
              :class="{ 'text-primary-600': viewMode === 'list' }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Products Grid/List -->
        <div
          :class="{
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6': viewMode === 'grid',
            'space-y-4': viewMode === 'list'
          }"
        >
          <div
            v-for="product in products"
            :key="product.id"
            :class="{
              'bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow': true,
              'flex': viewMode === 'list'
            }"
          >
            <NuxtLink
              :to="`/product/${product.id}`"
              :class="{
                'block': true,
                'flex-1': viewMode === 'list'
              }"
            >
              <div
                :class="{
                  'relative': true,
                  'w-full aspect-square': viewMode === 'grid',
                  'w-48': viewMode === 'list'
                }"
              >
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="w-full h-full object-cover rounded-t-lg"
                  :class="{ 'rounded-l-lg': viewMode === 'list' }"
                />
                <span
                  v-if="product.isNew"
                  class="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded"
                >
                  New
                </span>
              </div>
              
              <div
                class="p-4"
                :class="{ 'flex-1': viewMode === 'list' }"
              >
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                  {{ product.title }}
                </h3>
                <p class="text-primary-600 font-bold mb-2">
                  ETB {{ product.price.toLocaleString() }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ product.location }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="mt-8 flex justify-center">
          <nav class="flex items-center space-x-2">
            <button
              class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 disabled:opacity-50"
              :disabled="currentPage === 1"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              v-for="page in totalPages"
              :key="page"
              class="px-4 py-2 rounded-lg"
              :class="{
                'bg-primary-600 text-white': currentPage === page,
                'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700': currentPage !== page
              }"
            >
              {{ page }}
            </button>
            
            <button
              class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 disabled:opacity-50"
              :disabled="currentPage === totalPages"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const viewMode = ref('grid')
const currentPage = ref(1)
const totalPages = ref(5)

// Mock data - replace with actual data from your backend
const category = ref({
  name: 'Phones',
  slug: route.params.slug,
})

const filters = ref({
  minPrice: '',
  maxPrice: '',
  location: '',
  conditions: [],
  sortBy: 'newest',
})

const locations = ref([
  { id: 1, name: 'Addis Ababa' },
  { id: 2, name: 'Dire Dawa' },
  { id: 3, name: 'Bahir Dar' },
  { id: 4, name: 'Mekelle' },
])

const conditions = ref([
  { value: 'new', label: 'New' },
  { value: 'like_new', label: 'Like New' },
  { value: 'good', label: 'Good' },
  { value: 'fair', label: 'Fair' },
])

const products = ref([
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
  {
    id: 5,
    title: 'Xiaomi Mi 11',
    price: 45000,
    location: 'Mekelle',
    image: '/images/xiaomi.jpg',
    isNew: true,
  },
  {
    id: 6,
    title: 'iPhone 12 Pro',
    price: 70000,
    location: 'Addis Ababa',
    image: '/images/iphone-12.jpg',
    isNew: false,
  },
])

const applyFilters = () => {
  // Implement filter functionality
  console.log('Applied filters:', filters.value)
}
</script> 