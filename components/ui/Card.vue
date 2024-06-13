<script setup lang="ts">

const interactive = ref("...");
</script>

<template>
    <div class="shadow border border-gray-400 rounded-xl p-5 bg-white">
        <slot/>

        <div class="border border-black p-3">
            <slot name="content"/>
        </div>

        <div class="border border-red-400 p-3">
            <slot name="interactive" :text="interactive"/>
        </div>
    </div>
</template>