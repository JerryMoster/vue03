<template>
  <div>
    <h2>过渡【想要给某个元素加过度动画，就需要在这个元素的外层加上标签 transition，同时还要给这个标签命名 name 】</h2>
    <h2>之后就要在 css 里面写样式，参照官网上的；样式名称为 name-enter,name-leave; name-enter-active,name-leave-active;只需要写着四个的样式就可以</h2>
    <button @click="show = !show">切换</button>
    <transition name="fade">
      <div class="box" v-if="show">你好，世界！</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
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
.box {
  width: 200px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 30px auto;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate(200px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
