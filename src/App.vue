<template>
  <div id="app">
    <links />
    <target/>
  </div>
</template>

<script>
import Links from './components/Links'
import Target from './components/Target'

export default {
  name: 'app',
  components: {
    Links,
    Target
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
