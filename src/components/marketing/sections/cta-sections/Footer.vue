
<template>
  <footer class="bg-green">
    <div class="mx-auto py-6 px-4 sm:px-6 lg:px-20">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-2">
          <div class="w-full max-w-3xl mx-auto">
            <h2
              v-if="record.title2"
              class="
                lg:text-3xl
                text-center
                capitalize
                mb-2
                font-bold
                leading-none
                font-normal font-heading
              "
            >
              {{ record.title2 }}
            </h2>

            <div class="text-center">
              <a
                class="
                  inline-block
                  bg-transparent
                  text-lg
                  learn-button
                  px-12
                  py-1
                  lg:mr-10
                  my-4
                  border-2
                  shadow
                  border-black
                  rounded-full
                "
                target="_blank"
                v-if="record.button1 && record.link1.includes('http')"
                :href="record.link"
                >{{ record.button1 }}</a
              >

              <a
                class="
                  inline-block
                  bg-transparent
                  text-lg
                  learn-button
                  px-12
                  py-1
                  lg:mr-10
                  my-4
                  border-2
                  shadow
                  rounded-full
                  border-black
                "
                v-else
                :href="record.link1"
                >{{ record.button1 }}</a
              >
              <a
                class="
                  inline-block
                  bg-transparent
                  text-lg
                  learn-button
                  px-12
                  py-1
                  mr-5
                  my-4
                  border-2
                  shadow
                  rounded-full
                  border-black
                "
                target="_blank"
                v-if="record.button2 && record.link2.includes('http')"
                :href="record.link2"
                >{{ record.button2 }}</a
              >

              <a
                class="
                  inline-block
                  bg-transparent
                  text-lg
                  learn-button
                  px-12
                  py-1
                  mr-5
                  my-4
                  border-2
                  rounded-full
                  shadow
                  border-black
                "
                v-else
                :href="record.link2"
                >{{ record.button2 }}</a
              >
            </div>
          </div>
        </div>
        <div class="inline-block">
          <g-image
            class="inline-block mr-5 lg:mb-10 md:justify-between"
            :src="record.logo.src"
            alt="Uhuru"
          />
          <div class="inline-block border-l-2 border-black mt-2 pl-3">
            <h3 class="text-2xl m-0">{{ record.title }}</h3>
            <div
              class="
                my-3
                text-2xl
                leading-none
                text-gray-900
                max-w-md
                font-bold
                md:mt-0 md:order-1
              "
              v-html="record.content"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["record", "theme"],
};
</script>
