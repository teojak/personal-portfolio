<script setup lang="ts"></script>
<template>
    <nav>
        <ul class="flex flex-row items-center gap-5 text-white dark:text-black">
            <UiNavigationLink text="Homepage" route-name="index"/>
            <UiNavigationLink :text="'About me'" :route-name="'about'" />
            <UiNavigationLink :text="'Experiences'" :route-name="'experiences'"/>
        </ul>
     </nav>
</template>