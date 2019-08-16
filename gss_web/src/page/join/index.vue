<template>
  <div class="join">
    <div class="pc_join visible-md visible-lg">
      <headerNav></headerNav>
      <headTemplate :title="title"></headTemplate>
        <div class="join_area container">
            <div id="map_big"></div>
            <div class="row maps">
              <div class="col-md-4" id="map_one"></div>
              <div class="col-md-4" id="map_two"></div>
              <div class="col-md-4" id="map_three"></div>
            </div>
            <div class="join_us">
              <p class="title">加入我们</p>
              <div class="row tabs">
                <ul class="col-md-2">
                  <li @click="tab=0" :class="{'active':tab===0 }">招聘岗位</li>
                  <li @click="tab=1" :class="{'active':tab===1 }">常见问题</li>
                </ul>
                <div class="col-md-10">
                  <div class="recruit table-responsive" v-show="tab === 0">
                    <table class="table text-center">
                      <thead>
                        <tr class="active">
                          <th class="text-center" v-for="(item,index) in thData" :key="index" >{{item}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item,index) in data" :key="index">
                          <td class="td_hover" @click="joinDetail(item)">{{item.position}}</td>
                          <td>{{item.positionType}}</td>
                          <td>{{item.city}}</td>
                          <td>{{item.count}}</td>
                          <td>{{item.updateTime}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="problem" v-show="tab === 1">
                    <div class="step">招聘流程</div>
                    <div class="row">
                      <dl class="col-md-2"  v-for="(item,index) in imgData" :key="index">
                        <dd><img :src="item.img" alt=""></dd>
                        <dd>{{item.text}}</dd>
                      </dl>
                    </div>
                    <div class="step">公司福利</div>
                    <p>{{companyData.welfare}}</p>
                    <div class="step">工作地点</div>
                    <p>{{companyData.address}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      <comFooter></comFooter>
    </div>
    <div class="mobile_join hidden-md hidden-lg">
      <MheaderNav></MheaderNav>
      <MheadTemplate :title="title"></MheadTemplate>
      <div class="content">
        <div class="part_one">
          <p>{{companyData.siteAddress}}</p>
          <div id="mapContainer" class="container"></div>
          <p>{{companyData.siteAddress1}}</p>
          <div id="mapContainer1" class="container"></div>
          <p>{{companyData.siteAddress2}}</p>
          <div id="mapContainer2" class="container"></div>
          <P>{{companyData.siteAddress3}}</P>
          <div id="mapContainer3" class="container"></div>
        </div>
        <dl class="part_two">
          <dt>联系方式：</dt>
          <dd>电话：<a :href="'tel:'+ companyData.telephone"><span class="color_gray">{{companyData.telephone}}</span></a></dd>
          <dd>传真：<span class="color_gray">{{companyData.fax}}</span></dd>
          <dd>Email：<span class="color_red">{{companyData.email}}</span></dd>
          <dd><a class="color_red" :href="companyData.web">{{companyData.web}}</a></dd>
        </dl>
        <p class="extra_area">加入我们</p>
        <div class="part_three">
          <img src="../../image/mobile/gw.png" alt="" width="132px">
          <ul class="occupation">
            <li v-for="(item,index) in data" :key="index" @click="occupation(item)">{{item.position}}</li>
          </ul>
          <img src="../../image/mobile/wt.png" alt="" width="132px">
          <div class="problem">
            <div class="p_title">招聘流程</div>
            <ul class="clearfix">
              <li class="pull-left" v-for="(item,index) in imgData" :key="index"><img :src="item.Mimg" alt="" ></li>
            </ul>
           <div class="p_title">公司福利</div>
           <p>{{companyData.welfare}}</p>
           <div class="p_title">公司地址</div>
           <p>{{companyData.address}}</p>
          </div>
        </div>
      </div>
      <Mfooter></Mfooter>
      <Mpopover :data="occupationData" v-if="occupationData" v-on:listenClose = "close"></Mpopover>
      <div class="bg" v-if="occupationData"></div>
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
import Mpopover from "../../components/mobile/popover.vue";


import { getJobList } from "@/api/index.js";

  export default {
    name:'join',
    data() {
      return {
        tab:0,
        title:{0:"加入我们", 1:"/Join us"},
        data:[],
        thData:thData,
        imgData:imgData,
        companyData:companyData,
        occupationData:null
      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate,
      MheaderNav,
      Mfooter,
      MheadTemplate,
      Mpopover
    },
    mounted(){
      //pc
      let  mapBig  = new AMap.Map('map_big',{
        resizeEnable:true,
        zoom:17,
        center:[120.180579,30.18846]
      });
	    let mapOne  = new AMap.Map('map_one',{
        resizeEnable:true,
        zoom:15,
        center:[120.102548,30.37434]
      });

      let mapTwo = new AMap.Map('map_two',{
        resizeEnable:true,
        zoom:15,
        //118.8711510000,31.9888300000
        center:[118.8644000000,31.9907900000]
      });
      let mapThree = new AMap.Map('map_three',{
        resizeEnable:true,
        zoom:15,
        center:[121.6171900000,29.8218800000]
      });

      AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
        let markerBig = new AMap.Marker({
            map: mapBig,
            zIndex: 9999999,
            position: mapBig.getCenter()
        });

        let infoWindowBig = new SimpleInfoWindow({
            infoTitle: '<strong>杭州掌烁信息科技有限公司</strong>',
            infoBody: '<p class="my-desc">电话:0571-28107306、0571-28107307<br/> 地址:浙江省杭州市滨江区滨安路1180号华业大厦2308-2313室</p>',
      //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        function openInfoWinBig() {
            infoWindowBig.open(mapBig, markerBig.getPosition());
        }
        //marker 点击时打开
        AMap.event.addListener(markerBig, 'click', function() {
            openInfoWinBig();
        });
        openInfoWinBig();


        let markerOne = new AMap.Marker({
            map: mapOne,
            zIndex: 9999999,
            position: mapOne.getCenter()
        });

        let infoWindowOne = new SimpleInfoWindow({
            infoTitle: '<strong>杭州果速科技有限公司</strong>',
            infoBody: '<p class="my-desc">电话:400-0169682<br/> 地址:杭州市余杭区良渚街道 （勾庄） 博园西路7号酩创园一楼B01</p>',
      //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        function openInfoWinOne() {
            infoWindowOne.open(mapOne, markerOne.getPosition());
        }
        //marker 点击时打开
        AMap.event.addListener(markerOne, 'click', function() {
            openInfoWinOne();
        });
        openInfoWinOne();

        let markerTwo = new AMap.Marker({
            map: mapTwo,
            zIndex: 9999999,
            position: mapTwo.getCenter()
        });

        let infoWindowTwo = new SimpleInfoWindow({
            infoTitle: '<strong>南京果送信息科技有限公司</strong>',
            infoBody: '<p class="my-desc">电话:025-52718701<br/> 地址:南京市江宁区东山街道润麒路86号B座1层102-3室</p>',
      //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        function openInfoWinTwo() {
            infoWindowTwo.open(mapTwo, markerTwo.getPosition());
        }
        //marker 点击时打开
        AMap.event.addListener(markerTwo, 'click', function() {
            openInfoWinTwo();
        });
        openInfoWinTwo();


        let markerThree = new AMap.Marker({
            map: mapThree,
            zIndex: 9999999,
            position: mapThree.getCenter()
        });

        let infoWindowthree = new SimpleInfoWindow({
            infoTitle: '<strong>宁波果送信息科技有限公司</strong>',
            infoBody: '<p class="my-desc">电话:18658274055（周先生）<br/> 地址:宁波市鄞州区金辉东路18号3号门</p>',
      //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        function openInfoWinThree() {
            infoWindowthree.open(mapThree, markerThree.getPosition());
        }
        //marker 点击时打开
        AMap.event.addListener(markerThree, 'click', function() {
            openInfoWinThree();
        });
        openInfoWinThree();
      });

      //mobile
      let map = new AMap.Map('mapContainer',{
        resizeEnable:true,
        zoom:16,
        center:[120.180579,30.18846]
      });
      let marker = new AMap.Marker({
              position: [120.180579,30.18846]
      });
      marker.setMap(map);

      let map1 = new AMap.Map('mapContainer1',{
        resizeEnable:true,
        zoom:15,
        center:[120.102548,30.37434]
      });
      let marker1 = new AMap.Marker({
              position: [120.102548,30.37434]
      });
      marker1.setMap(map1);

      let map2 = new AMap.Map('mapContainer2',{
        resizeEnable:true,
        zoom:15,
        center: [118.8711510000,31.9888300000]
      });
      let marker2 = new AMap.Marker({
          position: [118.8711510000,31.9888300000]
      });
      marker2.setMap(map2);

      let map3 = new AMap.Map('mapContainer3',{
        resizeEnable:true,
        zoom:15,
        center: [121.6171900000,29.8218800000]
      });
      let marker3 = new AMap.Marker({
          position: [121.6171900000,29.8218800000]
      });
      marker3.setMap(map3);

      AMap.plugin([
        'AMap.ToolBar',
      ], function(){
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar({
              // 简易缩放模式，默认为 false
              liteStyle: true
          }));
          map1.addControl(new AMap.ToolBar({
              // 简易缩放模式，默认为 false
              liteStyle: true
          }));
          map2.addControl(new AMap.ToolBar({
              // 简易缩放模式，默认为 false
              liteStyle: true
          }));
          map3.addControl(new AMap.ToolBar({
              // 简易缩放模式，默认为 false
              liteStyle: true
          }));
      });
      let _this = this;
      getJobList().then( d =>{
	      _this.data = d.data || [];
	    }).catch( e =>{
	        console.log(e)
	    })
    },

    methods:{
      joinDetail(item){
      	console.log(item)
      	if(item.url){
      		window.open(item.url , '_blank')
      	}
        // this.$router.push({path:'/jobDetails',query:{index:index}})
      },
      occupation(item){
      	console.log(item)
      	if(item.url){
      		window.open(item.url , '_blank')
      	}
//      this.occupationData = jsonData[index]
//      $("html,body").css({overflow:"hidden"});
        // this.$nextTick(function () {
        //   let parentHeight =  $('.Mpopover').height();
        //   let childHeight = $('.Mpopover .part').height()
        //   if(parentHeight >  childHeight){
        //     $('.Mpopover ').css("bottom","auto")
        //   }
        // })
      },
      close(){
        this.occupationData = null;
        $("html,body").css({overflow:"auto"});
      }
    }
  }
  //pc 表格标题
  let thData =[
    "职位名称","职位类别","工作地点","招聘人数","更新时间"
  ]
  //pc 表格数据
  let data=[
    {name:'仓库管理员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'},
 		{name:'数据分析',typeText:'全职',address:'杭州-滨江区',num:'5',time:'2018-06-07'},
 		{name:'客服专员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'},
 		{name:'采购专员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'}
  ]
  // 招聘流程
  let imgData=[
    {img:"../../static/image/jrwm_lc1.png",text:'简历投递',Mimg:"../../static/image/lc1.png"},
    {img:"../../static/image/jrwm_lc2.png",text:'筛选简历',Mimg:"../../static/image/lc2.png"},
    {img:"../../static/image/jrwm_lc3.png",text:'现场面试',Mimg:"../../static/image/lc3.png"},
    {img:"../../static/image/jrwm_lc4.png",text:'发放offer',Mimg:"../../static/image/lc4.png"},
    {img:"../../static/image/jrwm_lc5.png",text:'办理入职',Mimg:"../../static/image/lc5.png"},
  ]
  // 职位详情信息
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
  jobDuties:' 1、处理毎日客户订单情况并及时回报； <br/>2、负责与仓库对接，合理安排发货任务；<br/>3、统计销售及回款数据，及时上报领导；<br/>4、完成上级交给的其它事务性工作；',
  jobRequirements:'1.18-30 岁，中专以上学历，踏实，热情，普通话标准清晰，反应敏捷、表达能力强；<br/>2.能吃苦，服从管理，善于沟通，有一定计算机基础，能熟练使用OFFICE 软件；<br/>3.有责任心，有较强的工作积极主动性，懂得如何调配时间，合理安排工作；<br/>4.身体健康、品行端正、无不良嗜好；<br/>5.具备一定的市场分析及判断能力，良好的客户服务意识；<br/>6.有责任心，有团队协作精神，能承受较大的工作压力；'
},{
  name:'采购专员',
  address:'杭州-余杭区-勾庄',
  money:'3.5k-10k/月',
  experience:'一年经验',
  degree:'高中',
  num:'5',
  time:'2018-06-07',
  jobDuties:' 1、水果采购工作。',
  jobRequirements:'1.高中以上学历，有水果采购工作经验优先考虑。<br/>2.责任心强， 人际沟通交往能力强，能独立开展工作，具备一定的承压能力。<br/>3.掌握水果品类的名称、规格、单价、产地。<br/>4.较强的谈判沟通能力，能与商家议价节约采购成本。'
}];
//公司福利 和 地址 mobile 信息
let companyData ={
    welfare:"果速送处于快速发展期，公司提供有竞争力的薪酬待遇。缴纳五险一金，节日福利和集体旅游等；包括伙食补贴、防暑降温补贴、生日礼物、免费水果茶点等。我们经常举办很多集体活动，如先进集体旅游、行业间参观访问等。",
    address:"公司总部位于浙江省杭州市滨江区滨安路1180号华业大厦2308-2313室，杭州站仓储点位于杭州市余杭区良渚街道 （勾庄） 博园西路7号酩创园一楼B01，南京站仓储点位于南京市江宁区东山街道润发路330号，宁波站仓储点位于宁波市鄞州区金辉东路18号3号门。果速送会依据岗位需求，合理安排就职地点。",
    siteAddress:"总部：浙江省杭州市滨江区滨安路1180号华业大厦2308-2313室",
    siteAddress1:"杭州站：余杭区良渚街道 （勾庄） 博园西路7号酩创园一楼B01",
    siteAddress2:"南京站：南京市江宁区东山街道润发路330号",
    siteAddress3:"宁波站：宁波市鄞州区金辉东路18号3号门",
    telephone:"0571-87003816",
    fax:"0571-87003818",
    email:"zs-info@info.cn",
    web:"http://www.zs-info.cn"
}
</script>

<style lang="less">
@import '../../style/mixin';
// pc 样式
  .pc_join{
    .li_join{
      .pcNav
    }
    .join_area{
      margin-top: 80px;
      padding: 0;
      #map_big{
        height:320px;
      }
      .maps{
        margin:30px 0 60px;
        .col-md-4{
          width:32.46%;
          height:300px;
          margin-left:15px;
        }
        .col-md-4:nth-child(1){
          margin-left:0;
        }
      }
      .join_us{
        .title{
          width:100%;
          height: 60px;
          background-color: #f3eee8;
          font-size: 28px;
          color:#555;
          text-align: center;
          line-height: 60px;
        }
        li{
          width: 160px;
          height: 46px;
          text-align: center;
          line-height: 46px;
          color: #000;
          font-size: 18px;
          cursor: pointer;
        }
        .col-md-2{
          .active{
            background-color: @btn_color;
            color: @white_color;
          }
        }
        .problem{
          .col-md-2{
            font-size:20px;
            text-align: center;
            margin-left:38px;
            dd{
              margin-bottom: 15px;
            }
          }
          .col-md-2:nth-child(1){
            margin-left:0;
          }
          .step{
            margin-bottom:30px;
            height:42px;
            text-align: center;
            line-height:42px;
            font-size: 20px;
            background:url(../../image/jrwm.png) no-repeat center center;
          }
        }
        p{
          margin-bottom:30px;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
    .td_hover:hover{
      color:@btn_color;
      cursor: pointer;
    }
  }
// mobile 样式
  .mobile_join{
    .li_join{
      color:@btn_color;
    }
    .content{
      .part_one{
        padding: 0 7%;
        font-size: 14px;
        p{
          margin-top: 24px;
          margin-bottom: 6px;
        }
        .container{
          width:100%;
          height: 200px;
        }
      }
      .part_two{
        padding: 20px 7%;
        dd{
          line-height: 32px;
          font-size: 14px;
        }
        .color_gray{
          color: #737373;
        }
        .color_red{
          color: #e34625;
        }
      }
      .extra_area{
        width: 100%;
        height: 48px;
        background-color: #f3eee8;
        text-align: center;
        line-height: 48px;
      }
      .part_three{
        padding: 7% 7% 0;
       .occupation{
          padding:0 0 7%;
           li{
            margin:16px auto 0;
            padding:10px 0;
            width:50%;
            border-radius: 8px;
            background-color: #fc6b7c;
            color: @white_color;
            text-align: center;
            cursor:pointer;
          }
        }
        .problem{
          .p_title{
            margin-top: 30px;
            margin-bottom:16px;
            height:32px;
            text-align: center;
            line-height:32px;
            font-size: @font_size;
            background:url(../../image/jrwm.png) no-repeat center center;
            background-size: 98px 32px;
          }
          ul{
            margin-top:10px;
            li + li{
              margin-left:13px;
            }
          }
          p{
            text-indent: 28px;
            font-size: 14px;
            line-height: 24px;
          }
        }
        .clearfix{
          li{
            width: 16%;
            img{
              width: 100%;
            }
          }


        }
      }
    }
    .bg{
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color:rgba(128,128,128,.8);
      z-index: 161;
    }
  }
</style>
