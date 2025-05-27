<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-2xl font-bold text-primary-600">
            Jiji Ethiopia
          </NuxtLink>
          
          <div class="flex items-center space-x-4">
            <button class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600">
              <span class="sr-only">Toggle dark mode</span>
              <!-- Dark mode icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            
            <button class="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600">
              <span class="sr-only">Change language</span>
              <!-- Language icon -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">About Jiji</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">About Us</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Careers</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Help Center</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Safety Tips</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Terms of Use</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                <span class="sr-only">Facebook</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                <span class="sr-only">Instagram</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a href="#" class="text-gray-600 dark:text-gray-300 hover:text-primary-600">
                <span class="sr-only">Telegram</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.32 5.03-2.19 6.03-2.61 2.88-1.19 3.48-1.4 3.86-1.4.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} Jiji Ethiopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout-level setup
</script> 