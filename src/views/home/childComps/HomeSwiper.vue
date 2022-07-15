<template>

  <Swiper>
    <SwiperItem v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload">
      </a>
    </SwiperItem></Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLoad:false
      }
    },
    methods:{
      imgload(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }

      }
    }
  }
</script>

<style scoped>

</style>