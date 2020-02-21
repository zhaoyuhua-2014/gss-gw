<template>
  <div class="cooperation">
    <div class="pc_cooperation visible-md visible-lg">
      <headerNav></headerNav>
      <headTemplate :title="title"></headTemplate>
      <div class="cooperation_area container">
          <div class="row cooperation_list">
            <dl class="col-md-3" v-for="(item,index) in cooperationData" :key="index">
              <dt><img :src="item.img" alt="" ></dt>
              <dd>
                <p>{{item.name}}</p>
                <p>{{item.text}}</p>
              </dd>
            </dl>
          </div>
          <div class="row cooperation_way">
            <dl class="col-md-4" v-for="(item,index) in wayData" :key="index">
              <dt><img :src="item.img" alt=""></dt>
              <dd>
                <p>{{item.title}}</p>
                <p>{{item.text}}</p>
              </dd>
              <router-link :to="item.jumprouter" tag="dd" class="jump_touter"  v-if="index == 0" >
                {{item.jumpText}}
              </router-link>
              <dd v-else>
                <img :src="item.telephoneNumber" alt="">
              </dd>
            </dl>
          </div>
      </div>
      <comFooter></comFooter>
    </div>
    <div class="mobile_cooperation hidden-md hidden-lg">
      <MheaderNav></MheaderNav>
      <MheadTemplate :title="title"></MheadTemplate>
      <div class="content">
        <div class="part_one clearfix">
          <dl class="pull-left" v-for="(item,index) in cooperationData" :key="index">
            <dt><img :src="item.img" alt="" width="97%"></dt>
            <dd>
              <p>{{item.name}}</p>
              <p>{{item.text}}</p>
            </dd>
          </dl>
        </div>
        <div class="part_two ">
          <dl  v-for="(item,index) in wayData" :key="index">
            <dt><img :src="item.img" alt="" width="20%"></dt>
            <dd>
              <p>{{item.title}}</p>
              <p>{{item.text}}</p>
            </dd>
            <router-link :to="item.jumprouter" tag="dd" class="jump_touter"  v-if="index == 0" >
              <img src="../../image/mobile/hzsj_app.png" width="188px" alt="下载">
            </router-link>
            <dd v-else>
              <a href="tel:400-0169-682"><img :src="item.telephoneNumber" alt="拨打电话" width="188px"></a>
            </dd>
          </dl>
        </div>
        <img src="../../../static/image/hzsj_gbf.png"/>
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
    name:'cooperation',
    data() {
      return {
        title:{0:'合作商家' ,1:'/Business cooperation'},
        cooperationData:cooperationData,
        wayData:wayData
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
// 合作商家 数据
let cooperationData =[
  {img:"../../static/image/hzsj_grh.png",name:"果然好",text:"专注水果，领鲜生活"},
  {img:"../../static/image/hzsj_gbf.png",name:"果缤纷",text:"我们只卖好吃的水果"},
  {img:"../../static/image/hzsj_axg.png",name:"爱鲜果",text:"爱鲜果，爱美丽，爱生活，爱健康"},
  {img:"../../static/image/hzsj_lxsg.png",name:"领鲜水果",text:"最新鲜的水果，只为你"},
  {img:"../../static/image/hzsj_xgw.png",name:"鲜果屋",text:"每日新鲜，健康生活"},
  {img:"../../static/image/hzsj_sgf.png",name:"水果坊",text:"您身边的健康水果之家"},
  {img:"../../static/image/hzsj_sgjc.png",name:"水果剧场",text:"多彩水果，演绎健康快乐"},
  {img:"../../static/image/hzsj_xgh.png",name:"鲜果汇",text:"新鲜水果，自然健康"},
]
//合作 方式 数据
let wayData=[
  {img:"../../static/image/hzsj_left.png",title:"成为我们的商家",text:"如果您是水果店老板，欢迎下载果速送APP申请服务，希望能成为您满意的服务平台。",jumprouter:"download",jumpText:'跳转至APP下载'},
  {img:"../../static/image/hzsj_right.png",title:"成为我们的供应商",text:"如果您是果农或者优质的水果供应商，期待您的来电，与您合作是我们莫大的荣幸。",telephoneNumber:"../../static/image/tel.png"}
]
</script>

<style lang="less">
@import '../../style/mixin';
// pc 样式
  .pc_cooperation{
    .li_cooperation{
     .pcNav;
    }
    .cooperation_area{
      margin-top:60px;
      .cooperation_list{
        dl{
          width:23%;
          box-sizing: border-box;
          padding:0;
          margin-left:20px;
          margin-bottom:20px;
          border:1px solid @gray_color;
          text-align: center;
          dt img {
          	width: 100%;
          }
          dd{
            background-color:@btn_color;
            color: @white_color;
            p{
              margin:0;
            }
            p:first-child{
              font-size: 18px;
              line-height: 50px;
            }
            p:last-child{
              font-size: 14px;
              line-height: 30px;
            }
          }
        }
        dl:hover{
          border:1px solid @theme_color;
        }
      }
      .cooperation_way{
        margin:50px auto 0;
        dl{
          margin-left: 134px;
          text-align: center;
          dd{
            font-size: 18px;
            p{
              margin-top:30px;
            }
          }
          dd:last-child{
            margin-top:50px;
          }
          .jump_touter{
            width: 240px;
            height: 48px;
            margin:50px auto 0;
            background-color: #0cbfa1;
            color: @white_color;
            border-radius: 4px;
            text-align: center;
            line-height: 48px;
            cursor: pointer;
          }
        }
      }
    }
  }
  // mobile 样式
  .mobile_cooperation{
    .li_cooperation{
      color: @btn_color;
    }
    .part_one{
      padding:32px 2%  0;
      dl{
        margin-top:16px;
        margin-left:2%;
        width: 48%;
        text-align: center;
        border: 1px solid @gray_color;
        dt img{
        	width: 100%;
        }
        dd{
          padding:6px 0;
          background-color: @theme_color;
          color: @white_color;
          line-height: 19px;
          p:nth-child(2){
            font-size: 9px;
            .ellipsis
          }
        }
      }
    }
    .part_two{
      padding:0 8% 20px;
      text-align: center;
      dl{
        margin-top: 30px;
      }
      dd{
        p{
          margin: 16px 0;
        }
        p:nth-child(2){
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
</style>
