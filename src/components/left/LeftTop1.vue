<template>
    <div class="main-content">
        <div class="top">车务</div>
        <div id="chart-1" class="content"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'LeftTop1',
    data () {
        return {
            color: ['#EBC53F', '#3D97EE'],
            list: [
                { name: 'xx站', value: 160 },
                { name: 'xx站', value: 180 },
                { name: 'xx站', value: 150 },
                { name: 'xx站', value: 140 },
                { name: 'xx站', value: 170 }
            ]
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        initChart () {
            const chartDom = document.getElementById('chart-1')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const offsetX = 8
            const offsetY = 4
            // 绘制左侧面
            const CubeLeft = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0
                },
                buildPath: function (ctx, shape) {
                    // 会canvas的应该都能看得懂，shape是从custom传入的
                    const xAxisPoint = shape.xAxisPoint
                    // console.log(shape);
                    const c0 = [shape.x, shape.y]
                    const c1 = [shape.x - offsetX, shape.y - offsetY]
                    const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY]
                    const c3 = [xAxisPoint[0], xAxisPoint[1]]
                    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
                }
            })
            // 绘制右侧面
            const CubeRight = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0
                },
                buildPath: function (ctx, shape) {
                    const xAxisPoint = shape.xAxisPoint
                    const c1 = [shape.x, shape.y]
                    const c2 = [xAxisPoint[0], xAxisPoint[1]]
                    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY]
                    const c4 = [shape.x + offsetX, shape.y - offsetY]
                    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                }
            })
            // 绘制顶面
            const CubeTop = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0
                },
                buildPath: function (ctx, shape) {
                    const c1 = [shape.x, shape.y]
                    const c2 = [shape.x + offsetX, shape.y - offsetY] // 右点
                    const c3 = [shape.x, shape.y - offsetX]
                    const c4 = [shape.x - offsetX, shape.y - offsetY]
                    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                }
            })
            // 注册三个面图形
            echarts.graphic.registerShape('CubeLeft', CubeLeft)
            echarts.graphic.registerShape('CubeRight', CubeRight)
            echarts.graphic.registerShape('CubeTop', CubeTop)

            const option = {
                backgroundColor: 'rgba(0,0,0, .6)',
                legend: {
                    itemHeight: 12, itemWidth: 12,
                    right: '0%',
                    top: '8%',
                    textStyle: { fontSize: '12', color: '#fff' }
                },
                color: this.color,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: function (params) {
                        const item = params[1]
                        return item.name + ' : ' + item.value
                    }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    top: '20%',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: this.list.map(i => i.name),
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#f4f4f4'
                        }
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 10
                    }
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 12,
                        show: false
                    }
                },
                series: [
                    {
                        type: 'custom',
                        renderItem: (params, api) => {
                            const location = api.coord([api.value(0), api.value(1)])
                            return {
                                type: 'group',
                                children: [
                                    {
                                        type: 'CubeLeft',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#59B1FF'
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#3688FF'
                                                }
                                            ])
                                        }
                                    },
                                    {
                                        type: 'CubeRight',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#59B1FF'
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#3688FF'
                                                }
                                            ])
                                        }
                                    },
                                    {
                                        type: 'CubeTop',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                                {
                                                    offset: 0,
                                                    color: '#62ADFF'
                                                },
                                                {
                                                    offset: 1,
                                                    color: '#62ADFF'
                                                }
                                            ])
                                        }
                                    }
                                ]
                            }
                        },
                        data: this.list.map(i => i.value)
                    },
                    {
                        type: 'bar',
                        itemStyle: {
                            color: 'transparent'
                        },
                        tooltip: {},
                        data: this.list.map(i => i.value)
                    },
                    {
                        name: '',
                        barGap: '-100%',
                        type: 'bar',
                        z: 0,
                        data: [240, 240, 240, 240, 240],
                        barWidth: '60%',
                        itemStyle: {
                            normal: {
                                color: '#113D6B60' // 0% 处的颜色
                            }
                        }

                    }
                ]
            }

            myChart.setOption(option)
        },

        changeChart (i) {
            this.cateIndex = i
            this.initChart()
        }
    }
}
</script>

<style lang="less" scoped>
.main-content {

    .content {

    }
}
</style>
