<template>
  <div>
    <h2>过滤器的创建和使用【全局、局部】</h2>
    <h3>格式化人民币【保留两位小数，同事前面有 ￥】</h3>
    <p>{{money | moneyFilter}}</p>
    <h4>全局的过滤器，是在 main.js 中创建的，还有就是自定义全局指令，也是在 main.js 中进行创建的</h4>
    <p>{{page | globalMoney}}</p>

    <h3>格式化日期</h3>
    <p>{{time | timeFilter}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      money: 23456,
      page: 15.6768,
      time: new Date()
    }
  },
  mounted () {
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  },
  // 局部过滤器
  filters: {
    moneyFilter (val) {
      return '￥' + Number(val).toFixed(2)
    },
    timeFilter (val, format = 'YYYY-MM-DD HH:MM:SS') {
      return moment(val).format(format)
    }
  },
  computed: {

  },
  created () {

  },

  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>
