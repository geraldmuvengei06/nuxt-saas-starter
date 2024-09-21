<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

definePageMeta({
  title: 'Sign Up',
  description: 'Sign up to your account',
  layout: 'auth',
})

</script>

<template>
  <Card class="mx-auto max-w-lg">
    <CardHeader>
      <CardTitle class="text-xl">
        Sign Up
      </CardTitle>
      <CardDescription>
        Enter your information to create an account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        <div class="grid gap-4">
            <Label for="first-name">Name</Label>
            <Input id="first-name" placeholder="Max" required />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div class="grid gap-2">
          <Label for="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button type="submit" class="w-full">
          Create an account
        </Button>
        <Button variant="outline" class="w-full">
          Sign up with GitHub
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Already have an account?
        <NuxtLink to="/sign-in" class="underline">
          Sign in
        </NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>