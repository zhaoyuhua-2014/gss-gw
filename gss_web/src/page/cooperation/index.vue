<template>
  <div class="cooperation">
    <headerNav></headerNav>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
  export default {
    name:'cooperation',
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
  .cooperation{
    .li_cooperation{
      background-color: #ffc82f;
      color: #fff;
      &:hover{
        color:#fff !important;
      }
    }
  }
</style>
