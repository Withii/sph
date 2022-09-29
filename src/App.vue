<template>
  <div>
    <MyHeader/>
    <router-view></router-view>
<!--    在注册和登录页 footer组件隐藏-->
    <MyFooter v-if="$route.meta.isShow"/>
  </div>
</template>
<script>
import MyHeader from "@/components/Header";
import MyFooter from "@/components/Footer";

export default {
  components: {
    MyHeader, MyFooter
  },
  mounted() {
    //获取三级联动组件数据 让该条只发送一次
    //  通知vuex发请求 ，获取数据，存储在仓库中 派遣actions
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less">

</style>
