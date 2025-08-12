<script setup lang="ts">
import DotGrid from "./Templates/Bit/DotGrid.vue";
import NavBlock from "./Templates/NavBlock.vue";
import TargetCursor from "./Templates/Bit/TargetCursor.vue";
</script>

<template>
  <!-- Background -->
  <div class="cursor">
    <TargetCursor :spin-duration="2" :hide-default-cursor="true" />
  </div>
  <div class="w-full h-full fixed overflow-hidden z-[-10]">
    <DotGrid :dot-size="10" :gap="64" base-color="#080A16" active-color="#343f66" :proximity="500" :speed-trigger="1000"
      :shock-radius="150" :shock-strength="-5" :max-speed="5000" :resistance="750" :return-duration="1.3"
      class-name="custom-dot-grid" />
  </div>
  <div class="w-full lg:w-auto absolute top-0 text-darkblue-100 hidden md:block">
    <NavBlock
      :navItems="[{ text: 'Home', href: '/' }, { text: 'About', href: '/about' }, { text: 'Projects', href: '/projects' }, { text: 'Contact', href: '/contact' }]" />
  </div>
  <!-- Main -->
  <router-view></router-view>

</template>

<style scoped>
.cursor {
  @media (pointer: coarse) {
    display: none;
  }

  @media (pointer: fine) {
    display: block;
  }
}
</style>