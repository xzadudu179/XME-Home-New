<script setup lang="ts">
import SpotlightCard from './Bit/SpotlightCard.vue';
import Magnet from './Bit/Magnet.vue';
import LoadingImg from './LoadingImg.vue';
import AnimatedContent from './Bit/AnimatedContent.vue';
import Comment from './Comment.vue';
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: false,
        default: ""
    },
    avatar: {
        type: String,
        required: true
    },
    customPosition: {
        type: String,
        required: false,
        default: "center"
    },
    thumbnail: {
        type: String,
        required: false,
        default: ""
    },
    pinned: {
        type: Boolean,
        required: false,
        default: false,
    },
    disableMaganet: {
        type: Boolean,
        required: false,
        default: false,
    },
    href: {
        type: String,
        required: true,
    },
    delay: {
        type: Number,
        required: false,
        default: 0.2,
    },
    alwaysPlay: {
        type: Boolean,
        required: false,
        default: false,
    }
})
</script>

<template>
    <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
        :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0" :always-play="props.alwaysPlay"
        :delay="props.delay">
        <Magnet class="" :padding="200" :disabled="props.disableMaganet" :magnet-strength="60"
            active-transition="transform 0.6s ease-out" inactive-transition="transform 0.6s ease-in-out"
            wrapper-class-name="custom-wrapper" inner-class-name="custom-inner">
            <SpotlightCard
                class-name="custom-spotlight-card rounded-[2vw] card color-on-hover md:rounded-[15px] overflow-hidden border-2 md:border-4 border-dark-600 hover:border-dark-500 md:m-7 mb-[2vw] mt-[2vw]"
                spotlight-color="#3D78F232">
                <div class="h-[20vw] max-h-[200px] border-b-3 border-dark-700 thumbnail"
                    v-if="pinned && thumbnail !== ''"
                    :style="{ 'background-image': `url(${props.thumbnail})`, 'backgroundPosition': `center ${props.customPosition}` }">
                </div>
                <div
                    class="max-h-[300px] w-[90vw] lg:w-[80vw] max-w-[740px] justify-between flex text-[5vw] bg-dark-800 md:text-4xl content">
                    <div class="avatar">
                        <LoadingImg :src="props.avatar"
                            img-class="w-full md:w-auto md:h-full overflow-hidden max-w-max select-none flex-none"
                            class="max-h-[20vw] h-[20vw] max-w-[20vw] w-[20vw] md:max-h-[150px] cardimg md:h-[150px] md:max-w-[150px] md:w-[150px] select-none overflow-hidden flex items-center justify-center">
                        </LoadingImg>
                    </div>
                    <div class="ml-5 md:ml-10 pt-[2vw] md:pt-3 :w-auto w-[9.5em]">
                        <p class="md:mb-3 md:mt-2 text-[3vw] md:text-3xl font-light "><span class="hovertrans">{{
                            props.name }} </span></p>
                        <div class="pt-1 h-[9vw] md:h-auto">
                            <p
                                class="text-[3vw] border-t-2 pt-[1vw] md:pt-5 border-dark-600 text-dark-200 md:text-[1.27rem]">
                                {{ props.desc }}
                            </p>
                        </div>
                    </div>
                    <div class="justify-center items-center text-center m-auto flex">
                        <p class="text-dark-400"><a :href="props.href"
                                class="cursor-none href lg:text-[5rem] text-[9vw] md:text-[8vw] active:text-primary-200 hover:text-primary-200"
                                target="_blank"><span class="hidden md:inline"><i
                                        class="fa-light fa-angle-right"></i></span><i
                                    class="fa-light fa-angle-right"></i><i class="fa-light fa-angle-right"></i></a>
                        </p>
                    </div>
                </div>
            </SpotlightCard>
        </Magnet>
    </AnimatedContent>
</template>

<style scoped>
.custom-spotlight-card {
    padding: 0;
    transition: all 0.3s;

    /* border: none; */
}

.thumbnail {
    background-size: cover;
    /* background-position: center -60px; */
}

.card {
    transition: transform border 0.5s;
}

.card:hover {
    transform: scale(1.01);
}

.avatar {
    /* border: 5px solid; */
    border-right: 3px solid var(--color-dark-700);
    overflow: hidden;
}

.cardimg {
    /* border-radius: calc(1.5rem - max(0.2vw, 2px) * 2); */
    transition: transform 0.7s cubic-bezier(0.215, 0.610, 0.355, 1);
    z-index: 5;
    object-fit: cover;
}

.avatar:hover .cardimg {
    transform: scale(1.05) rotate(2deg);
}

.href {
    transition: all 0.3s;
}

.href:hover {
    text-shadow: 0 0 10px;
}
</style>
