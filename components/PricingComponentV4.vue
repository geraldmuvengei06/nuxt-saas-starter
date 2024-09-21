<template>
  <div class="container p-10">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Pricing Plans
      </h1>
      <p class="mt-4 text-lg text-gray-600">
        Choose a plan that fits your needs.
      </p>
    </div>
    <div
      class="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-4 sm:gap-0"
    >
      <div
        class="w-full p-6 dark:bg-black border border-gray-700 rounded-lg sm:w-1/2 dark:bg-opacity-20 sm:rounded-r-none sm:p-8"
      >
        <div class="mb-6">
          <h3 class="text-2xl font-semibold jakarta dark:text-gray-100 sm:text-4xl">
            Free Plan
          </h3>
        </div>
        <div class="mb-4 space-x-2">
          <span class="text-4xl font-bold dark:text-gray-100">$0/mo</span>
        </div>
        <ul class="mb-6 space-y-2 dark:text-gray-300">
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">One Project</span>
          </li>
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">Limited Designs</span>
          </li>
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">Basic Settings</span>
          </li>
        </ul>
        <!-- <a
          href="#"
          class="block px-8 py-3 text-sm fontdark:-semibold text-center text-gray-100 transition duration-100 bg-white rounded-lg outline-none bg-opacity-10 hover:bg-opacity-20 md:text-base"
          >Get Started for Free</a
        > -->
        <Button class="w-full bg-indigo-500">Get Started for Free</Button>
      </div>

      <div
        class="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 sm:p-8"
      >
        <div
          class="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row"
        >
          <div>
            <h3 class="text-2xl font-semibold text-white jakarta sm:text-4xl">
              Pro Plan
            </h3>
          </div>
          <span
            class="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20"
            >Go Pro</span
          >
        </div>
        <div class="mb-4 space-x-2">
          <span class="text-4xl font-bold text-white">$15/mo</span>
          <span class="text-2xl text-indigo-100 line-through">$39/mo</span>
        </div>
        <ul class="mb-6 space-y-2 text-indigo-100">
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">Unlimited Projects</span>
          </li>
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">Unlimited API calls</span>
          </li>
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
                class=""
              ></path>
            </svg>
            <span class="">Advanced Project Settings</span>
          </li>
          <li class="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="">Priority Support</span>
          </li>
        </ul>
        <a
          href="#"
          class="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-white rounded-lg outline-none bg-opacity-20 hover:bg-opacity-30 md:text-base"
          >Get Started for Free</a
        >
      </div>
    </div>
  </div>
</template>
