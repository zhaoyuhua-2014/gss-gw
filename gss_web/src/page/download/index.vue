<template>
  <div class="download">
    <headerNav></headerNav>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
  export default {
    name:'download',
    data() {
      return {

      }
    },
    components: {
      headerNav,
      comFooter
    },
  }
</script>

<style lang="less">
  .download{
    .li_download{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
    }
  }
</style>
