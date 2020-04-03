<template>
  <div>
    <h2>动画【直接饮用第三方 Animate 】</h2>
    <button @click="flag = !flag">切换</button>
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <img v-if="flag" src="../assets/tx.jpg" alt="">
    </transition>
  </div>
</template>

<script>
import animate from 'animate.css'
export default {
  data () {
    return {
      flag: false
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

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
img {
  width: 300px;
  height: 200px;
  margin: 30px auto;
}
</style>
