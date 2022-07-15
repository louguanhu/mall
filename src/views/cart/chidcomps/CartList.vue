<template>
  <div class="cart-list">
    <CartListItem  v-for="(item,index) in cartList"
                   :product="item"
                   :key="index"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartListItem from "@/views/cart/chidcomps/CartListItem";

  export default {
    name: "CartList",
    computed:{
      ...mapGetters(['cartList'])
    },
    components:{
      CartListItem
    }
  }
</script>

<style scoped>
.cart-list{
  height: calc(100vh - 44px);
}
</style>