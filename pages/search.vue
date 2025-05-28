<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F]">
    <!-- Search Header -->
    <section class="bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white mb-4">Search Results</h1>
        <div class="relative max-w-2xl mx-auto">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Search for anything..."
            class="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 outline-none"
            @input="handleSearch"
          />
          <button class="absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-8">
        <select 
          v-model="selectedCategory"
          class="px-4 py-2 rounded-lg bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] border border-gray-200 dark:border-[#C9F0EF]/20"
        >
          <option value="">All Categories</option>
          <option value="vehicles">Vehicles</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home & Garden</option>
        </select>

        <select 
          v-model="sortBy"
          class="px-4 py-2 rounded-lg bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] border border-gray-200 dark:border-[#C9F0EF]/20"
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>

        <select 
          v-model="condition"
          class="px-4 py-2 rounded-lg bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] border border-gray-200 dark:border-[#C9F0EF]/20"
        >
          <option value="">All Conditions</option>
          <option value="new">New</option>
          <option value="like_new">Like New</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
        </select>
      </div>

      <!-- Results Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="item in filteredResults" 
          :key="item.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
        >
          <NuxtLink :to="`/${item.category}/${item.id}`">
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
              <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-[#4F7F8F]/90 text-[#4F7F8F] dark:text-[#C9F0EF] px-3 py-1 rounded-full text-sm font-medium">
                {{ item.condition }}
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
                  {{ item.title }}
                </h3>
                <span class="text-[#2EC4B6] font-medium">{{ item.category }}</span>
              </div>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                ETB {{ formatPrice(item.price) }}
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#C9F0EF]/20">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-[#2EC4B6]/10 flex items-center justify-center">
                    <span class="text-sm font-medium text-[#2EC4B6]">{{ item.seller.name.charAt(0) }}</span>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">{{ item.seller.name }}</p>
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="text-sm">{{ item.seller.rating }}</span>
                    </div>
                  </div>
                </div>
                <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ item.location }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredResults.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 mx-auto text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">No results found</h3>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Try adjusting your search or filters</p>
      </div>

      <!-- Pagination -->
      <div v-if="filteredResults.length > 0" class="flex justify-center mt-8">
        <div class="flex items-center gap-2">
          <button 
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-4 py-2 rounded-lg border border-gray-200 dark:border-[#C9F0EF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span class="px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF]">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button 
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 rounded-lg border border-gray-200 dark:border-[#C9F0EF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface SearchResult {
  id: number
  title: string
  price: number
  category: string
  condition: string
  location: string
  image: string
  isNew: boolean
  seller: {
    name: string
    rating: number
    verified: boolean
  }
}

// State
const searchQuery = ref('')
const selectedCategory = ref('')
const sortBy = ref('relevance')
const condition = ref('')
const currentPage = ref(1)
const itemsPerPage = 12

// Sample search results with real images
const searchResults = ref<SearchResult[]>([
  {
    id: 1,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    category: 'vehicles',
    condition: 'like_new',
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    seller: {
      name: 'Auto Dealer',
      rating: 4.9,
      verified: true
    }
  },
  {
    id: 2,
    title: 'iPhone 13 Pro Max',
    price: 85000,
    category: 'electronics',
    condition: 'new',
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1632661674596-79bd3e38d725?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    seller: {
      name: 'Tech Store',
      rating: 4.8,
      verified: true
    }
  },
  {
    id: 3,
    title: 'Designer Leather Jacket',
    price: 12000,
    category: 'fashion',
    condition: 'new',
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    seller: {
      name: 'Fashion Boutique',
      rating: 4.7,
      verified: true
    }
  },
  {
    id: 4,
    title: 'Modern Sofa Set',
    price: 45000,
    category: 'home',
    condition: 'like_new',
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    seller: {
      name: 'Home Decor',
      rating: 4.6,
      verified: true
    }
  },
  {
    id: 5,
    title: 'Samsung Galaxy S21',
    price: 65000,
    category: 'electronics',
    condition: 'good',
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    seller: {
      name: 'Mobile World',
      rating: 4.5,
      verified: true
    }
  },
  {
    id: 6,
    title: 'Vintage Watch',
    price: 15000,
    category: 'fashion',
    condition: 'good',
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    seller: {
      name: 'Luxury Timepieces',
      rating: 4.9,
      verified: true
    }
  },
  {
    id: 7,
    title: 'Smart TV 55"',
    price: 35000,
    category: 'electronics',
    condition: 'new',
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    seller: {
      name: 'Electronics Hub',
      rating: 4.7,
      verified: true
    }
  },
  {
    id: 8,
    title: 'Gaming Laptop',
    price: 85000,
    category: 'electronics',
    condition: 'like_new',
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    seller: {
      name: 'Gaming Store',
      rating: 4.8,
      verified: true
    }
  }
])

// Computed
const filteredResults = computed(() => {
  let results = [...searchResults.value]

  // Apply search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    results = results.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
    )
  }

  // Apply category filter
  if (selectedCategory.value) {
    results = results.filter(item => item.category === selectedCategory.value)
  }

  // Apply condition filter
  if (condition.value) {
    results = results.filter(item => item.condition === condition.value)
  }

  // Apply sorting
  switch (sortBy.value) {
    case 'price_asc':
      results.sort((a, b) => a.price - b.price)
      break
    case 'price_desc':
      results.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      results.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      break
  }

  return results
})

const totalPages = computed(() => Math.ceil(filteredResults.value.length / itemsPerPage))

// Methods
const handleSearch = () => {
  currentPage.value = 1
}

const formatPrice = (price: number) => {
  return price.toLocaleString('en-US')
}

// Watch for changes in filters
watch([selectedCategory, sortBy, condition], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #2EC4B6 #C9F0EF;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #C9F0EF;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #2EC4B6;
  border-radius: 3px;
}

/* Enhanced hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

.hover\:translate-x-1:hover {
  transform: translateX(0.25rem);
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Enhanced shadows */
.shadow-hover {
  transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>