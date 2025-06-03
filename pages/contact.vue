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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">Contact Us</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Contact Us
        </h1>
        <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 max-w-2xl mx-auto">
          Get in touch with our team for any questions or support you need
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">
            Send us a Message
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
              />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-1">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-2 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6] resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-6">
          <!-- Office Locations -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Our Offices
            </h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                  <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">Addis Ababa Office</h3>
                  <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Bole, Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                  <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">Hawassa Office</h3>
                  <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Hawassa, Sidama Region, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Methods -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Contact Methods
            </h2>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                  <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">Email</h3>
                  <a href="mailto:support@jiji.et" class="text-[#2EC4B6] hover:text-[#4F7F8F]">support@jiji.et</a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                  <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">Phone</h3>
                  <a href="tel:+251911234567" class="text-[#2EC4B6] hover:text-[#4F7F8F]">+251 91 123 4567</a>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                  <svg class="w-5 h-5 text-[#2EC4B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">Live Chat</h3>
                  <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md p-6">
            <h2 class="text-2xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
              Business Hours
            </h2>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">Monday - Friday</span>
                <span class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">Saturday</span>
                <span class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">9:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[#4F7F8F] dark:text-[#C9F0EF]">Sunday</span>
                <span class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Contact Us',
  description: 'Get in touch with Jiji Ethiopia for support and inquiries.',
  layout: 'default'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: Implement form submission logic
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
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

.dark ::-webkit-scrollbar-track {
  background: #4F7F8F;
}

.dark ::-webkit-scrollbar-thumb {
  background: #C9F0EF;
}
</style> 