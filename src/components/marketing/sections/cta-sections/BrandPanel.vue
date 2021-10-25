<template>
  <div class="mx-auto mt-10">
    
    <!-- home -->
    <div
      v-if="id == 'home' && brand1 && !brand2"
      class="flex flex-wrap lg:text-left text-center lg:py-32 lg:px-40"
    >
      <div class="lg:w-1/2 lg:px-2 order-1 lg:order-none lg:self-center">
        <g-image
          :src="require(`!!assets-loader!@images/brandPanel/${brand.subImg}`)"
          class="w-1/4"
        />
        <div class="">
          <h2
            class="
              h2
              lg:text-6xl
              leading-none
              font-thin
              text-white
            "
          >
            <span class="block">{{ brand.title }}</span>
            <span class="block green" v-if="brand.subtitle">{{
              brand.subtitle
            }}</span>
          </h2>
          <div class="my-36">
            <a
              v-if="brand.btnTxt.includes('http')"
              target="_blank"
              :href="brand.sourceUrl"
              class="bg-transparent hover:bg-green-400 text-white font-extrabold hover:text-white py-1 text-2xl px-10 border border-white hover:border-transparent rounded-full"
              >{{ brand.btnTxt }}</a
            >
            <a
              v-else
              :href="brand.sourceUrl"
              class="bg-transparent hover:bg-green-400 text-white font-extrabold hover:text-white py-1 text-2xl px-10 border border-white hover:border-transparent rounded-full"
              >{{ brand.btnTxt }}</a
            >
          </div>
          <div
            class="pb-6 text-xl leading-tight tracking-wide max-w-md text-white"
            v-html="brand.content"
          ></div>
        </div>
      </div>
      <div class="lg:w-1/2 lg:px-6 self-center">
        <g-image class="w-full mx-auto" :src="image" :alt="brand.title" />
      </div>
    </div>

    <div
      v-else-if="id == 'home' && brand2"
      class="flex flex-wrap lg:text-left text-center lg:py-16 lg:px-16"
    >
      <div class="lg:w-1/2 lg:px-6 self-center">
        <g-image class="w-1/2 mx-auto" :src="image" :alt="brand.title" />
      </div>
      <div class="lg:w-1/2 lg:px-10 order-1 lg:order-none lg:self-center">
        <div class="text-white max-w-lg">
          <h5 class="h5 leading-none font-heading font-bold max-w-sm">
            {{ brand.title }}
          </h5>
          <p class="font-light text-2xl mb-5">{{ brand.content1 }}</p>
          <p class="font-light text-2xl">{{ brand.content2 }}</p>
          <div class="my-10">
            <a
              v-if="brand.btnTxt.includes('http')"
              target="_blank"
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green
                text-white
                font-semibold
                hover:text-white
                py-4
                px-10
                border border-white
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
            <a
              v-else
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green
                text-white
                font-semibold
                hover:text-white
                py-4
                px-10
                border border-white
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
          </div>

          <h5 class="h5 leading-none font-heading font-bold max-w-sm">
            {{ brand.title2 }}
          </h5>
          <div
            class="
              pb-6
              leading-tight
              tracking-wide
              max-w-md
              font-light
              text-2xl
              mb-5
            "
            v-html="brand.content"
          ></div>
          <h5 class="h5 leading-none font-heading font-bold max-w-sm">
            {{ brand.title3 }}
          </h5>
        </div>
      </div>
    </div>

    <div
      v-else
      class="
        brandpanel
        bg-gray-900
        rounded-lg
        shadow-xl
        overflow-hidden
        lg:grid lg:grid-cols-2 lg:gap-4
      "
    >
      <div
        class="
          pt-10
          pb-12
          px-6
          sm:pt-16 sm:px-16
          lg:py-16 lg:pr-0
          xl:py-20 xl:px-15
        "
      >
        <div class="lg:self-center">
          <h2
            class="text-3xl leading-9 font-extrabold text-white sm:leading-10"
          >
            <span class="block">{{ brand.title }}</span>
            <span class="block" v-if="brand.subtitle">{{
              brand.subtitle
            }}</span>
          </h2>
          <div class="py-6 mt-4 mx-4 text-white" v-html="brand.content"></div>
          <!-- <a
              :href="brand.sourceUrl"
              class="bg-teal-300 text-sm learn-button hover:bg-57EEF8-400 text-gray-900 px-12 py-2 mr-3 rounded shadow rounded-full"
              >{{ brand.btnTxt }}</a
            > -->
        </div>
      </div>
      <div class="relative pb-3/5 -mt-6 md:pb-1/2">
        <g-image
          class="
            absolute
            brandpanel
            inset-0
            w-full
            h-full
            transform
            translate-x-0 translate-y-6
            rounded-md
            object-fill object-left-top
            sm:translate-x-0
            lg:translate-y-20
          "
          :src="image"
          :alt="brand.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["brand", "id", "brand1", "brand2"],
  computed: {
    image() {
      return this.brand.image.src
        ? this.brand.image.src
        : require(`!!assets-loader!@images/brandPanel/${this.brand.image}`);
    },
  },
};
</script>