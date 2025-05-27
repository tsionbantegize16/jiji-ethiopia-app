<template>
  <div>
    <!-- Hero Section with Search -->
    <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            Find Anything — Fast and Free!
          </h1>
          <p class="text-xl mb-8">
            The best marketplace to buy and sell anything in Ethiopia
          </p>
          
          <!-- Search Form -->
          <div class="bg-white rounded-lg shadow-lg p-4">
            <form @submit.prevent="handleSearch" class="flex flex-col md:flex-row gap-4">
              <div class="flex-grow">
                <input
                  type="text"
                  v-model="searchQuery"
                  placeholder="What are you looking for?"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div class="w-full md:w-48">
                <select
                  v-model="selectedCategory"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Categories</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>
              
              <div class="w-full md:w-48">
                <select
                  v-model="selectedLocation"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Locations</option>
                  <option v-for="location in locations" :key="location.id" :value="location.id">
                    {{ location.name }}
                  </option>
                </select>
              </div>
              
              <button
                type="submit"
                class="w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.slug}`"
            class="group bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="w-16 h-16 mx-auto mb-4 text-primary-600">
              <component :is="category.icon" class="w-full h-full" />
            </div>
            <h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">
              {{ category.name }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ category.count }} items
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Listings -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">Latest Listings</h2>
          <NuxtLink
            to="/listings"
            class="text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All
          </NuxtLink>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="listing in latestListings"
            :key="listing.id"
            class="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <NuxtLink :to="`/product/${listing.id}`">
              <div class="relative">
                <img
                  :src="listing.image"
                  :alt="listing.title"
                  class="w-full h-48 object-cover rounded-t-lg"
                />
                <span
                  v-if="listing.isNew"
                  class="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded"
                >
                  New
                </span>
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
                  {{ listing.title }}
                </h3>
                <p class="text-primary-600 font-bold mb-2">
                  ETB {{ listing.price.toLocaleString() }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ listing.location }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Why Choose Jiji Ethiopia?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-primary-600">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Free to Post</h3>
            <p class="text-gray-600 dark:text-gray-400">
              List your items for free and reach thousands of potential buyers
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-primary-600">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Direct Chat</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Communicate directly with buyers and sellers through our chat system
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 text-primary-600">
              <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Safe Transactions</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Our platform ensures secure and reliable transactions
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Mock data - replace with actual data from your backend
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedLocation = ref('')

const categories = ref([
  { id: 1, name: 'Phones', slug: 'phones', count: 1234, icon: 'PhoneIcon' },
  { id: 2, name: 'Cars', slug: 'cars', count: 567, icon: 'CarIcon' },
  { id: 3, name: 'Electronics', slug: 'electronics', count: 890, icon: 'ElectronicsIcon' },
  { id: 4, name: 'Fashion', slug: 'fashion', count: 2345, icon: 'FashionIcon' },
  { id: 5, name: 'Home', slug: 'home', count: 678, icon: 'HomeIcon' },
  { id: 6, name: 'Jobs', slug: 'jobs', count: 432, icon: 'JobIcon' },
])

const locations = ref([
  { id: 1, name: 'Addis Ababa' },
  { id: 2, name: 'Dire Dawa' },
  { id: 3, name: 'Bahir Dar' },
  { id: 4, name: 'Mekelle' },
])

const latestListings = ref([
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
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Dire Dawa',
    image: '/images/car.jpg',
    isNew: false,
  },
  {
    id: 3,
    title: 'Samsung 4K Smart TV',
    price: 45000,
    location: 'Bahir Dar',
    image: '/images/tv.jpg',
    isNew: true,
  },
  {
    id: 4,
    title: 'MacBook Pro M1',
    price: 120000,
    location: 'Addis Ababa',
    image: '/images/macbook.jpg',
    isNew: false,
  },
])

const handleSearch = () => {
  // Implement search functionality
  console.log('Search:', {
    query: searchQuery.value,
    category: selectedCategory.value,
    location: selectedLocation.value,
  })
}
</script> 