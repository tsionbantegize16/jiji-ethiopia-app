<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6]">
                Home
              </NuxtLink>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <NuxtLink :to="`/category/${currentCategory}`" class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6]">
                  {{ categoryName }}
                </NuxtLink>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">{{ listing.title }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Image Gallery -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg mb-8">
            <div class="relative">
              <img 
                :src="listing.mainImage" 
                :alt="listing.title"
                class="w-full h-96 object-cover"
              />
              <div class="absolute bottom-4 right-4 flex space-x-2">
                <button 
                  v-for="(image, index) in listing.images" 
                  :key="index"
                  @click="handleImageClick(image)"
                  class="w-16 h-16 rounded-lg overflow-hidden border-2"
                  :class="currentImage === image ? 'border-[#2EC4B6]' : 'border-transparent'"
                >
                  <img 
                    :src="image" 
                    :alt="`${listing.title} - Image ${index + 1}`"
                    class="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Listing Details -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
            <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              {{ listing.title }}
            </h1>
            <div class="flex items-center space-x-4 mb-6">
              <span class="text-2xl font-bold text-[#2EC4B6]">
                {{ listing.price }}
              </span>
              <span 
                v-if="listing.isNegotiable"
                class="px-3 py-1 bg-[#2EC4B6]/10 text-[#2EC4B6] rounded-full text-sm"
              >
                Negotiable
              </span>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ listing.location }}
              </div>
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ listing.postedTime }}
              </div>
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {{ listing.views }} views
              </div>
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {{ listing.favorites }} favorites
              </div>
            </div>
            <div class="prose dark:prose-invert max-w-none">
              <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
                Description
              </h2>
              <p class="text-[#4F7F8F] dark:text-[#C9F0EF] whitespace-pre-line">
                {{ listing.description }}
              </p>
            </div>
          </div>

          <!-- Specifications -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Specifications
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(spec, key) in listing.specifications" 
                :key="key"
                class="flex justify-between py-2 border-b border-[#4F7F8F]/10 dark:border-[#C9F0EF]/10"
              >
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF] font-medium">
                  {{ key }}
                </span>
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">
                  {{ spec }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Seller Info -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
            <div class="flex items-center mb-4">
              <img 
                :src="listing.seller.avatar" 
                :alt="listing.seller.name"
                class="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">
                  {{ listing.seller.name }}
                </h3>
                <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  Member since {{ listing.seller.joinDate }}
                </p>
              </div>
            </div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ listing.seller.rating }} Rating
              </div>
              <div class="flex items-center text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ listing.seller.listings }} Listings
              </div>
            </div>
            <div class="space-y-3">
              <button class="w-full px-4 py-2 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat with Seller
              </button>
              <button class="w-full px-4 py-2 border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-lg hover:bg-[#2EC4B6] hover:text-white transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Seller
              </button>
              <button class="w-full px-4 py-2 border-2 border-[#2EC4B6] text-[#2EC4B6] rounded-lg hover:bg-[#2EC4B6] hover:text-white transition-colors duration-200 flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Save to Favorites
              </button>
            </div>
          </div>

          <!-- Safety Tips -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6">
            <h3 class="text-lg font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Safety Tips
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2 mt-1 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Meet in a public place
              </li>
              <li class="flex items-start text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2 mt-1 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Check the item before paying
              </li>
              <li class="flex items-start text-[#4F7F8F] dark:text-[#C9F0EF]">
                <svg class="w-5 h-5 mr-2 mt-1 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Use secure payment methods
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Related Listings -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">
          Similar Listings
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="item in relatedListings" 
            :key="item.id"
            class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <NuxtLink :to="`/category/${currentCategory}/${item.id}`">
              <div class="relative">
                <img 
                  :src="item.image" 
                  :alt="item.title"
                  class="w-full h-48 object-cover"
                />
                <div 
                  v-if="item.isNew"
                  class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  New
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                  {{ item.title }}
                </h3>
                <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                  {{ item.price }}
                </p>
                <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ item.location }}
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
const route = useRoute()
const router = useRouter()
const currentImage = ref('')

// Get the category and listing ID from the route
const currentCategory = computed(() => route.params.category as string)
const listingId = computed(() => route.params.id as string)

// Map category slugs to display names
const categoryNames = {
  'phones-tablets': 'Phones & Tablets',
  'vehicles': 'Vehicles',
  'electronics': 'Electronics',
  'home-garden': 'Home & Garden',
  'fashion': 'Fashion',
  'sports': 'Sports'
} as const

type CategoryKey = keyof typeof categoryNames

const categoryName = computed(() => categoryNames[currentCategory.value as CategoryKey] || currentCategory.value)

// Mock data - Replace with actual API call
const listing = ref({
  id: listingId.value,
  title: getCategoryTitle(currentCategory.value),
  price: getCategoryPrice(currentCategory.value),
  isNegotiable: true,
  location: 'Addis Ababa',
  postedTime: '2 hours ago',
  views: 245,
  favorites: 12,
  category: currentCategory.value,
  mainImage: getCategoryImage(currentCategory.value),
  images: getCategoryImages(currentCategory.value),
  description: getCategoryDescription(currentCategory.value),
  specifications: getCategorySpecifications(currentCategory.value),
  seller: {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=60',
    joinDate: 'January 2023',
    rating: 4.8,
    listings: 15
  }
})

