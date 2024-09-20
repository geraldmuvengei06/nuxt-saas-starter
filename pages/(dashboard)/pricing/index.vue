<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
      <PricingCard
        v-if="basePlan && basePrice"
        :name="basePlan.name"
        :price="basePrice.unitAmount"
        :interval="basePrice.interval"
        :trialDays="basePrice.trialPeriodDays"
        :features="[
          'Unlimited Usage',
          'Unlimited Workspace Members',
          'Email Support',
        ]"
        :priceId="basePrice.id"
      />

      <PricingCard
        v-if="plusPlan && plusPrice"
        :name="plusPlan.name"
        :price="plusPrice.unitAmount"
        :interval="plusPrice.interval"
        :trialDays="plusPrice.trialPeriodDays"
        :features="[
          'Everything in Base, and:',
          'Early Access to New Features',
          '24/7 Support + Slack Access',
        ]"
        :priceId="plusPrice.id"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const basePlan = ref<any>(null);
const plusPlan = ref<any>(null);
const basePrice = ref<any>(null);
const plusPrice = ref<any>(null);

const getFakeStripePrices = () => {
  return [
    {
      id: "price_1J2e9z2eZvKYlo2C5z2e9z2e",
      unitAmount: 1000,
      interval: "month",
      trialPeriodDays: 14,
      productId: "prod_1J2e9z2eZvKYlo2C5z2e9z2e",
    },
    {
      id: "price_1J2e9z2eZvKYlo2C5z2e9z2f",
      unitAmount: 2000,
      interval: "month",
      trialPeriodDays: 14,
      productId: "prod_1J2e9z2eZvKYlo2C5z2e9z2f",
    },
  ];
};

const getFakeStripeProducts = () => {
  return [
    {
      id: "prod_1J2e9z2eZvKYlo2C5z2e9z2e",
      name: "Base",
    },
    {
      id: "prod_1J2e9z2eZvKYlo2C5z2e9z2f",
      name: "Plus",
    },
  ];
};

onMounted(async () => {
  const prices = getFakeStripePrices();
  const products = getFakeStripeProducts();

  basePlan.value = products.find((product) => product.name === "Base");
  plusPlan.value = products.find((product) => product.name === "Plus");

  basePrice.value = prices.find(
    (price) => price.productId === basePlan.value?.id
  );
  plusPrice.value = prices.find(
    (price) => price.productId === plusPlan.value?.id
  );
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
