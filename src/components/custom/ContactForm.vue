<template>
  <div
    class="
      flex flex-wrap
      lg:text-left
      text-center
      lg:py-20
      py-10
      lg:px-32
      px-4
      bg
    "
    id="join"
  >
    <div class="lg:w-1/2 order-1 lg:order-none lg:self-center">
      <h2 class="text-7xl leading-none font-thin text-white lg:mx-20 max-w-xl">
        <span class="block">{{ contact.title }}</span>
        <span class="block green" v-if="contact.subtitle">{{
          contact.subtitle
        }}</span>
      </h2>
    </div>
    <div class="lg:w-1/2 order-2 lg:px-20 self-center">
      <form class="w-full max-w-lg py-12">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                green
                text-xl
                font-bold
                mb-2
                text-left
              "
              for="grid-first-name"
            >
              Name:
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                myform
                text-black
                border border-gray-500
                rounded-full
                py-3
                px-4
                mb-6
                leading-tight
                focus:outline-none
              "
              id="grid-first-name"
              type="text"
              placeholder="Your name"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                green
                text-xl
                font-bold
                mb-2
                text-left
              "
              for="grid-password"
            >
              E-mail:
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                myform
                border border-gray-500
                rounded-full
                py-3
                px-4
                mb-6
                leading-tight
                focus:outline-none
              "
              id="email"
              type="email"
              placeholder="Your email"
            />
            <!-- <p class="text-gray-600 text-xs italic">
          Some tips - as long as needed
        </p> -->
          </div>
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                green
                text-xl
                font-bold
                mb-2
                text-left
              "
              for="grid-subject"
            >
              Subject:
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                myform
                border border-gray-500
                rounded-full
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
              "
              id="grid-subject"
              type="text"
              placeholder="Your subject"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                green
                text-xl
                font-bold
                mb-2
                text-left
              "
              for="grid-password"
            >
              Message
            </label>
            <textarea
              class="
                no-resize
                appearance-none
                block
                w-full
                myform
                border border-gray-500
                rounded-lg
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none
                h-48
                resize-none
              "
              id="message"
              placeholder="Your message"
            ></textarea>
            <!-- <p class="text-gray-600 text-xs italic">
          Re-size can be disabled by set by resize-none / resize-y / resize-x /
          resize
        </p> -->
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="
                shadow
                bg-transparent
                hover:bg-teal-400 hover:text-white
                focus:shadow-outline focus:outline-none
                text-teal-400
                font-bold
                py-1
                px-8
                text-xl
                rounded-full
                border border-teal-400
              "
              type="button"
            >
              Send
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "contact"],
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

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

.myform {
  background-color: #75ecd4;
}
</style>