// Helper functions to get category-specific data
function getCategoryTitle(category: string) {
  const titles = {
    'electronics': 'Samsung Galaxy S21 Ultra 5G',
    'fashion': 'Nike Air Max 2023',
    'home-garden': 'Modern Leather Sofa Set',
    'sports': 'Professional Football Kit',
    'vehicles': 'Toyota Land Cruiser 2023'
  }
  return titles[category as keyof typeof titles] || 'Sample Listing'
}

function getCategoryPrice(category: string) {
  const prices = {
    'electronics': 'ETB 45,000',
    'fashion': 'ETB 12,000',
    'home-garden': 'ETB 85,000',
    'sports': 'ETB 8,500',
    'vehicles': 'ETB 2,500,000'
  }
  return prices[category as keyof typeof prices] || 'ETB 45,000'
}

function getCategoryImage(category: string) {
  const images = {
    'electronics': 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=60',
    'fashion': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
    'home-garden': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
    'sports': 'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=60',
    'vehicles': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60'
  }
  return images[category as keyof typeof images] || '/images/sample.jpg'
}

function getCategoryImages(category: string) {
  const images = {
    'electronics': [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=500&q=60'
    ],
    'fashion': [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60'
    ],
    'home-garden': [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60'
    ],
    'sports': [
      'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1508098682722-e99c643e5eae?auto=format&fit=crop&w=500&q=60'
    ],
    'vehicles': [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60'
    ]
  }
  return images[category as keyof typeof images] || ['/images/sample.jpg']
}

function getCategoryDescription(category: string) {
  const descriptions = {
    'electronics': `Samsung Galaxy S21 Ultra 5G in pristine condition.
Latest Android version installed.
Comes with original charger, case, and warranty card.
Battery health at 95%.
No scratches or dents.
Perfect for photography and gaming.`,
    'fashion': `Nike Air Max 2023 - Limited Edition.
Size: US 10 (EU 44).
Color: Black/Red.
Never worn, brand new in box.
Original price tag attached.
Perfect for running and casual wear.`,
    'home-garden': `Modern Leather Sofa Set - 3+2+1.
Premium Italian leather.
Color: Brown.
Dimensions: 280x180x85 cm.
Includes matching cushions.
Perfect for living room.
Easy to maintain.`,
    'sports': `Professional Football Kit - Complete Set.
Size: XL.
Brand: Adidas.
Includes jersey, shorts, socks, and shin guards.
Used only twice.
Perfect condition.
Suitable for professional matches.`,
    'vehicles': `Toyota Land Cruiser 2023 - V8 Diesel.
Mileage: 15,000 km.
Automatic transmission.
Color: White.
Full service history.
All original parts.
Perfect for family and off-road.`
  }
  return descriptions[category as keyof typeof descriptions] || 'Sample description'
}

function getCategorySpecifications(category: string) {
  const specs = {
    'electronics': {
      'Condition': 'Like New',
      'Brand': 'Samsung',
      'Model': 'Galaxy S21 Ultra 5G',
      'Storage': '256GB',
      'Color': 'Phantom Black',
      'Warranty': '1 Year Remaining'
    },
    'fashion': {
      'Size': 'US 10 (EU 44)',
      'Color': 'Black/Red',
      'Material': 'Mesh & Leather',
      'Brand': 'Nike',
      'Condition': 'New',
      'Style': 'Running'
    },
    'home-garden': {
      'Material': 'Italian Leather',
      'Dimensions': '280x180x85 cm',
      'Color': 'Brown',
      'Style': 'Modern',
      'Condition': 'New',
      'Warranty': '2 Years'
    },
    'sports': {
      'Type': 'Professional',
      'Size': 'XL',
      'Material': 'Polyester',
      'Brand': 'Adidas',
      'Condition': 'Like New',
      'Set Includes': 'Jersey, Shorts, Socks, Shin Guards'
    },
    'vehicles': {
      'Year': '2023',
      'Mileage': '15,000 km',
      'Transmission': 'Automatic',
      'Fuel Type': 'Diesel',
      'Engine': 'V8',
      'Color': 'White',
      'Condition': 'Excellent'
    }
  }
  return specs[category as keyof typeof specs] || {
    'Condition': 'New',
    'Brand': 'Sample Brand',
    'Model': 'Sample Model',
    'Year': '2024'
  }
}

// Set initial image
onMounted(() => {
  currentImage.value = listing.value.mainImage
})

// Mock related listings - Replace with actual API call
const relatedListings = ref([
  {
    id: 2,
    title: getCategoryTitle(currentCategory.value),
    price: getCategoryPrice(currentCategory.value),
    location: 'Addis Ababa',
    image: getCategoryImage(currentCategory.value),
    isNew: false
  },
  {
    id: 3,
    title: getCategoryTitle(currentCategory.value),
    price: getCategoryPrice(currentCategory.value),
    location: 'Dire Dawa',
    image: getCategoryImage(currentCategory.value),
    isNew: true
  },
  {
    id: 4,
    title: getCategoryTitle(currentCategory.value),
    price: getCategoryPrice(currentCategory.value),
    location: 'Hawassa',
    image: getCategoryImage(currentCategory.value),
    isNew: false
  },
  {
    id: 5,
    title: getCategoryTitle(currentCategory.value),
    price: getCategoryPrice(currentCategory.value),
    location: 'Addis Ababa',
    image: getCategoryImage(currentCategory.value),
    isNew: false
  }
])

// Handle image click
const handleImageClick = (image: string) => {
  currentImage.value = image
}
</script>

<style scoped>
/* Add any additional styles here */
</style> 