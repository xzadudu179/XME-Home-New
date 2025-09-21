<template>
    <FadeContent :blur="true" :duration="1000" :delay="100" :threshold="0" :always-play="false" :initial-opacity="0"
        easing="ease-out">
        <Waline :serverURL="serverURL" :path="props.path ?? path" lang="en"
            :emoji="['https://image.179.life/deon-emoji', 'https://image.179.life/179-emoji']" :wordLimit="500"
            class="waline font-normal" :locale="{
                placeholder: 'Message here...',
                admin: 'ADMIN',
                sticky: 'PINNED',
                hottest: 'Popular',
                latest: 'Newest',
                unsticky: 'UNPINNED',
                word: ''
            }" />
    </FadeContent>
</template>
<script setup lang="ts">
import { Waline } from '@waline/client/component';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import FadeContent from './Bit/FadeContent.vue';
import '@waline/client/style';

const props = defineProps({
    path: {
        type: String,
        required: false,
        default: ""
    },
    serverURL: {
        type: String,
        required: false,
        default: "https://xmehome.comment.179.life/"
    },
})

const serverURL = props.serverURL;
const path = computed(() => window.location.hostname + useRoute().path);
// console.log(path)


function addCursorClass(els: NodeListOf<Element>) {
    for (let index = 0; index < els.length; index++) {
        const element = els[index];
        element.classList.add("cursor-target")
    }
}
onMounted(() => {
    const classNames = ['wl-action', 'wl-btn', 'wl-login-nick', 'wl-logout-btn'];
    const selector = classNames.map(name => `.${name}`).join(', ');
    const actions = document.querySelectorAll(selector + ", .wl-sort li")
    addCursorClass(actions)
    const gif = document.querySelector('[title="GIF"]');
    if (gif) gif.remove();
    const gifPopup = document.querySelector('.wl-gif-popup');
    if (gifPopup) gifPopup.remove();
    // const wrappers = document.querySelectorAll('.wl-tab-wrapper, .wl-gallery')
})



</script>

<style>
.waline {
    letter-spacing: 0.12em;
    transition: all 0.3s;
}

.wl-card .wl-badge {
    padding-left: 0.4em;
    width: auto;
}

.wl-like[title="Cancel like"] svg path {
    fill: var(--color-xme-red-300);
}

.verified-icon path {
    fill: var(--color-primary-300);
}

.wl-tabs {
    border-top: 2px solid var(--color-dark-600) !important;
}

.wl-tabs .active {
    /* border: none !important; */
    border-left: none !important;
    border-right: none !important;
    border-bottom: 2px solid var(--color-primary-300) !important;
    /* border-color: var(--color-dark-500) !important; */
    border-radius: 0 !important;
    /* background-color: var(--color-dark-750) !important; */
}

.wl-tab .wl-emoji {
    max-width: 2em !important;
    width: 4em !important;
    height: inherit !important;
    max-height: 2em !important;
}

.wl-empty {
    font-weight: normal;
    color: var(--color-dark-200);
}

.wl-count {
    font-weight: normal;
    /* font-family: var(--font-melete);
    letter-spacing: -0.2em; */
}

.wl-emoji-popup button {
    max-width: 3.5em !important;
    width: 5em !important;
    max-height: 3.5em !important;
}

.wl-emoji {
    max-width: 3em !important;
    width: 6em !important;
    height: inherit !important;
    max-height: 3em !important;
}

code {
    font-family: var(--font-firacode) !important;
    font-size: 1em !important;
    letter-spacing: normal;
    color: var(--color-dark-100) !important;

}

.wl-quote .wl-card-item {
    padding-left: 15px;
}

.wl-content pre {
    /* background-color: var(--color-dark-800); */
    background-color: #131522B7;
    backdrop-filter: blur(10px);
    border: 2px solid var(--color-dark-500);
    border-top: 0;
    border-bottom: 0;
    transition: all 0.3s;
    border-radius: 20px;
}

.wl-content pre:hover {
    border-color: var(--color-dark-200);
}

code .comment {
    color: var(--color-dark-400) !important;
}

/* .wl-badge {
    display: none !important;
} */

.wl-editor {
    resize: none;
}

