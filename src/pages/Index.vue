<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden">
      <BrandPanel
        :brand="$page.markdownPage.brandPanel"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel"
        :brand1="true"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel2"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel2"
        :brand2="true"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel3"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel3"
        :brand3="true"
      />

      <BrandPanel
        :brand="$page.markdownPage.brandPanel4"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.brandPanel4"
        :brand4="true"
      />

      <Features
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.suites.length > 0"
        :main="$page.markdownPage.suiteMain"
        :features="$page.markdownPage.suites"
      />

      <ShowcaseProductsHome
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.productivity.length > 0"
        :main="$page.markdownPage.productivityMain"
        :products="$page.markdownPage.productivity"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        metaTitle
        metaDesc
        metaImg
        brandPanel{
         id
         title
         subtitle
         content
         sourceUrl
         btnTxt
         image
         subImg
       }
       brandPanel2{
         id
         title
         content1
         content2
         title2
         title3
         content
         sourceUrl
         btnTxt
         image
       }
      brandPanel3{
         id
         title
         content
         image
         subImg
         excerpt
       }

      brandPanel4{
         id
         title
         subtitle
         content
         image
       }
      productivityMain{
         id
         title
     }
     productivity{
        id
        title
        image
        content
     }
    suiteMain{
       id
       title
       subtitle
     }
     suites{
       id
       title
       image
       content
     }
  }
}
</page-query>

<static-query>
  query {
    metadata {
      siteUrl
    }
  }
</static-query>
<script>
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import ShowcaseProductsHome from "~/components/marketing/sections/cta-sections/ShowcaseProductsHome.vue";
import Features from "~/components/custom/sections/Features.vue";

export default {
  components: {
    BrandPanel,
    ShowcaseProductsHome,
    Features,
  },
  computed: {
    getImg() {
      let img = "";
      if (process.isClient) {
        img = `${window.location.origin}${this.$page.markdownPage.metaImg.src}`;
      }
      return img;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: "Uhuru | Welcome",
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
};
</script>
<style scoped>
.container-fluid {
  width: 100%;
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
}
</style>


<!--    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden">
      <g-image
        v-if="$page.markdownPage.solution_image"
        :src="$page.markdownPage.solution_image.src"
      />
    </div> --> 