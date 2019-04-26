<template>
  <div class="introduce">
    <headerNav></headerNav>
    <headTemplate :title="title"></headTemplate>
    <div class="introduce_area">
      <div class="container">
        <div class="brand_introduction row">
            <img class="col-md-4" src="../../image/gsjs_company.png" alt="">
            <div class="col-md-7">
              <div class='title'><img src="../../image/gsjs_title.png" alt=""><span>品牌简介</span></div>
              <p>“果速送”为杭州果速信息科技有限公司旗下品牌。品牌成立于2015年，是一个立足于高科技互联网技术，经营水果批发、配送于一体的全品类综合服务性品牌，打造了全国地区一站式水果采购配送的服务平台。</p>
              <p>果速送平台致力于解决中小型水果店及有持续水果采购需求的餐饮店解决水果进货问题。我们严格把控水果把控源头，建立完善的配送体系，提供一站式采购配送服务，解决客户采购累、进价高等实质性问题。 </p>
            </div>
        </div>
        <div class="development_history">
          <div class='title'><img src="../../image/gsjs_title.png" alt=""><span>发展历程</span></div>
          <div class="development">
            <dl v-for="(item,index) in developmentData " :key="index"  class="row">
              <dt class="col-md-3">
                <span class="year">{{item.year}}</span>
                <span class="month">{{item.month}}</span>
                <img src="../../image/gsjs-circle.png" alt="">
                <img src="../../image/gsjs-line.png" alt="">
                <img src="../../image/gsjs-dian.png" alt="">
              </dt>
              <dd class="col-md-9">{{item.des}}</dd>
              <dd class='line_position' v-show="index!=(developmentData.length-1)"><img src="../../image/gsjs_shu.png" alt=""> </dd>
            </dl>
          </div>
        </div>
        <div class="brand_concept">
           <div class='title'><img src="../../image/gsjs_title.png" alt=""><span>品牌理念</span></div>
           <div class="row">
             <dl class="col-md-3" v-for="(item,index) in brandData" :key="index">
              <dt>{{item.title}}</dt>
              <dd>{{item.des}}</dd>
            </dl>
           </div>
        </div>
        <div class="team_introduction row">
          <img class="col-md-4" src="../../image/gsjs_bottom.png" alt="">
          <div class="col-md-7">
            <div class='title'><img src="../../image/gsjs_title.png" alt=""><span>团队介绍</span></div>
            <p>公司拥有一支富有朝气的团队，我们的团队成员来自五湖四海，是综合性的专业团队。有互联网行业精英，有丰富果蔬经营经验的采购专员，有媒体从业人员，有优质的配送队伍。为了一个共同的梦想走到了一起。</p>
            <p>我们虽然拥有不同的性格、教育背景和工作经历，但都有共同的一个特点：我们满怀理想，但又脚踏实地地去实现。</p>
            <p>在这里，我们严格把关果速送平台运行的每一个环节，共筑优质水果生态链；我们优势互补，拥有无限广阔的施展空间；在这里，我们在一起，没有曲高和寡，只有相伴前行。</p>
          </div>
        </div>
      </div>
    </div>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
