<template>
    <footer
        class="font-orbitron font-light bg-darkblue-850 mt-[20vh] flex text-center flex-col items-center border-t-2 pt-5 pb-5 justify-between relative w-full bottom-0 border-darkblue-600">
        <p class="w-full copyright">© 2025 - {{ curYear }}
            <i class="fa-regular fa-star fa-spin"></i>
            xzadudu179 All rights reserved
        </p>
        <p>Powered by Vue 3</p>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const curYear = ref(new Date().getFullYear());
</script>

<style scoped>
footer p {
    padding: 0.3rem 0;
    color: var(--color-darkblue-300);
}
</style>