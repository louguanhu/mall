<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType: {
        type:Number,
        default:0
      },
      pullUpLoad: {
          type:Boolean,
          default: false
      }
    },
  data(){
      return{
        scroll:null
      }
  },
    mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
          probeType:this.probeType,
        //是给div等元素，允许他们添加监听事件
        click:true,
        pullUpLoad:this.pullUpLoad
      })
      //当等于2或3时才会执行函数
      if(this.probeType===2||this.probeType===3){
        this.scroll.on('scroll',(position)=>{
          this.$emit('topScroll',position)
        })
      }

      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }

    },
    methods:{
      scrollTo(x,y,time=300){
        //确保this.scroll已经传进来了
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh()
      },
      contentScroll(position){
        //判断backTop是否显示
        this.isShow = (-position.y)>150
        //觉得tabControl是否吸顶（是否给它添加position:fixed）
        this.isTabFixed = (-position.y)>this.tabOffsetTop
      },
    }
  }
</script>

<style scoped>

</style>