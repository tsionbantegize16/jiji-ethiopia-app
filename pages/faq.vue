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
                <span class="ml-1 text-[#4F7F8F] dark:text-[#C9F0EF]">FAQ</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-lg text-[#4F7F8F]/80 dark:text-[#C9F0EF]/80 max-w-2xl mx-auto">
          Find answers to common questions about buying and selling on Jiji Ethiopia
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search FAQs..."
            class="w-full px-4 py-3 pl-12 bg-white dark:bg-[#4F7F8F] rounded-lg border-2 border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 text-[#4F7F8F] dark:text-[#C9F0EF] focus:outline-none focus:border-[#2EC4B6]"
          />
          <svg
            class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF] absolute left-4 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <!-- FAQ Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          class="flex items-center p-4 bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          :class="{ 'ring-2 ring-[#2EC4B6]': selectedCategory === category.id }"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
            <component :is="category.icon" class="w-6 h-6 text-[#2EC4B6]" />
          </div>
          <div class="text-left">
            <h3 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">{{ category.name }}</h3>
            <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">{{ category.count }} questions</p>
          </div>
        </button>
      </div>

      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(faq, index) in filteredFaqs"
          :key="index"
          class="mb-4"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div class="flex items-center">
              <div class="w-10 h-10 flex items-center justify-center bg-[#2EC4B6]/10 rounded-lg mr-4">
                <component :is="faq.icon" class="w-5 h-5 text-[#2EC4B6]" />
              </div>
              <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] text-left">
                {{ faq.question }}
              </h3>
            </div>
            <svg
              class="w-6 h-6 text-[#4F7F8F] dark:text-[#C9F0EF] transform transition-transform duration-200"
              :class="{ 'rotate-180': openFaqs[index] }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            v-show="openFaqs[index]"
            class="mt-2 p-6 bg-white dark:bg-[#4F7F8F] rounded-lg shadow-md"
          >
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF]">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="text-center mt-12">
        <p class="text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Still have questions? We're here to help!
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Contact Support
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  title: 'FAQ',
  description: 'Frequently asked questions about Jiji Ethiopia platform.',
  layout: 'default'
})

// FAQ Categories
const categories = [
  {
    id: 'all',
    name: 'All Questions',
    count: 12,
    icon: 'QuestionMarkCircleIcon'
  },
  {
    id: 'buying',
    name: 'Buying',
    count: 4,
    icon: 'ShoppingBagIcon'
  },
  {
    id: 'selling',
    name: 'Selling',
    count: 4,
    icon: 'TagIcon'
  },
  {
    id: 'account',
    name: 'Account',
    count: 2,
    icon: 'UserCircleIcon'
  },
  {
    id: 'payment',
    name: 'Payment',
    count: 2,
    icon: 'CreditCardIcon'
  }
]

// FAQ Data
const faqs = [
  {
    category: 'buying',
    question: 'How do I buy an item on Jiji?',
    answer: 'To buy an item on Jiji, first create an account, browse listings, and when you find what you want, click "Contact Seller" to start the conversation. Arrange payment and delivery with the seller through our secure messaging system.',
    icon: 'ShoppingBagIcon'
  },
  {
    category: 'selling',
    question: 'How do I list an item for sale?',
    answer: 'To list an item, click "Sell" in the top navigation, fill in the item details, add photos, set your price, and publish your listing. Make sure to provide clear photos and accurate descriptions.',
    icon: 'TagIcon'
  },
  {
    category: 'account',
    question: 'How do I create an account?',
    answer: 'Click "Sign Up" in the top right corner, fill in your details, verify your email, and you\'re ready to start buying and selling on Jiji.',
    icon: 'UserCircleIcon'
  },
  {
    category: 'payment',
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods including bank transfers, mobile money, and cash on delivery. The specific payment options will be shown during the checkout process.',
    icon: 'CreditCardIcon'
  },
  {
    category: 'buying',
    question: 'How do I know if a seller is trustworthy?',
    answer: 'Check the seller\'s rating, reviews, and how long they\'ve been on the platform. Always meet in a public place and verify the item before payment.',
    icon: 'ShoppingBagIcon'
  },
  {
    category: 'selling',
    question: 'How do I handle shipping?',
    answer: 'You can arrange shipping through our platform or handle it yourself. Make sure to use reliable shipping services and keep tracking information.',
    icon: 'TagIcon'
  }
]

// State
const selectedCategory = ref('all')
const searchQuery = ref('')
const openFaqs = ref<boolean[]>(new Array(faqs.length).fill(false))

// Computed
const filteredFaqs = computed(() => {
  return faqs.filter(faq => {
    const matchesCategory = selectedCategory.value === 'all' || faq.category === selectedCategory.value
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

// Methods
const toggleFaq = (index: number) => {
  openFaqs.value[index] = !openFaqs.value[index]
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