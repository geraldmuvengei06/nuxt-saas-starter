<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-vue-next';
import { useUser } from '@/lib/auth';

definePageMeta({
  title: 'General Settings',
  description: 'General settings page',
  layout: 'dashboard',
});

const user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    }

const state = ref({
  error: '',
  success: '',
});

const formAction = (data: FormData) => {};

const isPending = ref(false);


const formData = ref({
  name: user?.name || '',
  email: user?.email || '',
});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  formAction(new FormData(event.target as HTMLFormElement));
};
</script>

<template>
  <section class="flex-1 p-4 lg:p-8">
    <h1 class="text-lg lg:text-2xl font-medium text-gray-900 mb-6">
      General Settings
    </h1>

    <Card>
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form class="space-y-4" @submit="handleSubmit">
          <div>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              v-model="formData.name"
              required
            />
          </div>
          <div>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              v-model="formData.email"
              required
            />
          </div>
          <p v-if="state.error" class="text-red-500 text-sm">{{ state.error }}</p>
          <p v-if="state.success" class="text-green-500 text-sm">{{ state.success }}</p>
          <Button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white"
            :disabled="isPending"
          >
            <template v-if="isPending">
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </template>
            <template v-else>
              Save Changes
            </template>
          </Button>
        </form>
      </CardContent>
    </Card>
  </section>
</template>

<style scoped>
/* Add any scoped styles here */
</style>