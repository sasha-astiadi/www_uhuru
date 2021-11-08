<template>
  <div class="mx-auto lg:p-40 px-3 bg">
    <div class="grid grid-cols-1 md:grid-cols-12 text-gray-50">
      <div class="md:contents" v-for="(item, id) in timeline" :key="id">
        <div class="col-start-1 mr-10 md:mx-auto relative">
          <div class="h-full w-3 flex items-center justify-center">
            <div class="h-full w-1 bg-white pointer-events-none"></div>
          </div>
          <div
            class="
              w-3
              h-3
              absolute
              top-1/4
              -mt-8
              rounded-full
              bg-white
              text-center
            "
          >
            <i class="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div
          class="
            bg-transparent
            col-start-2 col-end-7
            p-3
            rounded-xl
            mr-auto
            w-full
          "
        >
          <div class="font-normal text-2xl leading-tight" v-html="item.content"></div>
        </div>
      </div>

      <div class="md:contents text-center">
        <div
          class="
            row-start-1 row-end-6
            col-start-7 col-end-12
            p-4
            my-4
            bg-transparent
            md:bg-cover
          "
          :style="{ 'background-image': 'url(' + main.image.src + ')' }"
        >
          <div class="font-thin text-lg mb-1">
            <h3 class="leading-none font-heading font-bold lg:mb-80">
              {{ main.title }}
            </h3>
            <div
              class="leading-none font-thin text-center lg:text-6xl lg:pt-24"
              v-html="main.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "main", "timeline"],
};
</script>

<style scoped>
.bg {
  background: #121214;
  background: -webkit-linear-gradient(to right, #313035, #212121);
  background: linear-gradient(0.25turn, #313035, #212121, #212121);
}

.bg2 {
  background: #121214;
  background: -webkit-linear-gradient(to right, #121214, #313035);
  background: linear-gradient(to right, #121214, #313035);
}
</style>