<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Demo /> -->
    <!-- <Events/> -->
    <!-- <DemoFilter /> -->
    <!-- <TransitionAndAnimate /> -->
    <TransitionAndAnimateTwo />
    <TransitionAndAnimateThree />
  </div>
</template>

<script>
// import Demo from './components/Demo.vue';
// import Events from './components/Events'
// import DemoFilter from './components/DemoFilter'
// import TransitionAndAnimate from './components/TransitionAndAnimate.vue'
// import TransitionAndAnimateTwo from './components/TransitionAndAnimateTwo.vue'
import TransitionAndAnimateThree from './components/TransitionAndAnimateThree.vue'

export default {
  name: 'App',
  components: {
    // Demo,
    // Events
    // DemoFilter,
    // TransitionAndAnimate,
    // TransitionAndAnimateTwo
    TransitionAndAnimateThree
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
