<template>
  <div class="floorBanner">
    <div class="swiper-container" id="floor1Swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in list " :key="banner.id">
          <img :src="banner.imgUrl">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "Carousel",
  props:['list'],
  watch: {
    //  监听banner数据变化，因为这条数据发生变化，从空数据变成有数据
    bannerList: {
      immediate:true,
      handler(newValue, oldValue) {
        this.$nextTick(function () {
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>