<template>
  <div class="job_details">
    <headerNav></headerNav>
    <div class="details_area container">
      <ul class="breadcrumb">
          <router-link :to="'home'" tag="li">首页</router-link>
          <router-link :to="'join'" tag="li">加入我们</router-link>
          <li class="active">{{data.name}}</li>
      </ul>
      <div class="row">
        <div class="col-md-9">
          <div class="job_information">
            <p><span class="name">{{data.name}}</span><span class="address">{{data.address}}</span></p>
            <p class="salary">{{data.money}}</p>
            <p>杭州果速科技有限公司</p>
            <p>民营公司 | 50-150人 | 互联网/电子商务</p>
          </div>
          <div class="job_require">
              <ul class="row require">
                <li class="col-md-2">{{data.experience}}</li>
                <li class="col-md-2">招聘{{data.num}}人</li>
                <li class="col-md-2">{{data.time}}</li>
              </ul>
              <ul class="row welfare">
                <li class="col-md-1">五险一金</li>
                <li class="col-md-1">员工旅游</li>
                <li class="col-md-1">年终奖金</li>
                <li class="col-md-1">餐饮补贴</li>
              </ul>
              <p class="require_title">职位要求</p>
              <div v-html="data.jobDuties" class="content">
              </div>
              <p class="require_title">岗位职责</p>
              <div v-html="data.jobRequirements" class="content">
              </div>
              <p>工作地址:{{data.address}}</p>
              <p>公司福利齐全，五险一金、法定节假日、年终奖、年休假、旅游、工作日餐补每日15元，不定期团建活动。</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="company_logo">
            <img src="../../../image/jlxq_logo.png" alt="">
            <p>杭州果速科技有限公司</p>
            <router-link :to="'home'" tag="span">查看主页</router-link>
          </div>
          <div class="other">
            <p class="other_title">其他职位</p>
            <dl v-for="(item,index) in  jsonData" :key="index" v-show ="index != num">
                <dt @click="joinDetail(index)">{{item.name}}</dt>
                <dd><span>{{item.money}}</span>/{{item.degree}}</dd>
                <dd>{{item.time}}发布</dd>
            </dl>
            <router-link :to="'join'" tag="p" >更多职位>>></router-link>
          </div>
          <ul class="row work_label">
            <li class="col-md-4">弹性工作</li>
            <li class="col-md-4">团队融洽</li>
            <li class="col-md-4">领导nice</li>
            <li class="col-md-4">待遇丰厚</li>
          </ul>
          <img src="../../../image/gwxq.png" alt="">
        </div>
      </div>
    </div>
     <div class="footer_bottom">
        <p><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">浙ICP备13029432号-5 | Copyright©2015-2021</a> 杭州果速科技有限公司 版权所有</p>
      </div>
  </div>
</template>

<script>
import headerNav from "../../../components/pc/nav.vue";
  export default {
    name:"jobDetails",
    data() {
      return {
        data:{},
        jsonData:jsonData,
        num:null
      }
    },
    components:{
      headerNav
    },
    mounted(){
      this.num = this.$route.query.index
      this.data = jsonData[this.num]
    },
    methods:{
      joinDetail(index){
        let routerJump = this.$router.resolve({path:'/jobDetails',query:{index:index}})
        window.open(routerJump.href,'_blank')
      }
    }
  }
let jsonData = [{
  name:'仓库管理员',
  address:'杭州-余杭区-勾庄',
  money:'4.5k-6k/月',
  experience:'一年经验',
  degree:'高中',
  num:'5',
  time:'2018-06-07',
  jobDuties:'1、仓库进销存处理。<br/>2、每日报表处理。<br/>3、每日账款整理。<br/>4、库存数据整理。',
  jobRequirements:'1、会开车，根据订单配送。<br/>2、熟悉运用APP软件。<br/>3、会做账，熟悉仓库进销存管理流程。<br/>4、有一年以上仓库管理工作经验。<br/>5、能适应夜班和高强度工作。<br/>6、能熟练操作电子表格和文档。<br/>7、高中以上学历。<br/>8、有水果生鲜行业经验者优先。'
},{
  name:'数据分析',
  address:'杭州-滨江',
  money:'4.5k-6k/月',
  experience:'一年经验',
  degree:'大专',
  num:'5',
  time:'2018-06-07',
  jobDuties:'1、分析各项商品相关数据，并对数据提出合理性的意见和建议；<br/>2、负责平台商品数据监控、数据管理、运营数据分析，为策划活动提供决策支持；<br/>3、协助业务运营以及活动策划，跟踪数据、分析效果，迭代调整；<br/>4、领导交代的其他事情；',
  jobRequirements:'1.数学、统计学、计算机等相关专业；<br/>2.1年互联网数据分析经验，熟悉互联网业务；<br/>3.熟悉使用excel、ppt等办公软件，特别是函数、数据透视表；<br/>4.有强烈的责任心，善于思考、发现问题、解决问题；'
},{
  name:'客服专员',
  address:'杭州-余杭区-勾庄',
  money:'3k-4.5k/月',
  experience:'无',
  degree:'中专',
  num:'5',
  time:'2018-06-07',
  jobDuties:' 1、处理毎日客户订单情况并及时回报； <br/>2、负责与仓库对接，合理安排发货任务；<br/>3、统计销售及回款数据，及时上报领导；<br/>4、完成上级交给的其它事务性工作；',
  jobRequirements:'1.18-30 岁，中专以上学历，踏实，热情，普通话标准清晰，反应敏捷、表达能力强；<br/>2.能吃苦，服从管理，善于沟通，有一定计算机基础，能熟练使用OFFICE 软件；<br/>3.有责任心，有较强的工作积极主动性，懂得如何调配时间，合理安排工作；<br/>4.身体健康、品行端正、无不良嗜好；<br/>5.具备一定的市场分析及判断能力，良好的客户服务意识；<br/>6.有责任心，有团队协作精神，能承受较大的工作压力；'
},{
  name:'采购专员',
  address:'杭州-余杭区-勾庄',
  money:'3.5k-10k/月',
  experience:'一年经验',
  degree:'高中',
  num:'5',
  time:'2018-06-07',
  jobDuties:' 1、水果采购工作。',
  jobRequirements:'1.高中以上学历，有水果采购工作经验优先考虑。<br/>2.责任心强， 人际沟通交往能力强，能独立开展工作，具备一定的承压能力。<br/>3.掌握水果品类的名称、规格、单价、产地。<br/>4.较强的谈判沟通能力，能与商家议价节约采购成本。'
}];
</script>

