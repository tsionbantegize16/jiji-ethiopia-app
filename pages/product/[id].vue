<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Product Images -->
      <div class="lg:col-span-2">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <div class="relative aspect-square mb-4">
            <img
              :src="product.images[currentImageIndex]"
              :alt="product.title"
              class="w-full h-full object-cover rounded-lg"
            />
            <button
              v-if="product.images.length > 1"
              @click="previousImage"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              v-if="product.images.length > 1"
              @click="nextImage"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="currentImageIndex = index"
              class="aspect-square rounded-lg overflow-hidden"
              :class="{ 'ring-2 ring-primary-500': currentImageIndex === index }"
            >
              <img
                :src="image"
                :alt="`${product.title} - Image ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
      
      <!-- Product Info -->
      <div class="space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {{ product.title }}
          </h1>
          <p class="text-3xl font-bold text-primary-600 mb-4">
            ETB {{ product.price.toLocaleString() }}
          </p>
          
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
              <p class="text-gray-900 dark:text-white">{{ product.location }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h3>
              <p class="text-gray-900 dark:text-white">{{ product.category }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Condition</h3>
              <p class="text-gray-900 dark:text-white">{{ product.condition }}</p>
            </div>
            
            <div>
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Description</h3>
              <p class="text-gray-900 dark:text-white whitespace-pre-line">{{ product.description }}</p>
            </div>
          </div>
          
          <div class="mt-6 space-y-4">
            <button class="w-full btn btn-primary">
              <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with Seller
            </button>
            
            <button class="w-full btn btn-secondary">
              <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Seller
            </button>
          </div>
        </div>
        
        <!-- Seller Info -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Seller Information</h2>
          
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span class="text-xl font-semibold text-gray-600 dark:text-gray-300">
                {{ product.seller.name.charAt(0) }}
              </span>
            </div>
            
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">{{ product.seller.name }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Member since {{ product.seller.joinDate }}</p>
            </div>
          </div>
          
          <div class="mt-4 space-y-2">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ product.seller.responseTime }}
            </div>
            
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ product.seller.rating }}% Positive Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const currentImageIndex = ref(0)

// Mock data - replace with actual data from your backend
const product = ref({
  id: route.params.id,
  title: 'iPhone 13 Pro Max',
  price: 85000,
  location: 'Addis Ababa',
  category: 'Phones',
  condition: 'Like New',
  description: 'iPhone 13 Pro Max 256GB\nGraphite\nPerfect condition\nAll accessories included\nWarranty until December 2024',
  images: [
    '/images/iphone-1.jpg',
    '/images/iphone-2.jpg',
    '/images/iphone-3.jpg',
    '/images/iphone-4.jpg',
  ],
  seller: {
    name: 'John Doe',
    joinDate: 'January 2023',
    responseTime: 'Usually responds within 1 hour',
    rating: 98,
  },
})

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + product.value.images.length) % product.value.images.length
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % product.value.images.length
}
</script> 