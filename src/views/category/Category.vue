<template>
  <div class="wrapper">
    <NavBar class="cart-nav"><div slot="center">购物街</div></NavBar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  export default {
    name: "Category",
    components: {
      NavBar
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  .cart-nav{

  }

</style>
