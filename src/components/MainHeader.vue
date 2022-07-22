<template>
  <div class="header fixed top-0 bg-white w-full">
    <nav class="flex justify-between p-3">
      <img
        class="cursor-pointer"
        src="@/assets/photos/BlackHeart.png"
        width="40"
      />
      <h1 class="text-4xl">MODERN</h1>
      <router-link to="cart" class="flex text-2xl"
        ><img
          class="cursor-pointer"
          src="@/assets/photos/shopping-cart.png"
          width="40"
        />
        <div class="bg-blue-300 rounded-full px-3">
          {{ $store.state.counter }}
        </div></router-link
      >
    </nav>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.header {
}
</style>
