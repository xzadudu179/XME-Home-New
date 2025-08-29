<script setup lang="ts">
import InfoItem from './InfoItem.vue';
import IconNav from './IconNav.vue';
import Tilted from './Tilted.vue';
</script>

<template>
    <Tilted width="800px" height="452.38px" :rotateAmplitude="4" card-class="card_tilt" :scale="true">
        <div class="card">
            <div class="avatar"></div>
            <div class="infos">
                <InfoItem>
                    <template #title>
                        NAME:
                    </template>
                    <h1 id="chac-name" class="text-primary-100 hovertrans">九镹-xzadudu179</h1>
                </InfoItem>
                <InfoItem>
                    <template #title>
                        DESC:
                    </template>
                    <p class="hovertrans">正在四处游荡中...</p>
                    <p class="hovertrans">想被别人发现，喜欢尝试新的事物</p>
                    <p class="hovertrans">喜欢太空、科幻、像素风格一类的东西~</p>
                    <p class="hovertrans">想做全栈，想展示自己的世界观</p>
                </InfoItem>
                <InfoItem>
                    <template #title>
                        STUDING:
                    </template>
                    <div class="itemnavs">
                        <IconNav class="inline-hovertrans linenav" name="Vue.js" icon-class="fa-brands fa-vuejs">
                        </IconNav>
                        <IconNav class="inline-hovertrans linenav" name="CSS" icon-class="fa-brands fa-css3"></IconNav>
                        <IconNav class="inline-hovertrans linenav" name="Python" icon-class="fa-brands fa-python">
                        </IconNav>
                        <IconNav class="inline-hovertrans linenav" name="C-sharp" icon-class="fa-brands fa-microsoft">
                        </IconNav>
                    </div>
                </InfoItem>
                <a class="hovertrans bloglink cursor-target cursor-none cursor-change-color text-primary-200"
                    href="https://blog.xzadudu179.top">
                    <IconNav name="个人博客" icon-class="fa-regular fa-planet-ringed"></IconNav>
                </a>
            </div>
            <a class="blogbtn cursor-target cursor-none cursor-change-color" href="https://blog.xzadudu179.top">
                <IconNav name="个人博客" icon-class="fa-regular fa-planet-ringed"></IconNav>
            </a>
        </div>
    </Tilted>
</template>

<style scoped>
*,
*::before,
*::after {
    --button-border-color: #3a3e5c;
}

a {
    /* color: var(--color-text); */
    text-decoration: none;
}

/* .logo {
    filter: drop-shadow(0 0 10px var(--color-primary-200));
  } */
#dark-mode {
    visibility: hidden;
    display: none;
}

#darken-btn {
    z-index: 100;
    position: fixed;
    right: min(2rem, 20vw);
    top: min(2rem, 10vh);
}

/* #dark-mode:checked + #darkmode-label i {
    color: #000;
  } */

#darkmode-label i {
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    display: block;
    font-size: 2.5em;
}

.copyright {
    text-align: center;
    /* color: var(--text-info-color); */
    font-size: 1.1em;
    position: relative;
    bottom: 10px;
}

main {
    /* color: rgb(48, 48, 73); */
    /* color: rgb(212, 223, 255); */
    /* padding-top: 10px; */
    padding-bottom: 15px;
    display: flex;
    min-height: 100%;
    width: 100%;
    place-items: center;
}

a {
    transition: color 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
}

a:hover,
#darkmode-label:hover {
    /* text-decoration: underline; */
    /* color: var(--color-primary-200); */
    /* text-shadow: 0 0 2px var(--color-primary-200);+ */
}

.glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    /* background-color: var(--glow-color); */
    background: radial-gradient(circle 135px at 250px 250px,
            rgba(224, 224, 255, 0.5),
            rgba(0, 0, 0, 0));
    mix-blend-mode: overlay;
    pointer-events: none;
    transition: background-color 0.2s ease;
}

.find-me {
    margin: auto;
    width: 80%;
    max-width: 500px;
    padding-top: 20px;
    font-size: 1.2em;
    line-height: 1em;
    text-align: center;
}

.container {
    width: 100%;
}

.bloglink {
    /* color: var(--color-primary-200); */
    float: right;
    /* margin: 0 50px; */
    position: relative;
    top: 10px;
    right: 50px;
    font-size: 1.1em;
    font-weight: 500;
    text-decoration: none;
}

