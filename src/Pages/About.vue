<script setup lang="ts">
import ElectricBorder from '@/Templates/Bit/ElectricBorder.vue';
import TextType from '@/Templates/Bit/TextType.vue';
import LogoLoop from '@/Templates/Bit/LogoLoop.vue';
import Footer from '@/Templates/Footer.vue';
import AnimatedContent from '@/Templates/Bit/AnimatedContent.vue';
// import TiltedCard from '@/Templates/Bit/TiltedCard.vue';
import FadeContent from '@/Templates/Bit/FadeContent.vue';
import Lenis from "lenis";
import { eventBus } from '@/router/eventbus';
import { onMounted } from 'vue';
import type { ComputedRef } from "vue";
import { inject } from 'vue'
import { easeOut } from "motion-v";
import Comment from '@/Templates/Comment.vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter()
router.afterEach((to, from) => {
    eventBus.emit("page-ready", to.path);
});
import HrefImageCard from '@/Templates/HrefImageCard.vue';
// import LoadingImg from '@/Templates/LoadingImg.vue';
import EmailMessage from '@/Templates/EmailMessage.vue';

const lenis: ComputedRef<Lenis | undefined> | undefined = inject('lenis')
lenis!.value?.scrollTo(0, { offset: 0, easing: easeOut, duration: 0.3 });

onMounted(() => {
    const route = useRoute()
    eventBus.emit("page-ready", route.fullPath);
    console.log("emit page-ready", route.fullPath);
});

const techLogos = [
    {
        node: '<i class="fa-brands fa-github"></i>',
        title: "Github",
        href: "https://github.com/xzadudu179"
    },
    {
        node: '<i class="fa-brands fa-x-twitter"></i>',
        title: "Twitter/X",
        href: "https://x.com/xzadudu179"
    },
    {
        node: '<i class= "fa-light fa-planet-ringed" ></i>',
        title: "Personal Blog",
        href: "https://blog.xzadudu179.top"
    },
    {
        node: '<i class="fa-brands fa-qq"></i>',
        title: "QQ",
        href: "tencent://snsapp/?cmd=2&ver=1&uin=1795886524"
    },
    {
        node: '<i class="fa-brands fa-bilibili"></i>',
        title: "Bilibili",
        href: "https://space.bilibili.com/70738350"
    },
    {
        node: '<i class="fa-brands fa-youtube"></i>',
        title: "YouTube",
        href: "https://www.youtube.com/channel/UCQVFa42_lhkmYlfog1B2_Wg"
    },
    {
        node: '<i class="fa-brands fa-wikipedia-w"></i>',
        title: "WikiPedia",
        href: "https://zh.wikipedia.org/wiki/User:Xzadudu179"
    },
    {
        node: '<i class="afdian-icon"></i>',
        title: "afdian",
        href: "https://afdian.com/a/xzadudu179"
    },
    {
        node: '<i class="cloudmusic-icon"></i>',
        title: "CloudMusic",
        href: "https://163cn.tv/J3SPhPS"
    },
    {
        node: '<i class="wakatime-icon"></i>',
        title: "WakaTime",
        href: "https://wakatime.com/@xzadudu179"
    },
];


const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
console.log("Hello, World.")
console.log("Welcome :)")
const type_texts = ['printf("Hello, World.");', 'print("Hello, World.")', 'console.log("Hello, World.");']
</script>

