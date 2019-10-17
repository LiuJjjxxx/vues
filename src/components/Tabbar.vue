<template>
    <div class="Tabbar">
        <mt-tabbar v-model="selected">
            <router-link to="/home" class="button">
                <mt-tab-item id="tab1" >
                    <img slot="icon" src="../assets/icon/yinhang.png">
                    首页
                </mt-tab-item>
            </router-link>
            <router-link to="/member" class="button">
                <mt-tab-item id="tab2" >
                    <img slot="icon" src="../assets/icon/yonghu.png">
                    会员
                </mt-tab-item>
            </router-link>
            <router-link to="/shopcar" class="button">
                <mt-tab-item id="tab3">
                    <img slot="icon" src="../assets/icon/gouwuche.png">
                    购物车
                <span>1</span>
                </mt-tab-item>
            </router-link>
            <router-link to="/serch" class="button">
                <mt-tab-item id="tab4" >
                    <img slot="icon" src="../assets/icon/shezhi.png">
                    搜索
                </mt-tab-item>
            </router-link>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
 .button{
     flex: 4;
     text-decoration:none;
    }
.router-link-active{
    color: black;
    }
</style>