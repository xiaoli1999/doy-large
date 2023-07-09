<template>
    <div class="main-content">
        <div class="top">机务</div>
        <div class="content">
            <img src="../../assets/img/avatar.jpg" alt="">
            <div class="num">
                在线车辆数
                <animate-number from="0" :to="20" duration="1200" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftTop2'
}
</script>

<style lang="less" scoped>
.main-content {
    width: 208px;

    .content {
        > img {
            width: 180px;
            margin: 0 auto 14px;
        }

        .num {
            width: 162px;
            height: 20px;
            margin: 0 auto;
            background: url("../../assets/img/bg-stripe.png");
            background: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 600;
            color: #F7FCFF;

            > span {
                font-size: 16px;
                font-family: YouSheBiaoTiHei;
                color: #8DFF66;
                padding-left: 8px;
            }
        }
    }
}
</style>
