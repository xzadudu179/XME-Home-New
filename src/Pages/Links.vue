<script setup lang="ts">
import { eventBus } from "@/router/eventbus";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import AnimatedContent from "@/Templates/Bit/AnimatedContent.vue";
import LinkCard from "@/Templates/LinkCard.vue";
import Footer from "@/Templates/Footer.vue";
import { useRouter } from 'vue-router';
import { inject } from 'vue'
import links from '@/data/links.yaml'
import Comment from "@/Templates/Comment.vue";
import Lenis from "lenis";
import { easeOut } from "motion-v";
import type { ComputedRef } from "vue";

// console.log(links)
const lenis: ComputedRef<Lenis | undefined> | undefined = inject('lenis')
lenis!.value?.scrollTo(0, { offset: 0, easing: easeOut, duration: 0.3 });

const router = useRouter()
router.afterEach((to, from) => {
    eventBus.emit("page-ready", to.path);
});


onMounted(() => {
    const route = useRoute();
    eventBus.emit("page-ready", route.fullPath);
    console.log("emit page-ready", route.fullPath);
});

</script>

<template>
    <div class="text-[8vw] lg:text-5xl min-h-[70vh] font-orbitron text-dark-50 m-auto mt-20 max-w-[1800px] w-[90vw]">
        <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
            :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true" :delay="0.4">
            <p class="text-center font-melete mb-1 md:mb-10 hg:mb-5 font-light"><span class="inline-hovertrans">- LINKS
                    -</span>
            </p>
        </AnimatedContent>
        <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
            :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="true" :delay="0.5">
            <p class="title hg:w-[90%] text-[7vw]">
                #
                <span class="inline-hovertrans mb-1.5 md:mb-5">PINNED LINKS</span>
            </p>
        </AnimatedContent>
        <div class="flex flex-wrap justify-center mb-4 w-auto m-auto">
            <div class="flex flex-wrap justify-center md:justify-start card-container">
                <LinkCard v-for="(item, index) in links.links[0].list" :key="index" :name="item.name"
                    :desc="item.description" :avatar="item.avatar" :thumbnail="item.thumbnail ?? ''" :href="item.link"
                    :delay="index / 10 + 0.5" :always-play="true" :pinned="links.links[0].has_thumbnail"
                    :custom-position="item.custom_position ?? ''">
                </LinkCard>
            </div>
        </div>
        <AnimatedContent class="hg:w-[90%] m-auto" :distance="20" direction="vertical" :reverse="false" :duration="1.1"
            ease="power3.out" :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0"
            :always-play="true" :delay="0.8">
            <p class="title md:text-5xl text-[7vw]">
                #
                <span class="inline-hovertrans mb-1.5 md:mb-5">FRIENDLY LINKS</span>
            </p>
        </AnimatedContent>
        <div class="flex flex-wrap justify-center mb-10">
            <div class="flex flex-wrap justify-center md:justify-start card-container">
                <LinkCard v-for="(item, index) in links.links[1].list" :key="index" :name="item.name"
                    :desc="item.description" :avatar="item.avatar" :thumbnail="item.thumbnail ?? ''" :href="item.link"
                    :disable-maganet="true" :delay="index / 10 + 0.8" :always-play="true"
                    :pinned="links.links[1].has_thumbnail" :custom-position="item.custom_position ?? ''">
                </LinkCard>
            </div>
        </div>
        <div class="max-w-[1600px] hg:w-[90%] m-auto">
            <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0" :always-play="false"
                :delay="0.1">
                <p class="title text-[6.5vw]">
                    #
                    <span class="inline-hovertrans mb-1.5 md:mb-5">APPLY FOR A LINK</span>
                </p>
            </AnimatedContent>
            <div
                class="text-left text-lg md:text-xl translucent text-dark-100 main-content font-normal mb-10 tracking-[0.09em]pt-[0.12em] pb-4 pl-[1em]">
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0">
                    <p><span class="hoverlight text-primary-200 text-sm md:text-lg">// 欢迎来申请交换友链！</span></p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.1">
                    <p class="font-normal"><span class="hoverlight">Welcome to apply for a link exchange!</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.2">
                    <p><span class="hoverlight text-primary-200 text-sm md:text-lg">// 申请友链的详情可以到这里查看哦</span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.3">
                    <p class="font-normal"><span class="hoverlight">
                            You can check the details of the application here.
                        </span>
                    </p>
                </AnimatedContent>
                <AnimatedContent :distance="20" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
                    :initial-opacity="0" :animate-opacity="true" :scale="1" :threshold="0" :always-play="false"
                    :delay="0.4">
                    <div
                        class=" border-2 inline-block mt-5 rounded-xl text-primary-200 hover:text-primary-50 btn hovertrans">
                        <a href="https://blog.xzadudu179.top/links/" class="inline-block p-3 pl-5 pr-5" target="_blank">
                            EXCHANGE LINK
                        </a>
                    </div>
                </AnimatedContent>
            </div>
            <Comment class="hg:w-[90%] m-auto" path="/links/" serverURL="https://comment.xzadudu179.top/" />
        </div>
    </div>
    <Footer margin-top="5vh" />
</template>

<style>
.main-content p {
    margin-top: 0.4em;
    /* text-indent: 1em; */
}

.btn {
    transition: all 0.3s;
}

.title {
    font-weight: 300;
    user-select: none;
    max-width: 1600px;
    margin: auto;
    color: var(--color-dark-200);
    text-align: center;
    transition: all 0.3s;

    @media (width >=48rem) {
        font-size: var(--text-5xl);
        line-height: var(--tw-leading, var(--text-5xl--line-height));
        text-align: left;
    }
}

.title:hover {
    color: var(--color-dark-50);
}

.main-content {
    line-height: 1.6em
}

.card-container {
    @media (width >=48rem

        /* 768px */
    ) {
        width: calc((40vw + (2 * min(calc(var(--spacing) * 5), 1.2vw)) + 8px) * 2);
    }
}
</style>