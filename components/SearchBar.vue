<template>
  <div class="relative max-w-2xl mx-auto mb-12">
    <!-- Search Input Container -->
    <div class="relative group">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      
      <!-- Search Input -->
      <div class="relative flex items-center">
        <input 
          type="text" 
          v-model="searchQuery"
          @input="handleSearch"
          @focus="showSearchResults = true"
          @keydown.enter="handleEnter"
          @keydown.esc="showSearchResults = false"
          placeholder="Search for anything..." 
          class="w-full px-6 py-4 pl-12 rounded-full bg-white/90 dark:bg-[#4F7F8F]/90 text-[#4F7F8F] dark:text-[#C9F0EF] placeholder-[#4F7F8F]/50 dark:placeholder-[#C9F0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] shadow-lg transition-all duration-300"
        />
        
        <!-- Search Icon -->
        <div class="absolute left-4 text-[#4F7F8F] dark:text-[#C9F0EF]">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <!-- Search Button -->
        <button 
          @click="handleSearch"
          class="absolute right-2 bg-[#2EC4B6] text-white p-2 rounded-full hover:bg-[#2EC4B6]/90 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Search Results Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="showSearchResults && searchResults.length > 0"
        class="absolute w-full mt-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-xl overflow-hidden z-[9999] backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
      >
        <!-- Loading State -->
        <div v-if="isLoading" class="p-4 text-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2EC4B6] mx-auto"></div>
          <p class="mt-2 text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Searching...</p>
        </div>

        <!-- Results List -->
        <div v-else class="max-h-96 overflow-y-auto custom-scrollbar">
          <div 
            v-for="result in searchResults" 
            :key="result.id"
            @click="navigateToResult(result)"
            class="p-4 hover:bg-gray-50 dark:hover:bg-[#4F7F8F]/80 cursor-pointer transition-all duration-200 transform hover:translate-x-1 group"
          >
            <div class="flex items-center gap-4">
              <!-- Result Image -->
              <div class="relative w-16 h-16 rounded-lg overflow-hidden group">
                <img 
                  :src="result.image" 
                  :alt="result.title"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <!-- Result Details -->
              <div class="flex-1">
                <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">
                  {{ result.title }}
                </h3>
                <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ result.category }}
                </p>
                <p class="text-[#2EC4B6] font-medium">
                  {{ result.price }}
                </p>
              </div>

              <!-- Arrow Icon -->
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 bg-gray-50 dark:bg-[#4F7F8F]/50 border-t border-gray-100 dark:border-[#C9F0EF]/20">
          <div class="flex items-center justify-between">
            <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              Press <kbd class="px-2 py-1 bg-white dark:bg-[#4F7F8F] rounded shadow-sm">Enter</kbd> to search
            </p>
            <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              {{ searchResults.length }} results found
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const showSearchResults = ref(false)
const isLoading = ref(false)

interface SearchResult {
  id: string
  title: string
  category: string
  price: string
  image: string
  path: string
}

const searchResults = ref<SearchResult[]>([])

// Sample data for all products
const allProducts: SearchResult[] = [
  // Phones
  {
    id: 'phone-1',
    title: 'iPhone 13 Pro',
    category: 'Phones',
    price: 'ETB 45,000',
    image: '/images/listings/iphone.jpg',
    path: '/category/phones'
  },
  // Vehicles
  {
    id: 'vehicle-1',
    title: 'Toyota Land Cruiser',
    category: 'Vehicles',
    price: 'ETB 2,500,000',
    image: '/images/listings/landcruiser.jpg',
    path: '/category/vehicles'
  },
  // Electronics
  {
    id: 'electronics-1',
    title: 'Samsung Smart TV',
    category: 'Electronics',
    price: 'ETB 35,000',
    image: '/images/listings/tv.jpg',
    path: '/category/electronics'
  },
  {
    id: 'electronics-2',
    title: 'MacBook Pro',
    category: 'Electronics',
    price: 'ETB 85,000',
    image: '/images/listings/macbook.jpg',
    path: '/category/electronics'
  },
  // Home & Garden
  {
    id: 'home-1',
    title: 'Modern Sofa Set',
    category: 'Home & Garden',
    price: 'ETB 45,000',
    image: '/images/listings/sofa.jpg',
    path: '/category/home-garden'
  },
  {
    id: 'home-2',
    title: 'Garden Tools Set',
    category: 'Home & Garden',
    price: 'ETB 5,000',
    image: '/images/listings/garden-tools.jpg',
    path: '/category/home-garden'
  },
  // Sports
  {
    id: 'sports-1',
    title: 'Professional Football',
    category: 'Sports',
    price: 'ETB 2,500',
    image: '/images/listings/football.jpg',
    path: '/category/sports'
  },
  {
    id: 'sports-2',
    title: 'Basketball Set',
    category: 'Sports',
    price: 'ETB 5,000',
    image: '/images/listings/basketball.jpg',
    path: '/category/sports'
  }
]

// Debounce function to limit API calls
const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// Handle search with debounce
const handleSearch = debounce(async () => {
  if (searchQuery.value.trim() === '') {
    searchResults.value = []
    showSearchResults.value = false
    return
  }

  isLoading.value = true
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const query = searchQuery.value.toLowerCase()
    searchResults.value = allProducts.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
    showSearchResults.value = true
  } catch (error) {
    console.error('Search error:', error)
  } finally {
    isLoading.value = false
  }
}, 300)

// Handle Enter key
const handleEnter = () => {
  if (searchResults.value.length > 0) {
    navigateToResult(searchResults.value[0])
  }
}

// Navigate to result
const navigateToResult = (result: SearchResult) => {
  showSearchResults.value = false
  searchQuery.value = ''
  router.push(result.path)
}

// Close search results when clicking outside
const handleClickOutside = (e: MouseEvent) => {
  const searchBar = document.querySelector('.relative')
  if (searchBar && !searchBar.contains(e.target as Node)) {
    showSearchResults.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #2EC4B6 #f3f4f6;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #2EC4B6;
  border-radius: 3px;
}

/* Animations */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Shadow effects */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Backdrop blur */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}
</style> 