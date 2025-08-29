<script setup lang="ts">
import DotGrid from "./Templates/Bit/DotGrid.vue";
import NavBlock from "./Templates/NavBlock.vue";
import TargetCursor from "./Templates/Bit/TargetCursor.vue";
import Loading from "./Templates/Loading.vue";
import MobileNavBlock from "./Templates/MobileNavBlock.vue";
import Footer from "@/Templates/Footer.vue";
console.log(`
   ____________________________________________________________________________________________________
  /   ______     ______     ______   ______     ______     __            ______     ______     ______  \\
 /   /\\  __ \\   /\\  ___\\   /\\__  _\\ /\\  == \\   /\\  __ \\   /\\ \\          /\\  ___\\   /\\  __ \\   /\\__  _\\  \\
 \\   \\ \\  __ \\  \\ \\___  \\  \\/_/\\ \\/ \\ \\  __<   \\ \\  __ \\  \\ \\ \\____     \\ \\ \\____  \\ \\  __ \\  \\/_/\\ \\/   \\
  \\   \\ \\_\\ \\_\\  \\/\\_____\\    \\ \\_\\  \\ \\_\\ \\_\\  \\ \\_\\ \\_\\  \\ \\_____\\     \\ \\_____\\  \\ \\_\\ \\_\\    \\ \\_\\    \\
   \\   \\/_/\\/_/   \\/_____/     \\/_/   \\/_/ /_/   \\/_/\\/_/   \\/_____/      \\/_____/   \\/_/\\/_/     \\/_/    /
    \\____________________________________________________________________________________________________/
`);

import { provide, watch, ref, onMounted, onBeforeUnmount } from 'vue'
import { VueLenis, useLenis } from 'lenis/vue' // Also available as global imports, no need to import them manually
const lenisOptions = {
  // lenis options (optional)
}

const lenis = useLenis((lenis) => {
  // called every scroll
})

provide('lenis', lenis)
watch(
  lenis,
  (lenis) => {
    // lenis instance
  },
  { immediate: true }
)

// ---------------------- //



onBeforeUnmount(() => {
})



const switchClass = (id: string, className: string) => {
  const el = document.getElementById(id)
  if (el?.classList.contains(className)) {
    el.classList.remove(className)
  } else {
    el?.classList.add(className)
  }
}

const beleft = () => {
  switchClass('mobile-nav', 'left')
}
</script>


<template>
  <Loading ref="loading"></Loading>
  <!-- Lenis -->
  <VueLenis root :options="lenisOptions" />
  <!-- Background -->
  <div class="cursor">
    <TargetCursor :spin-duration="2" :hide-default-cursor="true" />
  </div>
  <div class="w-full h-full fixed overflow-hidden z-[-10] bg-dots">
    <DotGrid :dot-size="10" :gap="64" base-color="#080A16" active-color="#343f66" :proximity="500" :speed-trigger="1000"
      :shock-radius="150" :shock-strength="-5" :max-speed="5000" :resistance="750" :return-duration="1.3"
      class-name="custom-dot-grid" />
  </div>
  <!-- Nav -->
  <div
    class="nav-container w-[100vw] lg:w-[100vw] top-0 text-darkblue-100 hidden md:block fixed z-[1000] border-darkblue-500 pointer-events-none">
    <NavBlock
      :navItems="[{ text: 'Home', href: '/' }, { text: 'About', href: '/about' }, { text: 'Contact', href: '/contact' }, { text: 'Links', href: '/links' }]" />
  </div>
  <!-- Mobile Nav -->
  <div
    class="overflow-hidden md:hidden text-darkblue-100 font-orbitron items-center text-2xl pl-4 pr-5 p-3 fixed bg-darkblue-900 border-b-2 w-full z-101 flex flex-row  justify-between">
    <p><i class="fa-regular fa-planet-ringed"></i> XME-HOME</p>
    <p><i class="fa-light fa-bars pr-3 transition-all relative top-[0.1em] active:text-primary-300" @click="beleft"></i>
    </p>
    <!-- <div class="w-[1.3rem] h-[1rem] mr-2" id="menu-mark" @click="beleft">
      <div class="xmark border-b-2 mb-1.5 relative" id="x1"></div>
      <div class="xmark border-b-2 mb-1.5" id="x2"></div>
      <div class="xmark border-b-2 mb-1.5 relative" id="x3"></div>
    </div> -->
  </div>
  <div id="mobile-nav"
    class="fixed w-[100vw] h-[100vh] overflow-hidden bg-darkblue-900 z-100 left-[100vw] mobile-nav-item md:hidden">
    <MobileNavBlock
      :navItems="[{ text: 'Home', href: '/' }, { text: 'About', href: '/about' }, { text: 'Contact', href: '/contact' }, { text: 'Links', href: '/links' }]" />
    <p class="text-darkblue-200 font-orbitron absolute bottom-0 w-full p-5 pb-3 text-center pointer-events-none">
      CREATING,
      DESIGNING
    </p>
  </div>
  <!-- Main -->
  <div class="overflow-hidden hide-scrollbar">
    <router-view class=""></router-view>
  </div>

</template>

<style scoped>
.mobile-nav-item {
  transition: all 0.7s cubic-bezier(0.215, 0.610, 0.355, 1);
}


.xmark {
  transition: all 0.5s;
}

.rt {
  rotate: 45deg;
  position: relative;
  transform: translateY(50%);
  left: 0%;
  /* transform: translate(0, -50%); */
  margin-bottom: 0;
}

.nav-container {
  background: linear-gradient(to top, #0000, #080A16bb);
}

.rl {
  position: relative;
  /* top: 30%; */
  left: 0%;
  rotate: -45deg;
}

.left {
  left: 0 !important
}

.cursor {
  @media (pointer: coarse) {
    display: none;
  }

  @media (pointer: fine) {
    display: block;
  }
}
</style>