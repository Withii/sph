<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide,index) in skuImageList " :key="slide.id">
        <img :src="slide.imgUrl"  :class="{active:currentIndex==index}"  @click="changeCurrentIndex(index)" >
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  export default {
    name: "ImageList",
    props: ['skuImageList'],
    data() {
      return{
        //用于设置类名高亮
        currentIndex: 0,

      }
    },
    methods: {
      changeCurrentIndex(index) {
      //  修改响应式数据
        this.currentIndex = index;
      //  通知兄弟组件，传递当前索引值
        this.$bus.$emit('getIndex',index)
      },
    },
    watch:{
      //数据监听，可以保证数据一定ok，但不能保证v-for遍历是否完事
      skuImageList(){
        this.$nextTick(()=>{
        //  新建Swiper实例
           new Swiper ('.swiper-container', {
            // 显示几张图片设置
            slidesPerView:3,
             //每次切换的图片数
             slidesGrid:1,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

          })
        })
      }
    }

  }
</script>

<style lang="less" scoped>
  .swiper-container {
    height: 56px;
    width: 412px;
    box-sizing: border-box;
    padding: 0 12px;

    .swiper-slide {
      width: 56px;
      height: 56px;

      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ccc;
        padding: 2px;
        width: 50px;
        height: 50px;
        display: block;

        &.active {
          border: 2px solid #f60;
          padding: 1px;
        }

      }
    }

    .swiper-button-next {
      left: auto;
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
      right: auto;
    }

    .swiper-button-next,
    .swiper-button-prev {
      box-sizing: border-box;
      width: 12px;
      height: 56px;
      background: rgb(235, 235, 235);
      border: 1px solid rgb(204, 204, 204);
      top: 0;
      margin-top: 0;
      &::after {
        font-size: 12px;
      }
    }
  }
</style>