<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center">About Jiji Ethiopia</h1>
      
      <div class="prose prose-lg max-w-none">
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-700 mb-4">
            At Jiji Ethiopia, we're dedicated to creating a trusted marketplace that connects buyers and sellers across Ethiopia. 
            Our platform makes it easy for people to buy and sell everything from vehicles and electronics to fashion and more.
          </p>
          <p class="text-gray-700">
            We believe in empowering local communities through accessible commerce and creating opportunities for both individual 
            sellers and businesses to reach their customers effectively.
          </p>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Why Choose Jiji?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Trusted Platform</h3>
              <p class="text-gray-700">
                We verify sellers and listings to ensure a safe and reliable marketplace for all users.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Wide Selection</h3>
              <p class="text-gray-700">
                Browse through thousands of listings across multiple categories to find exactly what you need.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Easy to Use</h3>
              <p class="text-gray-700">
                Our intuitive platform makes buying and selling simple and straightforward for everyone.
              </p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Local Focus</h3>
              <p class="text-gray-700">
                We're committed to supporting local businesses and communities across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
          <p class="text-gray-700 mb-4">
            We're a diverse team of professionals passionate about technology and community development. 
            Our team combines local expertise with global best practices to create the best marketplace experience for our users.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p class="text-gray-700 mb-4">
            Have questions or feedback? We'd love to hear from you! Reach out to us through our contact page 
            or email us at support@jiji.et
          </p>
          <div class="flex justify-center">
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Contact Us
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About Us - Jiji Ethiopia',
  description: 'Learn more about Jiji Ethiopia, our mission, and why we\'re the trusted marketplace for buying and selling in Ethiopia.'
})
</script> 