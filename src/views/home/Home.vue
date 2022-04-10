<template>
<div id="home">
  <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
  <Scroll class="content"
          ref="scroll"
          :probe-type="3"
          @topScroll="contentScroll"
          :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <FutureViews></FutureViews>
      <tab-control  class="tab-control"
                    :titles="['流行','新款','精选']"
                    @btnClick="tabClick"/>
      <good-list :goods="showGoods" ></good-list>
  </Scroll>
<!--  给组件添加一个监听事件时必须给click加上修饰词native才能监听原生事件-->
  <back-top @click.native="backClick" v-show="isShow"/>
</div>
</template>

<script>

  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";

  import NavBar from "@/components/common/navbar/NavBar";
  import FutureViews from "@/views/home/childComps/FutureViews";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodList from "@/components/content/goods/GoodList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";

  import {getHomeMultidata, getHomeGoods} from "@/network/home";
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[],
        result:null,
        // titles: [],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
          },
        currentType:'pop',
        isShow:false
      }
    },
    components:{
      HomeSwiper,
      RecommendView,
      NavBar,
      FutureViews,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    //组件创建完成发送网络请求
    created() {
      this.getHomeMultidata1();

      //请求商品数据
      this.getHomeGood('pop');
      this.getHomeGood('new');
      this.getHomeGood('sell')
    },
    methods:{
      //监听相关的方法
      tabClick(index){
        // console.log(index)
          switch (index) {
              case 0:
                this.currentType='pop';
              break
              case 1:
                this.currentType='new'
              break
            case 2:
              this.currentType='sell'
          }
      },
      backClick(){
        //通过$refs可以访问组件里的对象和数据
        //scrollTo(x,y,time)
        this.$refs.scroll.scrollTo(0,0,300)
      },

      contentScroll(position){
        this.isShow = (-position.y)>150
      },
      loadMore(){
        this.getHomeGood(this.currentType)
        //重新计算页面高度
        this.$refs.scroll.refresh()
      },


      //网络请求相关的代码
      getHomeMultidata1(){
        getHomeMultidata().then(res=>{
          this.result=res;
          this.banners= res.data.data.banner.list;
          this.recommends =res.data.data.recommend.list
        },err=>{
          console.log('请求失败')
        });
      },
      //根据类型并进行数据的加载
      getHomeGood(type){
          const page = this.goods[type].page+1;
          getHomeGoods(type,page).then(res=>{
             this.goods[type].list.push(...res.data.data.list);
             //页面加一
            this.goods[type].page+=1
           //结束上拉加载操作，开始准备新的一轮
            this.$refs.scroll.finishPullUp()
          },err=>{
          })
      }

    }
  }
</script>

<style scoped>
  #home{
    /*padding-top:44px;*/
    /*padding-bottom:  49px ;*/
    height: 100vh;
  }
.home-nav{
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  z-index: 2;
}
  .tab-control{
    position: sticky;
    top:44px;
  }
  /*.content{*/
  /*  height: 300px;*/
  /*}*/
  .content{
    height: calc(100% - 90px);
    overflow: hidden;
    margin-top:44px;
    /*observeDOM:true*/
  }
</style>
