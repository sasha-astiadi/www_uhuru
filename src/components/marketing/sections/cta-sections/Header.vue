<template>
  <section class="bg-no-repeats bg">
    <div
      class="flex flex-wrap text-center items-center pb-20 lg:text-left -mx-2"
      v-if="id == 'why'"
    >
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
      <div class="lg:w-1/2 px-2 lg:pr-20 order-1 lg:order-none">
        <h1
          class="
            flex
            text-center
            uppercase
            mb-6
            mt-10
            leading-none
            text-5xl
            font-light font-heading
          "
        >
          {{ title }}
        </h1>
        <span
          class="
            flex
            text-center
            uppercase
            mb-6
            leading-none
            text-6xl
            font-black font-heading
          "
        >
          {{ slogan }}
        </span>

        <div
          class="mb-8 text-center text-xl mx-10 text-gray-600"
          v-html="excerpt"
        ></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
              inline-block
              bg-blue-900
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >
          <a
            v-else
            class="
              inline-block
              bg-blue-900
              text-md
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >
        </div>
      </div>
    </div>

    <div
      class="
        lg:py-60
        lg:mx-40
        flex flex-wrap
        text-center
        items-center
        lg:text-left  
        -mx-2
        mt-12
      "
      v-else-if="id == 'stats'"
    >
      <div
        class="
          lg:w-1/2
          px-2
          lg:pr-10 lg:mt-10
          order-1
          lg:order-none lg:self-center
          
        "
      >
        <h3 class="text-2xl text-white leading-none font-heading font-bold max-w-sm">
          {{ slogan }}
        </h3>
        <h2 class="text-white font-thin my-6 lg:text-7xl leading-none font-heading">
          {{ title }}
        </h2>
      </div>
      <div class="lg:w-1/2 px-2 lg:self-center">
        <g-image :src="img" class="mx-auto my-10" :alt="altImg" />
        <div
          class="
            text-white
            mb-8
            px-10
            text-center text-xl text-bold
            leading-normal
            mx-auto
          "
          v-html="excerpt"
        ></div>
      </div>
    </div>

    <div
      class="flex flex-wrap text-center lg:text-left lg:pt-10 -mx-2"
      v-if="id == 'tft'"
    >
      <div class="px-2 lg:mt-10 order-1 lg:order-none mx-auto text-center">
        <div class="w-1/2 mx-auto px-2 self-center">
          <g-image :src="img" :alt="altImg" />
        </div>
        <h2 class="text-8xl uppercase mb-6 mt-20 leading-none font-heading">
          {{ title }}
        </h2>
        <div class="mb-8 text-xl leading-relaxed" v-html="excerpt"></div>
      </div>
    </div>

    <div
      class="flex flex-wrap text-center lg:text-left lg:pt-10 -mx-2"
      v-else-if="id == 'grid'"
    >
      <div class="px-3 lg:mt-5 order-1 lg:order-none mx-auto text-center">
        <h2 class="text-8xl uppercase mb-6 mt-20 leading-none font-heading">
          {{ title }}
        </h2>
        <div class="mb-8 mx-auto text-xl max-w-xl" v-html="excerpt"></div>

        <a
          v-if="link.includes('http')"
          target="_blank"
          class="
            inline-block
            bg-white
            text-lg
            learn-button
            hover:bg-gray-400
            px-12
            py-1
            mr-5
            mb-4
            border-2
            shadow
            border-black
          "
          :href="link"
          >{{ button }}</a
        >
        <a
          v-else
          class="
            inline-block
            bg-white
            text-lg
            learn-button
            hover:bg-gray-400
            px-12
            py-1
            mr-5
            mb-4
            border-2
            shadow
            border-black
          "
          :href="link"
          >{{ button }}</a
        >
      </div>
      <g-image class="order-2 lg:order-none" :src="img" :alt="altImg" />
    </div>

    <div
      class="flex flex-wrap text-center lg:text-left lg:pt-10 lg:pb-10 -mx-2"
      v-else-if="id == 'home'"
    >
      <div class="px-3 lg:mt-5 order-1 lg:order-none mx-auto text-center">
        <h2
          class="
            lg:text-6xl
            font-light
            uppercase
            mb-6
            mt-20
            leading-none
            font-heading
          "
        >
          {{ title }}
          <span class="block leading-none font-bold">{{ title2 }}</span>
        </h2>

        <h3 class="text-4xl leading-none font-light">{{ slogan }}</h3>
        <div class="mb-8 mx-auto text-xl max-w-2xl" v-html="excerpt"></div>

        <a
          v-if="link.includes('http')"
          target="_blank"
          class="
            inline-block
            bg-white
            lg:text-lg
            learn-button
            hover:bg-gray-400
            px-12
            py-1
            mr-5
            mb-4
            border-2
            shadow
            border-black
            capitalize
          "
          :href="link"
          >{{ button }}</a
        >
        <a
          v-else
          class="
            inline-block
            bg-white
            lg:text-lg
            learn-button
            hover:bg-gray-400
            px-12
            py-1
            mr-5
            mb-4
            border-2
            shadow
            border-black
            capitalize
          "
          :href="link"
          >{{ button }}</a
        >
      </div>
      <g-image class="order-2 lg:order-none" :src="img" :alt="altImg" />
    </div>

    <div
      class="flex flex-wrap text-center lg:text-left lg:mt-10 lg:pt-10 lg:mx-40"
      v-else-if="id == 'support'"
    >
      <div class="lg:w-1/2 px-2 lg:mt-10 order-1 lg:order-none">
        <h2
          class="
            text-8xl
            mb-6
            mt-20
            uppercase
            leading-none
            font-heading
            lg:max-w-xl
          "
        >
          <span class="text-blue-600">{{ slogan }}</span> {{ title }}
        </h2>
        <div class="mb-8 text-gray-700 leading-relaxed" v-html="excerpt"></div>
        <div v-if="button">
          <a
            v-if="link.includes('http')"
            target="_blank"
            class="
              inline-block
              bg-blue-900
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              rounded
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >
          <a
            v-else
            class="
              inline-block
              bg-blue-900
              text-sm
              learn-button
              hover:bg-blue-800
              text-gray-100
              px-12
              py-2
              mr-5
              mb-4
              rounded
              shadow
              rounded-full
            "
            :href="link"
            >{{ button }}</a
          >
        </div>
      </div>
      <div class="lg:w-1/2 px-2 self-center">
        <g-image :src="img" :alt="altImg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "title",
    "title2",
    "id",
    "slogan",
    "slogan2",
    "excerpt",
    "altImg",
    "image",
    "img2",
    "button",
    "button2",
    "button3",
    "link",
    "link2",
    "link3",
  ],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>

<style scoped>
.bg {
  background: #121214;
  background: -webkit-linear-gradient(to right, #313035, #121214);
  background: linear-gradient(to right, #313035, #121214);
}

.bg2 {
  background: #121214;
  background: -webkit-linear-gradient(to right, #121214, #313035);
  background: linear-gradient(to right, #121214, #313035);
}

.bg-home {
  background: #70dfc9;
  background: -webkit-linear-gradient(to bottom, #ea1ff7, #70dfc9);
  background: linear-gradient(to bottom, #ea1ff7, #70dfc9);
  background-size: cover !important;
}
@media (max-width: 640px) {
  .bg-home {
    background-position: center !important;
  }
}
</style>