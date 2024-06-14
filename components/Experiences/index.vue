<script setup lang="ts">

const index =ref(0);
const Experiences = ref([
    {title: "title1", description: "description1", imgUrl: ""},
    {title: "title2", description: "description2", imgUrl: ""},
    {title: "title3", description: "description3", imgUrl: ""},
]);
function forward(){
    if(index.value < Experiences.value.length -1){
        index.value++;
    }
}
function stepBack(){
    if(index.value>=1){
        index.value--;
    }
}
const currentExperiences = computed(()=>{
    return Experiences.value[index.value]
});
</script>
<template>
    <div>Experiences</div>
    <div class="flex flex-row gap-10"></div>
    <div></div>
    <div class="flex flex-col gap-3">
        <div class="font-bold">{{ currentExperiences.title }}</div>
        <div>{{ currentExperiences.description }}</div>
    </div>
</template>