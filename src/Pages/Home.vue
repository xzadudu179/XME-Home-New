<script setup lang="ts">
import FadeContent from "../Templates/Bit/FadeContent.vue";
import AnimatedContent from "../Templates/Bit/AnimatedContent.vue";
import { ref } from "vue";
import PersonalCard from "@/Templates/PersonalCard.vue";
import ScrollVelocity from "@/Templates/Bit/ScrollVelocity.vue";
// import Tilted from "@/Templates/Tilted.vue";
import Lenis from "lenis";
import type { ComputedRef } from "vue";
import { inject } from 'vue'
import ProjectCard from "@/Templates/ProjectCard.vue"
import Particles from "@/Templates/Bit/Particles.vue";
import FallingText from "@/Templates/Bit/FallingText.vue";
import { easeOut } from "motion-v";
import Footer from "@/Templates/Footer.vue";
import { easeInOut } from "motion-v";
import { eventBus } from "@/router/eventbus";
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useRoute } from "vue-router";

const router = useRouter()
router.afterEach((to, from) => {
    eventBus.emit("page-ready", to.path);
});
const lenis: ComputedRef<Lenis | undefined> | undefined = inject('lenis')
const scrollDown = () => {
    const nextY = window.innerHeight;
    lenis!.value?.scrollTo(nextY, { offset: 0, easing: easeInOut, duration: 0.8 });
};
lenis!.value?.scrollTo(0, { offset: 0, easing: easeOut, duration: 0.3 });

