<template>
  <div class="service">
    <headerNav></headerNav>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
  export default {
    name:'service',
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
  .service{
    .li_service{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
    }
  }
</style>
