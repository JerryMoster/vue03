<template>
  <div>
    <h2>动画【想要给某个元素加过度动画，就需要在这个元素的外层加上标签 transition，同时还要给这个标签命名 name 】</h2>
    <button @click="flag = !flag">切换</button>
    <transition name="flag">
      <img v-if="flag" src="../assets/tx.jpg" alt="">
    </transition>
  </div>
</template>

<script>
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
.flag-enter-active {
  animation: bounce 0.5s;
}
.flag-leave-active {
  animation: bounce 0.5s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
