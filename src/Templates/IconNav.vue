<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: false,
  },
  padding: {
    type: String,
    required: false,
  }
})
const fontStyle = computed(() => `font-size: ${props.size ? props.size : 1}em`);
const iconPadding = computed(() => `padding-left: ${props.padding ? props.padding : 0.2}em`)
</script>

<template>
  <span class="iconitem" :style="fontStyle">
    <i :class="iconClass"></i>
    <span :style="iconPadding">{{ name }}</span>
  </span>
</template>

<style scoped>
.iconitem {
  padding: 0 5px;
}

/* .iconitem i {
    line-height: 1em;
  } */
/* @media (max-width: 600px) {
    .iconitem span {
      display: none;
    }
  } */
</style>