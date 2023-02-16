<template>
  <a v-for="item in carts" :key="item.id" class="group">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <a>
        <img
          :src="item.imageUrl"
          class="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </a>
    </div>

    <h3 class="mt-4 text-sm text-gray-700">{{ item.name }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ item.price }}
    </p>
  </a>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      carts: "carts",
      item: "item",
      // userId: "userId",
    };
  },
  mounted() {
    this.cartItems();
  },
  methods: {
    cartItems: function () {
      const user = document.cookie;
      const userId = user.slice(3);
      console.log(userId);
      const vm = this;
      axios
        .get(`http://localhost:8000/carts/` + "?" + "userId" + "=" + userId)
        .then((response) => {
          // console.log(response);
          vm.carts = response.data;
          console.log(vm.carts);
        });
    },
  },
};
</script>
