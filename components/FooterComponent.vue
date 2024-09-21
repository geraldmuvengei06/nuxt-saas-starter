<template>
    <footer class="bg-gradient-to-br from-indigo-950 to-gray-950 text-gray-300 py-12 px-6">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between">
          <!-- Logo and Company Info -->
          <div class="mb-8 md:mb-0">
            <div class="flex items-center mb-4">
              <BookOpen  class="w-8 h-8 text-indigo-500 mr-2" />
              <h2 class="text-2xl font-bold text-white">nuxt-starter</h2>
            </div>
            <h3 class="text-xl font-semibold mb-2">Nuxt SaaS Starter</h3>
            <p class="mb-4">Hit the Ground Tunning 🚀 Launch Your Startup Faster</p>
            <p class="text-sm">Copyright © nuxt-starter</p>
          </div>
  
          <!-- Navigation Links -->
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" class="hover:text-white transition-colors">About</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Bottom text -->
        <div class="mt-12 text-center text-sm">
          <p>nuxt-saas-starter • © 2024 • nuxt-saas-starter</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts"setup>
  import { BookOpen } from 'lucide-vue-next';
  </script>