<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#4F7F8F] dark:to-[#2EC4B6]">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-[url('/assets/images/about/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6]/90 to-[#5EBFCA]/90"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            About Jiji Ethiopia
          </h1>
          <p class="text-xl text-white/90 mb-8 drop-shadow">
            Empowering Ethiopians through trusted online marketplace
          </p>
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
                  <div class="text-3xl font-bold text-[#2EC4B6]">1M+</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Active Users</div>
                </div>
                <div class="p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg">
                  <div class="text-3xl font-bold text-[#2EC4B6]">500K+</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Listings</div>
                </div>
                <div class="p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg">
                  <div class="text-3xl font-bold text-[#2EC4B6]">98%</div>
                  <div class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Satisfaction</div>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-2xl transform rotate-3"></div>
              <img 
                src="/assets/images/about/mission.jpg" 
                alt="Our Mission" 
                class="relative rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
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

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold text-center text-[#4F7F8F] dark:text-[#C9F0EF] mb-16">
            Meet Our Team
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full transform rotate-3"></div>
                <img 
                  src="/assets/images/about/team-1.jpg" 
                  alt="Team Member" 
                  class="relative w-48 h-48 rounded-full object-cover mx-auto transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Abebe Kebede</h3>
              <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">CEO & Founder</p>
            </div>
            <div class="text-center group">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full transform rotate-3"></div>
                <img 
                  src="/assets/images/about/team-2.jpg" 
                  alt="Team Member" 
                  class="relative w-48 h-48 rounded-full object-cover mx-auto transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Kebede Abebe</h3>
              <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">CTO</p>
            </div>
            <div class="text-center group">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full transform rotate-3"></div>
                <img 
                  src="/assets/images/about/team-3.jpg" 
                  alt="Team Member" 
                  class="relative w-48 h-48 rounded-full object-cover mx-auto transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Tigist Haile</h3>
              <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Head of Operations</p>
            </div>
            <div class="text-center group">
              <div class="relative mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#5EBFCA] rounded-full transform rotate-3"></div>
                <img 
                  src="/assets/images/about/team-4.jpg" 
                  alt="Team Member" 
                  class="relative w-48 h-48 rounded-full object-cover mx-auto transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <h3 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Solomon Teklu</h3>
              <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Head of Marketing</p>
            </div>
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
import { ref } from 'vue'

// Import images
const images = {
  hero: '/assets/images/about/hero-bg.jpg',
  mission: '/assets/images/about/mission.jpg',
  team: {
    member1: '/assets/images/about/team-1.jpg',
    member2: '/assets/images/about/team-2.jpg',
    member3: '/assets/images/about/team-3.jpg',
    member4: '/assets/images/about/team-4.jpg'
  }
}

definePageMeta({
  title: 'About Us - Jiji Ethiopia',
  description: 'Learn more about Jiji Ethiopia, our mission, and why we\'re the trusted marketplace for buying and selling in Ethiopia.'
})
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 