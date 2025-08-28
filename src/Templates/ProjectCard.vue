<template>
    <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
        :initial-opacity="0" :animate-opacity="true" :scale="0.9" :threshold="0.1" :delay="0.1">
        <Magnet class="m-[5vw] ml-0 mr-0" :padding="200" :disabled="false" :magnet-strength="30"
            active-transition="transform 0.6s ease-out" inactive-transition="transform 0.6s ease-in-out"
            wrapper-class-name="custom-wrapper" inner-class-name="custom-inner">
            <SpotlightCard
                class-name="custom-spotlight-card h-auto min-h-[8.5em] md:h-[33vw] hg:h-[20vw] w-[90vw] lg:w-[80vw] hg:w-[70vw] flex-col md:flex-row p-0 color-on-hover bg-darkblue-800 max-w-[2500px] md:max-h-[630px] text-[70%]"
                spotlight-color="#3D78F232">
                <div class="imgcard">
                    <img :src="props.imageSrc" alt=""
                        class="w-full md:w-auto md:h-full overflow-hidden max-w-max cardimg">
                </div>
                <div
                    class="w-full p-3 pt-8 border-t-8 md:border-t-0 md:border-l-8 border-darkblue-700 z-5 md:flex flex-col">
                    <div>
                        <p class="hovertrans text-[1.8rem] card-title pb-8 md:font-light">
                            {{ props.title }}
                        </p>

                        <div class="pt-4 border-t-2 border-darkblue-600">
                            <p v-for="item in props.descs" class="desc">
                                {{ item }}
                            </p>
                        </div>
                        <p class="md:hidden text-[0.7rem] pt-3 text-right"> Started in {{ props.date }} </p>
                    </div>
                    <div class="hidden md:flex justify-between mt-auto items-end w-full pr-8 self-center">
                        <p class="arrow hovertrans font-light text-darkblue-500 pt-4 pb-[0.2em]">
                            <a :href="props.href" class="cursor-none cursor-target inline-block h-[1em]"><i
                                    class="fa-light fa-angle-left"></i><i class="fa-light fa-angle-left"></i><i
                                    class="fa-light fa-angle-left"></i></a>
                        </p>
                        <p class="date pb-3"> Started in {{ props.date }} </p>
                    </div>
                </div>
                <div>
                    <button class="md:hidden border-2 w-[80vw] h-20 mb-[3vw] text-2xl cursor-target btn"
                        @click="clickhref">VIEW</button>
                </div>
            </SpotlightCard>
        </Magnet>
    </AnimatedContent>
</template>

<script setup lang="ts">
import SpotlightCard from "@/Templates/Bit/SpotlightCard.vue";
import Magnet from "@/Templates/Bit/Magnet.vue";
import AnimatedContent from "./Bit/AnimatedContent.vue";
import { ref } from 'vue';

const card = ref<HTMLElement | null>();
console.log("card", card)

const clickhref = () => {
    window.open(props.href, '_blank');
};

interface Props {
    imageSrc?: string,
    href?: string,
    title?: string,
    descs?: Array<string>,
    date?: string,
}

const props = withDefaults(defineProps<Props>(), {
    imageSrc: "#",
    title: "TITLE",
    href: "#",
    descs: () => ["DESC"],
    date: "0000.00.00"
});
</script>

<style scoped>
@media (width >=48rem) {
    .card-title {
        font-size: min(2.5vw, 2.5em);
    }
}


.date {
    font-size: max(0.8rem, min(1em, 1vw));
}

.arrow {
    font-size: max(3rem, min(3em, 3vw));
    /* bottom: 1.25rem; */
    transition: all 0.5s ease;
    padding-left: min(1em, 1.5vw);
    /* padding-top: -15px; */
}

.imgcard {
    z-index: 2;
    overflow: hidden;
}

@media (min-width: 48rem) {
    .imgcard {
        aspect-ratio: 1 / 1;
        overflow: hidden;
        width: min(28vw, 800px);
        min-width: 250px;
        display: flex;

    }

    .imgcard img {
        object-fit: cover;
    }
}


.arrow:hover {
    color: var(--color-primary-300);
}

.btn {
    max-width: 360px;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.btn:active {
    background-color: var(--color-darkblue-750);
    border-color: var(--color-primary-300);
    color: var(--color-primary-200);
}

.left-arrow {
    display: inline-block;
    padding: 0 3px;
}

.custom-inner * {
    will-change: transform;
}

.desc {
    line-height: 1.5em;
    font-size: max(1rem, min(1.5em, 2vw));
    /*
    @media (min-width: 2580px) {
        font-size: max(1.3rem, 1.6vw);
    } */

    padding-left: min(1em, 1.5vw);
    text-align: left;
    /* text-indent: 1em; */

    @media (min-width: 48rem) {
        text-align: left;
    }
}

.custom-spotlight-card {
    padding: 0;
    border: max(0.2vw, 2px) solid var(--color-darkblue-200);
    max-width: 400px;

    @media (min-width: 48rem) {
        max-width: 2000px;
        justify-content: space-between;
    }

    @media (width >=64rem) {
        height: auto;
    }

    display: flex;
    z-index: 5;
    transition: all 0.5s;
}

.custom-spotlight-card:hover {
    box-shadow: 0 0 2vw #D6DCFC33;
}

.cardimg {
    /* border-radius: calc(1.5rem - max(0.2vw, 2px) * 2); */
    transition: transform 0.7s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.cardimg:hover {
    transform: scale(1.05) rotate(2deg);
}
</style>