<template>
  <section class="flex flex-col min-h-screen">
    <HeaderComponent />

    <div
      class="flex flex-col min-h-[calc(100dvh-68px)] max-w-7xl mx-auto w-full"
    >
      <!-- Mobile header -->
      <div
        class="lg:hidden flex items-center justify-between bg-white border-b border-gray-200 p-4"
      >
        <div class="flex items-center">
          <span class="font-medium">Settings</span>
        </div>
        <Button class="-mr-3" variant="ghost" @click="toggleSidebar">
          <Menu class="h-6 w-6" />
          <span class="sr-only">Toggle sidebar</span>
        </Button>
      </div>

      <div class="flex flex-1 overflow-hidden h-full">
        <!-- Sidebar -->
        <aside
          :class="[
            'w-64 bg-white lg:bg-gray-50 border-r border-gray-200 lg:block',
            'lg:relative absolute inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0',
            isSidebarOpen ? 'block' : 'hidden',
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
          ]"
        >
          <nav class="h-full overflow-y-auto p-4 flex flex-col mt-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.href"
              :to="item.href"
              class="my-1 w-full justify-start rounded-lg "
              :class="{ 'bg-gray-200': isActive(item.href) }"
              @click.native="closeSidebar"
            >
              <Button class="w-full justify-start " :variant="isActive(item.href) ? 'secondary' : 'ghost'">
                <component :is="item.icon" class="mr-2 h-4 w-4" />
                {{ item.label }}
              </Button>
            </NuxtLink>
          </nav>
        </aside>

        

        <!-- Main content -->
        <main class="flex-1 overflow-y-auto p-0 lg:p-4">
          <slot />
        </main>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Button } from "@/components/ui/button";
import { Users, Settings, Shield, Activity, Menu } from "lucide-vue-next";
const route = useRoute();
const isSidebarOpen = ref(false);

const navItems = [
  { href: "/dashboard", icon: Users, label: "Team" },
  { href: "/dashboard/general", icon: Settings, label: "General" },
  { href: "/dashboard/activity", icon: Activity, label: "Activity" },
  { href: "/dashboard/security", icon: Shield, label: "Security" },
];

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const isActive = (href: string) => {
  return route.path === href;
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
