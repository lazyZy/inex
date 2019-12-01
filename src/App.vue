<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <div v-if="0"><pdf></pdf></div>
    <travel></travel>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import pdf from './components/pdf'
import travel from './components/map'

export default {
  name: 'app',
  components: {
    pdf,
    HelloWorld,
    travel
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
