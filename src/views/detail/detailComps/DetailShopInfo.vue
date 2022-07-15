<template>
  <div class="shop-info">
    <span class="shoper">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </span>
    <div class="info-all">
    <div class="middle">
        <div class="sells-info">
          <div class="sells">{{shop.sells}}</div>
          <div>总销量</div>
        </div>
        <div class="info-goods">
          <div class="good-count">{{shop.goodCount}}</div>
          <div>全部宝贝</div>
        </div>
    </div>
    <div class="right">
      <table>
        <tr v-for="(item, index) in shop.score" :key="index">
          <td>{{item.name}}</td>
          <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{'better-more':item.isBetter}">
            <span>{{item.isBetter ? '高':'低'}}</span>
          </td>
        </tr>
      </table>
    </div>
    </div>
    <div class="bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    border-bottom: 5px solid #f2f5f8;
    padding: 0 10px 15px 10px;
  }
  .shoper {
    display: flex;
    margin-top: 10px;
    font-size: 25px;
  }

  .shoper img {
    width: 60px;
    height: 60px;
    margin-top: 20px;
  }

  .shoper span {
    margin: 40px 5px;
  }
  .info-all{
    display: flex;
  }
  .middle{
    margin-top: 10px;
    display: flex;
    width: 50%;
    font-weight: bold;
  }
  .sells-info,.info-goods{
    flex: 1;
    margin-right: 10px;
  }
  .sells-info .sells,.info-goods .good-count{
    margin-bottom: 10px;
  }
  .score{
    margin-left: 20px;
  }
  tr{
    display: flex;
    justify-content: space-between;
  }
  table tr .better{
    margin-left: 20px;
  }
  .better,.score{
    color: #42b983;
  }
  .score-better,.better-more{
    color: red;
  }
  .bottom{
    text-align: center;
    margin-top: 10px;
    margin-left: 25%;
    font-size: 25px;
    font-weight: bold;
    width: 50%;
    background-color: #999999;
  }
  .bottom span{
  }
</style>