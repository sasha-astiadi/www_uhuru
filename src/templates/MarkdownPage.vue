<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container-fluid sm:pxi-0 mx-auto overflow-x-hidden">
      <Header
        v-if="
          $page.markdownPage.header_title &&
          $page.markdownPage.header_title != ''
        "
        :id="$page.markdownPage.id"
        :title="$page.markdownPage.header_title"
        :slogan="$page.markdownPage.header_slogan"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />

      <BrandPanel
        :main="$page.markdownPage.securityMain"
        :sections="$page.markdownPage.security"
        :id="$page.markdownPage.id"
        v-if="$page.markdownPage.security.length > 0"
      />
    </div>
  </Layout>
</template>

<page-query>
  query($id: ID!) {
    markdownPage(id: $id) {
        id
        path
        metaTitle
        metaDesc
        metaImg
        header_excerpt
        header_altImg
        header_title
        header_image
        header_slogan
       securityMain {
         id
         image
       }
       security {
         id
         title
         content
       }
    }
  }
</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";

export default {
  components: {
    Header,
    BrandPanel,
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
      titleTemplate: this.$page.markdownPage.metaTitle,
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
/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */

.gridsome-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}
.gridsome-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gridsome-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gridsome-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}
</style>
