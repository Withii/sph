<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!--      事件委托，-->
      <div @mouseleave="leaveShow" @mouseenter="eventShow">
        <h2 class="all">全部商品分类</h2>
        <!--      过渡动画-->
        <transition name="sort">
          <!--        三级联动-->
          <div class="sort" v-show="sortShow">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item bo" v-for="(c1,index) in categoryList " :key="c1.categoryId"
                   :class="{cur:currentIndex==index}">
                <!--           添加鼠标事件，识别用户点击了哪里-->
                <h3 @mouseenter="changeIndex(index)">
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
                </h3>
                <!--              二级、三级分类-->
                <div class="item-list clearfix" :style="{display : currentIndex==index?'block':'none'}">
                  <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{
                            c2.categoryName
                          }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3,index) in c2.categoryChild " :key="c3.categoryId">
                          <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{
                              c3.categoryName
                            }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
//引入lodash 用于页面节流和防抖 throttle
import throttle from 'lodash/throttle'

export default {
  name: "TypeNav",
  data() {
    //存储用户鼠标移动到那个一级分类上
    return {
      currentIndex: -1,
      sortShow: true,
    }
  },
//  组件挂载完毕 ：向服务器发送请求
  mounted() {
    // 控制三级联动的显示与隐藏
    if (this.$route.path !== '/home') {
      this.sortShow = false
    }

  },
  // computed 计算属性 ，
  computed: {
    //  通过mapState 获取state中的值,对象写法，右侧需要的是一个函数，当使用计算属性的时候，右侧函数会立即执行一次
    //  注入一个参数state，其实即为大仓库中的数据
    ...mapState({
      categoryList: (state) => {
        // console.log(state)
        return state.home.categoryList
      }
    })
  },
  methods: {
    //鼠标进入 三级中的一级列表
    changeIndex: throttle(function (index) {
      //  index 为一级分类的索引值
      this.currentIndex = index
    }, 50),

    // 一级分类鼠标移开
    leaveShow() {
      this.currentIndex = -1
      //判读当前是否在search路由中
      if (this.$route.path != '/home') {
        this.sortShow = false
      }
    },
    //  进行路由跳转

    goSearch(event) {
      //最好的解决方案: 编程式导航+事件委派
//存在一些问题:事件委派， 是把全部的子节点[h3、dt、dl、em]的事件委派给父亲 节点
//点击a标签的时候，才会进行路由跳转[怎么能确定点击的一定是a标签]
//存 在另外一个问题:即使你能确定 点击的是a标签，如何区分是- -级、二 级、 三级分类的标签。
//第一个问题:把子节点当中a标签，我加上自定义属性data-categoryName, 其余的子节点是没有的
      let element = event.target
      // console.log(element)
      //获取到当前出发这个事件的节点[h3、a、dt、d1]，需要带有data-categoryname这样节点[-定 是a标签]
      //节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
      let {categoryname, category1id, category2id, category3id} = element.dataset
      let location = {name: 'search'}
      let query = {categoryName: categoryname}
      if (categoryname) {
        //  判断1、2、3级菜单
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
      }
      //判断路由是否存在params参数
      if (this.$route.params) {
        //添加params参数
        location.params=this.$route.params
        //  整理参数
        location.query = query
        //  进行路由跳转
        this.$router.push(location)
      }

    },
    //  鼠标移入商品分类 显示
    eventShow() {
      this.sortShow = true
    },

  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;


      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;



            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

        }

        .cur {
          background-color: paleturquoise;
        }
      }

    }

    //  过渡动画样式
    //  动画开始
    .sort-enter, .sort-leave-to {
      height: 0;
    }

    .sort-enter-to, .sort-leave {
      height: 461px;
    }

    .sort-enter-active, .sort-leave-active {
      transition: all .5s linear;

    }

  }
}
</style>