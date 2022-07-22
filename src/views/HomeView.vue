<template>
  <div class="home">
    <MainHeader />
    <HelloWorld />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    MainHeader,
    HelloWorld,
  },
};
</script>

<style></style>
