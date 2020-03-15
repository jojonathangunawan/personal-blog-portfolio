import gql from "graphql-tag/src";

export default {
  name: "Homepage.vue",
  data() {
    return {
      homepage: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL
    }
  },
  apollo: {
    homepage: gql`
    query Homepage {
      homepage {
        title
        description
        banners{
          id
          url
          name
        }
      }
    }`
  }
}