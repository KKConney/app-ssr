<template>
  <div id="app">
    <div class="title">Welcome vue.js --- SSR 服务端渲染</div>
    <div class="header">
      <router-link :to="{path: '/home'}">Home</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.title {
  text-align: center;
  font-size: 30px;
  padding: 20px 0;
}
  .header {
    background: darkcyan;
    a {
      display: inline-block;
      font-size: 20px;
      text-decoration: none;
      padding: 10px 20px;
      color: #fff;
      &:hover {
        color: #fff
      }
      &.router-link-active {
        background: #42b983;
        color: #fff;
        font-weight: 600
      }
    }
  }
  .container {
    width: 800px;
    margin: 0 auto;
  }
</style>
