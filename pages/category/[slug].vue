<template>
  <CategoryLayout
    :title="categoryName"
    :description="categoryDescription"
    :items="categoryItems"
    @toggle-favorite="toggleFavorite"
  />
</template>

<script setup lang="ts">
const route = useRoute()

// Get category name from slug
const categoryName = computed(() => {
  const slug = route.params.slug as string
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
})

// Get category description based on category
const categoryDescription = computed(() => {
  const descriptions: Record<string, string> = {
    'vehicles': 'Browse through a wide selection of cars, motorcycles, and other vehicles for sale in Ethiopia.',
    'phones': 'Find the latest smartphones and mobile devices from top brands in Ethiopia.',
    'electronics': 'Discover the latest smartphones, laptops, TVs, and other electronics in Ethiopia.',
    'fashion': 'Discover trendy clothing, shoes, and accessories from local and international brands.',
    'home-garden': 'Find furniture, appliances, and garden items for your home.',
    'sports': 'Explore sports equipment, fitness gear, and athletic wear.',
    'grand': 'Discover exclusive and high-end products'
  }
  return descriptions[route.params.slug as string] || 'Browse listings in this category'
})

// Sample category items - In a real app, this would come from an API
const categoryItems = ref([
  {
    id: 1,
    title: 'Toyota Land Cruiser 2020',
    price: 2500000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 2,
    title: 'iPhone 14 Pro Max',
    price: 120000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true
  },
  {
    id: 3,
    title: 'Modern Sofa Set',
    price: 45000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Nike Air Max 270',
    price: 8500,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true
  },
  {
    id: 5,
    title: 'Sony 65" 4K Smart TV',
    price: 85000,
    location: 'Hawassa',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 6,
    title: 'Life Fitness Treadmill',
    price: 85000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: true
  },
  {
    id: 7,
    title: 'Designer Watch',
    price: 12000,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 8,
    title: 'Garden Tools Set',
    price: 3500,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  }
])

// Toggle favorite status
const toggleFavorite = (id: number) => {
  const item = categoryItems.value.find(item => item.id === id)
  if (item) {
    item.isFavorite = !item.isFavorite
  }
}
</script> 