const preloadImages = () => {
    const imagesToPreload = [
        '../assets/img/avatar2.png'
    ];

    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

onMounted(() => {
    preloadImages();
    const route = useRoute();
    eventBus.emit("page-ready", route.fullPath);
    // console.log("emit page-ready", route.fullPath);
});


</script>

<template>
    <div class="particles-container">
        <Particles :particle-count="200" :particle-spread="13" :speed="0.2" :particle-colors="['#97DAFF', '#E7ECFF']"
            :move-particles-on-hover="false" :particle-hover-factor="0.5" :alpha-particles="true"
            :particle-base-size="100" :size-randomness="1" :camera-distance="20" :disable-rotation="true"
            class="w-full h-full" />
    </div>
    <div class="text-dark-50 hide-scrollbar main">
        <div class="w-full h-[100vh] font-electrolize pb-[100px] md:text-2xl" id="first-header">
            <div class="flex-col flex justify-center content-center items-center h-full select-none">
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.5">
                    <p><span class="inline-hovertrans">CREATING</span> <i
                            class="fa-light fa-sparkles inline-hovertrans"></i> <span
                            class="text-primary-200 inline-hovertrans">DREAMS</span><span
                            class="inline-hovertrans">,</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.5" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.2" :threshold="0.1" :delay="0.9">
                    <p><span class="inline-hovertrans">ACROSS</span> <span class="inline-hovertrans">THE</span> <span
                            class="text-primary-200 inline-hovertrans">W<i
                                class="fa-light fa-earth-asia text-[0.8em] relative bottom-[0.05em]"></i>RLD</span>
                    </p>
                </AnimatedContent>
            </div>
            <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                easing="ease-out">
                <div class="w-full text-center h-0">
                    <i class="fa-fade fa-regular fa-chevron-down active:text-dark-300 hover:text-dark-50 transition-all text-[50px] relative bottom-[5vh] cursor-target text-dark-400"
                        style="--fa-animation-duration: 1.5s; --fa-fade-opacity: 0.2;" @click="scrollDown"></i>
                </div>
            </FadeContent>
        </div>
        <div class="mt-40">
            <ScrollVelocity :texts="['CREATING // DESIGNING', 'EXPLORING \\\\ DISCOVERING']" :velocity="100"
                :damping="50" :stiffness="400" :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
                class-name="font-electrolize text-[4rem] font-light lg:text-[8rem]/40 select-none text-dark-200"
                parallax-class-name="custom-parallax" scroller-class-name="custom-scroller" />
        </div>
        <div class="font-electrolize">
            <div class="sphere"></div>
            <div class=" hg:w-[95vw] m-auto mt-[100px] md:mt-[200px] rounded-[4em] card-container">
                <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <h1 class="subtitle hg:pr-[min(850px,37vw)]"><span class="inline-hovertrans md:mt-[100px] md:mb-0">-
                            AB<i class="fa-light fa-planet-ringed text-[0.9em]"></i>UT -</span></h1>
                </AnimatedContent>

                <div
                    class="about_content font-orbitron w-[100%] md:w-[80%] max-w-[1700px] md:mt-[60px] lg:mt-[100px] mb-[300px] m-auto flex flex-row justify-around items-center">
                    <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                        easing="ease-out">
                        <PersonalCard />
                    </FadeContent>

                    <div class="max-w-[800px]">
                        <div class=" font-light about">
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.1">
                                <p class="hovertrans">NAME: <span>XZADUDU179</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.2">
                                <p class="hovertrans">BIRTH: <span>2007-04-04</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.3">
                                <p class="hovertrans">FIELD: <span>PROGRAM</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.4">
                                <p class="hovertrans">INTEREST: <span>CREATION</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.5">
                                <p class="hovertrans">LOCATION: <span>CHINA</span></p>
                            </AnimatedContent>
                        </div>
                    </div>
                </div>
                <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                    <h1 class="subtitle md:mt-[50px] m-auto p-0" id="subtitle2">
                        <span class="inline-hovertrans">-TECH
                            ST<i class="fa-light fa-cubes text-[0.8em] relative bottom-[0.06em]"></i>CK -</span>
                    </h1>
                </AnimatedContent>
                <div class="about_content font-orbitron w-[80%] max-w-[1700px] mt-0 hg:mt-[100px] mb-[300px] md:p-10 pt-0 pb-0 m-auto flex flex-row justify-around items-center text-center"
                    id="about_content2">

                    <div class="max-w-[800px]  md:mb-0">
                        <div class="font-light about1" id="about2">
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.1">
                                <p class="hovertrans"><span>DEVELOPER</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.2">
                                <p class="hovertrans"><span>COMPOSER</span></p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.3">
                                <p class="hovertrans">UX DESIGNER</p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.4">
                                <p class="hovertrans">PHOTOGRAPHER</p>
                            </AnimatedContent>
                            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1"
                                ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1"
                                :threshold="0" :delay="0.5">
                                <p class="hovertrans mb-[0.8em] hg:mb-0">PRODUCER</p>
                            </AnimatedContent>
                        </div>
                    </div>
                    <FadeContent :blur="true" :duration="1000" :delay="200" :threshold="0.1" :initial-opacity="0"
                        easing="ease-out">
                        <div
                            class="max-w-[800px] w-[90vw] lg:w-[50vw] h-[400px] border-2 rounded-3xl hover:scale-[1.01] matter-box">
                            <FallingText
                                text="Vue.js Javascript Typescript Python HTML CSS C++ C# Java Flutter Go Photoshop Unity Kotlin Git TailwindCSS Vite React"
                                :highlight-words="['Python', 'Vue.js', 'C#', 'HTML', 'CSS']" trigger="scroll"
                                :gravity="0.4" font-size="1.8rem" :mouse-constraint-stiffness="1" />
                        </div>
                    </FadeContent>

                </div>
            </div>
        </div>
        <div class="lg:mt-60 mt-[10vw]">
            <ScrollVelocity :texts="['PROJEC\u200ATS //', '\\\\ PROJEC\u200ATS']" :velocity="100" :damping="50"
                :stiffness="400" :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
                class-name="font-electrolize font-light text-[4rem] lg:text-[8rem]/40 select-none text-dark-200"
                parallax-class-name="custom-parallax" scroller-class-name="custom-scroller" />
        </div>
        <!-- <hr class="border-b-2 border-dark-300"> -->
        <div class="text-5xl projects font-orbitron text-dark-200 text-center pt-[10rem]">
            <!-- <h2 class="mt-50 text-4xl md:text-8xl">/ WORK IN PROCESS /</h2>
            <h2 class="pt-5">...页面制作中...</h2> -->
            <ProjectCard class="ml-0 hg:ml-[8vw]" imageSrc="https://image.179.life/images/deon-avatar-big.webp"
                title="XME-Deon-Bot" href="https://docs.xme.179.life/#/"
                :descs="['One of my QQ bot services, mainly offering entertainment features.', 'Built with Python and Go (API Server).']"
                date="2024.10.11"></ProjectCard>
            <ProjectCard class="mr-0 hg:mr-[8vw]"
                imageSrc="https://image.179.life/images/background-dark-with-header.webp" title="XME Notes Library"
                href="https://blog.xzadudu179.top/"
                :descs="['Personal blog for sharing my life, introducing myself, and showcasing my personality.']"
                date="2024.09.03"></ProjectCard>
            <ProjectCard class="ml-0 hg:ml-[8vw]" imageSrc="https://image.179.life/images/milcalc-cover.webp"
                title="MilAerno Theme " href="https://mhtlim.top"
                :descs="['A theme designed and created for Milthm-Calculator, intended to help players conveniently check their in-game scores.']"
                date="2025.10.12"></ProjectCard>
            <ProjectCard class="mr-0 hg:mr-[8vw]" imageSrc="https://image.179.life/images/aerno-cover.webp"
                title="Aerno Theme" href="https://github.com/xzadudu179/Aerno-Theme"
                :descs="['A clean blue-purple Visual Studio Code theme designed for dark mode.']" date="2024.03.07">
            </ProjectCard>
            <ProjectCard class="ml-0 hg:ml-[8vw]" imageSrc="https://image.179.life/images/home-cover.webp"
                title="XME-Home" href="https://www.xzadudu179.top"
                :descs="['Homepage for showcasing my uniqueness and introducing myself, filled with everything about me.']"
                date="2025.08.11"></ProjectCard>
        </div>
        <div class="mt-[10rem]">
            <ScrollVelocity :texts="[' CONNEC\u200ATION //', '\\\\ CONNEC\u200ATION ']" :velocity="100" :damping="50"
                :stiffness="400" :velocity-mapping="{ input: [0, 1000], output: [0, 5] }"
                class-name="font-electrolize font-light text-[4rem] lg:text-[8rem]/40 select-none text-dark-200"
                parallax-class-name="custom-parallax" scroller-class-name="custom-scroller" />
        </div>

        <div class="max-w-[1280px] w-full m-auto mt-60 font-orbitron select-none">
            <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
                <h1 class="subtitle font-electrolize hovertrans">- CONT<i
                        class="fa-light fa-paper-plane text-[0.85em] relative bottom-[0.05em] pr-[0.03em]"></i><span
                        class="pr-2">C</span>T
                    -
                </h1>
            </AnimatedContent>
            <!-- <p></p> -->
            <!-- <p class="text-[2em] text-center">Feel free to reach me out for collaborations or commissions!</p> -->

            <div class="flex flex-col md:w-full contact-container m-auto justify-center lg:flex-row lg:justify-evenly">
                <div class="flex justify-around lg:justify-between self-center mb-8 ">
                    <div class="flex flex-col items-center">
                        <div class="qr overlay">
                            <img src="https://image.179.life/QRcode/QR_WX.webp" class="" alt=""></img>
                        </div>
                        <p class="qr-text">WeChat</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="qr overlay">
                            <img src="https://image.179.life/QRcode/QR_QQ.webp" class="" alt=""></img>
                        </div>
                        <p class="qr-text">QQ</p>
                    </div>

                </div>
                <div
                    class="w-0 h-[18em] border-r-2 border-dark-200 hidden lg:flex place-self-center mb-4 relative right-[4px]">
                </div>

                <div
                    class="no-cursor other-contact justify-around self-center pl-5 pr-5 lg:justify-center flex-row-reverse lg:flex-row text-[2.5rem] font-light flex text-center md:text-left mb-5 p-5 lg:pr-0 lg:pl-0">
                    <div class="text-contact-container flex flex-col justify-center text-left">
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                            :delay="0.1">
                            <p><a href="mailto:terra179@163.com" class="hovertrans cursor-target email"><i
                                        class="fa-regular fa-envelope pr-[0.3em] email-icon"></i>Email
                                </a></p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                            :delay="0.2">
                            <p><a target="_blank" href="https://github.com/xzadudu179"
                                    class=" inline-hovertrans cursor-target"><i
                                        class="fa-brands fa-github pr-[0.3em]"></i>Github</a></p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                            :delay="0.3">
                            <p><a target="_blank" href="https://x.com/xzadudu179"
                                    class="inline-hovertrans cursor-target"><i
                                        class="fa-brands fa-x-twitter pr-[0.2em]"></i>Twitter</a>
                            </p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1"
                            :delay="0.4">
                            <p><a target="_blank" href="https://space.bilibili.com/70738350"
                                    class="inline-hovertrans cursor-target"><i
                                        class="fa-brands fa-bilibili pr-[0.3em]"></i>Bilibili</a>
                            </p>
                        </AnimatedContent>
                    </div>
                    <div class="overlay icon lg:ml-5 lg:mr-5 hidden md:flex place-self-center">
                        <img src="https://image.179.life/images/xzadudu179-line.webp" class="max-w-[200px]" alt="">
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
/* 隐藏横向滚动条但保持功能 (兼容性写法) */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* 自定义纵向滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #111;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>

<style scoped>
.main {
    overflow-x: hidden;
}

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


.contact-container {
    width: full;
    min-width: 300px;
}

.text-contact-container {
    @media (width <=64rem) {
        padding-left: max(0.5em, 6vw);
    }

}

.text-contact-container p {
    @media (width <=48rem) {
        font-size: min(max(2rem, 6vw), 2.5rem) !important;
    }
}

.other-contact a:hover {
    color: var(--color-primary-200);
}

.other-contact a:active {
    color: var(--color-primary-200);
}

.icon img {
    width: 15vw;
    min-width: 100px;

    @media (width <=64rem) {
        margin-left: 4vw;
    }
}

.icon {
    pointer-events: none;
}

.icon img:hover {
    filter: drop-shadow(0 0 5px);
}


.other-contact a {
    display: inline-block;
    padding: 0 1rem;
}

.other-contact {
    letter-spacing: 0.08em;
}

.other-contact p:first-child {
    margin-top: 0;
}

.other-contact p {
    margin-top: 0.2em;
    font-size: max(1rem, min(2.5rem, 2.8vw));
}

.qr {
    max-width: 240px;
    width: 80%;
    min-width: 140px;
    padding: 13px 0;
    padding-right: 0;

    @media (width <=64rem) {
        padding-left: 10px;
        padding-right: 10px;
    }

    padding-top: 44px;
    transition: all 0.5s ease;
}

.qr-text {
    /* writing-mode: vertical-lr; */
    font-size: min(2rem, 4vw);
}

.qr img {
    display: block;
    width: 20vw;
    min-width: 120px;
    margin: auto;
}

.overlay {
    position: relative;
}

.overlay::after {
    content: "";
    z-index: 1;
    position: absolute;
    inset: 0;
    background: var(--color-dark-100);
    mix-blend-mode: multiply;
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
    font-size: min(14vw, 5.5rem);

    text-align: center;

    @media (width >=64rem) {
        margin-bottom: 50px;
        font-size: 7em;
        line-height: 1;
    }
}

#subtitle2 {
    font-size: min(11.5vw, 10vh);
    margin-top: 40px;
    margin-bottom: 10px;

    @media (width >=64rem) {
        margin: auto;
        font-size: 7em;
    }

    @media (width <=1680px) {
        text-align: center;
    }

    @media (width >=1680px) {
        text-align: right;
        width: calc(62vw);
        padding-right: 17px;
        min-width: 1400px;
        max-width: 1550px;
        /* max-width: calc(1700px + 0.6em); */
    }

}

.about p {
    /* font-size: 2rem; */
    line-height: 1.8em;
    letter-spacing: 0.2em;

    @media (width <=64rem) {
        font-size: min(max(1.2rem, 5vw), 55px);
    }
}

.about1 {
    font-size: max(min(3em, 2.2vw), 2.7em);
}

.about1 p span {
    color: var(--color-primary-200);
}

.about {
    font-size: max(min(3em, 2.2vw), 2.3em);
    /* width: 80vw; */
}

#about2 p {
    line-height: 1.6em;

    @media (width <=64rem) {
        font-size: min(max(1.5rem, 7vw), 50px);
    }
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
        margin-bottom: 5vw;
        margin-top: 0;
        min-width: 0px !important;
    }

    #about_content2 {
        flex-direction: column-reverse;
    }

    .about_content > div {
        margin: min(40px, 4vw) 0;
    }

    .about {
        text-align: center;
        margin-top: 0.8em;
        font-size: min(48px, 6vw);
    }

    #about2 {
        font-size: min(48px, 8vw);
        margin-top: 0;
    }
}

@media (max-width: 640px) {
    .about_content {
        width: 100%;
        margin: 0;
        margin-bottom: 4vw;
    }
}

.about_content {
    min-width: 1580px;
}
</style>