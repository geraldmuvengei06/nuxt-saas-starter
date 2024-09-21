<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Moon, Sun, SunMoon } from "lucide-vue-next";

type theme = "light" | "dark" | "system";

const themes: theme[] = ["light", "dark", "system"];

const setColorTheme = (theme: theme) => {
  useColorMode().preference = theme;
};
</script>
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="secondary" size="icon" class="rounded-full">
        <Moon v-if="$colorMode.preference == 'dark'" class="h-5 w-5" />
        <Sun v-if="$colorMode.preference == 'light'" class="h-5 w-5" />
        <SunMoon v-if="$colorMode.preference == 'system'" class="h-5 w-5" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Theme</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuItem
        v-for="theme_item in themes"
        :key="theme_item"
        class="capitalize"
        @click="setColorTheme(theme_item)"
        >{{ theme_item }}</DropdownMenuItem
      >
    </DropdownMenuContent>
  </DropdownMenu>
</template>
