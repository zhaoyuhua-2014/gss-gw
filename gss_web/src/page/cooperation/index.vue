<template>
  <div class="cooperation">
    <headerNav></headerNav>
    <headTemplate :title="title"></headTemplate>
    <div class="cooperation_area container">
        <div class="row cooperation_list">
          <dl class="col-md-3" v-for="(item,index) in cooperationData" :key="index">
            <dt><img :src="item.img" alt=""></dt>
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
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
import headTemplate from "../../components/headTemplate.vue";
  export default {
    name:'cooperation',
    data() {
      return {
        title:'合作商家 /Business cooperation',
        cooperationData:cooperationData,
        wayData:wayData
      }
    },
    components: {
      headerNav,
      comFooter,
      headTemplate
    },
  }
let cooperationData =[
  {img:"../../static/image/hzsj_grh.png",name:"果然好",text:"专注水果，领鲜生活"},
  {img:"../../static/image/hzsj_gdm.png",name:"果多美",text:"我们只卖好吃的水果"},
  {img:"../../static/image/hzsj_axg.png",name:"爱鲜果",text:"爱鲜果，爱美丽，爱生活，爱健康"},
  {img:"../../static/image/hzsj_lxsg.png",name:"领鲜水果",text:"最新鲜的水果，只为你"},
  {img:"../../static/image/hzsj_xgw.png",name:"鲜果屋",text:"每日新鲜，健康生活"},
  {img:"../../static/image/hzsj_sgf.png",name:"水果坊",text:"您身边的健康水果之家"},
  {img:"../../static/image/hzsj_sgjc.png",name:"水果剧场",text:"多彩水果，演绎健康快乐"},
  {img:"../../static/image/hzsj_xgh.png",name:"鲜果汇",text:"新鲜水果，自然健康"},
]
let wayData=[
  {img:"../../static/image/hzsj_left.png",title:"成为我们的商家",text:"如果您是水果店老板，欢迎下载果速送APP申请服务，希望能成为您满意的服务平台。",jumprouter:"download",jumpText:'跳转至APP下载'},
  {img:"../../static/image/hzsj_right.png",title:"成为我们的供应商",text:"如果您是果农或者优质的水果供应商，期待您的来电，与您合作是我们莫大的荣幸。",telephoneNumber:"../../static/image/tel.png"}
]
</script>

<style lang="less">
  .cooperation{
    .li_cooperation{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
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
          border:1px solid #f2f2f2;
          text-align: center;
          dd{
            background-color: #ffc82f;
            color: #fff;
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
          border:1px solid #ffc82f;
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
            color: #fff;
            border-radius: 4px;
            text-align: center;
            line-height: 48px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
