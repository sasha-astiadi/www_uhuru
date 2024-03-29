// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue';
import VTooltip from 'v-tooltip'

import '~/assets/scss/main.scss';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css';
import shareIt from 'vue-share-it';

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
require("prismjs/themes/prism-solarizedlight.css");

config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('font-awesome', FontAwesomeIcon)
    Vue.component('VueSlickCarousel', VueSlickCarousel)
    Vue.use(VTooltip, {
        defaultPlacement: 'top-end',
        defaultClass: 'bg-black text-xs px-2 leading-normal py-1 rounded absolute text-gray-400 max-w-xs mb-1'
    })
    Vue.use(shareIt)
}