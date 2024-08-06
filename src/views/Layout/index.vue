<template>
  <div class="layout">
    <!--左侧菜单-->
    <Mymenu class="mymenu" />
    <!--右侧内容-->
    <Content class="content" />
  </div>
</template>

<script>
import Mymenu from './Mymenu.vue';
import Content from './Content.vue';
export default {

  components: {
    Mymenu,
    Content,
  },

};
</script>
<style lang="less" scoped>
.layout {
  // //性盒子布局，使其子元素可以按照弹性布局的规则进行排列。
  // display: flex;
  // //容器的高度设置为视口高度的100%，即占满整个视口高度。
  // height: 100vh;

  .mymenu {
    //容器的高度设置为视口高度的100%，即占满整个视口高度。
    height: 100vh;
    width: 200px;
    height: 100vh;
    //固定定位的元素相对于视口进行定位，不会随页面滚动而移动。
    position: fixed;
    //容器的顶部边缘固定在视口的顶部边缘，即距离视口顶部0像素
    top: 0;
    bottom: 0;
    background-color: #333;
    color: #fff;
  }


  .content {
    //弹性系数设置为1，使其在父容器的剩余空间中占据主要部分。
    flex: 1;
    background-color: #f5f5f5;
  
    margin-left: 200px;
  }

}
</style>
