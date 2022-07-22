<template>
  <div class="">
    <div class="bg-white mx-auto my-32 w-1/2 p-16">sd</div>
    <div class="grid grid-cols-4 mx-80">
      <div v-for="user in getUsers" :key="user.id">
        <!-- 1 -->
        <div class="text-center">
          <router-link to="about"
            ><img :src="require(`@/assets/photos/${user.img}`)" />

            <h1 class="text-xl text-roseBlue mb-2 hover:underline">
              {{ user.title }}
            </h1>

            <div class="text-2xl">${{ user.price / 100 }}</div></router-link
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
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    getUsers: (state) => state.users,
  }),
};
</script>

<style></style>
