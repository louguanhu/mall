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
      this.scroll.on('scroll',(position)=>{
          this.$emit('topScroll',position)
      })
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>