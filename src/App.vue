<template>
  <div id="app">
    <!--HTML5 中的一个语义化标签，用于定义导航链接的部分。它通常包含一组导航链接，如菜单或目录。-->
    <!--<nav>-->
      <!-- 使用 router-link 组件来定义导航链接，它会在点击时触发导航。-->
      <!-- <router-link to="/Login">Login </router-link>
      <router-link to="/"> Layout</router-link>
    </nav> -->
    <!-- 作为一个占位符，用于显示与当前路由匹配的组件。
      当路由发生变化时，<router-view>会自动更新并显示与新路由匹配的组件。 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style>
</style>
