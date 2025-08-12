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
            class="text-darkblue-50 font-orbitron font-light select-none text-[1.3em] flex justify-center items-center ml-10">
            <li class="mr-5 font-orbitron font-normal text-3xl"><i class="fa-regular fa-planet-ringed"></i> XME-HOME
            </li>
            <li v-for="item in props.navItems" @click="$router.push(item.href)"
                class="inline-block p-5 pt-2 pb-2 cursor-target m-5 active:text-darkblue-200 transition-all hover:text-shadow-darkblue-100 litem">
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