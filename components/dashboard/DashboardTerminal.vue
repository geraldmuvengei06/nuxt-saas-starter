
<script>
import { ref, onMounted, watch } from 'vue';
import { Copy, Check } from 'lucide-vue-next';

export default {
  name: 'Terminal',
  setup() {
    const terminalStep = ref(0);
    const copied = ref(false);
    const terminalSteps = [
      'git clone https://github.com/leerob/next-saas-starter',
      'pnpm install',
      'pnpm db:setup',
      'pnpm db:migrate',
      'pnpm db:seed',
      'pnpm dev 🎉',
    ];

    onMounted(() => {
      const timer = setInterval(() => {
        terminalStep.value = terminalStep.value < terminalSteps.length - 1 ? terminalStep.value + 1 : terminalStep.value;
      }, 500);

      watch(terminalStep, () => {
        if (terminalStep.value >= terminalSteps.length - 1) {
          clearInterval(timer);
        }
      });
    });

    const copyToClipboard = () => {
      navigator.clipboard.writeText(terminalSteps.join('\n'));
      copied.value = true;
      setTimeout(() => copied.value = false, 2000);
    };

    return {
      terminalStep,
      copied,
      terminalSteps,
      copyToClipboard,
      Copy,
      Check,
    };
  },
};
</script>

<template>
  <div class="w-full rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm relative">
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <button
          @click="copyToClipboard"
          class="text-gray-400 hover:text-white transition-colors"
          aria-label="Copy to clipboard"
        >
          <component :is="copied ? Check : Copy" class="h-5 w-5" />
        </button>
      </div>
      <div class="space-y-2">
        <div
          v-for="(step, index) in terminalSteps"
          :key="index"
          :class="{'opacity-0': index > terminalStep, 'opacity-100': index <= terminalStep}"
          class="transition-opacity duration-300"
        >
          <span class="text-green-400">$</span> {{ step }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Add any scoped styles here */
</style>