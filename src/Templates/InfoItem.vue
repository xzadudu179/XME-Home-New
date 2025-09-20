<template>
    <article class="item">
        <h2 class="title text-primary-200">
            <slot name="title"></slot>
        </h2>
        <div class="content">
            <slot></slot>
        </div>
    </article>
</template>

<style scoped>
.title {
    text-indent: -1.5em;
    text-align: left;
    font-size: 1.2em;
    font-weight: 600;
}

.content {
    padding: 10px 0;
}
</style>