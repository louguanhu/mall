<template>
  <div class="cart-list-item">
    <div class="check-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick"/>
    </div>
    <div class="image">
      <img :src="product.image" alt="" />
    </div>
    <div class="detail-info">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
    <div class="number">
      <div class="price">{{product.price}}</div>
      <div class="counter">*{{product.count}}</div>
    </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButoon/CheckButton";
  export default {
    name: "CartListItem",
    components: {CheckButton},
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkClick(){
        this.product.checked =! this.product.checked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    display: flex;
    height: 120px;
    border-bottom: 2px solid #999999;
  }
  .check-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .image img{
    width: 70px;
    height: 90px;
    position: relative;
    left: 15px;
    top: 10px;
    border-radius: 5px;
  }
  .detail-info{
    width: 100vh  ;
    margin: 12px 20px 12px 20px;
    overflow: hidden;
  }
.title,.desc{
    position: relative;
    left: 5px;
  white-space: nowrap;
  align-items: center;
  }
.title{
  font-weight: 400;
  height: 20px;
  font-size: 20px;
  letter-spacing: 3px;
}
  .desc{
   height: 16px;
   font-size: 15px;
   color: #999999;
    margin-top: 10px;
 }
  .number{
    display: flex;
    margin-top: 25px;
    margin-left: 16px;
  }
  .number div{
    flex: 1;
  }

  .price{
    color: var(--color-high-text);
      float: left;
  }
  .number .counter{
    margin-right: 10px;
    text-align: right;
  }
</style>