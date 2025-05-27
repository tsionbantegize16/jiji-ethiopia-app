<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Profile Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div class="text-center mb-6">
            <div class="w-24 h-24 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
              <span class="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                {{ user.name.charAt(0) }}
              </span>
            </div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ user.name }}
            </h2>
            <p class="text-gray-500 dark:text-gray-400">
              Member since {{ user.joinDate }}
            </p>
          </div>

          <div class="space-y-4">
            <NuxtLink
              to="/profile"
              class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>

            <NuxtLink
              to="/profile/listings"
              class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              My Listings
            </NuxtLink>

            <NuxtLink
              to="/profile/favorites"
              class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Favorites
            </NuxtLink>

            <NuxtLink
              to="/profile/messages"
              class="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Messages
            </NuxtLink>

            <button
              @click="logout"
              class="flex items-center text-red-600 hover:text-red-700 w-full"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-3">
        <!-- Profile Information -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Profile Information
          </h3>

          <form @submit.prevent="updateProfile" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                v-model="profile.name"
                type="text"
                class="input"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                v-model="profile.email"
                type="email"
                class="input"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                v-model="profile.phone"
                type="tel"
                class="input"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                v-model="profile.location"
                type="text"
                class="input"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Update Profile
            </button>
          </form>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>

          <div class="space-y-4">
            <div
              v-for="activity in recentActivity"
              :key="activity.id"
              class="flex items-start space-x-4"
            >
              <div class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-gray-900 dark:text-white">
                  {{ activity.description }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ activity.time }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock user data - replace with actual data from your backend
const user = ref({
  name: 'John Doe',
  joinDate: 'January 2023',
})

const profile = ref({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+251 912 345 678',
  location: 'Addis Ababa',
})

const recentActivity = ref([
  {
    id: 1,
    description: 'Listed a new item: iPhone 13 Pro Max',
    time: '2 hours ago',
  },
  {
    id: 2,
    description: 'Received a message about Samsung Galaxy S21',
    time: '5 hours ago',
  },
  {
    id: 3,
    description: 'Updated profile information',
    time: '1 day ago',
  },
])

const updateProfile = () => {
  // Implement profile update functionality
  console.log('Updating profile:', profile.value)
}

const logout = () => {
  // Implement logout functionality
  console.log('Logging out...')
}
</script> 