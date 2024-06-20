<script setup lang="ts">
const emit=defineEmits(["onDarkModeChanged"])
</script>
<template>
<div class="w-full flex flex-row justify-between items-center px-7 py-7 from-[#390475] via-[#5c1da3] to-[#0b8696] bg-gradient-to-r">
        <div class="font-bold text-white dark:text-black">Matteo Giudici</div>
        <UiNavigationMobileMenu @on-dark-mode-changed="(value)=>emit('onDarkModeChanged', value)"/>        
        <div class="flex-row w-fit items-center gap-5 hidden md:flex">
            <UiNavigationMenu/>           
            <ButtonsDarkMode @on-dark-mode-changed="(value)=>emit('onDarkModeChanged', value)" />
        </div> 
    </div>
</template>