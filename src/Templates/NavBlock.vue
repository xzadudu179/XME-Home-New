<script setup lang="ts">
const props = defineProps({
    navItems: {
        type: Array,
        required: true
    },
})
</script>

<template>
    <section>
        <ul class="text-darkblue-50">
            <li v-for="item in navItems">
                
            </li>
        </ul>
    </section>
</template>