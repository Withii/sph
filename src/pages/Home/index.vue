<template>
<div>
<!--  三级联动全局组件，不需要单独引入-->
  <TypeNav></TypeNav>
  <ListContainer/>
  <TodayRecommend/>
 <Rank/>
 <Like/>
  <Floor/>
  <Floor/>
  <Brand/>
</div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";
export default {
  name: "",
  //注册组件
  components:{ListContainer,TodayRecommend,Rank,Like,Floor,Brand},
}

</script>

<style scoped>

</style>