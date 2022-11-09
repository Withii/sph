<template>
<div>
<!--  三级联动全局组件，不需要单独引入-->
  <TypeNav></TypeNav>
  <ListContainer/>
  <TodayRecommend/>
 <Rank/>
 <Like/>
  <Floor v-for="(floor,idnex) in floorList" :key="floor.id"  :floor="floor"/>
  <Brand/>
</div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer";
import TodayRecommend from "@/views/Home/TodayRecommend";
import Rank from "@/views/Home/Rank";
import Like from "@/views/Home/like";
import Floor from "@/views/Home/Floor";
import Brand from "@/views/Home/Brand";
import {mapState} from "vuex";
export default {
  name: "",
  //注册组件
  components:{ListContainer,TodayRecommend,Rank,Like,Floor,Brand},
  mounted() {
    //派发action 获取floor组件的数据
    this.$store.dispatch('getFloorList')
  },
  computed:{
    ...mapState({
      floorList: state =>  state.home.floorList
    })
  }
}

</script>

<style scoped>

</style>