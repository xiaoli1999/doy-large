<template>
    <div class="main-content">
        <div class="top">公务</div>
        <div class="content">
            <div class="table-row table-head">
                <div class="row1">作业内容</div>
                <div class="row2">位置</div>
                <div class="row3">巡检共计</div>
                <div class="row4">维修共计</div>
            </div>
            <div class="table-content">
                <div v-for="(item, index) in list" :key="index" class="table-row table-tr">
                    <div class="row1">{{ item.name }}</div>
                    <div class="row2">{{ item.area }}</div>
                    <div class="row3">{{ item.total1 }}</div>
                    <div class="row4">{{ item.total2 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftTop3',
    data () {
        return {
            list: [
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 },
                { name: 'xx巡检', area: 'xx战区xx区段', total1: 10, total2: 12 }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.main-content {

    .content {
        .table-head {
            width: 368px;
            height: 32px;
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
                width: 64px;
            }

            .row2 {
                width: 176px;
            }

            .row3 {
                width: 64px;
            }

            .row4 {
                width: 64px;
            }

            div {
                text-align: center;
            }
        }

        .table-content {
            width: 368px;
            height: 288px;
            margin: 0 auto;
            overflow-y: scroll;

            .table-tr {
                width: 368px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 16px;
                color: #fff;
                background: url("../../assets/img/bot-line-s.png");
                background: 100% 100%;
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>
