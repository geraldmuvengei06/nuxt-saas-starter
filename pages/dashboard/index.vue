<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

function logout() {}

const { user } = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
  }
};

const formData = ref({
  username: user?.name || '',
});

const handleUpdateUsername = () => {
  // Handle username update logic here
  console.log('Username updated:', formData.value.username);
};
</script>

<template>
  <div class="grid gap-6 p-6 ">
    <Card class="">
      <CardHeader>
        <CardTitle>Welcome, {{ user?.name }}</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="flex flex-row items-center justify-start gap-4">
          <img
            class="w-24 h-24 rounded-full"
            :src="user?.avatar || 'https://via.placeholder.com/150'"
            alt="User Avatar"
          />
          <div class="">
            <p class="text-lg font-semibold">{{ user?.name }}</p>
            <p class="text-gray-600">{{ user?.email }}</p>
            <Button @click="logout" class="bg-red-600 hover:bg-red-700 text-white mt-2">
              Logout
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card class="mt-6">
      <CardHeader>
        <CardTitle>Update Username</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleUpdateUsername" class="space-y-4">
          <div class="space-y-1">
            <Label for="username" class="pb-2">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter new username"
              required
              v-model="formData.username"
            />
          </div>
          <Button type="submit" >
            Update Username
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped>
/* Add any scoped styles here */
</style>