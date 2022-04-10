<template>
  <div class="goods-list">
    <GoodListItem v-for="item in goods" :goods-item="item"></GoodListItem>
  </div>
</template>

<script>
  import GoodListItem from "@/components/content/goods/GoodListItem";
  export default {
    name: "GoodList",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      GoodListItem
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>