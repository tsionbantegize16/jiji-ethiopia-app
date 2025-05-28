<template>
  <header class="bg-[#C9F0EF]/80 dark:bg-[#4F7F8F]/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink 
          :to="{ path: '/' }" 
          class="flex items-center space-x-2 group"
          @mouseenter="isLogoHovered = true"
          @mouseleave="isLogoHovered = false"
        >
          <span 
            class="text-2xl font-bold bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] bg-clip-text text-transparent transition-all duration-300"
            :class="{ 'scale-110': isLogoHovered }"
          >
            Jiji
          </span>
          <span 
            class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] transition-all duration-300"
            :class="{ 'translate-x-1': isLogoHovered }"
          >
            Ethiopia
          </span>
        </NuxtLink>

        <!-- Navigation -->
        <nav class="flex items-center space-x-4">
          <!-- Categories Dropdown -->
          <div class="relative group">
            <button
              @click="isCategoriesOpen = !isCategoriesOpen"
              class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200 relative group"
            >
              <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
              <svg class="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <!-- Categories Dropdown Menu -->
            <div 
              v-show="isCategoriesOpen"
              class="absolute right-0 mt-2 w-64 bg-white dark:bg-[#4F7F8F] rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div class="p-2">
                <div class="text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] px-3 py-2">Popular Categories</div>
                <div class="border-t border-gray-100 dark:border-[#C9F0EF]/20"></div>
                <div class="py-1">
                  <NuxtLink
                    v-for="category in popularCategories"
                    :key="category.path"
                    :to="{ path: category.path }"
                    class="flex items-center px-3 py-2 text-sm text-[#4F7F8F] dark:text-[#C9F0EF] hover:bg-[#C9F0EF]/30 dark:hover:bg-[#2EC4B6]/20 rounded-md transition-colors duration-200"
                    @click="isCategoriesOpen = false"
                  >
                    <component :is="category.icon" class="w-5 h-5 mr-3" />
                    {{ category.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="toggleTheme"
            class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200 relative group"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <!-- Sun icon for dark mode -->
            <svg
              v-if="isDark"
              class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <!-- Moon icon for light mode -->
            <svg
              v-else
              class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <NuxtLink
            :to="{ path: '/create-listing' }"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] hover:from-[#4F7F8F] hover:to-[#2EC4B6] rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2EC4B6] focus:ring-offset-2 dark:focus:ring-offset-[#4F7F8F]"
          >
            <span class="relative z-10">Sell</span>
            <div class="absolute inset-0 bg-gradient-to-r from-[#4F7F8F] to-[#2EC4B6] rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
          </NuxtLink>

          <NuxtLink 
            :to="{ path: '/messages' }"
            class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <div class="relative">
              <svg class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span v-if="unreadMessages" class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                {{ unreadMessages }}
              </span>
            </div>
          </NuxtLink>

          <NuxtLink
            :to="{ path: '/favorites' }"
            class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <div class="relative">
              <svg class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span v-if="favoriteCount" class="absolute -top-1 -right-1 w-4 h-4 bg-[#2EC4B6] rounded-full text-xs text-white flex items-center justify-center">
                {{ favoriteCount }}
              </span>
            </div>
          </NuxtLink>

          <NuxtLink
            :to="{ path: '/profile' }"
            class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <svg class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isLogoHovered = ref(false)
const isScrolled = ref(false)
const isCategoriesOpen = ref(false)
const unreadMessages = ref(3)
const favoriteCount = ref(5)

// Popular Categories with Icons
const popularCategories = [
  {
    name: 'Phones & Tablets',
    path: '/category/phones',
    icon: 'PhoneIcon'
  },
  {
    name: 'Vehicles',
    path: '/category/vehicles',
    icon: 'CarIcon'
  },
  {
    name: 'Electronics',
    path: '/category/electronics',
    icon: 'DeviceIcon'
  },
  {
    name: 'Home & Garden',
    path: '/category/home-garden',
    icon: 'HomeIcon'
  },
  {
    name: 'Fashion',
    path: '/category/fashion',
    icon: 'ClothesIcon'
  },
  {
    name: 'Sports',
    path: '/category/sports',
    icon: 'SportsIcon'
  }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0
  })
})
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Add glass effect */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Add gradient animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}

/* Add hover glow effect */
.group:hover .relative {
  filter: drop-shadow(0 0 8px rgba(46, 196, 182, 0.3));
}
</style> 