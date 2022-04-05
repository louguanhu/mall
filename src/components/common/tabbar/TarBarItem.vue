<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TarBarItem",
    props:{
      path:String,
      activeColor: {
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive: false
      }
    },
    computed:{
      isActive(){
        //route在里面找到this.path就不等于-1
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        //当组件为活跃时赋予他样式颜色，否则不给样式
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      btnClick(){
        this.$router.push(this.path)
      }
    },
  }
</script>

<style scoped>

  .tab-bar-item{
    flex:1;
    text-align: center;
    /*justify-content: center;*/
    height: 49px;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    font-size: 14px;

  }
  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: #ff0000;
  }
</style>
