<template>
  <div class="w-full max-w-3xl mx-auto">
    <div class="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        class="w-full px-6 py-4 text-lg bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] dark:focus:ring-[#C9F0EF] transition-all duration-300"
      />
      <button class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2EC4B6] dark:bg-[#C9F0EF] text-white dark:text-[#4F7F8F] px-6 py-2 rounded-lg hover:bg-[#2EC4B6]/90 dark:hover:bg-[#C9F0EF]/90 transition-colors duration-200">
        Search
      </button>
    </div>
    
    <!-- Popular Searches -->
    <div class="mt-4 flex flex-wrap gap-2 justify-center">
      <button
        v-for="term in popularSearches"
        :key="term"
        class="px-4 py-2 bg-[#C9F0EF]/20 dark:bg-[#2EC4B6]/20 text-[#4F7F8F] dark:text-[#C9F0EF] rounded-full text-sm hover:bg-[#C9F0EF]/30 dark:hover:bg-[#2EC4B6]/30 transition-colors duration-200"
      >
        {{ term }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const popularSearches = [
  'iPhone',
  'Toyota',
  'Laptop',
  'Apartment',
  'Job',
  'Car'
]
</script> 