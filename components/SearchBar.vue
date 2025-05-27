<template>
  <div class="relative">
    <div class="flex items-center bg-white dark:bg-[#4F7F8F] rounded-lg shadow-sm">
      <div class="flex-1 relative">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for anything..."
          class="w-full px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] bg-transparent border-none focus:outline-none"
          @focus="showFilters = true"
        />
        <div v-if="searchQuery" class="absolute right-2 top-1/2 transform -translate-y-1/2">
          <button
            @click="clearSearch"
            class="text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 hover:text-[#4F7F8F] dark:hover:text-[#C9F0EF]"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <button
        @click="toggleFilters"
        class="px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>
      <button
        @click="performSearch"
        class="px-4 py-2 bg-[#2EC4B6] text-white rounded-r-lg hover:bg-[#4F7F8F] transition-colors duration-200"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <!-- Advanced Filters -->
    <div
      v-if="showFilters"
      class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-4 z-50"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Category Filter -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            Category
          </label>
          <select
            v-model="filters.category"
            class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          >
            <option value="">All Categories</option>
            <option value="vehicles">Vehicles</option>
            <option value="phones">Phones</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home & Garden</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        <!-- Price Range Filter -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            Price Range
          </label>
          <div class="flex items-center space-x-2">
            <input
              type="number"
              v-model="filters.minPrice"
              placeholder="Min"
              class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
            />
            <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">to</span>
            <input
              type="number"
              v-model="filters.maxPrice"
              placeholder="Max"
              class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
            />
          </div>
        </div>

        <!-- Location Filter -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            Location
          </label>
          <select
            v-model="filters.location"
            class="w-full px-3 py-2 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          >
            <option value="">All Locations</option>
            <option value="addis-ababa">Addis Ababa</option>
            <option value="dire-dawa">Dire Dawa</option>
            <option value="hawassa">Hawassa</option>
            <option value="bahir-dar">Bahir Dar</option>
            <option value="mekelle">Mekelle</option>
          </select>
        </div>
      </div>

      <!-- Additional Filters -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <!-- Condition Filter -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            Condition
          </label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="filters.condition"
                value="new"
                class="form-radio text-[#2EC4B6] focus:ring-[#2EC4B6]"
              />
              <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF]">New</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="filters.condition"
                value="used"
                class="form-radio text-[#2EC4B6] focus:ring-[#2EC4B6]"
              />
              <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF]">Used</span>
            </label>
          </div>
        </div>

        <!-- Seller Type Filter -->
        <div>
          <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            Seller Type
          </label>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="filters.sellerType"
                value="individual"
                class="form-radio text-[#2EC4B6] focus:ring-[#2EC4B6]"
              />
              <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF]">Individual</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="filters.sellerType"
                value="business"
                class="form-radio text-[#2EC4B6] focus:ring-[#2EC4B6]"
              />
              <span class="ml-2 text-[#4F7F8F] dark:text-[#C9F0EF]">Business</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Filter Actions -->
      <div class="flex justify-end space-x-2 mt-4">
        <button
          @click="resetFilters"
          class="px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200"
        >
          Reset
        </button>
        <button
          @click="applyFilters"
          class="px-4 py-2 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const showFilters = ref(false)
const filters = ref({
  category: '',
  minPrice: '',
  maxPrice: '',
  location: '',
  condition: '',
  sellerType: ''
})

const toggleFilters = () => {
  showFilters.value = !showFilters.value
}

const clearSearch = () => {
  searchQuery.value = ''
}

const resetFilters = () => {
  filters.value = {
    category: '',
    minPrice: '',
    maxPrice: '',
    location: '',
    condition: '',
    sellerType: ''
  }
}

const applyFilters = () => {
  // Implement filter logic here
  showFilters.value = false
}

const performSearch = () => {
  // Implement search logic here
  showFilters.value = false
}

// Close filters when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      showFilters.value = false
    }
  })
})
</script>

<style scoped>
/* Add any additional styles here */
</style> 