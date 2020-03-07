<template>
  <div id="app">
    <Nav/>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  import Nav from "./components/Nav";

  export default {
    name: "App",
    components: {Nav}
  }
</script>

<style lang="css">
  a {
    text-decoration: none;
  }

  h1 {
    font-family: Blinker, sans-serif;
    font-size: 120px;
  }

  #category {
    font-family: Blinker, sans-serif;
    font-weight: 500;
  }

  #title {
    letter-spacing: 0.4px;
    font-size: 22px;
    font-size: 1.375rem;
    line-height: 1.13636;
  }

  #banner {
    margin: 20px;
    height: 800px;
  }

  #editor {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.75;
  }

  .uk-navbar-container {
    background: #fff !important;
    font-family: Blinker, sans-serif;
    margin: 0px 25px;
  }

  img:hover {
    opacity: 1;
    transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
</style>
