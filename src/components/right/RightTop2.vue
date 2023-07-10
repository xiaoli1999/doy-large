<template>
    <div class="main-content">
        <div class="top">雨量监测</div>
        <div class="content">
            <div class="table-row table-head">
                <div class="row1">检测点</div>
                <div class="row2">雨量数值</div>
                <div class="row3">状态</div>
            </div>
            <div class="table-content">
                <div v-for="(item, index) in list" :key="index" class="table-row table-tr">
                    <div class="row1">{{ item.name }}</div>
                    <div class="row2">{{ item.total }}</div>
                    <div class="row3">{{ item.state }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightTop2',
    data () {
        return {
            list: [
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' },
                { name: 'xx巡检点', total: 1000, state: '报警' }
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
                width: 150px;
            }

            .row2 {
                width: 150px;
            }

            .row3 {
                width: 68px;
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
                background-size: 100% 100%;
                margin-bottom: 8px;
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>
