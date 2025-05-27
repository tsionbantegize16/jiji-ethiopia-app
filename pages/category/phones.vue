<template>
  <CategoryLayout
    title="Phones"
    description="Find the latest smartphones and mobile devices from top brands in Ethiopia."
    :items="phones"
  />
</template>

<script setup lang="ts">
const phones = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    price: 120000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    price: 95000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true
  },
  {
    id: 3,
    title: 'Google Pixel 7 Pro',
    price: 85000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 4,
    title: 'OnePlus 11',
    price: 75000,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 5,
    title: 'iPhone 13 Pro',
    price: 90000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  },
  {
    id: 6,
    title: 'Xiaomi 13 Pro',
    price: 65000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 7,
    title: 'Samsung Galaxy Z Fold 4',
    price: 150000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 8,
    title: 'iPhone 12 Pro Max',
    price: 70000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  }
]
</script> 