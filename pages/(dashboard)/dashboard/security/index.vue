<script lang="ts" setup>

definePageMeta({
  title: 'Security Settings',
  description: 'Security Settings',
  layout: 'dashboard',
});
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Lock, Trash2, Loader2 } from 'lucide-vue-next';

type ActionState = {
  error?: string;
  success?: string;
};


const passwordState = ref<ActionState>({ error: '', success: '' });
const passwordAction = (data: FormData) => {};
const isPasswordPending = ref(false);

const deleteState = ref<ActionState>({ error: '', success: '' });
const deleteAction = (data: FormData) => {};
const isDeletePending = ref(false);



const handlePasswordSubmit = async (event: Event) => {
  event.preventDefault();
  passwordAction(new FormData(event.target as HTMLFormElement));
};

const handleDeleteSubmit = async (event: Event) => {
  event.preventDefault();
  deleteAction(new FormData(event.target as HTMLFormElement));
};
</script>

<template>
  <section class="flex-1 p-4 lg:p-8">
    <h1 class="text-lg lg:text-2xl font-medium bold text-gray-900 mb-6">
      Security Settings
    </h1>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form class="space-y-4" @submit="handlePasswordSubmit">
          <div>
            <Label for="current-password">Current Password</Label>
            <Input
              id="current-password"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
              minlength="8"
              maxlength="100"
            />
          </div>
          <div>
            <Label for="new-password">New Password</Label>
            <Input
              id="new-password"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              required
              minlength="8"
              maxlength="100"
            />
          </div>
          <div>
            <Label for="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              minlength="8"
              maxlength="100"
            />
          </div>
          <p v-if="passwordState.error" class="text-red-500 text-sm">{{ passwordState.error }}</p>
          <p v-if="passwordState.success" class="text-green-500 text-sm">{{ passwordState.success }}</p>
          <Button
            type="submit"
            class="bg-orange-500 hover:bg-orange-600 text-white"
            :disabled="isPasswordPending"
          >
            <template v-if="isPasswordPending">
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </template>
            <template v-else>
              <Lock class="mr-2 h-4 w-4" />
              Update Password
            </template>
          </Button>
        </form>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-gray-500 mb-4">
          Account deletion is non-reversable. Please proceed with caution.
        </p>
        <form @submit="handleDeleteSubmit" class="space-y-4">
          <div>
            <Label for="delete-password">Confirm Password</Label>
            <Input
              id="delete-password"
              name="password"
              type="password"
              required
              minlength="8"
              maxlength="100"
            />
          </div>
          <p v-if="deleteState.error" class="text-red-500 text-sm">{{ deleteState.error }}</p>
          <Button
            type="submit"
            variant="destructive"
            class="bg-red-600 hover:bg-red-700"
            :disabled="isDeletePending"
          >
            <template v-if="isDeletePending">
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Deleting...
            </template>
            <template v-else>
              <Trash2 class="mr-2 h-4 w-4" />
              Delete Account
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