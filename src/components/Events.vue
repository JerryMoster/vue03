<template>
  <div>
    <h2>事件处理函数</h2>
    <button @click="clickBtn(1,$event)">点我</button>
    <h2>事件修饰符</h2>
    <p>阻止默认事件，a 标签中点击默认跳转链接的功能，这里阻止了直接跳转</p>
    <a href="http://ww.baidu" @click.prevent="aClick($event)">百度</a>
    <p>事件冒泡</p>
    <div style="width:100px;height:100px;background:red;margin:0 auto;" @click="BtnA">
      <button style="margin-top:30px" @click.stop="BtnB">阻止事件冒泡</button>
    </div>
    <p>按键修饰符，这里直说 enter 键</p>
    <input @keyup.enter="onEnter" type="text">
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    clickBtn (args, event) {
      console.log(args)
      console.log(event)
    },
    aClick (event) {
      alert(1)
      console.log(event)
    },
    BtnA () {
      alert('点击的事大盒子div')
    },
    BtnB () {
      alert('点击的是 div 中的 botton')
    },
    onEnter (event) {
      console.log(event)
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>
