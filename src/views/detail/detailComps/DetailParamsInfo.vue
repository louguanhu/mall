<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length!==0">
    <table class="rule-table" v-for="(table,index) in paramInfo.size" :key="index">
      <tr class="rule" v-for="(tr,indey) in table" :key="indey">
        <td class="rule-info" v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr class="info-param-tr" v-for="(info ,index) in paramInfo.infos" :key="index">
        <td class="info-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="image" v-if="paramInfo.image.length !==0">
      <img :src="paramInfo.image" alt=""/>
    </div>
  </div>
</template>

<script>
  import TabControl from "@/components/content/tabControl/TabControl";

  export default {
    name: "DetailParamsInfo",
    components: {TabControl},
    props: {
      paramInfo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .rule-table {
    width: 100%;
    padding: 0 20px 30px 10px;
  }

  .rule {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    border-bottom: 2px solid rgba(156,158,161,.3);
    height: 30px;
  }
  .rule-info{
    width: 50px;
  }

  .info-param {
    margin-top: 30px;
    margin-left: 15px;
  }
.info-param-tr{
  height: 50px;
}
  .info-key {
    width: 100px;
    text-align: left;
  }
  .info-value{
    color: var(--color-high-text);
  }
</style>