<template>
    <Magnet :padding="120" :disabled="false" :magnet-strength="3" active-transition="transform 0.2s ease-out"
        inactive-transition="transform 0.6s ease-in-out" wrapper-class-name="custom-wrapper"
        inner-class-name="custom-inner">
        <SpotlightCard class-name="custom-spotlight-card" spotlight-color="#97DAFF44">

        </SpotlightCard>
    </Magnet>
</template>

<script setup lang="ts">
import SpotlightCard from "@/Templates/Bit/SpotlightCard.vue";
import Magnet from "@/Templates/Bit/Magnet.vue";

interface Props {
    imageSrc?: string,
    title?: string,
    desc?: string,
}

const props = withDefaults(defineProps<Props>(), {
    imageSrc: "",
    title: "TITLE",
    desc: "DESCRIBE"
});
</script>