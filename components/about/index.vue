<script setup lang="ts"></script>
<template >
    <div class=" w-full flex flex-col items-center dark:bg-black dark:text-white" id="about">
        About me
        <div class="flex flex-col md:flex-row items-center gap-10 w-full h-32 md:h-60 relative">
            <UiCard :needs-padding="false" class=" shadow-xl absolute left-1/4 md:left-1/3">
                <img src="@/assets/img_placeholder.png" class=" h-20 w-20"/>
            </UiCard>
            <div class="flex flex-col flex-1 items-center w-fit">
                <div>My hobby</div>
                <div>My profession</div>
            </div>
        </div>
    </div>
</template>