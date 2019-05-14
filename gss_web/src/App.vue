<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
  height: 100%;
  overflow: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, p, figure, form, blockquote { margin: 0; }
ul, ol, li, dl, dd { margin: 0; padding: 0; }
ul, ol { list-style: none outside none; }
</style>
