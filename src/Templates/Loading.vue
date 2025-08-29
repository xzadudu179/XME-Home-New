<template>
    <svg id="loading-container" class="loading z-[10000000] fixed overflow-hidden pointer-events-none"
        viewBox="0 0 1000 1000">
        <defs>
            <polygon id="loading_hexagon" class="pointer-events-auto"
                points="0.0, -75.0 64.95,-37.5 64.95,37.5 0.0,75.0 -64.95,37.5 -64.95,-37.5" fill="#131522" />
        </defs>
    </svg>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'


const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const getHexagonPoints = () => {
    const ratio = getHexratio()
    return `
    0,${-50 * ratio} ${43.3 * ratio},${-25 * ratio} ${43.3 * ratio},${25 * ratio} 0,${50 * ratio} ${-43.3 * ratio}, ${25 * ratio} ${-43.3 * ratio},${-25 * ratio}`;
}

const getRowLine = () => {
    const ratio = getHexratio()
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const scale = Math.max(screenWidth, screenHeight) / 1000;
    const hexWidth = 86.6 * ratio * scale;
    const hexHeight = 100 * ratio * scale;
    // console.log(hexHeight, hexWidth);

    const row = Math.ceil(screenWidth / hexWidth) + 1;
    const line = Math.ceil(screenHeight / (hexHeight * 0.75)) + 1;
    // console.log("heightRatio", heightRatio)
    // console.log("row, line", row, line)
    return {
        "row": row,
        "line": line
    }
}

let lastScreenWidth = window.innerWidth
let lastScreenHeight = window.innerHeight

const getHexratio = () => {
    let hexratio = 1.5;
    const wideRatio = 2;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const widthRatio = screenWidth / screenHeight;
    if (widthRatio > wideRatio) {
        hexratio = 1.1;
    }
    return hexratio
}


let isAnimatingIn = false
let isInner = false
let isAnimatingOut = false

let currentNext: CallableFunction | null = null

const create = (next: CallableFunction, check: CallableFunction) => {
    // console.log("开始切换页面")
    loading.show(next, check)
}
const hide = () => {
    // console.log("hiding")
    loading.hidden()
}

interface loading {
    row: number;
    line: number;
    isBlockCreated: boolean;
    container: Element | null;
    blocks: Array<SVGUseElement>;
    loop_color: GSAPTimeline;
    hexratio: number;
    init: CallableFunction;
    create_blocks: CallableFunction;
    show: CallableFunction;
    hidden: CallableFunction;
}
onMounted(() => {
    loading.init()
})

