<script setup lang="ts">
import SpotlightCard from './Bit/SpotlightCard.vue';
import Magnet from './Bit/Magnet.vue';
import LoadingImg from './LoadingImg.vue';
import AnimatedContent from './Bit/AnimatedContent.vue';
import Comment from './Comment.vue';
import { number } from 'motion-v';
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
                class-name="custom-spotlight-card rounded-[2vw] card color-on-hover md:rounded-[1vw] lg:rounded-[15px] overflow-hidden border-2 md:border-[0.4vw] lg:border-4 border-dark-600 hover:border-dark-500 mb-[2vw] mt-[2vw]"
                spotlight-color="#3D78F232">
                <div class="h-[30vw] md:h-[15vw] max-h-[270px] min-h-[100px] border-b-3 border-dark-700 thumbnail"
                    v-if="pinned && thumbnail !== ''"
                    :style="{ 'background-image': `url(${props.thumbnail})`, 'backgroundPosition': `center ${props.customPosition}` }">
                </div>
                <div
                    class="max-h-[300px] w-[90vw] md:w-[40vw] max-w-[800px] justify-between flex text-[5vw] bg-dark-800 md:text-4xl content">
                    <div class="avatar">
                        <LoadingImg :src="props.avatar"
                            img-class="w-full md:w-auto md:h-full overflow-hidden max-w-max select-none flex-none"
                            class="max-h-[20vw] h-[20vw] max-w-[20vw] w-[20vw] cardimg select-none overflow-hidden flex items-center justify-center">
                        </LoadingImg>
                    </div>
                    <div class="ml-[3vw] flex flex-col justify-evenly  text-content">
                        <p
                            class="text-[3.5vw] min-h-[10vw] md:min-h-0 content-title flex flex-col justify-center font-light ">
                            <span class=""><span class="inline-hovertrans">{{ props.name }}</span>
                            </span>
                        </p>
                        <hr class="border-dark-600 border-t-1 md:border-t-2 lg:border-t-3">
                        <div class=" h-[9vw] md:h-auto flex flex-col justify-center">
                            <p class="text-[3vw] text-dark-200 desc">
                                {{ props.desc }}
                            </p>
                        </div>
                    </div>
                    <div class="justify-center items-center text-center m-auto flex flex-col">
                        <p class="text-dark-400">
                            <a :href="props.href"
                                class="cursor-none href text-[9vw] md:text-[8vw] active:text-primary-200 hover:text-primary-200"
                                target="_blank">
                                <span class="hidden md:inline hg:inline">
                                    <i class="fa-light fa-angle-right"></i>
                                </span>
                                <i class="fa-light fa-angle-right"></i>
                                <i class="fa-light fa-angle-right"></i>
                            </a>
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
    letter-spacing: 0.04em;


    /* border: none; */
    @media (width >=48rem

        /* 768px */
    ) {
        margin: min(calc(var(--spacing) * 5), 1.2vw)
            /* 1.25rem = 20px */
        ;
    }
}

.text-content {
    width: 9.9em;

    @media (width >=48rem) {
        margin-left: min(calc(var(--spacing) * 10), 1.8vw);
        width: min(9.9em, 17vw);
    }

}

.content-title {
    @media (width >=48rem

        /* 768px */
    ) {
        font-size: min(2.1rem, 1.7vw)
            /* 33.6px */
        ;
    }
}

.desc {
    @media (width >=48rem

        /* 768px */
    ) {
        font-size: min(1.27rem, 1.2vw)
            /* 20.32px */
        ;
    }
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
    @media (width >=48rem

        /* 768px */
    ) {
        height: min(180px, 10vw);
        max-height: min(180px, 10vw);
        width: ;
        : min(180px, 10vw);
        max-width: min(180px, 10vw);
    }

    /* border-radius: calc(1.5rem - max(0.2vw, 2px) * 2); */
    transition: transform 0.7s cubic-bezier(0.215, 0.610, 0.355, 1);
    z-index: 5;
    object-fit: cover;
}

.avatar:hover .cardimg {
    transform: scale(1.05) rotate(2deg);
}

.href {
    @media (width >=48rem

        /* 768px */
    ) {
        font-size: min(6rem, 4.5vw)
            /* 96px */
        ;
    }

    transition: all 0.3s;
}

.href:hover {
    text-shadow: 0 0 10px;
}
</style>
