<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">Frequently Asked Questions</h1>

      <!-- Search -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search questions..."
            class="w-full px-4 py-3 pl-12 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
          />
          <svg
            class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50"
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="category in categories"
          :key="category.id"
          class="bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <div class="w-12 h-12 bg-[#2EC4B6]/10 dark:bg-[#2EC4B6]/20 rounded-lg flex items-center justify-center mb-4">
            <component :is="category.icon" class="w-6 h-6 text-[#2EC4B6]" />
          </div>
          <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
            {{ category.name }}
          </h2>
          <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
            {{ category.description }}
          </p>
        </div>
      </div>

      <!-- FAQ List -->
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(faq, index) in filteredFaqs"
          :key="faq.id"
          class="mb-4"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] text-left">
              {{ faq.question }}
            </h3>
            <svg
              class="w-6 h-6 text-[#2EC4B6] transform transition-transform duration-200"
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
            class="mt-2 p-4 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg"
          >
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF] whitespace-pre-line">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="max-w-2xl mx-auto mt-12 text-center">
        <h2 class="text-2xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-4">
          Still have questions?
        </h2>
        <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 mb-6">
          Our support team is here to help you with any questions you may have
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center px-6 py-3 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
        >
          Contact Support
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

interface Category {
  id: number
  name: string
  description: string
  icon: string
}

const searchQuery = ref('')
const openFaqs = ref<boolean[]>([])

// Mock data - Replace with actual API calls
const categories = ref<Category[]>([
  {
    id: 1,
    name: 'Getting Started',
    description: 'Learn how to create an account and start using Jiji Ethiopia',
    icon: 'UserIcon'
  },
  {
    id: 2,
    name: 'Buying & Selling',
    description: 'Everything you need to know about buying and selling on our platform',
    icon: 'ShoppingCartIcon'
  },
  {
    id: 3,
    name: 'Safety & Security',
    description: 'Tips and guidelines for safe transactions on Jiji Ethiopia',
    icon: 'ShieldIcon'
  }
])

const faqs = ref<FAQ[]>([
  {
    id: 1,
    question: 'How do I create an account?',
    answer: 'Creating an account on Jiji Ethiopia is easy! Simply click the "Sign Up" button in the top right corner, fill in your details, and verify your email address. You can also sign up using your Google or Facebook account for faster registration.',
    category: 'Getting Started'
  },
  {
    id: 2,
    question: 'How do I list an item for sale?',
    answer: 'To list an item for sale:\n1. Click the "Create Listing" button\n2. Select the appropriate category\n3. Fill in the item details and upload photos\n4. Set your price and location\n5. Review and publish your listing',
    category: 'Buying & Selling'
  },
  {
    id: 3,
    question: 'How do I contact a seller?',
    answer: 'You can contact a seller by:\n1. Clicking the "Contact Seller" button on the listing\n2. Using the built-in chat system\n3. Calling the seller directly if they\'ve provided their phone number',
    category: 'Buying & Selling'
  },
  {
    id: 4,
    question: 'Is it safe to buy and sell on Jiji Ethiopia?',
    answer: 'Yes, Jiji Ethiopia is designed to be a safe platform for buying and selling. We recommend:\n- Meeting in public places\n- Verifying items before payment\n- Using secure payment methods\n- Reporting suspicious activity',
    category: 'Safety & Security'
  },
  {
    id: 5,
    question: 'How do I edit or delete my listing?',
    answer: 'To edit or delete your listing:\n1. Go to your profile\n2. Find the listing in your active listings\n3. Click the edit or delete button\n4. Make your changes or confirm deletion',
    category: 'Buying & Selling'
  },
  {
    id: 6,
    question: 'What payment methods are accepted?',
    answer: 'We support various payment methods including:\n- Cash on delivery\n- Bank transfer\n- Mobile money\n- Digital wallets\nAlways verify the payment method with the seller before proceeding.',
    category: 'Buying & Selling'
  }
])

// Initialize openFaqs array
onMounted(() => {
  openFaqs.value = new Array(faqs.value.length).fill(false)
})

// Filter FAQs based on search query
const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value

  const query = searchQuery.value.toLowerCase()
  return faqs.value.filter(
    faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
  )
})

// Toggle FAQ visibility
const toggleFaq = (index: number) => {
  openFaqs.value[index] = !openFaqs.value[index]
}
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 