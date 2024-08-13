<template>
    <div>
        <!-- <h1>XXX管理系统</h1> -->
        
        <!---default-active 它的值是一个字符串，表示菜单项的索引。例如，"2" 表示菜单中第二个菜单项将被默认激活。--->
        <el-menu default-active="/" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
            active-text-color="#ffd04b" router :collapse="isCollapse">
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/params">
                <i class="el-icon-document"></i>
                <span slot="title">参数管理</span>
            </el-menu-item>
            <!--order也需要router-view，为了在/order对应的子菜单项被点击时，能够动态加载并显示
            对应的路由组件，你需要在/order对应的组件中使用<router-view>。-->
            <el-submenu index="/order">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                </template>
                <el-menu-item index="/order/order-list">订单列表</el-menu-item>
                <el-menu-item index="/order/order-back">退货订单1</el-menu-item>
                <el-menu-item index="/order/order-back2">退货订单2</el-menu-item>
                <el-submenu index="3-3">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-3-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="4" disabled>
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isCollapse: false
        };
    }
}
</script>
<style scoped>
/* 这里只能用类选择器，不能使用router-link ，在 Vue 的 scoped 样式中是无效的*/
.routerlink {
    color: #faf6f6;

}
</style>