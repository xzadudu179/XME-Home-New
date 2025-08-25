<template>
    <svg class="loading z-[10000000] fixed overflow-hidden" viewBox="0 0 1000 1000">
        <defs>
            <polygon id="loading_hexagon" class=""
                points="0.0, -75.0 64.95,-37.5 64.95,37.5 0.0,75.0 -64.95,37.5 -64.95,-37.5" fill="#131522" />
        </defs>
    </svg>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const aspectRatio = screenWidth / screenHeight;

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const getHexagonPoints = (ratio: number) => {
    return `
    0,${-50 * ratio} ${43.3 * ratio},${-25 * ratio} ${43.3 * ratio},${25 * ratio} 0,${50 * ratio} ${-43.3 * ratio}, ${25 * ratio} ${-43.3 * ratio},${-25 * ratio}`;
}

let hexratio = 1.5
const wideRatio = 2

if (aspectRatio > wideRatio) {
    hexratio = 1.1
}

const create = (next: CallableFunction, check: CallableFunction) => {
    loading.show()
    setTimeout(() => {
        next();
        // this.$parent.check_loading();
        check();
    }, 550);
}
const hide = () => {
    console.log("hiding")
    loading.hidden()
}

interface loading {
    row: number;
    line: number;
    container: Element | null;
    blocks: Array<SVGUseElement>;
    loop_color: GSAPTimeline;
    init: CallableFunction;
    create_blocks: CallableFunction;
    show: CallableFunction;
    hidden: CallableFunction;
}

onMounted(() => {
    const polygon = document.getElementById('loading_hexagon');
    polygon!.setAttribute('points', getHexagonPoints(hexratio));
    loading.init()
})

const loading: loading = {
    row: 10,
    line: 10,
    container: null,
    blocks: [],
    loop_color: gsap.timeline({ yoyo: true, repeat: -1 }),
    init() {
        this.container = document.querySelector('.loading');
        // this.container!.innerHTML = "";
        if (aspectRatio > wideRatio) {
            console.log("宽屏")
            // 宽屏，显示更多列
            this.row = 15;
            this.line = 10;
        }
        this.blocks = [];
        // this.create_blocks();
        this.create_blocks();
        // setTimeout(() => {
        //     this.hidden();
        // }, 1000)
    },
    create_blocks() {
        for (let l = 0; l < this.line; l++) {
            let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            for (let r = 0; r < this.row; r++) {
                let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
                use.setAttribute("class", "loading_block");
                use.setAttribute("href", "#loading_hexagon");
                use.setAttribute("x", `${l % 2 ? 86.5 * hexratio * r : 86.5 * hexratio * r + 43.3 * hexratio}`);
                use.setAttribute("y", `${74.5 * hexratio * l}`);
                use.setAttribute("transform-origin", "50 50")
                // gsap.set(this.blocks, { transformOrigin: "50% 50%" })
                g.appendChild(use);
                this.blocks.push(use);
            }
            this.container!.appendChild(g);
        }
    },
    show() {
        // loop_color.restart()
        this.loop_color.clear();
        try {
            this.container?.classList.remove("hidden")
        }
        catch {

        }

        const animate = gsap.timeline()
        if (isSafari) {
            animate.set(this.blocks, {
                "stroke-dashoffset": 0,
                "stroke": "#3D78F2",
                scale: 1,
                autoAlpha: 0,
            })
        }
        else {
            animate.set(this.blocks, {
                "stroke-dashoffset": () => { return Math.random() * 600 * hexratio - 300 * hexratio },
                "stroke": "#3D78F2",
                scale: 0,
                autoAlpha: 0,
            })
        }
        animate
            .to(this.blocks, {
                "stroke-dashoffset": isSafari ? () => { return Math.random() * 600 * hexratio - 300 * hexratio } : 0,
                "stroke-opacity": 1,
                scale: 1,
                duration: 0.5,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: {
                    from: "start",
                    each: 0.004
                }
            })

        this.loop_color.to(
            this.blocks, {
            "stroke": "#78B9FF",
            ease: "power2.in",
            duration: 0.6,
            stagger: {
                from: "random",
                each: 0.01
            },
        }
        );

    },
    hidden() {
        const animate = gsap.timeline()
            .set(this.blocks, {
                "stroke-dasharray": 300 * hexratio,
                "stroke-opacity": 1,
                scale: 1,
                autoAlpha: 1,
            })
        if (isSafari) {
            animate.to(this.blocks, {
                duration: 0.6,
                // scale: 0,
                autoAlpha: 0,
                ease: "power2.in",
                stagger: {
                    from: "random",
                    each: 0.004
                }
            });
        } else {
            animate.to(this.blocks, {
                duration: 0.6,
                scale: 0,
                ease: "power2.in",
                stagger: {
                    from: "random",
                    each: 0.004
                }
            });
        }


        setTimeout(() => {
            this.container?.classList.add("hidden")
        }, 1200)
        this.loop_color.clear();
    }
}

defineExpose({
    create: create,
    hide: hide,
})

</script>

<style scoped>
.loading {
    width: 100%;
    height: auto;
}

@media (orientation: portrait) {
    .loading {
        height: 100%;
        width: auto;
    }
}

.loading_block {
    stroke: #3D78F2;
    stroke-width: 0.5;
    stroke-dasharray: 100;
    background-color: #131522;
    stroke-opacity: 0;
    will-change: transform, opacity, stroke, stroke-dasharray, stroke-dashoffset;
}
</style>