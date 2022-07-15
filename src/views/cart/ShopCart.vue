<template>
  <div class="shop-cart">
<!--  导航-->
  <NavBar class="cart-nav">
    <div slot="center">购物街({{length}})</div>
  </NavBar>
<!--  商品列表-->
    <scroll ref="scroll" class="content"><CartList class="cart-list"/></scroll>

    <!--  商品汇总-->
    <CartBottomBar />
  </div>

</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import CartList from "@/views/cart/chidcomps/CartList";
  import Scroll from "@/components/common/scroll/Scroll";
  import CartBottomBar from "@/views/cart/chidcomps/CartBottomBar";

  import {mapGetters} from 'vuex'

  export default {
    name: "ShopCart",
    components:{
      Scroll,
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      // ...mapGetters(['cartCounter'])
      ...mapGetters({
        length:'cartCounter',
      })
    },
    activated() {
      this.$refs.scroll.refresh()
    }

  }
</script>

<style scoped>
  .shop-cart{
    height: calc(100vh - 44px);
  }
 .cart-nav{
   background-color: var(--color-tint);
   color: #f2f5f8;
 }
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
