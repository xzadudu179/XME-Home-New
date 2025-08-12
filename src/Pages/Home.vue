<script setup lang="ts">
import FadeContent from "../Templates/Bit/FadeContent.vue";
import AnimatedContent from "../Templates/Bit/AnimatedContent.vue";
import PersonalCard from "@/Templates/PersonalCard.vue";
const scrollDown = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY)
    window.scrollBy({
        top: window.innerHeight - scrollY,
        left: 0,
        behavior: "smooth",
    });
};
</script>

<template>
    <div class="text-darkblue-50">
        <div class="w-full h-[100vh]  font-electrolize pb-[100px] md:text-2xl" id="first-header">
            <div class="flex-col flex justify-center content-center items-center h-full select-none">
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <p><span class="inline-hovertrans">CREATING</span> <i
                            class="fa-light fa-sparkles inline-hovertrans"></i> <span
                            class="text-primary-200 inline-hovertrans">DREAMS</span><span
                            class="inline-hovertrans">,</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.5" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.2" :threshold="0.1" :delay="0.3">
                    <p><span class="inline-hovertrans">ACROSS</span> <span class="inline-hovertrans">THE</span> <span
                            class="text-primary-200 inline-hovertrans">WORLD</span>
                    </p>
                </AnimatedContent>
            </div>
            <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                easing="ease-out">
                <div class="w-full text-center h-0">
                    <i class="fa-fade fa-regular fa-chevron-down active:text-darkblue-300 hover:text-darkblue-50 transition-all text-[50px] relative bottom-[5vh] cursor-target text-darkblue-400"
                        style="--fa-animation-duration: 1.5s; --fa-fade-opacity: 0.2;" @click="scrollDown"></i>
                </div>
            </FadeContent>
        </div>
        <div class="font-electrolize mt-[100px]">
            <h1 class="text-[13vw] lg:text-9xl text-center mb-[100px] hovertrans"><span>- ABOUT -</span></h1>
            <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                <div class="about_content font-orbitron w-[80%] max-w-[1700px] m-auto flex flex-row justify-between">
                    <PersonalCard />
                    <div class="max-w-[800px]">
                        <div class="text-5xl font-light about">
                            <p class="hovertrans">NAME: <span>XZADUDU179</span></p>
                            <p class="hovertrans">BIRTH: <span>2007-04-04</span></p>
                            <p class="hovertrans">FIELD: <span>UI/UX</span></p>
                            <p class="hovertrans">INTEREST: <span>CREATION</span></p>
                            <p class="hovertrans">LOCATION: <span>CHINA</span></p>
                        </div>
                    </div>
                </div>
            </AnimatedContent>
        </div>
        <div class="h-[150vh]">
        </div>
    </div>
</template>

<style scoped>
#first-header {
    /* padding: 0 10px; */
    /* font-size: 5.5vh; */
    font-size: min(3em, max(5.7vh, 5.7vw));
    text-align: center;

    @media (width >=64rem) {
        font-size: min(8rem, 5.5vw);
        margin: auto;
    }

    @media (max-height: 64rem) {
        padding: 4rem;
    }
}

.about p {
    line-height: 1.8em;
    letter-spacing: 0.2em;
}

.about p span {
    color: var(--color-primary-200);
}

@media (max-width: 1600px) {
    .about_content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: 0px !important;
    }

    .about {
        text-align: center;
        margin-top: 0.8em;
        font-size: min(48px, 5vw);
    }
}

@media (max-width: 640px) {
    .about_content {
        width: 100%;
        margin: 0;
        flex-direction: column;
    }
}

.about_content {
    min-width: 1580px;
}
</style>