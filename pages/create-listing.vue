<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-[#4F7F8F] dark:text-[#C9F0EF] mb-8">Create New Listing</h1>
    
    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto space-y-6">
      <!-- Title -->
      <div>
        <label for="title" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Title</label>
        <input
          type="text"
          id="title"
          v-model="form.title"
          class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          required
        />
      </div>

      <!-- Category -->
      <div>
        <label for="category" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Category</label>
        <select
          id="category"
          v-model="form.category"
          class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          required
        >
          <option value="">Select a category</option>
          <option value="vehicles">Vehicles</option>
          <option value="phones">Phones</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home-garden">Home & Garden</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <!-- Price -->
      <div>
        <label for="price" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Price (ETB)</label>
        <input
          type="number"
          id="price"
          v-model="form.price"
          class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          required
        />
      </div>

      <!-- Description -->
      <div>
        <label for="description" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Description</label>
        <textarea
          id="description"
          v-model="form.description"
          rows="4"
          class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          required
        ></textarea>
      </div>

      <!-- Images -->
      <div>
        <label class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Images</label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#C9F0EF] dark:border-[#2EC4B6] border-dashed rounded-lg">
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-[#4F7F8F] dark:text-[#C9F0EF]" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-[#4F7F8F] dark:text-[#C9F0EF]">
              <label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-[#2EC4B6] hover:text-[#4F7F8F] focus-within:outline-none">
                <span>Upload files</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" multiple @change="handleFileUpload">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-[#4F7F8F] dark:text-[#C9F0EF]">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <!-- Location -->
      <div>
        <label for="location" class="block text-sm font-medium text-[#4F7F8F] dark:text-[#C9F0EF] mb-2">Location</label>
        <input
          type="text"
          id="location"
          v-model="form.location"
          class="w-full px-4 py-2 rounded-lg border border-[#C9F0EF] dark:border-[#2EC4B6] bg-white dark:bg-[#4F7F8F] text-[#4F7F8F] dark:text-[#C9F0EF] focus:ring-2 focus:ring-[#2EC4B6] focus:border-transparent"
          required
        />
      </div>

      <!-- Submit Button -->
      <div class="flex justify-end">
        <button
          type="submit"
          class="btn-primary"
        >
          Create Listing
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  title: '',
  category: '',
  price: '',
  description: '',
  images: [] as File[],
  location: ''
})

const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files) {
    form.value.images = Array.from(input.files)
  }
}

const handleSubmit = async () => {
  try {
    // TODO: Implement form submission logic
    console.log('Form submitted:', form.value)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script> 