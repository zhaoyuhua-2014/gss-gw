<template>
  <div class="service">
    <div class="pc_service visible-md visible-lg">
      <headerNav></headerNav>
      <headTemplate :title="title"></headTemplate>
      <div class="progress_display">
        <div class="container">
          <div class="bar_img" ><img src="../../image/service-title.png" alt=""></div>
          <div class="progress_num">
              <dl class="row" v-for="(item,index) in data" :key="index">
                <dt class="col-md-7 " :class=" item.isOdd == 1 && 'col-md-push-4'">
                  <div>
                    <img src="../../image/no.png" alt="">
                    <img :src="item.num" alt="">
                    <span class="large_title">{{item.title}}</span>
                  </div>
                  <p>{{item.des}}</p>
                </dt>
                <dd class="col-md-4 " :class="item.isOdd == 1 && 'col-md-pull-7'">
                  <img :src="item.img" alt="">
                </dd>
              </dl>
          </div>
        </div>
      </div>
      <comFooter></comFooter>
    </div>
    <div class="mobile_service hidden-md hidden-lg">
      <MheaderNav></MheaderNav>
      <MheadTemplate :title="title"></MheadTemplate>
      <div class="title">
        <img src="../../image/service-title.png"  width="90%"  alt="">
      </div>
      <div class="content">
        <dl v-for="(item,index) in data" :key="index">
          <dt>
              <img :src="item.img" alt="" width="50%">
          </dt>
          <dd>
            <img :src="item.Mnum" alt="" width="44px">
            <span class="large_title">{{item.title}}</span>
          </dd>
          <dd>{{item.des}}</dd>
        </dl>
      </div>
      <Mfooter></Mfooter>
    </div>
  </div>
</template>

<script>
// pc
import headerNav from "../../components/pc/nav.vue";
import comFooter from "../../components/pc/footer.vue";
import headTemplate from "../../components/pc/headTemplate.vue";
// mobile
import MheaderNav from "../../components/mobile/nav.vue";
import Mfooter from "../../components/mobile/footer.vue";
import MheadTemplate from "../../components/mobile/headTemplate.vue";
  export default {
    name:'service',
    data() {
      return {
        title:{0:'服务保障',1:'/Service assurance'},
        data:data,
      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate,
      MheaderNav,
      Mfooter,
      MheadTemplate
    },
  }
// 流程信息
let data = [
  {Mnum:'../../static/image/fwbz_no1.png', num:'../../static/image/no1.png',img:'../../static/image/service1.png', title:'专业采购', isOdd:'0', des:'我们有一支专业的采购团队，奔波于全国各个水果产地和水果市场，收集市场最新信息，查询当前市场行情，耐心的询价、比价、议价、用专业的眼光、严格的筛选标准，为客户挑选优质且性价比高的果品。'  },
  {Mnum:'../../static/image/fwbz_no2.png',num:'../../static/image/no2.png',img:'../../static/image/service2.png', title:'严格质检',isOdd:'1', des:'我们有一支专业的质检团队，遵循合理的质量监测方法，以最严格的标准为客户挑选最优质的果品。质量是企业的生存根本，也是我们的坚持与执着所在，全国跟踪水果质量，层层把关，精挑细选。' },
  {Mnum:'../../static/image/fwbz_no3.png',num:'../../static/image/no3.png',img:'../../static/image/service3.png', title:'精细分捡', isOdd:'0', des:'我们有一支专业的分拣团队，依据顾客的订单要求或配送计划，迅速、准确地将商品从其储位或其他区位捡取出来，由经验丰富的分拣人员，将商品规整放置，杜绝误单错单。准确、高效是我们不变的追求。'  },
  {Mnum:'../../static/image/fwbz_no4.png',num:'../../static/image/no4.png',img:'../../static/image/service4.png', title:'准时送达',isOdd:'1', des:'我们有一支专业的配送队伍，严格的人员筛选，统一的物流培训，科学的分配调度，合理的路线规划，确保我们的配送人员，以积极热情的服务态度，准时的将客户所需要的商品及时送达。' },
  {Mnum:'../../static/image/fwbz_no5.png',num:'../../static/image/no5.png',img:'../../static/image/service5.png', title:'验收保障', isOdd:'0', des:'我们给予客户充分的服务保障，合理验收是至关重要的一环。给每位客户预留足够的验货时间，秉承服务至上的原则，用专业的标准辅助客户验收商品，质量问题及时解决，客户验收后在付款，放心无忧。'  },
]
</script>

<style lang="less">
@import '../../style/mixin';
// pc 样式
  .pc_service{
    .li_service{
     .pcNav
    }
    .progress_display{
      margin-top: 50px;
      .progress_num{
        padding-top: 80px;
      }
      .bar_img,
      dd{
        text-align: center;
      }
      dl{
        padding:50px 30px;
        dt{
          font-weight: 100;
          .large_title{
            display: inline-block;
            font-size: 28px;
            line-height: 28px;
            vertical-align: middle;
          }
          img{
            vertical-align: middle;
          }
          p{
            margin-top:20px;
            font-size: 18px;
            line-height: 30px;
            text-indent: 36px;
          }
        }
        dd{
          margin-left: 30px;
        }
      }
      dl:nth-child(even){
        background-color: @gray_color;
        dd{
          margin-left:0;
        }
      }
    }
  }
  // mobile样式
  .mobile_service{
    .li_service{
      color: @btn_color;
    }
    .title{
      width: 100%;
      text-align: center;
    }
    .content{

      text-align: center;
      dl{
        padding: 5% 5%;
        dt{
          img{
            margin: 16px 0;
          }
        }
        dd{
          margin-bottom: 10px;
          text-align: left;
          color: #333;
          text-indent: 28px;
          font-size: 14px;
          line-height: 26px;
        }
        .large_title{
          margin-left: 8px;
          font-size: 18px;
          vertical-align: middle;
        }
      }
      dl:nth-child(even){
        background-color:#f4f4f4;
      }
    }
  }
</style>
