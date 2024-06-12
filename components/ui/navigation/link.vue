<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
        routeName:{
            type: String,
            required: true,
        }
    });

    function goToRoute(){
        const router = useRouter();
        router.push({name:props.routeName});
    }
</script>

<template>
    <li class="cursor-pointer" @click="goToRoute">{{ text }}</li> 
</template>