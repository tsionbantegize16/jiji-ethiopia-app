<template>
  <CategoryLayout
    title="Electronics"
    description="Discover the latest smartphones, laptops, TVs, and other electronics in Ethiopia."
    :items="electronics"
    @toggle-favorite="toggleFavorite"
  />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Electronics in Ethiopia',
  description: 'Find the latest smartphones, laptops, TVs, and other electronics in Ethiopia.'
})

import { ref } from 'vue'

interface Electronic {
  id: number
  title: string
  price: number
  location: string
  image: string
  condition: string
  isFavorite: boolean
  brand: string
  model: string
  specs: {
    storage?: string
    ram?: string
    screen?: string
    processor?: string
    battery?: string
    camera?: string
    features?: string
    weight?: string
  }
  warranty: string
}

const electronics = ref<Electronic[]>([
  {
    id: 1,
    title: 'iPhone 14 Pro Max',
    price: 125000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Apple',
    model: '14 Pro Max',
    specs: {
      storage: '256GB',
      ram: '6GB',
      screen: '6.7" Super Retina XDR',
      processor: 'A16 Bionic',
      battery: '4323mAh'
    },
    warranty: '1 Year Official Warranty'
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    price: 115000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Samsung',
    model: 'S23 Ultra',
    specs: {
      storage: '512GB',
      ram: '12GB',
      screen: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 2',
      battery: '5000mAh'
    },
    warranty: '1 Year Official Warranty'
  },
  {
    id: 3,
    title: 'MacBook Pro M2',
    price: 185000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Apple',
    model: 'MacBook Pro 14"',
    specs: {
      storage: '512GB SSD',
      ram: '16GB',
      screen: '14" Liquid Retina XDR',
      processor: 'M2 Pro',
      battery: 'Up to 18 hours'
    },
    warranty: '1 Year AppleCare+'
  },
  {
    id: 4,
    title: 'Sony 65" 4K Smart TV',
    price: 85000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false,
    brand: 'Sony',
    model: 'X90K',
    specs: {
      screen: '65" 4K HDR',
      processor: 'Cognitive Processor XR'
    },
    warranty: '2 Years Warranty'
  },
  {
    id: 5,
    title: 'Dell XPS 15',
    price: 165000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Dell',
    model: 'XPS 15',
    specs: {
      storage: '1TB SSD',
      ram: '32GB',
      screen: '15.6" 4K OLED',
      processor: 'Intel i9-12900H',
      battery: '86Whr'
    },
    warranty: '2 Years Premium Support'
  },
  {
    id: 6,
    title: 'Samsung Galaxy Watch 5 Pro',
    price: 35000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Samsung',
    model: 'Watch 5 Pro',
    specs: {
      storage: '16GB',
      screen: '1.4" AMOLED',
      battery: '590mAh'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 7,
    title: 'iPad Pro M2',
    price: 95000,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Apple',
    model: 'iPad Pro 12.9"',
    specs: {
      storage: '256GB',
      ram: '8GB',
      screen: '12.9" Liquid Retina XDR',
      processor: 'M2',
      battery: 'Up to 10 hours'
    },
    warranty: '1 Year AppleCare+'
  },
  {
    id: 8,
    title: 'Sony WH-1000XM5',
    price: 45000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Sony',
    model: 'WH-1000XM5',
    specs: {
      battery: '30 hours',
      processor: 'V1 Integrated Processor'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 9,
    title: 'DJI Mini 3 Pro',
    price: 75000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'DJI',
    model: 'Mini 3 Pro',
    specs: {
      camera: '4K/60fps',
      battery: '34 minutes',
      weight: '249g'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 10,
    title: 'Samsung Galaxy Buds2 Pro',
    price: 25000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Samsung',
    model: 'Buds2 Pro',
    specs: {
      battery: '5 hours (ANC on)',
      features: 'Active Noise Cancellation'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 11,
    title: 'PlayStation 5',
    price: 65000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Sony',
    model: 'PS5 Digital Edition',
    specs: {
      storage: '825GB SSD',
      features: '4K Gaming, Ray Tracing'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 12,
    title: 'Nintendo Switch OLED',
    price: 35000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Nintendo',
    model: 'Switch OLED',
    specs: {
      storage: '64GB',
      screen: '7" OLED',
      battery: '4.5-9 hours'
    },
    warranty: '1 Year Warranty'
  }
])

function toggleFavorite(id: number) {
  const electronic = electronics.value.find(e => e.id === id)
  if (electronic) electronic.isFavorite = !electronic.isFavorite
}
</script> 