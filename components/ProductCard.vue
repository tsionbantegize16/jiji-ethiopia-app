<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <NuxtLink :to="`/product/${product.id}`" class="block">
      <div class="relative aspect-square">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-full object-cover rounded-t-lg"
        />
        <button
          v-if="showFavorite"
          @click.prevent="toggleFavorite"
          class="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            class="w-5 h-5"
            :class="isFavorite ? 'text-red-500' : 'text-gray-400'"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
        <span
          v-if="product.isNew"
          class="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded"
        >
          New
        </span>
      </div>
      
      <div class="p-4">
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
</template>

<script setup lang="ts">
interface Product {
  id: number
  title: string
  price: number
  location: string
  image: string
  isNew?: boolean
}

const props = defineProps<{
  product: Product
  showFavorite?: boolean
  isFavorite?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleFavorite', product: Product): void
}>()

const toggleFavorite = () => {
  emit('toggleFavorite', props.product)
}
</script> 