<template>
  <div class="bottom-bar">
    <div class="checked-all">
      <check-button :is-checked="isSelectAll"
                    class="check-button"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="right">
     合计{{totalPrice}}
    </div>
    <div class="calculate">去计算({{checkedLength}})</div>
  </div>
</template>

<script>
  import CheckButton from "@/components/content/checkButoon/CheckButton";
  import {mapGetters} from  'vuex'
  export default {
    name: "CartBottomBar",
    props:{
      itemInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return '￥'+ this.cartList.filter(item =>{
          return item.checked
        }).reduce((preValue,item)=>{
            return preValue+item.price * item.count
        },0).toFixed(2)
      },
      checkedLength(){
        return this.cartList.filter(item=> item.checked).length
      },
      isSelectAll(){
        // return !(this.cartList.filter(item=> !item.checked).length)
        if(this.cartList.length===0) return false
        return !this.cartList.find(item => !item.checked)
      }
    },
    components:{
      CheckButton
  },
    methods:{
      checkClick(){
        //全部选中的情况下
        if(this.isSelectAll){
          this.cartList.forEach(item => item.checked=false)
        }else{//部分不选中或者全部不选中
          this.cartList.forEach(item => item.checked=true)
        }
      }
    }
  }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  height: 44px;
  position: relative;
  background-color:#aaaaaa;
  font-size: 20px;
}
.checked-all{
  display: flex;
  position: relative;
  left: 5px;
  align-items: center;
  width: 90px;
}
  .checked-all .check-button{
    width: 20px;
    height: 20px;
  }
.checked-all>span{
  width: 40px;
  line-height: 40px;
  margin-left: 5px;
}
  .right{
    text-align: center;
    margin-top: 10px;
  }
  .calculate{
    background-color: var(--color-high-text);
    height: 100%;
    width: 25%;
    position: absolute;
    right: 0;
    padding-top: 10px;
    color: #f2f5f8;
  }
</style>