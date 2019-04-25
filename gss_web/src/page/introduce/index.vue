<template>
  <div class="introduce">
    <headerNav></headerNav>
    <comFooter></comFooter>
  </div>
</template>

<script>
import headerNav from "../../components/nav.vue";
import comFooter from "../../components/footer.vue";
  export default {
    name:'introduce',
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
.introduce{
  .li_introduce{
    background-color: #ffc82f;
    color: #fff;
    &:hover{
      color:#fff !important;
    }
  }
}
</style>
