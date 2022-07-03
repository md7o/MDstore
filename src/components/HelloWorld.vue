<template>
  <div>
    <div class="bg-zinc-900">
      <div class="flex justify-around py-32">
        <img src="@/assets/photos/delivery-truck(1).png" width="250" />
        <img src="@/assets/photos/shield.png" width="250" />
        <img src="@/assets/photos/box.png" width="250" />
      </div>
      <div class="text-white text-6xl text-center pb-32">
        <h1 class="pb-5">Express delivery service</h1>
        <h1 class="text-5xl">High quality products</h1>
      </div>
      <!-- \\\\\\\\\\\\\\ -->
    </div>
    <div class="">
      <!-- filtering -->
      <div class="text-5xl text-center">
        <button
          class="bg-slate-500 text-white p-5 m-5 rounded-xl"
          @click="isHidden = !isHidden"
        >
          O
        </button>
      </div>
      <div v-if="isHidden" class="bg-white w-1/2 mx-auto text-center my-12">
        <div>
          <div class="flex text-left justify-evenly">
            <div>
              <div class="">
                <input type="checkbox" />
                <label for="apple"> Huwaii </label>
              </div>
              <div class="">
                <input type="checkbox" />
                <label for="apple"> Samsung </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- products -->
      <h1 class="text-4xl mb-12 text-center">Headphones</h1>
      <div class="grid grid-cols-4 mx-80">
        <div
          v-for="item in products"
          :key="item.id"
          style="width: 28rem"
          class="bg-white m-4 p-5"
        >
          <!-- 1 -->
          <div class="text-center">
            <img :src="require(`@/assets/photos/${item.img}`)" />
            <div>
              <h1 class="text-xl text-roseBlue mb-2">{{ item.title }}</h1>
              <h3 class="text-lg mb-2">{{ item.explained }}</h3>

              <div class="text-2xl">${{ item.price / 100 }}</div>
              <div class="row justify-end">
                <button
                  class="bg-blue-600 hover:bg-blue-500 rounded-2xl p-3 text-white mt-5"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- dsadas -->

    <div
      class="bg-slate-400 h-96 rounded-2xl grid justify-center align-middle m-32"
    >
      <div>
        <img class="w-60 mx-auto my-4" :src="img_src[currentSrc]" />
      </div>
      <div class="text-center">
        <span
          class="text-2xl text-black"
          v-for="size in sizes"
          :key="(size, Sis)"
        >
          size: {{ size }}
        </span>
      </div>
      <div>
        <button
          v-for="(img, index) in img_src"
          :key="index"
          @mouseover="currentSrc = index"
          class="mx-5 bg-orange-500 py-6 px-6 text-white font-bold hover:bg-orange-400 hover:transition-all"
        ></button>

        <button
          @click="size"
          class="mx-5 bg-teal-500 rounded-xl py-2 px-10 text-white font-bold hover:bg-teal-400 hover:transition-all"
        >
          small
        </button>

        <button
          @click="add"
          class="mx-5 bg-green-500 rounded-xl py-2 px-10 text-white font-bold hover:bg-green-400 hover:transition-all"
        >
          Add
        </button>
        <button
          @click="remover"
          class="mx-5 bg-red-500 rounded-xl py-2 px-10 text-white font-bold hover:bg-red-400 hover:transition-all"
        >
          remove
        </button>
      </div>
    </div>
    <div class="my-32 text-center text-3xl">
      <span>Cart({{ Cart }})</span>
    </div>
    <div>
      <div
        class="text-center text-3xl cursor-pointer"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <p class="bg-slate-500 text-white text-center w-48 mx-auto">hlao</p>
        <span class="relative bottom-24" v-show="hovered">dsadasdsa</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "BEATS Solo3 Wireless Wireless ",
          explained: "High quality products",
          price: 29999,
          img: "beast.png",
        },
        {
          id: 2,
          title: "HUAWEI FreeBuds Studio",
          explained: "High quality products",
          price: 32999,
          img: "huawei.png",
        },
        {
          id: 3,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
        {
          id: 4,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
        {
          id: 5,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
        {
          id: 6,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
        {
          id: 7,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
        {
          id: 8,
          title: "APPLE AirPods Max Wireless",
          explained: "High quality products",
          price: 55999,
          img: "Appleheadphones.png",
        },
      ],
      isHidden: false,
      hovered: false,
      Cart: 0,
      img_src: [
        "https://cdn-icons-png.flaticon.com/512/7020/7020787.png",
        "https://cdn-icons-png.flaticon.com/512/7020/7020788.png",
      ],
      currentSrc: 0,
    };
  },
  methods: {
    add() {
      this.Cart++;
    },

    remover() {
      if (this.Cart > 0) {
        this.Cart--;
      }
    },
  },
};
</script>

<style>
body {
  background-color: #eaeaea;
}
</style>
