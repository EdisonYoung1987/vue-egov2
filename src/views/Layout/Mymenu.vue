<template>
    <div>
        <h1>XXX管理系统</h1>

        <ul>
            <li>
                <router-link to="/" style="color: white;">首页</router-link>
            </li>
            <li>
                <router-link to="/order" class="routerlink">订单管理</router-link>
            </li>
            <li>

                <router-link to="/params" class="routerlink">参数管理</router-link>
            </li>
            <!--这里验证了，只要有router-view，那么当前层级的路由出口就会在这里渲染，哪怕有多个同级的router-view，会同时渲染 -->
            <!-- <router-view></router-view> -->
        </ul>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
  /* 这里只能用类选择器，不能使用router-link ，在 Vue 的 scoped 样式中是无效的*/
  .routerlink{
        color: #faf6f6;
    
  }
</style>