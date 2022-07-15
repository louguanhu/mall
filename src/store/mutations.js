import {ADD_COUNTER,ADD_TO_CART} from "@/store/mutations-type";

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    //给添加到购物车的商品添加checked属性
    payload.checked = true
    state.cartList.push(payload)
  }
}