<template>
  <div id="nav">
    <nav class="navbar  navbar-fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 nav_h">
              <img class="nav_img" src="../image/title.png" alt="">
          </div>
          <ul class="col-md-8 nav_h row">
            <router-link :to="'home'" tag="li" class="col-md-2 li_style li_home">
                首页
            </router-link>
            <router-link :to="'introduce'" tag="li" class="col-md-2 li_style li_introduce">
              公司介绍
            </router-link>
            <router-link :to="'service'" tag="li" class="col-md-2 li_style li_service">
                服务保障
            </router-link>
            <router-link :to="'download'" tag="li" class="col-md-2 li_style li_download">
                APP下载
            </router-link>
            <router-link :to="'cooperation'" tag="li" class="col-md-2 li_style li_cooperation">
                合作商家
            </router-link>
            <router-link :to="'join'" tag="li" class="col-md-2 li_style li_join">
                加入我们
            </router-link>
          </ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #nav{
    width: 100%;
    min-width: 1200px;
    .navbar{
      min-height: 80px;
      margin-bottom: 0;
      background-color: #dbdbdb;
      opacity: 0.8;
    }
    .nav_img{
      margin-top: 18px;
    }
    .container,
    .row,
    .nav_h
    .li_style
    {
      height:80px;
    }
  }

  .li_style{
    text-align: center;
    line-height: 80px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
       color: #ffc82f;
    }
  }
</style>

