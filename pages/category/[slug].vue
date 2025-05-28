<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">
        {{ categoryName }} Listings
      </h1>
      <!-- Category content will go here -->
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const categoryName = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})
</script> 