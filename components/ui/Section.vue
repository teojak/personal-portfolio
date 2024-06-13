<script setup lang="ts"></script>
<template>
    <div class="flex flex-col w-full">
        <UiCard>
            ...
        </UiCard>
        <template #content>
            ddd
        </template>
        <template #interactive="{text}">
            iii
            <br/><br/>
            {{ text }}
        </template>
    </div>
</template>