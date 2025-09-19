<template>
    <AnimatedContent :distance="50" direction="vertical" :reverse="false" :duration="1.1" ease="power3.out"
        :initial-opacity="0" :animate-opacity="true" :scale="1.05" :threshold="0.1" :always-play="false" :delay="0.2">
        <form @submit.prevent="sendEmail"
            class="translucent p-5 md:pl-10 md:pr-10 border-t-4 border-b-4 md:border-t-0 border-t-dark-700 border-b-dark-700 md:border-b-0 md:border-l-4 md:border-r-4 rounded-3xl border-dark-500 md:text-xl text-[0.8rem] form">
            <p class="text-xl md:text-5xl m-2 md:m-5 mt-0 ml-2 text-dark-100"><span
                    class="inline-hovertrans font-light">Get in Touch <i
                        class="fa-light fa-message-dots text-[0.9em]"></i></span></p>
            <p class="ml-3 mb-6 text-primary-200 font-normal">Say hello, ask questions, collaborations, or share your
                thoughts!</p>
            <div class="content">
                <input v-model="form.name" name="user_name" placeholder="你的称呼 | Name*" required
                    class="block border-l-2 border-r-2 p-2 pl-5 rounded-xl rounded-b-none border-dark-600 mb-5 w-full" />
                <input v-model="form.email" name="user_email" type="email" placeholder="你的邮箱 | Email*" required
                    class="block border-l-2 border-r-2 p-2 pl-5 border-dark-600 mb-5 w-full" />
                <input v-model="form.subject" name="subject" type="text" placeholder="邮件主题 | Subject"
                    autocomplete="new-subject"
                    class="block border-l-2 border-r-2 p-2 pl-5 border-dark-600 mb-5 w-full" />
                <div class="textarea-wrap w-full">
                    <textarea v-model="form.message" name="message" placeholder="邮件内容 - Content*" required
                        class="block border-l-2 border-r-2 p-2 pl-5 rounded-xl rounded-t-none border-dark-600 mb-5 w-full h-[300px]"></textarea>
                    <!-- <span class="resizer"><i class="fa-regular fa-arrow-down-right"></i></span> -->
                </div>
                <div class="flex flex-col-reverse md:flex-row-reverse items-center">
                    <button type="submit"
                        class="text-center w-full md:w-auto ml-auto border-2 md:border-0 text-3xl p-3 rounded-2xl border-dark-300 active:border-primary-200 active:text-primary-200 hover:border-primary-200 hover:text-primary-200 text-dark-100 hoverlight md:block submit font-normal cursor-target hovertrans">
                        {{ submitText }}
                        <span class="md:inline-block hidden"><i class="fa-light fa-paper-plane-top"
                                id="submit-icon"></i></span></button>
                    <p id="error" ref="errorEle" class="pl-3 md:w-[70%] wrap-anywhere md:mb-0 mb-5 hidden">
                        Submit Failed:
                        {{ errorText }}</p>
                </div>
            </div>
        </form>
    </AnimatedContent>
</template>
<script setup lang="ts">
import AnimatedContent from './Bit/AnimatedContent.vue'
import { ref, watch } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});
const errorText = ref("");
const submitText = ref("SUBMIT");

watch(form, () => {
    if (submitText.value === "SENDING" || (form.value.name === '' && form.value.email === '' && form.value.subject === '' && form.value.message === '')) {
        return
    }
    const submitIcon = document.getElementById("submit-icon")
    submitIcon!.className = "fa-light fa-paper-plane-top"
    submitText.value = "SUBMIT"
}, { deep: true })

function sendEmail() {
    if (submitText.value == 'SENDING') {
        alert("不要重复发邮件哦")
        return
    }
    const now = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const templateParams = {
        name: form.value.name + ` (${form.value.email})`,
        email: form.value.email,
        title: form.value.subject ? form.value.subject : "No Subject",
        time: now,
        message: form.value.message
    }
    submitText.value = "SENDING"
    const submitIcon = document.getElementById("submit-icon")
    const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const public_key = import.meta.env.VITE_EMAILJS_USER_ID
    submitIcon!.className = "fa-light fa-loader fa-spin"
    emailjs.send(
        service_id,
        template_id,
        templateParams,
        public_key
    ).then(() => {
        // alert('邮件发送成功！')
        submitIcon!.className = "fa-light fa-hexagon-check text-primary-200"
        submitText.value = "SUCCESS"
        form.value = { name: '', email: '', message: '', subject: '' }
    }).catch((error) => {
        const ele = document.getElementById("error")
        submitIcon!.className = "fa-light fa-hexagon-exclamation error"
        ele!.style.display = 'block'
        submitText.value = "ERROR"
        // alert('发送失败: ' + error.text)
        errorText.value = error.text
    })
}
</script>

<style scoped>
.content input:hover,
.content textarea:hover {
    border-color: var(--color-dark-400);
}

input:focus,
textarea:focus {
    outline: none;
    border-color: var(--color-primary-300) !important;
}

#error,
.error {
    color: rgb(255, 99, 125);
}

.form {
    line-height: 1.3em;
    /* letter-spacing: 0.2em; */
    transition: all 0.5s;
}

.submit {
    transition: all 0.3s;
}

input,
textarea {
    transition: all 0.3s;
    cursor: none;
}

.form:has(input:not(:placeholder-shown)) {
    border-color: var(--color-dark-200);
}

input:not(:placeholder-shown),
textarea:not(:placeholder-shown) {
    border-color: var(--color-primary-200) !important;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: var(--color-dark-50);
    transition: background-color 5000s ease-in-out 0s;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
    color: var(--color-dark-500);
}

.textarea-wrap {
    position: relative;
    display: inline-block;
}

.textarea-wrap textarea {
    resize: none;
}



.textarea-wrap .resizer {
    position: absolute;
    bottom: 30px;
    right: 2px;
    width: 12px;
    height: 12px;
    /* cursor: se-resize; */
    color: var(--color-dark-300);
    pointer-events: none;
}
</style>