<template>
  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <a
            v-bind:key="item.id"
            class="h-full border-2 border-gray-800 rounded-lg overflow-hidden"
          >
            <a v-bind:href="'#' + item.id">{{ item.id }}. {{ item.name }}</a>
            <p>{{ item.content }}</p>
            <p>{{ item.description }}</p>
            <img
              v-bind:src="item.imageUrl"
              class="lg:h-48 md:h-360 w-full object-cover object-center"
              alt="blog"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from "axios";
// import { Item } from "../../types/type";

export default {
  data() {
    return {
      item: "item",
    };
  },
  mounted() {
    this.itemDetail();
  },
  methods: {
    itemDetail: function () {
      const vm = this;
      axios
        .get(`http://localhost:8000/items/${this.$route.params.id}`)
        .then((response) => {
          vm.item = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>
