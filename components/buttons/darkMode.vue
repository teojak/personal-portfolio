<script setup lang="ts">
const isDark=ref(false as boolean)
const emit = defineEmits(["onDarkModeChanged"]);
onMounted(()=>{
  if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value=true;
    emit("onDarkModeChanged", isDark.value);
  } 
});

function toggleDarkMode() {
  isDark.value = !isDark.value;
  emit("onDarkModeChanged", isDark.value);
}
</script>
<template>
    <div class="flex flex-row absolute right-0 border border-white/50 rounded-full mr-2.5">
        <Icon name="emojione-monotone:sun" class=" w-8 h-8 pl-0.5 text-white"/>
        <Icon name="emojione-monotone:crescent-moon" class=" w-8 h-8 pr-0.5 text-black"/>
    </div>
    <div @click="toggleDarkMode" class="relative w-fit h-fit">
        <img src="@/assets/cerchio.png" v-if="!isDark" class="transform translate-x-4 aspect-square w-8 h-8 cursor-pointer"/>
        <img src="@/assets/cerchio.png" v-else class="transform -translate-x-4 aspect-square w-8 h-8 cursor-pointer"/>
    </div>
</template>