<script setup lang="ts">

definePageMeta({
  title: 'Dashboard',
  description: 'Dashboard page',
  layout: 'dashboard',
});

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
    <DashboardSettings :team-data="teamData" />
</template>