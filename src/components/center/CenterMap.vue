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
            mapData: null
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
				series: [
					{
						type: 'map',
						map: 'doy',
						roam: true,
						zoom: 1.5,
						label: {
							show: true
						},
						emphasis: {
							label: {
								show: true
							}
						},
						// 自定义区域样式
						itemStyle: {
							// 区域默认样式
							// normal: {
							// 	borderColor: '#000',
							// 	areaColor: '#ccc'
							// },
							// 区域高亮样式
							// emphasis: {
							// 	areaColor: '#f00'
							// }
						},
						// 区域点击事件
						// 例如: 根据区域ID进行相应操作
						// 可以在点击事件中添加路径绘制和标记的逻辑
						// click: function (params) {
						// 	var regionId = params.data.id;
						// 	// 根据区域ID绘制路径和标记
						// 	drawPathAndMarker(regionId);
						// }
					}
				]
			});

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
