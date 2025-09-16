<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
interface NavItem {
    text: string;
    href: string;
}
const props = defineProps<{
    navItems: NavItem[];
}>();

const goToLink = (href: string) => {
    if (/^https?:\/\//.test(href)) {
        // 外部链接
        window.location.href = href
    } else {
        router.push(href)
    }
}


</script>

<template>
    <section class="w-full">
        <ul
            class="text-dark-50 font-orbitron font-light select-none text-[1.3em] flex justify-center lg:justify-normal items-center ml-10">
            <li class="lg:mr-5 font-orbitron font-normal text-3xl"><i class="fa-regular fa-planet-ringed"></i> XME-HOME
            </li>
            <li v-for="item in props.navItems" @click="goToLink(item.href)"
                class="pointer-events-auto inline-block lg:p-2 p-[0.6vw] pt-1 pb-1 cursor-target mt-5 mb-5 lg:m-3 lg:mt-3 lg:mb-3 mr-[2vw] ml-[2vw] active:text-dark-200 transition-all hover:text-shadow-dark-100 litem">
                <p>{{ item.text }} <i v-if="/^https?:\/\//.test(item.href)"
                        class="fa-regular fa-arrow-up-right-from-square"></i></p>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.litem:hover {
    text-shadow: 0 0 8px;
}

.litem {
    letter-spacing: 0.05em;
}
</style>