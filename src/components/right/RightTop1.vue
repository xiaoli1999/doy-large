<template>
    <div class="main-content">
        <div class="top">线路变形检测</div>
        <div class="content">
            <div class="table-row table-head">
                <div class="row1">方向</div>
                <div class="row2">最大值</div>
                <div class="row3">最小值</div>
                <div class="row4">平均值</div>
                <div class="row5">对应测点</div>
                <div class="row6">位置</div>
                <div class="row7">采集时间</div>
                <div class="row8">测点预告</div>
            </div>
            <div class="table-content">
                <div v-for="(item, index) in list" :key="index" class="table-row table-tr">
                    <div class="row1">{{ item.direction }}</div>
                    <div class="row2">{{ item.max }}</div>
                    <div class="row3">{{ item.min }}</div>
                    <div class="row4">{{ item.ave }}</div>
                    <div class="row5">{{ item.point }}</div>
                    <div class="row6">{{ item.area }}</div>
                    <div class="row7">{{ item.time }}</div>
                    <div class="row8"><span></span>{{ item.report }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightTop1',
    data () {
        return {
            list: [
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' },
                { direction: 'X方向角度', max: '0.1°', min: '0.1°', ave: '0.1°', point: '立杆倾斜与立杆轴力01', area: 'xxxxx大桥', time: '2022-10-23 14:23:23',  report: '三级' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main-content {
    width: 750px;
    background: url("../../assets/img/bg-m-3.png");
    background-size: 100% 100%;

    .content {
        .table-head {
            width: 690px;
            min-height: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 16px;
            font-weight: 400;
            color: #C9E6FF;
            margin: 0 auto;
        }

        .table-row {

            .row1 {
                width: 90px;
            }

            .row2 {
                width: 48px;
            }

            .row3 {
                width: 48px;
            }

            .row4 {
                width: 64px;
            }

            .row5 {
                width: 110px;
            }

            .row6 {
                width: 90px;
            }

            .row7 {
                width: 104px;
            }

            .row8 {
                width: 64px;
            }

            div {
                text-align: center;
            }
        }

        .table-content {
            width: 690px;
            height: 288px;
            margin: 0 auto;
            overflow-y: scroll;

            .table-tr {
                width: 690px;
                min-height: 32px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 16px;
                color: #fff;
                background: url("../../assets/img/bot-line-b.png");
                background-size: 100% 100%;
                margin-bottom: 10px;
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>
