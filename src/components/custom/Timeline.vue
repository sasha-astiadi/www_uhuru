<template>
  <div class="p-4 mt-4 bg2">
    <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
      <div class="md:contents" v-for="(item, id) in timeline" :key="id">
        <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
          <div class="h-full w-3 flex items-center justify-center">
            <div class="h-full w-1 bg-white pointer-events-none"></div>
          </div>
          <div
            class="
              w-3
              h-3
              absolute
              top-1/2
              -mt-3
              rounded-full
              bg-white
              shadow
              text-center
            "
          >
            <i class="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div
          class="
            bg-transparent
            col-start-4 col-end-12
            p-4
            rounded-xl
            my-4
            mr-auto
            shadow-md
            w-full
          "
        >
          <div class="font-thin text-lg mb-1" v-html="item.content"></div>
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
  background: -webkit-linear-gradient(to right, #313035, #121214));
  background: linear-gradient(to right, #313035, #121214);
}

.bg2 {
  background: #121214;
  background: -webkit-linear-gradient(to right, #121214, #313035,));
  background: linear-gradient(to right, #121214, #313035);
}
</style>