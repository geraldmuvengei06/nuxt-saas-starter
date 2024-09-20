<template>
  <Button
    type="submit"
    :disabled="pending"
    class="w-full bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full flex items-center justify-center"
  >
    <template v-if="pending">
      <Loader2 class="animate-spin mr-2 h-4 w-4" />
      Loading...
    </template>
    <template v-else>
      Get Started
      <ArrowRight class="ml-2 h-4 w-4" />
    </template>
  </Button>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-vue-next';

export default {
  name: 'SubmitButton',
  setup() {
    const { pending } = () => {};

    return {
      pending,
      Button,
      ArrowRight,
      Loader2,
    };
  },
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>