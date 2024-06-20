<script setup lang="ts">
const props = defineProps({
  needsPadding: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div
    class="shadow border border-white dark:border-black rounded-xl overflow-hidden w-fit h-fit"
    :class="{ 'p-5': needsPadding }"
  >
    <slot />
  </div>
</template>