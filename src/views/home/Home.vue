<template>
<div id="home">
  <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import {getHomeMultidata} from "@/network/home";
  import RecommendView from "@/views/home/childComps/RecommendView";
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[],
        result:null
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    //组件创建完成发送网络请求
    created() {
      getHomeMultidata().then(res=>{
        this.result=res;
        this.banners= res.data.data.banner.list;
        this.recommends =res.data.data.recommend.list
      },err=>{
        console.log('请求失败')
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
