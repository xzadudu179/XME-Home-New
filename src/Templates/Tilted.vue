<template>
    <div :class="cardClass" class="tilted" ref="cardRef" @mousemove="throttledHandleMouse"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" :style="cardStyle">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { throttle } from 'lodash';

const props = defineProps<{
    width: string;
    height: string;
    rotateAmplitude: number;
    cardClass: string;
}>()

const cardRef = ref<HTMLElement | null>(null);

const state = reactive({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
});

const rotateAmplitude = props.rotateAmplitude; // 倾斜最大角度
const throttledHandleMouse = throttle(handleMouse, 16);

const cardStyle = computed(() => ({
    transform: `perspective(800px) rotateX(${state.rotateX}deg) rotateY(${state.rotateY}deg) scale(${state.scale})`,
    transition: state.scale === 1 ? 'transform 0.3s ease' : 'transform 0.1s ease',
    height: props.height,
    width: props.width
}));

function handleMouse(e: MouseEvent) {
    if (!cardRef.value) return;

    const rect = cardRef.value.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    state.rotateX = (-offsetY / (rect.height / 2)) * rotateAmplitude;
    state.rotateY = (offsetX / (rect.width / 2)) * rotateAmplitude;
}

function handleMouseEnter() {
    state.scale = 1.05;
}

function handleMouseLeave() {
    throttledHandleMouse.cancel();
    state.rotateX = 0;
    state.rotateY = 0;
    state.scale = 1;
}
</script>

<style scoped>
.card {
    will-change: transform;
    cursor: pointer;
}
</style>
