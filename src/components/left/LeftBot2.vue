<template>
    <div class="main-content">
        <div class="top">作业进度监管</div>
        <div class="content">
            <div id="chart-4"></div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-gl'

function getPie3D(pieData, internalDiameterRatio) {
	//internalDiameterRatio:透明的空心占比
	let series = [];
	let sumValue = 0;
	let startValue = 0;
	let endValue = 0;
	let legendData = [];
	let legendBfb = [];
	let k = 1 - internalDiameterRatio;
	pieData.sort((a, b) => {
		return (b.value - a.value);
	});
	// 为每一个饼图数据，生成一个 series-surface 配置
	for (let i = 0; i < pieData.length; i++) {
		sumValue += pieData[i].value;
		let seriesItem = {
			name: typeof pieData[i].name === 'undefined' ? `series${i}` : pieData[i].name,
			type: 'surface',
			parametric: true,
			wireframe: {
				show: false
			},
			pieData: pieData[i],
			pieStatus: {
				selected: false,
				hovered: false,
				k: k
			},
		};

		if (typeof pieData[i].itemStyle != 'undefined') {
			let itemStyle = {};
			typeof pieData[i].itemStyle.color != 'undefined' ? itemStyle.color = pieData[i].itemStyle.color : null;
			typeof pieData[i].itemStyle.opacity != 'undefined' ? itemStyle.opacity = pieData[i].itemStyle.opacity : null;
			seriesItem.itemStyle = itemStyle;
		}
		series.push(seriesItem);
	}

	// 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
	// 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
	legendData = [];
	legendBfb = [];
	for (let i = 0; i < series.length; i++) {
		endValue = startValue + series[i].pieData.value;
		series[i].pieData.startRatio = startValue / sumValue;
		series[i].pieData.endRatio = endValue / sumValue;
		series[i].parametricEquation = getParametricEquation(series[i].pieData.startRatio, series[i].pieData.endRatio,
			false, false, k, series[i].pieData.value);
		startValue = endValue;
		legendData.push({
			name: series[i].name,
		});
		legendBfb.push({
			name: series[i].name,
		});
	}
	// 准备待返回的配置项，把准备好的 legendData、series 传入。
	let option = {
		grid: {
			left: '0%',
			right: '20%',
			top: '0%',
			bottom: '0%',
			containLabel: true
		},
		legend: {
			show: true,
			right: '8%',
			top: 'center',
			orient: 'vertical',
			borderRadius: 0,
			data: legendData,
			itemWidth: 20,
			itemHeight: 20,
			textStyle: {
				color: "#fff",
                fontSize: 14
			}
		},
		xAxis3D: {
			min: -1,
			max: 1
		},
		yAxis3D: {
			min: -1,
			max: 1
		},
		zAxis3D: {
			min: -1,
			max: 1
		},
		grid3D: {
			show: false,
			boxHeight: 30, // 厚度
			viewControl: {
				//3d效果可以放大、旋转等，请自己去查看官方配置
				alpha: 34, // 角度
				beta: 260, // 饼块开始位置角度
				rotateSensitivity: 0,
				zoomSensitivity: 0,
				panSensitivity: 0,
				autoRotate: false,
			},
			light: {
				main: {
					color: "rgb(85, 84, 84)", // 主光源的颜色。
					shadow: true, // 主光源是否投射阴影
					alpha: 78, // 主光源绕 x 轴，即上下旋转的角度
				},
			},
		},
		series: series
	};
	return option;
}

//获取3d丙图的最高扇区的高度
function getHeight3D(series, height) {
	series.sort((a, b) => {
		return (b.pieData.value - a.pieData.value);
	})
	return height * 25 / series[0].pieData.value;
}

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
function getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
	// 计算
	let midRatio = (startRatio + endRatio) / 2;
	let startRadian = startRatio * Math.PI * 2;
	let endRadian = endRatio * Math.PI * 2;
	let midRadian = midRatio * Math.PI * 2;
	// 如果只有一个扇形，则不实现选中效果。
	if (startRatio === 0 && endRatio === 1) {
		isSelected = false;
	}
	// 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
	k = typeof k !== 'undefined' ? k : 1 / 3;
	// 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
	let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
	let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
	// 计算高亮效果的放大比例（未高亮，则比例为 1）
	let hoverRate = isHovered ? 1.05 : 1;
	// 返回曲面参数方程
	return {
		u: {
			min: -Math.PI,
			max: Math.PI * 3,
			step: Math.PI / 32
		},
		v: {
			min: 0,
			max: Math.PI * 2,
			step: Math.PI / 20
		},
		x: function (u, v) {
			if (u < startRadian) {
				return offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
			}
			if (u > endRadian) {
				return offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
			}
			return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
		},
		y: function (u, v) {
			if (u < startRadian) {
				return offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate;
			}
			if (u > endRadian) {
				return offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate;
			}
			return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
		},
		z: function (u, v) {
			if (u < -Math.PI * 0.5) {
				return Math.sin(u);
			}
			if (u > Math.PI * 2.5) {
				return Math.sin(u) * h * .1;
			}
			return Math.sin(v) > 0 ? 1 * h * .1 : -1;
		}
	};
}

function fomatFloat(num, n) {
	var f = parseFloat(num);
	if (isNaN(f)) {
		return false;
	}
	f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
	var s = f.toString();
	var rs = s.indexOf('.');
	//判定如果是整数，增加小数点再补0
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + n) {
		s += '0';
	}
	return s;
}

export default {
    name: 'LeftBot2',
	data () {
		return {
			color: ['#EBC53F', '#3D97EE'],
			list:  [
				{
                    name: "线路维护",
                    value: 4,
                    itemStyle: {
                        color: "#76d8f7aa"
                    }
			    },
				{
					name: "设备维修",
					value: 3,
					itemStyle: {
						color: "#5585ffaa"
					}
				},
				{
					name: "线路巡检",
					value: 1,
					itemStyle: {
						color: "#fff112aa"
					}
				},
				{
					name: "设别检查",
					value: 2,
					itemStyle: {
						color: "#29eda1aa"
					}
				}
            ]
		}
	},
	mounted () {
		this.initChart()
	},
	methods: {
		initChart () {
			const chartDom = document.getElementById('chart-4')
			const myChart = echarts.init(chartDom)
			myChart.clear()

			// 传入数据生成 option
			let option = getPie3D(this.list, 0.82);
			//是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
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
            width: 580px;
            height: 320px;
            margin-inline: auto;
        }
    }
}
</style>
