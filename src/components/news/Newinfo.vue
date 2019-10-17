<template>
    <div class="newsinfo-contanier">
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:</span>
            <span>点击:0次</span>
        </p>
        <hr>
        <div v-html=newsinfo.content>
            
        </div>
        <div class="content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id, //将url地址中的id传到前端
            newsinfo :{}
        }
    },
    methods: {
        getNewInfo(){
            fetch("http://www.liulongbin.top:3005/api/getnew/"+this.id,{
                method:'get'
            }).then(resp =>{
                return resp.json()
            }).then(data =>{
                this.newsinfo = data.message[0]
            })
        },
    },
    mounted(){
        this.getNewInfo()
    }
}
</script>
<style scoped>

</style>