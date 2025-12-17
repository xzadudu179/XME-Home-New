<script setup lang="ts">
import { ref } from 'vue';
const cursorColor = ref('white')
let switchHint = "ENABLE"
</script>

<template>
    <button class="flex fixed top-0 right-0 z-1000">
        <div>
            <div class="cursor-item top-1/2 left-1/2 absolute rounded-full w-1 h-1 -translate-x-1/2 -translate-y-1/2 transform"
                :style="{ backgroundColor: cursorColor }" />
            <div class="cursor-item top-1/2 left-1/2 absolute border-[3px] border-r-0 border-b-0 w-3 h-3 -translate-x-[150%] -translate-y-[150%] target-cursor-corner transform"
                :style="{ borderColor: cursorColor }" />
            <div class="cursor-item top-1/2 left-1/2 absolute border-[3px] border-b-0 border-l-0 w-3 h-3 -translate-y-[150%] translate-x-1/2 target-cursor-corner transform"
                :style="{ borderColor: cursorColor }" />
            <div class="cursor-item top-1/2 left-1/2 absolute border-[3px] border-t-0 border-l-0 w-3 h-3 translate-x-1/2 translate-y-1/2 target-cursor-corner transform"
                :style="{ borderColor: cursorColor }" />
            <div class="cursor-item top-1/2 left-1/2 absolute border-[3px] border-t-0 border-r-0 w-3 h-3 -translate-x-[150%] translate-y-1/2 target-cursor-corner transform"
                :style="{ borderColor: cursorColor }" />
        </div>
        <div class="ml-[8em] text-left text-dark-100 hover-primary">
            <p>{{ switchHint }}</p>
        </div>
    </button>
</template>
<style scoped></style>