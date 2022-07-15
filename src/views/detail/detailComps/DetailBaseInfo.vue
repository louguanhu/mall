<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <div class="n-price">{{goods.newPrice}}</div>
      <div class="o-price">{{goods.oldPrice}}</div>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="info-services">
      <span class="info-services-item"
           v-for="index in goods.services.length-1"
           :key="index">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
.info-title{
  color: #222;
}
  .info-price{
    display: flex;
    margin-top: 10px;
  }
  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .columns{
    font-weight: lighter;
    margin-top: 15px;
    display: flex;
    font-size: 14px;
    justify-content:space-between;
  }
  .info-services{
    font-weight: bolder;
    margin:20px 0;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color:black;
  }
  .info-services-item img{
    width: 10px;
    height: 10px;
  }
</style>