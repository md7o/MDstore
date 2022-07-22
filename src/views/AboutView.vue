<template>
  <div class="about">
    <MainHeader />
    <ShopProduct />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ShopProduct from "@/components/ShopProduct.vue";
export default {
  name: "AboutView",
  components: {
    MainHeader,
    ShopProduct,
  },
};
</script>
