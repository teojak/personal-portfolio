<script setup lang="ts">
const isOpen = ref(false as boolean);
const emit = defineEmits(["onDarkModeChanged"]);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
    <UiCard class="md:hidden z-20">
        <div class="w-10 h-6 relative md:hidden z-20" @click="toggleMenu">
            <div
            class="w-full h-0.5 absolute top-0 left-0 duration-300 transition-all rounded-full"
            :class="{
                'rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-black bg-white rounded-full':
                isOpen,
                'bg-white dark:bg-black': !isOpen,
            }"
            ></div>
            <div
            class="w-full h-0.5 absolute top-1/2 left-0 -translate-y-1/2 duration-300 transition-all rounded-full"
            :class="{
                'opacity-0 dark:bg-black bg-white': isOpen,
                'bg-white dark:bg-black': !isOpen,
            }"
            ></div>
            <div
            class="w-full h-0.5 absolute bottom-0 left-0 duration-300 transition-all rounded-full"
            :class="{
                '-rotate-45 bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 dark:bg-black bg-white rounded-full':
                isOpen,
                'bg-white dark:bg-black': !isOpen,
            }"
            ></div>
        </div>
    </UiCard>
    <Transition name="fade">
        <div
        class="fixed right-0 top-0 w-1/5 h-2/3 bg-[#C579E7] dark:bg-[#41075B] z-10"
        v-show="isOpen"
        >
        <div
            class="flex flex-col items-center gap-5 h-full justify-center"
        >
            <UiNavigationMobileLink text="Homepage" routeName="index" />
            <UiNavigationMobileLink :text="'About me'" :route-name="'about'" />
            <UiNavigationMobileLink :text="'Experiences'" :route-name="'experiences'" />
            <ButtonsDarkMode
            class="z-20"
            @on-dark-mode-changed="(value) => emit('onDarkModeChanged', value)"
            />
        </div>
        </div>
    </Transition>
</template>