<template>
    <div class="text-5xl font-orbitron font-light text-dark-50 m-auto mt-[100px] tracking-[0.05em]">
        <div class="m-auto w-[90vw]  lg:w-[80vw] max-w-[1500px] min-h-[1000px]">
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true"
                :delay="0.4">
                <p class="text-3xl md:text-5xl font-light select-none font-melete text-center mb-2"><span
                        class="inline-hovertrans mb-5">- ABOUT -</span>
                </p>
            </AnimatedContent>
            <div class="flex justify-between">
                <div class="flex w-full flex-col md:flex-row mb-10 select-none">
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                        :always-play="true" :delay="0.4">
                        <ElectricBorder v-if="!isSafari" :color="'#4CD0F1'" :speed="1" :chaos="0.3" :thickness="3"
                            :style="{ borderRadius: '25px' }"
                            class="m-auto md:m-0 max-h-[250px] max-w-[250px] md:max-h-[300px] md:max-w-[300px] h-[90vw] w-[90vw] avatar hovertrans">
                        </ElectricBorder>
                        <div v-else
                            class="m-auto md:m-0 max-h-[250px] max-w-[250px] md:max-h-[300px] md:max-w-[300px] h-[90vw] w-[90vw] avatar hovertrans rounded-[25px] border-avatar">
                        </div>
                    </AnimatedContent>
                    <div class="text-2xl md:ml-10 flex flex-col self-center mt-5 md:mt-0">
                        <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="0.5">
                            <p class="text-primary-100 font-normal ">NAME</p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="0.6">
                            <p class="ml-[1em] lg:ml-0 text-3xl lg:text-4xl mt-2 mb-2"><span
                                    class="inline-hovertrans">xzadudu179</span></p>
                        </AnimatedContent>
                        <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="0.7">
                            <p class="text-primary-100 font-normal">FROM</p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="0.8">
                            <p class="ml-[1em] lg:ml-0 text-3xl lg:text-4xl mt-2"><span
                                    class="inline-hovertrans">Yangzhou</span>, <span
                                    class="inline-hovertrans">Jiangsu</span>,
                                <span class="inline-hovertrans">China</span>
                            </p>
                        </AnimatedContent>
                        <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="0.9">
                            <p class="text-primary-100 mt-3 font-normal">BIRTH</p>
                        </AnimatedContent>
                        <AnimatedContent :distance="30" direction="vertical" :reverse="false" :duration="1.1"
                            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0"
                            :always-play="true" :delay="1">
                            <p class="ml-[1em] lg:ml-0 text-3xl lg:text-4xl mt-2 mb-2"><span
                                    class="inline-hovertrans">2007-04-04</span></p>
                        </AnimatedContent>
                    </div>
                </div>
                <div class="text-4xl right-icons hidden lg:flex">
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0"
                        :always-play="true" :delay="0.5">
                        <div><a href="https://blog.xzadudu179.top"
                                class="hover:text-primary-200 cursor-target cursor-none pr-1 pl-1 m-2"><i
                                    class="fa-light fa-planet-ringed"></i></a>

                        </div>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0"
                        :always-play="true" :delay="0.5">
                        <div><a href="https://github.com/xzadudu179"
                                class="hover:text-primary-200 cursor-target cursor-none pr-1 pl-1 m-2"><i
                                    class="fa-brands fa-github"></i></a></div>
                    </AnimatedContent>
                </div>
            </div>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true"
                :delay="0.5">
                <p class="text-3xl md:text-5xl font-light select-none "># <span
                        class="inline-hovertrans mb-5">INTRODUCTION</span>
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                :delay="0.6">
                <p
                    class="font-normal font-firacode text-lg md:text-2xl mb-5 select-none text-primary-200 text-center md:text-left">
                    <span class="inline-block mr-1">&gt;</span>
                    <TextType :text="type_texts" :typingSpeed="100" :pauseDuration="2000" :showCursor="true"
                        cursorCharacter="_" :textColors="['#78B9FF']" class="" />
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                :delay="0.5">
                <div
                    class="text-lg md:text-lg text-dark-100 main-content font-normal mb-8 tracking-[0.09em] border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 border-dark-600 rounded-xl pt-[0.01em] pb-3 pl-[1em]">
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="0.7">
                        <p><span class="hoverlight">a.k.a. 九镹、九九、179</span></p>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="0.8">
                        <p><span class="hoverlight">一个正在四处游荡与探索的小生物... 对于前端、动效、UX 设计有着奇怪的着迷？</span>
                        </p>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="0.9">
                        <p><span class="hoverlight">什么都做一点，副业是曲师，想做出自己的游戏，以及参与更多人的项目。</span></p>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="1">
                        <p><span class="hoverlight">想在世界上留下足迹，让更多人发现自己...</span></p>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="1.1">
                        <p><span class="hoverlight">对于细节莫名地在意，是一个偏向于完美主义的人 _(・ω・｣ ∠)_</span></p>
                    </AnimatedContent>
                    <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1"
                        ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0"
                        :always-play="true" :delay="1.2">
                        <p><span class="hoverlight">正在努力学前端，希望可以做出很漂亮且实用的网页～</span></p>
                    </AnimatedContent>
                </div>
            </AnimatedContent>
            <!-- <p class="text-3xl lg:text-5xl font-normal lg:font-light mb-7"># <span class="inline-hovertrans">FIND
                    ME</span>
            </p> -->
            <FadeContent :blur="true" :duration="1000" :delay="1300" :threshold="0" :always-play="true"
                :initial-opacity="0" easing="ease-out">
                <div :style="{ height: '100px', position: 'relative', overflow: 'hidden' }">
                    <LogoLoop :logos="techLogos" :speed="80" direction="left" :logoHeight="48" :gap="40"
                        :pauseOnHover="true" :scaleOnHover="true" :fadeOut="true" fadeOutColor="#080A16" />
                </div>
            </FadeContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true"
                :delay="0.5">
                <p class="text-3xl md:text-5xl font-light mb-7 select-none "># <span
                        class="inline-hovertrans">INTERESTS</span>
                </p>
            </AnimatedContent>
            <div class="text-lg md:text-lg main-content font-normal mb-15 tracking-[0.09em] text-dark-100">
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                    :delay="0.7">
                    <p class="mb-5"><span class="hoverlight text-3xl text-primary-200 select-none">// MUSIC</span></p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                    :delay="0.8">
                    <p class="indent-[1em]"><span class="hoverlight">自己喜欢用音乐的方式展现自己内心的世界...以及讲述故事一类的。</span>
                    </p>
                    <p class="indent-[1em]"><span class="hoverlight">平时忽然有灵感的话，或许会写一首曲子玩玩。</span>
                    </p>
                </AnimatedContent>
                <div
                    class="flex flex-col md:flex-row hg:justify-around justify-center md:justify-start m-auto flex-wrap mb-10">
                    <HrefImageCard name="Fly To Meteor"
                        image="http://p1.music.126.net/LeRG99_-Zrsn-upcejLfQQ==/109951169357449275.jpg?param=350y350"
                        href="https://music.163.com/#/song?id=2128847493&uct2=U2FsdGVkX19wV9mfkm5EIPy9qgdf2bfS6fOeQrLyDMw="
                        :delay="1000" :always-play="true">
                    </HrefImageCard>
                    <HrefImageCard name="Showercloud"
                        image="http://p2.music.126.net/8w0QWOeinDsFdF6Tc2nb4A==/109951171512747475.jpg?param=350y350"
                        href="https://music.163.com/#/song?id=2729440788&uct2=U2FsdGVkX18KatTXxzSZSgue0vm02rNHltagY0ZYJu4="
                        :delay="1100" :always-play="true">
                    </HrefImageCard>
                    <HrefImageCard name="[For 宇喵天枢] 星芽"
                        image="http://p1.music.126.net/LrZ3a2g-CdsKzi1K_vWuiA==/109951170145917445.jpg?param=350y350"
                        href="https://music.163.com/#/song?id=2645915417&uct2=U2FsdGVkX18OCTIBRC5Vsn4MFwSxluYQaOb4dyHrqCs="
                        :delay="1200" :always-play="true">
                    </HrefImageCard>
                    <HrefImageCard name="星之记忆"
                        image="http://p1.music.126.net/zp1RZDCJxpJlHgUzj9HMKQ==/109951168055646040.jpg?param=350y350"
                        href="https://music.163.com/song?id=1988991864&uct2=U2FsdGVkX180khFedeq2GplUGrjKiTh4yv9mJURyMsI="
                        :delay="1300" :always-play="true">
                    </HrefImageCard>
                </div>

                <!-- <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                    :delay="0.2">
                    <p><span class="hoverlight text-3xl text-primary-200">// PHOTOS</span></p>
                </AnimatedContent> -->
            </div>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true"
                :delay="0.2">
                <p class="text-3xl lg:text-5xl font-light mb-7 select-none"># <span
                        class="inline-hovertrans">CONTACT</span>
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                :delay="0.5">
                <div
                    class=" text-lg md:text-lg main-content font-normal mb-8 tracking-[0.09em] text-dark-100 indent-[1em]">
                    <p><span class="hoverlight">有任何想法都可以尝试来联系我哦！</span>
                    </p>
                    <p><span class="hoverlight">无论是交朋友、合作、委托，还是打个招呼...</span>
                    </p>
                </div>
            </AnimatedContent>
            <EmailMessage class=""></EmailMessage>
            <!-- <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true"
                :delay="0.2">
                <p class="text-3xl lg:text-5xl font-normal lg:font-light mb-7 select-none"># <span
                        class="inline-hovertrans">OTHERS</span>
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="true"
                :delay="0.5">
                <div
                    class=" text-lg md:text-lg main-content font-normal mb-8 tracking-[0.09em] text-dark-100 indent-[1em]">
                    <p><span class="hoverlight">想要更多地了解我嘛？</span>
                    </p>
                    <p><span class="hoverlight">可以去我的博客看看哦！里面分享了很多有关我生活的东西，对于自己的介绍也与这里有些许的不同...</span>
                    </p>
                </div>
                <a href="https://blog.xzadudu179.top" class="cursor-none">
                    <div
                        class="p-5 border-4 border-dark-400 rounded-2xl m-auto hovertrans hover:text-primary-200 active:text-primary-200 cursor-target">
                        <p class="w-full text-center text-2xl">
                            View Blog
                        </p>
                    </div>
                </a>
            </AnimatedContent> -->
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                :delay="0.2">
                <p class="text-[10vw] md:text-5xl select-none mb-7 mt-20 font-light "><span
                        class="inline-hovertrans">LEAVE A
                        MESSAGE <i class="fa-light fa-message-lines text-[0.9em] relative"></i></span></p>
            </AnimatedContent>
            <div
                class="text-left text-lg md:text-xl translucent text-dark-100 main-content font-normal mb-13 tracking-[0.09em]pt-[0.12em] pb-4 pl-[1em]">
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.2">
                    <p><span class="hoverlight text-primary-200 text-sm md:text-lg">// 欢迎来到我的留言板！</span></p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.3">
                    <p class="font-normal"><span class="hoverlight">Welcome To My Message Board</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.4">
                    <p><span class="hoverlight text-primary-200 text-sm md:text-lg">// 有什么想说的，或是留言、问候，都可以在这里说说哦！</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.5">
                    <p class="font-normal"><span class="hoverlight">Feel free to share anything you’d like to say,
                            whether
                            it’s a message, a
                            greeting, or just some thoughts!</span></p>
                </AnimatedContent>
            </div>
            <Comment />
        </div>
    </div>
    <Footer margin-top="5vh"></Footer>
</template>

<style scoped>
.border-avatar {
    border: 0.2rem solid #4CD0F1;
    box-shadow: 0 0 10px #4CD0F1;
}

.avatar {
    background-image: url(https://image.179.life/images/avatar-big.webp);
    background-size: contain;
    /* border-radius: 20000px; */
}

.main-content p {
    margin-top: 0.4em;
    /* text-indent: 1em; */
}

.right-icons a {
    transition: color 0.2s;
}
</style>