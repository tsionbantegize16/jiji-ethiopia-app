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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Privacy Policy</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Content -->
      <div class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">Privacy Policy</h1>
        
        <div class="prose dark:prose-invert max-w-none">
          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">1. Information We Collect</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              We collect information that you provide directly to us, including but not limited to:
            </p>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Listing details and images</li>
              <li>Communication history</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">2. How We Use Your Information</h2>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process transactions</li>
              <li>To communicate with you</li>
              <li>To improve our platform</li>
              <li>To prevent fraud and abuse</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">3. Information Sharing</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              We may share your information with:
            </p>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>Service providers and business partners</li>
              <li>Law enforcement when required by law</li>
              <li>Other users as part of the platform's functionality</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">4. Data Security</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">5. Your Rights</h2>
            <ul class="list-disc pl-6 text-[#4F7F8F] dark:text-[#C9F0EF] space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">6. Contact Us</h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              If you have any questions about this Privacy Policy, please contact us at privacy@jiji.et
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for Jiji Ethiopia platform.',
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