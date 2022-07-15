<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg"/>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
          type:Boolean,
          default:false
      }
    }
  }
</script>

<style scoped>
.check-button{
  margin-left: 4px;
  border-radius:100%;
  border: 2px solid #aaaaaa;
}
  .checked{
    background-color: red;
    border-color: red;
  }
</style>