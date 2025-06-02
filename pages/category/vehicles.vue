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
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Vehicles</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Price Range
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>Any Price</option>
              <option>Under ETB 100,000</option>
              <option>ETB 100,000 - 200,000</option>
              <option>ETB 200,000 - 500,000</option>
              <option>Over ETB 500,000</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Vehicle Type
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Types</option>
              <option>Cars</option>
              <option>Motorcycles</option>
              <option>Trucks</option>
              <option>Buses</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Condition
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>Any Condition</option>
              <option>New</option>
              <option>Used</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
              Location
            </label>
            <select class="w-full rounded-lg border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF]">
              <option>All Locations</option>
              <option>Addis Ababa</option>
              <option>Dire Dawa</option>
              <option>Hawassa</option>
              <option>Bahir Dar</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="vehicle in vehicles" 
          :key="vehicle.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <NuxtLink :to="`/category/vehicles/${vehicle.id}`">
            <div class="relative">
              <img 
                :src="vehicle.image" 
                :alt="vehicle.title"
                class="w-full h-48 object-cover"
              />
              <div 
                v-if="vehicle.isNew"
                class="absolute top-4 right-4 bg-[#2EC4B6] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                New
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                {{ vehicle.title }}
              </h3>
              <p class="text-xl font-bold text-[#2EC4B6] mb-2">
                {{ vehicle.price }}
              </p>
              <div class="flex items-center text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ vehicle.location }}
              </div>
              <div class="mt-4 flex items-center justify-between">
                <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                  {{ vehicle.postedTime }}
                </span>
                <button class="text-[#2EC4B6] hover:text-[#4F7F8F] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Vehicles in Ethiopia',
  description: 'Explore cars, motorcycles, and more for sale in Ethiopia.'
})

import { ref } from 'vue'

interface Vehicle {
  id: number
  title: string
  price: number
  location: string
  image: string
  condition: string
  isFavorite: boolean
  year: number
  mileage: string
  transmission: string
  fuelType: string
  isNew: boolean
  postedTime: string
}

const vehicles = ref<Vehicle[]>([
  {
    id: 1,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false,
    year: 2020,
    mileage: '45,000 km',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    isNew: false,
    postedTime: '2 hours ago'
  },
  {
    id: 2,
    title: 'Mercedes-Benz G-Class 2021',
    price: 4500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    year: 2021,
    mileage: '15,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: true,
    postedTime: '5 hours ago'
  },
  {
    id: 3,
    title: 'BMW X5 2022',
    price: 3200000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    year: 2022,
    mileage: '10,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: false,
    postedTime: '2 days ago'
  },
  {
    id: 4,
    title: 'Honda Civic 2021',
    price: 850000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: false,
    year: 2021,
    mileage: '30,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: false,
    postedTime: '5 hours ago'
  },
  {
    id: 5,
    title: 'Toyota Hilux 2019',
    price: 1500000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true,
    year: 2019,
    mileage: '50,000 km',
    transmission: 'Manual',
    fuelType: 'Diesel',
    isNew: false,
    postedTime: '2 days ago'
  },
  {
    id: 6,
    title: 'Audi Q7 2022',
    price: 3500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    year: 2022,
    mileage: '8,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: true,
    postedTime: '1 day ago'
  },
  {
    id: 7,
    title: 'Ford Ranger 2021',
    price: 1800000,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false,
    year: 2021,
    mileage: '25,000 km',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    isNew: false,
    postedTime: '5 days ago'
  },
  {
    id: 8,
    title: 'Hyundai Tucson 2022',
    price: 1200000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    year: 2022,
    mileage: '18,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: true,
    postedTime: '1 week ago'
  },
  {
    id: 9,
    title: 'Kia Sportage 2021',
    price: 1100000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: false,
    year: 2021,
    mileage: '22,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    isNew: false,
    postedTime: '4 days ago'
  },
  {
    id: 10,
    title: 'Suzuki Jimny 2022',
    price: 950000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    year: 2022,
    mileage: '12,000 km',
    transmission: 'Manual',
    fuelType: 'Petrol',
    isNew: true,
    postedTime: '1 day ago'
  },
  {
    id: 11,
    title: 'Mitsubishi Pajero 2020',
    price: 2200000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: true,
    year: 2020,
    mileage: '35,000 km',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    isNew: false,
    postedTime: '5 days ago'
  },
  {
    id: 12,
    title: 'Nissan Patrol 2021',
    price: 2800000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: false,
    year: 2021,
    mileage: '28,000 km',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    isNew: false,
    postedTime: '1 week ago'
  }
])

function toggleFavorite(id: number) {
  const vehicle = vehicles.value.find(v => v.id === id)
  if (vehicle) vehicle.isFavorite = !vehicle.isFavorite
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
