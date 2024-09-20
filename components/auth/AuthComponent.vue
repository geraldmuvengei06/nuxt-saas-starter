<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CircleIcon, Loader2 } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const props = defineProps<{
  mode: "signin" | "signup";
}>();

const route = useRoute();
const router = useRouter();
const email = ref("");
const password = ref("");
const redirect = computed(() => route.query.redirect || "");
const priceId = computed(() => route.query.priceId || "");
const inviteId = computed(() => route.query.inviteId || "");
const pending = ref(false);
const state = ref({
  error: "",
});

const formAction = async () => {
  try {
    pending.value = true;
    let res;
    if (props.mode === "signin") {
      res = await $fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });
    } else {
      res = await $fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
          redirect: redirect.value,
          priceId: priceId.value,
          inviteId: inviteId.value,
        }),
      });
    }
    console.log("res", res);
    
  } catch (error) {

    console.log("error", error);
    
  } finally {
    pending.value = false;
  }
};

// watch(route.query, (newQuery) => {
//   // Handle query parameter changes if needed
//   console.log(newQuery);
  
// });
</script>

<template>
  <div
    class="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <CircleIcon class="h-12 w-12 text-orange-500" />
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{
          mode === "signin" ? "Sign in to your account" : "Create your account"
        }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form class="space-y-6" @submit.prevent="formAction">
        <input type="hidden" name="redirect" :value="redirect || ''" />
        <input type="hidden" name="priceId" :value="priceId || ''" />
        <input type="hidden" name="inviteId" :value="inviteId || ''" />
        <div>
          <Label for="email" class="block text-sm font-medium text-gray-700"
            >Email</Label
          >
          <div class="mt-1">
            <Input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              maxlength="50"
              class="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
        </div>

        <div>
          <Label for="password" class="block text-sm font-medium text-gray-700"
            >Password</Label
          >
          <div class="mt-1">
            <Input
              id="password"
              name="password"
              type="password"
              :autocomplete="
                mode === 'signin' ? 'current-password' : 'new-password'
              "
              required
              minlength="8"
              maxlength="100"
              class="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
        </div>

        <div v-if="state.error" class="text-red-500 text-sm">
          {{ state.error }}
        </div>

        <div>
          <Button
            type="submit"
            class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            :disabled="pending"
          >
            <template v-if="pending">
              <Loader2 class="animate-spin mr-2 h-4 w-4" />
              Loading...
            </template>
            <template v-else>
              {{ mode === "signin" ? "Sign in" : "Sign up" }}
            </template>
          </Button>
        </div>
      </form>

      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-gray-50 text-gray-500">
              {{
                mode === "signin"
                  ? "New to our platform?"
                  : "Already have an account?"
              }}
            </span>
          </div>
        </div>

        <div class="mt-6">
          <router-link
            :to="`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
              redirect ? `?redirect=${redirect}` : ''
            }${priceId ? `&priceId=${priceId}` : ''}`"
            class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {{
              mode === "signin"
                ? "Create an account"
                : "Sign in to existing account"
            }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
