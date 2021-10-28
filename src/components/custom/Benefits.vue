<template>
  <div
    class="mx-auto py-12 lg:py-56 benefits bg-cover"
    :style="{ 'background-image': 'url(' + main.background.src + ')' }"
  >
    <div class="flex flex-wrap lg:text-left text-center lg:px-40">
      <div
        class="lg:w-2/3 lg:px-2 col-span-2 order-1 lg:order-none lg:self-center max-w-4xl"
        v-if="main"
      >
        <h3 class="leading-none font-bold text-white typewriter">
          {{ main.title }}
        </h3>
        <h2
          class="h2 pb-6 text-8xl  leading-tight font-thin text-white"
          v-html="main.content"
        ></h2>
      </div>
      <div class="lg:w-1/3 lg:px-20 order-2 lg:order-none lg:self-end">
        <dl
          class="
            space-y-8
            md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-4
          "
        >
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="relative max-w-xs"
          >
            <dt>
              <div class="absolute flex justify-center h-16 w-16 text-white">
                <font-awesome :icon="['fas', 'check-circle']" />
              </div>
              <h3 class="ml-16 text-2xl leading-7 font-bold text-white">
                {{ benefit.title }}
              </h3>
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
