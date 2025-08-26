<script setup lang="ts">
import FadeContent from "../Templates/Bit/FadeContent.vue";
import AnimatedContent from "../Templates/Bit/AnimatedContent.vue";
import { ref } from "vue";
import PersonalCard from "@/Templates/PersonalCard.vue";
import ScrollVelocity from "@/Templates/Bit/ScrollVelocity.vue";
// import Tilted from "@/Templates/Tilted.vue";
import ProjectCard from "@/Templates/ProjectCard.vue"
import Particles from "@/Templates/Bit/Particles.vue";
import FallingText from "@/Templates/Bit/FallingText.vue";
const scrollDown = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log(scrollY)
    window.scrollBy({
        top: window.innerHeight - scrollY,
        left: 0,
        behavior: "smooth",
    });
};

const curYear = ref(new Date().getFullYear());

</script>

<template>
    <div class="particles-container">
        <Particles :particle-count="200" :particle-spread="13" :speed="0.2" :particle-colors="['#97DAFF', '#FFFFFF']"
            :move-particles-on-hover="false" :particle-hover-factor="0.5" :alpha-particles="true"
            :particle-base-size="100" :size-randomness="1" :camera-distance="20" :disable-rotation="true"
            class="w-full h-full" />
    </div>
    <div class="text-darkblue-50 hide-scrollbar">
        <div class="w-full h-[100vh] font-electrolize pb-[100px] md:text-2xl" id="first-header">
            <div class="flex-col flex justify-center content-center items-center h-full select-none">
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="1.2">
                    <p><span class="inline-hovertrans">CREATING</span> <i
                            class="fa-light fa-sparkles inline-hovertrans"></i> <span
                            class="text-primary-200 inline-hovertrans">DREAMS</span><span
                            class="inline-hovertrans">,</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.5" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.2" :threshold="0.1" :delay="1.5">
                    <p><span class="inline-hovertrans">ACROSS</span> <span class="inline-hovertrans">THE</span> <span
                            class="text-primary-200 inline-hovertrans">W<i
                                class="fa-light fa-earth-asia text-[0.8em] relative bottom-[0.05em]"></i>RLD</span>
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
        <div class="mt-40">
            <ScrollVelocity :texts="['CREATING // DESIGNING', 'EXPLORING \\\\ DISCOVERING']" :velocity="100"
                :damping="50" :stiffness="400" :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
                class-name="font-electrolize text-[4rem] font-light lg:text-[8rem]/40 select-none text-darkblue-200"
                parallax-class-name="custom-parallax" scroller-class-name="custom-scroller" />
        </div>
        <div class="font-electrolize">
            <div class="sphere"></div>
            <div class=" hg:w-[95vw] m-auto mt-[100px] md:mt-[200px] rounded-[4em] card-container">
                <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <h1 class="subtitle hg:pr-[850px]"><span class="inline-hovertrans md:mt-[100px]">- AB<i
                                class="fa-light fa-planet-ringed text-[0.9em]"></i>UT -</span></h1>
                </AnimatedContent>

                <div
                    class="about_content font-orbitron w-[100%] md:w-[80%] max-w-[1700px] md:mt-[100px] mb-[300px] m-auto flex flex-row justify-between">
                    <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                        easing="ease-out">
                        <PersonalCard />
                    </FadeContent>
                    <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                        :delay="0.1">
                        <div class="max-w-[800px]">
                            <div class="text-5xl font-light about">
                                <p class="hovertrans">NAME: <span>XZADUDU179</span></p>
                                <p class="hovertrans">BIRTH: <span>2007-04-04</span></p>
                                <p class="hovertrans">FIELD: <span>PROGRAM</span></p>
                                <p class="hovertrans">INTEREST: <span>CREATION</span></p>
                                <p class="hovertrans">LOCATION: <span>CHINA</span></p>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
                <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <h1 class="subtitle md:mt-[50px] hg:pl-[850px]" id="subtitle2">
                        <span class="inline-hovertrans">-TECH
                            ST<i class="fa-light fa-cubes text-[0.8em] relative bottom-[0.06em]"></i>CKS -</span>
                    </h1>
                </AnimatedContent>
                <div
                    class="about_content font-orbitron w-[80%] max-w-[1700px] mt-[100px] mb-[300px] p-10 pt-0 pb-0 m-auto flex flex-row justify-between">
                    <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                        :delay="0.1">
                        <div class="max-w-[800px] mb-[50px] md:mb-0">
                            <div class="text-5xl font-light about" id="about2">
                                <p class="hovertrans"><span>DEVELOPER</span></p>
                                <p class="hovertrans"><span>COMPOSER</span></p>
                                <p class="hovertrans">UX DESIGNER</p>
                                <p class="hovertrans">PHOTOGRAPHER</p>
                                <p class="hovertrans">PRODUCER</p>
                            </div>
                        </div>
                    </AnimatedContent>
                    <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                        easing="ease-out">
                        <div
                            class="max-w-[800px] w-[90vw] lg:w-[50vw] h-[400px] border-2 rounded-3xl hover:scale-[1.01] matter-box">
                            <FallingText
                                text="Vue.js Javascript Typescript Python HTML CSS C++ C# Java Flutter Photoshop Unity Kotlin Axure Git TailwindCSS Node.js"
                                :highlight-words="['Python', 'Vue.js', 'C#', 'HTML', 'CSS']" trigger="scroll"
                                :gravity="0.4" font-size="2rem" :mouse-constraint-stiffness="1" />
                        </div>
                    </FadeContent>

                </div>
            </div>
        </div>
        <div class="mt-60">
            <ScrollVelocity :texts="['PROJECTS //', '\\\\ PROJECTS']" :velocity="100" :damping="50" :stiffness="400"
                :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
                class-name="font-electrolize font-light text-[4rem] lg:text-[8rem]/40 select-none text-darkblue-200"
                parallax-class-name="custom-parallax" scroller-class-name="custom-scroller" />
        </div>
        <!-- <hr class="border-b-2 border-darkblue-300"> -->
        <div class="text-5xl projects font-orbitron text-darkblue-200 text-center pt-[10rem]">
            <!-- <h2 class="mt-50 text-4xl md:text-8xl">/ WORK IN PROCESS /</h2>
            <h2 class="pt-5">...页面制作中...</h2> -->
            <ProjectCard class="ml-0 hg:ml-[13vw]" imageSrc="https://image.179.life/images/deon_avatar.jpg"
                title="XME-Deon-Bot" href="https://docs.xme.179.life/#/"
                :descs="['One of my QQ bot services. Mainly provide some entertainment functions.', 'Built with Python & FastAPI.']"
                date="2024.10.11"></ProjectCard>
            <ProjectCard class="mr-0 hg:mr-[13vw]"
                imageSrc="https://image.179.life/images/background-dark-with-header.webp" title="XME Notes Library"
                href="https://blog.xzadudu179.top/"
                :descs="['Personal blog for sharing my life, introducing myself, and showcasing my personality.']"
                date="2024.09.03"></ProjectCard>
            <ProjectCard class="ml-0 hg:ml-[13vw]" imageSrc="https://image.179.life/images/destar-cover.webp"
                title="XDS-Bot (WIP)" href="https://github.com/xzadudu179/XDS-bot-qq"
                :descs="['A QQ bot designed for group member management, with core features still under development.']"
                date="2025.07.24"></ProjectCard>
            <ProjectCard class="mr-0 hg:mr-[13vw]" imageSrc="https://image.179.life/images/aerno-cover.webp"
                title="Aerno Theme" href="https://github.com/xzadudu179/Aerno-Theme"
                :descs="['A clean blue-purple Visual Studio Code theme designed for dark mode.']" date="2024.03.07">
            </ProjectCard>
            <ProjectCard class="ml-0 hg:ml-[13vw]" imageSrc="https://image.179.life/images/home-cover.webp"
                title="XME-Home" href="https://www.xzadudu179.top"
                :descs="['Homepage for showcasing my uniqueness and introducing myself, filled with everything about me.', 'YOU\'RE AT HERE.']"
                date="2025.07.24"></ProjectCard>
        </div>

        <footer class="font-orbitron font-light mt-[500px] flex justify-center">
            <p class="p-10 pb-5 pt-0 text-darkblue-300 w-[33em] copyright text-center">© 2025 - {{ curYear }}
                <i class="fa-regular fa-star fa-spin"></i>
                xzadudu179 All rights reserved
            </p>
        </footer>
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
        padding: 3rem;
    }
}

.copyright {
    font-size: min(1rem, 3vw);
}

.matter-box {
    transition: all 0.3s;
}

.matter-box:hover {
    box-shadow: 0 0 15px;
}

.projects {
    letter-spacing: 0.03em;
}

.subtitle {
    font-size: 13vw;

    text-align: center;

    @media (width >=64rem) {
        margin-bottom: 100px;
        font-size: 7em;
        line-height: 1;
    }
}

#subtitle2 {
    font-size: 12vw;

    @media (width >=64rem) {
        font-size: 7em;
    }
}

.about p {
    line-height: 1.8em;
    letter-spacing: 0.2em;
}

#about2 p {
    line-height: 1.6em;
}

.about p span {
    color: var(--color-primary-200);
}

@media (max-width: 1680px) {
    .about_content {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 150px;
        margin-top: 50px;
        min-width: 0px !important;
    }

    .about {
        text-align: center;
        margin-top: 0.8em;
        font-size: min(48px, 6vw);
    }

    #about2 {
        font-size: min(48px, 8vw);
    }
}

@media (max-width: 640px) {
    .about_content {
        width: 100%;
        margin: 0;
        margin-bottom: 100px;
        flex-direction: column;
    }
}

.about_content {
    min-width: 1580px;
}
</style>