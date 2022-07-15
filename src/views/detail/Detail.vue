<template>
  <div id="detail" >
    <DetailNavBar class="detail-nav" @itemClick="titleClick"
                  :detailIndex="currentIndex" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @topScroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <DetailBaseInfo :goods="goods"/>
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <DetailParamsInfo ref="params" :param-info="paramInfo"/>
      <DetailCommentInfo  ref="comment" :comment-info="commentInfo"/>
      <good-list ref="recommend" :goods="recommends"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShow"/>
    <DetailBottomBar class="detail-bottom-bar" @addCart="addToCart"/>
  </div>
</template>

<script>

  import DetailNavBar from "@/views/detail/detailComps/DetailNavBar";
  import DetailSwiper  from "@/views/detail/detailComps/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/detailComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/detailComps/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/detailComps/DetailGoodsInfo";
  import DetailParamsInfo from "@/views/detail/detailComps/DetailParamsInfo";
  import DetailCommentInfo from "@/views/detail/detailComps/DetailCommentInfo";
  import DetailBottomBar from "@/views/detail/detailComps/DetailBottomBar";

  import {getDatail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
  import Scroll from "@/components/common/scroll/Scroll";
  import GoodList from "@/components/content/goods/GoodList";
  import {itemListenerMinxin,backTopMixin} from "@/common/mixin";
  import {debounce} from "@/common/utils";
  import BackTop from "@/components/content/backTop/BackTop";
  import {mapActions} from 'vuex'


  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        topImages:[],
        goods: {},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo: {},
        recommends:[],
        themeTopYs:[],
        getThemeTop:null,
        currentIndex:0
      }
    },
    components:{
      BackTop,
      DetailGoodsInfo,
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      GoodList,
      DetailBottomBar
    },
    created() {
      //获取对应商品的数据
      this.iid=this.$route.params.iid
      //传入对应的id获取轮播图图片
      getDatail(this.iid).then(res=>{
        const data = res.data.result
        this.topImages = data.itemInfo.topImages
        //获取商品详情信息
        this.goods = new Goods(data.itemInfo,data.columns,
            data.shopInfo.services)
        //保存店铺信息
        this.shop = new Shop(data.shopInfo);
        //保存商品详情数据
        this.detailInfo = data.detailInfo
        //取出商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //去除评论信息
        if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]
        }
        // console.log(this.commentInfo)
      })
      //请求推荐数据
      getRecommend().then(res=>{
        this.recommends = res.data.data.list
      })
      this.getThemeTop = debounce(()=>{
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      },200)
    },
    mounted() {

    },
    methods:{
      ...mapActions(['addCart']),
      // ...mapActions({
      //
      // }),
      imageLoad(){
        this.getThemeTop()
        this.newRefresh()

      },
      titleClick(index){
        this.currentIndex = index
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[this.currentIndex],200)
      },
      contentScroll(position){
        const positionY = -position.y
        const length = this.themeTopYs.length
        //最大值无须判断，长度减一
        for(let i =0;i<=length-1;i++){
          //在this.themeTopYs中添加一个js中的最大值，然后进行判断
          //省去一层判断，最终省点性能多点内存（空间换时间）
          if(this.currentIndex !== 1&&(i<length-1 &&
              positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                this.currentIndex=i;
                this.$refs.nav.currentIndex = this.currentIndex
          }
         this.backTop(position)
        }

          //在i<3时并且滚动的距离和各个组件的最小和最大顶部距离进行比较
          //在i=3时只需要和组件最小距离进行比较
          //判断this.currentIndex是否改变，然后确定是否执行后面的
          // for(let i =0;i<=length-1;i++){
          //   if(this.currentIndex!==i && ((i<length-1 && positionY >= this.themeTopYs[i]
          //     && positionY < this.themeTopYs[i+1])
          //     || (i === length-1 && positionY > this.themeTopYs[i]))){
          //      this.currentIndex=i
          //      this.$refs.nav.currentIndex = this.currentIndex
          // }
        // }
      },
      addToCart(){
        const product ={}
        //轮播图的第一张
        product.image= this.topImages[0]
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price =this.goods.realPrice
        product.iid = this.iid


        //提价数据到Vuex统一管理，最好在在Vuex中修改（'方法名‘，变量）
        // this.$store.dispatch('addCart',product).then(res=>{
        //   console.log(res)
        // })
        this.addCart(product).then(res=>{
          this.$toast.show(res,2000)
          // console.log(res,this.$toast.show)
        })

      }
    },
    mixins:[itemListenerMinxin,backTopMixin],
    destroyed() {
      this.$bus.$off('itemImgload',this.itemImgListener())
    },
  }
</script>

<style scoped>
#detail{
  position: relative;
  z-index:10;
  background-color: #fff;
  height: 100vh;
}
  .content{
    height: calc(100% - 50px);
    overflow: hidden;
  }
 .detail-nav{
   position: relative;
   z-index:11;
   background-color: #f6f6f6;
 }
.detail-bottom-bar{

   }
</style>