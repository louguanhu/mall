<template>
    <swiper >
      <SwiperItem v-for="item in topImages" class="swiper-item">
        <img :src="item" alt=""/>
      </SwiperItem>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/index'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      },
    },
  }
</script>

<style scoped>
.swiper-item{
  height: 300px;
}
</style>