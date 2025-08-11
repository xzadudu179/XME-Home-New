<script setup lang="ts">
import DotGrid from "./Templates/Bit/DotGrid.vue";
</script>

<template>
  <!-- Background -->
  <div class="w-full h-full fixed overflow-hidden z-[-10]">
    <DotGrid :dot-size="8" :gap="64" base-color="#0000" active-color="#343f66" :proximity="500" :speed-trigger="1000"
      :shock-radius="150" :shock-strength="5" :max-speed="5000" :resistance="750" :return-duration="1.3"
      class-name="custom-dot-grid" />
  </div>
  <!-- Main -->
  <router-view></router-view>

</template>
