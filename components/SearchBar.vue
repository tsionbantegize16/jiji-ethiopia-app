<template>
  <div class="relative">
    <form @submit.prevent="handleSearch" class="relative">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for anything..."
        class="w-full px-4 py-2 pl-10 text-[#4F7F8F] dark:text-[#C9F0EF] bg-white dark:bg-[#4F7F8F] rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent transition-all duration-200"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="w-5 h-5 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <button
        type="submit"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
      >
        <span class="sr-only">Search</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: { q: searchQuery.value.trim() }
    })
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style> 