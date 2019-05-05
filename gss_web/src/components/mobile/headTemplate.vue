<template>
  <div class="head_template">
      <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name:'headTemplate',
    props: ["title"],
    data() {
      return {

      }
    },
  }
</script>

<style lang="less" scoped>
.head_template{
  margin:56px 5% 0;
  height: 50px;
  line-height: 50px;
  p{
    border-bottom: 1px solid #f2f2f2;
    letter-spacing: 1px;
  }
}
</style>
