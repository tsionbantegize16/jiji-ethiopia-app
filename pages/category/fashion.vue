<template>
  <CategoryLayout
    title="Fashion"
    description="Discover trendy clothing, shoes, and accessories from local and international brands."
    :items="fashionItems"
  />
</template>

<script setup lang="ts">
const fashionItems = [
  {
    id: 1,
    title: 'Nike Air Max 270',
    price: 8500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 2,
    title: 'Leather Jacket',
    price: 4500,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: true
  },
  {
    id: 3,
    title: 'Designer Watch',
    price: 12000,
    location: 'Bahir Dar',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 4,
    title: 'Summer Dress',
    price: 2500,
    location: 'Mekelle',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 5,
    title: 'Adidas Ultraboost',
    price: 9500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  },
  {
    id: 6,
    title: 'Designer Handbag',
    price: 15000,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'like_new',
    isFavorite: false
  },
  {
    id: 7,
    title: 'Men\'s Suit',
    price: 8500,
    location: 'Dire Dawa',
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'new',
    isFavorite: false
  },
  {
    id: 8,
    title: 'Sunglasses',
    price: 3500,
    location: 'Addis Ababa',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    condition: 'good',
    isFavorite: true
  }
]
</script> 