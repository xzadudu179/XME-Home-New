<script setup lang="ts">
import FadeContent from "../Templates/Bit/FadeContent.vue";
import AnimatedContent from "../Templates/Bit/AnimatedContent.vue";
import NavBlock from "../Templates/NavBlock.vue";
const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
    });
};
</script>

<template>
    <div class="text-darkblue-50">
        <div class="absolute top-0">
            <NavBlock :navItems="[{ text: 'Home', href: 'home' }]" />
        </div>
        <div class="w-full h-[100vh]  font-electrolize pb-[100px] md:text-2xl" id="first-header">
            <div class="flex-col flex justify-center content-center items-center h-full">
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <p>CREATING <i class="fa-light fa-sparkles"></i> <span class="text-primary-200">DREAMS</span>,</p>
                </AnimatedContent>
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.5" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.2" :threshold="0.1" :delay="0.3">
                    <p>ACROSS THE <span class="text-primary-200">WORLD</span></p>
                </AnimatedContent>
            </div>
            <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                easing="ease-out">
                <div class="w-full text-center">
                    <i class="fa-flip fa-fade fa-regular fa-chevron-down text-[50px] relative bottom-[5vh] cursor-pointer text-darkblue-300"
                        style="--fa-animation-duration: 1.5s; --fa-fade-opacity: 0.3;" @click="scrollDown"></i>
                </div>
            </FadeContent>
        </div>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <p @click="$router.push('/about')" class="text-2xl text-white">CLICK</p>
        <div class="h-[150vh]"></div>
    </div>
</template>

<style scoped>
#first-header {
    /* padding: 0 10px; */
    /* font-size: 5.5vh; */
    font-size: min(5.7vh, 6rem);
    text-align: center;

    @media (width >=64rem) {
        font-size: min(8rem, 5.5vw);
    }
}
</style>