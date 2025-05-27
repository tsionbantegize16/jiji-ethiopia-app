import { ref, watch } from 'vue'

export const useTheme = () => {
  const isDark = ref(false)

  // Only run on client-side
  if (process.client) {
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    
    // Initialize theme
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)

    // Watch for theme changes
    watch(isDark, (newValue) => {
      // Update localStorage
      localStorage.setItem('theme', newValue ? 'dark' : 'light')
      
      // Update document class
      if (newValue) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, { immediate: true })
  }

  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
} 