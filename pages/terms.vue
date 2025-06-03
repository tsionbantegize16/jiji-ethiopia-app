<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <NuxtLink to="/" class="text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6]">
                Home
              </NuxtLink>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Terms & Conditions</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Content -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">Terms & Conditions</h1>
        
        <div class="prose dark:prose-invert max-w-none">
          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">1. Introduction</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Welcome to Jiji Ethiopia. By accessing and using our platform, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">2. User Responsibilities</h2>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect other users' rights and privacy</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">3. Listing Rules</h2>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>Listings must be accurate and truthful</li>
              <li>Prohibited items are not allowed</li>
              <li>Pricing must be clear and transparent</li>
              <li>Images must be of the actual item</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">4. Payment and Transactions</h2>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>All transactions must be completed through our platform</li>
              <li>Payment processing fees may apply</li>
              <li>Refunds are subject to our refund policy</li>
              <li>We reserve the right to hold funds in case of disputes</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">5. Dispute Resolution</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Any disputes between users will be resolved through our dispute resolution process. We reserve the right to mediate and make final decisions on disputes.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">6. Modifications</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Jiji Ethiopia platform.',
  layout: 'default'
})
</script>

<style scoped>
.prose :deep(h2) {
  color: #4F7F8F;
}

.dark .prose :deep(h2) {
  color: #C9F0EF;
}

.prose :deep(p) {
  color: #4F7F8F;
}

.dark .prose :deep(p) {
  color: #C9F0EF;
}

.prose :deep(ul) {
  color: #4F7F8F;
}

.dark .prose :deep(ul) {
  color: #C9F0EF;
}
</style> 