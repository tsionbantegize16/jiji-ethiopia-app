<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Electronics</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Electronics listings will be displayed here -->
      <div v-for="item in electronics" :key="item.id" class="bg-white rounded-lg shadow-md p-4">
        <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover rounded-lg mb-4">
        <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-gray-600 mb-2">{{ item.price }}</p>
        <p class="text-gray-500">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const electronics = ref([
  // Sample data - replace with actual data from your API
  {
    id: 1,
    title: 'iPhone 13 Pro',
    price: 'ETB 45,000',
    description: 'Like new, 256GB storage',
    image: '/images/electronics/iphone.jpg'
  }
  // Add more electronics items here
])
</script> 