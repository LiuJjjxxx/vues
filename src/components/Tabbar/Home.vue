<template>
    <div class="Home">

        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in bannerList" :key="index" v-if="index <3">
                {{item.date}}
                <br>
                {{item.high}}
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-navigate"></span>
		                    <div class="mui-media-body">新闻咨询</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatboxes"></span>
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-settings"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-weixin"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 


    </div>
</template>

<script>
export default {
    data(){
        return{
            bannerList:[],//保存轮播图的数组
        }
    },
    methods: {
        getBanner(){
            var sthis = this
            //获取轮播图数据
            fetch("http://wthrcdn.etouch.cn/weather_mini?city=深圳",{
                method:'get'
            }).then(function(response){
                return response.json()
            }).then(function(data){
                sthis.bannerList = data.data.forecast
            }).catch(function(bbb){
                alert('获取失败')
            })
        }
    },
    created(){
        this.getBanner()
    }
}
</script>

<style  scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item:nth-child(1){
    background: yellowgreen
}
.mint-swipe-item:nth-child(2){
    background: beige
}
.mint-swipe-item:nth-child(3){
    background: orange  
}
.mui-grid-9{
    border: 0px;
    background: white;
}
</style>