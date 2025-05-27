<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Create New Listing
      </h1>

      <form @submit.prevent="createListing" class="space-y-6">
        <!-- Basic Information -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Information
          </h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                v-model="listing.title"
                type="text"
                class="input"
                placeholder="What are you selling?"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select v-model="listing.category" class="select" required>
                <option value="">Select a category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price (ETB)
              </label>
              <input
                v-model="listing.price"
                type="number"
                class="input"
                placeholder="0"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Condition
              </label>
              <select v-model="listing.condition" class="select" required>
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="like_new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Description
          </h2>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              v-model="listing.description"
              rows="6"
              class="input"
              placeholder="Describe your item in detail..."
              required
            ></textarea>
          </div>
        </div>

        <!-- Location -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Location
          </h2>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City
            </label>
            <select v-model="listing.location" class="select" required>
              <option value="">Select a city</option>
              <option v-for="location in locations" :key="location.id" :value="location.id">
                {{ location.name }}
              </option>
            </select>
          </div>
        </div>

        <!-- Photos -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Photos
          </h2>

          <div class="space-y-4">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in listing.images"
                :key="index"
                class="relative aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden"
              >
                <img
                  :src="image"
                  :alt="`Listing image ${index + 1}`"
                  class="w-full h-full object-cover"
                />
                <button
                  @click="removeImage(index)"
                  class="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <button
                v-if="listing.images.length < 8"
                @click="addImage"
                class="aspect-square border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500"
              >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>

            <p class="text-sm text-gray-500 dark:text-gray-400">
              Add up to 8 photos. First photo will be the cover image.
            </p>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end">
          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Creating...</span>
            <span v-else>Create Listing</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const isSubmitting = ref(false)

// Mock data - replace with actual data from your backend
const categories = ref([
  { id: 1, name: 'Phones' },
  { id: 2, name: 'Electronics' },
  { id: 3, name: 'Fashion' },
  { id: 4, name: 'Home & Garden' },
  { id: 5, name: 'Vehicles' },
  { id: 6, name: 'Jobs' },
])

const locations = ref([
  { id: 1, name: 'Addis Ababa' },
  { id: 2, name: 'Dire Dawa' },
  { id: 3, name: 'Bahir Dar' },
  { id: 4, name: 'Mekelle' },
])

const listing = ref({
  title: '',
  category: '',
  price: '',
  condition: '',
  description: '',
  location: '',
  images: [],
})

const addImage = () => {
  // Implement image upload functionality
  // For now, we'll just add a placeholder image
  listing.value.images.push('/images/placeholder.jpg')
}

const removeImage = (index: number) => {
  listing.value.images.splice(index, 1)
}

const createListing = async () => {
  isSubmitting.value = true
  
  try {
    // Implement listing creation functionality
    console.log('Creating listing:', listing.value)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to the new listing
    // navigateTo(`/product/${newListingId}`)
  } catch (error) {
    console.error('Error creating listing:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 