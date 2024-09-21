<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

definePageMeta({
  title: 'Sign In',
  description: 'Sign in to your account',
  layout: 'auth',
})
</script>

<template>
  <Card class="mx-auto max-w-lg">
    <CardHeader>
      <CardTitle class="text-2xl">
        Sign in
      </CardTitle>
      <CardDescription>
        Enter your email below to Sign in to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
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
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <NuxtLink to="/forgot-password" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </NuxtLink>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" class="w-full">
          Sign in
        </Button>
        <Button variant="outline" class="w-full">
          Sign in with Google
        </Button>
      </div>
      <div class="mt-4 text-center text-sm">
        Don't have an account?
        <NuxtLink to="/sign-up" class="underline">
          Sign up
        </NuxtLink>
      </div>
    </CardContent>
  </Card>
</template>