<template>
    <div class="main-content">
        <div class="top">人员信息</div>
        <div class="content">
            <div class="chart">
                <div class="chart-wrap">
                    <div id="chart-3" class="chart-content"></div>
                    <img class="chart-img" src="../../assets/img/bot-w.png" alt="">
                    <img class="chart-bot" src="../../assets/img/bot1.png" alt="">
                    <div class="chart-text">
                        <div class="num"><animate-number from="0" :to="1594" duration="1200" /></div>
                        <div class="desc">总人数</div>
                    </div>
                </div>
            </div>
            <div class="list">
                <div v-for="(item, index) in list" :key="index">
                    <p>
                        <span :style="{ background: item.color } "></span>
                        {{ item.name }}
                    </p>
                    <div>{{ item.value }}人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    name: 'LeftCenter2',
    data () {
        return {
            list: [
                {
                    name: '中级二',
                    value: 32,
                    color: '#4CB2FF'
                },
                {
                    name: '高级二',
                    value: 10,
                    color: '#74E5E9'
                },
                {
                    name: '无',
                    value: 4,
                    color: '#74E5E9'
                },
                {
                    name: '初级二',
                    value: 4,
                    color: '#DFE4EF'
                },
                {
                    name: '技师',
                    value: 6,
                    color: '#4643FF'
                },
                {
                    name: '高级技师',
                    value: 4,
                    color: '#90E24C'
                }
            ]
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        initChart () {
            const chartDom = document.getElementById('chart-3')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const option = {
                tooltip: {
                    trigger: 'item'
                },
                grid: {
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0%',
                    containLabel: true
                },
                series: [
                    {
                        // 实线外环
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['82%', '82%'],
                        center: ['50%', '50%'],
                        data: [100],
                        itemStyle: {
                            color: 'transparent',
                            borderColor: '#7DADE1',
                            borderWidth: 1,
                            borderType: 'solid'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        // 虚线内环
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['52%', '52%'],
                        center: ['50%', '50%'],
                        data: [100],
                        itemStyle: {
                            color: 'transparent',
                            borderColor: '#274461',
                            borderWidth: 1,
                            borderType: 'solid'
                        },
                        label: {
                            show: false
                        }
                    },
                    {
                        name: '',
                        type: 'pie',
                        startAngle: 320,
                        hoverAnimation: false,
                        radius: ['66%', '78%'],
                        center: ['50%', '50%'],
                        color: this.list.map(i => i.color),
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                textStyle: {
                                    align: 'center',
                                    baseline: 'middle',
                                    fontSize: 16,
                                    fontWeight: '100'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                smooth: true,
                                length: 10,
                                lineStyle: {
                                    width: 1.5
                                }
                            }
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
    width: 624px;
    background: url("../../assets/img/bg-m-1.png");
    background-size: 100% 100%;

    .content {
        display: flex;
        align-items: center;
        justify-content: center;

        .chart {
            flex: 1;
            margin: 0 auto;
            height: 320px;

            .chart-wrap {
                position: relative;
                width: 240px;
                height: 240px;
                margin: 0 auto;

                .chart-content {
                    position: absolute;
                    width: 240px;
                    height: 240px;
                    left: 0;
                    right: 0;
                    z-index: 5;
                }

                .chart-img {
                    position: absolute;
                    left: 0px;
                    right: 0;
                    bottom: 0;
                    top: 36px;
                    margin: auto;
                    z-index: 0;
                    width: 232px;
                }

                .chart-bot {
                    position: absolute;
                    left: -4px;
                    right: 0;
                    bottom: 0;
                    top: 236px;
                    margin: auto;
                    z-index: 0;
                    width: 248px;
                }

                .chart-text {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    margin: auto;
                    z-index: 10;
                    color: #FFFFFF;
                    width: 102px;
                    height: 80px;
                    text-align: center;

                    .num {
                        font-size: 38px;
                        font-family: YouSheBiaoTiHei,serif;
                        line-height: 1;
                        padding-top: 10px;
                    }

                    .desc {
                        font-size: 18px;
                        font-weight: 500;
                        letter-spacing: 1px;
                    }
                }
            }
        }

        .list {
            width: 236px;
            margin-right: 28px;

            > div {
                width: 236px;
                height: 44px;
                background: url("../../assets/img/bg-r.png");
                margin-bottom: 8px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 18px;
                letter-spacing: 1px;
                color: #fff;

                > p{
                    display: flex;
                    align-items: center;

                    > span {
                        display: block;
                        width: 8px;
                        height: 8px;
                        margin: 0 18px 0 28px;
                    }
                }

                > div {
                    width: 48px;
                    margin-right: 24px;
                }
            }
        }
    }
}
</style>