<style lang="less">
@import '../../../style/mixin';
  .job_details{
    .li_join{
     .pcNav
    }
    .details_area{
      margin-top:90px;
      margin-bottom: 60px;
      .breadcrumb{
        margin-bottom: 50px;
        background-color: @white_color;
        border-bottom: 1px solid @gray_color;
        color: #555;
        li + li:before {
          color: #CCCCCC;
          content: "> ";
          padding: 0 5px;
        }
        li:hover{
          cursor: pointer;
          color: @theme_color;
        }
      }
      .job_information{
        border:1px solid @gray_color;
        padding:30px;
        font-size: @font_size;
        background-color:#fafafa;
        line-height: 40px;
        .name{
          font-size: 28px;
        }
        .address{
          display: inline-block;
          margin-left:30px;
          background: url(../../../image/location.png) no-repeat center left  ;
          text-indent: 20px;
          background-size: 14%;
        }
        .salary{
          font-size: 28px;
          color: #f7b52b;
        }
      }
      .job_require{
        padding: 30px 30px 50px;
        margin-bottom: 50px;
        border:1px solid @gray_color;
        .require{
          li + li{
            margin-left: 38px;
          }
          li:nth-child(1){
            text-indent: 12px;
            background:url(../../../image/bz1.png) no-repeat center left  ;
          }
          li:nth-child(2){
            text-indent: 12px;
            background:url(../../../image/bz2.png) no-repeat center left  ;
          }
          li:nth-child(3){
            text-indent: 12px;
            background:url(../../../image/bz3.png) no-repeat center left  ;
          }
        }
        .welfare{
          li{
            width:9%;
            box-sizing:content-box;
            padding:6px;
            margin: 30px 0 0;
            border: 1px solid #f7b52b;
            text-align: center;
            font-weight: bold;
          }
          li + li{
            margin-left: 38px;
          }
        }
        p{
          line-height: 30px;
        }
        .require_title{
          margin:30px 0;
          font-size: 20px;
        }
        .row{
          margin: 0;
        }
        .content{
          line-height: 30px;
          margin-bottom:20px;
        }
      }
      .company_logo{
        padding: 30px 0;
        text-align: center;
        border: 1px solid @gray_color;
        p{
          margin: 15px 0;
          line-height: 40px;
        }
        span{
          padding:10px 42px;
          background-color: #fafafa;
        }
        span:hover{
          cursor: pointer;
          color: #f7b52b;
        }
      }
      .other{
        margin-top: 20px;
        padding:20px;
        border: 1px solid @gray_color;
        .other_title{
          font-size: 20px;
          margin-bottom:10px;
          color: #666;
        }
        dl{
          margin-bottom:10px;
          dt{
            color: #666;
            font-weight: 100;
            &:hover{
              color: #f7b52b;
              cursor: pointer;
            }
          }
          dd{
            color:#888;
            font-size: 12px;
            span{
              color: #f7b52b;
            }
          }
        }
        p:last-child{
          text-align: right;
          line-height: 30px;
          border-top:1px solid @gray_color;
          &:hover{
            color: #f7b52b;
            cursor: pointer;
          }
        }
      }
      .work_label{
         margin:30px 0;
        li{
          margin-left:30px ;
          margin-bottom: 10px;
          padding: 5px 10px;
          text-align: center;
          border: 1px solid #888;
          border-radius: 12px;
        }
      }
    }
    .footer_bottom {
      p{
        height: 80px;
        margin: 0 auto;
        font-size: 14px;
        text-align: center;
        line-height: 80px;
        color: #555;
        background-color: @gray_color;
        a{
          color: #333333;
        }
        a:link{
          color: #333333;
        }
      }
    }
  }
</style>
