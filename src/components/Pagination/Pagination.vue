<template>
  <div class="pagination">
<!--  disabled 当达到某个条件时，不能触发事件回调  -->
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1"  @click="$emit('getPageNo',1)"  :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>
    <!--中间连续结构-->
    <button v-for="(page, index) in startNumAndEndNum.end"
            :key="index"
            v-if="page >= startNumAndEndNum.start"
            :class="{active:pageNo==page}"
            @click="$emit('getPageNo',page)">
      {{ page }}
    </button>

    <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end<totalPage"
            @click="$emit('getPageNo',totalPage)"
            :class="{active:pageNo==totalPage}"
    >
      {{ totalPage }}</button>
    <button :disabled="pageNo==totalPage"  @click="$emit('getPageNo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>

  </div>

</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    //  计算一共有多少页
    totalPage() {
      //向上去整
      return Math.ceil(this.total / this.pageSize)
    },
    //  计算出连续的页码数 启始数字和结束数字
    startNumAndEndNum() {
      const {continues, pageNo, totalPage} = this
      //定义两个变量存储起始数值和结束数值
      let start = 0, end = 0
      //不正常现象，总页数没有连续页码数多
      if (continues > totalPage) {
        start = 1
        end = totalPage
      } else {
        //  正常现象 （连续页面5，但是总数一定大于5
        start = pageNo - parseInt(continues / 2)
        console.log(start, "pageNo")
        end = pageNo + parseInt(continues / 2)
        //  bu正常现象，start 出现0和负数，j纠正
        if (start < 1) {
          start = 1
          end = continues
          console.log(start, "pageNo", continues)
        }
        if (end > totalPage) {
          start = totalPage - continues + 1
          end = totalPage
        }
      }
      return {start, end}
    },
  }
}
</script>

<style scoped lang="less">
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}


</style>