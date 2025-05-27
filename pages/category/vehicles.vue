<template>
  <CategoryLayout
    title="Vehicles"
    description="Browse through a wide selection of cars, motorcycles, and other vehicles for sale in Ethiopia."
    :items="vehicles"
  />
</template>

<script setup lang="ts">
const vehicles = [
  {
    id: 1,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Honda Civic 2019',
    price: 850000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  },
  {
    id: 3,
    title: 'Suzuki Jimny 2021',
    price: 1200000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1617469767053-3c4f8a5d5b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Yamaha MT-07 2022',
    price: 450000,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 5,
    title: 'Toyota Hilux 2018',
    price: 1500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1617469767053-3c4f8a5d5b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  },
  {
    id: 6,
    title: 'BMW X5 2021',
    price: 3500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 7,
    title: 'Kawasaki Ninja 400 2022',
    price: 550000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 8,
    title: 'Mercedes-Benz G-Class 2020',
    price: 4500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: true
  }
]
</script> 