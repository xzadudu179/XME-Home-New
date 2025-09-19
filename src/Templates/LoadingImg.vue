<script setup lang="ts">
import { ref } from "vue";

interface Props {
    src: string;
    imgClass?: string;
    alt?: string;
}

const props = defineProps<Props>();

const isLoaded = ref(false);

function handleLoad() {
    // console.log("图片已加载成功")
    isLoaded.value = true;
}
</script>

<template>
    <div class="image-container">
        <img src="../assets/img/img-loading.webp" :class="props.imgClass" v-if="!isLoaded" />
        <img v-show="isLoaded" :src="props.src" :alt="props.alt" :class="props.imgClass" @load="handleLoad" />
    </div>
</template>

<style scoped>
.image-container {
    position: relative;
}

.skeleton {}
</style>
