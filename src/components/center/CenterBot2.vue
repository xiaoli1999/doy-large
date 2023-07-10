<template>
    <div class="main-content">
        <div class="top">列车运量统计</div>
        <div class="content">
            <div class="count">
                <div>完成运量</div>
                <div>（万吨）</div>
                <p><animate-number from="0" :to="21.76" duration="1200" /></p>
            </div>
            <div class="count">
                <div>完成比例</div>
                <div>（%）</div>
                <p><animate-number from="0" :to="108.4" duration="1200" /></p>
            </div>
            <div class="count">
                <div>完成吨开行</div>
                <div>（列）</div>
                <p><animate-number from="0" :to="30" duration="1200" /></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CenterBot2'
}
</script>

<style lang="less" scoped>
.main-content {
    width: 624px;
    background: url("../../assets/img/bg-m-2.png");
    background-size: 100% 100%;

    .content {
        display: flex;
        justify-content: center;
        margin-top: 40px;

        .count {
            width: 184px;
            height: 253px;
            color: #FFFFFF;
            text-align: center;
            line-height: 1;

            &:nth-child(1) {
                background: url("../../assets/img/count1.png");
                background-size: 100% 100%;
                margin-right: 18px;
            }

            &:nth-child(2) {
                background: url("../../assets/img/count2.png");
                background-size: 100% 100%;
                margin-right: 12px;
            }

            &:nth-child(3) {
                background: url("../../assets/img/count3.png");
                background-size: 100% 100%;
            }

            > div {
                font-size: 20px;

                &:nth-child(1) {
                    padding: 136px 0 12px 0;
                }
            }

            > p {
                font-size: 32px;
                font-family: YouSheBiaoTiHei;
                margin-top: 30px;
            }
        }
    }
}
</style>
