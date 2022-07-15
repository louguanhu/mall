import {ADD_COUNTER,ADD_TO_CART} from "@/store/mutations-type";
export default {
  addCart(context, payload) {
    return new Promise((resolve,reject)=>{
      //在cartlist中查找符合条件的结果进行返回
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品加一')
      } else {
        payload.count = 1
        //如果没有的话给payload加上count
        context.commit(ADD_TO_CART,payload)
        resolve('当前商品已添加')
      }
    })
  }
}