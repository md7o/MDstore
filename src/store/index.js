import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    counter: 0,
    users: [
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
  },
  plugins: [createPersistedState()],

  mutations: {
    add(state) {
      state.counter++;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
