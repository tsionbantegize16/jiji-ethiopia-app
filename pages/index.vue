<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] overflow-hidden">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute inset-0 bg-[url('/images/hero-bg-new.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Buy and Sell Everything in Ethiopia
          </h1>
          <p class="text-xl text-white/90 mb-8 drop-shadow">
            The largest marketplace in Ethiopia. Find everything you need, from cars to phones.
          </p>
          <!-- Enhanced Search Bar -->
          <div class="relative max-w-2xl mx-auto mb-12">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div class="relative flex items-center">
                <input 
                  type="text" 
                  v-model="searchQuery"
                  @input="handleSearch"
                  @focus="showSearchResults = true"
                  @keydown="onInputKeydown"
                  placeholder="Search for anything..." 
                  class="w-full px-6 py-4 pl-12 rounded-full bg-white/90 dark:bg-[#4F7F8F]/90 text-[#4F7F8F] dark:text-[#C9F0EF] placeholder-[#4F7F8F]/50 dark:placeholder-[#C9F0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] shadow-lg transition-all duration-300"
                  ref="searchInputRef"
                />
                <div class="absolute left-4 text-[#4F7F8F] dark:text-[#C9F0EF]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button 
                  @click="handleSearch"
                  class="absolute right-2 bg-[#2EC4B6] text-white p-2 rounded-full hover:bg-[#2EC4B6]/90 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <!-- Enhanced Search Results Dropdown -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div 
                v-if="showSearchResults && searchResults.length > 0"
                class="absolute w-full mt-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-xl overflow-hidden z-[9999] backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95"
              >
                <div class="max-h-96 overflow-y-auto custom-scrollbar">
                  <div 
                    v-for="(result, index) in searchResults" 
                    :key="result.id"
                    @click="navigateToResult(result)"
                    :class="{'bg-gray-50 dark:bg-[#4F7F8F]/80 cursor-pointer transition-all duration-200 transform hover:translate-x-1': highlightedIndex === index}"
                  >
                    <div class="flex items-center gap-4">
                      <div class="relative w-16 h-16 rounded-lg overflow-hidden group">
                        <img 
                          :src="result.image" 
                          :alt="result.title"
                          class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div class="flex-1">
                        <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF] group-hover:text-[#2EC4B6] transition-colors duration-200">{{ result.title }}</h3>
                        <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">{{ result.category }}</p>
                        <p class="text-[#2EC4B6] font-medium">{{ result.price }}</p>
                      </div>
                      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-[#4F7F8F]/50 border-t border-gray-100 dark:border-[#C9F0EF]/20">
                  <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                    Press <kbd class="px-2 py-1 bg-white dark:bg-[#4F7F8F] rounded shadow-sm">Enter</kbd> to search
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Categories -->
    <section class="py-16 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4 z-999">
        <h2 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8 text-center">
          Popular Categories
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <NuxtLink
            v-for="category in popularCategories"
            :key="category.id"
            :to="category.link"
            class="group"
          >
            <div class="relative overflow-hidden rounded-xl aspect-square">
              <img 
                :src="category.image" 
                :alt="category.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 class="text-lg font-medium mb-1">{{ category.name }}</h3>
                <p class="text-sm text-white/80">{{ category.count }}+ listings</p>
              </div>
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
            class="text-[#2EC4B6] hover:text-[#4F7F8F] dark:text-[#C9F0EF] dark:hover:text-[#2EC4B6] transition-colors duration-200 flex items-center gap-2"
          >
            View All
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="listing in latestListings" 
            :key="listing.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
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
                <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-[#4F7F8F]/90 text-[#4F7F8F] dark:text-[#C9F0EF] px-3 py-1 rounded-full text-sm font-medium">
                  {{ listing.condition }}
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
                    {{ listing.title }}
                  </h3>
                  <svg v-if="listing.seller.verified" class="w-5 h-5 text-[#2EC4B6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
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
                <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-[#C9F0EF]/20">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-[#2EC4B6]/10 flex items-center justify-center">
                      <span class="text-sm font-medium text-[#2EC4B6]">{{ listing.seller.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">{{ listing.seller.name }}</p>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">{{ listing.seller.rating }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                    {{ listing.time }}
                  </div>
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
            class="text-center group p-8 bg-gray-50 dark:bg-[#2EC4B6]/10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#2EC4B6] to-[#5EBFCA] group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <component :is="feature.icon" class="w-8 h-8 text-white animate-bounce-slow" aria-hidden="true" />
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
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, TagIcon } from '@heroicons/vue/24/solid'

const router = useRouter()
const searchQuery = ref('')
const showSearchResults = ref(false)
const isLoading = ref(false)
const selectedCategory = ref('')
const selectedLocation = ref('')
const highlightedIndex = ref(-1)
const searchInputRef = ref<HTMLInputElement | null>(null)

// Click-outside handler for dropdown
function handleClickOutside(event: MouseEvent) {
  const dropdown = document.getElementById('search-dropdown')
  const input = document.getElementById('search-input')
  if (dropdown && !dropdown.contains(event.target as Node) && input && !input.contains(event.target as Node)) {
    showSearchResults.value = false
    highlightedIndex.value = -1
  }
}
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

interface SearchResult {
  id: string
  title: string
  category: string
  price: number
  image: string
  path: string
  location?: string
}

const searchResults = ref<SearchResult[]>([])

// Popular Categories Data (Unsplash images)
const popularCategories = [
  {
    id: 1,
    name: 'Vehicles',
    count: '1,200',
    icon: 'CarIcon',
    link: '/category/vehicles',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Phones',
    count: '3,500',
    icon: 'PhoneIcon',
    link: '/category/phones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Electronics',
    count: '2,800',
    icon: 'ComputerIcon',
    link: '/category/electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Fashion',
    count: '4,200',
    icon: 'ClothesIcon',
    link: '/category/fashion',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Home & Garden',
    count: '1,800',
    icon: 'HomeIcon',
    link: '/category/home-garden',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Sports',
    count: '900',
    icon: 'SportsIcon',
    link: '/category/sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&q=60'
  }
]

// Latest Listings Data (Unsplash images, numeric price)
const latestListings = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max',
    price: 45000,
    location: 'Addis Ababa',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    condition: 'Like New',
    seller: {
      name: 'Tech Store',
      rating: 4.8,
      verified: true
    }
  },
  {
    id: 2,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Dire Dawa',
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    condition: 'Excellent',
    seller: {
      name: 'Auto Dealer',
      rating: 4.9,
      verified: true
    }
  },
  {
    id: 3,
    title: 'Samsung 4K Smart TV',
    price: 35000,
    location: 'Hawassa',
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    isNew: true,
    condition: 'New',
    seller: {
      name: 'Electronics Hub',
      rating: 4.7,
      verified: true
    }
  },
  {
    id: 4,
    title: 'MacBook Pro 2021',
    price: 85000,
    location: 'Addis Ababa',
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60',
    isNew: false,
    condition: 'Like New',
    seller: {
      name: 'Apple Store',
      rating: 4.9,
      verified: true
    }
  }
]

// Features Data
const features = [
  {
    id: 1,
    title: '100% Free',
    description: 'No hidden fees or charges. List your items for free.',
    icon: TagIcon
  },
  {
    id: 2,
    title: 'Safe & Verified',
    description: 'All sellers are verified for your safety.',
    icon: ShieldCheckIcon
  },
  {
    id: 3,
    title: 'Instant Chat',
    description: 'Chat directly with sellers in real-time.',
    icon: ChatBubbleLeftRightIcon
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

// Sample data for all products (Unsplash images, numeric price)
const allProducts = [
  {
    id: 'phone-1',
    title: 'iPhone 13 Pro',
    category: 'Phones',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=60',
    path: '/category/phones',
    location: 'Addis Ababa'
  },
  {
    id: 'vehicle-1',
    title: 'Toyota Land Cruiser',
    category: 'Vehicles',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    path: '/category/vehicles',
    location: 'Dire Dawa'
  },
  {
    id: 'electronics-1',
    title: 'Samsung Smart TV',
    category: 'Electronics',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    path: '/category/electronics',
    location: 'Hawassa'
  },
  {
    id: 'electronics-2',
    title: 'MacBook Pro',
    category: 'Electronics',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60',
    path: '/category/electronics',
    location: 'Addis Ababa'
  },
  {
    id: 'home-1',
    title: 'Modern Sofa Set',
    category: 'Home & Garden',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
    path: '/category/home-garden',
    location: 'Bahir Dar'
  },
  {
    id: 'home-2',
    title: 'Garden Tools Set',
    category: 'Home & Garden',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60',
    path: '/category/home-garden',
    location: 'Bahir Dar'
  },
  {
    id: 'sports-1',
    title: 'Nike Air Zoom Pegasus 39',
    category: 'Sports',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
    path: '/category/sports',
    location: 'Mekelle'
  }
]

async function handleSearch() {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 400)) // Simulate async
  if (!searchQuery.value) {
    searchResults.value = []
    isLoading.value = false
    return
  }
  const query = searchQuery.value.toLowerCase()
  searchResults.value = allProducts.filter(product => {
    const matchesQuery = product.title.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
    const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value
    const matchesLocation = !selectedLocation.value || (product.location && product.location === selectedLocation.value)
    return matchesQuery && matchesCategory && matchesLocation
  })
  isLoading.value = false
  highlightedIndex.value = -1
}

function navigateToResult(result: SearchResult) {
  router.push(result.path)
  showSearchResults.value = false
  highlightedIndex.value = -1
}

function onInputKeydown(e: KeyboardEvent) {
  if (!showSearchResults.value || searchResults.value.length === 0) return
  if (e.key === 'ArrowDown') {
    highlightedIndex.value = (highlightedIndex.value + 1) % searchResults.value.length
    e.preventDefault()
  } else if (e.key === 'ArrowUp') {
    highlightedIndex.value = (highlightedIndex.value - 1 + searchResults.value.length) % searchResults.value.length
    e.preventDefault()
  } else if (e.key === 'Enter') {
    if (highlightedIndex.value >= 0 && highlightedIndex.value < searchResults.value.length) {
      navigateToResult(searchResults.value[highlightedIndex.value])
    }
  } else if (e.key === 'Escape') {
    showSearchResults.value = false
    highlightedIndex.value = -1
  }
}

onMounted(() => {
  nextTick(() => {
    if (searchInputRef.value) {
      searchInputRef.value.setAttribute('aria-autocomplete', 'list')
      searchInputRef.value.setAttribute('aria-controls', 'search-dropdown')
    }
  })
})
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

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2.5s infinite;
}
</style> 