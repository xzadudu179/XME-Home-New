<script setup lang="ts">
import { useRouter } from 'vue-router'
interface NavItem {
    text: string;
    href: string;
}
const props = defineProps<{
    navItems: NavItem[];
}>();

const router = useRouter()

const leave = (href: string) => {
    const el = document.getElementById("mobile-nav")
    if (el?.classList.contains("left")) {
        el.classList.remove("left")
    }
    router.push(href)
}
</script>

<template>
    <ul
        class="text-dark-50 font-orbitron font-light select-none text-[1.4em] flex flex-col justify-center items-center">
        <li v-for="item in props.navItems" @click="leave(item.href)"
            class="active:bg-dark-600 flex justify-between items-center relative top-[58px] pr-6 w-full cursor-target border-b-1 border-dark-400 p-4.5 lg:m-3 lg:mt-3 lg:mb-3 mr-[2vw] ml-[2vw] active:text-dark-200 transition-all hover:text-shadow-dark-100 litem">
            <p>{{ item.text }}</p>
            <p><i class="fa-light fa-angle-right"></i></p>
        </li>
    </ul>
</template>

<style scoped>
.litem:hover {
    text-shadow: 0 0 8px;
}
</style>