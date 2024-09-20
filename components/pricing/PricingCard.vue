<script lang="ts" setup>
import { Check } from "lucide-vue-next";

function checkoutAction(priceId: any) {
  return `/api/checkout?priceId=${priceId}`;
}

const props = defineProps<{
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId: string;
}>();
</script>

<template>
  <div class="pt-6">
    <h2 class="text-2xl font-medium text-gray-900 mb-2">{{ name }}</h2>
    <p class="text-sm text-gray-600 mb-4">
      with {{ trialDays }} day free trial
    </p>
    <p class="text-4xl font-medium text-gray-900 mb-6">
      $ {{ (price / 100).toFixed(2) }}
      <span class="text-xl font-normal text-gray-600">
        per user / {{ interval }}
      </span>
    </p>
    <ul class="space-y-4 mb-8">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start"
      >
        <Check class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>
    <form :action="checkoutAction">
      <input type="hidden" name="priceId" :value="priceId" />
      <PricingSubmit />
    </form>
  </div>
</template>
