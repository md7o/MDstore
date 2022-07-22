<template>
  <MainHeader />
  <ShopingCart />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ShopingCart from "@/components/ShopingCart.vue";
export default {
  name: "CartView",
  components: {
    MainHeader,
    ShopingCart,
  },
};
</script>

<style></style>
