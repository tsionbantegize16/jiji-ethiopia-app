<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      My Favorites
    </h1>

    <!-- Favorites Grid -->
    <div v-if="favorites.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="item in favorites"
        :key="item.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <NuxtLink :to="`/product/${item.id}`" class="block">
          <div class="relative aspect-square">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover rounded-t-lg"
            />
            <button
              @click.prevent="removeFromFavorites(item)"
              class="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <span
              v-if="item.isNew"
              class="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded"
            >
              New
            </span>
          </div>
          
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
              {{ item.title }}
            </h3>
            <p class="text-primary-600 font-bold mb-2">
              ETB {{ item.price.toLocaleString() }}
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ item.location }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="text-center py-12"
    >
      <svg
        class="w-16 h-16 mx-auto text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No favorites yet
      </h2>
      <p class="text-gray-500 dark:text-gray-400 mb-6">
        Save items you like by clicking the heart icon
      </p>
      <NuxtLink
        to="/"
        class="btn btn-primary"
      >
        Browse Listings
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock data - replace with actual data from your backend
const favorites = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro Max',
    price: 85000,
    location: 'Addis Ababa',
    image: '/images/iphone.jpg',
    isNew: true,
  },
  {
    id: 2,
    title: 'Samsung Galaxy S21',
    price: 65000,
    location: 'Dire Dawa',
    image: '/images/samsung.jpg',
    isNew: false,
  },
  {
    id: 3,
    title: 'Google Pixel 6',
    price: 55000,
    location: 'Bahir Dar',
    image: '/images/pixel.jpg',
    isNew: true,
  },
  {
    id: 4,
    title: 'OnePlus 9 Pro',
    price: 75000,
    location: 'Addis Ababa',
    image: '/images/oneplus.jpg',
    isNew: false,
  },
])

const removeFromFavorites = (item) => {
  const index = favorites.value.findIndex(favorite => favorite.id === item.id)
  if (index !== -1) {
    favorites.value.splice(index, 1)
  }
}
</script> 