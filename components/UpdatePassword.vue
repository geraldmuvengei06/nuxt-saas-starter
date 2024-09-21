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
import { FormInput, Loader2, PlusCircle } from "lucide-vue-next";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
// import { useActionState } from '@/composables/useActionState';
// import { inviteTeamMember } from '@/app/(login)/actions';
// import { useUser } from "@/lib/auth";

const user = {
    name: "Gerald",
    email: "gerald@example.com",
    role: "owner"
};
const isOwner = computed(() => user?.role === "owner");

const inviteState = ref({ error: "", success: "" });

const isInvitePending = ref(false);

const inviteAction = () => {};

const formData = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
});
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Update Password</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="inviteAction" class="space-y-4">
                <div class="space-y-1">
          <Label for="current-password" class="pb-2">Current Password</Label>
          <Input
            id="current-password"
            name="currentPassword"
            type="password"
            placeholder="Enter current password"
            required
            :disabled="!isOwner"
            v-model="formData.currentPassword"
          />
        </div>
        
        <div class="space-y-1">
          <Label for="new-password" class="pb-2">New Password</Label>
          <Input
            id="new-password"
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            required
            :disabled="!isOwner"
            v-model="formData.newPassword"
          />
        </div>
        
        <div class="space-y-1">
          <Label for="confirm-password" class="pb-2">Confirm Password</Label>
          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            required
            :disabled="!isOwner"
            v-model="formData.confirmPassword"
          />
        </div>
       
        <p v-if="inviteState?.error" class="text-red-500">
          {{ inviteState.error }}
        </p>
        <p v-if="inviteState?.success" class="text-green-500">
          {{ inviteState.success }}
        </p>
        <Button
          type="submit"
            :disabled="isInvitePending || !isOwner"
        >
         Update Password
        </Button>
      </form>
    </CardContent>
    <CardFooter v-if="!isOwner">
      <p class="text-sm text-muted-foreground">
        You must be a team owner to invite new members.
      </p>
    </CardFooter>
  </Card>
</template>



<style scoped>
/* Add any scoped styles here */
</style>
