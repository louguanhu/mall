import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

export const itemListenerMinxin={
  data(){
    return  {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    //图片加载完的事件监听
    this.newRefresh =debounce(this.$refs.scroll.refresh,500)
    this.itemImgListener = ()=>{
      //在created取$refs时有可能取不到
      this.newRefresh()
    }
    this.$bus.$on('imgload',this.itemImgListener)
  }
}
export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return{
      isShow:false,
    };
  },
  methods:{
    //点击回到顶部
    backTopClick(){
      //通过$refs可以访问组件里的对象和数据
      //scrollTo(x,y,time)
      this.$refs.scroll.scrollTo(0,0,300)
    },
    //在距离一定是显示topBack
    backTop(position){
      this.isShow = (-position.y )>400
      //觉得tabControl是否吸顶（是否给它添加position:fixed）
      this.isTabFixed =(-position.y )>this.tabOffsetTop
    },

  }
}