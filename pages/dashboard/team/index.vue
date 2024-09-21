<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";


import { faker } from '@faker-js/faker';

const teamData = ref({});

 function getFakeTeamData() {
  const teamMembers = [];

  for (let i = 0; i < 5; i++) {
    teamMembers.push({
      id: Math.random().toString(36).substr(2, 9),
      role: faker.helpers.arrayElement(['admin', 'member']),
      user: {
        id: Math.random().toString(36).substr(2, 9),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      },
    });
  }

  teamData.value = {
    planName: faker.helpers.arrayElement(['Free', 'Pro', 'Enterprise']),
    subscriptionStatus: faker.helpers.arrayElement(['active', 'trialing', 'inactive']),
    teamMembers: teamMembers,
  };

  return teamData;
}

onMounted(() => {
  getFakeTeamData();
});
</script>

<template>
  <div class="grid gap-6 py-4">
    <DashboardSettings :team-data="teamData" />
    <TeamMembers />
    <InviteTeamMember />

  </div>
</template>
