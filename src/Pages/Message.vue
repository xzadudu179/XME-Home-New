<script setup lang="ts">
import { eventBus } from "@/router/eventbus";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import Comment from '@/Templates/Comment.vue';
// import { Waline } from '@waline/client'

onMounted(() => {
    // new Waline({
    //     el: '#waline-container',
    //     serverURL: 'https://你的 Waline 服务地址', // 必填
    //     placeholder: '来说点什么吧～',
    //     lang: 'zh-CN',
    //     pageSize: 10,
    //     emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji'],
    //     meta: ['nick', 'mail'], // 显示昵称和邮箱
    //     // 如果你想使用 GitHub 登录等可配置：
    //     // login: 'enable'
    // })
})

onMounted(() => {
    eventBus.emit("page-ready", "message");
});


</script>

<template>
    <div class="text-5xl font-orbitron text-dark-200 text-center">
        <h2 class="mt-50 text-4xl md:text-8xl">/ WORK IN PROCESS /</h2>
        <h2 class="pt-5">...页面制作中...</h2>
        <!-- <Comment></Comment> -->
    </div>
</template>