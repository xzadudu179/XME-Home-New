<script setup lang="ts">
import TextType from "./Templates/Bit/TextType.vue";
import AnimatedContent from "./Templates/Bit/AnimatedContent.vue";
import NavBlock from "./Templates/NavBlock.vue";
import DotGrid from "./Templates/Bit/DotGrid.vue";
</script>

<template>
  <!-- Background -->
  <div class="w-full h-full fixed overflow-hidden z-[-10]">
    <DotGrid :dot-size="8" :gap="64" base-color="" active-color="#343f66" :proximity="500" :speed-trigger="1000"
      :shock-radius="150" :shock-strength="5" :max-speed="5000" :resistance="750" :return-duration="1.3"
      class-name="custom-dot-grid" />
  </div>
  <!-- Main -->
  <NavBlock />
  <div
    class="w-full h-[100vh] flex-col flex justify-center content-center items-center font-electrolize text-darkblue-50 absolute top-0 pb-[100px]"
    style="font-size: min(8rem, 5vw);">
    <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
      :initial-opacity="0" :animate-opacity="true" :scale="1.1" :threshold="0.1" :delay="0.1">
      <p>CREATING <span class="text-primary-200">DREAMS</span></p>
    </AnimatedContent>
    <AnimatedContent :distance="100" direction="vertical" :reverse="false" :duration="1.5" ease="power3.out"
      :initial-opacity="0" :animate-opacity="true" :scale="1.2" :threshold="0.1" :delay="0.3">
      <p>ACROSS THE <span class="text-primary-200">WORLD</span></p>
    </AnimatedContent>
    <!-- <div class="text-2xl font-firacode">
      <TextType :text="['Hello World.', 'Design World.']" :typingSpeed="100" :pauseDuration="3000"
        :showCursor="true" :cursorBlinkDuration="0.5"
        :textColors="['--color-darkblue-50', '--color-darkblue-100', '--color-darkblue-300']" cursorCharacter="_" />
    </div> -->
    <i class="fa-regular fa-angle-down"></i>
  </div>
</template>

<style scoped></style>
