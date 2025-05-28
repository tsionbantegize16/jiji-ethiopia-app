<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#4F7F8F] dark:to-[#2EC4B6]">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Ethiopian Market" class="w-full h-full object-cover object-center opacity-70" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6]/90 to-[#5EBFCA]/90 mix-blend-multiply"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            About Jiji Ethiopia
          </h1>
          <p class="text-xl text-white/90 mb-8 drop-shadow">
            The largest marketplace in Ethiopia. Buy and sell everything from cars to phones.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-[#2EC4B6] mb-2">10,000+</div>
            <div class="text-[#4F7F8F] dark:text-[#C9F0EF]">Listings</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#2EC4B6] mb-2">50+</div>
            <div class="text-[#4F7F8F] dark:text-[#C9F0EF]">Cities Covered</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#2EC4B6] mb-2">5,000+</div>
            <div class="text-[#4F7F8F] dark:text-[#C9F0EF]">Daily Deals</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#2EC4B6] mb-2">24/7</div>
            <div class="text-[#4F7F8F] dark:text-[#C9F0EF]">Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-4xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">
                Our Mission
              </h2>
              <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80">
                At Jiji Ethiopia, we're committed to creating a trusted platform where Ethiopians can buy and sell with confidence. Our mission is to empower local commerce and connect communities through technology.
              </p>
              <div class="flex gap-4">
                <div class="p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg">
                  <div class="text-3xl font-bold text-[#2EC4B6]">10K+</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Active Listings</div>
                </div>
                <div class="p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg">
                  <div class="text-3xl font-bold text-[#2EC4B6]">50+</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Cities</div>
                </div>
                <div class="p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg">
                  <div class="text-3xl font-bold text-[#2EC4B6]">5K+</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Daily Deals</div>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-2xl transform rotate-3"></div>
              <div class="relative rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 bg-[#4F7F8F] h-96 flex items-center justify-center">
                <span class="text-white text-lg">Mission Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white dark:bg-[#4F7F8F]">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-[#4F7F8F] dark:text-[#C9F0EF] mb-16">
            Our Core Values
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-8 bg-gray-50 dark:bg-[#4F7F8F]/50 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div class="w-16 h-16 bg-[#2EC4B6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Trust & Safety</h3>
              <p class="text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80">
                We prioritize the safety and security of our users, ensuring a trustworthy marketplace for all.
              </p>
            </div>
            <div class="p-8 bg-gray-50 dark:bg-[#4F7F8F]/50 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div class="w-16 h-16 bg-[#2EC4B6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Innovation</h3>
              <p class="text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80">
                We continuously innovate to provide the best possible experience for our users.
              </p>
            </div>
            <div class="p-8 bg-gray-50 dark:bg-[#4F7F8F]/50 rounded-2xl hover:shadow-xl transition-all duration-300 group">
              <div class="w-16 h-16 bg-[#2EC4B6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">Community</h3>
              <p class="text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80">
                We foster a strong community where buyers and sellers can connect and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-gray-50 dark:bg-[#4F7F8F]/50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">
            Stay Updated
          </h2>
          <p class="text-xl text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 mb-12">
            Get notified about new listings in your area and price drops on saved items.
          </p>
          <div class="flex gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="flex-1 px-6 py-4 rounded-full border-2 border-[#2EC4B6] focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
            />
            <button class="px-8 py-4 bg-[#2EC4B6] text-white rounded-full font-bold hover:bg-[#2EC4B6]/90 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-8">
            Join Our Growing Community
          </h2>
          <p class="text-xl text-white/90 mb-12">
            Start buying and selling with confidence today
          </p>
          <div class="flex gap-4 justify-center">
            <button class="px-8 py-4 bg-white text-[#2EC4B6] rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
              Get Started
            </button>
            <button class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About Us - Jiji Ethiopia',
  description: 'Learn more about Jiji Ethiopia, our mission, and why we\'re the trusted marketplace for buying and selling in Ethiopia.'
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 