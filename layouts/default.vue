<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F]">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main>
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
                  <option value="vehicles">Vehicles</option>
                  <option value="phones">Phones</option>
                  <option value="electronics">Electronics</option>
                </select>
                <select class="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2EC4B6] focus:ring-2 focus:ring-[#2EC4B6]/20 outline-none">
                  <option value="">All Locations</option>
                  <option value="addis-ababa">Addis Ababa</option>
                  <option value="dire-dawa">Dire Dawa</option>
                  <option value="hawassa">Hawassa</option>
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
    </main>

    <!-- Footer -->
    <footer class="bg-[#4F7F8F] text-[#C9F0EF] py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">About Jiji Ethiopia</h3>
            <p class="text-[#C9F0EF]/70">
              The largest marketplace in Ethiopia. Buy and sell everything from cars to phones.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  FAQ
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Categories</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/category/vehicles" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  Vehicles
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/phones" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  Phones
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/category/electronics" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                  Electronics
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="text-[#C9F0EF]/70 hover:text-[#C9F0EF]">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-[#C9F0EF]/20 text-center text-[#C9F0EF]/70">
          <p>&copy; {{ new Date().getFullYear() }} Jiji Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
</script>

<style scoped>
/* Add any additional styles here */
</style> 