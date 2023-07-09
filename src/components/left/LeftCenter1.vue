<template>
    <div class="main-content">
        <div class="top">人员分布</div>
        <div class="content">
            <div id="chart-2"></div>
            <img src="../../assets/img/bot-3.png" alt="">
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'LeftCenter1',
    data () {
        return {
            list: [
                {
                    name: '电务专业',
                    value: 30,
                    color: '#3B9EFE'
                },
                {
                    name: '工务专业',
                    value: 4,
                    color: '#FFA269'
                },
                {
                    name: '车务专业',
                    value: 8,
                    color: '#CAEFFF'
                },
                {
                    name: '后勤专业',
                    value: 12,
                    color: '#FFE76D'
                },
                {
                    name: '供电专业',
                    value: 20,
                    color: '#84D849'
                },
                {
                    name: '机关',
                    value: 26,
                    color: '#EBD553'
                }

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
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        clockwise: false,
                        radius: [24, 124],
                        center: ['50%', '50%'],
                        startAngle: 8,
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 1
                        },
                        color: this.list.map(i => i.color),
                        data: this.list,
                        label: {
                            alignTo: 'edge',
                            formatter: '{name|{b}}\n{time|{c}% }',
                            minMargin: 5,
                            edgeDistance: 50,
                            lineHeight: 30,
                            rich: {
                                time: {
                                    fontSize: 14,
                                    color: '#f4f4f4'
                                }
                            },
                            fontSize: 14,
                            color: '#f4f4f4',
                            textBorderWidth: 0
                        },
                        labelLine: {
                            length: 24,
                            length2: 6,
                            maxSurfaceAngle: 80
                        }
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
    width: 624px;
    background: url("../../assets/img/bg-m-1.png");
    background-size: 100% 100%;

    .content {
        > div {
            width: 560px;
            height: 260px;
            margin: 10px auto;
        }

        > img {
            width: 564px;
            margin: 0 auto;
        }
    }
}
</style>
