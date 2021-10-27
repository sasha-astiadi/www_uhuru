<template>
  <div class="mx-auto">
    <!-- home -->
    <div
      v-if="id == 'home' && brand1 && !brand2 && !brand3 && !brand4"
      class="flex flex-wrap lg:text-left text-center lg:py-32 lg:px-40 bg"
    >
      <div class="lg:w-1/2 lg:px-2 order-1 lg:order-none lg:self-center">
        <g-image
          :src="require(`!!assets-loader!@images/brandPanel/${brand.subImg}`)"
          class=""
        />
        <div class="">
          <h2
            class="h2 lg:text-6xl leading-none font-thin text-white typewriter"
          >
            <span class="block">{{ brand.title }}</span>
            <!-- <span class="block green typewriter-text" v-if="brand.subtitle">{{
              brand.subtitle
            }}</span> -->
          </h2>
          <g-image
          :src="require(`!!assets-loader!@images/brandPanel/${brand.subImg2}`)"
          class="w-full"
        />
          <div class="my-36">
            <a
              v-if="brand.btnTxt.includes('http')"
              target="_blank"
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-2xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
            <a
              v-else
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-2xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
          </div>
          <div
            class="pb-6 text-2xl leading-tight tracking-wide max-w-lg text-white"
            v-html="brand.content"
          ></div>
        </div>
      </div>
      <div class="lg:w-1/2 lg:px-6 self-center">
        <g-image class="w-full mx-auto" :src="image" :alt="brand.title" />
      </div>
    </div>

    <!-- section tow -->

    <div
      v-else-if="id == 'home' && brand2"
      class="flex flex-wrap lg:text-left text-center lg:py-20 lg:px-16 bg2"
    >
      <div class="lg:w-1/2 self-center">
        <g-image class="mx-auto" :src="image" :alt="brand.title" />
      </div>
      <div class="lg:w-1/2 lg:px-32 order-1 lg:order-none lg:self-center">
        <div class="text-white max-w-lg">
          <h4 class="leading-none font-heading font-bold ">
            {{ brand.title }}
          </h4>
          <p class="font-light text-2xl leading-tight mb-5">
            {{ brand.content1 }}
          </p>
          <p class="font-light leading-tight text-2xl">{{ brand.content2 }}</p>
          <div class="my-10">
            <a
              v-if="brand.btnTxt.includes('http')"
              target="_blank"
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-2xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
            <a
              v-else
              :href="brand.sourceUrl"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-2xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ brand.btnTxt }}</a
            >
          </div>

          <h4 class="leading-none font-heading font-bold max-w-lg">
            {{ brand.title2 }}
          </h4>
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
          <h4 class="leading-none font-heading font-bold max-w-lg">
            {{ brand.title3 }}
          </h4>
        </div>
      </div>
    </div>

    <div
      v-else-if="id == 'home' && brand3"
      class="flex flex-wrap lg:text-left text-center lg:py-32 lg:px-40 bg"
    >
      <div class="lg:w-1/3 lg:px-2 order-1 lg:order-none lg:self-center">
        <div class="">
          <h4 class="leading-none font-heading font-bold green">
            {{ brand.title }}
          </h4>

          <div
            class="
              pb-6
              text-2xl
              leading-tight
              tracking-wide
              max-w-md
              font-light
              text-white
            "
            v-html="brand.content"
          ></div>
          <div class="">
            <g-image
              class="w-1/4 inline-flex mr-5"
              :src="
                require(`!!assets-loader!@images/brandPanel/${brand.subImg}`)
              "
            />
            <p class="max-w-xs leading-none lg:text-2xl inline-flex text-white">
              {{ brand.excerpt }}
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-2/3 lg:px-6 self-center">
        <g-image class="w-full mx-auto" :src="image" :alt="brand.title" />
      </div>
    </div>

    <div
      v-else-if="id == 'home' && brand4"
      class="flex flex-wrap lg:text-left text-center lg:px-16 bg2"
    >
      <div class="lg:w-1/2 lg:px-6 self-center">
        <g-image class="w-3/4 mx-auto mt-32 " :src="image" :alt="brand.title" />
      </div>
      <div class="lg:w-1/2 lg:px-10 order-1 lg:order-none lg:self-center">
        <div class="text-white ">
          <h5 class="h5 leading-none font-heading font-bold ">
            {{ brand.title }}
          </h5>

          <h2
            class="h2 text-8xl leading-none font-heading font-thin "
          >
            {{ brand.subtitle }}
          </h2>
          <div
            class="
              pb-6
              leading-tight
              tracking-wide
              lg:max-w-2xl
              font-light
              text-2xl
              mb-5
            "
            v-html="brand.content"
          ></div>
        </div>
      </div>
    </div>

    <!-- Security -->
    <div
      v-else-if="id == 'security'"
      class="flex flex-wrap lg:text-left text-center lg:p-28 mt-24 bg2"
    >
      <div class="lg:w-1/2 lg:px-6 self-center">
        <g-image
          v-if="main.image"
          class="w-3/4 mx-auto"
          :src="require(`!!assets-loader!@images/brandPanel/${main.image}`)"
          :alt="main.title"
        />
      </div>
      <div class="lg:w-1/2 lg:px-10 order-1 lg:order-none lg:self-center">
        <div
          class="text-white max-w-lg my-10"
          v-for="sec in sections"
          :key="sec.id"
        >
          <h4 class="h4 leading-none font-heading font-bold max-w-lg">
            <font-awesome :icon="['fas', 'angle-double-right']" class="mr-2" />
            {{ sec.title }}
          </h4>
          <div
            class="font-light text-md leading-tight mb-5"
            v-html="sec.content"
          ></div>
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
  props: [
    "brand",
    "id",
    "brand1",
    "brand2",
    "brand3",
    "brand4",
    "main",
    "sections",
  ],
  computed: {
    image() {
      return this.brand.image.src
        ? this.brand.image.src
        : require(`!!assets-loader!@images/brandPanel/${this.brand.image}`);
    },
  },
};
</script>

<style scoped>
.typewriter {
  display: inline-block;
}

.typewriter-text {
  display: inline-block;
  overflow: hidden;
  animation: typing 2s steps(30, end), blink 0.75s step-end infinite;
  white-space: nowrap;
  border-right: 4px solid #81e0cd;
  box-sizing: border-box;
}

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

@keyframes typing {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #81e0cd;
  }
}
</style>