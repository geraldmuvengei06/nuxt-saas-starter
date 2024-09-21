<template>
  <Card>
    <CardHeader>
      <CardTitle>Invite Team Member</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="inviteAction" class="space-y-4">
        <div>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            required
            :disabled="!isOwner"
            v-model="formData.email"
          />
        </div>
        <div>
          <Label>Role</Label>
          <RadioGroup
            v-model="formData.role"
            name="role"
            class="flex space-x-4"
            :disabled="!isOwner"
          >
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="member" id="member" />
              <Label for="member">Member</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="owner" id="owner" />
              <Label for="owner">Owner</Label>
            </div>
          </RadioGroup>
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
          <template v-if="isInvitePending">
            <Loader2 class="mr-2 h-4 w-4 animate-spin" />
            Inviting...
          </template>
          <template v-else>
            <PlusCircle class="mr-2 h-4 w-4" />
            Invite Member
          </template>
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
import { Loader2, PlusCircle } from "lucide-vue-next";
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
  email: "",
  role: "member",
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
