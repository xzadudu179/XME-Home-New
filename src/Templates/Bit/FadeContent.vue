<template>
    <div ref="elementRef" :class="className" :style="{
        opacity: inView ? 1 : initialOpacity,
        transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(10px)') : 'none'
    }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue';

interface Props {
    blur?: boolean;
    duration?: number;
    easing?: string;
    delay?: number;
    threshold?: number;
    initialOpacity?: number;
    className?: string;
    alwaysPlay?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    blur: false,
    duration: 1000,
    easing: 'ease-out',
    delay: 0,
    threshold: 0.1,
    initialOpacity: 0,
    className: '',
    alwaysPlay: false
});

const inView = ref(false);
const elementRef = useTemplateRef<HTMLDivElement>('elementRef');
let observer: IntersectionObserver | null = null;

onMounted(() => {
    const element = elementRef.value;
    if (!element) return;
    if (props.alwaysPlay) {
        setTimeout(() => {
            inView.value = true;
        }, props.delay);
    } else {
        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    observer?.unobserve(element);
                    setTimeout(() => {
                        inView.value = true;
                    }, props.delay);
                }
            },
            { threshold: props.threshold }
        );
        observer.observe(element);
    }
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
