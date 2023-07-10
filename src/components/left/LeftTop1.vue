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
			color: ['#EBC53F', '#62ADFF'],
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

			const data = [140, 160, 180, 150, 168]
			const colorArr = ['#62ADFF', '#3688FF', '#62ADFF', '#62ADFF', '#000']
			const colorArr1 = ['#FFE77F', '#B49522', '#FFE77F', '#3688FF', '#000']
			const color = {
				type: 'linear',
				x: 0,
				x2: 1,
				y: 0,
				y2: 0,
				colorStops: [
					{
						offset: 0,
						color: colorArr[0]
					},
					{
						offset: 0.5,
						color: colorArr[0]
					},
					{
						offset: 0.5,
						color: colorArr[1]
					},
					{
						offset: 1,
						color: colorArr[1]
					},
					{
						offset: 1,
						color: colorArr[1]
					}
				]
			}
			const color1 = {
				type: 'linear',
				x: 0,
				x2: 1,
				y: 0,
				y2: 0,
				colorStops: [
					{
						offset: 0,
						color: colorArr1[0]
					},
					{
						offset: 0.5,
						color: colorArr1[0]
					},
					{
						offset: 0.5,
						color: colorArr1[1]
					},
					{
						offset: 1,
						color: colorArr1[1]
					},
					{
						offset: 1,
						color: colorArr1[1]
					}
				]
			}
			const dataColor = [
				500,
				800,
				900,
				680,
				{
					value: 600,
					itemStyle: {
						color: color1
					}
				}
			]
			const data2 = [
				500,
				800,
				900,
				680,
				{
					value: 600,
					itemStyle: {
						color: colorArr1[2]
					}
				}
			]
			// const sideData = dataColor.map(item => {
			// 	if (typeof item === 'number') {
			// 		return item
			// 	} else {
			// 		console.log(colorArr1[2])
			// 		return {
			// 			value: item,
			// 			itemStyle: {
			// 				color: colorArr1[2]
			// 			}
			// 		}
			// 	}
			// })

			const barWidth = 30
			const option = {
				tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						var str = params[0].name + ':'
						params.filter(function (item) {
							if (item.componentSubType == 'bar') {
								str += '<br/>' + item.seriesName + '：' + item.value
							}
						})
						return str
					}
				},
				grid: {
					top: '18%',
					left: '10%',
					right: '10%',
					bottom: '18%'
				},
				legend: {
					show: true,
					icon: 'rect',
					itemHeight: 12,
					itemWidth: 12,
					fontSize: 14,
					data: [
						{
							name: '室内接发车',
							icon: 'rect',
							// 设置文本为红色
							itemStyle: {
								color: '#62ADFF'
							}
						},
						{
							name: '室内接发车1',
							icon: 'rect',
							// 设置文本为红色
							itemStyle: {
								color: '#FFEC66'
							}
						},
                        {
                            name: '单位:站场',
                            icon: 'none',
                            // 设置文本为红色
                            itemStyle: {
                                color: '#FFEC66'
                            }
                        }
					],
					textStyle: {
						color: '#fff',
						fontSize: '13'
					}
				},
				xAxis: {
					data: ['xx站', 'xx站', 'xx站', 'xx站', 'xx站'],
					// show: false,
					// 坐标轴
					axisLine: {
						onZero: false,
						lineStyle: {
							width: 1,
							color: '#f4f4f4'
						}
					},
					spliteLine: {
						show: false
					},
					offset: 8,
					type: 'category',
					axisLabel: {
						textStyle: {
							color: '#f4f4f4',
							fontWeight: 500,
							fontSize: '14'
						}
					},
					axisTick: {
						show: true
					},
				},
				yAxis: {
					type: 'value',
					// 坐标轴
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					// 坐标值标注
					axisLabel: {
						show: false
					},
					// 分格线
					splitLine: {
						show: false,
						lineStyle: {
							color: '#13365f'
						}
					}
				},
				series: [
					{
						z: 1,
						name: '室内接发车',
						type: 'bar',
						barWidth: 20,
						barGap: '50%',
						data: dataColor,
						showBackground: true,
						label: {
							normal: {
								show: true, // 开启显示
								position: 'top', // 柱形上方
								textStyle: {
									// 数值样式
									color: '#fff'
								}
							}
						},
						itemStyle: {
							normal: {
								color: color
							}
						}
					},
					{
						// 底
						z: 2,
						name: '室内接发车1',
						type: 'pictorialBar',
						data: dataColor,
						symbol: 'diamond',
						symbolOffset: ['0%', '54%'],
						symbolSize: [20, 8],
						itemStyle: {
							normal: {
								color: color
							}
						},
						tooltip: {
							show: false
						}
					},
					{
						// 顶
						z: 3,
						name: '单位:站场',
						type: 'pictorialBar',
						symbolPosition: 'end',
						data: data2,
						symbol: 'diamond',
						symbolOffset: ['0%', '-50%'],
						symbolSize: [20, 8],
						itemStyle: {
							normal: {
								borderWidth: 2,
								color: colorArr[2]
							}
						},
						tooltip: {
							show: false
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
