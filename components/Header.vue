<template>
  <header class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink 
          to="/" 
          class="flex items-center space-x-2 group"
          @mouseenter="isLogoHovered = true"
          @mouseleave="isLogoHovered = false"
        >
          <span 
            class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent transition-all duration-300"
            :class="{ 'scale-110': isLogoHovered }"
          >
            Jiji
          </span>
          <span 
            class="text-xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-300"
            :class="{ 'translate-x-1': isLogoHovered }"
          >
            Ethiopia
          </span>
        </NuxtLink>

        <!-- Search -->
        <div class="hidden md:block flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        <!-- Navigation -->
        <nav class="flex items-center space-x-4">
          <button
            @click="toggleTheme"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 relative group"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <div class="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
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
            to="/create-listing"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <span class="relative z-10">Sell</span>
            <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
          </NuxtLink>

          <NuxtLink
            to="/messages"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <svg class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/favorites"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
            <svg class="w-6 h-6 relative z-10 transform transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/profile"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 relative group"
          >
            <div class="absolute inset-0 bg-primary-100 dark:bg-primary-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200"></div>
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
const { isDark, toggleTheme } = useTheme()
const isLogoHovered = ref(false)

// Add scroll behavior
const isScrolled = ref(false)

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
</style> 