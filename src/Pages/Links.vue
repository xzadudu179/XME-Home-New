<script setup lang="ts">
import { eventBus } from "@/router/eventbus";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import AnimatedContent from "@/Templates/Bit/AnimatedContent.vue";
import Comment from '@/Templates/Comment.vue';
import FadeContent from "@/Templates/Bit/FadeContent.vue";
import Footer from "@/Templates/Footer.vue";
// import { Waline } from '@waline/client'

onMounted(() => {
    // new Waline({
    //     el: '#waline-container',
    //     serverURL: 'https://你的 Waline 服务地址', // 必填
    //     placeholder: '来说点什么吧～',
    //     lang: 'zh-CN',
    //     pageSize: 10,
    //     emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji'],
    //     meta: ['nick', 'mail'], // 显示昵称和邮箱
    //     // 如果你想使用 GitHub 登录等可配置：
    //     // login: 'enable'
    // })
})

onMounted(() => {
    const route = useRoute();
    eventBus.emit("page-ready", route.fullPath);
});

</script>

<template>
    <div class="text-[5.6vw] md:text-5xl min-h-[70vh] font-orbitron text-dark-50 m-auto mt-20 max-w-[1300px] w-[80vw]">
        <p>WORK IN PROCESS...</p>
        <!-- <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
            :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="true" :delay="0.5">
            <p class="mb-10 font-light"><span class="inline-hovertrans"># LEAVE A MESSAGE <i
                        class="fa-regular fa-message-lines text-[0.9em] relative"></i></span></p>
        </AnimatedContent>
        <div
            class="max-w-[800px] m-auto lg:ml-[0.7em] text-left text-sm md:text-lg translucent text-dark-100 main-content font-normal mb-20 tracking-[0.09em] border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-r-2 md:border-l-2 border-dark-600 rounded-xl pt-[0.5em] pb-4 pl-[1em]">
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="true" :delay="0.7">
                <p><span class="hoverlight text-primary-200 text-sm md:text-[1rem]">欢迎来到我的留言板！</span></p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="true" :delay="0.8">
                <p class="font-normal"><span class="hoverlight">Welcome To My Message Board</span>
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="true" :delay="0.9">
                <p><span class="hoverlight text-primary-200 text-sm md:text-[1rem]">有什么想说的，或是留言、问候，都可以在这里说说哦！</span>
                </p>
            </AnimatedContent>
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="true" :delay="1">
                <p class="font-normal"><span class="hoverlight">Feel free to share anything you’d like to say,
                        whether
                        it’s a message, a
                        greeting, or just some thoughts!</span></p>
            </AnimatedContent>
        </div>

        <!-- <hr class="w-[80%] m-auto text-dark-700 border-1 mb-20"> -->
    </div>
    <Footer></Footer>
</template>

<style>
.main-content {
    line-height: 1.6em
}
</style>