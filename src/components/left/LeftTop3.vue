<template>
    <div class="main-content">
        <div class="top">公务</div>
        <div class="content">
            <div class="table-row table-head">
                <div class="row1"><span>作业内容</span></div>
                <div class="row2"><span>位置</span></div>
                <div class="row3"><span>巡检共计</span></div>
                <div class="row4"><span>维修共计</span></div>
            </div>
            <div class="table-content">
                <div v-for="(item, index) in list" :key="index" class="table-row table-tr">
                    <div class="row1"><span>{{ item.name }}</span></div>
                    <div class="row2"><span>{{ item.area }}</span></div>
                    <div class="row3"><span>{{ item.total1 }}</span></div>
                    <div class="row4"><span>{{ item.total2 }}</span></div>
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
    width: 208px;

    .content {
        .table-head {
            width: 184px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            font-weight: 400;
            color: #C9E6FF;
            margin: 0 auto;
        }

        .table-row {

            .row1 {
                width: 34px;
            }

            .row2 {
                width: 82px;
            }

            .row3 {
                width: 34px;
            }

            .row4 {
                width: 34px;
            }

            div {
                display: flex;
                justify-content: center;
                align-items: center;

                > span {
                    transform: scale(.66);
                    white-space: pre;
                }
            }
        }

        .table-content {
            width: 184px;
            height: 144px;
            margin: 0 auto;
            overflow-y: scroll;

            .table-tr {
                width: 184px;
                height: 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
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
