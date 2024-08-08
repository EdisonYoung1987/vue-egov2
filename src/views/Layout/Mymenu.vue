<template>
    <div>
        <h1>XXX管理系统</h1>

        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/order">订单管理</router-link>
            </li>
            <li>

                <router-link to="/params">参数管理</router-link>
            </li>
            <!--这里验证了，只要有router-view，那么当前层级的路由出口就会在这里渲染，哪怕有多个同级的router-view，会同时渲染 -->
            <router-view></router-view>
        </ul>
    </div>
</template>
<script>
import router from '@/router';

export default {

}
</script>
<style></style>