import headTemplate from "../../components/headTemplate.vue";
  export default {
    name:'introduce',
    data() {
      return {
          title:'公司介绍 /Company introduction',
          developmentData:developmentData,
          brandData:brandData
      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate
    },
  }
let developmentData = [
  {year:'', month:'05月', des:'果速送不单单依靠水果批发市场，开始走产地直销，与多家水果农业基地合作，达成战略伙伴；'},
  {year:'', month:'03月', des:'果速送杭州商家会员数量突破3500家，日交易额突破25万元；果速送南京站商家会员数突破1500家，日交易额突破15万元；果速送宁波站商家会员数突破1000家，日交易额突破8万元；'},
  {year:'2018年', month:'01月', des:'果速送进行全面改革，开启新的战略规划；'},
  {year:'', month:'12月', des:'果速送服务商家数目快速增长，杭州南京宁波累计完成每天600家商家的服务业务量；'},
  {year:'', month:'10月', des:'果速送宁波站商家会员数突破150家，日交易额突破5万元；'},
  {year:'', month:'08月', des:'果速送启动宁波站点，正式入驻宁波水果服务市场；'},
  {year:'', month:'05月', des:'果速送宁波站正式启动筹建工作；'},
  {year:'', month:'04月', des:'果速送杭州商家会员数量突破1900家；果速送南京站商家会员数突破400家；'},
  {year:'', month:'02月', des:'果速送南京站商家会员数量突破200家；月交易额首破100万；'},
  {year:'2017年', month:'01月', des:'果速送杭州站商家会员数量突破1600家；'},
  {year:'', month:'12月', des:'果速送启动南京站点，正式入驻南京水果服务市场；'},
  {year:'', month:'11月', des:'果速送微信移动商城正式上线，日交易额突破30万人民币；'},
  {year:'', month:'10月', des:'果速送启动A轮融资计划，多家投资机构签订意向投资协议，市场估值已超过5000万美金；'},
  {year:'', month:'09月', des:'果速送商家会员数达到1500家，杭州市场份额占有率59%，远远领先其他竞争对手；'},
  {year:'', month:'08月', des:'果速送商家会员数达到1000家，日交易额首次突破20万元，并且业务扭转亏损实现盈利的里程碑；'},
  {year:'', month:'07月', des:'研发配送线路LBS辅助系统，优化配送服务流程，实现配送费占有率控制在6%以内的目标；'},
  {year:'', month:'06月', des:'优化业务流程，实现损耗率控制在1%以内的目标；'},
  {year:'', month:'05月', des:'果速送商家会员数达到800家，同时果速送CRM-APP正式上线；'},
  {year:'', month:'03月', des:'果速送商家会员数达到500家，同时果速送APP正式上线；'},
  {year:'2016年', month:'02月', des:'果速送商家会员数突破100家，日交易额突破5万元；'},
  {year:'', month:'11月', des:'果速送服务商家数目快速增长，完成每天50家商家的服务业务量；'},
  {year:'', month:'10月', des:'果速送平台微信移动商城正式发布，首批5家商家正式接受果速送的服务；'},
  {year:'', month:'09月', des:'正式成立“果速送”项目开启新的战略规划，完成了“果速送”平台的商标注册、LOGO设计以及基本业务流的设计；'},
  {year:'2015年', month:'08月', des:'公司提出互联网水果生鲜S2B战略规划，真正解决杭州市中小型水果零售渠道开店难的根本问题；'},
]
let brandData = [
  {title:'专业',des:'专业的团队运作，严格把关果速送平台的每一个环节，共筑优质水果生态链。'},
  {title:'便捷',des:'在果速送平台直接下单，批发预定水果，告别严寒酷暑，坐等配送上门。'},
  {title:'实惠',des:'移动的水果批发市场，实时更新水果信息，批发价直供，不加价，更优惠。'},
  {title:'省心',des:'果速送商城随时随地下单，提前备货，出货快，无库存，低损耗，省心无忧。'},
]
</script>

<style lang="less">
.introduce{
  .li_introduce{
    background-color: #ffc82f;
    color: #fff;
    &:hover{
      color:#fff !important;
    }
  }
  .title{
    img{
        vertical-align: bottom;
    }
    span{
      margin-left:10px;
      font-size: 32px;
      line-height: 32px;
    }
  }
}
.introduce_area{
  margin-top: 80px;
  .container{
    padding:0 50px;
  }
  .brand_introduction,
  .team_introduction{
    margin-bottom: 50px;
    .col-md-4{
      margin-left:30px;
      margin-right:30px;
    }
    p{
      font-size:16px;
      text-indent: 22px;
      line-height: 28px;
    }
    .title{
      margin-bottom:8px;
      margin-left:22px;
    }

  }
  .development_history{
    .title{
      text-align: center;
      margin-bottom: 50px;
    }
    dl{
      position: relative;
      height: 86px;
      font-size: 0;
      span,
      dd{
         display: inline-block;
        vertical-align: middle;
        line-height:30px;
        font-size:16px;
        font-weight: 100;
      }
      .year{
        width:60px;
        color: #ffc82f;
      }
      .month{
        width:40px;
      }
      .line_position{
        position: absolute;
        top:30px;
        left:128px;
      }
    }
  }
  .brand_concept{
    .title{
      text-align: center;
      margin-bottom: 50px;
    }
    dl + dl{
      // padding: 0 30px;
      margin-left:10px;

    }
    dl{
      width:24%;
      padding:0 30px;
      height:350px;
      box-sizing:border-box;
      background-color: #fef8ea;
      dt{
        width: 120px;
        height: 46px;
        margin:30px auto 20px;
        font-size: 25px;
        text-align: center;
        line-height: 46px;
        color: white;
        background-color: #ffc82f;
      }
      dd{
        font-size: 20px;
      }
    }
  }
  .team_introduction{
    margin-top:80px;
    .title{
      margin-bottom:20px;
    }
  }
}

</style>
