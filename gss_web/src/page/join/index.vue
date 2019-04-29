<template>
  <div class="join">
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
                        <td class="td_hover" @click="joinDetail(index)">{{item.name}}</td>
                        <td>{{item.typeText}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.num}}</td>
                        <td>{{item.time}}</td>
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
                  <p>果速送处于快速发展期，公司提供有竞争力的薪酬待遇。缴纳五险一金，节日福利和集体旅游等；包括伙食补贴、防暑降温补贴、生日礼物、免费水果茶点等。我们经常举办很多集体活动，如先进集体旅游、行业间参观访问等。</p>
                  <div class="step">工作地点</div>
                  <p>公司总部位于浙江省杭州市滨江区滨安路1180号华业大厦2308-2313室，杭州站仓储点位于杭州市余杭区良渚街道 （勾庄） 博园西路7号酩创园一楼B01，南京站仓储点位于南京市江宁区东山街道润发路330号，宁波站仓储点位于宁波市鄞州区金辉东路18号3号门。果速送会依据岗位需求，合理安排就职地点。</p>
                </div>
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
    name:'join',
    data() {
      return {
        tab:0,
        title:"加入我们 /join us",
        data:data,
        thData:thData,
        imgData:imgData
      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate
    },
    mounted(){
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
        center:[118.8711510000,31.9888300000]
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
                infoBody: '<p class="my-desc">电话:025-52112127<br/> 地址:南京市江宁区东山街道润发路330号，江苏鞋城1号楼一楼</p>',
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
    },
    methods:{
      joinDetail(index){
        let routerJump = this.$router.resolve({path:'/jobDetails',query:{index:index}})
        window.open(routerJump.href,'_blank')
      }
    }
  }
  let thData =[
    "职位名称","职位类别","工作地点","招聘人数","更新时间"
  ]
  let data=[
    {name:'仓库管理员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'},
 		{name:'数据分析',typeText:'全职',address:'杭州-滨江区',num:'5',time:'2018-06-07'},
 		{name:'客服专员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'},
 		{name:'采购专员',typeText:'全职',address:'杭州-余杭区-勾庄',num:'5',time:'2018-06-07'}
  ]
  let imgData=[
    {img:"../../static/image/jrwm_lc1.png",text:'简历投递'},
    {img:"../../static/image/jrwm_lc2.png",text:'筛选简历'},
    {img:"../../static/image/jrwm_lc3.png",text:'现场面试'},
    {img:"../../static/image/jrwm_lc4.png",text:'发放offer'},
    {img:"../../static/image/jrwm_lc5.png",text:'办理入职'},
  ]
</script>

<style lang="less">
  .join{
    .li_join{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
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
            background-color: #f8b62c;
            color: #fff;
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
      color:#f8b62c;
      cursor: pointer;
    }
  }
</style>
