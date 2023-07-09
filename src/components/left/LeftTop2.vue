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
    width: 406px;

    .content {
        > img {
            width: 352px;
            margin: 30px auto;
        }

        .num {
            width: 324px;
            height: 36px;
            margin: 0 auto;
            background: url("../../assets/img/bg-stripe.png");
            background: 100% 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 600;
            color: #F7FCFF;

            > span {
                font-size: 26px;
                font-family: YouSheBiaoTiHei;
                color: #8DFF66;
                padding-left: 16px;
                padding-top: 4px;
            }
        }
    }
}
</style>
