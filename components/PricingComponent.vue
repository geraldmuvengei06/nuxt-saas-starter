<template>
  <section class="py-12 mt-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Pricing Plans
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          Choose a plan that fits your needs.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 rounded-lg border-2 shadow-md">
          <h2 class="text-2xl font-bold mb-4">Basic</h2>
          <p class="text-gray-400 mb-6">For individuals just getting started.</p>
          <div class="text-4xl font-extrabold mb-4">$10</div>
          <ul class="mb-6 space-y-4">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 1
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 2
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 3
            </li>
          </ul>
          <Button size="lg" class="w-full bg-indigo-500">Get Started</Button>
        </div>
        <div class=" p-6 rounded-lg border-2 shadow-md hover:ring-2 transition-all hover:ring-slate-700">
          <h2 class="text-2xl font-bold mb-4">Pro</h2>
          <p class="text-gray-400 mb-6">For small teams and businesses.</p>
          <div class="text-4xl font-extrabold mb-4">$30</div>
          <ul class="mb-6 space-y-4">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 1
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 2
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 3
            </li>
          </ul>
          <Button size="lg" class="w-full bg-indigo-500">Get Started</Button>
        </div>
        <div class=" p-6 rounded-lg border-2 shadow-md hover:ring-2 transition-all hover:ring-slate-700">
          <h2 class="text-2xl font-bold mb-4">Enterprise</h2>
          <p class="text-gray-400 mb-6">For large organizations.</p>
          <div class="text-4xl font-extrabold mb-4">$50</div>
          <ul class="mb-6 space-y-4">
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 1
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 2
            </li>
            <li class="flex items-center">
              <CheckCircle class="w-5 h-5 text-indigo-500 mr-2" />
              Feature 3
            </li>
           
          </ul>
          <Button size="lg" class="w-full bg-indigo-500">Get Started</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
</script>

<style scoped>
/* Add any scoped styles here */
</style>