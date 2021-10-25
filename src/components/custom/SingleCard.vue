<template>
  <div
    class="
      max-w-screen-5xl
      mx-auto
      py-12
      px-4
      text-center
      sm:px-6
      lg:px-8
      lg:py-0
      bg-gray-200
    "
  >
    <div class="space-y-12">
      <div
        class="mx-auto grid-cols-1 sm:grid sm:grid-cols-1 lg:grid-cols-1 w-5xl"
      >
        <div
          class="my-5 mx-5 py-10 border"
          v-for="card in singleCards"
          :key="card.id"
        >
          <img class="mx-auto lg:w-1/3" :src="card.img.src" :alt="card.id" />
          <div class="line-break"></div>
          <div class="space-y-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h4 v-if="card.title">{{ card.title }}</h4>
              <div class="mx-6 text-lg text-gray-800" v-html="card.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["singleCards"],
};
</script>

<style scoped>
.border {
  border: 1px solid #000;
}

.line-break {
  height: 1px;
  width: 25%;
  background-color: #000;
  margin: auto;
  margin-bottom: 10px;
}
</style>