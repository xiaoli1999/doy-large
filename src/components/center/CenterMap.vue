<template>
    <div class="map">
        <div id="map"></div>
        <div class="tip">
            <div>线路</div>
            <div>火车</div>
            <div>摄像头</div>
        </div>
        <div class="tooltip up mark1">
            <div>xxx车站</div>
            <div>雨量: <span>正常</span></div>
        </div>
        <div class="tooltip down mark2">
            <div>xxx车站</div>
            <div>雨量: <span>正常</span></div>
        </div>
        <div class="tooltip up mark3">
            <div>xxx车站</div>
            <div>雨量: <span>正常</span></div>
        </div>
        <div class="tooltip down mark4">
            <div>xxx车站</div>
            <div>雨量: <span>正常</span></div>
        </div>
    </div>

</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
import mark1Img from '../../assets/img/mark1.png'
import {getJson} from "@/api";

export default {
    name: 'CenterMap',
    data () {
		return {
            mapData: null,
			lineList: [
                [
                    [
                        118.71083696582662,
                        37.909152165856725
                    ],
                    [
                        118.66606764678636,
                        37.84502199872858
                    ],
                ],
                [
                    [
                        118.66606764678636,
                        37.84502199872858
                    ],
                    [
                        118.56433621317944,
                        37.771523010651606
                    ],
                ],
                [
                    [
                        118.56433621317944,
                        37.771523010651606
                    ],
                    [
                        118.52638827978853,
                        37.713481346857975
                    ],
                ],
                [
                    [
                        118.52638827978853,
                        37.713481346857975
                    ],
                    [
                        118.45212139903396,
                        37.63735637376716
                    ],
                ],
                [
                    [
                        118.45212139903396,
                        37.63735637376716
                    ],

                    [
                        118.26955907701432,
                        37.56757959770772
                    ],
                ],
                [
                    [
                        118.26955907701432,
                        37.56757959770772
                    ],
                    [
                        118.02510689969796,
                        37.40844460544004
                    ]
                ],
			],
            trainMarkList: [],
            trainMarkSmall: [
                { value: [118.68166531351147, 37.89311319029366], area: 'up', show: true },
                { value: [118.71345571528894, 37.88390322480598], area: 'down', show: true },

                { value: [118.47464414820473, 37.68103089606683] },
                { value: [118.50785551811833, 37.66929588771569] },

                { value: [118.3466927409878, 37.61292871498131] },
                { value: [118.37291377748761, 37.592847327634956] },

                { value: [118.20219421631236, 37.544410657476135], area: 'up', show: true  },
                { value: [118.22753962281496, 37.52613942145618], area: 'down', show: true  },
            ]
        }
    },
	async mounted() {
        const arr = [...new Set(this.lineList.flat().map(i => `${i[0]}-${i[1]}`))]
        this.trainMarkList = arr.map(i => ({ name: '', value: i.split('-') }))

		await this.getData()
		this.initChart()
	},
	methods: {
		async getData () {
			const { data } = await getJson()
			this.mapData = data
        },
		initChart() {
			const chartDom = document.getElementById('map')
			const myChart = echarts.init(chartDom)
			myChart.clear()
			// 绘制地图
			echarts.registerMap('doy', this.mapData);

			myChart.setOption({
				title: {
					text: '',
					left: 'center'
				},
                geo: [{
                    map: 'doy',
                    // roam: true,
                    zoom: 2.5,
                    center: [118.42008157993604, 37.65036144354886],
                    label: {
                        show: true,
                        normal: {
                            show: true,
                            textStyle: { fontSize: 24, color: '#f4f4f480' }
                        },
                        emphasis: {
                            textStyle: { fontSize: 36, color: '#f4f4f4aa' }
                        }
                    },
                    scaleLimit: {
                        max: 10,
                        min: 0.6
                    },
                    itemStyle: {
                        normal: {
                            color: '#0f264140', // 地图背景色
                            borderColor: '#085D8E', // 省市边界线00fcff 516a89
                            borderWidth: 1.5
                        },
                        /** 悬浮背景 */
                        emphasis: {
                            color: '#0f2641aa',
                        }
                    }
                }],
				series: [
					{
						type: 'lines',
						coordinateSystem: 'geo',
						data: this.lineList.map(i => ({ coords: i })) , //
						smooth: true, // 设置为曲线
						lineStyle: {
							color: '#86CD58',
							opacity: 1,
							width: 12,
							type: 'solid', // 线的类型，可选值为 'solid', 'dashed', 'dotted'
							curveness: 0.02, // 曲线的曲率，取值范围为 0 到 1
							shadowColor: '#00000080', // 阴影颜色
							shadowBlur: 12, // 阴影模糊度
							shadowOffsetX: 4, // 阴影 X 轴偏移量
							shadowOffsetY: 4, // 阴影 Y 轴偏移量
							emphasis: {
								color: '#44C66100', // 鼠标悬停时的颜色
								width: 12 // 鼠标悬停时的线宽
							}
						},
					},
					{
						type: 'lines',
						coordinateSystem: 'geo',
						data: this.lineList.map(i => ({ coords: i })),
						smooth: true, // 设置为曲线
						lineStyle: {
							color: '#fff',
							opacity: 1,
							width: 5,
							type: 'dashed', // 线的类型，可选值为 'solid', 'dashed', 'dotted'
							curveness: 0.02, // 曲线的曲率，取值范围为 0 到 1
                            emphasis: {
                                color: '#ffffff80', // 鼠标悬停时的颜色
                                width: 5 // 鼠标悬停时的线宽
                            }
						},
					},
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.trainMarkList,
                        symbol: 'image://'+ require('@/assets/img/mark1.png'),
                        symbolSize: 36, // 标记点的大小
                        itemStyle: {
                            opacity: 1
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: [{ value: [118.41180564388156, 37.62205092650221] }],
                        symbol: 'image://'+ require('@/assets/img/mark3.png'),
                        symbolSize: 40, // 标记点的大小
                        itemStyle: {
                            opacity: 1
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: this.trainMarkSmall,
                        symbol: 'image://'+ require('@/assets/img/mark2.png'),
                        symbolSize: 30, // 标记点的大小
                        itemStyle: {
                            opacity: 1
                        }
                    },
                ]
			});
		}
	}
}
</script>

<style lang="less" scoped>
.map {
    position: relative;
    width: 100%;
    height: 848px;

    #map {
        width: 100%;
        height: 848px;
    }

    .tip {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50000;

        > div {
            box-sizing: border-box;
            width: 124px;
            height: 48px;
            padding-left: 52px;
            font-size: 18px;
            font-weight: 500;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            margin-bottom: 8px;

            &:nth-child(1) {
                background: url("../../assets/img/mark-w-1.png");
                background-size: 100% 100%;
            }

            &:nth-child(2) {
                background: url("../../assets/img/mark-w-2.png");
                background-size: 100% 100%;
            }

            &:nth-child(3) {
                background: url("../../assets/img/mark-w-3.png");
                background-size: 100% 100%;
            }

        }
    }
    .tooltip {
        position: absolute;
        z-index: 100000;
        width: 128px;
        height: 60px;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;

        > div {
            line-height: 1;
            margin: 8px 0 0 12px;

            > span {
                color: #24DC4D;
                padding-left: 16px;
            }
        }

        &.up {
            background: url("../../assets/img/mark-k-l.png");
            background-size: 100% 100%;
        }

        &.down {
            background: url("../../assets/img/mark-k-r.png");
            background-size: 100% 100%;
        }

        &.mark1 {
            left: 792px;
            top: 26px;
        }

        &.mark2 {
            left: 988px;
            top: 112px;
        }

        &.mark3 {
            left: 298px;
            top: 500px;
        }

        &.mark4 {
            left: 478px;
            top: 612px;
        }
    }
}
</style>
