<template>
    <svg class="loading z-[10000000] fixed overflow-hidden" viewBox="0 0 1000 1000">
        <defs>
            <polygon id="loading_hexagon" class=""
                points="0.0,-75.0 64.95,-37.5 64.95,37.5 0.0,75.0 -64.95,37.5 -64.95,-37.5" fill="#080A16" />
        </defs>
    </svg>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted } from 'vue';
const create = (next: CallableFunction, check: CallableFunction) => {
    loading.show()
    setTimeout(() => {
        next();
        // this.$parent.check_loading();
        check();
    }, 800);
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
                use.setAttribute("x", `${l % 2 ? 86.5 * 1.5 * r : 86.5 * 1.5 * r + 43.3 * 1.5}`);
                use.setAttribute("y", `${74.5 * 1.5 * l}`);
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

        gsap.timeline()
            .set(this.blocks, {
                "stroke-dashoffset": () => { return Math.random() * 900 - 450 },
                "stroke": "#3D78F2",
                scale: 1,
                autoAlpha: 0,
            })
            .to(this.blocks, {
                "stroke-dashoffset": 0,
                "stroke-opacity": 1,
                scale: 1,
                duration: 0.6,
                autoAlpha: 1,
                ease: "power2.out",
                stagger: {
                    from: "start",
                    each: 0.006
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
        gsap.timeline()
            .set(this.blocks, {
                "stroke-dasharray": 450,
                "stroke-opacity": 1,
                scale: 1,
                autoAlpha: 1,
            })
            .to(this.blocks, {
                duration: 0.6,
                scale: 0,
                ease: "power2.in",
                stagger: {
                    from: "random",
                    each: 0.004
                }
            });
        setTimeout(() => {
            this.container?.classList.add("hidden")
        }, 1300)
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
    pointer-events: none;
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
    stroke-width: 0.8;
    stroke-dasharray: 100;
    background-color: #131522;
    stroke-opacity: 0;
    will-change: transform, opacity, stroke, stroke-dasharray, stroke-dashoffset;
}
</style>