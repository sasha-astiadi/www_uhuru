<template>
  <div class="flex flex-wrap lg:text-left text-center lg:pt-32 lg:px-40">
    <div class="lg:w-1/2 lg:px-2 order-1 lg:order-none lg:self-center">
      <h2 class="h2 lg:text-7xl leading-none font-thin text-white max-w-lg">
        <span class="block">{{ contact.title }}</span>
        <span class="block green" v-if="contact.subtitle">{{
          contact.subtitle
        }}</span>
      </h2>
    </div>
    <div class="lg:w-1/2 lg:px-6 self-center">
      <form class="w-full max-w-lg py-12">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
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
                bg-black
                text-teal-400
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
                text-gray-700 text-xs
                font-bold
                mb-2
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
                bg-black
                text-gray-700
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
                text-gray-700 text-xs
                font-bold
                mb-2
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
                bg-black
                text-gray-700
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
                text-gray-700 text-xs
                font-bold
                mb-2
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
                bg-black
                green
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
                py-2
                px-6
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