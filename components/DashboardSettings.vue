<template>
  <section class="flex-1">
    <h1 class="text-lg lg:text-2xl font-medium mb-6">Team Settings</h1>
    <Card >
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
              <Button type="submit">
                Manage Subscription
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>

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
