<template>
  <CategoryLayout
    title="Sports & Fitness"
    description="Find quality sports equipment, fitness gear, and outdoor activities gear in Ethiopia."
    :items="sportsItems"
    @toggle-favorite="toggleFavorite"
  />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Sports & Fitness in Ethiopia',
  description: 'Discover sports equipment, fitness gear, and outdoor activities gear in Ethiopia.'
})

import { ref } from 'vue'

interface SportsItem {
  id: number
  title: string
  price: number
  location: string
  image: string
  condition: string
  isFavorite: boolean
  brand: string
  category: string
  specs: {
    material?: string
    size?: string
    weight?: string
    features?: string
    color?: string
    type?: string
  }
  warranty: string
}

const sportsItems = ref<SportsItem[]>([
  {
    id: 1,
    title: 'Nike Air Zoom Pegasus 39',
    price: 8500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Nike',
    category: 'Running Shoes',
    specs: {
      material: 'Breathable Mesh',
      size: 'EU 42-46',
      weight: '280g',
      features: 'Air Zoom cushioning, Reflective elements'
    },
    warranty: '6 Months Warranty'
  },
  {
    id: 2,
    title: 'Adidas Tiro 23 Training Kit',
    price: 4500,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Adidas',
    category: 'Training Wear',
    specs: {
      material: 'Climacool fabric',
      size: 'S-XXL',
      features: 'Moisture-wicking, Quick-dry'
    },
    warranty: '3 Months Warranty'
  },
  {
    id: 3,
    title: 'Wilson Pro Staff Tennis Racket',
    price: 12000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Wilson',
    category: 'Tennis',
    specs: {
      material: 'Graphite',
      weight: '315g',
      features: 'Professional grade, Pre-strung'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 4,
    title: 'Life Fitness Treadmill',
    price: 85000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false,
    brand: 'Life Fitness',
    category: 'Fitness Equipment',
    specs: {
      features: '12 Programs, Heart rate monitor, 2.5HP motor',
      weight: '120kg'
    },
    warranty: '2 Years Warranty'
  },
  {
    id: 5,
    title: 'Nike Basketball',
    price: 2500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Nike',
    category: 'Basketball',
    specs: {
      material: 'Composite leather',
      size: 'Size 7',
      features: 'Indoor/Outdoor'
    },
    warranty: '3 Months Warranty'
  },
  {
    id: 6,
    title: 'Under Armour Training Mat',
    price: 3500,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Under Armour',
    category: 'Fitness Accessories',
    specs: {
      material: 'NBR Foam',
      size: '183 x 61 x 10mm',
      features: 'Non-slip surface, Lightweight'
    },
    warranty: '6 Months Warranty'
  },
  {
    id: 7,
    title: 'Adidas Predator Soccer Cleats',
    price: 9500,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Adidas',
    category: 'Soccer',
    specs: {
      material: 'Synthetic',
      size: 'EU 40-45',
      features: 'Firm ground, Control frame'
    },
    warranty: '6 Months Warranty'
  },
  {
    id: 8,
    title: 'Yoga Mat Premium',
    price: 2800,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Liforme',
    category: 'Yoga',
    specs: {
      material: 'Eco-friendly TPE',
      size: '180 x 66cm',
      features: 'Non-slip, Alignment lines'
    },
    warranty: '1 Year Warranty'
  },
  {
    id: 9,
    title: 'Mountain Bike Trek',
    price: 45000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Trek',
    category: 'Cycling',
    specs: {
      material: 'Aluminum frame',
      features: '21-speed, Disc brakes',
      weight: '12.5kg'
    },
    warranty: '2 Years Warranty'
  },
  {
    id: 10,
    title: 'Boxing Gloves Pro',
    price: 3500,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'Everlast',
    category: 'Boxing',
    specs: {
      material: 'Leather',
      size: '16oz',
      features: 'Professional grade, Ventilated'
    },
    warranty: '6 Months Warranty'
  },
  {
    id: 11,
    title: 'Swimming Goggles',
    price: 1200,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true,
    brand: 'Speedo',
    category: 'Swimming',
    specs: {
      material: 'Silicone',
      features: 'Anti-fog, UV protection',
      color: 'Blue/Black'
    },
    warranty: '3 Months Warranty'
  },
  {
    id: 12,
    title: 'Fitness Resistance Bands Set',
    price: 1800,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false,
    brand: 'TheraBand',
    category: 'Fitness Accessories',
    specs: {
      material: 'Natural latex',
      features: '5 resistance levels',
      color: 'Multi-color set'
    },
    warranty: '6 Months Warranty'
  }
])

function toggleFavorite(id: number) {
  const item = sportsItems.value.find(i => i.id === id)
  if (item) item.isFavorite = !item.isFavorite
}
</script> 