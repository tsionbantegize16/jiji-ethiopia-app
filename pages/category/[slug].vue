<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                Home
              </NuxtLink>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">{{ category.name }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Category Header -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              {{ category.name }}
            </h1>
            <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              {{ category.listings }} active listings
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="showFilters = !showFilters"
              class="px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-all duration-200 flex items-center group"
            >
              <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              <svg class="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span class="relative z-10">Filters</span>
            </button>
            <div class="flex items-center space-x-2">
              <button
                @click="viewMode = 'grid'"
                class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-all duration-200 relative group"
                :class="{ 'text-[#2EC4B6]': viewMode === 'grid' }"
              >
                <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                @click="viewMode = 'list'"
                class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-all duration-200 relative group"
                :class="{ 'text-[#2EC4B6]': viewMode === 'list' }"
              >
                <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Filters Sidebar -->
        <div 
          v-if="showFilters"
          class="lg:col-span-1"
        >
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 sticky top-24 transform transition-all duration-300 hover:shadow-xl">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">
              Filters
            </h2>

            <!-- Price Range -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Price Range
              </h3>
              <div class="flex items-center space-x-2">
                <input
                  type="number"
                  v-model="filters.minPrice"
                  placeholder="Min"
                  class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all duration-200"
                />
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">to</span>
                <input
                  type="number"
                  v-model="filters.maxPrice"
                  placeholder="Max"
                  class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all duration-200"
                />
              </div>
            </div>

            <!-- Location -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Location
              </h3>
              <select
                v-model="filters.location"
                class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all duration-200"
              >
                <option value="">All Locations</option>
                <option value="addis-ababa">Addis Ababa</option>
                <option value="dire-dawa">Dire Dawa</option>
                <option value="hawassa">Hawassa</option>
                <option value="bahir-dar">Bahir Dar</option>
                <option value="mekelle">Mekelle</option>
              </select>
            </div>

            <!-- Condition -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Condition
              </h3>
              <div class="space-y-2">
                <label class="flex items-center group">
                  <input
                    type="checkbox"
                    v-model="filters.conditions"
                    value="new"
                    class="form-checkbox text-[#2EC4B6] focus:ring-[#2EC4B6] transition-all duration-200"
                  />
                  <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">New</span>
                </label>
                <label class="flex items-center group">
                  <input
                    type="checkbox"
                    v-model="filters.conditions"
                    value="used"
                    class="form-checkbox text-[#2EC4B6] focus:ring-[#2EC4B6] transition-all duration-200"
                  />
                  <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">Used</span>
                </label>
              </div>
            </div>

            <!-- Seller Type -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Seller Type
              </h3>
              <div class="space-y-2">
                <label class="flex items-center group">
                  <input
                    type="checkbox"
                    v-model="filters.sellerTypes"
                    value="individual"
                    class="form-checkbox text-[#2EC4B6] focus:ring-[#2EC4B6] transition-all duration-200"
                  />
                  <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">Individual</span>
                </label>
                <label class="flex items-center group">
                  <input
                    type="checkbox"
                    v-model="filters.sellerTypes"
                    value="business"
                    class="form-checkbox text-[#2EC4B6] focus:ring-[#2EC4B6] transition-all duration-200"
                  />
                  <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">Business</span>
                </label>
              </div>
            </div>

            <!-- Sort By -->
            <div class="mb-6">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Sort By
              </h3>
              <select
                v-model="filters.sortBy"
                class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] transition-all duration-200"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <!-- Filter Actions -->
            <div class="space-y-3">
              <button
                @click="applyFilters"
                class="w-full px-4 py-2 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:ring-offset-2 dark:focus:ring-offset-[#4F7F8F]"
              >
                Apply Filters
              </button>
              <button
                @click="resetFilters"
                class="w-full px-4 py-2 border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-lg hover:bg-[#2EC4B6] hover:text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:ring-offset-2 dark:focus:ring-offset-[#4F7F8F]"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        <!-- Listings Grid -->
        <div :class="showFilters ? 'lg:col-span-3' : 'lg:col-span-4'">
          <div 
            :class="[
              'grid gap-6',
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            ]"
          >
            <div 
              v-for="listing in listings" 
              :key="listing.id"
              class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <NuxtLink :to="`/listings/${listing.id}`">
                <div class="relative group">
                  <img 
                    :src="listing.image" 
                    :alt="listing.title"
                    :class="viewMode === 'grid' ? 'h-48' : 'h-64'"
                    class="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    v-if="listing.isNew"
                    class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110"
                  >
                    New
                  </div>
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div class="p-4">
                  <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2 group-hover:text-[#2EC4B6] transition-colors duration-200">
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
                    {{ listing.postedTime }}
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Pagination -->
          <div class="mt-8 flex justify-center">
            <nav class="flex items-center space-x-2">
              <button
                class="px-3 py-2 rounded-lg text-[#4F7F8F] dark:text-[#C9F0EF] hover:bg-[#2EC4B6] hover:text-white transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                :disabled="currentPage === 1"
              >
                Previous
              </button>
              <button
                v-for="page in totalPages"
                :key="page"
                class="px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
                :class="currentPage === page ? 'bg-[#2EC4B6] text-white' : 'text-[#4F7F8F] dark:text-[#C9F0EF] hover:bg-[#2EC4B6] hover:text-white'"
                @click="currentPage = page"
              >
                {{ page }}
              </button>
              <button
                class="px-3 py-2 rounded-lg text-[#4F7F8F] dark:text-[#C9F0EF] hover:bg-[#2EC4B6] hover:text-white transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                :disabled="currentPage === totalPages"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showFilters = ref(true)
const viewMode = ref('grid')
const currentPage = ref(1)
const totalPages = ref(5)

// Mock category data - Replace with actual API call
const category = ref({
  name: 'Phones',
  listings: '3,500'
})

// Mock filters - Replace with actual state management
const filters = ref({
  minPrice: '',
  maxPrice: '',
  location: '',
  conditions: [],
  sellerTypes: [],
  sortBy: 'newest'
})

// Mock listings data - Replace with actual API call
const listings = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro Max - 256GB',
    price: 'ETB 45,000',
    location: 'Addis Ababa',
    postedTime: '2 hours ago',
    image: '/images/iphone.jpg',
    isNew: true
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21 Ultra',
    price: 'ETB 38,000',
    location: 'Dire Dawa',
    postedTime: '5 hours ago',
    image: '/images/samsung.jpg',
    isNew: false
  },
  {
    id: 3,
    title: 'Google Pixel 6 Pro',
    price: 'ETB 35,000',
    location: 'Hawassa',
    postedTime: '1 day ago',
    image: '/images/pixel.jpg',
    isNew: true
  },
  {
    id: 4,
    title: 'OnePlus 9 Pro',
    price: 'ETB 32,000',
    location: 'Addis Ababa',
    postedTime: '2 days ago',
    image: '/images/oneplus.jpg',
    isNew: false
  },
  {
    id: 5,
    title: 'Xiaomi Mi 11 Ultra',
    price: 'ETB 28,000',
    location: 'Bahir Dar',
    postedTime: '3 days ago',
    image: '/images/xiaomi.jpg',
    isNew: false
  },
  {
    id: 6,
    title: 'iPhone 12 Pro - 128GB',
    price: 'ETB 25,000',
    location: 'Mekelle',
    postedTime: '4 days ago',
    image: '/images/iphone-12.jpg',
    isNew: false
  }
])

const applyFilters = () => {
  // Implement filter logic here
  console.log('Applying filters:', filters.value)
}

const resetFilters = () => {
  filters.value = {
    minPrice: '',
    maxPrice: '',
    location: '',
    conditions: [],
    sellerTypes: [],
    sortBy: 'newest'
  }
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Add hover glow effect */
.group:hover .relative {
  filter: drop-shadow(0 0 8px rgba(46, 196, 182, 0.3));
}

/* Add gradient animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style> 