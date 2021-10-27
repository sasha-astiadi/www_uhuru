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
    }
  }
</page-query>

<script>
import NewCard from "~/components/marketing/sections/cta-sections/NewCard.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import VerticalNav from "~/components/custom/Navbar/VerticalNav.vue";
import GetInTouch from "~/components/custom/Navbar/Getintouch.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import HowItWorks from "~/components/custom/sections/HowItWorks.vue";
import Features from "~/components/custom/sections/Features.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import CallToActionbg1 from "~/components/custom/sections/CallToActionbg1.vue";
import SignUp from "~/components/custom/sections/SignUp.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import TFTFuel from "~/components/marketing/sections/team-sections/with_large_images.vue";
import Roadmap from "~/components/custom/sections/Roadmap.vue";
import FourTiersWithToggle from "~/components/marketing/sections/pricing/four_tiers_with_toggle.vue";
import WithComparisonTable from "~/components/marketing/sections/pricing/with_comparison_table.vue";
import BrandPanel from "~/components/marketing/sections/cta-sections/BrandPanel.vue";
import AppListItem from "~/components/AppListItem.vue";
import Partenerships from "~/components/marketing/sections/team-sections/grid_with_large_round_images.vue";
import CenteredAccordion from "~/components/marketing/sections/faq-sections/CenteredAccordion.vue";
import CustomCTA from "~/components/custom/sections/CustomCTA.vue";
import Slider from "~/components/custom/Slider.vue";
import RoadMap from "~/components/custom/Roadmap.vue";
import MarketInfo from "~/components/custom/MarketInfo.vue";
import SplitWithImage from "~/components/custom/SplitWithImage.vue";

export default {
  components: {
    NewCard,
    Header,
    VerticalNav,
    GetInTouch,
    SolutionsHeader,
    ShowcaseProducts,
    HowItWorks,
    Features,
    logoShowcase,
    CallToAction,
    CallToActionbg1,
    SignUp,
    Comparison,
    TFTFuel,
    Roadmap,
    FourTiersWithToggle,
    WithComparisonTable,
    BrandPanel,
    AppListItem,
    Partenerships,
    CenteredAccordion,
    CustomCTA,
    Slider,
    RoadMap,
    MarketInfo,
    SplitWithImage,
  },
  computed: {
    getImg() {
      let img = "";
      if (process.isClient) {
        img = `${window.location.origin}${this.$page.markdownPage.metaImg.src}`;
      }
      return img;
    },
    pageName() {
      let path = this.$route.path.substring(1);
      let name = path[0].toUpperCase() + path.slice(1);
      return name;
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
