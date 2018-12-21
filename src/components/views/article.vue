<template>
    <div class="advertorial">
        <h2 class="rich_media_title">
            【提醒】人的思想是了不起的，只要专注于某一事业，那就一定会做出是自己吃惊的成绩来！
        </h2>
        <div class="rich_media_meta_list">
            <a href="javascript:void(0);">人民日报</a>
            <span>9月6日</span>
        </div>
        <div class="rich_media_content">
            <p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;margin-bottom:30px;text-indent:25px">
                <span style="max-width: 100%;font-size: 18px;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                    中国足协举办的2018赛季职业联赛总结大会于20日在上海召开，会议对俱乐部约定的财务指标进行了明文规定。
                </span>
            </p>
            <p>
                <img src="../../assets/img.png" alt="" style="width:100%">
            </p>
            <p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;margin-bottom:30px;">
                <span style="max-width: 100%;font-size: 18px;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                    据悉，为引导俱乐部理性投入，自2019年起设置俱乐部总支出的最高限额。其中，中超联赛2019、2020、2021年的限额分别为12亿、11亿和9亿，但此支出限额不包括青训等支出。
                </span>
            </p>
            <p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;margin-bottom:30px;text-indent:25px">
                <span style="max-width: 100%;font-size: 18px;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                    为降低俱乐部薪酬总额，调整俱乐部人工成本占总支出比例极高的实际情况，设置俱乐部薪酬限额。其中，中超俱乐部薪酬比例（一线队外援、国内球员、预备队球员）在2019、2020、2021年分别为：65%、60%、55%。其中，
                    <strong style="max-width: 100%;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                        国内球员个人薪酬最高（不含奖金）不得超过税前1000万元人民币，
                    </strong>
                    部分国脚可按上浮20%执行。自2019年1月1日起，在中国足协新备案的合同按限额签订。合同尚未到期的球员，待现有合同到期后再按限额重新签订。
                </span>
            </p>
            <p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;text-indent:25px">
                <span style="max-width: 100%;font-size: 18px;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                    俱乐部全年奖金总额（全年赢球奖金和平球奖金的总额），纳入俱乐部总支出限额内。其中中超赢球奖金不得超过300万元一场。
                </span>
            </p><p style="max-width: 100%;min-height: 1em;box-sizing: border-box !important;overflow-wrap: break-word !important;margin-bottom:30px;text-indent:25px">
                <span style="max-width: 100%;font-size: 18px;box-sizing: border-box !important;overflow-wrap: break-word !important;">
                    在引援调节费方面，继续按照原有政策执行。U23政策继续沿用，外援政策保持不变。自2019年起，申请中超、中甲准入的俱乐部在报名大名单中，应有本俱乐部培养的U21球员。对于阴阳合同，中国足协将视违规情节，给予俱乐部扣除联赛积分、取消准入资格，给予教练员、球员一至三年禁赛等处罚。
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
     
    }
  },
  created(){
   
  },
  methods:{
    
  },
  components: {
    
  }
}
</script>

<style scoped lang="scss">
.advertorial{
    background-color: #fff;
    padding:20px 16px 60px;
    overflow-y:auto;
    height: calc(100vh - 60px);
    .rich_media_title{
        font-size: 22px;
        line-height: 1.4;
        margin-bottom: 14px;
    }
    .rich_media_meta_list{
        margin-bottom: 22px;
        line-height: 20px;
        font-size: 0;
        >a{
            margin: 0 10px 10px 0;
            font-size: 15px;
            color:#576b95;
            text-decoration: none;
        }
        >span{
            color:rgba(0,0,0,0.3);
            margin: 0 10px 10px 0;
            font-size: 15px;
        }
    }
    .rich_media_content{
        overflow: hidden;
        color: #333;
        font-size: 17px;
        word-wrap:break-word;
        text-align: justify;
    }
}
</style>
