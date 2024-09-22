<script setup lang="ts">
const features = [
  {
    iconPath:"/nuxt-js.svg",
    title: "Nuxt.js",
    description: "App dir, Routing, Layouts, Loading UI and API routes.",
  },
  {
    iconPath: "/tailwind.svg",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    iconPath: "/shadcn-vue.png",
    title: "shadcn-vue",
    description: "A collection of UI components built with Vue.js.",
  },
  {
    iconPath: "/stripe.svg",
    title: "Stripe",
    description: "Online payment processing for internet businesses.",
  },
  {
    iconPath: "/supabase.svg",
    title: "Supabase",
    description: "An open source Firebase alternative.",
  },
  {
    iconPath: "/vercel.svg",
    title: "Vercel",
    description: "Deploy web projects with the best frontend developer experience.",
  }
  // Add more features as needed
];
</script>

<template>
  <section
    id="features"
    class="container mx-auto px-4 space-y-6 bg-slate-50 dark:bg-transparent rounded-md py-8 md:py-12 lg:py-20 my-8"
  >
    <div
      class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
    >
      <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
        Features
      </h2>

      <p
        class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
      >
        The product can personalize user experiences by understanding individual
        preferences and tailoring recommendations or content based on user
        behavior and historical data.
      </p>
    </div>

    <div
      class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
    >
      <FeaturesCardV2
        v-for="(feature, index) in features"
        :key="index"
        :iconPath="feature.iconPath"
        :title="feature.title"
        :description="feature.description"
      />
    </div>
  </section>
</template>

<style scoped>
/* Add any scoped styles here */
</style>
