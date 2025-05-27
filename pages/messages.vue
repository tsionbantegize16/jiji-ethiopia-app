<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Conversations List -->
      <div class="lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <!-- Search -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search conversations..."
                class="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg
                class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
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

          <!-- Conversations -->
          <div class="divide-y divide-gray-200 dark:divide-gray-700">
            <button
              v-for="conversation in conversations"
              :key="conversation.id"
              @click="selectConversation(conversation)"
              class="w-full p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              :class="{ 'bg-gray-50 dark:bg-gray-700/50': selectedConversation?.id === conversation.id }"
            >
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <span class="text-lg font-semibold text-gray-600 dark:text-gray-300">
                    {{ conversation.user.name.charAt(0) }}
                  </span>
                </div>
                
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <h3 class="font-medium text-gray-900 dark:text-white truncate">
                      {{ conversation.user.name }}
                    </h3>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                      {{ conversation.lastMessage.time }}
                    </span>
                  </div>
                  
                  <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {{ conversation.lastMessage.text }}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Chat -->
      <div class="lg:col-span-3">
        <div
          v-if="selectedConversation"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm h-[calc(100vh-12rem)] flex flex-col"
        >
          <!-- Chat Header -->
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span class="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {{ selectedConversation.user.name.charAt(0) }}
                </span>
              </div>
              
              <div>
                <h2 class="font-medium text-gray-900 dark:text-white">
                  {{ selectedConversation.user.name }}
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ selectedConversation.user.status }}
                </p>
              </div>
            </div>
          </div>

          <!-- Messages -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4">
            <div
              v-for="message in selectedConversation.messages"
              :key="message.id"
              class="flex"
              :class="{ 'justify-end': message.isMine }"
            >
              <div
                class="max-w-[70%] rounded-lg px-4 py-2"
                :class="{
                  'bg-primary-100 dark:bg-primary-900/50 text-primary-900 dark:text-primary-100': message.isMine,
                  'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white': !message.isMine
                }"
              >
                <p>{{ message.text }}</p>
                <span class="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                  {{ message.time }}
                </span>
              </div>
            </div>
          </div>

          <!-- Message Input -->
          <div class="p-4 border-t border-gray-200 dark:border-gray-700">
            <form @submit.prevent="sendMessage" class="flex space-x-4">
              <input
                v-model="newMessage"
                type="text"
                placeholder="Type a message..."
                class="flex-1 input"
              />
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="!newMessage.trim()"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <!-- No Conversation Selected -->
        <div
          v-else
          class="bg-white dark:bg-gray-800 rounded-lg shadow-sm h-[calc(100vh-12rem)] flex items-center justify-center"
        >
          <div class="text-center">
            <svg
              class="w-16 h-16 mx-auto text-gray-400 mb-4"
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
            <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-1">
              No conversation selected
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Select a conversation to start chatting
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const newMessage = ref('')
const selectedConversation = ref(null)

// Mock data - replace with actual data from your backend
const conversations = ref([
  {
    id: 1,
    user: {
      name: 'John Doe',
      status: 'Online',
    },
    lastMessage: {
      text: 'Is this still available?',
      time: '2m ago',
    },
    messages: [
      {
        id: 1,
        text: 'Hi, I saw your iPhone 13 Pro Max listing. Is it still available?',
        time: '10:30 AM',
        isMine: false,
      },
      {
        id: 2,
        text: 'Yes, it is still available!',
        time: '10:32 AM',
        isMine: true,
      },
      {
        id: 3,
        text: 'Great! Can you tell me more about its condition?',
        time: '10:33 AM',
        isMine: false,
      },
      {
        id: 4,
        text: 'It\'s in perfect condition, only used for 6 months. All accessories are included.',
        time: '10:35 AM',
        isMine: true,
      },
      {
        id: 5,
        text: 'Is this still available?',
        time: '10:40 AM',
        isMine: false,
      },
    ],
  },
  {
    id: 2,
    user: {
      name: 'Jane Smith',
      status: 'Last seen 1h ago',
    },
    lastMessage: {
      text: 'Thank you for your interest!',
      time: '1h ago',
    },
    messages: [
      {
        id: 1,
        text: 'Hello, I\'m interested in your Samsung Galaxy S21.',
        time: 'Yesterday',
        isMine: false,
      },
      {
        id: 2,
        text: 'Hi! Yes, it\'s still available. What would you like to know?',
        time: 'Yesterday',
        isMine: true,
      },
      {
        id: 3,
        text: 'Thank you for your interest!',
        time: '1h ago',
        isMine: true,
      },
    ],
  },
])

const selectConversation = (conversation) => {
  selectedConversation.value = conversation
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  selectedConversation.value.messages.push({
    id: Date.now(),
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isMine: true,
  })

  newMessage.value = ''
}
</script> 