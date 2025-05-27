export default defineNuxtPlugin(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme')
  
  // Check for user's preferred color scheme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  // Set initial theme
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
  
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}) 