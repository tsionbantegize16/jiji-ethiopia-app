<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Buy and Sell Everything in Ethiopia
          </h1>
          <p class="text-xl text-white/90 mb-8">
            The largest marketplace in Ethiopia. Find everything you need, from cars to phones.
          </p>
          <!-- Smart Search -->
          <div class="bg-white rounded-lg shadow-xl p-4">
            <div class="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                class="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none"
              />
              <select class="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
                <option value="">All Categories</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
              <select class="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
                <option value="">All Locations</option>
                <option v-for="location in locations" :key="location.id" :value="location.id">
                  {{ location.name }}
                </option>
              </select>
              <button class="px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="py-16 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8 text-center">
          Popular Categories
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <NuxtLink 
            v-for="category in popularCategories" 
            :key="category.id"
            :to="category.link"
            class="group"
          >
            <div class="bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-xl p-6 text-center transition-all duration-200 hover:bg-[#C9F0EF]/20 dark:hover:bg-[#2EC4B6]/20">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2EC4B6]/10 dark:bg-[#2EC4B6]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <component :is="category.icon" class="w-8 h-8 text-[#4F7F8F] dark:text-[#C9F0EF]" />
              </div>
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-1">
                {{ category.name }}
              </h3>
              <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                {{ category.count }}+ listings
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Listings -->
    <section class="py-16 bg-[#C9F0EF] dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">
            Latest Listings
          </h2>
          <NuxtLink 
            to="/listings" 
            class="text-[#2EC4B6] hover:text-[#4F7F8F] dark:text-[#C9F0EF] dark:hover:text-[#2EC4B6] transition-colors duration-200"
          >
            View All
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="listing in latestListings" 
            :key="listing.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <NuxtLink :to="`/listings/${listing.id}`">
              <div class="relative">
                <img 
                  :src="listing.image" 
                  :alt="listing.title"
                  class="w-full h-48 object-cover"
                />
                <div 
                  v-if="listing.isNew"
                  class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  New
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                  {{ listing.title }}
                </h3>
                <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                  {{ listing.price }}
                </p>
                <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ listing.location }}
                </div>
                <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mt-2">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ listing.time }}
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-12 text-center">
          Why Choose Jiji Ethiopia?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            class="text-center"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2EC4B6]/10 dark:bg-[#2EC4B6]/20 flex items-center justify-center">
              <component :is="feature.icon" class="w-8 h-8 text-[#4F7F8F] dark:text-[#C9F0EF]" />
            </div>
            <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-16 bg-[#C9F0EF] dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div 
            v-for="stat in statistics" 
            :key="stat.id"
          >
            <div class="text-4xl font-bold text-[#2EC4B6] mb-2">
              {{ stat.value }}
            </div>
            <div class="text-[#4F7F8F] dark:text-[#C9F0EF]">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
            Stay Updated
          </h2>
          <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mb-8">
            Get notified about new listings in your area and price drops on saved items.
          </p>
          <form class="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none"
            />
            <button class="px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Popular Categories Data
const popularCategories = [
  {
    id: 1,
    name: 'Vehicles',
    count: '1,200',
    icon: 'CarIcon',
    link: '/category/vehicles'
  },
  {
    id: 2,
    name: 'Phones',
    count: '3,500',
    icon: 'PhoneIcon',
    link: '/category/phones'
  },
  {
    id: 3,
    name: 'Electronics',
    count: '2,800',
    icon: 'ComputerIcon',
    link: '/category/electronics'
  },
  {
    id: 4,
    name: 'Fashion',
    count: '4,200',
    icon: 'ClothesIcon',
    link: '/category/fashion'
  },
  {
    id: 5,
    name: 'Home & Garden',
    count: '1,800',
    icon: 'HomeIcon',
    link: '/category/home-garden'
  },
  {
    id: 6,
    name: 'Sports',
    count: '900',
    icon: 'SportsIcon',
    link: '/category/sports'
  }
]

// Latest Listings Data
const latestListings = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max',
    price: 'ETB 45,000',
    location: 'Addis Ababa',
    time: '2 hours ago',
    image: '/images/iphone.jpg',
    isNew: true
  },
  {
    id: 2,
    title: 'Toyota Land Cruiser 2020',
    price: 'ETB 2,500,000',
    location: 'Dire Dawa',
    time: '5 hours ago',
    image: '/images/car.jpg',
    isNew: false
  },
  {
    id: 3,
    title: 'Samsung 4K Smart TV',
    price: 'ETB 35,000',
    location: 'Hawassa',
    time: '1 day ago',
    image: '/images/tv.jpg',
    isNew: true
  },
  {
    id: 4,
    title: 'MacBook Pro 2021',
    price: 'ETB 85,000',
    location: 'Addis Ababa',
    time: '2 days ago',
    image: '/images/laptop.jpg',
    isNew: false
  }
]

// Features Data
const features = [
  {
    id: 1,
    title: '100% Free',
    description: 'No hidden fees or charges. List your items for free.',
    icon: 'FreeIcon'
  },
  {
    id: 2,
    title: 'Safe & Verified',
    description: 'All sellers are verified for your safety.',
    icon: 'ShieldIcon'
  },
  {
    id: 3,
    title: 'Instant Chat',
    description: 'Chat directly with sellers in real-time.',
    icon: 'ChatIcon'
  }
]

// Statistics Data
const statistics = [
  {
    id: 1,
    value: '20,000+',
    label: 'Active Listings'
  },
  {
    id: 2,
    value: '10,000+',
    label: 'Active Users'
  },
  {
    id: 3,
    value: '50+',
    label: 'Cities Covered'
  },
  {
    id: 4,
    value: '5,000+',
    label: 'Daily Deals'
  }
]

// Categories and Locations for Search
const categories = [
  { id: 1, name: 'Vehicles' },
  { id: 2, name: 'Phones' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Fashion' }
]

const locations = [
  { id: 1, name: 'Addis Ababa' },
  { id: 2, name: 'Dire Dawa' },
  { id: 3, name: 'Bahir Dar' },
  { id: 4, name: 'Mekelle' }
]
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Add gradient animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style> 