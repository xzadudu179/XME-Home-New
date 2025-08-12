<script setup lang="ts">
import Galaxy from '@/Templates/Bit/Galaxy.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const router = useRouter();
const btnref = ref<HTMLElement | null>(null);
const backhome = () => {
    router.push('/')
}
</script>

<template>
    <div class="fixed w-full h-full z-[-5]">
        <Galaxy :mouse-repulsion="false" :mouse-interaction="true" :density="1.3" :glow-intensity="0.3"
            :saturation="0.3" :hue-shift="240" :transparent="false" :star-speed="0.3" :rotation-speed="0.05" />
    </div>
    <div
        class="font-orbitron font-light text-darkblue-50 w-[1000px] text-4xl text-center justify-center flex flex-col absolute top-[50%] left-[50%] content-404">
        <p class="text-5xl mb-6"><span class="inline-hovertrans">NOTHING HERE...</span> <span
                class="inline-hovertrans">ONLY STARS...</span></p>
        <p class="text-4xl border-2 w-[300px] p-5 rounded-2xl text-primary-200 hover:text-primary-100 cursor-target m-auto"
            @click="$router.push('/')">
            BACK HOME</p>
        <p class="text-2xl hovertrans mt-6">404 NOT FOUND</p>
    </div>

</template>

<style scoped>
.content-404 {
    transform: translate(-50%, -50%);
}
</style>