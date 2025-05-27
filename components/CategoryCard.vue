<template>
  <NuxtLink
    :to="`/category/${category.slug}`"
    class="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
  >
    <div class="flex items-center space-x-4">
      <div class="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
        <component
          :is="category.icon"
          class="w-6 h-6 text-primary-600 dark:text-primary-400"
        />
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-white">
          {{ category.name }}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ category.count }} listings
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Category {
  id: number
  name: string
  slug: string
  count: number
  icon: string
}

defineProps<{
  category: Category
}>()
</script> 