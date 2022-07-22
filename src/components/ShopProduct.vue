<template>
  <div class="product">
    <h1 class="text-roseBlue text-center text-3xl m-32">
      APPLE AirPods Max Wireless Bluetooth Noise-Cancelling Headphones - Silver
    </h1>
    <div class="flex justify-evenly text-center">
      <div class="Header">
        <img
          :src="require(`@/assets/photos/${image}`)"
          width="700"
          alt="appleHeader"
        />
        <div
          v-for="(img_src, index) in img_src"
          :key="index"
          @mouseover="currentSrc = index"
        ></div>
      </div>
      <div class="mt-32">
        <p class="text-3xl text-gray-400">befor: {{ before / 10 }}$</p>
        <p class="text-5xl my-3">Now: {{ now / 10 }}$</p>
        <div class="flex justify-center">
          <button
            class="text-3xl bg-blue-600 text-white px-5"
            @click="
              if (this.counter > 1) {
                this.counter--;
              }
            "
          >
            -
          </button>
          <p class="text-3xl bg-white px-5">{{ counter }}</p>
          <button
            class="text-3xl bg-blue-600 text-white px-5"
            @click="
              if (this.counter < 3) {
                this.counter++;
              }
            "
          >
            +
          </button>
        </div>
        <p class="mt-3 text-red-600 text-2xl" v-if="this.counter >= 3">
          Last Quantity
        </p>
        <div class="flex justify-center">
          <p
            class="cursor-pointer my-5 mx-5 p-8 rounded-full text-transparent"
            v-for="item in switcher"
            :key="item.colorId"
            :style="{ backgroundColor: item.color }"
            @click="updateColor(item.setImg)"
          ></p>
        </div>
        <div class="flex justify-center">
          <p class="mx-5 text-2xl" v-for="item in switcher" :key="item.colorId">
            {{ item.title }}
          </p>
        </div>
        <button
          @click="$store.commit('add')"
          class="bg-gray-800 text-white px-28 py-3 text-3xl m-5"
        >
          Add to cart
        </button>
      </div>
    </div>
    <div>
      <form class="grid justify-center mt-44" action="" @submit="validateForm">
        <div
          class="error bg-red-200 p-2"
          v-for="error in formErrors"
          :key="error"
        >
          {{ error }}
        </div>
        <input
          class="p-5"
          type="text"
          v-model="comment"
          placeholder="comment here"
        />
        <input
          class="bg-blue-500 cursor-pointer mt-5 text-white"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopProduct",
  data() {
    return {
      counter: 1,
      formErrors: [],
      comment: null,
      isHidden: false,
      hovered: false,
      currentSrc: 0,
      image: "Appleheadphones.png",
      before: 7999,
      now: 5999,
      switcher: [
        {
          colorId: 1,
          color: "pink",
          setImg: "applePink.png",
          title: "pinks",
        },
        {
          colorId: 2,
          color: "white",
          setImg: "Appleheadphones.png",
          title: "whites",
        },
      ],
      img_src: [
        "@/assets/photos/Appleheadphones.png",
        "@/assets/photos/Appleheadphones.png",
      ],
    };
  },
  methods: {
    updateColor(setImg) {
      this.image = setImg;
    },
    error() {
      if (!this.comment) {
        ("hlao");
      }
    },
    validateForm(e) {
      this.formErrors = [];

      if (!this.comment) {
        this.formErrors.push("Comment can't be empty");
      }

      e.preventDefault();
    },
  },
};
</script>

<style></style>
