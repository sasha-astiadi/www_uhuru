<template>
  <section class="pt-24 px-4 text-center text-white bg" v-if="id == 'home'">
    <h3
      class="
        text-5xl
        mx-auto
        leading-tight
        font-bold font-heading
        capitalize
        lg:max-w-2xl
      "
    >
      {{ main.title }}
    </h3>

    <h2
      class="text-5xl mx-auto leading-tight mb-6 font-thin font-heading lg:max-w-2xl"
    >
      {{ main.subtitle }}
    </h2>
    <div class="flex flex-wrap items-center mx-auto lg:max-w-2xl">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="lg:w-1/3 mt-5 lg:mt-0 feature px-4 text-center"
      >
        <div v-if="index == 1">
          <div class="w-full h-auto mx-auto px-2 order-1">
            <g-image :src="feature.image" :alt="feature.title" />
          </div>
        </div>

        <div v-else class="max-w-xs mx-auto">
          <h5 class="h5 text-3xl font-bold">
            {{ feature.title }}
          </h5>
          <div v-html="feature.content" class="lg:text-xl text-gray-800"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 px-4 text-center" v-else-if="id == 'oldhome'">
    <h2 class="text-4xl leading-tight mb-6 font-bold font-heading uppercase">
      {{ main.title }}
    </h2>
    <div
      v-if="main.content"
      class="mb-6 text-gray-700"
      v-html="main.content"
    ></div>
    <div class="flex flex-wrap items-center -mx-4 mb-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="lg:w-1/3 mt-5 lg:mt-0 feature px-4 text-center"
      >
        <div v-if="index == 1">
          <div class="w-1/2 lg:w-full lg:h-full mx-auto px-2 order-1">
            <g-image :src="feature.svg" :alt="feature.title" />
          </div>
        </div>

        <div v-else>
          <span v-if="index !== 4" class="img-border"></span>
          <h5 class="capitalize">
            {{ feature.title }}
          </h5>
          <div v-html="feature.content" class="text-gray-700"></div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-20" v-if="main.btn">
      <a
        v-if="main.link.includes('http')"
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
        :href="main.link"
        target="_blank"
        >{{ main.btn }}
      </a>

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
          shadow
          rounded-full
        "
        :href="main.link"
        >{{ main.btn }}
      </a>

      <a
        v-if="main.link2.includes('http')"
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
        :href="main.link2"
        target="_blank"
        >{{ main.btn2 }}
      </a>

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
          shadow
          rounded-full
        "
        :href="main.link2"
        >{{ main.btn2 }}
      </a>

      <a
        v-if="main.link3.includes('http')"
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
        :href="main.link3"
        target="_blank"
        >{{ main.btn3 }}
      </a>

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
          shadow
          rounded-full
        "
        :href="main.link3"
        >{{ main.btn3 }}
      </a>
      <!-- <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div> -->
    </div>
  </section>

  <section class="py-24 px-4 text-center" v-else-if="id == 'tft'">
    <h2
      class="
        lg:text-6xl
        mx-auto
        leading-tight
        mb-6
        font-bold font-heading
        uppercase
        lg:max-w-2xl
      "
    >
      {{ main.title }}
    </h2>
    <div class="flex flex-wrap items-center -mx-4 lg:mb-20">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="lg:w-1/3 mt-5 lg:mt-0 feature px-4 text-center"
      >
        <div v-if="index == 1">
          <div class="w-full h-auto mx-auto px-2 order-1">
            <g-image :src="feature.image" :alt="feature.title" />
          </div>
        </div>

        <div v-else class="max-w-xs mx-auto">
          <h5 class="text-4xl capitalize font-light">
            {{ feature.title }}
          </h5>
          <div v-html="feature.content" class="lg:text-xl text-gray-800"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 px-4" v-else>
    <h2 class="text-4xl text-center mb-12 font-normal font-heading">
      {{ main.title }}
    </h2>
    <p
      v-if="main.subtitle"
      class="mb-6 text-2xl text-center font-ligh text-gray-800"
    >
      {{ main.subtitle }}
    </p>
    <div class="flex flex-wrap -mx-4 mb-6">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="lg:w-1/2 px-4 mb-6 text-center"
      >
        <g-image
          class="w-1/3 mx-auto"
          v-if="feature.svg"
          :src="feature.svg.src"
          :alt="feature.svg"
        ></g-image>
        <h2 class="text-3xl mt-5 mb-3 font-normal font-heading">
          {{ feature.title }}
        </h2>
        <div
          v-html="feature.content"
          class="text-lg text-gray-700 leading-relaxed"
        ></div>
      </div>
    </div>
    <div class="text-center" v-if="main.btn">
      <g-link
        class="
          bg-gray-900
          learn-button
          hover:bg-gray-700
          text-gray-100
          px-5
          py-3
          mr-3
          font-semibold
          rounded
          shadow
        "
        :to="main.link"
        >{{ main.btn }}</g-link
      >
      <div v-html="main.content" class="text-sm text-gray-400 mt-5"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id", "main", "features"],
};
</script>

<style scoped>
.img-border {
  display: block;
  width: 50px;
  margin: auto;
  height: 5px;
  background: linear-gradient(to right, #b8a5e9, #2e3192);
}

.border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, #b8a5e9, #23256e);
  padding: 3px;
  border-radius: 20px;
}

.module {
  width: 245px;
  background: #252e6e;
  color: white;
  text-align: center;
  border-radius: 20px;
}
.feature {
  max-height: 315px !important;
}


.bg {
  background: #121214;
  background: -webkit-linear-gradient(to right, #313035, #121214));
  background: linear-gradient(to right, #313035, #121214);
}

.bg2 {
  background: #121214;
  background: -webkit-linear-gradient(to right, #121214, #313035,));
  background: linear-gradient(to right, #121214, #313035);
}
</style>