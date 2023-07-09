<template>
    <div class="header">
        <div class="title">东营港疏港铁路数据可视化系统</div>

        <div class="time">
            <span>{{ date }}</span>
            <span>{{ time }}</span>
            <span style="opacity: .15;">|</span>
            <span>☀️</span>
            <span>晴</span>
            <span>27℃</span>

        </div>
    </div>
</template>

<script>

export default {
    name: 'Header',
    data () {
        return {
            date: '',
            time: '',
            timer: null
        }
    },
    mounted () {
        this.getDate()
        this.timer = setInterval(() => this.getDate(), 1e3)
    },
    methods: {
        getDate () {
            this.date = this.$dayjs().format('YYYY-MM-DD')
            this.time = this.$dayjs().format('HH:mm:ss')
        }
    },
    destroyed () {
        clearInterval(this.timer)
    }
}
</script>

<style lang="less" scoped>
.header {
    position: relative;
    width: 1920px;
    height: 68px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    background: url("../assets/img/bg-title.png") center no-repeat;
    background-size: 100% 100%;

    .title {
        height: 58px;
        font-size: 38px;
        font-family: YouSheBiaoTiHei, serif;
        line-height: 58px;
        letter-spacing: 3px;
        text-align: center;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
    }

    .time {
        position: absolute;
        height: 24px;
        display: flex;
        left: 144px;
        bottom: 4px;
        align-items: center;
        font-size: 16px;
        font-weight: bold;

        > span {
            margin-right: 14px;
        }
    }
}
</style>
