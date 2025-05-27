<template>
  <div class="min-h-screen bg-[#C9F0EF] dark:bg-[#4F7F8F] py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">Messages</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Conversations List -->
        <div class="lg:col-span-1 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg overflow-hidden">
          <div class="p-4 border-b border-[#4F7F8F]/10 dark:border-[#C9F0EF]/10">
            <input
              type="text"
              placeholder="Search conversations..."
              class="w-full px-4 py-2 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
            />
          </div>
          
          <div class="overflow-y-auto h-[calc(100vh-300px)]">
            <div
              v-for="chat in conversations"
              :key="chat.id"
              @click="selectChat(chat)"
              class="p-4 border-b border-[#4F7F8F]/10 dark:border-[#C9F0EF]/10 cursor-pointer hover:bg-[#C9F0EF]/10 dark:hover:bg-[#2EC4B6]/10 transition-colors duration-200"
              :class="{ 'bg-[#C9F0EF]/20 dark:bg-[#2EC4B6]/20': selectedChat?.id === chat.id }"
            >
              <div class="flex items-center space-x-4">
                <img
                  :src="chat.avatar"
                  :alt="chat.name"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <h3 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF] truncate">
                      {{ chat.name }}
                    </h3>
                    <span class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                      {{ chat.lastMessageTime }}
                    </span>
                  </div>
                  <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70 truncate">
                    {{ chat.lastMessage }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="lg:col-span-2 bg-white dark:bg-[#4F7F8F] rounded-xl shadow-lg overflow-hidden">
          <template v-if="selectedChat">
            <!-- Chat Header -->
            <div class="p-4 border-b border-[#4F7F8F]/10 dark:border-[#C9F0EF]/10 flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <img
                  :src="selectedChat.avatar"
                  :alt="selectedChat.name"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 class="text-lg font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">
                    {{ selectedChat.name }}
                  </h2>
                  <p class="text-sm text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                    {{ selectedChat.status }}
                  </p>
                </div>
              </div>
              <button class="p-2 text-[#4F7F8F] dark:text-[#C9F0EF] hover:text-[#2EC4B6] transition-colors duration-200">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            <!-- Messages -->
            <div class="p-4 overflow-y-auto h-[calc(100vh-400px)]">
              <div
                v-for="message in selectedChat.messages"
                :key="message.id"
                class="mb-4"
                :class="{ 'text-right': message.isSent }"
              >
                <div
                  class="inline-block max-w-[70%] p-3 rounded-lg"
                  :class="message.isSent ? 'bg-[#2EC4B6] text-white' : 'bg-[#C9F0EF]/20 dark:bg-[#2EC4B6]/20 text-[#4F7F8F] dark:text-[#C9F0EF]'"
                >
                  <p>{{ message.text }}</p>
                  <span class="text-xs opacity-70 mt-1 block">
                    {{ message.time }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Message Input -->
            <div class="p-4 border-t border-[#4F7F8F]/10 dark:border-[#C9F0EF]/10">
              <form @submit.prevent="sendMessage" class="flex items-center space-x-4">
                <input
                  v-model="newMessage"
                  type="text"
                  placeholder="Type your message..."
                  class="flex-1 px-4 py-2 rounded-lg border border-[#4F7F8F]/20 dark:border-[#C9F0EF]/20 focus:outline-none focus:ring-2 focus:ring-[#2EC4B6]"
                />
                <button
                  type="submit"
                  class="p-2 bg-[#2EC4B6] text-white rounded-lg hover:bg-[#4F7F8F] transition-colors duration-200"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </template>

          <!-- Empty State -->
          <div v-else class="h-full flex items-center justify-center p-8">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto text-[#4F7F8F]/50 dark:text-[#C9F0EF]/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 class="text-xl font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">
                Select a conversation
              </h3>
              <p class="text-[#4F7F8F]/70 dark:text-[#C9F0EF]/70">
                Choose a chat from the list to start messaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Message {
  id: number
  text: string
  time: string
  isSent: boolean
}

interface Chat {
  id: number
  name: string
  avatar: string
  status: string
  lastMessage: string
  lastMessageTime: string
  messages: Message[]
}

const selectedChat = ref<Chat | null>(null)
const newMessage = ref('')

// Mock data - Replace with actual API calls
const conversations = ref<Chat[]>([
  {
    id: 1,
    name: 'John Doe',
    avatar: '/images/avatar.jpg',
    status: 'Online',
    lastMessage: 'Is the item still available?',
    lastMessageTime: '2m ago',
    messages: [
      {
        id: 1,
        text: 'Hi, I saw your iPhone listing. Is it still available?',
        time: '10:30 AM',
        isSent: false
      },
      {
        id: 2,
        text: 'Yes, it is still available!',
        time: '10:32 AM',
        isSent: true
      },
      {
        id: 3,
        text: 'Great! Can we meet today?',
        time: '10:33 AM',
        isSent: false
      },
      {
        id: 4,
        text: 'Sure, where would you like to meet?',
        time: '10:35 AM',
        isSent: true
      }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '/images/avatar-2.jpg',
    status: 'Last seen 5m ago',
    lastMessage: 'The price is negotiable',
    lastMessageTime: '15m ago',
    messages: [
      {
        id: 1,
        text: 'Hello, I\'m interested in your car',
        time: '9:45 AM',
        isSent: false
      },
      {
        id: 2,
        text: 'Hi! Yes, it\'s a great car. What would you like to know?',
        time: '9:47 AM',
        isSent: true
      },
      {
        id: 3,
        text: 'Is the price negotiable?',
        time: '9:48 AM',
        isSent: false
      },
      {
        id: 4,
        text: 'Yes, we can discuss the price',
        time: '9:50 AM',
        isSent: true
      }
    ]
  }
])

const selectChat = (chat: Chat) => {
  selectedChat.value = chat
}

const sendMessage = () => {
  if (!newMessage.value.trim() || !selectedChat.value) return

  const message: Message = {
    id: Date.now(),
    text: newMessage.value,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isSent: true
  }

  selectedChat.value.messages.push(message)
  selectedChat.value.lastMessage = newMessage.value
  selectedChat.value.lastMessageTime = 'Just now'
  newMessage.value = ''
}
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
  scrollbar-color: #2EC4B6 #C9F0EF;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #C9F0EF;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #2EC4B6;
  border-radius: 3px;
}
</style> 