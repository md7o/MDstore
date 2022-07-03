<template>
  <div class="home">
    <MainHeader />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
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
