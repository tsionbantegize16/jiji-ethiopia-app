<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] flex flex-col">
    <Header />
    <main class="flex-grow">
      <div class="container mx-auto px-4 py-8">
        <slot />
      </div>
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