.bloglink::after {
    content: ">>";
}

.bloglink:hover {
    text-shadow: 0 0 8px var(--color-primary-200);
}

.card {
    max-width: 850px;
    overflow: hidden;
    /* padding-right: 10px; */
    /* padding-left: 5px; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* background-color: #2238; */
    background-color: #080A1622;
    /* backdrop-filter: blur(10px); */
    /* background-color: var(--card-color); */
    backdrop-filter: blur(15px);
    border-radius: 30px;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    box-shadow:
        2.4px 1.9px 3.2px -9px rgba(0, 0, 40, 0.008),
        4.3px 3.3px 7.6px -9px rgba(0, 0, 40, 0.014),
        5.9px 4.6px 13.8px -9px rgba(0, 0, 40, 0.02),
        7.5px 5.9px 23.5px -9px rgba(0, 0, 40, 0.029),
        10.1px 7.8px 39.9px -9px rgba(0, 0, 40, 0.045),
        18px 14px 80px -9px rgba(0, 0, 0, 0.09);
}

.card::after {
    transition: background 0.5s;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    /* z-index: -10; */
    pointer-events: none;
    width: 100%;
    height: 100%;
    /* 边框宽度 */
    padding: 5px;
    border-radius: 30px;
    /* background: linear-gradient(135deg, rgba(215, 113, 255, 0.528) 0%, rgba(61, 132, 255, 0.528) 100%); */
    background: conic-gradient(rgba(215, 113, 255, 0.528),
            rgba(61, 132, 255, 0.528) 50%,
            rgba(215, 113, 255, 0.528));
    --mask-bg: linear-gradient(#999999, #179179);
    --mask-clip: content-box, padding-box;
    mask-image: var(--mask-bg), var(--mask-bg);
    -webkit-mask-image: var(--mask-bg), var(--mask-bg);
    mask-origin: var(--mask-clip);
    -webkit-mask-origin: var(--mask-clip);
    mask-clip: var(--mask-clip);
    -webkit-mask-clip: var(--mask-clip);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}


.infos {
    padding: 40px 0;
    padding-bottom: 33px;
    width: 450px;
    max-width: 450px;
    /* height: 100%; */
    /* overflow: hidden; */
}

.blogbtn {
    display: none;
}

.avatar {
    /* height: 100%; */
    margin: 20px 0;
    margin-left: 0;
    width: 40%;
    background: url("../assets/img/avatar.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: -37px;
    transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.infos p,
.infos span {
    font-size: 1.15em;
    line-height: 1.8em;
    /* font-family: 'Maiyuan'; */
}

.linenav:not(:last-child)::after {
    content: "|";
    padding-left: 0.5em;
}

.findmenav:not(:last-child)::after {
    content: "|";
    /* padding-left: 0.5em; */
}

.findmenav:hover:not(:last-child)::after {
    /* content: "|"; */
    /* color: var(--color-text); */
}

.avatar:hover {
    filter: drop-shadow(0 0 15px #acbfff80);
    background-image: url("../assets/img/avatar2.png");
    /* border: 3px solid red; */
    transform: scale(1.02);
}

#chac-name {
    font-weight: 600;
    /* color: rgb(192, 198, 255); */
    /* color: var(--header-color); */
    font-size: 2.5em;
    line-height: 1.2em;
    margin-top: -8px;
}

@media (min-width: 601px) and (max-width: 850px) and (max-height: 550px) and (min-height: 501px) {
    .avatar {
        background: none !important;
        height: 0 !important;
        width: 0 !important;
    }

    .card_tilt {
        width: 400px !important;
        height: 80vh !important;
    }

    .avatar:hover {
        background: none !important;
    }
}

@media (max-width: 850px) {
    .card {
        flex-direction: column;
        max-height: 850px;
        height: 70vh;
        /* height: 600px; */
        width: 75vw;
        max-width: 550px;
    }

    .card_tilt {
        max-width: 550px;
        width: 75vw !important;
        max-height: 850px;
        height: 70vh !important;
    }

    .avatar {
        background-image: url("https://image.179.life/images/179.png");
        max-height: 275px;
        height: 100%;
        width: 100%;
        margin-bottom: 0;
        background-position: center;
        background-size: contain;
    }

    .avatar:hover {
        background-image: url("https://image.179.life/images/179.png");
    }

    .infos {
        max-height: 400px;
        width: 100%;
        padding: 0 0 0 50px;
    }

    .glow {
        display: none;
    }

    .bloglink {
        display: none;
    }

    .blogbtn {
        transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
        color: var(--color-primary-200);
        float: none;
        text-align: center;
        width: 90%;
        margin-bottom: 30px;
        margin-top: 0;
        height: 80px;
        max-height: 100%;
        border: 3px solid var(--button-border-color);
        background-color: var(--button-color);
        border-radius: 18px;
        /* margin: 0 50px; */
        font-size: 1.1em;
        font-weight: 500;
        text-decoration: none;
    }

    .blogbtn:active {
        background-color: var(--button-border-color);
    }

    .bloglink::after {
        content: "";
    }
}

@media (max-height: 500px) {
    .avatar {
        background-image: url("/src/assets/img/avatar.png");
        max-width: 200px;
        height: 250px;
        margin: 0;
        background-position: center;
        background-position-x: -10px;
        background-size: 130%;
    }

    .avatar:hover {
        background-image: url("/src/assets/img/avatar2.png");
    }

    .itemnavs {
        display: flex;
        flex-wrap: wrap;
        height: 3em;
        gap: 10px;
    }

    #chac-name {
        font-size: 2.3em;
    }

    .infos {
        max-height: 400px;
        height: 300px;
        padding: 25px 0 20px 5em;
        line-height: 1em;
    }

    * {
        font-size: 11px;
    }

    .card {
        flex-direction: row;
        align-items: center;
        max-width: 650px;
        width: max(90%, calc(100% - 20px));
        max-height: 320px;
        margin-top: 0;
        height: max(265px, calc(100% - 50px));
    }

    .container {
        height: 100%;
    }

    .glow {
        display: none;
    }

    .blogbtn {
        display: none;
    }

    .bloglink {
        display: block;
        color: var(--color-primary-200);
        float: right;
        /* margin: 0 50px; */
        position: inherit;
        padding-right: 50px;
        font-size: 1.3em;
        font-weight: 500;
        text-decoration: none;
    }

    .bloglink::after {
        content: ">>";
    }

}

@media (max-width: 600px) {
    * {
        font-size: 13px;
    }

    .container {
        flex-direction: column;
        width: 90%;
        height: 100%;
    }

    #chac-name {
        font-size: 6vw;
    }

    .glow {
        display: none;
    }

    .linenav {
        display: block
    }

    .linenav:not(:last-child)::after {
        content: "";
    }

    .itemnavs {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
    }

    .findmenav:not(:last-child)::after {
        content: "";
        /* padding-left: 0.5em; */
    }

    .avatar {
        background-image: url("https://image.179.life/images/179.png");
        height: 250px;
        width: 100%;
        margin-bottom: 0;
        background-position: center;
        background-size: contain;
    }

    .avatar:hover {
        background-image: url("https://image.179.life/images/179.png");
    }

    /* .find-me {
      display: flex;
      margin: auto;
      width: 80%;
      max-width: 500px;
      padding-top: 20px;
      font-size: 1.2em;
      line-height: 0;
      text-align: center;
    } */

    .card {
        flex-direction: column;
        max-width: 100%;
        width: 100%;
        /* max-height: 90%; */
        margin-top: 20px;
        /* height: calc(100% - 70px); */
    }

    .card_tilt {
        max-height: 90%;
        max-width: 100%;
        width: max(90vw, calc(100% - 10px)) !important;
        /* height: calc(100% - 70px); */
    }

    .infos {
        width: 100%;
        padding: 0 0 0 calc(2em + 10px);
    }

    body {
        overflow: visible;
    }

    .bloglink {
        display: none;
    }

    .blogbtn {
        transition: all 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
        color: var(--color-primary-200);
        float: none;
        text-align: center;
        width: 90%;
        margin-bottom: min(4vw, 30px);
        margin-top: 0;
        height: 80px;
        max-height: 100%;
        border: 3px solid var(--button-border-color);
        background-color: var(--button-color);
        border-radius: 18px;
        /* margin: 0 50px; */
        font-size: 1.1em;
        font-weight: 500;
        text-decoration: none;
    }

    .blogbtn:active {
        background-color: var(--button-border-color);
    }

    .bloglink::after {
        content: "";
    }
}
</style>
