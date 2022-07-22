<template>
  <div>
    <MainHeader />
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
          class="bg-slate-900 text-white px-5 py-2 m-3 rounded-full"
          @click="isHidden = !isHidden"
        >
          V
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
      <div class="grid grid-cols-4 justify-center">
        <div v-for="item in products" :key="item.id" class="bg-white m-4 p-5">
          <!-- 1 -->
          <div class="text-center">
            <router-link to="about"
              ><img
                class="w-96 mx-auto"
                :src="require(`@/assets/photos/${item.img}`)"
              />

              <h1 class="text-xl text-roseBlue mb-2 hover:underline">
                {{ item.title }}
              </h1>

              <div class="text-2xl">${{ item.price / 100 }}</div></router-link
            >
            <div class="row justify-end">
              <button
                @click="$store.commit('add')"
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
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      Cart: 0,
      isHidden: false,
      hovered: false,
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
      img_src: [
        "https://cdn-icons-png.flaticon.com/512/7020/7020787.png",
        "https://cdn-icons-png.flaticon.com/512/7020/7020788.png",
      ],

      currentSrc: 0,
    };
  },
  methods: {},
};
</script>

<style>
body {
  background-color: #eaeaea;
}
</style>
