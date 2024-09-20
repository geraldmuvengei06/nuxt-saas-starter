<template>
  <section class="flex-1 p-4 lg:p-8">
    <h1 class="text-lg lg:text-2xl font-medium mb-6">Team Settings</h1>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Team Subscription</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div
            class="flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div class="mb-4 sm:mb-0">
              <p class="font-medium">
                Current Plan: {{ teamData.planName || "Free" }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ subscriptionStatusText }}
              </p>
            </div>
            <form :action="customerPortalAction">
              <Button type="submit" variant="outline">
                Manage Subscription
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="space-y-4">
          <li
            v-for="(member, index) in teamData.teamMembers"
            :key="member.id"
            class="flex items-center justify-between"
          >
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage
                  :src="`/placeholder.svg?height=32&width=32`"
                  :alt="getUserDisplayName(member.user)"
                />
                <AvatarFallback>
                  {{
                    getUserDisplayName(member.user)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  }}
                </AvatarFallback>
              </Avatar>
              <div>
                <p class="font-medium">{{ getUserDisplayName(member.user) }}</p>
                <p class="text-sm text-muted-foreground capitalize">
                  {{ member.role }}
                </p>
              </div>
            </div>
            <form v-if="index > 1" :action="removeAction">
              <input type="hidden" name="memberId" :value="member.id" />
              <Button
                type="submit"
                variant="outline"
                size="sm"
                :disabled="isRemovePending"
              >
                {{ isRemovePending ? "Removing..." : "Remove" }}
              </Button>
            </form>
          </li>
        </ul>
        <p v-if="removeState?.error" class="text-red-500 mt-4">
          {{ removeState.error }}
        </p>
      </CardContent>
    </Card>
    <DashboardInviteTeamMember />
  </section>
</template>

<script>
import { ref, computed } from "vue";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { customerPortalAction } from '@/lib/payments/actions';
// import { removeTeamMember } from '@/app/(login)/actions';

export default {
  name: "Settings",
  props: {
    teamData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const removeState = ref({ error: "", success: "" });

    const removeAction = ref(() => {});
    const isRemovePending = ref(false);

    const getUserDisplayName = (user) => {
      return user.name || user.email || "Unknown User";
    };

    const customerPortalAction = () => {};

    const removeTeamMember = () => {};

    const subscriptionStatusText = computed(() => {
      if (props.teamData.subscriptionStatus === "active") {
        return "Billed monthly";
      } else if (props.teamData.subscriptionStatus === "trialing") {
        return "Trial period";
      } else {
        return "No active subscription";
      }
    });

    return {
      removeState,
      removeAction,
      isRemovePending,
      getUserDisplayName,
      subscriptionStatusText,
      customerPortalAction,
    };
  },
  components: {
    Button,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
