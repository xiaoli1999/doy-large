<template>
    <div id="home" class="home">
        <Header />
        <div class="main">
            <div class="left">
                <div>
                    <LeftTop1 />
                    <LeftTop2 />
                    <LeftTop3 />
                </div>

                <div>
                    <LeftCenter1 />
                    <LeftCenter2 />
                </div>
                <div>
                    <LeftBot1 />
                    <LeftBot2 />
                </div>

            </div>
            <div class="center">
                <CenterMap />
                <div class="main-c-bot">
                    <CenterBot1 />
                    <CenterBot2 />
                </div>

            </div>
            <div class="right">
                <div>
                    <RightTop1 />
                    <RightTop2 />
                </div>
                <div>
                    <RightBot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

import LeftTop1 from '@/components/left/LeftTop1.vue'
import LeftTop2 from '@/components/left/LeftTop2.vue'
import LeftTop3 from '@/components/left/LeftTop3.vue'
import LeftCenter1 from '@/components/left/LeftCenter1.vue'
import LeftCenter2 from '@/components/left/LeftCenter2.vue'
import LeftBot1 from '@/components/left/LeftBot1.vue'
import LeftBot2 from '@/components/left/LeftBot2.vue'

import CenterMap from '@/components/center/CenterMap.vue'
import CenterBot1 from '@/components/center/CenterBot1.vue'
import CenterBot2 from '@/components/center/CenterBot2.vue'

import RightTop1 from '@/components/right/RightTop1.vue'
import RightTop2 from '@/components/right/RightTop2.vue'
import RightBot from '@/components/right/RightBot.vue'

import { screenAuto } from '@/libs/screen.tools'
import { throttle } from '@/libs/common'

export default {
    name: 'Home',
    components: { Header, LeftTop1, LeftTop2, LeftTop3, LeftCenter1, LeftCenter2, LeftBot1, LeftBot2, CenterMap, CenterBot1, CenterBot2, RightTop1, RightTop2, RightBot },
    data () {
        return {

        }
    },
    created () {

    },
    async mounted () {
        // screenAuto()
        // window.onresize = () => (throttle(screenAuto(), 360))
    },
    destroyed () {
        window.onresize = null
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    width: 3840px;
    height: 1512px;
    background: url("../assets/img/bg.png") center no-repeat;
    background-size: 100%;
    transform-origin: 50% 0;
    transition: all .28s;
    color: #fff;

    .main {
        width: 100%;
        height: 1378px;
        box-sizing: border-box;
        padding: 48px 20px;
        display: flex;
        justify-content: space-between;

        > div {
            flex-shrink: 0;

            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;

                &:not(:last-child) {
                    margin-bottom: 24px;
                }
            }
        }

        .left {
            width: 1260px;
        }

        .center {
            width: 1332px;
        }

        .right {
            width: 1160px;
        }
    }
}
</style>
