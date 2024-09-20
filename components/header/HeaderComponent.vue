<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { CircleIcon, Home, LogOut } from "lucide-vue-next";
import { useUser } from "~/lib/auth";
// import { signOut } from '@/app/(login)/actions';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isMenuOpen = ref(false);
    const { user, setUser } = useUser();
    const router = useRouter();

    const handleSignOut = async () => {
      setUser(null);
      // await signOut();
      router.push("/");
    }

</script>

<template>
  <header class="border-b border-gray-200">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
    >
      <router-link to="/" class="flex items-center">
        <CircleIcon class="h-6 w-6 text-orange-500" />
        <span class="ml-2 text-xl font-semibold text-gray-900">ACME</span>
      </router-link>
      <div class="flex items-center space-x-4">
        <router-link
          to="/pricing"
          class="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Pricing
        </router-link>
        <template v-if="user">
          <DropdownMenu :open="isMenuOpen" @open-change="isMenuOpen = $event">
            <DropdownMenuTrigger as="div">
              <Avatar class="cursor-pointer size-9">
                <AvatarImage :alt="user.name || ''" />
                <AvatarFallback>
                  {{
                    user.email
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  }}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="p-0">
              <DropdownMenuItem class="w-full cursor-pointer m-1">
                <router-link to="/dashboard" class="flex w-full items-center">
                  <Home class="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </router-link>
              </DropdownMenuItem>
              <form @submit.prevent="handleSignOut" class="p-1">
                <button type="submit" class="flex w-full">
                  <DropdownMenuItem class="w-full cursor-pointer">
                    <LogOut class="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </button>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
        </template>
        <template v-else>
          <Button
            as="div"
            class="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
          >
            <router-link to="/sign-up">Sign Up</router-link>
          </Button>
        </template>
      </div>
    </div>
  </header>
</template>
