<script lang="ts" setup>
import { CircleUser, Menu, Package2, BookOpen } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
</script>

<template>
  <header
    class="sticky top-0 flex h-16 z-20 items-center gap-4 px-4 md:px-6 bg-white shadow-sm dark:bg-gray-950"
  >
    <nav
      class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
    >
      <!-- <a
        href="#"
        class="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <BookOpen class="h-6 w-6" />
        <span class="sr-only">Acme Inc</span>
      </a> -->

      <LogoLight />

      <NuxtLink
        to="/#pricing"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Pricing
      </NuxtLink>
    </nav>
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav class="grid gap-6 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>

          <NuxtLink
            to="/pricing"
            class="text-muted-foreground hover:text-foreground"
          >
            Pricing
          </NuxtLink>
        </nav>
      </SheetContent>
    </Sheet>

    <div class="w-full flex-1" />

    <NuxtLink to="/sign-in"><Button variant="ghost">Sign In</Button></NuxtLink>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>John Doe</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <NuxtLink to="/dashboard">
          <DropdownMenuItem class="cursor-pointer"
            >Dashboard</DropdownMenuItem
          ></NuxtLink
        >

        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <ThemeToggle />
  </header>
</template>
