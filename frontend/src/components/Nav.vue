<template>
  <div class="navbar">
    <nav class="uk-navbar-container uk-navbar uk-navbar-transparent">
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/">Jonathan Gunawan</router-link>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  export default {
    name: "Nav",
    data() {
      return {
        categories: []
      };
    },
    apollo: {
      categories: gql`
        query Categories {
          categories {
            id
            name
          }
        }
      `
    }
  };
</script>
