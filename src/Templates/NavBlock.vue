<script setup lang="ts">
interface NavItem {
    text: string;
    href: string;
}
const props = defineProps<{
    navItems: NavItem[];
}>();
</script>

<template>
    <section class="w-full">
        <ul
            class="text-darkblue-50 font-orbitron font-light select-none text-[1.3em] flex justify-center lg:justify-normal items-center ml-10">
            <li class="lg:mr-5 font-orbitron font-normal text-3xl"><i class="fa-regular fa-planet-ringed"></i> XME-HOME
            </li>
            <li v-for="item in props.navItems" @click="$router.push(item.href)"
                class="pointer-events-auto inline-block lg:p-2 p-[0.6vw] pt-1 pb-1 cursor-target mt-5 mb-5 lg:m-3 lg:mt-3 lg:mb-3 mr-[2vw] ml-[2vw] active:text-darkblue-200 transition-all hover:text-shadow-darkblue-100 litem">
                <p>{{ item.text }}</p>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.litem:hover {
    text-shadow: 0 0 8px;
}
</style>