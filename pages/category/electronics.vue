<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                Home
              </NuxtLink>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Electronics</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Category Header -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Electronics
            </h1>
            <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
              {{ totalListings }} active listings
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="showFilters = !showFilters"
              class="px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-all duration-200 flex items-center group"
            >
              <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              <svg class="w-5 h-5 mr-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span class="relative z-10">Filters</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Subcategories -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <NuxtLink 
          v-for="subcat in subcategories" 
          :key="subcat.id"
          :to="subcat.path"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 text-center transform transition-all duration-300 hover:shadow-lg hover:scale-105 group"
        >
          <div class="w-16 h-16 mx-auto mb-3 bg-[#C9F0EF]/10 dark:bg-[#2EC4B6]/10 rounded-full flex items-center justify-center group-hover:bg-[#2EC4B6]/20 transition-colors duration-200">
            <component :is="subcat.icon" class="w-8 h-8 text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200" />
          </div>
          <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">
            {{ subcat.name }}
          </h3>
          <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
            {{ subcat.count }} listings
          </p>
        </NuxtLink>
      </div>

      <!-- Featured Listings -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Featured Listings
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="listing in featuredListings" 
            :key="listing.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <NuxtLink :to="`/listings/${listing.id}`">
              <div class="relative group">
                <img 
                  :src="listing.image" 
                  :alt="listing.title"
                  class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  v-if="listing.isNew"
                  class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110"
                >
                  New
                </div>
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2 group-hover:text-[#2EC4B6] transition-colors duration-200">
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
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Popular Brands -->
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Popular Brands
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <NuxtLink 
            v-for="brand in popularBrands" 
            :key="brand.id"
            :to="brand.path"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl p-4 text-center transform transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <img 
              :src="brand.logo" 
              :alt="brand.name"
              class="w-16 h-16 mx-auto mb-3 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">
              {{ brand.name }}
            </h3>
          </NuxtLink>
        </div>
      </div>

      <!-- Latest Listings -->
      <div>
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Latest Listings
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="listing in latestListings" 
            :key="listing.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <NuxtLink :to="`/listings/${listing.id}`">
              <div class="relative group">
                <img 
                  :src="listing.image" 
                  :alt="listing.title"
                  class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  v-if="listing.isNew"
                  class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-110"
                >
                  New
                </div>
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2 group-hover:text-[#2EC4B6] transition-colors duration-200">
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
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showFilters = ref(false)
const totalListings = ref('12,500')

// Subcategories data
const subcategories = ref([
  {
    id: 1,
    name: 'Phones',
    path: '/category/phones',
    count: '3,500',
    icon: 'PhoneIcon'
  },
  {
    id: 2,
    name: 'Laptops',
    path: '/category/laptops',
    count: '2,800',
    icon: 'LaptopIcon'
  },
  {
    id: 3,
    name: 'Tablets',
    path: '/category/tablets',
    count: '1,200',
    icon: 'TabletIcon'
  },
  {
    id: 4,
    name: 'Accessories',
    path: '/category/accessories',
    count: '5,000',
    icon: 'AccessoriesIcon'
  }
])

// Featured listings data
const featuredListings = ref([
  {
    id: 1,
    title: 'iPhone 13 Pro Max - 256GB',
    price: 'ETB 45,000',
    location: 'Addis Ababa',
    image: '/images/iphone.jpg',
    isNew: true
  },
  {
    id: 2,
    title: 'MacBook Pro M1 - 16GB',
    price: 'ETB 85,000',
    location: 'Dire Dawa',
    image: '/images/macbook.jpg',
    isNew: false
  },
  {
    id: 3,
    title: 'iPad Pro 12.9" - 256GB',
    price: 'ETB 55,000',
    location: 'Hawassa',
    image: '/images/ipad.jpg',
    isNew: true
  },
  {
    id: 4,
    title: 'Samsung Galaxy S21 Ultra',
    price: 'ETB 38,000',
    location: 'Addis Ababa',
    image: '/images/samsung.jpg',
    isNew: false
  }
])

// Popular brands data
const popularBrands = ref([
  {
    id: 1,
    name: 'Apple',
    logo: '/images/brands/apple.png',
    path: '/brand/apple'
  },
  {
    id: 2,
    name: 'Samsung',
    logo: '/images/brands/samsung.png',
    path: '/brand/samsung'
  },
  {
    id: 3,
    name: 'Dell',
    logo: '/images/brands/dell.png',
    path: '/brand/dell'
  },
  {
    id: 4,
    name: 'HP',
    logo: '/images/brands/hp.png',
    path: '/brand/hp'
  },
  {
    id: 5,
    name: 'Lenovo',
    logo: '/images/brands/lenovo.png',
    path: '/brand/lenovo'
  },
  {
    id: 6,
    name: 'Asus',
    logo: '/images/brands/asus.png',
    path: '/brand/asus'
  }
])

// Latest listings data
const latestListings = ref([
  {
    id: 5,
    title: 'Google Pixel 6 Pro',
    price: 'ETB 35,000',
    location: 'Bahir Dar',
    image: '/images/pixel.jpg',
    isNew: true
  },
  {
    id: 6,
    title: 'Dell XPS 13',
    price: 'ETB 75,000',
    location: 'Mekelle',
    image: '/images/dell.jpg',
    isNew: false
  },
  {
    id: 7,
    title: 'AirPods Pro',
    price: 'ETB 15,000',
    location: 'Addis Ababa',
    image: '/images/airpods.jpg',
    isNew: true
  },
  {
    id: 8,
    title: 'Samsung Galaxy Tab S7',
    price: 'ETB 28,000',
    location: 'Dire Dawa',
    image: '/images/samsung-tab.jpg',
    isNew: false
  }
])
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Add hover glow effect */
.group:hover .relative {
  filter: drop-shadow(0 0 8px rgba(46, 196, 182, 0.3));
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