.wl-nick {
    /* font-weight: bold !important; */
}

.wl-panel:has(textarea:focus) {
    border-color: var(--color-primary-200);
}

.wl-comment {
    background-color: #080A16B2 !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px);
}

.wl-panel {
    padding-left: 20px;
    background-color: #00000000;
    padding-right: 15px;
    border: 2px solid var(--color-dark-500);
    transition: all 0.3s;
    border-top: none;
    border-bottom: none;
}

.wl-quote {
    border-left: 2px dashed !important;
    border-color: var(--color-dark-600) !important;
}

.wl-avatar {
    margin-right: 14px;
}

.wl-panel * {
    background: transparent !important;
}

.wl-preview * {
    font-weight: normal !important;
}

button.primary {
    background-color: transparent !important;
    border: 1px solid;
    color: var(--waline-theme-color) !important;
    border-color: var(--waline-theme-color) !important;
}

button.primary:hover,
button.primary:active {
    color: var(--waline-active-color) !important;
}

.wl-delete svg path {
    fill: var(--color-xme-red-300) !important;
}

.wl-card {
    border: none;
}

.wl-user-avatar,
.wl-login-nick img {
    user-select: none;
    border-radius: 25% !important;
    border: 2px solid var(--color-primary-100) !important;
}

.wl-emoji-popup {
    border: 2px solid var(--color-dark-500);
    background: #080A1655 !important;
    backdrop-filter: blur(5px) !important;
    z-index: 10;
    border-top: 0;
    border-bottom: 0;
}

.wl-info .wl-btn {
    border-color: var(--color-dark-300);
}

.wl-info .wl-btn:hover {
    border-color: var(--color-primary-100);
}

.wl-meta-head {
    margin-bottom: 1em;
    margin-top: 1.5em;
}

.wl-gif-popup {
    background: #080A1655;
    backdrop-filter: blur(5px);
}

.wl-card-item {
    /* z-index: 5; */
    /* background: #080A1655; */
    /* backdrop-filter: blur(5px); */
    /* border: 2px solid var(--color-dark-500); */
    /* padding-top: 20px; */
    /* padding-bottom: 20px; */
    /* margin-bottom: 1.4em; */
    border-top: 0;
    border-bottom: 0;
    border-radius: 20px;
}

.wl-action,
.wl-nick {
    transition: all 0.2s;
}

.wl-header-item {
    border: none !important;
}

.wl-header-item input {
    border: 2px solid var(--color-dark-600);

    height: 20px;
    width: 80%;
    display: flex;
    align-self: center;
    padding-left: 10px;
    padding-right: 10px;
    border-top: 0;
    border-bottom: 0;
    border-radius: 10px;

    @media (width <=48rem) {
        /* border: none;
        border-bottom: 2px solid var(--color-dark-600);
        border-radius: 0; */
        /* border-bottom: 2px solid var(--color-dark-600); */

    }
}

.wl-header {
    /* border-bottom: none; */
    padding-bottom: 5px;
    border-bottom: 2px dashed var(--color-dark-700);
}

.wl-header-item input:focus {
    border-color: var(--color-dark-400);
}

.wl-header-item label {
    color: var(--color-primary-200);
    transition: color 0.3s;
    /* font-weight: normal; */
}

.wl-header-item:has(input:focus) label {
    color: var(--color-primary-100);
}

.wl-text-number {
    font-size: min(0.75em, 2vw) !important;
}

a {
    /* word-break: break-all; */
    overflow-wrap: anywhere !important;
}

