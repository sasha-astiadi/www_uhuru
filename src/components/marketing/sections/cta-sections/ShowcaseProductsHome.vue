<template>
  <div class="py-10 bg" id="home">
    <div
      class="w-full max-w-7xl mx-auto mt-10 px-4 text-center text-white"
      v-if="main"
    >
      <h3 v-if="main.title" class="text-4xl mb-6 font-semibold leading-tight font-heading">
        {{ main.title }}
      </h3>
      <p v-if="main.subtitle" class="mb-6 text-xl">
        {{ main.subtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-5 lg:px-40">
      <a
        v-for="(product, idx) in products"
        target="_blank"
        :key="idx"
        :href="product.url"
        class="m-auto rounded overflow-hidden transition duration-500"
      >
        <div class="text-center pb-8 my-5 green" :class="{ active: idx !== 1 }">
          <g-image class="w-1/2 mx-auto mb-10" :src="img(product.image)" />
          <h3 class="font-bold text-2xl">{{ product.title }}</h3>
          <div v-html="product.content" class="text-xl font-bold pb-4 px-10"></div>

          <div v-if="product.button">
            <a
              v-if="product.url.includes('http')"
              target="_blank"
              :href="product.url"
              class="
                bg-white
                text-lg
                learn-button
                hover:bg-gray-400
                px-12
                py-1
                mb-5
                shadows
                border-black border-2
              "
              >{{ product.button }}</a
            >
            <a
              v-else
              :href="product.url"
              class="
                bg-white
                text-lg
                learn-button
                hover:bg-gray-400
                px-12
                py-1
                mb-5
                shadows
                border-black border-2
              "
              >{{ product.button }}</a
            >
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products", "main"],
  methods: {
    img(image) {
      if (!image) return "";
      if (image.src) return image.src;
      return image;
    },
  },
};
</script>

<style scoped>
.bannerFondo {
  height: 400px;
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

/* .take_apart {
  background-color: #f5f5f5;
  max-height: 570px;
} */
</style>
