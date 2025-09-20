<template>
    <footer
        class="font-orbitron font-light md:text-xl text-[3vw] bg-dark-850 flex text-center flex-col items-center border-t-2 pt-[2vw] pb-[2vw] md:pt-5 md:pb-5 justify-between relative w-full bottom-0 border-dark-600"
        :style="{ marginTop: props.marginTop }">
        <p class="w-full copyright">© 2025 - {{ curYear }}
            <i class="fa-regular fa-star fa-spin"></i>
            xzadudu179 All rights reserved
        </p>
        <p><a href="https://icp.gov.moe/?keyword=20251790" class="hover:text-primary-200"
                target="_blank">萌ICP备20251790号</a></p>
        <p>
            <a class="hover:text-primary-200" target="_blank" href="https://travel.moe/go.html?travel=on">
                <i class="fa-light fa-meteor"></i>
                MoeTravel
                <i class="fa-regular fa-chevron-right"></i>
                <i class="fa-regular fa-chevron-right"></i>
            </a>
        </p>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const curYear = ref(new Date().getFullYear());
const props = defineProps({
    marginTop: {
        type: String,
        required: false,
        default: "20vh"
    },
})
</script>

<style scoped>
footer {
    z-index: 150;

}

footer a {
    transition: all 0.3s;
}

footer p {
    padding: 0.3rem 0;
    color: var(--color-dark-300);
}
</style>