<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/logo.png" alt="Jiji Ethiopia" class="h-8 w-auto" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">Jiji Ethiopia</span>
        </NuxtLink>

        <!-- Search -->
        <div class="hidden md:block flex-1 max-w-2xl mx-8">
          <SearchBar />
        </div>

        <!-- Navigation -->
        <nav class="flex items-center space-x-4">
          <NuxtLink
            to="/create-listing"
            class="btn btn-primary"
          >
            Sell
          </NuxtLink>

          <NuxtLink
            to="/messages"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/favorites"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/profile"
            class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// No additional setup needed
</script> 