<template>
  <form @submit.prevent="handleSearch" class="relative">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="What are you looking for?"
      class="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
    />
    <svg
      class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
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
</template>

<script setup lang="ts">
const searchQuery = ref('')
const router = useRouter()

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search',
      query: { q: searchQuery.value.trim() }
    })
  }
}
</script> 