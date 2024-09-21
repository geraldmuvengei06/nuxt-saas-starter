<script lang="ts" setup>
import { CircleUser, Group, SettingsIcon, Shield, SubscriptIcon, Users } from 'lucide-vue-next';

const navItems = [
    {
      label: "Profile",
      icon: CircleUser,
      href: "/dashboard",
    },
  {
    label: "Team",
    icon: Users,
    href: "/dashboard/team",
  },
  {
    label: "Security",
    icon: Shield,
    href: "/dashboard/security",
  },
  
];
const route = useRoute();

const isActive = (href: string) => {
  return route.path === href;
};
</script>

<template>
  <nav class="h-full overflow-y-auto flex flex-col mt-4">
    
    <NuxtLink
      v-for="item in navItems"
      :key="item.href"
      :to="item.href"
      class="my-1 w-full justify-start rounded-lg"
      :class="{ 'bg-gray-200': isActive(item.href) }"
    >
      <Button
        class="w-full justify-start"
        :variant="isActive(item.href) ? 'secondary' : 'ghost'"
      >
        <component :is="item.icon" class="mr-2 h-4 w-4" />
        {{ item.label }}
      </Button>
    </NuxtLink>
  </nav>

  <!-- <nav class="grid gap-4 text-sm text-muted-foreground">
    <a href="#" class="font-semibold text-primary"> General </a>
    <a href="#"> Security </a>
    <a href="#"> Integrations </a>
    <a href="#"> Support </a>
    <a href="#"> Organizations </a>
    <a href="#"> Advanced </a>
  </nav> -->
</template>
