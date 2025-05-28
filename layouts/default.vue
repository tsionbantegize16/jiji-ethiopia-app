<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#4F7F8F]">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Layout-level setup
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #C9F0EF;
}

::-webkit-scrollbar-thumb {
  background: #4F7F8F;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2EC4B6;
}
</style> 