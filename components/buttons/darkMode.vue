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
  console.log(isDark);
  
}
</script>
<template>
  <div @click="toggleDarkMode" class=" cursor-pointer h-8">
    <div class="flex flex-row md:absolute right-0 border border-white/50 rounded-full mr-2.5">
        <Icon name="emojione-monotone:sun" class=" w-8 h-8 pl-0.5 text-white"/>
        <Icon name="emojione-monotone:crescent-moon" class=" w-8 h-8 pr-0.5"/>
    </div>
    <div class="relative w-fit h-fit">
      <div class="md:hidden">
        <img src="@/assets/cerchio.png" v-if="!isDark" class=" translate-x-8 duration-300 transition-all -translate-y-8 aspect-square w-8 h-8"/>
        <img src="@/assets/cerchio.png" v-else class=" translate-x-0 duration-300 transition-all -translate-y-8 aspect-square w-8 h-8"/>
      </div>
      <div class="sm:hidden md:block">
        <img src="@/assets/cerchio.png" v-if="!isDark" class=" translate-x-4 duration-300 transition-all aspect-square w-8 h-8"/>
        <img src="@/assets/cerchio.png" v-else class=" -translate-x-4 duration-300 transition-all aspect-square w-8 h-8"/>
      </div>
      
    </div>
  </div>
</template>