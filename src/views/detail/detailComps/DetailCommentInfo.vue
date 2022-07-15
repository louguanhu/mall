<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多<i class="arrow-right"></i></div>
    </div>
    <div class="user">
      <img class="user-img" :src="commentInfo.user.avatar">
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <div class="content">{{commentInfo.content}}</div>
      <div class="info-other">
        <span class="date">{{showDate}}</span>
        <span class="comment-style">{{commentInfo.style}}</span>
      </div>
      <div class="info-img">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
     return{
       created:this.commentInfo.created
     }
    },
    computed:{
      showDate(){
        return formatDate(this.commentInfo.created,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.header-title{
  float: left;
  font-size: 15px;
}
  .header-more{
    float: right;
    margin-right:10px;
    font-size: 13px;
  }
  .user{
    display: flex;
    height: 60px;
    line-height: 60px;
}
  .user .user-img{
    margin: 10px 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .user .user-name{
  position: relative;
    top:2px;
  }
  .info-detail .content{
    margin: 5px 10px 10px;
    font-size: 15px;
  }
  .info-other{
    margin-left: 10px;
    font-size: 12px;
    color: #999;
    margin-top: 10px ;
  }
  .info-other .comment-style{
    margin-left:10px  ;
  }
  .info-img{
    display: flex;
    margin-top: 10px;
  }
  .info-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>