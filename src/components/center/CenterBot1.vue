<template>
    <div class="main-content">
        <div class="top">列车运行图</div>
        <div class="content">
            <div class="train-top">
                <div>
                    <div>A站</div>
                    <img src="../../assets/img/train-bot.png" alt="">
                </div>
                <img src="../../assets/img/train-line.png" alt="">
                <div>
                    <div>B站</div>
                    <img src="../../assets/img/train-bot.png" alt="">
                </div>
                <img src="../../assets/img/train-line.png" alt="">
                <div>
                    <div>C站</div>
                    <img src="../../assets/img/train-bot.png" alt="">
                </div>
            </div>
            <div class="train-main">
                <div class="train-m-top">
                    <img src="../../assets/img/train.png" alt="">
                    车次345
                </div>
                <div class="train-m-img">
                    <img src="../../assets/img/bar-2.png" style="opacity: 0;" alt="">
                    <img src="../../assets/img/bar-1.png" alt="">
                </div>
                <div class="train-m-bot">
                    <span style="opacity: 0;">18:30</span>
                    <span>18:30</span>
                    <span>18:30</span>
                </div>
            </div>
            <div class="train-main">
                <div class="train-m-top">
                    <img src="../../assets/img/train.png" alt="">
                    车次899
                </div>
                <div class="train-m-img">
                    <img src="../../assets/img/bar-1.png" alt="">
                    <img src="../../assets/img/bar-2.png" style="opacity: 0;" alt="">
                </div>
                <div class="train-m-bot">
                    <span>18:30</span>
                    <span>18:30</span>
                    <span style="opacity: 0;">18:30</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CenterBot1'
}
</script>

<style lang="less" scoped>
.main-content {
    width: 624px;
    background: url("../../assets/img/bg-m-2.png");
    background-size: 100% 100%;

    .content {
        width: 574px;
        margin-inline: auto;

        .train-top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > div {
                text-align: center;
                font-size: 24px;
                font-family: YouSheBiaoTiHei;
                color: #FFFFFF;
                line-height: 14px;
                letter-spacing: 1px;

                > img {
                    width: 54px;
                }
            }

            > img {
                width: 182px;
                margin: 0 auto;
            }
        }

        .train-main {
            margin-top: 24px;

            .train-m-top {
                display: flex;
                align-items: center;
                font-size: 18px;
                font-weight: 500;
                color: #6CD3FF;
                letter-spacing: 1px;

                > img {
                    width: 30px;
                    margin-right: 8px;
                }
            }
            .train-m-img {
                display: flex;
                align-items: center;
                background: #3979BB40;
                margin: 16px 0;

                > img {
                    width: 50%;
                    height: 20px;
                    object-fit: none;
                }
            }

            .train-m-bot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 18px;
                font-weight: 500;
                color: #FFFFFF;
                letter-spacing: 1px;
            }
        }
    }
}
</style>
