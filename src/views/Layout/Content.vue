<template>
    <div>
        <div class="header">
        <i class="iconfont icon-zhedie1"></i>
        <i class="iconfont icon-zhedie2"></i>
        顶部区域</div>
        <!-- 各个菜单内容展示区域（二级路由出口） -->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style lang="less" scoped>
.header {
    height: 50px;
    background-color: #5e5b5b;
    color: #fff;
    text-align: left;
    line-height: 50px;
    font-size: 25px;
}
.content {
    height: calc(100vh - 50px);
    overflow: auto;
    overflow-y: auto;
}
</style>