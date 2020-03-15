<template>
  <div>
    <div class="uk-text-center">
      <h1>{{homepage.title}}</h1>
      <p>{{homepage.description}}</p>
    </div>
    <div class="uk-grid-column-small uk-child-width-expand@s uk-text-center grid-container" uk-grid>
      <div class="grid-img">
        <div class="grid-img-box" v-for="banner in homepage.banners" :key="banner.id">
            <img class="img-banner" :src= "api_url + banner.url" :alt="banner.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/homepage.js"></script>

<style lang="css" scoped>

  .description {
    text-align: center;
  }

  .grid-container{
    margin: 50px 0;
  }

  .grid-img{
    /*border: 1px solid blue;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-img-box{
    /*border: 1px solid red;*/
    width: 450px;
    height: auto;
    margin-right: 15px;
  }

  .img-banner{
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
  }

</style>