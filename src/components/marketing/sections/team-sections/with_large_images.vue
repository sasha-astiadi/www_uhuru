<template>
  <div class="bg-white">
    <div
      v-if="id == 'tft' && !farmingProcess && !cultivationProcess"
      class="
        mx-auto
        lg:py-16
        px-4
        max-w-screen-xl
        sm:px-6
        lg:px-8
        tft_section
      "
    >
      <div
        class="
          sm:grid sm:grid-cols-3
          sm:gap-x-6 sm:gap-y-12
          sm:space-y-0
          lg:grid-cols-3
          lg:gap-x-8
        "
      >
        <div v-for="(section, index) in sections" :key="index" class="p-5">
          <div class="leading-6">
            <h1 class="text-9xl font-bold uppercase mt-0" v-if="section.title">
              {{ section.title }}
            </h1>
            <div
              v-if="section.content"
              class="text-2xl tft_subtitle tracking-wide leading-9"
              v-html="section.content"
            ></div>
          </div>
        </div>
      </div>
      <g-image class="mt-0" :src="main.image" />
    </div>

    <div
      v-else-if="id == 'tft' && (farmingProcess || cultivationProcess)"
      class="mx-auto lg:py-16 px-4 max-w-screen-xl sm:px-6 lg:px-8 tft_section"
    >
      <div class="space-y-12">
        <div
          class="
            space-y-5
            text-center
            sm:space-y-4
            md:max-w-xl
            lg:max-w-3xl
            xl:max-w-none
          "
        >
          <h3 class="text-4xl mb-2 leading-tight font-heading">
            {{ main.title }}
          </h3>
          <h2 class="text-8xl mb-2 leading-tight font-heading">
            {{ main.subtitle }}
          </h2>
        </div>
        <div
          class="
            space-y-12
            sm:grid sm:grid-cols-3
            sm:gap-x-6 sm:gap-y-12
            sm:space-y-0
            lg:grid-cols-3
            lg:gap-x-8
          "
        >
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="space-y-4 p-5"
            :class="{ arrowsHolder: index % 2 !== 0 }"
          >
            <div class="relative">
              <g-image
                class="object-cover mb-8 h-full w-full"
                :src="img(section.image)"
                :alt="section.title"
              />
            </div>

            <div class="space-y-2">
              <div class="text-center leading-6 space-y-1">
                <h4 class="text-xl font-normal uppercase">
                  {{ section.title }}
                </h4>
                <div class="text-gray-900 text-2xl leading-tight tft_subtitle tracking-wide" v-html="section.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="mx-auto py-10 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="space-y-12">
        <div
          class="
            space-y-5
            text-center
            sm:space-y-4
            md:max-w-xl
            lg:max-w-3xl
            xl:max-w-none
          "
        >
          <h2 class="text-4xl mb-2 leading-tight font-semibold font-heading">
            {{ main.title }}
          </h2>
          <p class="text-gray-600">
            {{ main.description }}
          </p>
        </div>
        <div
          class="
            space-y-12
            sm:grid sm:grid-cols-2
            sm:gap-x-6 sm:gap-y-12
            sm:space-y-0
            lg:grid-cols-2
            lg:gap-x-8
          "
        >
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="tft_fuel space-y-4 p-5"
            :class="{ active: index % 2 !== 0 }"
          >
            <div class="relative">
              <g-image
                class="object-cover mb-8 h-full w-full"
                :src="img(section.svg)"
                :alt="section.title"
              />
            </div>

            <div class="space-y-2">
              <div class="text-center leading-6 space-y-1">
                <h4 class="text-xl font-normal uppercase">
                  {{ section.title }}
                </h4>
                <div v-html="section.content"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="inline-flex" v-if="main.button">
            <a
              v-if="urlChecker(main.link)"
              target="_blank"
              :href="main.link"
              class="
                bg-blue-900
                text-sm
                learn-button
                hover:bg-blue-800
                text-gray-100
                px-12
                py-2
                mr-5
                shadow
                rounded-full
              "
              >{{ main.button }}</a
            >
            <a
              v-else
              :href="main.link"
              class="
                bg-blue-900
                text-sm
                learn-button
                hover:bg-blue-800
                text-gray-100
                px-12
                py-2
                mr-5
                shadow
                rounded-full
              "
              >{{ main.button }}</a
            >
          </div>

          <div class="inline-flex" v-if="main.button2">
            <a
              v-if="urlChecker(main.link2)"
              target="_blank"
              :href="main.link2"
              class="
                bg-blue-900
                text-sm
                learn-button
                hover:bg-blue-800
                text-gray-100
                px-12
                py-2
                mr-5
                shadow
                rounded-full
              "
              >{{ main.button2 }}</a
            >
            <a
              v-else
              :href="main.link2"
              class="
                bg-blue-900
                text-sm
                learn-button
                hover:bg-blue-800
                text-gray-100
                px-12
                py-2
                mr-5
                shadow
                rounded-full
              "
              >{{ main.button2 }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "farmingProcess", "cultivationProcess", "main", "sections"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
    urlChecker(link) {
      var urlCheck = new RegExp(
        "([a-zA-Zd]+://)?(w+:w+@)?([a-zA-Zd.-]+.[A-Za-z]{2,4})(:d+)?(/.*)?",
        "i"
      );
      if (urlCheck.test(link)) {
        return link;
      }
    },
  },
};
</script>
<style scoped>
.tft_fuel {
  background-color: #66efc5;
  border-radius: 20px;
}
.active {
  background-color: #ff8acf;
  border-radius: 20px;
}
</style>