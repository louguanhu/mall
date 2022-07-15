<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick" >
      <img src="~assets/img/common/back.svg"alt="">
    </div>
    <div  class="title" slot="center">
      <div v-for="(item,index) in titles"
           class="title-item"
           :class="{isActive:index===currentIndex}"
           @click="btnActive(index)" >{{item}}</div>
      </div>
  </nav-bar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import {getDatail} from "@/network/detail";

  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0,
        iid:null
      }
    },
    methods:{
      btnActive(index){
        this.currentIndex =index;
        this.$emit('itemClick',this.currentIndex)
      },
      backClick(){
        this.$router.back()
      }
    },
    created() {

    },
  }
</script>

<style scoped>
.title{
  display: flex;
  font-size: 13px;
}
  .title-item{
    flex: 1;
  }
  .isActive{
    color: var(--color-high-text);
  }
.back img{
  margin-top: 10px;
}
</style>