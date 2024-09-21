<template>
  <Card>
    <CardHeader>
      <CardTitle>Delete Account</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleDeleteAccount" class="space-y-4">
        <div class="space-y-1">
          <Label for="delete-password" class="pb-2">Confirm Password</Label>
          <Input
            id="delete-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            v-model="formData.password"
          />
        </div>

        <Button
          type="submit"
          :disabled="!isOwner"
          class="bg-red-600 hover:bg-red-700 text-white"
        >
          Delete Account
        </Button>
      </form>
    </CardContent>
    <CardFooter v-if="!isOwner">
      <p class="text-sm text-muted-foreground">
        You must be a team owner to delete the account.
      </p>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-vue-next";

function deleteAccount() {}
const { user } = {
  user: {
    id: 1,
    name: "Gerald",
    email: "gerald@example.com",
    role: "owner",
  },
};
const isOwner = computed(() => user?.role === "owner");

const formData = ref({
  password: "",
});

const handleDeleteAccount = async () => {};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
