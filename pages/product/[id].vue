<template>
  <div class="min-h-screen bg-gradient-to-b from-[#C9F0EF] to-[#4F7F8F] dark:from-[#4F7F8F] dark:to-[#22223B] py-10">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Image Carousel -->
        <div>
          <div class="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img :src="product.images[currentImageIndex]" :alt="product.title" class="w-full h-full object-cover" />
            <button v-if="currentImageIndex > 0" @click="currentImageIndex--" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button v-if="currentImageIndex < product.images.length - 1" @click="currentImageIndex++" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div class="grid grid-cols-4 gap-4 mt-4">
            <button v-for="(image, index) in product.images" :key="index" @click="currentImageIndex = index" class="aspect-square rounded-lg overflow-hidden bg-gray-100" :class="{ 'ring-2 ring-blue-500': currentImageIndex === index }">
              <img :src="image" :alt="`${product.title} - Image ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
          <!-- Product Details/Specs -->
          <div class="mt-8 bg-white dark:bg-[#22223B] rounded-2xl shadow p-6">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Product Details</h2>
            <ul class="grid grid-cols-2 gap-4 text-[#4F7F8F] dark:text-[#C9F0EF] text-base">
              <template v-if="product.category === 'Vehicles'">
                <li><span class="font-semibold">Year:</span> {{ (product.specs as VehicleSpecs).year }}</li>
                <li><span class="font-semibold">Mileage:</span> {{ (product.specs as VehicleSpecs).mileage }}</li>
                <li><span class="font-semibold">Transmission:</span> {{ (product.specs as VehicleSpecs).transmission }}</li>
                <li><span class="font-semibold">Fuel Type:</span> {{ (product.specs as VehicleSpecs).fuelType }}</li>
                <li><span class="font-semibold">Color:</span> {{ (product.specs as VehicleSpecs).color }}</li>
              </template>
              <template v-else-if="product.category === 'Phones'">
                <li><span class="font-semibold">Storage:</span> {{ (product.specs as PhoneSpecs).storage }}</li>
                <li><span class="font-semibold">Color:</span> {{ (product.specs as PhoneSpecs).color }}</li>
                <li><span class="font-semibold">Warranty:</span> {{ (product.specs as PhoneSpecs).warranty }}</li>
                <li><span class="font-semibold">Year:</span> {{ (product.specs as PhoneSpecs).year }}</li>
              </template>
              <template v-else-if="product.category === 'Electronics'">
                <li><span class="font-semibold">Screen:</span> {{ (product.specs as ElectronicsSpecs).screen }}</li>
                <li><span class="font-semibold">Processor:</span> {{ (product.specs as ElectronicsSpecs).processor }}</li>
                <li><span class="font-semibold">Warranty:</span> {{ (product.specs as ElectronicsSpecs).warranty }}</li>
                <li><span class="font-semibold">Year:</span> {{ (product.specs as ElectronicsSpecs).year }}</li>
              </template>
              <template v-else-if="product.category === 'Fashion'">
                <li><span class="font-semibold">Size:</span> {{ (product.specs as FashionSpecs).size }}</li>
                <li><span class="font-semibold">Color:</span> {{ (product.specs as FashionSpecs).color }}</li>
                <li><span class="font-semibold">Material:</span> {{ (product.specs as FashionSpecs).material }}</li>
                <li><span class="font-semibold">Condition:</span> {{ (product.specs as FashionSpecs).condition }}</li>
              </template>
              <template v-else-if="product.category === 'Home & Garden'">
                <li><span class="font-semibold">Material:</span> {{ (product.specs as HomeGardenSpecs).material }}</li>
                <li><span class="font-semibold">Pieces:</span> {{ (product.specs as HomeGardenSpecs).pieces }}</li>
                <li><span class="font-semibold">Color:</span> {{ (product.specs as HomeGardenSpecs).color }}</li>
                <li><span class="font-semibold">Warranty:</span> {{ (product.specs as HomeGardenSpecs).warranty }}</li>
              </template>
              <template v-else-if="product.category === 'Sports'">
                <li><span class="font-semibold">Motor:</span> {{ (product.specs as SportsSpecs).motor }}</li>
                <li><span class="font-semibold">Programs:</span> {{ (product.specs as SportsSpecs).programs }}</li>
                <li><span class="font-semibold">Features:</span> {{ (product.specs as SportsSpecs).features }}</li>
                <li><span class="font-semibold">Warranty:</span> {{ (product.specs as SportsSpecs).warranty }}</li>
              </template>
            </ul>
          </div>
          <!-- Reviews -->
          <div class="mt-8 bg-white dark:bg-[#22223B] rounded-2xl shadow p-6">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Customer Reviews</h2>
            <div v-if="reviews.length > 0" class="space-y-6">
              <div v-for="review in reviews" :key="review.id" class="flex gap-4 items-start">
                <img :src="review.avatar" :alt="review.name" class="w-12 h-12 rounded-full object-cover border-2 border-[#2EC4B6]" />
                <div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">{{ review.name }}</span>
                    <span class="text-xs text-[#2EC4B6]">{{ review.date }}</span>
                  </div>
                  <div class="flex items-center gap-1 text-yellow-500 mb-1">
                    <svg v-for="n in 5" :key="n" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path :class="{'opacity-30': n > review.rating}" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p class="text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80">{{ review.comment }}</p>
                </div>
              </div>
            </div>
            <div v-else class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">No reviews yet.</div>
          </div>
        </div>
        <!-- Sticky Sidebar Product Actions -->
        <div class="bg-white dark:bg-[#22223B] rounded-2xl shadow-xl p-8 flex flex-col gap-6 md:sticky md:top-24">
          <div class="flex items-center gap-3 mb-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2EC4B6]/10 text-[#2EC4B6]">{{ product.condition }}</span>
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#4F7F8F]/10 text-[#4F7F8F]">{{ product.category }}</span>
          </div>
          <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">{{ product.title }}</h1>
          <div class="text-2xl font-bold text-[#2EC4B6] mb-2">{{ formattedPrice }}</div>
          <div class="flex items-center gap-2 text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 mb-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {{ product.location }}
          </div>
          <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 mb-4 whitespace-pre-line">{{ product.description }}</p>
          <div class="flex items-center gap-4 mt-4">
            <button class="px-6 py-3 bg-[#2EC4B6] text-white rounded-full font-bold hover:bg-[#4F7F8F] transition-colors duration-200 shadow">
              Contact Seller
            </button>
            <button @click="toggleFavorite" :class="['px-4 py-3 rounded-full font-bold transition-colors duration-200 shadow', isFavorite ? 'bg-[#2EC4B6] text-white' : 'bg-gray-100 dark:bg-[#4F7F8F]/30 text-[#2EC4B6] hover:bg-[#2EC4B6]/10']">
              <svg v-if="isFavorite" class="w-6 h-6 inline" fill="#2EC4B6" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" /></svg>
              <svg v-else class="w-6 h-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 19.071A7.5 7.5 0 0112 21.5a7.5 7.5 0 016.879-2.429C21.5 17.5 23 15.5 23 13.5c0-2.5-2-4.5-4.5-4.5-1.5 0-2.5 1-3.5 2-1-1-2-2-3.5-2C3 9 1 11 1 13.5c0 2 1.5 4 4.121 5.571z" /></svg>
            </button>
          </div>
          <div class="flex items-center gap-4 mt-8 p-4 rounded-xl bg-gray-50 dark:bg-[#4F7F8F]/30">
            <img :src="seller.avatar" :alt="seller.name" class="w-14 h-14 rounded-full object-cover border-2 border-[#2EC4B6]" />
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">{{ seller.name }}</span>
                <svg v-if="seller.verified" class="w-5 h-5 text-[#2EC4B6]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
              </div>
              <div class="flex items-center gap-1 text-sm text-yellow-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>{{ seller.rating }}</span>
              </div>
              <div class="text-xs text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Joined: {{ seller.joinDate }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentImageIndex = ref(0)