const loading: loading = {
    row: 10,
    line: 10,
    container: null,
    blocks: [],
    isBlockCreated: false,
    loop_color: gsap.timeline({ yoyo: true, repeat: -1 }),
    hexratio: 1,
    init() {
        this.container = document.querySelector('.loading');
        this.blocks = [];
        // this.create_blocks();
        this.create_blocks();
        // setTimeout(() => {
        //     this.hidden();
        // }, 1000)
    },
    create_blocks() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight
        if (lastScreenWidth === screenWidth && lastScreenHeight === screenHeight && this.isBlockCreated) {
            // console.log("不创建")
            return
        }
        // console.log("创建")
        lastScreenWidth = screenWidth
        lastScreenHeight = screenHeight
        while (this.container!.lastChild && this.container!.lastChild.nodeName !== "defs") {
            this.container!.removeChild(this.container!.lastChild);
        }
        this.blocks = [];
        const polygon = document.getElementById('loading_hexagon');

        polygon!.setAttribute('points', getHexagonPoints());
        const rl = getRowLine();
        this.hexratio = getHexratio()
        const hexratio = this.hexratio
        this.row = rl["row"];
        this.line = rl["line"]
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
        this.isBlockCreated = true
    },
    show(next: CallableFunction, check: CallableFunction) {
        // loop_color.restart()
        this.create_blocks()
        currentNext = next
        let starting = false
        if (isInner) {
            starting = true
            // console.log("isinner")
            // console.log("因为状态不符，不播放 in 动画")
            currentNext!();
            // console.log("INNER切换页面...")
            // this.$parent.check_loading();
            check();
            return
        }
        if (isAnimatingIn) {
            // console.log("不播放 in 动画")
            return
        }
        this.loop_color.clear();
        const hexratio = this.hexratio
        const animate = gsap.timeline()
        // console.log("inner in out", isAnimatingIn, isAnimatingOut)
        if (!isAnimatingIn && !isAnimatingOut) {
            if (isSafari) {
                animate.set(this.blocks, {
                    "stroke-dashoffset": () => { return Math.random() * 600 * hexratio - 300 * hexratio },
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
        }
        // console.log("播放 in 动画")
        isAnimatingIn = true
        const tween = animate
            .to(this.blocks, {
                "stroke-dashoffset": 0,
                "stroke-opacity": 1,
                scale: 1,
                duration: 0.4,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: {
                    from: "start",
                    each: 0.003
                },
                onComplete: () => {
                    isAnimatingIn = false;
                    // console.log("IN 播放完成")
                    currentNext!();
                    isInner = true
                    // console.log("切换页面...")
                    // this.$parent.check_loading();
                    check();
                }, onStart: () => {
                    this.container?.classList.remove("hidden")
                    starting = false;
                }, onUpdate: () => {
                    if (starting) {
                        // console.log("kill in")
                        tween.kill();
                    }
                }
            })
        this.blocks.forEach((block: Element) => {
            const currentStroke = gsap.getProperty(block, "stroke") as string;

            // 如果 currentStroke 为空或 transparent 才设置
            if (!currentStroke || currentStroke === "none" || currentStroke === "transparent") {
                gsap.set(block, { stroke: "#3D78F2" });
            }
        });
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
        const hexratio = this.hexratio
        const animate = gsap.timeline()
        // console.log("outer in out", isAnimatingIn, isAnimatingOut)
        if (!isInner) {
            // console.log("因为状态不符，不播放 out 动画")
            return
        }
        if (isAnimatingOut) {
            // console.log("不播放 out 动画")
            return
        }
        if (!isAnimatingOut && !isAnimatingIn) {
            animate.set(this.blocks, {
                "stroke-dasharray": 300 * hexratio,
                "stroke-opacity": 1,
                scale: 1,
                autoAlpha: 1,
            })
        }

        // console.log("播放 out 动画")
        isAnimatingOut = true
        if (isSafari) {
            const tween = animate.to(this.blocks, {
                duration: 0.6,
                // scale: 0,
                autoAlpha: 0,
                ease: "power2.in",
                stagger: {
                    from: "random",
                    each: 0.004
                }, onComplete: () => {
                    isAnimatingOut = false;
                    // console.log("OUT 播放完成")
                    this.container?.classList.add("hidden")
                }, onStart: () => {
                    isInner = false;
                }, onUpdate: () => {
                    if (isAnimatingIn) {
                        // console.log("out kill")
                        isAnimatingOut = false;
                        tween.kill();
                    }
                }
            });
        } else {
            const tween = animate.to(this.blocks, {
                duration: 0.6,
                scale: 0,
                ease: "power2.in",
                stagger: {
                    from: "random",
                    each: 0.004
                }, onComplete: () => {
                    isAnimatingOut = false;
                    // console.log("OUT 播放完成")
                    this.container?.classList.add("hidden")
                }, onStart: () => {
                    isInner = false;
                }, onUpdate: () => {
                    if (isAnimatingIn) {
                        // console.log("kill out")
                        isAnimatingOut = false;
                        tween.kill();
                    }
                }
            });
        }
        this.loop_color.clear();
    }
}

// const loading = ref<InstanceType<typeof Loading> | null>(null);
const check_loading = () => {
    let timer = setInterval(() => {
        // console.log("checking")
        if (document.readyState === "complete") {
            // console.log("complete")
            clearInterval(timer);
            hide();
        }
    }, 600);
}

onMounted(() => {
    // console.log("animate")
    useRouter().beforeEach((to, from, next) => {
        create(next, check_loading);
    });
})


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