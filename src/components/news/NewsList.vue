<template >
    <div>
        <h3>新闻页面</h3>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(index,id) in list" :key="id">
					<router-link :to="'/home/newsinfo/'+index.id">
						<img class="mui-media-object mui-pull-left" :src="index.img_url">
						<div class="mui-media-body">
                            <h1>{{index.title}}</h1>
                            <p class="mui-media-body">
                                <span>{{index.add_time}}</span>
                                <span>点击:{{index.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>
<script >
export default{
    data(){
        return{
            list:[],
        }
    },
    mounted() {
        var uthis = this;
        fetch("http://www.liulongbin.top:3005/api/getnewslist",{
            method:'get'
        }).then(function(response){
            return response.json()
        }).then(function(data){
            uthis.list = data.message
        })
    },
}
</script>
<style scoped>
h1{
    font-size: 10px;
}
</style>>
    