const isFavorite = ref(false)

// Type definitions for product specs
interface VehicleSpecs {
  year: string
  mileage: string
  transmission: string
  fuelType: string
  color: string
}

interface PhoneSpecs {
  storage: string
  color: string
  warranty: string
  year: string
}

interface ElectronicsSpecs {
  screen: string
  processor: string
  warranty: string
  year: string
}

interface FashionSpecs {
  size: string
  color: string
  material: string
  condition: string
}

interface HomeGardenSpecs {
  material: string
  pieces: string
  color: string
  warranty: string
}

interface SportsSpecs {
  motor: string
  programs: string
  features: string
  warranty: string
}

type ProductSpecs = VehicleSpecs | PhoneSpecs | ElectronicsSpecs | FashionSpecs | HomeGardenSpecs | SportsSpecs

interface Product {
  id: number
  title: string
  price: number
  location: string
  category: string
  condition: string
  description: string
  images: string[]
  specs: ProductSpecs
}

// Get product data based on category and ID
const product = computed<Product>(() => {
  const category = route.query.category as string
  const id = parseInt(route.params.id as string)
  
  // Sample product data based on category
  const products: Record<string, Product> = {
    vehicles: {
      id: 1,
      title: 'Toyota Land Cruiser 2020',
      price: 2500000,
      location: 'Addis Ababa',
      category: 'Vehicles',
      condition: 'Like New',
      description: 'Toyota Land Cruiser 2020\nDiesel Engine\nAutomatic Transmission\n45,000 km\nFull Service History\nAll documents available',
      images: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        year: '2020',
        mileage: '45,000 km',
        transmission: 'Automatic',
        fuelType: 'Diesel',
        color: 'White'
      }
    },
    phones: {
      id: 2,
      title: 'iPhone 14 Pro Max',
      price: 120000,
      location: 'Dire Dawa',
      category: 'Phones',
      condition: 'New',
      description: 'iPhone 14 Pro Max 256GB\nDeep Purple\nSealed Box\nFull Warranty\nAll accessories included',
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        storage: '256GB',
        color: 'Deep Purple',
        warranty: '1 Year',
        year: '2023'
      }
    },
    electronics: {
      id: 3,
      title: 'Sony 65" 4K Smart TV',
      price: 85000,
      location: 'Hawassa',
      category: 'Electronics',
      condition: 'Like New',
      description: 'Sony X90K 65" 4K Smart TV\nCognitive Processor XR\nFull Array LED\nDolby Vision & Atmos\n2 Years Warranty',
      images: [
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        screen: '65" 4K HDR',
        processor: 'Cognitive Processor XR',
        warranty: '2 Years',
        year: '2023'
      }
    },
    fashion: {
      id: 4,
      title: 'Nike Air Max 270',
      price: 8500,
      location: 'Mekelle',
      category: 'Fashion',
      condition: 'New',
      description: 'Nike Air Max 270\nSize: EU 42-46\nColor: Black/White\nOriginal Box\nNever Worn',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        size: 'EU 42-46',
        color: 'Black/White',
        material: 'Mesh & Leather',
        condition: 'New'
      }
    },
    'home-garden': {
      id: 5,
      title: 'Modern Sofa Set',
      price: 45000,
      location: 'Bahir Dar',
      category: 'Home & Garden',
      condition: 'New',
      description: 'Modern 3-Piece Sofa Set\nPremium Fabric\nComfortable Cushions\nEasy to Clean\nFree Delivery',
      images: [
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        material: 'Premium Fabric',
        pieces: '3-Piece Set',
        color: 'Gray',
        warranty: '1 Year'
      }
    },
    sports: {
      id: 6,
      title: 'Life Fitness Treadmill',
      price: 85000,
      location: 'Addis Ababa',
      category: 'Sports',
      condition: 'New',
      description: 'Life Fitness Treadmill\n2.5HP Motor\n12 Programs\nHeart Rate Monitor\n2 Years Warranty',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      ],
      specs: {
        motor: '2.5HP',
        programs: '12',
        features: 'Heart Rate Monitor',
        warranty: '2 Years'
      }
    }
  }

  return products[category as keyof typeof products] || products.phones
})

const seller = ref({
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  joinDate: 'January 2023',
  responseTime: 'Usually responds within 1 hour',
  rating: 4.9,
  verified: true,
  listings: 15,
  memberSince: '2023'
})

const reviews = ref([
  {
    id: 1,
    name: 'Amanuel T.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
    date: '2 days ago',
    comment: 'Great seller! The product was exactly as described and the transaction was smooth.'
  },
  {
    id: 2,
    name: 'Sara M.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    date: '1 week ago',
    comment: 'Good communication and fast delivery. Would buy again.'
  }
])

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}

// Format price with Ethiopian Birr
const formattedPrice = computed(() => {
  return `ETB ${product.value.price.toLocaleString()}`
})
</script>

<style scoped>
/* Carousel arrow hover effect */
button:focus {
  outline: 2px solid #2EC4B6;
}
</style> 