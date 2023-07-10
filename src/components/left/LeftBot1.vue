<template>
    <div class="main-content">
        <div class="top">作业超时预警</div>
        <div class="content">
            <div class="table-row table-head">
                <div class="row1">项目名称</div>
                <div class="row2">流转环节</div>
                <div class="row3">责任部室</div>
                <div class="row4">预警天数</div>
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
    name: 'LeftBot1',
	data () {
		return {
			list: [
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 },
				{ name: '高炉堑护坡', area: '提报验收资料', total1: '生产部', total2: 0 }
			]
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
        .table-head {
            width: 558px;
            height: 40px;
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
                width: 160px;
            }

            .row2 {
                width: 160px;
            }

            .row3 {
                width: 134px;
            }

            .row4 {
                width: 134px;
            }

            div {
                text-align: center;
            }
        }

        .table-content {
            width: 558px;
            height: 268px;
            margin: 0 auto;
            overflow-y: scroll;

            .table-tr {
                width: 558px;
                height: 46px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 18px;
                color: #fff;
                background: url("../../assets/img/row-bg.png");
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
