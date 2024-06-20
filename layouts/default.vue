<script setup lang="ts">
import { useDarkModeStore } from '~/store/darkMode';

const store = useDarkModeStore();
</script>
<template>
  <div class="w-screen h-screen flex flex-col" :class="{ dark: store.darkModeBool }" >
    <UiHeader/>
    <div class="w-full h-full overflow-auto flex-1">
      <slot />
      <UiFooter />
    </div>
  </div>
</template>