@media (width <=48rem) {
    .wl-comment {
        flex-direction: column;

    }

    .wl-card-item {
        /* flex-direction: column; */
    }

    .wl-panel {
        margin: auto;
        padding: 0;
    }

    .item3 {
        padding: 8px 15px !important;
    }

    .wl-input,
    .wl-header-item label {
        font-size: max(min(1em, 1.2vw), 0.55rem) !important;
    }


    .wl-login-info {
        display: flex;
        /* width: 100%; */
        margin: auto;
        /* justify-items: center; */
        align-items: center;
        margin-bottom: 10px;
        font-size: larger;
        max-width: 100%;
    }

    .wl-info .wl-btn {
        padding: 5px;
        width: min(6em, 100px) !important;
        width: auto;
        font-size: min(2.5vw, 1rem);
    }


    .wl-info {
        margin-top: 8px;
    }

    .wl-count {
        font-size: min(5vw, 1em);
    }

    .wl-time {
        font-size: 0.7rem !important;
    }

    .wl-power {
        font-size: 0.7rem;
    }

    .wl-like {
        font-size: 1rem;
    }

    .wl-comment-actions {
        float: left !important;
    }

    .wl-sort {
        display: flex;
        flex-direction: column;
        text-align: right;
        font-size: 1.2rem;
    }

    .wl-avatar {
        margin: 0;
        margin-right: 10px;
    }
}

@media (width < 580px) {
    .wl-footer {
        flex-direction: column;
    }

    .wl-user {
        margin-right: 3vw !important;
    }

    .wl-badge {
        font-size: min(3vw, 0.9rem) !important;
    }

    .wl-time {
        display: block;
    }

    .wl-user-avatar {
        width: 9vw !important;
        height: 9vw !important;
        border-radius: 3vw !important;
    }

    .wl-content {
        font-size: min(3.5vw, 1rem) !important;
    }

    .wl-content pre {
        font-size: 1rem !important;
        letter-spacing: normal;
    }

    .wl-input,
    .wl-header-item label {
        font-size: 0.7rem !important;
    }

    .wl-panel {
        width: 90%;
    }

    .wl-text-number {
        font-size: max(min(0.7em, 3vw), 0.4em) !important;
        letter-spacing: 0.15em;
    }
}


:root {
    /* 字体大小 */
    --waline-font-size: 1.2rem;

    /* 常规颜色 */
    --waline-white: var(--color-dark-50);
    --waline-light-grey: var(--color-dark-300);
    --waline-dark-grey: var(--color-dark-300);

    /* 主题色 */
    --waline-theme-color: var(--color-primary-200);
    --waline-active-color: var(--color-primary-100);

    /* 布局颜色 */
    --waline-color: var(--color-dark-50);
    --waline-bg-color: var(--color-dark-850);
    --waline-bg-color-light: var(--color-dark-850);
    --waline-bg-color-hover: var(--color-dark-700);
    --waline-border-color: var(--color-dark-600);
    --waline-disable-bg-color: transparent;
    --waline-disable-color: var(--color-dark-400);
    --waline-code-bg-color: var(--color-dark-800);

    /* 特殊颜色 */
    --waline-bq-color: var(--color-dark-300);

    /* 头像 */
    --waline-avatar-size: 3.45rem;
    --waline-m-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);

    /* 徽章 */
    --waline-badge-color: var(--color-primary-300);
    --waline-badge-font-size: 0.775em;

    /* 信息 */
    --waline-info-bg-color: var(--color-dark-850);
    --waline-info-color: var(--color-dark-400);
    --waline-info-font-size: 0.625em;

    /* 渲染选择 */
    --waline-border: 1px solid var(--waline-border-color);
    --waline-avatar-radius: 50%;
    --waline-box-shadow: none;
}

.wl-badge {
    margin-bottom: 0.7rem;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: var(--color-dark-50);
    transition: background-color 5000s ease-in-out 0s;
}

/* 根据用户设置 ↓ */
darkmode-selector {
    /* 常规颜色 */
    --waline-white: var(--color-dark-850);
    --waline-light-grey: var(--color-dark-400);
    --waline-dark-grey: var(--color-dark-600);

    /* 布局颜色 */
    --waline-color: var(--color-dark-300);
    --waline-bg-color: var(--color-dark-850);
    --waline-bg-color-light: var(--color-dark-850);
    --waline-bg-color-hover: var(--color-dark-700);
    --waline-border-color: var(--color-dark-600);
    --waline-disable-bg-color: transparent;
    --waline-disable-color: var(--color-dark-400);
    --waline-code-bg-color: var(--color-dark-800);

    /* 特殊颜色 */
    --waline-bq-color: var(--color-dark-200);

    /* 其他颜色 */
    --waline-info-bg-color: var(--color-dark-850);
    --waline-info-color: var(--color-dark-200);
}
</style>