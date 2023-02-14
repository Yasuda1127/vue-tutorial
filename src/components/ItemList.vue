<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Items</h2>

      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a v-for="item in products" :key="item.id" class="group">
          <RouterLink :to="`/ItemDetail/${item.id}`">
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
          </RouterLink>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { Item } from "../../types/type";

export default {
  data() {
    return {
      products: "products",
      item: "item",
    };
  },
  mounted() {
    this.itemDisplay();
    this.itemDetail();
  },
  methods: {
    itemDisplay: function () {
      const vm = this;
      axios.get("http://localhost:8000/items").then((response) => {
        vm.products = response.data;
        console.log(vm.products);
      });
    },
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
// const products = [
//   {
//     id: 1,
//     name: "Earthen Bottle",
//     href: "#",
//     price: "$48",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   {
//     id: 2,
//     name: "Nomad Tumbler",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
//     imageAlt:
//       "Olive drab green insulated bottle with flared screw lid and flat top.",
//   },
//   {
//     id: 3,
//     name: "Focus Paper Refill",
//     href: "#",
//     price: "$89",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
//     imageAlt:
//       "Person using a pen to cross a task off a productivity paper card.",
//   },
//   {
//     id: 4,
//     name: "Machined Mechanical Pencil",
//     href: "#",
//     price: "$35",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//     imageAlt:
//       "Hand holding black machined steel mechanical pencil with brass tip and top.",
//   },
//   // More products...
// ];
</script>
