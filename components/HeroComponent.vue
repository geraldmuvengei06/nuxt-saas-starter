<script lang="ts" setup></script>

<template>
  <div class="container grid grid-cols-12 gap-4 py-6 sm:py-24">
    <div
      class="col-span-12 sm:col-span-6 min-h-80 sm:min-h-96 flex flex-col justify-center py-4"
    >
      <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Ship Your App Right Away
      </h1> -->
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline"
          ><span class="mb-1 block">Ship your</span>
          <span
            class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent"
          >
            SaaS Product
          </span>
        </span>
        <div class="mt-2">
          10X faster!
          <span class="relative mt-3 whitespace-nowrap text-primary"
            ><svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
              preserveAspectRatio="none"
            >
              <path
                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
              ></path>
            </svg>
            <span class="relative">A Nuxt SaaS Starter.</span>
          </span>
        </div>
      </h1>
      <p class="leading-7 [&:not(:first-child)]:my-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>

      <div class="flex flex-row gap-4 my-4">
        <Button size="lg" class="bg-violet-500">Get Started </Button>
      </div>
    </div>
    <div class="col-span-12 sm:col-span-6">
      <NuxtImg src="/hero.svg" class="max-w-xs md:max-w-sm m-auto" />
    </div>
    <div class="col-span-12">
      <TerminalComponent />
    </div>
  </div>
</template>
