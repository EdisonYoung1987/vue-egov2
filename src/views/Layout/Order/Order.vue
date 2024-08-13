<template lang="">
    <div>
        <!--order也需要router-view，为了在/order对应的子菜单项被点击时，能够动态加载并显示
            对应的路由组件，你需要在/order对应的组件中使用<router-view>。-->
        <router-view></router-view>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>