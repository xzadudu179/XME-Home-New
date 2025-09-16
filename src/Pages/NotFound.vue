<script setup lang="ts">
import Galaxy from '@/Templates/Bit/Galaxy.vue';
import FadeContent from '@/Templates/Bit/FadeContent.vue';
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
            :saturation="0.3" :hue-shift="240" :transparent="false" :star-speed="0.3" :rotation-speed="0.05"
            :twinkle-intensity="0.3" />
    </div>
    <div
        class="font-orbitron font-light text-dark-50 w-full lg:w-[1000px] text-[5vw] lg:text-4xl text-center justify-center flex flex-col absolute top-[50%] left-[50%] content-404">
        <FadeContent :blur="true" :duration="500" :delay="600" :threshold="0.1" :initial-opacity="0" easing="ease-out">
            <p class="lg:text-5xl mb-6"><span class="inline-hovertrans">NOTHING HERE...</span> <span
                    class="inline-hovertrans">ONLY STARS...</span></p>
            <p class="lg:text-3xl text-[3.5vw] border-2 w-[300px] p-5 rounded-2xl text-primary-200 hover:text-primary-100 cursor-target m-auto backhome"
                @click="$router.push('/')">
                BACK HOME</p>
        </FadeContent>
        <FadeContent :blur="true" :duration="1000" :delay="1000" :threshold="0.1" :initial-opacity="0"
            easing="ease-out">
            <p class="text-2xl hovertrans mt-6">[ 404 NOT FOUND ]</p>
        </FadeContent>
    </div>

</template>

<style scoped>
.content-404 {
    transform: translate(-50%, -50%);
}

@media (max-width: 640px) {
    .content-404 {
        font-size: max(7vw, 30px);
        width: 100%;
    }

    .backhome {
        font-size: max(6vw, 20px);
        width: 80%;
    }
}

.backhome {
    transition: all 0.3s;
}

.backhome:hover {
    box-shadow: 0 0 5px;
    text-shadow: 0 0 5px;
}
</style>