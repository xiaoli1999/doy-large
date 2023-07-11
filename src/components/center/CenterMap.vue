<template>
    <div class="map">
        <div id="map"></div>
    </div>

</template>

<script>
import * as echarts from "echarts";
import axios from "axios";

export default {
    name: 'CenterMap',
    data () {
		return {
            mapData: null,
			lineList: [
				[
					[
						118.670198896523,
						37.92808904437172
					],
					[
						118.55546887845014,
						37.66621008643848
					],
				],
				[
					[
						118.55546887845014,
						37.66621008643848
					],
					[
						118.28054763514643,
						37.510516871339306
					],
				],
				[
					[
						118.28054763514643,
						37.510516871339306
					],
					[
						118.15141836536702,
						37.32336091121911
					],
				],
				[
					[
						118.15141836536702,
						37.32336091121911
					],
					[
						117.9876370812857,
						37.18047311826457
					],
				],

				[
					[
						117.9876370812857,
						37.18047311826457
					],
					[
						117.69065409410354,
						37.0569850745466
					],
				],
				[
					[
						117.69065409410354,
						37.0569850745466
					],
					[
						117.31574382527424,
						36.95413877347636
					]
				]
			]
        }
    },
	async mounted() {
		await this.getData()
		this.initChart()
	},
	methods: {
		async getData () {
			const { data } = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/370500_full.json')
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
					text: '东营省地图',
					left: 'center'
				},
                geo: [{
                    map: 'doy',
                    roam: true,
                    zoom: 2.4,
                    // center: [],
                    label: {
                        show: true,
                        normal: {
                            show: true,
                            textStyle: { fontSize: 30, color: '#f4f4f480' }
                        }
                    },
                    scaleLimit: {
                        max: 10,
                        min: 0.6
                    },
                    itemStyle: {
                        normal: {
                            color: '#0f264180', // 地图背景色
                            borderColor: '#085D8E', // 省市边界线00fcff 516a89
                            borderWidth: 1.5
                        },
                        /** 悬浮背景 */
                        emphasis: {
                            color: '#0f264140',
                        }
                    },
                    click: function (e) {
                        console.log(e)
                    },
                    data: [{

                        fromName: "梅李镇",
                        toName: "梅李镇",
                        coords: [
                            [120.87524048945, 31.650835071419],
                            [120.87524, 31.65283],
                            [120.87624058945, 31.669835171419],
                        ]
                    }],
                }],
				series: [
					{
						type: 'lines',
						coordinateSystem: 'geo',
						data: this.lineList.map(i => ({ coords: i })),
						smooth: true, // 设置为曲线
						polyline: true,
						lineStyle: {
							color: 'purple',
							opacity: 1,
							width: 10,
							type: 'solid', // 线的类型，可选值为 'solid', 'dashed', 'dotted'
							curveness: 0.2, // 曲线的曲率，取值范围为 0 到 1
							// shadowColor: 'rgba(0, 0, 0, 0.5)', // 阴影颜色
							// shadowBlur: 10, // 阴影模糊度
							// shadowOffsetX: 3, // 阴影 X 轴偏移量
							// shadowOffsetY: 3, // 阴影 Y 轴偏移量
							emphasis: {
								color: 'red', // 鼠标悬停时的颜色
								width: 2 // 鼠标悬停时的线宽
							}
						},
					},
					{
						type: 'lines',
						coordinateSystem: 'geo',
						data: this.lineList.map(i => ({ coords: i })),
						smooth: true, // 设置为曲线
						polyline: true,
						lineStyle: {
							color: '#fff',
							opacity: 1,
							width: 4,
							type: 'dotted', // 线的类型，可选值为 'solid', 'dashed', 'dotted'
							curveness: 1, // 曲线的曲率，取值范围为 0 到 1
							// shadowColor: '#fff', // 阴影颜色
							// shadowBlur: 10, // 阴影模糊度
							// shadowOffsetX: 3, // 阴影 X 轴偏移量
							// shadowOffsetY: 3, // 阴影 Y 轴偏移量
							emphasis: {
								color: 'red', // 鼠标悬停时的颜色
								width: 2 // 鼠标悬停时的线宽
							}
						},
					}
                ]
			});

			myChart.on('click', function(params) {
				// 判断点击的系列类型是否为地图

				console.log(params)

				if (params.seriesType === 'geo') {
					// 获取点击的坐标点
					var coord = params.coord;
					// 在控制台输出坐标点信息
					console.log('点击坐标点:', coord);
				}
			});

			// series: [
			// 	{
			// 		type: 'map',
			// 		map: 'doy',
			// 		roam: true,
			// 		zoom: 1.5,
			// 		label: {
			// 			show: true
			// 		},
			// 		emphasis: {
			// 			label: {
			// 				show: true
			// 			}
			// 		},
			// 		// 自定义区域样式
			// 		itemStyle: {
			// 			// 区域默认样式
			// 			// normal: {
			// 			// 	borderColor: '#000',
			// 			// 	areaColor: '#ccc'
			// 			// },
			// 			// 区域高亮样式
			// 			// emphasis: {
			// 			// 	areaColor: '#f00'
			// 			// }
			// 		},
			// 		// 区域点击事件
			// 		// 例如: 根据区域ID进行相应操作
			// 		// 可以在点击事件中添加路径绘制和标记的逻辑
			// 		// click: function (params) {
			// 		// 	var regionId = params.data.id;
			// 		// 	// 根据区域ID绘制路径和标记
			// 		// 	drawPathAndMarker(regionId);
			// 		// }
			// 	}
			// ]

			// // 绘制路径和标记的函数
			// function drawPathAndMarker(regionId) {
			// 	// 根据区域ID绘制路径和标记的逻辑
			// 	// 例如: 根据区域ID从数据源中获取路径数据和标记数据，然后使用 ECharts 提供的 API 进行绘制
			// 	// 示例:
			// 	var pathData = [
			// 		[118.5, 37.5], // 经度, 纬度
			// 		[118.6, 37.6],
			// 		[118.7, 37.7]
			// 	];
			// 	var markerData = [
			// 		{ name: '标记1', coord: [118.5, 37.5] },
			// 		{ name: '标记2', coord: [118.7, 37.7] }
			// 	];
            //
			// 	// 绘制路径
			// 	myChart.setOption({
			// 		series: [
			// 			{
			// 				type: 'lines',
			// 				data: pathData,
			// 				lineStyle: {
			// 					color: 'blue',
			// 					width: 2
			// 				}
			// 			},
			// 		]
			// 	});
            //
			// 	// 绘制图片标记
			// 	myChart.setOption({
			// 		series: [
			// 			{
			// 				type: 'scatter',
			// 				data: markerData,
			// 				symbol: 'image://路径/到/图片.png', // 图片路径
			// 				symbolSize: 20 // 图片大小
			// 			},
			// 		]
			// 	});
            //
			// 	// 绘制自定义标记
			// 	myChart.setOption({
			// 		series: [
			// 			{
			// 				type: 'custom',
			// 				renderItem: function (params, api) {
			// 					var position = api.coord([params.value[0], params.value[1]]);
			// 					return {
			// 						type: 'group',
			// 						children: [
			// 							{
			// 								type: 'text',
			// 								style: {
			// 									text: '自定义标记',
			// 									font: '14px Microsoft YaHei'
			// 								},
			// 								position: [position[0] + 10, position[1] + 10]
			// 							}
			// 						]
			// 					};
			// 				},
			// 				data: markerData
			// 			},
			// 		]
			// 	});
			// }
            //
			// // 示例：在区域1上绘制路径和标记
			// drawPathAndMarker('01');

		}
	}
}
</script>

<style lang="less" scoped>
.map {
    width: 100%;
    height: 848px;

    #map {
        width: 100%;
        height: 848px;
    }
}
</style>
