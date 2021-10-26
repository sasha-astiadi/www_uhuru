<template>
  <div
    class="mx-auto py-16 benefits bg-cover"
    :style="{ 'background-image': 'url(' + main.background.src + ')' }"
  >
    <div class="flex flex-wrap lg:text-left text-center lg:px-40">
      <div
        class="lg:w-1/2 lg:px-2 col-span-2 order-1 lg:order-none lg:self-center"
        v-if="main"
      >
        <h4 class="h4 leading-none font-bold text-white typewriter">
          {{ main.title }}
        </h4>
        <h2
          class="h2 pb-6 lg:text-6xl leading-tight font-thin text-white"
          v-html="main.content"
        ></h2>
      </div>
      <div class="lg:w-1/2 lg:px-2 order-2 lg:order-none lg:self-end">
        <dl
          class="
            space-y-10
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10
          "
        >
          <div
            v-for="benefit in benefits"
            :key="benefit"
            class="relative max-w-xs"
          >
            <dt>
              <div class="absolute flex justify-center h-12 w-12 text-white">
                <font-awesome :icon="['fas', 'check-circle']" />
              </div>
              <p class="ml-16 text-xl leading-6 font-medium text-white">
                {{ benefit.title }}
              </p>
            </dt>
          </div>
          <div class="inline-flex ml-12">
            <a
              v-if="main.link.includes('http')"
              target="_blank"
              :href="main.link"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ main.button }}</a
            >
            <a
              v-else
              :href="main.link"
              class="
                bg-transparent
                hover:bg-green-400
                text-white
                font-extrabold
                hover:text-white
                py-1
                text-xl
                px-10
                border border-white
                hover:border-transparent
                rounded-full
              "
              >{{ main.button }}</a
            >
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["benefits", "id", "main"],
};
</script>
