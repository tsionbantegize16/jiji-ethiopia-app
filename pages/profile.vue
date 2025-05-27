<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">My Profile</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Profile Sidebar -->
      <div class="md:col-span-1">
        <div class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-6">
          <!-- Profile Image -->
          <div class="text-center mb-6">
            <div class="relative inline-block">
              <img
                :src="userProfile.avatar"
                :alt="userProfile.name"
                class="w-32 h-32 rounded-full object-cover border-4 border-[#C9F0EF] dark:border-[#2EC4B6]"
              />
              <button
                @click="updateProfileImage"
                class="absolute bottom-0 right-0 p-2 bg-[#2EC4B6] text-white rounded-full hover:bg-[#4F7F8F] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
            <h2 class="mt-4 text-xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF]">
              {{ userProfile.name }}
            </h2>
            <p class="text-[#4F7F8F] dark:text-[#C9F0EF]">
              {{ userProfile.email }}
            </p>
          </div>

          <!-- Navigation -->
          <nav class="space-y-2">
            <button
              v-for="section in sections"
              :key="section.id"
              @click="activeSection = section.id"
              class="w-full flex items-center px-4 py-2 text-[#4F7F8F] dark:text-[#C9F0EF] rounded-lg hover:bg-[#C9F0EF] dark:hover:bg-[#2EC4B6] transition-colors duration-200"
              :class="{ 'bg-[#C9F0EF] dark:bg-[#2EC4B6]': activeSection === section.id }"
            >
              <component :is="section.icon" class="w-5 h-5 mr-3" />
              {{ section.name }}
            </button>
          </nav>
        </div>
      </div>

      <!-- Main Content -->
      <div class="md:col-span-2">
        <!-- Personal Information -->
        <div v-if="activeSection === 'personal'" class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">Personal Information</h3>
          <form @submit.prevent="updateProfile" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Full Name</label>
              <input
                v-model="userProfile.name"
                type="text"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Email</label>
              <input
                v-model="userProfile.email"
                type="email"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Phone Number</label>
              <input
                v-model="userProfile.phone"
                type="tel"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Location</label>
              <input
                v-model="userProfile.location"
                type="text"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div class="flex justify-end">
              <button type="submit" class="btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        <!-- Security -->
        <div v-if="activeSection === 'security'" class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">Security Settings</h3>
          <form @submit.prevent="updatePassword" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Current Password</label>
              <input
                v-model="password.current"
                type="password"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">New Password</label>
              <input
                v-model="password.new"
                type="password"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Confirm New Password</label>
              <input
                v-model="password.confirm"
                type="password"
                class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
              />
            </div>
            <div class="flex justify-end">
              <button type="submit" class="btn-primary">
                Update Password
              </button>
            </div>
          </form>
        </div>

        <!-- Notifications -->
        <div v-if="activeSection === 'notifications'" class="bg-white dark:bg-[#4F7F8F] rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-[#4F7F8F] dark:text-[#C9F0EF] mb-6">Notification Settings</h3>
          <div class="space-y-4">
            <div v-for="setting in notificationSettings" :key="setting.id" class="flex items-center justify-between">
              <div>
                <h4 class="font-medium text-[#4F7F8F] dark:text-[#C9F0EF]">{{ setting.name }}</h4>
                <p class="text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">{{ setting.description }}</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="setting.enabled"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-[#C9F0EF] dark:bg-[#2EC4B6] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2EC4B6] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2EC4B6]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface UserProfile {
  name: string
  email: string
  phone: string
  location: string
  avatar: string
}

interface Password {
  current: string
  new: string
  confirm: string
}

interface NotificationSetting {
  id: string
  name: string
  description: string
  enabled: boolean
}

const userProfile = ref<UserProfile>({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+251 912 345 678',
  location: 'Addis Ababa',
  avatar: 'https://i.pravatar.cc/150?img=1'
})

const password = ref<Password>({
  current: '',
  new: '',
  confirm: ''
})

const notificationSettings = ref<NotificationSetting[]>([
  {
    id: 'messages',
    name: 'Messages',
    description: 'Get notified when you receive new messages',
    enabled: true
  },
  {
    id: 'listings',
    name: 'Listings',
    description: 'Get notified about your listing status',
    enabled: true
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Receive updates about new features and promotions',
    enabled: false
  }
])

const sections = [
  {
    id: 'personal',
    name: 'Personal Information',
    icon: 'UserIcon'
  },
  {
    id: 'security',
    name: 'Security',
    icon: 'LockIcon'
  },
  {
    id: 'notifications',
    name: 'Notifications',
    icon: 'BellIcon'
  }
]

const activeSection = ref('personal')

const updateProfile = async () => {
  try {
    // TODO: Implement profile update logic
    console.log('Updating profile:', userProfile.value)
  } catch (error) {
    console.error('Error updating profile:', error)
  }
}

const updatePassword = async () => {
  try {
    // TODO: Implement password update logic
    console.log('Updating password:', password.value)
  } catch (error) {
    console.error('Error updating password:', error)
  }
}

const updateProfileImage = () => {
  // TODO: Implement profile image update logic
  console.log('Updating profile image')
}
</script> 