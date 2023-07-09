<template>
    <div id="home" class="home">
        <Header />
        <div class="main">
            <div class="main-top">

            </div>
            <div class="main-bottom">

            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

import { screenAuto } from '@/libs/screen.tools'
import { throttle } from '@/libs/common'

export default {
    name: 'Home',
    components: { Header },
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
    width: 1920px;
    height: 756px;
    background: url("../assets/img/bg.png") center no-repeat;
    background-size: 100%;
    transform-origin: 50% 0;
    transition: all .28s;
    color: #fff;

    .main {
        width: 100%;
        height: 940px; // 1080 - 140
        box-sizing: border-box;
        padding: 0 30px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: transparent;

        > div {
            width: 100%;
            height: 446px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
