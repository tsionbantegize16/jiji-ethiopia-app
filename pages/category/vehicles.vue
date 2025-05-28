<template>
  <CategoryLayout
    title="Vehicles"
    description="Browse through a wide selection of cars, motorcycles, and other vehicles for sale in Ethiopia."
    :items="vehicles"
    @toggle-favorite="toggleFavorite"
  />
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
    fuelType: 'Diesel'
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
    fuelType: 'Petrol'
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
    fuelType: 'Petrol'
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
    fuelType: 'Petrol'
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
    fuelType: 'Diesel'
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
    fuelType: 'Petrol'
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
    fuelType: 'Diesel'
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
    fuelType: 'Petrol'
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
    fuelType: 'Petrol'
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
    fuelType: 'Petrol'
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
    fuelType: 'Diesel'
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
    fuelType: 'Diesel'
  }
])

function toggleFavorite(id: number) {
  const vehicle = vehicles.value.find(v => v.id === id)
  if (vehicle) vehicle.isFavorite = !vehicle.isFavorite
}
</script>
