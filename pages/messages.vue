<template>
  <div class="min-h-screen bg-[#C9F0EF]/20 dark:bg-[#4F7F8F]/20">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Conversations List -->
        <div class="w-full md:w-1/3 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg overflow-hidden">
          <div class="p-4 border-b border-gray-100 dark:border-[#C9F0EF]/20">
            <h2 class="text-xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF]">Messages</h2>
            <div class="mt-4 relative">
              <input
                type="text"
                placeholder="Search conversations..."
                class="w-full px-4 py-2 bg-[#C9F0EF]/20 dark:bg-[#2EC4B6]/20 rounded-lg text-[#4F7F8F] dark:text-[#C9F0EF] placeholder-[#4F7F8F]/50 dark:placeholder-[#C9F0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
              />
              <svg class="w-5 h-5 absolute right-3 top-2.5 text-[#4F7F8F] dark:text-[#C9F0EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div class="overflow-y-auto h-[calc(100vh-12rem)]">
            <div
              v-for="conversation in conversations"
              :key="conversation.id"
              class="p-4 hover:bg-[#C9F0EF]/20 dark:hover:bg-[#2EC4B6]/20 cursor-pointer transition-colors duration-200"
              :class="{ 'bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/30': conversation.id === activeConversation }"
              @click="activeConversation = conversation.id"
            >
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <img
                    :src="conversation.avatar"
                    :alt="conversation.name"
                    class="w-12 h-12 rounded-full object-cover"
                  />
                  <div
                    class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-[#4F7F8F]"
                    :class="conversation.online ? 'bg-green-500' : 'bg-gray-400'"
                  ></div>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] truncate">
                      {{ conversation.name }}
                    </h3>
                    <span class="text-xs text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                      {{ conversation.lastMessageTime }}
                    </span>
                  </div>
                  <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 truncate">
                    {{ conversation.lastMessage }}
                  </p>
                </div>
                <div v-if="conversation.unread" class="ml-2">
                  <span class="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-[#2EC4B6] rounded-full">
                    {{ conversation.unread }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="w-full md:w-2/3 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg overflow-hidden flex flex-col">
          <div v-if="activeConversation" class="flex-1 flex flex-col">
            <!-- Chat Header -->
            <div class="p-4 border-b border-gray-100 dark:border-[#C9F0EF]/20 flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <img
                  :src="currentConversation?.avatar"
                  :alt="currentConversation?.name"
                  class="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 class="text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
                    {{ currentConversation?.name }}
                  </h3>
                  <p class="text-xs text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                    {{ currentConversation?.online ? 'Online' : 'Offline' }}
                  </p>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <button class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <button class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Messages -->
            <div class="flex-1 overflow-y-auto p-4 space-y-4">
              <div
                v-for="message in currentConversation?.messages"
                :key="message.id"
                class="flex"
                :class="message.sent ? 'justify-end' : 'justify-start'"
              >
                <div
                  class="max-w-[70%] rounded-lg p-3"
                  :class="message.sent ? 'bg-[#2EC4B6] text-white' : 'bg-[#C9F0EF]/30 dark:bg-[#2EC4B6]/20 text-[#4F7F8F] dark:text-[#C9F0EF]'"
                >
                  <p class="text-sm">{{ message.text }}</p>
                  <span class="text-xs opacity-70 mt-1 block">
                    {{ message.time }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Message Input -->
            <div class="p-4 border-t border-gray-100 dark:border-[#C9F0EF]/20">
              <div class="flex items-center space-x-2">
                <button class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  class="flex-1 px-4 py-2 bg-[#C9F0EF]/20 dark:bg-[#2EC4B6]/20 rounded-lg text-[#4F7F8F] dark:text-[#C9F0EF] placeholder-[#4F7F8F]/50 dark:placeholder-[#C9F0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
                />
                <button class="p-2 text-white bg-[#2EC4B6] rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="flex-1 flex items-center justify-center p-8">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto text-[#4F7F8F]/30 dark:text-[#C9F0EF]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 class="mt-4 text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">No conversation selected</h3>
              <p class="mt-2 text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                Select a conversation from the list to start messaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeConversation = ref(1)

const conversations = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Is the iPhone 13 still available?',
    lastMessageTime: '10:30 AM',
    online: true,
    unread: 2,
    messages: [
      {
        id: 1,
        text: 'Hi, I saw your iPhone 13 listing. Is it still available?',
        time: '10:15 AM',
        sent: false
      },
      {
        id: 2,
        text: 'Yes, it is still available!',
        time: '10:20 AM',
        sent: true
      },
      {
        id: 3,
        text: 'Great! What\'s the condition of the phone?',
        time: '10:25 AM',
        sent: false
      },
      {
        id: 4,
        text: 'It\'s in excellent condition, barely used for 6 months. I can send you more photos if you\'d like.',
        time: '10:30 AM',
        sent: true
      }
    ]
  },
  {
    id: 2,
    name: 'Sarah Smith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'I can meet you tomorrow at 2 PM',
    lastMessageTime: 'Yesterday',
    online: false,
    unread: 0,
    messages: [
      {
        id: 1,
        text: 'Hi, I\'m interested in your MacBook Pro',
        time: 'Yesterday, 1:30 PM',
        sent: false
      },
      {
        id: 2,
        text: 'Hello! Yes, it\'s still available. Would you like to see it in person?',
        time: 'Yesterday, 1:45 PM',
        sent: true
      },
      {
        id: 3,
        text: 'Yes, that would be great. When are you available?',
        time: 'Yesterday, 2:00 PM',
        sent: false
      },
      {
        id: 4,
        text: 'I can meet you tomorrow at 2 PM',
        time: 'Yesterday, 2:15 PM',
        sent: true
      }
    ]
  },
  {
    id: 3,
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'The price is negotiable',
    lastMessageTime: '2 days ago',
    online: true,
    unread: 0,
    messages: [
      {
        id: 1,
        text: 'Hi, about your car listing...',
        time: '2 days ago, 3:00 PM',
        sent: false
      },
      {
        id: 2,
        text: 'Hello! Yes, what would you like to know?',
        time: '2 days ago, 3:15 PM',
        sent: true
      },
      {
        id: 3,
        text: 'Is the price negotiable?',
        time: '2 days ago, 3:30 PM',
        sent: false
      },
      {
        id: 4,
        text: 'The price is negotiable',
        time: '2 days ago, 3:45 PM',
        sent: true
      }
    ]
  }
]

const currentConversation = computed(() => {
  return conversations.find(conv => conv.id === activeConversation.value)
})
</script>

<style scoped>
/* Add smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: var(--color-primary);
  border-radius: 3px;
}
</style> 