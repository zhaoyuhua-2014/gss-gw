<template>
  <div class="join">
    <headerNav></headerNav>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
  export default {
    name:'join',
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
  .join{
    .li_join{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
    }
  }
</style>
