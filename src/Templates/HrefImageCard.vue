<template>
    <FadeContent :blur="true" :duration="1000" :delay="props.delay" :threshold="0" :initial-opacity="0"
        :always-play="props.alwaysPlay" easing="ease-out">
        <TiltedCard :image-src="props.image" alt-text="Fly To Meteor" caption-text="Click to visit"
            container-height="280px" container-width="280px" image-height="280px" image-width="280px"
            :rotate-amplitude="7" :scale-on-hover="1.05" :show-mobile-warning="false" :show-tooltip="false"
            class="m-auto mt-10 color-on-hover select-none md:ml-5 md:mr-5" :display-overlay-content="true"
            :overlay-content="true">
            <template #overlay>
                <div class="m-5 w-[300px] h-full">
                    <p class="overlay-content shadow-2xs rounded-xl text-[0.9rem] p-2 inline-block">
                        {{ props.name }}
                    </p>
                </div>
                <div
                    class="overlay-content hoverlight hover:text-primary-200 active:text-primary-200 shadow-2xs rounded-xl text-[0.9rem] p-2 absolute top-56 left-45 cursor-target cursor-none">
                    <a :href="props.href" class="cursor-none">visit &gt;&gt;</a>
                </div>
            </template>
        </TiltedCard>
    </FadeContent>
</template>

<script setup lang="ts">
import { number } from 'motion-v';
import FadeContent from './Bit/FadeContent.vue';
import TiltedCard from './Bit/TiltedCard.vue';
const props = defineProps({
    name: {
        type: String,
        required: false,
        default: ""
    },
    image: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true,
    },
    delay: {
        type: Number,
        required: false,
        default: 300,
    },
    alwaysPlay: {
        type: Boolean,
        required: false,
        default: false,
    }
})
</script>

<style scoped>
.overlay-content {
    background-color: #1C1F37DD;
    transition: color 0.3s;
}
</style>