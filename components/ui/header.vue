<script setup lang="ts">
</script>
<template>
    <div class="w-full flex flex-row justify-between items-center px-7 py-7 from-[#390475] via-[#5c1da3] to-[#0b8696] bg-gradient-to-r">
        <div class="font-bold text-white">Matteo Giudici</div> 
        <div class="w-10 h-6 relative md:hidden">
            <div class="w-full h-0.5 bg-white absolute top-0 left-0"></div>
            <div
                class="w-full h-0.5 bg-white absolute top-1/2 left-0 -translate-y-1/2"
            ></div>
            <div class="w-full h-0.5 bg-white absolute bottom-0 left-0"></div>
        </div>
        <div class="flex-row w-fit items-center gap-5 hidden md:flex">
            <UiNavigationMenu/>           
            <ButtonsDarkMode />
        </div> 
    </div>
</template>