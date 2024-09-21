<template>
  <section class="py-12">
    <div class="container">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
          What's Inside
        </h1>
        <p class="mt-4 text-lg text-gray-400">
          Discover the amazing features we offer.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <div class="flex flex-col justify-center items-center text-gray-500">
          <Mail class="w-8 h-8" />
          <h2 class="font-bold">Emails</h2>
        </div>
        <div class="flex flex-col justify-center items-center text-gray-500">
          <Wallet class="w-8 h-8" />
          <h2 class="font-bold">Payments</h2>
        </div>
        <div class="flex flex-col justify-center items-center text-gray-500">
          <LogIn class="w-8 h-8" />
          <h2 class="font-bold">Auth</h2>
        </div>
        <div class="flex flex-col justify-center items-center text-gray-500">
          <Database class="w-8 h-8" />
          <h2 class="font-bold">Postgres/Supabase</h2>
        </div>
        <div class="flex flex-col justify-center items-center text-gray-500">
          <Search class="w-8 h-8" />
          <h2 class="font-bold">SEO</h2>
        </div>
        <div class="flex flex-col justify-center items-center text-gray-500">
          <MoreHorizontal class="w-8 h-8" />
          <h2 class="font-bold">More</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle, Database, LogIn, Mail, MoreHorizontal, Search, Wallet } from "lucide-vue-next";
</script>

<style scoped>
/* Add any scoped styles here */
</style>
