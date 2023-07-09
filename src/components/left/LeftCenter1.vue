<template>
    <div class="main-content">
        <div class="top">人员分布</div>
        <div id="chart-2" class="content"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'LeftCenter1',
    data () {
        return {
            color: ['#EBC53F', '#3D97EE'],
            list: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' }
            ]
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        initChart () {
            const chartDom = document.getElementById('chart-2')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const option = {
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [8, 48],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 1
                        },
                        data: this.list
                    }
                ]
            }

            myChart.setOption(option)
        }
    }
}
</script>

<style lang="less" scoped>
.main-content {
    width: 312px;
    background: url("../../assets/img/bg-m-1.png");
    background-size: 100% 100%;

    .content {

    }
}
</style>
